'use strict';

let inputA:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]
let test2 = [];
let test3 = 0;
 function countPositivesSumNegatives(input: any) {
    //throw new Error('The method or operation is not implemented.');
    let positivArray:number[] = [];
    let negativArray:number[] = [];
    let emptyArray:number[] = [];
    if(input.length === 0 || input === 0){
      return emptyArray;
    }
    let finalArray:number[] = [];
    for(let i:number = 0; i<input.length; i++){
        if(input[i] >0){
            positivArray.push(input[i]);
        } else if( input[i] < 0){
            negativArray.push(input[i]);
        };
    };
    let countPos = () => {
        finalArray.push(positivArray.length);
        finalArray.push(negativArray.reduce(function(prev:number, curr:number){
            return prev + curr;},0));
    }; 
    countPos();
    return finalArray;
  };

console.log(countPositivesSumNegatives(inputA));
