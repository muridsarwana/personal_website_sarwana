const textContainer = document.getElementById("moving1");
const textElements = [
  "title 1"
];
let currentTextIndex = 0;

function changeText() {
  textContainer.innerHTML = textElements[currentTextIndex];
  currentTextIndex = (currentTextIndex + 1) % textElements.length;
}

setInterval(changeText, 1000);