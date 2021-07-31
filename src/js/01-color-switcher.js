// Refs:

const Refs = {
    body: document.querySelector('body'),
    startButton: document.querySelector('button[data-start]'),
    stopButton: document.querySelector('button[data-stop]'),
}

// script:

Refs.startButton.addEventListener('click', onStartClick);
Refs.stopButton.addEventListener('click', onStopClick);

let interval;

buttonDisable(Refs.stopButton);

function onStartClick() {
    buttonDisable(Refs.startButton);
    buttonEnable(Refs.stopButton);
    interval = setInterval(() => {
        Refs.body.style.backgroundColor = getRandomHexColor();
        console.log('1');
        }, 1000);
}



function onStopClick() {
    buttonEnable(Refs.startButton);
    buttonDisable(Refs.stopButton);
    clearInterval(interval);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function buttonDisable(button) {
    button.disabled = true;
}
function buttonEnable(button) {
    button.disabled = false;
}