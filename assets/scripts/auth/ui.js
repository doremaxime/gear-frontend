'use strict'

const gearEvents = require('../crud-gear/events.js')
const projectEvents = require('../crud-project/events.js')
const empty = require('../templates/empty.handlebars')

const signUpSuccess = () => {
  $('.clear-input').val('')
}

const signUpFailure = () => {
  $('.clear-input').val('')
  $.notify("Email taken or passwords don't match", 'error')
}

const signInSuccess = () => {
  // fetches user resources on log in.
  gearEvents.onIndexGear()
  projectEvents.onIndexProject()

  $('.landing-page-container').css('display', 'none')
  $('.home-view').css('display', 'unset')
  $('.clear-input').val('')
}

const signInFailure = () => {
  $('.clear-input').val('')
  $.notify('Invalid email or password', 'error')
}

const changePasswordSuccess = () => {
  $.notify('Password changed', 'success')
  $('.clear-input').val('')
}

const changePasswordFailure = () => {
  $.notify('There was an error, please try again.', 'error')
  $('.clear-input').val('')
}

const signOutSuccess = () => {
  $('.home-view-message').text('')
  $('.landing-page-container').css('display', 'unset')
  $('.home-view').css('display', 'none')
  $.notify('Come again soon!', 'success')

  // clears the user resources for next user.
  $('.project-table').html(empty)
  $('.gear-table').html(empty)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess
}
