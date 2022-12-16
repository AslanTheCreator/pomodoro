const minute = document.querySelector('.pomodoro__minute');
const second = document.querySelector('.pomodoro__second');
const button = document.querySelector('.timer__controller__button');
const reset = document.querySelector('.timer__controller__reset');

const pomodoro = document.querySelector('.pomodoro');

const constante = 1500000;

let interval;
let time = constante;

button.addEventListener('click', () => {
  const timeCount = () => {
    let min = Math.floor((time / (1000 * 60)) % 60);
    let sec = Math.floor((time / 1000) % 60);
    time -= 1000;
    updateTime(second, addZero(sec));
    updateTime(minute, addZero(min));
  };
  pomodoro.classList.add('active');
  interval = setInterval(timeCount, 1000);
});

reset.addEventListener('click', () => {
  clearInterval(interval);
  updateTime(second, addZero((constante / 1000) % 60));
  updateTime(minute, addZero(Math.floor((constante / (1000 * 60)) % 60)));
});

function addZero(value) {
  value = value < 10 ? '0' + value : value;
  return value;
}

//сделать нормальную функцию
function updateTime(value, func) {
  value.textContent = func;
}
