// is sentence a pangram?

import { blob } from "stream/consumers";

/*
export const isPangram = (phrase: string) =>  {
let alphabet:string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
phrase = phrase.toLowerCase()
return alphabet.every(x =>(phrase.includes(x)))
};

console.log(isPangram('Let the beat goes on'));
console.log(isPangram('The quick brown fox jumps over the lazy dog'));
*/

// The feast of many beast
/*export function feast(beast:string, dish:string):boolean {
    let beastArray:string[] = beast.toLowerCase().split('');
    let dishArray:string[] = dish.toLowerCase().split('');
    if(beastArray[0] === dishArray[0] && beastArray[beastArray.length-1] === dishArray[dishArray.length-1]){
        return true;
    } else {
        return false;
    };
  };

  console.log(feast('cat', 'crut'));
  console.log(feast('bird', 'milk'));
  */

 //is Triangle
 /*
  function isTriangle(a: number, b: number, c: number): boolean {
    if(a+b > c && b+c >a && c+a>b) {
        return true
    }else {
        return false;
    };
  };

  console.log(isTriangle(5, 6, 7));
  console.log(isTriangle(1,2,8));
  */

  //binary Translator
  /*
  let testArray:number[] = [0,0,0,1]
  let testArray2:number[] = [1,0,0,1]
  
  function binaryArrayToNumber(arr: number[]){
    let finalArray:number[] = [];
    let finalNumber:number = 0;
    let reversedArray:number[] = arr.reverse();
    for(let i:number = 1; i<reversedArray.length; i++) {
        finalArray.push(reversedArray[i]*Math.pow(2,i));
    }
    let initial:number = 0;
    finalNumber = finalArray.reduce((prev,curr) => prev+curr, initial);
    let endNumber = finalNumber + reversedArray[0];
    return endNumber;
  };
  
  console.log(binaryArrayToNumber(testArray2));
  */

  //is Square?

  export default function isSquare(n: number): boolean {
    let dividers:number[] = [];
    let bol:boolean[] = []
    for(let i:number=1; i<n;i++){
        dividers.push(i);
    };
    for(let k:number=1; k<dividers.length; k++){
        bol.push(Number.isInteger(n/dividers[k]))
        };
        console.log(bol);
    if(bol.includes(true, 1) || n===0){
        return true;
    } else {
        return false;
    }  
    
};

console.log(isSquare(25));

