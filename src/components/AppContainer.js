import React, { useState } from "react";
import Header from "./Header";
import BarContainer from "./BarContainer"
import Slider from "./Slider";
import { generateRandomArray } from "../utils/generateArray";

const AppContainer = () => {
    const [sortType, setSortType] = useState("")
    const MIN_BAR_HEIGHT = 15;
    const MAX_BAR_HEIGHT = 500;
    const [NUMBER_OF_BARS,setNUMBER_OFBARS] = useState(100);
    const [array, setArray] = useState(generateRandomArray(MIN_BAR_HEIGHT, MAX_BAR_HEIGHT, NUMBER_OF_BARS));

    const handleButtonClick = (e) => {
        if (e == "randomise") {
            setArray(generateRandomArray(MIN_BAR_HEIGHT, MAX_BAR_HEIGHT, NUMBER_OF_BARS));
        }
        setSortType(e)
    }
    const handleSlider = (value)=>{
        setNUMBER_OFBARS(value);
        setArray(generateRandomArray(MIN_BAR_HEIGHT, MAX_BAR_HEIGHT, NUMBER_OF_BARS));
    }
    
    return (<>
        <Header handleButtonClick={handleButtonClick} />
        <BarContainer array={array} sortType={sortType} noOfBars = {NUMBER_OF_BARS}/>
        <Slider handleSlider={handleSlider} initialValue = {NUMBER_OF_BARS}/>
    </>)
}
export default AppContainer;