// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
Cypress.Cookies.defaults({
    preserve: 'session_id',
  })
  Cypress.Cookies.defaults({
    preserve: ['session_id', 'remember_token'],
  })
  Cypress.Cookies.defaults({
    preserve: /session|remember/,
  })
Cypress.Cookies.defaults({
    preserve: (cookie) => {
      // implement your own logic here
      // if the function returns truthy
      // then the cookie will not be cleared
      // before each test runs
    },
  })
// Alternatively you can use CommonJS syntax:
// require('./commands')
