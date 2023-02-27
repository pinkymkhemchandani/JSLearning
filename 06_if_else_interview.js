

function tcsInterviewEligibility(GraduationScore,HscScore,SscScore,candidateName){
    if (GraduationScore >= 70|| HscScore >= 80 || SscScore >= 90 ) {

    var result = `Congrates ${candidateName} you are eligible for TCS interview`
        
    } else {
        var result = `Unfortunately you aer not eligible for interview`
        
    }
    
    console.log(result);
    
    }
    
    tcsInterviewEligibility(80,86,90,"Pinky");
    tcsInterviewEligibility(70,65,55,"sheetal");
    tcsInterviewEligibility(60,79,88,"jhanvi");
    