function clicar(){
  var n1 = window.document.getElementById("num1")
  var n2 = window.document.getElementById("num2")
  var n3 = window.document.getElementById("num3")
  var res = window.document.getElementById("res")
  if (n1.value.length == 0|| n2.value.length == 0 || n3.value.length == 0){
    alert('[ERRO] Faltam dados!')
}else {
  res.innerHTML = 'contando...'
  
  var inicio = Number(n1.value)
  var fim = Number(n2.value)
  var passos = Number(n3.value)
  if (inicio < fim){
    //contagem crescente 
for (let s = inicio; s <= fim; s += passos){
  
  res.innerHTML += `${s}, `
}}else {
  //contagem regressiva 
  for (let s = inicio; s>=fim; s-= passos){
  }
}
}
}