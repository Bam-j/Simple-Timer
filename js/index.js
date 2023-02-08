import {startAndPauseButtonAction} from './ButtonActions/startAndPauseButtonAction.js';
import {resetButtonAction} from './ButtonActions/resetButtonAction.js';

document.addEventListener('DOMContentLoaded', () => {
  const startAndPauseButton = document.getElementById('startAndPauseButton');
  const resetButton = document.getElementById('resetButton');

  startAndPauseButton.addEventListener('click', () => {
    startAndPauseButtonAction(startAndPauseButton);
  });
  resetButton.addEventListener('click', () => {
    resetButtonAction();
  });
});