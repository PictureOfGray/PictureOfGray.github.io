let clearAllButton = document.getElementById("clearAllUnits");
clearAllButton.addEventListener("click", () => {
        addedUnits = [];
        localStorage.setItem("addedUnits", JSON.stringify(addedUnits));
        unitInfoDisplay.innerHTML = "";
        displayAllUnits();
    });
let addedUnits = JSON.parse(localStorage.getItem("addedUnits"));
console.log("Parsed added units JSON: ");
console.log(addedUnits);

let unitInfoDisplay = document.getElementById("unitInfoDisplay");
let totalPV = 0;

function displayAllUnits() {
    for (let i = 0; i < addedUnits.length; i++) {
    unitInfoDisplay.innerHTML += "<tr>"
        + "<th class=\"rowHeader\">" + addedUnits[i].Unit + "</th>"
        + "<td>" + addedUnits[i].Variant + "</td>"
        + "<td>" + addedUnits[i].PV + "</td>"
        + "<td>" + addedUnits[i].Movement + "</td>"
        + "<td>" + addedUnits[i].Jump + "</td>"
        + "<td>" + (addedUnits[i].Armor + addedUnits[i].Structure) + "</td>"
        + "</tr>";
    totalPV += Number(addedUnits[i].PV);
}
document.getElementById("totalPV").textContent = totalPV;
}
displayAllUnits();