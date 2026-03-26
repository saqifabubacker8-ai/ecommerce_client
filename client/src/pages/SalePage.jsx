import CategoryPage from "../components/CategoryPage";

const products = [
  { id: 1, name: "Silk Wrap Dress", price: 2100, old: 5800, rating: 5, reviews: 124, badge: "Sale" },
  { id: 2, name: "Cashmere Sweater", price: 2700, old: 5400, rating: 4, reviews: 67, badge: "Sale" },
  { id: 3, name: "Tailored Blazer", price: 3250, old: 6500, rating: 5, reviews: 89, badge: "Sale" },
  { id: 4, name: "Leather Bag", price: 4450, old: 8900, rating: 5, reviews: 203 },
  { id: 5, name: "Designer Heels", price: 2550, old: 5100, rating: 5, reviews: 95, badge: "Sale" },
  { id: 6, name: "Wool Coat", price: 4450, old: 8900, rating: 5, reviews: 92, badge: "Sale" },
  { id: 7, name: "Silk Camisole", price: 1100, old: 2200, rating: 5, reviews: 76, badge: "Sale" },
  { id: 8, name: "Chinos", price: 1450, old: 2900, rating: 5, reviews: 81 },
  { id: 9, name: "Linen Blazer", price: 3250, old: 6500, rating: 5, reviews: 78, badge: "Sale" },
  { id: 10, name: "Pearl Earrings", price: 2250, old: 4500, rating: 5, reviews: 124, badge: "Sale" },
  { id: 11, name: "Denim Jacket", price: 1900, old: 3800, rating: 5, reviews: 76 },
  { id: 12, name: "Gold Necklace", price: 1600, old: 3200, rating: 5, reviews: 212, badge: "Sale" },
  { id: 13, name: "Evening Gown", price: 3750, old: 7500, rating: 5, reviews: 87, badge: "Sale" },
  { id: 14, name: "Casual Cardigan", price: 1400, old: 2800, rating: 4, reviews: 48 },
  { id: 15, name: "Summer Dress", price: 1900, old: 3800, rating: 4, reviews: 67, badge: "Sale" },
  { id: 16, name: "Leather Gloves", price: 1050, old: 2100, rating: 4, reviews: 58 },
  { id: 17, name: "Designer Watch", price: 4450, old: 8900, rating: 5, reviews: 165, badge: "Sale" },
  { id: 18, name: "Silk Scarf", price: 1100, old: 2200, rating: 5, reviews: 89 },
  { id: 19, name: "Tote Bag", price: 2100, old: 4200, rating: 4, reviews: 95, badge: "Sale" },
  { id: 20, name: "Boot Collection", price: 3400, old: 6800, rating: 5, reviews: 87, badge: "Sale" },
];

export default function SalePage() {
  return <CategoryPage categoryName="Sale" products={products} categoryIcon="🔥" />;
}
