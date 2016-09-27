var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hello Express!')
})

app.get('/ppp', function (req, res) {
    res.send('Hello ppp!')
})

app.listen(3000,function(){
    console.log('running on port 3000...plz visit http://localhost:3000');
})
