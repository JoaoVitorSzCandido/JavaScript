let p = document.getElementById("p1")
p.style.color = "red"

function clicar(){
  let nm = document.getElementById("txt1")
  let ida = document.getElementById("num1")
  let sal = document.getElementById("sal1")
  let fsex = document.getElementsByName("radsex")
  let rel = document.getElementById("txt2")
  let res = document.getElementById("res")
  let nome = (nm.value)
  let idade = (ida.value)
  let genero = ''
  let salario = (sal.value)
  let estado = (rel.value)
  let rela1 = ''
  if (nm.value.length <= 3 || ida.value.length <= 0){
    alert("Preencha seus dados corretamente")
  }else if (idade >= 150){
    alert("coloque sua idade correta")
  }else if (fsex[0].checked){
    genero = "homem"
    
  }if (fsex[1].checked){
    genero = "mulher"
    
  }if (salario <= 0){
    alert("seu salário não pode ser menor ou igual a zero")
    
  }if (estado == "S" || estado == "s"){
    rela1 = "Solteiro"
  }else if (estado === "C" || estado === "c"){
rela1 = "Casado"
}else if (estado === "V" || estado === "v"){
  rela1 = "Viúvo"
}else if (estado === "D" || estado === "d"){
  rela1 = "Divorciado"
}
res.innerHTML = `Nome: ${nome}
Idade: ${idade}
Sexo ${genero}
Salario: ${salario}
Estado civil: ${rela1}`
  
}