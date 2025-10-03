import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../services/api';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      setLoading(true);
      const userData = await authAPI.getProfile();
      setUser(userData);
    } catch (err) {
      console.error('Profile fetch error:', err);
      if (err.response?.status === 401) {
        // Token expired or invalid, redirect to login
        navigate('/login');
      } else {
        setError('Failed to load user profile');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await authAPI.logout();
      localStorage.removeItem('token');
      alert('Logged out successfully!');
      navigate('/login');
    } catch (err) {
      console.error('Logout error:', err);
      alert('Error logging out');
    }
  };

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="dashboard-card">
          <div className="dashboard-header">
            <h1>Loading...</h1>
            <p>Fetching your profile...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-container">
        <div className="dashboard-card">
          <div className="dashboard-header">
            <h1>Error</h1>
            <p>{error}</p>
          </div>
          <button onClick={() => navigate('/login')} className="logout-button">
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <p>Welcome back, {user?.name}!</p>
        </div>
        
        <div className="dashboard-content">
          <div className="info-box">
            <h2>👤 Your Profile</h2>
            <div className="user-info">
              {user?.avatar && (
                <img 
                  src={user.avatar} 
                  alt="Profile" 
                  className="profile-avatar"
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    marginBottom: '15px'
                  }}
                />
              )}
              <div className="user-details">
                <p><strong>Name:</strong> {user?.name}</p>
                <p><strong>Email:</strong> {user?.email}</p>
                <p><strong>Login Method:</strong> {user?.provider === 'github' ? '🐙 GitHub OAuth' : '🔐 Email & Password'}</p>
                <p><strong>Member Since:</strong> {new Date(user?.createdAt).toLocaleDateString()}</p>
                <p><strong>User ID:</strong> #{user?.id}</p>
              </div>
            </div>
          </div>

          <div className="info-box" style={{ marginTop: '20px' }}>
            <h2>🎉 Authentication Successful</h2>
            <p>You have successfully authenticated with JWT and session cookies.</p>
          </div>
          
          <button onClick={handleLogout} className="logout-button">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
