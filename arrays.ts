let arraySort:string[] = ['one', 'two', 'three'];

export function sortMe (names: string[]): string[] {
    // Your code here
    arraySort.sort();
    return arraySort;
  };

  console.log(sortMe(arraySort));
  console.log('-----------------');

  let testArray1 = [1,2,3,4,5]
  let testArray2 = [5, 3, 2, 1, 4]
  let testArray3 = [2, 2, 1, 2, 1]
  
  function removeSmallest(numbers:number[]) {
    function min(n:number) {return n != Math.min(...numbers)}
   let newArray = numbers.slice(min, 1)
   return newArray; 
  }

  console.log(removeSmallest(testArray3));