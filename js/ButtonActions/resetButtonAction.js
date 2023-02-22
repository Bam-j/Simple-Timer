import {timerInterval} from '../timerActions/timerAction.js';
export const resetButtonAction = () => {
  const hour = document.getElementById('input-hour');
  const minute = document.getElementById('input-minute');
  const second = document.getElementById('input-second');

  hour.disabled = false;
  hour.value = '';

  minute.disabled = false;
  minute.value = '';

  second.disabled = false;
  second.value = '';

  document.getElementById('resetButton').disabled = true;

  clearInterval(timerInterval);
};