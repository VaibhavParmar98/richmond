import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Slider = () => {
  const slides = [
    { img: "https://iili.io/3VcFbJn.png" },
    { img: "https://iili.io/3VcFmRs.png" },
    { img: "https://iili.io/3VcFsiN.png" },
    { img: "https://iili.io/3VcFiVp.png" },
    { img: "https://iili.io/3VcFQfI.png" },
    { img: "https://iili.io/3VcFZlt.png" },
  ];

  const sliderRef = useRef(null);
  const isInView = useInView(sliderRef, { once: true, margin: "-50px" });

  const slideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: (idx) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: idx * 0.2,
      },
    }),
  };

  return (
    <div className="bg-offWhite flex justify-center items-center">
      <div
        ref={sliderRef}
        className="flex gap-4 flex-wrap md:flex-nowrap justify-center items-center px-4"
      >
        {slides.map((itm, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideVariants}
            className="w-40 sm:w-48 md:w-auto"
          >
            <img
              src={itm.img}
              alt={`slide-${idx}`}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
