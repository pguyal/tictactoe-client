'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = function (event) {
  // prevents the page from refreshing
  event.preventDefault()
  // selecting the form that was submitted
  const form = event.target
  // creating a js object from the forms input values
  const formData = getFormFields(form)
  // pass form data to the api call
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onError)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onError)
}

module.exports = {
  onSignUp,
  onSignIn
}
