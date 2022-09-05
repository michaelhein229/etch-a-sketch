let squareList = [];
/* Create a Square object with color, and background color
   and append it to its container also add an EventListener
   to change its background color on hover                */
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
      
      squareList.push(this.square);
    }
  }


let container = document.querySelector(".container");
let slider = document.getElementById("dimensions");
let sliderValue = document.getElementById("number");
let gridSize = 16;
slider.value = gridSize;
renderGrid(gridSize);


slider.addEventListener("input", function() {
  gridSize = slider.value;
  sliderValue.innerText = gridSize;
  renderGrid(gridSize);
})


const colorPicker = document.getElementById("color-picker")
let color2 = colorPicker.value;
colorPicker.addEventListener("input", function() {
  color2 = colorPicker.value;
})



function renderGrid(gridSize) {
  container.innerHTML = "";
  container.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr`;
for (let i = 0; i < gridSize; i++) {
  for (let i = 0; i < gridSize; i++) {
    let square = new Square('white')
    }
  }
}


//Button functions

function erase() {
  console.log("cleared!")
  renderGrid(gridSize);
  
}

function clearSquares() {
  console.log("cleared!")
  renderGrid(gridSize);
}

function fill() {
  squareList.forEach(function(square){
    square.style.backgroundColor = color2;
  })
}