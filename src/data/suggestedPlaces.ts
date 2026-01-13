import { MapPin, Mountain, Home, Sparkles, TrendingUp, Star, Compass, Camera } from "lucide-react";

export interface SuggestedPlace {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  url: string;
  type: "district" | "trek" | "homestay" | "hidden-gem";
  category: "trending" | "popular" | "seasonal" | "hidden";
}

export interface SearchCategory {
  id: string;
  name: string;
  icon: typeof MapPin;
  description: string;
  color: string;
  count: number;
}

// Trending places - based on current popularity
export const trendingPlaces: SuggestedPlace[] = [
  {
    id: "spiti",
    name: "Spiti Valley",
    subtitle: "The Middle Land • Buddhist monasteries",
    image: "https://www.tourmyindia.com/socialimg/lahaul-spiti-valley-himachal.jpg",
    url: "/district/spiti",
    type: "district",
    category: "trending"
  },
  {
    id: "triund",
    name: "Triund Trek",
    subtitle: "Easy • 1-2 Days • Dhauladhar views",
    image: "https://media1.thrillophilia.com/filestore/upku8nboo69gwpqkt5dpj2jek3oz_triund%20trek%203.jpg",
    url: "/trek/triund",
    type: "trek",
    category: "trending"
  },
  {
    id: "jibhi",
    name: "Jibhi",
    subtitle: "Hidden Valley • Peaceful escape",
    image: "https://r1imghtlak.mmtcdn.com/1e560da60a0811ecb26d0a58a9feac02.jpeg?&output-quality=75&downsize=520:350&crop=520:350;0,32&output-format=jpg",
    url: "/hidden-gems/jibhi",
    type: "hidden-gem",
    category: "trending"
  },
  {
    id: "chandratal",
    name: "Chandratal Lake",
    subtitle: "Moon Lake • 4,300m altitude",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/e5/bc/20/the-memserizing-beauty.jpg?w=1200&h=1200&s=1",
    url: "/trek/chandratal",
    type: "trek",
    category: "trending"
  }
];

// Popular destinations - all-time favorites
export const popularDestinations: SuggestedPlace[] = [
  {
    id: "manali",
    name: "Kullu Valley",
    subtitle: "Valley of Gods • Adventure hub",
    image: "https://experiencemyindia.com/wp-content/uploads/2024/09/Kullu-Manali-Blog.jpg",
    url: "/district/kullu",
    type: "district",
    category: "popular"
  },
  {
    id: "dharamshala",
    name: "Kangra",
    subtitle: "Dalai Lama's home • Tibetan culture",
    image: "https://media.istockphoto.com/id/474565222/photo/kangra-fort-dharamshala-himachal-pradesh-india.jpg?s=612x612&w=0&k=20&c=rgAJ1oKbFaFC5Mu3YLI2Nxw2jjy9UDO33L-oqjMgbOI=",
    url: "/district/kangra",
    type: "district",
    category: "popular"
  },
  {
    id: "kheerganga",
    name: "Kheerganga Trek",
    subtitle: "Hot springs • Forest camping",
    image: "https://www.trailhikers.in/wp-content/uploads/2019/11/Kheerganga-Trek-001.jpg",
    url: "/trek/kheerganga",
    type: "trek",
    category: "popular"
  },
  {
    id: "kinnaur",
    name: "Kinnaur",
    subtitle: "Apple orchards • Chitkul village",
    image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2020/01/NAKO-1-1.jpg",
    url: "/district/kinnaur",
    type: "district",
    category: "popular"
  },
  {
    id: "shimla",
    name: "Shimla",
    subtitle: "Queen of Hills • Colonial charm",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/cityscape-of-shimla-himachal-pradesh-city-1-hero?qlt=82&ts=1742171983523",
    url: "/district/shimla",
    type: "district",
    category: "popular"
  },
  {
    id: "prashar",
    name: "Prashar Lake",
    subtitle: "Floating island • Sacred temple",
    image: "https://www.captureatrip.com/_next/image?url=https%3A%2F%2Fd1zvcmhypeawxj.cloudfront.net%2Flocation%2FHimachal%20Pradesh%2Fblogs%2Fprashar-lake-trek-f941e4ecde-qexx7x-webp-0fb0346249-1752061981000.webp&w=3840&q=75",
    url: "/trek/prashar-lake",
    type: "trek",
    category: "popular"
  }
];

