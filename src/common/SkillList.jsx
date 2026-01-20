import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';

function SkillList({ skill }) {
  const { theme } = useTheme();

  return (
    <motion.div
      className="group relative px-6 py-3 rounded-full overflow-hidden cursor-default"
      whileHover="hover"
      initial="initial"
    >
      {/* Glass Background */}
      <div className={`absolute inset-0 backdrop-blur-md border transition-colors duration-300 ${theme === 'light'
          ? 'bg-white/20 border-gray-700/10 group-hover:bg-white/30'
          : 'bg-white/5 border-white/10 group-hover:bg-white/15'
        } rounded-full`} />

      {/* Animated Gradient border glow on hover */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          backgroundPosition: ["0% 0%", "100% 0%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <span className={`relative z-10 text-sm md:text-base font-mono font-medium tracking-wide transition-colors duration-300 ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'
        }`}>
        {skill}
      </span>
    </motion.div>
  );
}

export default SkillList;

