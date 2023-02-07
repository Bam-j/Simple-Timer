const resetAndStopButtonAction = (resetAndStopButton, time) => {
  if (resetAndStopButton.innerText === 'reset') {
    resetAndStopButton.innerText = 'stop';
  }
  else {
    resetAndStopButton.innerText = 'reset';

    document.getElementById('inputHour').disabled = false;
    document.getElementById('inputMinute').disabled = false;
    document.getElementById('inputSecond').disabled = false;
  }
};