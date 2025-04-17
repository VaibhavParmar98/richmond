import React from 'react';

const Help = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full text-white font-marcellus">
      {/* Left box */}
      <div className="bg-champagneBeige w-full sm:w-1/2 text-center flex flex-col items-center justify-center h-48 sm:h-56 p-4">
        <p className="text-base sm:text-lg tracking-widest text-black">give a little, Help a lot</p>
        <h1 className="text-2xl sm:text-3xl tracking-widest text-black">DONATE NOW !</h1>
      </div>

      {/* Right box */}
      <div className="bg-deepMaroon w-full sm:w-1/2 text-center flex items-center justify-center h-48 sm:h-56 p-4">
        <h1 className="text-2xl sm:text-3xl tracking-widest">
          JOIN OUR <br className="hidden sm:block" />
          VOLUNTEER TEAM
        </h1>
      </div>
    </div>
  );
};

export default Help;
