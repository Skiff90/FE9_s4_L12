// Створимо змінну date на основі класу Date
// const date = new Date();
// console.log(date)
// функція на визначення поточного часу яку можна експортувати в інші файли.
function getShowCurrentTime() {
    let currentTime = new Date()
    return currentTime;
}
console.log(getShowCurrentTime())