/**
 * Local Himachal - SEO Configuration
 * Domain: localhimachal.in
 * 
 * Comprehensive SEO setup for ranking in Google search results
 */

export const SITE_CONFIG = {
  name: "Local Himachal",
  tagline: "Travel Like a Local",
  domain: "localhimachal.in",
  url: "https://localhimachal.in",
  description: "Discover authentic Himachal Pradesh travel experiences. Explore hidden gems, offbeat villages, scenic treks, rich culture, traditional homestays, and local experiences beyond tourist trails.",
  author: "Local Himachal",
  email: "hello@localhimachal.in",
  phone: "+91-XXXXXXXXXX",
  logo: "https://localhimachal.in/favicon.png",
  ogImage: "https://localhimachal.in/og-image.jpg",
  twitterHandle: "@LocalHimachal",
  language: "en-IN",
  locale: "en_IN",
  themeColor: "#3c431e",
  keywords: [
    "Himachal Pradesh travel",
    "offbeat places in Himachal",
    "hidden gems Himachal Pradesh",
    "Himachal trekking",
    "homestays in Himachal",
    "Himachal culture",
    "travel like a local Himachal",
    "unexplored places Himachal",
    "authentic Himachal experiences",
    "Himachal Pradesh tourism",
    "hill stations Himachal",
    "mountain villages India",
    "sustainable travel Himachal",
    "local experiences Himachal Pradesh"
  ]
};

// Page-specific SEO configurations
export const PAGE_SEO = {
  home: {
    title: "Local Himachal | Discover Authentic Himachal Pradesh Travel Experiences",
    description: "Experience Himachal Pradesh like a local. Explore hidden gems, offbeat villages, scenic treks, traditional homestays, and authentic cultural experiences beyond tourist trails. Plan your perfect Himalayan journey.",
    keywords: "Himachal Pradesh travel guide, offbeat Himachal, authentic travel experiences, hidden places Himachal, local Himachal tourism",
    canonical: "https://localhimachal.in/",
    ogType: "website"
  },
  explore: {
    title: "Explore All 12 Districts of Himachal Pradesh | Local Himachal",
    description: "Discover every corner of Himachal Pradesh across all 12 districts. From Kullu's valleys to Lahaul-Spiti's moonscapes, explore detailed guides for Shimla, Manali, Dharamshala, Kinnaur and more.",
    keywords: "Himachal Pradesh districts, Kullu travel, Shimla guide, Manali tourism, Dharamshala travel, Kinnaur valley, Spiti valley, Chamba, Kangra, Mandi",
    canonical: "https://localhimachal.in/explore",
    ogType: "website"
  },
  hiddenGems: {
    title: "Hidden Gems of Himachal Pradesh | Offbeat & Unexplored Places | Local Himachal",
    description: "Discover Himachal's best-kept secrets. Explore remote valleys, sacred lakes, ancient villages, alpine meadows, and mountain passes untouched by mass tourism. Plan your offbeat adventure today.",
    keywords: "hidden places Himachal, offbeat destinations Himachal Pradesh, unexplored villages Himachal, secret spots Himachal, remote valleys India",
    canonical: "https://localhimachal.in/hidden-gems",
    ogType: "website"
  },
  treks: {
    title: "Best Treks in Himachal Pradesh 2025 | Trekking Guide | Local Himachal",
    description: "Complete guide to the best treks in Himachal Pradesh. From easy day hikes to challenging expeditions like Hampta Pass, Pin Parvati, Beas Kund, and Triund. Expert tips, difficulty levels, and best seasons.",
    keywords: "Himachal Pradesh treks, trekking in Himachal, Triund trek, Hampta Pass, Pin Parvati trek, Beas Kund, Himalayan trekking, best treks India",
    canonical: "https://localhimachal.in/treks",
    ogType: "website"
  },
  homestays: {
    title: "Authentic Homestays in Himachal Pradesh | Stay with Locals | Local Himachal",
    description: "Experience genuine Himachali hospitality at authentic homestays. Stay with local families in traditional homes across Kullu, Manali, Spiti, Kinnaur, and more. Immerse yourself in mountain culture.",
    keywords: "homestays Himachal Pradesh, authentic stays Himachal, local family stays, traditional Himachali homes, village homestays India",
    canonical: "https://localhimachal.in/homestays",
    ogType: "website"
  },
  culture: {
    title: "Himachal Pradesh Culture & Traditions | Complete Guide | Local Himachal",
    description: "Explore the rich cultural heritage of Himachal Pradesh. Discover traditional festivals, folk dances, local cuisine, ancient temples, unique architecture, languages, and the spiritual traditions of the Himalayas.",
    keywords: "Himachal culture, Himachali traditions, festivals Himachal Pradesh, folk dances Himachal, Himachali cuisine, temples Himachal, mountain culture India",
    canonical: "https://localhimachal.in/culture",
    ogType: "article"
  },
  plan: {
    title: "Plan Your Himachal Trip | Travel Planner & Guide | Local Himachal",
    description: "Plan your perfect Himachal Pradesh trip with our comprehensive guide. Best time to visit, how to reach, packing essentials, itinerary suggestions, responsible travel tips, and local insights.",
    keywords: "plan Himachal trip, Himachal travel planner, best time visit Himachal, how to reach Himachal, Himachal itinerary, travel tips Himachal Pradesh",
    canonical: "https://localhimachal.in/plan",
    ogType: "website"
  }
};

