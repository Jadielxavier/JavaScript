let msg;//declaração da variavel
const saida=document.querySelector('.saida');//class="Saida"
const h1=document.querySelector('h1'); //seletor de nome da tag <h1>
const teste=document.querySelector('#teste'); //seletor de id="teste"

msg="Hoje a aula mudou";

saida.innerHTML =`${msg}`; //innerHTML
saida.innerHTML+=`<br>Mesmo!!`;
saida.innerHTML +=`<br>${msg}</h2>`;

h1.innerHTML+="-javascript";//faz a junção Aula + javascript
teste.innerHTML+= `<h2>${msg}</h2>`;







// += sinal de acresentar mais saida