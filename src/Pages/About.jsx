import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaHandHoldingHeart, FaUsers } from "react-icons/fa";
import { MdBrush, MdSchool, MdArtTrack, MdEvent } from "react-icons/md";
import { GiChurch, GiPrayer } from "react-icons/gi";
import Team from "../Components/Home/Team";
import ContactUs from "../Components/ContactUs";
import Slider from "../Components/Slider";
import Started from "../Components/Home/Started";

const About = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const empoweringRef = useRef(null);
  const churchRef = useRef(null);
  const ministriesRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const aboutInView = useInView(aboutRef, { once: true, margin: "-50px" });
  const empoweringInView = useInView(empoweringRef, {
    once: true,
    margin: "-50px",
  });
  const churchInView = useInView(churchRef, { once: true, margin: "-50px" });
  const ministriesInView = useInView(ministriesRef, {
    once: true,
    margin: "-50px",
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: (idx) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: idx * 0.2 },
    }),
  };

  const items = [
    {
      icons: <FaHandHoldingHeart />,
      title: "Our Mission",
      desc: "Empowering local artists by providing platforms to showcase, grow, and inspire communities.",
    },
    {
      icons: <GiChurch />,
      title: "Our Vision",
      desc: "Transforming Richmond into a thriving hub where art and culture connect.",
    },
    {
      icons: <GiPrayer />,
      title: "Our Passion",
      desc: "Promoting creativity while preserving heritage and fostering community for artistic expressions.",
    },
    {
      icons: <FaUsers />,
      title: "The Institutions",
      desc: "Collaborating with institutions to amplify artistic voices and strengthen cultural connections.",
    },
  ];

  const chrucs = [
    {
      icon: (
        <MdBrush className="text-3xl sm:text-3xl p-1.5 bg-burntCopper rounded-full text-white" />
      ),
      title: "Supporting Local Artists",
      desc: "We provide platforms for artists to showcase their creativity and connect with communities.",
    },
    {
      icon: (
        <MdSchool className="text-3xl sm:text-3xl p-1.5 bg-burntCopper rounded-full text-white" />
      ),
      title: "Community Workshops",
      desc: "Engaging locals through hands-on workshops that promote learning and artistic exploration.",
    },
    {
      icon: (
        <MdArtTrack className="text-3xl sm:text-3xl p-1.5 bg-burntCopper rounded-full text-white" />
      ),
      title: "Public Art Installations",
      desc: "Transforming public spaces with murals and installations that reflect Richmond’s culture.",
    },
    {
      icon: (
        <MdEvent className="text-3xl sm:text-3xl p-1.5 bg-burntCopper rounded-full text-white" />
      ),
      title: "Cultural Events",
      desc: "Hosting events that celebrate diversity, creativity, and bring the community together.",
    },
  ];

  const slides = [
    {
      image: "https://iili.io/3V5f6ZB.png",
      name: "Art in the Park",
    },
    {
      image: "https://iili.io/3V5fiCP.png",
      name: "Voices of Richmond",
    },
    {
      image: "https://iili.io/3V5fsG1.png",
      name: "Gallery Nights",
    },
    {
      image: "https://iili.io/3V5ftaa.png",
      name: "Youth Art Explosion",
    },
  ];

  return (
    <>
      <div className="bg-white font-marcellus">
        <motion.div
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="relative"
        >
          <img
            src="https://iili.io/3V5fZ3g.png"
            alt="about banner"
            className="w-full h-[50vh] max-md:object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center max-md:gap-4">
            <h1 className="text-white text-4xl font-bold tracking-widest max-md:text-2xl max-md:text-center max-[480px]:text-[1.5rem]">
              About Us
            </h1>
            <p className="text-white tracking-widest max-md:text-[0.9rem] max-[480px]:text-[0.8rem]">
              Home / About Us
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={aboutRef}
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="max-w-6xl mx-auto flex md:flex-col lg:flex-row xl:flex-row xl:gap-4 lg:gap-32 lg:px-4 xl:px-0 md:px-6 py-20 items-center justify-center max-md:flex-col max-md:p-4 max-md:py-8 max-[480px]:p-2 max-[480px]:py-6"
        >
          <div className="flex lg:w-1/2 xl:w-1/2 md:w-full w-full lg:justify-start xl:justify-start justify-center">
            <div className="lg:relative xl:relative flex flex-col md:flex-row items-center">
              <img
                src="https://iili.io/3V5fSvj.png"
                alt="main"
                className="w-80 h-96 max-md:w-full max-md:h-auto max-md:max-w-[300px] max-[480px]:max-w-[250px]"
              />
              <img
                src="https://iili.io/3V5f8Yb.png"
                alt="overlay"
                className="w-80 h-96 lg:absolute xl:absolute top-12 left-56 max-md:relative max-md:top-0 max-md:left-0 max-md:mt-4 max-md:w-full max-md:h-auto max-md:max-w-[300px] max-[480px]:max-w-[250px]"
              />
            </div>
          </div>

          <div className="lg:w-1/2 xl:w-1/2 w-full mt-6 flex flex-col gap-3 justify-center max-md:w-full max-md:p-4">
            <p className="text-sm text-center  lg:text-left xl:lg:text-left uppercase">
              ABOUT US
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-3xl text-center  lg:text-left xl:lg:text-left">
              Empowering Local Creativity, Connecting Communities, Inspiring
              Growth, and Fostering Inclusion
            </h1>
            <p className="text-sm sm:text-[14px] leading-5 text-center  lg:text-left xl:lg:text-left">
              At Richmond Arts Corridor, we are dedicated to celebrating and
              uplifting the vibrant artistic voices of Richmond. Our mission is
              to provide local artists with a platform to showcase their talent,
              connect with art enthusiasts, and build a thriving creative
              community.
            </p>
            <p className="flex flex-col gap-2 text-sm sm:text-[14px] leading-5 text-center  lg:text-left xl:lg:text-left">
              <span>Our Vision ✨</span> To transform Richmond into a dynamic
              hub where artists can express themselves, gain recognition, and
              inspire future generations.
            </p>
            <p className="flex flex-col gap-2 text-sm sm:text-[14px] leading-5 text-center  lg:text-left xl:lg:text-left">
              <span>What We Do 🎭</span>
              we aim to cultivate a thriving artistic environment where local
              creators can showcase their talents, connect with the community,
              and inspire.
            </p>
            <div className="flex items-center justify-center lg:items-start lg:justify-start  ">
            <motion.button
                     initial={{ opacity: 0, scale: 0.8 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true, amount: 0.4 }}
                     className="button border text-base flex items-center justify-center w-40 font-medium bg-blue hover:bg-black mt-4"
                     transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                     style={{ "--clr": "#00B3FF" }}
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
                         />
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
                         />
                       </svg>
                     </span>
                     About Us
                   </motion.button>
            </div>
            
          </div>
        </motion.div>

        <motion.div
          ref={empoweringRef}
          initial="hidden"
          animate={empoweringInView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="max-w-6xl md:px-6 px-0  mx-auto md:py-10 py-6"
        >
          <div className="flex max-md:flex-col max-md:p-4 gap-3">
            <h1 className="text-2xl sm:text-3xl md:text-3xl w-1/2 max-md:w-full max-md:text-center">
              Empowering Local Artists, Connecting Communities, Celebrating
              Creativity
            </h1>
            <p className="text-sm sm:text-[14px] leading-5 w-1/2 max-md:w-full text-center md:text-left">
              We provide a platform for local artists to showcase their talent,
              engage with communities, and foster lasting connections that
              inspire creativity, celebrate diversity, and strengthen Richmond’s
              cultural landscape.
            </p>
          </div>
          <div className="lg:flex lg:flex-row xl:flex-row xl:flex md:grid md:grid-cols-2 flex flex-col items-center justify-center lg:justify-between xl:justify-between lg:py-10 py-3 gap-2  mt-8 ">
            {items.map((itm, idx) => (
              <motion.div
                key={idx}
                onClick={() => setSelectedIndex(idx)}
                custom={idx}
                initial="hidden"
                animate={empoweringInView ? "visible" : "hidden"}
                variants={itemVariants}
                className={`flex flex-col gap-3 sm:gap-4 cursor-pointer p-4 sm:py-8 w-full sm:w-56 md:w-60 h-auto min-h-56 sm:h-60 justify-center md:justify-start md:items-start items-center rounded-4xl transition-colors duration-300 max-md:w-full max-md:max-w-[300px] max-md:mb-4
                  ${
                    selectedIndex === idx
                      ? "bg-black text-white"
                      : "bg-offWhite text-black"
                  }`}
              >
                <motion.span
                  custom={idx}
                  initial="hidden"
                  animate={empoweringInView ? "visible" : "hidden"}
                  variants={itemVariants}
                  className={`text-3xl sm:text-3xl text-gradis ${
                    selectedIndex === idx ? "text-white" : ""
                  }`}
                >
                  {itm.icons}
                </motion.span>
                <motion.h1
                  custom={idx}
                  initial="hidden"
                  animate={empoweringInView ? "visible" : "hidden"}
                  variants={itemVariants}
                  className={`text-base sm:text-lg text-center md:text-start ${
                    selectedIndex === idx ? "text-white" : ""
                  }`}
                >
                  {itm.title}
                </motion.h1>
                <motion.p
                  custom={idx}
                  initial="hidden"
                  animate={empoweringInView ? "visible" : "hidden"}
                  variants={itemVariants}
                  className={`text-sm sm:text-[14px] leading-5 text-center md:text-start text-gradis ${
                    selectedIndex === idx ? "text-white" : ""
                  }`}
                >
                  {itm.desc}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          ref={churchRef}
          initial="hidden"
          animate={churchInView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="bg-champagneBeige py-10"
        >
          <div className="max-w-6xl mx-auto flex-col lg:flex-row xl:flex-row px-6 lg:px-6 xl:px-0 flex gap-20 items-center justify-center max-md:flex-col max-md:gap-8 max-md:p-4 max-md:py-8">
            <div className="flex flex-col gap-6 lg:w-1/2 xl:w-1/2 w-full max-md:items-center">
              <p className="text-sm uppercase text-center  lg:text-left xl:lg:text-left">WHAT WE DO IN CHURCH</p>
              <h1 className="text-2xl sm:text-3xl md:text-3xl text-center  lg:text-left xl:lg:text-left">
                The church is the people of God{" "}
                <br className="hidden md:block" />
                within the world being agents <br className="hidden md:block" />
                of hope
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6 bg-cover bg-center bg-no-repeat max-md:grid-cols-1">
                {chrucs.map((itm, idx) => (
                  <motion.div
                    key={idx}
                    custom={idx}
                    initial="hidden"
                    animate={churchInView ? "visible" : "hidden"}
                    variants={itemVariants}
                    className="flex gap-3 sm:gap-4"
                  >
                    <span className="font-xl">{itm.icon}</span>
                    <div className="flex flex-col gap-1 sm:gap-2">
                      <h1 className="font-medium text-[18px] sm:text-[16px]">
                        {itm.title}
                      </h1>
                      <p className="text-base sm:text-[14px] leading-5 max-[480px]:text-[0.85rem]">
                        {itm.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex items-center justify-center lg:items-start lg:justify-start  ">
            <motion.button
                     initial={{ opacity: 0, scale: 0.8 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true, amount: 0.4 }}
                     className="button border text-base flex items-center justify-center w-40 font-medium bg-blue hover:bg-black mt-4"
                     transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                     style={{ "--clr": "#00B3FF" }}
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
                         />
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
                         />
                       </svg>
                     </span>
                     Contact Us
                   </motion.button>
            </div>
            </div>
            <motion.div
              custom={0}
              initial="hidden"
              animate={churchInView ? "visible" : "hidden"}
              variants={itemVariants}
              className="lg:w-1/2 xl:w-1/2 w-full flex items-center justify-center"
            >
              <img
                src="https://iili.io/3V5fUyx.png"
                alt=""
                className="w-[550px] h-[500px] max-md:w-full max-md:h-auto max-md:max-w-[400px] max-md:mx-auto"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          ref={ministriesRef}
          initial="hidden"
          animate={ministriesInView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="bg-black py-20 md:px-6 px-0 xl:px-0"
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center  gap-6 max-md:flex-col max-md:items-center max-md:text-center max-md:gap-8">
            <div className="flex flex-col gap-3 text-white text-center md:text-left">
              <p className="text-sm uppercase tracking-wide">OUR MINISTRIES</p>
              <h1 className="text-2xl sm:text-3xl md:text-3xl leading-tight">
                Celebrating Local Art, Inspiring{" "}
                <br className="hidden md:block" /> Communities
              </h1>
            </div>
            <button
              className="button text-base hover:border font-medium md:mb-0 mb-4 bg-blue hover:bg-black max-md:w-full max-md:max-w-[200px] max-md:mx-auto"
              style={{ "--clr": "#00B3FF" }}
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
                  />
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
                  />
                </svg>
              </span>
              View All Events
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-10 max-md:grid-cols-1 max-md:gap-8 max-md:p-4">
            {slides.map((itm, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                animate={ministriesInView ? "visible" : "hidden"}
                variants={itemVariants}
                className="relative group flex flex-col items-center gap-4"
              >
                <div className="relative overflow-hidden rounded-md cursor-pointer">
                  <img
                    src={itm.image}
                    alt={itm.name}
                    className="w-72 h-64 object-cover transition-transform duration-300 group-hover:scale-110 max-md:w-full max-md:h-auto max-md:max-w-[300px]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center">
                      <p className="text-white text-sm">Read More</p>
                    </div>
                  </div>
                </div>
                <p className="text-lg text-center text-white max-[480px]:text-base">
                  {itm.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div>
          <Team />
          <ContactUs />
          <Slider />
          <Started />
        </div>
      </div>
    </>
  );
};

export default About;
