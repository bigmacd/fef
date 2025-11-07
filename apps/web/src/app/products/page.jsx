import FarmHeader from "@/components/FarmHeader";
import FarmFooter from "../../components/FarmFooter";
import { ProductList } from "@/components/ProductList";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <FarmHeader />

      {/* Page Header */}
      <section className="bg-[#f5f3f0] dark:bg-[#1a1a1a] py-12 md:py-16 px-4 md:px-8 border-b border-[#E5E5E5] dark:border-[#333]">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-black dark:text-[#E5E5E5] mb-4">
            Our Products
          </h1>
          <p className="font-inter text-lg text-[#666] dark:text-[#B0B0B0]">
            Fresh, farm-made goodness delivered straight to you
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 md:py-16 lg:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <ProductList />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#7c5c2d] dark:bg-[#d4a574] py-12 md:py-16 lg:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white dark:text-black mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="font-inter text-lg text-white dark:text-black opacity-90 mb-8">
            We offer seasonal products and custom orders. Get in touch to learn
            about availability and special requests.
          </p>
          <button className="font-inter text-sm md:text-base text-[#7c5c2d] dark:text-[#d4a574] bg-white hover:bg-[#f5f3f0] px-8 py-3 uppercase tracking-wide transition-colors">
            Contact Us
          </button>
        </div>
      </section>

      < FarmFooter />
    </div>
  );
}
