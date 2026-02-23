import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Core",
      icon: "💻",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"]
    },
    {
      title: "Frontend & Design",
      icon: "🎨",
      skills: ["React.js", "Tailwind CSS", "SCSS", "HTML5", "CSS3"]
    },
    {
      title: "Backend & Database",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "MongoDB", "REST API Development", "Authentication"]
    },
    {
      title: "Tools & DevOps",
      icon: "🛠️",
      skills: ["Git", "Git Hub", "Vercel", "Render", "Linux", "Postman"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-[#0a0a1a] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, transparent 70%)',
            bottom: '-10%',
            left: '-10%',
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
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight gradient-text inline-block">Technical Skills</h2>
          <div className="mt-3 w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto"></div>
          <p className="mt-4 text-base md:text-lg text-gray-500 max-w-2xl mx-auto px-4">
            A comprehensive overview of my technical expertise and the tools I use to build digital solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-strong rounded-2xl p-5 sm:p-6 group hover:scale-105 hover:shadow-lg transition-all duration-300 hover:shadow-purple-500/20 hover:border-purple-500/20 hover:bg-white/[0.06]"
            >
              <div className="flex items-center gap-3 mb-5 sm:mb-6 pb-3 border-b border-white/[0.06]">
                <span className="text-xl sm:text-2xl">{category.icon}</span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2.5 py-1.5 bg-purple-500/10 text-purple-300 text-xs sm:text-sm font-medium rounded-lg border border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/30 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
