'use strict'
const api = require('./api')
const ui = require('./ui')

const onPlayGame = function (event) {
  event.preventDefault()
  api.playGame()
    .then(ui.onPlayGameSuccess)
    .catch(ui.onError)
}

let currentPlayer = 'X'
// const index = event.target.id
const onBoardClick = function (event) {
  const space = $(event.target)
  if (space.text() === '') {
    space.text(currentPlayer)
    currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
    // if (currentPlayer === 'X') {
    // currentPlayer = 'O'
    // } else {
    // currentPlayer = 'X'
    // }
  } else {
    $('#message').text('That space is taken')
    $('#message').addClass('playerTurn')
    setTimeout(() => {
      $('#message').text('')
      $('#message').removeClass('playerTurn')
    }, 2000)
  }
  if (currentPlayer === 'X') {
    $('#game-message').text('Player One\'s Turn')
  } else if (currentPlayer === 'O') {
    $('#game-message').text('Player Two\'s Turn')
  }
}
// api.boardClick()
//   .then(ui.onBoardClickSuccess)
//   .catch(ui.onError)
// }

module.exports = {
  onPlayGame,
  onBoardClick
}
