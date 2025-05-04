const messagesDiv = document.getElementById("messages");
const input = document.getElementById("fanInput");

function sendMessage() {
    const fanMessage = input.value;
    if (!fanMessage.trim()) return;

    addMessage("Você", fanMessage);
    saveMessage("Você", fanMessage);

    const botReply = getBotAnswer(fanMessage);
    setTimeout(() => {
        addMessage("FURIA Bot", botReply);
        saveMessage("FURIA Bot", botReply);
    }, 500);

    input.value = "";
}

function addMessage(sender, text) {
    const msg = document.createElement("div");

    if (sender === "FURIA Bot") {
        msg.classList.add("bot-msg");
      } else if (sender === "Torcida") {
        msg.classList.add("torcida-msg");
      } else {
        msg.classList.add("user-msg");
      }
    

    // msg.classList.add(sender === "FURIA Bot" ? "bot-msg" : "user-msg");

    msg.innerHTML = `<strong>${sender}:</strong> ${text}`;

    messagesDiv.appendChild(msg);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function saveMessage(sender, text) {
    const mensagens = JSON.parse(localStorage.getItem("CHAT FURIA")) || [];
    mensagens.push({ sender, text });
    localStorage.setItem("CHAT FURIA", JSON.stringify(mensagens));
}

function restoreMessages() {
    const mensagens = JSON.parse(localStorage.getItem("FURIA-CHAT")) || [];
    mensagens.forEach(msg => addMessage(msg.sender, msg.text));
}

restoreMessages();

// Simulação de mensagens da torcida
const simulatedMessages = [
    "FURIA amassa hoje!", "KSCERATO monstro!", 
     "Já tô pronto pro jogo",
     "Isso não é um TIME é uma SELEÇÃO!", 
    "Comandos: !proximojogo - Para saber próximo jogo. !ultimojogo - Para saber último jogo. !elenco - Mostra o elenco atual. !noticias - Para saber as últimas notícias. "
];

let msgIndex = 0;
setInterval(() => {
    if (msgIndex < simulatedMessages.length) {
        const text = simulatedMessages[msgIndex++];

        const sender = text.startsWith("Comandos:") ? "FURIA Bot" : "Torcida";

        addMessage(sender, text);
    saveMessage(sender, text);
        
    }
}, 1000);

input.addEventListener("keypress", function(event) { 
    if (event.key === "Enter") {
      event.preventDefault(); // Evita quebra de linha
      sendMessage();
    }
  });
  
