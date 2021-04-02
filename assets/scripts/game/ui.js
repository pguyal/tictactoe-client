'use strict'

const store = require('../store')

const onPlayGameSuccess = function (info) {
  store.game = info.game
  console.log(info.game.cells)
  console.log(info.game._id)
  $('#game-message').text("Player one's turn")
  $('#play-game').hide()
  $('#game-board').show()
}

const onError = function () {
  $('#message').text('Something went wrong, please try again.')
  setTimeout(() => {
    $('#message').fadeOut('slow')
  }, 5000)
  $('form').trigger('reset')
}

module.exports = {
  onPlayGameSuccess,
  onError
}
