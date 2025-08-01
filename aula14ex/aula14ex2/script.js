function clicar() {
  
  let num = document.getElementById('txtn')
  let tab = document.getElementById("seltab")
  
  if (num.value.length == 0){
    alert('[ERRO] Insira um número ')
  }else {
  let n1 = Number(num.value)
  let c = 1
  tab.innerHTML = ''
  
while (c <= 10) {
    let item = document.createElement('option')
    item.text = `${n1} x ${c} = ${n1*c}`
   tab.appendChild(item)
    c++
  }
}
}