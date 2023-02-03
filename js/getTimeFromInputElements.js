const getTimeFromInputElements = () => {
  let hour = document.getElementById('inputHour');
  let minute = document.getElementById('inputMinute');
  let second = document.getElementById('inputSecond');

  return [hour, minute, second];
}