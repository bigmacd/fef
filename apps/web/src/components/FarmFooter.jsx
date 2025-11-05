

export default function FarmFooter() {
  return (
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
  );
}
