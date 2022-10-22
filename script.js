const gridContainer = document.getElementById("etchScreen");
let size = 16;
createGrid();

//Get new grid size
function newGridSize() {
  size = prompt("How many cells across/down?", "16");
  clearGrid();
  createGrid();
}
const sizeBtn = document.querySelector("#gridSize");
sizeBtn.onclick = () => newGridSize();

//clear an existing grid
function clearGrid() {
  document.getElementById("etchScreen").innerHTML = "";
}

// Create the grid with specified divs
function createGrid() {
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "square");
    gridContainer.appendChild(div);
    div.addEventListener("mouseover", () => {
      div.className += " fill";
    });
  }
  gridContainer.style.gridTemplateColumns =
    "repeat(" + size + ", minmax(0, 1fr))";
}

// Create a 'hover' effect on the grid
// const cells = document.querySelectorAll("square");
// cells.forEach((cell) =>
//   cell.addEventListener("mouseenter", function (e) {
//     cells.classList.add("black-cell");
//   })
// );
