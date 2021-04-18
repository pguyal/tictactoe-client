'use strict'

const store = require('../store')

const onPlayGameSuccess = function (response) {
  store.game = response.game
  // console.log(response.game)
  // console.log(response.game.cells)
  $('#game-message').show()
  $('#game-message').text("Player X's turn")
  // $('#play-game').hide()
  $('#game-board').show()
  $('.box').empty()
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
