import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
} from "react-icons/fa";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-pink-500 opacity-30 rounded-full filter blur-3xl z-0 animate-blob" />
      <div className="absolute bottom-[-100px] right-[-100px] w-80 h-80 bg-blue-500 opacity-30 rounded-full filter blur-3xl z-0 animate-blob animation-delay-3000" />

      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-center mb-12 z-10 relative"
      >
        My Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="relative z-10 container mx-auto flex flex-wrap justify-center gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            className="backdrop-blur-lg bg-white/10 border border-white/20 p-6 w-40 rounded-xl shadow-lg text-center transition"
          >
            <div className="text-4xl mb-2 animate-pulse">{skill.icon}</div>
            <p className="font-semibold text-white/90">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
