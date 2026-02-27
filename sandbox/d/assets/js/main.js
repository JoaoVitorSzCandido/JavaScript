const button = document.querySelector("#save");
const listFood = document.querySelector("#foodList");
let itemText = document.querySelector("#item");
let textStorage = [];

button.addEventListener("click", function(){
  let newItem = document.createElement("li");
  let removeItem = document.createElement("button");
  
  let text = itemText.value;
  
  newItem.textContent = text;
  removeItem.textContent = "Remove";
  removeItem.addEventListener("click", function(){
    newItem.remove()}
  )
  
  if (text === ""){
    alert("Empty field")
  }else if (textStorage.includes(text)) {
    alert("Already exists")
  }else {
    
  textStorage.push(text)
  
  newItem.appendChild(removeItem)
  listFood.appendChild(newItem)
  };
  
  console.log(textStorage);
  
}
)