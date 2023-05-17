let i;//declaração de var
const saida=document.querySelector(".saida");//referencia de uma class="saida"
i=10; //var recebe o valor 0 valor inicial
do{
    saida.innerHTML+=i + "<br>";
    i++;
}while (i < 3);
saida.innerHTML+="<hr>";

i=10;
while(i<3){ //condição 
    saida.innerHTML+=1 + "<br>";
    i++;//somar 1
}
