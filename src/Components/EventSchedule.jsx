import React, { useState } from "react";

const EventSchedule = () => {
  const events = [
    {
      keyStakeholder: "High-School Age Youth",
      communityPartner: "RYSE",
      dateTime: "Monday, May 19th, 4:00PM - 6:30PM",
      location: "RYSE",
      uniqueConcept: "Youth artist Sharing Pieces at the beginning of the session",
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
      keyStakeholder: "Anti-Displacement and Environmental Justice (In Spanish)",
      communityPartner: "Alliance of Californians For Community Empowerment (ACCE)",
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
    <>
      <div className="bg-champagneBeige pb-20">
        <h2 className="text-4xl font-marcellus font-bold text-center mb-6">Event Schedule</h2>

        <div className="container max-w-6xl mx-auto rounded-3xl font-marcellus p-6 bg-gray-100 min-h-screen">
          {/* Desktop Table */}
          <div className="hidden md:block">
            <div className="grid grid-cols-5 gap-4 text-sm font-medium text-gray-700 bg-gray-200 p-2 rounded-t-lg">
              <div>Key Stakeholder Group</div>
              <div>Community Partner</div>
              <div>Date & Time</div>
              <div>Location</div>
              <div>Unique Concepts of Listing Session</div>
            </div>
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

          {/* Mobile View */}
          <div className="md:hidden">
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
                      <strong>Community Partner:</strong> {event.communityPartner}
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
    </>
  );
};

export default EventSchedule;
