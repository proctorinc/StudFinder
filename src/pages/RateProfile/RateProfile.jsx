import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion"

import { Slider } from "@/components/ui/Slider";
import useProfiles from "@/hooks/useProfiles";
import { INITIAL_RATING } from "@/constants";
import { WallBackground } from "@/components/ui/WallBackground";
import { Button } from "@/components/ui/Button";

import { Profile } from "./Profile";
import styles from "./RateProfile.module.css";

const RateProfile = () => {
  const { currentProfile, getNextProfile, isLoading } = useProfiles();
  const [rating, setRating] = useState(INITIAL_RATING);
  const [disabled, setDisabled] = useState(false);
  const [ready, setReady] = useState(false);

  const handleRating = () => {
    setDisabled(true);
    getNextProfile();
  };

  return (
    <div className={styles.container}>
        {!ready || isLoading ? (
          <>
          <WallBackground animateOnChange={ready} initialAnimation={false} />
          <AnimatePresence mode="popLayout">
            <motion.div
              key={ready}
              style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "75vh", textAlign: "center", maxWidth: "500px", padding: "10px" }}
              exit={{ x: "-100vw", transition: { duration: 1 } }}
            >
              <h2>Welcome to StudFinder!</h2>
              <p>The dating app for construction and plumbing professionals. "Put the pipe in love" and find someone who "nails" your perfect match.</p>
              <Button title="Find your Stud" onClick={() => setReady(true)} />
              <p>\/ Use the stud finder to rate a profile from 1-5 \/</p>
            </motion.div>
        </AnimatePresence>
        </>
        ) : (
          <>
            <WallBackground animateOnChange={currentProfile.name} />
            <Profile profile={currentProfile} setDisabled={setDisabled} />
          </>
        )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          width: "100%",
          top: "68vh",
          gap: "0px",
        }}
      >
        <h2 style={{ marginBottom: "0" }}>{rating}</h2>
        <Slider
          value={rating}
          min={1}
          max={5}
          onChange={(value) => setRating(value)}
        />
        {ready && !isLoading && <Button title="Rate" onClick={handleRating} disabled={disabled} />}
      </div>
    </div>
  );
};

export default RateProfile;
