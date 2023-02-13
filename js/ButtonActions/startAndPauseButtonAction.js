import {timerAction} from '../timerActions/timerAction.js';
import {timerInterval} from '../timerActions/timerAction.js';

export const startAndPauseButtonAction = startAndPauseButton => {
  const hour = document.getElementById('inputHour');
  const minute = document.getElementById('inputMinute');
  const second = document.getElementById('inputSecond');

  let time = [parseInt(hour.value), parseInt(minute.value), parseInt(second.value)];
  let totalSeconds = time[0] * 60 * 60 + time[1] * 60 + time[2];

  if (Number.isNaN(totalSeconds)) {
    window.alert('유효한 값이 아닙니다.');

    hour.value = '';
    minute.value = '';
    second.value = '';

    return;
  }

  hour.disabled = true;
  minute.disabled = true;
  second.disabled = true;

  //TODO: input에 아무것도 입력하지 않았을 경우와 음수, NaN입력 시의 예외 처리 추가하기
  if (startAndPauseButton.innerText === 'start') {
    startAndPauseButton.innerText = 'pause';

    timerAction(totalSeconds);
  }
  else {
    startAndPauseButton.innerText = 'start';
    clearInterval(timerInterval);
  }
};