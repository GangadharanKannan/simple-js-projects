const div = document.createElement("div");
const h1 = document.createElement("h1");
const p = document.createElement("p");

const hContent = "Hi Everyone";
const pContent = "This line printed using DOM methods";

h1.textContent = hContent;
p.textContent = pContent;


div.appendChild(h1);
div.appendChild(p);
document.body.appendChild(div)
