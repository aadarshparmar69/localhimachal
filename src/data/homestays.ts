export interface Homestay {
  id: string;
  name: string;
  slug: string;
  village: string;
  district: string;
  description: string;
  image: string;
  priceRange: string;
  externalLink: string;
}

export const homestays: Homestay[] = [
  {
    id: "1",
    name: "Raju's Apple Orchard Stay",
    slug: "rajus-apple-orchard",
    village: "Gushaini",
    district: "Tirthan Valley, Kullu",
    description: "Wake up surrounded by apple orchards in the serene Tirthan Valley, with the river flowing nearby.",
    image: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?w=800&q=80",
    priceRange: "₹1,200 – ₹1,800",
    externalLink: "https://www.instagram.com/theorchardstays/"
  },
  {
    id: "2",
    name: "Spiti Mountain House",
    slug: "spiti-mountain-house",
    village: "Kaza",
    district: "Spiti Valley",
    description: "Experience the raw beauty of Spiti from a traditional mountain home in the heart of Kaza.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    priceRange: "₹1,800 – ₹3,500",
    externalLink: "https://www.makemytrip.com/hotels/spiti_valley_home_stay-details-spiti.html"
  },
  {
    id: "3",
    name: "Tirthan Valley Retreat",
    slug: "tirthan-valley-retreat",
    village: "Tirthan Valley",
    district: "Kullu",
    description: "By the crystal Tirthan River, this homestay is your gateway to the Great Himalayan National Park.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    priceRange: "₹2,000 – ₹4,000",
    externalLink: "https://www.homestaysofindia.com/himachal/"
  },
  {
    id: "4",
    name: "Dharamkot Peace House",
    slug: "dharamkot-peace-house",
    village: "Dharamkot",
    district: "McLeodganj",
    description: "A peaceful haven for seekers, with Triund trail at your doorstep and Dalai Lama's temple nearby.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    priceRange: "₹1,200 – ₹3,000",
    externalLink: "https://www.airbnb.co.in/s/Dharamkot–India/homes"
  },
  {
    id: "5",
    name: "Jibhi Forest Cottage",
    slug: "jibhi-forest-cottage",
    village: "Jibhi",
    district: "Banjar Valley",
    description: "Hidden in the Banjar Valley, this cozy cottage offers the perfect escape into untouched village life.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80",
    priceRange: "₹1,500 – ₹3,500",
    externalLink: "https://www.homestays.co.in"
  },
  {
    id: "6",
    name: "Kalpa Apple Farm Stay",
    slug: "kalpa-apple-farm",
    village: "Kalpa",
    district: "Kinnaur",
    description: "Watch the sunrise paint Kinnaur Kailash golden from your window, surrounded by apple orchards.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    priceRange: "₹1,500 – ₹4,000",
    externalLink: "https://www.airbnb.co.in/s/Kalpa–India/homes"
  },
  {
    id: "7",
    name: "Malana Ancient Village Stay",
    slug: "malana-village-stay",
    village: "Malana Village",
    district: "Parvati Valley",
    description: "Experience the world's oldest democracy in this isolated village with unique customs and traditions.",
    image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80",
    priceRange: "₹1,200 – ₹3,000",
    externalLink: "https://www.airbnb.co.in/s/Malana–India/homes"
  },
  {
    id: "8",
    name: "Bir Billing Paragliding Home",
    slug: "bir-billing-home",
    village: "Bir Billing",
    district: "Kangra",
    description: "Base yourself in the paragliding capital of India, with Tibetan culture and adventure awaiting.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    priceRange: "₹1,500 – ₹4,000",
    externalLink: "https://www.makemytrip.com/hotels/p-homestays-in-bir_billing.html"
  },
  {
    id: "9",
    name: "Gazing Moon Homestay",
    slug: "gazing-moon-homestay",
    village: "Bhuntar",
    district: "near Parvati Valley",
    description: "A tranquil retreat near Parvati Valley, perfect for those seeking peace and mountain serenity.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    priceRange: "₹1,000 – ₹2,500",
    externalLink: "https://www.airbnb.co.in/s/Bhuntar–India/homes"
  },
  {
    id: "10",
    name: "Dreamcatcher Homestay",
    slug: "dreamcatcher-homestay",
    village: "Kalgha",
    district: "Parvati Valley",
    description: "Nestled in Kalgha village with stunning valley views and authentic Himachali hospitality.",
    image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800&q=80",
    priceRange: "₹1,200 – ₹3,500",
    externalLink: "https://www.airbnb.co.in/s/Kalgha–India/homes"
  },
  {
    id: "11",
    name: "Himalayan Homestay",
    slug: "himalayan-homestay",
    village: "Naddi",
    district: "Dharamshala",
    description: "Wake up to panoramic Himalayan views in this peaceful village above Dharamshala.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80",
    priceRange: "₹900 – ₹2,800",
    externalLink: "https://www.airbnb.co.in/s/Dharamshala–India/homes"
  },
  {
    id: "12",
    name: "Chojh Inn Homestay",
    slug: "chojh-inn-homestay",
    village: "Chojh Village",
    district: "Kasol",
    description: "A hidden gem in Chojh village offering riverside tranquility near the vibrant Kasol.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
    priceRange: "₹1,000 – ₹3,000",
    externalLink: "https://www.airbnb.co.in/s/Chojh–India/homes"
  },
  {
    id: "13",
    name: "TiNY Homestay",
    slug: "tiny-homestay",
    village: "Shimla",
    district: "Shimla",
    description: "A charming compact stay in the queen of hills, blending colonial heritage with modern comfort.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    priceRange: "₹1,500 – ₹3,500",
    externalLink: "https://www.airbnb.co.in/s/Shimla–India/homes"
  },
  {
    id: "14",
    name: "Himtrek Stays",
    slug: "himtrek-stays",
    village: "Kasol",
    district: "Parvati Valley",
    description: "Adventure-focused accommodation in Kasol, perfect for trekkers exploring Parvati Valley.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    priceRange: "₹1,800 – ₹4,000",
    externalLink: "https://himtrekstays.com/st_hotel/himtrek-stays-kasol/"
  }
];

export const getHomestayBySlug = (slug: string): Homestay | undefined => {
  return homestays.find(h => h.slug === slug);
};
