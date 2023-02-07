export const startAndPauseButtonAction = (startAndPauseButton, time) => {
  if (startAndPauseButton.value === 'start') {
    startAndPauseButton.innerHTML = 'pause';
  }
  else {
    startAndPauseButton.innerHTML = 'start';
  }
};