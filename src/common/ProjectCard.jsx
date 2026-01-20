import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';

function ProjectCard({ src, github, demo, h3, p, technologies }) {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full pb-[60%] rounded-3xl overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Inner container with absolute positioning */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div className="absolute inset-0">
          <motion.img
            src={src}
            alt={h3}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>

        {/* Overlay - darkens on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"
          animate={{ opacity: isHovered ? 1 : 0.6 }}
          transition={{ duration: 0.3 }}
        />

        {/* Content Container */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          {/* Top Section - Title and Description */}
          <div className="space-y-2">
            <h3 className="font-serif font-bold text-2xl md:text-3xl text-white">
              {h3}
            </h3>
            <p className="font-mono text-sm text-gray-300">{p}</p>
          </div>

          {/* Middle Section - Technologies (appear on hover) */}
          <motion.div
            className="flex flex-wrap gap-2"
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {technologies.map((tech, index) => (
              <span
                key={index}
                className={`px-3 py-1 text-xs font-mono rounded-full backdrop-blur-md ${theme === 'light'
                  ? 'bg-white/20 text-white border border-white/30'
                  : 'bg-white/10 text-gray-200 border border-white/20'
                  }`}
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Bottom Section - GitHub and Demo Icons (slide up on hover) */}
          <motion.div
            className="flex gap-4 justify-center"
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {/* GitHub Button */}
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover="hover"
              variants={{
                hover: { scale: 1.05 }
              }}
              className={`glass-card px-6 py-3 rounded-full flex items-center gap-2 ${theme === 'light'
                ? 'bg-white/20 hover:bg-white/30 border border-white/30'
                : 'bg-white/10 hover:bg-white/20 border border-white/20'
                } transition-colors`}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                variants={{
                  hover: {
                    x: [0, -2, 2, -2, 2, 0],
                    transition: { duration: 0.7, ease: "easeInOut" }
                  }
                }}
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </motion.svg>
              <span className="text-white font-mono text-sm font-semibold">GitHub</span>
            </motion.a>

            {/* Demo Button */}
            <motion.a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover="hover"
              variants={{
                hover: { scale: 1.05 }
              }}
              className={`glass-card px-6 py-3 rounded-full flex items-center gap-2 ${theme === 'light'
                ? 'bg-white/20 hover:bg-white/30 border border-white/30'
                : 'bg-white/10 hover:bg-white/20 border border-white/20'
                } transition-colors`}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                variants={{
                  hover: {
                    x: [0, -2, 2, -2, 2, 0],
                    transition: { duration: 0.7, ease: "easeInOut" }
                  }
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </motion.svg>
              <span className="text-white font-mono text-sm font-semibold uppercase tracking-wider">Demo</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
