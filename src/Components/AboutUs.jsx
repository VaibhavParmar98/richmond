import React, { useEffect, useRef } from "react";
import {
  FaLightbulb,
  FaProjectDiagram,
  FaCog,
  FaHandHoldingUsd,
} from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image4 from '../assets/image4.png'
import image6 from '../assets/image6.png'


gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const items = [
    {
      icon: (
        <FaLightbulb className="text-2xl sm:text-3xl p-1.5 bg-burntCopper rounded-full text-white" />
      ),
      title: "Showcase Your Talent",
      desc: "Gain visibility and recognition by displaying your artwork to a broader audience.",
    },
    {
      icon: (
        <FaProjectDiagram className="text-2xl sm:text-3xl p-1.5 bg-burntCopper rounded-full text-white" />
      ),
      title: "Connect with the Community",
      desc: "Build meaningful relationships with fellow artists, enthusiasts, and supporters.",
    },
    {
      icon: (
        <FaCog className="text-2xl sm:text-3xl p-1.5 bg-burntCopper rounded-full text-white" />
      ),
      title: "Enhance Your Skills",
      desc: "Participate in workshops and events to develop and refine your artistic abilities.",
    },
    {
      icon: (
        <FaHandHoldingUsd className="text-2xl sm:text-3xl p-1.5 bg-burntCopper rounded-full text-white" />
      ),
      title: "Sell and Earn",
      desc: "Monetize your creativity by selling your artwork directly to art lovers.",
    },
  ];

  const sectionRef = useRef(null);
  const itemsRef = useRef([]);
  const imagesRef = useRef([]);
  const statsRef = useRef([]);
  const buttonsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;

    itemsRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    imagesRef.current.forEach((img) => {
      gsap.fromTo(
        img,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    statsRef.current.forEach((stat) => {
      const number = stat.querySelector("h1");
      const text = stat.querySelector("p");
      const endValue = parseInt(number.textContent.replace(/[^0-9]/g, ""));
      const hasPlus = number.textContent.includes("+");

      gsap.fromTo(
        { value: 0 },
        { value: endValue },
        {
          duration: 1.5,
          ease: "power1.out",
          scrollTrigger: {
            trigger: stat,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          onUpdate: function () {
            const currentValue = Math.ceil(this.targets()[0].value);
            number.textContent = currentValue + (hasPlus ? "+" : "");
          },
        }
      );

      gsap.fromTo(
        text,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stat,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    buttonsRef.current.forEach((btn) => {
      gsap.fromTo(
        btn,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: btn,
            start: "top 90%",
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
    <div ref={sectionRef}>
      <div className="max-w-6xl mx-auto font-marcellus py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-20">
          <div className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-xs sm:text-sm uppercase">about us</p>
              <h2 className="text-2xl sm:text-3xl md:text-3xl">
                Fostering Creativity, Connecting <br /> Communities, Inspiring
                Growth 🌟
              </h2>
              <p className="text-xs sm:text-sm">
                We empower local artists by providing a platform to showcase
                their work, connect with the community, and inspire creativity.
                Join us in celebrating and supporting artistic talent in every
                form and beyond, fostering lasting connections.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
              {items.map((itm, idx) => (
                <div
                  key={idx}
                  ref={(el) => (itemsRef.current[idx] = el)}
                  className="flex gap-3 sm:gap-4"
                >
                  <span>{itm.icon}</span>
                  <div className="flex flex-col gap-1 sm:gap-2">
                    <h1 className="font-medium text-sm sm:text-base">
                      {itm.title}
                    </h1>
                    <p className="text-xs sm:text-sm">{itm.desc}</p>
                  </div>
                </div>
              ))}
                             


            </div>
            <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8 text-xs sm:text-sm">
            <button
ref={(el) => (buttonsRef.current[0] = el)}
className="button font-medium bg-deepMaroon
 hover:bg-black "
  style={{ "--clr": "#AA7446" }}
>
  <span className="button__icon-wrapper hover:text-black text-deepMaroon">
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
<button
ref={(el) => (buttonsRef.current[1] = el)}
className="button font-medium bg-burntCopper
 hover:bg-black "
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
 Contact Us
</button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-4 sm:gap-6 mt-6 md:mt-0">
            <img
              ref={(el) => (imagesRef.current[0] = el)}
              src={image4}
              alt=""
              className="w-full max-w-xs sm:max-w-sm md:max-w-none md:w-1/2 mt-4 md:mt-6 object-cover rounded-xl"
            />
            <div className="flex flex-col gap-4 sm:gap-6">
              <img
                ref={(el) => (imagesRef.current[1] = el)}
                src={image6}
                alt=""
                className="w-full max-w-xs sm:max-w-sm md:max-w-none md:w-64 h-40 sm:h-48 md:h-52 object-cover rounded-xl"
              />
              <div className="flex flex-col gap-4 sm:gap-6 ml-0 md:ml-10">
                <div
                  ref={(el) => (statsRef.current[0] = el)}
                  className="flex flex-col gap-2 sm:gap-4"
                >
                  <h1 className="text-xl sm:text-2xl font-semibold">500+</h1>
                  <p className="text-xs sm:text-sm">
                    Empowering creative talents by <br /> showcasing their work.
                  </p>
                </div>
                <div
                  ref={(el) => (statsRef.current[1] = el)}
                  className="flex flex-col gap-2 sm:gap-4"
                >
                  <h1 className="text-xl sm:text-2xl font-semibold">10,000+</h1>
                  <p className="text-xs sm:text-sm">
                    Building a thriving network of artists <br /> and supporters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
