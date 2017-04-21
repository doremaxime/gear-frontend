'use strict'

const indexProjectsHandlerbars = require('../templates/index-projects.handlebars')
const indexWeatherHandlerbars = require('../templates/index-weather.handlebars')
const AddProjectHandlerbars = require('../templates/add-project.handlebars')

const indexProjectSuccess = (data) => {
  // when user signs in, her resources are automatically indexed.
  const indexProjectsHtml = indexProjectsHandlerbars({
    projects: data.projects
  })
  $('.project-table').html(indexProjectsHtml)
  const indexWeatherHtml = indexWeatherHandlerbars({
    projects: data.projects
  })
  $('.weather-table').html(indexWeatherHtml)

  // inserts the add-project-form into the "add project" nav bar
  $('.add-project').html(AddProjectHandlerbars)
}

const createProjectSuccess = () => {
  $.notify('Added !', 'success')
}

const createProjectFailure = () => {
  $.notify('Oh dear... something went wrong 😳', 'error')
}

const updateProjectSuccess = (id) => {
  // without these two lines, modal does not fully dissapears and blocks user from
  // further interactions with window.
  $('.updateProjectModal' + id).modal('toggle')
  $('.modal-backdrop').remove()

  $.notify('Ok, all up to date!', 'success')
}

const updateProjectFailure = () => {
  $.notify('Oh dear... something went wrong 😳', 'error')
}

const destroyProjectSuccess = (id) => {
  $.notify('Deleted', 'success')

  // without these two lines, modal does not fully dissapears and blocks user from
  // further interactions with window.
  $('.destroyProjectModal' + id).modal('toggle')
  $('.modal-backdrop').remove()
}

const destroyProjectFailure = () => {
  $.notify('Oh dear... something went wrong 😳', 'error')
}

module.exports = {
  indexProjectSuccess,
  createProjectSuccess,
  createProjectFailure,
  updateProjectSuccess,
  updateProjectFailure,
  destroyProjectSuccess,
  destroyProjectFailure
}
