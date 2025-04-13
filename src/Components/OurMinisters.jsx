import React, { useEffect, useRef } from "react";
import { GiChurch, GiPrayer } from "react-icons/gi";
import { FaHandHoldingHeart, FaUsers } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurMinisters = () => {
  const items = [
    {
      icons: <FaHandHoldingHeart />,
      title: "What we believe",
      desc: "In nurturing local talent, fostering creativity, and building a vibrant community where artists thrive, inspire, and connect with a wider audience.",
    },
    {
      icons: <GiChurch />,
      title: "What to expect",
      desc: "Explore diverse artwork, engage with talented artists, participate in inspiring events, and become part of a supportive community that celebrates creativity.",
    },
    {
      icons: <GiPrayer />,
      title: "Art History",
      desc: "Explore the evolution of styles, techniques, and cultural influences that have shaped the vibrant world of art today.",
    },
    {
      icons: <FaUsers />,
      title: "Meeting Events",
      desc: "Connect with artists, enthusiasts, and industry experts through inspiring events that foster collaboration, creativity, and community growth.",
    },
  ];

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      headerRef.current,
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

    cardsRef.current.forEach((card, idx) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: idx * 0.2, 
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        card.querySelector("span"), 
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          delay: idx * 0.2 + 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        card.querySelector("h1"), 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          delay: idx * 0.2 + 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        card.querySelector("p"), 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          delay: idx * 0.2 + 0.3,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: buttonRef.current,
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
    <div ref={sectionRef} className="bg-deepMaroon">
      <div className="max-w-6xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center font-marcellus justify-center text-white">
        <div ref={headerRef} className="text-center flex flex-col gap-2">
          <p className="text-xs sm:text-sm">OUR MINISTRIES</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl">Empowering Faith, Embracing Diversity</h1>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8 sm:mt-10">
          {items.map((itm, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="flex flex-col gap-3 sm:gap-4 border p-4 sm:py-8 w-full sm:w-56 md:w-60 h-auto min-h-56 sm:h-60"
            >
              <span className="text-3xl sm:text-3xl">{itm.icons}</span>
              <h1 className="text-base sm:text-base">{itm.title}</h1>
              <p className="text-xs sm:text-xs">{itm.desc}</p>
            </div>
          ))}
        </div>
        <button
ref={buttonRef}
className="button font-medium bg-burntCopper
 hover:bg-white hover:text-burntCopper mt-10"
  style={{ "--clr": "#AA7446" }}
>
  <span className="button__icon-wrapper text-burntCopper border border-burntCopper">
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
  Watch Video
</button>
      </div>
    </div>
  );
};

export default OurMinisters;