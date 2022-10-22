// Set constants for screen container and buttons
const gridContainer = document.getElementById("etchScreen");
const sizeBtn = document.querySelector("#gridSize");

// Default grid size of 16:
let size = 16;

// Call the create grid function
createGrid();

// Set button functions
sizeBtn.onclick = () => gridSizeButton();

//Get new grid size
function newGridSize() {
  while (true) {
    size = prompt("How many cells across/down? (max:100)", "16");
    if (size == null) {
      alert("try again");
      return true;
    } else {
      if (size.length <= 0 || isNaN(size) || size < 1 || size > 100) {
        alert("invalid size, enter a number between 0 and 101");
      } else {
        return parseInt(size);
      }
    }
  }
}

function gridSizeButton() {
  newGridSize();
  clearGrid();
  createGrid();
}

//clear an existing grid
function clearGrid() {
  document.getElementById("etchScreen").innerHTML = "";
}

// Create the grid at specified size
function createGrid() {
  for (let i = 0; i < size * size; i++) {
    const pixel = document.createElement("div");
    pixel.setAttribute("class", "pixel");
    gridContainer.appendChild(pixel);
    pixel.addEventListener("mouseover", () => {
      pixel.className += " fill";
    });
  }
  gridContainer.style.gridTemplateColumns =
    "repeat(" + size + ", minmax(0, 1fr))";
}
