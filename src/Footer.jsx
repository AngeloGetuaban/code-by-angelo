import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-10 px-6 sm:px-10 border-t border-gray-800">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left: Brand */}
        <div className="text-2xl font-bold">
          <span className="text-blue-500">CodeBy</span>Angelo
        </div>

        {/* Center: Nav links */}
        <ul className="flex flex-wrap gap-6 text-sm sm:text-base">
          {['Home', 'About', 'Skills', 'Services', 'Projects', 'Contact'].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-cyan-400 transition"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Scroll to top */}
        <button
          onClick={scrollToTop}
          className="bg-cyan-400 hover:bg-cyan-300 text-black p-3 rounded-full shadow-md transition"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={16} />
        </button>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-500 mt-6">
        © 2025 CodeByAngelo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
