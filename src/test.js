const fs = require('fs')
function parseTestScript() {
  const testScriptPath = __dirname +'/../config-automation/config.json';
  fs.readFile(testScriptPath,'utf8', (err, data) => {
    const testScriptData = JSON.parse(data);
    let contentBody = ''
    let header = ''
    testScriptData.test_group.map((group, indexGroup) => 
      {
        group.steps.map((step,index)=> {
        const parseTestID = step.id ? JSON.stringify(`#${step.id}`) : '';
        const value = JSON.stringify(step.value) || ''
        const value_1 = JSON.stringify(step.value_1) || ''
        const action = `${step.action}${step && step.action_1 ? `.${step.action_1}` : ''}`
        if(step.action === 'pause'){
          contentBody += `.${step.action}(${value})\n`
        }else if(step && step.typeID === 'class') contentBody += `.${action}(${JSON.stringify(step.id)}${value ? `,${value}` : ''})\n`
        else contentBody += `.${action}(${parseTestID}${value ? `,${value}` : ''}${value_1 ? `,${value_1}` : ''})\n`
        })
        header +=
        `${JSON.stringify(group.tag)} : function(client){
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
    }`
    fs.writeFile(`tests/${testScriptData.title}.js`, content, () => {
      console.log(content)
    })
  })
}

parseTestScript();