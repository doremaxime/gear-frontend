'use strict'

// const getFormFields = require(`../../../lib/get-form-fields`)
// const ui = require('./ui')
const store = require('../store')
const config = require('../config')

const searchWeatherApiByQuery = function () {
  const searchText = $('.weather-input-search').val()
  const data = {
    search: {
      query: searchText
    }
  }
  $.ajax({
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    url: config.apiOrigin + '/search/weather',
    method: 'POST',
    data: data
  }).done(function (results) {
    console.log(results)
    const searchResult = ('<h3>' + results.name + '</h3> <p>' + '<img src="http://openweathermap.org/img/w/' + results.weather[0].icon + '.png"' + '</p> <p> Temp: ' + results.main.temp + '°F </p> <p> Cloudiness: ' + results.clouds.all + '% </p> <p> Wind: ' + results.wind.speed + 'mph </p>')
    $('.weather-api-response').html(searchResult)
  })
  $('.weather-input-search').val('')
}

const addHandlers = () => {
  $('.weather-table').on('click', '.search-button', searchWeatherApiByQuery)
}

module.exports = {
  searchWeatherApiByQuery,
  addHandlers
}
