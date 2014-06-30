var request = require('promise-request');
var cheerio = require('cheerio');
var _ = require('lodash');
var fs = require('fs');
var path = require('path');

var destination = process.argv.slice(2)[0];

function fetchWebpage(){
  var url = 'http://octicons.github.com/';

  return request(url)
    .then(function(body){
      $ = cheerio.load(body);

      return $('.js-search-result').toArray();
    });
}

function handleItems(items){
  var icons = _.map(items, function(item){
    var element = $(item);

    return {
      name: element.data('name'),
      tags: element.data('keywords').split(' ').join(', ')
    };
  });

  return {
    icomoon: icons
  };
}

function writeFile(icons){
  var file = destination ? path.join(destination, 'data', 'icons-octicons.json') : path.join(__dirname, 'icons-octicons.json');
  var data = JSON.stringify(icons, null, 2);

  console.log('writing file to ' + file);

  fs.writeFile(file, data, function(error){
    if(error)
      return console.log(error);
  });
}

fetchWebpage()
  .then(handleItems)
  .then(writeFile);