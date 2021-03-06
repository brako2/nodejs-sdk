"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Attributes = _interopRequireDefault(require("./Attributes"));

var _ItemPictures = _interopRequireDefault(require("./ItemPictures"));

var _Variations = _interopRequireDefault(require("./Variations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Item model module.
 * @module model/Item
 * @version 3.0.0
 */
var Item = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Item</code>.
   * @alias module:model/Item
   * @param title {String} 
   * @param categoryId {String} 
   * @param price {Number} 
   * @param currencyId {String} 
   * @param availableQuantity {String} 
   * @param buyingMode {String} 
   * @param listingTypeId {String} 
   * @param condition {String} 
   * @param description {String} 
   * @param videoId {String} 
   * @param pictures {Array.<module:model/ItemPictures>} 
   */
  function Item(title, categoryId, price, currencyId, availableQuantity, buyingMode, listingTypeId, condition, description, videoId, pictures) {
    _classCallCheck(this, Item);

    Item.initialize(this, title, categoryId, price, currencyId, availableQuantity, buyingMode, listingTypeId, condition, description, videoId, pictures);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Item, null, [{
    key: "initialize",
    value: function initialize(obj, title, categoryId, price, currencyId, availableQuantity, buyingMode, listingTypeId, condition, description, videoId, pictures) {
      obj['title'] = title;
      obj['category_id'] = categoryId;
      obj['price'] = price;
      obj['currency_id'] = currencyId;
      obj['available_quantity'] = availableQuantity;
      obj['buying_mode'] = buyingMode;
      obj['listing_type_id'] = listingTypeId;
      obj['condition'] = condition;
      obj['description'] = description;
      obj['video_id'] = videoId;
      obj['pictures'] = pictures;
    }
    /**
     * Constructs a <code>Item</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Item} obj Optional instance to populate.
     * @return {module:model/Item} The populated <code>Item</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Item();

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('category_id')) {
          obj['category_id'] = _ApiClient["default"].convertToType(data['category_id'], 'String');
        }

        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient["default"].convertToType(data['price'], 'Number');
        }

        if (data.hasOwnProperty('currency_id')) {
          obj['currency_id'] = _ApiClient["default"].convertToType(data['currency_id'], 'String');
        }

        if (data.hasOwnProperty('available_quantity')) {
          obj['available_quantity'] = _ApiClient["default"].convertToType(data['available_quantity'], 'String');
        }

        if (data.hasOwnProperty('buying_mode')) {
          obj['buying_mode'] = _ApiClient["default"].convertToType(data['buying_mode'], 'String');
        }

        if (data.hasOwnProperty('listing_type_id')) {
          obj['listing_type_id'] = _ApiClient["default"].convertToType(data['listing_type_id'], 'String');
        }

        if (data.hasOwnProperty('condition')) {
          obj['condition'] = _ApiClient["default"].convertToType(data['condition'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('video_id')) {
          obj['video_id'] = _ApiClient["default"].convertToType(data['video_id'], 'String');
        }

        if (data.hasOwnProperty('pictures')) {
          obj['pictures'] = _ApiClient["default"].convertToType(data['pictures'], [_ItemPictures["default"]]);
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], [_Attributes["default"]]);
        }

        if (data.hasOwnProperty('variations')) {
          obj['variations'] = _ApiClient["default"].convertToType(data['variations'], [_Variations["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Item;
}();
/**
 * @member {String} title
 */


Item.prototype['title'] = undefined;
/**
 * @member {String} category_id
 */

Item.prototype['category_id'] = undefined;
/**
 * @member {Number} price
 */

Item.prototype['price'] = undefined;
/**
 * @member {String} currency_id
 */

Item.prototype['currency_id'] = undefined;
/**
 * @member {String} available_quantity
 */

Item.prototype['available_quantity'] = undefined;
/**
 * @member {String} buying_mode
 */

Item.prototype['buying_mode'] = undefined;
/**
 * @member {String} listing_type_id
 */

Item.prototype['listing_type_id'] = undefined;
/**
 * @member {String} condition
 */

Item.prototype['condition'] = undefined;
/**
 * @member {String} description
 */

Item.prototype['description'] = undefined;
/**
 * @member {String} video_id
 */

Item.prototype['video_id'] = undefined;
/**
 * @member {Array.<module:model/ItemPictures>} pictures
 */

Item.prototype['pictures'] = undefined;
/**
 * @member {Array.<module:model/Attributes>} attributes
 */

Item.prototype['attributes'] = undefined;
/**
 * @member {Array.<module:model/Variations>} variations
 */

Item.prototype['variations'] = undefined;
var _default = Item;
exports["default"] = _default;