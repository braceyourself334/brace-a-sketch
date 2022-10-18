const gridContainer = document.getElementById("etchScreen");

let size = 5;

// insert specified divs
for (let i = 0; i < size * size; i++) {
  const div = document.createElement("div");
  div.setAttribute("class", "square div" + i);
  gridContainer.appendChild(div);
}

gridContainer.style.gridTemplateColumns =
  "repeat(" + size + ", minmax(0, 1fr))";
