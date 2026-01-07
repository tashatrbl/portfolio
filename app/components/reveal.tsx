import { motion } from "framer-motion";

export const Reveal = ({ children, width = "100%" }) => {
  return (
    <motion.div
      style={{ width }}
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      {children}
    </motion.div>
  );
};
