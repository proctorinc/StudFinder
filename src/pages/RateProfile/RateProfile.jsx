import { useState } from "react"

const RateProfile = () => {
  const [rating, setRating] = useState(3)

  const handleRatingChange = (event) => {
      setRating(event.target.value)
  }

  return (
    <>
      <img src="profile-placeholder.png" alt="profile-image" />
      <div>
        <h3>Name: John Smith</h3>
        <h3>Age: 52</h3>
        <h3>Occupation: Plumber</h3>
        <h3>5 miles away from you</h3>
      </div>
      <input type="range" value={rating} min={1} max={5} step={1} onChange={handleRatingChange} />
      <button>Rate!</button>
    </>
  )
}

export default RateProfile