// District SEO configurations
export const DISTRICT_SEO: Record<string, {
  title: string;
  description: string;
  keywords: string;
}> = {
  kullu: {
    title: "Kullu Valley Travel Guide 2025 | Hidden Gems & Local Experiences | Local Himachal",
    description: "Explore Kullu Valley beyond Manali. Discover Tirthan Valley, Great Himalayan National Park, Kasol, Parvati Valley, and offbeat villages. Complete guide with local insights and travel tips.",
    keywords: "Kullu travel guide, Tirthan Valley, Parvati Valley, Kasol, Great Himalayan National Park, Kullu Manali, offbeat Kullu"
  },
  shimla: {
    title: "Shimla District Travel Guide 2025 | Beyond the Mall Road | Local Himachal",
    description: "Discover Shimla beyond the Mall Road. Explore Kufri, Mashobra, Narkanda, heritage walks, colonial architecture, and hidden spots in the Queen of Hills. Local tips and authentic experiences.",
    keywords: "Shimla travel guide, Shimla tourism, Kufri, Narkanda, heritage Shimla, offbeat Shimla, Shimla hills"
  },
  manali: {
    title: "Manali Travel Guide 2025 | Adventure & Serenity | Local Himachal",
    description: "Experience Manali like never before. From Solang Valley adventures to Old Manali charm, Rohtang Pass, and Hampta Valley. Expert local guide with hidden spots and authentic experiences.",
    keywords: "Manali travel guide, Solang Valley, Old Manali, Rohtang Pass, Hampta Valley, adventure Manali, offbeat Manali"
  },
  spiti: {
    title: "Spiti Valley Complete Travel Guide 2025 | The Middle Land | Local Himachal",
    description: "Journey through Spiti Valley, the cold desert of Himachal. Explore Key Monastery, Chandratal Lake, Kaza, Dhankar, Pin Valley, and ancient Buddhist culture. Best time, permits, and local tips.",
    keywords: "Spiti Valley guide, Kaza, Key Monastery, Chandratal Lake, Pin Valley, Lahaul Spiti, cold desert India"
  },
  kinnaur: {
    title: "Kinnaur Valley Travel Guide 2025 | Land of Gods | Local Himachal",
    description: "Explore Kinnaur, the land where gods reside. Discover Kalpa, Chitkul, Sangla Valley, ancient temples, apple orchards, and the Indo-Tibetan border region. Complete travel guide with local insights.",
    keywords: "Kinnaur travel guide, Kalpa, Chitkul, Sangla Valley, Kinnaur Kailash, apple orchards Kinnaur"
  },
  dharamshala: {
    title: "Dharamshala & McLeod Ganj Travel Guide 2025 | Little Lhasa | Local Himachal",
    description: "Discover Dharamshala, home of Dalai Lama and Tibetan culture. Explore McLeod Ganj, Triund trek, Tibetan monasteries, Bhagsu waterfall, and authentic Tibetan cuisine. Local tips included.",
    keywords: "Dharamshala travel guide, McLeod Ganj, Triund trek, Dalai Lama temple, Tibetan culture, Bhagsu"
  },
  kangra: {
    title: "Kangra Valley Travel Guide 2025 | Temple Trails & Tea Gardens | Local Himachal",
    description: "Journey through Kangra Valley's ancient temples, Palampur tea gardens, and artistic heritage. Visit Kangra Fort, Masroor Rock Cut Temple, and Bir Billing paragliding. Complete local guide.",
    keywords: "Kangra travel guide, Palampur, Bir Billing, Kangra Fort, Masroor Temple, tea gardens Kangra"
  },
  chamba: {
    title: "Chamba Travel Guide 2025 | Ancient Temples & Mountain Heritage | Local Himachal",
    description: "Explore Chamba's 1000-year-old temples, Khajjiar (Mini Switzerland), Dalhousie, and Pangi Valley. Discover Chamba Rumal embroidery, Minjar festival, and untouched mountain culture.",
    keywords: "Chamba travel guide, Khajjiar, Dalhousie, Pangi Valley, Chamba temples, Minjar festival"
  },
  mandi: {
    title: "Mandi District Travel Guide 2025 | Valley of Gods | Local Himachal",
    description: "Discover Mandi, the gateway to Kullu. Explore Prashar Lake, Rewalsar, ancient temples, and the famous Shivaratri fair. Complete guide with offbeat spots and local experiences.",
    keywords: "Mandi travel guide, Prashar Lake, Rewalsar, Mandi temples, Shivaratri Mandi, offbeat Mandi"
  },
  bilaspur: {
    title: "Bilaspur Travel Guide 2025 | Gobind Sagar Lake | Local Himachal",
    description: "Explore Bilaspur, home to the magnificent Gobind Sagar Lake. Discover water sports, ancient temples, wildlife, and the rich history of the region. Local insights and travel tips.",
    keywords: "Bilaspur travel guide, Gobind Sagar Lake, Bhakra Dam, Bilaspur temples, water sports Himachal"
  },
  solan: {
    title: "Solan District Travel Guide 2025 | Mushroom City of India | Local Himachal",
    description: "Discover Solan, the mushroom capital of India. Explore Kasauli, Barog, Mohan Shakti National Heritage Park, and heritage railway. Gateway to Himachal with local insights.",
    keywords: "Solan travel guide, Kasauli, Barog, heritage railway Himachal, mushroom city India"
  },
  hamirpur: {
    title: "Hamirpur District Travel Guide 2025 | Land of High Literacy | Local Himachal",
    description: "Explore Hamirpur, known for education and ancient temples. Discover Nadaun, Sujanpur Tira, Awah Devi temple, and the cultural heritage of this historic region.",
    keywords: "Hamirpur travel guide, Nadaun, Sujanpur Tira, Hamirpur temples, offbeat Himachal"
  },
  una: {
    title: "Una District Travel Guide 2025 | Gateway to Himachal | Local Himachal",
    description: "Discover Una, the plains gateway to Himachal Pradesh. Explore Chintpurni temple, Amb, and the transition from plains to mountains. Local travel tips and authentic experiences.",
    keywords: "Una travel guide, Chintpurni temple, Amb Himachal, gateway Himachal Pradesh"
  },
  sirmaur: {
    title: "Sirmaur District Travel Guide 2025 | Renuka Lake & Temples | Local Himachal",
    description: "Explore Sirmaur, home to sacred Renuka Lake, Nahan, and Churdhar Peak. Discover ancient temples, wildlife sanctuaries, and the cultural heritage of this lesser-known district.",
    keywords: "Sirmaur travel guide, Renuka Lake, Nahan, Churdhar Peak, offbeat Himachal"
  },
  lahaul: {
    title: "Lahaul Valley Travel Guide 2025 | Trans-Himalayan Adventure | Local Himachal",
    description: "Journey through Lahaul Valley beyond Rohtang Pass. Explore Keylong, Udaipur, Trilokinath Temple, and the stark beauty of this trans-Himalayan region. Best time, permits, and local tips.",
    keywords: "Lahaul Valley guide, Keylong, Udaipur Lahaul, Rohtang Pass, trans-Himalayan travel"
  }
};

