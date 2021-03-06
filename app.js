Sugar.extend()
"use strict"

var request = new XMLHttpRequest()
var city = document.getElementById("city").value
var state = document.getElementById("state").value
var button = document.getElementById('refresh')
var date = document.getElementById("todaysdate")


if (document.getElementById("city").value = ''){
  var city = "Flushing"
  }
if (document.getElementById("state").value = ''){
  var state = "NY"
}

request.open("GET","http://api.wunderground.com/api/a4467134470da9d5/forecast/q/" + state + '/' + city + ".json")
request.send()

request.addEventListener("load", function() {
  var response = JSON.parse(request.responseText)

  var day1 = {
    time: new Date().short(),
    lowtemp: response.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    hitemp: response.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    icon: response.forecast.simpleforecast.forecastday[0].icon,
  }

  var day2 = {
    time: new Date().addDays(1).short(),
    lowtemp: response.forecast.simpleforecast.forecastday[1].low.fahrenheit,
    hitemp: response.forecast.simpleforecast.forecastday[1].high.fahrenheit,
    icon: response.forecast.simpleforecast.forecastday[1].icon,
  }

  var day3 = {
    time: new Date().addDays(2).short(),
    lowtemp: response.forecast.simpleforecast.forecastday[2].low.fahrenheit,
    hitemp: response.forecast.simpleforecast.forecastday[2].high.fahrenheit,
    icon: response.forecast.simpleforecast.forecastday[2].icon,
  }

  function range(weather) {
    return weather.lowtemp + "°F ~ " + weather.hitemp + "°F"
  }

  var days = [day1, day2, day3]
  var dates = [document.getElementById("date1"), document.getElementById("date2"), document.getElementById("date3")]
  var temps = [document.getElementById("temp1"), document.getElementById("temp2"), document.getElementById("temp3")]
  var icons = [document.getElementById("img1"), document.getElementById("img2"), document.getElementById("img3")]

  date.textContent = new Date().long()

  days.forEach(function(element, index){
    temps[index].textContent = range(element)
    dates[index].textContent = element.time
    icons[index].src = "http://icons.wxug.com/i/c/i/" + element.icon + ".gif"

  })
})

button.addEventListener("click", function(){
  date.textContent = new Date().long()
  city = document.getElementById("city").value
  state = document.getElementById("state").value
  var newrequest = new XMLHttpRequest()
  newrequest.open("GET","http://api.wunderground.com/api/a4467134470da9d5/forecast/q/" + state + '/' + city + ".json")
  newrequest.send()

  newrequest.addEventListener("load", function() {
    var newresponse = JSON.parse(newrequest.responseText)
    var day1 = {
      time: new Date().short(),
      lowtemp: newresponse.forecast.simpleforecast.forecastday[0].low.fahrenheit,
      hitemp: newresponse.forecast.simpleforecast.forecastday[0].high.fahrenheit,
      icon: newresponse.forecast.simpleforecast.forecastday[0].icon,
    }

    var day2 = {
      time: new Date().addDays(1).short(),
      lowtemp: newresponse.forecast.simpleforecast.forecastday[1].low.fahrenheit,
      hitemp: newresponse.forecast.simpleforecast.forecastday[1].high.fahrenheit,
      icon: newresponse.forecast.simpleforecast.forecastday[1].icon,
    }

    var day3 = {
      time: new Date().addDays(2).short(),
      lowtemp: newresponse.forecast.simpleforecast.forecastday[2].low.fahrenheit,
      hitemp: newresponse.forecast.simpleforecast.forecastday[2].high.fahrenheit,
      icon: newresponse.forecast.simpleforecast.forecastday[2].icon,
    }

    function range(weather) {
      return weather.lowtemp + "°F ~ " + weather.hitemp + "°F"
    }


    var days = [day1, day2, day3]
    var dates = [document.getElementById("date1"), document.getElementById("date2"), document.getElementById("date3")]
    var temps = [document.getElementById("temp1"), document.getElementById("temp2"), document.getElementById("temp3")]
    var icons = [document.getElementById("img1"), document.getElementById("img2"), document.getElementById("img3")]

    days.forEach(function(element, index){
      temps[index].textContent = range(element)
      dates[index].textContent = element.time
      icons[index].src = "http://icons.wxug.com/i/c/i/" + element.icon + ".gif"
    })
  })
})
