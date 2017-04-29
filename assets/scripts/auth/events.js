'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

// User can sign up and be automatically signed in.
const onSignUp = function(event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  const signInData = {
    credentials: {
      email: data.credentials.email,
      password: data.credentials.password
    }
  }
  api.signUp(data)
    .then(() => {
      api.signIn(signInData)
        .then((response) => {
          store.user = response.user
          return store.user
        })
        .then(ui.signInSuccess)
        .catch(ui.signUpFailure)
    })
    .then(ui.success)
    .catch(ui.signUpFailure)
}

// User can sign in
const onSignIn = function(event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.signIn(data)
    .then((response) => {
      store.user = response.user
      return store.user
    })
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// User can change password
const onChangePassword = function(event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// User can sign out
const onSignOut = function(event) {
  event.preventDefault()

  api.signOut()
    .then(() => {
      delete store.user
      return store
    })
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = () => {
  $('.sign-up').on('submit', onSignUp)
  $('.sign-in').on('submit', onSignIn)
  $('.change-password').on('submit', onChangePassword)
  $('.sign-out').on('click', onSignOut)

  // Shows the sign up form when user clicks on 'new user'
  $('.dropdown-button').dropdown()
  $('.modal').modal()
  $('.signup-toggle').click(function() {
    $(this).hide()
    $('.signup-form').show(300)
    $('.policy').css('visibility', 'visible')
  })
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  addHandlers
}
