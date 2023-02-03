document.addEventListener('DOMContentLoaded', () => {
  let startAndPauseButton = document.getElementById('startAndPauseButton');
  let resetAndStopButton = document.getElementById('resetAndStopButton');
  let time = getTimeFromInputElements();

  startAndPauseButton.addEventListener('click', () => {
    startAndPauseButtonAction(time);
  });
  resetAndStopButton.addEventListener('click', () => {
    resetAndStopButtonAction(time);
  });
});