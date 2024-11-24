import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import MenuOverview from './components/MenuOverview/MenuOverview';
import AboutUs from './components/AboutUs/AboutUs';
import Delivery from './components/Delivery/Delivery';
import CustomerFeedback from './components/CustomerFeedback/CustomerFeedback';
import Footer from './components/Footer/Footer';

const Homepage = () => {
    return (
        <div className="home">
          <Header />
          <HeroSection />
          <MenuOverview />
          <AboutUs />
          <Delivery />
          <CustomerFeedback />
          <Footer />
        </div>
    );
};

export default Homepage;
