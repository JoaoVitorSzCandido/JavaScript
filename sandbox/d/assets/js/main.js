function scope(){

const button = document.querySelector("#save");
const listFood = document.querySelector("#foodList");
const clear = document.querySelector("#clear")
let itemText = document.querySelector("#item");
let textStorage = [];

// Listener "button"

button.addEventListener("click", function(){
  
  // Cria um elemento "li" no html
  let newItem = document.createElement("li");
  
  // Cria um botão
  let removeItem = document.createElement("button");
  
  // Pega o texto do input
  let text = itemText.value;
  
  // Faz o "li" ter o texto do input
  newItem.textContent = text;
  removeItem.textContent = "Remove";
  
  // Listener pra remover um "li"
  removeItem.addEventListener("click", function(){
    newItem.remove()}
  );
  
  // Verificação, pra evitar campo vazio ou repetido
  if (text === ""){
    alert("Empty field")
  }else if (textStorage.includes(text)) {
    alert("Already exists")
  }else {
  
  // Joga o texto do input em uma array, pra armazenar
  textStorage.push(text);
  
  // "Víncula" o botão de remover diretamente no "li"
  newItem.appendChild(removeItem);
  
  // Faz o "li" ir pro "ul"
  listFood.appendChild(newItem);
  }
  
  console.log(textStorage);
  
  }
  );
  
  // Listener "clear"
  clear.addEventListener("click", function() {
  listFood.innerHTML = "Food list"
  textStorage = []
  })
};

scope()