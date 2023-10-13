import React from 'react'
import HeadTop from '../Component/Layout/Navbar/HeadTop';
import MainHead from '../Component/Layout/Navbar/MainHead';
import Hero from '../Component/Hero/Hero';
import Listings from '../Component/Listings/Listings';
import Works from '../Pages/works';
import Footer from '../Component/Layout/Footer/Footer';
import Explore from '../Component/Explore/Explore';
import Review from '../Pages/Review';
import Statistics from '../Component/Statistics/Statistics';
import Blog from '../Pages/Blog';
import Contact from '../Pages/Contact'

function Home() {
  return (
    <div>
      <Hero/>
      <Listings/>
      <Works/>
      <Explore/>
      <Review/>
      <Statistics/>
      <Blog/>
      <Contact/>
    </div>
  )
}

export default Home