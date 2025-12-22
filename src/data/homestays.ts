export interface Homestay {
  id: string;
  name: string;
  slug: string;
  village: string;
  district: string;
  hostFamily: string;
  houseType: string;
  description: string;
  image: string;
  priceRange: string;
  bestSeason: string;
  facilities: string[];
  localFood: string[];
}

export const homestays: Homestay[] = [
  {
    id: "1",
    name: "Raju's Apple Orchard Stay",
    slug: "rajus-apple-orchard",
    village: "Chitkul",
    district: "kinnaur",
    hostFamily: "Raju Negi & Family",
    houseType: "Traditional Kath-Khuni wooden house",
    description: "Wake up to the last Indian village before Tibet, surrounded by apple orchards and the mighty Baspa River.",
    image: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?w=800&q=80",
    priceRange: "₹1,500 - ₹2,500/night",
    bestSeason: "May - October",
    facilities: ["Home-cooked meals", "Bonfire", "Village walks", "Apple picking (seasonal)"],
    localFood: ["Siddu", "Aktori", "Chhang", "Apricot delicacies"]
  },
  {
    id: "2",
    name: "Spiti Mountain Home",
    slug: "spiti-mountain-home",
    village: "Langza",
    district: "spiti",
    hostFamily: "Tenzin Dorje",
    houseType: "Traditional mud-brick Buddhist home",
    description: "Stay in the village of the giant Buddha statue, where fossil hunting and monastery visits fill your days.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    priceRange: "₹1,200 - ₹2,000/night",
    bestSeason: "June - September",
    facilities: ["Buddhist family", "Fossil walks", "Monastery visits", "Stargazing"],
    localFood: ["Thukpa", "Momos", "Butter tea", "Tingmo"]
  },
  {
    id: "3",
    name: "Tirthan Valley Retreat",
    slug: "tirthan-valley-retreat",
    village: "Gushaini",
    district: "kullu",
    hostFamily: "Sharma Family",
    houseType: "Stone and wood cottage",
    description: "By the crystal Tirthan River, this homestay is your gateway to the Great Himalayan National Park.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    priceRange: "₹2,000 - ₹3,500/night",
    bestSeason: "Year-round",
    facilities: ["River fishing", "Trout cuisine", "Forest walks", "Bonfire nights"],
    localFood: ["Trout fish", "Siddu", "Patande", "Local honey"]
  },
  {
    id: "4",
    name: "Dharamkot Peace House",
    slug: "dharamkot-peace-house",
    village: "Dharamkot",
    district: "kangra",
    hostFamily: "Maya Devi",
    houseType: "Hillside cottage with valley views",
    description: "A peaceful haven for yogis and seekers, with Triund trail at your doorstep and Dalai Lama's temple nearby.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    priceRange: "₹1,000 - ₹1,800/night",
    bestSeason: "March - November",
    facilities: ["Yoga deck", "Mountain views", "Organic garden", "Meditation space"],
    localFood: ["Tibetan cuisine", "Israeli dishes", "Organic meals", "Herbal teas"]
  },
  {
    id: "5",
    name: "Jibhi Forest Cottage",
    slug: "jibhi-forest-cottage",
    village: "Jibhi",
    district: "kullu",
    hostFamily: "Thakur Family",
    houseType: "Wooden cottage in pine forest",
    description: "Hidden in the Banjar Valley, this cozy cottage offers the perfect escape into untouched Himachali village life.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80",
    priceRange: "₹1,800 - ₹3,000/night",
    bestSeason: "Year-round",
    facilities: ["River access", "Waterfall hikes", "Temple visits", "Campfire"],
    localFood: ["Siddu", "Trout", "Babru", "Local rice dishes"]
  },
  {
    id: "6",
    name: "Kalpa Apple Farm Stay",
    slug: "kalpa-apple-farm",
    village: "Kalpa",
    district: "kinnaur",
    hostFamily: "Negi Brothers",
    houseType: "Traditional Kinnauri house",
    description: "Watch the sunrise paint Kinnaur Kailash golden from your window, surrounded by endless apple orchards.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    priceRange: "₹1,500 - ₹2,500/night",
    bestSeason: "April - November",
    facilities: ["Kailash views", "Apple orchard", "Temple visits", "Sui Mata fair (seasonal)"],
    localFood: ["Chilta", "Phaanu", "Apple dishes", "Chhaang"]
  },
  {
    id: "7",
    name: "Malana Ancient Village Stay",
    slug: "malana-village-stay",
    village: "Malana",
    district: "kullu",
    hostFamily: "Village Community",
    houseType: "Traditional Malana house (guest section)",
    description: "Experience the world's oldest democracy in this isolated village with unique customs and ancient traditions.",
    image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80",
    priceRange: "₹800 - ₹1,500/night",
    bestSeason: "May - October",
    facilities: ["Cultural immersion", "Village walks", "Traditional architecture", "Local guides"],
    localFood: ["Simple local meals", "Siddu", "Madra"]
  },
  {
    id: "8",
    name: "Bir Billing Paragliding Home",
    slug: "bir-billing-home",
    village: "Bir",
    district: "kangra",
    hostFamily: "Tibetan Refugee Family",
    houseType: "Tibetan-style home",
    description: "Base yourself in the paragliding capital of India, with Tibetan culture and adventure at your doorstep.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    priceRange: "₹1,200 - ₹2,000/night",
    bestSeason: "March - June, Sept - Nov",
    facilities: ["Paragliding packages", "Monastery visits", "Tibetan cooking", "Mountain biking"],
    localFood: ["Momos", "Thukpa", "Tibetan bread", "Butter tea"]
  }
];

export const getHomestayBySlug = (slug: string): Homestay | undefined => {
  return homestays.find(h => h.slug === slug);
};

export const getHomestaysByDistrict = (district: string): Homestay[] => {
  return homestays.filter(h => h.district === district);
};
