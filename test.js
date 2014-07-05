'use strict';

var fs = require('fs');
var path = require('path');
var assert = require('assert');
var cheerio = require('cheerio');
var octicons = require('./octicons');

describe('fetchWebpage()', function(){
  var fetch = octicons.fetchWebpage();

  it('should return array of icons', function(cb){
    fetch
      .then(function(icons){
        if(icons.length){
          cb();
        }
      });
  });

  it('each icon should have data-name attr', function(cb){
    fetch
      .then(function(icons){
        var element = $(icons[0]);

        if(element.data('name')){
          cb();
        }
      });
  });

  it('each icon should have data-keywords attr', function(cb){
    fetch
      .then(function(icons){
        var element = $(icons[0]);

        if(element.data('keywords')){
          cb();
        }
      });
  });
});


describe('run()', function(){
  var file = path.join(__dirname, 'icons-octicons.json');

  fs.unlink(file, function(){
    octicons.run();
  });

  it('should write a file to __dirname when no directory is supplied', function(cb){
    this.timeout(5000);

    if (fs.existsSync(path.join(__dirname, 'icons-octicons.json'))) {
      cb();
    }
  });
});

