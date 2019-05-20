const fs = require('fs')
function parseTestScript() {
  const testScriptPath = __dirname + '/../test_script/config.json';
  fs.readFile(testScriptPath,'utf8', (err, data) => {
    console.log('err',err)
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
        const key = step && step.key
        if(key) contentBody += `\t.${action}(${parseTestsSlector}${value ? `,[${value},client.Keys.${key}]` : ''}${value_1 ? `,${value_1}` : ''})\n`
        else contentBody += `\t.${action}(${parseTestsSlector}${value ? `,${value}` : ''}${value_1 ? `,${value_1}` : ''})\n`
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
    }`
    fs.writeFile(__dirname + `/../tests/${testScriptData.title}.js`, content, () => {
      console.log(content)
    })
  })
}

parseTestScript();