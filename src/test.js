const fs = require('fs')
function parseTestScript() {
  let content = `
  module.exports = {
  `
  const testScriptPath = "test_script/config.json";
  // const testScript = JSON.parse();
  fs.readFile(testScriptPath,'utf8', (err, data) => {
    const testScriptData = JSON.parse(data);

    const content = `
      console.log('aaaaaaa')
    `
    fs.writeFile(`tests/${testScriptData.title}.js`, content, () => {
      console.log('ok')
    })
  })
}

parseTestScript();