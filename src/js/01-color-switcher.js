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
refs.dataStop.setAttribute('disabled', true);

//запускає рендомність кольорів
function onRandomHexColor(element) {
  colorId = setInterval(() => {
    const randomColor = getRandomHexColor(element);
    document.body.style.backgroundColor = randomColor;
  }, 1000);

  setRemAttribute(refs.dataStart, refs.dataStop);
}

//зупиняє ремдомність кольорів

function stopRandomHexColor() {
  clearInterval(colorId);

  setRemAttribute(refs.dataStop, refs.dataStart);
}

// для кнопок
function setRemAttribute(btnToDisabled, btnToEnable) {
  btnToDisabled.setAttribute('disabled', true);
  btnToEnable.removeAttribute('disabled');
}

//генерування випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
