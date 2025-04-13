import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image8 from '../assets/image8.png'
import image7 from '../assets/image7.png'

gsap.registerPlugin(ScrollTrigger);

const SuppoertLocla = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const donationRefs = useRef([]);
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

    donationRefs.current.forEach((donation, idx) => {
      gsap.fromTo(
        donation.querySelector("img"),
        { opacity: 0, x: idx === 0 ? -100 : 100 }, 
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: donation,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        donation.querySelector("h1"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: donation,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        donation.querySelector("p"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: donation,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        donation.querySelector(".progress-fill"),
        { width: "0%" },
        {
          width: idx === 0 ? "50%" : "38%", 
          duration: 1.2,
          ease: "power2.out",
          delay: 0.4,
          scrollTrigger: {
            trigger: donation,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        donation.querySelector(".percentage"),
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          delay: 0.6,
          scrollTrigger: {
            trigger: donation,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        donation.querySelector(".progress-details"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          delay: 0.7,
          scrollTrigger: {
            trigger: donation,
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
    <div ref={sectionRef} className="bg-champagneBeige py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-0 flex flex-col items-center justify-center font-marcellus">
        <div ref={headerRef} className="text-center flex flex-col gap-2 sm:gap-3">
          <p className="uppercase text-xs sm:text-sm">Support Local Art, Inspire Creativity</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl">Make a Lasting Impact Through Your Donation</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 mt-8 sm:mt-10">
          <div ref={(el) => (donationRefs.current[0] = el)} className="flex flex-col gap-4 sm:gap-6 w-full md:w-1/2">
            <img
              src={image8}
              alt="Support Local Artists"
              className="w-full h-auto object-cover"
            />
            <h1 className="text-lg sm:text-xl">Support Local Artists – Make a Difference Today!</h1>
            <p className="text-xs sm:text-sm">
              Your generous contribution helps empower local artists, fund community events,
              and create opportunities for emerging talent. Every donation nurtures creativity.
            </p>

            <div className="w-full mt-2">
              <div className="relative h-4 bg-white rounded-full">
                <div className="progress-fill absolute top-0 left-0 h-4 bg-[#2b0b0b] rounded-full w-1/2" />
                <div className="percentage absolute left-1/2 transform -translate-x-1/2 -top-5 sm:-top-6 text-xs sm:text-sm text-black font-semibold">
                  50%
                </div>
              </div>
              <div className="progress-details flex justify-between mt-2 text-xs sm:text-sm text-black font-semibold">
                <p>Raised: $25,000</p>
                <p>Goal: $50,000</p>
              </div>
            </div>
          </div>

          <div ref={(el) => (donationRefs.current[1] = el)} className="flex flex-col gap-4 sm:gap-6 w-full md:w-1/2">
            <img
              src={image7}
              alt="Fuel Creativity"
              className="w-full h-auto object-cover"
            />
            <h1 className="text-lg sm:text-xl">Fuel Creativity – Support Our Mission!</h1>
            <p className="text-xs sm:text-sm">
              Help us continue providing a platform for local artists to showcase their talent.
              Your support ensures that art thrives and inspires future generations.
            </p>

            <div className="w-full mt-2">
              <div className="relative h-4 bg-white rounded-full">
                <div className="progress-fill absolute top-0 left-0 h-4 bg-[#2b0b0b] rounded-full w-[38%]" />
                <div className="percentage absolute left-[38%] transform -translate-x-1/2 -top-5 sm:-top-6 text-xs sm:text-sm text-black font-semibold">
                  38%
                </div>
              </div>
              <div className="progress-details flex justify-between mt-2 text-xs sm:text-sm text-black font-semibold">
                <p>Raised: $15,000</p>
                <p>Goal: $40,000</p>
              </div>
            </div>
          </div>
        </div>
        <button
ref={buttonRef}
className="button font-medium bg-burntCopper
 hover:bg-black mt-10"
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
 More Donation
</button>
      </div>
    </div>
  );
};

export default SuppoertLocla;