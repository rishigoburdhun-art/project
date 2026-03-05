let travelData = {};

// Fetch JSON Data
fetch("project.json")
    .then(response => response.json())
    .then(data => {
        travelData = data;
        console.log(travelData); // Check if data loads
    })
    .catch(error => console.log("Error loading JSON:", error));


// Search Function
function searchRecommendation() {

    const keyword = document.getElementById("searchInput").value.toLowerCase();
    const results = document.getElementById("results");
    results.innerHTML = "";

    if (keyword.includes("beach")) {
        displayResults(travelData.beach);
    }
    else if (keyword.includes("temple")) {
        displayResults(travelData.temple);
    }
    else if (keyword.includes("country")) {
        displayResults(travelData.country);
    }
    else {
        results.innerHTML = "<p>No matching category found.</p>";
    }
}


// Display Results
function displayResults(items) {

    const results = document.getElementById("results");

    items.forEach(place => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${place.image}" alt="${place.name}">
            <h3>${place.name}</h3>
            <p>${place.description}</p>
        `;

        results.appendChild(card);
    });
}


// Clear Button
function clearResults() {
    document.getElementById("results").innerHTML = "";
    document.getElementById("searchInput").value = "";
}