console.log(`------------------Assignment 2------------------`);
const car = {
    carName : "Creta Sx",
    company : "Hundai",
    launchYear : 2017
}
const carEngine = {
    enginePower : "1499CC",
    maxPower : "113 BHP"
}
console.log("====using object.assign()====");
let objectCar = Object.assign(car,carEngine);
console.log(objectCar);

console.log("===Using spread operator===");
let spreadCar = {...car,...carEngine};
console.log(spreadCar);