"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _VariationsAttributeCombinations = _interopRequireDefault(require("./VariationsAttributeCombinations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Variations model module.
 * @module model/Variations
 * @version 3.0.0
 */
var Variations = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Variations</code>.
   * @alias module:model/Variations
   */
  function Variations() {
    _classCallCheck(this, Variations);

    Variations.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Variations, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Variations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Variations} obj Optional instance to populate.
     * @return {module:model/Variations} The populated <code>Variations</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Variations();

        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient["default"].convertToType(data['price'], 'Number');
        }

        if (data.hasOwnProperty('attribute_combinations')) {
          obj['attribute_combinations'] = _ApiClient["default"].convertToType(data['attribute_combinations'], [_VariationsAttributeCombinations["default"]]);
        }

        if (data.hasOwnProperty('available_quantity')) {
          obj['available_quantity'] = _ApiClient["default"].convertToType(data['available_quantity'], 'Number');
        }

        if (data.hasOwnProperty('sold_quantity')) {
          obj['sold_quantity'] = _ApiClient["default"].convertToType(data['sold_quantity'], 'Number');
        }

        if (data.hasOwnProperty('picture_ids')) {
          obj['picture_ids'] = _ApiClient["default"].convertToType(data['picture_ids'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return Variations;
}();
/**
 * @member {Number} price
 */


Variations.prototype['price'] = undefined;
/**
 * @member {Array.<module:model/VariationsAttributeCombinations>} attribute_combinations
 */

Variations.prototype['attribute_combinations'] = undefined;
/**
 * @member {Number} available_quantity
 */

Variations.prototype['available_quantity'] = undefined;
/**
 * @member {Number} sold_quantity
 */

Variations.prototype['sold_quantity'] = undefined;
/**
 * @member {Array.<String>} picture_ids
 */

Variations.prototype['picture_ids'] = undefined;
var _default = Variations;
exports["default"] = _default;