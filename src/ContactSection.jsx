import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const userTemplateParams = { ...formData };
    const adminTemplateParams = { ...formData };

    try {
      // 1. Send confirmation to user
      await emailjs.send(
        'service_g4chyxq',       // Your service ID
        'template_tqsmojo',      // User template ID
        userTemplateParams,
        'DSzwHd6qsdZtoJh1I'      // Public key
      );

      // 2. Send notification to admin
      await emailjs.send(
        'service_g4chyxq',
        'template_ctomnho',
        adminTemplateParams,
        'DSzwHd6qsdZtoJh1I'
      );

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setStatus('error');
      console.error('EmailJS error:', error);
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 3000); // Auto close after 3s
    }
  };

  return (
    <section id="contact" className="bg-gray-700 py-28 px-6 sm:px-10 text-white relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-12 drop-shadow-[0_0_20px_#06b6d4]">
          Contact <span className="text-cyan-400">Me!</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="bg-gray-800 text-white placeholder-gray-400 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="bg-gray-800 text-white placeholder-gray-400 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="bg-gray-800 text-white placeholder-gray-400 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Email Subject"
              className="bg-gray-800 text-white placeholder-gray-400 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="6"
            required
            className="w-full bg-gray-800 text-white placeholder-gray-400 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
          />

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className={`${
                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-white hover:bg-cyan-300'
              } text-black font-semibold px-8 py-3 rounded-full shadow-lg transition`}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>

      {/* Popup Overlay */}
      {status && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center"
        >
          <div className="bg-white text-center px-8 py-10 rounded-2xl shadow-xl max-w-sm w-full relative">
            {/* Icon */}
            <div className="flex justify-center mb-4">
              {status === 'success' ? (
                <svg
                  className="w-16 h-16 text-green-500 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg
                  className="w-16 h-16 text-red-500 animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>

            <h3 className="text-xl font-bold mb-2 text-black">
              {status === 'success' ? 'Message Sent!' : 'Failed to Send'}
            </h3>
            <p className="text-gray-600 mb-6">
              {status === 'success'
                ? 'Your message has been sent successfully.'
                : 'Something went wrong. Please try again.'}
            </p>

            <button
              onClick={() => setStatus(null)}
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-2 rounded-full shadow"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default ContactSection;
