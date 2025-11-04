import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 8080;
const STATIC_DIR = path.join(__dirname, 'build', 'client');
const LOG_LEVEL = process.env.LOG_LEVEL || 'info'; // debug, info, warn, error

// MIME types
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
};

// Log levels
const LOG_LEVELS = { debug: 0, info: 1, warn: 2, error: 3 };
const currentLogLevel = LOG_LEVELS[LOG_LEVEL] || LOG_LEVELS.info;

function shouldLog(level) {
  return LOG_LEVELS[level] >= currentLogLevel;
}

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return mimeTypes[ext] || 'application/octet-stream';
}

function formatTimestamp() {
  return new Date().toISOString();
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

function log(level, message, data = null) {
  if (!shouldLog(level)) return;

  const timestamp = formatTimestamp();
  const levelUpper = level.toUpperCase().padEnd(5);
  let logMessage = `[${timestamp}] [${levelUpper}] ${message}`;

  if (data && shouldLog('debug')) {
    logMessage += '\n' + JSON.stringify(data, null, 2);
  }

  console.log(logMessage);
}

function formatLog(req, res, startTime, fileSize = null, contentType = null) {
  const duration = Date.now() - startTime;
  const timestamp = formatTimestamp();
  const method = req.method.padEnd(7);
  const url = req.url;
  const statusCode = res.statusCode;
  const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress || 'unknown';
  const userAgent = req.headers['user-agent'] || '-';
  const referer = req.headers['referer'] || '-';
  const contentLength = res.getHeader('content-length') || fileSize || '-';
  const sizeStr = contentLength !== '-' ? formatBytes(parseInt(contentLength)) : '-';
  const mimeType = contentType || res.getHeader('content-type') || '-';

  // Status code color coding (basic)
  const statusColor = statusCode >= 500 ? '❌' : statusCode >= 400 ? '⚠️' : statusCode >= 300 ? '↩️' : '✅';

  let logLine = `${statusColor} [${timestamp}] ${method} ${url} ${statusCode} ${duration}ms ${sizeStr} - ${ip}`;

  if (shouldLog('debug')) {
    logLine += `\n  Content-Type: ${mimeType}`;
    logLine += `\n  Referer: ${referer}`;
    logLine += `\n  User-Agent: ${userAgent}`;
    if (Object.keys(req.headers).length > 0) {
      logLine += `\n  Headers: ${JSON.stringify(req.headers, null, 2)}`;
    }
  } else {
    // Shortened user agent for info level
    const shortUA = userAgent.length > 50 ? userAgent.substring(0, 50) + '...' : userAgent;
    logLine += ` - ${shortUA}`;
  }

  return logLine;
}

async function serveStatic(req, res) {
  const requestStartTime = Date.now();
  let filePath = path.join(STATIC_DIR, req.url === '/' ? 'index.html' : req.url);
  const originalPath = filePath;

  log('debug', `Attempting to serve: ${req.url}`, {
    requestedPath: req.url,
    resolvedPath: filePath,
    method: req.method,
  });

  // Security: prevent directory traversal
  filePath = path.normalize(filePath);
  if (!filePath.startsWith(STATIC_DIR)) {
    log('warn', `Directory traversal attempt blocked`, {
      requestedPath: req.url,
      resolvedPath: filePath,
      ip: req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress,
    });
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Forbidden');
    return;
  }

  try {
    let stats = await fs.stat(filePath);
    const fileSize = stats.size;

    if (stats.isDirectory()) {
      log('debug', `Requested path is directory, serving index.html`, { path: filePath });
      filePath = path.join(filePath, 'index.html');
      stats = await fs.stat(filePath);
    }

    const readStartTime = Date.now();
    const content = await fs.readFile(filePath);
    const readDuration = Date.now() - readStartTime;
    const contentType = getMimeType(filePath);

    log('debug', `File read successful`, {
      file: path.relative(STATIC_DIR, filePath),
      size: formatBytes(fileSize),
      readDuration: `${readDuration}ms`,
      contentType,
    });

    // Only cache static assets, not HTML
    const headers = {
      'Content-Type': contentType,
      'Content-Length': fileSize.toString(),
    };

    if (contentType !== 'text/html') {
      headers['Cache-Control'] = 'public, max-age=31536000, immutable';
    }

    res.writeHead(200, headers);
    res.end(content);

    // Store file info for logging
    res._fileSize = fileSize;
    res._contentType = contentType;
  } catch (error) {
    // SPA fallback: serve index.html for all GET requests that look like routes (no extension)
    if (req.method === 'GET' && !path.extname(req.url)) {
      log('debug', `SPA fallback: serving index.html for route`, { url: req.url });
      try {
        const indexPath = path.join(STATIC_DIR, 'index.html');
        const stats = await fs.stat(indexPath);
        const content = await fs.readFile(indexPath);
        const fileSize = stats.size;
        res.writeHead(200, {
          'Content-Type': 'text/html',
          'Content-Length': fileSize.toString(),
        });
        res.end(content);
        res._fileSize = fileSize;
        res._contentType = 'text/html';
      } catch (err) {
        log('error', `Failed to serve index.html in SPA fallback`, {
          error: err.message,
          stack: err.stack,
          url: req.url,
        });
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
      }
    } else {
      log('warn', `File not found`, {
        requestedPath: req.url,
        resolvedPath: originalPath,
        error: error.message,
      });
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  }
}

const server = http.createServer((req, res) => {
  const startTime = Date.now();

  // Log request start
  log('debug', `Incoming request`, {
    method: req.method,
    url: req.url,
    headers: req.headers,
  });

  // Handle errors
  req.on('error', (error) => {
    log('error', `Request error`, {
      error: error.message,
      stack: error.stack,
      url: req.url,
    });
  });

  res.on('error', (error) => {
    log('error', `Response error`, {
      error: error.message,
      stack: error.stack,
      url: req.url,
      statusCode: res.statusCode,
    });
  });

  // Log request completion
  res.on('finish', () => {
    const fileSize = res._fileSize || null;
    const contentType = res._contentType || null;
    console.log(formatLog(req, res, startTime, fileSize, contentType));

    // Log slow requests
    const duration = Date.now() - startTime;
    if (duration > 1000) {
      log('warn', `Slow request detected`, {
        url: req.url,
        duration: `${duration}ms`,
        statusCode: res.statusCode,
      });
    }
  });

  serveStatic(req, res);
});

// Handle server errors
server.on('error', (error) => {
  log('error', `Server error`, {
    error: error.message,
    stack: error.stack,
    code: error.code,
  });
  process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  log('error', `Uncaught exception`, {
    error: error.message,
    stack: error.stack,
  });
  process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  log('error', `Unhandled promise rejection`, {
    reason: reason instanceof Error ? reason.message : String(reason),
    stack: reason instanceof Error ? reason.stack : undefined,
  });
});

server.listen(PORT, '0.0.0.0', () => {
  log('info', `Server started successfully`, {
    port: PORT,
    staticDir: STATIC_DIR,
    nodeVersion: process.version,
    platform: process.platform,
    logLevel: LOG_LEVEL,
  });
  console.log(`\n🚀 Server running on http://0.0.0.0:${PORT}`);
  console.log(`📁 Serving static files from: ${STATIC_DIR}`);
  console.log(`📊 Log level: ${LOG_LEVEL}`);
  console.log(`\nPress Ctrl+C to stop the server\n`);
});

