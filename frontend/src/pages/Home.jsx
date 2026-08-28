import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../services/api';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import Loading from '../components/Loading';
import { ArrowRight, ShoppingBag, Truck, ShieldCheck, Headphones } from 'lucide-react';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        setLoading(true);
        const [catRes, prodRes] = await Promise.all([
          API.get('/categories'),
          API.get('/products?limit=8'),
        ]);

        setCategories(catRes.data);
        const prods = prodRes.data.products || [];
        setLatestProducts(prods.slice(0, 4));
        setFeaturedProducts(prods.filter(p => p.rating >= 4.5).slice(0, 4));
      } catch (err) {
        setError(err.message || 'Failed to load store data');
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-tag">Welcome to ShopEase</span>
          <h1 className="hero-title">Discover Quality Products for Your Everyday Needs</h1>
          <p className="hero-subtitle">
            Explore our curated collections of electronics, trendy fashion, accessories, and home decor at unbeatable prices.
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary btn-lg">
              Shop Now <ArrowRight size={20} />
            </Link>
            <Link to="/about" className="btn btn-outline btn-lg">
              Learn More
            </Link>
          </div>
        </div>
        <div className="hero-banner">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=80"
            alt="E-commerce shopping banner"
            className="hero-image"
          />
        </div>
      </section>

      {/* Features Value Bar */}
      <section className="features-bar">
        <div className="feature-item">
          <Truck className="feature-icon" size={28} />
          <div>
            <h4>Free & Fast Delivery</h4>
            <p>On all orders above $50</p>
          </div>
        </div>
        <div className="feature-item">
          <ShieldCheck className="feature-icon" size={28} />
          <div>
            <h4>100% Safe Checkout</h4>
            <p>Secure payments & Cash on Delivery</p>
          </div>
        </div>
        <div className="feature-item">
          <Headphones className="feature-icon" size={28} />
          <div>
            <h4>24/7 Dedicated Support</h4>
            <p>Instant answers to your queries</p>
          </div>
        </div>
      </section>

      {loading ? (
        <Loading message="Loading home catalog..." />
      ) : error ? (
        <div className="alert alert-danger text-center">{error}</div>
      ) : (
        <>
          {/* Featured Categories Section */}
          <section className="section-container">
            <div className="section-header">
              <h2>Shop by Category</h2>
              <Link to="/products" className="view-all-link">
                View All <ArrowRight size={16} />
              </Link>
            </div>
            <div className="categories-grid">
              {categories.map((category) => (
                <CategoryCard key={category._id || category.name} category={category} />
              ))}
            </div>
          </section>

          {/* Featured Products Section */}
          <section className="section-container bg-light">
            <div className="section-header">
              <h2>Featured Products</h2>
              <p className="section-sub">Top rated items customer loved the most</p>
            </div>
            <div className="products-grid">
              {featuredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </section>

          {/* Promotional Banner Section */}
          <section className="promo-banner">
            <div className="promo-content">
              <h2>Summer Sale Is Live!</h2>
              <p>Get up to 40% OFF on all premium audio gear & accessories this week.</p>
              <Link to="/products?category=Electronics" className="btn btn-primary">
                Explore Deals
              </Link>
            </div>
          </section>

          {/* Latest Arrivals Section */}
          <section className="section-container">
            <div className="section-header">
              <h2>New Arrivals</h2>
              <p className="section-sub">Recently added items in our store</p>
            </div>
            <div className="products-grid">
              {latestProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Home;
