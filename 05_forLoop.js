console.log(`================1================`);
console.log(`The numbers from 5 to 15 :-`);
var num=5;
while( num <= 15){
    console.log(`${num}`); num++;
   
}

console.log(`================2================`);
console.log(`\n The numbers from 50 to 40 :-`);
var num=50;
while( num >= 40){
    console.log(`${num}`); num--;
   
}


console.log(`================3================`);
console.log(`The 15 odd numbers :`);
var num = 1;
while(num <= 30){
    if(num%2!==0){
        console.log(`${num}`);
    }
   num++; 
}

console.log(`================4================`);
console.log(`The 10 even numbers : `);
var num = 1;
while (num <= 20) {
    if(num%2 == 0){
        console.log(`${num}`);
    }
   num++; 
}

console.log(`================5================`);
console.log(`The table of 5 : `);
var num = 5;
while(num <= 50){
    console.log(`${num}`);
    num=num+5;
}

console.log(`================6================`);
console.log(`The table of 10 is :`);
var num = 10;
while(num <= 100){
    console.log(`${num}`);
    num = num+10;
}

console.log(`================7================`);
console.log(`Reverse of table 10 is :`);
var num = 100;
while (num >= 10) {
    console.log(`${num}`);
    num = num-10;
    
}