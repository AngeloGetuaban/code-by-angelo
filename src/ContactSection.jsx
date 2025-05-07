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

    const userTemplateParams = {
      ...formData,
    };

    const adminTemplateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      // 1. Send confirmation email to user
      await emailjs.send(
        'service_g4chyxq',
        'template_tqsmojo',
        userTemplateParams,
        'DSzwHd6qsdZtoJh1I'
      );

      // 2. Send alert email to you
      await emailjs.send(
        'service_g4chyxq',
        'template_ctomnho',
        adminTemplateParams,
        'DSzwHd6qsdZtoJh1I'
      );

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
      console.error('EmailJS error:', error);
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 4000);
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

        {/* Success/Failure Overlay */}
        {status && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`fixed top-20 left-1/2 transform -translate-x-1/2 px-6 py-4 rounded-lg text-white text-center z-50 ${
              status === 'success' ? 'bg-green-600' : 'bg-red-600'
            }`}
          >
            {status === 'success'
              ? 'Your message has been sent successfully!'
              : 'Something went wrong. Please try again.'}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
