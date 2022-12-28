var votingEligibility = function(age){
    if(age<=0 || age>120 ){
        console.log(`Age value : ${age}, Invalid data`);
    }
    if(age>=18 && age<=120) {
        console.log(`your age is : ${age}, You can vote`);
    }
    if(age<18 && age>0){
        console.log(`your age is : ${age}, You can note vote`);
    }
}
votingEligibility(20);
votingEligibility(89);
votingEligibility(1500);
votingEligibility(0);


function gradeCalculation(marks){
    if(marks<=0 || marks>100){
        console.log(`Please provide th valid data`);

    }
    if(marks>=90 && marks<=100){
       console.log(); 
    }
    if(marks>=75 && marks<90){
        console.log("A"); 
     }
}


// Write a Function expression with one arg —> age to check whether he or she is eligible for voting or not, Then accordingly display message.
// Ex. 45, 17, 8, 20, -10, 200, 0

var votingEligibility = function (age){
    if (age<=0 || age>120) {
        console.log(`Invalid data: ${age}`);
    } else {
       console.log(`Valid data`); 
       if (age>=18) {
        console.log(`Congratulation you can vote: ${age}`);
       }else{
        console.log(`Sorry you are not eligible for vote: ${age}`);
       }
    }
}
votingEligibility(230);
votingEligibility(-20);
votingEligibility(10);

function isEvenOrOdd(num) {
    if (typeof num == "number") {
      console.log(`Valid number ${num}`);
      if (num % 2 === 0) {
        console.log(`Even number`);
      } else {
        console.log(`Odd Number`);
      }
    } else {
      console.log(`Invalid number ${num}`);
    }
  }
  isEvenOrOdd(20);
  isEvenOrOdd(11);
  isEvenOrOdd("30");
  

// Get the Day name by passing day number
// 1 - Monday
// 2 - Tuesday
// 3 - Wednesday
// 7 - Sunday
var dayNumber = 4;
switch (dayNumber) {
  case 1:
    console.log(`Today is Monday`);
    console.log(`Monday is the start day of the week`);
    break;
  case 2:
    console.log(`Today is Tuesday`);
    break;
  case 3:
    console.log(`Today is thursday`);
    break;
  case 4:
    console.log(`Today is Wednesday`);
    break;
  case 5:
    console.log(`Today is Friday`);
    break;
  case 6:
    console.log(`Today is Saturday`);
    break;
  case 7:
    console.log(`Today is Sunday`);
    console.log(`Sunday is the weekly off day`);
    break;
  default:
    console.log(`Not valid value provided`);
    break;
}

console.log(`After switch case statement`);





// Get the Day name by passing day number
// 1 - Monday
// 2 - Tuesday
// 3 - Wednesday
// 7 - Sunday

var dayNumber = 9;
switch (dayNumber) {
  case 1:
    console.log(`Today is Monday`);
    console.log(`Monday is the start day of the week`);
    break;
  case 2:
    console.log(`Today is Tuesday`);
    break;
  case 3:
    console.log(`Today is Thursday`);
    break;
  case 4:
    console.log(`Today is Wednesday`);
    break;
  case 5:
    console.log(`Today is Friday`);
    break;
  case 6:
    console.log(`Today is Saturday`);
    break;
  case 7:
    console.log(`Today is Sunday`);
    console.log(`Sunday is the weekly off day`);
    break;
  default:
    console.log(`Not valid value provided`);
    break;
}

console.log(`After switch case statement`);




var singerName = "Kishor Kumar";
// const PI = 3.1412;

let actorName;

console.log(actorName);

var isMarried = true;
if (isMarried) {
  let greet = "Congratulation";
  //console.log(greet);
}
//console.log(greet);

function add(num1, num2) {
  var result = num1 + num2;
  let PIN = 431202;
  console.log(`Result is : ${result}`);
  var isMarried = true;
  if (isMarried) {
    var greet = "Congratulation";
    const PI = 3.14; 
    let myName = "Mohit";
  }
  // console.log(PI);
  console.log(greet);
  console.log(`Result is : ${result}`);
  return result;
}
add(5, 5);
// console.log(`Outside Result is : ${result}`);
// console.log(PIN);



let arrayOfNumbers = [5, 10, 4, 6, 7, 10, 6]; // Empty Array
console.log(arrayOfNumbers);

console.log(`===== Total number of elements available in array ====`);
let totalElements = arrayOfNumbers.length;
console.log(`Total Elements in arrayOfNumbers --> ${totalElements}`);

let typeOfArray =typeof arrayOfNumbers;
console.log(`Type of array - arrayOfNumbers --> ${typeOfArray}`);

console.log(`=== Accessing array elements===`);
let elementAtZeroIndex = arrayOfNumbers[0];
console.log(`Element at Zero Index : ${elementAtZeroIndex}`);
console.log(`Element at Fifth Index : ${arrayOfNumbers[4]}`);

console.log(`Last Element : ${totalElements-1}`);

console.log(`When provided value is greater than length : ${arrayOfNumbers[9]}`);

arrayOfNumbers[2] = 100; // Update or Modify value using index
console.log(arrayOfNumbers);
