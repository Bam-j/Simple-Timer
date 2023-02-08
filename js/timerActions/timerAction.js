import {updateInput} from './updateInput.js';

export let timerInterval;

export const timerAction = totalSeconds => {
  //TODO: 엘리먼트 취득하는 중복 코드 줄이기
  const hour = document.getElementById('inputHour');
  const minute = document.getElementById('inputMinute');
  const second = document.getElementById('inputSecond');

  timerInterval = setInterval(() => {
    totalSeconds--;
    updateInput(totalSeconds);

    //TODO: 0초가 되어도 alert는 뜨지만 second가 1로 남아있는 문제
    if (totalSeconds <= 0) {
      window.alert('시간종료');

      hour.disabled = false;
      minute.disabled = false;
      second.disabled = false;

      clearInterval(timerInterval);
    }
  }, 1000);
};