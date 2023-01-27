import { useState } from "react"
import ReactSlider from "react-slider"
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
      <h2>{rating}</h2>
      <div style={{ width: "49%", maxWidth: "303px", display: "flex", justifyContent: "space-between", marginBottom: "-30px" }}>
        <div style={{ borderRadius: "50px", height: "20px", width: "3px", backgroundColor: "lightgray" }}/>
        <div style={{ borderRadius: "50px", height: "20px", width: "3px", backgroundColor: "lightgray" }}/>
        <div style={{ borderRadius: "50px", height: "20px", width: "3px", backgroundColor: "lightgray" }}/>
        <div style={{ borderRadius: "50px", height: "20px", width: "3px", backgroundColor: "lightgray" }}/>
        <div style={{ borderRadius: "50px", height: "20px", width: "3px", backgroundColor: "lightgray" }}/>
      </div>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="slider-thumb"
        trackClassName="slider-track"
        markClassName="slider-marks"
        value={rating}
        min={1}
        max={5}
        step={1}
        renderThumb={(props, state) => <img {...props} src="stud-finder.png" alt="stud-finder" />} //<p {...props}>{state.value}</p>}//
        onChange={(value, index) => setRating(value)}
      />
      <button style={{ padding: "0.25rem 0.5rem" }} onClick={handleRating} disabled={disabled}>Rate!</button>
    </Container>
  )
}

export default RateProfiles