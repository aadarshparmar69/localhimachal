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
    image: "https://skyhike.in/uploads/itinerary/2pVRmRVrkeUeuIteBdaFv7YlP8bcTadDKf3Xn1GW.jpg",
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
    image: "https://media1.thrillophilia.com/filestore/upku8nboo69gwpqkt5dpj2jek3oz_triund%20trek%203.jpg",
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
    image: "https://gafindia.in/wp-content/uploads/2024/12/india-pin-parvati01.webp",
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
    image: "https://www.trailhikers.in/wp-content/uploads/2019/11/Kheerganga-Trek-001.jpg",
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
    image: "https://mountainsojourns.com/wp-content/uploads/36_BhriguLakeTrek-Manali.jpg",
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
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/e5/bc/20/the-memserizing-beauty.jpg?w=1200&h=1200&s=1",
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
    image: "https://www.trekupindia.com/blog/storage/sar-pass-trek-trekup-india-scaled-1-1.webp",
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
    image: "https://www.captureatrip.com/_next/image?url=https%3A%2F%2Fd1zvcmhypeawxj.cloudfront.net%2Flocation%2FHimachal%20Pradesh%2Fblogs%2Fprashar-lake-trek-f941e4ecde-qexx7x-webp-0fb0346249-1752061981000.webp&w=3840&q=75",
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
    image: "https://utsav.gov.in/public/uploads/event_cover_image/event_128/16496860702058808643.jpg",
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
    image: "https://www.ntpgroups.com/uploaded_files/thumb_cache/thumb_840_649_kinner.jpg",
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
    image: "https://dwq3yv87q1b43.cloudfront.net/public/blogs/fit-in/1200x675/Blog_20240928-1608963128-1727505792.jpg",
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
    image: "https://www.hptourtravel.com/wp-content/uploads/2024/04/Churdhar_Trek_Gallery_Image_3.webp",
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
