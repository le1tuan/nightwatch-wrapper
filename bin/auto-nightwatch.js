#!/usr/bin/env node
'use strict';

const args = process.argv.slice(2);
switch (args[0]){
  case 'start': 
  require(__dirname + '/../src/test.js')
  break;
  default: 
    console.log(`could not found ${args[0]} commandline`)
  break
}
