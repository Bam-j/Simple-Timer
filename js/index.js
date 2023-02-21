import {startAndPauseButtonAction} from './ButtonActions/startAndPauseButtonAction.js';
import {resetButtonAction} from './ButtonActions/resetButtonAction.js';
import {darkModeIconsChange} from './ButtonActions/darkModeIconsChange.js';
import {darkModeButtonAction} from './ButtonActions/darkModeButtonAction.js';

document.addEventListener('DOMContentLoaded', () => {
  const startAndPauseButton = document.getElementById('startAndPauseButton');
  const resetButton = document.getElementById('resetButton');
  const darkModeButton = document.getElementById('dark-mode-button');

  startAndPauseButton.addEventListener('click', () => {
    startAndPauseButtonAction(startAndPauseButton);
  });

  resetButton.addEventListener('click', () => {
    resetButtonAction();
    startAndPauseButton.innerText = 'start';
  });

  darkModeButton.addEventListener('click', e => {
    if (e.target.checked) {
      document.body.classList.add('dark-mode');
    }
    else {
      document.body.classList.remove('dark-mode');
    }
  });
});