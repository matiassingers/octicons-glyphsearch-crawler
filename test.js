'use strict';

var assert = require('assert');
var octicons = require('./octicons');

var fetch = octicons.fetchWebpage();

describe('fetchWebpage()', function(){
  it('should return an array of icons', function(){
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
