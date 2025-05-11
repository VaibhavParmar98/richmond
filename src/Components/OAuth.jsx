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
      const decoded = jwtDecode(credentialResponse.credential);
      const userEmail = decoded.email;

      const tokenClient = window.google.accounts.oauth2.initTokenClient({
        client_id: '605770440984-mfvrhp6o7a2siv9k8nmm833ah17uuuf2.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/calendar.readonly',
        callback: (tokenResponse) => {
          const accessToken = tokenResponse.access_token;
          login({ ...decoded }, accessToken); // store accessToken
          if (userEmail === 'krunalpanchalkp2123@gmail.com') {
            navigate('/calendar');
          } else {
            navigate('/event');
          }
        },
      });

      tokenClient.requestAccessToken();
    } catch (error) {
      console.error('Login processing failed', error);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/signup');
  };

  return (
    <div className='font-marcellus '>
      {user ? (
        <button onClick={handleLogout} className="bg-red-500  cursor-pointer hover:bg-black transition-all duration-500 text-white w-full p-3 rounded-full">
          Logout
        </button>
      ) : (
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={() => console.log('Login Failed')}
          className='cursor-pointer rounded-full'
        />
      )}
    </div>
  );
};

export default OAuth;
