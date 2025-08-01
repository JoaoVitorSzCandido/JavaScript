function clicar(){
  let t1 = document.getElementById("turno")
  let res = document.getElementById("res")
  let tr = (t1.value)
  if (tr == "M" || tr == "m"){
    res.innerHTML = "Bom dia!"
  }else if (tr == "V" || tr == "v"){
    res.innerHTML = "Boa tarde!"
  }else if (tr == "N" || tr == "n"){
    res.innerHTML = "Boa noite!"
  }else {
    alert("[ERRO] Letra inválida!")
  }
}