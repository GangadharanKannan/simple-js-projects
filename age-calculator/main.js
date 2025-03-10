document.getElementById("alertForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    let name = document.getElementById("name").value;
    let birthYear = document.getElementById("birthYear").value;

    const date = new Date();
    const year = date.getFullYear();

    let age = year - birthYear ;

    if (name && birthYear) {
        alert(`Hello ${name}! You were age is ${age}.`);
    } else {
        alert("Please enter both name and birth year.");
    }
    
});