"use client";

import { useState } from "react";
import FarmHeader from "@/components/FarmHeader";
import { X } from "lucide-react";
import { galleryImages } from "./galleryImages";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageErrors, setImageErrors] = useState(new Set());

  // Handle image load errors
  const handleImageError = (imageId) => {
    setImageErrors((prev) => new Set(prev).add(imageId));
  };

  // Get fallback image URL (optional - you can use a placeholder)
  const getImageSrc = (image) => {
    if (imageErrors.has(image.id)) {
      // Fallback to a placeholder or error image
      return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23ddd" width="400" height="400"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="18" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage not available%3C/text%3E%3C/svg%3E';
    }
    return image.src;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <FarmHeader />

      {/* Page Header */}
      <section className="bg-[#f5f3f0] dark:bg-[#1a1a1a] py-12 md:py-16 px-4 md:px-8 border-b border-[#E5E5E5] dark:border-[#333]">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-black dark:text-[#E5E5E5] mb-4">
            Gallery
          </h1>
          <p className="font-inter text-lg text-[#666] dark:text-[#B0B0B0]">
            Discover the beauty of our farm through our photo collection
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-16 lg:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryImages.map((image) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group cursor-pointer text-left"
              >
                <div className="relative aspect-square mb-4 bg-white dark:bg-[#1E1E1E] overflow-hidden">
                  <img
                    src={getImageSrc(image)}
                    alt={image.alt || image.category}
                    loading="lazy"
                    decoding="async"
                    onError={() => handleImageError(image.id)}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 dark:bg-black/10 dark:group-hover:bg-black/30"></div>
                </div>
                <p className="font-inter text-sm uppercase tracking-wide text-[#7c5c2d] dark:text-[#d4a574] mb-2">
                  {image.category}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#d4a574] transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={getImageSrc(selectedImage)}
              alt={selectedImage.alt || selectedImage.category}
              loading="eager"
              onError={() => handleImageError(selectedImage.id)}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="mt-4 text-center">
              <p className="font-inter text-sm uppercase tracking-wide text-[#d4a574] mb-2">
                {selectedImage.category}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#2d2420] dark:bg-[#0A0A0A] text-white py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-inter font-medium text-xs uppercase tracking-wide text-[#b8a89a] mb-4">
                Location
              </h3>
              <p className="font-inter text-sm text-white">
                White Post, Virginia
              </p>
            </div>
            {/* <div>
              <h3 className="font-inter font-medium text-xs uppercase tracking-wide text-[#b8a89a] mb-4">
                Contact
              </h3>
              <p className="font-inter text-sm text-white">
                (555) 123-4567
                <br />
                hello@farmharvest.com
              </p>
            </div>
            <div>
              <h3 className="font-inter font-medium text-xs uppercase tracking-wide text-[#b8a89a] mb-4">
                Hours
              </h3>
              <p className="font-inter text-sm text-white">
                Mon - Fri: 8AM - 5PM
                <br />
                Sat: 9AM - 3PM
                <br />
                Sun: Closed
              </p>
            </div> */}
            <div>
              <h3 className="font-inter font-medium text-xs uppercase tracking-wide text-[#b8a89a] mb-4">
                Follow
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-white hover:text-[#d4a574] transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@floppy.ears.farm"
                  className="text-white hover:text-[#d4a574] transition-colors"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-[#443a33] mb-8"></div>

          <div className="text-center">
            <p className="font-inter text-sm text-[#b8a89a]">
              © 2025 Floppy Ears Farm. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400&family=Inter:wght@400;600;700&display=swap');

        .font-playfair {
          font-family: 'Playfair Display', serif;
        }

        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
}
