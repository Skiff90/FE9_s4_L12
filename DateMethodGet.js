// Юзаємо гет методи класу Date
let date = new Date();

console.log("Date:" + date); //Данний виклик поверне поточну дату в данний момен часу.

console.log("getDate:" + date.getDate()); //Повертає поточний день

console.log("getDay:" + date.getDay()); //Повертає поточний день тижня від 0 до 6 рахуються з неділі

console.log("getMonth:" + date.getMonth()); //Повертає поточний місяць від 0 до 11

console.log("getFullYear:" + date.getFullYear()); //Повертає поточний рік з 4 цифр

console.log("getHours:" + date.getHours()); //Повертає поточну годину

console.log("getMinutes:" + date.getMinutes()); //Повертає поточну хвилину

console.log("getSeconds:" + date.getSeconds()); //Повертає поточні секунди

console.log("getMilliseconds:" + date.getMilliseconds()); //Повертає поточниі мілісекунди

console.log("getTime:" + date.getTime()); //Повертає кількість мілісекунд минулих зі старту епохи Unix

let result = "Date:";
result += date.getFullYear() + "/";
result += date.getMonth() + "/";
result += date.getDate() + "/";
result += date.getDay() + "/";

result += "Time:" + date.getHours() + ".";
result += date.getMinutes() + ".";
result += date.getSeconds() + ".";
result += date.getMilliseconds();
// Наступний рядок повинні показати час і дату
console.log(result);
