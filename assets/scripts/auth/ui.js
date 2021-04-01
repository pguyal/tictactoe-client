'use strict'

const onSignUpSuccess = function () {
  $('#message').text('Account successfully created!')
  $('form').trigger('reset')
}

const onError = function (err) {
  console.error(err)
  $('#message').text('Something went wrong, please try again.')
}

module.exports = {
  onSignUpSuccess,
  onError
}
