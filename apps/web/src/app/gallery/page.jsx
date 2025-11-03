"use client";

import { useState } from "react";
import FarmHeader from "@/components/FarmHeader";
import { X } from "lucide-react";

import image1 from "@/assets/image-4044-AF89-7C-0.jpeg";
import image2 from "@/assets/image-40DB-B49F-33-0.jpeg";
import image3 from "@/assets/image-4149-A289-EC-0.jpeg";
import image4 from "@/assets/image-4187-A79E-6A-0.jpeg";
import image5 from "@/assets/image-4254-8D81-E4-0.jpeg";
import image6 from "@/assets/image-428B-A0B0-49-0.jpeg";
import image7 from "@/assets/image-4352-867E-83-0.jpeg";
import image8 from "@/assets/image-43E2-957E-01-0.jpeg";
import image9 from "@/assets/image-43F1-9F22-FA-0.jpeg";
import image10 from "@/assets/image-440B-96B0-A9-0.jpeg";
import image11 from "@/assets/image-4504-B5EC-11-0.jpeg";
import image12 from "@/assets/image-4509-80B8-E2-0.jpeg";
import image13 from "@/assets/image-46DA-B8D7-B4-0.jpeg";
import image14 from "@/assets/image-4733-ACF1-17-0.jpeg";
import image15 from "@/assets/image-47BE-85D9-F7-0.jpeg";
import image16 from "@/assets/image-47D3-96DC-9A-0.jpeg";
import image17 from "@/assets/image-48C6-8B6E-C4-0.jpeg";
import image18 from "@/assets/image-49A2-9A70-AE-0.jpeg";
import image19 from "@/assets/image-4B22-9579-F3-0.jpeg";
import image20 from "@/assets/image-4B87-BE59-8C-0.jpeg";
import image21 from "@/assets/image-4BC3-ACF1-2E-0.jpeg";
import image22 from "@/assets/image-4C33-96BE-0E-0.jpeg";
import image23 from "@/assets/image-4C42-8DF4-B5-0.jpeg";
import image24 from "@/assets/image-4DE9-B7FD-93-0.jpeg";
import image25 from "@/assets/image-4EFD-91BF-0A-0.jpeg";
import image26 from "@/assets/image-4F5D-BE65-47-0.jpeg";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: image1,
      category: "Farm Life",
    },
    {
      id: 2,
      src: image2,
      category: "Products",
    },
    {
      id: 3,
      src: image3,
      category: "Farm Helpers",
    },
    {
      id: 4,
      src: image4,
      category: "Fresh baked goods",
    },
    {
      id: 5,
      src: image5,
      category: "Troublemaker",
    },
    {
      id: 6,
      src: image6,
      category: "Eggs!",
    },
    {
      id: 7,
      src: image7,
      category: "Donkeys",
    },
    {
      id: 8,
      src: image8,
      category: "Babies!",
    },
    {
      id: 9,
      src: image9,
      category: "More Troublemakers",
    },
    {
        id: 10,
        src: image10,
        category: "Party Time!",
      },
      {
        id: 11,
        src: image11,
        category: "Markets",
      },
      {
        id: 12,
        src: image12,
        category: "Big Girl",
      },
      {
        id: 13,
        src: image13,
        category: "Donkey Love",
      },
      {
        id: 14,
        src: image14,
        category: "Silkies!",
      },
      {
        id: 15,
        src: image15,
        category: "No words needed",
      },
      {
        id: 16,
        src: image16,
        category: "Hungry babies",
      },
      {
        id: 17,
        src: image17,
        category: "Handsome",
      },
      {
        id: 18,
        src: image18,
        category: "Another Helper",
      },
      {
        id: 19,
        src: image19,
        category: "Fun Times",
      },
      {
        id: 20,
        src: image20,
        category: "Garden Work",
      },
      {
        id: 21,
        src: image21,
        category: "Cuties",
      },
      {
        id: 22,
        src: image22,
        category: "Amazing Girls",
      },
      {
        id: 23,
        src: image23,
        category: "Goat Kisses",
      },
      {
        id: 24,
        src: image24,
        category: "No Words Work Here",
      },
      {
        id: 25,
        src: image25,
        category: "Proprietors",
      },
      {
        id: 26,
        src: image26,
        category: "Hangin' in the sun",
      },
 ];

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
                    src={image.src}
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
              src={selectedImage.src}
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
                  href="#"
                  className="text-white hover:text-[#d4a574] transition-colors"
                >
                  Facebook
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
