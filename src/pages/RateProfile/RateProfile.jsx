import { useState } from "react"

import { mockProfiles } from "@/__mocks__/profiles"
import Profile from "./Profile"


const RateProfile = () => {
  const [rating, setRating] = useState(3)
  const profile = mockProfiles[0]

  const handleRatingChange = (event) => {
      setRating(event.target.value)
  }

  return (
    <>
      <Profile user={profile} />
      <input type="range" value={rating} min={1} max={5} step={1} onChange={handleRatingChange} />
      <button>Rate!</button>
    </>
  )
}

export default RateProfile