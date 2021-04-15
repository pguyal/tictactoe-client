'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
console.log('authEvents', authEvents)
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-out').hide()
  $('#play-game').hide()
  $('#game-board').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#play-game').on('click', gameEvents.onPlayGame)
  $('#game-board').on('click', gameEvents.onPlayerClick)
})
