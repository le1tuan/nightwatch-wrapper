const fs = require('fs')
const utils = require('./utils');

function parseTestScript() {
  const testScriptPath = __dirname + '/../test_script/consadfig.json';
  console.log(`Starting parse JSON file: ${testScriptPath}`);
  if (!utils.checkExistFolder(testScriptPath)) {
    console.error(`Cannot find : ${testScriptPath}`);
    return false;
  }
  fs.readFile(testScriptPath,'utf8', (err, data) => {
    if (err) {
      console.log('err',err)
      throw new Error(err)
    }
    const testScriptData = JSON.parse(data);
    let contentBody = ''
    let header = ''
    testScriptData.test_group.map((group, indexGroup) => 
      {
        group.steps.map((step)=> {
        const parseTestsSlector = step.selector ? JSON.stringify(`${step.selector}`) : '';
        const value = JSON.stringify(step.value) || ''
        const value_1 = JSON.stringify(step.value_1) || ''
        const action = `${step.action}${step && step.action_1 ? `.${step.action_1}` : ''}`
        contentBody += `\t.${action}(${parseTestsSlector}${value ? `,${value}` : ''}${value_1 ? `,${value_1}` : ''})\n`
        })
        header +=`${JSON.stringify(group.tag)} : function(client){
          client
          .url(${JSON.stringify(testScriptData.url)})
          .waitForElementVisible('body', 10000)
          ${contentBody}
          .pause(2000)
          .end
        }${indexGroup < testScriptData.test_group.length - 1 ? ',' : '' }\n`
    })
    const content =
    `module.exports = {
      ${header}
    }`;
    fs.writeFile(__dirname + `/../tests/${utils(testScriptData.title)}.js`, content, (err) => {
      if (err) {
        console.log(err)
      }
      console.log(`Re-write file ${__dirname}/../tests/${utils(testScriptData.title)}.js`)
    })
  })
}

parseTestScript();