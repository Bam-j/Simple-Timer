export const changeLightMode = () => {
  document.body.classList.remove('dark-mode');

  document.getElementById('dark-mode-img').src = './../../icons/brightness-high.svg';

  document.getElementById('input-hour').classList.remove('dark-mode');
  document.getElementById('input-minute').classList.remove('dark-mode');
  document.getElementById('input-second').classList.remove('dark-mode');

  document.getElementById('startAndPauseButton').classList.remove('dark-mode');
  document.getElementById('resetButton').classList.remove('dark-mode');
};