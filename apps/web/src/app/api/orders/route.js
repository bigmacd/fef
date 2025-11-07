import { Pool } from 'pg';
import util from 'node:util';

// Reuse node-postgres pool (reads DATABASE_URL from env)
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export async function POST(request) {
  console.log('API: /api/orders POST received');
  if (!process.env.DATABASE_URL) {
    console.log('API: No DATABASE_URL configured');
    return new Response(JSON.stringify({ error: 'DATABASE_URL not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let body;
  try {
    body = await request.json();
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { customer_id, items, shipping } = body || {};
  if (!customer_id || !Array.isArray(items) || items.length === 0) {
    return new Response(JSON.stringify({ error: 'Missing required fields: customer_id and items[]' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const orderInsertText = `
      INSERT INTO orders(
        customer_id, status, shipping_street, shipping_city, shipping_state, shipping_postal_code, shipping_country
      ) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id
    `;
    const orderRes = await client.query(orderInsertText, [
      customer_id,
      'pending',
      shipping?.street || null,
      shipping?.city || null,
      shipping?.state || null,
      shipping?.postal_code || null,
      shipping?.country || null,
    ]);

    const orderId = orderRes.rows[0].id;
    const inserted = [];

    for (const it of items) {
      const productId = it.product_id;
      const qty = Number.isFinite(Number(it.quantity)) ? parseInt(it.quantity, 10) : 1;

      // Fetch current product price as snapshot
      const prod = await client.query('SELECT id, price FROM products WHERE id = $1', [productId]);
      if (prod.rowCount === 0) {
        throw new Error(`Product ${productId} not found`);
      }
      const unitPrice = prod.rows[0].price;

      await client.query(
        'INSERT INTO order_items(order_id, product_id, quantity, unit_price) VALUES($1,$2,$3,$4)',
        [orderId, productId, qty, unitPrice]
      );

      inserted.push({ product_id: productId, quantity: qty, unit_price: unitPrice });
    }

    // commit; trigger will refresh orders.total_amount
    await client.query('COMMIT');

    // Return the created order (use the view if available)
    const orderView = await client.query('SELECT * FROM orders_with_items WHERE order_id = $1', [orderId]);
    const payload = orderView.rows[0] || { order_id: orderId, items: inserted };

    return new Response(JSON.stringify({ order: payload }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    await client.query('ROLLBACK').catch(() => {});
    console.error('API /api/orders error:', err);
    const inspected = util.inspect(err, { depth: null, compact: false });
    return new Response(JSON.stringify({ error: err.message, inspected }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  } finally {
    client.release();
  }
}
