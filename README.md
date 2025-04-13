import React from "react";
import { FaStar ,FaStarHalfAlt } from "react-icons/fa";


const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="h-1/2 bg-champagneBeige" />
        <div className="h-1/2 bg-white" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 font-marcellus space-y-12">
        <div className="relative flex  justify-between items-start gap-8">
          <div className="md:w-2/3 space-y-6 ml-9">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-deepMaroon">
              Empowering Local Artistry,
              <br />
              One Creation At A Time
            </h1>
          </div>
          <div className="text-sm mr-9">
            <p className=" text-deepMaroon max-w-md">
              Discover, support, and celebrate the vibrant creativity of local
              artists in your community through exhibitions, workshops, and
              collaborations.
            </p>
            <div className="flex gap-4 mt-6">
              <button className="bg-deepMaroon cursor-pointer text-white px-4 py-1 ">
                Contact Us
              </button>
              <button className="bg-burntCopper cursor-pointer text-white px-4 py-1 ">
                Donate
              </button>
            </div>
          </div>

          <div className="absolute top-0 right-0 hidden md:block">
            <img src="/Group.png" alt="Icon" className="w-28 mt-10" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3">
            <img
              src="/image1.png"
              alt="Art Mural"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          <div className="md:w-1/3 relative rounded-lg overflow-hidden shadow-lg">
  <img
    src="/image3.png"
    alt="Artist Event"
    className="w-full h-[450px] bg-blur-sm  object-cover"
  />
  <div className="absolute inset-0  flex items-end p-2 sm:p-3 lg:p-4">
    <div className="w-full text-white">
      <h3 className="text-lg sm:text-xl">Art Walk & Talk</h3>
      <p className="text-base sm:text-lg opacity-80">20 Apr 2025</p>
      <p className="text-xs sm:text-sm opacity-90 mt-1 sm:mt-2">
        Host a guided walk through local galleries with artists discussing their works.
      </p>
      <button className="mt-2 sm:mt-4 cursor-pointer bg-burntCopper text-white px-3 sm:px-4 lg:px-5 py-1 text-sm">
        View Event
      </button>
    </div>
  </div>
</div>
        </div>

        <div className="bg-offWhite rounded-xl mt-6 p-6 flex flex-col md:flex-row justify-between items-center text-deepMaroon text-sm gap-6">
          <div>
            <p className="text-lg">Embracing Faith’s Promise <br /> Sharing Love’s Light</p>
            
          </div>
          <div className="hidden md:block h-16 w-px border" />
          
          <div className=" max-w-md">
            <p>
            Discover, support, and celebrate the vibrant creativity of local artists in your community and beyond. Explore unique artwork, connect with creators, attend inspiring events, and be part of a thriving artistic movement.
            </p>
          </div>
          <div className="hidden md:block h-16 w-px border" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">4.8/5</span>
            <span className="flex items-center gap-1 text-xs text-yellow-400"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span>
            <span >Building Bonds Blessings</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React from "react";
import {
  FaLightbulb,
  FaProjectDiagram,
  FaCog,
  FaHandHoldingUsd,
} from "react-icons/fa";

