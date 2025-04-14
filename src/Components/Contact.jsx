import React, { useRef } from "react";
import { FaTelegramPlane, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { motion, useInView } from "framer-motion";
import image14 from '../assets/image14.png'

const Contact = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const inputRefs = useRef([]);
  const textareaRef = useRef(null);
  const buttonRef = useRef(null);

  const imageInView = useInView(imageRef, { once: true, margin: "-100px" });
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const formInView = useInView(formRef, { once: true, margin: "-100px" });

  return (
    <div ref={sectionRef} className="bg-deepMaroon flex items-center">
      <div className="max-w-6xl font-marcellus mx-auto px-4 sm:px-6 md:px-4 flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 items-center justify-center w-full py-12 sm:py-16 md:py-0">
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: -100 }}
          animate={imageInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full md:w-auto"
        >
          <img
            src={image14}
            alt=""
            className="w-full h-auto sm:h-80 md:h-[500px] object-cover"
          />
        </motion.div>

        <div className="mt-8 sm:mt-12 md:mt-20 mb-8 sm:mb-12 md:mb-20 shadow-lg max-w-full sm:max-w-md md:max-w-lg w-full">
          <motion.div
            ref={headerRef}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {},
            }}
            className="text-white gap-4 sm:gap-6 flex flex-col"
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
              }}
              className="text-xs sm:text-sm md:text-base"
            >
              Contact Information
            </motion.p>
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
              }}
              className="text-2xl sm:text-3xl md:text-4xl"
            >
              Let Your Wanderlust <br /> Guide You
            </motion.h1>
          </motion.div>

          <motion.form
            ref={formRef}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            variants={{ visible: { transition: { staggerChildren: 0.2 } }, hidden: {} }}
            className="gap-3 sm:gap-4 mt-4 sm:mt-6 bg-white p-4 sm:p-6 rounded-2xl flex flex-col font-display"
          >
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {[0, 1].map((i) => (
                <motion.div
                  key={i}
                  ref={(el) => (inputRefs.current[i] = el)}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                  }}
                  className="flex flex-col gap-2 flex-1"
                >
                  <label className="text-xs sm:text-sm md:text-sm font-medium">
                    {i === 0 ? "Your Email" : "Your Phone"}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={i === 0 ? "Your Email" : "Your Phone"}
                      className="border p-2 sm:p-3 pl-4 pr-10 rounded-full text-xs sm:text-sm md:text-sm w-full outline-none"
                    />
                    <span className="absolute right-3 top-2 sm:top-3 mt-0.5 sm:mt-1">
                      {i === 0 ? (
                        <FaTelegramPlane className="w-3 h-3" />
                      ) : (
                        <FaPhoneAlt className="w-3 h-3" />
                      )}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              ref={(el) => (inputRefs.current[2] = el)}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              className="flex flex-col gap-2"
            >
              <label className="text-xs sm:text-sm md:text-sm font-medium">Your Address</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Address"
                  className="border p-2 sm:p-3 pl-4 pr-10 rounded-full text-xs sm:text-sm md:text-sm w-full outline-none"
                />
                <span className="absolute right-3 top-2 sm:top-3 mt-0.5 sm:mt-1">
                  <FaLocationDot className="w-3 h-3" />
                </span>
              </div>
            </motion.div>

            <motion.div
              ref={textareaRef}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.6 } },
              }}
              className="flex flex-col gap-2"
            >
              <label className="text-xs sm:text-sm md:text-sm font-medium">Message</label>
              <div className="relative">
                <textarea
                  placeholder="Write Message..."
                  className="border p-2 sm:p-3 pl-4 pr-10 rounded-2xl text-xs sm:text-sm md:text-sm w-full h-20 sm:h-24 resize-none outline-none"
                ></textarea>
                <span className="absolute right-3 top-2 sm:top-3">
                  <IoMdMail className="w-3 h-3" />
                </span>
              </div>
            </motion.div>

            <motion.button
              ref={buttonRef}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] } },
              }}
              className="bg-burntCopper hover:bg-black transition-all duration-500 cursor-pointer text-white p-2 sm:p-3 rounded-full text-xs sm:text-sm md:text-sm w-full  hover:bg-opacity-90"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;