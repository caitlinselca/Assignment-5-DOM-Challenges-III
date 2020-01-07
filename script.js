let amountOfRows = 1;
let amountOfColumns = 1;

var color = document.getElementById("colors").value;


//selects specific color from drop-down box

function selectColor() {
  document.getElementById("main-grid").style.color = color;
}

//add rows to the grid

function addRow() {
  let mainGrid = document.getElementById("main-grid");
  let newRow = document.createElement("tr");

  for (let i = 0; i < amountOfColumns; i++) {
    let cell = document.createElement("td");
    cell.onclick = function() {
      var color = document.getElementById("colors");
      var valofCol = color.options[color.selectedIndex].value;
      this.style.backgroundColor = valofCol;
    };
    newRow.appendChild(cell);
  }

  mainGrid.appendChild(newRow);
  amountOfRows++;
}

//add columns to the grid

function addColumn() {
  let mainGrid = document.getElementById("main-grid");

  for (let i = 0; i < amountOfRows; i++) {
    let row = mainGrid.rows[i];
    let cell = document.createElement("td");
    cell.onclick = function() {
      var color = document.getElementById("colors");
      var valofCol = color.options[color.selectedIndex].value;
      this.style.backgroundColor = valofCol;
    };
    row.appendChild(cell);
  }

  amountOfColumns++;
}

//removes rows from the grid

function removeRow() {
  if (amountOfRows === 0) {
    return;
  }

  let mainGrid = document.getElementById("main-grid");
  mainGrid.deleteRow(0);
  amountOfRows--;
}

//removes columns from the grid

function removeColumn() {
  if (amountOfColumns === 0) {
    return;
  }

  let mainGrid = document.getElementById("main-grid");

  for (let i = 0; i < amountOfRows; i++) {
    let row = mainGrid.rows[i];
    row.deleteCell(0);
  }

  amountOfColumns--;
}

//fill all uncolored cells with the currently selected color

function fillUncolored() {
  var color = document.getElementById("colors");
  var valofCol = color.options[color.selectedIndex].value;

  let cells = document.querySelectorAll("td");
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].style.backgroundColor == "") {
      cells[i].style.backgroundColor = valofCol;
    }
  }
}

//fill all cells with the currently selected color

function fillAll() {
  var color = document.getElementById("colors");
  var valofCol = color.options[color.selectedIndex].value;

  let cells = document.querySelectorAll("td");
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = valofCol;
  }
}

//clear all cells/restore all cells to their original/initial color

function clearAll() {
  let cells = document.querySelectorAll("td");
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "";
  }
}