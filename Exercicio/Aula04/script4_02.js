let a,b;
a=prompt("Digite um número");//Prompt caixa de entrada
a=parseInt(a);//convert para numero inteiro
b=parseInt(prompt("Digite outro número"));
document.write (` soma: ${(a+b)} <br>`);//soma
document.write ("subtração:"+ (a-b)+"<br>");//string ajunta
document.write (`A multiplicação de ${a} por ${b} vale ${(a*b)}<br>`);
document.write (`A divisão de ${a} por ${b} vale ${(a/b)}<br>`);
document.write (` Resto de divisão de ${a} por ${b} vale ${(a%b)}<br>`);

/*
Completar o codigo com os operadores que esta faltando
/ divisão
% modulo(resto de divisao)
**potencia
*/


