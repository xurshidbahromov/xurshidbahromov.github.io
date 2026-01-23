import aether from '../../assets/aether.png';
import resumind from '../../assets/resumind_banner.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      src: aether,
      github: "https://github.com/xurshidbahromov/ai-task-manager",
      demo: "https://ai-task-manager-aether.vercel.app/",
      h3: "Aether",
      p: "Ai Task Manager",
      technologies: ["React", "Vite", "Python", "FastAPI", "PostgreSQL"]
    },
    {
      src: resumind,
      github: "https://github.com/xurshidbahromov/resumind-ai-resume-analyzer",
      demo: "https://resumind-ai-resume-analyzer-eight.vercel.app/",
      h3: "Resumind",
      p: "AI Resume Analyzer",
      technologies: ["React", "Vite", "Python", "FastAPI", "LicensePlateRecognition", "OpenCV"]
    },
    {
      src: hipsster,
      github: "https://github.com/xurshidbahromov/company-landing-page-2",
      demo: "https://hipsster-glasses-shop.vercel.app/",
      h3: "Hipsster",
      p: "Glasses Shop",
      technologies: ["React", "Tailwind", "Firebase"]
    },
    {
      src: fitLift,
      github: "https://github.com/xurshidbahromov/fitlift",
      demo: "https://fitlift.vercel.app/",
      h3: "FitLift",
      p: "Fitness App",
      technologies: ["React Native", "Express", "PostgreSQL"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-20 px-3 md:px-4 min-h-screen flex flex-col justify-center">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="font-serif font-bold text-5xl md:text-6xl tracking-tight text-light-text dark:text-dark-text opacity-90">
          Projects
        </h1>
        <p className="mt-4 font-mono text-sm text-blue-600 dark:text-blue-400 uppercase tracking-widest">
          Selected work and experiments
        </p>
      </motion.div>

      <motion.div
        className="w-full max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
          >
            <ProjectCard
              src={project.src}
              github={project.github}
              demo={project.demo}
              h3={project.h3}
              p={project.p}
              technologies={project.technologies}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;

