const light = document.querySelector(".light");
const clicks = document.querySelector("#counteron")

let on = false;
let counter = 0

light.addEventListener("click", function() {
  
  if (light.classList.contains("lighton")){
    light.classList.remove("lighton");
    
  }else {
    light.classList.add("lighton")
    
    counter += 1;
    clicks.innerHTML = counter;
    
  }
  }
  )