import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MdAdd, MdRemove } from "react-icons/md";
import Help from "../Components/Help";
import ContactUs from "../Components/ContactUs";
import Slider from "../Components/Slider";
import Started from "../Components/Home/Started";

const Faq = () => {
  const heroRef = useRef(null);
  const faqRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-50px" });

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

  const faqData = [
    {
      question: "What is ArtFusion Festival?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      question: "How Can I Participate As An Artist?",
      answer:
        "Artists eager to showcase their talents at ArtFusion Festival can apply by submitting their portfolios and completing the registration form on our website. Upon selection, artists will receive an official confirmation, event guidelines, booth setup details, and detailed instructions via email to ensure a smooth and successful participation experience.",
    },
    {
      question: "Are Tickets Available Online?",
      answer: "Yes, you can purchase tickets online.",
    },
    {
      question: "Is The Event Family-Friendly?",
      answer: "Absolutely, it's for all age groups.",
    },
    {
      question: "Where Is The Festival Located?",
      answer: "The festival is located downtown at XYZ.",
    },
    {
      question: "How Can I Volunteer For The Event?",
      answer: "You can volunteer by applying through our website.",
    },
    {
      question: "What Type Of Workshops Are Available?",
      answer: "Various workshops including painting, dance, and music.",
    },
    {
      question: "Can I Purchase Artwork At The Festival?",
      answer: "Yes, various artworks will be available for purchase.",
    },
    {
      question: "Is Parking Available At The Venue?",
      answer: "Parking is available nearby the venue.",
    },
    {
      question: "Are There Food And Beverage Options?",
      answer: "Yes, there are multiple food stalls and cafes.",
    },
    {
      question: "Can I Bring My Pet To The Festival?",
      answer: "Unfortunately, pets are not allowed except service animals.",
    },
    {
      question: "Is There An Age Limit For Workshops?",
      answer: "Some workshops may have age restrictions.",
    },
    {
      question: "How Do I Become A Sponsor?",
      answer: "You can contact us via the sponsorship form.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white font-marcellus">
      <motion.div
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="relative"
      >
        <img
          src="https://iili.io/3VVHRta.png"
          alt="about banner"
          className="w-full h-[50vh] max-md:object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center">
          <h1 className="text-white text-4xl font-bold tracking-widest">FAQ</h1>
          <p className="text-white tracking-widest">Home / FAQ</p>
        </div>
      </motion.div>

      <motion.div
        ref={faqRef}
        initial="hidden"
        animate={faqInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between py-20 px-4"
      >
        <div className="flex flex-col gap-6 w-full md:w-[400px]">
          <motion.h1
            custom={0}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-3xl text-center md:text-left"
          >
            Frequently Asking <br className="hidden md:block" />
            Questions
          </motion.h1>
          <motion.p
            custom={1}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            variants={itemVariants}
            className="text-sm sm:text-[14px] leading-5 text-center md:text-left"
          >
            Everything You Need to Know Before Attending,{" "}
            <br className="hidden md:block" /> Participating, Volunteering, and
            Enjoying the Experience!
          </motion.p>
          <motion.img
            custom={2}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            variants={itemVariants}
            src="https://iili.io/3VVEtMF.png"
            alt=""
            className="mt-20 w-full h-[300px] md:w-[400px] md:h-[550px] md:mb-0 lg:mb-0 mb-4"
          />
        </div>

        <div className="space-y-2 w-full md:w-[600px]">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              custom={3 + index}
              initial="hidden"
              animate={faqInView ? "visible" : "hidden"}
              variants={itemVariants}
              className={`rounded overflow-hidden ${
                openIndex === index ? "border" : ""
              } w-full transition-all duration-300`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex items-center justify-between p-4 text-left ${
                  openIndex === index ? "bg-white text-black" : "bg-cream"
                } transition-all duration-300`}
              >
                {item.question}
                <span className="text-xl cursor-pointer">
                  {openIndex === index ? <MdRemove /> : <MdAdd />}
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 text-sm bg-white px-4 ${
                  openIndex === index
                    ? "grid-rows-[1fr] pb-2 opacity-100"
                    : "grid-rows-[0fr] py-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="overflow-hidden">{item.answer}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div>
        <Help />
        <ContactUs />
        <Slider />
        <Started />
      </div>
    </div>
  );
};

export default Faq;
