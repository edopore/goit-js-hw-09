const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttons[0].addEventListener('click', event => {
  intervalId = setInterval(() => {
    body.style.background = getRandomHexColor();
  }, 1000);
});

buttons[1].addEventListener('click', () => {
  clearInterval(intervalId);
});
