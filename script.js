//I want to write a function that will add a row to the grid

let amountOfRows = 1;
let amountOfColumns = 1;
var mouseStatus = false;

function selectColor() {
  var color = document.getElementById("colors").value;
  document.getElementById("main-grid").style.color = color;
}

function cellListeners(cell){
  cell.onclick = function() {
    var color = document.getElementById("colors");
    var valofCol = color.options[color.selectedIndex].value;
    this.style.backgroundColor = valofCol;
  };
  
  cell.addEventListener("mousedown", function() {
        mouseStatus = true;
    });
    
  cell.addEventListener("mouseup", function() {
        mouseStatus = false;
    });
    
  cell.addEventListener("mouseover", function() {
        if(mouseStatus){
          var color = document.getElementById("colors");
          var valofCol = color.options[color.selectedIndex].value;
          this.style.backgroundColor = valofCol;
        }
    });
}

function addRow() {
  let mainGrid = document.getElementById("main-grid");
  let newRow = document.createElement("tr");

  for (let i = 0; i < amountOfColumns; i++) {
    var cell = document.createElement("td");
    
    cellListeners(cell);
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
    
    cellListeners(cell);
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

function fillAll() {
  var color = document.getElementById("colors");
  var valofCol = color.options[color.selectedIndex].value;

  let cells = document.querySelectorAll("td");
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = valofCol;
  }
}

function clearAll() {
  let cells = document.querySelectorAll("td");
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "";
  }
}

function startUp() {
  let cell = document.getElementById("first");
  cellListeners(cell);
}


startUp();
