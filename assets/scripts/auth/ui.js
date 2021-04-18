'use strict'

const store = require('../store')

const onSignUpSuccess = function () {
  $('#message').text('Account successfully created!')
  $('#message').addClass('success')
  setTimeout(() => {
    $('#message').text('')
    $('#message').removeClass('success')
  }, 2000)
  $('form').trigger('reset')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text(response.user.email + ' signed in successfully')
  $('#message').addClass('success')
  setTimeout(() => {
    $('#message').text('')
    $('#message').removeClass('success')
  }, 2000)
  $('form').trigger('reset')
  $('#sign-out').show()
  $('#play-game').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}

const onSignOutSuccess = function () {
  store.user = null
  $('#message').text('Signed out successfully')
  $('#message').addClass('success')
  setTimeout(() => {
    $('#message').text('')
    $('#message').removeClass('success')
  }, 2000)
  $('form').trigger('reset')
  $('#game-message').hide()
  $('#play-game').hide()
  $('#sign-out').hide()
  $('#game-board').hide()
  $('#sign-up').show()
  $('#sign-in').show()
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
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onError
}
