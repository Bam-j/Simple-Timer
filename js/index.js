import {startAndPauseButtonAction} from './ButtonActions/startAndPauseButtonAction.js';

document.addEventListener('DOMContentLoaded', () => {
  const startAndPauseButton = document.getElementById('startAndPauseButton');
  const resetAndStopButton = document.getElementById('resetAndStopButton');

  const hour = parseInt(document.getElementById('inputHour').value);
  const minute = parseInt(document.getElementById('inputMinute').value);
  const second = parseInt(document.getElementById('inputSecond').value);

  let time = [hour, minute, second];

  startAndPauseButton.addEventListener('click', () => {
    startAndPauseButtonAction(startAndPauseButton, time);
  });
  resetAndStopButton.addEventListener('click', () => {
    resetAndStopButtonAction(resetAndStopButton, time);
  });
});