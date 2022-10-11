'use strict'

function drawTriangle(lineCount:number){
    for(let i:string = '*'; i.length<=lineCount;i +='*')
    console.log(i);
}


drawTriangle(4);

function drawAnotherTriange(lineCount:number){
    for(let i:number = 1; i<=lineCount; i++){
        let str:string=''
        for(let j:number = 1; j<=lineCount-i; j++){
            str += ' '
        }
        for(let k:number = 0; k!== (2*i-1); k++){
            str += '*'
        }
        console.log(str);
        
    }
}

drawAnotherTriange(4);
