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
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/17/de/d2/new-unit.jpg?w=1800&h=1000&s=1",
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
    image: "https://gos3.ibcdn.com/c7b2011e-b968-44b2-872c-233394a07ab9.jpg",
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
    image: "https://www.tirthanvalleystay.com/wp-content/uploads/2024/02/461856748.webp",
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
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/68/b0/16/front-entrance.jpg?w=1200&h=-1&s=1",
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
    image: "https://r1imghtlak.mmtcdn.com/1e560da60a0811ecb26d0a58a9feac02.jpeg?&output-quality=75&downsize=520:350&crop=520:350;0,32&output-format=jpg",
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
    image: "https://a0.muscache.com/im/pictures/hosting/Hosting-37756446/original/7d9a5e72-4f8d-4680-818a-dc9f8c4a97ef.jpeg?im_w=720",
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
    image: "https://pix10.agoda.net/hotelImages/32578670/0/9493c005e6a477d64fd5e93cf60ab079.jpg?ce=0&s=702x392",
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
    image: "https://birbillingadventure.com/wp-content/uploads/2024/09/Bir-Himachal-Pradesh.jpg",
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
    image: "https://r1imghtlak.ibcdn.com/0cef7a74-090c-48d9-8726-1bb47824ef99.jpg?output-quality=75&downsize=243:162&output-format=webp",
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
    image: "https://content3.jdmagicbox.com/v2/comp/kullu/h8/9999p1902.1902.230430103828.y5h8/catalogue/dreamcatcher-homestay-kalgha-kullu-home-stay-7j77sr1dpc.jpg",
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
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/e8/a8/b3/caption.jpg?w=1200&h=-1&s=1",
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
    image: "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/202003101149239952-2a131051-31d9-4157-977b-7065ad6e0f0a.jpg?output-quality=75&downsize=243:162&output-format=webp",
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
    image: "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/202410161142544340-f9c9f671-e41a-40b0-805b-7d2a39370166.jpg?output-quality=75&downsize=243:162&output-format=webp",
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
    image: "https://himtrekstays.com/wp-content/uploads/2025/04/Himtrek-Stays-Kasol-5-1-scaled.webp",
    priceRange: "₹1,800 – ₹4,000",
    externalLink: "https://himtrekstays.com/st_hotel/himtrek-stays-kasol/"
  }
];

export const getHomestayBySlug = (slug: string): Homestay | undefined => {
  return homestays.find(h => h.slug === slug);
};
