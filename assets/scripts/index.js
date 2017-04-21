'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const crudGearEvents = require('./crud-gear/events.js')
const crudProjectEvents = require('./crud-project/events.js')
const notificationPupUps = require('./notification')
const weather = require('./weather/events.js')

$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandlers()
  crudGearEvents.addHandlers()
  crudProjectEvents.addHandlers()
  notificationPupUps
  weather.addHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
