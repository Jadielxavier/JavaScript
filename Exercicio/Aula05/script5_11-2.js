/*
2 x 0 = 0
2 x 1 = 2
2 x 2 = 4
*/
//Criar uma tabuada 
let tabuada, i;
const saida=document.querySelector(".saida");
for(tabuada=0;tabuada<=10;tabuada++){
for(i=0;i<=10;i++){
    saida.innerHTML+=`${tabuada} x ${i} = ${tabuada*i}<br>`;
}
saida.innerHTML+=`<hr>`;
}