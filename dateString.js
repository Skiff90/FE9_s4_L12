// Таким кодом ми можемо розпарсити любий часовий проміжок
// let ms = Date.parse("2024-03-15T16:11:49.843Z")
// console.log(ms)
// Функція на розпаршування дати

function parseDate(dateString) {
    let parsedDate = Date.parse(dateString)
    return parsedDate
}

console.log(parseDate("2024-03-15T16:11:49.843Z"))
console.log(parseDate("2024-03-13T16:14:49.843Z"))
console.log(parseDate(true))

