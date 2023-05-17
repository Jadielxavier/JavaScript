const saida=document.querySelector('.saida');
//             0          1         2         3 
const nomes=["Lucas", "Daniela","Aderbal","Timóteo"];
//const estudante=["Aderbal",123456789,"TADS",1];
const aluno={
    nome:"Aderbal",
    ra:123456789,
    curso:"TADS",
    semestre:1
};

// saida.innerHTML=nomes[2];//Aderbal
saida.innerHTML=aluno.nome+"<br>";
saida.innerHTML+=aluno.ra+"<br>";
saida.innerHTML+=aluno.curso+"<br>";
saida.innerHTML+=aluno.semestre+"<hr>";
console.log(aluno);//comando de saída e direciona para o console

/*
Desafio:
Criar um objeto presente_natal
com 3 propriedades, sendo uma delas o valor do presente(R$)
Mostrar os dados na página
*/

const presente ={

    nome:"PS5",
    Jogo: "god of war ragnarok",
    valor: 5000,
    tipo:"🎁"
}
saida.innerHTML+=presente.nome+"<br>";
saida.innerHTML+=presente.Jogo+"<br>";
saida.innerHTML+=presente.valor+"<br>";
saida.innerHTML+=presente["tipo"]+"<hr>";
for (let i in presente){
    saida.innerHTML+=`${p}: ${presente[p]}<br>`; 

    }