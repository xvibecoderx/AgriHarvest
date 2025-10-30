export type Product = { id:string; slug:string; name:string; short:string; description:string; price:number; image:string; category:string }
const products = [
  {
    "id": "p1",
    "slug": "microgreens-mix",
    "name": "Microgreens Mix",
    "short": "Fresh mixed microgreens",
    "description": "A nutrient-dense mix of sunflower, radish and pea microgreens.",
    "price": 199,
    "image": "https://picsum.photos/seed/microgreens/800/600.webp",
    "category": "Microgreens"
  },
  {
    "id": "p2",
    "slug": "chia-microgreens",
    "name": "Chia Microgreens",
    "short": "Chia microgreens tray",
    "description": "Delicate chia microgreens, rich in omega-3s and antioxidants.",
    "price": 249,
    "image": "https://picsum.photos/seed/chia/800/600.webp",
    "category": "Microgreens"
  },
  {
    "id": "p3",
    "slug": "black-gram-microgreens",
    "name": "Black Gram Microgreens",
    "short": "Protein-packed microgreens",
    "description": "Black gram microgreens, high in protein and flavor.",
    "price": 219,
    "image": "https://picsum.photos/seed/blackgram/800/600.webp",
    "category": "Microgreens"
  },
  {
    "id": "p4",
    "slug": "sprouts-mix",
    "name": "Sprouts Mix",
    "short": "Assorted sprouts mix",
    "description": "Fresh sprout mix\u2014mung, lentil and chickpea sprouts.",
    "price": 129,
    "image": "https://picsum.photos/seed/sprouts/800/600.webp",
    "category": "Sprouts"
  },
  {
    "id": "p5",
    "slug": "salad-combo",
    "name": "Salad Combo",
    "short": "Curated salad box",
    "description": "Ready-to-eat salad combo with dressing sachets.",
    "price": 349,
    "image": "https://picsum.photos/seed/salad/800/600.webp",
    "category": "Combo"
  },
  {
    "id": "p6",
    "slug": "wheatgrass-microgreens",
    "name": "Wheatgrass Microgreens",
    "short": "High-nutrient wheatgrass",
    "description": "Premium wheatgrass microgreens for juicing and health.",
    "price": 179,
    "image": "https://picsum.photos/seed/wheatgrass/800/600.webp",
    "category": "Microgreens"
  },
  {
    "id": "p7",
    "slug": "organic-compost",
    "name": "Organic Compost",
    "short": "Soil-enriching compost",
    "description": "Locally produced organic compost for home gardening.",
    "price": 199,
    "image": "https://picsum.photos/seed/compost/800/600.webp",
    "category": "Supplies"
  },
  {
    "id": "p8",
    "slug": "greens-box",
    "name": "Greens Box",
    "short": "Weekly greens subscription",
    "description": "A weekly box of assorted microgreens and herbs.",
    "price": 499,
    "image": "https://picsum.photos/seed/greensbox/800/600.webp",
    "category": "Subscription"
  }
]
export default products