// Hidden gems - offbeat places
export const hiddenGemSuggestions: SuggestedPlace[] = [
  {
    id: "shoja",
    name: "Shoja",
    subtitle: "Forest hamlet • Near Jalori Pass",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/4e/cd/29/buran-ghati-trek-pabbar.jpg?w=1200&h=-1&s=1",
    url: "/hidden-gems/shoja",
    type: "hidden-gem",
    category: "hidden"
  },
  {
    id: "tirthan",
    name: "Tirthan Valley",
    subtitle: "Great Himalayan NP gateway",
    image: "https://www.tirthanvalleystay.com/wp-content/uploads/2024/02/461856748.webp",
    url: "/hidden-gems/tirthan-valley",
    type: "hidden-gem",
    category: "hidden"
  },
  {
    id: "dodra-kwar",
    name: "Dodra-Kwar",
    subtitle: "Remote twin villages • Untouched",
    image: "https://ghumakkadi.com/media/dodra-kwar-dodra_76245_600x400.webp",
    url: "/hidden-gems/dodra-kwar",
    type: "hidden-gem",
    category: "hidden"
  },
  {
    id: "chanshal",
    name: "Chanshal Pass",
    subtitle: "Highest motorable • 4,000m",
    image: "https://i0.wp.com/lahimalaya.com/wp-content/uploads/2023/08/Chanshal-and-surrounding-snowy-peaks-of-lesser-Himalayas-scaled.jpg?fit=2560%2C1440&ssl=1",
    url: "/hidden-gems/chanshal-pass",
    type: "hidden-gem",
    category: "hidden"
  }
];

// Best for this season (winter - January)
export const seasonalPicks: SuggestedPlace[] = [
  {
    id: "shimla-winter",
    name: "Shimla",
    subtitle: "Snow-covered hills • Winter magic",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/cityscape-of-shimla-himachal-pradesh-city-1-hero?qlt=82&ts=1742171983523",
    url: "/district/shimla",
    type: "district",
    category: "seasonal"
  },
  {
    id: "kufri",
    name: "Chamba",
    subtitle: "Snow adventures • Untouched beauty",
    image: "https://antelopetourandtravel.com/wp-content/uploads/2022/07/chambaintro.webp",
    url: "/district/chamba",
    type: "district",
    category: "seasonal"
  },
  {
    id: "kasauli",
    name: "Solan",
    subtitle: "Year-round destination • Pine forests",
    image: "https://travelthrivehub.com/wp-content/uploads/2025/10/Snowfall_solan_city1-e1761131265164.webp",
    url: "/district/solan",
    type: "district",
    category: "seasonal"
  }
];

// Quick search categories
export const searchCategories: SearchCategory[] = [
  {
    id: "destinations",
    name: "Destinations",
    icon: MapPin,
    description: "12 unique districts",
    color: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
    count: 12
  },
  {
    id: "treks",
    name: "Treks",
    icon: Mountain,
    description: "Easy to challenging",
    color: "bg-orange-500/10 text-orange-600 border-orange-200",
    count: 12
  },
  {
    id: "homestays",
    name: "Homestays",
    icon: Home,
    description: "Authentic local stays",
    color: "bg-blue-500/10 text-blue-600 border-blue-200",
    count: 14
  },
  {
    id: "hidden-gems",
    name: "Hidden Gems",
    icon: Sparkles,
    description: "Offbeat destinations",
    color: "bg-purple-500/10 text-purple-600 border-purple-200",
    count: 25
  }
];

// Popular search terms
export const popularSearchTerms = [
  { term: "Spiti Valley", icon: MapPin },
  { term: "Triund Trek", icon: Mountain },
  { term: "Tirthan Valley", icon: Sparkles },
  { term: "Kasol", icon: MapPin },
  { term: "Chandratal", icon: Mountain },
  { term: "Jibhi homestay", icon: Home },
  { term: "Kheerganga", icon: Mountain },
  { term: "Dharamshala", icon: MapPin },
];
