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
    instance = new meli.ItemsHealthApi();
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

  describe('ItemsHealthApi', function() {
    describe('itemsIdHealthActionsGet', function() {
      it('should call itemsIdHealthActionsGet successfully', function(done) {
        //uncomment below and update the code to test itemsIdHealthActionsGet
        //instance.itemsIdHealthActionsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('itemsIdHealthGet', function() {
      it('should call itemsIdHealthGet successfully', function(done) {
        //uncomment below and update the code to test itemsIdHealthGet
        //instance.itemsIdHealthGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sitesSiteIdHealthLevelsGet', function() {
      it('should call sitesSiteIdHealthLevelsGet successfully', function(done) {
        //uncomment below and update the code to test sitesSiteIdHealthLevelsGet
        //instance.sitesSiteIdHealthLevelsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
