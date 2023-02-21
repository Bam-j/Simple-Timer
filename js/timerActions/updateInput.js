export const updateInput = totalSeconds => {
  //TODO: 엘리먼트 취득하는 중복 코드 줄이기
  const hour = document.getElementById('input-hour');
  const minute = document.getElementById('input-minute');
  const second = document.getElementById('input-second');

  const currentHour = ~~(totalSeconds / 60 / 60);
  const currentMinute = ~~((totalSeconds / 60) % 60);
  const currentSecond = totalSeconds % 60;

  hour.value = currentHour;
  minute.value = currentMinute;
  second.value = currentSecond;
};