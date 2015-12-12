'use strict';

describe('Filter: iso', function () {

  // load the filter's module
  beforeEach(module('progApp'));

  // initialize a new instance of the filter before each test
  var iso;
  beforeEach(inject(function ($filter) {
    iso = $filter('iso');
  }));

  it('should return the input prefixed with "iso filter:"', function () {
    var text = 'angularjs';
    expect(iso(text)).toBe('iso filter: ' + text);
  });

});
