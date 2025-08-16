import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Aos from 'aos'
import "aos/dist/aos.css";
const LayoutOne = () => {
  const location = useLocation()
  useEffect(() => {
  Aos.init({ duration: 1000, once: false });

  const handleEvents = () => Aos.refresh();
  window.addEventListener("load", handleEvents);
  window.addEventListener("scroll", handleEvents);

  return () => {
    window.removeEventListener("load", handleEvents);
    window.removeEventListener("scroll", handleEvents);
  };
}, [location]);
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default LayoutOne