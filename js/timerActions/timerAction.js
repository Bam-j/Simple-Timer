import {updateInput} from './updateInput.js';
export const timerAction = totalSeconds => {
  //TODO: 엘리먼트 취득하는 중복 코드 줄이기
  const hour = document.getElementById('inputHour');
  const minute = document.getElementById('inputMinute');
  const second = document.getElementById('inputSecond');

  setInterval(() => {
    totalSeconds--;
    updateInput(totalSeconds);

    if (totalSeconds <= 0) {
      window.alert('시간종료');

      hour.disabled = false;
      minute.disabled = false;
      second.disabled = false;
    }
  }, 1000);
};