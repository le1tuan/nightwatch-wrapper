const config = require('../nightwatch.conf');
const runAutomationTest = require('../src/test');

module.exports = {
  'google': function(browser) {
    runAutomationTest(browser);
  }
}