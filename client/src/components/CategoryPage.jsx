import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../pages/LandingPage.css";

const formatPrice = (p) => `₹${p.toLocaleString("en-IN")}`;
const Stars = ({ n }) => "★".repeat(n) + "☆".repeat(5 - n);
const ITEMS_PER_PAGE = 12;

export default function CategoryPage({ categoryName, products: initialProducts, categoryIcon }) {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || localStorage.getItem("userEmail") || "Guest";
  const displayName = userName.includes("@") ? userName.split("@")[0] : userName;

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(categoryName || "New Arrivals");
  const [slide, setSlide] = useState(0);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  const getProductImageUrl = (product) => {
    if (product.image) {
      return product.image;
    }
    const query = encodeURIComponent(product.name.replace(/[^a-zA-Z0-9 ]/g, "").trim());
    return `https://source.unsplash.com/400x500/?${query}`;
  };

  const toggleWishlist = (id) => {
    setWishlist((w) => w.includes(id) ? w.filter((x) => x !== id) : [...w, id]);
  };

  const addToCart = (product) => {
    setCart((c) => {
      const ex = c.find((x) => x.id === product.id);
      if (ex) return c.map((x) => x.id === product.id ? { ...x, qty: x.qty + 1 } : x);
      return [...c, { ...product, qty: 1 }];
    });
    showToast(`${product.name} added to cart!`);
  };

  const removeFromCart = (id) => setCart((c) => c.filter((x) => x.id !== id));
  const cartTotal = cart.reduce((s, x) => s + x.price * x.qty, 0);
  const cartCount = cart.reduce((s, x) => s + x.qty, 0);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = initialProducts.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      const matchesRating = p.rating >= ratingFilter;
      return matchesSearch && matchesPrice && matchesRating;
    });

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
      default:
        break;
    }

    return result;
  }, [initialProducts, searchTerm, priceRange, ratingFilter, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="lp-root page-transition">
      {toast && <div className="lp-toast">{toast}</div>}

      <NavBar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        wishlist={wishlist}
        wishlistOpen={wishlistOpen}
        setWishlistOpen={setWishlistOpen}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        cart={cart}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        removeFromCart={removeFromCart}
        cartTotal={cartTotal}
        cartCount={cartCount}
        displayName={displayName}
        handleLogout={handleLogout}
        formatPrice={formatPrice}
        showToast={showToast}
        toggleWishlist={toggleWishlist}
        products={initialProducts}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        setSlide={setSlide}
      />

      <button className="back-btn" onClick={() => navigate(-1)} title="Go Back">← Back</button>

      <section className="lp-section">
        <div className="container">
          <div className="category-header">
            <div>
              <h1 className="section-title">{categoryIcon} {categoryName}</h1>
              <p className="section-subtitle">Showing {filteredProducts.length} items</p>
            </div>
          </div>

          {/* Filters & Search */}
          <div className="category-controls">
            {/* Search */}
            <div className="search-box">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="search-input"
              />
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value);
                setCurrentPage(1);
              }}
              className="sort-select"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {/* Sidebar Filters */}
          <div className="category-layout">
            <aside className="category-sidebar">
              <div className="filter-group">
                <h3>Price Range</h3>
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="1000"
                  value={priceRange[1]}
                  onChange={(e) => {
                    setPriceRange([0, parseInt(e.target.value)]);
                    setCurrentPage(1);
                  }}
                  className="price-slider"
                />
                <p className="price-display">Up to ₹{priceRange[1].toLocaleString("en-IN")}</p>
              </div>

              <div className="filter-group">
                <h3>Minimum Rating</h3>
                <div className="rating-filter">
                  {[0, 1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      className={`rating-btn ${ratingFilter === rating ? "active" : ""}`}
                      onClick={() => {
                        setRatingFilter(rating);
                        setCurrentPage(1);
                      }}
                    >
                      {rating === 0 ? "All" : `${rating}+ ★`}
                    </button>
                  ))}
                </div>
              </div>

              <button
                className="clear-filters"
                onClick={() => {
                  setSearchTerm("");
                  setPriceRange([0, 100000]);
                  setRatingFilter(0);
                  setCurrentPage(1);
                }}
              >
                Clear Filters
              </button>
            </aside>

            {/* Products Grid */}
            <main className="category-main">
              {paginatedProducts.length > 0 ? (
                <>
                  <div className="product-grid">
                    {paginatedProducts.map((p) => (
                      <div key={p.id} className="product-card">
                        <div className="product-img-wrap">
                          <img
                            src={getProductImageUrl(p)}
                            alt={p.name}
                            className="product-img"
                            loading="lazy"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = `https://picsum.photos/seed/prod${p.id}/400/500`;
                            }}
                          />
                          <button className="product-wishlist" onClick={() => toggleWishlist(p.id)}>♥</button>
                          {p.badge && <span className={`product-badge badge-${p.badge.toLowerCase().replace(" ", "-")}`}>{p.badge}</span>}
                          <button className="product-quick-add" onClick={() => addToCart(p)}>Add to Cart</button>
                        </div>
                        <div className="product-info">
                          <p className="product-name">{p.name}</p>
                          <div className="product-rating">
                            <span className="stars">{Stars(Math.round(p.rating))}</span>
                            <span className="review-count">({p.reviews})</span>
                          </div>
                          <div className="product-price">
                            <span className="price-now">{formatPrice(p.price)}</span>
                            {p.old && <span className="price-old">{formatPrice(p.old)}</span>}
                            {p.old && <span className="price-save">{Math.round((1 - p.price / p.old) * 100)}% off</span>}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="pagination">
                      <button
                        className="pagination-btn"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(1)}
                      >
                        ← First
                      </button>
                      <button
                        className="pagination-btn"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                      >
                        Previous
                      </button>

                      <div className="pagination-numbers">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <button
                            key={page}
                            className={`pagination-number ${page === currentPage ? "active" : ""}`}
                            onClick={() => setCurrentPage(page)}
                          >
                            {page}
                          </button>
                        ))}
                      </div>

                      <button
                        className="pagination-btn"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                      >
                        Next
                      </button>
                      <button
                        className="pagination-btn"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(totalPages)}
                      >
                        Last →
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="no-products">
                  <p>No products found matching your filters.</p>
                  <button className="cta-btn" onClick={() => {
                    setSearchTerm("");
                    setPriceRange([0, 100000]);
                    setRatingFilter(0);
                    setCurrentPage(1);
                  }}>
                    Reset Filters
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
