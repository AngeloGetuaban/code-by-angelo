import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

// Skill data
const skills = {
  coding: [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React.js / Next.js', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Django', level: 75 },
    { name: 'Flutter', level: 70 },
    { name: 'Python 3', level: 70 },
  ],
  tools: [
    { name: 'Firebase / Supabase', level: 85 },
    { name: 'PostgreSQL / MongoDB', level: 80 },
    { name: 'Multimedia Design', level: 90 },
    { name: 'Photoshop', level: 85 },
    { name: 'Arduino / IoT', level: 80 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Git & Version Control', level: 85 },
    { name: 'Network Admin', level: 75 },
  ],
};

// Skill progress bar component
const SkillBar = ({ name, level, inView }) => {
  const [hovered, setHovered] = useState(false);
  const isActive = inView || hovered;

  return (
    <div
      className="mb-6"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-between mb-2 text-base font-semibold text-cyan-300 drop-shadow-md">
        <span>{name}</span>
        <span>
          {isActive ? <CountUp end={level} duration={1} suffix="%" key={hovered ? 'hover' : 'scroll'} /> : '0%'}
        </span>
      </div>
      <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          key={hovered ? 'hover' : 'scroll'} // retriggers animation
          initial={{ width: 0 }}
          animate={{ width: isActive ? `${level}%` : '0%' }}
          transition={{ duration: 1 }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-600 shadow-[0_0_12px_#22d3ee]"
        />
      </div>
    </div>
  );
};

const SkillCard = ({ title, data, inView }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 0 120px 30px rgba(6, 182, 212, 0.6)',
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      className="p-8 rounded-3xl border-2 border-cyan-500 bg-gray-900/70 backdrop-blur-lg
                 hover:border-cyan-300"
    >
      <h3 className="text-3xl font-bold text-cyan-300 mb-8 drop-shadow-md">{title}</h3>
      {data.map((skill, idx) => (
        <SkillBar key={idx} name={skill.name} level={skill.level} inView={inView} />
      ))}
    </motion.div>
  );

// Main skills section
const MySkills = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={ref} id="skills" className="bg-gray-950 py-28 px-6 sm:px-10 text-white">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-6xl font-extrabold text-center mb-20 text-white drop-shadow-[0_0_20px_#06b6d4]">
          My <span className="text-cyan-400">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          <SkillCard title="Coding & Development" data={skills.coding} inView={inView} />
          <SkillCard title="Tech Tools & Specialties" data={skills.tools} inView={inView} />
        </div>
      </div>
    </section>
  );
};

export default MySkills;
