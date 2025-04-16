import React from "react";
import { GiChurch, GiPrayer } from "react-icons/gi";
import { FaHandHoldingHeart, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const OurMinisters = () => {
  const items = [
    {
      icons: <FaHandHoldingHeart />,
      title: "What we believe",
      desc: "In nurturing local talent, fostering creativity, and building a vibrant community where artists thrive, inspire, and connect with a wider audience.",
    },
    {
      icons: <GiChurch />,
      title: "What to expect",
      desc: "Explore diverse artwork, engage with talented artists, participate in inspiring events, and become part of a supportive community that celebrates creativity.",
    },
    {
      icons: <GiPrayer />,
      title: "Art History",
      desc: "Explore the evolution of styles, techniques, and cultural influences that have shaped the vibrant world of art today.",
    },
    {
      icons: <FaUsers />,
      title: "Meeting Events",
      desc: "Connect with artists, enthusiasts, and industry experts through inspiring events that foster collaboration, creativity, and community growth.",
    },
  ];

  return (
    <div className="bg-deepMaroon">
      <div className="max-w-6xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center font-marcellus justify-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center flex flex-col gap-2"
        >
          <p className="text-xs sm:text-sm">OUR MINISTRIES</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl">Empowering Faith, Embracing Diversity</h1>
        </motion.div>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8 sm:mt-10">
  {items.map((itm, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.2 }}
      className="flex flex-col gap-3 sm:gap-4 border p-4 sm:py-8 w-full sm:w-56 md:w-60 h-auto min-h-56 sm:h-60 justify-center md:justify-start md:items-start items-center" 
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1], delay: idx * 0.2 + 0.1 }}
        className="text-3xl sm:text-3xl"
      >
        {itm.icons}
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.2 + 0.2 }}
        className="text-base sm:text-lg"
      >
        {itm.title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.2 + 0.3 }}
        className="text-sm sm:text-[14px] leading-5 text-center md:text-start"
      >
        {itm.desc}
      </motion.p>
    </motion.div>
  ))}
</div>
<motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          className="button text-base font-medium bg-burntCopper hover:bg-black mt-10"
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }} style={{ "--clr": "#AA7446" }}>
                <span className="button__icon-wrapper">
                  <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg" width="10">
                    <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                  </svg>
                  <svg viewBox="0 0 14 15" fill="none" width="10" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg button__icon-svg--copy">
                    <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                  </svg>
                </span>
                Contact Us
              </motion.button>

        
      </div>
    </div>
  );
};

export default OurMinisters;
