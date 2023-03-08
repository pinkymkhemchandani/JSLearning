function factorialOfNum(num) {
    var factorial = 1

    if (num== undefined || num==null) {
        console.log(`Factorial of ${num} is invalid`);
        
    }
    else{for (let index = num ; index >=1; index--) {
        factorial = index*factorial;

    }
        
    console.log(`Factorial of ${num} is ${factorial}`);     
    }

   

}

  
  
factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);
  


