
// We can store a function as value in JS

var square = function(num){
    console.log("Square of",num,"=", num * num);
}
square(5);
square(6);
square(25);
square(100);

console.log("--------------------------------------------");

console.log("Type Of Square =",typeof square);

console.log("--------------------------------------------");

var area = function(num1, num2){
    console.log("Area Of Triangle = ",(num1*num2)/2);
}
area(45, 34)

console.log("--------------------------------------------");

var area = function(num1, num2){
    console.log("Area Of Rectangle = ",num1*num2);
}
area(499, 917)

console.log("--------------------------------------------");

var swap_Values = function (no1, no2) {
    console.log("Before swap : ", no1, no2);
    var temp = no1;
    no1 = no2;
    no2 = temp;
    console.log("After swap  : ", no1, no2);
}
swap_Values("Virat", "Anushka");

var swapValues = function (no1, no2) {
    console.log("Before swap : ", no1, no2);
    var temp = no1;
    no1 = no2;
    no2 = temp;
    console.log("After swap  : ", no1, no2);
}
swapValues("1000", "2000");

console.log("--------------------------------------------");


