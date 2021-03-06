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
 * RestClient service.
 * @module meli-marketplace-lib/RestClientApi
 * @version 3.0.0
 */
var RestClientApi = /*#__PURE__*/function () {
  /**
   * Constructs a new RestClientApi.
   * @alias module:meli-marketplace-lib/RestClientApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  function RestClientApi(apiClient) {
    _classCallCheck(this, RestClientApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the resourceDelete operation.
   * @callback module:meli-marketplace-lib/RestClientApi~resourceDeleteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Resource path DELETE
   * @param {String} resource
   * @param {String} accessToken
   * @param {module:meli-marketplace-lib/RestClientApi~resourceDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(RestClientApi, [{
    key: "resourceDelete",
    value: function resourceDelete(resource, accessToken, callback) {
      var postBody = null; // verify the required parameter 'resource' is set

      if (resource === undefined || resource === null) {
        throw new Error("Missing the required parameter 'resource' when calling resourceDelete");
      } // verify the required parameter 'accessToken' is set


      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling resourceDelete");
      }

      var pathParams = {
        resource: resource
      };
      var queryParams = {
        access_token: accessToken
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi(resource, "DELETE", pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the resourceGet operation.
     * @callback module:meli-marketplace-lib/RestClientApi~resourceGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resource path GET
     * @param {String} resource
     * @param {Object} queryParams
     * @param {String} accessToken
     */

  }, {
    key: "resourceGet",
    value: function resourceGet(resource, queryParams, accessToken) {
      var postBody = null; // verify the required parameter 'resource' is set

      if (resource === undefined || resource === null) {
        throw new Error("Missing the required parameter 'resource' when calling resourceGet");
      } // verify the required queryParams are set


      if (queryParams === undefined || queryParams === null) {
        throw new Error("Missing queryParams when calling resourceGet");
      } // verify accessToken is set


      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing accessToken when calling resourceGet");
      }

      queryParams["access_token"] = accessToken;
      var pathParams = {
        resource: resource
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      var callback = null;
      return this.apiClient.callApi(resource, "GET", pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the resourcePost operation.
     * @callback module:meli-marketplace-lib/RestClientApi~resourcePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resourse path POST
     * @param {String} resource
     * @param {String} accessToken
     * @param {Object} body
     * @param {module:meli-marketplace-lib/RestClientApi~resourcePostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "resourcePost",
    value: function resourcePost(resource, body, accessToken) {
      var postBody = body; // verify the required parameter 'resource' is set

      if (resource === undefined || resource === null) {
        throw new Error("Missing the required parameter 'resource' when calling resourcePost");
      } // verify accessToken is set


      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing accessToken when calling resourcePost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling resourcePost");
      }

      var pathParams = {
        resource: resource
      };
      var queryParams = {
        access_token: accessToken
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ["application/json"];
      var accepts = [];
      var returnType = null;
      var callback = null;
      console.log(resource);
      console.log(postBody);
      console.log(queryParams);
      return this.apiClient.callApi(resource, "POST", pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the resourcePut operation.
     * @callback module:meli-marketplace-lib/RestClientApi~resourcePutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resourse path PUT
     * @param {String} resource
     * @param {String} accessToken
     * @param {Object} body
     * @param {module:meli-marketplace-lib/RestClientApi~resourcePutCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "resourcePut",
    value: function resourcePut(resource, body, accessToken) {
      var postBody = body; // verify the required parameter 'resource' is set

      if (resource === undefined || resource === null) {
        throw new Error("Missing the required parameter 'resource' when calling resourcePut");
      } // verify the required parameter 'accessToken' is set


      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing accessToken when calling resourceGet");
      }

      queryParams["access_token"] = accessToken; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling resourcePut");
      }

      var pathParams = {
        resource: resource
      };
      var queryParams = {
        access_token: accessToken
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ["application/json"];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi(resource, "PUT", pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return RestClientApi;
}();

exports["default"] = RestClientApi;