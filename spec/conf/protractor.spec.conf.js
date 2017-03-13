var config;

config = require('../../lib/protractor.conf.js');

config.capabilities = {
  browserName: 'firefox'
};

config.framework = 'mocha';

config.specs = [
  '../generalStepDefs/support/initGlobals.js',
  '../**/*.spec.js'
];

config.allScriptsTimeout = 20000;

exports.config = config;
