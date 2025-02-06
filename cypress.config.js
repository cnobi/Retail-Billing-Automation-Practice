const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://retail-billing.wlink.com.np/',
    defaultCommandTimeout: 10000,
    env: {
      CYPRESS_USERNAME: 'susan.shrestha',
      CYPRESS_PASSWORD: 'zxcvbnzxcvbn123$$$'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
