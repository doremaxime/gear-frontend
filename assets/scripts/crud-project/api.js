'use strict'

const config = require('../config')
const store = require('../store')

const indexProject = function() {
  return $.ajax({
    url: config.apiOrigin + '/projects',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const showProject = function(id) {
  return $.ajax({
    url: config.apiOrigin + '/projects/' + id,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const createProject = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/projects',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const updateProject = function(data, id) {
  return $.ajax({
    url: config.apiOrigin + '/projects/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const destroyProject = function(id) {
  return $.ajax({
    url: config.apiOrigin + '/projects/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  indexProject,
  showProject,
  createProject,
  updateProject,
  destroyProject
}
