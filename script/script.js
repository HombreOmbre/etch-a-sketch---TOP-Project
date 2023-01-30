const containerForDivs = document.getElementById("sketch_divs");
const colorPicker = document.querySelector("#colorpicker");
const sizeSlider = document.querySelector("#size");
const sizeSliderLabel = document.querySelector(".label");
const optionsButtons = document.querySelectorAll(".options button");
let defaultColor = "#000000";
let rubberColor = "#ffffff";
let paintingColor = defaultColor;
let allDivs = containerForDivs.childNodes;
let isDrawing = false;
let defaultSize = "3";
let boxWidth;
let boxHeight;
let numOfBox;
window.onload = makeDivs(defaultSize);

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
    oneDiv.classList.add("simple_div");
    oneDiv.style.cssText = `width: ${boxWidth}px; height: ${boxHeight}px`;
    containerForDivs.appendChild(oneDiv);
  }
  allDivs.forEach((div) => div.addEventListener("mousedown", changeColor));
  allDivs.forEach((div) => div.addEventListener("mousemove", changeColor));
  allDivs.forEach((div) => div.addEventListener("mouseup", changeColor));
}

function changeColor(e) {
  switch (e.type) {
    case "mousedown":
      isDrawing = true;
      break;
    case "mouseup":
      isDrawing = false;
      break;
  }

  if (isDrawing) {
    this.style.background = `${paintingColor}`;
  }
}

function changeSizeOfBox(e) {
  switch (e.target.value) {
    case "1":
      defaultSize = "1";
      containerForDivs.innerHTML = "";
      makeDivs(defaultSize);
      break;
    case "2":
      defaultSize = "2";
      containerForDivs.innerHTML = "";
      makeDivs(defaultSize);
      break;
    case "3":
      defaultSize = "3";
      containerForDivs.innerHTML = "";
      makeDivs(defaultSize);
      break;
    case "4":
      defaultSize = "4";
      containerForDivs.innerHTML = "";
      makeDivs(defaultSize);
      break;
    case "5":
      defaultSize = "5";
      containerForDivs.innerHTML = "";
      makeDivs(defaultSize);
      break;
  }
}

function changeLabel(e) {
  switch (e.target.value) {
    case "1":
      sizeSliderLabel.textContent = "4 x 4";
      break;
    case "2":
      sizeSliderLabel.textContent = "8 x 8";
      break;
    case "3":
      sizeSliderLabel.textContent = "16 x 16";
      break;
    case "4":
      sizeSliderLabel.textContent = "32 x 32";
      break;
    case "5":
      sizeSliderLabel.textContent = "64 x 64";
      break;
  }
}

function buttonsHandler(e) {
  console.log(this.dataset);
  switch (this.dataset.option) {
    case "color":
      optionsButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
      paintingColor = defaultColor;
      colorPicker.value = defaultColor;
      break;
    case "rubber":
      optionsButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
      paintingColor = rubberColor;
      colorPicker.value = rubberColor;
      break;
    case "clear":
      optionsButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
      colorPicker.value = rubberColor;
      allDivs.forEach((div) => (div.style.background = "#ffffff"));
      break;
  }
}

sizeSlider.addEventListener("change", changeSizeOfBox);
colorPicker.addEventListener("change", (e) => {
  paintingColor = e.target.value;
  optionsButtons.forEach((btn) => btn.classList.remove("active"));
  optionsButtons[0].classList.add("active");
});
sizeSlider.addEventListener("mousemove", changeLabel);
optionsButtons.forEach((btn) => btn.addEventListener("click", buttonsHandler));
