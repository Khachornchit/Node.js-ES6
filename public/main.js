'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var port = 3031;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://mongo:27017/docker-node-mongo', { useNewUrlParser: true }).then(function () {
    return console.log('MongoDB Connected Successfully !');
}).catch(function (err) {
    return console.log(err);
});

var Item = require('./Models/Item');

app.get('/', function (req, res) {
    Item.find().then(function (items) {
        return res.render('index', { items: items });
    }).catch(function (err) {
        return res.status(404).json({ msg: 'No items found' });
    });
});

app.post('/item/add', function (req, res) {
    var newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(function (item) {
        return res.redirect('/');
    });
});

app.listen(port, function () {
    return console.log('Server running ...');
});