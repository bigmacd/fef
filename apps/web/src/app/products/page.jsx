import FarmHeader from "@/components/FarmHeader";

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Free-Range Eggs - Dozen",
      price: "$8.99",
      image:
        "https://images.pexels.com/photos/4725284/pexels-photo-4725284.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      description:
        "Fresh, free-range eggs from our happy hens. Packed with flavor and nutrition.",
      category: "Eggs",
    },
    {
      id: 2,
      name: "Sourdough Bread",
      price: "$6.50",
      image:
        "https://images.pexels.com/photos/227432/pexels-photo-227432.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      description:
        "Artisan sourdough bread baked fresh daily using traditional methods.",
      category: "Baked Goods",
    },
    {
      id: 3,
      name: "Chocolate Chip Cookies",
      price: "$4.50",
      image:
        "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      description:
        "Delicious homemade cookies with premium chocolate chips. Dozen pack.",
      category: "Baked Goods",
    },
    {
      id: 4,
      name: "Brown Eggs - Half Dozen",
      price: "$5.49",
      image:
        "https://images.pexels.com/photos/4725284/pexels-photo-4725284.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      description:
        "Half dozen of our finest free-range brown eggs. Perfect for smaller households.",
      category: "Eggs",
    },
    {
      id: 5,
      name: "Whole Wheat Loaf",
      price: "$7.00",
      image:
        "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      description:
        "Hearty whole wheat bread with whole grains and seeds. Nutritious and delicious.",
      category: "Baked Goods",
    },
    {
      id: 6,
      name: "Blueberry Muffins",
      price: "$5.99",
      image:
        "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      description: "Fresh blueberry muffins bursting with flavor. Pack of 6.",
      category: "Baked Goods",
    },
  ];

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                {/* Product Image */}
                <div className="relative aspect-square mb-6 bg-white dark:bg-[#1E1E1E] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 dark:bg-black/10 dark:group-hover:bg-black/30"></div>
                </div>

                {/* Product Info */}
                <div>
                  <p className="font-inter text-xs uppercase tracking-widest text-[#7c5c2d] dark:text-[#d4a574] mb-2 font-semibold">
                    {product.category}
                  </p>
                  <h3 className="font-playfair text-2xl md:text-3xl text-black dark:text-[#E5E5E5] mb-2 group-hover:text-[#7c5c2d] dark:group-hover:text-[#d4a574] transition-colors">
                    {product.name}
                  </h3>
                  <p className="font-inter text-lg font-semibold text-[#7c5c2d] dark:text-[#d4a574] mb-4">
                    {product.price}
                  </p>
                  <p className="font-inter text-base leading-relaxed text-[#555] dark:text-[#B0B0B0] mb-6">
                    {product.description}
                  </p>
                  <button className="w-full font-inter text-sm md:text-base text-white bg-[#7c5c2d] hover:bg-[#6b4f25] dark:bg-[#d4a574] dark:hover:bg-[#c89664] px-6 py-3 uppercase tracking-wide transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
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

      {/* Footer */}
      <footer className="bg-[#2d2420] dark:bg-[#0A0A0A] text-white py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-inter font-medium text-xs uppercase tracking-wide text-[#b8a89a] mb-4">
                Location
              </h3>
              <p className="font-inter text-sm text-white">
                123 Farm Lane
                <br />
                Country Side, ST 12345
              </p>
            </div>
            <div>
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
            </div>
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
