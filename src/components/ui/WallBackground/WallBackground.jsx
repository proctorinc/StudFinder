import { AnimatePresence, motion } from "framer-motion";

import styles from "./WallBackground.module.css";

export const WallBackground = ({ animateOnChange, initialAnimation=true }) => {
  
  let initial = { x: "100vw" }
  let animate = {
    x: "0%",
    y: "50%",
    translateY: "-50%",
    transition: { ease: "easeInOut", duration: 1 },
  }

  if (!initialAnimation) {
    initial = {}
    animate = {}
  }
  
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        className={styles.background}
        key={animateOnChange}
        initial={initial}
        animate={animate}
        exit={{ x: "-100vw", transition: { duration: 1 } }}
      />
    </AnimatePresence>
  );
};
