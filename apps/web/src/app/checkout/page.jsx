import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import FarmHeader from "@/components/FarmHeader";
import FarmFooter from "@/components/FarmFooter";
import { useCartStore } from "@/store/cartStore";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const items = useCartStore((state) => state.items);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const clearCart = useCartStore((state) => state.clearCart);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Customer info
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Shipping info
  const [shippingStreet, setShippingStreet] = useState("");
  const [shippingCity, setShippingCity] = useState("");
  const [shippingState, setShippingState] = useState("");
  const [shippingPostalCode, setShippingPostalCode] = useState("");
  const [shippingCountry, setShippingCountry] = useState("US");

  const total = getTotalPrice();

  // Redirect if cart is empty
  useEffect(() => {
    if (items.length === 0) {
      navigate("/cart");
    }
  }, [items.length, navigate]);

  if (items.length === 0) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Step 1: Create or find customer
      const customerResponse = await fetch("/api/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: fullName,
          email,
          phone,
          street: shippingStreet,
          city: shippingCity,
          state: shippingState,
          postal_code: shippingPostalCode,
          country: shippingCountry,
        }),
      });

      if (!customerResponse.ok) {
        const errorData = await customerResponse.json();
        throw new Error(errorData.error || "Failed to create customer");
      }

      const { customer } = await customerResponse.json();
      const customerId = customer.id;

      // Step 2: Create order
      const orderResponse = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_id: customerId,
          items: items.map((item) => ({
            product_id: item.product_id,
            quantity: item.quantity,
          })),
          shipping: {
            street: shippingStreet,
            city: shippingCity,
            state: shippingState,
            postal_code: shippingPostalCode,
            country: shippingCountry,
          },
        }),
      });

      if (!orderResponse.ok) {
        const errorData = await orderResponse.json();
        throw new Error(errorData.error || "Failed to create order");
      }

      const { order } = await orderResponse.json();

      // Clear cart and redirect to success page
      clearCart();
      navigate(`/order-confirmation/${order.order_id || order.id}`);
    } catch (err) {
      console.error("Checkout error:", err);
      setError(err.message || "An error occurred during checkout. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <FarmHeader />

      {/* Page Header */}
      <section className="bg-[#f5f3f0] dark:bg-[#1a1a1a] py-12 md:py-16 px-4 md:px-8 border-b border-[#E5E5E5] dark:border-[#333]">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-black dark:text-[#E5E5E5] mb-4">
            Checkout
          </h1>
          <p className="font-inter text-lg text-[#666] dark:text-[#B0B0B0]">
            Complete your order
          </p>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="py-12 md:py-16 lg:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Checkout Form */}
              <div className="lg:col-span-2 space-y-8">
                {/* Customer Information */}
                <div className="bg-white dark:bg-[#1E1E1E] border border-[#E5E5E5] dark:border-[#333] p-6 rounded-lg">
                  <h2 className="font-playfair text-2xl md:text-3xl text-black dark:text-[#E5E5E5] mb-6">
                    Customer Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block font-inter text-sm font-medium text-black dark:text-[#E5E5E5] mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full font-inter text-base px-4 py-2 border border-[#E5E5E5] dark:border-[#333] rounded bg-white dark:bg-[#2a2a2a] text-black dark:text-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#7c5c2d] dark:focus:ring-[#d4a574]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-inter text-sm font-medium text-black dark:text-[#E5E5E5] mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full font-inter text-base px-4 py-2 border border-[#E5E5E5] dark:border-[#333] rounded bg-white dark:bg-[#2a2a2a] text-black dark:text-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#7c5c2d] dark:focus:ring-[#d4a574]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block font-inter text-sm font-medium text-black dark:text-[#E5E5E5] mb-2"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full font-inter text-base px-4 py-2 border border-[#E5E5E5] dark:border-[#333] rounded bg-white dark:bg-[#2a2a2a] text-black dark:text-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#7c5c2d] dark:focus:ring-[#d4a574]"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-white dark:bg-[#1E1E1E] border border-[#E5E5E5] dark:border-[#333] p-6 rounded-lg">
                  <h2 className="font-playfair text-2xl md:text-3xl text-black dark:text-[#E5E5E5] mb-6">
                    Shipping Address
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="shippingStreet"
                        className="block font-inter text-sm font-medium text-black dark:text-[#E5E5E5] mb-2"
                      >
                        Street Address
                      </label>
                      <input
                        type="text"
                        id="shippingStreet"
                        value={shippingStreet}
                        onChange={(e) => setShippingStreet(e.target.value)}
                        className="w-full font-inter text-base px-4 py-2 border border-[#E5E5E5] dark:border-[#333] rounded bg-white dark:bg-[#2a2a2a] text-black dark:text-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#7c5c2d] dark:focus:ring-[#d4a574]"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="shippingCity"
                          className="block font-inter text-sm font-medium text-black dark:text-[#E5E5E5] mb-2"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          id="shippingCity"
                          value={shippingCity}
                          onChange={(e) => setShippingCity(e.target.value)}
                          className="w-full font-inter text-base px-4 py-2 border border-[#E5E5E5] dark:border-[#333] rounded bg-white dark:bg-[#2a2a2a] text-black dark:text-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#7c5c2d] dark:focus:ring-[#d4a574]"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="shippingState"
                          className="block font-inter text-sm font-medium text-black dark:text-[#E5E5E5] mb-2"
                        >
                          State
                        </label>
                        <input
                          type="text"
                          id="shippingState"
                          value={shippingState}
                          onChange={(e) => setShippingState(e.target.value)}
                          className="w-full font-inter text-base px-4 py-2 border border-[#E5E5E5] dark:border-[#333] rounded bg-white dark:bg-[#2a2a2a] text-black dark:text-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#7c5c2d] dark:focus:ring-[#d4a574]"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="shippingPostalCode"
                          className="block font-inter text-sm font-medium text-black dark:text-[#E5E5E5] mb-2"
                        >
                          Postal Code
                        </label>
                        <input
                          type="text"
                          id="shippingPostalCode"
                          value={shippingPostalCode}
                          onChange={(e) => setShippingPostalCode(e.target.value)}
                          className="w-full font-inter text-base px-4 py-2 border border-[#E5E5E5] dark:border-[#333] rounded bg-white dark:bg-[#2a2a2a] text-black dark:text-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#7c5c2d] dark:focus:ring-[#d4a574]"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="shippingCountry"
                          className="block font-inter text-sm font-medium text-black dark:text-[#E5E5E5] mb-2"
                        >
                          Country
                        </label>
                        <input
                          type="text"
                          id="shippingCountry"
                          value={shippingCountry}
                          onChange={(e) => setShippingCountry(e.target.value)}
                          className="w-full font-inter text-base px-4 py-2 border border-[#E5E5E5] dark:border-[#333] rounded bg-white dark:bg-[#2a2a2a] text-black dark:text-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#7c5c2d] dark:focus:ring-[#d4a574]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-lg">
                    <p className="font-inter text-sm text-red-600 dark:text-red-400">{error}</p>
                  </div>
                )}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white dark:bg-[#1E1E1E] border border-[#E5E5E5] dark:border-[#333] p-6 rounded-lg sticky top-24">
                  <h2 className="font-playfair text-2xl md:text-3xl text-black dark:text-[#E5E5E5] mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-4 mb-6">
                    {items.map((item) => {
                      const price = typeof item.price === 'number' ? item.price : parseFloat(item.price);
                      const lineTotal = price * item.quantity;
                      return (
                        <div key={item.product_id} className="flex justify-between font-inter text-sm text-[#666] dark:text-[#B0B0B0]">
                          <span>
                            {item.name} × {item.quantity}
                          </span>
                          <span>${lineTotal.toFixed(2)}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="space-y-4 mb-6 pt-4 border-t border-[#E5E5E5] dark:border-[#333]">
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
                    type="submit"
                    disabled={loading}
                    className="w-full font-inter text-sm md:text-base text-white bg-[#7c5c2d] hover:bg-[#6b4f25] dark:bg-[#d4a574] dark:hover:bg-[#c89664] disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 uppercase tracking-wide transition-colors"
                  >
                    {loading ? "Processing..." : "Place Order"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      <FarmFooter />
    </div>
  );
}
