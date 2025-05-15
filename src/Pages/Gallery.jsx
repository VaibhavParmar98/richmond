import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Album from "../Components/Album";
import ContactUs from "../Components/ContactUs";
import Slider from "../Components/Slider";
import Started from "../Components/Home/Started";

const Gallery = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const contentInView = useInView(contentRef, { once: true, margin: "-50px" });

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

  return (
    <div className="bg-white font-marcellus">
      <motion.div
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="relative"
      >
        <img
          src="https://iili.io/3VEmtTv.md.png"
          alt="about banner"
          className="w-full h-[50vh] max-md:object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center">
          <h1 className="text-white text-4xl font-bold tracking-widest">
            Gallery
          </h1>
          <p className="text-white tracking-widest">Home / Gallery</p>
        </div>
      </motion.div>

      <motion.div
        ref={contentRef}
        initial="hidden"
        animate={contentInView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <Album />
        <ContactUs />
        <Slider />
      <div className="mt-8">
          <Started />
</div> 
      </motion.div>
    </div>
  );
};

export default Gallery;
