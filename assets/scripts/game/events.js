'use strict'
const api = require('./api')
const ui = require('./ui')

const onPlayGame = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.onPlayGameSuccess)
    .catch()
}

module.exports = {
  onPlayGame
}
