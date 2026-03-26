import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./LandingPage.css";

/* ─── Mock Data ─────────────────────────────────────────── */

const HERO_SLIDES = [
  { tag: "Welcome to LUMIÈRE", headline: "Effortless\nElegance", sub: "Discover pieces that speak before you do.", cta: "Shop Collection", accent: "#c9a84c" },
  { tag: "New Arrivals", headline: "Fresh\nArrivals", sub: "Discover the latest trends and styles.", cta: "Shop New", accent: "#c9a84c" },
  { tag: "Women", headline: "Women's\nFashion", sub: "Elegant pieces for the modern woman.", cta: "Shop Women", accent: "#c9a84c" },
  { tag: "Men", headline: "Men's\nStyle", sub: "Sophisticated looks for discerning gentlemen.", cta: "Shop Men", accent: "#c9a84c" },
  { tag: "Accessories", headline: "Luxury\nAccessories", sub: "Complete your look with our curated selection.", cta: "Shop Accessories", accent: "#c9a84c" },
  { tag: "Sale", headline: "Exclusive\nSale", sub: "Up to 40% off on luxury items.", cta: "Shop Sale", accent: "#e8cc8a" },
];

const CATEGORIES = [
  { label: "Women's Fashion", count: "2,400+ items", emoji: "👗" },
  { label: "Men's Style",     count: "1,800+ items", emoji: "👔" },
  { label: "Accessories",     count: "950+ items",   emoji: "👜" },
  { label: "Footwear",        count: "1,200+ items", emoji: "👠" },
  { label: "Jewellery",       count: "620+ items",   emoji: "💍" },
  { label: "Beauty",          count: "340+ items",   emoji: "✨" },
];

const PRODUCTS = [
  { id: 1, name: "Silk Wrap Dress",         price: 4200,  old: 5800,  tag: "New",        rating: 4.8, reviews: 124, badge: "Bestseller" },
  { id: 2, name: "Tailored Linen Blazer",   price: 6500,  old: null,  tag: "Limited",    rating: 4.9, reviews: 89,  badge: "Limited" },
  { id: 3, name: "Leather Crossbody Bag",   price: 8900,  old: 11000, tag: "Sale",       rating: 4.7, reviews: 203, badge: "Sale" },
  { id: 4, name: "Cashmere Knit Sweater",   price: 5400,  old: null,  tag: "New",        rating: 4.6, reviews: 67,  badge: null },
  { id: 5, name: "High-Rise Tailored Trousers", price: 3800, old: 4500, tag: "Sale",     rating: 4.5, reviews: 145, badge: "Sale" },
  { id: 6, name: "Floral Maxi Skirt",       price: 2900,  old: null,  tag: "New",        rating: 4.7, reviews: 58,  badge: "New" },
  { id: 7, name: "Gold Chain Necklace",     price: 3200,  old: null,  tag: "Limited",    rating: 4.9, reviews: 212, badge: "Top Rated" },
  { id: 8, name: "Block Heel Mules",        price: 5100,  old: 6200,  tag: "Sale",       rating: 4.6, reviews: 95,  badge: "Sale" },
];

/* ─── Categorized Products ───────────────────────────────── */
const NEW_ARRIVALS = PRODUCTS.filter(p => p.tag === "New");
const WOMEN_PRODUCTS = PRODUCTS.filter(p => p.name.toLowerCase().includes("dress") || p.name.toLowerCase().includes("skirt") || p.name.toLowerCase().includes("sweater"));
const MEN_PRODUCTS = PRODUCTS.filter(p => p.name.toLowerCase().includes("blazer") || p.name.toLowerCase().includes("trouser"));
const ACCESSORIES = PRODUCTS.filter(p => p.name.toLowerCase().includes("bag") || p.name.toLowerCase().includes("necklace") || p.name.toLowerCase().includes("mules"));
const SALE_PRODUCTS = PRODUCTS.filter(p => p.tag === "Sale");

const TESTIMONIALS = [
  { name: "Priya S.", location: "Mumbai", text: "Absolutely stunning quality. Every piece I've ordered from Lumière has felt like a luxury gift to myself.", stars: 5 },
  { name: "Aditi R.", location: "Bangalore", text: "Delivery was swift and packaging was beautiful. The silk dress is everything I hoped for and more.", stars: 5 },
  { name: "Meera K.", location: "Delhi", text: "Finally a brand that understands elegance at a fair price. My go-to for every special occasion.", stars: 5 },
];

