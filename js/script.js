// import { dark } from '../js/dark.js';

const MS_TO_MIN = 60000;

const body = document.querySelector('body');

const focus = document.querySelector('.popup__element-focus');
const shortRest = document.querySelector('.popup__element-short__rest');
const longRest = document.querySelector('.popup__element-long__rest');

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

const modeShortRest = document.querySelector('.mode__short__rest');
const modeLongRest = document.querySelector('.mode__long__rest');
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
  mode[2],
  toggle,
];

let time = focus.value * MS_TO_MIN;
let count = 0;
let modeCount = 0;
let interval = 0;

// Изменяет значение времени в зависимости от значения inputa
focus.addEventListener('input', (event) => {
  if (modeShortRest.style.display !== 'flex') {
    setTime(min, sec, event.target);
  }
});

shortRest.addEventListener('input', (event) => {
  if (modeShortRest.style.display === 'flex') {
    setTime(min, sec, event.target);
  }
});

//пуск и пауза таймера
button.addEventListener('click', () => {
  startTimer(count);
  count++;
});

function startTimer(count) {
  if (!(count % 2)) {
    interval = setInterval(calcTime, 1000);
    changeButton();
    changeStyleTimer.classList.add('active');
  } else {
    clearInterval(interval);
    returnValues();
  }
}

reset.addEventListener('click', () => {
  if (modeShortRest.style.display === 'flex') {
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
