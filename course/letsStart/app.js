const fileSystem = require('fs') // вызываем fs модуль для работы с ним (file system)

let notes = 'Hello there !!! This file was created by Node.js !!!'
let notes2 = ' My name is Rafael Solomko 😄 👍👍'
fileSystem.writeFileSync('notes.txt', notes) // rewrite file if it does exist or create file

fileSystem.appendFileSync('notes.txt', notes2)