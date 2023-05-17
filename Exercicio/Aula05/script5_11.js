/*
Instrução FOR (alinhada)
*/

let i,j, k;
const saida=document.querySelector(".saida");
for (i=0; i<3; i++) { //looping externo hora
 for (j=0; j<4; j++) {//looping interno minuto
    for (k=0; k<2; k++){
        saida.innerHTML+=`${i} ${j} ${k}<br>`;

    }
  
 }
}