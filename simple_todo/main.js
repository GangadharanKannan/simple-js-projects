let task = [];
let resultElement = document.getElementById("result");
let inputElement = document.getElementById("tskInput");

document.getElementById("addBtn").addEventListener("click",() => {
    let taskname = inputElement.value;
    if(taskname === ""){
        alert("please enter some task")
    } else {
        task.push(taskname);
    }
    renderTask();
    inputElement.value = "";
})

function renderTask(){
    resultElement.innerHTML = "";
    task.forEach((item,index) => {
        resultElement.innerHTML += `<div style="margin-top: 1rem">
        <input type="checkbox" id="mark-${index}" onchange="markChange(${index})"/>
        <span id="item-${index}">${item}</span>
        <button onclick="markComplete(${index})">Delete</button>
        </div>
        `})
}
function markChange(i){
    let checkedIn = document.getElementById(`mark-${i}`);
    if(checkedIn.checked){
        document.getElementById(`item-${i}`).style.textDecoration = "line-through";
    } else {
        document.getElementById(`item-${i}`).style.textDecoration = "none";
    }
}
function markComplete(i) {
    task.splice(i,1);
    renderTask();
}