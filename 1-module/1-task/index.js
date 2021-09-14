function factorial(n){
 for (var i = 0; i < 5; i++) 
     return n ? n * factorial(n - 1) : 1;
 }
alert(factorial(0));
alert(factorial(1));
alert(factorial(3));
alert(factorial(5));


