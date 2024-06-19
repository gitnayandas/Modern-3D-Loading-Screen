const loadingTextE1 = document.querySelector(".loading-text");

const loadingMessages = [
    "Loading . . .",
    "Almost there . . .",
    "Just a moment . . .",
    "Preparing . . ."
];

let messageIdx = 0;

function updateLoadingMessage() {
    loadingTextE1.innerText = loadingMessages[messageIdx];
    messageIdx = (messageIdx + 1) % loadingMessages.length;
    setTimeout(updateLoadingMessage, 2000);
}

updateLoadingMessage();