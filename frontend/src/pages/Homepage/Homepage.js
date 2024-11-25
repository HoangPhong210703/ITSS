import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './components/HeroSection/HeroSection';
import MenuOverview from './components/MenuOverview/MenuOverview';
import AboutUs from './components/AboutUs/AboutUs';
import Delivery from './components/Delivery/Delivery';
import CustomerFeedback from './components/CustomerFeedback/CustomerFeedback';

const Homepage = () => {
    return (
        <div className="home">
          <HeroSection />
          <MenuOverview />
          <AboutUs />
          <Delivery />
          <CustomerFeedback />
        </div>
    );
};

export default Homepage;
