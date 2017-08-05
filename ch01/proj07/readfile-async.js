const fs = require('fs')

function readFileEx(fname) {
    return new Promise(
        (resolveFunc, rejectFunc) => {
            fs.readFile(fname, 'utf-8', (err, data) => resolveFunc(data))
        }
    )
}

async function readAll(){
    const a = await readFileEx('a.txt')
    console.log(a)
    const b = await readFileEx('b.txt')
    console.log(b)
    const c = await readFileEx('c.txt')
    console.log(c)
}

readAll()
