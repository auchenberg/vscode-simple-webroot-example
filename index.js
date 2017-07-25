var express = require('express')

var app = express();

app.use(express.static('app'))

app.listen('8080', () => {
    console.log('Now listeining on http://localhost:8080')
})

