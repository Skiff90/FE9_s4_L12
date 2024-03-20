function showTime(miliseconds) {
  let date = new Date(miliseconds);
  return console.log(date);
}

console.log(showTime);
showTime(99999999);
