import { useState } from "react"

import useProfiles from "@/hooks/useProfiles"
import { INITIAL_RATING } from "@/constants"
import { Container } from "@/styles"

import Profile from "./Profile"

const RateProfiles = () => {
  const [rating, setRating] = useState(INITIAL_RATING)
  const { currentProfile, getNextProfile } = useProfiles()

  const handleRatingChange = (event) => {
      setRating(event.target.value)
  }

  const handleRating = () => {
    getNextProfile()
    setRating(INITIAL_RATING)
  }

  return (
    <Container>
      <Profile profile={currentProfile} />
      <input
        type="range"
        min={1}
        max={5}
        step={1}
        value={rating}
        onChange={handleRatingChange}
      />
      <button onClick={handleRating}>Rate!</button>
    </Container>
  )
}

export default RateProfiles