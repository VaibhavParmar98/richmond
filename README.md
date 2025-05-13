import React, { useContext } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const OAuth = () => {
  const { login, logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Google login handler with default (non-sensitive) scopes
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        // Decode ID token
        const decoded = jwtDecode(tokenResponse.credential || tokenResponse.id_token);
        const accessToken = tokenResponse.access_token;

        const userEmail = decoded.email;

        // Save user and token to context
        login({ ...decoded }, accessToken);

        // Navigate based on user email
        if (userEmail === 'designingroom1@gmail.com') {
          navigate('/calendar');
        } else {
          navigate('/event');
        }
      } catch (error) {
        console.error('Login processing failed', error);
      }
    },
    onError: () => console.log('Google Login Failed'),
    // NO sensitive scopes like calendar.readonly, to avoid Google verification warning
  });

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
        <button
  onClick={(e) => {
    e.preventDefault(); // Prevent form submission behavior
    googleLogin();
  }}
  className="bg-blue-600 text-white font-semibold w-full p-3 rounded-full hover:bg-blue-700 transition duration-300"
>
  Sign in with Google
</button>

      )}
    </div>
  );
};

export default OAuth;


      const decoded = jwtDecode(credentialResponse.credential);

