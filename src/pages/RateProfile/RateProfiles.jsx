import { useState } from "react"

import useProfiles from "@/hooks/useProfiles"

import Profile from "./Profile"


const RateProfiles = () => {
  const [rating, setRating] = useState(3)
  const { currentProfile, getNextProfile } = useProfiles()

  const handleRatingChange = (event) => {
      setRating(event.target.value)
  }

  return (
    <>
      <Profile user={currentProfile} />
      <input type="range" value={rating} min={1} max={5} step={1} onChange={handleRatingChange} />
      <button onClick={getNextProfile} >Rate!</button>
    </>
  )
}

export default RateProfiles