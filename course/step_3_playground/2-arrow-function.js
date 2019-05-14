// const square = function (x) {
//   return x * x
// }

// const square = (x) => {
//   return x * x
// }

// const square = (x) => x * x

// console.log(square(2))

const event = {
  name: 'Birthday Party',
  guestList: ['Andrew', 'Jen', 'Mike'],
  printGuestList(){
    // const self = this
    console.log('Guest list for ' + this.name)
    // this.guestList.forEach(function(guest){
      // console.log(`${guest} is attending ${this.name}`)           // Функция потеряет контекст
      // console.log(`${guest} is attending ${self.name}`)           // Вариант №1 сохранить контекст
    // })
    this.guestList.forEach((guest) => {                              // либо можно использовать стрелочную функцию
      console.log(`${guest} is attending ${this.name}`)
    })
  }
}

event.printGuestList()