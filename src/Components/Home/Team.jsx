import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { motion } from "framer-motion";
import Slider from "react-slick";

const Team = () => {
  const items = [
    {
      img: "https://iili.io/3Ub300P.jpg",
      name: "Christopher Paul",
      position: "Founder & Creative Director",
      social: [<FaFacebook />, <FaInstagram />, <FaTwitter />, <FaYoutube />],
    },
    {
      img: "https://iili.io/3Ub31g1.jpg",
      name: "Mark Hagne",
      position: "Community Manager",
      social: [<FaFacebook />, <FaInstagram />, <FaTwitter />, <FaYoutube />],
    },
    {
      img: "https://iili.io/3Ub3wsp.png",
      name: "Michelle Parker",
      position: "Photographer",
      social: [<FaFacebook />, <FaInstagram />, <FaTwitter />, <FaYoutube />],
    },
    {
      img: "https://iili.io/3Ub3hzv.jpg",
      name: "Mia Chen",
      position: "Event Coordinator",
      social: [<FaFacebook />, <FaInstagram />, <FaTwitter />, <FaYoutube />],
    },
    {
      img: "https://iili.io/3Ub3jXR.jpg",
      name: "Mia Chen",
      position: "Event Coordinator",
      social: [<FaFacebook />, <FaInstagram />, <FaTwitter />, <FaYoutube />],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-20  bg-white">
      <div className="max-w-6xl mx-auto font-marcellus px-4 sm:px-6 md:px-0">
        <div className="flex flex-col items-center mb-3 justify-center gap-4 sm:gap-6">
          <motion.div
            className="flex gap-3 mt-4 md:mt-0 md:w-1/2 w-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            layout
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-3 items-center justify-center">
              <img
                src="https://iili.io/3gaGyF4.png"
                alt=""
                className="w-9 h-10 object-cover items-center justify-center"
              />
              <p className="text-[14px] leading-5 text-center md:text-start">
                Get to Know Our Passionate Team Dedicated to Empowering Local
                Artists, <br className="hidden xl:block" /> Showcasing Talent,
                and Building a Thriving Creative Community Together.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mobile View - Slider */}
        <div className="mt-6  md:hidden">
          <Slider {...settings}>
            {items.map((itm, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-3 items-center justify-center"
              >
                <img
                  src={itm.img}
                  alt={itm.name}
                  className="w-48 h-60 object-cover rounded-full mx-auto"
                />
                <h1 className="mt-4 text-xl text-black text-center">
                  {itm.name}
                </h1>
                <p className="text-sm text-gray-500 text-center">
                  {itm.position}
                </p>
                <div className="flex gap-3 items-center justify-center text-xl mt-2">
                  {itm.social.map((icon, i) => (
                    <motion.span
                      key={i}
                      className="social-icon mb-6 text-[#cacaca] cursor-pointer hover:text-blue"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.4 + i * 0.1,
                        ease: "backOut",
                      }}
                      layout
                    >
                      {icon}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Desktop View - Grid */}
        <div className="mt-6  hidden md:flex flex-wrap justify-center">
          {items.map((itm, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center mx-4"
            >
              <img
                src={itm.img}
                alt={itm.name}
                className="w-48 h-60 object-cover rounded-full"
              />
              <h1 className="mt-4 text-xl text-black">{itm.name}</h1>
              <p className="text-sm text-gray-500 mt-2">{itm.position}</p>
              <div className="flex gap-3 items-center justify-center text-xl mt-3">
                {itm.social.map((icon, i) => (
                  <motion.span
                    key={i}
                    className="social-icon mb-6 text-[#cacaca] cursor-pointer hover:text-blue"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + i * 0.1,
                      ease: "backOut",
                    }}
                    layout
                  >
                    {icon}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
