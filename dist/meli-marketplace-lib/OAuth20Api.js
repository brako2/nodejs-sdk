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
* OAuth20 service.
* @module meli-marketplace-lib/OAuth20Api
* @version 3.0.0
*/
var OAuth20Api = /*#__PURE__*/function () {
  /**
  * Constructs a new OAuth20Api. 
  * @alias module:meli-marketplace-lib/OAuth20Api
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function OAuth20Api(apiClient) {
    _classCallCheck(this, OAuth20Api);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the auth operation.
   * @callback module:meli-marketplace-lib/OAuth20Api~authCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Authentication Endpoint
   * @param {module:model/String} responseType 
   * @param {String} clientId 
   * @param {String} redirectUri 
   * @param {module:meli-marketplace-lib/OAuth20Api~authCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(OAuth20Api, [{
    key: "auth",
    value: function auth(responseType, clientId, redirectUri, callback) {
      var postBody = null; // verify the required parameter 'responseType' is set

      if (responseType === undefined || responseType === null) {
        throw new Error("Missing the required parameter 'responseType' when calling auth");
      } // verify the required parameter 'clientId' is set


      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling auth");
      } // verify the required parameter 'redirectUri' is set


      if (redirectUri === undefined || redirectUri === null) {
        throw new Error("Missing the required parameter 'redirectUri' when calling auth");
      }

      var pathParams = {};
      var queryParams = {
        'response_type': responseType,
        'client_id': clientId,
        'redirect_uri': redirectUri
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/authorization', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getToken operation.
     * @callback module:meli-marketplace-lib/OAuth20Api~getTokenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request Access Token
     * Partner makes a request to the token endpoint by adding the following parameters described below
     * @param {Object} opts Optional parameters
     * @param {String} opts.grantType 
     * @param {String} opts.clientId 
     * @param {String} opts.clientSecret 
     * @param {String} opts.redirectUri 
     * @param {String} opts.code 
     * @param {String} opts.refreshToken 
     * @param {module:meli-marketplace-lib/OAuth20Api~getTokenCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "getToken",
    value: function getToken(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'grant_type': opts['grantType'],
        'client_id': opts['clientId'],
        'client_secret': opts['clientSecret'],
        'redirect_uri': opts['redirectUri'],
        'code': opts['code'],
        'refresh_token': opts['refreshToken']
      };
      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/oauth/token', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return OAuth20Api;
}();

exports["default"] = OAuth20Api;