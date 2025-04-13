import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image21 from '../assets/image21.png'

gsap.registerPlugin(ScrollTrigger);

const Video = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const buttonsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      videoRef.current,
      { opacity: 0.7 },
      {
        opacity: 0.9,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    buttonsRef.current.forEach((button, idx) => {
      gsap.fromTo(
        button,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          delay: idx * 0.2, 
          scrollTrigger: {
            trigger: button,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full h-[500px] flex items-center justify-center overflow-hidden font-marcellus">
      <div className="absolute inset-0">
        <img src={image21} alt=""           className="w-full h-full object-cover blur-xs opacity-90"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white">
        <h1
          ref={titleRef}
          className="text-3xl md:text-4xl mb-6 text-white drop-shadow-lg"
        >
          Experience Creativity Through Inspiring Visual Stories
        </h1>

        <div className="flex gap-6">
        <button
ref={(el) => (buttonsRef.current[0] = el)}
className="button font-medium bg-vintageBronze
 hover:bg-black "
  style={{ "--clr": "#A99C67" }}
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
 Watch video
</button>
<button
ref={(el) => (buttonsRef.current[1] = el)}
className="button font-medium bg-transparent border border-black
 hover:bg-black "
  style={{ "--clr": "#000000" }}
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
 Contact Us
</button>
        </div>
      </div>
    </div>
  );
};

export default Video;