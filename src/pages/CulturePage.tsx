import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Music, Building2, Utensils, PartyPopper, Flame, Users } from "lucide-react";

const cultureSections = [
  {
    id: "festivals",
    icon: PartyPopper,
    title: "Festivals & Celebrations",
    description: "From the world-famous Kullu Dussehra to intimate village fairs, Himachal's festivals are windows into its soul.",
    content: `Himachal Pradesh comes alive with festivals throughout the year. The most celebrated is Kullu Dussehra, a week-long festival that begins when the rest of India's Dussehra ends. Over 200 local deities are brought in colorful processions to pay homage to Lord Raghunath.

In Kinnaur, the Fulaich festival celebrates the coming of spring with flower offerings and folk dances. The Lavi Fair in Rampur is one of the oldest trade fairs, dating back to the times of the Silk Route.

Losar, the Tibetan New Year, is celebrated with great fervor in the Buddhist regions of Lahaul-Spiti. The monasteries come alive with masked dances, prayers, and community feasts.`,
    image: "https://images.unsplash.com/photo-1594815619395-ab0c70c62b86?w=800&q=80",
  },
  {
    id: "music",
    icon: Music,
    title: "Folk Music & Dance",
    description: "The mountains have their own rhythm, expressed through centuries-old musical traditions.",
    content: `Nati is more than just a dance in Himachal – it's a way of life. Recognized as the largest folk dance (with the most participants) by Guinness World Records, Nati is performed during festivals and celebrations throughout the state.

The haunting notes of the Ransingha (a curved brass horn) echo through valleys during religious processions. The Shehnai and Dhol create melodies that have accompanied Himachali celebrations for centuries.

Each region has its own distinct style – the Kulluvi Nati differs from the Kangri style, and the Kinnauri dances have their own unique charm influenced by Tibetan culture.`,
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
  },
  {
    id: "architecture",
    icon: Building2,
    title: "Kath-Khuni Architecture",
    description: "Ancient wooden architecture that has survived earthquakes for centuries.",
    content: `Kath-Khuni is the traditional architectural style of Himachal Pradesh, a testament to the ingenuity of mountain craftsmen. The technique involves alternating layers of stone and deodar wood without using any mortar or nails.

This unique construction method makes the structures remarkably earthquake-resistant – many Kath-Khuni buildings have survived major earthquakes that destroyed modern constructions. The style can be seen in temples like Hidimba Devi in Manali and traditional homes across Kullu, Shimla, and Kinnaur.

The carved wooden balconies, intricate door frames, and slate roofs are not just functional but are expressions of artistic heritage passed down through generations of master craftsmen.`,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: "food",
    icon: Utensils,
    title: "Local Cuisine",
    description: "Recipes passed down through generations of mountain families.",
    content: `Himachali cuisine is a celebration of simple ingredients transformed into soul-warming dishes. Siddu, steamed bread stuffed with poppy seeds and served with ghee, is the quintessential mountain comfort food.

Dham is the traditional festive meal served on leaf plates during weddings and special occasions. It includes rice, dal, rajma, and kadhi – each prepared with local spices and served in a specific order.

In Kinnaur, Chhaang (a fermented millet drink) warms the body during harsh winters, while Aktori (buckwheat pancakes) provide sustenance for long days in the fields. The trout from the rivers of Tirthan Valley, prepared with local spices, is a delicacy that draws food lovers from across the country.`,
    image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=800&q=80",
  },
  {
    id: "legends",
    icon: Flame,
    title: "Myths & Legends",
    description: "Every village has stories that blur the line between history and mythology.",
    content: `Himachal's mountains are alive with legends. The Pandavas of Mahabharata are said to have traveled through these lands during their exile. The temples of Bijli Mahadev, struck by lightning every few years, are believed to be blessed by Shiva himself.

The village of Malana claims descent from Alexander the Great's soldiers and has maintained its own democratic system for centuries. The people don't allow outsiders to touch them or their belongings, believing themselves to be the purest Aryans.

Lake Rewalsar is sacred to three religions – Hindus believe it's where sage Lomas did penance, Buddhists associate it with Padmasambhava, and Sikhs connect it to Guru Gobind Singh. The floating islands on the lake are said to move with the prayers of the faithful.`,
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80",
  },
  {
    id: "village-life",
    icon: Users,
    title: "Daily Village Life",
    description: "A glimpse into the rhythms of mountain communities.",
    content: `Life in Himachal's villages follows the ancient rhythms of the mountains. Days begin early, with the sounds of temple bells and the lowing of cattle. Women head to the forests to collect firewood, while men tend to apple orchards or prepare for the day's work.

The concept of 'Dev Bhumi' (Land of Gods) is central to village life. Every village has its local deity, and decisions are often made through the deity's oracle. Temple festivals bring entire communities together, with preparations that can take weeks.

In the evenings, families gather around wood-burning stoves, sharing stories and songs. Children learn the old ways – not from books, but from watching and doing. It's a life that moves slower, but with a purpose and connection that's increasingly rare in the modern world.`,
    image: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?w=800&q=80",
  },
];

const CulturePage = () => {
  return (
    <>
      <Helmet>
        <title>Himachal Culture & Traditions - Living Heritage | Local Himachal</title>
        <meta name="description" content="Discover the rich cultural heritage of Himachal Pradesh. Festivals, folk music, Kath-Khuni architecture, local cuisine, and ancient traditions of the mountain communities." />
        <meta name="keywords" content="Himachal culture, Kullu Dussehra, Nati dance, Kath-Khuni architecture, Himachali food, mountain traditions" />
      </Helmet>

      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 bg-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <img
              src="https://images.unsplash.com/photo-1594815619395-ab0c70c62b86?w=1920&q=80"
              alt="Himachali Culture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 to-foreground" />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/80 text-sm font-body mb-6">
                Living Heritage
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-semibold text-primary-foreground mb-6">
                Culture & Stories
              </h1>
              <p className="font-body text-lg text-primary-foreground/80">
                Dive deep into the living traditions, ancient customs, and untold stories 
                that make Himachal's soul unique. These are not museum exhibits – 
                they are the heartbeat of mountain communities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Culture Sections */}
        {cultureSections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={`py-24 ${index % 2 === 0 ? 'bg-background' : 'bg-secondary/30'}`}
          >
            <div className="container mx-auto px-4 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={index % 2 === 1 ? 'lg:order-2' : ''}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <section.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-body text-sm text-muted-foreground uppercase tracking-wider">
                      {section.id.replace('-', ' ')}
                    </span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                    {section.title}
                  </h2>
                  <p className="font-body text-lg text-accent mb-6 italic">
                    {section.description}
                  </p>
                  <div className="font-body text-muted-foreground leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={index % 2 === 1 ? 'lg:order-1' : ''}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        {/* Quote Section */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <blockquote className="font-display text-2xl md:text-4xl font-medium text-primary-foreground italic mb-8">
                "In the mountains, we live with the gods. Every peak is a temple, 
                every stream a prayer, every sunrise a blessing."
              </blockquote>
              <cite className="font-body text-primary-foreground/70">
                — A village elder from Kinnaur
              </cite>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CulturePage;
