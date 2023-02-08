export const updateInput = totalSeconds => {
  //TODO: 엘리먼트 취득하는 중복 코드 줄이기
  const hour = document.getElementById('inputHour');
  const minute = document.getElementById('inputMinute');
  const second = document.getElementById('inputSecond');

  const currentHour = ~~(totalSeconds / 60 / 60);
  const currentMinute = ~~((totalSeconds / 60) % 60);
  const currentSecond = totalSeconds % 60;

  hour.value = currentHour;
  minute.value = currentMinute;
  second.value = currentSecond;
};