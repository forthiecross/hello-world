"use strict";

//write a function to convert n to binary

function binary(n: number): number {
  let bin: string[] = [];
  let binString: string = "";
  if (n === 0) {
    return 0;
  }
  while (n >= 1) {
    let x = n % 2;
    bin.unshift(Math.floor(x).toString());
    n = n / 2;
  }
  binString = bin.join("");
  console.log(binString);

  return parseInt(binString);
}

console.log(binary(11));
console.log("____________________");

//swap the last and the first element in an array
//let testArray:string[] = ['tail', 'body', 'head']

function swapper(arr: string[]): string[] {
  return arr.reverse();
}

//if has an iinteger square root return this, if not square the number
let testArray: number[] = [4, 3, 9, 7, 2, 1];

function toSquareOrNotToSquare(arr: number[]): number[] {
  for (let i: number = 0; i < arr.length; i++) {
    let x = Math.sqrt(arr[i]);
    if (Number.isInteger(x) === true) {
      arr[i] = x;
    } else {
      arr[i] = arr[i] * arr[i];
    }
  }
  return arr;
}
console.log(toSquareOrNotToSquare(testArray));
console.log("__________________________________");

//reverse words in a sentence
let testString: string =
  "The greatest victory is that which requires no battle";
function reverseWords(str: string): string {
  return str.split(" ").reverse().join(" ");
}
console.log(reverseWords(testString));
console.log("______________________________________");
// if bonus true, salary*10, if not nur salary...
function bonusTime(salary: number, bonus: boolean): string {
  if (bonus === true) {
    return `£${salary * 10}`;
  } else {
    return `£${salary}`;
  }
}

console.log(bonusTime(1000, false));
console.log("-----------------------");

//given a number return how many poitive odd numbers below n
function oddCount(n: number): number {
  return Math.floor(n / 2);
}

console.log(oddCount(7));
console.log("-----------------------");
//takes 2 integers, return all elements between them included 2 integers
function between(a: number, b: number): number[] {
  let newArray: number[] = [];
  for (let i: number = a; i <= b; i++) {
    newArray.push(i);
  }
  return newArray;
}
console.log(between(2, 6));
console.log("------------------------");
//divisible by
function divisibleBy(numbers: number[], divisor: number): number[] {
  let newArray: number[] = [];
  for (let i: number = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
      newArray.push(numbers[i]);
    }
  }
  return newArray;
}
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
console.log("--------------------------");
// return nTH even number
function nthEven(n: number): number {
  return (n - 1) * 2;
}
console.log(nthEven(100));
console.log("-------------------");
function powersOfTwo(n: number): number[] {
  let newArray: number[] = [];
  for (let i: number = 0; i <= n; i++) {
    if (i === 0) {
      newArray.push(1);
    } else {
      newArray.push(2 ** i);
    }
  }
  return newArray;
}
console.log(powersOfTwo(4));
console.log("--------------------------");
//soccer points counter by matchresults

let testResults: string[] = [
  "1:0",
  "2:0",
  "3:0",
  "4:0",
  "2:1",
  "3:1",
  "4:1",
  "3:2",
  "4:2",
  "4:3",
];
function points(games: string[]): number {
  let point: number = 0;
  for (let i: number = 0; i < games.length; i++) {
    let matches: string = games[i];
    let x = parseInt(matches[0]);
    let y = parseInt(matches[2]);

    if (x > y) {
      point += 3;
    } else if (x === y) {
      point += 1;
    }
  }
  return point;
}
console.log(points(testResults));
console.log("-------------------------------");
//return new array if elements are multiples there own index
let testArray2: number[] = [22, -6, 32, 82, 9, 25];
function multiplOfIndex(array: number[]): number[] {
  let newArray: number[] = [];
  for (let i: number = 0; i < array.length; i++) {
    if (array[i] % i === 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
console.log(multiplOfIndex(testArray2));
console.log("-----------------------------------");

//2D Array to string
let input: number[][] = [
  [0, 1, 2, 3, 4],
  [10, 11, 12, 13, 14],
  [20, 21, 22, 23, 24],
  [30, 31, 32, 33, 34],
];
function toCsvText(array: number[][]): string {
    let newString: string = "";
    for (let i: number = 0; i < array.length; i++) {
      let row = array[i];
      if (i < array.length - 1) {
        newString += row.toString() + "\n";
      } else newString += row.toString();
    }
  
    return newString;
}

console.log(toCsvText(input));
console.log('--------------------------');
//petal tearing game
function howMuchILoveYou(petals:number):string{
    let petalArray:string[] = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    let p:number = petalArray.length;
    let str:string = '';
    if(petals<=p){
        str = petalArray[petals-1];
    }else {
        str = petalArray[(petals-1)%p]
    }
    return str;
}

console.log(howMuchILoveYou(12));
