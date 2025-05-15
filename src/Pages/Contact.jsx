import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Help from "../Components/Help";
import Started from "../Components/Home/Started";

const Contact = () => {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const mapRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const formInView = useInView(formRef, { once: true, margin: "-50px" });
  const mapInView = useInView(mapRef, { once: true, margin: "-50px" });

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
    <>
      <div className="bg-white font-marcellus scroll-container">
        <div className="scroll-container">
          <motion.div
            ref={heroRef}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={sectionVariants}
            className="relative "
          >
            <img
              src="https://iili.io/3VVHRta.png"
              alt="about banner"
              className="w-full h-[50vh] max-md:object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center max-md:gap-4">
              <h1 className="text-white text-4xl font-bold tracking-widest max-md:text-2xl max-md:text-center max-[480px]:text-[1.5rem]">
                Contact Us
              </h1>
              <p className="text-white tracking-widest max-md:text-[0.9rem] max-[480px]:text-[0.85rem]">
                Home / Contact Us
              </p>
            </div>
          </motion.div>

          <motion.div
            ref={formRef}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            variants={sectionVariants}
            className="font-marcellus px-4"
          >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row py-10 gap-10 max-md:flex-col max-md:gap-6 max-md:p-4 max-md:py-8 max-[480px]:p-2 max-[480px]:py-6">
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <motion.img
                  custom={0}
                  initial="hidden"
                  animate={formInView ? "visible" : "hidden"}
                  variants={itemVariants}
                  src="https://iili.io/31cmgAG.md.jpg"
                  alt=""
                  className="rounded-3xl h-80 w-[90%] max-w-[450px] object-cover max-md:w-full max-md:h-auto max-md:max-w-[350px] max-[480px]:max-w-[300px]"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-3 max-md:items-center">
                <motion.h1
                  custom={1}
                  initial="hidden"
                  animate={formInView ? "visible" : "hidden"}
                  variants={itemVariants}
                  className="text-center md:text-start text-2xl sm:text-3xl md:text-3xl"
                >
                  Contact Form
                </motion.h1>
                <motion.p
                  custom={2}
                  initial="hidden"
                  animate={formInView ? "visible" : "hidden"}
                  variants={itemVariants}
                  className="text-sm text-center md:text-start max-md:text-[0.9rem] max-[480px]:text-[0.85rem]"
                >
                  Duis aute irure dolor in reprehenderit in voluptate eu fugiat
                  nulla pariatur.
                </motion.p>
                <div className="mt-6">
                  <form className="flex flex-col xl:gap-6 lg:gap-6 gap-4 max-md:w-full max-md:max-w-[350px]">
                    <div className="flex flex-col xl:flex-row lg:flex-row md:gap-6">
                      <motion.input
                        custom={3}
                        initial="hidden"
                        animate={formInView ? "visible" : "hidden"}
                        variants={itemVariants}
                        type="text"
                        placeholder="First Name"
                        className="border p-3  pl-4 pr-10 rounded-full text-xs sm:text-sm md:text-sm w-full outline-none"
                      />

                      <motion.input
                        custom={4}
                        initial="hidden"
                        animate={formInView ? "visible" : "hidden"}
                        variants={itemVariants}
                        type="text"
                        placeholder="Last Name"
                        className="border p-3 mt-4 xl:mt-0 lg:mt-0 md:mt-0  pl-4 pr-10 rounded-full text-xs sm:text-sm md:text-sm w-full outline-none"
                      />
                    </div>

                    <div className="flex flex-col xl:flex-row lg:flex-row gap-5 max-md:flex-col max-md:gap-4">
                      <motion.input
                        custom={5}
                        initial="hidden"
                        animate={formInView ? "visible" : "hidden"}
                        variants={itemVariants}
                        type="text"
                        placeholder="Enter Email"
                        className="border p-3 pl-4 pr-10 rounded-full text-xs sm:text-sm md:text-sm xl:w-full lg:w-full w-[350px] outline-none"
                      />

                      <motion.input
                        custom={6}
                        initial="hidden"
                        animate={formInView ? "visible" : "hidden"}
                        variants={itemVariants}
                        type="text"
                        placeholder="Enter Mobile"
                        className="border p-3 pl-4 pr-10 rounded-full text-xs sm:text-sm md:text-sm w-full outline-none"
                      />
                    </div>

                    <motion.div
                      custom={7}
                      initial="hidden"
                      animate={formInView ? "visible" : "hidden"}
                      variants={itemVariants}
                    >
                      <textarea
                        placeholder="Message"
                        className="border p-3 pl-4  pr-10 rounded-full text-xs sm:text-sm md:text-sm w-full outline-none"
                      />
                    </motion.div>
                    <button className="bg-blue w-auto hover:bg-black transition-all duration-500 cursor-pointer text-white p-3 rounded-full text-xs sm:text-sm md:text-sm  hover:bg-opacity-90">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={mapRef}
            initial="hidden"
            animate={mapInView ? "visible" : "hidden"}
            variants={sectionVariants}
            className="w-full px-6 h-[400px] max-w-6xl mx-auto pb-10 max-md:h-[300px] max-[480px]:h-[250px]"
          >
            {/* <iframe
            title="Google Map"
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46830151.11795828!2d-119.8093025!3d44.24236485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1745927548376!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
            <img
              src="https://iili.io/3NT69m7.jpg"
              alt="Corridor Map"
              className="w-full h-full border-0 object-cover"
            />
          </motion.div>

          <Help />
         <div className="mt-8">
          <Started />
</div> 
        </div>
      </div>
    </>
  );
};

export default Contact;
