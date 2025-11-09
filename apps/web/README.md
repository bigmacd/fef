# Local Development

cd apps/web

## build and run the app

npm install
npm run build
node --env-file=.env.local build/server/index.js

## build container image

docker build $(cat .env.local | sed 's/^/--build-arg /') . -t fef
docker run --name fef -p 8080:8080 fef

testing with local database (also running in docker):
    docker run --name fef -p 8080:8080 --add-host=host.docker.internal:host-gateway fef

## Summary

### What was implemented

1. Cart state management (`src/store/cartStore.js`)
   - Zustand store for cart state
   - Persists to localStorage
   - Add, remove, update quantity, clear cart
   - Total price and item count

2. Product page updates (`src/components/ProductList.jsx`)
   - "Add to Cart" buttons on each product
   - Integrates with cart store

3. Header cart icon (`src/components/FarmHeader.jsx`)
   - Shopping cart icon with item count badge
   - Links to cart page
   - Updates in real time

4. Cart page (`src/app/cart/page.jsx`)
   - View all cart items
   - Quantity controls (increase/decrease)
   - Remove items
   - Order summary with totals
   - Empty cart state
   - "Proceed to Checkout" button

5. Checkout page (`src/app/checkout/page.jsx`)
   - Customer information form
   - Shipping address form
   - Order summary
   - Form validation
   - Error handling

6. Customer API (`src/app/api/customers/route.js`)
   - Creates or finds customer by email
   - Updates customer info if exists
   - Returns customer ID for order creation

7. Order confirmation page (`src/app/order-confirmation/[orderId]/page.jsx`)
   - Shows order confirmation
   - Displays order ID
   - Links to continue shopping

### How it works

1. User browses products → clicks "Add to Cart"
2. Items stored in Zustand store + localStorage
3. Cart icon shows item count in header
4. User clicks cart icon → views cart page
5. User adjusts quantities or removes items
6. User clicks "Proceed to Checkout"
7. User fills customer and shipping info
8. On submit:
   - Creates/finds customer via `/api/customers`
   - Creates order via `/api/orders`
   - Clears cart
   - Redirects to confirmation page

### Features

- Persistent cart (localStorage)
- Real-time updates
- Responsive design
- Dark mode support
- Error handling
- Form validation
- Customer lookup/creation
- Order tracking

### Next steps (optional enhancements)

- Payment integration (Stripe is already installed)
- Order history page
- Email notifications
- Inventory management
- Discount codes
- Shipping cost calculation

Ready to test. Run the dev server and add products to the cart.
