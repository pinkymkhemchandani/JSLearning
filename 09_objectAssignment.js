let proffessor = {
    Name : "NagjiChavda",
    id : 746829,
    subject : "QantitiveAptitude",
    age: 36,
    degrees :{
        enginnering: `CSC`,
        Masters :`MBA`,
        PHD:`Adv Computing`,
        Speciallization : `Coding`   
},
    Certificates:[`Hacker Rank Participation`,`Certificate in IFE Course`,`Certificate in Adv Programming`],

degreeDetails : function (degreeDetails) {
    return `Teachers Degrees are:${this.degrees.enginnering},${this.degrees.Masters},${this.degrees.PHD},${this.degrees.Speciallization} , Total degrees are:${Object.keys(this.degrees).length} `
   

}

}
 
console.log(`*****1*******`);
let resultDegree = proffessor.degreeDetails();
console.log(`Total Degrees are: ${resultDegree}`);

console.log(`*****2*******`);
proffessor.totalExperience = "14 years";
console.log(proffessor);

console.log(`*****3*******`);
proffessor.subject = "ComputerScience";
console.log(proffessor);

console.log(`*****4*******`);

proffessor.Certificates.push("Oracle Certified");
console.table(proffessor.Certificates);


console.log(`*****5*******`);
proffessor.Certificates[3] = "Oracle Certified"
console.log(proffessor.Certificates[proffessor.Certificates.length-1]);
