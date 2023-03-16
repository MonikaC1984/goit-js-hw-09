const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function colorSwitch() {
  body.style.backgroundColor = getRandomHexColor();
}

btnStart.addEventListener('click', () => {
  timerId = setInterval(() => {
    console.log('to jest zmiana koloru:', colorSwitch);
  }, 1000);
});

btnStop.addEventListener('click', () => {
  clearInterval(timerId);
});
