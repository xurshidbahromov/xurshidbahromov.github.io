import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.section
      id="footer"
      className="py-10 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.p
        className="text-gray-400 dark:text-gray-600 font-mono text-sm"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        &copy; 2026 Xurshidbek Bahromov. <br />
        All rights reserved.
      </motion.p>
    </motion.section>
  );
}

export default Footer;

