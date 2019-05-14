const fs = require('fs')

// 1️⃣
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
// }

// // const bookJSON = JSON.stringify(book)         // создаем строковое представление объекта
// // console.log(bookJSON)

// // const parseData = JSON.parse(bookJSON)        // возвращаем обратно объектное представление строки
// // console.log(parseData)

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-JSON.json', bookJSON)

// 2️⃣
// const dataBuffer = fs.readFileSync('1-JSON.json')   // Получаем бинарный вид информации из файла
// const dataJSON = dataBuffer.toString()              // Получаем 'string' версию
// const data = JSON.parse(dataJSON)                   // Получаем объектное представление строки 🔥🔥🔥🔥
// console.log(data)
// console.log(data.title)

// 3️⃣

const person = {                                        // Макет объекта
  "name":"Andrew",
  "planet":"Earth",
  "age":27
}

const personJSON = JSON.stringify(person)               // Строковое представление объекта
fs.writeFileSync('2-JSON.json', personJSON)             // Запись первоначального файла

const dataBuffer = fs.readFileSync('2-JSON.json')       // Бинарный вид информации из файла
const dataJSON = dataBuffer.toString()                  // Строковый вид информации из файла
const user = JSON.parse(dataJSON)                       // Объектный вид
user.name = 'Rafael'                                    // Новые данные
user.planet = 'Marse'
user.age = '34'
const userJSON = JSON.stringify(user)                   // Строковое представление объекта
fs.writeFileSync('2-JSON.json', userJSON)               // Запись новых данных в иходный файл
