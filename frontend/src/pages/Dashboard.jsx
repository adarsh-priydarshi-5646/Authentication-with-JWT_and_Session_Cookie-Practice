import { useNavigate } from 'react-router-dom';
import { authAPI } from '../services/api';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

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

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <p>Welcome! You are successfully logged in.</p>
        </div>
        
        <div className="dashboard-content">
          <div className="info-box">
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
