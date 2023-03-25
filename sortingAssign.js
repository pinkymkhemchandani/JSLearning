 const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45];

 arrayRollNumbers.reverse();
console.log(`Reverse array :${arrayRollNumbers}`);

const sortedArray = arrayRollNumbers.sort();
console.log(`Array without custom logic : ${sortedArray}`);

const assendingArray = arrayRollNumbers.sort ((a,b)=>{
    return  a>b ? 1 :-1;
});

console.log(`Array with custom logic : ${assendingArray}`);

const result = assendingArray.slice(-1);
console.log(`Grater Number Of array is: ${result}`);


const smallerNumber = assendingArray.slice(0 ,1);
console.log(`smaller Number of an array is: ${smallerNumber}`);

const RemoveNumbers = assendingArray.filter((item ,index)=>assendingArray.indexOf(item)==index);
console.log(`Removing duplicate Numbers : ${RemoveNumbers}`);



