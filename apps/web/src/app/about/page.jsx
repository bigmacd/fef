import FarmHeader from "@/components/FarmHeader";
import FarmFooter from "../../components/FarmFooter";

export default function AboutPage() {
  const owners = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Founder & Farm Manager",
      image:
        "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      bio: "Sarah started the farm 15 years ago with a passion for sustainable agriculture and providing fresh, quality products to the community. She manages all farming operations.",
    },
    {
      id: 2,
      name: "Michael Johnson",
      role: "Baker & Product Development",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      bio: "Michael brings 20 years of baking experience. He creates all our artisan baked goods using traditional methods and locally-sourced ingredients.",
    },
    {
      id: 3,
      name: "Emma Johnson",
      role: "Community Relations",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      bio: "Emma connects us with the community through farmers' markets and special events. She's passionate about educating people about farm-to-table living.",
    },
  ];

  const animals = [
    {
      id: 1,
      name: "Free-Range Hens",
      image:
        "https://images.pexels.com/photos/4725284/pexels-photo-4725284.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      description:
        "Our hens roam freely across the farm, producing delicious eggs. We have over 200 happy hens that are well cared for and loved.",
    },
    {
      id: 2,
      name: "Dairy Goats",
      image:
        "https://images.pexels.com/photos/2552656/pexels-photo-2552656.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      description:
        "Our dairy goats provide milk for some of our specialty baked goods. They're friendly and love getting attention from visitors.",
    },
    {
      id: 3,
      name: "Working Dogs",
      image:
        "https://images.pexels.com/photos/3535380/pexels-photo-3535380.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      description:
        "Our Border Collies help manage the animals and property. They're part of the family and essential to our farm operations.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <FarmHeader />

      {/* Page Header */}
      <section className="bg-[#f5f3f0] dark:bg-[#1a1a1a] py-12 md:py-16 px-4 md:px-8 border-b border-[#E5E5E5] dark:border-[#333]">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-black dark:text-[#E5E5E5] mb-4">
            About Us
          </h1>
          <p className="font-inter text-lg text-[#666] dark:text-[#B0B0B0]">
            Get to know the people and animals behind the farm
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-16 lg:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl text-black dark:text-[#E5E5E5] mb-8">
            Our Story
          </h2>

          <div className="space-y-6">
            <p className="font-inter text-lg leading-relaxed text-[#555] dark:text-[#B0B0B0]">
              Farm Harvest began as a small family dream 15 years ago. What
              started with just a few chickens and Sarah's passion for
              sustainable farming has grown into a thriving operation that
              serves the community we love.
            </p>

            <p className="font-inter text-lg leading-relaxed text-[#555] dark:text-[#B0B0B0]">
              We believe in working with nature, not against it. Every animal is
              treated with care and respect, and every crop is grown using
              sustainable practices that protect our land for future
              generations.
            </p>

            <p className="font-inter text-lg leading-relaxed text-[#555] dark:text-[#B0B0B0]">
              Today, our farm is a place where family, community, and quality
              come together. Whether you're enjoying our fresh eggs, artisan
              baked goods, or visiting us at the farmers' market, you're
              supporting a business built on integrity and love.
            </p>
          </div>
        </div>
      </section>

      {/* Owners Section */}
      <section className="bg-[#f5f3f0] dark:bg-[#1a1a1a] py-12 md:py-16 lg:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl text-black dark:text-[#E5E5E5] mb-12 text-center">
            Meet the Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {owners.map((owner) => (
              <div key={owner.id} className="group">
                {/* Owner Image */}
                <div className="relative aspect-square mb-6 bg-white dark:bg-[#1E1E1E] overflow-hidden rounded-lg">
                  <img
                    src={owner.image}
                    alt={owner.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-transparent dark:bg-black/10"></div>
                </div>

                {/* Owner Info */}
                <h3 className="font-playfair text-2xl md:text-3xl text-black dark:text-[#E5E5E5] mb-2">
                  {owner.name}
                </h3>
                <p className="font-inter text-sm uppercase tracking-widest text-[#7c5c2d] dark:text-[#d4a574] mb-4 font-semibold">
                  {owner.role}
                </p>
                <p className="font-inter text-base leading-relaxed text-[#555] dark:text-[#B0B0B0]">
                  {owner.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animals Section */}
      <section className="py-12 md:py-16 lg:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl text-black dark:text-[#E5E5E5] mb-12 text-center">
            Our Animals
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {animals.map((animal) => (
              <div key={animal.id} className="group">
                {/* Animal Image */}
                <div className="relative aspect-square mb-6 bg-white dark:bg-[#1E1E1E] overflow-hidden rounded-lg">
                  <img
                    src={animal.image}
                    alt={animal.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-transparent dark:bg-black/10"></div>
                </div>

                {/* Animal Info */}
                <h3 className="font-playfair text-2xl md:text-3xl text-black dark:text-[#E5E5E5] mb-4">
                  {animal.name}
                </h3>
                <p className="font-inter text-base leading-relaxed text-[#555] dark:text-[#B0B0B0]">
                  {animal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#7c5c2d] dark:bg-[#d4a574] py-12 md:py-16 lg:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white dark:text-black mb-8">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-playfair text-2xl text-white dark:text-black mb-4">
                Quality
              </h3>
              <p className="font-inter text-base leading-relaxed text-white dark:text-black opacity-90">
                We never compromise on the quality of our products. Fresh,
                delicious, and made with care.
              </p>
            </div>

            <div>
              <h3 className="font-playfair text-2xl text-white dark:text-black mb-4">
                Sustainability
              </h3>
              <p className="font-inter text-base leading-relaxed text-white dark:text-black opacity-90">
                We practice sustainable farming to protect our land and ensure a
                healthy future for generations to come.
              </p>
            </div>

            <div>
              <h3 className="font-playfair text-2xl text-white dark:text-black mb-4">
                Community
              </h3>
              <p className="font-inter text-base leading-relaxed text-white dark:text-black opacity-90">
                We're committed to supporting our local community and building
                meaningful connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      < FarmFooter />
    </div>
  );
}
