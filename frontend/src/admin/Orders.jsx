import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../services/api';
import Loading from '../components/Loading';
import { ShoppingBag, Eye, Calendar, User } from 'lucide-react';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [statusUpdatingId, setStatusUpdatingId] = useState(null);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await API.get('/orders');
      setOrders(response.data);
    } catch (err) {
      setError(err.message || 'Failed to fetch order list');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      setStatusUpdatingId(orderId);
      const response = await API.put(`/orders/${orderId}/status`, { status: newStatus });
      setOrders(orders.map((o) => (o._id === orderId ? response.data : o)));
    } catch (err) {
      alert(err.message || 'Failed to update order status');
    } finally {
      setStatusUpdatingId(null);
    }
  };

  return (
    <div className="admin-orders-page page-container">
      <div className="admin-header">
        <div>
          <h1>Order Fulfillment & Management</h1>
          <p>Manage customer orders, track progress, and update status</p>
        </div>
      </div>

      {/* Admin Nav Subbar */}
      <div className="admin-subnav">
        <Link to="/admin" className="admin-subnav-btn">Dashboard</Link>
        <Link to="/admin/products" className="admin-subnav-btn">Products</Link>
        <Link to="/admin/orders" className="admin-subnav-btn active">Orders</Link>
        <Link to="/admin/users" className="admin-subnav-btn">Users</Link>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="admin-table-card">
        {loading ? (
          <Loading message="Fetching customer orders..." />
        ) : orders.length === 0 ? (
          <p className="p-4 text-center text-muted">No orders found in system.</p>
        ) : (
          <div className="table-responsive">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Order Ref</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Total</th>
                  <th>Payment</th>
                  <th>Status</th>
                  <th className="text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>
                      <strong>#{order._id.substring(order._id.length - 8).toUpperCase()}</strong>
                    </td>
                    <td>
                      <div>
                        <strong>{order.user?.name || 'Customer'}</strong>
                        <div className="text-muted text-sm">{order.user?.email || 'N/A'}</div>
                      </div>
                    </td>
                    <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                    <td>
                      <strong>${order.totalAmount.toFixed(2)}</strong>
                    </td>
                    <td>{order.paymentMethod}</td>
                    <td>
                      <select
                        className={`status-select status-select-${order.status.toLowerCase()}`}
                        value={order.status}
                        disabled={statusUpdatingId === order._id}
                        onChange={(e) => handleStatusChange(order._id, e.target.value)}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td className="text-right">
                      <Link to={`/orders/${order._id}`} className="btn-icon btn-outline" title="View Details">
                        <Eye size={16} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
