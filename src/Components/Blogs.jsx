import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Slider from "react-slick";
import image9 from '../assets/image9.png';
import image11 from '../assets/image11.png';
import image10 from '../assets/image10.png';
import image12 from '../assets/image12.png';

const Blogs = () => {
  const items = [
    {
      img: image9,
      date: "March 21, 2024",
      title: "Exploring Emerging Trends in Local Art",
      button: "Read More",
    },
    {
      img: image11,
      date: "March 21, 2024",
      title: "Tips to Support and Promote Local Artists",
      button: "Read More",
    },
    {
      img: image10,
      date: "March 21, 2024",
      title: "Artist Spotlight: Inspiring Journeys and Stories",
      button: "Read More",
    },
    {
      img: image12,
      date: "March 21, 2024",
      title: "Upcoming Art Events You Can’t Miss",
      button: "Read More",
    },
  ];

  const headerRef = useRef(null);
  const buttonRef = useRef(null);
  const dividerRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });
  const isButtonInView = useInView(buttonRef, { once: true, margin: "-50px" });
  const isDividerInView = useInView(dividerRef, { once: true, margin: "-50px" });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    dotsClass: "slick-dots custom-dots", 
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto font-marcellus px-4 sm:px-6 md:px-0">
        <div className="flex flex-col md:flex-row md:justify-between justify-center items-center md:items-center gap-4 sm:gap-6">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-2 sm:gap-3"
          >
            <p className="text-xs sm:text-sm text-center md:text-start">BRIDGES</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-center md:text-start">Latest news & Blogs</h1>
          </motion.div>

          <motion.button
            ref={buttonRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isButtonInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.68, -0.55, 0.265, 1.55] }}
            className="button bg-burntCopper hover:bg-black w-44 font-medium hover:border"
            style={{ "--clr": "#AA7446" }}
          >
            <span className="button__icon-wrapper">
              <svg
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon-svg"
                width="10"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                ></path>
              </svg>

              <svg
                viewBox="0 0 14 15"
                fill="none"
                width="10"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon-svg button__icon-svg--copy"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            More Blogs
          </motion.button>
        </div>

        <motion.div
          ref={dividerRef}
          initial={{ width: "0%" }}
          animate={isDividerInView ? { width: "100%" } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="border-b-0 border mt-8 sm:mt-10"
        />

        <div className="md:hidden mt-8 sm:mt-12 md:mt-16">
          <Slider {...sliderSettings}>
            {items.map((itm, idx) => (
              <div key={idx}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <img
                    src={itm.img}
                    alt={itm.title}
                    className="w-full sm:w-40 md:w-48 h-auto sm:h-36 md:h-40 rounded-md"
                  />
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <p className="date text-xs sm:text-sm">{itm.date}</p>
                    <h1 className="text-lg sm:text-xl">{itm.title}</h1>
                    <button className="text-sm font-bold hover:underline text-left hover:text-deepMaroon text-burntCopper">
                      {itm.button}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-10 md:gap-16 mt-8 sm:mt-12 md:mt-16">
          {items.map((itm, idx) => {
            const cardRef = useRef(null);
            const isInView = useInView(cardRef, { once: true, margin: "-50px" });

            return (
              <div
                key={idx}
                ref={cardRef}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <motion.img
                  src={itm.img}
                  alt={itm.title}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full sm:w-40 md:w-48 h-auto sm:h-36 md:h-40 rounded-md"
                />
                <div className="flex flex-col gap-3 sm:gap-4">
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    className="date text-xs sm:text-sm"
                  >
                    {itm.date}
                  </motion.p>
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                    className="text-lg sm:text-xl"
                  >
                    {itm.title}
                  </motion.h1>
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, ease: [0.68, -0.55, 0.265, 1.55], delay: 0.4 }}
                    className="text-sm font-bold hover:underline text-left hover:text-deepMaroon text-burntCopper"
                  >
                    {itm.button}
                  </motion.button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
