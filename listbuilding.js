// functionality for the clear button at the bottom of the page. Guess what it does
let clearAllButton = document.getElementById("clearAllUnits");
clearAllButton.addEventListener("click", () => {
    addedUnits = [];
    localStorage.setItem("addedUnits", JSON.stringify(addedUnits));
    unitInfoDisplay.innerHTML = "";
    totalPV = 0;
    displayAllUnits(); // rerun to display new changes
});

let deleteButtons = [];
let addedUnits = JSON.parse(localStorage.getItem("addedUnits"));
let unitInfoDisplay = document.getElementById("unitInfoDisplay");
let totalPV = 0;

displayAllUnits(); // call this to get things started

function displayAllUnits() {
    unitInfoDisplay.innerHTML = ""; // Clear old rows
    totalPV = 0;                    // Recalculate from scratch
    // add rows to the table that contains relevant info about the unit (and unit card) and delete button
    for (let i = 0; i < addedUnits.length; i++) {
        unitInfoDisplay.innerHTML += "<tr>"
            + "<th class=\"rowHeader\">" + addedUnits[i].Unit + "</th>"
            + "<td>" + addedUnits[i].Variant + "</td>"
            + "<td>" + addedUnits[i].PV + "</td>"
            + "<td>" + addedUnits[i].Movement + "</td>"
            + "<td>" + addedUnits[i].Jump + "</td>"
            + "<td>" + (addedUnits[i].Armor + addedUnits[i].Structure) + "</td>"
            + "<td>" + "<img src=" + addedUnits[i].Image + " alt=\"\" height=\"200\" width=\"280\"></img>" + "</td>"
            + "<td>" + "<button type=\"button\" onclick=\"deleteUnit(" + i + ")\">Delete this Unit</button>" + "</td>"
            + "</tr>";
        totalPV += Number(addedUnits[i].PV);
    }
    document.getElementById("totalPV").textContent = totalPV;
}

// every "delete unit" button gets this function
function deleteUnit(index) {
    addedUnits.splice(index, 1); // remove unit

    // Save updated array to localStorage
    localStorage.setItem(
        "addedUnits",
        JSON.stringify(addedUnits)
    );
    displayAllUnits(); // rerun to see changes
}