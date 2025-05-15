import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Help from "../Components/Help";
import Started from "../Components/Home/Started";

const TermsOfService = () => {
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
          src="https://iili.io/3UDnAfR.jpg"
          alt="terms banner"
          className="w-full h-[50vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center">
          <h1 className="text-white text-4xl font-bold tracking-widest max-md:text-2xl">
            Terms of Service
          </h1>
          <p className="text-white tracking-widest max-md:text-[0.9rem]">
            Home / Terms of Service
          </p>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        ref={contentRef}
        initial="hidden"
        animate={contentInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="max-w-5xl mx-auto px-6 py-10 text-gray-800"
      >
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

<p className="mb-4">
  Welcome to Art Corridor, a platform committed to supporting and uplifting local artists. By using our services, you agree to the following terms, designed to foster a respectful, creative, and safe environment for all.
</p>

<h2 className="text-2xl font-semibold mt-6 mb-2">1. Community and Contribution</h2>
<p className="mb-4">
  You agree to use Art Corridor to support, promote, and engage with local artistic talent in a respectful and non-exploitative manner. Donations and contributions directly empower artists and creative initiatives.
</p>

<h2 className="text-2xl font-semibold mt-6 mb-2">2. User Conduct</h2>
<p className="mb-4">
  Users must not post, share, or engage with any content that is discriminatory, infringing, or abusive. Our community thrives on positive collaboration, artistic freedom, and mutual respect.
</p>

<h2 className="text-2xl font-semibold mt-6 mb-2">3. Donations & Funding</h2>
<p className="mb-4">
  Contributions made through our platform go toward supporting art events, local creators, and creative education. Art Corridor is committed to transparency and ethical funding distribution.
</p>

<h2 className="text-2xl font-semibold mt-6 mb-2">4. Intellectual Property</h2>
<p className="mb-4">
  All artwork remains the property of its respective artists. Art Corridor respects and protects the intellectual property of creators. You may not reuse or reproduce content without permission.
</p>

<h2 className="text-2xl font-semibold mt-6 mb-2">5. Modifications</h2>
<p className="mb-4">
  We may update these terms to reflect evolving goals or legal requirements. Continued use of the platform indicates your acceptance of any changes.
</p>

<h2 className="text-2xl font-semibold mt-6 mb-2">6. Contact Us</h2>
<p>
  For any questions or clarifications, please contact us at <strong>ratha@criticalimpactconsulting.com</strong>.
</p>

      </motion.div>

      <Help />
      <Started />
    </div>
  );
};

export default TermsOfService;
