import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Help from "../Components/Help";
import Started from "../Components/Home/Started";

const PrivacyPolicy = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const contentInView = useInView(contentRef, { once: true, margin: "-50px" });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-white font-marcellus scroll-container">
      {/* Hero Banner */}
      <motion.div
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="relative"
      >
        <img
          src="https://iili.io/3UD5AqF.jpg"
          alt="privacy banner"
          className="w-full h-[50vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center">
          <h1 className="text-white text-4xl font-bold tracking-widest max-md:text-2xl">
            Privacy Policy
          </h1>
          <p className="text-white tracking-widest max-md:text-[0.9rem]">
            Home / Privacy Policy
          </p>
        </div>
      </motion.div>

      {/* Policy Content */}
      <motion.div
        ref={contentRef}
        initial="hidden"
        animate={contentInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="max-w-5xl mx-auto px-6 py-10 text-gray-800"
      >
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

<p className="mb-4">
  At Art Corridor, your trust fuels our mission to empower local artists. This Privacy Policy explains how we collect, use, and protect your information in support of creativity and community growth.
</p>

<h2 className="text-2xl font-semibold mt-6 mb-2">Information We Collect</h2>
<p className="mb-4">
  We collect limited personal data, such as your name, email, and donation history, to help connect you with causes and artists you care about.
</p>

<h2 className="text-2xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
<p className="mb-4">
  Your information helps us improve your experience, notify you about events and opportunities, and ensure your support directly reaches local creatives.
</p>

<h2 className="text-2xl font-semibold mt-6 mb-2">Data Protection</h2>
<p className="mb-4">
  We prioritize safeguarding your personal data with secure storage practices. Your privacy matters, and we do not sell or share your data without consent.
</p>

<h2 className="text-2xl font-semibold mt-6 mb-2">Third-Party Tools</h2>
<p className="mb-4">
  We may use trusted services (like payment processors or email tools) to help manage donations or communication. These services have their own privacy policies.
</p>

<h2 className="text-2xl font-semibold mt-6 mb-2">Your Rights</h2>
<p className="mb-4">
  You may request to update, delete, or access your personal information at any time. We honor your control over your data and respect your choices.
</p>

<h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
<p>
  For questions about our privacy practices, reach out at <strong>ratha@criticalimpactconsulting.com</strong>.
</p>

      </motion.div>

      <Help />
      <Started />
    </div>
  );
};

export default PrivacyPolicy;
