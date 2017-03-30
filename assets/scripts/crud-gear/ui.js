'use strict'

const indexMyGearHandlerbars = require('../templates/index-my-gear.handlebars')
const AddGearHandlerbars = require('../templates/add-gear.handlebars')

// this function will make the div shake left to right quickly when called
function shakeForm () {
  let l = 20
  for (let i = 0; i < 10; i++)
    $('.row').animate({
      'margin-left': '+=' + (l = -l) + 'px',
      'margin-right': '-=' + l + 'px'
    }, 50)

}

const indexGearSuccess = (data) => {
  // when user signs in, her resources are automatically indexed.
  const indexMyGearHtml = indexMyGearHandlerbars({
    my_gears: data.my_gears
  })
  $('.gear-table').html(indexMyGearHtml)

  // injects the add-gear-form into the "add gear" nav bar
  $('.add-gear').html(AddGearHandlerbars)
}

const createGearSuccess = (data) => {
  console.log(data)
  // $('.home-view-message').text('You have successfully added your gear.')
  $.notify('Sweet gear 😎', 'success')
}

const createGearFailure = (error) => {
  console.log(error)
  // $('.home-view-message').text('You have not successfully created your gear.')
  $.notify('Oh dear... something went wrong 😳', 'error')
}

const updateGearSuccess = (data, id) => {
  console.log(data)
  // $('.home-view-message').text('You have successfully updated your gear.')
  $.notify('Updated 👍', 'success')
  $('.updateGearModal' + id).modal('toggle')
  $('.modal-backdrop').remove()
}

const updateGearFailure = (error) => {
  console.log(error)
  // $('.home-view-message').text('You have not successfully updated your gear.')
  $.notify('Oh dear... something went wrong 😳', 'error')
  // shakeForm()
}

const destroyGearSuccess = (data, id) => {
  console.log(data)
  // $('.home-view-message').text('You have successfully deleted your gear.')
  $.notify('Deleted', 'success')
  $('.destroyGearModal' + id).modal('toggle')
  $('.modal-backdrop').remove()
}

const destroyGearFailure = (error) => {
  console.log(error)
  // $('.home-view-message').text('You have not successfully deleted your gear.')
  $.notify('Oh dear... something went wrong 😳', 'error')
  // shakeFromAuthUi.shakeForm()
}

module.exports = {
  indexGearSuccess,
  createGearSuccess,
  createGearFailure,
  updateGearSuccess,
  updateGearFailure,
  destroyGearSuccess,
  destroyGearFailure
}
