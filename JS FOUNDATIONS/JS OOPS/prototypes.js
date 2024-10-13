//JavaScript is open oriented based language but internally it works on prototype based language like there are all keywords like class 
//objects etc. but internally the working is based on prototype based.

let computer = {cpu: 12};
let lenovo = {
    screen: "HD",
    __proto__:computer
};
let tomHardware = {};

//accessing prototype
// console.log(`lenovo`, lenovo.__proto__);

let genericCar = {tyres: 4};

let tesla = {
    driver : "AI"
};

Object.setPrototypeOf(tesla,genericCar);

console.log(`tesla`,Object.getPrototypeOf(tesla));



