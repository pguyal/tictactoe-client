'use strict'
const api = require('./api')
const ui = require('./ui')

const onPlayGame = function (event) {
  event.preventDefault()
  api.playGame()
    .then(ui.onPlayGameSuccess)
    .catch()
}

module.exports = {
  onPlayGame
}
