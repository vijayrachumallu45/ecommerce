import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import CartItem from '../components/CartItem';
import API from '../services/api';
import { ShoppingBag, ArrowRight, Trash2, CheckCircle2, ShieldCheck } from 'lucide-react';

const Cart = () => {
  const { cartItems, cartSubtotal, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [shippingAddress, setShippingAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Pre-fill user profile info if logged in
  useEffect(() => {
    if (user) {
      if (user.address) setShippingAddress(user.address);
      if (user.phone) setPhone(user.phone);
    }
  }, [user]);

  const shippingCost = cartSubtotal >= 50 || cartSubtotal === 0 ? 0 : 10.0;
  const grandTotal = cartSubtotal + shippingCost;

  const handleCheckout = async (e) => {
    e.preventDefault();

    if (!user) {
      navigate('/login?redirect=cart');
      return;
    }

    if (!shippingAddress.trim() || !phone.trim()) {
      setError('Please provide both shipping address and contact phone number.');
      return;
    }

    try {
      setLoading(true);
      setError('');

      const orderData = {
        products: cartItems.map((item) => ({
          product: item.product,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
        })),
        shippingAddress: {
          address: shippingAddress,
          phone: phone,
        },
        totalAmount: grandTotal,
        paymentMethod: 'Cash on Delivery',
      };

      const response = await API.post('/orders', orderData);
      setSuccess(true);
      clearCart();
      setTimeout(() => {
        navigate(`/orders/${response.data._id}`);
      }, 1500);
    } catch (err) {
      setError(err.message || 'Checkout failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="page-container text-center py-5">
        <div className="order-success-card">
          <CheckCircle2 size={64} className="success-icon" />
          <h2>Order Placed Successfully!</h2>
          <p>Thank you for shopping with ShopEase. Redirecting to your order status...</p>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="cart-page page-container">
        <div className="empty-cart-card">
          <ShoppingBag size={64} className="empty-cart-icon" />
          <h2>Your Cart is Empty</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <Link to="/products" className="btn btn-primary btn-lg mt-3">
            Start Shopping Now <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page page-container">
      <div className="cart-header">
        <h1>Shopping Cart ({cartItems.length} items)</h1>
        <button onClick={clearCart} className="btn-text-danger">
          <Trash2 size={16} /> Clear Cart
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="cart-content-layout">
        {/* Cart Items List */}
        <div className="cart-items-list">
          {cartItems.map((item) => (
            <CartItem key={item.product} item={item} />
          ))}
        </div>

        {/* Order Summary & Checkout Sidebar */}
        <div className="cart-summary-card">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>${cartSubtotal.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Shipping Fee</span>
            <span>{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span>
          </div>

          <div className="summary-row total-row">
            <span>Grand Total</span>
            <span>${grandTotal.toFixed(2)}</span>
          </div>

          <form onSubmit={handleCheckout} className="checkout-form">
            <h3 className="form-subtitle">Delivery Information</h3>
            
            <div className="form-group">
              <label htmlFor="address">Shipping Address *</label>
              <textarea
                id="address"
                className="form-control"
                rows="2"
                placeholder="Enter complete delivery address..."
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="phone">Contact Phone *</label>
              <input
                type="tel"
                id="phone"
                className="form-control"
                placeholder="e.g. +1 555-0199"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="payment-method-box">
              <ShieldCheck size={20} className="text-primary" />
              <div>
                <strong>Payment Method</strong>
                <p>Cash on Delivery (Pay when order arrives)</p>
              </div>
            </div>

            {!user && (
              <p className="login-notice">
                * You will be prompted to login before placing your order.
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary btn-block btn-lg mt-3"
            >
              {loading ? 'Processing Order...' : 'Place Order (Cash on Delivery)'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;
