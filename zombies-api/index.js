'use strict';

var Express = require('express');
var App = Express();
var ZombieNamifier = require('zombie-name-generator');
var BodyParser = require('body-parser');

App.use(BodyParser.json());

var checkForApplicationText = function (req, res, next) {
  if (req.headers["content-type"] === 'application/text') {
    res.status(400).send({
      "content-type": "Should be application/json"
    });
    return;
  }
  next();
};

App.use(function (req, res, next) {
  console.log('Middleware 2');
  next();
});

var errorHandler = function (err, req, res, next) {
  if (err) {
    console.log(err);
    res.status(500).send(err);
    return;
  }
  next();
};

App.use(errorHandler);

//App.get('/zombies/:name', checkForApplicationText, function (req, res) {
App.get('/zombies/:name', function (req, res) {
  throw Error('My bad error');
//  var name = req.param('name');
//  var zombiedName = ZombieNamifier(name);
//  var output = {
//    original: name,
//    zombified: zombiedName
//  };
//  res.send(output);
});

App.post('/zombies', function (req, res) {
  var name = req.body.name;
  if (!name) {
    res.send(400, {
      name: "Name is required"
    });
    return;
  }

  var zombiedName = ZombieNamifier(name);
  var output = {
    original: name,
    zombified: zombiedName
  };
  res.send(output);
});



var server = App.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});