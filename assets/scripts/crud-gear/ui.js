'use strict'

const indexMyGearHandlerbars = require('../templates/index-my-gear.handlebars')
const AddGearHandlerbars = require('../templates/add-gear.handlebars')

const indexGearSuccess = (data) => {
  // when user signs in, resources are automatically indexed.
  const indexMyGearHtml = indexMyGearHandlerbars({
    my_gears: data.my_gears
  })
  $('.gear-table').html(indexMyGearHtml)

  // injects the add-gear-form into the "add gear" nav bar
  $('.add-gear').html(AddGearHandlerbars)
}

const createGearSuccess = () => {
  $.notify('Sweet gear 😎', 'success')
}

const createGearFailure = () => {
  $.notify('Oh dear... something went wrong 😳', 'error')
}

const updateGearSuccess = (id) => {
  $.notify('Updated 👍', 'success')

  // without these two lines, modal does not fully dissapears and blocks user from
  // further interactions with window.
  $('.updateGearModal' + id).modal('toggle')
  $('.modal-backdrop').remove()
}

const updateGearFailure = () => {
  $.notify('Oh dear... something went wrong 😳', 'error')
}

const destroyGearSuccess = (id) => {
  $.notify('Deleted', 'success')

  // without these two lines, modal does not fully dissapears and blocks user from
  // further interactions with window.
  $('.destroyGearModal' + id).modal('toggle')
  $('.modal-backdrop').remove()
}

const destroyGearFailure = () => {
  $.notify('Oh dear... something went wrong 😳', 'error')
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
