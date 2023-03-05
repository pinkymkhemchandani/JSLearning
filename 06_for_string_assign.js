console.log("*******1******");

    
    var vowels_count = function (vowel) {
        count = 0 
       for (let index = 0; index < vowel.length; index++) {
        var char = vowel.charAt(index);
        if (char=="a" || char=="e" ||char== "i" ||char== "O" || char=="u") 
        count=count+1 ;                 
        
  }

  console.log(`vowewls in str "JavaScript is the language Of internet" is :${count}`);
  console.log(`vowewls in str "I am Angular Developer" is :${count}`);
  console.log(`vowewls in str"Hard work and commitment is the key of success"is :${count}`);
}
  vowels_count("JavaScript is the language Of internet");
  vowels_count("I am Angular Developer");
  vowels_count("Hard work and commitment is the key of success");
 

  console.log("*******2*******");

  function lastWordCharsCount(totalChar) {
    count = 0 
       for (let index = totalChar.length-1; index >=0 ; index--) {
        var char = totalChar.charAt(index);
        if (char==" ") {
            break;
            
        }

        count=count+1
  }

  return count

  }

  var result = lastWordCharsCount("JavaScript is the language Of internet"); 
  console.log(`last word : ${result}`);
  var result = lastWordCharsCount("I am Angular Developer"); 
  console.log(`last word : ${result}`);
  var result = lastWordCharsCount("Hard work and commitment is the key of success"); 
    console.log(`last word : ${result}`);





  