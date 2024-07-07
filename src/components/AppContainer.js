import React, { useState } from "react";
import Header from "./Header";
import BarContainer from "./BarContainer"
import { generateRandomArray } from "../utils/generateArray";

const AppContainer = () => {
    const [sortType, setSortType] = useState("")
    const MIN_BAR_HEIGHT = 15;
    const MAX_BAR_HEIGHT = 500;
    const NUMBER_OF_BARS = 100;
    const [array, setArray] = useState(generateRandomArray(MIN_BAR_HEIGHT, MAX_BAR_HEIGHT, NUMBER_OF_BARS));

    const handleButtonClick = (e) => {
        if (e == "randomise") {
            setArray(generateRandomArray(MIN_BAR_HEIGHT, MAX_BAR_HEIGHT, NUMBER_OF_BARS));
        }
        setSortType(e)
    }
    return (<>
        <Header handleButtonClick={handleButtonClick} />
        <BarContainer array={array} sortType={sortType} />
    </>)
}
export default AppContainer;