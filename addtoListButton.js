let allAddButtons = document.getElementsByClassName("add");
let testAddButton = document.getElementById("testAdd");
let unitStats;

fetch('unitStats.json')
    .then(response => response.json())
    .then(data => {
        unitStats = data;
        console.log(unitStats);
    })
    .catch(error => console.error(error));


console.log(allAddButtons);
console.log(testAddButton);

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
            console.log("MATCH FOUND");
            console.log(unitStats[i]);
            return;
        }
    }

    console.log("No match found");
}