import {getTimeFromInputElements} from './getTimeFromInputElements.js';
import {startAndPauseButtonAction} from './ButtonActions/startAndPauseButtonAction.js';

document.addEventListener('DOMContentLoaded', () => {
  let startAndPauseButton = document.getElementById('startAndPauseButton');
  let resetAndStopButton = document.getElementById('resetAndStopButton');

  let time;

  startAndPauseButton.addEventListener('click', () => {
    console.log('start 버튼 액션');

    time = getTimeFromInputElements();

    startAndPauseButtonAction(startAndPauseButton, time);
  });
  resetAndStopButton.addEventListener('click', () => {
    resetAndStopButtonAction(resetAndStopButton, time);
  });
});