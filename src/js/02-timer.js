// Descrito en la documentación
import flatpickr from 'flatpickr';
// Importación adicional de estilos
import 'flatpickr/dist/flatpickr.min.css';

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
    alert('Please select a date in the future');
    startButton.setAttribute('disabled', '');
  }
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
    timePrint[0].innerText =
      days + 1 < 10 ? '0' + (days + 1).toString() : (days + 1).toString();
    timePrint[1].innerText =
      hours + 1 < 10 ? '0' + (hours + 1).toString() : (hours + 1).toString();
    timePrint[2].innerText =
      minutes + 1 < 10
        ? '0' + (minutes + 1).toString()
        : (minutes + 1).toString();
    timePrint[3].innerText =
      seconds + 1 < 10
        ? '0' + (seconds + 1).toString()
        : (seconds + 1).toString();
  }, 1000);
});
