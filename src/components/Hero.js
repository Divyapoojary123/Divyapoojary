import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white"
    >
      {/* Floating Blobs */}
      <div className="absolute w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-[200px] right-[-100px] w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-[-100px] left-[150px] w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="z-10 backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-8 md:p-12 text-center md:text-left max-w-4xl w-full shadow-xl flex flex-col md:flex-row items-center md:items-start gap-6"
      >
        {/* Profile Image */}
        <img
          src="/profile.jpg" // <-- Update with your image path
          alt="Divya profile"
          className="w-32 h-42 md:w-40 md:h-42
           rounded-full object-cover border-4 border-white shadow-lg"
        />

        {/* Text Content */}
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500">
              Divya Poojary
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80">
            Final-year diploma student in Computer Science 🚀
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-6"
          >
            <a
              href="#about"
              className="inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-purple-100 transition focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              Learn More About Me
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Down Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 z-10"
      >
        <a href="#about" aria-label="Scroll down to learn more about me">
          <FaArrowDown className="text-2xl animate-bounce opacity-70 hover:opacity-100 transition" />
        </a>
      </motion.div>
    </section>
  );
}
