import React, { useContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const OAuth = () => {
  const { login, logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const accessToken = tokenResponse.access_token;

        const res = await fetch(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const userInfo = await res.json();

        login(userInfo, accessToken);

        if (userInfo.email === "designingroom1@gmail.com") {
          navigate("/calendar");
        } else {
          navigate("/event");
        }
      } catch (error) {
        console.error("Failed to fetch user info or process login:", error);
      }
    },
    onError: () => {
      console.error("Google Login Failed");
    },
  });

  const handleLogout = () => {
    logout();
    navigate("/signup");
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
    e.preventDefault();
    handleGoogleLogin();
  }}
  className="border cursor-pointer hover:bg-blue-600 hover:text-white border-black text-lg flex items-center justify-center gap-3 text-black tracking-wider w-full p-2 rounded-full transition duration-300"
>
  <img
    src="https://iili.io/3S9ZHqG.png"
    alt="Google logo"
    className="w-6 h-6"
  />
  <span>Sign in with Google</span>
</button>

      )}
    </div>
  );
};

export default OAuth;
