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

  return icons;
}

fetchWebpage()
  .then(handleItems);