let arrayOfNumbers = [0,2,4,5,6,7,8,];
console.log(arrayOfNumbers);
console.table(arrayOfNumbers);


const totalArrayElements =  arrayOfNumbers.length;
console.log(`Total elements available in array is: ${totalArrayElements}`);

const is8Available = arrayOfNumbers.includes(8);
console.log(`Is 8 available: ${is8Available} `);

const is9Available = arrayOfNumbers.includes(9);
console.log(`Is 9 available: ${is9Available} `);


const indexOf8 = arrayOfNumbers.indexOf(8);
console.log(`Index of 8 element is: ${indexOf8} `);

const indexOf100 = arrayOfNumbers.indexOf(100);
console.log(`Index of 100 element is: ${indexOf100} `);

var arrayOfNumber = [ 10, 20, 25, 15, 30, 5];
const valueAtIndex2 = arrayOfNumbers[2];
console.log(`Value at index 2 is: ${valueAtIndex2}`);

arrayOfNumbers[3] = 35;
console.log(arrayOfNumbers);

arrayOfNumbers[2]=50;
console.log(arrayOfNumbers);

var arrayOfNumber = [ 10, 20, 25, 15, 30, 5];
console.log("==== Adding element in the last using push() === ");
arrayOfNumber.push(40);
console.log(arrayOfNumber);
console.log("==== Adding element in the first using unshift() === ");
arrayOfNumber.unshift(5);
console.log(arrayOfNumber);

var arrayOfNumber = [ 10, 20, 25, 15, 30, 5];
console.log(arrayOfNumber);
console.log("==== Removing last element using pop() === ");
arrayOfNumber.pop();
console.log(arrayOfNumber);
console.log("==== Removing first element using shift() === ");
arrayOfNumber.shift();
console.log(arrayOfNumber);

var arrayOfNumber = [ 10, 20, 25, 15, 30, 5, 40, 45];
console.log("==== slice(startIndex) === ");
const arrayFromIndex3 = arrayOfNumber.slice(3);
console.log(arrayFromIndex3);

console.log("==== slice(startIndex, endIndex) === ");
const subArray = arrayOfNumber.slice(2, 5);
console.log(subArray);


console.log("==== splice(startIndex) === ");
const splicedArray = arrayOfNumber.splice(3);
console.log(`Removed elements from array is: ${splicedArray}` );
console.log(arrayOfNumber);

var arrayOfNumber = [ 10, 20, 25, 15, 40, 45];
console.log("==== splice(startIndex, deleteCount) === ");
const splicedArrayWithDeleteCount = arrayOfNumber.splice(2, 2);
console.log(`Removed elements using deleteCount is: ${splicedArrayWithDeleteCount}` );
console.log(arrayOfNumber);

var arrayOfNumber = [ 10, 20, 25, 15, 40, 45];
const splicedArrays = arrayOfNumber.splice(1,1);
console.log(`Removed elements from array is: ${splicedArray}` );
console.log(arrayOfNumber);

var arrayOfNumber = [ 10, 20, 25, 15, 40, 45];
const splicedArra = arrayOfNumber.splice(1,2);
console.log(arrayOfNumber);


var arrayOfNumber= [ 10, 20, 25, 15, 40, 45];
 arrayOfNumber.splice(3,1);
  console.log(`After removing 15: ${arrayOfNumber}`); 

  console.log("=====splice() to insert one elements without replacing existing element ===================="); 
  var arrayOfNumber = [ 10, 20, 25, 15, 40, 45];
   arrayOfNumber.splice( 2, 0, 22); 
   console.log(arrayOfNumber);
   
   console.log("=====splice() to insert one elements without replacing existing element ====================");
    var arrayOfNumber = [ 10, 20, 25, 15, 40, 45];
     // 5, 35, 55
    arrayOfNumber.splice( 4, 0, 5, 35, 55);
     console.log(arrayOfNumber);

    console.log("=====splice() to insert one elements without replacing existing element ====================");
    var arrayOfNumber = [ 10, 20, 25, 15, 40, 45]; 
    arrayOfNumber.splice( 4, 0, 5, 35, 55);
     console.log(arrayOfNumber);
     
     console.log("=====splice() to replace one elements ===================="); 
     var arrayOfNumber = [ 10, 20, 25, 15, 40, 45];
      arrayOfNumber.splice(2, 2 ,50,60); 
      console.log(arrayOfNumber);

      console.log("===== Traversing  ====================");
      var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element);
        
      }

      console.log("===== Traversing  ====================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];
let sum = 0; // 10
for (let index = 0; index < arrayOfNumbers.length; index++) {//1
    const element = arrayOfNumbers[index];
   sum = sum + element;// sum = 0 + 20
    // console.log(element);
}
console.log(`Sum of an Array element is: ${sum}`);