const express = require('express');
const bodyParser = require('body-parser')

// получаем объект express
   const app = express();

// объект с переменными, которые будут использоваться в шаблоне
   // добавляем данные для нескольких страниц
   const storage = {
      home: {
         page: 'My new app',
         content: 'My home page!!'
      },
      about: {
         page: 'about app',
         content: 'some content'
      },
      downloads: {
         page: 'Downloads page',
         content: 'Try to download anything =)'
      },
      profile: {
         page: 'Profile Page',
         content: 'This is my profile page'
      },
   };

   let storageKeys = Object.keys(storage)
   
// чтобы не прописывать в res.render('main.pug', tempVar) расширение pug
   app.set('view engine', 'pug')
   
app.use(bodyParser.urlencoded({extended: true}))

// С помощью app.route вешаем обработчики по адресу /new
   app.route('/new')
      // добавляем страницу new
      .get(function(req, res){
         res.render('new', {
            page: 'Add new',
            links: storageKeys
         })
      })
      // Обрабатываем POST запрос кнопки add
      .post(function(req, res){
         // console.log(req.body)
         const data = req.body
         if (data.pageurl && data.pagename && data.pagecontent) {
            storage[data.pageurl] = {
               page: data.pagename,
               content: data.pagecontent
            }
            storageKeys = Object.keys(storage)
         }
         res.redirect('/')
      })

   app.get('/about', function(req, res){
      res.render('about', {
         page: 'About page',
         links: storageKeys
      })
   })

// получаем и обрабатываем запрос (путь, callback)
   // получаем параметр страницы в '/:page?', знак вопроса указывает, что параметр не обязательный
   app.get('/:page?', function(req, res){
      let page = req.params.page;
      if (!page){
         page = 'home'
      };
      let data = storage[page];
      // проверяем совпадения, если storage[page] возвращает undef, то делаем редирект на главную страницу
      if (!data){
         res.redirect('/home')
         page = 'home'
      };
      data.links = storageKeys;
      // перестраиваем страницу
      res.render('main', data);
   })

// путь к html файлу (можно через __dirname, но проблема с обратным слешем)
// app.use(express.static('E:/Programming/learning/GitHub/Node.js/course/spotlight/publiс'))


// отключаем пометку об использовании Express
   app.disable('x-powered-by');

// логгер запросов (middleware абстракция для добавления callback-ов в очередь)
   app.use(function(req, res, next){
      // увидим пути запроса
      console.log('%s %s', req.method, req.url);
      next();
   });

// создаем и запускаем сервер (порт, callback)
   const server = app.listen(3000, function(){
      console.log('Listening on port 3000');
   });