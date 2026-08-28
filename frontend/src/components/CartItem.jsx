import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.product, item.quantity - 1);
    } else {
      removeFromCart(item.product);
    }
  };

  const handleIncrease = () => {
    if (item.quantity < item.stock) {
      updateQuantity(item.product, item.quantity + 1);
    }
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>

      <div className="cart-item-info">
        <Link to={`/products/${item.product}`} className="cart-item-title">
          {item.name}
        </Link>
        <span className="cart-item-category">{item.category}</span>
        <div className="cart-item-price-unit">${item.price.toFixed(2)} each</div>
      </div>

      <div className="cart-item-quantity">
        <button
          onClick={handleDecrease}
          className="qty-btn"
          title="Decrease quantity"
        >
          <Minus size={14} />
        </button>
        <span className="qty-value">{item.quantity}</span>
        <button
          onClick={handleIncrease}
          className="qty-btn"
          disabled={item.quantity >= item.stock}
          title="Increase quantity"
        >
          <Plus size={14} />
        </button>
      </div>

      <div className="cart-item-subtotal">
        ${(item.price * item.quantity).toFixed(2)}
      </div>

      <button
        onClick={() => removeFromCart(item.product)}
        className="cart-item-remove"
        title="Remove item"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};

export default CartItem;
