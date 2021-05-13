function appendtable() {

    var chkbx = document.querySelectorAll('input[type=checkbox]:checked');
    if (chkbx.length < 2) {
        alert("select atleast 2 food items");
        return;
    }
    var tab = document.getElementById("table");
    var row = tab.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();
    var cell6 = row.insertCell();
    var cell7 = row.insertCell();
    var cell8 = row.insertCell();

    cell1.innerHTML = document.getElementById("fname").value.toUpperCase();
    cell2.innerHTML = document.getElementById("lname").value.toUpperCase();
    cell3.innerHTML = document.querySelector('input[name="gender"]:checked').value;
    var array = [];
    for (var i = 0; i < chkbx.length; i++) {
        array.push(chkbx[i].value);
    }

    cell4.innerHTML = array;


    //cell4.innerHTML = document.querySelector('input[class="favr"]:checked').value;
    // cell4.innerHTML = document.querySelector('input[name="roti"]:checked').value;
    // cell4.innerHTML = cell4.innerHTML + ', ' + document.querySelector('input[name="holige"]:checked').value;
    // cell4.innerHTML = cell4.innerHTML + ', ' + document.querySelector('input[name="pulav"]:checked').value;
    // cell4.innerHTML = cell4.innerHTML + ', ' + document.querySelector('input[name="dessert"]:checked').value;
    // cell4.innerHTML = cell4.innerHTML + ', ' + document.querySelector('input[name="ice"]:checked').value;

    cell5.innerHTML = document.getElementById("address").value.toUpperCase();
    cell6.innerHTML = document.getElementById("pin").value;
    cell7.innerHTML = document.getElementById("state").value.toUpperCase();
    cell8.innerHTML = document.getElementById("country").value.toUpperCase();

    clear();
}

function clear() {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("address").value = "";
    document.getElementById("pin").value = "";
    document.getElementById("state").value = "";
    document.getElementById("country").value = "";
    radio();
}

function radio() {
    var radio = document.querySelector('input[type="radio"]:checked');
    radio.checked = false;
    document.getElementById("food1").checked = false;
    document.getElementById("food2").checked = false;
    document.getElementById("food3").checked = false;
    document.getElementById("food4").checked = false;
    document.getElementById("food5").checked = false;

}