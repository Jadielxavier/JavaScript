
let i;
const saida=document.querySelector(".saida");
i=0; //valor inicial
while (i < 5) {//condição
    saida.innerHTML+=i + " <br>";
    i++;//contador
}
saida.innerHTML+="<hr>"


/*  /*
i   i < 5   saída contador: i++
0   V       0       1
1   V       1       2
2   V       2       3
3   V       3       4
4   V       4       5
5   F
*/
/*
Desafio1:
Criar um looping para mostra os valores
9 10 11 12
*/


i=9;//valor inicial 
while (i < 13) {//condição
    saida.innerHTML+=i + " ";
    i++;//contador
}
saida.innerHTML+="<hr>";  


/*Desafio 2
criar um looping para mostrar os valores
4 3 2 1 0
*/

i=4;//valor inicial 
while (i >= 0) {//condição
    saida.innerHTML+=i + " ";
    i--;//contador
}
saida.innerHTML+="<hr>";  

/*
Criar um looping para mostra os valores
0 2 4 6 8 10
*/

i=0;//valor inicial 
while (i < 11) {//condição
    saida.innerHTML+=i + " ";
    i+=2;//contador -> avança em 2 em 2
}
saida.innerHTML+="<hr>";  




