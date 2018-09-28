var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.json({ sts: 'working' });
});

app.post('/login', function (req, res) {
    var us = req.body;
    res.json({ 
        usNm: us.usNm, 
        pass: us.pass,
        sts : (us.usNm == 'android' && us.pass == 123456789)
    });
});

app.listen(3000, function () {
    console.log("Started on PORT 3000");
})