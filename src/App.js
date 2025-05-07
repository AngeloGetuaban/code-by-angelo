import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import 'animate.css';
import AboutMe from './AboutMe';
import MySkills from './MySkills';
import MyServices from './MyServices';
import LatestProjects from './LatestProjects';
import ContactSection from './ContactSection';
import Footer from './Footer';

function App() {
  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      <Header />
      <Hero />
      <AboutMe />
      <MySkills />
      <MyServices />
      <LatestProjects />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
