function clicar(){
  let n = document.getElementById("nome")
  let s = document.getElementById("senha")
  let nr = (n.value)
  let sr = (s.value)
  if (sr === nr){
    alert("Sua senha não pode ser igual ao nome!")
  }else {
    alert("Login efetuado com sucesso!")
  }
}