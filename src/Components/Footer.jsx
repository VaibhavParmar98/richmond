import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa";
import image20 from '../assets/image20.png';
import { motion } from "framer-motion";

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay } },
  viewport: { once: true, amount: 0.2 },
});

const scaleInStagger = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "backOut", staggerChildren: 0.1 } },
  viewport: { once: true, amount: 0.2 },
};

const Footer = () => {
  return (
    <>
      <div className="bg-champagneBeige py-12 sm:py-16 md:py-20">
        <div className="max-w-full sm:max-w-5xl md:max-w-6xl mx-auto px-4 sm:px-6 md:px-0 flex flex-col md:flex-row md:items-center md:justify-between gap-8 sm:gap-10">
          <motion.div {...fadeInUp(0)} className="flex flex-col gap-6 sm:gap-8 w-full md:w-auto">
            <div className="flex gap-1 items-center justify-center md:justify-start">
              <img src={image20} alt="" className="w-8 sm:w-9 h-8 sm:h-9" />
              <p className="flex flex-col font-bold text-lg sm:text-2xl">
                Richmond
                <span className="text-[8px] sm:text-[9px] font-medium text-oldLavender">
                  Richmond Arts Corridor
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-8 sm:gap-6 font-marcellus">
            <p className="text-[14px] leading-5 text-center md:text-start">
  Discover Richmond’s thriving arts scene! Engage with local talent, 
  <br className="md:block hidden" />
  support cultural initiatives, and contribute to a vibrant community. 
  <br className="md:block hidden" />
  Join us in celebrating creativity, preserving heritage, and shaping <br className="md:block hidden" /> a 
  brighter future through the arts.
</p>
              <motion.span {...scaleInStagger} className="flex items-center gap-2 sm:gap-3 justify-center md:justify-start text-burntCopper text-lg sm:text-xl">
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaYoutube />
              </motion.span>
            </div>
          </motion.div>

          <motion.div {...fadeInUp(0.2)} className="flex  flex-col gap-4 sm:gap-8 font-marcellus w-full md:w-auto">
  <label className="text-lg  sm:text-xl md:text-xl font-semibold text-burntCopper">
    Navigation
  </label>
  <motion.ul {...fadeInUp(0.3)} className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm md:text-sm">
    {["About", "Talks", "Event", "Shop List", "Gallery", "Faqs", "Tickets", "Blog", "Artist", "Testimonials"].map((item, index) => (
      <motion.li key={index} {...fadeInUp(0.3 + index * 0.1)} className="flex gap-2 items-center">
        <span>
          <FaCaretRight className="text-burntCopper" />
        </span>
        {item}
      </motion.li>
    ))}
  </motion.ul>
</motion.div>


          <motion.div {...fadeInUp(0.4)} className="flex flex-col gap-4 sm:gap-8 font-marcellus w-full md:w-80">
            <label className="text-lg sm:text-xl md:text-xl font-semibold text-burntCopper">
              Newsletter
            </label>
            <form className="flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm md:text-sm">
              <motion.input {...fadeInUp(0.5)} type="text" className="p-1.5 sm:p-2 bg-white text-burntCopper rounded-3xl" placeholder="Your Name" />
              <motion.input {...fadeInUp(0.6)} type="text" className="p-1.5 sm:p-2 bg-white text-burntCopper rounded-3xl" placeholder="Your Email" />
              <motion.button {...fadeInUp(0.7)} className="uppercase hover:bg-black transition-all duration-300 p-1.5 sm:p-2 bg-burntCopper text-white rounded-3xl cursor-pointer">
                subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      <motion.div {...fadeInUp(0.8)} className="text-center p-2 sm:p-3 bg-burntCopper text-white font-marcellus text-xs sm:text-sm md:text-sm">
        <p>Richmond Renaissance | © 2025 All rights reserved</p>
      </motion.div>
    </>
  );
};

export default Footer;
