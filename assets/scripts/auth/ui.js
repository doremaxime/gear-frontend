'use strict'

const gearEvents = require('../crud-gear/events.js')
const projectEvents = require('../crud-project/events.js')

const signUpSuccess = () => {
  $('.clear-input').val('')
}

const signUpFailure = () => {
  $('.clear-input').val('')
  $.notify("Email taken or passwords don't match", 'error')
  // shakeForm()
}

const signInSuccess = () => {
  $('.landing-page-container').css('display', 'none')
  $('.home-view').css('display', 'unset')
  $('.clear-input').val('')
  gearEvents.onIndexGear()
  projectEvents.onIndexProject()
}

const signInFailure = () => {
  $('.clear-input').val('')
  // shakeForm()
  $.notify('Invalid email or password', 'error')
}

const changePasswordSuccess = () => {
  // $('.home-view-message').text('You have successfully changed password.')
  $.notify('Password changed', 'success')
  $('.clear-input').val('')
}

const changePasswordFailure = () => {
  // $('.home-view-message').text('error, please try again.')
  $.notify('Old password is not correct', 'error')
  $('.clear-input').val('')
  // shakeForm()
}

const signOutSuccess = () => {
  $('.home-view-message').text('')
  $('.landing-page-container').css('display', 'unset')
  $('.home-view').css('display', 'none')
  $.notify('Come again soon!', 'success')
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
