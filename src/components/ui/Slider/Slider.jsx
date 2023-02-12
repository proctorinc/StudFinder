import "./Slider.css";

export const Slider = ({ value, min, max, onChange }) => {
  return (
    <>
      <div className="track">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
      </div>
      <input
        type="range"
        className="slider"
        min={min}
        max={max}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </>
  );
};
