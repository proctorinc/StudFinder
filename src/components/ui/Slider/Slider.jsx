import ReactSlider from "react-slider"

import { StyledSliderThumb, StyledSliderTrack } from "@/styles"

export const Slider = ({ value, min, max, onChange }) => {
  return (
    <>
      <div style={{ width: "49%", maxWidth: "303px", display: "flex", justifyContent: "space-between", marginBottom: "-30px" }}>
        <div style={{ borderRadius: "50px", height: "20px", width: "3px", backgroundColor: "gray" }}/>
        <div style={{ borderRadius: "50px", height: "20px", width: "3px", backgroundColor: "gray" }}/>
        <div style={{ borderRadius: "50px", height: "20px", width: "3px", backgroundColor: "gray" }}/>
        <div style={{ borderRadius: "50px", height: "20px", width: "3px", backgroundColor: "gray" }}/>
        <div style={{ borderRadius: "50px", height: "20px", width: "3px", backgroundColor: "gray" }}/>
      </div>
      <ReactSlider
        className="horizontal-slider"
        value={value}
        min={min}
        max={max}
        step={1}
        marks
        renderTrack={(props) => <StyledSliderTrack {...props} />}
        renderThumb={(props) => <StyledSliderThumb {...props} src="stud-finder.png" alt="stud-finder" />} //<p {...props}>{state.value}</p>}//
        onChange={onChange}
      />
    </>
  )
}
