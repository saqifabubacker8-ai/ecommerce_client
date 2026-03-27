import CategoryPage from "../components/CategoryPage";

const products = [
  { id: 1, name: "Silk Wrap Dress", price: 4200, old: 5800, rating: 5, reviews: 124, badge: "New" },
  { id: 2, name: "Cashmere Knit Sweater", price: 5400, rating: 4, reviews: 67 },
  { id: 3, name: "Floral Maxi Skirt", price: 2900, rating: 5, reviews: 58, badge: "New" },
  { id: 4, name: "Linen Blazer", price: 6500, old: 8200, rating: 5, reviews: 89, badge: "Top Rated" },
  { id: 5, name: "Tailored Trousers", price: 3800, old: 4500, rating: 4, reviews: 145 },
  { id: 6, name: "Silk Camisole", price: 2200, old: 3100, rating: 5, reviews: 76, badge: "New" },
  { id: 7, name: "Wool Overcoat", price: 8900, rating: 5, reviews: 92, badge: "Bestseller" },
  { id: 8, name: "Cotton Shirt", price: 1800, old: 2400, rating: 4, reviews: 65 },
  { id: 9, name: "Satin Blouse", price: 3500, rating: 5, reviews: 54, badge: "New" },
  { id: 10, name: "Cropped Cardigan", price: 2800, old: 3800, rating: 4, reviews: 48 },
  { id: 11, name: "Silk Teddy", price: 4200, rating: 5, reviews: 61, badge: "Top Rated" },
  { id: 12, name: "Mesh Top", price: 1500, old: 2200, rating: 4, reviews: 37, badge: "New" },
  { id: 13, name: "Puff Sleeve Dress", price: 5200, rating: 5, reviews: 78, badge: "Bestseller" },
  { id: 14, name: "Bodysuit", price: 2100, rating: 4, reviews: 52 },
  { id: 15, name: "Maxi Gown", price: 7800, old: 10500, rating: 5, reviews: 89, badge: "New" },
  { id: 16, name: "Crop Top", price: 1200, old: 1800, rating: 4, reviews: 43 },
  { id: 17, name: "Slip Dress", price: 3800, rating: 5, reviews: 67, badge: "Top Rated" },
  { id: 18, name: "Tunic Top", price: 2400, old: 3200, rating: 4, reviews: 39, badge: "New" },
  { id: 19, name: "Wrap Blouse", price: 2900, rating: 5, reviews: 55 },
  { id: 20, name: "Henley Shirt", price: 1600, rating: 4, reviews: 44 },
];

export default function NewArrivalsPage() {
  return <CategoryPage categoryName="New Arrivals" products={products} categoryIcon="✨" />;
}
