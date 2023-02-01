import { AnimatePresence, motion } from "framer-motion";

import styles from "./Profile.module.css";

export const Profile = ({ profile, setDisabled }) => {
  return (
    <div className={styles.profileContainer}>
      <AnimatePresence mode="popLayout">
        <motion.div
          className={styles.profileColumn}
          key={profile.name}
          initial={{ x: "100vw"}}
          animate={{ 
            x: "0%",
            y: "50%",
            translateY: "-50%",
            transition: { duration: 1 } }}
          exit={{ x: "-100vw", transition: { duration: 1 } }}
          onAnimationComplete={() => setDisabled(false)}
        >
          <div className={styles.imageHanger} />
          <div className={styles.pictureFrame}>
            <img className={styles.profileImage} src={profile.image_url} alt="profile-image" />
          </div>
          <div className={styles.profileDetails}>
            {/* <p>Name: {profile.name}</p>
            <p>Age: {profile.age}</p>
            <p>Occupation: {profile.occupation}</p>
            <p>{profile.distance} miles away from you</p> */}
            <p>{profile.name}, {profile.age}</p>
            <p>{profile.occupation}</p>
            <p>{profile.distance} miles away</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}