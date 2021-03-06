"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Categories service.
* @module meli-marketplace-lib/CategoriesApi
* @version 3.0.0
*/
var CategoriesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CategoriesApi. 
  * @alias module:meli-marketplace-lib/CategoriesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CategoriesApi(apiClient) {
    _classCallCheck(this, CategoriesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the categoriesCategoryIdGet operation.
   * @callback module:meli-marketplace-lib/CategoriesApi~categoriesCategoryIdGetCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Return by category.
   * @param {String} categoryId 
   * @param {module:meli-marketplace-lib/CategoriesApi~categoriesCategoryIdGetCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(CategoriesApi, [{
    key: "categoriesCategoryIdGet",
    value: function categoriesCategoryIdGet(categoryId, callback) {
      var postBody = null; // verify the required parameter 'categoryId' is set

      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling categoriesCategoryIdGet");
      }

      var pathParams = {
        'category_id': categoryId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/categories/{category_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the sitesSiteIdCategoriesGet operation.
     * @callback module:meli-marketplace-lib/CategoriesApi~sitesSiteIdCategoriesGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return a categories by site.
     * @param {String} siteId 
     * @param {module:meli-marketplace-lib/CategoriesApi~sitesSiteIdCategoriesGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "sitesSiteIdCategoriesGet",
    value: function sitesSiteIdCategoriesGet(siteId, callback) {
      var postBody = null; // verify the required parameter 'siteId' is set

      if (siteId === undefined || siteId === null) {
        throw new Error("Missing the required parameter 'siteId' when calling sitesSiteIdCategoriesGet");
      }

      var pathParams = {
        'site_id': siteId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/sites/{site_id}/categories', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the sitesSiteIdDomainDiscoverySearchGet operation.
     * @callback module:meli-marketplace-lib/CategoriesApi~sitesSiteIdDomainDiscoverySearchGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Predictor
     * @param {String} siteId 
     * @param {String} q 
     * @param {String} limit 
     * @param {module:meli-marketplace-lib/CategoriesApi~sitesSiteIdDomainDiscoverySearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "sitesSiteIdDomainDiscoverySearchGet",
    value: function sitesSiteIdDomainDiscoverySearchGet(siteId, q, limit, callback) {
      var postBody = null; // verify the required parameter 'siteId' is set

      if (siteId === undefined || siteId === null) {
        throw new Error("Missing the required parameter 'siteId' when calling sitesSiteIdDomainDiscoverySearchGet");
      } // verify the required parameter 'q' is set


      if (q === undefined || q === null) {
        throw new Error("Missing the required parameter 'q' when calling sitesSiteIdDomainDiscoverySearchGet");
      } // verify the required parameter 'limit' is set


      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling sitesSiteIdDomainDiscoverySearchGet");
      }

      var pathParams = {
        'site_id': siteId
      };
      var queryParams = {
        'q': q,
        'limit': limit
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/sites/{site_id}/domain_discovery/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return CategoriesApi;
}();

exports["default"] = CategoriesApi;