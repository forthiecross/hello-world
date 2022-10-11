'use strict'

let testArray:number[] = [1,3,5,7];

function printNElement(arr:number[], num:number):number{
    return arr[num];
}

//console.log(printNElement(testArray,2));

let firstList:number[] = [1,2,3];
let secondList:number[] = [4,5];

function compareTwoArrays(arr1:number[], arr2:number[]){
    if(arr1.length > arr2.length){
        console.log('The first is longer');
    } else{
        console.log('The second is longer');
    }
}

//compareTwoArrays(secondList, firstList);

function sumSomeElements(arr:number[], a:number, b:number){
    let result:number = arr[a]+arr[b]
    console.log(result);
}

//sumSomeElements(testArray,1,2)

let names:string[] = ['Arthur', 'Boe', 'Chloe']

function swapper(arr:string[], a:number,b:number){
    let temp:string = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    console.log(arr);
}

//swapper(names, 0,2)

function printer(arr:any[]){
    arr.forEach(element => console.log(element));   
}

//printer(testArray);
let numbers:number[] = [1,2,3,4,5];
numbers[2]++
//console.log(numbers);

let animals:string[] = ["koal", "pand", "zebr", "anacond", "bo", "chinchill", "cobr", "gorill",
 "hyen", "hydr", "iguan", "impal", "pum", "tarantul", "pirahn"]



let fixed = animals.map(element => element += 'a');
//console.log(fixed);

let drinks:string[] = ['Gin', 'Whiskey', 'Wine', 'Beer'];

let doubleDrinks:string[] = drinks.map(element => element + element);
//console.log(doubleDrinks);

let sumAllElement:number[] = [3,4,5,6,7]

let totalSum:number = sumAllElement.reduce((a,b) => a+b)
//console.log(totalSum);

let lineCount:number = 4;
let arr = new Array(lineCount)
for(let i:number = 0; i<lineCount; i++){
    arr[i] = new Array('');
    for(let j:number = 0; j<lineCount;j++){
        if(i===j){
            arr[i] +=1
        }else {
            arr[i] += 0
        }
        
    }
    
    
}
//console.log(arr);

let numbersToReverse:number[] = [3,4,5,6,7]

let numbersWithReverse = numbersToReverse.reverse();
console.log(numbersWithReverse);

let tempArray:number[] = []
for(let i:number = 0; i<numbersToReverse.length; i++){
    tempArray.push(numbersToReverse[i]);
}
console.log(tempArray);
