"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Item = _interopRequireDefault(require("../model/Item"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Items service.
* @module meli-marketplace-lib/ItemsApi
* @version 3.0.0
*/
var ItemsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ItemsApi. 
  * @alias module:meli-marketplace-lib/ItemsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ItemsApi(apiClient) {
    _classCallCheck(this, ItemsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the itemsIdGet operation.
   * @callback module:meli-marketplace-lib/ItemsApi~itemsIdGetCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Return a Item.
   * @param {String} id 
   * @param {module:meli-marketplace-lib/ItemsApi~itemsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(ItemsApi, [{
    key: "itemsIdGet",
    value: function itemsIdGet(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling itemsIdGet");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/items/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the itemsIdPut operation.
     * @callback module:meli-marketplace-lib/ItemsApi~itemsIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Item.
     * @param {String} id 
     * @param {String} accessToken 
     * @param {module:model/Item} item 
     * @param {module:meli-marketplace-lib/ItemsApi~itemsIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "itemsIdPut",
    value: function itemsIdPut(id, accessToken, item, callback) {
      var postBody = item; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling itemsIdPut");
      } // verify the required parameter 'accessToken' is set


      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling itemsIdPut");
      } // verify the required parameter 'item' is set


      if (item === undefined || item === null) {
        throw new Error("Missing the required parameter 'item' when calling itemsIdPut");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'access_token': accessToken
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/items/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the itemsPost operation.
     * @callback module:meli-marketplace-lib/ItemsApi~itemsPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Item.
     * @param {String} accessToken 
     * @param {module:model/Item} item 
     * @param {module:meli-marketplace-lib/ItemsApi~itemsPostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "itemsPost",
    value: function itemsPost(accessToken, item, callback) {
      var postBody = item; // verify the required parameter 'accessToken' is set

      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling itemsPost");
      } // verify the required parameter 'item' is set


      if (item === undefined || item === null) {
        throw new Error("Missing the required parameter 'item' when calling itemsPost");
      }

      var pathParams = {};
      var queryParams = {
        'access_token': accessToken
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/items', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ItemsApi;
}();

exports["default"] = ItemsApi;