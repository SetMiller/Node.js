const fs = require('fs')
const chalk = require('./node_modules/chalk')

const getNotes = () => {
	return 'Your notes...'
}

// ⚙️⚙️⚙️⚙️⚙️⚙️ Основные функция

// Функция для добавления указанных в command line данных в файл
const addNote = (title, author) => {
	const notes = loadNotes()
	const duplicateNotes = notes.filter((note) => note.title === title)
	if (duplicateNotes.length === 0) {
		notes.push({
				title: title,
				author: author,
			}),
			saveNotes(notes),
			console.log(chalk.black.bgGreen('Note added!'))
	} else {
		console.log('ERROR')
	}
}

const removeNote = (title) => {
	const notes = loadNotes()
	const resultNotes = notes.filter((note) => note.title !== title)
	notes.length !== resultNotes.length ?
		(
			console.log(chalk.black.bgGreen('Note removed!')),
			saveNotes(resultNotes)
		) :
		console.log(chalk.black.bgRed('No note found!'))
}

// ⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️⭐️️️️️ Побочные функции

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
	getNotes: getNotes,
	addNote: addNote,
	removeNote: removeNote,
}