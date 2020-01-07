//I want to write a function that will add a row to the grid

let amountOfRows = 1;
let amountOfColumns = 1;

function addRow() {

    let mainGrid = document.getElementById("main-grid");
    let newRow = document.createElement("tr");

    for(let i = 0; i < amountOfColumns; i++)
    {
        let cell = document.createElement("td");
        newRow.appendChild(cell);
    }

    mainGrid.appendChild(newRow);
    amountOfRows++;

}

function addColumn() {

    let mainGrid = document.getElementById("main-grid");

    for(let i = 0; i < amountOfRows; i++)
    {
        let row = mainGrid.rows[i];
        let cell = document.createElement("td");
        row.appendChild(cell);
    }

    amountOfColumns++;

}

function removeRow() {

    let mainGrid = document.getElementById("main-grid");
    mainGrid.deleteRow(0);
    amountOfRows--;

}

function removeColumn() {

    let mainGrid = document.getElementById("main-grid");

    for(let i = 0; i < amountOfRows; i++)
    {
        let row = mainGrid.rows[i];
        row.deleteCell(0);
    }

    amountOfColumns--;
    
}
