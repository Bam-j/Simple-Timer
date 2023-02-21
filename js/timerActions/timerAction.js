import {updateInput} from './updateInput.js';

export let timerInterval;

export const timerAction = totalSeconds => {
  //TODO: 엘리먼트 취득하는 중복 코드 줄이기
  const hour = document.getElementById('input-hour');
  const minute = document.getElementById('input-minute');
  const second = document.getElementById('input-second');

  timerInterval = setInterval(() => {
    totalSeconds--;
    updateInput(totalSeconds);

    if (totalSeconds <= 0) {
      window.alert('시간종료');

      hour.disabled = false;
      minute.disabled = false;
      second.disabled = false;

      clearInterval(timerInterval);
    }
  }, 1000);
};