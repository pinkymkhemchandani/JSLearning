console.log("******1.1*****");
function tcsInterviewEligibility(GraduationScore,HscScore,SscScore,candidateName){
var interviewResult = GraduationScore >= 70|| HscScore >= 80 || SscScore >= 90 ? `Congrates ${candidateName} you are eligible for TCS interview` : `Unfortunately you aer not eligible for interview`;
console.log(interviewResult);

}

tcsInterviewEligibility(80,86,90,"Pinky");
tcsInterviewEligibility(70,65,55,"sheetal");
tcsInterviewEligibility(60,79,88,"jhanvi");
