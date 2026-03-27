import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AuthPages.css";

export default function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (form.password.length < 8) e.password = "At least 8 characters";
    if (form.password !== form.confirmPassword) e.confirmPassword = "Passwords don't match";
    if (!/^\+?[\d\s\-]{10,}$/.test(form.phone)) e.phone = "Enter a valid phone number";
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) return setErrors(errs);
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", form.name);
      setLoading(false);
      navigate("/");
    }, 1200);
  };

  return (
    <div className="auth-root">
      <div className="auth-visual">
        <div className="auth-visual-content">
          <div className="auth-brand">LUMIÈRE</div>
          <p className="auth-tagline">Curated luxury,<br />delivered to your door.</p>
          <div className="auth-dots">
            <span className="dot active" />
            <span className="dot" />
            <span className="dot" />
          </div>
        </div>
        <div className="auth-visual-overlay" />
      </div>

      <div className="auth-form-side">
        <div className="auth-form-wrapper">
          <div className="auth-header">
            <h1>Create Account</h1>
            <p>Join thousands of happy shoppers</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form" noValidate>
            <div className={`field-group ${errors.name ? "error" : ""}`}>
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Jane Doe"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
              />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>

            <div className={`field-group ${errors.email ? "error" : ""}`}>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="jane@email.com"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
              />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>

            <div className={`field-group ${errors.phone ? "error" : ""}`}>
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel"
              />
              {errors.phone && <span className="field-error">{errors.phone}</span>}
            </div>

            <div className="field-row">
              <div className={`field-group ${errors.password ? "error" : ""}`}>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Min. 8 chars"
                  value={form.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
                {errors.password && <span className="field-error">{errors.password}</span>}
              </div>

              <div className={`field-group ${errors.confirmPassword ? "error" : ""}`}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Repeat password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
                {errors.confirmPassword && (
                  <span className="field-error">{errors.confirmPassword}</span>
                )}
              </div>
            </div>

            <button type="submit" className="auth-btn" disabled={loading}>
              {loading ? <span className="spinner" /> : "Create My Account"}
            </button>
          </form>

          <p className="auth-switch">
            Already have an account?{" "}
            <Link to="/login" className="auth-link">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}