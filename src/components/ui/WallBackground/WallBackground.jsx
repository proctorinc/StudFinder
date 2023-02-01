import { AnimatePresence, motion } from "framer-motion"

import styles from "./WallBackground.module.css"

export const WallBackground = ({ animateOnChange }) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div className={styles.background}
        key={animateOnChange}
        initial={{ x: "100vw"}}
        animate={{ 
          x: "0%",
          y: "50%",
          translateY: "-50%",
          transition: { duration: 1 } }}
        exit={{ x: "-100vw", transition: { duration: 1 } }}
      />
    </AnimatePresence>
  )
}
