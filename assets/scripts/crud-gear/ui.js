'use strict'

const indexMyGearHandlerbars = require('../templates/index-my-gear.handlebars')
const AddGearHandlerbars = require('../templates/add-gear.handlebars')
const AddProjectHandlerbars = require('../templates/add-project.handlebars')

const indexGearSuccess = (data) => {
  // when user signs in, her resources are automatically indexed.
  const indexMyGearHtml = indexMyGearHandlerbars({
    my_gears: data.my_gears
  })
  $('.gear-table').html(indexMyGearHtml)

  // injects the add-gear-form into the "add gear" nav bar
  $('.add-gear').html(AddGearHandlerbars)
}

const indexProjectSuccess = (data) => {
  // injects the add-project-form into the "add project" nav bar
  $('.add-project').html(AddProjectHandlerbars)
}

const createGearSuccess = (data) => {
  console.log(data)
  $('.home-view-message').text('You have successfully added your gear.')
}

const createGearFailure = (error) => {
  console.log(error)
  $('.home-view-message').text('You have not successfully created your gear.')
}

const updateGearSuccess = (data) => {
  console.log(data)
  $('.home-view-message').text('You have successfully updated your gear.')
}

const updateGearFailure = (error) => {
  console.log(error)
  $('.home-view-message').text('You have not successfully updated your gear.')
}

const destroyGearSuccess = (data) => {
  console.log(data)
  $('.home-view-message').text('You have successfully deleted your gear.')
}

const destroyGearFailure = (error) => {
  console.log(error)
  $('.home-view-message').text('You have not successfully deleted your gear.')
}

module.exports = {
  indexGearSuccess,
  indexProjectSuccess,
  createGearSuccess,
  createGearFailure,
  updateGearSuccess,
  updateGearFailure,
  destroyGearSuccess,
  destroyGearFailure
}
