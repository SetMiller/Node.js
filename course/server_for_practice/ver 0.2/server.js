// const notes = require('./notes.js')
const express = require('express')
const app = express()
const port = 3000
const notes = require('./notes.js')

// Parse URL-encoded bodies (as sent by HTML forms)
   app.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)   
   app.use(express.json());

app.route('/')
   .post(function(request,response){
      if(request.body.title && request.body.author) {
         const title = request.body.title
         const author = request.body.author
         response.send(notes.addNote(title,  author))
      } else {
         const code = 100700
         const status = 'No title or Author'
         response.send(JSON.stringify({code, status}))
      }
   })
   .get(function(request,response){
      if (request.query.list || request.query.list === true){
         const respListNote = notes.listNotes()
         response.send(respListNote)
      } else if (request.query.title) {
         const title = request.query.title
         const respNote = notes.readNotes(title)
         response.send(respNote)
      }  else {
         const code = 100500
         const status = 'Add error'
         response.send(JSON.stringify({code, status}))
      }
   })
   .delete(function(request,response){
      const removeNotes = notes.removeNote(request.query.title)
      response.send(removeNotes)
   })

app.listen(port, (err) => {
   if (err) {
      return console.log('something bad happened', err)
   }
   console.log(`server is listening on ${port}`)
})
