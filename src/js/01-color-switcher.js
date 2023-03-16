const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const startClick = () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
};

btnStart.addEventListener('click', startClick);
