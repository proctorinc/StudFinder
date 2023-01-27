import { useState } from "react"

import useProfiles from "@/hooks/useProfiles"
import { INITIAL_RATING } from "@/constants"
import { Container, WallBackground } from "@/styles"

import Profile from "./Profile"
import { AnimatePresence } from "framer-motion"

const RateProfiles = () => {
  const [rating, setRating] = useState(INITIAL_RATING)
  const { currentProfile, getNextProfile } = useProfiles()
  const [disabled, setDisabled] = useState(false)

  const handleRatingChange = (event) => {
      setRating(event.target.value)
  }

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
      <input
        type="range"
        min={1}
        max={5}
        step={1}
        value={rating}
        onChange={handleRatingChange}
      />
      <button onClick={handleRating} disabled={disabled}>Rate!</button>
    </Container>
  )
}

export default RateProfiles