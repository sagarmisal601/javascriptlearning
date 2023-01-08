console.log(`======Assignment========`);
const personalDetails = {
    name : "Sagar",
    education : "BCA",
    DOB : "09/14/2000"
}
const collageDetails = {
    clgname : "RRC",
    fee : "16000",
    address : "Jath"
}
console.log(`-----------------Question 1-----------------`);
console.log(`The my persinal details is :`);
console.log(personalDetails);

console.log(`-----------------Question 2-----------------`);
console.log(`My grducation collage details is :`);
console.log(collageDetails);

console.log(`-----------------Question 3-----------------`);
Object.assign(personalDetails,collageDetails);
console.log(`My perosnal and collage details : `);
console.log(personalDetails);
console.log(`-----------------Question 4-----------------`);
var friend = ["Sagar","Shubham","Ajit","Siddhu","DVarsha"];
Object.freeze(friend);
for(let i = 0; i<5; i++){
    console.log(`My friends name is :${friend[i]}`);

}console.log(`-----------------Question 4-----------------`);
console.log(`The reverse the string `);
console.log(`The word "Codemind Technology" is reverse of "Technology is :"`);
var string = "Technology";
let reverseWord = "";
for(let i=string.length-1;  i >= 0; i--){
    reverseWord += string[i];  
    //string[i].concat();
}
console.log(reverseWord);