'use strict'

const indexProjectsHandlerbars = require('../templates/index-projects.handlebars')
const AddProjectHandlerbars = require('../templates/add-project.handlebars')
const shakeFromAuthUi = require('../auth/ui')

const indexProjectSuccess = (data) => {
  // when user signs in, her resources are automatically indexed.
  const indexProjectsHtml = indexProjectsHandlerbars({
    projects: data.projects
  })
  $('.project-table').html(indexProjectsHtml)

  // injects the add-project-form into the "add project" nav bar
  $('.add-project').html(AddProjectHandlerbars)
}

const createProjectSuccess = (data) => {
  console.log(data)
  $('.home-view-message').text('You have successfully added your project.')
}

const createProjectFailure = (error) => {
  console.log(error)
  $('.home-view-message').text('You have not successfully created your project.')
}

const updateProjectSuccess = (data, id) => {
  console.log(data)
  $('.home-view-message').text('You have successfully updated your project.')
  $('.updateProjectModal' + id).modal('toggle')
  $('.modal-backdrop').remove()
}

const updateProjectFailure = (error) => {
  console.log(error)
  $('.home-view-message').text('You have not successfully updated your project.')
  shakeFromAuthUi.shakeForm()
}

const destroyProjectSuccess = (data, id) => {
  console.log(data)
  $('.home-view-message').text('You have successfully deleted your project.')
  $('.destroyProjectModal' + id).modal('toggle')
  $('.modal-backdrop').remove()
}

const destroyProjectFailure = (error) => {
  console.log(error)
  $('.home-view-message').text('You have not successfully deleted your project.')
  shakeFromAuthUi.shakeForm()
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
