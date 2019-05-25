// const notes = require('./notes.js')
const express = require('express')
const app = express()
const port = 3000
const notes = require('./notes.js')

// Добавление постов
app.post('/', (request, response) => {
   const title = request.query.title
   const author = request.query.author
   response.send(notes.addNote(title,  author))
})

// Чтение постов
app.get('/', (request, response) => {
   if (request.query.title !== undefined){
      const title = request.query.title
      const respNote = notes.readNotes(title)
      response.send(respNote)
   } else if (request.query.list !== undefined){
      const list = notes.listNotes()
      response.send(list)
   } else {
      const code = 100500
      const status = 'Add error'
      response.send(JSON.stringify({
         code, 
         status
     }))
   }
})

// Удаление постов
app.delete('/', (request, response) => {
   console.log(request.query)
   const removeNotes = notes.removeNote(request.query.title)
   response.send(removeNotes)
})

app.listen(port, (err) => {
   if (err) {
      return console.log('something bad happened', err)
   }
   console.log(`server is listening on ${port}`)
})
