import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import API from '../services/api';
import { CartContext } from '../context/CartContext';
import Loading from '../components/Loading';
import { Star, ShoppingCart, Zap, ArrowLeft, CheckCircle, AlertTriangle } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [addedMessage, setAddedMessage] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await API.get(`/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError(err.message || 'Product not found');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      setAddedMessage(true);
      setTimeout(() => setAddedMessage(false), 3000);
    }
  };

  const handleBuyNow = () => {
    if (product) {
      addToCart(product, quantity);
      navigate('/cart');
    }
  };

  if (loading) return <Loading message="Loading product details..." />;

  if (error || !product) {
    return (
      <div className="page-container text-center">
        <div className="alert alert-danger mb-4">{error || 'Product not found'}</div>
        <Link to="/products" className="btn btn-primary">
          <ArrowLeft size={16} /> Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="product-details-page page-container">
      <Link to="/products" className="back-link">
        <ArrowLeft size={18} /> Back to Products
      </Link>

      {addedMessage && (
        <div className="alert alert-success toast-alert">
          <CheckCircle size={18} /> Added {quantity} x "{product.name}" to cart!
        </div>
      )}

      <div className="product-details-card">
        <div className="product-details-image-section">
          <img src={product.image} alt={product.name} className="product-details-image" />
        </div>

        <div className="product-details-info-section">
          <span className="product-category-chip">{product.category}</span>
          <h1 className="product-details-title">{product.name}</h1>

          <div className="product-details-rating">
            <div className="stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={i < Math.floor(product.rating || 4.5) ? 'star-filled' : 'star-empty'}
                />
              ))}
            </div>
            <span className="rating-text">
              {product.rating ? product.rating.toFixed(1) : '4.5'} ({product.numReviews || 12} reviews)
            </span>
          </div>

          <div className="product-details-price">${product.price.toFixed(2)}</div>

          <div className="stock-status">
            {product.stock > 0 ? (
              <span className="in-stock-badge">
                <CheckCircle size={16} /> In Stock ({product.stock} available)
              </span>
            ) : (
              <span className="out-of-stock-badge">
                <AlertTriangle size={16} /> Out of Stock
              </span>
            )}
          </div>

          <div className="product-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>

          {product.stock > 0 && (
            <div className="quantity-selector-wrapper">
              <label>Quantity:</label>
              <div className="quantity-controls">
                <button
                  type="button"
                  className="qty-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <input
                  type="number"
                  className="qty-input"
                  value={quantity}
                  min="1"
                  max={product.stock}
                  onChange={(e) => {
                    const val = parseInt(e.target.value) || 1;
                    setQuantity(Math.min(Math.max(1, val), product.stock));
                  }}
                />
                <button
                  type="button"
                  className="qty-btn"
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                >
                  +
                </button>
              </div>
            </div>
          )}

          <div className="product-action-buttons">
            <button
              onClick={handleAddToCart}
              disabled={product.stock <= 0}
              className="btn btn-primary btn-lg"
            >
              <ShoppingCart size={20} /> Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              disabled={product.stock <= 0}
              className="btn btn-secondary btn-lg"
            >
              <Zap size={20} /> Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
