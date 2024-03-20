const date = new Date(2024, 6, 14, 5, 40, 0, 0);

console.log(`2017,6,14,5,40 відповідає ${date.getTime()}`);

const secondDate = new Date();

// set-Methods
secondDate.setFullYear(2024, 2, 19);
secondDate.setHours(4, 40, 0, 0);
console.log(`${secondDate.getTime()}`);
