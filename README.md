# Node.js

Цели и задачи:
-
- Познакопится с `Node.js`

Настройки для работы с `Node.js`:
-
1. Для автоматического перезапуска `node` приложения устанавливаем [nodemon](https://www.npmjs.com/package/nodemon) выполнив в командной строке следующий код:
   * глобально `npm install -g nodemon`
   * локально `npm install --save-dev nodemon`
2. Чтобы добавить экспресс в список зависимостей создаем `package.json` файл. Для этого в терминале вводим команду:
   * `npm init -y`
3. Устанавливаем [Express](https://www.npmjs.com/package/express)
   * `npm install express`
4. Устанавливаем шаблонизатор [Pug](https://www.npmjs.com/package/pug)
   * `npm install pug`
5. Создаем в корневой папке папку `Views`, там `Express` по-умолчанию будет искать шаблоны
6. Для того чтобы была возможность распарсить страницу по адресу `/new` будем использовать [body-parser](https://www.npmjs.com/package/body-parser)
   * `npm install body-parser`


Перечень содержимого репозитория:
-
* [letsStart](https://github.com/SetMiller/Node.js/tree/master/course/letsStart)
* [note-app](https://github.com/SetMiller/Node.js/tree/master/course/note-app)
* [playground](https://github.com/SetMiller/Node.js/tree/master/course/playground)
* [server_for_practice](https://github.com/SetMiller/Node.js/tree/master/course/server_for_practice/ver%200.2)
* [spotlight](https://github.com/SetMiller/Node.js/tree/master/course/spotlight)
* [weather-app](https://github.com/SetMiller/Node.js/tree/master/course/weather-app)