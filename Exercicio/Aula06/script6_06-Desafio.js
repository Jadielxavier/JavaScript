const saida=document.querySelector('.saida');
const produtos= ["TECLADO", "MOUSE", "MONITOR"];
for (let i = 0; i < 3; i++){
    saida.innerHTML+=`${produtos[i]} <br>`;
}