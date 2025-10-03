import { useState } from 'react';
import axios from 'axios';

const TestConnection = () => {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const testConnection = async () => {
    setLoading(true);
    setStatus('Testing connection...');
    
    try {
      // Test basic connection using health endpoint
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';
      const response = await axios.get(`${API_URL}/health`, {
        withCredentials: true,
        timeout: 30000 // 30 seconds for Render cold starts
      });
      setStatus(`Backend connection successful! 
Backend URL: ${API_URL}
Response: ${JSON.stringify(response.data, null, 2)}`);
    } catch (err) {
      if (err.code === 'ERR_NETWORK') {
        setStatus('Cannot connect to backend. Backend might be starting up (Render cold start) or check URL.');
      } else if (err.code === 'ECONNABORTED') {
        setStatus('Request timeout. Backend is probably starting up (Render cold start). Please wait and try again.');
      } else {
        setStatus(`Error: ${err.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const testSignup = async () => {
    setLoading(true);
    setStatus('Testing signup with valid data...');
    
    const testUser = {
      name: 'Test User',
      email: `test${Date.now()}@example.com`,
      password: 'Test@123456'
    };

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';
      const response = await axios.post(`${API_URL}/auth/signup`, testUser, {
        withCredentials: true,
        timeout: 30000,
        headers: {
          'Content-Type': 'application/json',
        }
      });
      setStatus(`Signup successful! ${JSON.stringify(response.data)}`);
    } catch (err) {
      console.error('Signup test error:', err.response?.data);
      setStatus(`Signup error: ${JSON.stringify(err.response?.data || err.message)}`);
    } finally {
      setLoading(false);
    }
  };

  const testLogin = async () => {
    setLoading(true);
    setStatus('Testing login with existing user...');
    
    const loginData = {
      email: 'adarshpriydarshi5646@gmail.com',
      password: 'Adarsh@123'
    };

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';
      const response = await axios.post(`${API_URL}/auth/login`, loginData, {
        withCredentials: true,
        timeout: 30000,
        headers: {
          'Content-Type': 'application/json',
        }
      });
      setStatus(`Login successful! ${JSON.stringify(response.data)}`);
    } catch (err) {
      console.error('Login test error:', err);
      setStatus(`Login error: ${JSON.stringify(err.response?.data || err.message)}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Backend Connection Test</h1>
      
      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={testConnection}
          disabled={loading}
          style={{
            padding: '12px 24px',
            marginRight: '10px',
            background: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Test Connection
        </button>
        
        <button 
          onClick={testSignup}
          disabled={loading}
          style={{
            padding: '12px 24px',
            marginRight: '10px',
            background: '#48bb78',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Test Signup API
        </button>
        
        <button 
          onClick={testLogin}
          disabled={loading}
          style={{
            padding: '12px 24px',
            background: '#f56565',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Test Login API
        </button>
      </div>

      {status && (
        <div style={{
          marginTop: '20px',
          padding: '16px',
          background: '#f7fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word'
        }}>
          {status}
        </div>
      )}

      <div style={{ marginTop: '40px', padding: '20px', background: '#fff5f5', borderRadius: '8px' }}>
        <h3>Password Requirements:</h3>
        <ul>
          <li>Minimum 8 characters</li>
          <li>At least one uppercase letter (A-Z)</li>
          <li>At least one lowercase letter (a-z)</li>
          <li>At least one number (0-9)</li>
          <li>At least one special character (!@#$%^&*)</li>
        </ul>
        <p><strong>Example valid password:</strong> Test@123456</p>
      </div>
    </div>
  );
};

export default TestConnection;
