
const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first, second)

//if file is not there node will created one if file is already there node will overwrite
//if flag set to append it append text with previous text
writeFileSync(
    './content/result-sync.txt',
    `This result is appending with prev one because flag a is set : ${first}, ${second}`,
    { flag: 'a'}
)
