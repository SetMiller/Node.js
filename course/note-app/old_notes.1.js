const fs = require('fs')
const chalk = require('./node_modules/chalk')

function getNotes(){
  return 'Your notes...'
}

// ⚙️⚙️⚙️⚙️⚙️⚙️ Основные функция

// Функция для добавления указанных в command line данных в файл
function addNote(title, author){
  const notes = loadNotes()                                 // Получаем данные из файла, если не существует, то пустой массив
  const duplicateNotes = notes.filter(function(note){       // Минус метода в том, что обходим целый массив
    return note.title === title
  })
  if (duplicateNotes.length === 0) {
    notes.push({                                            // Добавляем объект с нашими данными в массив
      title: title,
      author: author,
    })
    saveNotes(notes)                                        // Сохраняем данные
  } else {
    console.log('ERROR')
  }

  // Вариант №2
  // let bool = false
  // notes.forEach(element => {
  //   if (element.title === title || element.author === author) {
  //     bool = true
  //   }
  // });
  // if (!bool) {
  //   notes.push({                                            // Добавляем объект с нашими данными в массив
  //     title: title,
  //     author: author,
  //   })
  //   saveNotes(notes)                                        // Сохраняем данные
  // } else {
  //   console.log('ERROR')
  // }
}

function removeNote(title){
  const notes = loadNotes()
  const resultNotes = notes.filter(function(note){
    return note.title !== title
  });

  if (notes.length !== resultNotes.length) {                    // сравниваем длины массивов и выводим сообщение
    console.log(chalk.black.bgGreen('Note removed!'))
    saveNotes(resultNotes)
  } else {
    console.log(chalk.black.bgRed('No note found!'))
  }
}

// ⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️ Побочные функции

// Функция для сохранение в файл
function saveNotes(notes){
    const dataJSON = JSON.stringify(notes)                // конвертируем массив с объектами в строку
    // console.log(chalk.black.bgRed(dataJSON))              
    fs.writeFileSync('notes.json', dataJSON)              // записываем данные в файл (информация добавляется к существующей)
}

// Функция для загрузки данных из файла
function loadNotes() {
  try {
    const dataBuffer = fs.readFileSync('notes.json')      // получаем данные из файла
    const dataJSON = dataBuffer.toString()                // конвертируем в строку
    return JSON.parse(dataJSON)                           // парсим в объект
  } catch(e) {                                            // если файл отсутствует
    return []                                             // возвращаем пустой массив
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
}