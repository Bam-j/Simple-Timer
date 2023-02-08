export const startAndPauseButtonAction = (startAndPauseButton, time) => {
  document.getElementById('inputHour').disabled = true;
  document.getElementById('inputMinute').disabled = true;
  document.getElementById('inputSecond').disabled = true;

  if (startAndPauseButton.innerText === 'start') {
    startAndPauseButton.innerText = 'pause';
  }
  else {
    startAndPauseButton.innerText = 'start';
  }
};