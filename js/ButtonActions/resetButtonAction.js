import {timerInterval} from '../timerActions/timerAction.js';
export const resetButtonAction = () => {
  const inputHour = document.getElementById('inputHour');
  const inputMinute = document.getElementById('inputMinute');
  const inputSecond = document.getElementById('inputSecond');

  inputHour.disabled = false;
  inputHour.value = '';

  inputMinute.disabled = false;
  inputMinute.value = '';

  inputSecond.disabled = false;
  inputSecond.value = '';

  clearInterval(timerInterval);
};