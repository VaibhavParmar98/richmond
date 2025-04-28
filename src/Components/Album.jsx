import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Album = () => {
  const headerRef = useRef(null);
  const filterRef = useRef(null);
  const galleryRef = useRef(null);
  const paginationRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });
  const filterInView = useInView(filterRef, { once: true, margin: "-50px" });
  const galleryInView = useInView(galleryRef, { once: true, margin: "-50px" });
  const paginationInView = useInView(paginationRef, {
    once: true,
    margin: "-50px",
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <div className="bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={headerRef}
            className="flex flex-col gap-5 items-center justify-center md:p-4 max-md:p-4 max-md:text-center"
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <motion.h1
              className="text-2xl sm:text-3xl md:text-3xl header-title"
              variants={fadeInUp}
            >
              Recent Event Photos
            </motion.h1>
            <motion.ul
              ref={filterRef}
              className="flex gap-10 md:gap-10 max-md:flex-wrap max-md:gap-4 max-md:justify-center max-md:text-[0.9rem] max-[480px]:gap-2 max-[480px]:text-[0.85rem] filter-list"
              variants={staggerContainer}
              initial="hidden"
              animate={filterInView ? "visible" : "hidden"}
            >
              {["All", "Donations", "Volunteers", "Charity"].map(
                (item, index) => (
                  <motion.li
                    key={index}
                    className="max-md:flex-1 max-md:text-center"
                    variants={fadeInUp}
                  >
                    {item}
                  </motion.li>
                )
              )}
            </motion.ul>
          </motion.div>

          <div className="border-b-0 border mt-8 sm:mt-10" />

          <motion.div
            ref={galleryRef}
            className="flex flex-col gap-3 py-10 md:p-4 max-md:p-4 max-[480px]:p-2 gallery-section"
            variants={staggerContainer}
            initial="hidden"
            animate={galleryInView ? "visible" : "hidden"}
          >
            <motion.div
              className="flex gap-3 max-md:flex-col max-md:gap-4 image-group"
              variants={staggerContainer}
            >
              <motion.div
                className="flex gap-3 max-md:flex-col max-md:items-center"
                variants={staggerContainer}
              >
                <motion.div
                  className="flex flex-col gap-3"
                  variants={staggerContainer}
                >
                  <motion.img
                    src="https://iili.io/3V0z1Uv.png"
                    alt=""
                    className="w-full h-auto gallery-image max-md:w-full max-md:h-auto max-md:max-w-[350px] max-[480px]:max-w-[300px]"
                    variants={scaleIn}
                  />
                  <motion.img
                    src="https://iili.io/3V0zlfa.png"
                    alt=""
                    className="w-full h-auto gallery-image max-md:w-full max-md:h-auto max-md:max-w-[350px] max-[480px]:max-w-[300px]"
                    variants={scaleIn}
                  />
                </motion.div>
                <motion.img
                  src="https://iili.io/3V0z00J.png"
                  alt=""
                  className="h-[500px] gallery-image max-md:w-full max-md:h-auto max-md:max-w-[350px] max-[480px]:max-w-[300px] tall-image"
                  variants={scaleIn}
                />
              </motion.div>
              <motion.div
                className="flex flex-col gap-3"
                variants={staggerContainer}
              >
                <motion.div
                  className="flex gap-3 max-md:flex-col max-md:items-center"
                  variants={staggerContainer}
                >
                  <motion.img
                    src="https://iili.io/3V0T2Z7.png"
                    alt=""
                    className="h-56 w-56 gallery-image max-md:w-full max-md:h-auto max-md:max-w-[350px] max-[480px]:max-w-[300px] small-image"
                    variants={scaleIn}
                  />
                  <motion.img
                    src="https://iili.io/3V0TdjS.png"
                    alt=""
                    className="h-56 w-56 gallery-image max-md:w-full max-md:h-auto max-md:max-w-[350px] max-[480px]:max-w-[300px] small-image"
                    variants={scaleIn}
                  />
                  <motion.img
                    src="https://iili.io/3V0TFn9.png"
                    alt=""
                    className="h-56 w-56 gallery-image max-md:w-full max-md:h-auto max-md:max-w-[350px] max-[480px]:max-w-[300px] small-image"
                    variants={scaleIn}
                  />
                </motion.div>
                <motion.img
                  src="https://iili.io/3V0TKGe.png"
                  alt=""
                  className="h-64 gallery-image max-md:w-full max-md:h-auto max-md:max-w-[350px] max-[480px]:max-w-[300px] medium-image"
                  variants={scaleIn}
                />
              </motion.div>
            </motion.div>
            <motion.div
              className="flex gap-5 max-md:flex-wrap max-md:gap-4 max-md:justify-center max-[480px]:gap-2 bottom-row"
              variants={staggerContainer}
            >
              {[
                "https://iili.io/3V0AKdb.png",
                "https://iili.io/3V0A3ru.png",
                "https://iili.io/3V0Af7j.png",
                "https://iili.io/3V0A21e.png",
              ].map((src, index) => (
                <motion.img
                  key={index}
                  src={src}
                  alt=""
                  className="w-68 gallery-image max-md:w-full max-md:h-auto max-md:max-w-[350px] max-[480px]:max-w-[300px] bottom-image"
                  variants={scaleIn}
                />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            ref={paginationRef}
            className="flex items-center justify-center space-x-2 md:p-4 max-md:p-4 pagination-section"
            variants={staggerContainer}
            initial="hidden"
            animate={paginationInView ? "visible" : "hidden"}
          >
            <motion.button
              className="px-2 py-1 md:px-2 md:py-1 max-md:w-10 max-md:h-10 max-md:text-[0.9rem] max-[480px]:w-9 max-[480px]:h-9 max-[480px]:text-[0.85rem] pagination-button"
              variants={fadeInUp}
            >
              ←
            </motion.button>
            {["01", "02", "03", "04"].map((num, index) => (
              <motion.button
                key={index}
                className={`w-8 cursor-pointer h-8 flex items-center justify-center rounded-full ${
                  num === "01" ? "bg-burntCopper text-white" : ""
                } md:w-8 md:h-8 max-md:w-10 max-md:h-10 max-md:text-[0.9rem] max-[480px]:w-9 max-[480px]:h-9 max-[480px]:text-[0.85rem] pagination-button`}
                variants={fadeInUp}
              >
                {num}
              </motion.button>
            ))}
            <motion.button
              className="px-2 py-1 md:px-2 md:py-1 max-md:w-10 max-md:h-10 max-md:text-[0.9rem] max-[480px]:w-9 max-[480px]:h-9 max-[480px]:text-[0.85rem] pagination-button"
              variants={fadeInUp}
            >
              →
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Album;
