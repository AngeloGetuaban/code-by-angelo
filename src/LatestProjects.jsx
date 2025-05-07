import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ScrollProject = ({ title, description, image, link }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col lg:flex-row items-center justify-center gap-10 mb-24"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Image Block */}
      <motion.div
        className="w-full lg:w-1/2 relative group overflow-hidden rounded-3xl shadow-xl"
        whileHover={{ scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-96 object-cover rounded-3xl transition-all duration-300 group-hover:ring-4 group-hover:ring-cyan-400"
        />
      </motion.div>

      {/* Text Block */}
      <motion.div
        clName="w-full lg:w-1/2 text-left space-y-4"
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h3 className="text-4xl font-bold text-cyan-400 drop-shadow">{title}</h3>
        <p className="text-gray-300 text-lg">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-white text-black font-bold rounded-full shadow hover:bg-cyan-400 transition"
          >
            Visit Project
          </a>
        )}
      </motion.div>
    </motion.div>
  );
};

const LatestProjects = () => {
  const projects = [
    {
      title: 'Asthma Solutions PH',
      description: 'Online booking system for asthma patients under ChiroHealot.',
      image: '/projects/asthmasolutionsph.png',
      link: 'https://asthmasolutionsph.com',
    },
    {
      title: 'ChiroHealot',
      description: 'Clinic booking and patient management platform.',
      image: '/projects/chirohealot.png',
      link: 'https://chirohealot.com',
    },
    {
      title: 'Real Estate Landing Page',
      description: 'Modern real estate website built with React.',
      image: '/projects/marci.png',
      link: 'https://marci-metzger-seven.vercel.app',
    },
  ];

  const ndaProjects = [
    {
      title: 'Automatic Irrigation System',
      description: 'Using Mobile App and Raspberry Pi connected to Firebase',
    },
    {
      title: 'Mood Tracker Kiosk System',
      description: 'QR scanner kiosk + management platform for mental wellness',
    },
    {
      title: 'Food Delivery Mobile App',
      description: 'Multi-role delivery platform for restaurants and riders',
    },
    {
      title: 'All-in-One ICT Education App',
      description: 'Interactive LMS app for teaching IT subjects across grades',
    },
  ];

  return (
    <section id="projects" className="bg-gray-950 py-28 px-6 sm:px-10 text-white">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-6xl font-extrabold text-center mb-24 drop-shadow-[0_0_20px_#06b6d4]">
          Latest <span className="text-cyan-400">Projects</span>
        </h2>

        {/* Animated Vertical Projects */}
        {projects.map((proj, idx) => (
          <ScrollProject
            key={idx}
            title={proj.title}
            description={proj.description}
            image={proj.image}
            link={proj.link}
          />
        ))}

        {/* NDA Section */}
        <div className="text-center mt-32 mb-10">
          <h3 className="text-4xl font-bold text-white mb-6">Additional Projects</h3>
          <p className="text-gray-400 text-sm italic">
            These projects are under NDA or do not have public assets.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ndaProjects.map((proj, idx) => (
            <div key={idx} className="p-6 bg-gray-900/80 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-bold text-cyan-400">{proj.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{proj.description}</p>
              <p className="text-xs italic text-cyan-500 mt-1">[Confidential / No Preview]</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
