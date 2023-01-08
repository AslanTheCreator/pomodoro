//Вычисление времени
let countPlay = 0;

function calcTime() {
  let minutes = Math.floor((time / (1000 * 60)) % 60);
  let seconds = Math.floor((time / 1000) % 60);
  if (time <= 0) {
    if (countPlay > 2) {
      countPlay = 0;
    }
    changeModeButton(countPlay);
    startTimer(count);
    ioSound();
    count++;
    countPlay++;
  }
  time -= 1000;
  timerContent(min, addZero(minutes));
  timerContent(sec, addZero(seconds));
}

//сброс времени
function resetTime(val) {
  clearInterval(interval);
  setTime(min, sec, val);
  count = 0;
  returnValues();
}

const addZero = (value) => {
  return value < 10 ? `0${value}` : value;
};

const timerContent = (value, func) => {
  value.textContent = func;
};

function setTime(min, sec, val) {
  min.textContent = val.value < 10 ? `0${val.value}` : val.value;
  sec.textContent = '00';
  time = val.value * MS_TO_MIN;
}

function ioSound() {
  ion.sound({
    sounds: [{ name: 'beer_can_opening' }, { name: 'bell_ring' }],
    path: 'sounds/',
    preload: true,
    volume: 1.0,
  });
  ion.sound.play('beer_can_opening');
}
