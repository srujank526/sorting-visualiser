import React from "react";
import Bar from "./Bar";
import "./BarContainer.css";
import { generateRandomArray } from "../utils/generateArray";

const BarContainer = ()=>{
    const MIN_BAR_HEIGHT = 15;
    const MAX_BAR_HEIGHT = 500;
    const NUMBER_OF_BARS = 100;
    const array = generateRandomArray(MIN_BAR_HEIGHT, MAX_BAR_HEIGHT, NUMBER_OF_BARS);
    return <div className="barContainer">
            {array.map((height, idx) => (
                <Bar
                        height={height}
                        key={idx}
                        numberOfBars={NUMBER_OF_BARS}
                />
            ))} 
        </div>
}

export default BarContainer;