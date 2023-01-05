// import { dark } from '../js/dark.js';

const msToMin = 60000;

const body = document.querySelector('body');

const focus = document.querySelector('.popup__element-focus');
const shortRest = document.querySelector('.popup__element-short__rest');

const button = document.querySelector('.timer__controller__button');
const reset = document.querySelector('.timer__controller__reset');
const settings = document.querySelector('.timer__controller__settings');

const min = document.querySelector('.timer-pomodoro__minute');
const sec = document.querySelector('.timer-pomodoro__second');

const imgButton = document.querySelector('.img__button');

const changeStyleTimer = document.querySelector('.timer-pomodoro');

const toggle = document.querySelector('.popup__toggle');

const autorization = document.querySelector('.autorization');
const title = document.querySelector('.title');

const modeRest = document.querySelector('.mode__rest');
const modeFocus = document.querySelector('.mode__focus');

const popup_content = document.querySelector('.popup__content');

let arrayElement = [
  button,
  reset,
  settings,
  popup_content,
  body,
  autorization,
  title,
  mode[0],
  mode[1],
  toggle,
];

let time = focus.value * msToMin;
let count = 0;
let modeCount = 0;
let interval = 0;

// Изменяет значение времени в зависимости от значения inputa
focus.addEventListener('input', (event) => {
  if (modeRest.style.display !== 'flex') {
    min.textContent = event.target.value;
    sec.textContent = '00';
    time = event.target.value * 60000;
  }
});

shortRest.addEventListener('input', (event) => {
  if (modeRest.style.display === 'flex') {
    min.textContent = event.target.value;
    sec.textContent = '00';
    time = event.target.value * 60000;
  }
});

//пуск и пауза таймера
button.addEventListener('click', () => {
  if (!(count % 2)) {
    interval = setInterval(calcTime, 1000);
    changeButton();
    changeStyleTimer.classList.add('active');
  } else {
    clearInterval(interval);
    returnValues();
  }
  count++;
});

reset.addEventListener('click', () => {
  if (modeRest.style.display === 'flex') {
    resetTime(shortRest);
  } else {
    resetTime(focus);
  }
});

//popup

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  dark(arrayElement);
  if (changeStyleTimer.classList.contains('active')) {
    changeButton();
  } else {
    returnValues();
  }
});

//открытие настроек

const popup = document.querySelector('.popup');
const close = document.querySelector('.popup__close');

settings.addEventListener('click', () => {
  popup.classList.add('open');
});

close.addEventListener('click', () => {
  popup.classList.remove('open');
});

//функция, которая возвращает начальные стили и значения
function returnValues() {
  if (toggle.classList.contains('active')) {
    imgButton.src = 'img/controller/dark theme/play-fill-white.svg';
  } else {
    imgButton.src = 'img/controller/ph_play-fill.svg';
  }
  changeStyleTimer.classList.remove('active');
}

function changeButton() {
  if (toggle.classList.contains('active')) {
    imgButton.src = 'img/controller/dark theme/pause-fill-white.svg';
  } else {
    imgButton.src = 'img/controller/ph_pause-fill.svg';
  }
}
