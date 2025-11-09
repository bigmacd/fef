import { Pool } from 'pg';
import util from 'node:util';

// Reuse node-postgres pool (reads DATABASE_URL from env)
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Create or find customer by email
export async function POST(request) {
  console.log('API: /api/customers POST received');
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

  const { full_name, email, phone, street, city, state, postal_code, country } = body || {};

  if (!full_name || !email) {
    return new Response(JSON.stringify({ error: 'Missing required fields: full_name and email' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    // First, try to find existing customer by email
    const existingCustomer = await pool.query(
      'SELECT id, full_name, email, phone, street, city, state, postal_code, country FROM customers WHERE email = $1',
      [email]
    );

    if (existingCustomer.rows.length > 0) {
      // Update customer info if provided
      const customer = existingCustomer.rows[0];
      const updateFields = [];
      const updateValues = [];

      if (full_name && full_name !== customer.full_name) {
        updateFields.push(`full_name = $${updateValues.length + 1}`);
        updateValues.push(full_name);
      }
      if (phone && phone !== customer.phone) {
        updateFields.push(`phone = $${updateValues.length + 1}`);
        updateValues.push(phone);
      }
      if (street && street !== customer.street) {
        updateFields.push(`street = $${updateValues.length + 1}`);
        updateValues.push(street);
      }
      if (city && city !== customer.city) {
        updateFields.push(`city = $${updateValues.length + 1}`);
        updateValues.push(city);
      }
      if (state && state !== customer.state) {
        updateFields.push(`state = $${updateValues.length + 1}`);
        updateValues.push(state);
      }
      if (postal_code && postal_code !== customer.postal_code) {
        updateFields.push(`postal_code = $${updateValues.length + 1}`);
        updateValues.push(postal_code);
      }
      if (country && country !== customer.country) {
        updateFields.push(`country = $${updateValues.length + 1}`);
        updateValues.push(country);
      }

      if (updateFields.length > 0) {
        // Add email as the last parameter for WHERE clause
        updateValues.push(email);
        await pool.query(
          `UPDATE customers SET ${updateFields.join(', ')} WHERE email = $${updateValues.length}`,
          updateValues
        );
        // Fetch updated customer
        const updated = await pool.query(
          'SELECT id, full_name, email, phone, street, city, state, postal_code, country FROM customers WHERE email = $1',
          [email]
        );
        return new Response(JSON.stringify({ customer: updated.rows[0] }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      return new Response(JSON.stringify({ customer }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Create new customer
    const insertResult = await pool.query(
      `INSERT INTO customers (full_name, email, phone, street, city, state, postal_code, country)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING id, full_name, email, phone, street, city, state, postal_code, country`,
      [full_name, email, phone || null, street || null, city || null, state || null, postal_code || null, country || 'US']
    );

    return new Response(JSON.stringify({ customer: insertResult.rows[0] }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('API /api/customers error:', err);
    const inspected = util.inspect(err, { depth: null, compact: false });
    return new Response(JSON.stringify({ error: err.message, inspected }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