// Organization Schema
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_CONFIG.url}/#organization`,
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  logo: {
    "@type": "ImageObject",
    url: SITE_CONFIG.logo,
    width: 512,
    height: 512
  },
  description: SITE_CONFIG.description,
  email: SITE_CONFIG.email,
  sameAs: [
    "https://www.instagram.com/localhimachal",
    "https://www.facebook.com/localhimachal",
    "https://twitter.com/localhimachal",
    "https://www.youtube.com/@localhimachal"
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Himachal Pradesh",
    addressCountry: "IN"
  }
});

// Website Schema
export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_CONFIG.url}/#website`,
  url: SITE_CONFIG.url,
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  publisher: {
    "@id": `${SITE_CONFIG.url}/#organization`
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  },
  inLanguage: SITE_CONFIG.language
});

// Travel Agency Schema
export const getTravelAgencySchema = () => ({
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${SITE_CONFIG.url}/#travelagency`,
  name: SITE_CONFIG.name,
  description: "Local Himachal is your authentic guide to Himachal Pradesh. We help travelers discover hidden gems, offbeat destinations, traditional homestays, scenic treks, and genuine cultural experiences beyond tourist trails.",
  url: SITE_CONFIG.url,
  logo: SITE_CONFIG.logo,
  image: SITE_CONFIG.ogImage,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Himachal Pradesh",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "31.1048",
    longitude: "77.1734"
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Himachal Pradesh"
  },
  serviceType: [
    "Travel Guide",
    "Trekking Tours",
    "Homestay Bookings",
    "Cultural Tours",
    "Adventure Travel"
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Himachal Pradesh Travel Experiences",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "TouristTrip",
          name: "Hidden Gems Exploration",
          description: "Discover offbeat and unexplored places in Himachal Pradesh"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "TouristTrip",
          name: "Himalayan Treks",
          description: "Guided trekking experiences from easy walks to challenging expeditions"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "LodgingBusiness",
          name: "Authentic Homestays",
          description: "Stay with local families in traditional Himachali homes"
        }
      }
    ]
  }
});

