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
* ItemsHealth service.
* @module meli-marketplace-lib/ItemsHealthApi
* @version 3.0.0
*/
var ItemsHealthApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ItemsHealthApi. 
  * @alias module:meli-marketplace-lib/ItemsHealthApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ItemsHealthApi(apiClient) {
    _classCallCheck(this, ItemsHealthApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the itemsIdHealthActionsGet operation.
   * @callback module:meli-marketplace-lib/ItemsHealthApi~itemsIdHealthActionsGetCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Return item health actions by id.
   * @param {String} id 
   * @param {String} accessToken 
   * @param {module:meli-marketplace-lib/ItemsHealthApi~itemsIdHealthActionsGetCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(ItemsHealthApi, [{
    key: "itemsIdHealthActionsGet",
    value: function itemsIdHealthActionsGet(id, accessToken, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling itemsIdHealthActionsGet");
      } // verify the required parameter 'accessToken' is set


      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling itemsIdHealthActionsGet");
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
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/items/{id}/health/actions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the itemsIdHealthGet operation.
     * @callback module:meli-marketplace-lib/ItemsHealthApi~itemsIdHealthGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return health by id.
     * @param {String} id 
     * @param {String} accessToken 
     * @param {module:meli-marketplace-lib/ItemsHealthApi~itemsIdHealthGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "itemsIdHealthGet",
    value: function itemsIdHealthGet(id, accessToken, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling itemsIdHealthGet");
      } // verify the required parameter 'accessToken' is set


      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling itemsIdHealthGet");
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
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/items/{id}/health', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the sitesSiteIdHealthLevelsGet operation.
     * @callback module:meli-marketplace-lib/ItemsHealthApi~sitesSiteIdHealthLevelsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return health levels.
     * @param {String} siteId 
     * @param {module:meli-marketplace-lib/ItemsHealthApi~sitesSiteIdHealthLevelsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "sitesSiteIdHealthLevelsGet",
    value: function sitesSiteIdHealthLevelsGet(siteId, callback) {
      var postBody = null; // verify the required parameter 'siteId' is set

      if (siteId === undefined || siteId === null) {
        throw new Error("Missing the required parameter 'siteId' when calling sitesSiteIdHealthLevelsGet");
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
      return this.apiClient.callApi('/sites/{site_id}/health_levels', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ItemsHealthApi;
}();

exports["default"] = ItemsHealthApi;