const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },

  e2e: {
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
    //chromeWebSecurity: false, // Add the chromeWebSecurity option here
    baseUrl: 'http://localhost:3000',
  },
});
