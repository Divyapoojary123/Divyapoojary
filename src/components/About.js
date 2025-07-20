import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8 },
  }),
};

const About = () => {
  const paragraphs = [
    `I am a final-year Diploma student in Computer Science Engineering at Karnataka Polytechnic (KPT), Mangalore. Over the course of my studies, I've developed a strong foundation in core subjects including programming, databases, computer networks, data structures, web development, and software engineering.`,
    `My academic journey at KPT has equipped me with both theoretical knowledge and practical skills, which I've applied through hands-on mini-projects, lab work, and collaborative assignments.`,
    `I’ve worked with programming languages like C, C++, Python, and Java, as well as web technologies including HTML, CSS, JavaScript, and basic SQL.`,
    `Currently, I'm working on my final-year project, which serves as a capstone to my diploma studies. It’s helping me sharpen my problem-solving skills, improve team collaboration, and deepen my understanding of how to build real-world software solutions.`,
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-black overflow-hidden text-white"
    >
      {/* Animated Background Blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-pink-500 opacity-30 rounded-full filter blur-3xl z-0 animate-blob"></div>
      <div
        className="absolute bottom-[-100px] right-[-100px] w-80 h-80 bg-yellow-500 opacity-30 rounded-full filter blur-3xl z-0 animate-blob"
        style={{ animationDelay: "3s" }}
      ></div>
      <div
        className="absolute top-[200px] right-[20%] w-72 h-72 bg-purple-500 opacity-30 rounded-full filter blur-3xl z-0 animate-blob"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-3xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 sm:p-8 md:p-12 rounded-xl shadow-2xl"
      >
        <motion.h2
          variants={textVariants}
          custom={0}
          className="text-3xl font-bold mb-8 text-center text-white"
        >
          About Me
        </motion.h2>

        {paragraphs.map((text, i) => (
          <motion.p
            key={i}
            variants={textVariants}
            custom={i + 1}
            className="text-white/90 text-lg leading-relaxed mb-5"
          >
            {text}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
