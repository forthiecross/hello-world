"use strict";

//lista elso

let list: string[] = [];
console.log(list.length);
list.push("William");
console.log(list.length);
list.push("John");
list.push("Amanda");
console.log(list.length);
console.log(list[2]);
list.forEach((element) => console.log(element));
for (let i: number = 0; i < list.length; i++) {
  console.log(`${i + 1}. ${list[i]}`);
}
list.splice(1, 1);
console.log(list.reverse());
list.splice(0, list.length);
console.log(list.length);
console.log("__________________");

// objektum elso
let map: any = {};
function isEmpty(object: {}) {
  return Object.keys(object).length === 0;
}
console.log(isEmpty(map));
map["97"] = "a";
map["98"] = "b";
map["99"] = "c";
map["65"] = "A";
map["66"] = "B";
map["67"] = "C";

console.log(Object.keys(map));
console.log(Object.values(map));
map["68"] = "D";
//console.log(map);
console.log(Object.entries(map).length);
console.log(map["99"]);
console.log(delete map["97"]);
console.log(map["100"]);
map = {};
console.log(Object.entries(map).length);
console.log("------------------------");

//lista masodik

let listA: string[] = ["Apple", "Avocado", "Blueberries", "Durian", "Lychee"];
let listB: string[] = listA;
console.log(listA.includes("Durian"));
listB.splice(listA.indexOf("Durian"), 1);
listA.splice(3, 0, "Kiwifruit");
console.log(listA.length, listB.length);
console.log(listA.indexOf("Avocado"));
console.log(listB.indexOf("Durian"));
listB.splice(0, 0, "Passion Fruit", "Pomelo");
console.log(listA[2]);
console.log(listA);
console.log(listB);
console.log("---------------------");

let mapA: any = {
  "978-1-60309-452-8": "A Letter to Jo",
  "978-1-60309-459-7": "Lupus",
  "978-1-60309-444-3": "Red Panda and Moon Bear",
  "978-1-60309-461-0": "The Lab",
};
console.log(mapA);

for (let [key, value] of Object.entries(mapA)) {
  console.log(`${value} (ISBN: ${key})`);
}

delete mapA["978-1-60309-444-3"];
let key = Object.keys(mapA).find((key) => mapA[key] === "The Lab");
console.log(key);
delete mapA[`${key}`];
mapA["978-1-60309-450-4"] = "They Called Us Enemy";
mapA["978-1-60309-453-5"] = "Why Did We Trust Him?";

console.log(mapA["478-0-61159-424-8"]);
console.log(mapA["978-1-60309-453-5"]);
console.log("________________");

let expenses: number[] = [500, 1000, 1250, 175, 800, 120];
function expenseChecker(arr: number[]) {
  function howMuch(): number {
    let x = arr.reduce((a, b) => a + b);
    return x;
  }
  function greatest(): number {
    let x = arr.sort((a, b) => a - b);
    return x[x.length - 1];
  }
  function cheapest(): number {
    let x = arr.sort((a, b) => a - b);
    return x[0];
  }
  function average(): number {
    let x = howMuch() / arr.length;
    return x;
  }
  console.log(howMuch());
  console.log(greatest());
  console.log(cheapest());
  console.log(average());
}

expenseChecker(expenses);
console.log("------------");

let telefon: any = {
  "William A. Lathan": "405-709-1865",
  "John K. Miller": "402-247-8568",
  "Hortensia E. Foster": "606-481-6467",
  "Amanda D. Newland": "319-243-5613",
  "Brooke P. Askew": "307-687-2982",
};

console.log(telefon["John K. Miller"]);
let answer = Object.keys(telefon).find((key) => telefon[key] == "307-687-2982");
console.log(answer);
if (telefon["Chris E. Myers"] === undefined) {
  console.log("no");
}
console.log("---------------");

