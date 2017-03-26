'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

// Gets all the gear
const onIndex = function () {
  console.log('index')
  api.index()
    .then(ui.indexSuccess)
    .catch(ui.indexFailure)
}

// Creates a new gear
const onCreate = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.create(data)
    .then(ui.createSuccess)
    .then(onIndex)
    .catch(ui.createFailure)
}

// Updates a gear
const onUpdate = function (event) {
  event.preventDefault()

  const userInput = getFormFields(event.target)
  const id = userInput.my_gear.id

  api.update(userInput, id)
    .then(ui.updateSuccess(id))
    .then(onIndex)
    .catch(ui.updateFailure)
}

// Deletes a gear
const onDestroy = function (event) {
  event.preventDefault()

  const id = getFormFields(event.target).my_gear.id
console.log(id)

  api.destroy(id)
    .then(ui.destroySuccess(id))
    .then(onIndex)
    .catch(ui.destroyFailure)
}

// user can click to create, update, or delete a gear.
const addHandlers = () => {
  $('.gear-table').on('submit', '.create', onCreate)
  $('.gear-table').on('submit', '.update', onUpdate)
  $('.gear-table').on('submit', '.delete', onDestroy)
}

module.exports = {
  onIndex,
  onCreate,
  onUpdate,
  onDestroy,
  addHandlers
}
