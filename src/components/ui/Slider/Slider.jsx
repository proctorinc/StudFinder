import ReactSlider from "react-slider"
import styles from "./Slider.module.css"

export const Slider = ({ value, min, max, onChange }) => {

  const Track = () => {
    return (
      <div className={styles.track}>
        {[...Array(max)].map((_, i) => <div key={i} className={styles.marking} />
  )}
      </div>
    )
  }

  const Thumb = ({ className, otherProps }) => {
    console.log(className)
    return (
        <img className={[styles.thumb, className]} src="stud-finder.png" alt="stud-finder" {...otherProps} />
    )
  }

  return (
    <>
      <Track />
      <ReactSlider
        className="horizontal-slider"
        value={value}
        min={min}
        max={max}
        step={1}
        renderThumb={(props) => <Thumb {...props} />}
        onChange={onChange}
      />
    </>
  )
}
