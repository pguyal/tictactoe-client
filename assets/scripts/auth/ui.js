'use strict'

const store = require('../store')

const onSignUpSuccess = function () {
  $('#message').text('Account successfully created!')
  setTimeout(() => {
    $('#message').fadeOut('slow')
  }, 5000)
  $('form').trigger('reset')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text(response.user.email + ' signed in successfully')
  setTimeout(() => {
    $('#message').fadeOut('slow')
  }, 5000)
  $('form').trigger('reset')
  $('#sign-out').show()
  $('#play-game').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}

const onSignOutSuccess = function () {
  store.user = null
  $('#message').text('Signed out successfully')
  setTimeout(() => {
    $('#message').fadeOut('slow')
  }, 5000)
  $('form').trigger('reset')
}

const onError = function () {
  $('#message').text('Something went wrong, please try again.')
  setTimeout(() => {
    $('#message').fadeOut('slow')
  }, 5000)
  $('form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onError
}
