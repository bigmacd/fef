import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 8080;
const STATIC_DIR = path.join(__dirname, 'build', 'client');

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

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return mimeTypes[ext] || 'application/octet-stream';
}

function formatTimestamp() {
  return new Date().toISOString();
}

function formatLog(req, res, startTime) {
  const duration = Date.now() - startTime;
  const timestamp = formatTimestamp();
  const method = req.method;
  const url = req.url;
  const statusCode = res.statusCode;
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  const userAgent = req.headers['user-agent'] || '-';

  return `${timestamp} ${method} ${url} ${statusCode} ${duration}ms - ${ip} - ${userAgent}`;
}

async function serveStatic(req, res) {
  let filePath = path.join(STATIC_DIR, req.url === '/' ? 'index.html' : req.url);

  // Security: prevent directory traversal
  filePath = path.normalize(filePath);
  if (!filePath.startsWith(STATIC_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Forbidden');
    return;
  }

  try {
    let stats = await fs.stat(filePath);

    if (stats.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
      stats = await fs.stat(filePath);
    }

    const content = await fs.readFile(filePath);
    const contentType = getMimeType(filePath);

    // Only cache static assets, not HTML
    const headers = {
      'Content-Type': contentType,
    };

    if (contentType !== 'text/html') {
      headers['Cache-Control'] = 'public, max-age=31536000, immutable';
    }

    res.writeHead(200, headers);
    res.end(content);
  } catch (error) {
    // SPA fallback: serve index.html for all GET requests that look like routes (no extension)
    if (req.method === 'GET' && !path.extname(req.url)) {
      try {
        const indexPath = path.join(STATIC_DIR, 'index.html');
        const content = await fs.readFile(indexPath);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      } catch (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
      }
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  }
}

const server = http.createServer((req, res) => {
  const startTime = Date.now();

  // Log request
  res.on('finish', () => {
    console.log(formatLog(req, res, startTime));
  });

  serveStatic(req, res);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
  console.log(`Serving static files from: ${STATIC_DIR}`);
});

