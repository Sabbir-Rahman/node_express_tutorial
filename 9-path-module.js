
const path = require('path')

//print /
console.log(path.sep)

//print file path
const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

//print the base file name here test.txt
const base = path.basename(filePath)
console.log(base)

//print the absolute file url
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)