const request = require('request')
const chalk = require('chalk')

const url = 'https://api.darksky.net/forecast/92c4c437e126504a2d4b61ea110916bf/59.866,30.136?units=si&lang=ru'

request({url: url, json: true}, (error, response) => {
   // console.log(response.body.currently)
   console.log(`Today is ${timeConverter(response.body.currently.time)}`)
   console.log(`${response.body.daily.data[0].summary}. It is currently ${chalk.black.bgGreen(response.body.currently.temperature)} degrees out. There is a ${chalk.black.bgGreen(response.body.currently.precipProbability)}${chalk.black.bgGreen('%')} chance of rain`)
})

function timeConverter(UNIX_timestamp){
   let a = new Date(UNIX_timestamp * 1000);
   let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
   let year = a.getFullYear();
   let month = months[a.getMonth()];
   let date = a.getDate();
   let hour = a.getHours();
   let min = a.getMinutes();
   let sec = a.getSeconds();
   let time = `${date}.${month}.${year} ${hour}:${min}`;
   return time;
 }