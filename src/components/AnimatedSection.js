// components/AnimatedSection.js

import { motion } from 'framer-motion';

const AnimatedSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
      viewport={{ once: true }} // Animation happens only once
    >
    </motion.section>
  );
};

export default AnimatedSection;
