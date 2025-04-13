import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const TestimonialSection = () => {
  // Refs for elements to animate
  const testimonialRef = useRef(null);
  const textRef = useRef(null);
  const playButtonRef = useRef(null);
  const progressBarRef = useRef(null);
  const thumbRef = useRef(null);
  const durationStartRef = useRef(null);
  const durationEndRef = useRef(null);
  const volumeBarRef = useRef(null);
  const volumeThumbRef = useRef(null);

  useEffect(() => {
    const testimonial = testimonialRef.current;

    // Animate testimonial text
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: testimonial,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate play button
    gsap.fromTo(
      playButtonRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: testimonial,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate progress bar fill
    gsap.fromTo(
      progressBarRef.current,
      { width: "0%" },
      {
        width: "33%", // Matches w-1/3
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: testimonial,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate progress bar thumb
    gsap.fromTo(
      thumbRef.current,
      { opacity: 0, x: -10 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.5, // Appears after bar starts filling
        scrollTrigger: {
          trigger: testimonial,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate duration texts (00:00 and 15:30)
    gsap.fromTo(
      durationStartRef.current,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: testimonial,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      durationEndRef.current,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: testimonial,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate volume bar fill
    gsap.fromTo(
      volumeBarRef.current,
      { width: "0%" },
      {
        width: "66%", // Matches w-2/3
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: testimonial,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate volume bar thumb
    gsap.fromTo(
      volumeThumbRef.current,
      { opacity: 0, x: -10 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.5, // Appears after bar starts filling
        scrollTrigger: {
          trigger: testimonial,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Cleanup ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={testimonialRef}
      className="bg-burntCopper font-marcellus text-white p-4 sm:p-6 md:p-8 max-w-full sm:max-w-2xl md:max-w-3xl mx-auto shadow-lg"
    >
      <div ref={textRef}>
        <p className="text-xs sm:text-sm md:text-sm">
          Joining This Website Has Been A Game-Changer For Me. It Has Given Me Exposure, Connected Me
          With Fellow Artists, And Inspired Me To Create More. The Supportive Community And Opportunities
          Provided Have Truly Helped Me Grow And Showcase My Work With Confidence. I'm Incredibly Thankful
          For This Experience And Continued Support. Through The Various Events, Workshops, And Collaborations,
          I’ve Gained Valuable Knowledge And Built Lasting Relationships With Other Creatives.
        </p>
      </div>

      <div className="mt-6 sm:mt-8 border border-white p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <div
            ref={playButtonRef}
            className="w-12 sm:w-14 md:w-14 h-12 sm:h-14 md:h-14 bg-gray-100 text-black rounded-full flex items-center justify-center cursor-pointer"
          >
            <svg className="w-5 sm:w-6 md:w-6 h-5 sm:h-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>

          <div className="flex-1 w-full">
            <div ref={durationStartRef} className="text-xs sm:text-sm md:text-sm mb-1">
              00:00
            </div>
            <div className="relative w-full h-1 bg-white rounded-full">
              <div
                ref={progressBarRef}
                className="absolute top-0 left-0 h-1 bg-yellow-400 rounded-full w-1/3"
              ></div>
              <div
                ref={thumbRef}
                className="absolute -top-1 left-1/3 w-2 sm:w-3 md:w-3 h-2 sm:h-3 md:h-3 bg-yellow-400 rounded-full"
              ></div>
            </div>
          </div>

          <div ref={durationEndRef} className="text-xs sm:text-sm md:text-sm ml-0 sm:ml-2">
            15:30
          </div>

          <div className="flex items-center gap-2 ml-0 sm:ml-4 mt-3 sm:mt-0">
            <svg className="w-4 sm:w-5 md:w-5 h-4 sm:h-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 10v4h4l5 5V5l-5 5H3z" />
            </svg>
            <div className="relative w-20 sm:w-24 md:w-24 h-1 bg-white rounded-full">
              <div
                ref={volumeBarRef}
                className="absolute top-0 left-0 h-1 bg-yellow-400 rounded-full w-2/3"
              ></div>
              <div
                ref={volumeThumbRef}
                className="absolute -top-1 left-2/3 w-2 sm:w-3 md:w-3 h-2 sm:h-3 md:h-3 bg-yellow-400 rounded-full"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;