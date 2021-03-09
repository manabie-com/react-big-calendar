'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

exports.__esModule = true
exports.default = void 0

var _propTypes = _interopRequireDefault(require('prop-types'))

var _react = _interopRequireDefault(require('react'))

var ShowMoreButton = function ShowMoreButton(_ref) {
  var key = _ref.key,
    onClick = _ref.onClick,
    label = _ref.label
  return _react.default.createElement(
    'a',
    {
      key: key,
      href: '#',
      className: 'rbc-show-more',
      onClick: onClick,
    },
    label
  )
}

ShowMoreButton.propTypes =
  process.env.NODE_ENV !== 'production'
    ? {
        key: _propTypes.default.string.isRequired,
        onClick: _propTypes.default.func.isRequired,
        label: _propTypes.default.string.isRequired,
        extraEventsCount: _propTypes.default.number,
      }
    : {}
var _default = ShowMoreButton
exports.default = _default
module.exports = exports['default']
