import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HiOutlineArrowRightCircle } from "react-icons/hi2";
import Team from "../Components/Home/Team";
import ContactUs from "../Components/ContactUs";
import Slider from "../Components/Slider";
import Started from "../Components/Home/Started";
import Album from "../Components/Album";

const Event = () => {
  const heroRef = useRef(null);
  const eventScheduleRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const eventScheduleInView = useInView(eventScheduleRef, {
    once: true,
    margin: "-50px",
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: (idx) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: idx * 0.2 },
    }),
  };

  const items = [
    {
      date: "05 June",
      title: "ArtFusion Festival",
      time: "10:00am - 01:00am",
      button: "Book Now",
    },
    {
      date: "10 June",
      title: "ArtFusion Festival",
      time: "09:00am - 03:00am",
      button: <HiOutlineArrowRightCircle className="text-2xl" />,
    },
    {
      date: "13 June",
      title: "ArtFusion Festival",
      time: "09:30am - 02:30am",
      button: <HiOutlineArrowRightCircle className="text-2xl" />,
    },
    {
      date: "18 June",
      title: "ArtFusion Festival",
      time: "09:00am - 12:00am",
      button: <HiOutlineArrowRightCircle className="text-2xl" />,
    },
  ];

  const events = [
    {
      date: "05 June",
      title: "Local Lens Film Fest",
      time: "09:00am - 12:00am",
      button: <HiOutlineArrowRightCircle className="text-2xl" />,
    },
    {
      date: "10 June",
      title: "Idea Ignite Workshops",
      time: "10:00am - 01:00am",
      button: <HiOutlineArrowRightCircle className="text-2xl" />,
    },
    {
      date: "13 June",
      title: "Storytelling Spotlight",
      time: "09:00am - 03:00am",
      button: <HiOutlineArrowRightCircle className="text-2xl" />,
    },
    {
      date: "18 June",
      title: "Creative Sparks Showcase",
      time: "09:30am - 02:30am",
      button: <HiOutlineArrowRightCircle className="text-2xl" />,
    },
  ];

  return (
    <>
      <div className="bg-white font-marcellus">
        <motion.div
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="relative"
        >
          <img
            src="https://iili.io/3VcsuoJ.png"
            alt="about banner"
            className="w-full max-md:h-[50vh] max-md:object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center">
            <h1 className="text-white text-4xl font-bold tracking-widest">
              Events
            </h1>
            <p className="text-white tracking-widest">Home / Events</p>
          </div>
        </motion.div>

        <motion.div
          ref={eventScheduleRef}
          initial="hidden"
          animate={eventScheduleInView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="py-20 max-w-6xl mx-auto px-4"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2 flex flex-col gap-3">
              <motion.p
                custom={0}
                initial="hidden"
                animate={eventScheduleInView ? "visible" : "hidden"}
                variants={itemVariants}
                className="text-xs sm:text-sm uppercase text-center md:text-left"
              >
                CALENDER
              </motion.p>
              <motion.h1
                custom={1}
                initial="hidden"
                animate={eventScheduleInView ? "visible" : "hidden"}
                variants={itemVariants}
                className="text-2xl sm:text-3xl md:text-3xl text-center md:text-left"
              >
                Event Schedule Upcoming events
              </motion.h1>
            </div>
            <motion.p
              custom={2}
              initial="hidden"
              animate={eventScheduleInView ? "visible" : "hidden"}
              variants={itemVariants}
              className="w-full md:w-1/2 text-sm sm:text-[14px] leading-5 text-center md:text-left"
            >
              Explore a vibrant lineup of exhibitions, hands-on workshops, and
              engaging community gatherings that celebrate local creativity,
              connect artists with audiences, and inspire meaningful connections
              through art, culture, and shared experiences.
            </motion.p>
          </div>

          <div className="border-b mt-8 sm:mt-10" />

          <div className="py-10 flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <motion.p
                custom={3}
                initial="hidden"
                animate={eventScheduleInView ? "visible" : "hidden"}
                variants={itemVariants}
                className="bg-deepMaroon p-4 text-white text-center w-full rounded-lg"
              >
                June 2025
              </motion.p>
              <div className="mt-10 flex flex-col gap-4">
                {items.map((itm, idx) => (
                  <motion.div
                    key={idx}
                    custom={4 + idx}
                    initial="hidden"
                    animate={eventScheduleInView ? "visible" : "hidden"}
                    variants={itemVariants}
                    className={`flex flex-col sm:flex-row justify-between items-center border p-4 rounded-lg
                      ${idx === 0 ? "bg-vintageBronze text-white" : "bg-white"}
                    `}
                  >
                    <div>{itm.date}</div>
                    <div>{itm.title}</div>
                    <div>{itm.time}</div>
                    <div
                      className={`cursor-pointer flex justify-center items-center mt-2 sm:mt-0
                        ${
                          idx === 0
                            ? "bg-burntCopper px-3 py-1 rounded text-white"
                            : ""
                        }
                      `}
                    >
                      {itm.button}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              custom={8}
              initial="hidden"
              animate={eventScheduleInView ? "visible" : "hidden"}
              variants={itemVariants}
              className="w-full md:w-1/2 flex justify-center"
            >
              <img
                src="https://iili.io/3VlAKcG.png"
                alt="event"
                className="w-full md:h-[400px] lg:h-[400px] max-w-md"
              />
            </motion.div>
          </div>

          <div className="py-10 flex flex-col md:flex-row gap-6">
            <motion.div
              custom={9}
              initial="hidden"
              animate={eventScheduleInView ? "visible" : "hidden"}
              variants={itemVariants}
              className="w-full md:w-1/2 flex justify-center"
            >
              <img
                src="https://iili.io/3V0JbnV.png"
                alt="event"
                className="w-full max-w-md md:h-[400px] lg:h-[400px]"
              />
            </motion.div>
            <div className="w-full md:w-1/2">
              <motion.p
                custom={10}
                initial="hidden"
                animate={eventScheduleInView ? "visible" : "hidden"}
                variants={itemVariants}
                className="bg-deepMaroon p-4 text-white text-center w-full rounded-lg"
              >
                June 2025
              </motion.p>
              <div className="mt-10 flex flex-col gap-4">
                {events.map((itm, idx) => (
                  <motion.div
                    key={idx}
                    custom={11 + idx}
                    initial="hidden"
                    animate={eventScheduleInView ? "visible" : "hidden"}
                    variants={itemVariants}
                    className={`flex flex-col sm:flex-row justify-between items-center border p-4 rounded-lg
                      ${idx === 0 ? "bg-vintageBronze text-white" : "bg-white"}
                    `}
                  >
                    <div>{itm.date}</div>
                    <div>{itm.title}</div>
                    <div>{itm.time}</div>
                    <div className="flex justify-center mt-2 sm:mt-0">
                      {itm.button}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div>
          <Album />
          <Team />
          <ContactUs />
          <Slider />
          <Started />
        </div>
      </div>
    </>
  );
};

export default Event;
