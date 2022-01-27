import { motion, MotionProps, Variants } from "framer-motion";

export const PageMotion: React.FC<MotionProps> = ({ children, ...rest }) => {
  const variants: Variants = {
    initial: {
      opacity: 0,
      y: 20,
      x: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
    },
    exit: {
      opacity: 0,
      y: 20,
      x: 0,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ ease: "linear", duration: 0.2 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
