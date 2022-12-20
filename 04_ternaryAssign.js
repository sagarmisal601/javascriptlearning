console.log(`========================================================`);
var val1=10;
var val2=-10;
var result1= val1 > val2 ? val1 : val2 ;
console.log(`The greatest number in 10 and -10 is : ${result1}`);
var val3=800;
var val4=899;
var result2= val3 > val4 ? val3 : val4 ;
console.log(`The greatest number in 800 and 899 is : ${result2}`);
console.log(`========================================================`);
var evenOdd1=function(num1){
     var result3= num1%2==0 ? "Even Number" : "Odd Number";
     console.log(`The number 29 is ${result3}`);
} 
evenOdd1(29);
var evenOdd2=function(num2){
    var result4= num2%2==0 ? "Even Number" : "Odd Number";
    console.log(`The number 44 is ${result4}`);
} 
evenOdd2(44);
var evenOdd3=function(num3){
    var result5= num3%2==0 ? "Even Number" : "Odd Number";
    console.log(`The number 0 is ${result5}`);
} 
evenOdd3(0);
var evenOdd4=function(num4){
    var result6= num4%2==0 ? "Even Number" : "Odd Number";
    console.log(`The number 29 is ${result6}`);
} 
evenOdd4(101);

console.log(`========================================================`);
var stringEvenOdd=function(string1){
    var stringlength=string1.length;
    var lengthEvenOdd= string1.length%2==0 ? "Even Number" : "Odd Number";
    console.log(`The number "JavaScript" is ${lengthEvenOdd}`);
} 
stringEvenOdd("JavaScript");
var stringEvenOdd2=function(string2){
    var stringlength2=string2.length;
    var lengthEvenOdd2= string2.length%2==0 ? "Even Number" : "Odd Number";
    console.log(`The number "Developer" is ${lengthEvenOdd2}`);
} 
stringEvenOdd2("Developer");
var stringEvenOdd3=function(string3){
    var stringlength3=string3.length;
    var lengthEvenOdd3= string3.length%2==0 ? "Even Number" : "Odd Number";
    console.log(`The number "Google" is ${lengthEvenOdd3}`);
} 
stringEvenOdd3("Google");
console.log(`========================================================`);