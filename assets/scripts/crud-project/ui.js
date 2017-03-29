'use strict'

const indexProjectsHandlerbars = require('../templates/index-projects.handlebars')
const AddProjectHandlerbars = require('../templates/add-project.handlebars')

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

const updateProjectSuccess = (data) => {
  console.log(data)
  $('.home-view-message').text('You have successfully updated your project.')
}

const updateProjectFailure = (error) => {
  console.log(error)
  $('.home-view-message').text('You have not successfully updated your project.')
}

const destroyProjectSuccess = (data) => {
  console.log(data)
  $('.home-view-message').text('You have successfully deleted your project.')
}

const destroyProjectFailure = (error) => {
  console.log(error)
  $('.home-view-message').text('You have not successfully deleted your project.')
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
