import React from "react";
import "./Header.css";

const Header = ({ handleButtonClick }) => {

      return (
            <div className="nav">
                  <h2 className="heading">Sorting Visualiser</h2>

                  <button className="buttons" onClick={() => handleButtonClick("randomise")}>
                        Randomise
                  </button>
                  <button className="buttons" onClick={() => handleButtonClick("bubbleSort")}>
                        Bubble Sort
                  </button>
                  <button className="buttons" onClick={() => handleButtonClick("insertionSort")}>
                        Insertion Sort
                  </button>
                  <button className="buttons" onClick={() => handleButtonClick("heapSort")}>
                        Heap Sort
                  </button>
                  <button className="buttons" onClick={() => handleButtonClick("mergeSort")}>
                        Merge Sort
                  </button>
                  <button className="buttons" onClick={() => handleButtonClick("quickSort")}>
                        Quick Sort
                  </button>
            </div>
      );

}
export default Header;