import CategoryPage from "../components/CategoryPage";

const products = [
  { id: 1, name: "Tailored Linen Blazer", price: 6500, rating: 5, reviews: 89, badge: "Top Rated" },
  { id: 2, name: "Floral Maxi Skirt", price: 2900, rating: 5, reviews: 58, badge: "New" },
  { id: 3, name: "Cashmere Knit Sweater", price: 5400, rating: 4, reviews: 67 },
  { id: 4, name: "Silk Wrap Dress", price: 4200, old: 5800, rating: 5, reviews: 124, badge: "Bestseller" },
  { id: 5, name: "Wide-leg Trousers", price: 4100, old: 5500, rating: 4, reviews: 73 },
  { id: 6, name: "Satin Camisole", price: 2200, old: 3100, rating: 5, reviews: 76, badge: "New" },
  { id: 7, name: "Wool Coat", price: 8900, rating: 5, reviews: 92, badge: "Top Rated" },
  { id: 8, name: "Linen Shirts", price: 1800, old: 2400, rating: 4, reviews: 65 },
  { id: 9, name: "Elegant Gown", price: 7500, old: 10000, rating: 5, reviews: 87, badge: "New" },
  { id: 10, name: "Casual Cardigan", price: 2800, old: 3800, rating: 4, reviews: 48 },
  { id: 11, name: "Bodysuit Set", price: 3200, rating: 5, reviews: 61, badge: "Top Rated" },
  { id: 12, name: "Sportswear Leggings", price: 2500, old: 3400, rating: 4, reviews: 82, badge: "New" },
  { id: 13, name: "Evening Dress", price: 6800, rating: 5, reviews: 78 },
  { id: 14, name: "Casual Tee", price: 1200, rating: 4, reviews: 52, badge: "Bestseller" },
  { id: 15, name: "Midi Skirt", price: 3200, old: 4500, rating: 5, reviews: 69, badge: "Top Rated" },
  { id: 16, name: "Crop Jacket", price: 3900, rating: 4, reviews: 45, badge: "New" },
  { id: 17, name: "Wrap Dress", price: 4800, rating: 5, reviews: 71 },
  { id: 18, name: "Beach Coverup", price: 1800, old: 2600, rating: 4, reviews: 39 },
  { id: 19, name: "Formal Blazer", price: 5200, rating: 5, reviews: 83, badge: "Top Rated" },
  { id: 20, name: "Denim Skirt", price: 2100, ranking: 4, reviews: 54, badge: "New" },
];

export default function WomenPage() {
  return <CategoryPage categoryName="Women's Collection" products={products} categoryIcon="👗" />;
}
