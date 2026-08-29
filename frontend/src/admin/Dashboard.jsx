import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../services/api';
import Loading from '../components/Loading';
import { Users, Package, ShoppingCart, DollarSign, PlusCircle, ArrowRight, Download } from 'lucide-react';

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const exportCSVReport = () => {
    if (!stats || !stats.recentOrders) return;
    const headers = ['Order ID', 'Customer', 'Total Amount', 'Status', 'Date'];
    const rows = stats.recentOrders.map(o => [
      o._id,
      o.user?.name || 'Guest',
      o.totalAmount,
      o.status,
      new Date(o.createdAt).toLocaleDateString()
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `shopease_sales_report_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const fetchAdminStats = async () => {
      try {
        setLoading(true);
        const response = await API.get('/orders/admin/stats');
        setStats(response.data);
      } catch (err) {
        setError(err.message || 'Failed to fetch admin stats');
      } finally {
        setLoading(false);
      }
    };

    fetchAdminStats();
  }, []);

  if (loading) return <Loading message="Loading Admin Statistics..." />;

  return (
    <div className="admin-dashboard page-container">
      <div className="admin-header">
        <div>
          <h1>Admin Control Panel</h1>
          <p>Overview of ShopEase performance and recent activity</p>
        </div>
        <div className="admin-quick-actions">
          <button onClick={exportCSVReport} className="btn btn-outline" style={{ marginRight: '10px' }}>
            <Download size={18} /> Export CSV Report
          </button>
          <Link to="/admin/products/add" className="btn btn-primary">
            <PlusCircle size={18} /> Add New Product
          </Link>
        </div>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {/* Admin Nav Subbar */}
      <div className="admin-subnav">
        <Link to="/admin" className="admin-subnav-btn active">Dashboard</Link>
        <Link to="/admin/products" className="admin-subnav-btn">Products</Link>
        <Link to="/admin/orders" className="admin-subnav-btn">Orders</Link>
        <Link to="/admin/users" className="admin-subnav-btn">Users</Link>
      </div>

      {/* Metrics Grid */}
      <div className="stats-grid">
        <div className="stat-card stat-users">
          <div className="stat-icon-wrapper">
            <Users size={28} />
          </div>
          <div className="stat-details">
            <span className="stat-title">Total Users</span>
            <h3 className="stat-value">{stats?.totalUsers || 0}</h3>
          </div>
        </div>

        <div className="stat-card stat-products">
          <div className="stat-icon-wrapper">
            <Package size={28} />
          </div>
          <div className="stat-details">
            <span className="stat-title">Total Products</span>
            <h3 className="stat-value">{stats?.totalProducts || 0}</h3>
          </div>
        </div>

        <div className="stat-card stat-orders">
          <div className="stat-icon-wrapper">
            <ShoppingCart size={28} />
          </div>
          <div className="stat-details">
            <span className="stat-title">Total Orders</span>
            <h3 className="stat-value">{stats?.totalOrders || 0}</h3>
          </div>
        </div>

        <div className="stat-card stat-revenue">
          <div className="stat-icon-wrapper">
            <DollarSign size={28} />
          </div>
          <div className="stat-details">
            <span className="stat-title">Total Revenue</span>
            <h3 className="stat-value">${(stats?.totalRevenue || 0).toFixed(2)}</h3>
          </div>
        </div>
      </div>

      {/* Recent Orders Section */}
      <div className="admin-table-card">
        <div className="card-table-header">
          <h3>Recent Orders</h3>
          <Link to="/admin/orders" className="view-all-link">
            View All Orders <ArrowRight size={16} />
          </Link>
        </div>

        {stats?.recentOrders?.length === 0 ? (
          <p className="p-4 text-center text-muted">No orders found.</p>
        ) : (
          <div className="table-responsive">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Total Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th className="text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {stats?.recentOrders?.map((order) => (
                  <tr key={order._id}>
                    <td>#{order._id.substring(order._id.length - 8).toUpperCase()}</td>
                    <td>{order.user?.name || 'Guest / Removed'}</td>
                    <td>${order.totalAmount.toFixed(2)}</td>
                    <td>
                      <span className={`status-badge status-${order.status.toLowerCase()}`}>
                        {order.status}
                      </span>
                    </td>
                    <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                    <td className="text-right">
                      <Link to="/admin/orders" className="btn btn-sm btn-outline">
                        Manage
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

export default Dashboard;
