import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion"

import { INITIAL_RATING } from "@/constants";
import { Slider } from "@/components/ui/Slider";
import useProfiles from "@/hooks/useProfiles";
import { Button } from "@/components/ui/Button";
import { RightArrow } from "@/components/icons/RightArrow";
import { WallBackground } from "@/components/ui/WallBackground";
import { CurvedDownArrow } from "@/components/icons/CurvedDownArrow";

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
        {(!ready || isLoading) ? (
          <>
            <WallBackground animateOnChange={ready} initialAnimation={false} />
            <AnimatePresence mode="popLayout">
              <motion.div
                key={ready}
                style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "75vh", textAlign: "center", maxWidth: "400px", marginTop: "5rem", padding: "1rem" }}
                exit={{ x: "-100vw", transition: { duration: 1 } }}
              >
                <h1 style={{ fontSize: "3rem", lineHeight: "3rem", margin: 0 }}>Welcome to StudFinder!</h1>
                <p>The dating app for construction and plumbing professionals. Build a relationship with someone who nails your perfect match. Get ready to turn up the heat on your love life!</p>
                <Button className={styles.pulsing} title="Find your Stud" style={{ marginTop: "1rem" }} onClick={() => setReady(true)} />
              </motion.div>
            </AnimatePresence>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <p className={`${styles.instructionBubble} ${styles.largeBubble}`}>
                Use the stud finder to choose a rating from 1-5
              </p>
              <CurvedDownArrow width="50px" />
            </div>
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
        <Slider
          value={rating}
          min={1}
          max={5}
          onChange={(value) => setRating(value)}
        />
        <div style={{ position: "relative" }}>
          {(!ready || isLoading) && (
            <div style={{ display: "flex", flexDirection: "column", position: "absolute", alignItems: "center", right: 0, marginRight: "5rem", marginTop: "-8.5rem" }}>
              <p className={`${styles.instructionBubble} ${styles.smallBubble}`}>
                Then click the Rate button!
              </p>
              <RightArrow width="50px" />
            </div>
          )}
          <Button title="Rate" onClick={handleRating} disabled={disabled || !ready || isLoading} />
        </div>
      </div>
    </div>
  );
};

export default RateProfile;
