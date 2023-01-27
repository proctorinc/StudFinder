import { useState } from "react"
import { AnimatePresence } from "framer-motion"

import { Slider } from "@/components/ui/Slider"
import useProfiles from "@/hooks/useProfiles"
import { INITIAL_RATING } from "@/constants"
import { Container, WallBackground } from "@/styles"

import Profile from "./Profile"

const RateProfiles = () => {
  const [rating, setRating] = useState(INITIAL_RATING)
  const { currentProfile, getNextProfile } = useProfiles()
  const [disabled, setDisabled] = useState(false)

  const handleRating = () => {
    setDisabled(true)
    getNextProfile()
    setRating(INITIAL_RATING)
  }

  return (
    <Container>
      <AnimatePresence mode="popLayout">
        <WallBackground
          key={currentProfile.name}
          initial={{ x: "100vw"}}
          animate={{ 
            x: "0%",
            y: "50%",
            translateY: "-50%",
            transition: { duration: 1 } }}
          exit={{ x: "-100vw", transition: { duration: 1 } }}
        />
      </AnimatePresence>
      <Profile profile={currentProfile} setDisabled={setDisabled}/>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "absolute", width: "100%", top: "75vh", gap: "1rem" }}>
        <h2>{rating}</h2>
        <button style={{ padding: "0.25rem 0.5rem" }} onClick={handleRating} disabled={disabled}>Rate!</button>
        <Slider
          value={rating}
          min={1}
          max={5}
          onChange={(value) => setRating(value)}
        />
      </div>
    </Container>
  )
}

export default RateProfiles