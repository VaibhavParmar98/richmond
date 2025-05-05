import React from 'react'
import Hero from '../Components/Home/Hero'
import AboutUs from '../Components/Home/AboutUs'
import OurMinisters from '../Components/Home/OurMinisters'
import Team from '../Components/Home/Team'
import SuppoertLocla from '../Components/Home/SuppoertLocla'
import Video from '../Components/Home/Video'
import Blogs from '../Components/Home/Blogs'
// import Community from '../Components/Home/Community'
// import Thoughts from '../Components/Home/Thoughts'
import Contact from '../Components/Home/Contact'
import Started from '../Components/Home/Started'
import Banner from '../Components/Home/Banner'
import EventSchedule from '../Components/Home/EventSchedule'

const Home = () => {
  return (
    <>
      <Banner />
      <Hero />
      <EventSchedule/>
      <AboutUs />
      <OurMinisters />
      <Team />
      <SuppoertLocla />
      <Video />
      <Blogs />
      {/* <Community /> */}
      {/* <Thoughts /> */}
      <Contact />
      <Started />
    </>
  )
}

export default Home
