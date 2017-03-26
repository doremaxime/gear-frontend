'use strict';

const indexMyGearHandlerbars = require('../templates/index-my-gear.handlebars');

const indexSuccess = (data) => {
  const indexMyGearHtml = indexMyGearHandlerbars({
  });
  $('.gear-table').html(indexMyGearHtml);
  console.log(data);
};

const createSuccess = (data) => {
  console.log(data);
  $('.home-view-message').text('You have successfully created.')
};

const createFailure = (error) => {
  console.log(error);
  $('.home-view-message').text('You have not successfully created.')
};

const updateSuccess = (data) => {
  console.log(data);
  $('.home-view-message').text('You have successfully updated.')
};

const updateFailure = (error) => {
  console.log(error);
  $('.home-view-message').text('You have not successfully updated.')
};

const destroySuccess = (data) => {
  console.log(data);
  $('.home-view-message').text('You have successfully deleted.')
};

const destroyFailure = (error) => {
  console.log(error);
  $('.home-view-message').text('You have not successfully deleted.')
};

module.exports = {
  indexSuccess,
  createSuccess,
  createFailure,
  updateSuccess,
  updateFailure,
  destroySuccess,
  destroyFailure,
};
