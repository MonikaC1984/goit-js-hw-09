const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStart.addEventListener('click', () => {
  const colorSwitch = () => {
    body.style.backgroundColor = getRandomHexColor();
  };
  timerId = setInterval(() => {
    console.log('to jest zmiana koloru:', colorSwitch());
  }, 1000);
  btnStop.disabled = false;
  btnStart.disabled = true;
});

btnStop.addEventListener('click', () => {
  console.log('stop:', clearInterval(timerId));
  btnStart.disabled = false;
  btnStop.disabled = true;
});
