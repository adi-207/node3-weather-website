const request = require('request')


const forecast = (lat, lan ,  callback ) => {
    const url = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lan}&exclude=alerts&appid=77267d8f8fba1649207ec9516016d293`

    request({url , json: true}, (error, {body}) => {
        
        if (error) {
            callback('Unable to connect to weather services' , undefined)
        } else if (body.message) {
            callback('Unable to find location' , undefined)
        } else {
            
            callback(undefined, `${body.daily[0].weather[0].description} It is currently ${body.current.temp} degrees out. There wind speed is ${body.current.wind_speed}. The high today is ${body.daily[0].temp.max} with a low of ${body.daily[0].temp.min},`)
        }
    })
}


module.exports = forecast