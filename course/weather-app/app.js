const request = require('request')
const chalk = require('chalk')

const coordSettings = {
   endpoint: 'Saint%20Petersburg',
   accessToken: 'pk.eyJ1Ijoic2V0bWlsbGVyIiwiYSI6ImNqdnd3dHJ1YzA0aXE0NnBuNWliOWp4NjEifQ.YFhYr9ju8qxYl6bWDlrffg',
   limit: 1
}

const weatherSettings = {
   accessToken: '92c4c437e126504a2d4b61ea110916bf',
   units: 'si',
   coord: {
      latitude: '',
      longitude: ''
   }
}

const coordUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${coordSettings.endpoint}.json?access_token=${coordSettings.accessToken}&limit=${coordSettings.limit}`

request({url: coordUrl, json: true}, (error, response) => {
   if (!error) {
      const coord = response.body.features[0].center
      const place = response.body.features[0].place_name
      weatherSettings.coord.latitude = coord[1]
      weatherSettings.coord.longitude = coord[0]
      console.log(place)
      const weatherUrl = `https://api.darksky.net/forecast/${weatherSettings.accessToken}/${weatherSettings.coord.latitude},${weatherSettings.coord.longitude}?units=si&lang=en`
      request({url: weatherUrl, json: true}, (error, response) => {
         if (!error) {
            // console.log(response.body.currently)
            console.log(`Today is ${timeConverter(response.body.currently.time)}`)
            console.log(`${response.body.daily.data[0].summary}. It is currently ${chalk.black.bgGreen(response.body.currently.temperature)} degrees out. There is a ${chalk.black.bgGreen(response.body.currently.precipProbability)}${chalk.black.bgGreen('%')} chance of rain`)
         } else {
            console.log('Unable to connect to weather service')
         }
      })  
   } else {
      console.log('Unable to connect to coord service')
   }
   
})




// 



// Получение координат по названию локации



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