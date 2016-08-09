/**
 * Created by shiyue on 16-8-5.
 */
const Postcode = require('../src/transformer/Postcode');
const Barcode = require('../src/transformer/Barcode');
const postcode = new Postcode();
const barcode = new Barcode();

var express = require('express');
var app = new express();
app.use(express.static('public/interface'));

app.get('/postcode', function (req, res) {
    /*console.log(req.query.code);
    console.log(postcode.zipcodeTraBarcode(req.query.code));*/
    res.send(postcode.zipcodeTraBarcode(req.query.code));
});

app.get('/barcode', function (req, res) {
    console.log(barcode.barcodeTraZipcode(req.query.code));
    res.send(barcode.barcodeTraZipcode(req.query.code));
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('app listening at http://%s:%s', host, port);
});
