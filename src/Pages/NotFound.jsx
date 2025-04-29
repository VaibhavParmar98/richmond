import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-offWhite flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-9xl font-bold text-burntCopper mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-deepGold mb-4">
          Page Not Found
        </h2>
        <p className="text-burntCopper text-lg mb-8 px-2 md:px-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block bg-deepGold text-offWhite px-6 py-3 rounded-xl shadow-md hover:bg-burntCopper transition duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
