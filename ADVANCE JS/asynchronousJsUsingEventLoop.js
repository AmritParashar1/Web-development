/*Asynchronous nature of javaScript , asynchronous means having a pause in the code , we need to have pause in the code when we are executing network calls , timer function , write/read files , user input for that thing we have to use asynchoronous nature of js. We can use functions like set timeout for some code to be executed after some time, this is how we will be utilising the asynchronous nature of js. */

/* Ok so something interesting is that js doesn't have capability to execute the timer functions so, let me tell how does these things work
imagine there is a box named code where all your codes are present , there is another box named call stack , there is a event loop , there is box named environment or we can say whichever environment you are working on (browser,node, bun , deno) and there is box named queue.

So, functions come into the call stack and event loop keeps checking the call stack if there is something to execute so , as soon as any function is detected , it gets executed , but if there is timer function then event loop send it to the environment to execute that timer function after that it goes into the queues(there are two queues one is smaller queue(also known as vip queue) another one is regular queue) it depends on functions in which queue they are going , so event loop checks the queue if there is something to be executed then , it gets executed. In the time the environment is executing the timer function , event loop goes to the call stack and executes all the remaining functions.*/

function sayHello() {
    console.log("Hello, World!");
}

setTimeout(() => {
    sayHello();
}, 4000);


for(let i=0;i<10;i++) {
    console.log(i);
}