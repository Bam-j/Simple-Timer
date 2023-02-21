export const changeDarkMode = () => {
  document.body.classList.add('dark-mode');

  document.getElementById('dark-mode-img').src = './icons/moon-fill.svg';

  document.getElementById('input-hour').classList.add('dark-mode');
  document.getElementById('input-minute').classList.add('dark-mode');
  document.getElementById('input-second').classList.add('dark-mode');

  document.getElementById('startAndPauseButton').classList.add('dark-mode');
  document.getElementById('resetButton').classList.add('dark-mode');
};