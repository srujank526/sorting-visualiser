import React, { useState } from "react";
import Header from "./Header";
import BarContainer from "./BarContainer"
import Slider from "./Slider";
import { generateRandomArray } from "../utils/generateArray";

const AppContainer = () => {
    const [sortType, setSortType] = useState("")
    const MIN_BAR_HEIGHT = 15;
    const MAX_BAR_HEIGHT = 500;
    const [NUMBER_OF_BARS, setNUMBER_OFBARS] = useState(100);
    const [array, setArray] = useState(generateRandomArray(MIN_BAR_HEIGHT, MAX_BAR_HEIGHT, NUMBER_OF_BARS));
    const [isSorting, setIsSorting] = useState(false);

    const handleButtonClick = (e) => {
        if (isSorting) return;
        if (e === "randomise") {
            setArray(generateRandomArray(MIN_BAR_HEIGHT, MAX_BAR_HEIGHT, NUMBER_OF_BARS));
        }
        setSortType(e)
    }
    const handleSlider = (value) => {
        if (isSorting) return;
        setNUMBER_OFBARS(value);
        setArray(generateRandomArray(MIN_BAR_HEIGHT, MAX_BAR_HEIGHT, NUMBER_OF_BARS));
    }
    const handleIsSorting = (isSorting) => {
        setIsSorting(isSorting);
    }

    return (<>
        <Header handleButtonClick={handleButtonClick} />
        <BarContainer array={array} sortType={sortType} noOfBars={NUMBER_OF_BARS} handleIsSorting={handleIsSorting} />
        <Slider handleSlider={handleSlider} initialValue={NUMBER_OF_BARS} />
    </>)
}
export default AppContainer;