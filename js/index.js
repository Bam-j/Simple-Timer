import {startAndPauseButtonAction} from './ButtonActions/startAndPauseButtonAction.js';
import {resetButtonAction} from './ButtonActions/resetButtonAction.js';
import {changeDarkMode} from './ButtonActions/changeDarkMode.js';
import {changeLightMode} from './ButtonActions/changeLightMode.js';

document.addEventListener('DOMContentLoaded', () => {
  const startAndPauseButton = document.getElementById('startAndPauseButton');
  const resetButton = document.getElementById('resetButton');
  const darkModeButton = document.getElementById('dark-mode-button');
  const darkModeImg = document.getElementById('dark-mode-img');

  let currentMode = 'light';

  startAndPauseButton.addEventListener('click', () => {
    startAndPauseButtonAction(startAndPauseButton);
  });

  resetButton.addEventListener('click', () => {
    resetButtonAction();
    startAndPauseButton.innerText = 'start';
  });

  darkModeButton.addEventListener('click', e => {
    if (e.target.checked) {
      changeDarkMode();
      currentMode = 'dark';
    }
    else {
      changeLightMode()
      currentMode =  'light';
    }
  });

  darkModeImg.addEventListener('mouseover', () => {
    if (currentMode === 'light') {
      darkModeImg.src = './../icons/brightness-high-fill.svg';
    }
    else {
      darkModeImg.src = './../icons/moon.svg';
    }
  });

  darkModeImg.addEventListener('mouseout', () => {
    if (currentMode === 'light') {
      darkModeImg.src = './../icons/brightness-high.svg';
    }
    else {
      darkModeImg.src = './../icons/moon-fill.svg';
    }
  });
});