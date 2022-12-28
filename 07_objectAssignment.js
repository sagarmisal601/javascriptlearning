console.log(`------------------Assignment 1------------------`);

console.log(`Creating an empty object with name professor`);
const professor = {
    name : "Sagar Misal",
    age : 22,
    gender : "Male",
    company : "wipro",
    height : 6.1,
     degrees : {
        engineering : `CSC`,
        PHD : `Adv Computong`,
    },
    
    certificates : {
        certificate1 : `Hacker Rank Participation`,
        certificate2 : `Certificate in IFE course`,
        certificate3 : `Certificate in Adv Programming`,

    },
    add : function(){
     showdetails = this.engineering + this.PHD; 
    }

}
console.log(professor);

console.log(`------------------Question 2 ------------------`);
console.log(`Create nested object "degrees"`);
console.log(professor.degrees);

console.log(`------------------Question 3 ------------------`);
console.log(`Create nested object "certificates");
console.log(professor.certificates);


console.log("------------------Question 5 ------------------`);
console.log(`Add new property height`);
console.log(professor);


console.log(`------------------Question 6------------------`);
console.log(`Modify property enginerring`);
professor.degrees.engineering = "Mecanical";
console.log(professor.degrees);

console.log(`------------------Question 7------------------`);
console.log(`Delete one certificate from nested object`);
delete professor.certificates.certificate2;
console.log(professor.certificates);

console.log(`------------------Question 8------------------`);
console.log(`Add new certificate in nested object`)
professor.certificates.certificate4 = `C progarm`;
console.log(professor.certificates);

console.log(`------------------Question 9------------------`);
console.log(``)
console.log(professor.certificates);
