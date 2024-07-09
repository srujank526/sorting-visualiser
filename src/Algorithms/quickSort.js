import { swapFunction } from "../utils/swapFunction";

let animations = [];

export const quickSort = (array) => {
      quickSortHelper(array, 0, array.length - 1);
      return animations;
};

// this function calls partition and then performs quicksort recursively on both the parts
const quickSortHelper = (array, start, end) => {
      if (start >= end) {
            return;
      }

      let index = partition(array, start, end);

      quickSortHelper(array, start, index - 1);
      quickSortHelper(array, index + 1, end);
};

// this function forms a partition in the array, all the while pushing arrays to the animations array
function partition(array, start, end) {
      const pivotValue = array[end];
      let pivotIndex = start;
      for (let i = start; i < end; i++) {
            animations.push([i, pivotIndex, end, false]);
            if (array[i] < pivotValue) {
                  animations.push([i, pivotIndex, end, true]);
                  array = swapFunction(array, pivotIndex, i);
                  animations.push([i, pivotIndex, end, false]);
                  pivotIndex++;
            } else {
                  animations.push([i, pivotIndex, end, false]);
                  animations.push([i, pivotIndex, end, false]);
            }
      }

      animations.push([end, pivotIndex, end, true]);
      animations.push([end, pivotIndex, end, true]);
      animations.push([end, pivotIndex, end, true]);

      array = swapFunction(array, pivotIndex, end);
      return pivotIndex;
}
