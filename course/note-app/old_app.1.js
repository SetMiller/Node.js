// const validator = require('./node_modules/validator')
const chalk = require('./node_modules/chalk')
const yargs = require('./node_modules/yargs') // возвращает объект 🔥🔥🔥🔥 
const notes = require('../step_2_modules/notes.js')

// 1️⃣
// используем подуль nodemon для постоянного отслеживания изменений в файле
// const msg = getNotes()
// const greenMsg = chalk.blue.inverse('Success!')
// console.log(greenMsg)
// console.log(validator.isURL('https://3dnews.ru'))
// console.log(msg)
// console.log(process.argv[2])

// 2️⃣
// работаем с параметром process.argv (arguments vector) для обработки передаваемых параметров в командной строке
// const command = process.argv[2]   // arguments vector -> массив 🔥🔥🔥🔥
// const commandAdd = process.argv

// commandAdd.forEach((element, index) => {
//   if (index >= 2) {
//     if (element === 'add') {
//       console.log('Adding note!')
//     } else if (element === 'remove') {
//       console.log('Removing note!')
//     } else {
//       console.log(chalk.blue.inverse(element))
//     }
//   } 
// });

// 3️⃣

// console.log(process.argv)
// console.log(yargs.argv)         // ключи --help --version

// costomise yargs version
// --version возвращает версию
yargs.version('1.1.0')
// console.log(yargs.argv) 

// create add command
// создание новой команды для вызыва через передаваемые аргументы
// принимает 3 параметра: 1. команда для вызова, 2. Описание, 3. Функция вызова
yargs.command({
   command: 'add',
   describe: 'Add a new note',
   builder: {                                   // Обязательные для указания свойства
      title: {
         describe: 'Note title',
         demandOption: true,                    // Флаг обязательного аргумента
         type: 'string',                        // тип принимаимых аргументов
      },
      author: {
         describe: 'firstName secondName',
         demandOption: true,
         type: 'string'
      }
   },
   handler(argv) {
      // console.log(chalk.black.bgGreen('New note has been added', JSON.stringify(argv)))
      // console.log(chalk.black.bgGreen(`Title: ${argv.title}`))
      // console.log(chalk.black.bgCyan(`Author: ${argv.author}`))
      notes.addNote(argv.title, argv.author)
   }
})

// Create remove command
yargs.command({
   command: 'remove',
   describe: 'Remove a note',
   builder: {                                   // Обязательные для указания свойства
      title: {
         describe: 'Note title',
         demandOption: true,                    // Флаг обязательного аргумента
         type: 'string',                        // тип принимаимых аргументов
      }
   },
   handler(argv) {
      notes.removeNote(argv.title)
   }
})

// Create list command
yargs.command({
   command: 'list',
   describe: 'Argv was listed',
   handler(argv) {
      notes.listNotes(argv.title)
   }
})

yargs.command({
   command: 'read',
   describe: 'info has beed read',
   handler() {
      console.log(chalk.cyan('some info'))
   }
})

// console.log(yargs.argv)                // замена консоллогу
yargs.parse()                             // парсит объект в консоль