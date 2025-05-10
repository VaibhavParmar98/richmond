import React, { useEffect, useContext, useRef } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { EventContext } from '../Context/EventContext';
import { useInView, motion } from 'framer-motion';

const Calendar = () => {
  const { accessToken } = useContext(AuthContext);
  const { events, setEvents } = useContext(EventContext); 

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const empoweringRef = useRef(null);
  const churchRef = useRef(null);
  const ministriesRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const aboutInView = useInView(aboutRef, { once: true, margin: "-50px" });
  const empoweringInView = useInView(empoweringRef, {
    once: true,
    margin: "-50px",
  });
  const churchInView = useInView(churchRef, { once: true, margin: "-50px" });
  const ministriesInView = useInView(ministriesRef, {
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


 useEffect(() => {
  if (!accessToken) return;

  const fetchEvents = async () => {
    try {
      const res = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await res.json();

      if (data.items) {
        const formattedEvents = data.items.map((event) => ({
          id: event.id,
          title: event.summary,
          start: event.start.dateTime || event.start.date,
          end: event.end.dateTime || event.end.date,
        }));
        setEvents(formattedEvents); 
        localStorage.setItem("events", JSON.stringify(formattedEvents)); // Save here
      }
    } catch (err) {
      console.error('Failed to fetch events:', err);
    }
  };

  fetchEvents();
}, [accessToken, setEvents]);


  const handleDelete = async (eventId) => {
    if (!accessToken) return;

    const isConfirmed = window.confirm('Are you sure you want to delete this event?');

    if (!isConfirmed) return;

    try {
      const response = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/primary/events/${eventId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.ok) {
        setEvents(events.filter((event) => event.id !== eventId)); // Update events in context
        console.log('Event deleted successfully');
      } else {
        console.error('Failed to delete event');
      }
    } catch (err) {
      console.error('Error deleting event:', err);
    }
  };

  // Function to open Google Calendar event creation page
  const handleCreateEvent = () => {
    const eventTitle = 'New Event';
    const eventStart = new Date();
    const eventEnd = new Date(eventStart.getTime() + 60 * 60 * 1000); // 1 hour later
    const eventDescription = 'This is a test event';
    const eventLocation = 'Test Location';

    const eventUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${eventStart.toISOString().replace(/[-:]/g, '').slice(0, 15)}Z/${eventEnd.toISOString().replace(/[-:]/g, '').slice(0, 15)}Z&details=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(eventLocation)}`;

    window.open(eventUrl, '_blank'); // Open Google Calendar in a new tab
  };

  return (
    <div className=" bg-white font-marcellus">

      {/* Create Event Button */}
         <motion.div
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="relative"
        >
          <img
            src="https://iili.io/3k4G3Ss.jpg"
            alt="about banner"
            className="w-full h-[50vh] max-md:object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center max-md:gap-4">
            <h1 className="text-white text-4xl font-bold tracking-widest max-md:text-2xl max-md:text-center max-[480px]:text-[1.5rem]">
              Calendar Manager
            </h1>
            <p className="text-white tracking-widest max-md:text-[0.9rem] max-[480px]:text-[0.8rem]">
              Home / Calendar Manager
            </p>
          </div>
        </motion.div>
       

      <div className="overflow-x-auto py-10 px-6">
        <h1 className='mb-10 text-center text-3xl'>Google Calendar Manager</h1>
        <table className="min-w-full table-auto border border-gray-300 ">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Start</th>
              <th className="px-4 py-2 border">End</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center p-4 text-gray-500">
                  No events found
                </td>
              </tr>
            ) : (
              events.map((event) => (
                <tr key={event.id}>
                  <td className="px-4 py-2 border">{event.title}</td>
                  <td className="px-4 py-2 border">{new Date(event.start).toLocaleString()}</td>
                  <td className="px-4 py-2 border">{new Date(event.end).toLocaleString()}</td>
                  <td className="px-4 py-2 border text-center">
                    <button
                      onClick={() => handleDelete(event.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
         <div className='flex justify-center mt-7'>
        <motion.button
                             initial={{ opacity: 0, scale: 0.8 }}
                                       onClick={handleCreateEvent}

                             whileInView={{ opacity: 1, scale: 1 }}
                             viewport={{ once: true, amount: 0.4 }}
                             className="button border text-base flex items-center justify-center font-medium bg-burntCopper hover:bg-black mt-4"
                             transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
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
                                 />
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
                                 />
                               </svg>
                             </span>
                             Create Google Events
                           </motion.button>
       </div>
      </div>
       
     
    </div>
  );
};

export default Calendar;
