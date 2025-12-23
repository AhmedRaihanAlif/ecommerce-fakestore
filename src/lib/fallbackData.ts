import { Product } from "@/types/fakestore";

export const fallbackProducts: Product[] = [
  {
    id: 9991,
    title: "Structured wool coat",
    price: 180,
    description: "Tailored wool blend coat with hidden buttons and soft lining.",
    category: "women's clothing",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    rating: { rate: 4.8, count: 112 },
  },
  {
    id: 9992,
    title: "Everyday leather tote",
    price: 145,
    description: "Full-grain leather with interior laptop sleeve and slip pockets.",
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    rating: { rate: 4.6, count: 85 },
  },
  {
    id: 9993,
    title: "Wireless studio headphones",
    price: 210,
    description: "Adaptive noise cancelling, 40h battery life, and fast pairing.",
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=900&q=80",
    rating: { rate: 4.7, count: 140 },
  },
  {
    id: 9994,
    title: "Minimal ceramic table lamp",
    price: 88,
    description: "Textured ceramic base with warm LED bulb and woven shade.",
    category: "home",
    image:
      "https://images.unsplash.com/photo-1505692069463-5e3405e3e7ee?auto=format&fit=crop&w=900&q=80",
    rating: { rate: 4.4, count: 64 },
  },
];

export const fallbackCategories = ["electronics", "jewelery", "men's clothing", "women's clothing"];



