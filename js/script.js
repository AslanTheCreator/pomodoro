const body = document.querySelector('body');

const focus = document.querySelector('.popup__element-focus');

const button = document.querySelector('.timer__controller__button');
const reset = document.querySelector('.timer__controller__reset');
const settings = document.querySelector('.timer__controller__settings');

const min = document.querySelector('.timer-pomodoro__minute');
const sec = document.querySelector('.timer-pomodoro__second');

const imgButton = document.querySelector('.img__button');

const changeStyleTimer = document.querySelector('.timer-pomodoro');

const toggle = document.querySelector('.popup__toggle');

let time = focus.value * 60000;
let count = 0;
let interval = 0;

// Изменяет значение времени в зависимости от значения inputa
focus.addEventListener('input', (event) => {
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

reset.addEventListener('click', resetTime);

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
function resetTime() {
  clearInterval(interval);
  time = 1500000;
  min.textContent = '25';
  sec.textContent = '00';
  count = 0;
  returnValues();
}

//popup

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  dark();
  if (changeStyleTimer.classList.contains('active')) {
    changeButton();
  } else {
    returnValues();
  }
});

//открытие настроек

const popup = document.querySelector('.popup');
const close = document.querySelector('.popup__close');
const popup_content = document.querySelector('.popup__content');

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

function dark() {
  reset.classList.toggle('dark');
  settings.classList.toggle('dark');
  button.classList.toggle('dark');
  popup_content.classList.toggle('dark');
  body.classList.toggle('dark');
}
