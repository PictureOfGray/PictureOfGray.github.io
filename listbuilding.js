let addedUnits = JSON.parse(localStorage.getItem("addedUnits"));
console.log("Parsed added units JSON: ");
console.log(addedUnits);

let unitInfoDisplay = document.getElementById("unitInfoDisplay");

for (let i = 0; i < addedUnits.length; i++) {
    unitInfoDisplay.innerHTML += "<tr>"
                                     + "<th class=\"rowHeader\">" + addedUnits[i].Unit + "</th>"
                                     + "<td>" + addedUnits[i].Variant + "</td>"
                                     + "<td>" + addedUnits[i].PV + "</td>"
                                     + "<td>" + addedUnits[i].Movement + "</td>"
                                     + "<td>" + addedUnits[i].Jump + "</td>"
                                     + "<td>" + (addedUnits[i].Armor + addedUnits[i].Structure) + "</td>"
                              + "</tr>";

    // <tr>
    //   <th scope="row">Dennis</th>
    //   <td>Web accessibility</td>
    //   <td>45</td>
    // </tr>

    // <tr>
    //   <th scope="col">Unit</th>
    //   <th scope="col">Variant</th>
    //   <th scope="col">PV</th>
    //   <th scope="col">Movement</th>
    //   <th scope="col">Jumping</th>
    //   <th scope="col">Armor + Structure HP</th>
    // </tr>
}