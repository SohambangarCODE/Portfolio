import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Download, MapPin, ChevronDown } from 'lucide-react';

const FloatingParticle = ({ delay, duration, size, left, top }) => (
  <div
    className="absolute rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-sm"
    style={{
      width: size,
      height: size,
      left: left,
      top: top,
      animation: `particle-drift ${duration}s linear ${delay}s infinite`,
    }}
  />
);

const Hero = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-[#0a0a1a]">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary purple orb */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full animate-float animate-glow"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
            top: '10%',
            left: '15%',
          }}
        />
        {/* Cyan orb */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full animate-float-reverse animate-glow"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',
            bottom: '10%',
            right: '10%',
            animationDelay: '2s',
          }}
        />
        {/* Indigo orb */}
        <div
          className="absolute w-[350px] h-[350px] rounded-full animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
            top: '50%',
            right: '30%',
            animationDelay: '4s',
          }}
        />

        {/* Floating particles */}
        <FloatingParticle delay={0} duration={15} size="4px" left="10%" top="80%" />
        <FloatingParticle delay={2} duration={18} size="6px" left="20%" top="90%" />
        <FloatingParticle delay={4} duration={12} size="3px" left="35%" top="85%" />
        <FloatingParticle delay={1} duration={20} size="5px" left="50%" top="95%" />
        <FloatingParticle delay={3} duration={16} size="4px" left="65%" top="88%" />
        <FloatingParticle delay={5} duration={14} size="7px" left="80%" top="92%" />
        <FloatingParticle delay={2} duration={17} size="3px" left="90%" top="85%" />
        <FloatingParticle delay={6} duration={19} size="5px" left="45%" top="75%" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center relative z-10">
        {/* Glassmorphic hero card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="glass-strong rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 w-full animate-pulse-glow"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, type: 'spring', stiffness: 150 }}
            className="flex justify-center mb-8"
          >
            <div className="photo-ring">
              <img
                src="/sohampic.jpg"
                alt="Soham Bangar"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4"
          >
            <span className="gradient-text">Soham Bangar</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-lg md:text-xl text-gray-400 mb-6 font-light"
          >
           
            <span className="text-blue-300 font-bold">Full Stack Developer</span>
          </motion.h2>

          {/* Location & Email */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-gray-500 mb-8 text-sm"
          >
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>Pune, India</span>
            </div>
            <a href="mailto:sohambangar189@gmail.com" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
              <Mail className="w-4 h-4 text-cyan-500" />
              <span className="break-all">sohambangar189@gmail.com</span>
            </a>
          </motion.div>

          {/* Social + Resume buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex items-center justify-center gap-4"
          >
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/soham-bangar-b8507834a/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all duration-300 hover:bg-white/10 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/SohambangarCODE"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:bg-white/10 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>

            {/* Download Resume Button */}
            <button
              onClick={handleResumeDownload}
              className="gradient-btn inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm shadow-lg shadow-purple-500/25 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 animate-scroll-bounce cursor-pointer">
          <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full animate-scroll-bounce" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
