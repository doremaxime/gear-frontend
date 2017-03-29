'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

// Gets all the gear
const onIndexGear = function () {
  api.indexGear()
    .then(ui.indexGearSuccess)
    .catch(ui.indexGearFailure)
}

// Creates a new gear
const onCreateGear = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.createGear(data)
    .then(ui.createGearSuccess)
    .then(onIndexGear)
    .catch(ui.createGearFailure)
}

// Updates a gear
const onUpdateGear = function (event) {
  event.preventDefault()

  const userInput = getFormFields(event.target)
  const id = userInput.my_gear.id

  api.updateGear(userInput, id)
    .then(ui.updateGearSuccess(id))
    .then(onIndexGear)
    .catch(ui.updateGearFailure)
}

// Deletes a gear
const onDestroyGear = function (event) {
  event.preventDefault()

  const id = getFormFields(event.target).my_gear.id
  // console.log(id)

  api.destroyGear(id)
    .then(ui.destroyGearSuccess(id))
    .then(onIndexGear)
    .catch(ui.destroyGearFailure)
}

// user can click to create, update, or delete a gear.
const addHandlers = () => {
  $('.add-gear').on('submit', '.create-gear', onCreateGear)
  $('.gear-table').on('submit', '.update', onUpdateGear)
  $('.gear-table').on('submit', '.delete', onDestroyGear)
}

module.exports = {
  onIndexGear,
  onCreateGear,
  onUpdateGear,
  onDestroyGear,
  addHandlers
}
