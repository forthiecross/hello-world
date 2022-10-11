'use strict'

let baseNumber:number = 123;

function dubleIt(n:number):number{
    return n*2;
}

//console.log(dubleIt(baseNumber));
let nameToGreet:string = 'Green Fox';

function greet(str:string){
    console.log(`Greetings ${nameToGreet}`);
}

//greet(nameToGreet);

let typo:string = 'Chinchill';

function appendA(str:string):string{
    return str + 'a'
}

//console.log(appendA(typo));

function sum(n:number):number{
    let total:number = 0;
    for(let i:number=0; i<=n;i++){
        total +=i;
    }
    return total;
}

//console.log(sum(10));

function factorial(n:number):number {
    if(n<=0){
        return 1
    } else{
        return (n*factorial(n-1))
    }
}

//console.log(factorial(5));

function findUniqueItems(n:number[]):number[]{
    let newArray = [...new Set(n)]
    return newArray;
}

//console.log(findUniqueItems([1, 11, 34, 11, 52, 61, 1, 34]));

function advancedBubble(arr:number[], x:boolean){
    if (x === true){
        return arr.sort((a,b) => a-b);
        
    }else {
        return arr.sort((a,b) => b-a);
        
    }
}

//console.log(advancedBubble([34, 12, 24, 9, 5], true));
//console.log(advancedBubble([34, 12, 24, 9, 5], false));

function findMatchingIndexes(n:number, nArr:number[]):number[]{
    let newArr:number[] = []
    nArr.forEach((value:number, index:number) => {
        if(value.toString().includes(n.toString())){
            newArr.push(index);
        }
    })
    return newArr;
}

console.log(findMatchingIndexes(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
console.log(findMatchingIndexes(9, [1, 11, 34, 52, 61]));
// should print: '[]'
