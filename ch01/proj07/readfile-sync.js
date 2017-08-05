const fs = require('fs')

const data = fs.readFileSync('kotowaza.txt', 'utf-8')
console.log(data)

fs.readFile('kotowaza.txt', 'utf-8', readHandler)

function readHandler(err, data) {
    console.log(data)
}
