'use strict';

var _ = require("lodash");

var internals = {};

internals.zombieNameParts = [
  'guts',
  'brains',
  'spine',
  'eyes',
  'undead',
  'rotten',
  'smelly'
];



function zombieNamifier(name) {
  var index = _.random(internals.zombieNameParts.length - 1);
  return name + '-' + internals.zombieNameParts[index];
}


// This is the 'this' in the angular service
// Makes stuff public
module.exports = zombieNamifier;

module.exports.someFancyFunction = function () {
  console.log('Hello World');
};

//module.exports = function (name) {
//
//};