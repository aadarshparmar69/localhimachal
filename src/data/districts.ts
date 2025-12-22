export interface District {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  altitude: string;
  bestTime: string;
  famousFor: string[];
  coordinates: { lat: number; lng: number };
}

export const districts: District[] = [
  {
    id: "1",
    name: "Kinnaur",
    slug: "kinnaur",
    tagline: "Where Gods Descend to Earth",
    description: "A mystical land of apple orchards, ancient temples, and towering peaks where the Hindustan-Tibet road weaves through impossible terrain.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    altitude: "2,320 - 6,816m",
    bestTime: "May - October",
    famousFor: ["Kinnaur Kailash", "Apple Orchards", "Chitkul", "Sangla Valley"],
    coordinates: { lat: 31.5833, lng: 78.4500 }
  },
  {
    id: "2",
    name: "Kullu",
    slug: "kullu",
    tagline: "Valley of Gods",
    description: "Legendary valley blessed by Sage Vyas, where every village has a deity and every festival is a celebration of life.",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800&q=80",
    altitude: "1,230 - 5,289m",
    bestTime: "March - June, Sept - Nov",
    famousFor: ["Dussehra", "Parvati Valley", "Manikaran", "Great Himalayan NP"],
    coordinates: { lat: 31.9579, lng: 77.1095 }
  },
  {
    id: "3",
    name: "Lahaul & Spiti",
    slug: "spiti",
    tagline: "The Middle Land",
    description: "A cold desert moonscape where ancient Buddhist monasteries cling to cliffs and time moves at the pace of yak caravans.",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&q=80",
    altitude: "3,350 - 6,632m",
    bestTime: "May - October",
    famousFor: ["Key Monastery", "Chandratal", "Dhankar", "Pin Valley"],
    coordinates: { lat: 32.2996, lng: 77.6135 }
  },
  {
    id: "4",
    name: "Kangra",
    slug: "kangra",
    tagline: "Land of Art & Temples",
    description: "Home to the Dalai Lama and the seat of ancient Kangra painting tradition, where tea gardens meet snow peaks.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    altitude: "427 - 5,033m",
    bestTime: "March - June, Sept - Nov",
    famousFor: ["Dharamshala", "McLeodganj", "Kangra Fort", "Palampur Tea"],
    coordinates: { lat: 32.0998, lng: 76.2691 }
  },
  {
    id: "5",
    name: "Chamba",
    slug: "chamba",
    tagline: "The Untouched Kingdom",
    description: "A hidden kingdom of ancient temples, unexplored valleys, and the warmest mountain hospitality you'll ever find.",
    image: "https://images.unsplash.com/photo-1585136917228-06f238d15e3e?w=800&q=80",
    altitude: "914 - 6,000m",
    bestTime: "March - June, Sept - Nov",
    famousFor: ["Khajjiar", "Chamba Rumal", "Manimahesh", "Pangi Valley"],
    coordinates: { lat: 32.5534, lng: 76.1258 }
  },
  {
    id: "6",
    name: "Shimla",
    slug: "shimla",
    tagline: "Queen of Hills",
    description: "The erstwhile summer capital of British India, where colonial charm meets modern Himachali culture on misty ridges.",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800&q=80",
    altitude: "300 - 6,000m",
    bestTime: "Year-round",
    famousFor: ["Mall Road", "Toy Train", "Kufri", "Colonial Architecture"],
    coordinates: { lat: 31.1048, lng: 77.1734 }
  },
  {
    id: "7",
    name: "Mandi",
    slug: "mandi",
    tagline: "Varanasi of Hills",
    description: "A pilgrimage town of 81 temples where the Beas River flows past ancient stone carvings and sacred ghats.",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80",
    altitude: "760 - 5,669m",
    bestTime: "March - June, Sept - Nov",
    famousFor: ["Prashar Lake", "Rewalsar", "Shivaratri Fair", "Janjehli"],
    coordinates: { lat: 31.7152, lng: 76.9314 }
  },
  {
    id: "8",
    name: "Solan",
    slug: "solan",
    tagline: "Mushroom City of India",
    description: "Rolling hills of pine and oak forests, where mushroom farms and ancient monasteries create a unique landscape.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    altitude: "300 - 3,647m",
    bestTime: "Year-round",
    famousFor: ["Kasauli", "Mohan Shakti Heritage Park", "Barog", "Chail"],
    coordinates: { lat: 30.9045, lng: 77.0967 }
  },
  {
    id: "9",
    name: "Sirmaur",
    slug: "sirmaur",
    tagline: "Land of Peaches & Legends",
    description: "Where sacred Renuka Lake holds the spirit of a goddess and Churdhar peak touches the heavens.",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=80",
    altitude: "300 - 3,647m",
    bestTime: "March - June, Sept - Nov",
    famousFor: ["Renuka Lake", "Churdhar Trek", "Nahan", "Haripurdhar"],
    coordinates: { lat: 30.5988, lng: 77.2846 }
  },
  {
    id: "10",
    name: "Hamirpur",
    slug: "hamirpur",
    tagline: "Land of Brave Hearts",
    description: "The district that gave India its maximum soldiers, where ancient forts tell stories of valor.",
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80",
    altitude: "400 - 1,100m",
    bestTime: "Oct - March",
    famousFor: ["Sujanpur Tihra", "Nadaun", "Gasota Mahadev", "Historic Forts"],
    coordinates: { lat: 31.6862, lng: 76.5213 }
  },
  {
    id: "11",
    name: "Una",
    slug: "una",
    tagline: "Gateway to Himachal",
    description: "The plains meet the mountains here, where the sacred Chintpurni Temple draws millions of pilgrims.",
    image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80",
    altitude: "350 - 1,200m",
    bestTime: "Oct - March",
    famousFor: ["Chintpurni Temple", "Pong Dam", "Amb", "Shiv Bari Temple"],
    coordinates: { lat: 31.4685, lng: 76.2708 }
  },
  {
    id: "12",
    name: "Bilaspur",
    slug: "bilaspur",
    tagline: "Reservoir of Peace",
    description: "A submerged history beneath the Gobind Sagar Lake, where water sports meet ancient heritage.",
    image: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=800&q=80",
    altitude: "350 - 1,700m",
    bestTime: "Year-round",
    famousFor: ["Gobind Sagar", "Bhakra Dam", "Naina Devi", "Water Sports"],
    coordinates: { lat: 31.3407, lng: 76.7603 }
  }
];

export const getDistrictBySlug = (slug: string): District | undefined => {
  return districts.find(d => d.slug === slug);
};
