// Використання через змінні
// const date = new Date('April 4,2024')
// console.log(date)
// створимо фунцію на створення певного часового евенту,
// ми надаємо подію,нам повертається строка,
// яку по бажанню можна далі використовувати.
// planedData - запланована дата(параметр)
function createDateEvent(planedData) {
    const eventData = new Date(planedData)
    return eventData
}

// console.log(createDateEvent('February 12, 2024'))
// console.log(createDateEvent('May 22, 2007'))
// Створення події за допомогою передачі аргументів по черзі
// (рік,місяць,день,години,хвилини,секунди,мілісекунди)
// Функція створює цілком запланований евент,7 параметрів.
// В параметрах передав значення по дефолту

function createFullDetaliedEvent(year=1970,month=0,day=1,hours=12,minute=0,second=0,milisecond=0) {
    const eventData = new Date(year,month,day,hours,minute,second,milisecond)
    return eventData
}
console.log(createFullDetaliedEvent())
console.log(createFullDetaliedEvent(2024,2,10))