const fs = require('fs')
exports.formatFileName = (name) => name.split(' ').join('_'); 
exports.checkExistFolder = (path) => fs.existsSync(path)

// module.exports = formatFileName;
// module.exports = checkExistFolder;


// const testFormatFileName = () => {
//   const testcase_1 = '123 123 asbddba/_ ';
//   const expect_1 = '123_123_asbddba/__';
//   const actual_1 = formatFileName(testcase_1);
//   // console.log(expect_1, actual_1);
//   return expect_1 === actual_1;
// }

// console.log(testFormatFileName());
