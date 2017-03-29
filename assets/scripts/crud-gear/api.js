'use strict'

const config = require('../config')
const store = require('../store')

const indexGear = function () {
  return $.ajax({
    url: config.apiOrigin + '/my_gears',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const showGear = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/my_gears/' + id,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const createGear = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/my_gears',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const updateGear = function (data, id) {
  return $.ajax({
    url: config.apiOrigin + '/my_gears/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const destroyGear = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/my_gears/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  indexGear,
  showGear,
  createGear,
  updateGear,
  destroyGear
}
