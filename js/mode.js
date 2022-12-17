function mode() {
  const focusMode = document.querySelector('.mode');
  const body = document.querySelector('body');
  const img = document.querySelector('.mode__img');
  const img_title = document.querySelector('.title__img');
  const text = document.querySelector('.mode__text');

  const minute = document.querySelector('.pomodoro__minute');

  const timer = document.querySelector('.pomodoro');

  let count = 0;

  focusMode.addEventListener('click', () => {
    if (count % 2 === 0) {
      minute.textContent = '05';
      img.src = 'img/mode/mode-short_break.svg';
      img_title.src = 'img/logo/logo_break.svg';
      text.textContent = 'Break';
    } else {
      minute.textContent = '25';
      img.src = 'img/mode/mode-focus.svg';
      img_title.src = 'img/logo/logo_focus.svg';
      text.textContent = 'Focus';
    }
    body.classList.toggle('break');
    timer.classList.toggle('break');

    text.classList.toggle('break');
    count++;
  });
}

export default mode;
