
let container = document.querySelector(".container");
let userInputs = document.getElementById("user-inputs");
let sliderValue = document.getElementById("dimensions")
let gridSize = 16;

const colorPicker = document.getElementById("color-picker")
let color2 = colorPicker.value;
colorPicker.addEventListener("input", function() {
  color2 = colorPicker.value;
})


class Square {
  constructor(color) {
    this.color = color;
    this.square = document.createElement("div");
    const square = this.square
    square.style.cssText = `background-color: ${this.color}; height: ${750 / gridSize}px; width: ${750 / gridSize}px; border: .1px solid black;`
    container.appendChild(square)

    square.addEventListener("mouseover", function() {
      square.style.backgroundColor = color2;
    }) 
  }
}

container.style.cssText = "grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto;"


for (let i = 0; i < gridSize; i++) {
  for (let i = 0; i < gridSize; i++) {
    let square = new Square('white')
  }
}
