/*
Digitar duas notas (av1 e av2)
calcular media das notas av1 e av2
com o valor mostrar verificar se aluno esta aprovado ou reprovado
condição para ser aprovado, media >=6
*/

let av1,av2,media,res;
 const saida= document.querySelector(".saida");
 av1 = parseFloat(prompt("Digite sua nota av1"));
 av2 = parseFloat(prompt("Digite sua nota av2"));

 media = (av1 + av2)/2;

 
if (media => 6 ){
    saida.innerHTML = `aluno esta aprovado ${media}  `;
} 
else (media >= 5 && media < 6 ); {

    saida.innerHTML = `a aluno esta reprovado${media}`;
}
