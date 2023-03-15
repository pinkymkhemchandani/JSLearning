let bankSbi = {
    bankName : "SBI" ,
    headQuater:"Mumbai",
    accountNo:3210910,
    IFSC:'SBIN0000541',
    
}

let bankLocatioin={
    street:`Ringroad lane 6`,
    city: `Rajkot`,
    pinCode: 362265
}

console.log(`********Cloning through assign******`);
let cloningResult = Object.assign(bankSbi ,bankLocatioin);
console.log(cloningResult);

console.log(`*********cloning through spread method********`);
let newBank = {...bankSbi}
console.log(newBank);
console.log(bankLocatioin);

let rateOfinterest = {
    homeLoanInterest : 10.25,
    personalLoanInterest : 12.00,
    dueInterest: 6.00

}

console.log(`*********merged Objects********* `);

let mergedResult = Object.assign(cloningResult ,rateOfinterest);
console.table (mergedResult);

console.log("===== Traversing  ====================");
var bankDetails = [bankSbi , bankLocatioin ,rateOfinterest]
for (let index = 0; index < bankDetails.length; index++) {
  const element = bankDetails[index];
  console.log(element);
}