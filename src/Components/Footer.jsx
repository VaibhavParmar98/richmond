import React, { useEffect, useRef } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image20 from '../assets/image20.png'

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const leftSectionRef = useRef(null);
  const socialIconsRef = useRef(null);
  const navSectionRef = useRef(null);
  const navListRef = useRef(null);
  const newsletterSectionRef = useRef(null);
  const formRefs = useRef([]);
  const copyrightRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;

    gsap.fromTo(
      leftSectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      socialIconsRef.current.children,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.1, 
        scrollTrigger: {
          trigger: footer,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      navSectionRef.current.querySelector("label"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      navListRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1, 
        scrollTrigger: {
          trigger: footer,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      newsletterSectionRef.current.querySelector("label"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    formRefs.current.forEach((element, idx) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          delay: idx * 0.2, 
          scrollTrigger: {
            trigger: footer,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    gsap.fromTo(
      copyrightRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: copyrightRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div ref={footerRef} className="bg-champagneBeige py-12 sm:py-16 md:py-20">
        <div className="max-w-full sm:max-w-5xl md:max-w-6xl mx-auto px-4 sm:px-6 md:px-0 flex flex-col md:flex-row md:items-center md:justify-between gap-8 sm:gap-10">
          <div ref={leftSectionRef} className="flex flex-col gap-6 sm:gap-8 w-full md:w-auto">
            <div className="flex gap-1 items-center">
              <img src={image20} alt="" className="w-8 sm:w-9 h-8 sm:h-9" />
              <p className="flex flex-col font-bold text-lg sm:text-xl">
                Richmond
                <span className="text-[7px] sm:text-[8px] font-medium text-oldLavender">
                  Richmond Arts Corridor
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:gap-3 font-marcellus">
              <p className="text-xs sm:text-sm md:text-sm">
                Discover Richmond’s thriving arts scene! Engage with local talent, <br />
                support cultural initiatives, and contribute to a vibrant community. <br />
                Join us in celebrating creativity, preserving heritage, and shaping a <br />
                brighter future through the arts.
              </p>
              <span ref={socialIconsRef} className="flex items-center gap-2 sm:gap-3 text-burntCopper text-lg sm:text-xl">
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaYoutube />
              </span>
            </div>
          </div>

          <div ref={navSectionRef} className="flex flex-col gap-6 sm:gap-8 font-marcellus w-full md:w-auto">
            <label className="text-lg sm:text-xl md:text-xl font-semibold text-burntCopper">
              Navigation
            </label>
            <ul ref={navListRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm md:text-sm">
              <li className="flex gap-2 items-center">
                <span>
                  <FaCaretRight className="text-burntCopper" />
                </span>
                About
              </li>
              <li className="flex gap-2 items-center">
                <span>
                  <FaCaretRight className="text-burntCopper" />
                </span>
                Talks
              </li>
              <li className="flex gap-2 items-center">
                <span>
                  <FaCaretRight className="text-burntCopper" />
                </span>
                Event
              </li>
              <li className="flex gap-2 items-center">
                <span>
                  <FaCaretRight className="text-burntCopper" />
                </span>
                Shop List
              </li>
              <li className="flex gap-2 items-center">
                <span>
                  <FaCaretRight className="text-burntCopper" />
                </span>
                Gallery
              </li>
              <li className="flex gap-2 items-center">
                <span>
                  <FaCaretRight className="text-burntCopper" />
                </span>
                Faqs
              </li>
              <li className="flex gap-2 items-center">
                <span>
                  <FaCaretRight className="text-burntCopper" />
                </span>
                Tickets
              </li>
              <li className="flex gap-2 items-center">
                <span>
                  <FaCaretRight className="text-burntCopper" />
                </span>
                Blog
              </li>
              <li className="flex gap-2 items-center">
                <span>
                  <FaCaretRight className="text-burntCopper" />
                </span>
                Artist
              </li>
              <li className="flex gap-2 items-center">
                <span>
                  <FaCaretRight className="text-burntCopper" />
                </span>
                Testimonials
              </li>
            </ul>
          </div>

          <div ref={newsletterSectionRef} className="flex flex-col gap-6 sm:gap-8 font-marcellus w-full md:w-80">
            <label className="text-lg sm:text-xl md:text-xl font-semibold text-burntCopper">
              Newsletter
            </label>
            <form className="flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm md:text-sm">
              <input
                ref={(el) => (formRefs.current[0] = el)}
                type="text"
                className="p-1.5 sm:p-2 bg-white text-burntCopper"
                placeholder="Your Name"
              />
              <input
                ref={(el) => (formRefs.current[1] = el)}
                type="text"
                className="p-1.5 sm:p-2 bg-white text-burntCopper"
                placeholder="Your Email"
              />
              <button
                ref={(el) => (formRefs.current[2] = el)}
                className="uppercase p-1.5 sm:p-2 bg-burntCopper text-white cursor-pointer"
              >
                subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div  className="text-center p-2 sm:p-3 bg-burntCopper text-white font-marcellus text-xs sm:text-sm md:text-sm">
        <p>Richmond Renaissance | © 2025 All rights reserved</p>
      </div>
    </>
  );
};

export default Footer;