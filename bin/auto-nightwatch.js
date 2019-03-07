#!/usr/bin/env node
'use strict';

async function startNightWatch() {
  const util = require('util');
  const exec = util.promisify(require('child_process').exec);
  const { stdout, stderr } = await exec('yarn run nightwatch');
  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
}

const args = process.argv.slice(2);
switch (args[0]){
  case 'start': 
  require(__dirname+'/../src/test.js')
  startNightWatch()
  break;
  default: 
    console.log(`could not found ${args[0]} commandline`)
  break
}
