const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');

let intervalId = null;

buttons[1].setAttribute('disabled', '');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttons[0].addEventListener('click', () => {
  console.log(buttons[0].setAttribute('disabled', ''));
  console.log(buttons[1].removeAttribute('disabled'));
  intervalId = setInterval(() => {
    body.style.background = getRandomHexColor();
  }, 1000);
});

buttons[1].addEventListener('click', () => {
  console.log(buttons[1].setAttribute('disabled', ''));
  console.log(buttons[0].removeAttribute('disabled'));
  clearInterval(intervalId);
});
