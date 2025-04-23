let date = new Date();
console.log(date);

let result = document.getElementById("res");

function getDate(){
    let ret = date.getDate();
    result.innerHTML = ret
}
function getDay(){
    let ret = date.getUTCDay();
    result.innerHTML = ret
}
function getYear(){
    let ret = date.getFullYear();
    result.innerHTML = ret
}
function getMonth(){
    let ret = date.getMonth();
    result.innerHTML = ret
}
function getTime(){
    let ret = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    result.innerHTML = ret
}