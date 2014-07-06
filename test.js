'use strict';

var fs = require('fs');
var path = require('path');
var assert = require('assert');
var cheerio = require('cheerio');
var octicons = require('./octicons');

describe('fetchWebpage()', function(){
  var fetch = octicons.fetchWebpage();

  it('should return array of icons', function(){
    fetch
      .then(function(icons){
        assert(icons.length);
      });
  });

  it('each icon should have data-name attr', function(){
    fetch
      .then(function(icons){
        var element = $(icons[0]);
        assert(element.data('name'));
      });
  });

  it('each icon should have data-keywords attr', function(){
    fetch
      .then(function(icons){
        var element = $(icons[0]);
        assert(element.data('keywords'));
      });
  });
});
