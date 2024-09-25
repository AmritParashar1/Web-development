// Stack(Primitive datatypes)  , Heap(Non - primitive datatypes)

let myyoutubename = "Amrit Parashar"

let anotheryoutube = myyoutubename
anotheryoutube = "Sher"

//copy mili hai isiliye ekk ki value change karne pe dusre pe koi asar nahi hua

console.log(myyoutubename)
console.log(anotheryoutube)



let user01 = {
    email : "amritp121205@gmail.com",
    upi : "amritp121205@okaxis"
}

let user02 = user01;

user02.email = "amrit.parashar.23cse@bmu.edu.in"

//actual reference mili hai isiliye ekk ki value change karne pe dusre ki value bhi change ho gayi

console.log(user01.email);
console.log(user02.email);

//Stack memory vs heap memory concept 

/* If something is getting stack memory that means copy is being created and if someone is getting heap memory that means it is
getting actual reference

Stack memory is assigned to primitive datatypes like bool char int etc
Heap memory is assigned to non - primitive datatypes like arrays etc.*/

