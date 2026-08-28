import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import API from '../services/api';
import { User, Mail, Phone, MapPin, Key, Save, LogOut, CheckCircle, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, updateUser, logout, isAdmin } = useContext(AuthContext);
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const [profileMsg, setProfileMsg] = useState({ type: '', text: '' });
  const [passwordMsg, setPasswordMsg] = useState({ type: '', text: '' });
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [loadingPassword, setLoadingPassword] = useState(false);

  useEffect(() => {
    if (user) {
      setProfileData({
        name: user.name || '',
        phone: user.phone || '',
        address: user.address || '',
      });
    }
  }, [user]);

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setProfileMsg({ type: '', text: '' });

    try {
      setLoadingProfile(true);
      const response = await API.put('/users/profile/update', profileData);
      updateUser(response.data);
      setProfileMsg({ type: 'success', text: 'Profile updated successfully!' });
    } catch (err) {
      setProfileMsg({ type: 'danger', text: err.message || 'Failed to update profile' });
    } finally {
      setLoadingProfile(false);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setPasswordMsg({ type: '', text: '' });

    if (passwordData.newPassword !== passwordData.confirmNewPassword) {
      setPasswordMsg({ type: 'danger', text: 'New passwords do not match' });
      return;
    }

    if (passwordData.newPassword.length < 6) {
      setPasswordMsg({ type: 'danger', text: 'New password must be at least 6 characters' });
      return;
    }

    try {
      setLoadingPassword(true);
      await API.put('/users/change-password', {
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword,
      });

      setPasswordMsg({ type: 'success', text: 'Password changed successfully!' });
      setPasswordData({ currentPassword: '', newPassword: '', confirmNewPassword: '' });
    } catch (err) {
      setPasswordMsg({ type: 'danger', text: err.message || 'Failed to change password' });
    } finally {
      setLoadingPassword(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) return null;

  return (
    <div className="profile-page page-container">
      <div className="profile-header-card">
        <div className="profile-avatar">
          <User size={40} />
        </div>
        <div className="profile-header-info">
          <h2>{user.name}</h2>
          <p><Mail size={14} /> {user.email}</p>
          {isAdmin && (
            <span className="admin-badge">
              <Shield size={14} /> Administrator
            </span>
          )}
        </div>
        <button onClick={handleLogout} className="btn btn-outline-danger logout-header-btn">
          <LogOut size={16} /> Logout
        </button>
      </div>

      <div className="profile-grid-layout">
        {/* Profile Update Section */}
        <div className="profile-card">
          <h3>
            <User size={20} /> Personal Information
          </h3>

          {profileMsg.text && (
            <div className={`alert alert-${profileMsg.type}`}>{profileMsg.text}</div>
          )}

          <form onSubmit={handleProfileSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={profileData.name}
                onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address (Read-only)</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={user.email}
                disabled
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                className="form-control"
                placeholder="e.g. +1 555-0199"
                value={profileData.phone}
                onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Default Shipping Address</label>
              <textarea
                id="address"
                className="form-control"
                rows="3"
                placeholder="Enter default address..."
                value={profileData.address}
                onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" disabled={loadingProfile} className="btn btn-primary">
              <Save size={16} /> {loadingProfile ? 'Saving...' : 'Save Profile Changes'}
            </button>
          </form>
        </div>

        {/* Change Password Section */}
        <div className="profile-card">
          <h3>
            <Key size={20} /> Security & Password
          </h3>

          {passwordMsg.text && (
            <div className={`alert alert-${passwordMsg.type}`}>{passwordMsg.text}</div>
          )}

          <form onSubmit={handlePasswordSubmit}>
            <div className="form-group">
              <label htmlFor="currentPassword">Current Password</label>
              <input
                type="password"
                id="currentPassword"
                className="form-control"
                value={passwordData.currentPassword}
                onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                id="newPassword"
                className="form-control"
                value={passwordData.newPassword}
                onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmNewPassword">Confirm New Password</label>
              <input
                type="password"
                id="confirmNewPassword"
                className="form-control"
                value={passwordData.confirmNewPassword}
                onChange={(e) => setPasswordData({ ...passwordData, confirmNewPassword: e.target.value })}
                required
              />
            </div>

            <button type="submit" disabled={loadingPassword} className="btn btn-secondary">
              <Key size={16} /> {loadingPassword ? 'Updating...' : 'Update Password'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
