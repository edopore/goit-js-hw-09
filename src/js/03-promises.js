import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startButton = document.querySelector('button');
const valueInputs = document.querySelectorAll('input');

let addDelay = valueInputs[0].valueAsNumber;
console.log(addDelay);

startButton.addEventListener('click', event => {
  event.preventDefault();
  for (let i = 0; i < valueInputs[2].valueAsNumber; i++) {
    let promise = new Promise(createPromise);
    promise.then((i + 1, valueInputs[1].valueAsNumber)).catch();
    addDelay += valueInputs[1].valueAsNumber;
    console.log(addDelay);
  }
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    setTimeout(() => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    }, delay);
  } else {
    // Reject

    setTimeout(() => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay);
  }
}
