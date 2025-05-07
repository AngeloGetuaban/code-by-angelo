import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { useSpring, animated } from 'react-spring';

const Header = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 200);
  }, []);

  const headerAnimation = useSpring({
    transform: animate ? 'translateX(0%)' : 'translateX(-100%)',
    opacity: animate ? 1 : 0,
    config: { tension: 250, friction: 30 },
  });

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white py-6 px-8 z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <animated.div style={headerAnimation} className="text-3xl font-bold">
          <span className="text-blue-500">CodeBy</span>Angelo
        </animated.div>

        {/* Navigation Links with scrollspy */}
        <animated.nav style={headerAnimation} className="space-x-6 text-lg">
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
    </header>
  );
};

export default Header;
