'use strict'

const gearEvents = require('../crud-gear/events.js')
const projectEvents = require('../crud-project/events.js')

// this function will make the div shake left to right quickly when called
function shakeForm () {
  let l = 20
  for (let i = 0; i < 10; i++)
    $('.row').animate({
      'margin-left': '+=' + (l = -l) + 'px',
      'margin-right': '-=' + l + 'px'
    }, 50)

}

const signUpSuccess = () => {
  $('.clear-input').val('')
}

const signUpFailure = () => {
  $('.clear-input').val('')
  shakeForm()
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
  shakeForm()
}

const changePasswordSuccess = () => {
  $('.home-view-message').text('You have successfully changed password.')
  $('.clear-input').val('')
}

const changePasswordFailure = () => {
  $('.home-view-message').text('error, please try again.')
  $('.clear-input').val('')
  shakeForm()
}

const signOutSuccess = () => {
  $('.home-view-message').text('')
  $('.landing-page-container').css('display', 'unset')
  $('.home-view').css('display', 'none')
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
