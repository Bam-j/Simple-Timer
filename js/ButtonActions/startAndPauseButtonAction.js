import {timerAction} from '../timerActions/timerAction.js';
import {timerInterval} from '../timerActions/timerAction.js';

export const startAndPauseButtonAction = startAndPauseButton => {
  const hour = document.getElementById('input-hour');
  const minute = document.getElementById('input-minute');
  const second = document.getElementById('input-second');

  const time = [parseInt(hour.value), parseInt(minute.value), parseInt(second.value)];

  if (time[0] < 0 || time[1] < 0 || time[2] < 0) {
    window.alert('유효한 값이 아닙니다. (음수 입력)');

    hour.value = '';
    minute.value = '';
    second.value = '';

    return;
  }

  let totalSeconds = time[0] * 60 * 60 + time[1] * 60 + time[2];

  if (Number.isNaN(totalSeconds)) {
    window.alert('유효한 값이 아닙니다. (숫자 외의 문자 입력)');

    hour.value = '';
    minute.value = '';
    second.value = '';

    return;
  }

  hour.disabled = true;
  minute.disabled = true;
  second.disabled = true;

  document.getElementById('resetButton').disabled = false;

  if (startAndPauseButton.innerText === 'start') {
    startAndPauseButton.innerText = 'pause';

    timerAction(totalSeconds);
  }
  else {
    startAndPauseButton.innerText = 'start';
    clearInterval(timerInterval);
  }
};