import {timerInterval} from '../timerActions/timerAction.js';
export const resetButtonAction = () => {
  //TODO: 엘리먼트 취득하는 중복 코드 줄이기
  const hour = document.getElementById('inputHour');
  const minute = document.getElementById('inputMinute');
  const second = document.getElementById('inputSecond');

  hour.disabled = false;
  hour.value = '';

  minute.disabled = false;
  minute.value = '';

  second.disabled = false;
  second.value = '';

  clearInterval(timerInterval);
};