import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Typewriter = ({ text, delay = 100, infinite = false }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let timeout;

        if (currentIndex <= text.length) {
            timeout = setTimeout(() => {
                setCurrentText(text.slice(0, currentIndex));
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, delay);
        } else if (infinite) {
            timeout = setTimeout(() => {
                setCurrentIndex(0);
                setCurrentText('');
            }, delay * 10);
        }

        return () => clearTimeout(timeout);
    }, [currentIndex, delay, infinite, text]);

    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block"
        >
            {currentText}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block ml-1 border-r-2 border-blue-500 h-[1em] align-middle"
            />
        </motion.span>
    );
};

export default Typewriter;
