'use strict'
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onPlayGame = function (event) {
  event.preventDefault()
  currentPlayer = 'X'
  api.playGame()
    .then(ui.onPlayGameSuccess)
    .catch(ui.onError)
}

let currentPlayer = 'X'
// const index = event.target.id
const onBoardClick = function (event) {
  const space = $(event.target)
  if (store.game.over === true) {
    return
  }
  if (space.text() === '') {
    space.text(currentPlayer)
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    // the above code is shorthand for the code below:
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
    $('#game-message').text('Player X\'s Turn')
  } else if (currentPlayer === 'O') {
    $('#game-message').text('Player O\'s Turn')
  }
  checkWin()
}

const checkWin = function () {
  let winner
  const boxes = $('.box')
  // store.game.cells = $.makeArray(boxes)
  // store.game.cells = boxes.map(box => boxes[box].innerText)
  const gameCells = boxes.map(box => boxes[box].innerText)
  store.game.cells = $.makeArray(gameCells)
  store.game.over = false
  // if space is occcupied by an X in certain orders, declare X as winner
  if ((store.game.cells[0] === 'X' && store.game.cells[1] === 'X' && store.game.cells[2] === 'X') ||
    (store.game.cells[3] === 'X' && store.game.cells[4] === 'X' && store.game.cells[5] === 'X') ||
    (store.game.cells[6] === 'X' && store.game.cells[7] === 'X' && store.game.cells[8] === 'X') ||
    (store.game.cells[0] === 'X' && store.game.cells[3] === 'X' && store.game.cells[6] === 'X') ||
    (store.game.cells[1] === 'X' && store.game.cells[4] === 'X' && store.game.cells[7] === 'X') ||
    (store.game.cells[2] === 'X' && store.game.cells[5] === 'X' && store.game.cells[8] === 'X') ||
    (store.game.cells[0] === 'X' && store.game.cells[4] === 'X' && store.game.cells[8] === 'X') ||
    (store.game.cells[2] === 'X' && store.game.cells[4] === 'X' && store.game.cells[6] === 'X')) {
    winner = 'X'
    store.game.over = true
    $('#game-message').text(`Player ${winner} wins!`)
  // if space is occcupied by an O in certain orders, declare O as winner
  } else if ((store.game.cells[0] === 'O' && store.game.cells[1] === 'O' && store.game.cells[2] === 'O') ||
     (store.game.cells[3] === 'O' && store.game.cells[4] === 'O' && store.game.cells[5] === 'O') ||
     (store.game.cells[6] === 'O' && store.game.cells[7] === 'O' && store.game.cells[8] === 'O') ||
     (store.game.cells[0] === 'O' && store.game.cells[3] === 'O' && store.game.cells[6] === 'O') ||
     (store.game.cells[1] === 'O' && store.game.cells[4] === 'O' && store.game.cells[7] === 'O') ||
     (store.game.cells[2] === 'O' && store.game.cells[5] === 'O' && store.game.cells[8] === 'O') ||
     (store.game.cells[0] === 'O' && store.game.cells[4] === 'O' && store.game.cells[8] === 'O') ||
     (store.game.cells[2] === 'O' && store.game.cells[4] === 'O' && store.game.cells[6] === 'O')) {
    winner = 'O'
    store.game.over = true
    $('#game-message').text(`Player ${winner} wins!`)
  } else if (store.game.cells.includes('') === false) {
    store.game.over = true
    $('#game-message').text('It\'s a tie!')
  }
}
// api.boardClick(game)
//   .then(ui.onBoardClickSuccess)
//   .catch(ui.onError)

module.exports = {
  onPlayGame,
  onBoardClick
}
