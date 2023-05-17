let a,b;
 const saida=document.querySelector(".saida"); // querySelector, buscou  quem tem a class="saida"
a = 5;
b = "5";
if (a == b) {
  saida.innerHTML=`a = ${a}, b = ${b}<br>`; //innerhtml permite escrever a saida no html
  saida.innerHTML+=`A variável a é igual a variável b`;  
}
