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
      <div className="bg-white font-marcellus">
        <motion.div
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="relative"
        >
          <img
            src="https://iili.io/3VVHRta.png"
            alt="about banner"
            className="w-full max-md:h-[50vh] max-md:object-cover"
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
                <form className="flex flex-col gap-6 max-md:w-full max-md:max-w-[350px]">
                  <div className="md:flex flex-col md:flex-row md:gap-6">
                    {["First Name", "Last Name"].map((placeholder, idx) => (
                      <motion.input
                        key={idx}
                        custom={3 + idx}
                        initial="hidden"
                        animate={formInView ? "visible" : "hidden"}
                        variants={itemVariants}
                        type="text"
                        placeholder={placeholder}
                        className="border-b-2 w-full sm:w-1/2 outline-none pb-1 pl-2 max-md:text-[0.9rem] max-[480px]:text-[0.85rem]"
                      />
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-5 max-md:flex-col max-md:gap-4">
                    {["Enter Email", "Enter Mobile"].map((placeholder, idx) => (
                      <motion.input
                        key={idx}
                        custom={5 + idx}
                        initial="hidden"
                        animate={formInView ? "visible" : "hidden"}
                        variants={itemVariants}
                        type="text"
                        placeholder={placeholder}
                        className="border-b-2 w-full sm:w-1/2 outline-none pb-1 pl-2 max-md:w-full max-md:text-[0.9rem] max-[480px]:text-[0.85rem]"
                      />
                    ))}
                  </div>
                  <motion.div
                    custom={7}
                    initial="hidden"
                    animate={formInView ? "visible" : "hidden"}
                    variants={itemVariants}
                  >
                    <textarea
                      placeholder="Message"
                      className="border-b-2 w-full outline-none pb-1 pl-2 max-md:text-[0.9rem] max-[480px]:text-[0.85rem]"
                    />
                  </motion.div>
                  <motion.button
                    custom={8}
                    initial="hidden"
                    animate={formInView ? "visible" : "hidden"}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="button w-full text-center items-center justify-center flex md:w-40 font-medium hover:border bg-burntCopper hover:bg-black max-md:w-full max-md:max-w-[200px] max-md:mx-auto"
                    style={{ "--clr": "#AA7446" }}
                  >
                    <span className="button__icon-wrapper">
                      <svg
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="button__icon-svg"
                        width="10"
                      >
                        <path
                          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <svg
                        viewBox="0 0 14 15"
                        fill="none"
                        width="10"
                        xmlns="http://www.w3.org/2000/svg"
                        className="button__icon-svg button__icon-svg--copy"
                      >
                        <path
                          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    Send Message
                  </motion.button>
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
          className="w-full h-[400px] max-w-6xl mx-auto pb-10 max-md:h-[300px] max-[480px]:h-[250px]"
        >
          <iframe
            title="Google Map"
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.123456789!2d72.123456!3d19.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be799999999999%3A0x123456789abcdef!2sYour%20Location!5e0!3m2!1sen!2sin!4v1714286165367!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        <Help />
        <Started />
      </div>
    </>
  );
};

export default Contact;