const AboutUs = () => {
  const items = [
    {
      icon: (
        <FaLightbulb className="text-3xl p-1.5 bg-burntCopper rounded-full text-white" />
      ),
      title: "Showcase Your Talent",
      desc: "Gain visibility and recognition by displaying your artwork to a broader audience.",
    },
    {
      icon: (
        <FaProjectDiagram className="text-3xl p-1.5 bg-burntCopper rounded-full text-white" />
      ),
      title: "Connect with the Community",
      desc: "Build meaningful relationships with fellow artists, enthusiasts, and supporters.",
    },
    {
      icon: (
        <FaCog className="text-3xl p-1.5 bg-burntCopper rounded-full text-white" />
      ),
      title: "Enhance Your Skills",
      desc: "Participate in workshops and events to develop and refine your artistic abilities.",
    },
    {
      icon: (
        <FaHandHoldingUsd className="text-3xl p-1.5 bg-burntCopper rounded-full text-white" />
      ),
      title: "Sell and Earn",
      desc: "Monetize your creativity by selling your artwork directly to art lovers.",
    },
  ];

  return (
    <>
      <div>
        <div className="max-w-6xl mx-auto font-marcellus py-20">
          <div className="flex justify-between gap-20">
            <div className="flex flex-col gap-6 w-1/2">
              <div className="flex flex-col gap-2">
                <p className="text-sm uppercase">aboout us</p>
                <h2 className="text-3xl">
                  Fostering Creativity, Connecting <br /> Communities, Inspiring
                  Growth 🌟
                </h2>
                <p className="text-xs">
                  We empower local artists by providing a platform to showcase
                  their work, connect with the <br /> community, and inspire
                  creativity. Join us in celebrating and supporting artistic
                  talent in every form <br /> and beyond, fostering lasting
                  connections.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {items.map((itm, idx) => (
                  <div key={idx} className="flex gap-4 ">
                    <span className="">{itm.icon}</span>
                    <div className="flex flex-col gap-2">
                      <h1 className="font-medium">{itm.title}</h1>
                      <p className="text-xs">{itm.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mt-8 text-sm">
              <button className="bg-deepMaroon cursor-pointer text-white px-4 py-1 ">
                Contact Now
              </button>
              <button className="bg-burntCopper cursor-pointer text-white px-4 py-1 ">
               Contact Us
              </button>
            </div>
            </div>

            <div className="w-1/2 flex gap-2 ">
              <img src="/image4.png" alt="" className="mt-6 w-72"/>
              <div>
                <img src="/image6.png" alt="" className="w-64 h-52"/>
                <div className="flex flex-col gap-6 ml-10">
                <div className="flex flex-col gap-6 mt-6">
                  <h1 className="text-2xl font-semibold">500+</h1>
                  <p className="text-sm">Empowering creative talents by <br /> showcasing their work.</p>
                </div>
                <div className="flex flex-col gap-6">
                  <h1 className="text-2xl font-semibold">10,000+</h1>
                  <p className="text-sm">Building a thriving network of artists <br /> and supporters.</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

import React from 'react'
import { GiChurch, GiPrayer } from "react-icons/gi";
import { FaHandHoldingHeart, FaUsers } from "react-icons/fa";

const OurMinisters = () => {

    const items = [
        {
            icons: <FaHandHoldingHeart/>,
            title:"what we believe",
            desc:"In nurturing local talent, fostering  creativity, and building a vibrant community where artists thrive, inspire, and connect with a wider audience."
        },
        {
            icons:<GiChurch/>,
            title:"What to expect",
            desc:"Explore diverse artwork, engage with talented artists, participate in inspiring events, and become part of a supportive community that celebrates creativity."
        },
        {
            icons:<GiPrayer/>,
            title:"Art History",
            desc:"Explore the evolution of styles, techniques, and cultural influences that have shaped the vibrant world of art today."
        },
        {
            icons:<FaUsers/>,
            title:"Meeting Events",
            desc:"Connect with artists, enthusiasts, and industry experts through inspiring events that foster collaboration, creativity, and community growth."
        }
    ]

  return (
    <>
      <div className='bg-deepMaroon'>
        <div className='max-w-6xl mx-auto py-20 flex flex-col items-center font-marcellus justify-center text-white'>
            <div className='text-center flex flex-col gap-2'>
                <p className='text-sm'>OUR MINISTRIES</p>
                <h1 className='text-4xl'>Empowering Faith, Embracing Diversity</h1>
            </div>
            <div className='flex items-center justify-center gap-3 mt-10'>
                {items.map((itm,idx)=>(
                    <div key={idx} className='flex flex-col gap-4 border p-5 w-60 h-60'>
                        <span className='text-4xl'>{itm.icons}</span>
                        <h1 className='text-lg'>{itm.title}</h1>
                        <p className='text-xs'>{itm.desc}</p>
                    </div>
                ))}
            </div>

            <button className='px-4 py-1 bg-burntCopper mt-14 text-sm cursor-pointer'>About Us</button>
        </div>

      </div>
    </>
  )
}

export default OurMinisters

    import React from 'react'
    import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";


    const Team = () => {

        const items = [
            {
                img:"/image16.png",
                name: "Christopher Paul",
                position: "Founder & Creative Director",
                social:  [
                    { icon: <FaFacebook />},
                    { icon: <FaInstagram /> },
                    { icon: <FaTwitter /> },
                    { icon: <FaYoutube /> },
                ]
            },
            {
                img:"/image18.png",
                name: "Mark Hagne",
                position: "Community Manager",
                social: [
                    { icon: <FaFacebook />},
                    { icon: <FaInstagram /> },
                    { icon: <FaTwitter /> },
                    { icon: <FaYoutube /> },
                ]
            },
            {
                img:"/image17.png",
                name: "Michelle Parker",
                position: "Photographer",
                social: [
                    { icon: <FaFacebook />},
                    { icon: <FaInstagram /> },
                    { icon: <FaTwitter /> },
                    { icon: <FaYoutube /> },
                ]
            },
            {
                img:"/image19.png",
                name: "Mia Chen",
                position: "Event Coordinator",
                social: [
                    { icon: <FaFacebook />},
                    { icon: <FaInstagram /> },
                    { icon: <FaTwitter /> },
                    { icon: <FaYoutube /> },
                ]
            }
        ]

    return (
        <>
        <div className='py-20'>
            <div className='max-w-6xl mx-auto font-marcellus
            '>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-4'><p className='text-sm'>CHURCH PASTORS</p> <h1 className='text-3xl'>Our Passionate Team Behind the Vision</h1></div>
                    <div className='flex gap-3'>
                        <img src="/fram2.png" alt="" className='w-9 h-10'/>
                        <p className='text-sm'>Get to Know Our Passionate Team Dedicated to Empowering Local Artists, <br />Showcasing Talent, and Building a Thriving Creative Community Together.</p>
                    </div>
                </div>
                <div className='flex justify-between mt-16 items-center'>
                    {items.map((itm,idx)=>(
                        <div key={idx} className='flex flex-col gap-3 items-center justify-center'>
                            <img src={itm.img} alt="" className='w-64'/>
                            <h1 className='mt-4 text-xl'>{itm.name}</h1>
                            <p className='text-sm text-gray-500'>{itm.position}</p>
                            <div className='flex gap-2 items-center  justify-center'>
                                {itm.social.map((s,i)=>(
                                    <span key={i}>{s.icon}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
               
            </div>
        </div>
        </>
    )
    }

    export default Team


import React from 'react';

const SuppoertLocla = () => {
  return (
    <div className="bg-champagneBeige py-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center font-marcellus">
        <div className="text-center flex flex-col gap-3">
          <p className="uppercase text-sm">Support Local Art, Inspire Creativity</p>
          <h1 className="text-4xl">Make a Lasting Impact Through Your Donation</h1>
        </div>

        <div className="flex gap-10 mt-10">
          <div className="flex flex-col gap-6 w-1/2">
            <img
              src="/image8.png"
              alt="Support Local Artists"
            />
            <h1 className="text-xl">Support Local Artists – Make a Difference Today!</h1>
            <p className="text-sm">
              Your generous contribution helps empower local artists, fund community events,
              and create opportunities for emerging talent. Every donation nurtures creativity.
            </p>

            <div className="w-full mt-2">
              <div className="relative h-4 bg-white rounded-full">
                <div className="absolute top-0 left-0 h-4 bg-[#2b0b0b] rounded-full w-1/2" />
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 text-sm text-black font-semibold">
                  50%
                </div>
              </div>
              <div className="flex justify-between mt-2 text-sm text-black font-semibold">
                <p>Raised: $25,000</p>
                <p>Goal: $50,000</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 w-1/2">
            <img
              src="/image7.png"
              alt="Fuel Creativity"
            />
            <h1 className="text-xl">Fuel Creativity – Support Our Mission!</h1>
            <p className="text-sm">
              Help us continue providing a platform for local artists to showcase their talent.
              Your support ensures that art thrives and inspires future generations.
            </p>

            <div className="w-full mt-2">
              <div className="relative h-4 bg-white rounded-full">
                <div className="absolute top-0 left-0 h-4 bg-[#2b0b0b] rounded-full w-[38%]" />
                <div className="absolute left-[38%] transform -translate-x-1/2 -top-6 text-sm text-black font-semibold">
                  38%
                </div>
              </div>
              <div className="flex justify-between mt-2 text-sm text-black font-semibold">
                <p>Raised: $15,000</p>
                <p>Goal: $40,000</p>
              </div>
            </div>
          </div>
        </div>
        <button className='px-4 py-1 mt-16 bg-burntCopper text-sm text-white cursor-pointer'> More Donation</button>
      </div>
    </div>
  );
};

export default SuppoertLocla;


import React from 'react'

const Blogs = () => {

    const items = [
        {
            img:"/image9.png",
            date: "March 21, 2024",
            title:"Exploring Emerging Trends in Local Art",
            button:"Read More"
        },
        {
            img:"/image11.png",
            date: "March 21, 2024",
            title:"Tips to Support and Promote Local Artists",
            button:"Read More"
        },
        {
            img:"/image10.png",
            date: "March 21, 2024",
            title:"Artist Spotlight: Inspiring Journeys and Stories",
            button:"Read More"
        },
        {
            img:"/image12.png",
            date: "March 21, 2024",
            title:"Upcoming Art Events You Can’t Miss",
            button:"Read More"
        },

    ]

  return (
    <>
      <div className='py-20'>
      <div className='max-w-6xl mx-auto font-marcellus'>
        <div className='flex justify-between items-center'>
            <div className='flex flex-col gap-3'>
            <p className='text-sm'>BRIDGES</p>
            <h1 className='text-4xl'>Latest news & Blogs</h1>
            </div>
            <button className='px-4 py-1 bg-burntCopper text-sm text-white'>More Blogs</button>
        </div>

        <div className='border-b-0 border mt-10'/>

        <div className='grid grid-cols-2 gap-16 mt-16'>
            {items.map((itm,idx)=>(
                <div key={idx} className='flex gap-3'>
                    <img src={itm.img} alt="" className='w-48 h-40'/>
                    <div className='flex flex-col gap-4'>
                        <p className='text-sm'>{itm.date}</p>
                        <h1 className='text-xl'>{itm.title}</h1>
                        <button className='text-sm px-4 py-1 bg-burntCopper text-white w-32'>{itm.button}</button>
                    </div>
                </div>
            ))}
        </div>

      </div>
      </div>
    </>
  )
}

export default Blogs


import React from 'react'
import TestimonialSection from './TestimonialSection '

const Community = () => {
  return (
    <>
      <div className='bg-deepMaroon py-20'>
        <div className='max-w-6xl mx-auto font-marcellus flex gap-20'>
            <div className='flex flex-col '>
               <div className='flex justify-between'>
               <div className='text-white flex flex-col gap-4'>
                    <p className='text-sm'>What Our Community Says</p>
                    <h1 className='text-4xl'>Voices of Appreciation, <br /> Trust, and Inspiration</h1>
                    <p className='text-xs'>Hear from artists, art lovers, and supporters who have experienced the impact of our platform. Their stories highlight the value of nurturing local talent and fostering a creative community.</p>
                </div>
                <div>
                    <img src="/Frame1.png" alt="" />
                </div>
               </div>
                <div className='mt-10'>
                   <TestimonialSection/> 
                </div>
            </div>



            <div><img src="/image13.png" alt="" className='h-[510px] w-[900px]'/></div>
        </div>
      </div>
    </>
  )
}

export default Community


