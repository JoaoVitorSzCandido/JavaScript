
let valoradc = []
function valorexiste(valor){
    for (let s = 0; s < valoradc.length; s++){
      if (valoradc[s] === valor){
        return true
      }
    }
    return false
  }
  
  let res = [document.getElementById("res"), document.getElementById("res2"), document.getElementById("res3"), document.getElementById("res4"), document.getElementById("res5")]
  
function clicar(){
  let tudo = [document.getElementById("num1"),  document.getElementById("seltab")]
  
  
  
let numero = Number(tudo[0].value)

  if (numero <= 0)
  {
    alert("Insira algum número!")
    return
  }if (numero > 100)
  {
    alert("O número só pode ser de 1 a 100")
    return 
  }
  if (valorexiste(numero)){
    alert("ja foi pai")
    return
  }
  
  valoradc.push(numero)
  valoradc.sort((a, b) => a + b)
  let opcao = document.createElement("option")
  opcao.value = "sim"
  opcao.textContent = (`valor ${numero}`)
  tudo[1].appendChild(opcao)
  res[0].innerHTML = ''
  res[1].innerHTML = ''
  res[2].innerHTML = ''
  res[3].innerHTML = ''
  res[4].innerHTML = ''
  tudo[0].value = ''
  tudo[0].focus()
  
}
  
  function encontrarMaior(){
    
    if (valoradc.length === 0)
      
      return null;
    let ma = valoradc[0]
    
    for (let i = 1; i < valoradc.length; i++){
      
      if (valoradc[i] > ma){
        ma = valoradc[i]
      }
    }
    return ma
  }

function encontrarMenor(){
  
  if (valoradc.length === 0)return null;
  
  let me = valoradc[0]
  
  for (let m = 0; m <= valoradc.length; m++){
    
    if (valoradc[m] < me ){
      me = valoradc[m]
    }
  } return me
}
function clicar2(){
let soma = 0
for (let so = 0; so < valoradc.length; so++){
  
  soma += valoradc[so]
}
let media = soma/valoradc.length
let totaln = valoradc.length
let maior = encontrarMaior()
let menor = encontrarMenor()

  res[0].innerHTML = `O maior número é ${maior}.`
  res[1].innerHTML = `O total das opções é ${totaln}.`
  res[2].innerHTML = `O menor número é ${menor}.`
  res[3].innerHTML = `A soma de todos números é ${soma}.`
  res[4].innerHTML = `A média de todos os números é ${media}.`
}
//num1 é tudo[0] e seltab é tudo