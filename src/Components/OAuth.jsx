import React, { useContext } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const OAuth = () => {
  const { login, logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginSuccess = async (credentialResponse) => {
    try {
      // Decode ID token to get user info
      const decoded = jwtDecode(credentialResponse.credential);
      const userEmail = decoded.email;

      // Access token should be available in credentialResponse
      const accessToken = credentialResponse.access_token;

      // Store user info and access token
      login({ ...decoded }, accessToken);

      // Navigate based on email
      if (userEmail === 'krunalpanchalkp2123@gmail.com') {
        navigate('/calendar');
      } else {
        navigate('/event');
      }
    } catch (error) {
      console.error('Login processing failed', error);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/signup');
  };

  return (
    <div className="font-marcellus">
      {user ? (
        <button
          onClick={handleLogout}
          className="bg-red-500 cursor-pointer hover:bg-black transition-all duration-500 text-white w-full p-3 rounded-full"
        >
          Logout
        </button>
      ) : (
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={() => console.log('Login Failed')}
          scope="https://www.googleapis.com/auth/calendar.readonly"
          access_type="offline"
          className="cursor-pointer rounded-full"
        />
      )}
    </div>
  );
};

export default OAuth;