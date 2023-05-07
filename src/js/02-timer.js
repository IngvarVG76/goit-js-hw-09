import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const input = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button[data-start]');

startBtn.disabled = true;

const timerEl = {
  timer: document.querySelector('.timer'),
  field: document.querySelectorAll('.field'),
  value: document.querySelectorAll('.value'),
  label: document.querySelectorAll('.label'),

  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const convertMs = ms => {
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
};

let timerId;

const updateTimer = () => {
  const { selectedDates } = datePicker;
  const targetDate = new Date(selectedDates[0].getTime());
  const timeRemaining = targetDate - new Date();

  if (timeRemaining <= 0) {
    clearInterval(timerId);
    Notiflix.Notify.success('Param-param-pam - Piw!');
    return;
  }

  const { days, hours, minutes, seconds } = convertMs(timeRemaining);

  timerEl.days.textContent = String(days).padStart(2, '0');
  timerEl.hours.textContent = String(hours).padStart(2, '0');
  timerEl.minutes.textContent = String(minutes).padStart(2, '0');
  timerEl.seconds.textContent = String(seconds).padStart(2, '0');
};

startBtn.addEventListener('click', () => {
  timerId = setInterval(updateTimer, 1000);
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose([selectedDate]) {
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
      datePicker.clear();
      return;
    }
    startBtn.disabled = false;
  },
};

const datePicker = flatpickr(input, options);

updateTimer();
