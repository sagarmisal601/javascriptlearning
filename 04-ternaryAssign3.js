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
