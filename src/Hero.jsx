import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'; // Import icons for social media
import Angelo from './hero_image.png'; // Your image path
import Resume from './Resume_Getuaban.pdf'; // Import the resume file

const Hero = () => {
  const roles = ['Front-End Developer', 'Back-End Developer', 'Mobile Developer'];

  const [roleIndex, setRoleIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  // Cycle through the roles every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change role every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  // Trigger animation when component mounts
  useEffect(() => {
    setAnimate(true);
  }, []);

  // Fade-in animation for text
  const fadeAnimation = useSpring({
    opacity: animate ? 1 : 0,
    transform: animate ? 'translateY(0)' : 'translateY(50px)',
    config: { tension: 220, friction: 120 },
  });

  // Animation for image
  const imageAnimation = useSpring({
    opacity: animate ? 1 : 0,
    transform: animate ? 'translateY(0)' : 'translateY(50px)',
    config: { tension: 220, friction: 120 },
    delay: 300,
  });

  return (
    <section id="home" className="bg-gradient-to-r from-teal-600 to-indigo-800 text-white py-60 text-left relative flex items-center">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col lg:flex-row items-center">
        {/* Hero Text Section */}
        <animated.div style={fadeAnimation} className="lg:w-1/2">
          <h1 className="text-6xl sm:text-7xl font-extrabold mb-6 leading-tight">
            Hello, I’m Angelo
          </h1>
          <p className="text-xl sm:text-2xl mb-8">
            I’m a passionate{' '}
            <span className="font-bold text-yellow-400">{roles[roleIndex]}</span>
          </p>
          <p className="text-lg sm:text-xl mb-10 max-w-2xl">
            I specialize in crafting seamless and dynamic web experiences. I combine front-end, back-end, and mobile expertise to build scalable and innovative digital solutions.
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4 mb-6">
            <a href="https://www.facebook.com/michaelangelo.prodigy" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-white text-2xl hover:text-yellow-400" />
            </a>
            <a href="https://github.com/AngeloGetuaban" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white text-2xl hover:text-yellow-400" />
            </a>
            <a href="mailto:getuaban143@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="text-white text-2xl hover:text-yellow-400" />
            </a>
            <a href="https://www.linkedin.com/in/michael-angelo-getuaban-0954bb155" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-white text-2xl hover:text-yellow-400" />
            </a>
          </div>

          {/* Download Resume Button */}
          <a
            href={Resume} // This will download the Resume_Getuaban.pdf
            download
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white py-4 px-8 rounded-lg text-xl font-semibold transition duration-300 ease-in-out"
          >
            Download Resume
          </a>
        </animated.div>

        {/* Hero Image Section */}
        <animated.div style={imageAnimation} className="lg:w-1/2 mt-8 lg:mt-0">
          <img
            src={Angelo} // Replace with the actual image path
            alt="Angelo"
            className="rounded-full shadow-lg w-96 mx-auto"
          />
        </animated.div>
      </div>
    </section>
  );
};

export default Hero;
