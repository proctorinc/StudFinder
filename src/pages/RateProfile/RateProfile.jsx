import { useState } from "react"

import { Slider } from "@/components/ui/Slider"
import useProfiles from "@/hooks/useProfiles"
import { INITIAL_RATING } from "@/constants"

import { Profile } from "./Profile"
import styles from "./RateProfile.module.css";
import { WallBackground } from "@/components/ui/WallBackground"
import { Button } from "@/components/ui/Button"

const RateProfile = () => {
  const { currentProfile, getNextProfile, isLoading } = useProfiles()
  const [rating, setRating] = useState(INITIAL_RATING)
  const [disabled, setDisabled] = useState(false)

  const handleRating = () => {
    setDisabled(true)
    getNextProfile()
    setRating(INITIAL_RATING)
  }

  if (isLoading) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <div className={styles.container}>
      <WallBackground animateOnChange={currentProfile.name} />
      <Profile profile={currentProfile} setDisabled={setDisabled}/>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "absolute", width: "100%", top: "75vh", gap: "1rem" }}>
        <h2>{rating}</h2>
        <Button title="Rate" onClick={handleRating} disabled={disabled}/>
        <Slider
          value={rating}
          min={1}
          max={5}
          onChange={(value) => setRating(value)}
        />
      </div>
    </div>
  )
}

export default RateProfile