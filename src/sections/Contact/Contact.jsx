import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../common/ThemeContext';
import { useState } from 'react';
import confetti from 'canvas-confetti';

function Contact() {
  const { theme } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mvzzqlva", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSuccess(true);
        // Celebration!
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#3B82F6', '#8B5CF6', '#60A5FA', '#FFFFFF'],
          ticks: 200,
          gravity: 1.2,
          decay: 0.94,
          startVelocity: 30,
        });

        // Secondary burst
        setTimeout(() => {
          confetti({
            particleCount: 80,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#3B82F6', '#8B5CF6']
          });
          confetti({
            particleCount: 80,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#3B82F6', '#8B5CF6']
          });
        }, 200);

        form.reset();
      } else {
        alert("Xatolik yuz berdi. Iltimos qaytadan urinib ko'ring.");
      }
    } catch (error) {
      alert("Tarmoqda xatolik. Internetingizni tekshiring.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="contact" className="py-32 px-4 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full -z-10" />

      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-serif font-bold text-5xl md:text-6xl tracking-tight text-light-text dark:text-dark-text opacity-90">
          Contact
        </h1>
        <p className="mt-4 font-mono text-sm text-blue-600 dark:text-blue-400 uppercase tracking-widest">
          Let's build something together
        </p>
      </motion.div>

      <div className="w-full max-w-xl min-h-[400px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.form
              key="contact-form"
              onSubmit={handleSubmit}
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full flex flex-col gap-6"
            >
              <motion.div variants={fieldVariants} className="relative group">
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  required
                  className={`w-full px-6 py-4 rounded-2xl bg-white/5 border transition-all duration-300 outline-none ${theme === 'light'
                      ? 'bg-gray-100/50 border-gray-200 focus:border-blue-500/50 text-gray-900'
                      : 'bg-white/5 border-white/10 focus:border-blue-400/50 text-white'
                    } backdrop-blur-md placeholder:text-gray-400 dark:placeholder:text-gray-500`}
                />
              </motion.div>

              <motion.div variants={fieldVariants} className="relative group">
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                  className={`w-full px-6 py-4 rounded-2xl bg-white/5 border transition-all duration-300 outline-none ${theme === 'light'
                      ? 'bg-gray-100/50 border-gray-200 focus:border-blue-500/50 text-gray-900'
                      : 'bg-white/5 border-white/10 focus:border-blue-400/50 text-white'
                    } backdrop-blur-md placeholder:text-gray-400 dark:placeholder:text-gray-500`}
                />
              </motion.div>

              <motion.div variants={fieldVariants} className="relative group">
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  required
                  rows="5"
                  className={`w-full px-6 py-4 rounded-3xl bg-white/5 border transition-all duration-300 outline-none resize-none ${theme === 'light'
                      ? 'bg-gray-100/50 border-gray-200 focus:border-blue-500/50 text-gray-900'
                      : 'bg-white/5 border-white/10 focus:border-blue-400/50 text-white'
                    } backdrop-blur-md placeholder:text-gray-400 dark:placeholder:text-gray-500`}
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                variants={fieldVariants}
                whileHover="hover"
                whileTap="tap"
                className={`group relative w-full py-4 rounded-2xl font-bold overflow-hidden flex items-center justify-center gap-3 transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {/* Glass Background */}
                <div className={`absolute inset-0 backdrop-blur-md border transition-colors duration-300 ${theme === 'light'
                    ? 'bg-white/20 border-gray-700/10 group-hover:bg-gray-700/10'
                    : 'bg-white/10 border-white/10 group-hover:bg-white/20'
                  } rounded-2xl`} />

                {/* Animated Gradient Glow */}
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
                  }`}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>

                <div className="relative z-10 w-6 h-6 overflow-hidden">
                  <motion.svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`w-6 h-6 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}
                    variants={{
                      initial: { x: 0, y: 0, opacity: 1 },
                      hover: {
                        x: [0, 20, -20, 0],
                        y: [0, -20, 20, 0],
                        transition: {
                          times: [0, 0.4, 0.41, 1],
                          duration: 0.6,
                          ease: "easeInOut"
                        }
                      }
                    }}
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </motion.svg>
                </div>
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="success-message"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ type: "spring", damping: 12 }}
              className="flex flex-col items-center gap-6 text-center"
            >
              <div className="w-24 h-24 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="space-y-2">
                <h2 className={`font-serif text-3xl font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                  Message Sent!
                </h2>
                <p className={`font-mono text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
              <button
                onClick={() => setIsSuccess(false)}
                className="mt-4 px-6 py-2 rounded-full border border-blue-500/30 text-blue-500 font-mono text-sm hover:bg-blue-500/10 transition-colors"
              >
                Send another message
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Contact;

