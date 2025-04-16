import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TestimonialSection from "./TestimonialSection ";
import image13 from '../assets/image13.png';
import frame1 from '../assets/Frame1.png';

const Community = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const smallImageRef = useRef(null);
  const largeImageRef = useRef(null);
  const testimonialRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });
  const isSmallImageInView = useInView(smallImageRef, { once: true, margin: "-50px" });
  const isLargeImageInView = useInView(largeImageRef, { once: true, margin: "-50px" });
  const isTestimonialInView = useInView(testimonialRef, { once: true, margin: "-50px" });

  return (
    <div ref={sectionRef} className="bg-deepMaroon py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto font-marcellus px-4 sm:px-6 md:px-0 flex flex-col md:flex-row md:gap-20 gap-6 sm:gap-10">
        <div className="flex flex-col w-full">
          <div ref={headerRef} className="flex flex-col md:flex-row md:justify-between gap-4 sm:gap-6">
            <div className="text-white flex flex-col gap-3 sm:gap-4">
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-xs sm:text-sm  text-center md:text-start"
              >
                What Our Community Says
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl text-center md:text-start"
              >
                Voices of Appreciation, <br /> Trust, and Inspiration
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="text-xs sm:text-[14px] leading-5 text-center md:text-start"
              >
                Hear from artists, art lovers, and supporters who have experienced the impact of our platform. Their stories highlight the value of nurturing local talent and fostering a creative community.
              </motion.p>
            </div>

            <motion.div
              ref={smallImageRef}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isSmallImageInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.68, -0.55, 0.265, 1.55] }}
              className="mt-4 md:mt-0"
            >
              <img
                src={frame1}
                alt=""
                className=" h-20 w-20 max-w-24 sm:max-w-32 md:max-w-none mx-auto  "
              />
            </motion.div>
          </div>

          <motion.div
            ref={testimonialRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isTestimonialInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-8 sm:mt-10"
          >
            <TestimonialSection />
          </motion.div>
        </div>

        <motion.div
          ref={largeImageRef}
          initial={{ opacity: 0, x: 100 }}
          animate={isLargeImageInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-6 md:mt-0"
        >
          <img
            src={image13}
            alt=""
            className="w-full h-auto sm:h-96 md:h-[510px] md:w-[900px] object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Community;
