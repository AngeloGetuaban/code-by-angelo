import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { useSpring, animated } from 'react-spring';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [animate, setAnimate] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 200);
  }, []);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : 'auto';
  }, [sidebarOpen]);

  const headerAnimation = useSpring({
    transform: animate ? 'translateX(0%)' : 'translateX(-100%)',
    opacity: animate ? 1 : 0,
    config: { tension: 250, friction: 30 },
  });

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white py-6 px-8 z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-4">
          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button onClick={toggleSidebar}>
              <HiMenu className="text-white text-3xl" />
            </button>
          </div>

          {/* Logo */}
          <animated.div style={headerAnimation} className="text-3xl font-bold">
            <span className="text-blue-500">CodeBy</span>Angelo
          </animated.div>
        </div>

        {/* Desktop Navigation */}
        <animated.nav style={headerAnimation} className="hidden md:flex space-x-6 text-lg">
          {['Home', 'About', 'Skills', 'Services', 'Projects', 'Contact'].map((link) => (
            <Link
              key={link}
              to={link.toLowerCase()}
              smooth={true}
              spy={true}
              offset={-80}
              duration={500}
              activeClass="text-blue-500 font-semibold"
              className="cursor-pointer transition duration-300 ease-in-out hover:text-blue-500"
            >
              {link}
            </Link>
          ))}
        </animated.nav>
      </div>

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 max-w-full bg-black text-white p-8 z-50 transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Icon */}
        <div className="flex justify-end mb-8">
          <button onClick={closeSidebar}>
            <HiX className="text-3xl text-white" />
          </button>
        </div>

        {/* Sidebar Nav Links */}
        <nav className="flex flex-col space-y-6 text-lg">
          {['Home', 'About', 'Skills', 'Services', 'Projects', 'Contact'].map((link) => (
            <Link
              key={link}
              to={link.toLowerCase()}
              smooth={true}
              spy={true}
              offset={-80}
              duration={500}
              activeClass="text-blue-500 font-semibold"
              className="cursor-pointer transition duration-300 ease-in-out hover:text-blue-500"
              onClick={closeSidebar}
            >
              {link}
            </Link>
          ))}
        </nav>
      </div>

      {/* Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}
    </header>
  );
};

export default Header;
