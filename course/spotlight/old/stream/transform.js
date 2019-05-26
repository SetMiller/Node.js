// стримы класса transform предназначены для обработки данных
// они принимают что-то на входе и производят какой-то вывод
const Transform = require('stream').Transform
const tr = new Transform

tr._transform = function(chunk, enc, cb){
   // конвертируем пришедшую строку из бинарного формата
   let string = String(chunk);
   this.push(`${string}(${string.length}) `)
   cb();
}

process.stdin
   .pipe(tr)
   .pipe(process.stdout)