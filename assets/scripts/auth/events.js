'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');
const store = require('../store');

// User can sign up
const onSignUp = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.signUp(data)
  .then(ui.signUpSuccess)
  // .then(onSignIn(event))
  .catch(ui.signUpFailure);
};

// User can sign in
const onSignIn = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.signIn(data)
  .then((response) => {
    store.user = response.user;
    return store.user;
  })
    .then(ui.signInSuccess)
    .catch(ui.signInFailure);
};

// User can change her password
const onChangePassword = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
    ;
};

// User can sign out
const onSignOut = function (event) {
  event.preventDefault();

  api.signOut()
    .then(() => {
      delete store.user;
      return store;
    })
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
    ;
};

const addHandlers = () => {
  $('.sign-up').on('submit', onSignUp);
  $('.sign-in').on('submit', onSignIn);
  $('.change-password').on('submit', onChangePassword);
  $('.sign-out').on('click', onSignOut);
};

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  addHandlers,
};
