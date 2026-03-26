import CategoryPage from "../components/CategoryPage";

const products = [
  { id: 1, name: "Leather Crossbody Bag", price: 8900, old: 11000, rating: 5, reviews: 203, badge: "Bestseller" },
  { id: 2, name: "Gold Chain Necklace", price: 3200, rating: 5, reviews: 212, badge: "Top Rated" },
  { id: 3, name: "Block Heel Mules", price: 5100, old: 6200, rating: 5, reviews: 95, badge: "New" },
  { id: 4, name: "Wide-brim Sunhat", price: 2800, old: 3800, rating: 4, reviews: 76 },
  { id: 5, name: "Silk Scarf", price: 2200, old: 3100, rating: 5, reviews: 89, badge: "Top Rated" },
  { id: 6, name: "Pearl Earrings", price: 4500, rating: 5, reviews: 124, badge: "New" },
  { id: 7, name: "Leather Gloves", price: 2100, old: 2900, rating: 4, reviews: 58 },
  { id: 8, name: "Designer Handbag", price: 12500, rating: 5, reviews: 178, badge: "Bestseller" },
  { id: 9, name: "Tote Bag", price: 4200, old: 5800, rating: 4, reviews: 95, badge: "New" },
  { id: 10, name: "Diamond Ring", price: 18000, rating: 5, reviews: 142, badge: "Top Rated" },
  { id: 11, name: "Ankle Boots", price: 6800, rating: 5, reviews: 87, badge: "Bestseller" },
  { id: 12, name: "Watch", price: 8900, old: 12000, rating: 5, reviews: 165, badge: "New" },
  { id: 13, name: "Belt", price: 2200, rating: 4, reviews: 62 },
  { id: 14, name: "Sunglasses", price: 3500, rating: 5, reviews: 98, badge: "Top Rated" },
  { id: 15, name: "Clutch Purse", price: 3200, old: 4500, rating: 4, reviews: 73, badge: "New" },
  { id: 16, name: "Loafers", price: 4800, rating: 5, reviews: 81 },
  { id: 17, name: "Statement Necklace", price: 5200, rating: 5, reviews: 104, badge: "Bestseller" },
  { id: 18, name: "Canvas Backpack", price: 3100, old: 4200, rating: 4, reviews: 68 },
  { id: 19, name: "Bracelet Set", price: 2800, rating: 5, reviews: 76, badge: "Top Rated" },
  { id: 20, name: "Evening Heels", price: 6200, old: 8500, rating: 4, reviews: 92, badge: "New" },
];

export default function AccessoriesPage() {
  return <CategoryPage categoryName="Accessories" products={products} categoryIcon="💎" />;
}
