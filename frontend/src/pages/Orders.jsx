import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../services/api';
import Loading from '../components/Loading';
import { Package, ArrowRight, Calendar, DollarSign, Clock } from 'lucide-react';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await API.get('/orders/myorders');
        setOrders(response.data);
      } catch (err) {
        setError(err.message || 'Failed to load your orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Delivered':
        return <span className="status-badge status-delivered">Delivered</span>;
      case 'Shipped':
        return <span className="status-badge status-shipped">Shipped</span>;
      case 'Processing':
        return <span className="status-badge status-processing">Processing</span>;
      case 'Cancelled':
        return <span className="status-badge status-cancelled">Cancelled</span>;
      default:
        return <span className="status-badge status-pending">Pending</span>;
    }
  };

  if (loading) return <Loading message="Retrieving your orders..." />;

  return (
    <div className="orders-page page-container">
      <div className="orders-header">
        <h1>My Orders</h1>
        <p>Track your current and previous purchases</p>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {orders.length === 0 ? (
        <div className="empty-orders-card text-center">
          <Package size={56} className="empty-orders-icon" />
          <h3>No orders placed yet</h3>
          <p>Once you purchase items, your orders will show up here.</p>
          <Link to="/products" className="btn btn-primary mt-3">
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order._id} className="order-card">
              <div className="order-card-header">
                <div>
                  <span className="order-id">Order #{order._id.substring(order._id.length - 8).toUpperCase()}</span>
                  <div className="order-date">
                    <Calendar size={14} /> {new Date(order.createdAt || order.orderDate).toLocaleDateString()}
                  </div>
                </div>
                <div>{getStatusBadge(order.status)}</div>
              </div>

              <div className="order-card-body">
                <div className="order-thumbnails">
                  {order.products.slice(0, 3).map((item, index) => (
                    <img
                      key={index}
                      src={item.image}
                      alt={item.name}
                      className="order-item-thumb"
                      title={item.name}
                    />
                  ))}
                  {order.products.length > 3 && (
                    <span className="more-items-count">+{order.products.length - 3} more</span>
                  )}
                </div>

                <div className="order-total-info">
                  <span>Total Amount</span>
                  <strong>${order.totalAmount.toFixed(2)}</strong>
                </div>
              </div>

              <div className="order-card-footer">
                <span className="order-items-summary">
                  {order.products.reduce((acc, p) => acc + p.quantity, 0)} Items ({order.paymentMethod})
                </span>
                <Link to={`/orders/${order._id}`} className="btn btn-outline btn-sm">
                  View Details <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
