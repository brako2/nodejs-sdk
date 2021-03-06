"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AttributesValueStruct = _interopRequireDefault(require("./AttributesValueStruct"));

var _AttributesValues = _interopRequireDefault(require("./AttributesValues"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Attributes model module.
 * @module model/Attributes
 * @version 3.0.0
 */
var Attributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Attributes</code>.
   * @alias module:model/Attributes
   */
  function Attributes() {
    _classCallCheck(this, Attributes);

    Attributes.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Attributes, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Attributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Attributes} obj Optional instance to populate.
     * @return {module:model/Attributes} The populated <code>Attributes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Attributes();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('value_id')) {
          obj['value_id'] = _ApiClient["default"].convertToType(data['value_id'], 'String');
        }

        if (data.hasOwnProperty('value_name')) {
          obj['value_name'] = _ApiClient["default"].convertToType(data['value_name'], 'String');
        }

        if (data.hasOwnProperty('value_struct')) {
          obj['value_struct'] = _AttributesValueStruct["default"].constructFromObject(data['value_struct']);
        }

        if (data.hasOwnProperty('values')) {
          obj['values'] = _ApiClient["default"].convertToType(data['values'], [_AttributesValues["default"]]);
        }

        if (data.hasOwnProperty('attribute_group_id')) {
          obj['attribute_group_id'] = _ApiClient["default"].convertToType(data['attribute_group_id'], 'String');
        }

        if (data.hasOwnProperty('attribute_group_name')) {
          obj['attribute_group_name'] = _ApiClient["default"].convertToType(data['attribute_group_name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Attributes;
}();
/**
 * @member {String} id
 */


Attributes.prototype['id'] = undefined;
/**
 * @member {String} name
 */

Attributes.prototype['name'] = undefined;
/**
 * @member {String} value_id
 */

Attributes.prototype['value_id'] = undefined;
/**
 * @member {String} value_name
 */

Attributes.prototype['value_name'] = undefined;
/**
 * @member {module:model/AttributesValueStruct} value_struct
 */

Attributes.prototype['value_struct'] = undefined;
/**
 * @member {Array.<module:model/AttributesValues>} values
 */

Attributes.prototype['values'] = undefined;
/**
 * @member {String} attribute_group_id
 */

Attributes.prototype['attribute_group_id'] = undefined;
/**
 * @member {String} attribute_group_name
 */

Attributes.prototype['attribute_group_name'] = undefined;
var _default = Attributes;
exports["default"] = _default;