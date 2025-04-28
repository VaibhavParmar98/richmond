import { useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const EventSchedule = () => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: false });
  const events = [
    {
      keyStakeholder: "High-School Age Youth",
      communityPartner: "RYSE",
      dateTime: "Monday, May 19th, 4:00PM - 6:30PM",
      location: "RYSE",
      uniqueConcept:
        "Youth artist Sharing Pieces at the beginning of the session",
    },
    {
      keyStakeholder: "Elementary and Middle School Groups",
      communityPartner: "East Bay Center for the Performing Arts",
      dateTime: "TBD",
      location: "EBCPA",
      uniqueConcept: "Community Visioning for EBCPA Stakeholders",
    },
    {
      keyStakeholder: "Business Community",
      communityPartner: "Richmond Main Street RMSI / Chamber of Commerce",
      dateTime: "Wednesday, May 28th, 5:00 PM",
      location: "Gallery",
      uniqueConcept: "Will be at the Richmond Bart Plaza, featuring live music",
    },
    {
      keyStakeholder: "Historical Groups",
      communityPartner: "Richmond Museum of History and Culture (RHMC)",
      dateTime: "Sunday, May 25th, 5:00 PM",
      location: "Museum, Main gallery",
      uniqueConcept: "Local Artist Social Gathering",
    },
    {
      keyStakeholder:
        "Anti-Displacement and Environmental Justice (In Spanish)",
      communityPartner:
        "Alliance of Californians For Community Empowerment (ACCE)",
      dateTime: "TBD",
      location: "ACCE",
      uniqueConcept: "Co-Led by Tenant Leaders of Color",
    },
    {
      keyStakeholder: "Artist of Color",
      communityPartner: "Rich City Rides",
      dateTime: "Saturday, May 31st, 5:00PM - 8:00PM",
      location: "RCR Gallery",
      uniqueConcept: "BIPOC Artist Empowerment and Mixer",
    },
    {
      keyStakeholder: "Small Businesses (In Spanish)",
      communityPartner: "23rd St. Merchants Association",
      dateTime: "Sunday, May 4th, All Day",
      location: "Cinco de Mayo Festival",
      uniqueConcept: "Cinco de Mayo Festival",
    },
    {
      keyStakeholder: "Richmond Arts",
      communityPartner: "VAR / RAC",
      dateTime: "Saturday, May 10th, 1:00PM - 3:00PM",
      location: "RAC",
      uniqueConcept: "",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: [0.68, -0.55, 0.265, 1.55] }}
      className="bg-champagneBeige py-10 flex items-center justify-center flex-col"
    >
      <h2 className="text-4xl font-marcellus font-bold text-center mb-6">
        Event Schedule
      </h2>

      <div className="container max-w-6xl mx-auto rounded-3xl font-marcellus px-6 bg-gray-100 py-6">
        <div className="hidden md:block">
          <div className="grid grid-cols-5 gap-4 text-sm font-medium text-gray-700 bg-gray-200 p-2 rounded-t-lg">
            <div>Key Stakeholder Group</div>
            <div>Community Partner</div>
            <div>Date & Time</div>
            <div>Location</div>
            <div>Unique Concepts of Listing Session</div>
          </div>
          <div className="max-h-64 overflow-y-auto">
            {events.map((event, index) => (
              <div
                key={index}
                className="grid grid-cols-5 gap-4 p-4 border-b border-gray-300 hover:bg-gray-50"
              >
                <div className="text-gray-800">{event.keyStakeholder}</div>
                <div className="text-gray-800">{event.communityPartner}</div>
                <div className="text-gray-800">{event.dateTime}</div>
                <div className="text-gray-800">{event.location}</div>
                <div className="text-gray-800">{event.uniqueConcept}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden">
          <div className="max-h-64 overflow-y-auto">
            {events.map((event, index) => (
              <div
                key={index}
                className="mb-4 p-4 bg-white rounded-lg shadow-md border border-gray-200"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleExpand(index)}
                >
                  <span className="font-semibold text-gray-800">
                    {event.keyStakeholder}
                  </span>
                  <span>{expandedIndex === index ? "−" : "+"}</span>
                </div>
                {expandedIndex === index && (
                  <div className="mt-2 text-gray-600 text-sm space-y-2">
                    <p>
                      <strong>Community Partner:</strong>{" "}
                      {event.communityPartner}
                    </p>
                    <p>
                      <strong>Date & Time:</strong> {event.dateTime}
                    </p>
                    <p>
                      <strong>Location:</strong> {event.location}
                    </p>
                    <p>
                      <strong>Unique Concept:</strong> {event.uniqueConcept}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isSectionInView
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 0.6, ease: [0.68, -0.55, 0.265, 1.55] }}
        className="button my-10 px-6 py-3 font-marcellus hover:border font-medium text-white bg-burntCopper hover:bg-black hover:text-burntCopper"
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
      </motion.button>
    </motion.div>
  );
};

export default EventSchedule;
