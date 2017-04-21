'use strict'

// const getFormFields = require(`../../../lib/get-form-fields`)
// const ui = require('./ui')
const store = require('../store')
const config = require('../config')

const searchSoundsApiByQuery = function () {
  const searchText = $('.search').val()
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
    // $('.search-results').empty()
    // if (results.count == 0) {
    //   $('.message').text('No Results')
    // } else if (results.count > 0) {
    //   for (let i = 0; i < results.results.length; i++) {
    //     const singleSearchResult = soundsTemplate(results.results[i])
    //     $('.search-results').append(singleSearchResult)
    //   }
    //   apiUi.searchSoundsSuccess()
    // }
  })
  $('.search').val('')
}

const addHandlers = () => {
  $('.project-table').on('click', '.search-button', searchSoundsApiByQuery)
}

module.exports = {
  searchSoundsApiByQuery,
  addHandlers
}