let shoppingList: string[] = [
  "eggs",
  "milk",
  "fish",
  "apples",
  "bread",
  "chicken",
];
function doWeHave(array: string[], name: string) {
  if (array.includes(name)) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

doWeHave(shoppingList, "milk");
doWeHave(shoppingList, "banana");
console.log("-------------");

let priceList: any = {
  Milk: 1.07,
  Rice: 1.59,
  Eggs: 3.14,
  Cheese: 12.6,
  "Chicken Breasts": 9.4,
  Apples: 2.31,
  Tomato: 2.58,
  Potato: 1.75,
  Onion: 1.1,
};

let bobsList: any = {
  Milk: 3,
  Rice: 2,
  Eggs: 2,
  Cheese: 1,
  "Chicken Breasts": 4,
  Apples: 1,
  Tomato: 2,
  Potato: 1,
};

let alicesList: any = {
  Rice: 1,
  Eggs: 5,
  "Chicken Breasts": 2,
  Apples: 1,
  Tomato: 10,
};

let bobPays: number[] = [];
for (let [key, value] of Object.entries(bobsList)) {
  //key = key boblist value = value boblist
  if (priceList[key] !== undefined) {
    bobPays.push(
      priceList[key] *
        bobsList[key] /*(value as number)* ez a castolas ,igy is lehet !!! */
    );
  }
}
let bobPaid: number = bobPays.reduce((a, b) => a + b);
console.log(bobPaid);

let alicePays: number[] = [];
for (let [key] of Object.entries(alicesList)) {
  if (priceList[key] !== undefined) {
    alicePays.push(priceList[key] * alicesList[key]);
  }
}
let alicePaid: number = alicePays.reduce((a, b) => a + b);
console.log(alicePaid);

function whoBuysMore(product: string) {
  let bNum: number = 0;
  let aNum: number = 0;
  if (bobsList[product] !== undefined) {
    bNum = bobsList[product];
  } else {
    bNum = 0;
  }
  if (alicesList[product] !== undefined) {
    aNum = alicesList[product];
  } else {
    aNum = 0;
  }
  if (bNum > aNum) {
    console.log("bob");
  } else if (aNum > bNum) {
    console.log("alice");
  } else {
    console.log("no one");
  }
}

whoBuysMore("Rice");
whoBuysMore("Potato");
whoBuysMore("Ham");
whoBuysMore("Apples");

if (Object.keys(bobsList).length > Object.keys(alicesList).length) {
  console.log("bob");
} else {
  console.log("alice");
}

let piecesBob: number[] = Object.values(bobsList);
let resultBob: number = piecesBob.reduce((a, b) => a + b);
let piecesAlice: number[] = Object.values(alicesList);
let resultAlice: number = piecesAlice.reduce((a, b) => a + b);

if (resultBob > resultAlice) {
  console.log("bob");
} else {
  console.log("alice");
}

console.log("------------------------------");

let products: any = {
  Eggs: 200,
  Milk: 200,
  Fish: 400,
  Apples: 150,
  Bread: 50,
  Chicken: 550,
};

function howMuchIsTheSomething(name: string) {
  console.log(products[name]);
}
howMuchIsTheSomething("Fish");
function mostExpensiveProduct() {
  let valuesOfList: number[] = Object.values(products);
  valuesOfList.sort((a, b) => b - a);
  console.log(valuesOfList[0]);
  console.log(
    Object.keys(products).find((key) => products[key] === valuesOfList[0])
  );
}
mostExpensiveProduct();
function averagePrice() {
  let x: number[] = Object.values(products);
  let y: number = x.reduce((a, b) => a + b) / x.length;
  console.log(y);
}
averagePrice();

function howManyProductsIsBelow(n: number) {
  let x: string[] = Object.keys(products).filter(
    (element) => products[element] < n
  );
  console.log(x.length);
}

howManyProductsIsBelow(300);

function isThereAny(n: number) {
  let x: any = Object.keys(products).find((key) => products[key] === n);
  if (x !== undefined) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

isThereAny(125);
isThereAny(400);

function cheapestProduct() {
  let newArr: any[] = Object.values(products);
  newArr.sort((a, b) => a - b);
  let result = Object.keys(products).find((key) => products[key] === newArr[0]);
  console.log(result);
}
cheapestProduct();

console.log("----------------------------");

function whichProductCostLessThan(n: number) {
  let x: any[] = Object.keys(products);
  let y: any[] = x.filter((key) => products[key] < n);
  console.log(y);
}
whichProductCostLessThan(201);

function whichProductCostMoreThan(n: number) {
  let x: any[] = Object.keys(products);
  let y: any[] = x.filter((key) => products[key] > n);
  let z: any[] = [];
  for (let key of y) {
    z.push(products[key]);
  }
  for (let i: number = 0; i < y.length; i++) {
    console.log(`${y[i]} ${z[i]}`);
  }
}

whichProductCostMoreThan(50);

console.log("-----------------------");

let planetList: string[] = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Uranus",
  "Neptune",
];

function putSaturn(list: string[]) {
  list.splice(5, 0, "Saturn");
  console.log(list);
}

putSaturn(planetList);
console.log("==========================");

let girls: string[] = ["Eve", "Ashley", "Claire", "Kat", "Jane"];
let boys: string[] = ["Joe", "Fred", "Tom", "Todd", "Neef", "Jeff"];

function match(list1: string[], list2: string[]) {
  let matchArray: string[] = [];
  for (let i: number = 0; i < list1.length; i++) {
    let x = list1[i].toString();
    let y = list2[i].toString();
    matchArray.push(x + "-" + y);
  }
  console.log(matchArray);
}
match(girls, boys);

let animals: string[] = [
  "koal",
  "pand",
  "zebr",
  "anacond",
  "bo",
  "chinchill",
  "cobr",
  "gorill",
  "hyen",
  "hydr",
  "iguan",
  "impal",
  "pum",
  "tarantul",
  "pirahn",
];

function appendA(list: string[]) {
  let result: string[] = [];
  for (let i: number = 0; i < list.length; i++) {
    let x = list[i].toString() + "a";
    result.push(x);
  }
  console.log(result);
}

appendA(animals);

let shopItems: any[] = ["Cupcake", 2, "Brownie", false];

function repairSweets(list: any[]) {
  list.splice(1, 1, "Croissant");
  list.splice(3, 1, "Ice cream");
  console.log(list);
}

repairSweets(shopItems);

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

function sevenFinder(list: number[]) {
  if (list.includes(7) === true) {
    console.log("Hoorray");
  } else {
    console.log("Noooooo");
  }
}

sevenFinder(numbers);

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
function checkNums(list: number[]) {
  let testNumbers: number[] = [4, 8, 12, 16];
  let counter = 0;
  for (let i: number = 0; i < testNumbers.length; i++) {
    if (list.includes(testNumbers[i])) {
      counter += 1;
    }
  }
  if (counter === testNumbers.length) {
    return true;
  } else {
    return false;
  }
}
console.log(checkNums(listOfNumbers));

function calculator(operator: string, operand1: number, operand2: number) {
  switch (operator) {
    case "+":
      return operand1 + operand2;
      break;
    case "-":
      return operand1 - operand2;
      break;
    case "*":
      return operand1 * operand2;
      break;
    case "/":
      return operand1 / operand2;
      break;
    default:
      console.log("operator is not valid");
  }
}

console.log(calculator("/", 5, 5));
console.log("--------------------------------");

const students: any[] = [
  { name: "Theodor", age: 3, candies: 2 },
  { name: "Paul", age: 9, candies: 2 },
  { name: "Mark", age: 12, candies: 5 },
  { name: "Peter", age: 7, candies: 3 },
  { name: "Olaf", age: 12, candies: 7 },
  { name: "George", age: 10, candies: 1 },
];

function listOfNames(list: any[]) {
  let candy: any[] = list.filter((element) => element.candies > 4);
  let names: any[] = candy.map(({ name }) => name);
  console.log(names);
}

listOfNames(students);

function sumOfAge(list: any[]) {
  let candy: any[] = list.filter((element) => element.candies < 4);
  let sum: number = candy.map(({ candies }) => candies).reduce((a, b) => a + b);
  console.log(sum);
}

sumOfAge(students);

console.log("_-_________________");

const students2: any[] = [
  { name: "Mark", age: 9.5, candies: 2 },
  { name: "Paul", age: 12, candies: 5 },
  { name: "Clark", age: 7, candies: 3 },
  { name: "Pierce", age: 12, candies: 7 },
  { name: "Sean", age: 10, candies: 1 },
];

function whoHasGotMore(list: any[]) {
  let candies: any[] = list.filter((candy) => candy.candies > 4);
  let names: string[] = candies.map(({ name }) => name);
  console.log(names);
}
whoHasGotMore(students2);

function averageCandy(list: any[]) {
  let candy: number[] = list.map(({ candies }) => candies);
  let result: number = candy.reduce((a, b) => a + b) / candy.length;
  console.log(result);
}

averageCandy(students2);
console.log("___________________");

const accounts: any[] = [
  { clientName: "Igor", accountNumber: 11234543, balance: 203004099.2 },
  { clientName: "Vladimir", accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: "Sergei", accountNumber: 23456311, balance: 1353600.0 },
];

function getAcc(account:number):any[]{
  
  let valid:any[] = accounts.find(accNum => accNum.accountNumber === account)
  let x:any[] = Object.values(valid)
  x.splice(1,1)
  return x
}
console.log(getAcc(11234543));

function transferAmount(account:any[], from:number, to:number, cash:number){
  let x:boolean = Object.values(account).includes(from);
  let y:boolean = Object.values(account).includes(to);
  if(x === false || y === false){
    console.log('404 - account not found');
  }else {
    
  }
}