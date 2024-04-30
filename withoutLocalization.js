let date = new Date();

console.log(+date); //ідентично написанню методу date.getTime()

let start = new Date();
for (let i = 0; i < 100000; i++) {
  const doSomething = i * i * i;
}

let end = new Date();
console.log(`Цикл зайняв ${end - start} мс`);
console.log("hello");
