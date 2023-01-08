const mode = document.querySelectorAll('.timer__block-mode');
const shortRestClass = 'shortRest';
const longRestClass = 'longRest';
let i = 0;

mode.forEach((element) => {
  element.addEventListener('click', () => {
    if (modeCount > 2) {
      modeCount = 0;
    }
    changeModeButton(modeCount);
    // if (i > 2) {
    //   modeCount = 1;
    //   i = 0;
    // } else {
    //   modeCount = modeCount + 2;
    // }
    // i++;
    modeCount++;
    //console.log(modeCount);
    console.log(i);
  });
});

function rest(type) {
  arrayElement.forEach((element) => {
    element.classList.add(type);
  });
}

function removeRest(type) {
  arrayElement.forEach((element) => {
    element.classList.remove(type);
  });
}

function changeModeButton(count) {
  switch (count) {
    case 0:
      modeShortRest.style.display = 'flex';
      modeFocus.style.display = 'none';
      modeLongRest.style.display = 'none';
      rest(shortRestClass);
      resetTime(shortRest);
      break;
    case 1:
      modeLongRest.style.display = 'flex';
      modeShortRest.style.display = 'none';
      modeFocus.style.display = 'none';
      rest(longRestClass);
      resetTime(longRest);
      break;
    case 2:
      modeShortRest.style.display = 'none';
      modeFocus.style.display = 'flex';
      modeLongRest.style.display = 'none';
      removeRest(shortRestClass);
      removeRest(longRestClass);
      resetTime(focus);
      break;
    default:
      break;
  }
}
