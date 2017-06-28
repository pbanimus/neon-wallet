webpackHotUpdate(0,{

/***/ 1255:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactDataGrid = __webpack_require__(1046);\n\nvar _reactDataGrid2 = _interopRequireDefault(_reactDataGrid);\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(63);\n\nvar _types = __webpack_require__(66);\n\nvar proptypes = _interopRequireWildcard(_types);\n\nvar _python = __webpack_require__(166);\n\nvar _InputBox = __webpack_require__(266);\n\nvar _index = __webpack_require__(264);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar setInput = function setInput(dispatch, active, text) {\n  return function () {\n    if (active === true) {\n      var stripText = text.replace(/{/g, '').replace(/}/g, '');\n      if (_InputBox.input.value.includes(text)) {\n        var items = _InputBox.input.value.split(\",\").map(function (x) {\n          return x.replace(/^\\s+|\\s+$/g, '');\n        });\n        var findIndex = items.indexOf(text);\n        if (findIndex > -1) {\n          items.splice(findIndex, 1);\n        }\n        _InputBox.input.value = items.join(\", \"); // input.value.replace(RegExp(test+\",|\"test), '');\n      } else {\n        if (_InputBox.input.value !== \"\") _InputBox.input.value = _InputBox.input.value + \", \" + stripText;else _InputBox.input.value = stripText;\n      }\n      dispatch((0, _index.storeCurrentInput)(_InputBox.input.value));\n      (0, _python.updateHint)(_InputBox.input.value);\n    }\n  };\n};\n\nvar TableSelectMessage = function (_Component) {\n  _inherits(TableSelectMessage, _Component);\n\n  function TableSelectMessage() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, TableSelectMessage);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TableSelectMessage.__proto__ || Object.getPrototypeOf(TableSelectMessage)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      var data = JSON.parse(_this.props.text);\n      _this.testColumns = data[\"column_data\"];\n      _this.colMap = {};\n      for (var i = 0; i < _this.testColumns.length; i++) {\n        _this.colMap[i] = _this.testColumns[i].name;\n      }\n      _this.testRows = data[\"row_data\"].slice(0, 3);\n      var containsText = false;\n      var singleColumn = _this.testColumns.length === 1;\n      console.log(_this.props.currentInput);\n      return _react2.default.createElement(\n        'div',\n        { className: _this.props.origin === 'iris' ? 'message left' : 'message right', style: _this.props.hidden === true ? { display: 'none' } : {} },\n        _react2.default.createElement(\n          'div',\n          { className: 'bubble table' },\n          _react2.default.createElement(\n            'div',\n            { className: 'data_table', style: { width: _this.testColumns.length * (350 + 10 + 1) } },\n            _react2.default.createElement(\n              'div',\n              { className: 'header' },\n              _this.testColumns.map(function (column, i) {\n                if (column.type === \"Text\") {\n                  containsText = true;\n                }\n                return _react2.default.createElement(\n                  'span',\n                  { className: 'data_column', onClick: setInput(_this.props.dispatch, _this.props.active, column.name), style: singleColumn || i == 0 ? { 'border-left': 'none' } : {} },\n                  column.name\n                );\n              })\n            ),\n            _this.testRows.map(function (row, i) {\n              var newRowStyle = {};\n              if (containsText) {\n                newRowStyle['height'] = '4em';\n              };\n              return _react2.default.createElement(\n                'div',\n                { className: 'data_row', style: newRowStyle },\n                _this.testColumns.map(function (column, i) {\n                  var newColStyle = {};\n                  if (column.type === \"Text\") {\n                    newColStyle['width'] = 350;\n                    newColStyle['height'] = '4em';\n                  }\n                  if (_this.props.active && _this.props.currentInput.includes(_this.colMap[i])) {\n                    newColStyle['background-color'] = '#fefefe';\n                  }\n                  if (singleColumn || i == 0) {\n                    newColStyle['border-left'] = 'none';\n                  };\n                  return _react2.default.createElement(\n                    'span',\n                    { className: 'data_column', style: newColStyle },\n                    row[column.name]\n                  );\n                })\n              );\n            })\n          )\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return TableSelectMessage;\n}(_react.Component);\n\nTableSelectMessage.propTypes = proptypes.messageType;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    currentInput: state.currentInput.input\n  };\n};\n\nTableSelectMessage = (0, _reactRedux.connect)(mapStateToProps)(TableSelectMessage);\n\nexports.default = TableSelectMessage;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9UYWJsZVNlbGVjdE1lc3NhZ2UuanM/MzgwMSJdLCJuYW1lcyI6WyJwcm9wdHlwZXMiLCJzZXRJbnB1dCIsImRpc3BhdGNoIiwiYWN0aXZlIiwidGV4dCIsInN0cmlwVGV4dCIsInJlcGxhY2UiLCJ2YWx1ZSIsImluY2x1ZGVzIiwiaXRlbXMiLCJzcGxpdCIsIm1hcCIsIngiLCJmaW5kSW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiam9pbiIsIlRhYmxlU2VsZWN0TWVzc2FnZSIsInJlbmRlciIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJwcm9wcyIsInRlc3RDb2x1bW5zIiwiY29sTWFwIiwiaSIsImxlbmd0aCIsIm5hbWUiLCJ0ZXN0Um93cyIsInNsaWNlIiwiY29udGFpbnNUZXh0Iiwic2luZ2xlQ29sdW1uIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRJbnB1dCIsIm9yaWdpbiIsImhpZGRlbiIsImRpc3BsYXkiLCJ3aWR0aCIsImNvbHVtbiIsInR5cGUiLCJyb3ciLCJuZXdSb3dTdHlsZSIsIm5ld0NvbFN0eWxlIiwicHJvcFR5cGVzIiwibWVzc2FnZVR5cGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImlucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLFM7O0FBQ1o7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUdBLElBQU1DLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxRQUFELEVBQVdDLE1BQVgsRUFBbUJDLElBQW5CLEVBQTRCO0FBQ3pDLFNBQU8sWUFBTTtBQUNULFFBQUdELFdBQVcsSUFBZCxFQUFtQjtBQUNqQixVQUFJRSxZQUFZRCxLQUFLRSxPQUFMLENBQWEsSUFBYixFQUFtQixFQUFuQixFQUF1QkEsT0FBdkIsQ0FBK0IsSUFBL0IsRUFBcUMsRUFBckMsQ0FBaEI7QUFDQSxVQUFHLGdCQUFNQyxLQUFOLENBQVlDLFFBQVosQ0FB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Q0MsS0FBRDtBQUFBLFNBQVk7QUFDaENiLGtCQUFjYSxNQUFNYixZQUFOLENBQW1CYztBQURELEdBQVo7QUFBQSxDQUF4Qjs7QUFJQS9CLHFCQUFxQix5QkFBUTZCLGVBQVIsRUFBeUI3QixrQkFBekIsQ0FBckI7O2tCQUVlQSxrQiIsImZpbGUiOiIxMjU1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0RGF0YUdyaWQgZnJvbSAncmVhY3QtZGF0YS1ncmlkJztcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIHByb3B0eXBlcyBmcm9tICcuLi9wcm9wdHlwZXMvdHlwZXMnO1xuaW1wb3J0IHsgdXBkYXRlSGludCB9IGZyb20gJy4uL2FwaV9jYWxscy9weXRob24uanMnO1xuaW1wb3J0IHsgaW5wdXQgfSBmcm9tICcuLi9jb250YWluZXJzL0lucHV0Qm94JztcbmltcG9ydCB7IHN0b3JlQ3VycmVudElucHV0IH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleC5qcyc7XG5cblxuY29uc3Qgc2V0SW5wdXQgPSAoZGlzcGF0Y2gsIGFjdGl2ZSwgdGV4dCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmKGFjdGl2ZSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgbGV0IHN0cmlwVGV4dCA9IHRleHQucmVwbGFjZSgvey9nLCAnJykucmVwbGFjZSgvfS9nLCAnJyk7XG4gICAgICAgICAgaWYoaW5wdXQudmFsdWUuaW5jbHVkZXModGV4dCkpe1xuICAgICAgICAgICAgbGV0IGl0ZW1zID0gaW5wdXQudmFsdWUuc3BsaXQoXCIsXCIpLm1hcCh4ID0+IHgucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpKTtcbiAgICAgICAgICAgIGxldCBmaW5kSW5kZXggPSBpdGVtcy5pbmRleE9mKHRleHQpO1xuICAgICAgICAgICAgaWYoZmluZEluZGV4ID4gLTEpe1xuICAgICAgICAgICAgICAgaXRlbXMuc3BsaWNlKGZpbmRJbmRleCwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gaXRlbXMuam9pbihcIiwgXCIpOy8vIGlucHV0LnZhbHVlLnJlcGxhY2UoUmVnRXhwKHRlc3QrXCIsfFwidGVzdCksICcnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGlmKGlucHV0LnZhbHVlICE9PSBcIlwiKSBpbnB1dC52YWx1ZSA9IGlucHV0LnZhbHVlICsgXCIsIFwiICsgc3RyaXBUZXh0O1xuICAgICAgICAgICAgZWxzZSBpbnB1dC52YWx1ZSA9IHN0cmlwVGV4dDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGlzcGF0Y2goc3RvcmVDdXJyZW50SW5wdXQoaW5wdXQudmFsdWUpKTtcbiAgICAgICAgICB1cGRhdGVIaW50KGlucHV0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuXG5jbGFzcyBUYWJsZVNlbGVjdE1lc3NhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZSh0aGlzLnByb3BzLnRleHQpO1xuICAgIHRoaXMudGVzdENvbHVtbnMgPSBkYXRhW1wiY29sdW1uX2RhdGFcIl07XG4gICAgdGhpcy5jb2xNYXAgPSB7fTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy50ZXN0Q29sdW1ucy5sZW5ndGg7IGkrKyl7XG4gICAgICB0aGlzLmNvbE1hcFtpXSA9IHRoaXMudGVzdENvbHVtbnNbaV0ubmFtZTtcbiAgICB9XG4gICAgdGhpcy50ZXN0Um93cyA9IGRhdGFbXCJyb3dfZGF0YVwiXS5zbGljZSgwLDMpO1xuICAgIGxldCBjb250YWluc1RleHQgPSBmYWxzZTtcbiAgICBsZXQgc2luZ2xlQ29sdW1uID0gdGhpcy50ZXN0Q29sdW1ucy5sZW5ndGggPT09IDE7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5jdXJyZW50SW5wdXQpO1xuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWUgPSB7dGhpcy5wcm9wcy5vcmlnaW4gPT09ICdpcmlzJyA/ICdtZXNzYWdlIGxlZnQnIDogJ21lc3NhZ2UgcmlnaHQnfSBzdHlsZT17dGhpcy5wcm9wcy5oaWRkZW4gPT09IHRydWUgPyB7ZGlzcGxheTogJ25vbmUnfSA6IHt9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWJibGUgdGFibGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhX3RhYmxlXCIgc3R5bGU9e3t3aWR0aDogdGhpcy50ZXN0Q29sdW1ucy5sZW5ndGggKiAoMzUwKzEwKzEpfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICB7dGhpcy50ZXN0Q29sdW1ucy5tYXAoKGNvbHVtbixpKSA9PiB7XG4gICAgICAgICAgICBpZihjb2x1bW4udHlwZSA9PT0gXCJUZXh0XCIpe1xuICAgICAgICAgICAgICBjb250YWluc1RleHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cImRhdGFfY29sdW1uXCIgb25DbGljaz17c2V0SW5wdXQodGhpcy5wcm9wcy5kaXNwYXRjaCwgdGhpcy5wcm9wcy5hY3RpdmUsIGNvbHVtbi5uYW1lKX0gc3R5bGU9e3NpbmdsZUNvbHVtbiB8fCBpID09IDAgPyB7J2JvcmRlci1sZWZ0JzogJ25vbmUnfSA6IHt9fT57Y29sdW1uLm5hbWV9PC9zcGFuPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7dGhpcy50ZXN0Um93cy5tYXAoKHJvdyxpKSA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3Um93U3R5bGUgPSB7fTtcbiAgICAgICAgICAgIGlmIChjb250YWluc1RleHQpeyBuZXdSb3dTdHlsZVsnaGVpZ2h0J10gPSAnNGVtJ307XG4gICAgICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiZGF0YV9yb3dcIiBzdHlsZT17bmV3Um93U3R5bGV9PlxuICAgICAgICAgICAgICB7dGhpcy50ZXN0Q29sdW1ucy5tYXAoKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBuZXdDb2xTdHlsZSA9IHt9O1xuICAgICAgICAgICAgICAgIGlmKGNvbHVtbi50eXBlID09PSBcIlRleHRcIil7XG4gICAgICAgICAgICAgICAgICBuZXdDb2xTdHlsZVsnd2lkdGgnXSA9IDM1MDtcbiAgICAgICAgICAgICAgICAgIG5ld0NvbFN0eWxlWydoZWlnaHQnXSA9ICc0ZW0nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZih0aGlzLnByb3BzLmFjdGl2ZSAmJiB0aGlzLnByb3BzLmN1cnJlbnRJbnB1dC5pbmNsdWRlcyh0aGlzLmNvbE1hcFtpXSkpe1xuICAgICAgICAgICAgICAgICAgbmV3Q29sU3R5bGVbJ2JhY2tncm91bmQtY29sb3InXSA9ICcjZmVmZWZlJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNpbmdsZUNvbHVtbiB8fCBpID09IDApeyBuZXdDb2xTdHlsZVsnYm9yZGVyLWxlZnQnXSA9ICdub25lJyB9O1xuICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJkYXRhX2NvbHVtblwiIHN0eWxlPXtuZXdDb2xTdHlsZX0+e3Jvd1tjb2x1bW4ubmFtZV19PC9zcGFuPjtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4pO1xuICB9XG5cbn1cblxuVGFibGVTZWxlY3RNZXNzYWdlLnByb3BUeXBlcyA9IHByb3B0eXBlcy5tZXNzYWdlVHlwZTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICAgIGN1cnJlbnRJbnB1dDogc3RhdGUuY3VycmVudElucHV0LmlucHV0XG59KTtcblxuVGFibGVTZWxlY3RNZXNzYWdlID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFRhYmxlU2VsZWN0TWVzc2FnZSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlU2VsZWN0TWVzc2FnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL1RhYmxlU2VsZWN0TWVzc2FnZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})