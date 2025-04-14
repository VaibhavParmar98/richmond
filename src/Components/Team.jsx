import React, { useRef } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { motion } from "framer-motion";
import image16 from '../assets/image16.png';
import image17 from '../assets/image17.png';
import image18 from '../assets/image18.png';
import image19 from '../assets/image19.png';

const Team = () => {
  const items = [
    {
      img: image16,
      name: "Christopher Paul",
      position: "Founder & Creative Director",
      social: [
        { icon: <FaFacebook /> },
        { icon: <FaInstagram /> },
        { icon: <FaTwitter /> },
        { icon: <FaYoutube /> },
      ],
    },
    {
      img: image18,
      name: "Mark Hagne",
      position: "Community Manager",
      social: [
        { icon: <FaFacebook /> },
        { icon: <FaInstagram /> },
        { icon: <FaTwitter /> },
        { icon: <FaYoutube /> },
      ],
    },
    {
      img: image17,
      name: "Michelle Parker",
      position: "Photographer",
      social: [
        { icon: <FaFacebook /> },
        { icon: <FaInstagram /> },
        { icon: <FaTwitter /> },
        { icon: <FaYoutube /> },
      ],
    },
    {
      img: image19,
      name: "Mia Chen",
      position: "Event Coordinator",
      social: [
        { icon: <FaFacebook /> },
        { icon: <FaInstagram /> },
        { icon: <FaTwitter /> },
        { icon: <FaYoutube /> },
      ],
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto font-marcellus px-4 sm:px-6 md:px-0">
        <div className="flex flex-col md:flex-row md:justify-between gap-4 sm:gap-6">
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }} 
            layout
          >
            <p className="text-sm">CHURCH PASTORS</p>
            <h1 className="text-3xl">Our Passionate Team Behind the Vision</h1>
          </motion.div>
          <motion.div
            className="flex gap-3 mt-4 md:mt-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }} 
            layout
          >
            <img src="/fram2.png" alt="" className="w-9 h-10 object-cover" />
            <p className="text-sm">
              Get to Know Our Passionate Team Dedicated to Empowering Local Artists, <br /> Showcasing Talent, and Building a Thriving Creative Community Together.
            </p>
          </motion.div>
        </div>

        {/* Updated section for small devices */}
        <div className="p-3">
          <div className="flex flex-wrap justify-center gap-4">
            {items.map((itm, idx) => (
              <div key={idx} className="flex flex-col gap-3 items-center justify-center mx-4">
                <img
                  src={itm.img}
                  alt={itm.name}
                  className="w-full max-w-48 sm:max-w-56 md:w-64 object-cover"
                />
                <h1 className="mt-4 text-xl text-black">{itm.name}</h1>
                <p className="text-sm text-gray-500">{itm.position}</p>
                <div className="flex gap-2 items-center justify-center text-xl sm:text-lg md:text-xl">
                  {itm.social.map((s, i) => (
                    <motion.span
                      key={i}
                      className="social-icon"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 + i * 0.1, ease: "backOut" }}
                      layout
                    >
                      {s.icon}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
