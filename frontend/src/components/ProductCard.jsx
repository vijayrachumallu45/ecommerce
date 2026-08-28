import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { Star, ShoppingCart, Eye } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <span className="product-category-badge">{product.category}</span>
        {product.discountPercent > 0 && (
          <span className="product-discount-badge">-{product.discountPercent}% OFF</span>
        )}
      </div>

      <div className="product-info">
        <h3 className="product-title" title={product.name}>
          <Link to={`/products/${product._id}`}>{product.name}</Link>
        </h3>

        <div className="product-rating">
          <Star size={16} className="star-icon" />
          <span>{product.rating ? product.rating.toFixed(1) : '4.5'}</span>
          <span className="reviews-count">({product.numReviews || 12})</span>
        </div>

        <div className="product-card-footer">
          <div className="product-price">${product.price.toFixed(2)}</div>
          
          <div className="product-card-actions">
            <Link
              to={`/products/${product._id}`}
              className="btn-icon btn-secondary"
              title="View Details"
            >
              <Eye size={18} />
            </Link>
            <button
              onClick={() => addToCart(product, 1)}
              className="btn-icon btn-primary"
              title="Add to Cart"
              disabled={product.stock <= 0}
            >
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
