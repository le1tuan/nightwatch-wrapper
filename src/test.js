const guide =  require('./config.json')

function parseActions(guide) {
  return JSON.stringify(guide);
}

function runAutomationTest(browser) {
  if(Object.keys(browser).lenght <= 0 || browser === undefined || browser === null) {
    throw new Error('Can not found browser')
  }
  const parseGuide = parseActions(guide);
  if(browser.hasOwnProperty('url') && guide.hasOwnProperty('url')) {
    browser.url(guide.url);
  }
  if (guide.hasOwnProperty('scenario')) {
    guide.scenario.map((item) => {
      if(Array.isArray(item.action)) {
        let customBrowser = browser;
        for(let i = 0; i < item.action.length; i ++) {
          customBrowser = customBrowser[item.action[i]];
        }
        customBrowser.apply(null, item.value);
      } else {
        if (item.hasOwnProperty('action') && browser.hasOwnProperty(item.action)) {
          if (Array.isArray(item.value)) {
            browser[item.action].apply(null, item.value)
          } else {
            browser[item.action](item.value)
          }
        }
      }
    })
    browser.end();
  }
}

module.exports = runAutomationTest;