/**
 * Gallery Images Configuration
 *
 * This file contains the gallery image metadata.
 * Image files are served from the assets/gallery directory (public/assets/gallery/).
 *
 * Place your gallery images in: public/assets/gallery/
 * Use filenames: 1.jpg, 2.jpg, 3.jpg, ... (or .jpeg) to match the ids below.
 */

const ASSETS_BASE = "/assets/gallery";

/**
 * Gallery images configuration
 * Each image object contains:
 * - id: Unique identifier
 * - src: Path to image in assets/gallery
 * - category: Image category for filtering/grouping
 * - alt: Optional alt text for accessibility
 */
export const galleryImages = [
  { id: 1, src: `${ASSETS_BASE}/1.jpg`, category: "Farm Life", alt: "Farm landscape view" },
  { id: 2, src: `${ASSETS_BASE}/2.jpg`, category: "Products", alt: "Fresh farm eggs" },
  { id: 3, src: `${ASSETS_BASE}/3.jpg`, category: "Farm Helpers", alt: "Farm helpers" },
  { id: 4, src: `${ASSETS_BASE}/4.jpg`, category: "Fresh baked goods", alt: "Fresh baked goods" },
  { id: 5, src: `${ASSETS_BASE}/5.jpeg`, category: "Troublemaker", alt: "Troublemaker" },
  { id: 6, src: `${ASSETS_BASE}/6.jpeg`, category: "Eggs!", alt: "Fresh eggs" },
  { id: 7, src: `${ASSETS_BASE}/7.jpeg`, category: "Donkeys", alt: "Donkeys" },
  { id: 8, src: `${ASSETS_BASE}/8.jpeg`, category: "Babies!", alt: "Farm babies" },
  { id: 9, src: `${ASSETS_BASE}/9.jpeg`, category: "More Troublemakers", alt: "More troublemakers" },
  { id: 10, src: `${ASSETS_BASE}/10.jpeg`, category: "Party Time!", alt: "Party time" },
  { id: 11, src: `${ASSETS_BASE}/11.jpeg`, category: "Markets", alt: "Farmers market" },
  { id: 12, src: `${ASSETS_BASE}/12.jpeg`, category: "Big Girl", alt: "Big girl" },
  { id: 13, src: `${ASSETS_BASE}/13.jpeg`, category: "Donkey Love", alt: "Donkey love" },
  { id: 14, src: `${ASSETS_BASE}/14.jpeg`, category: "Silkies!", alt: "Silkies" },
  { id: 15, src: `${ASSETS_BASE}/15.jpeg`, category: "No words needed", alt: "No words needed" },
  { id: 16, src: `${ASSETS_BASE}/16.jpeg`, category: "Hungry babies", alt: "Hungry babies" },
  { id: 17, src: `${ASSETS_BASE}/17.jpeg`, category: "Handsome", alt: "Handsome" },
  { id: 18, src: `${ASSETS_BASE}/18.jpeg`, category: "Another Helper", alt: "Another helper" },
  { id: 19, src: `${ASSETS_BASE}/19.jpeg`, category: "Fun Times", alt: "Fun times" },
  { id: 20, src: `${ASSETS_BASE}/20.jpeg`, category: "Garden Work", alt: "Garden work" },
  { id: 21, src: `${ASSETS_BASE}/21.jpeg`, category: "Cuties", alt: "Cuties" },
  { id: 22, src: `${ASSETS_BASE}/22.jpeg`, category: "Amazing Girls", alt: "Amazing girls" },
  { id: 23, src: `${ASSETS_BASE}/23.jpeg`, category: "Goat Kisses", alt: "Goat kisses" },
  { id: 24, src: `${ASSETS_BASE}/24.jpeg`, category: "No Words Work Here", alt: "No words work here" },
  { id: 25, src: `${ASSETS_BASE}/25.jpeg`, category: "Proprietors", alt: "Proprietors" },
  { id: 26, src: `${ASSETS_BASE}/26.jpeg`, category: "Hangin' in the sun", alt: "Hanging in the sun" },
];
