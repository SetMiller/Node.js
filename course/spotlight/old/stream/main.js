const net = require('net')

// создадим нвоый класс
const Readable = require('stream').Readable
const stream = new Readable()
const data = ('Most of us use Closures while coding but we don’t get why we are using it. JavaScript doesn’t have the access modifiers like private, public, protected like other Object Oriented Programming Languages. So, we have to use functions to protect the namespace from the outside code usage in ES5.').split(' ')

// console.log(data)

// создаем функцию, которая выводит каждое слово
stream._read = () => {
   if(data.length) {
      setTimeout(() => {
         // console.log(stream)
         stream.push(data.shift())
      },100)
   } else {
      stream.push(null)
   }
}

// данные из стрима направляем в консоль 
stream.pipe(process.stdout)