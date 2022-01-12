var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');

var app = express();
app.use(express.json())

app.post('', function (req, res) {
    console.log('----------------------------------')
    console.log(req.body?.text);
    // res = res.status(200);
    // if (req.get('Content-Type')) {
    //     console.log("Content-Type: " + req.get('Content-Type'));
    //     res = res.type(req.get('Content-Type'));
    // }
    // res.send(req.body);
    res.end()
});

// app.put('', function (req, res) {
//     console.log('----------------------------------')
//     console.log(req);
//     res.end()
// });

app.listen(7000, () => console.log("Running on http://localhost:7000"));