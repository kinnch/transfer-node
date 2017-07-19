const express = require('express');
const app = express();

app.get('/balance', function (req, res) {
    res.sendStatus(500);
});

app.post('/transfer', function (req, res) {
    res.sendStatus(500);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})