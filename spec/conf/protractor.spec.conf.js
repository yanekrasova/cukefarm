// Generated by CoffeeScript 1.12.4
(function() {
  var config;

  config = require('../../src/protractor.conf.coffee').config;

  config.capabilities = {
    browserName: 'chrome'
  };

  config.framework = 'mocha';

  config.specs = '../**/*.spec.coffee';

  config.allScriptsTimeout = 20000;

  exports.config = config;

}).call(this);