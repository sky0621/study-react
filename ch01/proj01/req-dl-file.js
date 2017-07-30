const fs = require('fs')
const request = require('request')

request('http://uta.pw/shodow/img/28/214.png').pipe(fs.createWriteStream('test.png'))
