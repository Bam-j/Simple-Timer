export const getTimeFromInputElements = () => {
  let hour = parseInt(document.getElementById('inputHour').value);
  let minute = parseInt(document.getElementById('inputMinute').value);
  let second = parseInt(document.getElementById('inputSecond').value);

  return [hour, minute, second];
}