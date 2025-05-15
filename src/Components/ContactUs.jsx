import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ContactUs = () => {
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  const leftInView = useInView(leftSectionRef, { once: true, margin: "-50px" });
  const rightInView = useInView(rightSectionRef, {
    once: true,
    margin: "-50px",
  });

  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <>
      <div className="py-10 md:py-20 bg-offWhite font-marcellus text-white">
        <div className="flex justify-center">
          <div className="max-w-6xl w-full px-4">
            <div className="flex flex-col lg:flex-row gap-6">
              <motion.div
                ref={leftSectionRef}
                className="bg-black rounded-2xl py-10 md:py-20 px-6 md:px-10 flex flex-col justify-center items-center lg:items-start w-full"
                initial="hidden"
                animate={leftInView ? "visible" : "hidden"}
                variants={leftVariants}
              >
                <div className="flex gap-3 justify-center lg:justify-start">
                  <img
                    src="https://iili.io/3VaODKb.png"
                    alt=""
                    className="w-32 h-32 md:w-48 md:h-48"
                  />
                  <img
                    src="https://iili.io/3VaOblj.png"
                    alt=""
                    className="w-32 h-32 md:w-48 md:h-48"
                  />
                </div>
                <p className="text-xs sm:text-sm uppercase mt-3 text-center lg:text-left">
                  GET IN TOUCH
                </p>
                <h1 className="text-2xl sm:text-3xl md:text-3xl mt-3 text-center lg:text-left leading-tight">
                  📩 Let’s Create Something Amazing Together,{" "}
                  <br className="hidden md:block" />
                  Inspiring Communities Through Art! 🎨
                </h1>
              </motion.div>

              <motion.div
                ref={rightSectionRef}
                className="border border-deepMaroon rounded-2xl w-full lg:w-1/2"
                initial="hidden"
                animate={rightInView ? "visible" : "hidden"}
                variants={rightVariants}
              >
                <form className="flex flex-col gap-5 py-8 px-4 md:px-6 text-black">
                  <h1 className="text-2xl md:text-3xl text-center lg:text-left">
                    Contact Us
                  </h1>
                  <input
                    type="text"
                    placeholder="Name"
                    className="text-black border bg-gray-100 p-3 pl-4 outline-none rounded-full w-full"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="text-black border bg-gray-100 p-3 pl-4 outline-none rounded-full w-full"
                  />
                  <input
                    type="text"
                    placeholder="Enter Date"
                    className="text-black border bg-gray-100 p-3 pl-4 outline-none rounded-full w-full"
                  />
                  <textarea
                    placeholder="Message"
                    className="text-black border bg-gray-100 p-3 pl-4 outline-none rounded-2xl w-full h-32 resize-none"
                  />
                  <button className="bg-blue w-auto hover:bg-black transition-all duration-500 cursor-pointer text-white p-3 rounded-full text-xs sm:text-sm md:text-sm  hover:bg-opacity-90">
              Send Message
            </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
