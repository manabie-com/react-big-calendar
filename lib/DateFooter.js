'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

exports.__esModule = true
exports.default = void 0

var _propTypes = _interopRequireDefault(require('prop-types'))

var _react = _interopRequireDefault(require('react'))

var DateFooter = function DateFooter(_ref) {
  var label = _ref.label
  return _react.default.createElement(
    'span',
    {
      role: 'cell',
    },
    label
  )
}

DateFooter.propTypes =
  process.env.NODE_ENV !== 'production'
    ? {
        label: _propTypes.default.node,
        date: _propTypes.default.instanceOf(Date),
        isOffRange: _propTypes.default.bool,
      }
    : {}
var _default = DateFooter
exports.default = _default
module.exports = exports['default']
