const containerForDivs = document.getElementById("sketch_divs");
let oneDiv;
function makeDivs() {
  for (let i = 0; i < 256; i++) {
    oneDiv = document.createElement("div");
    oneDiv.setAttribute("class", "simple_div");
    containerForDivs.appendChild(oneDiv);
  }
}

makeDivs();

function changeColor() {}

let allDivs = containerForDivs.childNodes;

allDivs.forEach((div) =>
  div.addEventListener("click", () => {
    div.style.background = "#000";
  })
);
