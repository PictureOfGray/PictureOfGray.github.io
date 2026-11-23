let unitStats;
let addedUnits = JSON.parse(localStorage.getItem("addedUnits") || "[]");

// read the JSON and have unitStats equal it
fetch('unitStats.json')
    .then(response => response.json())
    .then(data => {
        unitStats = data;
        console.log("All unit stats:");
        console.log(unitStats);
    })
    .catch(error => console.error(error));

// also, get all the buttons for all the units and add functionality to them
let allAddButtons = document.getElementsByClassName("add");
for (let i = 0; i < allAddButtons.length; i++) {
    allAddButtons[i].addEventListener("click", () => {
        addUnitJSON(i);
    });
}

// Adds a unit to the JSON that's put into LocalStorage
function addUnitJSON(index) {
    // get the string from the respective "add unit" button
    let unitInfo = allAddButtons[index].childNodes[0].data;
    // and determine what the unit name and variant is
    let unitName = unitInfo.slice(unitInfo.indexOf(" ") + 1, unitInfo.lastIndexOf(" "));
    let variant = unitInfo.slice(unitInfo.lastIndexOf(" ") + 1,);

    // then look through the stored data for the unit
    for (let i = 0; i < unitStats.length; i++) {
        if (
            unitStats[i].Unit === unitName &&
            unitStats[i].Variant === variant
        ) {
            // and add its entry to the LocalStorage
            addedUnits.push(unitStats[i]);
            localStorage.setItem("addedUnits", JSON.stringify(addedUnits));

            return;
        }
    }

    console.log("No match found");
}