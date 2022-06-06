// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

//достукались
const refs = {
  dateTimePicker: document.querySelector('#datetime-picker'),
  dataStart: document.querySelector('[data-start]'),
};

//слухач
// refs.dataStart.addEventListener('click', onDataStart);

//добавляє в інпут  дату і час з бібліотеки
flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
});
