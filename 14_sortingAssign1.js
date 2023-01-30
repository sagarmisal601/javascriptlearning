console.log("-------------------- Assignment 1 ----------------------");
 const array_roll_number = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];

 console.log("-------------------- Array of number --------------------");
 console.log(array_roll_number);

 console.log("-------------------- 1. Reverse of array --------------------");
 array_roll_number.reverse();
 console.log(array_roll_number);

 console.log("-------------------- 2. Sort the array--------------------");
 array_roll_number.sort();
 console.log(array_roll_number);

 console.log("-------------------- 3. Sort the array by ascending order by logic --------------------");
 array_roll_number.sort((a, b)=>{
    return a > b ? 1 : -1; 
 });
 console.log(array_roll_number);

 console.log("-------------------- 4. Find the greatest number from the array --------------------");
 const arrayLength = array_roll_number.length;
 let greatestNumber = array_roll_number[arrayLength - 1];
console.log(` The greatest number from the array is : ${greatestNumber}`);

 console.log("-------------------- 5. Find the smallest number from the array --------------------");
console.log(` The smallest number from the array is : ${array_roll_number[0]}`);

 console.log("-------------------- 6. Remove the duplicates from the array --------------------");
 let duplicate_number = [...new Set(array_roll_number)];
 console.log(duplicate_number);