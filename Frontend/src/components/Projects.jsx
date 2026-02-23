import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsList = () => {
  const projects = [
    {
      title: "Kenkoo– AI-Powered Remote Patient Monitoring Web App",
      description: "Built a full-stack Remote Patient Monitoring platform using MongoDB, Express.js, React.js, and Node.js to enable secure storage and access of medical data. Developed REST APIs, implemented responsive frontend, integrated database, and deployed the application on Render.",
      techTags: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      githubUrl: "https://github.com/SohambangarCODE/Kenkoo-Innovate-2",
      liveUrl: "https://kenkoo-frontend.onrender.com/",
      gradient: "from-purple-600/20 via-indigo-600/20 to-blue-600/20",
      image: "/kenkooassist.png"
    },
    {
      title: " AI Healthcare Platform Website",
      description: "Designed and developed a responsive healthcare platform website using React JS and Tailwind CSS. Built reusable components to showcase AI medical scanner, DICOM sharing, and specialist connectivity features with modern UI/UX and mobile-first design.",
      techTags: ["React", "Tailwind CSS"],
      githubUrl: "https://github.com/SohambangarCODE/Kenkoo",
      liveUrl: "https://kenkoo.in/",
      gradient: "from-cyan-600/20 via-teal-600/20 to-emerald-600/20",
      image: "/kenkooin.png"
    },
    {
      title: "MacOS Web Dashboard – Interactive Desktop Simulation",
      description: "Developed a macOS-inspired desktop interface in the browser using React JS and SCSS. Implemented draggable and resizable windows, terminal emulator, markdown viewer, and syntax highlighting to simulate real operating system functionality.",
      techTags: ["React", "SCSS"],
      githubUrl: "https://github.com/SohambangarCODE/Mac-os",
      liveUrl: "https://mac-os-z8vn-m1300ia22-sohambangarcodes-projects.vercel.app/",
      gradient: "from-pink-600/20 via-rose-600/20 to-red-600/20",
      image: "/macos.png"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-[#0a0a1a] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.04) 0%, transparent 70%)',
            bottom: '-15%',
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
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight gradient-text inline-block">Featured Projects</h2>
          <div className="mt-3 w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-strong rounded-2xl overflow-hidden group flex flex-col h-full hover:scale-105 hover:shadow-lg transition-all duration-300 hover:shadow-purple-500/20 hover:border-purple-500/20 hover:bg-white/[0.06]"
            >
              {/* Gradient Header */}
              <div className={`h-36 sm:h-44 bg-gradient-to-br ${project.gradient} w-full relative overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 bg-[#0a0a1a]/40" />
                <img src={project.image} alt="" className="object-cover w-full h-full opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-5 md:mb-6 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6 md:mb-8 mt-auto">
                  {project.techTags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2.5 py-1 bg-white/[0.05] text-gray-300 text-xs sm:text-sm font-medium rounded-md border border-white/[0.08]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4 pt-4 border-t border-white/[0.06]">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 text-sm sm:text-base font-medium transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white text-sm sm:text-base font-medium transition-colors"
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsList;
