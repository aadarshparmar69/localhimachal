export interface Trek {
  id: string;
  name: string;
  slug: string;
  district: string;
  difficulty: "Easy" | "Moderate" | "Hard";
  duration: string;
  altitude: string;
  bestSeason: string;
  description: string;
  image: string;
  highlights: string[];
}

export const treks: Trek[] = [
  {
    id: "1",
    name: "Hampta Pass",
    slug: "hampta-pass",
    district: "kullu",
    difficulty: "Moderate",
    duration: "5 Days",
    altitude: "4,270m",
    bestSeason: "June - October",
    description: "Cross from lush Kullu Valley into the barren landscapes of Lahaul through one of Himachal's most dramatic passes.",
    image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800&q=80",
    highlights: ["Dramatic terrain change", "Chandratal Lake", "Camping by streams", "Wildflowers in summer"]
  },
  {
    id: "2",
    name: "Triund",
    slug: "triund",
    district: "kangra",
    difficulty: "Easy",
    duration: "1-2 Days",
    altitude: "2,875m",
    bestSeason: "Year-round",
    description: "The perfect introduction to Himalayan trekking with stunning views of the Dhauladhar range.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    highlights: ["Panoramic Dhauladhar views", "Easy accessibility", "Night camping", "Sunset views"]
  },
  {
    id: "3",
    name: "Pin Parvati Pass",
    slug: "pin-parvati",
    district: "kullu",
    difficulty: "Hard",
    duration: "10-12 Days",
    altitude: "5,319m",
    bestSeason: "July - September",
    description: "One of India's most challenging treks, connecting the green Parvati Valley to the stark Pin Valley in Spiti.",
    image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80",
    highlights: ["High altitude glaciers", "Remote wilderness", "Two distinct landscapes", "Ultimate adventure"]
  },
  {
    id: "4",
    name: "Kheerganga",
    slug: "kheerganga",
    district: "kullu",
    difficulty: "Easy",
    duration: "2 Days",
    altitude: "2,960m",
    bestSeason: "March - November",
    description: "Trek through ancient forests to natural hot springs at the top, where Lord Shiva is said to have meditated.",
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80",
    highlights: ["Natural hot springs", "Parvati Valley views", "Sacred cave", "Forest camping"]
  },
  {
    id: "5",
    name: "Bhrigu Lake",
    slug: "bhrigu-lake",
    district: "kullu",
    difficulty: "Moderate",
    duration: "3 Days",
    altitude: "4,300m",
    bestSeason: "May - October",
    description: "A high-altitude glacial lake where Sage Bhrigu is believed to have meditated, with meadows that change color with seasons.",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&q=80",
    highlights: ["Sacred lake", "360° mountain views", "Colorful meadows", "Short but challenging"]
  },
  {
    id: "6",
    name: "Chandratal Lake",
    slug: "chandratal",
    district: "spiti",
    difficulty: "Easy",
    duration: "1 Day",
    altitude: "4,300m",
    bestSeason: "June - September",
    description: "The 'Moon Lake' is a crescent-shaped wonder surrounded by barren mountains, accessible by vehicle and short trek.",
    image: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=800&q=80",
    highlights: ["Crescent moon shape", "Changing colors", "Camping by lake", "Stargazing"]
  },
  {
    id: "7",
    name: "Sar Pass",
    slug: "sar-pass",
    district: "kullu",
    difficulty: "Moderate",
    duration: "5 Days",
    altitude: "4,220m",
    bestSeason: "March - June",
    description: "Snow-covered trails through pine forests leading to a pass with views of Parvati and Sainj valleys.",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=80",
    highlights: ["Snow slides", "Dense forests", "Valley views", "Adventure camping"]
  },
  {
    id: "8",
    name: "Prashar Lake",
    slug: "prashar-lake",
    district: "mandi",
    difficulty: "Easy",
    duration: "1-2 Days",
    altitude: "2,730m",
    bestSeason: "Year-round",
    description: "A sacred lake with a floating island and a 14th-century pagoda temple dedicated to Sage Prashar.",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80",
    highlights: ["Floating island mystery", "Ancient temple", "Snow views", "Easy weekend trek"]
  },
  {
    id: "9",
    name: "Manimahesh Kailash",
    slug: "manimahesh",
    district: "chamba",
    difficulty: "Moderate",
    duration: "2 Days",
    altitude: "4,080m",
    bestSeason: "Aug - September",
    description: "A sacred pilgrimage trek to the lake at the foot of Mount Manimahesh, Shiva's abode.",
    image: "https://images.unsplash.com/photo-1585136917228-06f238d15e3e?w=800&q=80",
    highlights: ["Sacred pilgrimage", "Manimahesh peak views", "Religious significance", "Mountain lake"]
  },
  {
    id: "10",
    name: "Kinnaur Kailash",
    slug: "kinnaur-kailash",
    district: "kinnaur",
    difficulty: "Hard",
    duration: "5-6 Days",
    altitude: "5,242m",
    bestSeason: "July - September",
    description: "A challenging trek to the sacred Shivling rock formation at Kinnaur Kailash, revered as Shiva's winter home.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    highlights: ["Sacred Shivling", "Parikrama path", "High altitude challenge", "Spiritual journey"]
  },
  {
    id: "11",
    name: "Beas Kund",
    slug: "beas-kund",
    district: "kullu",
    difficulty: "Moderate",
    duration: "3 Days",
    altitude: "3,690m",
    bestSeason: "May - October",
    description: "Trek to the source of River Beas beneath the towering peaks of Pir Panjal range.",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800&q=80",
    highlights: ["Beas River source", "Glacial lake", "Mountain views", "Alpine meadows"]
  },
  {
    id: "12",
    name: "Churdhar",
    slug: "churdhar",
    district: "sirmaur",
    difficulty: "Moderate",
    duration: "2 Days",
    altitude: "3,647m",
    bestSeason: "March - June, Sept - Nov",
    description: "Highest peak of outer Himalayas with ancient Shirgul Mahadev temple at the summit.",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=80",
    highlights: ["Highest outer Himalayan peak", "Ancient temple", "Panoramic views", "Dense forests"]
  }
];

export const getTrekBySlug = (slug: string): Trek | undefined => {
  return treks.find(t => t.slug === slug);
};

export const getTreksByDistrict = (district: string): Trek[] => {
  return treks.filter(t => t.district === district);
};

export const getTreksByDifficulty = (difficulty: Trek["difficulty"]): Trek[] => {
  return treks.filter(t => t.difficulty === difficulty);
};
