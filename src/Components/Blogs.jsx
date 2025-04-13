import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image9 from '../assets/image9.png'
import image11 from '../assets/image11.png'
import image10 from '../assets/image10.png'
import image12 from '../assets/image12.png'

gsap.registerPlugin(ScrollTrigger);

const Blogs = () => {
  const items = [
    {
      img: image9,
      date: "March 21, 2024",
      title: "Exploring Emerging Trends in Local Art",
      button: "Read More ...",
    },
    {
      img: image11,
      date: "March 21, 2024",
      title: "Tips to Support and Promote Local Artists",
      button: "Read More ...",
    },
    {
      img: image10,
      date: "March 21, 2024",
      title: "Artist Spotlight: Inspiring Journeys and Stories",
      button: "Read More ...",
    },
    {
      img: image12,
      date: "March 21, 2024",
      title: "Upcoming Art Events You Can’t Miss",
      button: "Read More ...",
    },
  ];

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const moreBlogsButtonRef = useRef(null);
  const dividerRef = useRef(null);
  const blogCardsRef = useRef([]);

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

    gsap.fromTo(
      moreBlogsButtonRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: moreBlogsButtonRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      dividerRef.current,
      { width: "0%" },
      {
        width: "100%",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: dividerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    blogCardsRef.current.forEach((card, idx) => {
      gsap.fromTo(
        card.querySelector("img"),
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        card.querySelector(".date"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          delay: 0.2,
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
          delay: 0.3,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        card.querySelector("button"),
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          delay: 0.4,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
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
    <div ref={sectionRef} className="py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto font-marcellus px-4 sm:px-6 md:px-0">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 sm:gap-6">
          <div ref={headerRef} className="flex flex-col gap-2 sm:gap-3">
            <p className="text-xs sm:text-sm">BRIDGES</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl">Latest news & Blogs</h1>
          </div>
          <button
            ref={moreBlogsButtonRef}
            className="button bg-burntCopper hover:bg-black"
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
  More Blogs
</button>
        </div>

        <div ref={dividerRef} className="border-b-0 border mt-8 sm:mt-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-10 md:gap-16 mt-8 sm:mt-12 md:mt-16">
          {items.map((itm, idx) => (
            <div
              key={idx}
              ref={(el) => (blogCardsRef.current[idx] = el)}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <img
                src={itm.img}
                alt={itm.title}
                className="w-full sm:w-40 md:w-48 h-32 sm:h-36 md:h-40 object-cover"
              />
              <div className="flex flex-col gap-3 sm:gap-4">
                <p className="date text-xs sm:text-sm">{itm.date}</p>
                <h1 className="text-lg sm:text-xl">{itm.title}</h1>
                <button className="text-sm font-bold hover:underline hover:text-deepMaroon cursor-pointer transition-all duration-300 sm:text-sm  text-burntCopper w-28 sm:w-32">
                  {itm.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;