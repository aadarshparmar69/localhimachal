export interface TrekEnriched {
  overview: {
    significance: string;
    category: "Easy" | "Moderate" | "Hard" | "Very Hard";
  };
  route: {
    startPoint: string;
    endPoint: string;
    majorCamps: string[];
    terrainDescription: string;
  };
  bestTime: {
    idealMonths: string;
    weatherPatterns: string;
    unsafeSeasons: string;
  };
  difficulty: {
    totalDistance: string;
    maxAltitude: string;
    dailyWalkingHours: string;
    fitnessRequirements: string;
    whoShouldAvoid: string;
  };
  highlights: {
    landscapes: string[];
    culturalSignificance: string;
    uniqueFeatures: string;
  };
  accommodation: {
    stayOptions: string;
    foodArrangements: string;
    waterSources: string;
  };
  permits: {
    required: boolean;
    details: string;
    guideNecessity: string;
    safetyConsiderations: string;
    commonMistakes: string;
  };
  packing: {
    clothing: string;
    footwear: string;
    essentials: string;
  };
  responsibleTrekking: {
    environmental: string;
    culturalRespect: string;
    leaveNoTrace: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const treksEnriched: Record<string, TrekEnriched> = {
  "hampta-pass": {
    overview: {
      significance: "The Hampta Pass Trek is one of the most dramatic crossover treks in Himachal Pradesh, linking the lush green Kullu Valley with the stark, high-altitude desert of Lahaul. Reaching an altitude of roughly 14,100 feet, this trek offers a rare opportunity to witness a complete landscape transition within a short duration. Forests of pine and deodar, expansive alpine meadows, glacial valleys, and barren mountain walls unfold day by day, making it one of the most rewarding moderate treks in Himachal. What makes Hampta Pass especially important is its accessibility without compromising on high-altitude trekking experience. It is often considered a gateway trek for those aspiring to explore more demanding Himalayan trekking routes.",
      category: "Moderate"
    },
    route: {
      startPoint: "Jobra or Prini, near Manali",
      endPoint: "Chhatru in the Lahaul region",
      majorCamps: ["Chika", "Balu Ka Ghera", "Shea Goru", "Chhatru"],
      terrainDescription: "The route gradually climbs through dense forests, open meadows, and glacial streams before reaching the high pass. Each campsite has a distinct character—Chika with its river-side meadows, Balu Ka Ghera surrounded by hanging glaciers, and Shea Goru opening into the vast, cold desert terrain of Lahaul. The final stretch after crossing the pass is steep and often snow-covered, especially early in the season, before descending into rocky valleys that feel entirely different from where the trek began."
    },
    bestTime: {
      idealMonths: "Mid-June to late September",
      weatherPatterns: "Early in the season, especially June and early July, trekkers encounter substantial snow near the pass, making the crossing more challenging but visually stunning. From late July to August, the Kullu side of the trek experiences monsoon influence, resulting in lush greenery but also increased risks of landslides and slippery trails. September is considered the most stable month, with clearer skies, crisp air, and minimal rainfall.",
      unsafeSeasons: "Winter and early spring are not suitable due to heavy snow accumulation and closed routes."
    },
    difficulty: {
      totalDistance: "26–28 kilometers over four to five days",
      maxAltitude: "14,100 feet (4,270m)",
      dailyWalkingHours: "Five to seven hours, depending on weather and trail conditions",
      fitnessRequirements: "Good physical fitness required, especially during the pass crossing day which involves steep ascents, snow traverses, and rapid altitude gain. First-time trekkers should prepare with cardiovascular training and leg strength exercises.",
      whoShouldAvoid: "Individuals with respiratory or cardiac conditions should avoid this trek without proper medical consultation, as altitude-related discomfort is common if acclimatization is rushed."
    },
    highlights: {
      landscapes: ["Dramatic terrain change from green valleys to arid mountains", "Hanging glaciers at Balu Ka Ghera", "Vast cold desert terrain of Lahaul", "Chandratal Lake extension option"],
      culturalSignificance: "Historically used as a trading route between Kullu and Lahaul valleys, connecting two culturally distinct regions of Himachal Pradesh.",
      uniqueFeatures: "Few Himalayan trekking routes offer such a stark shift from green valleys to arid mountains in such a short span. One day you are walking through grasslands dotted with wildflowers, and the next you are surrounded by barren rock faces and glacial streams. The optional extension to Chandratal Lake further enhances the experience."
    },
    accommodation: {
      stayOptions: "Accommodation is entirely in tents, except for basic facilities available near Manali. There are no homestays or permanent shelters along the route. Trekking teams generally camp at designated open grounds near water sources.",
      foodArrangements: "Food is typically prepared by support staff or carried by trekkers themselves. Expect simple, high-energy meals such as rice, lentils, vegetables, and flatbreads. There are no cafés or shops once the trek begins.",
      waterSources: "Water is sourced from mountain streams and glacial runoff, which must always be purified or boiled before consumption."
    },
    permits: {
      required: false,
      details: "No special permits are usually required for Indian nationals.",
      guideNecessity: "Experienced local guides are highly recommended due to rapidly changing weather conditions.",
      safetyConsiderations: "Weather conditions can change rapidly. Snowfall, sudden rain, and stream swelling are common hazards. Proper acclimatization, hydration, and pacing are critical.",
      commonMistakes: "Underestimating cold temperatures, rushing the pass crossing, and ignoring early signs of altitude sickness. Trekking without adequate gear or relying on fair-weather assumptions can quickly turn risky."
    },
    packing: {
      clothing: "Layered clothing is necessary to manage temperature fluctuations, with insulated jackets for high camps and breathable layers for daytime walking. Waterproof outerwear is crucial due to rain and snow exposure.",
      footwear: "Sturdy trekking shoes with good grip are non-negotiable, especially on snow and loose scree.",
      essentials: "Sun protection, gloves, thermal socks, personal medical kits, and navigation tools are essential even when trekking with a guide."
    },
    responsibleTrekking: {
      environmental: "Hampta Pass lies in a fragile alpine ecosystem where waste decomposition takes years. Trekkers must carry back all non-biodegradable waste.",
      culturalRespect: "Respect for local communities begins in Manali and extends throughout the trek. Over-tourism and careless trekking practices threaten the long-term sustainability of this route.",
      leaveNoTrace: "Open defecation near water sources should be strictly avoided. Responsible behavior ensures that Hampta Pass remains one of the best treks in Himachal Pradesh for future generations."
    },
    seo: {
      title: "Hampta Pass Trek - Complete Guide | Kullu to Lahaul Crossover",
      description: "Comprehensive guide to Hampta Pass Trek - a dramatic 5-day crossover trek from Kullu Valley to Lahaul at 14,100 feet. Route details, best time, difficulty, and packing essentials.",
      keywords: ["Hampta Pass trek", "Kullu Lahaul trek", "best treks Himachal", "moderate Himalayan treks", "Chandratal extension"]
    }
  },

  "triund": {
    overview: {
      significance: "The Triund Trek is one of the most accessible and iconic Himalayan trekking routes in Himachal Pradesh, yet its simplicity should never be mistaken for insignificance. Situated at an altitude of approximately 9,350 feet, Triund offers a front-row view of the Dhauladhar range, whose steep, snow-laden walls rise dramatically above the Kangra Valley. For many trekkers, this trail becomes their first real introduction to Himalayan trekking. Triund teaches fundamental mountain lessons in a relatively controlled environment—altitude gain, changing weather, and physical exertion without overwhelming first-time hikers.",
      category: "Easy"
    },
    route: {
      startPoint: "McLeod Ganj or Dharamkot",
      endPoint: "Triund meadow (optional extension to Snowline or Laka Got)",
      majorCamps: ["Gallu Devi Temple", "Magic View Café", "Triund Top"],
      terrainDescription: "The trail climbs steadily through mixed forests of oak and rhododendron before opening into wide alpine grassland at Triund. Along the way, trekkers pass landmarks such as Gallu Devi Temple and various natural viewpoints overlooking the Kangra Valley. The terrain is well-defined but continuously ascending, with rocky sections and exposed stretches near the top."
    },
    bestTime: {
      idealMonths: "March to June and September to November",
      weatherPatterns: "During spring and early summer, the trail is comfortable, with clear skies and blooming rhododendrons. Snow may still be visible on the Dhauladhar peaks. Autumn brings clearer skies and fewer crowds.",
      unsafeSeasons: "The monsoon months of July and August bring slippery paths, leeches, and increased cloud cover. Winter trekking from December to February is possible only with proper preparation, as Triund receives snowfall and temperatures drop sharply at night."
    },
    difficulty: {
      totalDistance: "9 kilometers one way from McLeod Ganj",
      maxAltitude: "9,350 feet (2,850m)",
      dailyWalkingHours: "Four to six hours for ascent",
      fitnessRequirements: "Basic fitness levels required. Suitable for beginners, families with older children, and casual hikers.",
      whoShouldAvoid: "Those with knee issues or low endurance may find the continuous incline challenging."
    },
    highlights: {
      landscapes: ["Panoramic Dhauladhar views", "Kangra Valley stretching endlessly", "Open alpine meadow at Triund"],
      culturalSignificance: "Triund sits close to Tibetan settlements around McLeod Ganj, blending mountain trekking with spiritual and cultural exposure.",
      uniqueFeatures: "The Dhauladhar wall rises almost vertically, creating a sense of scale that surprises many first-time trekkers. The open meadow allows uninterrupted views of sunrise and sunset, making it one of the most photogenic trekking destinations in the region."
    },
    accommodation: {
      stayOptions: "Small tea shops and food stalls operate seasonally along the route and at the top. Accommodation at Triund is primarily in tents, either rented on-site or carried by trekkers. A forest rest house also exists but requires prior booking.",
      foodArrangements: "Simple meals such as dal, rice, noodles, and tea are available. However, availability depends heavily on weather and season.",
      waterSources: "Water can be sourced from nearby points but must always be treated or boiled before drinking."
    },
    permits: {
      required: false,
      details: "No permits are required for Indian nationals.",
      guideNecessity: "The trail is well-marked. First-time hikers, winter trekkers, or those trekking during unstable weather are advised to hire a local guide.",
      safetyConsiderations: "Sudden weather changes, cold nights, and overcrowding during peak seasons are common issues.",
      commonMistakes: "Underestimating night-time temperatures and overestimating the availability of food and shelter. Proper planning and early starts help avoid most risks."
    },
    packing: {
      clothing: "Light trekking layers are suitable during the day, but warm insulation is necessary for evenings and early mornings. A waterproof jacket is advisable even outside the monsoon season.",
      footwear: "Good walking shoes with grip are essential, as rocky and uneven sections can strain ankles.",
      essentials: "Headlamps, personal medication, reusable water bottles, and sun protection are often forgotten by beginners."
    },
    responsibleTrekking: {
      environmental: "Triund's popularity has made it vulnerable to over-tourism and waste accumulation. Carry back all non-biodegradable waste.",
      culturalRespect: "Respect local culture, including temples and Tibetan settlements near the trail.",
      leaveNoTrace: "Avoid disturbing wildlife or vegetation. Open camping outside designated areas should be avoided to protect the fragile meadow ecosystem."
    },
    seo: {
      title: "Triund Trek - Complete Guide | Dhauladhar Views from Dharamshala",
      description: "Complete guide to Triund Trek - the perfect introduction to Himalayan trekking with stunning Dhauladhar views. Easy weekend trek from McLeod Ganj.",
      keywords: ["Triund trek", "Dharamshala trek", "weekend trek Himachal", "Dhauladhar views", "beginner trek Himachal"]
    }
  },

  "pin-parvati": {
    overview: {
      significance: "The Pin Parvati Pass Trek is one of the most demanding and legendary high altitude treks in Himachal Pradesh, connecting the lush Parvati Valley of Kullu with the stark, trans-Himalayan landscape of Spiti. Rising to an altitude of approximately 17,450 feet, this route is a serious Himalayan expedition that tests endurance, acclimatization, and mental resilience. Historically used as a traditional trade and shepherd route between Kullu and Spiti, Pin Parvati holds cultural as well as geographical importance. Today, it is considered among the most challenging Himalayan trekking routes accessible to non-technical trekkers.",
      category: "Very Hard"
    },
    route: {
      startPoint: "Barshaini, near Kasol",
      endPoint: "Mud Village in Spiti",
      majorCamps: ["Kheerganga", "Tunda Bhuj", "Thakur Kuan", "Odi Thach", "Glacier camps", "Pin Valley"],
      terrainDescription: "The route traverses the Parvati Valley initially, following the Parvati River through forests and alpine meadows before entering glaciated terrain near the pass. After crossing Pin Parvati Pass, the descent leads into the Pin Valley, characterized by cold desert landscapes, sparse vegetation, and wide river beds. The terrain varies dramatically, including dense forests, boulder zones, moraines, glaciers, and snowfields."
    },
    bestTime: {
      idealMonths: "Mid-July to mid-September",
      weatherPatterns: "Before this period, heavy snow blocks the pass and glaciers remain unstable. The Parvati Valley may experience monsoon rainfall, leading to swollen streams and slippery trails, while the Spiti side remains dry but extremely cold.",
      unsafeSeasons: "Outside the recommended season, the route becomes extremely dangerous due to high risks of avalanches and whiteout conditions. Early snowfall after September makes the route increasingly dangerous."
    },
    difficulty: {
      totalDistance: "Approximately 90 kilometers over 10 to 11 days",
      maxAltitude: "17,450 feet (5,319m)",
      dailyWalkingHours: "Often exceeds seven to eight hours, particularly on glacier and moraine sections",
      fitnessRequirements: "Suitable only for seasoned trekkers with prior high-altitude experience above 14,000 feet. Participants must be physically fit, comfortable with long trekking days, and capable of handling cold, isolation, and logistical challenges.",
      whoShouldAvoid: "Individuals with heart, lung, or altitude-related medical issues should not attempt this trek under any circumstances."
    },
    highlights: {
      landscapes: ["Transition from vibrant Parvati Valley to barren Spiti expanses", "Massive Pin Parvati glacier", "High-altitude glaciers and moraines", "Cold desert landscapes of Pin Valley"],
      culturalSignificance: "Historic trade and shepherd route connecting two culturally distinct regions—the Hindu traditions of Kullu and the Buddhist heritage of Spiti.",
      uniqueFeatures: "The sense of isolation is profound. For days, trekkers encounter no settlements, roads, or external assistance. The crossing of the massive Pin Parvati glacier and the final ascent to the pass provide a rare feeling of crossing a true Himalayan barrier."
    },
    accommodation: {
      stayOptions: "Accommodation is entirely in tents. There are no permanent shelters or homestays beyond the initial villages in Parvati Valley and the final settlements in Spiti. Trekking teams must be fully self-sufficient.",
      foodArrangements: "Food is prepared by the support team using rationed ingredients designed for high-energy output. Meals are simple but calorie-dense, focusing on carbohydrates and proteins.",
      waterSources: "Water is sourced from glacial streams and rivers but must always be treated before consumption. Hydration often becomes a challenge due to altitude and cold."
    },
    permits: {
      required: true,
      details: "Permits from the forest department are mandatory. Independent trekking without proper authorization is strongly discouraged.",
      guideNecessity: "Hiring experienced local guides and porters is not optional; it is a safety requirement.",
      safetyConsiderations: "Major risks include glacier crevasses, river crossings, altitude sickness, and sudden weather changes. Satellite communication or emergency evacuation planning is highly advisable due to the remoteness.",
      commonMistakes: "Underestimating the duration of the trek, inadequate acclimatization days, and insufficient gear for extreme cold."
    },
    packing: {
      clothing: "Expedition-level preparation required. Layered clothing for extreme cold, high-quality insulation, and waterproof outerwear are essential.",
      footwear: "Footwear must be suitable for glacier travel, often requiring gaiters and microspikes.",
      essentials: "Sun protection at altitude is critical where snow glare can cause severe eye strain. Medical kits must include altitude medication. Navigation tools should be backed by experience. Every item carried should justify its weight, as resupply is impossible once the trek begins."
    },
    responsibleTrekking: {
      environmental: "The Pin Parvati region is ecologically fragile. Waste management is critical, as decomposition at high altitude is extremely slow.",
      culturalRespect: "Respect for local customs in Parvati and Pin valleys is essential, especially in remote villages where traditional lifestyles continue.",
      leaveNoTrace: "Trekkers must follow strict Leave No Trace principles and avoid contaminating water sources. Overuse and irresponsible trekking threaten the sustainability of this route."
    },
    seo: {
      title: "Pin Parvati Pass Trek - Ultimate Guide | Parvati to Spiti Crossing",
      description: "Complete guide to Pin Parvati Pass Trek - one of India's most challenging treks connecting Kullu's Parvati Valley to Spiti at 17,450 feet. Expert route details and preparation guide.",
      keywords: ["Pin Parvati Pass trek", "difficult treks Himachal", "Spiti Valley trek", "high altitude trek India", "glacier trek Himachal"]
    }
  },

  "kheerganga": {
    overview: {
      significance: "The Kheerganga Trek is one of the most well-known moderate treks in Himachal Pradesh, set deep within the Parvati Valley of Kullu district. Reaching an altitude of around 9,700 feet, the trek is famous for its alpine setting, panoramic mountain views, and natural hot water springs at the summit. Traditionally associated with Lord Shiva and centuries-old pilgrimage routes, Kheerganga represents the meeting point of spirituality and Himalayan wilderness. For many first-time trekkers, this route becomes an introduction to Himalayan trekking.",
      category: "Easy"
    },
    route: {
      startPoint: "Barshaini (last motorable point)",
      endPoint: "Kheerganga hot springs",
      majorCamps: ["Nakthan Village", "Rudra Nag waterfall", "Kheerganga meadow"],
      terrainDescription: "Multiple routes lead to Kheerganga, including the Nakthan village trail and the Kalga–Pulga route, each offering slightly different terrain and village exposure. The trail passes through dense forests of pine and oak, crosses wooden bridges, and winds past waterfalls and rocky sections. The final approach opens into a wide alpine meadow where the hot springs and temple are located."
    },
    bestTime: {
      idealMonths: "March to June and September to early November",
      weatherPatterns: "During spring and early summer, the valley is vibrant, temperatures are comfortable, and the trail remains relatively stable. Autumn brings clearer skies and fewer crowds.",
      unsafeSeasons: "The monsoon season from July to August increases the risk of landslides, slippery trails, and leech activity. Winter months see snowfall at higher elevations, making the trail challenging and occasionally inaccessible."
    },
    difficulty: {
      totalDistance: "12 kilometers one way from Barshaini",
      maxAltitude: "9,700 feet (2,960m)",
      dailyWalkingHours: "Five to six hours for ascent",
      fitnessRequirements: "Basic fitness required. While acclimatization requirements are minimal, dehydration and fatigue are common among first-time trekkers.",
      whoShouldAvoid: "Individuals with knee issues or low stamina should pace themselves carefully. Although suitable for beginners, this trek should not be underestimated due to its steady elevation gain."
    },
    highlights: {
      landscapes: ["Natural hot water springs at summit", "Dense pine and oak forests", "Parvati Valley panoramic views", "Rudra Nag waterfall"],
      culturalSignificance: "The site is traditionally associated with Lord Shiva and centuries-old pilgrimage routes. A small temple near the summit adds a contemplative dimension to the experience.",
      uniqueFeatures: "The defining feature is the natural hot water spring at the summit—a rare experience at this altitude. Soaking in the warm pool while surrounded by snow-capped peaks and alpine silence is a moment many trekkers remember long after the journey ends."
    },
    accommodation: {
      stayOptions: "Accommodation consists of basic campsites and simple shelters near the summit. Tents are widely used, and temporary structures provide limited protection from wind and cold.",
      foodArrangements: "Food is available in small seasonal cafés serving simple meals such as dal, rice, noodles, and tea. Availability and quality vary, and trekkers should carry emergency snacks.",
      waterSources: "Water is sourced from nearby streams but must always be treated before drinking."
    },
    permits: {
      required: false,
      details: "No special permits are required for Indian nationals.",
      guideNecessity: "The trail is well-used and generally easy to follow, but hiring a local guide can enhance safety and route knowledge, especially during off-season periods.",
      safetyConsiderations: "Sudden weather changes, slippery trails during monsoon, and overcrowding at the summit are common issues.",
      commonMistakes: "Underestimating night-time cold and relying too heavily on summit cafés. Early starts and conservative pacing help reduce risks."
    },
    packing: {
      clothing: "Light trekking clothes are suitable for daytime, while warm layers are essential for evenings and overnight stays. Waterproof jackets are recommended year-round.",
      footwear: "Sturdy trekking shoes with good grip are necessary for rocky and muddy sections.",
      essentials: "Headlamps, reusable water bottles, basic medical supplies, and sun protection are often forgotten but significantly affect comfort and safety."
    },
    responsibleTrekking: {
      environmental: "Kheerganga has suffered from over-tourism in recent years, making responsible trekking crucial. Waste management is a serious concern.",
      culturalRespect: "Respect for local customs and religious significance is essential, particularly around the temple area. Bathing etiquette at the hot springs should be respectful.",
      leaveNoTrace: "Trekkers must carry back all non-biodegradable waste. Soaps or chemicals must never be used in natural pools."
    },
    seo: {
      title: "Kheerganga Trek - Complete Guide | Hot Springs in Parvati Valley",
      description: "Complete guide to Kheerganga Trek - famous for natural hot springs at 9,700 feet in Parvati Valley. Route details, best time, and what to expect.",
      keywords: ["Kheerganga trek", "Parvati Valley trek", "hot springs Himachal", "Kasol trek", "beginner trek Himachal"]
    }
  },

  "chandratal": {
    overview: {
      significance: "The Chandratal Lake Trek is one of the most visually striking high-altitude treks in Himachal Pradesh, set in the remote landscapes of the Lahaul–Spiti region. Perched at an altitude of approximately 14,100 feet, Chandratal—meaning 'Lake of the Moon'—is a pristine glacial lake surrounded by barren mountains, scree slopes, and vast open skies. This trek represents a shift from green Himalayan valleys to cold desert ecosystems. Chandratal is not just a scenic destination; it is an important geographical and ecological landmark fed by glacial meltwaters that contribute to the Chandra River.",
      category: "Moderate"
    },
    route: {
      startPoint: "Kunzum La or Baralacha La side",
      endPoint: "Chandratal Lake",
      majorCamps: ["Kunzum Pass area", "High-altitude plains", "Chandratal campsite"],
      terrainDescription: "The trail passes through wide, open valleys dominated by loose rocks, moraines, and minimal vegetation. There are no forests on this route; instead, trekkers navigate exposed terrain with distant views of snow-capped peaks and glaciers. The final approach to Chandratal reveals the lake suddenly, resting in a natural bowl shaped by ancient glacial movement. The terrain is largely non-technical but physically demanding due to altitude and lack of shelter."
    },
    bestTime: {
      idealMonths: "Late June to mid-September",
      weatherPatterns: "The trek becomes accessible only after Kunzum Pass opens for the season. July and August offer relatively stable access, though occasional rainfall can reduce visibility. September is considered the best month with crisp air, clearer skies, and fewer crowds.",
      unsafeSeasons: "From October onwards, snowfall and rapid temperature drops make the trek unsafe and inaccessible. Early season may have lingering snow patches."
    },
    difficulty: {
      totalDistance: "8 to 15 kilometers depending on route, over one to two days",
      maxAltitude: "14,100 feet (4,300m)",
      dailyWalkingHours: "Five to six hours average",
      fitnessRequirements: "Careful acclimatization required. Even experienced trekkers can experience headaches, fatigue, or breathlessness if ascent is rushed.",
      whoShouldAvoid: "Not advisable for individuals with known altitude sensitivity or respiratory issues. Fitness preparation and slow pacing are essential."
    },
    highlights: {
      landscapes: ["Crescent-shaped glacial lake", "Stark isolation and visual purity", "Changing colors—turquoise, blue, and silver", "Trans-Himalayan terrain"],
      culturalSignificance: "The lake holds significance in local mythology and is believed to be mentioned in ancient texts. The surrounding landscape reflects Spiti's geological character.",
      uniqueFeatures: "Unlike many Himalayan lakes surrounded by trees or villages, Chandratal feels untouched and remote. Ancient rock formations, wide skies, and near-total silence broken only by wind create an almost surreal experience."
    },
    accommodation: {
      stayOptions: "There are no permanent accommodations near Chandratal Lake. Camping is the only option, and campsites are located at a regulated distance from the lake to protect its fragile ecosystem.",
      foodArrangements: "Food is entirely self-managed or arranged through trekking teams. Meals are simple, high-energy preparations suitable for cold conditions.",
      waterSources: "Water sources include glacial streams, but all water must be filtered or treated before drinking. There are no shops, cafés, or shelters along the trail."
    },
    permits: {
      required: false,
      details: "Forest department regulations restrict camping close to the lake, and local guidelines must be followed strictly. Compliance with camping zones and waste management rules is mandatory.",
      guideNecessity: "Hiring an experienced guide is strongly recommended, especially for first-time high altitude trekkers.",
      safetyConsiderations: "Weather can change rapidly, and whiteouts or strong winds are not uncommon. Emergency evacuation options are limited due to remoteness.",
      commonMistakes: "Underestimating cold exposure, inadequate acclimatization, and poor hydration."
    },
    packing: {
      clothing: "Layered clothing is essential, with insulation suitable for sub-zero nights. A reliable windproof and waterproof outer layer is crucial in this exposed terrain.",
      footwear: "Footwear should be sturdy and well broken-in, capable of handling loose gravel and uneven ground.",
      essentials: "Sun protection such as sunglasses and sunscreen are critical at high altitude. Personal medical kits, navigation awareness, and adequate hydration systems should never be overlooked."
    },
    responsibleTrekking: {
      environmental: "Chandratal is an ecologically sensitive area where even small disturbances can cause long-term damage. Trekkers must follow Leave No Trace principles strictly.",
      culturalRespect: "Respect for local regulations and the fragile Spiti ecosystem is essential to prevent irreversible degradation.",
      leaveNoTrace: "Swimming, washing, or using detergents in or near the lake is prohibited. Carry back all waste and avoid disturbance to the lake's shoreline."
    },
    seo: {
      title: "Chandratal Lake Trek - Complete Guide | Moon Lake of Spiti",
      description: "Complete guide to Chandratal Lake Trek - the stunning crescent-shaped Moon Lake at 14,100 feet in Lahaul-Spiti. Camping, best time, and responsible trekking guide.",
      keywords: ["Chandratal trek", "Moon Lake Spiti", "Lahaul Spiti trek", "high altitude lake Himachal", "Spiti Valley camping"]
    }
  },

  "prashar-lake": {
    overview: {
      significance: "The Prashar Lake Trek is a culturally rich and visually rewarding Himalayan trek located in the mid-hills of Himachal Pradesh. Situated at an altitude of approximately 8,960 feet, Prashar Lake offers a balanced trekking experience that combines moderate physical effort with deep spiritual and ecological significance. Named after the sage Prashar, the lake and its surrounding temple complex hold immense religious importance for local communities. This trek is especially suitable for beginners, nature enthusiasts, and those seeking a slower, contemplative mountain journey.",
      category: "Easy"
    },
    route: {
      startPoint: "Baggi village (accessible by road from Mandi)",
      endPoint: "Prashar Lake",
      majorCamps: ["Baggi village", "Forest trail", "Prashar Lake meadow"],
      terrainDescription: "The trail ascends steadily through dense forests of oak, rhododendron, and cedar, interspersed with open clearings that offer panoramic views of the Dhauladhar and Pir Panjal ranges. As the trek gains altitude, the terrain transitions from shaded woodland to open alpine slopes. The final approach reveals Prashar Lake resting in a natural meadow, bordered by rolling hills and snow-covered peaks."
    },
    bestTime: {
      idealMonths: "April to June and September to November",
      weatherPatterns: "During spring and early summer, the trail is vibrant with blooming vegetation, and weather conditions are generally stable. These months offer comfortable temperatures and clear views.",
      unsafeSeasons: "The monsoon season from July to August brings heavy rainfall, increasing the risk of landslides. Winter transforms Prashar Lake into a snow-covered landscape but requires proper gear and local guidance."
    },
    difficulty: {
      totalDistance: "14 kilometers one way from Baggi",
      maxAltitude: "8,960 feet (2,730m)",
      dailyWalkingHours: "Six to seven hours to reach the lake",
      fitnessRequirements: "Basic fitness levels required. Suitable for beginners, families, and casual hikers.",
      whoShouldAvoid: "Trekkers with knee issues should proceed cautiously, especially during descent, as the trail can be steep and slippery."
    },
    highlights: {
      landscapes: ["Floating island within the lake", "Panoramic Dhauladhar and Pir Panjal views", "Ancient pagoda-style temple", "Rolling alpine meadows"],
      culturalSignificance: "The ancient pagoda-style Prashar Rishi Temple beside the lake holds immense religious importance. The site is named after Sage Prashar and is a place of pilgrimage.",
      uniqueFeatures: "The floating island within the lake is a natural phenomenon that shifts position with seasonal changes. The blend of mythology, nature, and accessibility makes this trek memorable."
    },
    accommodation: {
      stayOptions: "Accommodation options are limited and basic. Trekkers can camp in designated areas or stay in simple shelters near the temple complex, depending on availability.",
      foodArrangements: "Food options are minimal, typically consisting of simple meals prepared by local caretakers or self-carried provisions.",
      waterSources: "Water can be sourced near the lake but must always be treated before consumption."
    },
    permits: {
      required: false,
      details: "No special permits are required for Indian nationals.",
      guideNecessity: "The trail is straightforward. First-time trekkers or those attempting winter treks are advised to hire local guides.",
      safetyConsiderations: "Sudden weather changes, low visibility during fog, and slippery trails during monsoon are common concerns.",
      commonMistakes: "Underestimating cold temperatures near the lake and failing to carry adequate warm clothing."
    },
    packing: {
      clothing: "Light trekking clothes are suitable for the ascent, while warm layers are necessary for evenings and early mornings. Waterproof jackets are recommended.",
      footwear: "Footwear with good grip is important for forest trails and grassy slopes.",
      essentials: "Trekking poles, basic medical supplies, and reusable water bottles are often forgotten but significantly improve safety and comfort."
    },
    responsibleTrekking: {
      environmental: "The surrounding ecosystem is sensitive to overuse, particularly during peak tourist seasons.",
      culturalRespect: "Prashar Lake is a sacred site. Loud behavior, littering, and disrespect around the temple area are strongly discouraged.",
      leaveNoTrace: "Waste should be carried back, as disposal facilities are limited. Responsible trekking practices help preserve the natural and cultural integrity."
    },
    seo: {
      title: "Prashar Lake Trek - Complete Guide | Sacred Lake with Floating Island",
      description: "Complete guide to Prashar Lake Trek - featuring a mysterious floating island and ancient temple at 8,960 feet in Mandi. Perfect weekend trek from Delhi.",
      keywords: ["Prashar Lake trek", "Mandi trek", "floating island lake", "weekend trek from Delhi", "sacred lake Himachal"]
    }
  },

  "manimahesh": {
    overview: {
      significance: "The Manimahesh Kailash Yatra is one of the most spiritually significant and physically demanding pilgrimage treks in Himachal Pradesh. Centered around the sacred Manimahesh Lake at an altitude of approximately 13,500 feet, this yatra is undertaken not for adventure alone, but for faith, endurance, and surrender to the Himalayas. Towering above the lake is Manimahesh Kailash Peak, believed by devotees to be the earthly abode of Lord Shiva. Unlike conventional trekking routes, Manimahesh is a blend of pilgrimage and high-altitude mountain travel.",
      category: "Moderate"
    },
    route: {
      startPoint: "Hadsar village (last motorable point)",
      endPoint: "Manimahesh Lake",
      majorCamps: ["Dhancho (major halting point)", "Gauri Kund", "Manimahesh Lake"],
      terrainDescription: "The total trekking route follows the Budhil River initially before climbing steeply toward the alpine basin where the lake lies. Key landmarks include Dhancho with temporary shelters and Gauri Kund, a smaller sacred lake. The terrain is rugged—rocky paths, exposed slopes, narrow trails, and sections prone to landslides. Forest cover is limited beyond a point, and much of the upper stretch is completely exposed."
    },
    bestTime: {
      idealMonths: "August to September (during official yatra period)",
      weatherPatterns: "Even during the yatra season, weather remains unpredictable. Sudden rain, cold winds, and temperature drops are common, especially at higher elevations. Early snowfall is not unusual in September.",
      unsafeSeasons: "Outside August-September, heavy snowfall, glacial conditions, and extreme cold make the trek unsafe and impractical."
    },
    difficulty: {
      totalDistance: "14 kilometers one way from Hadsar",
      maxAltitude: "13,500 feet (4,115m)",
      dailyWalkingHours: "One long day or split with halt at Dhancho",
      fitnessRequirements: "Physically demanding due to steep ascent. Rapid altitude gain increases the risk of altitude sickness, particularly for those arriving without prior acclimatization.",
      whoShouldAvoid: "Individuals with heart conditions, respiratory issues, or limited physical endurance should not attempt this trek."
    },
    highlights: {
      landscapes: ["Sacred Manimahesh Lake", "Manimahesh Kailash Peak reflection", "Alpine basin surrounded by peaks", "Gauri Kund sacred lake"],
      culturalSignificance: "The reflection of Manimahesh Kailash Peak in the lake is considered sacred. Thousands of devotees attempt the yatra every year during the auspicious period of Krishna Janmashtami.",
      uniqueFeatures: "The trek is culturally immersive. Chants, rituals, and shared hardship create a collective atmosphere rarely experienced on standard trekking routes. The raw energy and devotion of the route leave a lasting impression."
    },
    accommodation: {
      stayOptions: "Accommodation is extremely basic. Temporary tents, community shelters, and open camping areas are used at Dhancho and near the lake. Facilities depend heavily on weather and crowd size.",
      foodArrangements: "Food is available through langars and small temporary stalls during the yatra season, offering simple vegetarian meals. Trekkers should carry backup food.",
      waterSources: "Water is sourced from streams and springs but should always be treated before drinking."
    },
    permits: {
      required: false,
      details: "No formal trekking permit is required during the official yatra period, but registration and medical checks are often implemented by local authorities.",
      guideNecessity: "Hiring local guides or porters is highly recommended, especially for first-time participants.",
      safetyConsiderations: "Rescue operations are difficult due to terrain and crowd density, making self-awareness and caution critical.",
      commonMistakes: "Rushing the ascent, ignoring early symptoms of altitude sickness, and underestimating weather severity."
    },
    packing: {
      clothing: "Layered clothing is essential, including thermal insulation suitable for near-freezing conditions. Waterproof jackets are mandatory.",
      footwear: "Footwear must provide ankle support and grip on rocky terrain.",
      essentials: "Gloves, head coverings, proper rain protection, personal medical kit, energy food, and reusable water containers are necessities."
    },
    responsibleTrekking: {
      environmental: "Waste management is a major concern due to the volume of pilgrims. Carrying back all non-biodegradable waste is a shared responsibility.",
      culturalRespect: "Manimahesh is one of the most sacred pilgrimage sites. Respect for religious customs, silence near the lake, and appropriate behavior are non-negotiable.",
      leaveNoTrace: "Bathing rituals should be performed responsibly without polluting water sources. Overcrowding and careless behavior threaten the fragile alpine environment."
    },
    seo: {
      title: "Manimahesh Kailash Yatra - Complete Guide | Sacred Pilgrimage Trek",
      description: "Complete guide to Manimahesh Kailash Yatra - one of Himachal's most sacred pilgrimages to Lord Shiva's abode at 13,500 feet. Yatra dates, route, and preparation.",
      keywords: ["Manimahesh trek", "Kailash Yatra Himachal", "pilgrimage trek Chamba", "sacred trek India", "Lord Shiva pilgrimage"]
    }
  },

  "kinnaur-kailash": {
    overview: {
      significance: "The Kinnaur Kailash Parikrama is one of the most demanding and spiritually charged high altitude treks in Himachal Pradesh. Circling the sacred Kinnaur Kailash massif, this route reaches elevations of approximately 16,300 feet and traverses some of the most remote terrain in the Indian Himalayas. Unlike destination-focused treks, this is a circumambulation—a symbolic and physical act of reverence deeply rooted in the beliefs of the local Kinnauri people. The parikrama holds immense religious significance, as Kinnaur Kailash is revered as a manifestation of Lord Shiva.",
      category: "Very Hard"
    },
    route: {
      startPoint: "Kalpa or Ropa village",
      endPoint: "Sangla or Chitkul",
      majorCamps: ["Charang La approaches", "Alpine meadows", "Shepherd camps", "High ridgelines"],
      terrainDescription: "The trail moves through dense pine forests, high-altitude pastures, glacial streams, and exposed ridgelines. The terrain is highly variable, with narrow paths, steep ascents, and sections prone to landslides. Human settlements are rare once the trek progresses beyond initial villages, reinforcing the sense of isolation."
    },
    bestTime: {
      idealMonths: "Late June to early September",
      weatherPatterns: "Snow clearance at higher passes and stable weather are critical factors. Monsoon influence is relatively low due to trans-Himalayan geography, but rainfall can still destabilize trails at lower elevations.",
      unsafeSeasons: "Outside the recommended season, the route becomes extremely dangerous and inaccessible. Early summer may still present snow-covered trails, while late season attempts risk early snowfall and sub-zero temperatures."
    },
    difficulty: {
      totalDistance: "80 to 90 kilometers over 10 to 12 days",
      maxAltitude: "16,300 feet (4,970m)",
      dailyWalkingHours: "Often exceeds eight hours, especially during pass-crossing stages",
      fitnessRequirements: "Prior experience above 14,000 feet is strongly recommended. Proper acclimatization is essential.",
      whoShouldAvoid: "Not suitable for beginners. Requires mental resilience and understanding that retreat options are limited once the circuit begins."
    },
    highlights: {
      landscapes: ["Sacred Shiva Lingam rock formation", "Remote Kinnauri villages", "High-altitude pastures", "Trans-Himalayan terrain"],
      culturalSignificance: "The sight of the vertical rock formation known as the Shiva Lingam is central to the parikrama's significance. Ancient villages and traditional wooden architecture provide insight into life in one of Himachal's most isolated regions.",
      uniqueFeatures: "What sets this trek apart is its spiritual depth combined with extreme remoteness. The absence of modern infrastructure enhances the authenticity of the experience."
    },
    accommodation: {
      stayOptions: "Accommodation is entirely in tents, except for limited homestay options near starting and ending villages. There are no permanent shelters along most of the route.",
      foodArrangements: "Food must be carried and prepared by the trekking team, with rations planned carefully due to the trek's length. Meals are simple and focused on sustaining energy.",
      waterSources: "Water is sourced from high-altitude streams and glacial runoff, requiring filtration or purification at all times."
    },
    permits: {
      required: true,
      details: "Special permits are required due to proximity to sensitive border areas. These must be obtained in advance through local authorities.",
      guideNecessity: "Hiring experienced local guides is mandatory for safety and navigation.",
      safetyConsiderations: "The route includes poorly marked sections, and weather-related delays are common. Emergency rescue options are extremely limited.",
      commonMistakes: "Underestimating the trek's duration, carrying inadequate cold-weather gear, and failing to allocate sufficient acclimatization days."
    },
    packing: {
      clothing: "Expedition-level preparation required. High-quality insulation, waterproof layers, and wind protection are essential.",
      footwear: "Footwear should be robust enough to handle rocky trails, snow patches, and long walking days.",
      essentials: "Sun protection, navigation tools, and a comprehensive medical kit are critical. Every item carried should serve a clear purpose, as excess weight directly impacts endurance."
    },
    responsibleTrekking: {
      environmental: "The region is ecologically fragile. Trekkers must carry back all waste and avoid disturbance to grazing lands and water sources.",
      culturalRespect: "Respect for local customs and religious beliefs is essential, particularly near sacred landmarks.",
      leaveNoTrace: "Adhere strictly to Leave No Trace principles. Over-tourism and irresponsible trekking threaten the sanctity and sustainability of this route."
    },
    seo: {
      title: "Kinnaur Kailash Parikrama - Complete Guide | Sacred Circumambulation",
      description: "Complete guide to Kinnaur Kailash Parikrama - one of Himachal's most demanding treks circling the sacred Shiva Lingam at 16,300 feet. Permits, preparation, and route details.",
      keywords: ["Kinnaur Kailash trek", "Parikrama trek Himachal", "Shiva Lingam trek", "difficult trek India", "border area trek Himachal"]
    }
  },

  "beas-kund": {
    overview: {
      significance: "The Beas Kund Trek is a classic high-altitude trek in Himachal Pradesh that blends accessibility with serious mountain context. Situated at an altitude of approximately 12,800 feet, Beas Kund is revered as the mythical source of the Beas River, one of the most important rivers of North India. This trek is not only about reaching a glacial lake but about walking into the raw upper reaches of the Dhauladhar range. It sits between beginner-friendly routes and more demanding high altitude treks, making it a transitional trek where Himalayan trekking stops feeling casual and starts feeling real.",
      category: "Moderate"
    },
    route: {
      startPoint: "Solang Nallah or Dhundi",
      endPoint: "Beas Kund glacial lake",
      majorCamps: ["Dhundi", "Bakarthach meadows", "Beas Kund"],
      terrainDescription: "From the first day, the route leaves behind forested trails and moves quickly into open alpine terrain. The trail ascends through vast grasslands such as Bakarthach, surrounded by prominent peaks including Hanuman Tibba, Friendship Peak, and Shitidhar. The final stretch involves walking alongside glacial streams and navigating uneven terrain before reaching the shallow, icy lake cradled between massive mountain walls."
    },
    bestTime: {
      idealMonths: "Mid-May to late September",
      weatherPatterns: "Early season treks in May and June often involve snow-covered trails and frozen sections near the lake. July and August bring relatively stable access but occasional rainfall. September is widely considered the best month, offering clearer skies and excellent mountain views.",
      unsafeSeasons: "Winter and early spring are unsuitable due to heavy snowfall and inaccessible routes."
    },
    difficulty: {
      totalDistance: "16 to 18 kilometers over three days",
      maxAltitude: "12,800 feet (3,900m)",
      dailyWalkingHours: "Five to seven hours, depending on weather and trail conditions",
      fitnessRequirements: "Good physical fitness required due to altitude gain and uneven terrain. Trekkers should be comfortable walking on loose rocks and snow patches.",
      whoShouldAvoid: "Individuals with respiratory or cardiac issues should approach cautiously, as altitude-related discomfort can develop quickly without proper pacing."
    },
    highlights: {
      landscapes: ["Source of the Beas River", "Glacial lake surrounded by peaks", "Views of Hanuman Tibba and Friendship Peak", "Alpine meadows at Bakarthach"],
      culturalSignificance: "Beas Kund is revered as the mythical source of the Beas River, one of the most important rivers of North India, giving it geographical and cultural significance.",
      uniqueFeatures: "The surrounding peaks rise sharply from the valley floor, giving an immersive experience of the high Himalayas. Standing at Beas Kund with glacial ice melting into the nascent Beas River offers a rare sense of geological and cultural continuity."
    },
    accommodation: {
      stayOptions: "Accommodation is entirely in tents. There are no permanent shelters or homestays. Campsites like Bakarthach are exposed and can be extremely cold at night, even during summer.",
      foodArrangements: "Food is typically prepared by trekking teams or carried by trekkers themselves. Meals are simple and designed to provide sustained energy.",
      waterSources: "Water is sourced from glacial streams and must always be filtered or treated before drinking. There are no shops or food stalls on the route."
    },
    permits: {
      required: false,
      details: "No special permits are generally required for Indian nationals.",
      guideNecessity: "Hiring a local guide is strongly recommended, particularly early in the season when snow obscures trails.",
      safetyConsiderations: "Sudden weather changes, strong winds, and altitude sickness are key concerns. Emergency evacuation options are limited.",
      commonMistakes: "Underestimating how cold conditions can become at higher camps. Rushing the ascent and skipping acclimatization breaks are common mistakes."
    },
    packing: {
      clothing: "Layered clothing is essential, with insulation suitable for sub-zero nights. Waterproof and windproof outer layers are critical.",
      footwear: "Footwear should provide strong ankle support and grip on rocky and snowy terrain.",
      essentials: "Sunglasses for snow glare, trekking poles for stability, adequate hydration systems, and a well-thought-out medical kit are particularly important."
    },
    responsibleTrekking: {
      environmental: "The Beas Kund region is ecologically sensitive, and the alpine terrain recovers slowly from human impact.",
      culturalRespect: "Wildlife should never be disturbed. Camping should be limited to designated areas.",
      leaveNoTrace: "Follow Leave No Trace principles strictly, carrying back all waste and avoiding contamination of water sources."
    },
    seo: {
      title: "Beas Kund Trek - Complete Guide | Source of River Beas",
      description: "Complete guide to Beas Kund Trek - the glacial source of River Beas at 12,800 feet near Manali. Route details, best time, and what makes this trek special.",
      keywords: ["Beas Kund trek", "Manali trek", "source of Beas River", "glacial lake trek", "moderate trek Himachal"]
    }
  },

  "churdhar": {
    overview: {
      significance: "The Churdhar Trek leads to the highest peak of the outer Himalayas, standing at approximately 11,965 feet, and occupies a unique place among the best treks in Himachal Pradesh. Unlike high altitude treks that unfold deep within the inner ranges, Churdhar rises sharply above the lower hills, offering extraordinary views across vast stretches of North India. On clear days, the sightlines extend from the Shivalik ranges to the snow-clad peaks of the Greater Himalayas. Churdhar matters not only for its elevation but for its layered significance as both a pilgrimage site dedicated to Shirgul Maharaj and a serious mountain ascent.",
      category: "Moderate"
    },
    route: {
      startPoint: "Nohradhar",
      endPoint: "Churdhar summit",
      majorCamps: ["Nohradhar base", "Forest camps", "Summit temple area"],
      terrainDescription: "The trail ascends through dense forests of deodar, oak, and pine before emerging into open ridgelines and alpine clearings. As altitude increases, the forest thins and the terrain becomes more exposed, with narrow paths and steep inclines. The final stretch to the summit temple is particularly demanding, often involving strong winds and colder temperatures."
    },
    bestTime: {
      idealMonths: "April to June and September to November",
      weatherPatterns: "Spring and early summer offer pleasant conditions, blooming forest sections, and relatively stable weather. Autumn brings clear views and manageable temperatures.",
      unsafeSeasons: "The monsoon season from July to August brings heavy rainfall, making trails slippery with increased landslide risk. Winter from December to March sees snowfall and significantly dropped temperatures."
    },
    difficulty: {
      totalDistance: "18 kilometers one way, usually over two days",
      maxAltitude: "11,965 feet (3,647m)",
      dailyWalkingHours: "Seven to eight hours, especially on summit day",
      fitnessRequirements: "Moderate to difficult primarily due to long distance and sustained ascent. Fatigue accumulates due to continuous climb and lack of gradual acclimatization breaks.",
      whoShouldAvoid: "Trekkers with limited endurance or knee issues should approach this trek cautiously."
    },
    highlights: {
      landscapes: ["360-degree panoramic views", "Dense deodar and oak forests", "Views extending to Shivalik and Greater Himalayan ranges", "Alpine clearings"],
      culturalSignificance: "The ancient temple at the summit is dedicated to Shirgul Maharaj and is a place of pilgrimage for devotees across the region.",
      uniqueFeatures: "From the summit, trekkers can observe a rare 360-degree view encompassing Himachal, Uttarakhand, and even the plains beyond. The isolation at the top, combined with the ancient temple structure, creates an atmosphere that feels both exposed and deeply contemplative."
    },
    accommodation: {
      stayOptions: "Accommodation is basic. Trekkers usually camp along the route or stay in simple shelters near the summit temple, depending on availability.",
      foodArrangements: "Food options are limited to simple meals prepared by trekkers or provided by small seasonal stalls during peak pilgrimage periods.",
      waterSources: "Water is available from natural sources along the trail but must be treated before drinking."
    },
    permits: {
      required: false,
      details: "No formal permits are required for Indian nationals.",
      guideNecessity: "The trail is generally well-marked, but weather and fog can reduce visibility. Hiring a local guide is recommended for first-time trekkers.",
      safetyConsiderations: "Sudden weather changes, hypothermia near the summit, and exhaustion due to long trekking days are common concerns.",
      commonMistakes: "Underestimating how cold and windy conditions can become at the top."
    },
    packing: {
      clothing: "Layered clothing is essential, with insulated jackets for cold conditions near the summit. Waterproof outerwear is recommended.",
      footwear: "Sturdy trekking shoes with good grip are necessary for forest trails and exposed ridgelines.",
      essentials: "Headlamps, gloves, extra socks, and a personal medical kit play a significant role in completing this long trek comfortably."
    },
    responsibleTrekking: {
      environmental: "Churdhar is an ecologically sensitive region. Littering and careless behavior threaten the fragile environment.",
      culturalRespect: "Churdhar is a sacred site. Trekkers must respect religious practices at the summit temple and maintain silence and cleanliness.",
      leaveNoTrace: "Following Leave No Trace principles and respecting local customs ensures Churdhar remains accessible for future trekkers and pilgrims."
    },
    seo: {
      title: "Churdhar Trek - Complete Guide | Highest Peak of Outer Himalayas",
      description: "Complete guide to Churdhar Trek - the highest peak of outer Himalayas at 11,965 feet in Sirmaur. Ancient temple, panoramic views, and trekking details.",
      keywords: ["Churdhar trek", "Sirmaur trek", "highest outer Himalayan peak", "Shirgul temple trek", "weekend trek Himachal"]
    }
  },

  "sar-pass": {
    overview: {
      significance: "The Sar Pass Trek is one of the most popular crossover treks in Himachal Pradesh, known for introducing trekkers to high-altitude terrain without the logistical intensity of longer Himalayan expeditions. Rising to an altitude of approximately 13,800 feet, Sar Pass connects the Parvati Valley to the outer Himalayan slopes near Barshaini. It is often considered a stepping stone for trekkers transitioning from beginner routes to more demanding Himalayan trekking routes. Sar Pass compresses multiple mountain experiences into a single journey—dense forests, alpine meadows, snowfields, and high passes within a few days.",
      category: "Moderate"
    },
    route: {
      startPoint: "Kasol or Grahan village",
      endPoint: "Near Barshaini",
      majorCamps: ["Grahan village", "Min Thach", "Nagaru", "Sar Pass", "Biskeri Thach"],
      terrainDescription: "The trail ascends gradually through thick pine and oak forests, passing traditional villages like Grahan that still retain old Himalayan architectural styles. Higher up, the forest opens into expansive meadows such as Min Thach and Nagaru. The final ascent to Sar Pass involves steep snow-covered slopes during early season treks, followed by a long descent into the upper reaches of the Parvati Valley."
    },
    bestTime: {
      idealMonths: "Mid-May to late June and September to early October",
      weatherPatterns: "Early summer treks offer extensive snow near the pass, making the experience visually dramatic but physically demanding. September provides more stable weather, clearer skies, and safer trail conditions.",
      unsafeSeasons: "July and August are not recommended due to monsoon rainfall, which makes trails slippery with increased landslide risk. After October, early snowfall and dropping temperatures make the route unsafe."
    },
    difficulty: {
      totalDistance: "Approximately 48 kilometers over five to six days",
      maxAltitude: "13,800 feet (4,200m)",
      dailyWalkingHours: "Five to eight hours, particularly on pass-crossing day",
      fitnessRequirements: "Physical fitness required with comfort in sustained climbs and descents. The ascent is gradual but proper acclimatization is needed.",
      whoShouldAvoid: "Individuals with limited stamina or no prior trekking experience may find the trek exhausting."
    },
    highlights: {
      landscapes: ["Snow descent slopes", "Panoramic Parvati Valley views", "Dense pine and oak forests", "Alpine meadows at Min Thach and Nagaru"],
      culturalSignificance: "Strong cultural exposure through villages like Grahan, where traditional lifestyles remain largely intact with old Himalayan architectural styles.",
      uniqueFeatures: "Sar Pass is remembered for its snow descent, especially during early season treks when long snow slopes allow controlled sliding under supervision. The contrast between human settlements, dense forests, and high-altitude snowfields makes it one of the most diverse moderate treks."
    },
    accommodation: {
      stayOptions: "Accommodation is primarily in tents. There are no permanent shelters beyond initial villages, and campsites are located in open meadows or forest clearings.",
      foodArrangements: "Food is prepared by trekking teams or carried by trekkers. Meals are designed for sustained energy.",
      waterSources: "Water is sourced from mountain streams and must be filtered or treated. There are no shops or facilities once the trek progresses beyond villages."
    },
    permits: {
      required: false,
      details: "No special permits are generally required for Indian nationals.",
      guideNecessity: "Local guide strongly recommended, especially during snow conditions early in the season.",
      safetyConsiderations: "Snow conditions require careful navigation. Monsoon increases landslide and slippery trail risks. Weather can change rapidly at higher elevations.",
      commonMistakes: "Underestimating the physical demands of pass-crossing day. Inadequate preparation for cold nights at high camps."
    },
    packing: {
      clothing: "Layered clothing essential for varying temperatures. Insulated jackets for high camps and breathable layers for forest sections. Waterproof outer layers mandatory.",
      footwear: "Sturdy trekking boots with good grip for snow, rocks, and forest trails. Gaiters useful during snow conditions.",
      essentials: "Sun protection, trekking poles, personal medical kit, adequate hydration systems. Extra warm clothing for cold nights at altitude."
    },
    responsibleTrekking: {
      environmental: "The alpine ecosystem is fragile. Carry back all waste and avoid disturbing natural areas.",
      culturalRespect: "Respect traditional villages along the route. Grahan village maintains old customs and should be approached with cultural sensitivity.",
      leaveNoTrace: "Follow Leave No Trace principles. Avoid contaminating water sources. Camp only in designated areas."
    },
    seo: {
      title: "Sar Pass Trek - Complete Guide | Parvati Valley Crossover",
      description: "Complete guide to Sar Pass Trek - a popular 5-day crossover trek at 13,800 feet in Parvati Valley. Snow slides, alpine meadows, and traditional villages.",
      keywords: ["Sar Pass trek", "Kasol trek", "Parvati Valley trek", "snow trek Himachal", "crossover trek India"]
    }
  },

  "bhrigu-lake": {
    overview: {
      significance: "The Bhrigu Lake Trek is a short but rewarding high-altitude trek that takes you to a sacred glacial lake at approximately 14,000 feet. Named after Sage Bhrigu, who is believed to have meditated here, the lake holds both spiritual and scenic significance. Despite its short duration, this trek offers genuine high-altitude experience with rapidly changing landscapes from lush meadows to rocky moraines. The meadows around Bhrigu Lake change color with seasons—green in summer, golden in autumn, and snow-covered in early season—making each visit unique.",
      category: "Moderate"
    },
    route: {
      startPoint: "Gulaba or Panduropa near Manali",
      endPoint: "Bhrigu Lake",
      majorCamps: ["Gulaba", "Rola Kholi meadows", "Bhrigu Lake basin"],
      terrainDescription: "The trek begins from the meadows above Manali and quickly gains altitude through rolling grasslands before reaching rocky terrain near the lake. The approach to Bhrigu Lake involves navigating boulder fields and scree slopes, with the sacred lake appearing suddenly in a high-altitude basin surrounded by peaks."
    },
    bestTime: {
      idealMonths: "May to October",
      weatherPatterns: "May and early June offer snow-covered landscapes around the lake. July and August provide lush green meadows. September and October bring golden meadows and clear skies.",
      unsafeSeasons: "November to April sees heavy snowfall making the route dangerous and inaccessible."
    },
    difficulty: {
      totalDistance: "Approximately 24 kilometers over 3 days",
      maxAltitude: "14,000 feet (4,270m)",
      dailyWalkingHours: "Four to six hours depending on weather and acclimatization",
      fitnessRequirements: "Good physical fitness required for the rapid altitude gain. The short duration means less time for acclimatization, making it challenging despite being brief.",
      whoShouldAvoid: "Those prone to altitude sickness or with respiratory issues should be cautious. Prior high-altitude experience is recommended."
    },
    highlights: {
      landscapes: ["Sacred glacial lake", "360-degree mountain views", "Colorful meadows that change with seasons", "Rocky moraines and boulder fields"],
      culturalSignificance: "The lake is named after Sage Bhrigu and is believed to have been his meditation site. Local shepherds and villagers hold the lake sacred.",
      uniqueFeatures: "Despite being a short trek, Bhrigu Lake offers genuine high-altitude experience. The meadows around the lake transform dramatically with seasons, offering different experiences throughout the trekking window."
    },
    accommodation: {
      stayOptions: "Camping in tents at designated sites. No permanent structures exist beyond the base villages.",
      foodArrangements: "Food prepared by trekking teams or self-carried. Simple, high-energy meals suitable for altitude.",
      waterSources: "Water from mountain streams must be treated before drinking."
    },
    permits: {
      required: false,
      details: "No special permits required for Indian nationals.",
      guideNecessity: "Guide recommended due to unmarked sections near the lake and rapidly changing weather.",
      safetyConsiderations: "Rapid altitude gain requires careful monitoring for altitude sickness symptoms. Weather can change quickly at these heights.",
      commonMistakes: "Underestimating the altitude challenge due to the trek's short duration. Inadequate warm clothing for cold nights."
    },
    packing: {
      clothing: "Layered clothing for temperature variations. Warm insulation for cold nights. Waterproof layers for unexpected rain or snow.",
      footwear: "Sturdy trekking boots with good ankle support for boulder fields.",
      essentials: "Sun protection, adequate water, personal medical kit, and altitude sickness medication."
    },
    responsibleTrekking: {
      environmental: "The high-altitude ecosystem is particularly fragile. Minimal impact camping practices are essential.",
      culturalRespect: "Respect the sacred nature of the lake. Avoid disturbing the water or leaving offerings that could pollute.",
      leaveNoTrace: "Carry back all waste. Avoid camping too close to the lake shore."
    },
    seo: {
      title: "Bhrigu Lake Trek - Complete Guide | Sacred Glacial Lake near Manali",
      description: "Complete guide to Bhrigu Lake Trek - a short but challenging trek to a sacred lake at 14,000 feet near Manali. Colorful meadows, spiritual significance, and stunning views.",
      keywords: ["Bhrigu Lake trek", "Manali trek", "sacred lake Himachal", "short high altitude trek", "weekend trek from Manali"]
    }
  }
};

export const getTrekEnrichedBySlug = (slug: string): TrekEnriched | undefined => {
  return treksEnriched[slug];
};
