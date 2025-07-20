import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookF, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Contact Me</h2>
        <p className="text-gray-600 mb-8">
          Feel free to reach out via the form below or connect with me on social media!
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-10 text-xl text-blue-500">
          <a href="https://instagram.com/your_username" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <FaInstagram />
          </a>
          <a href="mailto:your.email@example.com" className="hover:text-red-500 transition">
            <FaEnvelope />
          </a>
          <a href="https://twitter.com/your_username" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaTwitter />
          </a>
          <a href="https://facebook.com/your_username" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
            <FaFacebookF />
          </a>
        </div>

        {/* Contact Form */}
        <form className="space-y-6 max-w-lg mx-auto">
        
          
          
        </form>
      </div>
    </section>
  );
};

export default Contact;