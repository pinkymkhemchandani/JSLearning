console.log("*******1*******");

function voteEligibility(age) {
    if (age>=18) {
        
    var result = `his age is ${age} so eligible for voting `}

    else if (age<=0 || age>120) {
        
    var result = `invalid Data`
        
    }

    else {
        
    var result = `Not eligible for voting`}
    console.log(result);
    
}

voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);




console.log("*******2*******");

function gradeCalculation(marks) {
    if (marks <=0 || marks >100 || typeof marks == "string" || marks != marks) {
        var result = `Please Provide the valid marks` 
        
    }

    else if (marks>=90){
    var result =`Fantastic marks: ${marks},Your grade is A+`}
        
    else if (marks>= 75 && marks < 90 ) {
        var result = `Excellent marks ${marks},Your grade is A`
        
    }

    else if (marks>= 50 && marks<=75) {
        var result = `Good marks ${marks},Your grade is B`
        
    }

    else if (marks>=35 && marks<=50) {
        var result = `marks is ${marks},Your grade is C,Need improvement`
        
    }

    

    else {
        var result = `Fail`
    }

    console.log(result);
    
    
}

 gradeCalculation(98);
 gradeCalculation(80);
 gradeCalculation(90);
 gradeCalculation(0);
 gradeCalculation(150);
 gradeCalculation(-7);
 gradeCalculation(35);
 gradeCalculation(29);
 gradeCalculation(64);
 gradeCalculation(49);
 gradeCalculation("91");
 gradeCalculation("Eighty");
 gradeCalculation(NaN);
 gradeCalculation(null);