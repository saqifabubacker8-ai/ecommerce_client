import CategoryPage from "../components/CategoryPage";

const products = [
  { id: 1, name: "Tailored Linen Blazer", price: 6500, rating: 5, reviews: 89, badge: "Top Rated" },
  { id: 2, name: "High-Rise Tailored Trousers", price: 3800, old: 4500, rating: 5, reviews: 145 },
  { id: 3, name: "Oxford Dress Shirt", price: 3200, old: 4200, rating: 4, reviews: 92, badge: "New" },
  { id: 4, name: "Wool Suit Jacket", price: 8500, rating: 5, reviews: 78, badge: "Bestseller" },
  { id: 5, name: "Casual Polo Shirt", price: 1800, old: 2400, rating: 4, reviews: 65 },
  { id: 6, name: "Chinos", price: 2900, rating: 5, reviews: 81, badge: "New" },
  { id: 7, name: "Henley T-Shirt", price: 1500, old: 2100, rating: 4, reviews: 57 },
  { id: 8, name: "Leather Belt", price: 2200, rating: 5, reviews: 48, badge: "Top Rated" },
  { id: 9, name: "Denim Jacket", price: 3800, old: 5200, rating: 5, reviews: 76, badge: "New" },
  { id: 10, name: "Sweater", price: 3100, rating: 4, reviews: 62 },
  { id: 11, name: "White Dress Shirt", price: 2800, rating: 5, reviews: 84, badge: "Bestseller" },
  { id: 12, name: "Board Shorts", price: 2500, old: 3400, rating: 4, reviews: 43, badge: "New" },
  { id: 13, name: "Suit Pants", price: 4200, rating: 5, reviews: 79 },
  { id: 14, name: "Crew Neck Tee", price: 1200, rating: 4, reviews: 51 },
  { id: 15, name: "Bomber Jacket", price: 4800, old: 6500, rating: 5, reviews: 88, badge: "Top Rated" },
  { id: 16, name: "Casual Shirt", price: 2100, rating: 4, reviews: 46, badge: "New" },
  { id: 17, name: "Winter Coat", price: 8200, rating: 5, reviews: 69 },
  { id: 18, name: "Joggers", price: 2200, old: 3100, rating: 4, reviews: 58 },
  { id: 19, name: "Formal Tie", price: 1800, rating: 5, reviews: 72, badge: "Top Rated" },
  { id: 20, name: "Casual Jacket", price: 3600, rating: 4, reviews: 52, badge: "New" },
];

export default function MenPage() {
  return <CategoryPage categoryName="Men's Collection" products={products} categoryIcon="👔" />;
}
