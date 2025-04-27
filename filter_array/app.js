let fruits = ["apple","orange","grapes","guava","pineapple","mango","cherry","banana"];

let result = document.getElementById("rslt");
let inp = document.getElementById("srch");

fruits.forEach((item) => {
    result.innerHTML += `<h1>${item}</h1>`
})

inp.addEventListener("keyup", () => {
    
    result.innerHTML = "";
    let newFrt = fruits.filter((item) => {
        return item.includes(inp.value);
    })
    newFrt.forEach((item) => {
        result.innerHTML += `<h1>${item}</h1>`
    })
})