import FarmHeader from "@/components/FarmHeader";
import { MapPin, Clock } from "lucide-react";

export default function MarketsPage() {
  const markets = [
    {
      id: 1,
      name: "Downtown Farmer's Market",
      location: "Main Street Plaza, Downtown",
      day: "Wednesday",
      time: "3:00 PM - 7:00 PM",
      address: "123 Main Street",
      city: "Springfield, ST 12345",
      booth: "Booth #15",
    },
    {
      id: 2,
      name: "Riverside Farmer's Market",
      location: "Riverside Park, East Side",
      day: "Saturday",
      time: "8:00 AM - 12:00 PM",
      address: "456 River Road",
      city: "Springfield, ST 12346",
      booth: "Booth #8",
    },
    {
      id: 3,
      name: "Community Farmer's Market",
      location: "Community Center Grounds",
      day: "Saturday",
      time: "9:00 AM - 1:00 PM",
      address: "789 Community Lane",
      city: "Countryside, ST 12347",
      booth: "Booth #22",
    },
    {
      id: 4,
      name: "North Ridge Market",
      location: "North Ridge Shopping Center",
      day: "Friday",
      time: "4:00 PM - 8:00 PM",
      address: "321 Ridge Drive",
      city: "North City, ST 12348",
      booth: "Booth #5",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <FarmHeader />

      {/* Page Header */}
      <section className="bg-[#f5f3f0] dark:bg-[#1a1a1a] py-12 md:py-16 px-4 md:px-8 border-b border-[#E5E5E5] dark:border-[#333]">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-black dark:text-[#E5E5E5] mb-4">
            Farmer's Markets
          </h1>
          <p className="font-inter text-lg text-[#666] dark:text-[#B0B0B0]">
            Visit us at these locations every week
          </p>
        </div>
      </section>

      {/* Markets Grid */}
      <section className="py-12 md:py-16 lg:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {markets.map((market) => (
              <div
                key={market.id}
                className="border border-[#E5E5E5] dark:border-[#333] p-8 md:p-10 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-playfair text-2xl md:text-3xl text-black dark:text-[#E5E5E5] mb-6">
                  {market.name}
                </h3>

                {/* Market Details */}
                <div className="space-y-4 mb-8">
                  {/* Day and Time */}
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-[#7c5c2d] dark:text-[#d4a574] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-inter text-sm uppercase tracking-wide text-[#7c5c2d] dark:text-[#d4a574] font-semibold mb-1">
                        When
                      </p>
                      <p className="font-inter text-base text-black dark:text-[#E5E5E5]">
                        {market.day}
                      </p>
                      <p className="font-inter text-base text-black dark:text-[#E5E5E5]">
                        {market.time}
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-[#7c5c2d] dark:text-[#d4a574] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-inter text-sm uppercase tracking-wide text-[#7c5c2d] dark:text-[#d4a574] font-semibold mb-1">
                        Location
                      </p>
                      <p className="font-inter text-base text-black dark:text-[#E5E5E5]">
                        {market.location}
                      </p>
                      <p className="font-inter text-base text-[#555] dark:text-[#B0B0B0] mt-1">
                        {market.address}
                        <br />
                        {market.city}
                      </p>
                    </div>
                  </div>

                  {/* Booth Info */}
                  <div>
                    <p className="font-inter text-sm uppercase tracking-wide text-[#7c5c2d] dark:text-[#d4a574] font-semibold mb-2">
                      Our Booth
                    </p>
                    <p className="font-inter text-base text-black dark:text-[#E5E5E5]">
                      {market.booth}
                    </p>
                  </div>
                </div>

                {/* Get Directions Button */}
                <button className="w-full font-inter text-sm md:text-base text-white bg-[#7c5c2d] hover:bg-[#6b4f25] dark:bg-[#d4a574] dark:hover:bg-[#c89664] px-6 py-3 uppercase tracking-wide transition-colors">
                  Get Directions
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-[#f5f3f0] dark:bg-[#1a1a1a] py-12 md:py-16 lg:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-black dark:text-[#E5E5E5] mb-8 text-center">
            About Our Markets
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-playfair text-2xl text-black dark:text-[#E5E5E5] mb-4">
                What to Expect
              </h3>
              <p className="font-inter text-base leading-relaxed text-[#555] dark:text-[#B0B0B0] mb-4">
                Come visit our booth at your local farmer's market! We'll have
                fresh farm eggs, artisan baked goods, and other seasonal
                products available for purchase.
              </p>
              <p className="font-inter text-base leading-relaxed text-[#555] dark:text-[#B0B0B0]">
                Our team is always happy to chat about our farm, answer
                questions about our products, and share recipes.
              </p>
            </div>

            <div>
              <h3 className="font-playfair text-2xl text-black dark:text-[#E5E5E5] mb-4">
                Special Orders
              </h3>
              <p className="font-inter text-base leading-relaxed text-[#555] dark:text-[#B0B0B0] mb-4">
                Need a larger quantity or something specific? We accept
                pre-orders for our products.
              </p>
              <p className="font-inter text-base leading-relaxed text-[#555] dark:text-[#B0B0B0] mb-6">
                Contact us before your visit to arrange custom orders.
              </p>
              <button className="font-inter text-sm md:text-base text-white bg-[#7c5c2d] hover:bg-[#6b4f25] dark:bg-[#d4a574] dark:hover:bg-[#c89664] px-8 py-3 uppercase tracking-wide transition-colors">
                Place Custom Order
              </button>
            </div>
          </div>
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
