import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Help from "./Help";
import Started from "./Home/Started";

const Signup = () => {
  const headingRef = useRef(null);
  const formRef = useRef(null);

  const isHeadingInView = useInView(headingRef, {
    once: true,
    margin: "-100px",
  });
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });

  return (
    <>
      <div className="bg-white">
        <motion.div
          className="relative"
          ref={headingRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="https://iili.io/31cmU9s.md.jpg"
            alt=""
            className="w-full h-[350px] object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white font-marcellus tracking-widest text-4xl font-bold">
              Register
            </h1>
          </div>
        </motion.div>

        <motion.div
          ref={formRef}
          initial={{ opacity: 0, y: 80 }}
          animate={isFormInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-marcellus px-4"
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row py-10 gap-10">
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <img
                src="https://iili.io/31cmgAG.md.jpg"
                alt=""
                className="rounded-3xl h-80 w-[90%] max-w-[450px] object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-3">
              <h1 className="text-3xl md:text-4xl text-center md:text-start">
                Sign Up
              </h1>
              <p className="text-lg md:text-xl text-center md:text-start">
                Already Have an Account ?
                <span className="text-burntCopper hover:underline hover:text-deepMaroon cursor-pointer ml-1">
                  Sign In
                </span>
              </p>
              <div className="mt-6">
                <form className="flex flex-col gap-6 ">
                  <div className="flex  gap-5 xl:flex-row lg:flex-row md:flex-col flex-col">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="border p-3 pl-4 pr-10 rounded-full text-xs sm:text-sm md:text-sm w-full outline-none"                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="border p-3 pl-4 pr-10 rounded-full text-xs sm:text-sm md:text-sm w-full outline-none"                    />
                  </div>
                  <div className="flex  gap-5 xl:flex-row lg:flex-row md:flex-col flex-col">
                    <input
                      type="text"
                      placeholder="Enter Email"
                      className="border p-3 pl-4 pr-10 rounded-full text-xs sm:text-sm md:text-sm w-full outline-none"                    />
                    <input
                      type="text"
                      placeholder="Enter Mobile"
                      className="border p-3 pl-4 pr-10 rounded-full text-xs sm:text-sm md:text-sm w-full outline-none"                    />
                  </div>
                  {/* <div className="flex flex-col sm:flex-row gap-5">
                    <input
                      type="text"
                      placeholder="Enter Password"
                      className="border-b-2 w-full sm:w-1/2 outline-none pb-1 pl-2"
                    />
                    <input
                      type="text"
                      placeholder="Enter Confirm Password"
                      className="border-b-2 w-full sm:w-1/2 outline-none pb-1 pl-2"
                    />
                  </div> */}
               <div className="flex items-center justify-center xl:justify-start lg:justify-start ">
               <button className="bg-burntCopper w-full hover:bg-black transition-all duration-500 cursor-pointer text-white p-3 rounded-full text-xs sm:text-sm md:text-sm  hover:bg-opacity-90">
              Sign up
            </button>
</div>

                </form>
              </div>
            </div>
          </div>
        </motion.div>

        <Help />
        <Started />
      </div>
    </>
  );
};

export default Signup;
