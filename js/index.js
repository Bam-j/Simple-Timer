import {startAndPauseButtonAction} from './ButtonActions/startAndPauseButtonAction.js';
import {resetButtonAction} from './ButtonActions/resetButtonAction.js';

document.addEventListener('DOMContentLoaded', () => {
  const startAndPauseButton = document.getElementById('startAndPauseButton');
  const resetButton = document.getElementById('resetButton');

  const hour = parseInt(document.getElementById('inputHour').value);
  const minute = parseInt(document.getElementById('inputMinute').value);
  const second = parseInt(document.getElementById('inputSecond').value);

  let time = [hour, minute, second];

  startAndPauseButton.addEventListener('click', () => {
    startAndPauseButtonAction(startAndPauseButton, time);
  });
  resetButton.addEventListener('click', () => {
    resetButtonAction();
  });
});