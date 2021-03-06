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
 * The VariationsAttributeCombinations model module.
 * @module model/VariationsAttributeCombinations
 * @version 3.0.0
 */
var VariationsAttributeCombinations = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VariationsAttributeCombinations</code>.
   * @alias module:model/VariationsAttributeCombinations
   */
  function VariationsAttributeCombinations() {
    _classCallCheck(this, VariationsAttributeCombinations);

    VariationsAttributeCombinations.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VariationsAttributeCombinations, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VariationsAttributeCombinations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VariationsAttributeCombinations} obj Optional instance to populate.
     * @return {module:model/VariationsAttributeCombinations} The populated <code>VariationsAttributeCombinations</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VariationsAttributeCombinations();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('value_id')) {
          obj['value_id'] = _ApiClient["default"].convertToType(data['value_id'], 'String');
        }

        if (data.hasOwnProperty('value_name')) {
          obj['value_name'] = _ApiClient["default"].convertToType(data['value_name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return VariationsAttributeCombinations;
}();
/**
 * @member {String} name
 */


VariationsAttributeCombinations.prototype['name'] = undefined;
/**
 * @member {String} value_id
 */

VariationsAttributeCombinations.prototype['value_id'] = undefined;
/**
 * @member {String} value_name
 */

VariationsAttributeCombinations.prototype['value_name'] = undefined;
var _default = VariationsAttributeCombinations;
exports["default"] = _default;