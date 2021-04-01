'use strict'

const store = require('../store')

const onSignUpSuccess = function () {
  $('#message').text('Account successfully created!')
  $('form').trigger('reset')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text(response.user.email + ' signed in successfully')
  $('form').trigger('reset')
}

const onError = function (err) {
  console.error(err)
  $('#message').text('Something went wrong, please try again.')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onError
}
