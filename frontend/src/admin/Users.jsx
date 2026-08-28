import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../services/api';
import Loading from '../components/Loading';
import { Users as UsersIcon, Trash2, Shield, User } from 'lucide-react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await API.get('/users');
      setUsers(response.data);
    } catch (err) {
      setError(err.message || 'Failed to fetch user list');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId, userName, role) => {
    if (role === 'admin') {
      alert('Cannot delete Administrator user account.');
      return;
    }

    if (!window.confirm(`Are you sure you want to remove user "${userName}"?`)) return;

    try {
      await API.delete(`/users/${userId}`);
      setUsers(users.filter((u) => u._id !== userId));
    } catch (err) {
      alert(err.message || 'Failed to remove user');
    }
  };

  return (
    <div className="admin-users-page page-container">
      <div className="admin-header">
        <div>
          <h1>Registered User Accounts</h1>
          <p>View user directory, role permissions, and user details</p>
        </div>
      </div>

      {/* Admin Nav Subbar */}
      <div className="admin-subnav">
        <Link to="/admin" className="admin-subnav-btn">Dashboard</Link>
        <Link to="/admin/products" className="admin-subnav-btn">Products</Link>
        <Link to="/admin/orders" className="admin-subnav-btn">Orders</Link>
        <Link to="/admin/users" className="admin-subnav-btn active">Users</Link>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="admin-table-card">
        {loading ? (
          <Loading message="Fetching registered users..." />
        ) : users.length === 0 ? (
          <p className="p-4 text-center text-muted">No users found.</p>
        ) : (
          <div className="table-responsive">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Phone</th>
                  <th>Joined Date</th>
                  <th className="text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u._id}>
                    <td>
                      <strong>{u.name}</strong>
                    </td>
                    <td>{u.email}</td>
                    <td>
                      {u.role === 'admin' ? (
                        <span className="admin-badge-chip">
                          <Shield size={12} /> Admin
                        </span>
                      ) : (
                        <span className="user-badge-chip">
                          <User size={12} /> User
                        </span>
                      )}
                    </td>
                    <td>{u.phone || 'N/A'}</td>
                    <td>{new Date(u.createdAt).toLocaleDateString()}</td>
                    <td className="text-right">
                      {u.role !== 'admin' && (
                        <button
                          onClick={() => handleDeleteUser(u._id, u.name, u.role)}
                          className="btn-icon btn-outline-danger"
                          title="Remove User Account"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
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

export default Users;
