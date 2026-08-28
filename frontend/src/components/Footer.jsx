import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Mail, Phone, MapPin, Github, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <ShoppingBag size={24} />
            <span>ShopEase</span>
          </div>
          <p className="footer-desc">
            Your premium destination for everyday fashion, modern electronics, home decor, and accessories. Experience seamless online shopping today.
          </p>
          <div className="social-links">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="Github">
              <Github size={18} />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">All Products</Link></li>
            <li><Link to="/cart">Shopping Cart</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Categories</h4>
          <ul className="footer-links">
            <li><Link to="/products?category=Electronics">Electronics</Link></li>
            <li><Link to="/products?category=Clothing">Clothing</Link></li>
            <li><Link to="/products?category=Shoes">Shoes</Link></li>
            <li><Link to="/products?category=Accessories">Accessories</Link></li>
            <li><Link to="/products?category=Home">Home & Living</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Contact Us</h4>
          <div className="contact-info">
            <p><MapPin size={16} /> 100 Admin Plaza, New York, NY</p>
            <p><Phone size={16} /> +1 (800) 555-EASE</p>
            <p><Mail size={16} /> support@shopease.com</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ShopEase E-Commerce. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
