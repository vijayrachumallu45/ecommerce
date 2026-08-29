import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import { ShoppingBag, User, LogOut, Menu, X, Shield, Package, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const { user, logout, isAdmin } = useContext(AuthContext);
  const { cartCount } = useContext(CartContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('shopease_theme') || 'light');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('shopease_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <ShoppingBag className="logo-icon" />
          <span>ShopEase</span>
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/about" className="nav-link">About</Link>
          
          {isAdmin && (
            <Link to="/admin" className="nav-link admin-link">
              <Shield size={16} /> Admin
            </Link>
          )}
        </div>

        <div className="navbar-actions">
          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn" 
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <Link to="/cart" className="cart-badge-btn" title="View Cart">
            <ShoppingBag size={22} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>

          {user ? (
            <div className="user-dropdown-container">
              <Link to="/profile" className="user-profile-btn">
                <User size={18} />
                <span className="user-name">{user.name.split(' ')[0]}</span>
              </Link>
              <Link to="/orders" className="orders-link" title="My Orders">
                <Package size={18} />
              </Link>
              <button onClick={handleLogout} className="logout-btn" title="Logout">
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="btn btn-outline">Login</Link>
              <Link to="/register" className="btn btn-primary">Register</Link>
            </div>
          )}

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/products" onClick={() => setMobileMenuOpen(false)}>Products</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          {user && (
            <>
              <Link to="/profile" onClick={() => setMobileMenuOpen(false)}>My Profile</Link>
              <Link to="/orders" onClick={() => setMobileMenuOpen(false)}>My Orders</Link>
              {isAdmin && (
                <Link to="/admin" onClick={() => setMobileMenuOpen(false)}>Admin Dashboard</Link>
              )}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleLogout();
                }}
                className="mobile-logout-btn"
              >
                Logout
              </button>
            </>
          )}
          {!user && (
            <div className="mobile-auth-links">
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Login</Link>
              <Link to="/register" onClick={() => setMobileMenuOpen(false)}>Register</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
