import { Link, useNavigate } from "react-router";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import FarmHeader from "@/components/FarmHeader";
import FarmFooter from "@/components/FarmFooter";
import { useCartStore } from "@/store/cartStore";

export default function CartPage() {
  const navigate = useNavigate();
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const clearCart = useCartStore((state) => state.clearCart);

  const total = getTotalPrice();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#121212]">
        <FarmHeader />
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="text-center">
            <ShoppingBag className="w-24 h-24 mx-auto text-[#7c5c2d] dark:text-[#d4a574] mb-6 opacity-50" />
            <h1 className="font-playfair text-4xl md:text-5xl text-black dark:text-[#E5E5E5] mb-4">
              Your Cart is Empty
            </h1>
            <p className="font-inter text-lg text-[#666] dark:text-[#B0B0B0] mb-8">
              Start adding some products to your cart!
            </p>
            <Link
              to="/products"
              className="inline-block font-inter text-sm md:text-base text-white bg-[#7c5c2d] hover:bg-[#6b4f25] dark:bg-[#d4a574] dark:hover:bg-[#c89664] px-8 py-3 uppercase tracking-wide transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
        <FarmFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <FarmHeader />

      {/* Page Header */}
      <section className="bg-[#f5f3f0] dark:bg-[#1a1a1a] py-12 md:py-16 px-4 md:px-8 border-b border-[#E5E5E5] dark:border-[#333]">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-black dark:text-[#E5E5E5] mb-4">
            Shopping Cart
          </h1>
          <p className="font-inter text-lg text-[#666] dark:text-[#B0B0B0]">
            {items.reduce((sum, item) => sum + item.quantity, 0)} item{items.reduce((sum, item) => sum + item.quantity, 0) !== 1 ? 's' : ''} in your cart
          </p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-12 md:py-16 lg:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {items.map((item) => {
                  const price = typeof item.price === 'number' ? item.price : parseFloat(item.price);
                  const lineTotal = price * item.quantity;

                  return (
                    <div
                      key={item.product_id}
                      className="bg-white dark:bg-[#1E1E1E] border border-[#E5E5E5] dark:border-[#333] p-6 rounded-lg"
                    >
                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* Product Image */}
                        {item.image && (
                          <div className="w-full sm:w-32 h-32 flex-shrink-0 bg-white dark:bg-[#1E1E1E] overflow-hidden rounded">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}

                        {/* Product Details */}
                        <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="font-playfair text-2xl md:text-3xl text-black dark:text-[#E5E5E5] mb-2">
                              {item.name}
                            </h3>
                            <p className="font-inter text-lg font-semibold text-[#7c5c2d] dark:text-[#d4a574] mb-4">
                              ${price.toFixed(2)}
                            </p>
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 border border-[#E5E5E5] dark:border-[#333] rounded">
                              <button
                                onClick={() => updateQuantity(item.product_id, item.quantity - 1)}
                                className="p-2 hover:bg-[#f5f3f0] dark:hover:bg-[#2a2a2a] transition-colors"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="font-inter text-base text-black dark:text-[#E5E5E5] px-4 min-w-[3rem] text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.product_id, item.quantity + 1)}
                                className="p-2 hover:bg-[#f5f3f0] dark:hover:bg-[#2a2a2a] transition-colors"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>

                            {/* Remove Button */}
                            <button
                              onClick={() => removeItem(item.product_id)}
                              className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Line Total */}
                      <div className="mt-4 pt-4 border-t border-[#E5E5E5] dark:border-[#333] flex justify-end">
                        <p className="font-inter text-lg font-semibold text-black dark:text-[#E5E5E5]">
                          ${lineTotal.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Clear Cart Button */}
              <div className="mt-6">
                <button
                  onClick={() => {
                    if (confirm('Are you sure you want to clear your cart?')) {
                      clearCart();
                    }
                  }}
                  className="font-inter text-sm text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 uppercase tracking-wide transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-[#1E1E1E] border border-[#E5E5E5] dark:border-[#333] p-6 rounded-lg sticky top-24">
                <h2 className="font-playfair text-2xl md:text-3xl text-black dark:text-[#E5E5E5] mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between font-inter text-base text-[#666] dark:text-[#B0B0B0]">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-inter text-base text-[#666] dark:text-[#B0B0B0]">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="pt-4 border-t border-[#E5E5E5] dark:border-[#333] flex justify-between font-inter text-xl font-semibold text-black dark:text-[#E5E5E5]">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/checkout')}
                  className="w-full font-inter text-sm md:text-base text-white bg-[#7c5c2d] hover:bg-[#6b4f25] dark:bg-[#d4a574] dark:hover:bg-[#c89664] px-6 py-3 uppercase tracking-wide transition-colors"
                >
                  Proceed to Checkout
                </button>

                <Link
                  to="/products"
                  className="block mt-4 text-center font-inter text-sm text-[#7c5c2d] dark:text-[#d4a574] hover:underline"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FarmFooter />
    </div>
  );
}
