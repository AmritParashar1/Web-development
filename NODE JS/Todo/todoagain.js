const fs = require("fs")
const filePath = ".Todo/tasks.json";

const loadTasks = () => {
    try {
        const databuffer = fs.readFileSync(filePath);
        const dataJson = databuffer.toString();
        return JSON.parse(dataJson);
    } catch (error) {
        return [];
    }
}

const saveTasks = (tasks) => {
    const dataJson = JSON.stringify(tasks);
    fs.writeFileSync(filePath,dataJson);
}


const listTasks = () => {
    const tasks = loadTasks();
    tasks.forEach((task, index) => console.log(`${index+1} - ${task.task}`));
}

const addTask = (task) => {
    const tasks = loadTasks();
    tasks.push({task});
    saveTasks(tasks);
    console.log("Task added", task);
} 

const deleteTask = (taskNumber) => {
    const tasks = loadTasks();
    const index = taskNumber - 1;

    if(index<0 || index>=tasks.length) {
        console.log("Invalid task number");
        return;
    }

    const removed = tasks.splice(index,1);
    saveTasks(tasks);
    console.log("Task removed : ", removed[0].task);

}


 

const command = process.argv[2];
const argument = process.argv[3];


if(command === "add") {
    addTask(argument);
} else if(command === "list") {
    listTasks();
} else if(command === "remove") {
    deleteTask(parseInt(argument));
} else {
    console.log("command not found");
}