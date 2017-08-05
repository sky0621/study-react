const fs = require('fs')

function readFile_pr(fname) {
    return new Promise(
        (resolveFunc) => {
            fs.readFile(fname, 'utf-8', (err, data) => { resolveFunc(data) })
        }
    )
}

readFile_pr('a.txt')
.then((text) => {
    console.log(text)
    return readFile_pr('b.txt')
})
.then((text) => {
    console.log(text)
    return readFile_pr('c.txt')
})
.then((text) => {
    console.log(text)
})
