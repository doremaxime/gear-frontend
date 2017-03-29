'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

// Gets all the project
const onIndexProject = function () {
  api.indexProject()
    .then(ui.indexProjectSuccess)
    .catch(ui.indexProjectFailure)
}

// Creates a new project
const onCreateProject = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.createProject(data)
    .then(ui.createProjectSuccess)
    .then(onIndexProject)
    .catch(ui.createProjectFailure)
}

// Updates a project
const onUpdateProject = function (event) {
  event.preventDefault()

  const userInput = getFormFields(event.target)
  const id = userInput.project.id

  api.updateProject(userInput, id)
    .then(ui.updateProjectSuccess(id))
    .then(onIndexProject)
    .catch(ui.updateProjectFailure)
}

// Deletes a project
const onDestroyProject = function (event) {
  event.preventDefault()

  const id = getFormFields(event.target).project.id
  api.destroyProject(id)
    .then(ui.destroyProjectSuccess(id))
    .then(onIndexProject)
    .catch(ui.destroyProjectFailure)
}

// user can click to create, update, or delete a project.
const addHandlers = () => {
  $('.add-project').on('submit', '.create-project', onCreateProject)
  $('.project-table').on('submit', '.update-project', onUpdateProject)
  $('.project-table').on('submit', '.delete-project', onDestroyProject)
}

module.exports = {
  onIndexProject,
  onCreateProject,
  onUpdateProject,
  onDestroyProject,
  addHandlers
}