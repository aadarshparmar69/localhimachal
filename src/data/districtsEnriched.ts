export interface HiddenGemPreview {
  name: string;
  description: string;
}

export interface DistrictFood {
  everyday: string[];
  festive: string[];
  note?: string;
}

export interface DistrictFestival {
  name: string;
  description: string;
}

export interface DosDonts {
  dos: string[];
  donts: string[];
}

export interface SeasonalAccess {
  spring: string;
  summer: string;
  monsoon: string;
  autumn: string;
  winter: string;
  bestMonths: string;
}

export interface EnrichedDistrict {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  cinematicIntro: string;
  detailedOverview: string;
  whyItMatters: string;
  image: string;
  altitude: string;
  bestTime: string;
  famousFor: string[];
  coordinates: { lat: number; lng: number };
  
  // Geography & Landscape
  geography: {
    description: string;
    features: string[];
  };
  
  // Famous Places
  famousPlaces: {
    name: string;
    description: string;
  }[];
  
  // Hidden Gems
  hiddenGems: HiddenGemPreview[];
  
  // Culture & Village Life
  culture: {
    overview: string;
    traditions: string[];
    architecture?: string;
  };
  
  // Local Food
  food: DistrictFood;
  
  // Festivals
  festivals: DistrictFestival[];
  
  // Seasonal Accessibility
  seasonalAccess: SeasonalAccess;
  
  // Do's & Don'ts
  dosDonts: DosDonts;
  
  // Local Movement Patterns
  localMovement?: string;
  
  // SEO
  seoTitle: string;
  seoDescription: string;
}

