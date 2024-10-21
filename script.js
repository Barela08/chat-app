const socket = io();

const chatBox = document.getElementById('chat-box');
const usernameInput = document.getElementById('username');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send');

sendButton.addEventListener('click', () => {
    const username = usernameInput.value;
    const message = messageInput.value;
    if (username && message) {
        socket.emit('chat message', { username, message });
        messageInput.value = '';
    }
});

socket.on('chat message', (data) => {
    const item = document.createElement('div');
    item.classList.add('message');
    item.textContent = `${data.username}: ${data.message}`;
    chatBox.appendChild(item);
    chatBox.scrollTop = chatBox.scrollHeight;
});
