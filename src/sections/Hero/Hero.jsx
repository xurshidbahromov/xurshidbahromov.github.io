import heroImg from '../../assets/Design uten navn.png';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';
import { motion } from 'framer-motion';

import Typewriter from '../../common/Typewriter';

function Hero() {
  const { theme } = useTheme();

  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-3 md:px-4 py-20 overflow-hidden">

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center md:items-start text-center md:text-left gap-6 z-10 max-w-2xl"
      >
        <h1 className="font-serif font-bold text-6xl md:text-8xl tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-br from-gray-400 to-gray-600 dark:from-gray-400 dark:to-gray-600">
          Xurshidbek
          <br />
          Bahromov
        </h1>

        <h2 className="font-mono text-xl text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] min-h-[1.5em]">
          <Typewriter text="Software Developer | AI ML Engineer" delay={150} />
        </h2>

        <p className={`text-lg leading-relaxed font-light ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
          Building intelligent software solutions at the intersection of AI/ML and modern web development. Passionate about creating scalable applications that leverage machine learning to solve real-world problems.
        </p>

        <div className="flex items-center gap-6 mt-2">
          {[
            { href: "https://twitter.com/XBahromov", icon: twitterIcon, alt: "Twitter" },
            { href: "https://github.com/xurshidbek-bahromov", icon: githubIcon, alt: "GitHub" },
            { href: "https://www.linkedin.com/in/xurshid-bahromov/", icon: linkedinIcon, alt: "LinkedIn" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              whileHover={{ scale: 1.1, y: -2 }}
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <img src={social.icon} alt={social.alt} className="w-8 h-8" />
            </motion.a>
          ))}
        </div>

        <motion.a
          href={CV}
          download
          whileHover="hover"
          whileTap="tap"
          initial="initial"
          className="group mt-6 relative px-8 py-4 rounded-full font-bold text-white overflow-hidden flex items-center gap-3 transition-all duration-300"
        >
          {/* Glass Background - Refined for visibility */}
          <div className={`absolute inset-0 backdrop-blur-md border transition-colors duration-300 ${theme === 'light'
            ? 'bg-gray-500/10 border-gray-700/20 group-hover:bg-gray-700/20'
            : 'bg-white/5 border-white/10 group-hover:bg-white/20'
            } rounded-full`} />

          {/* Animated Gradient border glow on hover */}
          <motion.div
            className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-blue-500/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            animate={{
              backgroundPosition: ["0% 0%", "100% 0%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <span className={`relative z-10 text-lg uppercase tracking-wider transition-colors ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}>Resume</span>

          <div className="relative z-10 w-6 h-6 overflow-hidden">
            {/* Animated Download Arrow */}
            <motion.svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`w-6 h-6 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}
              variants={{
                initial: { y: 0, opacity: 1 },
                hover: {
                  y: [0, 30, -30, 0],
                  transition: {
                    times: [0, 0.4, 0.41, 1],
                    duration: 0.6,
                    ease: "easeInOut"
                  }
                }
              }}
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </motion.svg>
          </div>
        </motion.a>
      </motion.div>

      {/* Hero Image Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -25, 0], // Levitation Effect
        }}
        whileHover={{
          scale: 1.05,
          rotateX: 5, // Subtle 3D Tilt
          rotateY: -5,
          transition: { duration: 0.3 }
        }}
        transition={{
          opacity: { duration: 1, delay: 0.2 },
          scale: { duration: 1, delay: 0.2 },
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        style={{ perspective: 1000 }} // Enable 3D effects
        className="relative z-10 flex items-center justify-center cursor-pointer"
      >
        {/* Sea Current Effect - Organic Morphing Blobs */}
        <motion.div
          className="absolute w-[115%] h-[115%] bg-gradient-to-tr from-blue-400/20 to-purple-400/20 blur-2xl"
          animate={{
            borderRadius: ["40% 60% 70% 30% / 50% 30% 70% 50%", "60% 40% 30% 70% / 60% 70% 30% 40%", "40% 60% 70% 30% / 50% 30% 70% 50%"],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute w-[130%] h-[130%] border border-white/20 dark:border-white/10"
          animate={{
            borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Profile Image with Border */}
        <div className="relative z-10 p-2">
          <img
            src={heroImg}
            className="w-64 md:w-90 drop-shadow-2xl rounded-full border-2 border-white/30 dark:border-white/10 bg-white/5 backdrop-blur-sm"
            alt="Profile picture of Xurshidbek Bahromov"
          />
        </div>
      </motion.div>

    </section>
  );
}

export default Hero;

