"use strict";

function isSortedAndHow(array: number[]): string {
  let newArr = [...new Set(array)];
  let result: number = 0;
  let sayIt: string = "";
  if (newArr.length <= 1) {
    sayIt += "no";
  } else {
    for (let i: number = 0; i < newArr.length - 1; i++) {
      if (newArr[i] > newArr[i + 1]) {
        result -= 1;
      } else if (newArr[i] < newArr[i + 1]) {
        result += 1;
      } else {
        result += 0;
      }
    }
    if (result === newArr.length - 1) {
      sayIt += "yes, ascending";
    } else if (result === (newArr.length - 1) * -1) {
      sayIt += "yes, descending";
    } else {
      sayIt += "no";
    }
  }
  return sayIt;
}
console.log(isSortedAndHow([-1, 2, 3]));
console.log(isSortedAndHow([1, 3, 2]));
console.log(isSortedAndHow([5, 4, -3]));
console.log(isSortedAndHow([5, 5, 4, -3]));
console.log(isSortedAndHow([-1, 2, 2, 3]));
