import { motion } from "framer-motion";

const Projects = () => {
  const projectList = [
    {
      title: "Wadhwani Skilling",
      desc: "An interactive learning platform focused on skill development and assessments.",
    },
    {
      title: "Language Translator",
      desc: "A real-time language translator app built using translation APIs.",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-yellow-500 opacity-30 rounded-full filter blur-3xl z-0 animate-blob"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-80 h-80 bg-pink-500 opacity-30 rounded-full filter blur-3xl z-0 animate-blob animation-delay-3000"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-2">Projects</h2>
        <p className="text-white/70">Here are a few things I've worked on recently.</p>
      </motion.div>

      {/* Projects */}
      <div className="relative z-10 container mx-auto grid gap-8 md:grid-cols-2">
        {projectList.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-xl font-bold mb-2 text-yellow-300">{project.title}</h3>
            <p className="text-white/80">{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
