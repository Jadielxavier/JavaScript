let destino,msg;
const saida=document.querySelector(".saida");
destino=prompt("Digite seu destino: ");

msg="";//alteração
switch (destino) {
  case "São Paulo":
    msg+="Seja bem vindo a cidade que nunca para!";
//   break;
  case "New York":
    msg+="Seja bem vindo a Big Apple!";
  break;
  case "Dubai":
    msg+="Seja bem vindo a Dubai!";
  break;
  default:
    msg+="Não encontramos seu destino!";
}
saida.innerHTML=msg;

/* swhitch case -> faz a comparação de igualdade

if  -> pode utilizar qualquer operador 
*/

