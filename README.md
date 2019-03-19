````
Setup environment
````
1. Install nodeJS:
https://nodejs.org/en/

2. Install yarn: 
https://yarnpkg.com/en/docs/install#windows-stable


3. run command line:
    // install geckodriver
    - npm install geckodriver --save-dev 
    // install ChromeDriver
    - npm install chromedriver --save-dev
    // enable safari
    - safaridriver --enable

4. Download java: https://www.oracle.com/technetwork/java/javase/downloads/index.html

````
Configuration
````
1. create nightwatch.json file
    - source code:
```
{
  "src_folders" : ["tests"],

  "webdriver" : {
    "start_process": true,
    "server_path": "node_modules/.bin/chromedriver",
    "port": 9515
  },

  "test_settings" : {
    "default" : {
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    }
  }
}
```

2. creating nightwatch.conf.js file
```
const chromedriver = require("chromedriver");
module.exports = (function (settings) {
  settings.test_workers = false;
  settings.webdriver.server_path = chromedriver.path;
  return settings;
})(require("./nightwatch.json"));
```
If run on MacOS:

```
module.exports = (function(settings) {
  settings.test_workers = false;
  return settings;
})(require('./nightwatch.json'));
```

```
Start automation
```
1. runing commandline:
    // install all library
    - yarn install
    // To link all path of library
    - npm link

2. Creating "tests" folder
3. Creating "test_script" folder
4. Creating "config.json" folder to writing steps of testting auto
5. Run commandline: 
    // to generate code automation:
    - auto-nightwatch start
    // to run auto mation:
    - yarn run nightwatch


Doccument of action:
- Support basic event of night watch
  1. setValue: http://nightwatchjs.org/api/setValue.html
  2. value: http://nightwatchjs.org/api/#assert-value
  3. click: http://nightwatchjs.org/api/click.html
  
