'use strict';

function stringReplacer(str:string, wordFrom:string, wordTo:string):string{
    let newString = str.replace(wordFrom,wordTo);
    return newString
};

//console.log(stringReplacer('In a dishwasher far far away','dishwasher', 'galaxy'));

let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

function reverse(str:string):string{
    let newString = str.split('').reverse().join('');
    return newString;
}

//console.log(reverse(toBeReversed));
let url: string = 'https//www.reddit.com/r/nevertellmethebots';

function stringReplacer2(str:string, aFrom:string,bFrom:string,aTo:string,bTo:string):string{
    let temp:string = str.replace(aFrom,aTo);
    let resultString:string = temp.replace(bFrom,bTo);
    return resultString;
}
//console.log(stringReplacer2(url,'https', 'bots', 'https:', 'odds'));

let out: string = '';
let notSoCrypticMessage: number[] = [1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11];
let hashmap: Record<number, string> = {
    7: 'run around and desert you',
    50: 'tell a lie and hurt you ',
    49: 'make you cry, ',
    2: 'let you down',
    12: 'give you up, ',
    1: 'Never gonna ',
    11: '\n',
    3: 'say goodbye '
  };

  for (let values of notSoCrypticMessage) {
    out += hashmap[values]
  }

  //console.log(out);
  //console.log(hashmap['50']);
  let result = '';
  for(let i:number = 0; i<notSoCrypticMessage.length; i++){
    
    result += hashmap[notSoCrypticMessage[i]]
    
  }
  
  console.log(result);


