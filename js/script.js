let time = 1500000;
let count = 0;
let interval = 0;

const button = document.querySelector('.timer__controller__button');
const reset = document.querySelector('.timer__controller__reset');
const settings = document.querySelector('.timer__controller__setings');

const min = document.querySelector('.pomodoro__minute');
const sec = document.querySelector('.pomodoro__second');

//пуск и пауза таймера
button.addEventListener('click', () => {
  if (!(count % 2)) {
    interval = setInterval(changeTime, 1000);
  } else {
    clearInterval(interval);
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
}

//popup

const toggle = document.querySelector('.popup__toggle');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
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
