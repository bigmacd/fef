import { Menu } from "lucide-react";
import logoUrl from "@/assets/floppy-ears-farm-logo.jpeg";

export default function FarmHeader() {
  return (
    <header className="bg-white dark:bg-[#1E1E1E] border-b border-[#E5E5E5] dark:border-[#333] sticky top-0 z-50">
      <div className="px-4 lg:px-8 py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Left - Menu */}
          <button className="flex items-center gap-2 group">
            <Menu className="w-5 h-5 text-[#111] dark:text-[#E5E5E5]" />
            <span className="font-inter text-[#111] dark:text-[#E5E5E5] text-sm uppercase tracking-wide hidden sm:block group-hover:text-[#7c5c2d] dark:group-hover:text-[#d4a574] transition-colors">
              MENU
            </span>
          </button>

          {/* Center - Logo */}
          <a
            href="/"
            className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2"
          >
            <img src={logoUrl} alt="Harvest" className="w-6 h-6" />
            <h1 className="font-inter font-normal text-[#111] dark:text-[#E5E5E5] text-2xl md:text-3xl">
              Floppy Ears Farm
            </h1>
          </a>

          {/* Right - Navigation Links */}
          <nav className="flex items-center gap-4 md:gap-6">
            <a
              href="/gallery"
              className="font-inter text-sm md:text-base text-[#111] dark:text-[#E5E5E5] uppercase tracking-wide hover:text-[#7c5c2d] dark:hover:text-[#d4a574] transition-colors"
            >
              Gallery
            </a>
            <a
              href="/products"
              className="font-inter text-sm md:text-base text-[#111] dark:text-[#E5E5E5] uppercase tracking-wide hover:text-[#7c5c2d] dark:hover:text-[#d4a574] transition-colors hidden sm:block"
            >
              Products
            </a>
            <a
              href="/markets"
              className="font-inter text-sm md:text-base text-[#111] dark:text-[#E5E5E5] uppercase tracking-wide hover:text-[#7c5c2d] dark:hover:text-[#d4a574] transition-colors hidden md:block"
            >
              Markets
            </a>
            <a
              href="/about"
              className="font-inter text-sm md:text-base text-[#111] dark:text-[#E5E5E5] uppercase tracking-wide hover:text-[#7c5c2d] dark:hover:text-[#d4a574] transition-colors hidden lg:block"
            >
              About
            </a>
          </nav>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400&family=Inter:wght@400;600&display=swap');

        .font-playfair {
          font-family: 'Playfair Display', serif;
        }

        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </header>
  );
}
