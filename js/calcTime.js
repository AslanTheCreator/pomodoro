//Вычисление времени
function calcTime() {
  let minutes = Math.floor((time / (1000 * 60)) % 60);
  let seconds = Math.floor((time / 1000) % 60);
  time -= 1000;
  timerContent(min, addZero(minutes));
  timerContent(sec, addZero(seconds));
}

//сброс времени
function resetTime(val) {
  clearInterval(interval);
  setTimeContent(min, sec, val);
  time = setTime(val);
  count = 0;
  returnValues();
}

const addZero = (value) => {
  return value < 10 ? `0${value}` : value;
};

const timerContent = (value, func) => {
  value.textContent = func;
};

function setTimeContent(min, sec, val) {
  min.textContent = val.value < 10 ? `0${val.value}` : val.value;
  sec.textContent = '00';
}

function setTime(val) {
  return val.value * msToMin;
}
