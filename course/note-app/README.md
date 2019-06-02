# First app.js

Цели и задачи:
-
- Обучаемся работать со списками

Настройки:
-
- Устанавливаем [chalk](https://www.npmjs.com/package/chalk)
  * `npm install chalk`
- Устанавливаем [yargs](https://www.npmjs.com/package/yargs)
  * `npm install yargs`


Интересные моменты:
-
* Выполняем запросы через командную строку
   - Добавление списка:  
      `node app.js add --title="Set" --author="Miller"`
   - Выводим перечня титутов:   
      `node app.js list`
   - Выводим конкретную информацию по названию титула:  
      `node app.js read --title="Set"`
   - Удаление списка:  
      `node app.js remove --title="Set"`
