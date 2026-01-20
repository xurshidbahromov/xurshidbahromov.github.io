import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';
import { motion } from 'framer-motion';

function Skills() {
  const { theme } = useTheme();

  const skillGroups = [
    {
      category: "Frontend",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML/CSS"]
    },
    {
      category: "Backend & Database",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      skills: ["Node.js", "Python", "FastAPI", "Firebase"]
    },
    {
      category: "AI / ML & Tools",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Git", "Docker", "AWS"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="skills" className="py-32 px-4 flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />

      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="font-serif font-bold text-5xl md:text-6xl tracking-tight text-light-text dark:text-dark-text opacity-90">
          Skills
        </h1>
        <p className="mt-4 font-mono text-sm text-blue-600 dark:text-blue-400 uppercase tracking-widest">
          Specialized in modern stack & AI
        </p>
      </motion.div>

      <motion.div
        className="w-full max-w-4xl flex flex-col gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={groupIndex}
            className="flex flex-col items-center gap-8"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 px-6 py-2 rounded-full bg-blue-500/5 border border-blue-500/10">
              <span className="text-blue-500">{group.icon}</span>
              <h2 className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-bold">
                {group.category}
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:gap-5">
              {group.skills.map((skill) => (
                <SkillList key={skill} skill={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;

