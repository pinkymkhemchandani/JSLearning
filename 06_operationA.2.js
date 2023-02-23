console.log("******Step 1******");
function maleMarriageEligibility(gender,age ,boyName){
    var eligibilityTest = gender=="male" && age>=21 ? `Hey ${boyName} you are eligible for Marriage` : "Not eligible for Marrige";
    console.log(`Marrige Eligibilty result: ${eligibilityTest}`);
}

maleMarriageEligibility("male",25,"Billgates");
maleMarriageEligibility("male",17,"stew Jobs");

console.log("******Step 2******");

function femaleMarriageEligibility(gender,age ,girlName){
    var eligibilityTest = gender=="female" && age>=18 ? `Hey ${girlName} you are eligible for Marriage` : "Not eligible for Marrige";
    console.log(`Marrige Eligibilty result: ${eligibilityTest}`);
}

femaleMarriageEligibility("female",16,"Jenifer");
femaleMarriageEligibility("female",27,"Malinda Gates");

