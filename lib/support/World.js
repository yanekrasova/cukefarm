// Generated by CoffeeScript 1.12.4
(function() {
  var ElementHelper, Transform, World, chai, chaiAsPromised;

  chai = require('chai');

  chaiAsPromised = require('chai-as-promised');

  ElementHelper = require('./ElementHelper.js');

  Transform = require('./Transform.js');

  World = (function() {
    World.prototype.Q = require('q');

    World.prototype.elementHelper = new ElementHelper();

    World.prototype.transform = new Transform();

    World.prototype.currentPage = null;

    World.prototype.pageObjectMap = null;

    function World() {
      chai.use(chaiAsPromised);
      this.expect = chai.expect;
    }

    return World;

  })();

  module.exports.World = World;

}).call(this);