const BRANDS = ["VOGUE", "ELLE", "HARPER'S", "BAZAAR", "GQ", "COSMO"];

/* ─── Helpers ───────────────────────────────────────────── */
const formatPrice = (p) => `₹${p.toLocaleString("en-IN")}`;
const Stars = ({ n }) => "★".repeat(n) + "☆".repeat(5 - n);

/* ─── Component ─────────────────────────────────────────── */
export default function LandingPage() {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || localStorage.getItem("userEmail") || "Guest";
  const displayName = userName.includes("@") ? userName.split("@")[0] : userName;

  const [slide, setSlide] = useState(0);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("New Arrivals");
  const [toast, setToast] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const timerRef = useRef(null);

  // Auto-advance hero
  useEffect(() => {
    timerRef.current = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  const goSlide = (i) => { setSlide(i); clearInterval(timerRef.current); };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  const handleHeroClick = (index) => {
    const routes = ["/", "/new-arrivals", "/women", "/men", "/accessories", "/sale"];
    navigate(routes[index] || "/");
  };

  const handleCategoryClick = (category) => {
    const routes = {
      "Women's Fashion": "/women",
      "Men's Style": "/men",
      "Accessories": "/accessories",
      "Footwear": "/accessories",
      "Jewellery": "/accessories",
      "Beauty": "/women",
    };
    setActiveCategory(null);
    navigate(routes[category] || "/");
  };

  const toggleWishlist = (id) => {
    setWishlist((w) =>
      w.includes(id) ? w.filter((x) => x !== id) : [...w, id]
    );
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

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) { setSubscribed(true); showToast("Welcome to the inner circle! 🎉"); }
  };

  const filteredProducts = (() => {
    switch (activeLink) {
      case "New Arrivals": return NEW_ARRIVALS;
      case "Women": return WOMEN_PRODUCTS;
      case "Men": return MEN_PRODUCTS;
      case "Accessories": return ACCESSORIES;
      case "Sale": return SALE_PRODUCTS;
      default: return NEW_ARRIVALS;
    }
  })();

  return (
    <div className="lp-root">
      {/* ── Toast ─────────────────────────────────────────── */}
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
        products={PRODUCTS}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        setSlide={setSlide}
      />

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="lp-hero">
        {HERO_SLIDES.map((s, i) => (
          <div key={i} className={`hero-slide ${i === slide ? "active" : ""}`}>
            <div className="hero-bg" style={{ backgroundImage: `url(https://picsum.photos/seed/lum${i}/1600/900)` }} />
            <div className="hero-overlay" />
            <div className="hero-content">
              <span className="hero-tag">{s.tag}</span>
              <h1 className="hero-headline">{s.headline}</h1>
              <p className="hero-sub">{s.sub}</p>
              <div className="hero-actions">
                <button className="cta-btn hero-cta" onClick={() => handleHeroClick(i)}>
                  {s.cta}
                </button>
                <button className="cta-outline" onClick={() => { showToast("Opening lookbook..."); }}>
                  View Lookbook
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="hero-dots">
          {HERO_SLIDES.map((_, i) => (
            <button key={i} className={`hero-dot ${i === slide ? "active" : ""}`} onClick={() => goSlide(i)} />
          ))}
        </div>
        <div className="hero-scroll-hint">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── Trust Strip ───────────────────────────────────── */}
      <section className="lp-trust">
        {[
          { icon: "🚚", title: "Free Delivery", sub: "On orders above ₹2,999" },
          { icon: "↩️", title: "Easy Returns", sub: "30-day hassle-free returns" },
          { icon: "🔒", title: "Secure Payment", sub: "256-bit SSL encryption" },
          { icon: "⭐", title: "Authentic Products", sub: "100% genuine brands" },
        ].map((t) => (
          <div key={t.title} className="trust-item">
            <span className="trust-icon">{t.icon}</span>
            <div>
              <p className="trust-title">{t.title}</p>
              <p className="trust-sub">{t.sub}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── Categories ────────────────────────────────────── */}
      <section className="lp-section lp-categories">
        <div className="section-header">
          <p className="section-eyebrow">Explore by Category</p>
          <h2 className="section-title">Shop Your Style</h2>
        </div>
        <div className="cat-grid">
          {CATEGORIES.map((c, i) => (
            <button
              key={c.label}
              className={`cat-card ${activeCategory === i ? "active" : ""}`}
              onClick={() => handleCategoryClick(c.label)}
              title={`Shop ${c.label}`}
            >
              <span className="cat-emoji">{c.emoji}</span>
              <p className="cat-label">{c.label}</p>
              <p className="cat-count">{c.count}</p>
            </button>
          ))}
        </div>
      </section>

      {/* ── Featured Products ─────────────────────────────── */}
      <section className="lp-section lp-products">
        <div className="section-header">
          <p className="section-eyebrow">Handpicked for You</p>
          <h2 className="section-title">Trending Now</h2>
          <button className="section-link" onClick={() => navigate("/new-arrivals")} style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}>View All →</button>
        </div>
        <div className="product-grid">
          {filteredProducts.map((p) => (
            <div key={p.id} className="product-card">
              <div className="product-img-wrap">
                <img
                  src={`https://picsum.photos/seed/prod${p.id}/400/500`}
                  alt={p.name}
                  className="product-img"
                  loading="lazy"
                />
                {p.badge && <span className={`product-badge badge-${p.badge.toLowerCase().replace(" ", "-")}`}>{p.badge}</span>}
                <button
                  className={`product-wishlist ${wishlist.includes(p.id) ? "wishlisted" : ""}`}
                  onClick={() => toggleWishlist(p.id)}
                  title="Add to Wishlist"
                >
                  ♥
                </button>
                <button className="product-quick-add" onClick={() => addToCart(p)}>
                  Add to Cart
                </button>
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
      </section>

      {/* ── Banner ────────────────────────────────────────── */}
      <section className="lp-banner">
        <div className="banner-content">
          <span className="banner-eyebrow">Limited Time Offer</span>
          <h2 className="banner-title">Summer Sale is Live!</h2>
          <p className="banner-sub">Up to 40% off on premium fashion. Don't miss out.</p>
          <button className="cta-btn banner-cta" onClick={() => navigate("/sale")}>
            Shop the Sale
          </button>
        </div>
        <div className="banner-deco">40% OFF</div>
      </section>

      {/* ── Press ─────────────────────────────────────────── */}
      <section className="lp-press">
        <p className="press-label">As seen in</p>
        <div className="press-logos">
          {BRANDS.map((b) => <span key={b} className="press-brand">{b}</span>)}
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────── */}
      <section className="lp-section lp-testimonials">
        <div className="section-header">
          <p className="section-eyebrow">Customer Love</p>
          <h2 className="section-title">What They Say</h2>
        </div>
        <div className="testi-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="testi-card">
              <div className="testi-stars">{Stars(t.stars)}</div>
              <p className="testi-text">"{t.text}"</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.name[0]}</div>
                <div>
                  <p className="testi-name">{t.name}</p>
                  <p className="testi-location">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Newsletter ────────────────────────────────────── */}
      <section className="lp-newsletter">
        <div className="newsletter-inner">
          <div className="newsletter-text">
            <p className="section-eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Stay in the Loop</p>
            <h2 className="newsletter-title">Join the Inner Circle</h2>
            <p className="newsletter-sub">Get exclusive access to new arrivals, secret sales & style inspo.</p>
          </div>
          {subscribed ? (
            <div className="newsletter-success">
              <span>🎉</span>
              <p>You're in! Check your inbox for a welcome gift.</p>
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          )}
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────── */}
      <footer className="lp-footer">
        <div className="footer-top">
          <div className="footer-brand-col">
            <div className="footer-logo">LUMIÈRE</div>
            <p className="footer-desc">Curated luxury fashion for the modern Indian wardrobe. Quality you can feel. Style that speaks.</p>
            <div className="footer-socials">
              {["Instagram", "Pinterest", "Twitter", "YouTube"].map((s) => (
                <a key={s} href="#" className="social-pill">{s}</a>
              ))}
            </div>
          </div>
          <div className="footer-links-grid">
            {[
              { heading: "Shop", links: ["New Arrivals", "Women", "Men", "Accessories", "Sale"] },
              { heading: "Help", links: ["Track Order", "Returns", "Size Guide", "FAQs", "Contact Us"] },
              { heading: "Company", links: ["About Us", "Careers", "Press", "Sustainability", "Affiliate"] },
            ].map((col) => (
              <div key={col.heading} className="footer-col">
                <h4 className="footer-col-title">{col.heading}</h4>
                <ul>
                  {col.links.map((l) => <li key={l}><a href="#">{l}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Lumière. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}