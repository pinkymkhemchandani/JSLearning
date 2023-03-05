function factorialWordsCount(str){
    if (str==null || str== undefined || (typeof str == "number" && isNaN(str)) || str==0) {
        console.log(`Given string ${str} is invalid`);
        
    }
    else  {
        console.log(`Given String is valid ${str}`);
        let words = str.split(" ");
        // console.log(words);
        const totalWords = words.length;
        console.log(`Total Number of String is :${totalWords}`);
         let factorial =1 
        for (let index = totalWords ; index >=1; index--) {
            factorial = index*factorial;
            
        }

        console.log(`Factorial of ${str} is ${factorial}`);

        
    
        }

    
}
factorialWordsCount(`Revision is the mother of Success`);
console.log(`*************`);
factorialWordsCount(`We never fail, we always learn`);
console.log(`*************`);
factorialWordsCount(null);
console.log(`*************`);
factorialWordsCount("");
console.log(`*************`);
factorialWordsCount("Pinky Khemchandani")

