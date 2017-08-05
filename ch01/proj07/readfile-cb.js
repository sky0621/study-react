const fs = require('fs')
fs.readFile('kotowaza.txt', 'utf-8', (err, data) => { console.log(data) })

const f1 = function (s) { console.log(s) }
const f2 = (s) => { console.log(s) }

f1('hoge')
f2('huga')
