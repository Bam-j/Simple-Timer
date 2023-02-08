export const startAndPauseButtonAction = startAndPauseButton => {
  const hour = document.getElementById('inputHour');
  const minute = document.getElementById('inputMinute');
  const second = document.getElementById('inputSecond');

  let time = [parseInt(hour.value), parseInt(minute.value), parseInt(second.value)];
  let totalSeconds = 0;

  hour.disabled = true;
  minute.disabled = true;
  second.disabled = true;

  if (startAndPauseButton.innerText === 'start') {
    startAndPauseButton.innerText = 'pause';

    totalSeconds = time[0] * 60 * 60 + time[1] * 60 + time[2];

  }
  else {
    startAndPauseButton.innerText = 'start';
  }
};