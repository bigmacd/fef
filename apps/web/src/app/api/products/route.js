import { Pool } from 'pg';
import util from 'node:util';


// Use node-postgres Pool for local Postgres connections. Reads DATABASE_URL from env.
const dbUrl = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: dbUrl,
  // Add some debugging options
  connectionTimeoutMillis: 5000,
  query_timeout: 5000,
});

// Add error handler for pool errors
pool.on('error', (err) => {
  console.error('API: Unexpected error on idle client', err);
});

export async function GET(request) {

  // Basic DB-backed example: return database server time and optionally rows
  if (!dbUrl) {
    console.error('API: No DATABASE_URL configured');
    return new Response(JSON.stringify({ error: 'DATABASE_URL not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {

    // Try a lightweight query first. If a 'products' table exists, return some rows.
    const checkProducts = await pool.query(
      "SELECT to_regclass('products') as products_table"
    );

    const hasProducts = checkProducts.rows[0] && checkProducts.rows[0].products_table;

    if (hasProducts) {
      const rows = await pool.query('SELECT id, name, price, description, image FROM products LIMIT 50');
      return new Response(JSON.stringify({ rows: rows.rows }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const now = await pool.query('SELECT now() as now');
    return new Response(JSON.stringify({ now: now.rows[0].now }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('API Error:', error.message);
    console.error('Error details:', {
      code: error.code,
      detail: error.detail,
      hint: error.hint,
      where: error.where
    });
    return new Response(JSON.stringify({
      error: 'Database error',
      message: error.message,
      code: error.code
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
    // Log the full error to the server console and return an inspected string
    console.error('DB route error:', err);
    const inspected = util.inspect(err, { depth: null, compact: false });
    const message = err && err.message ? err.message : String(err);
    const stack = err && err.stack ? err.stack : null;
    return new Response(JSON.stringify({ error: message, stack, inspected }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
