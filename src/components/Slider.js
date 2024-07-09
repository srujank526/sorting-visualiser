import React from "react";
import "./Slider.css";

const Slider = ({ handleSlider,initialValue }) => {
    const sliderChange = (e) => {
        handleSlider(e.target.value);
    }

    return (
        <div className="slideContainer">
            <h3 className="label">Change array size:</h3>
            <input
                className="slider"
                type="range"
                min="50"
                max="200"
                value={initialValue}
                name="slider"
                onChange={sliderChange}
            />
        </div>
    );
}

export default Slider;