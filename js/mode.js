const mode = document.querySelectorAll('.timer__block-mode');

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