// Breadcrumb Schema Generator
export const getBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

// FAQ Schema Generator
export const getFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
});

// Article Schema Generator
export const getArticleSchema = ({
  title,
  description,
  image,
  datePublished,
  dateModified,
  url
}: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description: description,
  image: image,
  datePublished: datePublished,
  dateModified: dateModified,
  url: url,
  author: {
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url
  },
  publisher: {
    "@type": "Organization",
    name: SITE_CONFIG.name,
    logo: {
      "@type": "ImageObject",
      url: SITE_CONFIG.logo
    }
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": url
  }
});

// Place Schema Generator (for districts, hidden gems)
export const getPlaceSchema = ({
  name,
  description,
  image,
  latitude,
  longitude,
  address,
  url
}: {
  name: string;
  description: string;
  image: string;
  latitude?: string;
  longitude?: string;
  address: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  name: name,
  description: description,
  image: image,
  url: url,
  address: {
    "@type": "PostalAddress",
    addressLocality: address,
    addressRegion: "Himachal Pradesh",
    addressCountry: "IN"
  },
  ...(latitude && longitude && {
    geo: {
      "@type": "GeoCoordinates",
      latitude: latitude,
      longitude: longitude
    }
  }),
  touristType: ["Adventure tourists", "Nature lovers", "Cultural tourists", "Trekkers"],
  containedInPlace: {
    "@type": "AdministrativeArea",
    name: "Himachal Pradesh, India"
  }
});

// Trek/Hiking Trail Schema Generator
export const getTrekSchema = ({
  name,
  description,
  image,
  difficulty,
  duration,
  distance,
  elevation,
  url
}: {
  name: string;
  description: string;
  image: string;
  difficulty: string;
  duration: string;
  distance?: string;
  elevation?: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: name,
  description: description,
  image: image,
  url: url,
  touristType: ["Trekkers", "Hikers", "Adventure enthusiasts"],
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Difficulty Level",
      value: difficulty
    },
    {
      "@type": "PropertyValue",
      name: "Duration",
      value: duration
    },
    ...(distance ? [{
      "@type": "PropertyValue",
      name: "Distance",
      value: distance
    }] : []),
    ...(elevation ? [{
      "@type": "PropertyValue",
      name: "Max Elevation",
      value: elevation
    }] : [])
  ],
  isAccessibleForFree: true,
  publicAccess: true
});

// Lodging/Homestay Schema Generator
export const getHomestaySchema = ({
  name,
  description,
  image,
  location,
  priceRange,
  url
}: {
  name: string;
  description: string;
  image: string;
  location: string;
  priceRange?: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: name,
  description: description,
  image: image,
  url: url,
  priceRange: priceRange || "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: location,
    addressRegion: "Himachal Pradesh",
    addressCountry: "IN"
  },
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Traditional Accommodation",
      value: true
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Home-cooked Meals",
      value: true
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Local Experience",
      value: true
    }
  ]
});

// Local Business Schema
export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_CONFIG.url}/#localbusiness`,
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  logo: SITE_CONFIG.logo,
  image: SITE_CONFIG.ogImage,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Himachal Pradesh",
    addressCountry: "IN"
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "31.1048",
      longitude: "77.1734"
    },
    geoRadius: "300000"
  },
  knowsLanguage: ["en", "hi"],
  serviceType: "Travel and Tourism Services"
});

// Generate combined schema for homepage
export const getHomePageSchemas = () => [
  getOrganizationSchema(),
  getWebsiteSchema(),
  getTravelAgencySchema(),
  getLocalBusinessSchema()
];

// Helper to stringify schema for script tag
export const stringifySchema = (schema: object | object[]) => 
  JSON.stringify(Array.isArray(schema) ? schema : [schema]);
