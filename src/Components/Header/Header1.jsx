import React, { useContext } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header1 = () => {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleLogout = () => {
    logout();
   navigate('/signup')
  };

  return (
    <div className="bg-black p-3 text-white font-marcellus">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs gap-4">
        <div className="text-center md:text-left">
          <p className="">Call us: +01 856 214 3699 | richmondarts@admin.com</p>
        </div>

        <div className="text-center md:text-right">
          <p className="flex items-center justify-center md:justify-end gap-2">
            Follow Us:{" "}
            <span className="flex items-center gap-2">
              <FaFacebook className="text-lg cursor-pointer" />
              <FaInstagram className="bg-white text-black cursor-pointer text-lg p-1 rounded-full" />
              <FaTwitter className="bg-white text-black cursor-pointer text-lg p-1 rounded-full" />
              <FaYoutube className="bg-white text-black cursor-pointer text-lg p-1 rounded-full" />
            </span>
          </p>
        </div>

        {user ? (
          <button
            onClick={handleLogout}
            className="mr-10 hover:bg-white hover:text-black px-3 py-1 cursor-pointer rounded"
          >
            Logout
          </button>
        ) : (
          <div className="text-center">
            <p>Join Us Sunday @ 9:00 AM for Special Events!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header1;
