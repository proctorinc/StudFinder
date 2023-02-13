import { CurvedDownArrow } from "@/components/icons/CurvedDownArrow";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./Welcome.module.css";

export const Welcome = ({ animateOnChange }) => {
  return (
    <>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={animateOnChange}
          className={styles.welcomeText}
          exit={{ x: "-100vw", transition: { duration: 1 } }}
        >
          <h1 className={styles.header}>Welcome to StudFinder!</h1>
          <p>
            The dating app for construction and plumbing professionals. Get
            ready to turn up the heat on your love life and find someone who
            nails your perfect match!
          </p>
        </motion.div>
      </AnimatePresence>
      <div className={styles.instructionContainer}>
        <p className={styles.instructionBubble}>
          Use the stud finder to choose a rating from 1-5 for each profile
        </p>
        <CurvedDownArrow width="50px" />
      </div>
    </>
  );
};
