document.getElementById("chat-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const messageInput = document.getElementById("message-input");
    const message = messageInput.value.trim();

    if (message !== "") {
        addChatBubble(message, "user");

        // TODO: Add API or bot integration here
        // For now, a simple example:
        setTimeout(() => {
            addChatBubble("Hello, I am your support bot. How may I help you?", "bot");
        }, 1000);
    }

    messageInput.value = "";
});

function addChatBubble(message, type) {
    const chatBubble = document.createElement("div");
    chatBubble.classList.add("chat-bubble", type);
    chatBubble.textContent = message;

    const chatBox = document.getElementById("chat-box");
    chatBox.appendChild(chatBubble);
    chatBox.scrollTop = chatBox.scrollHeight;
}
