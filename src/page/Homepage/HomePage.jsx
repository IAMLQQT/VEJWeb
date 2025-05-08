import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Courses from '../../components/Courses/Courses';
import Achivement from '../../components/Achivement/Achivement';
import AboutUs from '../../components/AboutUs/AboutUs';
import Subcriber from '../../components/Subcriber/Subcriber';
import Footer from '../../components/Footer/Footer';

function HomePage() {


  return (
    <div className="App relative">
      <div className="container-page">
        <div className="home-page  relative h-screen">
          <Header />
          <Banner />
          {window.location.pathname === "/" ? (
            <>

              <Courses />
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