  import React, { useRef } from "react";
  import { motion, useInView } from "framer-motion";
  import Slider from 'react-slick';

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


  const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  appendDots: dots => (
    <div
      style={{
        marginTop: "10px",
        display: "flex",
        justifyContent: "center",
        gap: "px",
      }}
    >
      {React.Children.map(dots, (dot, index) => {
        return React.cloneElement(dot, {
          children: React.cloneElement(dot.props.children, {
            style: {
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background:
                dot.props.className && dot.props.className.includes("slick-active")
                  ? "black"
                  : "#999999",
            },
          }),
        });
      })}
    </div>
  ),
  customPaging: i => (
    <div
      style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        background: "#999",
      }}
    />
  ),
};

    
    const images = [
      "https://iili.io/3V0z1Uv.png",
      "https://iili.io/3V0zlfa.png",
      "https://iili.io/3V0z00J.png",
      "https://iili.io/3V0T2Z7.png",
      "https://iili.io/3V0TdjS.png",
      "https://iili.io/3V0TFn9.png",
      "https://iili.io/3V0TKGe.png",
      "https://iili.io/3V0AKdb.png",
      "https://iili.io/3V0A3ru.png",
      "https://iili.io/3V0Af7j.png",
      "https://iili.io/3V0A21e.png",
    ];
  
    const imageVariant = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    };

    return (
      <>
        <div className="bg-white ">
          <div className="max-w-6xl mx-auto ">
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
              className="hidden lg:flex flex-col gap-3 py-10 lg:p-4 xl:p-4 gallery-section"              variants={staggerContainer}
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
                      className="w-full h-auto gallery-image xl:h-54"
                      variants={scaleIn}
                    />
                    <motion.img
                      src="https://iili.io/3V0zlfa.png"
                      alt=""
                      className="w-full h-auto gallery-image xl:h-54"
                      variants={scaleIn}
                    />
                  </motion.div>

                  <motion.img
                    src="https://iili.io/3V0z00J.png"
                    alt=""
                    className="h-[500px] gallery-image md:max-h-[450px] "
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
                      className="h-56 w-56 gallery-image md:h-48 md:w-48 max-md:w-full max-md:h-auto max-md:max-w-[350px] max-[480px]:max-w-[300px]"
                      variants={scaleIn}
                    />
                    <motion.img
                      src="https://iili.io/3V0TdjS.png"
                      alt=""
                      className="h-56 w-56 gallery-image md:h-48 md:w-48 max-md:w-full max-md:h-auto max-md:max-w-[350px] max-[480px]:max-w-[300px]"
                      variants={scaleIn}
                    />
                    <motion.img
                      src="https://iili.io/3V0TFn9.png"
                      alt=""
                      className="h-56 w-56 gallery-image md:h-48 md:w-48 max-md:w-full max-md:h-auto max-md:max-w-[350px] max-[480px]:max-w-[300px]"
                      variants={scaleIn}
                    />
                  </motion.div>

                  <motion.img
                    src="https://iili.io/3V0TKGe.png"
                    alt=""
                    className="h-64 gallery-image md:max-h-[300px] max-md:w-full max-md:h-auto max-md:max-w-[350px] max-[480px]:max-w-[300px]"
                    variants={scaleIn}
                  />
                </motion.div>
              </motion.div>

              <motion.div
                className="flex gap-5 max-md:flex-wrap max-md:gap-4 max-md:justify-center "
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
                    className="xl:w-68 lg:w-60 gallery-image md:max-w-[400px] max-md:w-full max-md:h-auto max-md:max-w-[350px] max-[480px]:max-w-[300px]"
                    variants={scaleIn}
                  />
                ))}
              </motion.div>
            </motion.div>


            <motion.div
      className="lg:hidden block py-6 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} 
      transition={{ staggerChildren: 0.3 }}
    >
      <Slider {...settings}>
        {images.map((src, index) => (
          <motion.div
            key={index}
            variants={imageVariant}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
           <img
  src={src}
  alt={`Gallery ${index + 1}`}
  className="w-full h-[400px] object-object rounded-xl "
/>

          </motion.div>
        ))}
      </Slider>
    </motion.div>


            <motion.div
              ref={paginationRef}
              className="hidden lg:flex items-center justify-center space-x-2 md:p-4 max-md:p-4 pagination-section"
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
