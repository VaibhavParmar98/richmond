import React from "react";
import { motion } from "framer-motion";

const imageList = [
    "https://iili.io/3O6Fs5B.jpg",
    "https://iili.io/3O6FiJV.webp",
    "https://iili.io/3O6F6UQ.jpg",
    "https://iili.io/3O6FeO7.jpg",
    "https://iili.io/3O6FORS.jpg",
    "https://iili.io/3O6FNJ2.jpg",
    "https://iili.io/3O6Fhl4.jpg",
    "https://iili.io/3O6F1DX.webp",
    "https://iili.io/3O6F0Nt.jpg",
    "https://iili.io/3O6FGxn.jpg",
    "https://iili.io/3O6FMVs.jpg",
  ];

const frameworkPoints = [
  {
    title: "Empowerment",
    desc: "Equip artists with tools, visibility, and opportunities to thrive in their craft.",
  },
  {
    title: "Engagement",
    desc: "Foster meaningful connections between artists and their communities through events, exhibits, and storytelling.",
  },
  {
    title: "Equity",
    desc: "Prioritize inclusion, representation, and accessibility in every initiative.",
  },
  {
    title: "Collaboration",
    desc: "Build bridges among artists, educators, organizations, and residents to co-create vibrant cultural experiences.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ConceptualFramework = () => {
  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 font-marcellus">
        <div className="flex flex-col items-center gap-4 mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center ">
            Conceptual Framework
          </h2>
          <p className="text-sm sm:text-base leading-6 text-center ">
            Our work is grounded in the belief that local creativity drives cultural identity and community growth. <span >This framework guides how we support artists and engage the public:</span>
          </p>
        </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-center">
        {/* Left image */}
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          src="https://iili.io/3k4BnOx.jpg"
          alt="Conceptual Visual"
          className="w-full lg:w-1/2 xl:h-[430px] lg:h-[430px] h-80 object-cover rounded-xl shadow-md"
        />

        {/* Right content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          
          <div className="flex flex-col gap-4">
            {frameworkPoints.map((point, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="flex text-black flex-col gap-1 bg-white p-4 rounded-lg shadow-sm border-l-4 border-burntCopper"
              >
                <h3 className="text-lg font-medium">{point.title}</h3>
                <p className="text-sm">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="overflow-hidden w-full mt-12">
  <div className="flex gap-3 w-max animate-[ticker_20s_linear_infinite]">
    {[...imageList, ...imageList].map((src, idx) => (
      <img
        key={idx}
        src={src}
        alt={`News ${idx}`}
        className="object-cover w-40 h-40 shrink-0"
      />
    ))}
  </div>
</div>



    </div>
  );
};

export default ConceptualFramework;
