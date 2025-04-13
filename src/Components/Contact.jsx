import React, { useEffect, useRef } from "react";
import { FaTelegramPlane, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image14 from '../assets/image14.png'

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const inputRefs = useRef([]);
  const textareaRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      headerRef.current.querySelector("p"), 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      headerRef.current.querySelector("h1"), 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    inputRefs.current.forEach((input, idx) => {
      gsap.fromTo(
        input,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          delay: idx * 0.2, 
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    gsap.fromTo(
      textareaRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.6, 
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        delay: 0.8, 
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-deepMaroon flex items-center">
      <div className="max-w-6xl font-marcellus mx-auto px-4 sm:px-6 md:px-4 flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 items-center justify-center w-full py-12 sm:py-16 md:py-0">
        <div className="w-full md:w-auto">
          <img
            ref={imageRef}
            src={image14}
            alt=""
            className="w-full h-auto sm:h-80 md:h-[500px] object-cover"
          />
        </div>
        <div className="mt-8 sm:mt-12 md:mt-20 mb-8 sm:mb-12 md:mb-20 shadow-lg max-w-full sm:max-w-md md:max-w-lg w-full">
          <div ref={headerRef} className="text-white gap-4 sm:gap-6 flex flex-col">
            <p className="text-xs sm:text-sm md:text-base">Contact Information</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl">
              Let Your Wanderlust <br /> Guide You
            </h1>
          </div>
          <form ref={formRef} className="gap-3 sm:gap-4 mt-4 sm:mt-6 bg-white p-4 sm:p-6 rounded-2xl flex flex-col font-display">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div
                ref={(el) => (inputRefs.current[0] = el)}
                className="flex flex-col gap-2 flex-1"
              >
                <label className="text-xs sm:text-sm md:text-sm font-medium">Your Email</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="border p-2 sm:p-3 pl-4 pr-10 rounded-full text-xs sm:text-sm md:text-sm w-full outline-none"
                  />
                  <span className="absolute right-3 top-2 sm:top-3 mt-0.5 sm:mt-1">
                    <FaTelegramPlane className="w-3 h-3" />
                  </span>
                </div>
              </div>

              <div
                ref={(el) => (inputRefs.current[1] = el)}
                className="flex flex-col gap-2 flex-1"
              >
                <label className="text-xs sm:text-sm md:text-sm font-medium">Your Phone</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Phone"
                    className="border p-2 sm:p-3 pl-4 pr-10 rounded-full text-xs sm:text-sm md:text-sm w-full outline-none"
                  />
                  <span className="absolute right-3 top-2 sm:top-3 mt-0.5 sm:mt-1">
                    <FaPhoneAlt className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>

            <div
              ref={(el) => (inputRefs.current[2] = el)}
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
            </div>

            <div ref={textareaRef} className="flex flex-col gap-2">
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
            </div>

            <button
              ref={buttonRef}
              className="bg-burntCopper hover:bg-black transition-all duration-500 cursor-pointer text-white p-2 sm:p-3 rounded-full text-xs sm:text-sm md:text-sm w-full  hover:bg-opacity-90"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;