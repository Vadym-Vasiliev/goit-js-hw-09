//достукались
const refs = {
  dataStart: document.querySelector('[data-start]'),
  dataStop: document.querySelector('[data-stop]'),
  bodyEl: document.body,
};
//зміна для зміни кольору
let colorId = null;
// слухачі
refs.dataStart.addEventListener('click', onRandomHexColor);
refs.dataStop.addEventListener('click', stopRandomHexColor);

//запускає рендомність кольорів
function onRandomHexColor(element) {
  colorId = setInterval(() => {
    const randomColor = getRandomHexColor(element);
    document.body.style.backgroundColor = randomColor;
  }, 1000);

  if (!refs.dataStart) {
    refs.dataStart.removeAttribute('disabled');
  } else {
    refs.dataStart.setAttribute('disabled', true);
  }
}
//зупиняє ремдомність кольорів

function stopRandomHexColor() {
  clearInterval(colorId);

  if (refs.dataStop) {
    refs.dataStart.removeAttribute('disabled');
  }
}

//генерування випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
