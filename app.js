const { readFile,writeFile } = require('fs')
const util = require('util')

//reading the file with promise
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


//assync mode

// const getText = (path) =>{
//     return new Promise((resolve, reject) =>{
//         readFile(path,'utf8', (err,data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./content/first.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err))

const start = async() => {
    try{
        const first = await readFilePromise('./content/first.txt', 'utf8')
        const second = await readFilePromise('./content/second.txt','utf8')
        await writeFilePromise('./content/result-mind-grenade.txt',`This is awesone : ${first} and ${second}`)
        console.log(first, second)
    } catch(error){
        console.log(error)
    }
    
}

start()