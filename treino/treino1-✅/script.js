function clicar() {
var l1 = window.document.getElementById("VouC")
var res = document.getElementById('res')
var A = "A"
var a = "a"
var E = "E"
var e = "e"
var I = "I"
var i = "i"
var O = "O"
var o = "o"
var U = "U"
var u = "u"
var letra = (l1.value)
if (letra == A || letra == a) {
  res.innerHTML = `${letra} é vogal`
}else if (letra == E || letra == e){
  res.innerHTML = `${letra} é vogal`
}else if (letra == I || letra == i){
  res.innerHTML = `${letra} é vogal`
}else if (letra == O || letra == o){
  res.innerHTML = `${letra} é vogal`
}else if (letra == U || letra == u){
  res.innerHTML = `${letra} é vogal`
}else {
  res.innerHTML = `${letra} é cossoante`

  
}
}