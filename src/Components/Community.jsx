import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TestimonialSection from "./TestimonialSection ";
import image13 from '../assets/image13.png'
import frame1 from '../assets/Frame1.png'

gsap.registerPlugin(ScrollTrigger);

const Community = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const smallImageRef = useRef(null);
  const largeImageRef = useRef(null);
  const testimonialRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      headerRef.current.querySelector("p:first-child"), 
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

    gsap.fromTo(
      headerRef.current.querySelector("p:last-child"), 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      smallImageRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: smallImageRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      largeImageRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: largeImageRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      testimonialRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: testimonialRef.current,
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
    <div ref={sectionRef} className="bg-deepMaroon py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto font-marcellus px-4 sm:px-6 md:px-0 flex flex-col md:flex-row md:gap-20 gap-6 sm:gap-10">
        <div className="flex flex-col w-full">
          <div ref={headerRef} className="flex flex-col md:flex-row md:justify-between gap-4 sm:gap-6">
            <div className="text-white flex flex-col gap-3 sm:gap-4">
              <p className="text-xs sm:text-sm">What Our Community Says</p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl">
                Voices of Appreciation, <br /> Trust, and Inspiration
              </h1>
              <p className="text-xs sm:text-sm">
                Hear from artists, art lovers, and supporters who have experienced the impact of our platform. Their stories highlight the value of nurturing local talent and fostering a creative community.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <img
                ref={smallImageRef}
                src={frame1}
                alt=""
                className="w-full max-w-24 sm:max-w-32 md:max-w-none object-cover"
              />
            </div>
          </div>
          <div ref={testimonialRef} className="mt-8 sm:mt-10">
            <TestimonialSection />
          </div>
        </div>

        <div className="mt-6 md:mt-0">
          <img
            ref={largeImageRef}
            src={image13}
            alt=""
            className="w-full h-auto sm:h-96 md:h-[510px] md:w-[900px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Community;