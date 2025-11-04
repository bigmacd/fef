/**
 * Gallery Images Configuration
 *
 * This file contains the gallery image metadata and URLs.
 * Images can be hosted on Imgur, Cloudinary, or any CDN.
 *
 * Optional: Use environment variables for base URL
 * const IMGUR_BASE = import.meta.env.VITE_IMGUR_BASE_URL || ';
 */

// You can use a base URL from environment variables
const IMAGE_BASE_URL = import.meta.env.NEXT_PUBLIC_IMAGE_BASE_URL || 'https://i.imgur.com';

/**
 * Gallery images configuration
 * Each image object contains:
 * - id: Unique identifier
 * - src: Full URL to the image (or path relative to base URL)
 * - category: Image category for filtering/grouping
 * - alt: Optional alt text for accessibility
 * - thumbnail: Optional thumbnail URL for lazy loading
 */
export const galleryImages = [
  {
    id: 1,
    src: `${IMAGE_BASE_URL}/QojQLQZ.jpg`, // Replace with your Imgur URL
    category: "Farm Life",
    alt: "Farm landscape view",
  },
  {
    id: 2,
    src: `${IMAGE_BASE_URL}/l63iBBe.jpg`, // Replace with your Imgur URL
    category: "Products",
    alt: "Fresh farm eggs",
  },
  {
    id: 3,
    src: `${IMAGE_BASE_URL}/81VDC9u.jpg`, // Replace with your Imgur URL
    category: "Farm Helpers",
    alt: "Farm helpers",
  },
  {
    id: 4,
    src: `${IMAGE_BASE_URL}/tPzerFR.jpg`, // Replace with your Imgur URL
    category: "Fresh baked goods",
    alt: "Fresh baked goods",
  },
  {
    id: 5,
    src: `${IMAGE_BASE_URL}/duDRzLc.jpeg`, // Replace with your Imgur URL
    category: "Troublemaker",
    alt: "Troublemaker",
  },
  {
    id: 6,
    src: `${IMAGE_BASE_URL}/i6S7b98.jpeg`, // Replace with your Imgur URL
    category: "Eggs!",
    alt: "Fresh eggs",
  },
  {
    id: 7,
    src: `${IMAGE_BASE_URL}/518t4Fo.jpeg`, // Replace with your Imgur URL
    category: "Donkeys",
    alt: "Donkeys",
  },
  {
    id: 8,
    src: `${IMAGE_BASE_URL}/AuJXSVP.jpeg`, // Replace with your Imgur URL
    category: "Babies!",
    alt: "Farm babies",
  },
  {
    id: 9,
    src: `${IMAGE_BASE_URL}/wAnZEIU.jpeg`, // Replace with your Imgur URL
    category: "More Troublemakers",
    alt: "More troublemakers",
  },
  {
    id: 10,
    src: `${IMAGE_BASE_URL}/ezLbGvp.jpeg`, // Replace with your Imgur URL
    category: "Party Time!",
    alt: "Party time",
  },
  {
    id: 11,
    src: `${IMAGE_BASE_URL}/bbz5btI.jpeg`, // Replace with your Imgur URL
    category: "Markets",
    alt: "Farmers market",
  },
  {
    id: 12,
    src: `${IMAGE_BASE_URL}/QroR0sa.jpeg`, // Replace with your Imgur URL
    category: "Big Girl",
    alt: "Big girl",
  },
  {
    id: 13,
    src: `${IMAGE_BASE_URL}/HbOzRZ8.jpeg`, // Replace with your Imgur URL
    category: "Donkey Love",
    alt: "Donkey love",
  },
  {
    id: 14,
    src: `${IMAGE_BASE_URL}/SIF5fVH.jpeg`, // Replace with your Imgur URL
    category: "Silkies!",
    alt: "Silkies",
  },
  {
    id: 15,
    src: `${IMAGE_BASE_URL}/mYooqKN.jpeg`, // Replace with your Imgur URL
    category: "No words needed",
    alt: "No words needed",
  },
  {
    id: 16,
    src: `${IMAGE_BASE_URL}/WV9JgFq.jpeg`, // Replace with your Imgur URL
    category: "Hungry babies",
    alt: "Hungry babies",
  },
  {
    id: 17,
    src: `${IMAGE_BASE_URL}/o4Bdddv.jpeg`, // Replace with your Imgur URL
    category: "Handsome",
    alt: "Handsome",
  },
  {
    id: 18,
    src: `${IMAGE_BASE_URL}/09OVOKh.jpeg`, // Replace with your Imgur URL
    category: "Another Helper",
    alt: "Another helper",
  },
  {
    id: 19,
    src: `${IMAGE_BASE_URL}/XNOKF5a.jpeg`, // Replace with your Imgur URL
    category: "Fun Times",
    alt: "Fun times",
  },
  {
    id: 20,
    src: `${IMAGE_BASE_URL}/Z2ZqOEp.jpeg`, // Replace with your Imgur URL
    category: "Garden Work",
    alt: "Garden work",
  },
  {
    id: 21,
    src: `${IMAGE_BASE_URL}/lO0Z5XG.jpeg`, // Replace with your Imgur URL
    category: "Cuties",
    alt: "Cuties",
  },
  {
    id: 22,
    src: `${IMAGE_BASE_URL}/XeTKZzX.jpeg`, // Replace with your Imgur URL
    category: "Amazing Girls",
    alt: "Amazing girls",
  },
  {
    id: 23,
    src: `${IMAGE_BASE_URL}/GPEen66.jpeg`, // Replace with your Imgur URL
    category: "Goat Kisses",
    alt: "Goat kisses",
  },
  {
    id: 24,
    src: `${IMAGE_BASE_URL}/fU16M49.jpeg`, // Replace with your Imgur URL
    category: "No Words Work Here",
    alt: "No words work here",
  },
  {
    id: 25,
    src: `${IMAGE_BASE_URL}/2SuIxnu.jpeg`, // Replace with your Imgur URL
    category: "Proprietors",
    alt: "Proprietors",
  },
  {
    id: 26,
    src: `${IMAGE_BASE_URL}/7Bs7KRb.jpeg`, // Replace with your Imgur URL
    category: "Hangin' in the sun",
    alt: "Hanging in the sun",
  },
];

