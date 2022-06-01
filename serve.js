const express = require('express')
const app = express()
var shell = require('shelljs');

app.use(express.static(`${__dirname}/src`))
app.use(express.static(`${__dirname}`))

app.get('/', function (req, res) {
    res.sendFile(`${__dirname}/src/index.html`)
})

app.listen(3000)
shell.exec('google-chrome http://localhost:3000/')