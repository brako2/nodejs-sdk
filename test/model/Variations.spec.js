/**
 * MELI Markeplace SDK
 * This is a the codebase to generate a SDK for Open Platform Marketplace
 *
 * The version of the OpenAPI document: 0.1.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.meli);
  }
}(this, function(expect, meli) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new meli.Variations();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Variations', function() {
    it('should create an instance of Variations', function() {
      // uncomment below and update the code to test Variations
      //var instane = new meli.Variations();
      //expect(instance).to.be.a(meli.Variations);
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instane = new meli.Variations();
      //expect(instance).to.be();
    });

    it('should have the property attributeCombinations (base name: "attribute_combinations")', function() {
      // uncomment below and update the code to test the property attributeCombinations
      //var instane = new meli.Variations();
      //expect(instance).to.be();
    });

    it('should have the property availableQuantity (base name: "available_quantity")', function() {
      // uncomment below and update the code to test the property availableQuantity
      //var instane = new meli.Variations();
      //expect(instance).to.be();
    });

    it('should have the property soldQuantity (base name: "sold_quantity")', function() {
      // uncomment below and update the code to test the property soldQuantity
      //var instane = new meli.Variations();
      //expect(instance).to.be();
    });

    it('should have the property pictureIds (base name: "picture_ids")', function() {
      // uncomment below and update the code to test the property pictureIds
      //var instane = new meli.Variations();
      //expect(instance).to.be();
    });

  });

}));
