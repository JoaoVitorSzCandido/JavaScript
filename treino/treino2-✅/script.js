function calcular(){

var n1 = [window.document.getElementById("num2"), document.getElementById("num1")]
var res = window.document.getElementById("res")
var a = [Number(n1[1].value), Number(n1[0].value)]

var s = (a[0] + a[1]) /2
if (s >= 7 && s < 10) {
  res.innerHTML = `Sua média é de ${s}, Aprovado!`
}else if (s == 10) {
  res.innerHTML = `Sua média é de ${s}, Aprovado com distinção!`
}else if(s < 7) {
  res.innerHTML = `Sua média é de ${s}, Reprovado!`
}
}