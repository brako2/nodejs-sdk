"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AttributesValueStruct = _interopRequireDefault(require("./AttributesValueStruct"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AttributesValues model module.
 * @module model/AttributesValues
 * @version 3.0.0
 */
var AttributesValues = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AttributesValues</code>.
   * @alias module:model/AttributesValues
   */
  function AttributesValues() {
    _classCallCheck(this, AttributesValues);

    AttributesValues.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AttributesValues, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AttributesValues</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttributesValues} obj Optional instance to populate.
     * @return {module:model/AttributesValues} The populated <code>AttributesValues</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AttributesValues();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('struct')) {
          obj['struct'] = _AttributesValueStruct["default"].constructFromObject(data['struct']);
        }
      }

      return obj;
    }
  }]);

  return AttributesValues;
}();
/**
 * @member {String} id
 */


AttributesValues.prototype['id'] = undefined;
/**
 * @member {String} name
 */

AttributesValues.prototype['name'] = undefined;
/**
 * @member {module:model/AttributesValueStruct} struct
 */

AttributesValues.prototype['struct'] = undefined;
var _default = AttributesValues;
exports["default"] = _default;