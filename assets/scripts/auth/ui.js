'use strict';

const events = require('../crud/events.js');

const signUpSuccess = () => {
  $('.landing-page-message').text('success, please sign in.')
  $('.clear-input').val('');
};

const signUpFailure = () => {
  $('.landing-page-message').text('error, please try again.')
  $('.clear-input').val('');
};

const signInSuccess = () => {
  $('.landing-page-message').text('')
  $('.landing-page-container').css('display', 'none');
  $('.home-view').css('display', 'unset');
  $('.clear-input').val('');
  events.onIndex();
};

const signInFailure = () => {
  $('.landing-page-message').text('error, please try again.')
  $('.clear-input').val('');
};

const changePasswordSuccess = () => {
  $('.home-view-message').text('You have successfully changed password.')
  $('.clear-input').val('');
};

const changePasswordFailure = () => {
  $('.home-view-message').text('error, please try again.')
  $('.clear-input').val('');
};

const signOutSuccess = () => {
  $('.home-view-message').text('')
  $('.landing-page-container').css('display', 'unset');
  $('.home-view').css('display', 'none');
};

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
}
