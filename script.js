const gridContainer = document.getElementById("etchScreen");

//Get grid size
const btn = document.querySelector("#gridSize");
btn.onclick = () => prompt("How many cells across/down?", "16");
let size = 16;

createGrid();

// Create the grid with specified divs
function createGrid() {
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "square div" + i);
    gridContainer.appendChild(div);
  }
  gridContainer.style.gridTemplateColumns =
    "repeat(" + size + ", minmax(0, 1fr))";
}
