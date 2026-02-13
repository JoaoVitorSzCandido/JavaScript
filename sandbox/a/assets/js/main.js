const square = document.querySelector('#square')
const nclicks = document.querySelector('#nclicks')
let angle = 0
let click = 0

let colorSpin = square.addEventListener("click", function() {
  square.style.background = "green";
  angle += 25
  square.style.transform = `rotate(${angle}deg)`;
  
  click += 1
  nclicks.innerHTML = click
})