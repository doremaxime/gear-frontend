'use strict'

const indexMyGearHandlerbars = require('../templates/index-my-gear.handlebars')
const AddGearHandlerbars = require('../templates/add-gear.handlebars')
const shakeFromAuthUi = require('../auth/ui')

const indexGearSuccess = (data) => {
  // when user signs in, her resources are automatically indexed.
  const indexMyGearHtml = indexMyGearHandlerbars({
    my_gears: data.my_gears
  })
  $('.gear-table').html(indexMyGearHtml)

  // injects the add-gear-form into the "add gear" nav bar
  $('.add-gear').html(AddGearHandlerbars)
}

const createGearSuccess = (data) => {
  console.log(data)
  $('.home-view-message').text('You have successfully added your gear.')
  // $.notify('Title', 'Your message here', 'success', 5000)
}

const createGearFailure = (error) => {
  console.log(error)
  $('.home-view-message').text('You have not successfully created your gear.')
}

const updateGearSuccess = (data, id) => {
  console.log(data)
  $('.home-view-message').text('You have successfully updated your gear.')
  $('.updateGearModal' + id).modal('toggle')
  $('.modal-backdrop').remove()
}

const updateGearFailure = (error) => {
  console.log(error)
  $('.home-view-message').text('You have not successfully updated your gear.')
  shakeFromAuthUi.shakeForm()
}

const destroyGearSuccess = (data, id) => {
  console.log(data)
  $('.home-view-message').text('You have successfully deleted your gear.')
  $('.destroyGearModal' + id).modal('toggle')
  $('.modal-backdrop').remove()
}

const destroyGearFailure = (error) => {
  console.log(error)
  $('.home-view-message').text('You have not successfully deleted your gear.')
  shakeFromAuthUi.shakeForm()
}

module.exports = {
  indexGearSuccess,
  createGearSuccess,
  createGearFailure,
  updateGearSuccess,
  updateGearFailure,
  destroyGearSuccess,
  destroyGearFailure
}
