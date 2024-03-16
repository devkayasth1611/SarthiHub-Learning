// let toDoList = [];
// let n = prompt("Enter task you want to add : ");
// function addTask(task) {
//     for(let i = 0;i <= n;i++)
//     {
//         task = prompt("Enter Task "+i+":");
//         toDoList.push(task);
//     }
// }
// addTask();
// console.log(toDoList);

// let n1 = prompt("How many element you remove : ")

// function removeTask(index) {
//     for(let i = 1;i <= n1;i++)
//     {
//         index = prompt("index :");
//         toDoList.splice(index,1);
//         console.log(toDoList);
//     }
// }
// removeTask();
// function displayList(){
//     toDoList.forEach((number,index) => {
//         console.log("Index : "+index+ "has Value : "+number);
//     });
// }
// displayList();

let toDoList = [];

function addTask(task) {
        task = toDoList.push('Runnning');
        task = toDoList.push('Walking');
        task = toDoList.push('Skipping');
        task = toDoList.push('Sleepping');
        task = toDoList.push('Working');
}
addTask();
console.log(toDoList);

function removeTask(index) {
            index = toDoList.splice(2,1);
        }
removeTask();
console.log(toDoList);

function displayList(){
        toDoList.forEach((number,index) => {
            console.log("Index : "+index+ " has Value : "+number);
        });
    }
displayList();

let addtionalTask = ["dd","kk","vv"];
let d1 = toDoList.concat(addtionalTask);
console.log(d1);

let topTask = [];
let d2 = toDoList.slice(0,3); 
console.log(d2);

let d3 = toDoList.splice(1,3);
console.log(d3);

let d4 = toDoList.indexOf("Working");
console.log(d4);

let d5 = toDoList.includes("Walking");
console.log(d5);

