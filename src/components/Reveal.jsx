import { motion } from 'framer-motion';

// Reusable scroll-into-view reveal. Fades + slides its children up once, when
// they first enter the viewport. `delay` staggers siblings.
export default function Reveal({ children, delay = 0, y = 24, className, as }) {
  const MotionTag = as ? motion[as] : motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
