let isLeft = true;

function sendMessage() {
    const senderInput = document.getElementById('message');
    const message = senderInput.value.trim();
    if (message === '') return;

    const chat = document.getElementById('chat1');
    const chatMessage = document.createElement('li');
    chatMessage.classList.add('text', isLeft ? 'left_text' : 'right_text');
    chatMessage.textContent = message;
    chat.appendChild(chatMessage);

    senderInput.value = '';
    chat.scrollTop = chat.scrollHeight;

    isLeft = !isLeft;
}