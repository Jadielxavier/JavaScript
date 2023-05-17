const saida=document.querySelector('.saida');

const presente ={

    video_game:"PS5",
    Jogo: "god of war ragnarok",
    valor: 5000
};
saida.innerHTML=presente.video_game+"<br>";
saida.innerHTML+=presente.Jogo+"<br>";
saida.innerHTML+=presente.valor+"<br>";
console.log(presente);