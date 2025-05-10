import React, { useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Courses from '../../components/Courses/Courses';
import Achivement from '../../components/Achivement/Achivement';
import AboutUs from '../../components/AboutUs/AboutUs';
import Subcriber from '../../components/Subcriber/Subcriber';
import Footer from '../../components/Footer/Footer';

function HomePage() {
  const location = useLocation();
  const coursesRef = useRef(null);
  const scrollToCourses = () => {
    coursesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="App relative">
      <div className="container-page">
        <div className="home-page  relative h-screen">
          <Header />

          {location.pathname === "/" ? (
            <>
              <Banner onClickScroll={scrollToCourses} />
              <Courses ref={coursesRef}/>
              <Achivement />
              <AboutUs />
              <Subcriber />
            </>
          ) : (
            <Outlet />
          )}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default HomePage;