function sendMessage(senderId, receiverId) {
    const senderInput = document.getElementById(`message${senderId.slice(-1)}`);
    const message = senderInput.value.trim();
    if (message === '') return;

    // 보내는 쪽 message++
    const senderChat = document.getElementById(senderId);
    const senderMessage = document.createElement('li');
    senderMessage.classList.add('text', 'right');
    senderMessage.textContent = message;
    senderChat.appendChild(senderMessage);

    // 받는 쪽 message++
    const receiverChat = document.getElementById(receiverId);
    const receiverMessage = document.createElement('li');
    receiverMessage.classList.add('text', 'left');
    receiverMessage.textContent = message;
    receiverChat.appendChild(receiverMessage);

    // 메시지 입력창 초기화
    senderInput.value = '';
    senderChat.scrollTop = senderChat.scrollHeight;
    receiverChat.scrollTop = receiverChat.scrollHeight;
}
