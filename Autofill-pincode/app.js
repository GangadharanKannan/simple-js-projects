document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const pincode = document.querySelector("#pincode").value;

    document.getElementById("city").textContent = "City: Loading...";
    document.getElementById("state").textContent = "State: Loading...";

    fetch(`https://api.postalpincode.in/pincode/${pincode}`)
        .then(response => response.json())
        .then(data => {
            if (data[0].Status === "Success") {
                const postOffice = data[0].PostOffice[0];
                document.getElementById("city").textContent = `City: ${postOffice.District}`;
                document.getElementById("state").textContent = `State: ${postOffice.State}`;
            } else {
                document.getElementById("city").textContent = "City: Not found";
                document.getElementById("state").textContent = "State: Not found";
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            document.getElementById("city").textContent = "City: Error occurred";
            document.getElementById("state").textContent = "State: Error occurred";
        });
});