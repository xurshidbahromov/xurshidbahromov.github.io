import React from 'react';
import { useTheme } from '../../common/ThemeContext';
import { motion } from 'framer-motion';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';

function Navbar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass-card rounded-full px-6 py-3 flex items-center gap-6"
        >
            <a href="#hero" className="hover:scale-110 transition-transform">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 13L5.5 19.5L11 26" stroke="url(#logo-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M29 13L34.5 19.5L29 26" stroke="url(#logo-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 10L17 29" stroke="url(#logo-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                        <linearGradient id="logo-gradient" x1="5.5" y1="10" x2="34.5" y2="29" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#3B82F6" />
                            <stop offset="1" stopColor="#8B5CF6" />
                        </linearGradient>
                    </defs>
                </svg>
            </a>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-6">
                {["Projects", "Skills", "Contact"].map((item) => (
                    <motion.a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className={`font-mono text-sm font-bold transition-colors ${theme === 'light'
                            ? 'text-gray-600 hover:text-blue-600'
                            : 'text-gray-400 hover:text-blue-400'
                            }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {item}
                    </motion.a>
                ))}
            </div>

            <div className="h-4 w-[1px] bg-gray-900 dark:bg-gray-700 hidden md:block"></div>

            <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${theme === 'light'
                    ? 'hover:bg-gray-300'
                    : 'hover:bg-gray-800'
                    }`}
                aria-label="Toggle theme"
            >
                <motion.img
                    src={theme === 'light' ? sun : moon}
                    alt="Theme Icon"
                    className="w-6 h-6"
                    key={theme} // Key change triggers animation
                    initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />
            </button>
        </motion.nav>
    );
}

export default Navbar;
