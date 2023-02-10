export const Slider = ({ value, min, max, onChange }) => {
  return (
    <input
      type="range"
      className="slider"
      min={min}
      max={max}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  )
}
