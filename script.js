//I want to write a function that will add a row to the grid

let amountOfRows = 0;
let amountOfColumns = 0;

function selectColor() {
  var color = document.getElementById("colors").value;
  document.getElementById("main-grid").style.color = color;
}

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

function removeRow() {
  if (amountOfRows === 0) {
    return;
  }

  let mainGrid = document.getElementById("main-grid");
  mainGrid.deleteRow(0);
  amountOfRows--;
}

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
