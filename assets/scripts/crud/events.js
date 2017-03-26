'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');

// Gets all the gear
const onIndex = function() {
  console.log('index');
  api.index()
    .then(ui.indexSuccess)
    .catch(ui.indexFailure);
};

// Creates a new gear
const onCreate = function(event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.create(data)
    .then(ui.createSuccess)
    .then(onIndex)
    .catch(ui.createFailure);
};

// Updates a gear
const onUpdate = function(event) {
  event.preventDefault();

  let id = $(event.target).data('climb');
  let userInput = getFormFields(event.target);

  api.update(userInput, id)
    .then(ui.updateSuccess(id))
    .then(onIndex)
    .catch(ui.updateFailure);
};

// Deletes a gear
const onDestroy = function(event) {
  event.preventDefault();

  let id = $(event.target).data('id');

  api.destroy(id)
    .then(ui.destroySuccess(id))
    .then(onIndex)
    .catch(ui.destroyFailure);
};

// user can clck to create, update, or delete a gear.
const addHandlers = () => {
  $('.create-climb').on('submit', onCreate);
  $('.index').on('submit', '.update-climb', onUpdate);
  $('.index').on('click', '.destroy', onDestroy);
};

module.exports = {
  onIndex,
  onCreate,
  onUpdate,
  onDestroy,
  addHandlers,
};
