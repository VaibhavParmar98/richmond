import React, { useState } from "react";

const EventCreatePopup = ({ isOpen, onClose, onCreateEvent }) => {
  const [eventDetails, setEventDetails] = useState({
    title: "",
    description: "",
    location: "",
    startTime: "",
    endTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateEvent(eventDetails);
    onClose(); 
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-md shadow-lg w-96">
          <h2 className="text-xl font-bold mb-4">Create Event</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block">Event Title</label>
              <input
                type="text"
                name="title"
                value={eventDetails.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            
           
            <div className="mb-4">
              <label className="block">Start Time</label>
              <input
                type="datetime-local"
                name="startTime"
                value={eventDetails.startTime}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block">End Time</label>
              <input
                type="datetime-local"
                name="endTime"
                value={eventDetails.endTime}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Create Event
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default EventCreatePopup;
