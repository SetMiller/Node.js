const fs = require('fs')
const chalk = require('./node_modules/chalk')

// ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ Основные функция ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ //

// Функция для добавления указанных в command line данных в файл
const addNote = (title, author) => {
	const notes = loadNotes()
	// const duplicateNotes = notes.filter((note) => note.title === title)		// Минус метода в том, что обходим целый массив
	const duplicateNote = notes.find((note) => note.title === title)
	if (!duplicateNote) {
		notes.push({
				title: title,
				author: author,
			})
			saveNotes(notes)
			console.log(chalk.black.bgGreen('Note added!'))
	} else {
		console.log('ERROR')
	}
}

// Функция для удаления указанных в command line данных
const removeNote = (title) => {
	const notes = loadNotes()
	const resultNotes = notes.filter((note) => note.title !== title)
	if (notes.length !== resultNotes.length){
		console.log(chalk.black.bgGreen('Note removed!')),
		saveNotes(resultNotes)
	} else {
		console.log(chalk.black.bgRed('No note found!'))
	}
}

// Функция для вывода перечня
const listNotes = () => {
	const notes = loadNotes()
	notes.forEach(note => console.log(chalk.black.bgYellow(note.title)));
}

// Функция по титулу находит интересующий объект и выводит информацию
const readNotes = (title) => {
	const notes = loadNotes()
	const matchesNote = notes.find((note) => note.title === title)
	if (matchesNote) {
		// Object.values(matchesNote).forEach(value => console.log(chalk.green(value)))
		console.log(chalk.green(JSON.stringify(matchesNote)))
	} else {
		// console.log(chalk.red(123))
		console.log(chalk.red('There is no matches!!'))
	}
}

// ⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️ Побочные функции ⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️ //

// Функция для сохранение в файл
const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes)
	fs.writeFileSync('notes.json', dataJSON)
}

// Функция для загрузки данных из файла
const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json')
		const dataJSON = dataBuffer.toString()
		return JSON.parse(dataJSON)
	} catch (e) {
		return []
	}
}

module.exports = {
	addNote: addNote,
	removeNote: removeNote,
	listNotes: listNotes,
	readNotes: readNotes,
}