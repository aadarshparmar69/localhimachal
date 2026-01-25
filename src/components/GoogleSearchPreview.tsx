import { ChevronRight } from "lucide-react";

const sitelinks = [
  { title: "Explore", url: "https://www.localhimachal.in/explore", description: "Discover the 12 enchanting districts of Himachal Pradesh..." },
  { title: "Hidden Gems", url: "https://www.localhimachal.in/hidden-gems", description: "Explore offbeat, untouched destinations across Himachal..." },
  { title: "Treks", url: "https://www.localhimachal.in/treks", description: "Epic Himalayan treks from easy walks to challenging expeditions..." },
  { title: "Homestays", url: "https://www.localhimachal.in/homestays", description: "Authentic local stays with Himachali families..." },
  { title: "Culture", url: "https://www.localhimachal.in/culture", description: "Dive into Himachali traditions, festivals, and heritage..." },
  { title: "Plan Your Trip", url: "https://www.localhimachal.in/plan", description: "Get personalized itineraries crafted by local experts..." },
];

export default function GoogleSearchPreview() {
  return (
    <div className="min-h-screen bg-[#202124] text-white p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        {/* Main Result */}
        <div className="mb-6">
          {/* Site Info Row */}
          <div className="flex items-center gap-3 mb-2">
            <div className="w-7 h-7 rounded-full bg-[#3c431e] flex items-center justify-center text-xs font-bold text-white">
              LH
            </div>
            <div>
              <div className="text-sm text-[#dadce0]">Local Himachal</div>
              <div className="text-xs text-[#969ba1] flex items-center gap-1">
                https://www.localhimachal.in
                <span className="text-[#969ba1]">›</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-xl md:text-2xl text-[#8ab4f8] hover:underline cursor-pointer mb-2 leading-tight">
            Local Himachal – Your Complete Travel Guide to the Land of Gods
          </h1>

          {/* Description */}
          <p className="text-sm text-[#bdc1c6] leading-relaxed">
            <span className="text-[#dadce0] font-medium">Local Himachal</span> is an authentic travel guide built by locals. Discover hidden gems, epic treks, traditional homestays, and cultural experiences across Himachal Pradesh...
          </p>
        </div>

        {/* Sitelinks */}
        <div className="border-t border-[#3c4043] pt-4">
          {sitelinks.map((link, index) => (
            <div
              key={index}
              className="py-4 border-b border-[#3c4043] last:border-b-0 flex items-start justify-between group cursor-pointer hover:bg-[#303134] -mx-4 px-4 transition-colors"
            >
              <div className="flex-1">
                <h2 className="text-lg text-[#8ab4f8] group-hover:underline mb-1">
                  {link.title}
                </h2>
                <p className="text-sm text-[#bdc1c6]">{link.description}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-[#8ab4f8] mt-1 flex-shrink-0 ml-4" />
            </div>
          ))}
        </div>

        {/* More Results Link */}
        <div className="mt-6 pt-4">
          <a href="#" className="text-[#8ab4f8] text-sm hover:underline">
            More results from localhimachal.in »
          </a>
        </div>
      </div>
    </div>
  );
}
