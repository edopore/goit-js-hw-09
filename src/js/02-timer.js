import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    checkDates(selectedDates[0].getTime());
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function checkDates(date) {
  if (date > Date.now()) {
    startButton.removeAttribute('disabled');
  } else {
    Notify.failure('Please select a date in the future');
    startButton.setAttribute('disabled', '');
  }
}

function addLeadingZero(value) {
  if (value < 10) {
    return value.toString().padStart(2, '0');
  }
  return value.toString();
}

flatpickr('#datetime-picker', options);

const startButton = document.querySelector('button');
const dateInput = document.querySelector('input');
const timePrint = document.getElementsByClassName('value');

startButton.setAttribute('disabled', '');

startButton.addEventListener('click', () => {
  console.log('Click on start button');
  let setTimeCounter = new Date(dateInput.value).getTime();
  console.log('Selected date in ms: ', setTimeCounter);

  setInterval(() => {
    let newTime = setTimeCounter - Date.now();
    let { days, hours, minutes, seconds } = convertMs(newTime);

    timePrint[0].innerText = addLeadingZero(days);
    timePrint[1].innerText = addLeadingZero(hours);
    timePrint[2].innerText = addLeadingZero(minutes);
    timePrint[3].innerText = addLeadingZero(seconds);
  }, 1000);
});
