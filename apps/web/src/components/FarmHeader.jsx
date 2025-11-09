import { Menu, ShoppingCart } from "lucide-react";
import { Link } from "react-router";
import logoUrl from "@/assets/floppy-ears-farm-logo.jpeg";
import { useCartStore } from "@/store/cartStore";

export default function FarmHeader() {
  const itemCount = useCartStore((state) => state.getItemCount());

  return (
    <header className="bg-white dark:bg-[#1E1E1E] border-b border-[#E5E5E5] dark:border-[#333] sticky top-0 z-50">
      <div className="px-4 lg:px-8 py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Left - Home */}
            <a
              href="/"
              className="font-inter text-sm md:text-base text-[#111] dark:text-[#E5E5E5] uppercase tracking-wide hover:text-[#7c5c2d] dark:hover:text-[#d4a574] transition-colors"
            >
              Home
            </a>

          {/* Center - Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2"
          >
            <img src={logoUrl} alt="Harvest" className="w-6 h-6" />
            <h1 className="font-inter font-normal text-[#111] dark:text-[#E5E5E5] text-2xl md:text-3xl">
              Floppy Ears Farm
            </h1>
          </Link>

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
            {/* <Link
              to="/cart"
              className="relative flex items-center justify-center w-10 h-10 text-[#111] dark:text-[#E5E5E5] hover:text-[#7c5c2d] dark:hover:text-[#d4a574] transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#7c5c2d] dark:bg-[#d4a574] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount > 99 ? '99+' : itemCount}
                </span>
              )}
            </Link> */}
          </nav>
        </div>
      </div>

    </header>
  );
}
