import { motion } from 'framer-motion';
import { Download, GraduationCap } from 'lucide-react';

const About = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-[#0d0d20] relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%)',
            top: '-20%',
            right: '-10%',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight gradient-text inline-block">About Me</h2>
          <div className="mt-3 w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Introduction Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">Hi, I'm <span className="gradient-text">Soham Bangar</span></h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              Full Stack Developer specializing in MERN stack with hands-on experience building and deploying real-world health
              care and interactive web applications.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Developed AI-powered healthcare platform and macOS desktop simulation
              using React, Node.js, and MongoDB. Passionate about creating scalable, production-ready software and modern user
              interfaces. Proficient in frontend, backend, REST APIs, and database integration. Strong focus on performance, clean
              architecture, and modern UI/UX. Passionate about Cloud, DevOps, and building production-ready software.
            </p>
            <div className="pt-4">
              <button
                onClick={handleResumeDownload}
                className="gradient-btn inline-flex items-center px-6 py-3 rounded-full text-white font-medium transition-all shadow-lg shadow-purple-500/20 cursor-pointer"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </button>
            </div>
          </motion.div>

          {/* Education Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            className="glass-strong p-8 rounded-2xl glow-border"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center mr-3">
                <GraduationCap className="w-5 h-5 text-purple-400" />
              </div>
              Education
            </h3>

            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-purple-500/30 before:to-transparent">
              {/* Timeline Item */}
              <div className="relative flex items-center group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-purple-500/30 bg-[#0d0d20] shrink-0 shadow z-10">
                  <span className="w-3 h-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></span>
                </div>
                <div className="w-[calc(100%-3.5rem)] p-4 rounded-xl glass ml-4 hover:bg-white/[0.06] transition-all duration-300">
                  <div className="flex flex-col mb-1">
                    <span className="text-sm font-medium text-cyan-400 uppercase tracking-wider mb-1">2024 - 2028</span>
                    <h4 className="font-bold text-white text-lg">B.E in Information Technology</h4>
                  </div>
                  <p className="text-gray-400 text-sm">Savitribai Phule Pune University</p>
                  <p className="text-purple-400 font-medium mt-2">SGPA: 9.03/10</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
