let allAddButtons = document.getElementsByClassName("add");
let unitStats;
let addedUnits = [];

fetch('unitStats.json')
    .then(response => response.json())
    .then(data => {
        unitStats = data;
        console.log("All unit stats:");
        console.log(unitStats);
    })
    .catch(error => console.error(error));

console.log("All add buttons:");
console.log(allAddButtons);

for (let i = 0; i < allAddButtons.length; i++) {
    allAddButtons[i].addEventListener("click", () => {
        addUnitJSON(i);
    });
}

function addUnitJSON(index) {
    let unitInfo = allAddButtons[index].childNodes[0].data;

    let unitName = unitInfo.slice(unitInfo.indexOf(" ") + 1, unitInfo.lastIndexOf(" "));
    let variant = unitInfo.slice(unitInfo.lastIndexOf(" ") + 1,);

    console.log(unitName);
    console.log(variant);


    for (let i = 0; i < unitStats.length; i++) {
        if (
            unitStats[i].Unit === unitName &&
            unitStats[i].Variant === variant
        ) {
            addedUnits.push(unitStats[i]);
            localStorage.setItem("addedUnits", JSON.stringify(addedUnits));
            console.log("addedUnits Local Storage: " + localStorage.getItem("addedUnits"));
            return;
        }
    }

    console.log("No match found");
}