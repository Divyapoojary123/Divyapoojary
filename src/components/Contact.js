import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookF, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 py-12 px-4 sm:px-6 lg:px-8 text-white"
      id="contact"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-white/80 mb-8">
          Feel free to reach out via the form below or connect with me on social media!
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-10 text-xl">
          <a
            href="https://instagram.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="hover:text-red-400 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://twitter.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-200 transition"
          >
            <FaFacebookF />
          </a>
        </div>

        {/* Contact Form */}
        <form className="space-y-6 max-w-lg mx-auto">
          <div>
            <label htmlFor="name" className="block text-left mb-1 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded bg-white text-gray-900"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-left mb-1 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="your.email@example.com"
              className="w-full px-4 py-2 rounded bg-white text-gray-900"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-left mb-1 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your message"
              className="w-full px-4 py-2 rounded bg-white text-gray-900"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
