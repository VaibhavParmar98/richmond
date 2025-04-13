import React, { useEffect, useRef } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image16 from '../assets/image16.png'
import image17 from '../assets/image17.png'
import image18 from '../assets/image18.png'
import image19 from '../assets/image19.png'

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const items = [
    {
      img: image16,
      name: "Christopher Paul",
      position: "Founder & Creative Director",
      social: [
        { icon: <FaFacebook /> },
        { icon: <FaInstagram /> },
        { icon: <FaTwitter /> },
        { icon: <FaYoutube /> },
      ],
    },
    {
      img: image18,
      name: "Mark Hagne",
      position: "Community Manager",
      social: [
        { icon: <FaFacebook /> },
        { icon: <FaInstagram /> },
        { icon: <FaTwitter /> },
        { icon: <FaYoutube /> },
      ],
    },
    {
      img: image17,
      name: "Michelle Parker",
      position: "Photographer",
      social: [
        { icon: <FaFacebook /> },
        { icon: <FaInstagram /> },
        { icon: <FaTwitter /> },
        { icon: <FaYoutube /> },
      ],
    },
    {
      img: image19,
      name: "Mia Chen",
      position: "Event Coordinator",
      social: [
        { icon: <FaFacebook /> },
        { icon: <FaInstagram /> },
        { icon: <FaTwitter /> },
        { icon: <FaYoutube /> },
      ],
    },
  ];

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const descRef = useRef(null);
  const teamCardsRef = useRef([]);

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
      descRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2, 
        scrollTrigger: {
          trigger: descRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    teamCardsRef.current.forEach((card, idx) => {
      gsap.fromTo(
        card.querySelector("img"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
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
        card.querySelector("h1"),
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
        card.querySelector("p"),
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
        card.querySelectorAll(".social-icon"),
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          stagger: 0.1,
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
    <div ref={sectionRef} className="py-20">
      <div className="max-w-6xl mx-auto font-marcellus px-4 sm:px-6 md:px-0">
        <div className="flex flex-col md:flex-row md:justify-between gap-4 sm:gap-6">
          <div ref={headerRef} className="flex flex-col gap-4">
            <p className="text-sm">CHURCH PASTORS</p>
            <h1 className="text-3xl">Our Passionate Team Behind the Vision</h1>
          </div>
          <div ref={descRef} className="flex gap-3 mt-4 md:mt-0">
            <img src="/fram2.png" alt="" className="w-9 h-10 object-cover" />
            <p className="text-sm">
              Get to Know Our Passionate Team Dedicated to Empowering Local Artists, <br /> Showcasing Talent, and Building a Thriving Creative Community Together.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap justify-between mt-16 items-center gap-4 sm:gap-6">
          {items.map((itm, idx) => (
            <div
              key={idx}
              ref={(el) => (teamCardsRef.current[idx] = el)}
              className="flex flex-col gap-3 items-center justify-center"
            >
              <img
                src={itm.img}
                alt={itm.name}
                className="w-full max-w-48 sm:max-w-56 md:w-64 object-cover"
              />
              <h1 className="mt-4 text-xl">{itm.name}</h1>
              <p className="text-sm text-gray-500">{itm.position}</p>
              <div className="flex gap-2 items-center justify-center text-xl sm:text-lg md:text-xl">
                {itm.social.map((s, i) => (
                  <span key={i} className="social-icon">
                    {s.icon}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;