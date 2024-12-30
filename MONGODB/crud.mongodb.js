//CRUD Operations
use("CrudDb")

console.log(db);

db.createCollection("courses");

//CREATE
db.courses.insertOne({
    name : "Harry sigma batch",
    price : 0,
    assignments : 12,
    projects : 45
})

db.courses.insertMany([
    {
        name : "codehelp",
        price : 10,
        assignments : 13,
        projects : 35
    },
    {
        name : "udemy webdev",
        price : 15,
        assignments : 14,
        projects : 25
    },
    {
        name : "apna college",
        price : 12,
        assignments : 17,
        projects : 35
    }
])

//READ
let a = db.courses.find({price:0})
// console.log(a);

// console.log(a.count());

// console.log(a.toArray());

let b = db.courses.findOne({price:0})
// console.log(b);

//UPDATE

db.courses.updateOne({price:0},{$set:{price : 100}});

db.courses.updateMany({price : 0},{$set:{price:1000}});

//DELETE 

db.courses.deleteOne({price : 100});

db.courses.deleteMany({price : 1000});

