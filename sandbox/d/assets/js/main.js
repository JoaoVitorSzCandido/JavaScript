const button = document.querySelector("#save");
const listFood = document.querySelector("#foodList");
let itemText = document.querySelector("#item");


button.addEventListener("click", function(){
  let newItem = document.createElement("li");
  let removeItem = document.createElement("button");
  
  let text = itemText.value
  
  newItem.textContent = text
  removeItem.textContent = "Remove"
  removeItem.addEventListener("click", function(){
    newItem.remove()}
  )
  
  newItem.appendChild(removeItem)
  listFood.appendChild(newItem)
}
)