function clicar() {
  let l1 = document.getElementById("txt1").value.toUpperCase();
  let l2 = document.getElementById("txt2").value.toUpperCase();
  let passos = Number(document.getElementById("num3").value)
  let res = document.getElementById("res")
  
  //if (l1.value.length == "" || l2.value.length == "" || pa.value.length == ""){
    //alert(`[ERRO] Faltam dados.`)
  /*}else if (l1.value >= 0 || l2.value >= 0){
    alert("[ERRO] Insira letras.")
  }*/
    
  const l1n1 = l1.charCodeAt(0) - 64;
  const l2n2 = l1.charCodeAt(0) - 64;
  
    
    for (let s = l1n1; s <= l2n2;s += passos){
        
        let letra = String.fromCharCode(s + 64)
        res.innerHTML += `${letra}`
        }
      }


function isLetter(str){
         return str.length === 1 && str.match(/[A-Z]/i);
}
window.onload = generateLetters