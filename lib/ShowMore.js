'use strict'

var _interopRequireDefault =
  require('@babel/runtime/helpers/interopRequireDefault').default

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _propTypes = _interopRequireDefault(require('prop-types'))

var _react = _interopRequireDefault(require('react'))

var ShowMore = function ShowMore(_ref) {
  var total = _ref.total
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    '`+$',
    total,
    ' more`'
  )
}

ShowMore.propTypes = {
  total: _propTypes.default.number,
}
var _default = ShowMore
exports.default = _default
