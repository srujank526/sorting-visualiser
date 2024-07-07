import React, { useState, useEffect } from "react";
import Bar from "./Bar";
import "./BarContainer.css";
import { bubbleSort } from "../Algorithms/bubbleSort"
import { insertionSort } from "../Algorithms/insertionSort";
import { heapSort } from "../Algorithms/heapSort";
import { swapFunction } from "../utils/swapFunction";

const BarContainer = ({ array, sortType }) => {
    const NUMBER_OF_BARS = 100;
    const TIME_PER_MOVE = 3;
    const PRIMARY_COLOR = "turquoise";
    const SECONDARY_COLOR = "lightBlue";
    const HIGHLIGHT_COLOR = "deepPink";
    const FINISHED_COLOR = "lightGreen";
    const [arr, setArr] = useState(array);
    useEffect(() => {
        setArr(array)
        const bars = document.getElementsByClassName("bar");
        for (let i = 0; i < bars.length; i++) {
            bars[i].style.backgroundColor = PRIMARY_COLOR;
        }
    }, [array]);
    useEffect(() => {
        console.log(sortType)
        if (sortType === "bubbleSort") {
            initiateBubbleSort();
        }
        else if (sortType === "insertionSort") {
            initiateInsertionSort();
        }
        else if (sortType === "heapSort") {
            initiateHeapSort();
        }
    }, [sortType]);


    const initiateBubbleSort = () => {
        const animations = bubbleSort([...arr]);
        const bars = document.getElementsByClassName("bar");
        const bubbleMultiplier = 0.5;
        for (let i = 0; i < animations.length; i++) {
            if (i % 3 === 0) {
                const [firstbar, secondbar] = animations[i];
                setTimeout(() => {
                    bars[
                        firstbar
                    ].style.backgroundColor = HIGHLIGHT_COLOR;
                    bars[
                        secondbar
                    ].style.backgroundColor = HIGHLIGHT_COLOR;
                }, i * bubbleMultiplier * TIME_PER_MOVE);
            } else if (i % 3 === 1) {
                const [firstbar, secondbar, bool] = animations[i];
                let copyArray = arr;
                if (bool) {
                    setTimeout(() => {
                        copyArray = swapFunction(
                            copyArray,
                            firstbar,
                            secondbar
                        );
                        setArr([...copyArray]);
                    }, i * bubbleMultiplier * TIME_PER_MOVE);
                }
            } else {
                const [firstbar, secondbar] = animations[i];
                setTimeout(() => {
                    bars[
                        firstbar
                    ].style.backgroundColor = PRIMARY_COLOR;
                    if (
                        animations[i + 1] &&
                        animations[i + 1][0] === 0
                    ) {
                        bars[
                            secondbar
                        ].style.backgroundColor = SECONDARY_COLOR;
                    } else {
                        bars[
                            secondbar
                        ].style.backgroundColor = PRIMARY_COLOR;
                    }
                }, i * bubbleMultiplier * TIME_PER_MOVE);
            }
        }
        setTimeout(() => {
            for (let i = 0; i < bars.length; i++) {
                bars[i].style.backgroundColor = FINISHED_COLOR;
            }
        }, (animations.length + 100) * bubbleMultiplier * TIME_PER_MOVE);
    };
    const initiateInsertionSort = () => {
        const animations = insertionSort(array);
        const bars = document.getElementsByClassName("bar");

        for (let i = 0; i < animations.length - 1; i++) {
              let [firstbar, secondbar] = animations[i];
              if (i % 2 === 0) {
                    setTimeout(() => {
                          let copyArray = array;

                          bars[
                                firstbar
                          ].style.backgroundColor = HIGHLIGHT_COLOR;
                          bars[
                                secondbar
                          ].style.backgroundColor = HIGHLIGHT_COLOR;
                          copyArray = swapFunction(
                                copyArray,
                                firstbar,
                                secondbar
                          );
                          setArr([...copyArray]);
                    }, i * 2 * TIME_PER_MOVE);
              } else {
                    setTimeout(() => {
                          bars[
                                firstbar
                          ].style.backgroundColor = SECONDARY_COLOR;
                          bars[
                                secondbar
                          ].style.backgroundColor = SECONDARY_COLOR;
                    }, i * 2 * TIME_PER_MOVE);
              }
        }
        setTimeout(() => {
              for (let i = 0; i < bars.length; i++) {
                    bars[i].style.backgroundColor = FINISHED_COLOR;
              }
        }, (animations.length + 100) * 2 * TIME_PER_MOVE);
  };
  const initiateHeapSort = () => {
    let unsortedArray = [...array];
    const animations = heapSort(unsortedArray);
    const bars = document.getElementsByClassName("bar");

    for (let i = 0; i < animations.length; i++) {
          if (i % 3 === 0) {
                const [firstbar, secondbar] = animations[i];
                setTimeout(() => {
                      bars[
                            firstbar
                      ].style.backgroundColor = HIGHLIGHT_COLOR;
                      bars[
                            secondbar
                      ].style.backgroundColor = HIGHLIGHT_COLOR;
                }, i * TIME_PER_MOVE);
          } else if (i % 3 === 1) {
                const [firstbar, secondbar, bool] = animations[i];
                let copyArray = array;
                if (bool) {
                      setTimeout(() => {
                            copyArray = swapFunction(
                                  copyArray,
                                  firstbar,
                                  secondbar
                            );
                            setArr([...copyArray]);
                      }, i * TIME_PER_MOVE);
                }
          } else {
                const [firstbar, secondbar] = animations[i];
                setTimeout(() => {
                      bars[
                            firstbar
                      ].style.backgroundColor = PRIMARY_COLOR;

                      bars[
                            secondbar
                      ].style.backgroundColor = PRIMARY_COLOR;

                      if (animations[i][2]) {
                            bars[
                                  secondbar
                            ].style.backgroundColor = SECONDARY_COLOR;
                      }
                }, i * TIME_PER_MOVE);
          }
    }
    setTimeout(() => {
          for (let i = 0; i < bars.length; i++) {
                bars[i].style.backgroundColor = FINISHED_COLOR;
          }
    }, (animations.length + 100) * TIME_PER_MOVE);
};



    return <div className="barContainer">
        {arr.map((height, idx) => (
            <Bar
                height={height}
                key={idx}
                numberOfBars={NUMBER_OF_BARS}
            />
        ))}
    </div>
}

export default BarContainer;