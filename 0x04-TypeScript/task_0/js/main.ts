interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const stud1: Student = {
    firstName: "toto",
    lastName: "kiko",
    age: 25,
    location: "casa"
}

const stud2: Student = {
    firstName: "popo",
    lastName: "momo",
    age: 19,
    location: "fes"
}


const studentsList: Array<Student> = [stud1, stud2];

const table = document.createElement("table");
const tbody = document.createElement("tbody");
const thead = document.createElement("thead")
const th1 = document.createElement("th");
const th2 = document.createElement("th");

thead.append(th1)
thead.append(th2)
table.append(thead)
th1.innerText = "First Name"
th2.innerText = "Location"
for (let i = 0; i < 2; i++) {
    const row = document.createElement("tr");


    const cell1 = document.createElement("td")
    const cell1Text = document.createTextNode(`${studentsList[i].firstName}`);
    cell1.appendChild(cell1Text);
    row.appendChild(cell1);
    const cell2 = document.createElement("td")
    const cell2Text = document.createTextNode(`${studentsList[i].location}`);
    cell2.appendChild(cell2Text);
    row.appendChild(cell2);

    tbody.appendChild(row);

}
table.appendChild(tbody);
document.body.appendChild(table);
table.setAttribute("border", "1");