export const enrichedDistricts: EnrichedDistrict[] = [
  {
    id: "1",
    name: "Kullu",
    slug: "kullu",
    tagline: "The Valley Beyond Manali",
    cinematicIntro: `Kullu district is often misunderstood. To most travelers, it begins and ends with Manali—crowded roads, cafés, and quick getaways. But for locals, Kullu is a wide living valley shaped by the Beas River, ancient village republics, forest deities, and slow mountain routines that continue far beyond tourist zones.

Life here is seasonal. Summers are busy with agriculture, tourism, and festivals. Winters slow everything down. Snow closes roads, villages turn inward, and stories replace schedules.`,
    detailedOverview: `Geographically, Kullu stretches from lower mid-hill forests to high alpine meadows and glaciers. The valley acts as a cultural corridor between the lower Himachali regions and the harsher high-altitude landscapes of Lahaul and Spiti. This positioning has shaped Kullu's people—resilient, welcoming, and deeply tied to land and faith.

The Great Himalayan National Park (GHNP), a UNESCO World Heritage Site, lies within Kullu and protects rare flora and fauna. This makes Kullu not just scenic, but ecologically crucial.`,
    whyItMatters: "Kullu is not just a destination—it's a transition zone between modern tourism and ancient mountain living. Those who move slowly here discover something deeper than scenery: a rhythm shaped by rivers, seasons, and belief.",
    image: "https://experiencemyindia.com/wp-content/uploads/2024/09/Kullu-Manali-Blog.jpg",
    altitude: "1,200 - 6,000m",
    bestTime: "March - June, Sept - Nov",
    famousFor: ["Dussehra", "Parvati Valley", "Manikaran", "Great Himalayan NP"],
    coordinates: { lat: 31.9579, lng: 77.1095 },
    geography: {
      description: "Kullu lies along the Beas River, which flows like the district's spine. On either side rise pine-covered slopes, apple orchards, and eventually snow-bound peaks.",
      features: [
        "River valleys (Beas, Tirthan, Sainj)",
        "Dense deodar and pine forests",
        "Alpine pastures (locally called thachs)",
        "High mountain passes and glacial lakes",
        "UNESCO World Heritage Great Himalayan National Park"
      ]
    },
    famousPlaces: [
      { name: "Manali", description: "Kullu's most visible face with cafés, adventure sports, and backpacker culture. While it offers accessibility and infrastructure, it often hides the quieter reality of the valley." },
      { name: "Naggar", description: "Once the capital of Kullu, Naggar still retains cultural depth. The Naggar Castle, wooden temples, and village lanes offer a glimpse into traditional architecture and governance." },
      { name: "Bijli Mahadev", description: "One of the most sacred temples in Himachal, located on a ridge with panoramic views. The lightning-struck Shiva lingam is rebuilt repeatedly, reinforcing local faith in divine cycles." }
    ],
    hiddenGems: [
      { name: "Sainj Valley", description: "Far quieter than Manali, villages like Raila and Shangarh maintain traditional wooden homes and community farming. Shangarh's vast meadow is protected by local beliefs—no loud music, no littering." },
      { name: "Tirthan Valley", description: "Known for trout fishing and forest walks, Tirthan attracts travelers seeking silence. Life revolves around the river, small farms, and guesthouses run by local families." },
      { name: "Malana", description: "An ancient self-governed village with strict rules. Its culture is not a tourist attraction but a living legal system. Respect is essential—photography and behavior are tightly regulated." }
    ],
    culture: {
      overview: "Villages in Kullu operate on shared responsibility. Agriculture, livestock, and forest resources are community-managed. Apple orchards dominate economic life, but seasonal vegetables, maize, and pulses still form the backbone of daily food.",
      traditions: [
        "Village deities (devtas) play a central role in decisions, festivals, and disputes",
        "Kath-Khuni architecture—wood and stone layered for earthquake resistance",
        "Temple oracles consulted for important community matters"
      ],
      architecture: "Houses are traditionally built using Kath-Khuni architecture—wood and stone layered for earthquake resistance. Though modern concrete structures are increasing, older homes remain symbols of identity."
    },
    food: {
      everyday: [
        "Tudkiya Bhath: Spiced rice with lentils and curd",
        "Siddu: Steamed wheat bread stuffed with poppy seeds or nuts",
        "Rajma-chawal (local varieties)"
      ],
      festive: [
        "Dham: A ceremonial meal cooked by hereditary cooks (botis), served on leaf plates",
        "Ghee-rich lentil preparations and yogurt-based curries"
      ],
      note: "Food is seasonal, heavy in winter, lighter in summer."
    },
    festivals: [
      { name: "Kullu Dussehra", description: "Unlike the rest of India, Kullu celebrates Dussehra when others end it. Village deities from across the district gather in Kullu town, symbolizing unity beyond political borders." },
      { name: "Village Fairs", description: "Each village hosts annual fairs dedicated to local deities. These events include folk music, dance (Nati), and communal meals." }
    ],
    seasonalAccess: {
      spring: "March–May: Spring bloom, pleasant weather, trekking season begins",
      summer: "June: Warm days, busy with tourism and agriculture",
      monsoon: "July–August: Landslides common, roads may be affected",
      autumn: "September–November: Clear skies, apple harvest, ideal weather",
      winter: "December–February: Snowfall in higher regions, quiet village life",
      bestMonths: "March–June, September–November"
    },
    dosDonts: {
      dos: [
        "Ask before entering temples",
        "Dress modestly in villages",
        "Support local homestays"
      ],
      donts: [
        "Play loud music in forests or meadows",
        "Litter sacred spaces",
        "Treat villages as picnic spots"
      ]
    },
    localMovement: "Life here is seasonal. Summers are busy with agriculture, tourism, and festivals. Winters slow everything down as snow closes roads and villages turn inward. Many families practice seasonal migration to higher pastures (thachs) with livestock.",
    seoTitle: "Kullu District Travel Guide | Hidden Valleys & Local Culture | Local Himachal",
    seoDescription: "Discover the real Kullu beyond Manali. Explore Sainj Valley, Tirthan, ancient temples, and village life shaped by Beas River and centuries of mountain tradition."
  },
  {
    id: "2",
    name: "Kinnaur",
    slug: "kinnaur",
    tagline: "Where the Mountains Decide",
    cinematicIntro: `Kinnaur is not easily accessible, and locals prefer it that way. Historically isolated and culturally distinct, Kinnaur feels guarded by its terrain—steep valleys, roaring rivers, and snow-bound passes. Entry into the district feels ceremonial, as if the mountains are assessing intent.

The district borders Tibet and retains strong Indo-Tibetan cultural influences. Villages are scattered along cliffs and riverbanks, often appearing carved into the landscape rather than built upon it.`,
    detailedOverview: `Life here is disciplined. Winters are harsh, resources limited, and community cooperation essential. Kinnaur sits at high altitude, ranging from around 2,000 meters to over 6,800 meters. The Sutlej and Baspa rivers cut deep gorges through the district, shaping dramatic terrain.

The environment is fragile. Small ecological disruptions have visible long-term effects, which locals understand deeply. This awareness shapes everything from farming practices to hospitality.`,
    whyItMatters: "Kinnaur does not cater to visitors. It tolerates them. Those who approach with humility often leave transformed—not entertained, but grounded.",
    image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2020/01/NAKO-1-1.jpg",
    altitude: "2,000 - 6,800m",
    bestTime: "April - June, Sept - Oct",
    famousFor: ["Kinnaur Kailash", "Apple Orchards", "Chitkul", "Sangla Valley"],
    coordinates: { lat: 31.5833, lng: 78.4500 },
    geography: {
      description: "Kinnaur sits at high altitude with the Sutlej and Baspa rivers cutting deep gorges through the district, shaping dramatic terrain.",
      features: [
        "Cold desert zones",
        "Apple orchards on steep slopes",
        "Snow peaks like Kinnaur Kailash",
        "Glacial streams and hanging valleys",
        "Fragile high-altitude ecosystems"
      ]
    },
    famousPlaces: [
      { name: "Kalpa", description: "Kalpa offers views of the Kinnaur Kailash range. Sunrise here is revered, as the peaks glow gold. The village blends Hindu and Buddhist traditions seamlessly." },
      { name: "Chitkul", description: "The last inhabited village near the Indo-Tibet border, Chitkul is quiet, orderly, and deeply traditional. Wooden houses line the Baspa River, and winters isolate the village entirely." }
    ],
    hiddenGems: [
      { name: "Roghi Village", description: "Perched above Kalpa, Roghi is known for cliffside views and traditional homes. Life here revolves around orchards and seasonal migration." },
      { name: "Rarang", description: "A lesser-known village with ancient temples and strong Buddhist influence, Rarang remains largely untouched by mass tourism." }
    ],
    culture: {
      overview: "Kinnaur's culture is shaped by both Hindu and Buddhist traditions. Village deities govern social life, while monasteries influence spiritual practice. Polyandry, once common, emerged as a survival strategy in harsh conditions.",
      traditions: [
        "Blend of Hindu and Buddhist traditions",
        "Village deities govern social life",
        "Monasteries influence spiritual practice",
        "Strong community cooperation for survival"
      ],
      architecture: "Homes are built low, thick, and insulated. Winters are spent indoors, repairing tools, weaving wool, and telling stories."
    },
    food: {
      everyday: [
        "Buckwheat rotis",
        "Chilru (local bread)",
        "Apricot oil-based dishes",
        "Dried vegetables for winter use"
      ],
      festive: [
        "Special preparations during Phulaich Festival",
        "Buddhist ritual foods"
      ],
      note: "Food is functional—meant to sustain energy in extreme conditions."
    },
    festivals: [
      { name: "Phulaich Festival", description: "Flower festival celebrating seasonal cycles and the arrival of spring." },
      { name: "Village Deity Processions", description: "Feature masked dances and community celebrations." },
      { name: "Buddhist Ceremonies", description: "Ritual ceremonies held during winter months in monasteries." }
    ],
    seasonalAccess: {
      spring: "April–May: Roads open, pleasant weather begins",
      summer: "June: Accessible, apple blossoms",
      monsoon: "July–August: Landslides possible on NH-5",
      autumn: "September–October: Apple harvest, clear skies, ideal time",
      winter: "November–March: Extreme cold, many areas inaccessible",
      bestMonths: "April–June, September–October"
    },
    dosDonts: {
      dos: [
        "Respect photography restrictions",
        "Ask before entering homes",
        "Dress conservatively"
      ],
      donts: [
        "Disturb religious rituals",
        "Waste water",
        "Rush conversations—people here value patience"
      ]
    },
    localMovement: "Life follows strict seasonal patterns. Winter months see complete isolation of higher villages. Local transport relies on shared jeeps along NH-5. Weekly markets in larger villages serve as social and economic gathering points.",
    seoTitle: "Kinnaur District Travel Guide | Indo-Tibetan Culture & Remote Villages | Local Himachal",
    seoDescription: "Explore Kinnaur's ancient villages, sacred peaks, and Indo-Tibetan culture. Discover Kalpa, Chitkul, and hidden valleys along the Hindustan-Tibet road."
  },
  {
    id: "3",
    name: "Lahaul & Spiti",
    slug: "spiti",
    tagline: "The Middle Land Between Worlds",
    cinematicIntro: `Spiti does not welcome you gently. It strips away comfort, colour, and excess until only essentials remain. Located between Tibet and India, Spiti literally means "The Middle Land"—a place where geography, culture, and belief sit between two worlds. This district is not built for tourism; tourism simply passes through it.

Unlike lush Himachali valleys, Spiti is stark and open. Mountains are bare, shadows are sharp, and the sky feels closer than the earth. Silence here is not empty—it is active, heavy, and instructive.`,
    detailedOverview: `Spiti's people have survived centuries of isolation, scarcity, and extreme climate. Winters last nearly half the year. Roads disappear. Temperatures fall far below zero. What remains is discipline, faith, and community.

Spiti lies at an average altitude of 12,000–14,000 feet. The landscape is cold desert, shaped by wind rather than water. The terrain dictates everything—architecture, clothing, food, travel, and belief systems. Villages are positioned to maximize sunlight and minimize wind exposure.`,
    whyItMatters: "Spiti does not offer comfort. It offers clarity. Many leave changed—not relaxed, but reoriented. It is not a place you consume. It is a place you endure and remember.",
    image: "https://www.tourmyindia.com/socialimg/lahaul-spiti-valley-himachal.jpg",
    altitude: "3,650 - 6,600m",
    bestTime: "June - September",
    famousFor: ["Key Monastery", "Chandratal", "Dhankar", "Pin Valley"],
    coordinates: { lat: 32.2996, lng: 77.6135 },
    geography: {
      description: "Spiti is a cold desert, shaped by wind rather than water. The Spiti River cuts through the valley, forming steep cliffs and deep gorges.",
      features: [
        "High-altitude plateaus (12,000–14,000 feet average)",
        "Glacial streams",
        "Fossil-rich mountains",
        "Minimal vegetation",
        "Extreme temperature shifts"
      ]
    },
    famousPlaces: [
      { name: "Kaza", description: "The administrative center and the closest thing to a town. Even here, life remains slow. Shops close early, power cuts are common, and people prioritize seasons over schedules." },
      { name: "Tabo", description: "Less a village and more a spiritual landmark. Its monastery, over 1,000 years old, is among the most important in the Himalayan Buddhist world." }
    ],
    hiddenGems: [
      { name: "Langza", description: "Known for its fossil-rich land and the iconic Buddha statue overlooking the valley, Langza is quiet, wind-swept, and deeply agricultural." },
      { name: "Hikkim", description: "Home to one of the world's highest post offices, Hikkim is not a novelty for locals—it is simply functional survival at altitude." },
      { name: "Demul", description: "Represents sustainable living. The village runs on solar energy, community cooperation, and minimal dependency on outside resources." }
    ],
    culture: {
      overview: "Spitian culture is shaped by Tibetan Buddhism. Monasteries are not tourist attractions but governance and education centers. Monks are respected advisors. Rituals mark seasons, harvests, and transitions.",
      traditions: [
        "Community decisions are collective",
        "Water usage, farming schedules planned together",
        "Monasteries serve as governance centers",
        "Individualism is secondary to survival"
      ],
      architecture: "Homes are built using mud bricks with flat roofs, designed to retain heat and collect snowmelt. Windows are small, walls thick, and interiors simple."
    },
    food: {
      everyday: [
        "Tingmo (steamed bread)",
        "Thukpa (noodle soup)",
        "Pea-based curries",
        "Barley preparations",
        "Butter tea"
      ],
      festive: [
        "Special monastery feast preparations",
        "Ceremonial butter tea ceremonies"
      ],
      note: "Food is functional, not decorative. Vegetables are seasonal and limited. Many foods are dried and stored for winter. Meals are warm, filling, and repetitive—by necessity."
    },
    festivals: [
      { name: "Losar (Tibetan New Year)", description: "Marks renewal and spiritual cleansing. Homes are cleaned, prayers offered, and community meals shared." },
      { name: "Monastery Mask Dances", description: "Performed during special festivals, these dances depict the victory of good over ignorance and fear. Festivals are not entertainment—they are spiritual reinforcement." }
    ],
    seasonalAccess: {
      spring: "May: Roads begin to open, still cold",
      summer: "June–August: Only reliable travel window",
      monsoon: "Minimal monsoon impact due to rain shadow",
      autumn: "September: Last good month before winter closure",
      winter: "October–May: Extreme cold, road closures, complete isolation",
      bestMonths: "June–September"
    },
    dosDonts: {
      dos: [
        "Acclimatize slowly (mandatory)",
        "Respect monastery rules",
        "Carry essentials—supplies are limited"
      ],
      donts: [
        "Rush itineraries",
        "Treat locals as photo subjects",
        "Waste water or electricity"
      ]
    },
    localMovement: "Even in summer, nights are cold and oxygen levels low. Local transport is sparse—shared jeeps run on fixed routes. Villages coordinate for supplies and emergencies. Winter sees complete isolation with stored food sustaining communities for months.",
    seoTitle: "Spiti Valley Travel Guide | Ancient Monasteries & High Desert | Local Himachal",
    seoDescription: "Experience Spiti's ancient Buddhist monasteries, stark high-altitude desert landscapes, and traditional villages where life moves at the pace of centuries."
  },
  {
    id: "4",
    name: "Kangra",
    slug: "kangra",
    tagline: "Where Faith, Art, and Landscape Meet",
    cinematicIntro: `Kangra is the emotional heart of Himachal Pradesh. Green valleys, flowing rivers, ancient temples, and layered history make it one of the most culturally rich districts in the state. Unlike high-altitude regions, Kangra is accessible, fertile, and densely inhabited.

This accessibility shaped its past. Kangra was a center of power, art, and invasion. Kingdoms rose and fell here. Empires fought over it. Yet local culture survived, quietly evolving.`,
    detailedOverview: `Kangra does not overwhelm with altitude or isolation. It invites with balance. Nestled between the Shivalik hills and the Dhauladhar range, Kangra enjoys a moderate climate and abundant water resources. The region supports agriculture, education, and art in equal measure.

The district is the birthplace of Kangra miniature paintings, one of India's most refined art forms. These paintings depict mythology, romance, and daily life with delicate precision.`,
    whyItMatters: "Kangra is where Himachal's softness lives. It balances devotion, art, and nature without extremes. Those who listen here learn history—not from books, but from land.",
    image: "https://media.istockphoto.com/id/474565222/photo/kangra-fort-dharamshala-himachal-pradesh-india.jpg?s=612x612&w=0&k=20&c=rgAJ1oKbFaFC5Mu3YLI2Nxw2jjy9UDO33L-oqjMgbOI=",
    altitude: "427 - 5,033m",
    bestTime: "Feb - April, Sept - Nov",
    famousFor: ["Dharamshala", "McLeodganj", "Kangra Fort", "Palampur Tea"],
    coordinates: { lat: 32.0998, lng: 76.2691 },
    geography: {
      description: "Nestled between the Shivalik hills and the Dhauladhar range, Kangra enjoys a moderate climate and abundant water resources.",
      features: [
        "Wide river valleys",
        "Tea gardens",
        "Forested hills",
        "Snow-capped mountains in the north",
        "Fertile agricultural land"
      ]
    },
    famousPlaces: [
      { name: "Dharamshala", description: "Divided into Lower Dharamshala and McLeod Ganj, the town blends Tibetan exile culture with Himachali life. It is spiritual, political, and cultural." },
      { name: "Palampur", description: "Known for tea gardens and colonial-era planning, Palampur offers quiet landscapes and agricultural heritage." }
    ],
    hiddenGems: [
      { name: "Kareri Village", description: "A traditional village near a high-altitude lake, Kareri balances trekking culture with village life." },
      { name: "Gunehar", description: "An art-forward village where local life and creative spaces coexist respectfully." }
    ],
    culture: {
      overview: "Kangra is one of the most sacred regions in Himachal, with temples often dictating town locations. Art here is inherited, not invented—from Kangra miniature paintings to handwoven textiles.",
      traditions: [
        "Kangra miniature paintings—refined art depicting mythology and daily life",
        "Handwoven textiles and metal temple art",
        "Wood carving traditions",
        "Faith shapes geography—temples dictate town locations"
      ]
    },
    food: {
      everyday: [
        "Kangri Dham",
        "Madra (chickpea in yogurt)",
        "Millet rotis",
        "Seasonal vegetables"
      ],
      festive: [
        "Elaborate Dham feasts",
        "Temple prasad preparations"
      ],
      note: "Kangra cuisine is simpler and lighter compared to high-altitude districts. Food is closely tied to agriculture and festivals."
    },
    festivals: [
      { name: "Shivratri Celebrations", description: "Major temple celebrations across the district with night-long worship." },
      { name: "Temple Fairs", description: "Regular fairs at major temples drawing pilgrims from across the region." },
      { name: "Tibetan Festivals", description: "Celebrated in McLeod Ganj, blending with local Himachali culture." }
    ],
    seasonalAccess: {
      spring: "February–April: Spring bloom, pleasant weather",
      summer: "May–June: Warm but comfortable in hills",
      monsoon: "July–August: Humid, heavy rainfall",
      autumn: "September–November: Clear views, ideal weather",
      winter: "December–January: Cold but accessible",
      bestMonths: "February–April, September–November"
    },
    dosDonts: {
      dos: [
        "Respect religious spaces",
        "Learn local history",
        "Explore beyond Dharamshala"
      ],
      donts: [
        "Reduce Kangra to just cafés",
        "Ignore rural areas",
        "Rush temple visits"
      ]
    },
    localMovement: "Well-connected by road with regular bus services. Local markets (haats) operate weekly in different villages. Pilgrimage routes see heavy traffic during festival seasons. Tea garden areas have their own seasonal rhythms.",
    seoTitle: "Kangra District Travel Guide | Temples, Tea Gardens & Tibetan Culture | Local Himachal",
    seoDescription: "Explore Kangra's sacred temples, Dharamshala's Tibetan culture, Palampur's tea gardens, and the birthplace of Kangra miniature paintings."
  },
  {
    id: "5",
    name: "Chamba",
    slug: "chamba",
    tagline: "The Timeless Kingdom of Stone, Silence, and Sacred Art",
    cinematicIntro: `Chamba feels like a place that chose not to move forward too quickly. While much of Himachal adapted to roads, tourism, and modern trade, Chamba held onto its rhythm. The district carries the dignity of an old kingdom—measured, graceful, and deeply rooted in tradition.

The Ravi River flows through the heart of the district, shaping settlements, agriculture, and trade routes. Life here is slower, shaped by long winters and short agricultural cycles.`,
    detailedOverview: `Historically, Chamba was an independent princely state for nearly a thousand years. Its isolation by mountains preserved its culture, language, and art forms. Even today, Chamba does not perform for visitors. It exists as it always has—quietly confident in its identity.

Chamba lies in the northwestern part of Himachal Pradesh and is one of the most geographically diverse districts. Altitude varies dramatically—from around 800 meters to over 6,000 meters—creating multiple climate zones within the same district.`,
    whyItMatters: "Chamba represents continuity. It shows what Himachal looked like before speed arrived—and why slowing down still matters.",
    image: "https://antelopetourandtravel.com/wp-content/uploads/2022/07/chambaintro.webp",
    altitude: "800 - 6,000m",
    bestTime: "April - June, Sept - Oct",
    famousFor: ["Khajjiar", "Chamba Rumal", "Manimahesh", "Pangi Valley"],
    coordinates: { lat: 32.5534, lng: 76.1258 },
    geography: {
      description: "Chamba lies in the northwestern part of Himachal Pradesh with dramatic altitude variation creating multiple climate zones.",
      features: [
        "Deep river valleys (Ravi, Chenab)",
        "Dense forests",
        "Snow-covered passes",
        "Alpine meadows",
        "Remote tribal regions like Pangi and Bharmour"
      ]
    },
    famousPlaces: [
      { name: "Chamba Town", description: "Set along the Ravi River, Chamba town is the cultural core. Its temples, palaces, and old markets reflect refined hill architecture with old-world charm." },
      { name: "Bharmour", description: "Once the capital of Chamba, Bharmour is sacred and austere. It sits at high altitude and serves as a gateway to tribal areas and major pilgrimage routes." },
      { name: "Khajjiar", description: "Often called 'Mini Switzerland of India,' Khajjiar is scenic but beyond the meadow lies a deeper forest ecology worth exploring quietly." }
    ],
    hiddenGems: [
      { name: "Pangi Valley", description: "Remote, rugged, and raw. Villages here depend on subsistence farming, forest resources, and strong community networks. Roads are unreliable, winters extreme, and life deeply resilient." },
      { name: "Holi Village", description: "Near Bharmour, acts as a base for treks and cultural exploration. Life revolves around shepherding, seasonal migration, and faith." },
      { name: "Kugti Village", description: "Gateway to the Kugti Pass, this village remains deeply traditional with wooden homes and customs unchanged for generations." }
    ],
    culture: {
      overview: "Chamba's culture is conservative, artistic, and ritual-driven. Social life revolves around festivals, agricultural cycles, and religious observances. Village councils and temple committees still play significant roles in governance.",
      traditions: [
        "Chamba Rumal—unique embroidered textile blending Pahari painting with needlework",
        "Traditional attire including Chola (long woolen robe) and handcrafted caps",
        "Silver jewelry traditions",
        "Temple committees govern disputes and festivals"
      ]
    },
    food: {
      everyday: [
        "Madra (chickpea curry in yogurt)",
        "Sepdi (black gram preparation)",
        "Maize and wheat rotis",
        "Seasonal greens and lentils"
      ],
      festive: [
        "Dham (ceremonial meal)",
        "Special preparations during Minjar Fair"
      ],
      note: "Daily food is practical and locally sourced. Food changes with altitude—higher villages rely more on dried foods and ghee."
    },
    festivals: [
      { name: "Minjar Fair", description: "The most important festival of Chamba, celebrating agricultural abundance and river worship. Locals dress traditionally, and processions honor regional deities." },
      { name: "Mani Mahesh Yatra", description: "A major pilgrimage to the sacred Mani Mahesh Lake, undertaken by thousands every year. It reflects deep Shaivite belief and physical endurance." }
    ],
    seasonalAccess: {
      spring: "April–May: Pleasant weather, roads opening",
      summer: "June: Accessible roads, good weather",
      monsoon: "July–August: Heavy rainfall, landslides possible",
      autumn: "September–October: Clear skies, cultural festivals",
      winter: "November–March: Harsh, many areas inaccessible including Pangi",
      bestMonths: "April–June, September–October"
    },
    dosDonts: {
      dos: [
        "Dress modestly",
        "Ask before photographing people",
        "Respect religious boundaries"
      ],
      donts: [
        "Rush conversations",
        "Disrespect temple spaces",
        "Treat tribal regions casually"
      ]
    },
    localMovement: "Community bonds are strong because survival once depended on them. Pangi Valley remains one of the most isolated regions, accessible only for a few months each year. Weekly markets in Chamba town serve as gathering points for surrounding villages.",
    seoTitle: "Chamba District Travel Guide | Ancient Temples & Remote Valleys | Local Himachal",
    seoDescription: "Discover Chamba's thousand-year heritage, Pangi Valley's remote communities, sacred Manimahesh pilgrimage, and traditional Chamba Rumal art."
  },
  {
    id: "6",
    name: "Shimla",
    slug: "shimla",
    tagline: "Beyond the Mall Road: Power, Pines, and Quiet Villages",
    cinematicIntro: `Shimla is often misunderstood as a hill station frozen in colonial postcards. In reality, Shimla district is layered—political, cultural, agricultural, and deeply lived-in. It is the administrative heart of Himachal Pradesh, yet also home to apple farmers, forest communities, and villages that function far away from tourist imagination.

Shimla district is not about escape. It is about coexistence—between governance and grazing land, between modern institutions and village councils, between tourism and daily life.`,
    detailedOverview: `When the British declared Shimla the summer capital of India, they reshaped its hills with roads, churches, schools, and governance systems. That colonial layer still exists, but beneath it lies an older mountain rhythm that continues in surrounding villages and valleys.

Shimla district lies in the lower to mid-Himalayan range, with elevations ranging from about 300 meters to over 6,000 meters in higher reaches. The climate is moderate compared to higher districts, making it suitable for year-round habitation.`,
    whyItMatters: "Shimla shows how Himachal balances power and people. It is not the prettiest district, but it is one of the most influential—and understanding it explains much of the state's direction.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/cityscape-of-shimla-himachal-pradesh-city-1-hero?qlt=82&ts=1742171983523",
    altitude: "300 - 6,000m",
    bestTime: "Year-round",
    famousFor: ["Mall Road", "Toy Train", "Kufri", "Colonial Architecture"],
    coordinates: { lat: 31.1048, lng: 77.1734 },
    geography: {
      description: "Shimla district lies in the lower to mid-Himalayan range with moderate climate suitable for year-round habitation.",
      features: [
        "Dense pine and deodar forests",
        "Ridge-top towns",
        "Apple orchards",
        "Deep valleys connecting to Sirmaur and Kullu regions",
        "Snowfall in higher areas during winter"
      ]
    },
    famousPlaces: [
      { name: "Shimla Town", description: "The capital city divided between colonial heritage zones and administrative sectors. Mall Road, Ridge, and Christ Church dominate tourist movement, but represent only a fraction of district life." },
      { name: "Theog & Kotgarh", description: "Central to Himachal's apple economy. Kotgarh, often called the 'apple bowl of India,' is where apple cultivation began during colonial times." },
      { name: "Jakhoo Temple", description: "Dedicated to Lord Hanuman at Shimla's highest point. It is not just a viewpoint but a space of daily worship for locals." }
    ],
    hiddenGems: [
      { name: "Mashobra", description: "A forested town with old British bungalows. Life here revolves around walking trails, schools, and apple orchards—calm and residential." },
      { name: "Tattapani Belt", description: "Famous for natural hot springs, reflecting traditional healing practices and river-based livelihoods." },
      { name: "Naldehra", description: "Known for its golf course and forests, representing Shimla's quieter side where leisure meets nature without noise." }
    ],
    culture: {
      overview: "Shimla district blends rural Himachali culture with urban administration. In villages, life still follows agricultural calendars. In town areas, it follows office hours and academic schedules.",
      traditions: [
        "Traditional village governance through panchayats remains active",
        "Festivals, marriages, and disputes are still community affairs",
        "Kath-Khuni architecture visible in older villages"
      ],
      architecture: "Kath-Khuni architecture is visible in older villages, though modern construction is increasingly replacing traditional homes."
    },
    food: {
      everyday: [
        "Aloo palda",
        "Channa madra",
        "Seasonal vegetables",
        "Rice and wheat rotis"
      ],
      festive: [
        "Dham, served during weddings and temple festivals",
        "Ghee-rich lentils and yogurt-based curries"
      ],
      note: "Food habits reflect moderate climate—less heavy than high-altitude districts, but richer than plains."
    },
    festivals: [
      { name: "Summer Festival", description: "A cultural event showcasing folk music, dance, and crafts from across Himachal." },
      { name: "Village Fairs", description: "Each village celebrates its deity's annual festival, involving processions, music, and communal meals." }
    ],
    seasonalAccess: {
      spring: "March–May: Pleasant weather, apple blossoms",
      summer: "June: Warm, tourist season",
      monsoon: "July–August: Landslides possible",
      autumn: "September–November: Clear skies, harvest season",
      winter: "December–February: Snow in higher regions, quiet villages",
      bestMonths: "Year-round, each season has its character"
    },
    dosDonts: {
      dos: [
        "Explore beyond Mall Road",
        "Respect village privacy",
        "Support local produce"
      ],
      donts: [
        "Treat Shimla as only a viewpoint city",
        "Disrespect forest zones",
        "Ignore rural areas"
      ]
    },
    localMovement: "Well-connected with Kalka-Shimla railway (UNESCO heritage), extensive road network. Town life follows office and academic schedules. Village areas maintain agricultural calendars with seasonal markets.",
    seoTitle: "Shimla District Travel Guide | Colonial Heritage & Apple Country | Local Himachal",
    seoDescription: "Discover Shimla beyond Mall Road. Explore apple orchards of Kotgarh, quiet villages of Mashobra, and the colonial heritage that shaped modern Himachal."
  },
  {
    id: "7",
    name: "Mandi",
    slug: "mandi",
    tagline: "Where Rivers Carry Faith and Festivals Never End",
    cinematicIntro: `Mandi is a spiritual crossroads. Often overlooked by travelers rushing to higher destinations, Mandi quietly holds one of the richest temple networks in Himachal Pradesh. Known as the "Varanasi of the Hills," the district's identity is inseparable from devotion, rivers, and ritual.

Life in Mandi moves around water. The Beas, Uhl, and other rivers shape agriculture, settlement patterns, and belief systems.`,
    detailedOverview: `Historically, Mandi was an important trade center connecting Kullu, Kangra, and Lahaul. This connectivity brought prosperity and spiritual exchange. Even today, pilgrims outnumber tourists here.

Mandi lies in central Himachal, acting as a gateway between lower and upper regions. Its geography is gentler than high-altitude districts but still distinctly mountainous. This geography supports stable settlements and long-standing temple towns.`,
    whyItMatters: "Mandi teaches that devotion can shape geography and time. It reminds travelers that movement is not always upward—sometimes depth lies in the valley.",
    image: "https://www.buranshtales.com/_next/image?url=%2Fblogs%2Fmandi-himachal-temples-59ae8c54.jpg&w=3840&q=75",
    altitude: "760 - 5,669m",
    bestTime: "Feb - April, Sept - Nov",
    famousFor: ["Prashar Lake", "Rewalsar", "Shivaratri Fair", "Janjehli"],
    coordinates: { lat: 31.7152, lng: 76.9314 },
    geography: {
      description: "Mandi lies in central Himachal, acting as a gateway between lower and upper regions with gentler geography than high-altitude districts.",
      features: [
        "River valleys (Beas, Uhl)",
        "Forested hills",
        "Moderate climate",
        "Fertile agricultural land",
        "Temple towns along rivers"
      ]
    },
    famousPlaces: [
      { name: "Mandi Town", description: "Located on the banks of the Beas, Mandi town hosts over 80 ancient temples. Unlike tourist centers, these temples remain active daily worship spaces." },
      { name: "Rewalsar", description: "A sacred town centered around a lake revered by Hindus, Buddhists, and Sikhs. The coexistence of faiths here is organic, not symbolic." },
      { name: "Prashar Lake", description: "Perched at high altitude, Prashar is sacred and scenic. The floating island within the lake holds mythological significance." }
    ],
    hiddenGems: [
      { name: "Barot Valley", description: "Once a hydroelectric project site, Barot has transformed into a quiet valley with forests, rivers, and village life intact." },
      { name: "Uhl River Belt", description: "Less visited but vital to local agriculture and hydroelectricity, this region reflects human-river coexistence." }
    ],
    culture: {
      overview: "Mandi's culture is deeply religious but inclusive. Temples host daily rituals, festivals, and fairs that serve as social gatherings. The devta system (local deities) is active and influential.",
      traditions: [
        "Devtas (local deities) carried in palanquins during festivals",
        "Over 80 ancient temples with active daily worship",
        "Multi-faith coexistence at Rewalsar",
        "Temple-centered social gatherings"
      ]
    },
    food: {
      everyday: [
        "Siddu",
        "Lentil curries",
        "Rice and seasonal vegetables"
      ],
      festive: [
        "Dham (festive meal)",
        "Special temple prasad"
      ],
      note: "Food in Mandi reflects central Himachali cuisine. Food is shared communally during festivals, reinforcing social bonds."
    },
    festivals: [
      { name: "Shivratri Fair", description: "One of the largest fairs in Himachal, where hundreds of deities gather in Mandi. It is both religious and cultural—a week-long celebration." },
      { name: "Temple Fairs", description: "Smaller, village-level festivals happen throughout the year, each tied to local legends and agricultural cycles." }
    ],
    seasonalAccess: {
      spring: "February–April: Festivals and mild weather",
      summer: "May–June: Pleasant temperatures",
      monsoon: "July–August: Rivers swell, caution advised",
      autumn: "September–November: Clear skies, ideal weather",
      winter: "December–January: Cold but accessible",
      bestMonths: "February–April, September–November"
    },
    dosDonts: {
      dos: [
        "Observe temple etiquette",
        "Attend local fairs respectfully",
        "Engage with locals patiently"
      ],
      donts: [
        "Reduce Mandi to a transit stop",
        "Ignore religious significance",
        "Disrupt rituals"
      ]
    },
    localMovement: "Central location makes it a natural transit hub. Pilgrims visit throughout the year, with major influx during Shivratri. Local transport connects to Kullu, Shimla, and Dharamshala. Weekly markets serve surrounding villages.",
    seoTitle: "Mandi District Travel Guide | Temples, Lakes & Spiritual Heritage | Local Himachal",
    seoDescription: "Explore Mandi, the 'Varanasi of Hills' with 80+ ancient temples, sacred Prashar Lake, multi-faith Rewalsar, and the famous Shivratri Fair."
  },
  {
    id: "8",
    name: "Solan",
    slug: "solan",
    tagline: "Quiet Hills, Growing Minds, and Overlooked Landscapes",
    cinematicIntro: `Solan is rarely anyone's first destination—and that is exactly its strength. Nestled between Shimla and the plains, Solan district represents transition. It is where hills begin to soften, temperatures rise slightly, and life becomes more evenly paced.

Known as the "Mushroom City of India," Solan balances agriculture, education, and small-scale industry. It does not sell itself loudly, but it sustains itself steadily.`,
    detailedOverview: `Solan lies in the south-western part of Himachal Pradesh, closer to the Shivalik range. Its hills are gentler, valleys wider, and forests less dense than upper regions. This geography supports farming, research institutions, and permanent settlements.

Solan is less about spectacle and more about stability. Many residents work in education, pharmaceuticals, agriculture, or research. Community life centers around schools, markets, and local festivals.`,
    whyItMatters: "Solan shows that not every place needs drama to matter. It represents the everyday backbone of Himachal—functional, grounded, and quietly essential.",
    image: "https://travelthrivehub.com/wp-content/uploads/2025/10/Snowfall_solan_city1-e1761131265164.webp",
    altitude: "300 - 3,647m",
    bestTime: "Year-round",
    famousFor: ["Kasauli", "Mohan Shakti Heritage Park", "Barog", "Chail"],
    coordinates: { lat: 30.9045, lng: 77.0967 },
    geography: {
      description: "Solan lies closer to the Shivalik range with gentler hills, wider valleys, and moderate climate year-round.",
      features: [
        "Rolling hills",
        "Mixed forests",
        "Agricultural fields",
        "Moderate climate year-round",
        "Research and educational institutions"
      ]
    },
    famousPlaces: [
      { name: "Solan Town", description: "A functional hill town with markets, colleges, and administrative offices. Life here revolves around work, study, and family routines." },
      { name: "Barog", description: "A small hill station known for its quiet atmosphere and colonial-era railway tunnel—part of the Kalka-Shimla heritage railway." },
      { name: "Mohan Shakti Heritage Park", description: "A spiritual and cultural complex dedicated to Indian philosophy and art, reflecting modern interpretations of traditional belief systems." }
    ],
    hiddenGems: [
      { name: "Dagshai", description: "A historic cantonment town with old churches, jails, and forest trails. Quiet and atmospheric, Dagshai reflects colonial military life." },
      { name: "Yung Tung Tea Estate Area", description: "Small tea-growing patches and walking trails exist beyond mainstream tourism, offering peaceful exploration." }
    ],
    culture: {
      overview: "Solan's culture is pragmatic. Many residents work in education, pharmaceuticals, agriculture, or research. Village life remains active, with farming and livestock still forming economic backbones.",
      traditions: [
        "Education highly valued",
        "Strong pharmaceutical and research sector",
        "Traditional attire worn mostly during festivals",
        "Less seasonal migration than higher districts"
      ]
    },
    food: {
      everyday: [
        "Siddu",
        "Lentil-based curries",
        "Seasonal vegetables",
        "Rice and chapatis"
      ],
      festive: [
        "Local festival preparations",
        "Community feast dishes"
      ],
      note: "Cuisine mirrors lower Himachali food habits. Food is lighter, less ghee-heavy than upper districts."
    },
    festivals: [
      { name: "Local Temple Fairs", description: "Modest, community-focused celebrations tied to seasonal cycles." },
      { name: "Harvest Celebrations", description: "Mark agricultural milestones with community gatherings." },
      { name: "School Cultural Programs", description: "Given the education focus, academic celebrations are significant community events." }
    ],
    seasonalAccess: {
      spring: "March–May: Mild temperatures, pleasant",
      summer: "June–July: Warm but manageable",
      monsoon: "August–September: Rainfall but accessible",
      autumn: "October–November: Clear skies",
      winter: "December–February: Cool but accessible",
      bestMonths: "Year-round, suitable for all seasons"
    },
    dosDonts: {
      dos: [
        "Respect residential nature",
        "Explore slowly",
        "Engage with local markets"
      ],
      donts: [
        "Expect nightlife or heavy tourism",
        "Rush experiences",
        "Overlook cultural subtlety"
      ]
    },
    localMovement: "Well-connected to Chandigarh and Shimla by road and rail. Regular local transport. Less seasonal variation in movement patterns. Markets and institutions provide year-round activity.",
    seoTitle: "Solan District Travel Guide | Quiet Hills & Colonial Heritage | Local Himachal",
    seoDescription: "Discover Solan's quiet charm—historic Dagshai, heritage Barog tunnel, educational institutions, and the steady rhythm of everyday Himachal life."
  },
  {
    id: "9",
    name: "Sirmaur",
    slug: "sirmaur",
    tagline: "Forests, Faith, and Forgotten Trails",
    cinematicIntro: `Sirmaur is one of Himachal Pradesh's least spoken districts—and one of its most preserved. Sitting along the southern edge of the state, bordered by Uttarakhand and Haryana, Sirmaur is defined by forests, deep ravines, and a lifestyle that has changed far less than neighboring regions.

Unlike districts shaped by tourism or high-altitude drama, Sirmaur is subtle. It does not impress instantly. Its value lies in long walks, quiet villages, and spiritual landscapes that locals protect instinctively.`,
    detailedOverview: `Historically, Sirmaur was an independent princely state, ruled from Nahan, and its culture reflects a blend of hill traditions and plains influence. Life here is slow, agricultural, and deeply community-driven.

Sirmaur's geography is diverse but underappreciated. The terrain is rugged but greener than high-altitude regions. Forests cover a significant portion of the district and are closely guarded by both government and local belief systems.`,
    whyItMatters: "Sirmaur represents the quieter soul of Himachal—untouched not by isolation, but by choice. It reminds travelers that not every place wants to be discovered.",
    image: "https://www.adotrip.com/public/images/city/master_images/5e4d2253304d8-Sirmaur_Attractions.jpg",
    altitude: "300 - 3,647m",
    bestTime: "March - June, Sept - Nov",
    famousFor: ["Renuka Lake", "Churdhar Trek", "Nahan", "Haripurdhar"],
    coordinates: { lat: 30.5988, lng: 77.2846 },
    geography: {
      description: "Sirmaur spans dense forests, low to mid-Himalayan hills, and deep river valleys with rugged but green terrain.",
      features: [
        "Dense forests (closely guarded)",
        "Low to mid-Himalayan hills",
        "Deep river valleys",
        "Sacred lakes and peaks",
        "Moderate rainfall, accessible most of the year"
      ]
    },
    famousPlaces: [
      { name: "Nahan", description: "The district headquarters is calm and well-planned. Built around a historic fort, the town reflects royal planning rather than tourist chaos." },
      { name: "Renuka Lake", description: "Associated with the legend of Goddess Renuka, this sacred lake is surrounded by forested hills. It is meant for reflection, not activity." },
      { name: "Paonta Sahib", description: "A major Sikh pilgrimage site reflecting Sirmaur's religious diversity and historical significance during Guru Gobind Singh Ji's time." }
    ],
    hiddenGems: [
      { name: "Churdhar Peak", description: "The highest peak outside the Greater Himalayas, both a trekking destination and sacred site. Local shepherds consider it a spiritual path, not a hike." },
      { name: "Habban Valley", description: "Often overlooked, Habban is lush, quiet, and deeply rural with apple orchards, forest paths, and simple village homes." },
      { name: "Sangrah Region", description: "A cluster of villages surrounded by dense forests, reflecting traditional agriculture and forest-based livelihoods." }
    ],
    culture: {
      overview: "Sirmaur's culture is conservative and deeply rooted in tradition. People are soft-spoken, reserved, and observant. Trust is earned slowly but sincerely.",
      traditions: [
        "Devta (local deity) system remains influential",
        "Temple authorities involved in land and festival decisions",
        "Traditional attire worn mostly during festivals",
        "Strong village council systems"
      ]
    },
    food: {
      everyday: [
        "Mandua (finger millet) rotis",
        "Seasonal vegetables",
        "Lentil curries",
        "Rice dishes during festivals"
      ],
      festive: [
        "Special preparations for Renuka Fair",
        "Temple festival foods"
      ],
      note: "Cuisine reflects mixed geography. Food is lighter than high-altitude regions but more rustic than plains cuisine."
    },
    festivals: [
      { name: "Renuka Fair", description: "Held annually near Renuka Lake, this fair is both religious and cultural. Locals gather for worship, trade, and community interaction." },
      { name: "Village Temple Fairs", description: "Smaller festivals tied to agricultural cycles and local legends, reinforcing identity rather than attracting crowds." }
    ],
    seasonalAccess: {
      spring: "March–May: Ideal weather, forest greenery",
      summer: "June: Pleasant, pre-monsoon",
      monsoon: "July–August: Lush but requires caution",
      autumn: "September–November: Clear skies, festivals",
      winter: "December–February: Cold but accessible",
      bestMonths: "March–June, September–November"
    },
    dosDonts: {
      dos: [
        "Respect forest boundaries",
        "Engage politely with locals",
        "Visit religious sites mindfully"
      ],
      donts: [
        "Treat Sirmaur as a picnic zone",
        "Play loud music in villages",
        "Rush travel plans"
      ]
    },
    localMovement: "Connected to Chandigarh and Dehradun. Local transport serves main towns. Villages maintain traditional rhythms with weekly markets. Forest areas have their own protected access patterns.",
    seoTitle: "Sirmaur District Travel Guide | Sacred Forests & Hidden Valleys | Local Himachal",
    seoDescription: "Explore Sirmaur's sacred Renuka Lake, Churdhar Peak trek, and quiet villages where life moves at its own pace, protected by choice rather than isolation."
  },
  {
    id: "10",
    name: "Hamirpur",
    slug: "hamirpur",
    tagline: "The Lived-In Hills of Everyday Himachal",
    cinematicIntro: `Hamirpur is not built for tourism—and it doesn't need to be. This district represents the everyday reality of Himachal Pradesh. Less dramatic in landscape but rich in human activity, Hamirpur is where people live, work, study, and raise families without spectacle.

Known for its high literacy rate and strong educational culture, Hamirpur reflects aspiration within simplicity. Migration is common, but roots remain strong.`,
    detailedOverview: `Hamirpur lies in the lower hill zone of Himachal with rolling hills, agricultural fields, and moderate climate. The terrain supports permanent settlements, farming, and road connectivity. Unlike snow-heavy regions, Hamirpur remains accessible year-round.

People leave for work and return for life. Many families have members working across India, but community ties remain strong. Hamirpur shows Himachal as a home, not a destination.`,
    whyItMatters: "Hamirpur shows the foundation of Himachal Pradesh—education, stability, and everyday resilience. It may not inspire postcards, but it sustains the state.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Hamirpur%2C_Himachal_Pradesh.jpg",
    altitude: "400 - 1,100m",
    bestTime: "Oct - March",
    famousFor: ["Sujanpur Tihra", "Nadaun", "Gasota Mahadev", "Historic Forts"],
    coordinates: { lat: 31.6862, lng: 76.5213 },
    geography: {
      description: "Hamirpur lies in the lower hill zone with rolling hills, agricultural fields, and moderate climate supporting year-round habitation.",
      features: [
        "Rolling hills",
        "Agricultural fields",
        "Moderate climate",
        "Limited forest cover compared to upper districts",
        "Good road connectivity year-round"
      ]
    },
    famousPlaces: [
      { name: "Hamirpur Town", description: "A functional district headquarters with colleges, markets, and hospitals. Life revolves around education, government jobs, and small businesses." },
      { name: "Sujanpur Tira", description: "Historically significant, Sujanpur served as a cultural center under the Katoch rulers. It still hosts fairs and traditional gatherings." }
    ],
    hiddenGems: [
      { name: "Nadaun", description: "Located near the Beas River, Nadaun offers quiet riverbanks, traditional homes, and slow village life." },
      { name: "Rural Hamirpur Villages", description: "The true character of the district lies in its villages—fields, schools, temples, and evening conversations." }
    ],
    culture: {
      overview: "Hamirpur's culture is grounded and pragmatic. Education is highly valued, and many families have members working across India. Community life includes shared farming, temple gatherings, and family-centered structures.",
      traditions: [
        "High value placed on education",
        "Strong family and community networks",
        "Traditional music and dance (not commercialized)",
        "Local sports and village gatherings"
      ]
    },
    food: {
      everyday: [
        "Lentils",
        "Seasonal vegetables",
        "Rice and chapatis",
        "Yogurt-based preparations"
      ],
      festive: [
        "Festival-specific preparations",
        "Community feast dishes"
      ],
      note: "Cuisine is simple and home-based. Food here reflects nutrition over indulgence."
    },
    festivals: [
      { name: "Holi (Sujanpur Style)", description: "Unlike urban celebrations, Holi here retains folk traditions and structured performances with cultural significance." },
      { name: "Temple Festivals", description: "Village-level temple celebrations mark seasonal changes and social unity." }
    ],
    seasonalAccess: {
      spring: "March–April: Pleasant weather",
      summer: "May–June: Warmer than upper districts but manageable",
      monsoon: "July–September: Rainfall but accessible",
      autumn: "October–November: Ideal weather",
      winter: "December–February: Pleasant, mild",
      bestMonths: "October–March"
    },
    dosDonts: {
      dos: [
        "Respect local routines",
        "Engage with community spaces",
        "Understand everyday life"
      ],
      donts: [
        "Expect tourist infrastructure",
        "Treat the district as 'boring'",
        "Ignore its social depth"
      ]
    },
    localMovement: "Well-connected by road to major cities. Many residents commute for work. Local markets serve daily needs. Less tourist-oriented transport, more resident-focused connectivity.",
    seoTitle: "Hamirpur District Travel Guide | Everyday Himachal & Education Hub | Local Himachal",
    seoDescription: "Discover Hamirpur's grounded reality—high literacy rates, historic Sujanpur Tira, quiet villages, and the everyday resilience that sustains Himachal Pradesh."
  },
  {
    id: "11",
    name: "Una",
    slug: "una",
    tagline: "The Gateway Hills Where Faith Meets the Plains",
    cinematicIntro: `Una is often called the gateway to Himachal Pradesh—and that description shapes how it is treated. Most travelers pass through Una on their way to higher hills, rarely stopping to understand it. But Una is not just an entry point; it is a district with its own rhythm, climate, and cultural importance.

Unlike the cold, pine-covered regions people associate with Himachal, Una sits closer to the plains. The landscape is warmer, flatter, and more agricultural.`,
    detailedOverview: `Life here is shaped less by altitude and more by season, faith, and movement between hill and plain cultures. Historically, Una has been a meeting ground—of traders, pilgrims, and armies. This blending created a district that feels different from the rest of Himachal, yet deeply connected to it.

Una lies in the southwestern corner of Himachal Pradesh, bordering Punjab. Summers are hot, winters mild, and snowfall is rare. This climate allows year-round habitation and farming.`,
    whyItMatters: "Una reminds travelers that Himachal is not only mountains and snow. It is also faith, movement, and cultural exchange. Understanding Una completes the picture of the state's diversity.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjovCd0xmvMy1ChT6wiPdXB-wpB6JQHYjsH6fWnPajOGpQDCBkllmWAh3yxPq-UVIERKvzo0abcwvFi6UDnR_iDWhG6jUv1qlAqgPe-1USSxXLaHDpN7_E729_LumFd5JlMrlolWxz-Ww/s1600-rw/Gobind+Sagar+Lake.jpg",
    altitude: "350 - 1,200m",
    bestTime: "Oct - March",
    famousFor: ["Chintpurni Temple", "Naina Devi", "Amb", "Shiv Bari Temple"],
    coordinates: { lat: 31.4685, lng: 76.2708 },
    geography: {
      description: "Una lies in the southwestern corner bordering Punjab with lower Shivalik hills, broad river plains, and semi-arid stretches.",
      features: [
        "Lower Shivalik hills",
        "Broad river plains",
        "Semi-arid stretches",
        "Seasonal streams (locally called choes)",
        "Swan River shaping agriculture and settlements"
      ]
    },
    famousPlaces: [
      { name: "Una Town", description: "The district headquarters is functional rather than scenic. Life revolves around trade, education, and religious travel." },
      { name: "Naina Devi Temple", description: "One of the 51 Shakti Peeths of India, perched on a hilltop near Gobind Sagar. For locals, it is a living presence that defines regional identity." },
      { name: "Chintpurni Temple", description: "Another major Shakti Peeth drawing devotees from Punjab, Haryana, and beyond. Its influence shapes economy, infrastructure, and seasonal movement." }
    ],
    hiddenGems: [
      { name: "Dera Baba Bharbhag Singh", description: "A spiritual site rooted in folk belief and healing traditions, especially for those seeking relief from mental and physical distress." },
      { name: "Rural Swan Valley", description: "Away from highways, the Swan Valley's villages reveal farming life, seasonal rhythms, and quiet resilience—largely untouched by tourism." }
    ],
    culture: {
      overview: "Una's culture reflects a blend of Himachali hill traditions and Punjabi plains influence. Language, food, and festivals carry traces of both. Life is practical and forward-moving.",
      traditions: [
        "Blend of Himachali and Punjabi traditions",
        "Strong pilgrimage culture",
        "Agricultural rhythms guide life",
        "Community ties remain strong despite migration"
      ]
    },
    food: {
      everyday: [
        "Wheat-based rotis",
        "Lentils and pulses",
        "Seasonal vegetables",
        "Mustard-based preparations"
      ],
      festive: [
        "Sweets and milk-based items (plains influence)",
        "Festival-specific preparations"
      ],
      note: "Cuisine differs from typical mountain food. Food is lighter, spicier, and more varied than high-altitude regions."
    },
    festivals: [
      { name: "Navratri", description: "Major celebrations at Naina Devi and Chintpurni. The district becomes a corridor of faith during these times with thousands of pilgrims." },
      { name: "Temple Fairs", description: "Smaller fairs linked to local temples and saints occur throughout the year. Festivals are large-scale, energetic, and deeply devotional." }
    ],
    seasonalAccess: {
      spring: "March–April: Pleasant weather begins",
      summer: "May–June: Hot but manageable for pilgrimage",
      monsoon: "July–August: Green landscapes but humid",
      autumn: "September–October: Pleasant transition",
      winter: "November–February: Ideal weather",
      bestMonths: "October–March"
    },
    dosDonts: {
      dos: [
        "Respect religious customs",
        "Dress modestly at temples",
        "Be patient during pilgrimage seasons"
      ],
      donts: [
        "Underestimate heat",
        "Ignore rural areas",
        "Treat Una as just a transit point"
      ]
    },
    localMovement: "Major gateway with excellent road connectivity to Punjab and rest of Himachal. Heavy pilgrimage traffic during festival seasons. Local transport serves temple routes efficiently.",
    seoTitle: "Una District Travel Guide | Sacred Shakti Peeths & Gateway to Himachal | Local Himachal",
    seoDescription: "Discover Una's sacred Chintpurni and Naina Devi temples, plains-meets-hills culture, and the faith that makes this gateway district special."
  },
  {
    id: "12",
    name: "Bilaspur",
    slug: "bilaspur",
    tagline: "Water, Power, and the Hills That Changed Forever",
    cinematicIntro: `Bilaspur is a district shaped by transformation. Once a quiet hill region centered around forests and villages, Bilaspur's identity changed dramatically with the construction of the Bhakra–Nangal Dam. The creation of the Gobind Sagar reservoir submerged old settlements, displaced communities, and redefined geography.

Today, Bilaspur lives with memory and modernity side by side. The hills remain, but water dominates the landscape.`,
    detailedOverview: `Roads curve around the reservoir, and towns overlook vast stretches of man-made lake. Bilaspur is not nostalgic—it is adaptive. Families relocated during dam construction rebuilt lives in new settlements.

Bilaspur lies in central Himachal Pradesh with Shivalik hills, rocky terrain, and semi-arid vegetation. The Sutlej River, now tamed by the dam, remains central to the district's ecology and economy. Climate is moderate, with hot summers and mild winters.`,
    whyItMatters: "Bilaspur tells a modern Himachal story—of development, sacrifice, and adaptation. It reminds visitors that progress always reshapes landscapes and lives.",
    image: "https://realhimachal.in/wp-content/uploads/2023/12/Chandpur-Bridge-Arial-View.jpg",
    altitude: "350 - 1,700m",
    bestTime: "Year-round",
    famousFor: ["Gobind Sagar", "Bhakra Dam", "Naina Devi", "Water Sports"],
    coordinates: { lat: 31.3407, lng: 76.7603 },
    geography: {
      description: "Bilaspur's geography is defined by the Gobind Sagar reservoir, Shivalik hills, and the tamed Sutlej River.",
      features: [
        "Shivalik hills",
        "Gobind Sagar reservoir",
        "Rocky terrain",
        "Semi-arid vegetation",
        "Moderate climate year-round"
      ]
    },
    famousPlaces: [
      { name: "Bhakra-Nangal Dam", description: "One of India's most important engineering projects, symbolizing post-independence development. For locals, it represents both opportunity and loss." },
      { name: "Gobind Sagar Lake", description: "The reservoir supports fishing, tourism, and water supply. It also serves as a reminder of villages submerged beneath its surface." },
      { name: "Bilaspur Town", description: "Located near the reservoir, the town functions as an administrative and commercial center reflecting post-independence planning." }
    ],
    hiddenGems: [
      { name: "Naina Devi Belt (Bilaspur Side)", description: "Less crowded than the Una approach, this side offers quieter access to the temple and panoramic views of the reservoir." },
      { name: "Rural Hills Above the Reservoir", description: "Small villages perched above the water still practice traditional farming and maintain strong community bonds." }
    ],
    culture: {
      overview: "Bilaspur's culture is shaped by displacement and resilience. Families relocated during dam construction rebuilt lives in new settlements. Traditional music and dance survive but are less visible than in more cultural districts.",
      traditions: [
        "Fishing cooperatives formed post-dam",
        "Adaptation and resilience as cultural values",
        "Temple gatherings maintain community bonds",
        "Traditional practices preserved in hill villages"
      ]
    },
    food: {
      everyday: [
        "Lentil curries",
        "Rice and chapatis",
        "Seasonal vegetables",
        "Yogurt-based dishes"
      ],
      festive: [
        "Festival preparations at temple fairs",
        "Community feast dishes"
      ],
      note: "Cuisine reflects central Himachali food habits. Fish from Gobind Sagar has become an important dietary and economic component."
    },
    festivals: [
      { name: "Local Temple Fairs", description: "Held throughout the year, these fairs maintain community cohesion and cultural continuity." },
      { name: "Religious Observances", description: "Linked closely with Naina Devi and regional deities. Festivals are community-focused rather than tourist-oriented." }
    ],
    seasonalAccess: {
      spring: "March–April: Pleasant weather",
      summer: "May–June: Hot but scenic reservoir views",
      monsoon: "July–August: Water levels rise, caution advised",
      autumn: "September–October: Pleasant climate",
      winter: "November–February: Mild and comfortable",
      bestMonths: "Year-round, each season offers different experiences"
    },
    dosDonts: {
      dos: [
        "Respect local history",
        "Learn about displacement stories",
        "Support local livelihoods"
      ],
      donts: [
        "Reduce Bilaspur to just the dam",
        "Ignore rural voices",
        "Treat the reservoir casually"
      ]
    },
    localMovement: "Well-connected by road to Chandigarh and rest of Himachal. Reservoir has created new transport patterns. Fishing villages have their own rhythms. Markets serve both local needs and tourism.",
    seoTitle: "Bilaspur District Travel Guide | Bhakra Dam & Gobind Sagar | Local Himachal",
    seoDescription: "Explore Bilaspur's story of transformation—Bhakra Dam, Gobind Sagar Lake, resilient hill communities, and the modern history that shaped Himachal."
  }
];

export const getEnrichedDistrictBySlug = (slug: string): EnrichedDistrict | undefined => {
  return enrichedDistricts.find(d => d.slug === slug);
};
