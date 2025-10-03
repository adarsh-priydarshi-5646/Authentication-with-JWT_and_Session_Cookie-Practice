import { useState } from 'react';
import axios from 'axios';

const TestConnection = () => {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const testConnection = async () => {
    setLoading(true);
    setStatus('Testing connection...');
    
    try {
      // Test basic connection
      const response = await axios.get('http://localhost:8080/auth/test', {
        withCredentials: true,
      });
      setStatus('Backend connection successful!');
    } catch (err) {
      if (err.code === 'ERR_NETWORK') {
        setStatus('Cannot connect to backend. Make sure backend is running on port 8080');
      } else if (err.response?.status === 404) {
        setStatus('Backend is running! (404 is expected for test route)');
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
      const response = await axios.post('http://localhost:8080/auth/signup', testUser, {
        withCredentials: true,
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
            background: '#48bb78',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Test Signup API
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
