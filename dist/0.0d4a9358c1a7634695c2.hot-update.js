webpackHotUpdate(0,{

/***/ 1255:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactDataGrid = __webpack_require__(1046);\n\nvar _reactDataGrid2 = _interopRequireDefault(_reactDataGrid);\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _types = __webpack_require__(66);\n\nvar proptypes = _interopRequireWildcard(_types);\n\nvar _python = __webpack_require__(166);\n\nvar _InputBox = __webpack_require__(266);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar setInput = function setInput(text) {\n  return function () {\n    var stripText = text.replace(/{/g, '').replace(/}/g, '');\n    if (_InputBox.input.value.includes(text)) {\n      _InputBox.input.value = _InputBox.input.value.replace(text, '');\n    } else {\n      if (_InputBox.input.value !== \"\") _InputBox.input.value = _InputBox.input.value + \", \" + stripText;else _InputBox.input.value = stripText;\n    }\n    (0, _python.updateHint)(_InputBox.input.value);\n  };\n};\n\nvar TableSelectMessage = function (_Component) {\n  _inherits(TableSelectMessage, _Component);\n\n  function TableSelectMessage() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, TableSelectMessage);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TableSelectMessage.__proto__ || Object.getPrototypeOf(TableSelectMessage)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      var data = JSON.parse(_this.props.text);\n      _this.testColumns = data[\"column_data\"];\n      _this.testRows = data[\"row_data\"].slice(0, 3);\n      var containsText = false;\n      var singleColumn = _this.testColumns.length === 1;\n      return _react2.default.createElement(\n        'div',\n        { className: _this.props.origin === 'iris' ? 'message left' : 'message right', style: _this.props.hidden === true ? { display: 'none' } : {} },\n        _react2.default.createElement(\n          'div',\n          { className: 'bubble table' },\n          _react2.default.createElement(\n            'div',\n            { className: 'data_table', style: { width: _this.testColumns.length * (350 + 10 + 1) } },\n            _react2.default.createElement(\n              'div',\n              { className: 'header' },\n              _this.testColumns.map(function (column, i) {\n                if (column.type === \"Text\") {\n                  containsText = true;\n                }\n                return _react2.default.createElement(\n                  'span',\n                  { className: 'data_column', onClick: setInput(column.name), style: singleColumn || i == 0 ? { 'border-left': 'none' } : {} },\n                  column.name\n                );\n              })\n            ),\n            _this.testRows.map(function (row) {\n              var newRowStyle = {};\n              if (containsText) {\n                newRowStyle['height'] = '4em';\n              };\n              return _react2.default.createElement(\n                'div',\n                { className: 'data_row', style: newRowStyle },\n                _this.testColumns.map(function (column, i) {\n                  var newColStyle = {};\n                  if (column.type === \"Text\") {\n                    newColStyle['width'] = 350;\n                    newColStyle['height'] = '4em';\n                  }\n                  if (singleColumn || i == 0) {\n                    newColStyle['border-left'] = 'none';\n                  };\n                  return _react2.default.createElement(\n                    'span',\n                    { className: 'data_column', style: newColStyle },\n                    row[column.name]\n                  );\n                })\n              );\n            })\n          )\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return TableSelectMessage;\n}(_react.Component);\n\nTableSelectMessage.propTypes = proptypes.messageType;\n\nexports.default = TableSelectMessage;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9UYWJsZVNlbGVjdE1lc3NhZ2UuanM/MzgwMSJdLCJuYW1lcyI6WyJwcm9wdHlwZXMiLCJzZXRJbnB1dCIsInRleHQiLCJzdHJpcFRleHQiLCJyZXBsYWNlIiwidmFsdWUiLCJpbmNsdWRlcyIsIlRhYmxlU2VsZWN0TWVzc2FnZSIsInJlbmRlciIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJwcm9wcyIsInRlc3RDb2x1bW5zIiwidGVzdFJvd3MiLCJzbGljZSIsImNvbnRhaW5zVGV4dCIsInNpbmdsZUNvbHVtbiIsImxlbmd0aCIsIm9yaWdpbiIsImhpZGRlbiIsImRpc3BsYXkiLCJ3aWR0aCIsIm1hcCIsImNvbHVtbiIsImkiLCJ0eXBlIiwibmFtZSIsIm5ld1Jvd1N0eWxlIiwibmV3Q29sU3R5bGUiLCJyb3ciLCJwcm9wVHlwZXMiLCJtZXNzYWdlVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxTOztBQUNaOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQyxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3ZCLFNBQU8sWUFBTTtBQUNULFFBQUlDLFlBQVlELEtBQUtFLE9BQUwsQ0FBYSxJQUFiLEVBQW1CLEVBQW5CLEVBQXVCQSxPQUF2QixDQUErQixJQUEvQixFQUFxQyxFQUFyQyxDQUFoQjtBQUNBLFFBQUcsZ0JBQU1DLEtBQU4sQ0FBWUMsUUFBWixDQUFxQkosSUFBckIsQ0FBSCxFQUE4QjtBQUM1QixzQkFBTUcsS0FBTixHQUFjLGdCQUFNQSxLQUFOLENBQVlELE9BQVosQ0FBb0JGLElBQXBCLEVBQTBCLEVBQTFCLENBQWQ7QUFDRCxLQUZELE1BR0k7QUFDRixVQUFHLGdCQUFNRyxLQUFOLEtBQWdCLEVBQW5CLEVBQXVCLGdCQUFNQSxLQUFOLEdBQWMsZ0JBQU1BLEtBQU4sR0FBYyxJQUFkLEdBQXFCRixTQUFuQyxDQUF2QixLQUNLLGdCQUFNRSxLQUFOLEdBQWNGLFNBQWQ7QUFDTjtBQUNELDRCQUFXLGdCQUFNRSxLQUFqQjtBQUNILEdBVkQ7QUFXSCxDQVpEOztJQWNNRSxrQjs7Ozs7Ozs7Ozs7Ozs7OE1BRUpDLE0sR0FBUyxZQUFNO0FBQ2IsVUFBTUMsT0FBT0MsS0FBS0MsS0FBTCxDQUFXLE1BQUtDLEtBQUwsQ0FBV1YsSUFBdEIsQ0FBYjtBQUNBLFlBQUtXLFdBQUwsR0FBbUJKLEtBQUssYUFBTCxDQUFuQjtBQUNBLFlBQUtLLFFBQUwsR0FBZ0JMLEtBQUssVUFBTCxFQUFpQk0sS0FBakIsQ0FBdUIsQ0FBdkIsRUFBeUIsQ0FBekIsQ0FBaEI7QUFDQSxVQUFJQyxlQUFlLEtBQW5CO0FBQ0EsVUFBSUMsZUFBZSxNQUFLSixXQUFMLENBQWlCSyxNQUFqQixLQUE0QixDQUEvQztBQUNBLGFBQVE7QUFBQTtBQUFBLFVBQUssV0FBYSxNQUFLTixLQUFMLENBQVdPLE1BQVgsS0FBc0IsTUFBdEIsR0FBK0IsY0FBL0IsR0FBZ0QsZUFBbEUsRUFBbUYsT0FBTyxNQUFLUCxLQUFMLENBQVdRLE1BQVgsS0FBc0IsSUFBdEIsR0FBNkIsRUFBQ0MsU0FBUyxNQUFWLEVBQTdCLEdBQWlELEVBQTNJO0FBQ0o7QUFBQTtBQUFBLFlBQUssV0FBVSxjQUFmO0FBQ0E7QUFBQTtBQUFBLGNBQUssV0FBVSxZQUFmLEVBQTRCLE9BQU8sRUFBQ0MsT0FBTyxNQUFLVCxXQUFMLENBQWlCSyxNQUFqQixJQUEyQixNQUFJLEVBQUosR0FBTyxDQUFsQyxDQUFSLEVBQW5DO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsUUFBZjtBQUNDLG9CQUFLTCxXQUFMLENBQWlCVSxHQUFqQixDQUFxQixVQUFDQyxNQUFELEVBQVFDLENBQVIsRUFBYztBQUNsQyxvQkFBR0QsT0FBT0UsSUFBUCxLQUFnQixNQUFuQixFQUEwQjtBQUN4QlYsaUNBQWUsSUFBZjtBQUNEO0FBQ0QsdUJBQU87QUFBQTtBQUFBLG9CQUFNLFdBQVUsYUFBaEIsRUFBOEIsU0FBU2YsU0FBU3VCLE9BQU9HLElBQWhCLENBQXZDLEVBQThELE9BQU9WLGdCQUFnQlEsS0FBSyxDQUFyQixHQUF5QixFQUFDLGVBQWUsTUFBaEIsRUFBekIsR0FBbUQsRUFBeEg7QUFBNkhELHlCQUFPRztBQUFwSSxpQkFBUDtBQUNELGVBTEE7QUFERCxhQURGO0FBU0csa0JBQUtiLFFBQUwsQ0FBY1MsR0FBZCxDQUFrQixlQUFPO0FBQ3hCLGtCQUFJSyxjQUFjLEVBQWxCO0FBQ0Esa0JBQUlaLFlBQUosRUFBaUI7QUFBRVksNEJBQVksUUFBWixJQUF3QixLQUF4QjtBQUE4QjtBQUNqRCxxQkFBUTtBQUFBO0FBQUEsa0JBQUssV0FBVSxVQUFmLEVBQTBCLE9BQU9BLFdBQWpDO0FBQ0wsc0JBQUtmLFdBQUwsQ0FBaUJVLEdBQWpCLENBQXFCLFVBQUNDLE1BQUQsRUFBU0MsQ0FBVCxFQUFlO0FBQ25DLHNCQUFJSSxjQUFjLEVBQWxCO0FBQ0Esc0JBQUdMLE9BQU9FLElBQVAsS0FBZ0IsTUFBbkIsRUFBMEI7QUFDeEJHLGdDQUFZLE9BQVosSUFBdUIsR0FBdkI7QUFDQUEsZ0NBQVksUUFBWixJQUF3QixLQUF4QjtBQUNEO0FBQ0Qsc0JBQUlaLGdCQUFnQlEsS0FBSyxDQUF6QixFQUEyQjtBQUFFSSxnQ0FBWSxhQUFaLElBQTZCLE1BQTdCO0FBQXFDO0FBQ2xFLHlCQUFPO0FBQUE7QUFBQSxzQkFBTSxXQUFVLGFBQWhCLEVBQThCLE9BQU9BLFdBQXJDO0FBQW1EQyx3QkFBSU4sT0FBT0csSUFBWDtBQUFuRCxtQkFBUDtBQUNELGlCQVJBO0FBREssZUFBUjtBQVdELGFBZEE7QUFUSDtBQURBO0FBREksT0FBUjtBQTZCRCxLOzs7Ozs7QUFJSHBCLG1CQUFtQndCLFNBQW5CLEdBQStCL0IsVUFBVWdDLFdBQXpDOztrQkFFZXpCLGtCIiwiZmlsZSI6IjEyNTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3REYXRhR3JpZCBmcm9tICdyZWFjdC1kYXRhLWdyaWQnO1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBwcm9wdHlwZXMgZnJvbSAnLi4vcHJvcHR5cGVzL3R5cGVzJztcbmltcG9ydCB7IHVwZGF0ZUhpbnQgfSBmcm9tICcuLi9hcGlfY2FsbHMvcHl0aG9uLmpzJztcbmltcG9ydCB7IGlucHV0IH0gZnJvbSAnLi4vY29udGFpbmVycy9JbnB1dEJveCc7XG5cbmNvbnN0IHNldElucHV0ID0gKHRleHQpID0+IHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBsZXQgc3RyaXBUZXh0ID0gdGV4dC5yZXBsYWNlKC97L2csICcnKS5yZXBsYWNlKC99L2csICcnKTtcbiAgICAgICAgaWYoaW5wdXQudmFsdWUuaW5jbHVkZXModGV4dCkpe1xuICAgICAgICAgIGlucHV0LnZhbHVlID0gaW5wdXQudmFsdWUucmVwbGFjZSh0ZXh0LCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICBpZihpbnB1dC52YWx1ZSAhPT0gXCJcIikgaW5wdXQudmFsdWUgPSBpbnB1dC52YWx1ZSArIFwiLCBcIiArIHN0cmlwVGV4dDtcbiAgICAgICAgICBlbHNlIGlucHV0LnZhbHVlID0gc3RyaXBUZXh0O1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZUhpbnQoaW5wdXQudmFsdWUpO1xuICAgIH07XG59O1xuXG5jbGFzcyBUYWJsZVNlbGVjdE1lc3NhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZSh0aGlzLnByb3BzLnRleHQpO1xuICAgIHRoaXMudGVzdENvbHVtbnMgPSBkYXRhW1wiY29sdW1uX2RhdGFcIl07XG4gICAgdGhpcy50ZXN0Um93cyA9IGRhdGFbXCJyb3dfZGF0YVwiXS5zbGljZSgwLDMpO1xuICAgIGxldCBjb250YWluc1RleHQgPSBmYWxzZTtcbiAgICBsZXQgc2luZ2xlQ29sdW1uID0gdGhpcy50ZXN0Q29sdW1ucy5sZW5ndGggPT09IDE7XG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZSA9IHt0aGlzLnByb3BzLm9yaWdpbiA9PT0gJ2lyaXMnID8gJ21lc3NhZ2UgbGVmdCcgOiAnbWVzc2FnZSByaWdodCd9IHN0eWxlPXt0aGlzLnByb3BzLmhpZGRlbiA9PT0gdHJ1ZSA/IHtkaXNwbGF5OiAnbm9uZSd9IDoge319PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1YmJsZSB0YWJsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGFfdGFibGVcIiBzdHlsZT17e3dpZHRoOiB0aGlzLnRlc3RDb2x1bW5zLmxlbmd0aCAqICgzNTArMTArMSl9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIHt0aGlzLnRlc3RDb2x1bW5zLm1hcCgoY29sdW1uLGkpID0+IHtcbiAgICAgICAgICAgIGlmKGNvbHVtbi50eXBlID09PSBcIlRleHRcIil7XG4gICAgICAgICAgICAgIGNvbnRhaW5zVGV4dCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwiZGF0YV9jb2x1bW5cIiBvbkNsaWNrPXtzZXRJbnB1dChjb2x1bW4ubmFtZSl9IHN0eWxlPXtzaW5nbGVDb2x1bW4gfHwgaSA9PSAwID8geydib3JkZXItbGVmdCc6ICdub25lJ30gOiB7fX0+e2NvbHVtbi5uYW1lfTwvc3Bhbj47XG4gICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3RoaXMudGVzdFJvd3MubWFwKHJvdyA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3Um93U3R5bGUgPSB7fTtcbiAgICAgICAgICAgIGlmIChjb250YWluc1RleHQpeyBuZXdSb3dTdHlsZVsnaGVpZ2h0J10gPSAnNGVtJ307XG4gICAgICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiZGF0YV9yb3dcIiBzdHlsZT17bmV3Um93U3R5bGV9PlxuICAgICAgICAgICAgICB7dGhpcy50ZXN0Q29sdW1ucy5tYXAoKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBuZXdDb2xTdHlsZSA9IHt9O1xuICAgICAgICAgICAgICAgIGlmKGNvbHVtbi50eXBlID09PSBcIlRleHRcIil7XG4gICAgICAgICAgICAgICAgICBuZXdDb2xTdHlsZVsnd2lkdGgnXSA9IDM1MDtcbiAgICAgICAgICAgICAgICAgIG5ld0NvbFN0eWxlWydoZWlnaHQnXSA9ICc0ZW0nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2luZ2xlQ29sdW1uIHx8IGkgPT0gMCl7IG5ld0NvbFN0eWxlWydib3JkZXItbGVmdCddID0gJ25vbmUnIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cImRhdGFfY29sdW1uXCIgc3R5bGU9e25ld0NvbFN0eWxlfT57cm93W2NvbHVtbi5uYW1lXX08L3NwYW4+O1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2Pik7XG4gIH1cblxufVxuXG5UYWJsZVNlbGVjdE1lc3NhZ2UucHJvcFR5cGVzID0gcHJvcHR5cGVzLm1lc3NhZ2VUeXBlO1xuXG5leHBvcnQgZGVmYXVsdCBUYWJsZVNlbGVjdE1lc3NhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9UYWJsZVNlbGVjdE1lc3NhZ2UuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})