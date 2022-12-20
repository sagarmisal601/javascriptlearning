function maleMarriage(gender,age,name){
    var r = gender=="male"&& age>=21 ? `Yes, ${name} are you eligible for marriage` :`Sorry, ${name} you are not eligible for marriage`;
    console.log(`${r}`);
}
maleMarriage("male",25,"Billgates");
maleMarriage("male",17,"Srew Jobs");
console.log(`================================================`);
function femaleMarriage(gender,age,name){
    var r = gender=="female"&& age>=18 ? `Yes, ${name} are you eligible for marriage` :`Sorry, ${name} you are not eligible for marriage`;
    console.log(`${r}`);
}
femaleMarriage("female",16,"Jenifer");
femaleMarriage("female",27,"Malinda Gates");