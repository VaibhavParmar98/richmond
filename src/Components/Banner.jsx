import React from "react";
import Slider from "react-slick";
import image24 from "../assets/image24.jpg";
import image25 from "../assets/image25.jpg";
import image26 from "../assets/image26.jpg";
import image27 from "../assets/image27.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = ({ className, style, onClick }) => (
  <button
    className={`absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 z-30 bg-black/50 hover:bg-black/80 px-2 sm:px-3 py-1 rounded-full text-white transition-all duration-300 shadow-md backdrop-blur-sm text-sm sm:text-lg`}
    onClick={onClick}
    aria-label="Previous Slide"
  >
    ❮
  </button>
);

const NextArrow = ({ className, style, onClick }) => (
  <button
    className={`absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 z-30 bg-black/50 hover:bg-black/80 px-2 sm:px-3 py-1 rounded-full text-white transition-all duration-300 shadow-md backdrop-blur-sm text-sm sm:text-lg`}
    onClick={onClick}
    aria-label="Next Slide"
  >
    ❯
  </button>
);

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    className: "w-full h-[50vh] sm:h-[60vh] md:h-[70vh] min-h-[350px] font-marcellus",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          autoplaySpeed: 4000,
          arrows: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          autoplaySpeed: 3000,
          arrows: true,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} >
      {/* Slide 1: Coming Soon */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] min-h-[350px] ">
        <img src={image24} alt="Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white px-4 sm:px-6 md:px-8">
          <div className="flex flex-col lg:flex-row justify-between w-full max-w-7xl mx-auto gap-4 sm:gap-8 lg:gap-12">
            <div className="lg:w-1/2 flex flex-col gap-3 sm:gap-4 items-center justify-center text-center lg:text-left">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest">Coming Soon</h1>
              <p className="text-sm sm:text-base md:text-lg font-semibold tracking-wider text-center max-w-md sm:max-w-lg">
                A short message to hype up the community-led transformation and development of an arts corridor.
              </p>
            </div>
            <div className="lg:w-1/2 flex flex-col items-center justify-center text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest text-nowrap">
                Richmond Arts Corridor
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 w-full z-20 text-white text-xs sm:text-sm text-center">
          <p>© FundsnMotion 2025 | All Rights Reserved</p>
        </div>
      </div>

      {/* Slide 2: Community Survey */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] min-h-[350px]">
        <img src={image25} alt="Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-red-900/70 z-10" />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white px-4 sm:px-6 md:px-8">
          <div className="flex flex-col lg:flex-row justify-between w-full max-w-7xl mx-auto gap-4 sm:gap-8 lg:gap-12">
            <div className="lg:w-1/2 flex flex-col gap-3 sm:gap-4 items-center justify-center text-center lg:text-left">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest uppercase text-center">
                Community Survey
              </h1>
              <p className="text-sm sm:text-base md:text-lg font-medium tracking-wide leading-relaxed text-center max-w-md sm:max-w-lg">
                Get your voice heard! Imagine what the Arts Corridor can be — how can we make Richmond the next viral hot spot while being sustainable, and ensure development without displacement.
              </p>
            </div>
            <div className="lg:w-1/2 flex flex-col items-center justify-center text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest text-nowrap">
                Richmond Arts Corridor
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 w-full z-20 text-white text-xs sm:text-sm text-center">
          <p>© FundsnMotion 2025 | All Rights Reserved</p>
        </div>
      </div>

      {/* Slide 3: Conceptual Framework */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] min-h-[350px]">
        <img src={image26} alt="Conceptual Framework" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-blue-900/60 z-10" />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white px-4 sm:px-6 md:px-8">
          <div className="flex flex-col gap-3 sm:gap-4 items-center justify-center text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest uppercase text-center text-nowrap">
              Conceptual Framework
            </h1>
            <p className="text-sm sm:text-base md:text-lg font-medium tracking-wide leading-relaxed text-center max-w-md sm:max-w-lg">
              A conceptual framework of ideas that have been populated by artists and community members to build on!
            </p>
          </div>
        </div>
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 w-full z-20 text-white text-xs sm:text-sm text-center">
          <p>© FundsnMotion 2025 | All Rights Reserved</p>
        </div>
      </div>

      {/* Slide 4: Community Listening Session */}
      <section
      className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] min-h-[400px]"
      aria-labelledby="community-session-heading"
    >
      {/* Optimized Image */}
      <img
        src={image27}
        // srcSet={`${image27} 1200w, ${image27.replace('.jpg', '-medium.jpg')} 800w, ${image27.replace('.jpg', '-small.jpg')} 400w`}
        sizes="(max-width: 600px) 100vw, (max-width: 960px) 80vw, 1200px"
        alt="Community Listening Session"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />
      {/* Main Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-4xl flex flex-col gap-4 sm:gap-6 md:gap-8 items-center text-center">
          <h1
            id="community-session-heading"
            className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold tracking-wide uppercase"
          >
            Community Listening Session Events
          </h1>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-8">
            <div className="flex flex-col gap-3">
              <p className="text-base sm:text-lg md:text-xl md:text-start text-center ">
                Attend an upcoming listening session and share your <br className="md:block hidden" /> voice!
                All events link to an RSVP page.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-1 ml-6 md:ml-0 text-start gap-1  text-sm sm:text-base">
                <p>• Open house style</p>
                <p>• Community gathering</p>
                <p>• Mural building</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 text-sm sm:text-base">
              <div className="tracking-wide text-center sm:text-start">
                Ryse Center
              </div>
              <div className="tracking-wide text-center sm:text-start">
                East Bay Center For Performing Arts
              </div>
              <div className="tracking-wide text-center sm:text-start">
                Richmond Art Center
              </div>
              <div className="tracking-wide text-center sm:text-start">
                Richmond Museum of History and Culture
              </div>
            </div>
          </div>

          {/* Accessible Button */}
          <button
            className="button font-medium text-sm sm:text-base px-6 py-2 md:py-3  md:mb-0"
            style={{ "--clr": "#AA7446" }}
            aria-label="RSVP for Community Listening Session"
          >
            <span className="button__icon-wrapper">
              <svg
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon-svg"
                width="12"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                />
              </svg>
              <svg
                viewBox="0 0 14 15"
                fill="none"
                width="12"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon-svg button__icon-svg--copy"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                />
              </svg>
            </span>
            RSVP Now
          </button>
        </div>
      </div>
      {/* Footer */}
      <div className="absolute bottom-4 w-full z-20 text-white text-xs sm:text-sm text-center">
        <p>© FundsnMotion 2025 | All Rights Reserved</p>
      </div>
    </section>
    </Slider>
  );
};

export default Banner;