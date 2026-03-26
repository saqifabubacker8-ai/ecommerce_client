import React from "react";
import { Link } from "react-router-dom";

/* ─── Constants ─────────────────────────────────────────── */
const NAV_LINKS = ["New Arrivals", "Women", "Men", "Accessories", "Sale"];

export default function NavBar({
  menuOpen,
  setMenuOpen,
  wishlist,
  wishlistOpen,
  setWishlistOpen,
  searchOpen,
  setSearchOpen,
  cart,
  cartOpen,
  setCartOpen,
  removeFromCart,
  cartTotal,
  cartCount,
  displayName,
  handleLogout,
  formatPrice,
  showToast,
  toggleWishlist,
  products,
  activeLink,
  setActiveLink,
  setSlide
}) {
  return (
    <>
      {/* ── Announcement Bar ──────────────────────────────── */}
      <div className="lp-announce">
        <span>🚚 Free shipping on orders above ₹2,999</span>
        <span className="announce-sep">·</span>
        <span>Use code <strong>LUMIERE10</strong> for 10% off your first order</span>
        <span className="announce-sep">·</span>
        <span>🇮🇳 Free returns across India</span>
      </div>

      {/* ── Navbar ────────────────────────────────────────── */}
      <nav className="lp-nav">
        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>

        <Link to="/" className="nav-logo" onClick={() => { setMenuOpen(false); setSlide?.(0); setActiveLink?.("New Arrivals"); }}>LUMIÈRE</Link>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#" className={activeLink === "New Arrivals" ? "sale-link" : ""} onClick={(e) => { e.preventDefault(); setMenuOpen(false); setActiveLink?.("New Arrivals"); setSlide?.(1); }}>New Arrivals</a></li>
          <li><a href="#" className={activeLink === "Women" ? "sale-link" : ""} onClick={(e) => { e.preventDefault(); setMenuOpen(false); setActiveLink?.("Women"); setSlide?.(2); }}>Women</a></li>
          <li><a href="#" className={activeLink === "Men" ? "sale-link" : ""} onClick={(e) => { e.preventDefault(); setMenuOpen(false); setActiveLink?.("Men"); setSlide?.(3); }}>Men</a></li>
          <li><a href="#" className={activeLink === "Accessories" ? "sale-link" : ""} onClick={(e) => { e.preventDefault(); setMenuOpen(false); setActiveLink?.("Accessories"); setSlide?.(4); }}>Accessories</a></li>
          <li><a href="#" className={activeLink === "Sale" ? "sale-link" : ""} onClick={(e) => { e.preventDefault(); setMenuOpen(false); setActiveLink?.("Sale"); setSlide?.(5); }}>Sale</a></li>
        </ul>

        <div className="nav-actions">
          <Link to="/" className="nav-icon-btn" title="Home" onClick={() => { setMenuOpen(false); setSlide?.(0); setActiveLink?.("New Arrivals"); }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>
          </Link>
          <button className="nav-icon-btn" title="Search" onClick={() => setSearchOpen(true)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          </button>
          <button className="nav-icon-btn wishlist-btn" title="Wishlist" onClick={() => setWishlistOpen(true)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
          </button>
          <button className="nav-icon-btn cart-btn" onClick={() => setCartOpen(true)} title="Cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </button>
          <div className="nav-user">
            <span className="user-greeting">Hi, {displayName}</span>
            <button className="logout-btn" onClick={handleLogout}>Sign Out</button>
          </div>
        </div>
      </nav>

      {/* ── Cart Drawer ───────────────────────────────────── */}
      <div className={`cart-overlay ${cartOpen ? "open" : ""}`} onClick={() => setCartOpen(false)} />
      <aside className={`cart-drawer ${cartOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h3>Your Cart ({cartCount})</h3>
          <button className="cart-close" onClick={() => setCartOpen(false)}>✕</button>
        </div>
        {cart.length === 0 ? (
          <div className="cart-empty">
            <span>🛍️</span>
            <p>Your cart is empty</p>
            <button className="cta-btn sm" onClick={() => setCartOpen(false)}>Continue Shopping</button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-color" />
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">{formatPrice(item.price)} × {item.qty}</p>
                  </div>
                  <button className="cart-remove" onClick={() => removeFromCart(item.id)}>✕</button>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              <button className="cta-btn full" onClick={() => showToast("Checkout coming soon! 🚀")}>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </aside>

      {/* ── Search Modal ──────────────────────────────────── */}
      {searchOpen && (
        <div className="search-overlay" onClick={() => setSearchOpen(false)}>
          <div className="search-modal" onClick={(e) => e.stopPropagation()}>
            <button className="search-close" onClick={() => setSearchOpen(false)}>✕</button>
            <input
              type="text"
              placeholder="Search products..."
              className="search-input"
              autoFocus
            />
            <div className="search-results">
              <p>Search functionality coming soon! 🔍</p>
            </div>
          </div>
        </div>
      )}

      {/* ── Wishlist Drawer ───────────────────────────────── */}
      <div className={`wishlist-overlay ${wishlistOpen ? "open" : ""}`} onClick={() => setWishlistOpen(false)} />
      <aside className={`wishlist-drawer ${wishlistOpen ? "open" : ""}`}>
        <div className="wishlist-header">
          <h3>Your Wishlist ({wishlist.length})</h3>
          <button className="wishlist-close" onClick={() => setWishlistOpen(false)}>✕</button>
        </div>
        {wishlist.length === 0 ? (
          <div className="wishlist-empty">
            <span>💖</span>
            <p>Your wishlist is empty</p>
            <button className="cta-btn sm" onClick={() => setWishlistOpen(false)}>Continue Shopping</button>
          </div>
        ) : (
          <>
            <div className="wishlist-items">
              {wishlist.map((id) => {
                const product = products.find((p) => p.id === id);
                return (
                  <div key={id} className="wishlist-item">
                    <div className="wishlist-item-info">
                      <p className="wishlist-item-name">{product.name}</p>
                      <p className="wishlist-item-price">{formatPrice(product.price)}</p>
                    </div>
                    <button className="wishlist-remove" onClick={() => toggleWishlist(id)}>✕</button>
                  </div>
                );
              })}
            </div>
            <div className="wishlist-footer">
              <button className="cta-btn full" onClick={() => showToast("Wishlist view coming soon! 💖")}>
                View All
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}