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
    image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2020/01/NAKO-1-1.jpg",
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
    image: "https://experiencemyindia.com/wp-content/uploads/2024/09/Kullu-Manali-Blog.jpg",
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
    image: "https://www.tourmyindia.com/socialimg/lahaul-spiti-valley-himachal.jpg",
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
    image: "https://media.istockphoto.com/id/474565222/photo/kangra-fort-dharamshala-himachal-pradesh-india.jpg?s=612x612&w=0&k=20&c=rgAJ1oKbFaFC5Mu3YLI2Nxw2jjy9UDO33L-oqjMgbOI=",
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
    image: "https://antelopetourandtravel.com/wp-content/uploads/2022/07/chambaintro.webp",
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
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/cityscape-of-shimla-himachal-pradesh-city-1-hero?qlt=82&ts=1742171983523",
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
    image: "https://www.buranshtales.com/_next/image?url=%2Fblogs%2Fmandi-himachal-temples-59ae8c54.jpg&w=3840&q=75",
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
    image: "https://travelthrivehub.com/wp-content/uploads/2025/10/Snowfall_solan_city1-e1761131265164.webp",
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
    image: "https://www.adotrip.com/public/images/city/master_images/5e4d2253304d8-Sirmaur_Attractions.jpg",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Hamirpur%2C_Himachal_Pradesh.jpg",
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
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjovCd0xmvMy1ChT6wiPdXB-wpB6JQHYjsH6fWnPajOGpQDCBkllmWAh3yxPq-UVIERKvzo0abcwvFi6UDnR_iDWhG6jUv1qlAqgPe-1USSxXLaHDpN7_E729_LumFd5JlMrlolWxz-Ww/s1600-rw/Gobind+Sagar+Lake.jpg",
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
    image: "https://www.digitalbaalmela.com/wp-content/uploads/2023/08/bilaspur-1.jpg",
    altitude: "350 - 1,700m",
    bestTime: "Year-round",
    famousFor: ["Gobind Sagar", "Bhakra Dam", "Naina Devi", "Water Sports"],
    coordinates: { lat: 31.3407, lng: 76.7603 }
  }
];

export const getDistrictBySlug = (slug: string): District | undefined => {
  return districts.find(d => d.slug === slug);
};
