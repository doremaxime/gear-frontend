'use strict'

const config = require('../config')
const store = require('../store')

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/my_gears',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const show = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/my_gears/' + id,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const create = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/my_gears',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const update = function (data, id) {
  return $.ajax({
    url: config.apiOrigin + '/my_gears/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const destroy = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/my_gears/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy
}
