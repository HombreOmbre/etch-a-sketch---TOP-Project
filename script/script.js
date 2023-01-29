const containerForDivs = document.getElementById("sketch_divs");
const colorPicker = document.querySelector("#colorpicker");
let defaultColor = "#000000";
const sizeSlider = document.querySelector("#size");
const sizeSliderLabel = document.querySelector(".label");
let defaultSize = "3";
let boxWidth;
let boxHeight;
let numOfBox;
let allDivs = containerForDivs.childNodes;
let isDrawing = false;

function makeDivs(size) {
  switch (size) {
    case "1":
      numOfBox = 4 ** 2;
      boxWidth = "80";
      boxHeight = "80";
      break;
    case "2":
      numOfBox = 8 ** 2;
      boxWidth = "40";
      boxHeight = "40";
      break;
    case "3":
      numOfBox = 16 ** 2;
      boxWidth = "20";
      boxHeight = "20";
      break;
    case "4":
      numOfBox = 32 ** 2;
      boxWidth = "10";
      boxHeight = "10";
      break;
    case "5":
      numOfBox = 64 ** 2;
      boxWidth = "5";
      boxHeight = "5";
      break;
  }

  for (let i = 0; i < numOfBox; i++) {
    let oneDiv = document.createElement("div");
    oneDiv.setAttribute("class", "simple_div");
    oneDiv.style.cssText = `width: ${boxWidth}px; height: ${boxHeight}px`;
    containerForDivs.appendChild(oneDiv);
  }
}

window.onload = makeDivs(defaultSize);

function changeColor(e) {
  console.log(isDrawing);
  switch (e.type) {
    case "mousedown":
      isDrawing = true;
      break;
    case "mouseup":
      isDrawing = false;
      break;
    default:
      isDrawing = false;
  }

  if (isDrawing) {
    this.style.background = `${defaultColor}`;
  }
}

function changeSizeOfBox(e) {
  if (e.target.value === "1") {
    sizeSliderLabel.textContent = "4x4";
    defaultSize = "1";
    console.log(defaultSize);
    containerForDivs.innerHTML = "";
    allDivs = "";
    makeDivs(defaultSize);
  } else if (e.target.value === "2") {
    defaultSize = "2";
    sizeSliderLabel.textContent = "8x8";
    containerForDivs.innerHTML = "";
    makeDivs(defaultSize);
  } else if (e.target.value === "3") {
    defaultSize = "3";
    sizeSliderLabel.textContent = "16x16";
    containerForDivs.innerHTML = "";
    makeDivs(defaultSize);
  } else if (e.target.value === "4") {
    defaultSize = "4";
    sizeSliderLabel.textContent = "32x32";
    containerForDivs.innerHTML = "";
    makeDivs(defaultSize);
  } else if (e.target.value === "5") {
    defaultSize = "5";
    sizeSliderLabel.textContent = "64x64";
    containerForDivs.innerHTML = "";
    makeDivs(defaultSize);
  }
}

allDivs.forEach((div) => div.addEventListener("mousedown", changeColor));
allDivs.forEach((div) => div.addEventListener("mousemove", changeColor));
allDivs.forEach((div) => div.addEventListener("mouseup", changeColor));
colorPicker.addEventListener("change", (e) => {
  defaultColor = e.target.value;
});
sizeSlider.addEventListener("change", changeSizeOfBox);
sizeSlider.addEventListener("mousemove", changeSizeOfBox);
