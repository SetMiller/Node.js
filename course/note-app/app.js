// node app.js add --title="hello" --author="world"

// const validator = require('./node_modules/validator')
const chalk = require('./node_modules/chalk')
const yargs = require('./node_modules/yargs') // возвращает объект 🔥🔥🔥🔥 
const notes = require('./notes.js')

yargs.version('1.1.0')

process.argv.forEach((element, index) => {
   index > 1 ? console.log(element) : ''
});

// Create add command
yargs.command({
   command: 'add',
   describe: 'Add a note',                      // Если поставить false, то метод станет невидимым в info
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
   describe: 'info has been read',
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