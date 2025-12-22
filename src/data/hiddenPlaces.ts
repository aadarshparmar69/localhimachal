export interface HiddenPlace {
  id: string;
  name: string;
  slug: string;
  district: string;
  districtSlug: string;
  tagline: string;
  emotionalOpening: string;
  locationLandscape: string;
  villageLife: string;
  whyHidden: string;
  bestTimeToVisit: string;
  howToReach: string;
  responsibleTravel: string;
  altitude: string;
  image: string;
  nearbyTreks: string[];
  nearbyHomestays: string[];
}

export const hiddenPlaces: HiddenPlace[] = [
  // KINNAUR (5 Hidden Places)
  {
    id: "k1",
    name: "Ropa Valley",
    slug: "ropa-valley",
    district: "Kinnaur",
    districtSlug: "kinnaur",
    tagline: "Where Orchards Meet the Sky",
    emotionalOpening: `The morning mist parts slowly in Ropa Valley, as if the mountains themselves are waking from a deep slumber. There's a silence here that's different from any other place in Himachal — it's not empty, but alive with whispers of centuries-old apple trees and the distant bells of returning sheep. When you stand at the edge of an orchard and look toward the Kinnaur Kailash, you understand why the locals call this the "garden of the gods."

Few travelers know about Ropa. It sits nestled between the more famous Sangla and Chitkul, a gentle valley that has somehow escaped the tourist trail. Here, the rhythm of life follows the apple seasons, the snowfall patterns, and the ancient festivals that honor deities only these villagers know.`,
    locationLandscape: `Ropa Valley lies approximately 12 kilometers from Sangla, at an elevation of around 2,700 meters. The valley is cradled by pine-forested slopes on one side and steep cliff faces on the other, with the Baspa River carving its way through the landscape below. The terrain is a patchwork of terraced orchards, small meadows dotted with wildflowers, and ancient groves of deodar and walnut trees.

The landscape transforms dramatically with the seasons. In spring, the valley erupts with apple and apricot blossoms — a sea of white and pink that perfumes the crisp mountain air. Summer brings lush green carpets and shepherds returning with their flocks. Autumn paints everything in gold and crimson as the harvest begins. Winter wraps the valley in a white blanket, with only smoke rising from traditional Kinnauri homes.`,
    villageLife: `The people of Ropa are predominantly from the Kinnauri tribe, with Buddhist and Hindu traditions seamlessly woven together. You'll find prayer flags fluttering beside temple bells, and homes adorned with intricate wood carvings depicting both Buddhist symbols and Hindu deities.

Most families here are apple farmers, maintaining orchards that have been passed down through generations. The women wear the distinctive Kinnauri cap — the "thepang" — and traditional woolen shawls woven on hand looms. Evenings are often spent around the bukhari (wood-burning stove), sharing stories of old gods and mountain spirits.

Traditional houses are built in the Kath-Khuni style — alternating layers of stone and timber without any nails — a technique that makes them earthquake-resistant and incredibly beautiful.`,
    whyHidden: `Ropa has remained hidden primarily because it lies on a diversion from the main Sangla-Chitkul road. Most tourists heading to Chitkul (India's last inhabited village before Tibet) pass by the turnoff without noticing. There's minimal signage, no hotels, and the narrow road leading into the valley seems to discourage casual exploration.

Additionally, local families have preferred to keep the valley quiet. There's a subtle, unspoken understanding among residents that some places are better left undiscovered — where the relationship between visitor and host can remain intimate rather than transactional.`,
    bestTimeToVisit: `The valley is most accessible from late April through October. Spring (April-May) brings the spectacular blossom season, transforming the orchards into a photographer's paradise. Summer (June-August) offers pleasant weather for long walks and village exploration. Autumn (September-October) is harvest time — the most culturally rich period when the valley buzzes with activity and celebrations.

Winter visits are possible but challenging. The road may be closed after heavy snowfall, and temperatures drop well below freezing. However, for those who can brave the cold, the valley's winter solitude is unmatched.`,
    howToReach: `From Shimla, drive toward Sangla via Karchham (approximately 220 km, 8-9 hours). About 12 km before reaching Sangla, a small road branches left toward Ropa Valley. This road is unpaved for stretches and requires a sturdy vehicle.

The nearest airport is in Shimla (Jubbarhatti), though most travelers fly into Chandigarh and drive. There are no direct buses to Ropa; you'll need to take a bus to Sangla and arrange local transport from there. Shared taxis from Sangla are available but not frequent.`,
    responsibleTravel: `Ropa Valley has no formal waste management system. Carry all trash out with you. Do not use plastic water bottles — bring a refillable bottle and ask locals where to fill it.

Photography is welcome, but always ask permission before photographing people, especially elders and women. Temple photography may be restricted — observe and ask first.

If staying with a local family, respect their customs. Remove shoes before entering homes, avoid pointing feet toward the hearth, and participate in meals with grace. Your presence should leave no trace except gratitude.`,
    altitude: "2,700m",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    nearbyTreks: ["kinnaur-kailash"],
    nearbyHomestays: ["rajus-apple-orchard", "kalpa-apple-farm"]
  },
  {
    id: "k2",
    name: "Thangi Village",
    slug: "thangi-village",
    district: "Kinnaur",
    districtSlug: "kinnaur",
    tagline: "The Last Untouched Frontier",
    emotionalOpening: `There is a village where the road simply ends and the world begins. Thangi sits at the edge of everything — beyond the apple orchards of Chitkul, past the last police checkpoint, where only shepherds and snow leopards roam. The silence here is so profound that you can hear the snowflakes landing on stone.

I remember the first time I walked into Thangi. The village headman was sitting outside his wooden home, carving prayer beads from apricot seeds. He looked up, smiled, and without words, invited me to sit. For three hours, we said nothing. Sometimes, that's the only conversation that matters.`,
    locationLandscape: `Thangi lies about 6 kilometers beyond Chitkul, at an elevation of 3,100 meters. The village is accessible only by foot or on horseback for most of the year. It occupies a small plateau overlooking the Baspa River gorge, with the Indo-Tibetan border looming just kilometers away.

The landscape is stark and severe — high-altitude desert on one side, dense pine forests on the other. Massive boulders, deposited by ancient glaciers, scatter the valley floor. In summer, wildflowers carpet the meadows in impossible colors. In winter, this becomes one of the snowiest regions in Kinnaur.`,
    villageLife: `Thangi has fewer than 30 families, most of whom practice a blend of Buddhism and local animist traditions. The village has no shops, no guesthouses, and no mobile network. Life follows patterns unchanged for centuries — herding sheep and yaks, cultivating barley and buckwheat, and maintaining ancient shrines to mountain deities.

The people here are remarkably self-sufficient. They spin their own wool, brew their own barley wine, and build their own homes from local stone and timber. Children walk an hour each way to reach the nearest school in Chitkul.`,
    whyHidden: `Thangi is hidden by geography and intention. The lack of motorable road, the border proximity, and the complete absence of tourism infrastructure have kept it off all travel maps. Even Kinnaur tourism websites rarely mention it.

The villagers themselves are ambivalent about visitors. They welcome those who come with respect, but have no interest in developing tourism. As one elder told me, "We have everything we need. Why would we want anything else?"`,
    bestTimeToVisit: `June to September offers the best window. The trail from Chitkul is clear, the weather is mild, and the valley is at its most beautiful. The spring thaw (April-May) makes the trail muddy and unpredictable. Winter is only for experienced mountain travelers with proper equipment.`,
    howToReach: `Drive to Chitkul via Sangla and Rakcham. From Chitkul, the trail to Thangi begins at the northern edge of the village. The 6-kilometer trek takes 2-3 hours through gentle terrain. No permits are currently required, but always check with the Chitkul checkpost as border regulations change.`,
    responsibleTravel: `This village has no waste management whatsoever. Whatever you bring, you take back. Do not offer money to children — instead, contribute to the village temple or community fund through the headman.

Homestays are possible but must be arranged informally. Bring your own sleeping bag, offer to help with chores, and leave a fair contribution for food and shelter. This is not transactional tourism — it is guest hospitality in its purest form.`,
    altitude: "3,100m",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&q=80",
    nearbyTreks: ["kinnaur-kailash"],
    nearbyHomestays: ["rajus-apple-orchard"]
  },
  {
    id: "k3",
    name: "Purbani Village",
    slug: "purbani-village",
    district: "Kinnaur",
    districtSlug: "kinnaur",
    tagline: "Guardians of the Sacred Grove",
    emotionalOpening: `The sacred grove of Purbani has stood for a thousand years. Locals say that cutting even a single branch from these ancient deodars will bring misfortune upon your family for seven generations. And so the forest remains — a cathedral of green in a region where trees are precious beyond measure.

Walking through Purbani at dawn, with mist weaving between the massive trunks, you feel the presence of something older than human memory. The villagers leave offerings at the base of the largest tree — flowers, barley, small coins. They believe the forest protects them from avalanches, from drought, from the countless dangers of mountain life.`,
    locationLandscape: `Purbani sits at 2,850 meters on a forested ridge above the Sutlej River, between Kalpa and Sangla. The village overlooks a steep gorge, with views of Kinnaur Kailash and the Raldang peaks. The sacred deodar grove covers approximately 40 hectares of the surrounding hillside.

The terrain is characterized by dense forest, terraced fields clinging to steep slopes, and narrow footpaths connecting scattered hamlets. Unlike the barren upper reaches of Kinnaur, Purbani remains verdant year-round.`,
    villageLife: `The 45 families of Purbani are predominantly Hindu, worshipping the goddess Shakti in her local form. The village temple, built in traditional pagoda style, hosts festivals that bring communities together from across the region.

Agriculture here is challenging — the slopes are steep and water is seasonal. Families grow maize, potatoes, and kidney beans on their terraces. Many men work in government jobs in nearby towns, returning on weekends.`,
    whyHidden: `Purbani is hidden in plain sight. The village lies just off the main highway, but the turn-off is unmarked and the narrow road discourages casual exploration. Tour operators prefer more photogenic locations with better infrastructure.

The sacred grove is also not promoted to outsiders — it is a place of worship, not tourism.`,
    bestTimeToVisit: `March through November offers excellent visiting conditions. Spring brings wildflowers and the awakening of the forest. Summer is cool and green. Autumn offers clear views of the surrounding peaks. Winter is cold but beautiful if you can handle the chill.`,
    howToReach: `From Recong Peo, drive toward Sangla. Approximately 15 kilometers past Powari, a small road branches left toward Purbani (look for a hand-painted sign). The village is 3 kilometers from the highway. Public transport is non-existent — private vehicle or hitchhiking only.`,
    responsibleTravel: `The sacred grove is exactly that — sacred. Do not collect wood, pluck leaves, or disturb the offerings. Walk quietly and stay on marked paths. Photography is allowed but be respectful of worshippers.

If you wish to enter the temple, remove your shoes and any leather items. Leave a small donation and accept any prasad offered with both hands.`,
    altitude: "2,850m",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    nearbyTreks: ["kinnaur-kailash"],
    nearbyHomestays: ["kalpa-apple-farm"]
  },
  {
    id: "k4",
    name: "Lippa Asrang",
    slug: "lippa-asrang",
    district: "Kinnaur",
    districtSlug: "kinnaur",
    tagline: "Twin Villages of Forbidden Fruit",
    emotionalOpening: `Lippa and Asrang sit facing each other across a narrow gorge, like old friends who've been talking for centuries. The villages are famous for one thing: wine. Yes, wine — made from grapes that shouldn't grow at this altitude, fermented in underground cellars by monks who've kept the tradition alive since the time of the Tibetan kings.

When you drink the wine of Lippa, they say, you taste the sunshine of a thousand summers. I cannot confirm this, but I can say this: sitting on a stone wall at sunset, watching the shadows lengthen across the valley, a glass of this village wine makes you never want to leave.`,
    locationLandscape: `Lippa and Asrang lie at approximately 2,650 meters, on opposing hillsides about 8 kilometers from Kalpa. The villages overlook the Sutlej River, with terraced vineyards and apricot orchards covering the sun-facing slopes.

The terrain is surprisingly Mediterranean in feel — dry, warm slopes where grapes ripen slowly in the thin mountain air. This microclimate, combined with centuries of winemaking knowledge, has created a unique viticultural tradition found nowhere else in the Himalayas.`,
    villageLife: `Both villages have strong Buddhist traditions, with monasteries dating back several centuries. The Lippa Gompa is particularly significant, housing ancient murals and manuscripts. Monks here still practice traditional astrology, herbal medicine, and winemaking.

Village life revolves around the agricultural calendar — pruning vines in spring, harvesting grapes in autumn, pressing and fermenting through winter. Almost every household makes wine, though the quantities are small and rarely sold outside the community.`,
    whyHidden: `Unlike Kalpa or Chitkul, Lippa-Asrang has no famous viewpoint or Instagram-worthy landmark. The villages are tucked into a side valley, away from the main tourist route. There are no hotels, no restaurants, no souvenir shops.

Additionally, the winemaking tradition has been kept deliberately low-profile. Government regulations on alcohol production are complex, and villagers prefer to share their wine privately rather than commercialize it.`,
    bestTimeToVisit: `Autumn (September-October) is magical — the vineyards are heavy with grapes, the harvest festivities begin, and the weather is perfect. Spring (April-May) brings apricot blossoms and pruning ceremonies. Summer is pleasant but less eventful. Winter is cold and quiet.`,
    howToReach: `From Kalpa, the road to Lippa branches off near Roghi village. The 8-kilometer drive takes about 30 minutes on a winding but paved road. From Lippa, a walking trail connects to Asrang (2 kilometers, 40 minutes). No public transport; hire a taxi from Kalpa.`,
    responsibleTravel: `If offered wine, accept with grace but do not ask to buy bottles. This is a gift, not a product. If you wish to reciprocate, bring fruit, biscuits, or small gifts from your hometown.

The monastery welcomes visitors but remember it is a place of practice, not performance. Observe morning prayers quietly, do not photograph monks without permission, and leave a donation at the altar.`,
    altitude: "2,650m",
    image: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800&q=80",
    nearbyTreks: ["kinnaur-kailash"],
    nearbyHomestays: ["kalpa-apple-farm"]
  },
  {
    id: "k5",
    name: "Shiaso Village",
    slug: "shiaso-village",
    district: "Kinnaur",
    districtSlug: "kinnaur",
    tagline: "Where the Mountain Speaks",
    emotionalOpening: `Every evening at sunset, when the light turns golden and the shadows grow long, the mountain behind Shiaso seems to come alive. The rock face catches the dying sun in a way that creates patterns — faces, animals, ancient scripts. The villagers believe these are messages from the mountain deity, and they've been reading them for generations.

I spent three evenings in Shiaso, sitting on a rooftop with an old woman who spoke no Hindi but communicated everything through gestures and smiles. Each sunset, she would point to the mountain and trace the shapes with her finger, telling stories I could only half understand. It didn't matter. The mountain was speaking, and we were both listening.`,
    locationLandscape: `Shiaso perches at 2,900 meters on a ridge overlooking the confluence of two small streams that feed into the Sutlej. The village faces a distinctive red rock formation that glows spectacularly at sunset.

The landscape is a mix of cultivated terraces, wild grasslands, and scattered pine groves. Below the village, a waterfall drops into a natural pool that locals consider sacred.`,
    villageLife: `Shiaso has only about 25 families, all belonging to the Kinnauri tribe. The community maintains strong animist traditions alongside Hindu practices. Each family has its own household deity, honored in a small shrine within the home.

The villagers are primarily farmers and shepherds. In summer, many families move with their sheep to high-altitude pastures, returning only in autumn. This transhumance tradition is slowly fading as younger generations seek work elsewhere.`,
    whyHidden: `There is no road to Shiaso. You must walk. This simple fact keeps most tourists away. Additionally, the village has no accommodation, no shops, and no attractions in the conventional sense.

Those who do visit come for the mountain light, the peace, and the welcome of people who have nothing to sell but everything to share.`,
    bestTimeToVisit: `May to September offers the best trekking conditions. The sunset phenomenon is visible year-round but is most spectacular during the clear post-monsoon weeks of September and October. Winter visits require serious cold-weather preparation.`,
    howToReach: `From Sangla, take a local jeep to Kamru village. From Kamru, a footpath leads uphill to Shiaso (approximately 4 kilometers, 2 hours of moderately steep climbing). The trail is well-defined but can be muddy after rain.`,
    responsibleTravel: `Bring all supplies you need, including water purification. If staying overnight, you'll need to arrange with a family informally — bring gifts and be prepared to sleep on the floor.

The sunset viewpoint is located above the village. Ask permission before going — certain areas may be off-limits due to religious significance. Never point at or photograph the rock face during prayers.`,
    altitude: "2,900m",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=80",
    nearbyTreks: ["kinnaur-kailash"],
    nearbyHomestays: ["rajus-apple-orchard"]
  },

  // KULLU (5 Hidden Places)
  {
    id: "ku1",
    name: "Shangarh Meadow",
    slug: "shangarh-meadow",
    district: "Kullu",
    districtSlug: "kullu",
    tagline: "The Last Shangri-La",
    emotionalOpening: `You've seen meadows before. You've seen mountains before. But you've never seen anything like Shangarh. It's as if someone took a piece of the Alps, dipped it in Himalayan magic, and dropped it into a hidden fold of the Sainj Valley where no one would find it.

The first time I walked into Shangarh, I stopped breathing. Not from altitude — from beauty. The grass was so green it hurt to look at. The surrounding forests were so dense and perfect they seemed painted. And in the center of this impossible meadow sat a single wooden temple, ancient and leaning slightly, as if bowing to the mountains that encircle it.`,
    locationLandscape: `Shangarh lies at approximately 2,680 meters in the Sainj Valley, a tributary of the Kullu Valley. The meadow is a wide, gently sloping grassland of about 20 hectares, surrounded on all sides by dense deodar and spruce forests. Beyond the trees, the peaks of the Great Himalayan National Park rise in layered ridges.

The landscape is characterized by rolling hills, cascading streams, and scattered hamlets clinging to forested slopes. Unlike the tourist-heavy Kullu-Manali area, Sainj Valley has retained its wild, untouched character.`,
    villageLife: `The small community near Shangarh consists of traditional Himachali families who have grazed cattle on these meadows for centuries. The ancient Shangchul Mahadev temple at the center of the meadow is their spiritual anchor — locals believe the deity protects the valley from natural disasters.

Life moves slowly here. Women weave traditional Kulluvi shawls, men tend to sheep and cattle, and children play in the meadow after school. The rhythm is set by the seasons, the festivals, and the ancient traditions that bind this community together.`,
    whyHidden: `Shangarh has remained hidden because reaching it requires effort. There's no comfortable hotel, no restaurant, no paved road for the last few kilometers. The tourists who flood into Kullu and Manali rarely venture into the quieter side valleys.

The villagers themselves have shown little interest in commercial tourism. A few homestays have opened in recent years, but they remain modest, family-run affairs.`,
    bestTimeToVisit: `Spring (March-May) brings wildflowers and melting snow. Summer (June-August) is lush and green but can see monsoon showers. Autumn (September-November) offers clear skies, golden light, and harvest festivities. Winter brings snow and solitude for those who can handle the cold.`,
    howToReach: `From Kullu, drive to Aut, then take the road toward Sainj. From Sainj town, it's about 15 kilometers to the turn-off for Shangarh. The final stretch is unpaved and requires a sturdy vehicle or a 3-kilometer walk from the last taxi point.`,
    responsibleTravel: `Shangarh is fragile. Do not litter, do not play loud music, and do not damage the meadow by driving vehicles onto the grass. The temple is actively worshipped — observe from a respectful distance if prayers are in progress.

If camping, use designated areas away from the temple. Carry all waste out. Consider hiring a local guide — it provides income and ensures you don't inadvertently trespass on sacred ground.`,
    altitude: "2,680m",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80",
    nearbyTreks: ["sar-pass"],
    nearbyHomestays: ["jibhi-forest-cottage", "tirthan-valley-retreat"]
  },
  {
    id: "ku2",
    name: "Grahan Village",
    slug: "grahan-village",
    district: "Kullu",
    districtSlug: "kullu",
    tagline: "Gateway to the Sacred Springs",
    emotionalOpening: `The first words I heard in Grahan were from a grandmother spinning wool on her porch: "Aap Kheerganga ja rahe ho? Ruko, chai piyo." You're going to Kheerganga? Stop, drink tea.

That single sentence captures everything about Grahan. It's a village that exists as a threshold — between the bustling Parvati Valley below and the sacred hot springs above. Most trekkers pass through in an hour, eager to reach Kheerganga. But those who stop, who accept the tea, who sit for a while — they discover that Grahan is a destination in itself.`,
    locationLandscape: `Grahan sits at 2,350 meters on the traditional trekking route to Kheerganga, roughly halfway up the mountain from Kasol. The village occupies a sunny clearing in the midst of dense oak and rhododendron forest, with sweeping views of the Parvati Valley below.

The terrain is steep and forested, with the village carved into a natural terrace on the mountainside. Crystal-clear streams flow through the settlement, providing water and the soundtrack of mountain life.`,
    villageLife: `Approximately 50 families live in Grahan, belonging to the local Himachali community. The village has a strong tradition of hospitality — offering shelter and food to pilgrims heading to Kheerganga has been practiced for generations.

Most families now run small guesthouses or cafes catering to trekkers. But beneath the modest tourism economy, traditional life continues — women spin wool, men tend livestock, and the village deity is honored with regular offerings and festivals.`,
    whyHidden: `Grahan hides in plain sight. It's on the popular Kheerganga trek, but almost everyone treats it as a rest stop rather than a destination. There are no famous attractions, no Instagram spots, no reason to stay — unless you understand that sometimes the reason to stay is simply the staying.`,
    bestTimeToVisit: `March through November offers good conditions. Spring brings rhododendron blooms. Summer is cool and pleasant. Autumn provides clear views and colorful forests. Winter is cold but beautiful, with far fewer trekkers.`,
    howToReach: `From Kasol, take a shared taxi to Barshaini (15 km, 45 minutes). From Barshaini, trek to Grahan (6 km, 3-4 hours). The trail is well-marked and climbs steadily through the forest. There's a shorter route from Nakthan village as well.`,
    responsibleTravel: `The Kheerganga trek generates significant waste. Do not add to it. Carry reusable bottles, avoid packaged food, and take all trash down with you.

If staying overnight in Grahan, support local guesthouses rather than setting up independent camps. Pay fair prices, tip generously, and treat your hosts with the respect you would show family.`,
    altitude: "2,350m",
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80",
    nearbyTreks: ["kheerganga"],
    nearbyHomestays: ["jibhi-forest-cottage"]
  },
  {
    id: "ku3",
    name: "Balo Village",
    slug: "balo-village",
    district: "Kullu",
    districtSlug: "kullu",
    tagline: "Time's Forgotten Corner",
    emotionalOpening: `There's a village in the upper reaches of the Tirthan Valley where the phone signal dies, the road ends, and the 21st century simply doesn't apply. Balo exists in its own time — a time measured not in hours but in seasons, not in appointments but in the angle of sunlight on ancient wooden homes.

I reached Balo after a two-hour walk through forests that seemed to go on forever. When the trail finally opened into the village, I found a woman grinding wheat on a stone mill, using the same motion her grandmother used, and her grandmother before that. She looked up, smiled, and said nothing. Some welcomes need no words.`,
    locationLandscape: `Balo lies at approximately 2,400 meters at the very end of a side valley in the Tirthan watershed. The village is the last settlement before the alpine meadows and peaks of the Great Himalayan National Park begin.

The landscape is heavily forested, with the village occupying a small clearing surrounded by towering deodar and pine. Waterfalls cascade down nearby cliffs, feeding streams that provide the village's water supply.`,
    villageLife: `Balo has fewer than 20 households, all practicing traditional mountain agriculture. There's no road, no electricity grid (some homes have solar panels), and limited mobile coverage. The village relies on rainwater harvesting, stone mills for grinding grain, and wood fires for warmth.

The community is remarkably tight-knit, with elaborate traditions of mutual aid. When one family builds a house, the entire village helps. When one family faces hardship, the community supports.`,
    whyHidden: `Balo is hidden because reaching it requires walking — and not a gentle walk, but a sustained uphill trek through thick forest. Most tourists visiting the Tirthan area stop at the accessible villages lower down, never knowing what lies beyond.

There's also no incentive to promote Balo. The villagers have what they need and want nothing more.`,
    bestTimeToVisit: `April through October offers the best conditions. The monsoon (July-August) makes the trail slippery but the forest is at its most magical. Avoid December-February unless prepared for serious cold.`,
    howToReach: `From Banjar in the Tirthan Valley, drive to Gushaini. From Gushaini, a rough jeep road goes to the trailhead at Chhoie. The trek from Chhoie to Balo takes 2-3 hours through dense forest. Local guides are recommended as the trail isn't well-marked.`,
    responsibleTravel: `Balo has zero tourism infrastructure. If you wish to stay, you must ask a family to host you — this is not guaranteed and depends on their capacity and comfort. Bring all food, water purification, and supplies.

Do not photograph people without permission. Do not enter homes without invitation. Leave a generous contribution for any hospitality received — this is not a hotel, it's someone's home.`,
    altitude: "2,400m",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    nearbyTreks: ["sar-pass"],
    nearbyHomestays: ["tirthan-valley-retreat"]
  },
  {
    id: "ku4",
    name: "Rashol Village",
    slug: "rashol-village",
    district: "Kullu",
    districtSlug: "kullu",
    tagline: "Where the Gods Still Dwell",
    emotionalOpening: `The trail to Rashol climbs through an enchanted forest — a forest where every tree seems ancient, where moss covers rocks in emerald velvet, and where the only sounds are birdsong and your own breathing. When you finally emerge at the village, you understand why the locals believe gods live here.

Rashol's temple is the heart of the village — a wooden structure so intricately carved it seems impossible. Inside, the deity watches over a valley that has changed little in centuries. The villagers move softly here, speaking in whispers. In a place this sacred, even voices feel like intrusions.`,
    locationLandscape: `Rashol sits at 2,850 meters on a ridge above the Parvati Valley, overlooking Kasol and the river far below. The village is surrounded by old-growth forest, with alpine meadows opening up on the higher slopes.

The terrain is steep but the village itself occupies a surprisingly flat plateau. Views extend across the entire valley to the snow-capped peaks of the Pir Panjal range.`,
    villageLife: `The people of Rashol are guardians of an ancient temple tradition. The village deity is consulted for important decisions, festivals are celebrated with elaborate rituals, and the sacred calendar governs daily life.

Most families are farmers, growing traditional crops and maintaining small orchards. Some have opened basic guesthouses for trekkers, but tourism remains low-key and respectful.`,
    whyHidden: `Rashol is hidden by its altitude and the effort required to reach it. While neighboring Kasol overflows with tourists, few make the steep 2-3 hour climb to this sacred village. Those who do are usually pilgrims or serious trekkers, not casual visitors.`,
    bestTimeToVisit: `March to November offers accessible conditions. The temple festivals (dates vary by lunar calendar) are the most culturally significant times to visit. Winter brings snow and genuine isolation.`,
    howToReach: `From Kasol, cross the bridge to the west bank of the Parvati River. A well-marked trail climbs steeply through the forest to Rashol (approximately 5 km, 2-3 hours). The trail is challenging but well-maintained by pilgrims.`,
    responsibleTravel: `The temple in Rashol is actively worshipped. Maintain silence in the temple area, remove shoes well before entering, and do not photograph the inner sanctum or rituals.

The village has limited water supply — conserve it. There are basic guesthouses but no restaurants — bring snacks. Leave all waste at designated points or carry it out.`,
    altitude: "2,850m",
    image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80",
    nearbyTreks: ["kheerganga"],
    nearbyHomestays: ["jibhi-forest-cottage"]
  },
  {
    id: "ku5",
    name: "Sethan Village",
    slug: "sethan-village",
    district: "Kullu",
    districtSlug: "kullu",
    tagline: "Manali's Hidden Buddhist Hamlet",
    emotionalOpening: `Twenty kilometers from the chaos of Manali's Mall Road, in a world that feels completely different, Sethan sleeps under prayer flags and snow peaks. This tiny Buddhist hamlet is what Manali was fifty years ago — quiet, spiritual, untroubled by the march of tourism.

I reached Sethan on a winter evening, when the village was buried in snow and the only sounds were the crunch of my footsteps and the distant chanting from the monastery. A monk emerged from the gompa, saw me standing in the cold, and simply beckoned. Tea was served without question, blankets provided without fuss. In Sethan, hospitality is as natural as breathing.`,
    locationLandscape: `Sethan lies at 2,700 meters on a high plateau above the Hamta Valley, with the snow-capped Dhauladhar and Pir Panjal ranges filling the horizon. The village overlooks vast meadows that transform with the seasons — snow-covered in winter, carpeted with wildflowers in summer.

The landscape is open and windswept, quite different from the forested valleys below. Views extend for miles in every direction, making Sethan one of the finest viewpoints in the greater Manali area.`,
    villageLife: `Sethan is home to a small Buddhist community, believed to have migrated from Spiti generations ago. The village gompa is the spiritual center, with prayer flags strung between homes and prayer wheels spinning in the mountain breeze.

Most families practice yak and sheep herding, along with high-altitude farming. Some have converted traditional homes into homestays, offering visitors a glimpse of authentic Buddhist mountain life.`,
    whyHidden: `Sethan is hidden by altitude and inconvenience. The road from Manali is rough and often blocked by snow. There are no famous attractions, no adventure sports centers, none of the commercial infrastructure that draws crowds to Manali and Solang.

This suits the villagers fine. They've watched neighboring areas transform under tourism pressure and prefer their quiet way of life.`,
    bestTimeToVisit: `May to October for easy access and pleasant weather. Winter (December-March) brings heavy snow and genuine isolation — beautiful but challenging. Spring brings snow-melt wildflowers and the awakening of the high meadows.`,
    howToReach: `From Manali, drive toward the Hamta Pass road. The turn-off for Sethan is about 12 km from town. The remaining 8 km is on a rough but motorable road. No public transport; private taxi or motorbike only.`,
    responsibleTravel: `The gompa welcomes respectful visitors. Remove shoes before entering, do not photograph monks without permission, and leave a donation. If staying in a homestay, respect Buddhist customs — no loud noise, no public smoking, no leather items in sacred spaces.

The high meadows are ecologically sensitive. Stay on marked paths, do not pick flowers, and carry out all waste.`,
    altitude: "2,700m",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800&q=80",
    nearbyTreks: ["hampta-pass"],
    nearbyHomestays: ["jibhi-forest-cottage"]
  },

  // SPITI (5 Hidden Places)
  {
    id: "s1",
    name: "Demul Village",
    slug: "demul-village",
    district: "Lahaul & Spiti",
    districtSlug: "spiti",
    tagline: "The Highest Wisdom",
    emotionalOpening: `The road to Demul ends abruptly at the edge of a cliff. From there, you walk upward — past prayer flags, past ancient stupas, past the last vestiges of comfortable existence — until you reach a village that seems to float between earth and sky.

At 4,400 meters, Demul is one of the highest villages in the world. The air is thin, the sun is fierce, and the silence is so complete that you can hear your own heartbeat. Yet here, in this extreme environment, a community has thrived for centuries. They've learned what most of us never will: how to need almost nothing and find everything in that nothing.`,
    locationLandscape: `Demul perches at approximately 4,400 meters on a high plateau above the Lingti Valley, which drains into the Spiti River. The village is surrounded by barren, wind-carved mountains in shades of ochre, brown, and purple. Vegetation is sparse — hardy grasses, aromatic herbs, and the occasional stunted willow.

The landscape is stark and otherworldly, resembling the surface of Mars more than anything on Earth. Yet in this severity, there is profound beauty — the play of light on rock, the shadows moving across vast empty spaces, the absolute clarity of the mountain air.`,
    villageLife: `Demul has about 35 families, all practicing Tibetan Buddhism. The village gompa, dating back several centuries, remains the spiritual and social center. Monks chant morning and evening prayers, and the entire community gathers for festivals.

Life is organized around the short growing season. Villagers cultivate barley, peas, and potatoes in the precious summer months, then survive the long winter on stored grain and dried meat. Yak herding provides wool, milk, and transportation.`,
    whyHidden: `Demul is hidden by extreme altitude and road conditions. The final approach requires either a serious hike or a 4x4 vehicle with an experienced driver. The village has no guesthouses, no restaurants, and minimal infrastructure.

This isolation is both a protection and a challenge. While it preserves the traditional way of life, it also means limited access to healthcare, education, and economic opportunity.`,
    bestTimeToVisit: `June to September only. The road is typically closed by snow from October through May. Even in summer, weather can be unpredictable — come prepared for cold, wind, and intense sun.`,
    howToReach: `From Kaza, drive toward Hikkim and Komic. Beyond Komic, a rough track leads to Demul (approximately 20 km from Kaza, 2-3 hours by vehicle). The last section may require walking if road conditions are poor.`,
    responsibleTravel: `Altitude sickness is a real risk at Demul. Acclimatize properly in Kaza before visiting. Carry water, snacks, and warm clothing. There is no medical facility in the village.

If visiting the gompa, make a donation and observe silently. Do not distribute sweets or money to children. If staying with a family, bring gifts (flour, oil, batteries) rather than cash.`,
    altitude: "4,400m",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&q=80",
    nearbyTreks: ["chandratal"],
    nearbyHomestays: ["spiti-mountain-home"]
  },
  {
    id: "s2",
    name: "Mud Village (Pin Valley)",
    slug: "mud-village",
    district: "Lahaul & Spiti",
    districtSlug: "spiti",
    tagline: "Portal to the Wild",
    emotionalOpening: `Mud is the last village before the wilderness takes over. Beyond its stone houses and barley fields, there is nothing but mountains, glaciers, and the occasional ibex navigating impossible cliffs. This is the gateway to Pin Valley National Park — one of the last refuges of the snow leopard.

I spent three nights in Mud, and each evening the same thing happened: the sun would set behind the western peaks, painting the valley in shades of gold and crimson, and the entire village would fall silent. Not because anyone said to be quiet, but because in the presence of such beauty, words become unnecessary.`,
    locationLandscape: `Mud sits at 3,800 meters at the end of the motorable road in Pin Valley, a tributary of the Spiti Valley. The village occupies a narrow terrace above the Pin River, with towering cliffs on either side and the vast wilderness of the national park stretching beyond.

The terrain is high-altitude desert — dry, windy, and intensely beautiful. Snow peaks encircle the valley, and the river carves through deep gorges. Wildlife is abundant for those patient enough to look: ibex, bharal, Himalayan griffon vultures, and, if you're extraordinarily lucky, snow leopards.`,
    villageLife: `Mud is home to about 40 families, all practicing Buddhism. The village has a small but beautiful gompa, where daily prayers are held. The community is closely connected to the surrounding wildlife — herders have learned to coexist with predators, and conservation efforts have made Mud a model for human-wildlife harmony.

Traditional weaving is still practiced here, with women producing the distinctive Spitian patterns that have been passed down through generations. Agriculture is limited to barley and peas, with most families also keeping yaks and horses.`,
    whyHidden: `Mud is hidden by distance and infrastructure limitations. It's a full day's drive from Kaza, over rough roads that challenge even experienced drivers. There's no hotel, limited phone connectivity, and no tourist attractions in the conventional sense.

But that is precisely the point. Mud attracts only those seeking genuine wilderness — trekkers heading into the national park, wildlife photographers hoping for snow leopard sightings, and travelers who understand that the journey itself is the destination.`,
    bestTimeToVisit: `June to September for accessible conditions. October-November for snow leopard sightings (though they're rare even then). The road is typically closed from December through April.`,
    howToReach: `From Kaza, drive toward Attargo. At Attargo, a road branches into Pin Valley. The drive to Mud takes about 3-4 hours over rough terrain. There's no public transport; hire a taxi in Kaza.`,
    responsibleTravel: `Pin Valley is a national park. Do not disturb wildlife, do not leave trails, and do not collect any natural materials. If trekking beyond Mud, permits are required — arrange these in Kaza.

The village has limited resources. Carry your own food and water. If homestaying, bring supplies to share (rice, oil, tea) rather than expecting to purchase meals.`,
    altitude: "3,800m",
    image: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=800&q=80",
    nearbyTreks: ["pin-parvati"],
    nearbyHomestays: ["spiti-mountain-home"]
  },
  {
    id: "s3",
    name: "Lhalung Village",
    slug: "lhalung-village",
    district: "Lahaul & Spiti",
    districtSlug: "spiti",
    tagline: "Temple of the Golden Buddha",
    emotionalOpening: `There is a temple in Lhalung that has guarded its secrets for a thousand years. Inside, in the dim light that filters through ancient windows, a golden Buddha sits in eternal meditation. The murals that surround him tell stories of pilgrimage, of devotion, of a faith that has weathered centuries of isolation.

Few tourists make it to Lhalung. The village sits off the main road, accessible only by a winding track that seems designed to discourage the casual visitor. But those who persist — who navigate the rough road, who walk the last kilometer when the track ends — find themselves in a place where time has genuinely stopped.`,
    locationLandscape: `Lhalung lies at approximately 3,650 meters on a side spur of the Spiti Valley, overlooking the river from a high vantage point. The village is built on a natural amphitheater, with the ancient temple complex at its center.

The surrounding landscape is classic Spiti — barren mountains in layers of purple and brown, distant snow peaks, and the winding silver thread of the Spiti River far below. Unlike the main valley villages, Lhalung receives afternoon shade from a nearby ridge, giving it a slightly milder climate.`,
    villageLife: `Lhalung's 25 families are the guardians of one of Spiti's most important historical treasures — the Serkhang ("Golden Temple"), believed to date from the 11th century. The community takes this responsibility seriously, maintaining the temple and performing daily rituals.

Life otherwise follows the typical Spitian pattern — barley farming, yak herding, and the long winter months spent indoors with weaving, prayer, and storytelling.`,
    whyHidden: `The temple at Lhalung is significant enough that it should be famous. But the access road is terrible, the village has no accommodation, and there's no signage or promotion. Most tourists visit Tabo, Dhankar, and Key — the "big three" of Spiti monasteries — without realizing that a treasure of equal importance lies hidden just off the main route.`,
    bestTimeToVisit: `June to September for accessible roads. The temple can be visited at any time during these months, though morning light offers the best illumination for the interior murals.`,
    howToReach: `From Kaza, drive toward Tabo. About 10 km before Tabo, a rough road branches left toward Lhalung. The 5-km drive takes 30-45 minutes. The last section may require walking if the road is washed out.`,
    responsibleTravel: `The temple at Lhalung is over 1,000 years old and extremely fragile. Photography inside is not permitted. Touch nothing. Move slowly and respectfully. Leave a generous donation to support preservation efforts.

There is no guesthouse in Lhalung. Visit as a day trip from Tabo or arrange homestay with a family through contacts in Tabo.`,
    altitude: "3,650m",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    nearbyTreks: ["chandratal"],
    nearbyHomestays: ["spiti-mountain-home"]
  },
  {
    id: "s4",
    name: "Gette Village",
    slug: "gette-village",
    district: "Lahaul & Spiti",
    districtSlug: "spiti",
    tagline: "Monastery in the Clouds",
    emotionalOpening: `Gette is not a village you find. It's a village that finds you — when you're ready for it.

I drove past the turn-off three times before I finally saw it. A tiny sign, handwritten in faded paint, pointing up a track that seemed to go nowhere. But I followed it anyway, climbing and climbing until the road ended at a cluster of ancient stone houses and a gompa so small it looked like a child's playhouse for monks.

Inside that "playhouse," I discovered murals that made my heart stop. Centuries-old paintings of bodhisattvas, demons, and enlightened beings, preserved in the dry mountain air as if they'd been finished yesterday. The monk who showed me around spoke no English, but his smile communicated everything.`,
    locationLandscape: `Gette perches at 4,200 meters on a steep hillside above the main Spiti road, between Kaza and Tabo. The village is invisible from below, hidden by the folds of the mountain terrain. Only the prayer flags on the monastery roof hint at its presence.

The landscape is severe even by Spiti standards — bare rock, thin air, and wind that never seems to stop. Yet the villagers have carved out life here for centuries, building stone houses that seem to grow from the mountain itself.`,
    villageLife: `Fewer than 15 families remain in Gette. Many have migrated to Kaza for easier access to schools and healthcare. But the monastery continues to function, maintained by a handful of monks and the devoted villagers who stay.

The remaining families practice subsistence farming and herding, following patterns that have changed little over the centuries. There's a quiet pride in this persistence — in being the ones who stayed when others left.`,
    whyHidden: `Gette is hidden by invisibility. Unless you know it's there, you'll never find it. There's no tourism infrastructure, no listing on travel websites, no mention in guidebooks. The village exists at the edge of forgetting.`,
    bestTimeToVisit: `July and August offer the most reliable access. The track to Gette can be impassable earlier or later in the season due to snow or landslides.`,
    howToReach: `The turn-off for Gette is approximately 30 km from Kaza on the Kaza-Tabo road, near the village of Lidang. Look for a small sign on the left side of the road. The 4-km climb takes about 30 minutes by vehicle or 1.5 hours on foot.`,
    responsibleTravel: `Gette is extremely fragile. Your presence has an impact. Visit with respect, leave generous donations at the monastery, and do not ask for things that cannot be provided. There is no guest accommodation — visit as a day trip only.`,
    altitude: "4,200m",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80",
    nearbyTreks: ["chandratal"],
    nearbyHomestays: ["spiti-mountain-home"]
  },
  {
    id: "s5",
    name: "Tashigang Village",
    slug: "tashigang-village",
    district: "Lahaul & Spiti",
    districtSlug: "spiti",
    tagline: "The World's Highest Election Booth",
    emotionalOpening: `At 4,650 meters, Tashigang holds a peculiar distinction: it's home to the highest polling station in the world. When India holds elections, a team of officials makes the arduous journey up here to ensure that the 52 voters of Tashigang can exercise their democratic right.

But Tashigang is more than a trivia question. It's a testament to human endurance — a place where people have chosen to live at the edge of what's possible, maintaining traditions and community in conditions that would defeat most of us.`,
    locationLandscape: `Tashigang sits at the end of a winding road above the village of Chicham, at the top of a barren, windswept plateau. The village overlooks the Spiti Valley from dizzying heights, with views extending to distant snow peaks and the stark geometry of the high-altitude desert.

This is one of the most extreme environments in India — bitter cold, intense UV radiation, and months of near-isolation when snow blocks the roads. Yet the landscape has a beauty that's impossible to describe and impossible to forget.`,
    villageLife: `The 12 families of Tashigang are among the most resilient people on Earth. They cultivate barley and peas in a growing season that lasts barely three months. They herd yaks on the high pastures. They maintain a small gompa where prayers are offered daily.

Life here is organized around survival. Homes are built with thick walls to retain heat. Grain is stored underground to last the winter. Every resource is precious; nothing is wasted.`,
    whyHidden: `Tashigang is hidden by extreme altitude and difficulty of access. The road from Chicham is rough and often blocked. There are no facilities for tourists — no guesthouses, no shops, no phone signal. Coming here requires serious preparation and a genuine reason.`,
    bestTimeToVisit: `July and August only. The road is typically accessible just 2-3 months per year. Even in summer, weather can change rapidly — come prepared for anything.`,
    howToReach: `From Kaza, drive to Chicham (famous for its suspension bridge). From Chicham, a rough track climbs to Tashigang (8 km, 1-2 hours by 4x4). The road requires a capable vehicle and driver. Walking is possible but strenuous due to altitude.`,
    responsibleTravel: `Altitude sickness is a serious risk. Do not visit Tashigang without proper acclimatization. Carry all supplies including food, water, and emergency shelter.

The villagers here are not tourist attractions. If you visit, do so with humility. Ask permission before photographing. Bring useful gifts (warm clothes, tools, batteries) rather than sweets or cash.`,
    altitude: "4,650m",
    image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80",
    nearbyTreks: ["chandratal"],
    nearbyHomestays: ["spiti-mountain-home"]
  }
];

export const getHiddenPlaceBySlug = (slug: string): HiddenPlace | undefined => {
  return hiddenPlaces.find(p => p.slug === slug);
};

export const getHiddenPlacesByDistrict = (districtSlug: string): HiddenPlace[] => {
  return hiddenPlaces.filter(p => p.districtSlug === districtSlug);
};

export const getAllHiddenPlaces = (): HiddenPlace[] => {
  return hiddenPlaces;
};
