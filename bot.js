function getBotAnswer(input) {
    const message = input.toLowerCase();

    if (message.includes("!proximojogo")) {
        return "Próximo jogo: FURIA vs The MongolZ";
    } else if (message.includes("!ultimojogo")) {
        return "Último jogo: FURIA 2 x 0 Apogee - Vitória da FURIA";
    } else if (message.includes("!elenco")) {
        return "Elenco atual: KSCERATO, yuurih, FalleN, Chelo.";
    } else if (message.includes("!noticias")) {
        return "Notícias: FURIA acaba de se classificar para os playoffs do Major!";
    } else {
        const respostasAleatorias = [
            "Vamos FURIA!", "Eu ACREDITO!", "ESSE TIME É GIGANTE!", "Dá pra virar.",
            "GG FURIA!", "Vai pra cima deles", "Pega eles, frita eles, faz PURÊ!!"
        ];
        return respostasAleatorias[Math.floor(Math.random() * respostasAleatorias.length)];
    }
    

}
