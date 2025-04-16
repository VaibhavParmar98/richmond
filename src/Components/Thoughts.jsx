import React, { useRef } from "react";
import { motion } from "framer-motion";

const Thoughts = () => {
  const nodes = [
    {
      left: "Richmond Museum of History and Culture",
      middle: "Showcase our Art Organizations",
      right: "Meaningful Community Engagement",
    },
    {
      left: "Public Space Revitalization",
      middle: "Urban Greening",
      right: "Traffic-Calming Art",
    },
    {
      left: "Children’s Creativity Museum",
      middle: "Youth Artist Residence",
      right: "Encourage and attract new businesses",
    },
    {
      left: "Cultural Festivals and Events",
      middle: "Historical Black Legacy Museum",
      right: "Cultural Zones",
    },
    {
      left: "Fourth Friday Art Walks",
      middle: "Support Local Businesses",
      right: "Richmond Auditorium Update",
    },
    {
      left: "Youth And Family Friendly Spaces",
      middle: "Beautifying our streets",
      right: "Support and grow existing assets",
    },
  ];

  const barColors = ["#a18d5c", "#c9aa45", "#8c6f28"];

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardRowsRef = useRef([]);

  return (
    <div ref={sectionRef} className="bg-[#f9f5ef] py-16 font-marcellus">
      <div className="max-w-6xl mx-auto px-4">
        <div ref={headerRef} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }} 
            className="uppercase text-sm text-gray-600"
          >
            Support Local Art, Inspire Creativity
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }} 
            className="text-3xl sm:text-4xl mt-2"
          >
            What are your thoughts and what <br />
            ideas do you have?
          </motion.h1>
        </div>

        <div className="space-y-8">
          {nodes.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => (cardRowsRef.current[idx] = el)}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative items-start"
            >
              {[item.left, item.middle, item.right].map((text, i) => (
                <motion.div
                  key={i}
                  className="card relative bg-white border border-[#c9aa45] rounded-t-lg shadow-md p-4 pt-6"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: idx * 0.3 + i * 0.1,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }} 
                >
                  <div
                    className="color-bar absolute -top-3 left-4 right-4 h-6 rounded-t-md flex items-center px-3 space-x-1"
                    style={{ backgroundColor: barColors[i] }}
                  >
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </div>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: idx * 0.3 + i * 0.1 + 0.3,
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }} 
                    className="text-[14px] text-center mt-2"
                  >
                    {text}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Thoughts;
