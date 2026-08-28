import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import API from '../services/api';
import Loading from '../components/Loading';
import { AuthContext } from '../context/AuthContext';
import { ArrowLeft, Package, MapPin, Phone, DollarSign, Calendar, XCircle, CheckCircle } from 'lucide-react';

const OrderDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [cancelling, setCancelling] = useState(false);
  const [cancelMsg, setCancelMsg] = useState('');

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        setLoading(true);
        const response = await API.get(`/orders/${id}`);
        setOrder(response.data);
      } catch (err) {
        setError(err.message || 'Failed to load order details');
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [id]);

  const handleCancelOrder = async () => {
    if (!window.confirm('Are you sure you want to cancel this order?')) return;

    try {
      setCancelling(true);
      const response = await API.put(`/orders/${id}/cancel`);
      setOrder(response.data.order);
      setCancelMsg('Order was cancelled successfully.');
    } catch (err) {
      alert(err.message || 'Could not cancel order');
    } finally {
      setCancelling(false);
    }
  };

  if (loading) return <Loading message="Loading order receipt..." />;

  if (error || !order) {
    return (
      <div className="page-container text-center">
        <div className="alert alert-danger">{error || 'Order not found'}</div>
        <Link to="/orders" className="btn btn-primary mt-3">
          <ArrowLeft size={16} /> Back to My Orders
        </Link>
      </div>
    );
  }

  return (
    <div className="order-details-page page-container">
      <Link to="/orders" className="back-link">
        <ArrowLeft size={18} /> Back to Orders
      </Link>

      <div className="order-header-banner">
        <div>
          <h1>Order #{order._id.substring(order._id.length - 8).toUpperCase()}</h1>
          <p className="order-sub-date">
            <Calendar size={16} /> Placed on {new Date(order.createdAt || order.orderDate).toLocaleString()}
          </p>
        </div>
        <div className={`status-pill status-${order.status.toLowerCase()}`}>
          {order.status}
        </div>
      </div>

      {cancelMsg && <div className="alert alert-success">{cancelMsg}</div>}

      <div className="order-details-grid">
        {/* Items List */}
        <div className="order-items-card">
          <h3>
            <Package size={20} /> Ordered Items
          </h3>
          <div className="order-items-table-wrapper">
            <table className="order-items-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th className="text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {order.products.map((item, idx) => (
                  <tr key={idx}>
                    <td>
                      <div className="table-product-info">
                        <img src={item.image} alt={item.name} className="table-thumb" />
                        <span>{item.name}</span>
                      </div>
                    </td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>x{item.quantity}</td>
                    <td className="text-right">${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Shipping & Payment Summary Sidebar */}
        <div className="order-summary-sidebar">
          <div className="summary-section">
            <h3><MapPin size={18} /> Delivery Details</h3>
            <p><strong>Recipient:</strong> {order.user?.name || user?.name}</p>
            <p><strong>Address:</strong> {order.shippingAddress?.address}</p>
            <p><strong>Phone:</strong> {order.shippingAddress?.phone}</p>
          </div>

          <div className="summary-section">
            <h3><DollarSign size={18} /> Payment Summary</h3>
            <div className="summary-row">
              <span>Payment Method</span>
              <span>{order.paymentMethod || 'Cash on Delivery'}</span>
            </div>
            <div className="summary-row total-row">
              <span>Grand Total</span>
              <span>${order.totalAmount.toFixed(2)}</span>
            </div>
          </div>

          {order.status === 'Pending' && (
            <button
              onClick={handleCancelOrder}
              disabled={cancelling}
              className="btn btn-danger btn-block mt-3"
            >
              <XCircle size={18} /> {cancelling ? 'Cancelling...' : 'Cancel This Order'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
