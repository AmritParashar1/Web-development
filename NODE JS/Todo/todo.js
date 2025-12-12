const fs = require("fs")
const filepath = "./tasks.json";

const loadTask = () => {
    try {
        const databuffer = fs.readFileSync(filepath);
        const dataJSON = databuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}

const saveTasks = (tasks) => {
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filepath,dataJSON);
}

const listTasks = () => {
    const tasks = loadTask();
    tasks.forEach((task,index) => console.log(`${index+1} - ${task.task}`));
};

const addTasks = (task) => {
    const tasks = loadTask();
    tasks.push({task});
    saveTasks(tasks);
    console.log("Tasks added", task);
}

const removeTasks = (index) => {
    const tasks = loadTask();

    const indexToRemove = index - 1;

    if(index < 0 || index > tasks.length) {
        console.log(`ERROR : Taks number ${index}  is invalid`);
        return;
    }

    const removedTask = tasks.splice(indexToRemove,1)[0];

    saveTasks(tasks);

    console.log(`TASK REMOVED : ${removedTask.task}`);
}


const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
    addTasks(argument);
}
else if (command === "list") {
    listTasks();
}
else if (command === "remove") {
    removeTasks(parseInt(argument));
}
else {
    console.log("Command not found.")
}