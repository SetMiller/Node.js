const fs = require('fs')

// ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ Основные функция ⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️ //

// // Функция для добавления указанных в command line данных в файл
const addNote = (title, author) => {
	const notes = loadNotes()
	const duplicateNote = notes.find((note) => note.title === title)
	if (!duplicateNote) {
		noteToAdd = {
			title: title,
			author: author,
		}
		notes.push(noteToAdd)
		saveNotes(notes)
		return {
			status: 'Note added',
			notes: noteToAdd
		}
	} else {
		return {
			error:'Note already added'
		}
	}
}

// Функция для удаления указанных в command line данных
const removeNote = (title) => {
	const notes = loadNotes()
	const resultNotes = notes.filter((note) => note.title !== title)
	if (notes.length !== resultNotes.length){
		saveNotes(resultNotes)
		return {
			status: 'Note removed',
			notes: resultNotes
		}
	} else {
		return {
			error:'No note found!'
		}
	}
}

// Функция для вывода перечня
const listNotes = () => {
	const notes = loadNotes()
	return notes.map(note => note.title);
}

// Функция по титулу находит интересующий объект и выводит информацию
const readNotes = (title) => {
	const notes = loadNotes()
	if (title) {
		const matchesNote = notes.find((note) => note.title === title)
		if (matchesNote) {
			return matchesNote
		} else {
			return {
				error:'There is no matcher'
			}
		}
	} else {
		return notes
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
