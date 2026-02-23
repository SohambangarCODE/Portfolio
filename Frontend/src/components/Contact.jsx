import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch('https://portfolio-5qv1.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
          setStatus(prev => ({ ...prev, success: false }));
        }, 5000);
      } else {
        setStatus({
          submitting: false,
          success: false,
          error: data.error || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Failed to connect to the server. Please check your connection.'
      });
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#0a0a1a] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.04) 0%, transparent 70%)',
            top: '10%',
            left: '-5%',
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.04) 0%, transparent 70%)',
            bottom: '10%',
            right: '-5%',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight gradient-text inline-block">Get In Touch</h2>
          <div className="mt-3 w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto"></div>
          <p className="mt-4 text-base md:text-lg text-gray-500 max-w-2xl mx-auto px-4">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-5xl mx-auto glass-strong rounded-2xl md:rounded-3xl overflow-hidden">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, margin: '-80px' }}
            className="p-6 md:p-12 bg-gradient-to-br from-purple-900/40 via-indigo-900/30 to-cyan-900/20 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-sm md:text-base">
                Fill up the form and I'll get back to you within 24 hours.
              </p>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center group">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mr-4 group-hover:bg-purple-500/20 transition-colors shrink-0">
                    <Phone className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-gray-300 text-sm md:text-base">+91 9699480779</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mr-4 group-hover:bg-cyan-500/20 transition-colors shrink-0">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <a href="mailto:harshbanka321@gmail.com" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base break-all">
                    sohambangar189@gmail.com
                  </a>
                </div>
                <div className="flex items-center group">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mr-4 group-hover:bg-indigo-500/20 transition-colors shrink-0">
                    <MapPin className="w-5 h-5 text-indigo-400" />
                  </div>
                  <span className="text-gray-300 text-sm md:text-base">Pune, India</span>
                </div>
              </div>
            </div>

            <div className="mt-10 md:mt-12">
              <div className="flex space-x-3">
                <a
                  href="https://www.linkedin.com/in/soham-bangar-b8507834a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all duration-300 hover:bg-white/10 hover:scale-110"
                >
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/SohambangarCODE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:bg-white/10 hover:scale-110"
                >
                  <Github className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: '-80px' }}
            className="p-6 md:p-12 pb-8 md:pb-12 border-t md:border-t-0 md:border-l border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl glass border-white/10 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/30 outline-none transition-all text-white placeholder-gray-600 bg-white/[0.03]"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl glass border-white/10 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/30 outline-none transition-all text-white placeholder-gray-600 bg-white/[0.03]"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl glass border-white/10 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/30 outline-none transition-all text-white placeholder-gray-600 resize-none bg-white/[0.03]"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              {/* Status Messages */}
              {status.error && (
                <div className="p-4 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 text-sm">
                  {status.error}
                </div>
              )}

              {status.success && (
                <div className="p-4 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-sm font-medium flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                disabled={status.submitting}
                className="w-full flex justify-center items-center py-4 px-6 rounded-xl gradient-btn text-white font-medium shadow-lg shadow-purple-500/20 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
              >
                {status.submitting ? (
                  <>
                    <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="-ml-1 mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
