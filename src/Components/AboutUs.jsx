import React, { useRef } from "react";
import {
  FaLightbulb,
  FaProjectDiagram,
  FaCog,
  FaHandHoldingUsd,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import image4 from "../assets/image4.png";
import image6 from "../assets/image6.png";

const items = [
  {
    icon: <FaLightbulb className="text-3xl sm:text-3xl p-1.5 bg-burntCopper rounded-full text-white" />,
    title: "Showcase Your Talent",
    desc: "Gain visibility and recognition by displaying your artwork to a broader audience.",
  },
  {
    icon: <FaProjectDiagram className="text-3xl sm:text-3xl p-1.5 bg-burntCopper rounded-full text-white" />,
    title: "Connect with the Community",
    desc: "Build meaningful relationships with fellow artists, enthusiasts, and supporters.",
  },
  {
    icon: <FaCog className="text-3xl sm:text-3xl p-1.5 bg-burntCopper rounded-full text-white" />,
    title: "Enhance Your Skills",
    desc: "Participate in workshops and events to develop and refine your artistic abilities.",
  },
  {
    icon: <FaHandHoldingUsd className="text-3xl sm:text-3xl p-1.5 bg-burntCopper rounded-full text-white" />,
    title: "Sell and Earn",
    desc: "Monetize your creativity by selling your artwork directly to art lovers.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const AboutUs = () => {
  const stat1Ref = useRef(null);
  const stat2Ref = useRef(null);
  const stat1InView = useInView(stat1Ref, { once: true });
  const stat2InView = useInView(stat2Ref, { once: true });

  return (
    <div>
      <div className="max-w-7xl mx-auto font-marcellus py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-20">
          <div className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-6">
          <div className="flex flex-col gap-2 items-center text-center md:items-start md:text-left">
  <p className="text-xs sm:text-sm uppercase">about us</p>
  <h2 className="text-2xl sm:text-3xl md:text-3xl">
    Fostering Creativity, Connecting <br className="hidden md:block" /> Communities, Inspiring Growth 🌟
  </h2>
  <p className="text-sm sm:text-[14px] leading-5">
    We empower local artists by providing a platform to showcase
    their work, connect with the community, and inspire creativity.
  </p>
</div>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
              {items.map((itm, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="flex gap-3 sm:gap-4"
                >
                  <span className="font-xl">{itm.icon}</span>
                  <div className="flex flex-col gap-1 sm:gap-2">
                    <h1 className="font-medium text-[18px] sm:text-[16px]">
                      {itm.title}
                    </h1>
                    <p className="text-base sm:text-[14px] leading-5">{itm.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8 text-base sm:text-base justify-center items-center sm:justify-start sm:items-start">
            <button className="button hover:border  text-base hover:text-deepMaroon font-medium bg-deepMaroon hover:bg-black" style={{ "--clr": "#AA7446" }}>
                <span className="button__icon-wrapper hover:text-black text-deepMaroon">
                  <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg" width="10">
                    <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                  </svg>
                  <svg viewBox="0 0 14 15" fill="none" width="10" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg button__icon-svg--copy">
                    <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                  </svg>
                </span>
                More Donation
              </button>

              <button className="button text-base hover:border font-medium bg-burntCopper hover:bg-black" style={{ "--clr": "#AA7446" }}>
                <span className="button__icon-wrapper">
                  <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg" width="10">
                    <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                  </svg>
                  <svg viewBox="0 0 14 15" fill="none" width="10" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg button__icon-svg--copy">
                    <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                  </svg>
                </span>
                Contact Us
              </button>
</div>


          </div>

          <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-4 sm:gap-6 mt-6 md:mt-0">
  <motion.img
    variants={fadeLeft}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.8 }}
    src={image4}
    className="w-full h-60 md:h-full sm:w-full md:w-1/2 mt-4 md:mt-6 object-cover rounded-xl"
  />
  <div className="flex flex-col gap-4 sm:gap-6">
    <motion.img
      variants={fadeLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      src={image6}
      className="w-full sm:w-full md:w-64 h-60 sm:h-48 md:h-52 object-cover rounded-xl"
    />
   <div className="flex flex-col gap-4 sm:gap-10 sm:mt-16 ml-0 md:ml-10">
  <motion.div
    key={0}
    ref={stat1Ref}
    initial={{ opacity: 0, y: 20 }}
    animate={stat1InView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8 }}
    className="flex flex-col gap-2 sm:gap-4"
  >
    <h1 className="text-xl sm:text-3xl font-semibold text-center md:text-start">500+</h1>
    <p className="text-sm sm:text-[14px] leading-5 text-center md:text-start">
      Empowering creative talents by showcasing their work.
    </p>
  </motion.div>

  <motion.div
    key={1}
    ref={stat2Ref}
    initial={{ opacity: 0, y: 20 }}
    animate={stat2InView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8 }}
    className="flex flex-col gap-2 sm:gap-4"
  >
    <h1 className="text-xl sm:text-3xl font-semibold text-center md:text-start">10,000+</h1>
    <p className="text-sm sm:text-[14px] leading-5 text-center md:text-start">
      Building a thriving network of artists and supporters.
    </p>
  </motion.div>
</div>

  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
