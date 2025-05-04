# FURIA-WEB-CHAT
CHALLENGE #1 - FURIA Conversational Experience - Simulated Web-Chat developed in HTML, CSS and JS made for fans of the FURIA Esports CS team. The chat contains several ways for the user to interact with a bot through pre-programmed commands.

# FURIA Fan Chat

Simulador de chat entre fãs e o FURIA Bot, feito com HTML, CSS e JavaScript puro.

---

##  Objetivo

Criar uma experiência conversacional para fãs da FURIA com:

- Simulação de torcida em tempo real
- Comandos interativos com o FURIA Bot
- Interface responsiva e leve
- Armazenamento local de mensagens com `localStorage`

---

## 📁 Estrutura de Arquivos

/furia-chat/
├── index.html # Estrutura da interface
├── style.css # Estilo visual (cores, fontes, etc.)
├── main.js # Lógica do chat, bot e mensagens
├── /fonts/ # Fonte personalizada (Gameplay.ttf)
│ └── Gameplay.ttf

---

##  Como Rodar

1. Clone este repositório ou baixe os arquivos.
2. Abra `index.html` em um navegador (ou use o Live Server no VS Code).
3. O chat estará ativo e simulando interações.

---

## Funcionalidades

- 💬 Mensagens da torcida são simuladas a cada 10 segundos.
- 🤖 Comandos reconhecidos pelo FURIA Bot:

!proximojogo → mostra o próximo jogo
!ultimajogo → mostra o último resultado
!elenco → mostra o elenco atual
!noticias → exibe manchetes


-  O histórico de mensagens é salvo automaticamente com `localStorage`.
-  Suporte a tecla `Enter` para enviar mensagens.

---

##  Exemplo de Fluxo

Usuário digita:
!elenco

Bot responde:
FURIA Bot: Elenco: KSCERATO, yuurih, arT, chelo, saffee.


---

## 🎨 Visual e Estilo

- Tipografia com a fonte personalizada **Gameplay.ttf**.
- Estilos distintos para mensagens do FURIA Bot, da torcida e do usuário.
- Layout pensado para lembrar chats de times ou lives de e-sports .


---

## 📌 Melhorias Futuras

- Integração real com bot (Manychat, Telegram ou WhatsApp)
- Animações e som de torcida


---

## 🦁 Sobre a FURIA

Projeto fictício desenvolvido como desafio técnico para representar a paixão de torcedores pela equipe FURIA Esports no cenário de CS:GO.

---


