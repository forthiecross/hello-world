'use strict'

function writeThis(str:string){
    for(let i:number=0; i<10;i++){
        console.log(str);
    }
}

//writeThis('Hali');

function allTheEvens(num:number){
    for(let i:number=0; i<=num;i++){
        if(i%2===0){
            console.log(i);
        }
    }
}

//allTheEvens(30);

function multiplicationTable(num:number){
    
    for(let i:number =1; i<=10; i++){
        console.log(`${i} * ${num} = ${i*num}`);
    }
}

//multiplicationTable(10);

function sumAndAverage(num:number){
    let sum:number = 0;
    for(let i:number =1; i<=num;i++){
        sum = sum+i
    }
    console.log(sum);
    console.log(sum/num);
    
}

//sumAndAverage(5);

function fizzBuzz(num:number){
    for(let i:number = 1; i<=num; i++){
        if(i%3===0 && i%5===0){
            console.log('FizzBuzz');
        } else if(i%5===0){
            console.log('Buzz');
        } else if(i%3===0){
            console.log('Fizz');
        } else{
            console.log(i);
        }
    }
}

fizzBuzz(15)