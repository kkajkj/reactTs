import React from 'react';
import './App.css';
// import HeadTop from './Component/Layout/Navbar/HeadTop';
// import MainHead from './Component/Layout/Navbar/MainHead';
// import Hero from './Component/Hero/Hero';
// import Listings from './Component/Listings/Listings';
// import Works from './Pages/works';
// import Footer from './Component/Layout/Footer/Footer';
// import Explore from './Component/Explore/Explore';
// import Review from './Pages/Review';
// import Statistics from './Component/Statistics/Statistics';
// import Blog from './Pages/Blog';
// import Contact from './Pages/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Component/Layout/Layout';
import Home from './Pages/Home';
import Works from './Pages/works';
import Review from './Pages/Review';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Explore from './Component/Explore/Explore';

const App: React.FC = ()=> {
  return (
    <div className="App">
      {/* <HeadTop/>
      <MainHead/>
      <Hero/>
      <Listings/>
      <Works/>
      <Explore/>
      <Review/>
      <Statistics/>
      <Blog/>
      <Contact/>
      <Footer/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="works" element={<Works/>} />
          <Route path="explore" element={<Explore/>} />
          <Route path="review" element={<Review/>} />
          <Route path="blog" element={<Blog/>} />
          <Route path="contact" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;