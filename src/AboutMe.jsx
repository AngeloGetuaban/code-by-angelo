import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Angelo from './hero_image.png';

const AboutMe = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // triggers when 20% is in view
    triggerOnce: true,
  });

  return (
    <section
      id="about"
      className="bg-gray-700 py-28 px-6 sm:px-10 text-white"
      ref={ref}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
        
        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -80 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-[350px] h-[450px] rounded-3xl overflow-hidden shadow-2xl">
            {/* Glow Layer */}
            <div className="absolute inset-0 before:content-[''] before:absolute before:-inset-3 before:bg-gradient-to-tr before:from-cyan-400 before:to-indigo-600 before:blur-2xl before:opacity-30 before:rounded-[2rem] z-0" />
            <img
              src={Angelo}
              alt="Michael Angelo Getuaban"
              className="relative z-10 w-full h-full object-cover rounded-3xl"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 80 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-5xl font-extrabold">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I’m <strong className="text-white">Michael Angelo Getuaban</strong>, a full stack developer and multimedia enthusiast passionate about crafting connected, intuitive, and scalable digital solutions.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            With experience in modern stacks like <span className="text-white">React, Next.js, Node.js, Django, and Flutter</span> and database technologies such as <span className="text-white">PostgreSQL, Firebase, and Supabase</span>, I focus on delivering seamless experiences across platforms.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            I bring creativity, technical depth, and an eye for clean architecture into every build — always striving to push beyond expectations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
