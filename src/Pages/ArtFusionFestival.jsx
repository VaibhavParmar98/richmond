import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaCheckCircle,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import Team from "../Components/Home/Team";
import ContactUs from "../Components/ContactUs";
import Slider from "../Components/Slider";
import Started from "../Components/Home/Started";

const ArtFusionFestival = () => {
  const heroRef = useRef(null);
  const eventDetailRef = useRef(null);
  const aboutEventRef = useRef(null);
  const eventProgramRef = useRef(null);
  const eventRegistrationRef = useRef(null);

    const buttonRef = useRef(null);
    const isButtonInView = useInView(buttonRef, { once: true, margin: "-50px" });

  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const eventDetailInView = useInView(eventDetailRef, {
    once: true,
    margin: "-50px",
  });
  const aboutEventInView = useInView(aboutEventRef, {
    once: true,
    margin: "-50px",
  });
  const eventProgramInView = useInView(eventProgramRef, {
    once: true,
    margin: "-50px",
  });
  const eventRegistrationInView = useInView(eventRegistrationRef, {
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
      key: "Organizer :",
      pair: "Santhome Basilica Team",
    },
    {
      key: "Event Date :",
      pair: "Santhome Basilica Team",
    },
    {
      key: "Time :",
      pair: "Santhome Basilica Team",
    },
    {
      key: "Cost :",
      pair: "Santhome Basilica Team",
    },
    {
      key: "Venue :",
      pair: "Santhome Basilica Team",
    },
    {
      key: "Adress :",
      pair: "Santhome Basilica Team",
    },
    {
      key: "E-Mail :",
      pair: "Santhome Basilica Team",
    },
    {
      key: "Number :",
      pair: "Santhome Basilica Team",
    },
    {
      key: "Website :",
      pair: "Santhome Basilica Team",
    },
  ];

  const programms = [
    {
      icon: <FaCheckCircle />,
      desc: "Opening Ceremony: Meet the artists and kick off festivities.",
    },
    {
      icon: <FaCheckCircle />,
      desc: "Live Art Demos: Watch creativity unfold in real-time.",
    },
    {
      icon: <FaCheckCircle />,
      desc: "DIY Workshops: Explore hands-on creative activities with experts.",
    },
    {
      icon: <FaCheckCircle />,
      desc: "Live Performances: Enjoy music, dance, and cultural showcases.",
    },
    {
      icon: <FaCheckCircle />,
      desc: "Craft Fair: Shop unique handcrafted items and local art.",
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
            src="https://iili.io/3V08nuj.png"
            alt="about banner"
            className="w-full h-[50vh] max-md:object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center max-md:gap-4">
            <h1 className="text-white text-4xl font-bold tracking-widest max-md:text-2xl max-md:text-center max-[480px]:text-[1.5rem]">
              ArtFusion Festival
            </h1>
            <p className="text-white tracking-widest max-md:text-[0.9rem] max-[480px]:text-[0.85rem]">
              Home / ArtFusion Festival
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={eventDetailRef}
          initial="hidden"
          animate={eventDetailInView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="max-w-6xl mx-auto md:px-6 px-6 lg:px-6 xl:px-0 py-20 max-md:p-4 max-md:py-8 max-[480px]:p-2 max-[480px]:py-6"
        >
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-3xl text-center">
              Event Detail
            </h1>
            <motion.img
              custom={0}
              initial="hidden"
              animate={eventDetailInView ? "visible" : "hidden"}
              variants={itemVariants}
              src="https://iili.io/3V17LWQ.png"
              alt=""
              className="mt-10 max-md:w-full max-md:h-auto"
            />
           <div className="ticker-container">
      <div className="ticker">
        <span>
          LocalArtShowcase | CommunityArtEvent | VibrantExpressions | CulturalCelebration | SupportLocalArtists | LivePerformances
        </span>
        <span>
          LocalArtShowcase | CommunityArtEvent | VibrantExpressions | CulturalCelebration | SupportLocalArtists | LivePerformances
        </span>
      </div>
    </div>
          </div>
        </motion.div>

        <motion.div
          ref={aboutEventRef}
          initial="hidden"
          animate={aboutEventInView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="flex gapsome gap-6 px-6 py-6 md:flex flex-col lg:flex-row xl:flex-row max-md:gap-8 max-w-6xl mx-auto"
        >
          <div className="flex flex-col gap-6 w-[800px] max-md:w-full">
            <h1 className="text-2xl sm:text-3xl md:text-3xl text-center  lg:text-left xl:text-left">
              About event
            </h1>
            <p className="text-sm sm:text-[14px] leading-5 text-center  lg:text-left xl:text-left">
              ArtFusion Festival unites local artists, creators, and innovators
              to showcase their talents through vibrant exhibitions, interactive
              workshops, and captivating live performances. This one-day
              celebration highlights diverse artistic expressions, providing a
              platform for emerging and established talent. Attendees can engage
              with the creative community, explore unique art forms, and
              experience a dynamic atmosphere that fosters meaningful
              connections while supporting local artists and enriching the
              cultural fabric of Richmond.
            </p>
            <div className="grid grid-cols-2 gap-4 md:grid md:grid-cols-3 max-md:justify-center max-md:gap-4">
              {[
                "https://iili.io/3V17Ug9.png",
                "https://iili.io/3V17rJe.png",
                "https://iili.io/3V17S07.png",
              ].map((src, idx) => (
                <motion.img
                  key={idx}
                  custom={idx}
                  initial="hidden"
                  animate={aboutEventInView ? "visible" : "hidden"}
                  variants={itemVariants}
                  src={src}
                  alt=""
                  className="w-60 h-60 object-cover max-md:w-full max-md:h-auto max-md:max-w-[200px] max-[480px]:max-w-[150px]"
                />
              ))}
            </div>
            <p className="text-sm sm:text-[14px] leading-5 text-center  lg:text-left xl:text-left">
              Attendees can immerse themselves in diverse art forms, engage with
              passionate creators, and witness the power of community-driven
              creativity. By supporting local talent, the festival nurtures
              cultural growth and strengthens community bonds.
            </p>
          </div>

          <div>
            <div>
              <h1 className="p-3 mt-6 text-xl bg-deepMaroon text-center text-white lg:w-80 xl:w-80 w-full max-md:w-full max-md:text-[1.2rem]">
                Details & Venue
              </h1>
              <div>
                {items.map((itm, idx) => (
                  <motion.div
                    key={idx}
                    custom={idx}
                    initial="hidden"
                    animate={aboutEventInView ? "visible" : "hidden"}
                    variants={itemVariants}
                    className="text-center md:text-left"
                  >
                    <p className="p-3 border text-sm tracking-widest text-center  lg:text-left xl:text-left font-semibold max-md:text-[0.85rem]">
                      {itm.key}
                      <span className="ml-2 font-medium text-center  lg:text-left xl:text-left">{itm.pair}</span>
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={eventProgramRef}
          initial="hidden"
          animate={eventProgramInView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="flex gap-6 px-6 lg:px-6 xl:px-0 max-md:flex-col max-md:gap-8 max-w-6xl mx-auto"
        >
          <div className="w-[800px] md:h-[500px] lg:h-[400px] xl:h-[400px]   bg-cream flex flex-col gap-6 relative p-10 max-md:w-full max-md:h-auto max-md:p-6">
            <h1 className="text-2xl sm:text-3xl md:text-3xl text-center md:text-left">
              Event Program
            </h1>
            <div className="flex flex-col gap-4">
              {programms.map((itm, idx) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  initial="hidden"
                  animate={eventProgramInView ? "visible" : "hidden"}
                  variants={itemVariants}
                  className="flex gap-6"
                >
                  <p className="flex gap-3 items-center max-md:text-[0.9rem] max-[480px]:text-[0.85rem]">
                    <span className="bg-deepTeelGreen">{itm.icon}</span>
                    {itm.desc}
                  </p>
                </motion.div>
              ))}
              <div className="flex justify-end mt-4">
             <motion.button
                              ref={buttonRef}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isButtonInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{
                                duration: 0.6,
                                ease: [0.68, -0.55, 0.265, 1.55],
                              }}
                              className="button font-medium hover:border bg-burntCopper hover:bg-black"
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
                              Add To Calender
                            </motion.button>
              </div>
            </div>
            <motion.img
              custom={0}
              initial="hidden"
              animate={eventProgramInView ? "visible" : "hidden"}
              variants={itemVariants}
              src="https://iili.io/3V1ZapV.png"
              alt="Event Decoration"
              className="absolute top-28 right-5 w-36 h-36 max-md:w-[100px] max-md:h-[100px] max-md:top-auto max-md:bottom-2 max-md:right-2 max-[480px]:w-[80px] max-[480px]:h-[80px]"
            />
          </div>
          <motion.div
            custom={0}
            initial="hidden"
            animate={eventProgramInView ? "visible" : "hidden"}
            variants={itemVariants}
          >
            <img
              src="https://iili.io/3V17Pbj.png"
              alt=""
              className="h-[400px] w-[327px] max-md:w-full max-md:h-auto max-md:max-w-[350px]"
            />
          </motion.div>
        </motion.div>

        <motion.div
          ref={eventRegistrationRef}
          initial="hidden"
          animate={eventRegistrationInView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="pt-10  max-w-6xl mx-auto "
        >
          <h1 className="text-3xl text-center max-md:text-[1.8rem] max-[480px]:text-[1.5rem]">
            Event registration
          </h1>
          <form className="flex flex-col gap-4 mt-8 items-center justify-center max-md:p-4 md:px-6 lg:px-6 px-0">
          <div className="flex lg:flex-row items-center justify-center  w-full xl:flex-row flex-col md:gap-2 gap-6">
  <motion.input
    initial="hidden"
    animate={eventRegistrationInView ? "visible" : "hidden"}
    variants={itemVariants}
    type="text"
    placeholder="First Name"
    className="border p-3 rounded-full lg:w-96 xl:w-96 w-full  max-md:text-[0.9rem] max-[480px]:text-[0.85rem]"
  />

  <motion.input
    initial="hidden"
    animate={eventRegistrationInView ? "visible" : "hidden"}
    variants={itemVariants}
    type="text"
    placeholder="Last Name"
    className="border p-3 rounded-full lg:w-96 xl:w-96 w-full  max-md:text-[0.9rem] max-[480px]:text-[0.85rem]"
  />
</div>

            <motion.input
              custom={2}
              initial="hidden"
              animate={eventRegistrationInView ? "visible" : "hidden"}
              variants={itemVariants}
              type="text"
              placeholder="Email"
              className="border p-3 rounded-full lg:w-[777px] xl:w-[777px] w-full max-md:text-[0.9rem] max-[480px]:text-[0.85rem]"
            />
            <motion.select
              custom={3}
              initial="hidden"
              animate={eventRegistrationInView ? "visible" : "hidden"}
              variants={itemVariants}
              className="text-black p-3 outline-none rounded-full lg:w-[777px] xl:w-[777px] w-full border cursor-pointer max-md:w-full max-md:max-w-full max-md:text-[0.9rem] max-[480px]:text-[0.85rem]"
            >
              <option value="">Select Event</option>
              <option value="option1">Event 1</option>
              <option value="option2">Event 2</option>
              <option value="option3">Event 3</option>
            </motion.select>
            <motion.button
              custom={4}
              initial="hidden"
              animate={eventRegistrationInView ? "visible" : "hidden"}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="uppercase hover:bg-black lg:w-[777px] xl:w-[777px] w-full transition-all duration-300 p-3 bg-burntCopper text-white rounded-full cursor-pointer max-md:w-full max-md:max-w-full max-md:text-[0.9rem] max-[480px]:text-[0.85rem]"
            >
              subscribe
            </motion.button>
            <motion.div
              custom={5}
              initial="hidden"
              animate={eventRegistrationInView ? "visible" : "hidden"}
              variants={itemVariants}
              className="flex items-center gap-4 mt-6 max-md:flex-col max-md:gap-4"
            >
              <p className="text-3xl max-md:text-[1.5rem] max-[480px]:text-[1.2rem]">
                Share This Event :
              </p>
              <ul className="flex items-center gap-3">
                {[
                  <FaFacebook className="text-3xl hover:text-burntCopper hover:scale-125 transition-all duration-500 cursor-pointer max-md:text-[1.5rem] max-[480px]:text-[1.2rem]" />,
                  <FaInstagram className="bg-black hover:bg-burntCopper hover:scale-125 cursor-pointer text-white text-3xl p-1 rounded-full max-md:text-[1.5rem] max-[480px]:text-[1.2rem]" />,
                  <FaTwitter className="bg-black hover:bg-burntCopper hover:scale-125 cursor-pointer text-white text-3xl p-1 rounded-full max-md:text-[1.5rem] max-[480px]:text-[1.2rem]" />,
                  <FaYoutube className="bg-black hover:bg-burntCopper hover:scale-125 cursor-pointer text-white text-3xl p-1 rounded-full max-md:text-[1.5rem] max-[480px]:text-[1.2rem]" />,
                ].map((icon, idx) => (
                  <motion.li
                    key={idx}
                    custom={idx + 6}
                    initial="hidden"
                    animate={eventRegistrationInView ? "visible" : "hidden"}
                    variants={itemVariants}
                  >
                    {icon}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <div className="border-b border-gray-300 mt-8 sm:mt-10" />
            <motion.div
  custom={10}
  initial="hidden"
  animate={eventRegistrationInView ? "visible" : "hidden"}
  variants={itemVariants}
  className="flex justify-between w-full mt-3 text-sm sm:text-[14px] leading-5"
>
  <p className="flex items-center gap-4">
    <span>
      <GoArrowLeft />
    </span>
    Previous Events
  </p>
  <p className="flex items-center gap-4">
    Next Events
    <span>
      <GoArrowRight />
    </span>
  </p>
</motion.div>

          </form>
        </motion.div>

        <div>
          <Team />
          <ContactUs />
          <Slider />
          <Started />
        </div>
      </div>
    </>
  );
};

export default ArtFusionFestival;
