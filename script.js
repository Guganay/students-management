function addStudent() {

    let name = document.getElementById("name").value;
    let rollno = document.getElementById("rollno").value;
    let dept = document.getElementById("dept").value;

    if (name === "" || rollno === "" || dept === "") {
        alert("Please fill all fields!");
        return;
    }

    let table = document.getElementById("studentList");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = rollno;
    row.insertCell(2).innerHTML = dept;

    let actionCell = row.insertCell(3);

    actionCell.innerHTML =
        '<button class="delete-btn" onclick="deleteStudent(this)">Delete</button>';

    document.getElementById("name").value = "";
    document.getElementById("rollno").value = "";
    document.getElementById("dept").value = "";

    updateCount();
}

function deleteStudent(button) {
    button.parentElement.parentElement.remove();
    updateCount();
}

function updateCount() {
    let count = document.getElementById("studentList").rows.length;
    document.getElementById("count").innerText = count;
}