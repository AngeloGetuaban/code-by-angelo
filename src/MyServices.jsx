import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTools, FaMobileAlt, FaMicrochip } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode size={40} />,
    title: 'Web Development',
    description:
      'I build dynamic and responsive web applications tailored to your goals, using React, Next.js, Node.js, and modern backend technologies.',
  },
  {
    icon: <FaTools size={40} />,
    title: 'Web Maintenance',
    description:
      'I ensure your websites remain secure, fast, and updated — including CMS, plugin, and security management with zero downtime philosophy.',
  },
  {
    icon: <FaMobileAlt size={40} />,
    title: 'Mobile Development',
    description:
      'Cross-platform mobile apps built with Flutter for Android & iOS. Focused on performance, fluid design, and seamless API integration.',
  },
  {
    icon: <FaMicrochip size={40} />,
    title: 'IoT Development',
    description:
      'From microcontrollers to cloud dashboards, I develop real-time IoT solutions using Arduino, sensors, and custom software systems.',
  },
];

const ServiceCard = ({ icon, title, description, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 0 60px #06b6d4',
        filter: 'brightness(1.1)',
        transition: { duration: 0.25, ease: 'easeOut' }
      }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="p-8 bg-gray-900/80 border border-cyan-500 rounded-3xl text-center backdrop-blur-md shadow-[0_0_30px_#06b6d4]"
    >
      <div className="text-cyan-400 mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-cyan-300 mb-4">{title}</h3>
      <p className="text-gray-300 text-base leading-relaxed">{description}</p>
    </motion.div>
  );
  

const MyServices = () => {
  return (
    <section id="services" className="bg-gray-700 py-28 px-6 sm:px-10 text-white">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-6xl font-extrabold text-center mb-20 drop-shadow-[0_0_20px_#06b6d4]">
          My <span className="text-cyan-400">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} delay={idx * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyServices;
