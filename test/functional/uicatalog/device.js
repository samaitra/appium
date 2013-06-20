/*global it:true */
"use strict";

var describeWd = require("../../helpers/driverblock.js").describeForApp('UICatalog')
  , should = require('should');

describeWd('device lock', function(h) {
  it("should lock the device for 4 of seconds (+/- 2 secs)", function(done) {
    var before = new Date().getTime() / 1000;
    h.driver.execute("mobile: lock", [{seconds: 4}], function(err) {
      should.not.exist(err);
      var after = new Date().getTime() / 1000;
      should.ok(after - before <= 6);
      done();
    });
  });
});