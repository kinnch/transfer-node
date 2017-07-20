const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// app.use(express.json());
// app.use(express.urlencoded());
var bank = {
    "1234567890": {
        "balance": 103433000,
        "tpd": 0
    },
    "1212312121": {
        "balance": 10000,
        "tpd":0
    }
}

app.get('/balance', function (req, res) {
    var accnumber = req.query.account
    var amount = 10000
    res.status(200).send({ accnumber, amount })
});

app.post('/transfer', function (req, res) {
    var source = req.body.sourceAccountNumber
    console.log(bank[source]);
    var amount = bank[source];
    res.status(200).send(amount)
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

function checkTransactionCount(accnumber){
    console.log(bank[accnumber])
}