import { useParams, Link } from "react-router";
import { CheckCircle } from "lucide-react";
import FarmHeader from "@/components/FarmHeader";
import FarmFooter from "@/components/FarmFooter";

export default function OrderConfirmationPage() {
  const { orderId } = useParams();

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <FarmHeader />

      {/* Page Header */}
      <section className="bg-[#f5f3f0] dark:bg-[#1a1a1a] py-12 md:py-16 px-4 md:px-8 border-b border-[#E5E5E5] dark:border-[#333]">
        <div className="max-w-4xl mx-auto text-center">
          <CheckCircle className="w-24 h-24 mx-auto text-green-600 dark:text-green-400 mb-6" />
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-black dark:text-[#E5E5E5] mb-4">
            Order Confirmed!
          </h1>
          <p className="font-inter text-lg text-[#666] dark:text-[#B0B0B0]">
            Thank you for your order
          </p>
        </div>
      </section>

      {/* Confirmation Content */}
      <section className="py-12 md:py-16 lg:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-[#1E1E1E] border border-[#E5E5E5] dark:border-[#333] p-8 rounded-lg text-center">
            <p className="font-inter text-lg text-[#666] dark:text-[#B0B0B0] mb-2">
              Your order has been successfully placed.
            </p>
            <p className="font-inter text-base text-[#666] dark:text-[#B0B0B0] mb-8">
              Order ID: <span className="font-semibold text-black dark:text-[#E5E5E5]">{orderId}</span>
            </p>
            <p className="font-inter text-base text-[#666] dark:text-[#B0B0B0] mb-8">
              You will receive a confirmation email shortly with your order details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="font-inter text-sm md:text-base text-white bg-[#7c5c2d] hover:bg-[#6b4f25] dark:bg-[#d4a574] dark:hover:bg-[#c89664] px-8 py-3 uppercase tracking-wide transition-colors"
              >
                Continue Shopping
              </Link>
              <Link
                to="/"
                className="font-inter text-sm md:text-base text-[#7c5c2d] dark:text-[#d4a574] hover:underline px-8 py-3 uppercase tracking-wide transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FarmFooter />
    </div>
  );
}
