import { dark } from '../js/dark.js';

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
const mode = document.querySelectorAll('.timer__block-mode');

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

mode.forEach((element) => {
  element.addEventListener('click', () => {
    if (!(modeCount % 2)) {
      modeRest.style.display = 'flex';
      modeFocus.style.display = 'none';
      rest();
      resetTime(shortRest);
    } else {
      modeRest.style.display = 'none';
      modeFocus.style.display = 'flex';
      removeRest();
      resetTime(focus);
    }
    modeCount++;
  });
});

function setTimeContent(min, sec, val) {
  min.textContent = val.value < 10 ? `0${val.value}` : val.value;
  sec.textContent = '00';
}

function setTime(val) {
  return val.value * msToMin;
}

function rest() {
  arrayElement.forEach((element) => {
    element.classList.add('rest');
  });
}

function removeRest() {
  arrayElement.forEach((element) => {
    element.classList.remove('rest');
  });
}

// Изменяет значение времени в зависимости от значения inputa
focus.addEventListener('input', (event) => {
  min.textContent = event.target.value;
  sec.textContent = '00';
  time = event.target.value * 60000;
});

shortRest.addEventListener('input', (event) => {
  min.textContent = event.target.value;
  sec.textContent = '00';
  time = event.target.value * 60000;
});

//пуск и пауза таймера
button.addEventListener('click', () => {
  if (!(count % 2)) {
    interval = setInterval(changeTime, 1000);
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

//функция изменения времени
function changeTime() {
  let minutes = Math.floor((time / (1000 * 60)) % 60);
  let seconds = Math.floor((time / 1000) % 60);
  time -= 1000;
  timerContent(min, addZero(minutes));
  timerContent(sec, addZero(seconds));
}

const addZero = (value) => {
  return value < 10 ? `0${value}` : value;
};

const timerContent = (value, func) => {
  value.textContent = func;
};

//сброс времени
function resetTime(val) {
  clearInterval(interval);
  setTimeContent(min, sec, val);
  time = setTime(val);
  count = 0;
  returnValues();
}

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
