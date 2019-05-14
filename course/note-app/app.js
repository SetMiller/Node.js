// const validator = require('./node_modules/validator')
const chalk = require('./node_modules/chalk')
const yargs = require('./node_modules/yargs') // возвращает объект 🔥🔥🔥🔥 
const notes = require('../step_2_modules/notes.js')

yargs.version('1.1.0')

// Create add command
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

// Create read command
yargs.command({
   command: 'read',
   describe: 'info has beed read',
   builder: {                                   // Обязательные для указания свойства
      title: {
         describe: 'Note title',
         demandOption: true,                    // Флаг обязательного аргумента
         type: 'string',                        // тип принимаимых аргументов
      }
   },
   handler(argv) {
      notes.readNotes(argv.title)
   }
})

yargs.parse()                             // парсит объект в консоль