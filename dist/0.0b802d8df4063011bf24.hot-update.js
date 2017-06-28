webpackHotUpdate(0,{

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactDataGrid = __webpack_require__(1046);\n\nvar _reactDataGrid2 = _interopRequireDefault(_reactDataGrid);\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _types = __webpack_require__(66);\n\nvar proptypes = _interopRequireWildcard(_types);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar CollectionMessage = function (_Component) {\n  _inherits(CollectionMessage, _Component);\n\n  function CollectionMessage() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, CollectionMessage);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CollectionMessage.__proto__ || Object.getPrototypeOf(CollectionMessage)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      var data = JSON.parse(_this.props.text);\n      _this.testColumns = data[\"column_data\"];\n      _this.testRows = data[\"row_data\"];\n      _this.getRow = function (i) {\n        return _this.testRows[i];\n      };\n      var containsText = false;\n      var singleColumn = _this.testColumns.length === 1;\n      return _react2.default.createElement(\n        'div',\n        { className: _this.props.origin === 'iris' ? 'message left' : 'message right', style: _this.props.hidden === true ? { display: 'none' } : {} },\n        _react2.default.createElement(\n          'div',\n          { className: 'bubble table' },\n          _react2.default.createElement(\n            'div',\n            { className: 'data_table', style: { width: _this.testColumns.length * (350 + 10 + 1) } },\n            _react2.default.createElement(\n              'div',\n              { className: 'header' },\n              _this.testColumns.map(function (column) {\n                if (column.type === \"Text\") {\n                  containsText = true;\n                }\n                return _react2.default.createElement(\n                  'span',\n                  { className: 'data_column' },\n                  column.name\n                );\n              })\n            ),\n            _this.testRows.map(function (row) {\n              var newRowStyle = {};\n              if (containsText) {\n                newRowStyle['height'] = '4em';\n              };\n              return _react2.default.createElement(\n                'div',\n                { className: 'data_row', style: newRowStyle },\n                _this.testColumns.map(function (column) {\n                  var newColStyle = {};\n                  if (column.type === \"Text\") {\n                    newColStyle['width'] = 350;\n                    newColStyle['height'] = '4em';\n                  }\n                  if (singleColumn) {\n                    newColStyle['border-left'] = 'none';\n                  };\n                  return _react2.default.createElement(\n                    'span',\n                    { className: 'data_column', style: newColStyle },\n                    row[column.name]\n                  );\n                })\n              );\n            })\n          )\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return CollectionMessage;\n}(_react.Component);\n\nCollectionMessage.propTypes = proptypes.messageType;\n\nexports.default = CollectionMessage;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db2xsZWN0aW9uTWVzc2FnZS5qcz8wZDQ2Il0sIm5hbWVzIjpbInByb3B0eXBlcyIsIkNvbGxlY3Rpb25NZXNzYWdlIiwicmVuZGVyIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInByb3BzIiwidGV4dCIsInRlc3RDb2x1bW5zIiwidGVzdFJvd3MiLCJnZXRSb3ciLCJpIiwiY29udGFpbnNUZXh0Iiwic2luZ2xlQ29sdW1uIiwibGVuZ3RoIiwib3JpZ2luIiwiaGlkZGVuIiwiZGlzcGxheSIsIndpZHRoIiwibWFwIiwiY29sdW1uIiwidHlwZSIsIm5hbWUiLCJuZXdSb3dTdHlsZSIsIm5ld0NvbFN0eWxlIiwicm93IiwicHJvcFR5cGVzIiwibWVzc2FnZVR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsUzs7Ozs7Ozs7Ozs7O0lBRU5DLGlCOzs7Ozs7Ozs7Ozs7Ozs0TUFFSkMsTSxHQUFTLFlBQU07QUFDYixVQUFNQyxPQUFPQyxLQUFLQyxLQUFMLENBQVcsTUFBS0MsS0FBTCxDQUFXQyxJQUF0QixDQUFiO0FBQ0EsWUFBS0MsV0FBTCxHQUFtQkwsS0FBSyxhQUFMLENBQW5CO0FBQ0EsWUFBS00sUUFBTCxHQUFnQk4sS0FBSyxVQUFMLENBQWhCO0FBQ0EsWUFBS08sTUFBTCxHQUFjLFVBQUNDLENBQUQ7QUFBQSxlQUFPLE1BQUtGLFFBQUwsQ0FBY0UsQ0FBZCxDQUFQO0FBQUEsT0FBZDtBQUNBLFVBQUlDLGVBQWUsS0FBbkI7QUFDQSxVQUFJQyxlQUFlLE1BQUtMLFdBQUwsQ0FBaUJNLE1BQWpCLEtBQTRCLENBQS9DO0FBQ0EsYUFBUTtBQUFBO0FBQUEsVUFBSyxXQUFhLE1BQUtSLEtBQUwsQ0FBV1MsTUFBWCxLQUFzQixNQUF0QixHQUErQixjQUEvQixHQUFnRCxlQUFsRSxFQUFtRixPQUFPLE1BQUtULEtBQUwsQ0FBV1UsTUFBWCxLQUFzQixJQUF0QixHQUE2QixFQUFDQyxTQUFTLE1BQVYsRUFBN0IsR0FBaUQsRUFBM0k7QUFDSjtBQUFBO0FBQUEsWUFBSyxXQUFVLGNBQWY7QUFDQTtBQUFBO0FBQUEsY0FBSyxXQUFVLFlBQWYsRUFBNEIsT0FBTyxFQUFDQyxPQUFPLE1BQUtWLFdBQUwsQ0FBaUJNLE1BQWpCLElBQTJCLE1BQUksRUFBSixHQUFPLENBQWxDLENBQVIsRUFBbkM7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxRQUFmO0FBQ0Msb0JBQUtOLFdBQUwsQ0FBaUJXLEdBQWpCLENBQXFCLGtCQUFVO0FBQzlCLG9CQUFHQyxPQUFPQyxJQUFQLEtBQWdCLE1BQW5CLEVBQTBCO0FBQ3hCVCxpQ0FBZSxJQUFmO0FBQ0Q7QUFDRCx1QkFBTztBQUFBO0FBQUEsb0JBQU0sV0FBVSxhQUFoQjtBQUErQlEseUJBQU9FO0FBQXRDLGlCQUFQO0FBQ0QsZUFMQTtBQURELGFBREY7QUFTRyxrQkFBS2IsUUFBTCxDQUFjVSxHQUFkLENBQWtCLGVBQU87QUFDeEIsa0JBQUlJLGNBQWMsRUFBbEI7QUFDQSxrQkFBSVgsWUFBSixFQUFpQjtBQUFFVyw0QkFBWSxRQUFaLElBQXdCLEtBQXhCO0FBQThCO0FBQ2pELHFCQUFRO0FBQUE7QUFBQSxrQkFBSyxXQUFVLFVBQWYsRUFBMEIsT0FBT0EsV0FBakM7QUFDTCxzQkFBS2YsV0FBTCxDQUFpQlcsR0FBakIsQ0FBcUIsa0JBQVU7QUFDOUIsc0JBQUlLLGNBQWMsRUFBbEI7QUFDQSxzQkFBR0osT0FBT0MsSUFBUCxLQUFnQixNQUFuQixFQUEwQjtBQUN4QkcsZ0NBQVksT0FBWixJQUF1QixHQUF2QjtBQUNBQSxnQ0FBWSxRQUFaLElBQXdCLEtBQXhCO0FBQ0Q7QUFDRCxzQkFBSVgsWUFBSixFQUFpQjtBQUFFVyxnQ0FBWSxhQUFaLElBQTZCLE1BQTdCO0FBQXFDO0FBQ3hELHlCQUFPO0FBQUE7QUFBQSxzQkFBTSxXQUFVLGFBQWhCLEVBQThCLE9BQU9BLFdBQXJDO0FBQW1EQyx3QkFBSUwsT0FBT0UsSUFBWDtBQUFuRCxtQkFBUDtBQUNELGlCQVJBO0FBREssZUFBUjtBQVdELGFBZEE7QUFUSDtBQURBO0FBREksT0FBUjtBQTZCRCxLOzs7Ozs7QUFJSHJCLGtCQUFrQnlCLFNBQWxCLEdBQThCMUIsVUFBVTJCLFdBQXhDOztrQkFFZTFCLGlCIiwiZmlsZSI6IjQxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdERhdGFHcmlkIGZyb20gJ3JlYWN0LWRhdGEtZ3JpZCc7XG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIHByb3B0eXBlcyBmcm9tICcuLi9wcm9wdHlwZXMvdHlwZXMnO1xuXG5jbGFzcyBDb2xsZWN0aW9uTWVzc2FnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHRoaXMucHJvcHMudGV4dCk7XG4gICAgdGhpcy50ZXN0Q29sdW1ucyA9IGRhdGFbXCJjb2x1bW5fZGF0YVwiXTtcbiAgICB0aGlzLnRlc3RSb3dzID0gZGF0YVtcInJvd19kYXRhXCJdO1xuICAgIHRoaXMuZ2V0Um93ID0gKGkpID0+IHRoaXMudGVzdFJvd3NbaV07XG4gICAgbGV0IGNvbnRhaW5zVGV4dCA9IGZhbHNlO1xuICAgIGxldCBzaW5nbGVDb2x1bW4gPSB0aGlzLnRlc3RDb2x1bW5zLmxlbmd0aCA9PT0gMTtcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lID0ge3RoaXMucHJvcHMub3JpZ2luID09PSAnaXJpcycgPyAnbWVzc2FnZSBsZWZ0JyA6ICdtZXNzYWdlIHJpZ2h0J30gc3R5bGU9e3RoaXMucHJvcHMuaGlkZGVuID09PSB0cnVlID8ge2Rpc3BsYXk6ICdub25lJ30gOiB7fX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnViYmxlIHRhYmxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YV90YWJsZVwiIHN0eWxlPXt7d2lkdGg6IHRoaXMudGVzdENvbHVtbnMubGVuZ3RoICogKDM1MCsxMCsxKX19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAge3RoaXMudGVzdENvbHVtbnMubWFwKGNvbHVtbiA9PiB7XG4gICAgICAgICAgICBpZihjb2x1bW4udHlwZSA9PT0gXCJUZXh0XCIpe1xuICAgICAgICAgICAgICBjb250YWluc1RleHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cImRhdGFfY29sdW1uXCI+e2NvbHVtbi5uYW1lfTwvc3Bhbj47XG4gICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3RoaXMudGVzdFJvd3MubWFwKHJvdyA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3Um93U3R5bGUgPSB7fTtcbiAgICAgICAgICAgIGlmIChjb250YWluc1RleHQpeyBuZXdSb3dTdHlsZVsnaGVpZ2h0J10gPSAnNGVtJ307XG4gICAgICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiZGF0YV9yb3dcIiBzdHlsZT17bmV3Um93U3R5bGV9PlxuICAgICAgICAgICAgICB7dGhpcy50ZXN0Q29sdW1ucy5tYXAoY29sdW1uID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3Q29sU3R5bGUgPSB7fTtcbiAgICAgICAgICAgICAgICBpZihjb2x1bW4udHlwZSA9PT0gXCJUZXh0XCIpe1xuICAgICAgICAgICAgICAgICAgbmV3Q29sU3R5bGVbJ3dpZHRoJ10gPSAzNTA7XG4gICAgICAgICAgICAgICAgICBuZXdDb2xTdHlsZVsnaGVpZ2h0J10gPSAnNGVtJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNpbmdsZUNvbHVtbil7IG5ld0NvbFN0eWxlWydib3JkZXItbGVmdCddID0gJ25vbmUnIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cImRhdGFfY29sdW1uXCIgc3R5bGU9e25ld0NvbFN0eWxlfT57cm93W2NvbHVtbi5uYW1lXX08L3NwYW4+O1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2Pik7XG4gIH1cblxufVxuXG5Db2xsZWN0aW9uTWVzc2FnZS5wcm9wVHlwZXMgPSBwcm9wdHlwZXMubWVzc2FnZVR5cGU7XG5cbmV4cG9ydCBkZWZhdWx0IENvbGxlY3Rpb25NZXNzYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvQ29sbGVjdGlvbk1lc3NhZ2UuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})