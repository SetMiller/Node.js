const fs = require('fs')
const path = require('path')


// тк код асинхронный, то для последовательного выполнения необходимо писать внутри асинхронной функции
// fs.writeFile('hello.txt', 'Some contents', (err) => {
//    if (err) {
//       throw err
//    }
// })
// fs.appendFile('hello.txt', '\nSome new content', (err) => {
//    if (err) {
//       throw err
//    }
// })

// чтение файлов
// console.log(fs.readFileSync('hello.txt').toString());
// console.log(fs.readFileSync('hello.txt', {encoding: 'utf-8'}));

// работа с буфером
// const buffer = new Buffer('Sometimes the same is different, but mostly its the same', 'utf-8')
// console.log(buffer.toString())

// создание директори в корневой папке
// fs.mkdirSync('myFolder')

// переименование файлов
// fs.renameSync('hello.txt', 'test.txt')

// перемещение файлов c переименованием
// fs.renameSync('test.txt', 'myFolder/hello.txt')

// console.log(process.cwd())

// просмотр директории и обработка имеющихся там файлов
// для этого используем модуль path
const folder = 'myFolder'
// fs.readdir(folder, (err, files) => {
//    process.chdir(folder)
//    files.forEach((file) => {
//       // console.log(path.basename(file, path.extname(file)))
//       const extName = path.extname(file)
//       fs.renameSync(file, path.basename(file, extName) + '_old' + extName)
//       // ищет файлы в корневой директории
//       // fs.renameSync(folder + '/' + file, folder + '/' + path.basename(file, extName) + '_old' + extName)
//    })
// })

// fs.readdir(folder, (err, files) => {
//    process.chdir(folder)
//    files.forEach((file) => {
//       const oldName = path.basename(file, path.extname(file))
//       const newName = oldName.split('').reverse().slice(4).reverse().join('')
//       // console.log()
//       const extName = path.extname(file)
// // //       // ищет файлы в корневой директории
//       fs.renameSync(file, path.basename(newName, extName) + extName)
//    })
// })
