import React, { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const OAuth = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in when the component mounts
    const user = localStorage.getItem('user');
    if (user) {
      navigate('/calendar');
    }
  }, [navigate]);

  const handleLoginSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    setMessage('Login Success');
    // Store user details in localStorage
    localStorage.setItem('user', JSON.stringify(credentialResponse));
    navigate('/calendar');
  };

  const handleLoginFailure = () => {
    console.log('Login Failed');
    setMessage('Login Failed');
  };

  const handleLogout = () => {
    // Remove user details from localStorage
    localStorage.removeItem('user');
    setMessage('Logged Out');
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div>
      <div>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
          theme="outline"
          shape="circle"
          useOneTap
        />
        {message && <p>{message}</p>}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default OAuth;
