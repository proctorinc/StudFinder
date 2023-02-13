import { useState } from "react";

import { INITIAL_RATING } from "@/constants";
import { Slider } from "@/components/ui/Slider";
import useProfiles from "@/hooks/useProfiles";
import { Button } from "@/components/ui/Button";
import { WallBackground } from "@/components/ui/WallBackground";

import { Profile } from "./Profile";
import styles from "./RateProfile.module.css";
import { Welcome } from "./Welcome";

const RateProfile = () => {
  const { currentProfile, getNextProfile, isLoading } = useProfiles();
  const [rating, setRating] = useState(INITIAL_RATING);
  const [disabled, setDisabled] = useState(false);
  const [ready, setReady] = useState(false);
  const showWelcome = !ready || isLoading;

  const handleRating = () => {
    setDisabled(true);
    getNextProfile();
  };

  return (
    <>
      {showWelcome ? (
        <WallBackground animateOnChange={ready} initialAnimation={false} />
      ) : (
        <WallBackground animateOnChange={currentProfile.name} />
      )}
      <div className={styles.container}>
        <div className={styles.profileContainer}>
          {showWelcome ? (
            <Welcome animateOnChange={ready} />
          ) : (
            <Profile profile={currentProfile} setDisabled={setDisabled} />
          )}
        </div>
        <div className={styles.ratingContainer}>
          <Slider
            value={rating}
            min={1}
            max={5}
            onChange={(value) => setRating(value)}
          />
          {showWelcome ? (
            <Button
              title="Ready? Find your Stud"
              onClick={() => setReady(true)}
            />
          ) : (
            <Button
              title="Rate"
              onClick={handleRating}
              disabled={disabled || !ready || isLoading}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default RateProfile;
