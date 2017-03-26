'use strict'

const indexMyGearHandlerbars = require('../templates/index-my-gear.handlebars')

const indexSuccess = (data) => {
  const indexMyGearHtml = indexMyGearHandlerbars({
    my_gears: data.my_gears
  })
  $('.gear-table').html(indexMyGearHtml)
  console.log(data)
}

const createSuccess = (data) => {
  console.log(data)
  $('.home-view-message').text('You have successfully added your gear.')
}

const createFailure = (error) => {
  console.log(error)
  $('.home-view-message').text('You have not successfully created your gear.')
}

const updateSuccess = (data) => {
  console.log(data)
  $('.home-view-message').text('You have successfully updated your gear.')
}

const updateFailure = (error) => {
  console.log(error)
  $('.home-view-message').text('You have not successfully updated your gear.')
}

const destroySuccess = (data) => {
  console.log(data)
  $('.home-view-message').text('You have successfully deleted your gear.')
}

const destroyFailure = (error) => {
  console.log(error)
  $('.home-view-message').text('You have not successfully deleted your gear.')
}

module.exports = {
  indexSuccess,
  createSuccess,
  createFailure,
  updateSuccess,
  updateFailure,
  destroySuccess,
  destroyFailure
}
