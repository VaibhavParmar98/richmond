import React from 'react'
import Hero from '../Components/Hero'
import AboutUs from '../Components/AboutUs'
import OurMinisters from '../Components/OurMinisters'
import Team from '../Components/Team'
import SuppoertLocla from '../Components/SuppoertLocla'
import Video from '../Components/Video'
import Blogs from '../Components/Blogs'
import Community from '../Components/Community'
import Thoughts from '../Components/Thoughts'
import Contact from '../Components/Contact'
import Started from '../Components/Started'
import Banner from '../Components/Banner'
import EventSchedule from '../Components/EventSchedule'

const Home = () => {
  return (
    <>
      <Banner />
      <Hero />
      <AboutUs />
      <OurMinisters />
      <Team />
      <SuppoertLocla />
      <EventSchedule/>
      <Video />
      <Blogs />
      <Community />
      <Thoughts />
      <Contact />
      <Started />
    </>
  )
}

export default Home
