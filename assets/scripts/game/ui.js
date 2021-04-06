'use strict'

const store = require('../store')

const onPlayGameSuccess = function (info) {
  store.game = info.game
  console.log(info.game.cells)
  console.log(info.game._id)
  $('#game-message').show()
  $('#game-message').text("Player One's turn")
  $('#play-game').hide()
  $('#game-board').show()
}

const onError = function () {
  $('#message').text('Something went wrong, please try again.')
  $('#message').addClass('failure')
  setTimeout(() => {
    $('#message').text('')
    $('#message').removeClass('failure')
  }, 5000)
  $('form').trigger('reset')
}

module.exports = {
  onPlayGameSuccess,
  onError
}
