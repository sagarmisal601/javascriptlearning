console.log(`========================Assignment========================`);
console.log(`-----------------1.Define a class vehical-----------------`)
class Vehical {
    name
    color
    model
    engine
    constructor(name,color, model ,type){
        this.name = name;
        this.color = color;
        this.model = model;
        this.type = type;
    }
}
let vehical1 = new Vehical("Swift","Red","Suzuki","4 wheeler");
let vehical2 = new Vehical("Harrier","White","Tata","4 Wheeler");
let vehical3 = new Vehical("Innova","Black","Toyota","4 Wheeler");
let vehical4 = new Vehical("Mustang","Purple","Tata","4 Wheeler");
let vehical5 = new Vehical("Bugatti","Yellow","BBT","4 Wheeler");
console.log(`==NameColorModelType==`)
console.log("1.",vehical1.name,vehical1.color,vehical1.model,vehical1.type);
console.log("2.",vehical2.name,vehical2.color,vehical2.model,vehical2.type);
console.log("3.",vehical3.name,vehical3.color,vehical3.model,vehical3.type);
console.log("4.",vehical4.name,vehical4.color,vehical4.model,vehical4.type);
console.log("5.",vehical5.name,vehical5.color,vehical5.model,vehical5.type);
console.log(vehical1);
console.log(vehical2);
console.log(vehical3);
console.log(vehical4);
console.log(vehical5);

console.log(`-----------------2. Define a class collage-----------------`);
class collage {
    name
    location
    courses
    cityName
    constructor( name,location,courses,cityName){
        this.name = name;
        this.location = location;
        this.courses = courses;
        this.cityName = cityName;
    }
    info(){
        console.log(this.name,this.location,this.courses,this.cityName);
    }
}
console.log(`==By Using function==`)
let collage1 = new collage("Walchand collage","Sangli","BCA","Sangli");
let collage2 = new collage("SRVM collage","Jath","BCom","Jath");
let collage3 = new collage("RR collage","Jath","BBA","Miraj");
let collage4 = new collage("Zeal Collage","Pune","MCA","Vijaour");
let collage5 = new collage("Siddhant collage","Pune","MCA","Pune");
collage1.info();
collage2.info();
collage3.info();
collage4.info();
collage5.info();

console.log(`-----------------Question 3-----------------`);
function traverseObject(){
    for (const key in collage1) {
        if (Object.hasOwnProperty.call(collage1, key)) {
            const element = collage1[key];
            console.log(key,collage1); 
        }
    }
}
traverseObject();