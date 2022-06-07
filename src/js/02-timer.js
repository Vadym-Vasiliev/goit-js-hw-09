// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

//достукались
const refs = {
  dateTimePicker: document.querySelector('#datetime-picker'),
  dataStart: document.querySelector('[data-start]'),
  timer: document.querySelector('.timer'),
  dataDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
};

//слухачi
refs.dataStart.addEventListener('click', onDataStart);
refs.dataStart.setAttribute('disabled', true);

//зміні
let dataId = null;
let interval = null;

//добавляє в інпут  дату і час з бібліотеки
flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    dataId = selectedDates[0];
    timeTimer();
  },
});

//дає дані для запуску
function timeTimer() {
  const ms = dataId - new Date();
  if (ms >= 0) {
    if (!interval) {
      refs.dataStart.removeAttribute('disabled');
    }
    const { days, hours, minutes, seconds } = convertMs(ms);
    refs.dataDays.textContent = days;
    refs.dataHours.textContent = hours;
    refs.dataMinutes.textContent = minutes;
    refs.dataSeconds.textContent = seconds;
  } else {
    if (interval !== null) {
      clearInterval(interval);
      interval = null;
    } else {
      Notify.failure('Please choose a date in the future');
    }
    refs.dataStart.setAttribute('disabled', true);
  }
}

//запускає
function onDataStart() {
  interval = setInterval(timeTimer, 1000);
  refs.dataStart.setAttribute('disabled', true);
}

//convert ms
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
