const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function colorSwitch() {
  body.style.backgroundColor = getRandomHexColor();
}

function startClick() {
  setTimeout(() => {
    colorSwitch;
  }, 1000);
}

btnStart.addEventListener('click', startClick);
//btnStop.addEventListener('click', stopClick);
