import FarmHeader from "@/components/FarmHeader";
import FarmFooter from "../components/FarmFooter";
import { ChevronDown } from "lucide-react";
import backgroundImage from "@/assets/image-4352-867E-83-0.jpeg";
import aboutImage from "@/assets/image-47D3-96DC-9A-0.jpeg";
import galleryImage from "@/assets/collage.png";
import marketsImage from "@/assets/Farmers-Market-Mahaffie-and-New-BBV-001-3204261016.jpg";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <FarmHeader />

      {/* Hero Section */}
      <section className="relative h-screen bg-white dark:bg-[#121212]">
        {/* Background Image */}

        <div className="absolute inset-0 m-[10px]">
          <img
            src={backgroundImage}
            alt="Farm landscape"
            className="w-full h-full object-cover"
            style={{ objectPosition: "50% 40%" }}
          />
          <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-top justify-center">
          <div className="text-left px-4">
            <h3 className="text-white leading-tight">
            </h3>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-6 h-6 text-white animate-bounce" />
        </div>
      </section>

      {/* About Preview Section */}
      <section className="bg-white dark:bg-[#121212] py-12 md:py-16 lg:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            <div className="lg:pr-4 xl:pr-8">
              <h2 className="font-inter text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-black dark:text-[#E5E5E5] mb-6 md:mb-8">
                Experience the <em className="italic">freshness</em> of{" "}
                <em className="italic">local farming</em>
              </h2>
              <p className="font-inter text-lg text-[#555] dark:text-[#B0B0B0] mb-8 leading-relaxed">
                From our family farm to your table. We grow the finest fresh
                eggs and baked goods with care and passion. Discover the
                difference that love and dedication make.
              </p>
              <a
                href="/about"
                className="inline-block font-inter text-sm md:text-base text-white bg-[#7c5c2d] hover:bg-[#6b4f25] dark:bg-[#d4a574] dark:hover:bg-[#c89664] px-8 py-3 uppercase tracking-wide transition-colors"
              >
                Learn Our Story
              </a>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src={aboutImage}
                  alt="Farm fresh eggs"
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-transparent dark:bg-black/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="bg-[#f5f3f0] dark:bg-[#1a1a1a] py-12 md:py-16 lg:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-inter text-3xl md:text-4xl lg:text-5xl text-center text-black dark:text-[#E5E5E5] mb-12 md:mb-16">
            Explore Our Farm
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Gallery Card */}
            <a href="/gallery" className="group cursor-pointer">
              <div className="relative aspect-square mb-4 bg-white dark:bg-[#1E1E1E] overflow-hidden">
                <img
                  src={galleryImage}
                  alt="Farm gallery"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-transparent dark:bg-black/10"></div>
              </div>
              <h3 className="font-playfair text-2xl md:text-3xl text-black dark:text-[#E5E5E5] mb-2 group-hover:text-[#7c5c2d] dark:group-hover:text-[#d4a574] transition-colors">
                Gallery
              </h3>
              <p className="font-inter text-[#666] dark:text-[#B0B0B0]">
                See the beauty of our farm through our photos
              </p>
            </a>

            {/* Products Card */}
            <a href="/products" className="group cursor-pointer">
              <div className="relative aspect-square mb-4 bg-white dark:bg-[#1E1E1E] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/227432/pexels-photo-227432.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                  alt="Farm products"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-transparent dark:bg-black/10"></div>
              </div>
              <h3 className="font-playfair text-2xl md:text-3xl text-black dark:text-[#E5E5E5] mb-2 group-hover:text-[#7c5c2d] dark:group-hover:text-[#d4a574] transition-colors">
                Products
              </h3>
              <p className="font-inter text-[#666] dark:text-[#B0B0B0]">
                Fresh eggs and baked goods available now
              </p>
            </a>

            {/* Markets Card */}
            <a href="/markets" className="group cursor-pointer">
              <div className="relative aspect-square mb-4 bg-white dark:bg-[#1E1E1E] overflow-hidden">
                <img
                  src={marketsImage}
                  alt="Farmers market"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-transparent dark:bg-black/10"></div>
              </div>
              <h3 className="font-playfair text-2xl md:text-3xl text-black dark:text-[#E5E5E5] mb-2 group-hover:text-[#7c5c2d] dark:group-hover:text-[#d4a574] transition-colors">
                Markets
              </h3>
              <p className="font-inter text-[#666] dark:text-[#B0B0B0]">
                Find us at local farmer's markets
              </p>
            </a>
          </div>
        </div>
      </section>

      < FarmFooter />

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400&family=Inter:wght@100;200;300;400;500;600;700&display=swap');

        .font-playfair {
          font-family: 'Playfair Display', serif;
        }

        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </div>
  );
}
