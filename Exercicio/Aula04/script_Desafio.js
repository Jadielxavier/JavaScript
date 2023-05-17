
let av1,av2,media, resultado;

av1 = parseFloat(prompt("Digite a nota av1"));
av2 = parseFloat(prompt("digite a nota av2"));
media = (av1 + av2 )/2;
resultado = (media >= 6) ?"AProvado" : "Reprovado";
document.write(`sua media e ${media} <br> Parabens voce esta! ${resultado}`);





