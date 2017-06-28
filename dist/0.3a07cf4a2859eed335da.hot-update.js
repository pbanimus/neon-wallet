webpackHotUpdate(0,{

/***/ 1255:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactDataGrid = __webpack_require__(1046);\n\nvar _reactDataGrid2 = _interopRequireDefault(_reactDataGrid);\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(63);\n\nvar _types = __webpack_require__(66);\n\nvar proptypes = _interopRequireWildcard(_types);\n\nvar _python = __webpack_require__(166);\n\nvar _InputBox = __webpack_require__(266);\n\nvar _index = __webpack_require__(264);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar setInput = function setInput(dispatch, active, text) {\n  return function () {\n    if (active) {\n      var stripText = text.replace(/{/g, '').replace(/}/g, '');\n      if (_InputBox.input.value.includes(text)) {\n        var items = _InputBox.input.value.split(\",\").map(function (x) {\n          return x.replace(/^\\s+|\\s+$/g, '');\n        });\n        var findIndex = items.indexOf(text);\n        if (findIndex > -1) {\n          items.splice(findIndex, 1);\n        }\n        _InputBox.input.value = items.join(\", \"); // input.value.replace(RegExp(test+\",|\"test), '');\n      } else {\n        if (_InputBox.input.value !== \"\") _InputBox.input.value = _InputBox.input.value + \", \" + stripText;else _InputBox.input.value = stripText;\n      }\n      dispatch((0, _index.storeCurrentInput)(_InputBox.input.value));\n      (0, _python.updateHint)(_InputBox.input.value);\n    }\n  };\n};\n\nvar TableSelectMessage = function (_Component) {\n  _inherits(TableSelectMessage, _Component);\n\n  function TableSelectMessage() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, TableSelectMessage);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TableSelectMessage.__proto__ || Object.getPrototypeOf(TableSelectMessage)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      var data = JSON.parse(_this.props.text);\n      _this.testColumns = data[\"column_data\"];\n      _this.colMap = {};\n      for (var i = 0; i < _this.testColumns.length; i++) {\n        _this.colMap[i] = _this.testColumns[i].name;\n      }\n      _this.testRows = data[\"row_data\"].slice(0, 3);\n      var containsText = false;\n      var singleColumn = _this.testColumns.length === 1;\n      console.log(_this.props.currentInput);\n      return _react2.default.createElement(\n        'div',\n        { className: _this.props.origin === 'iris' ? 'message left' : 'message right', style: _this.props.hidden === true ? { display: 'none' } : {} },\n        _react2.default.createElement(\n          'div',\n          { className: 'bubble table' },\n          _react2.default.createElement(\n            'div',\n            { className: 'data_table', style: { width: _this.testColumns.length * (350 + 10 + 1) } },\n            _react2.default.createElement(\n              'div',\n              { className: 'header' },\n              _this.testColumns.map(function (column, i) {\n                if (column.type === \"Text\") {\n                  containsText = true;\n                }\n                return _react2.default.createElement(\n                  'span',\n                  { className: 'data_column', onClick: setInput(_this.props.dispatch, column.name), style: singleColumn || i == 0 ? { 'border-left': 'none' } : {} },\n                  column.name\n                );\n              })\n            ),\n            _this.testRows.map(function (row, i) {\n              var newRowStyle = {};\n              if (containsText) {\n                newRowStyle['height'] = '4em';\n              };\n              return _react2.default.createElement(\n                'div',\n                { className: 'data_row', style: newRowStyle },\n                _this.testColumns.map(function (column, i) {\n                  var newColStyle = {};\n                  if (column.type === \"Text\") {\n                    newColStyle['width'] = 350;\n                    newColStyle['height'] = '4em';\n                  }\n                  if (_this.props.currentInput.includes(_this.colMap[i])) {\n                    newColStyle['background-color'] = '#efefef';\n                  }\n                  if (singleColumn || i == 0) {\n                    newColStyle['border-left'] = 'none';\n                  };\n                  return _react2.default.createElement(\n                    'span',\n                    { className: 'data_column', style: newColStyle },\n                    row[column.name]\n                  );\n                })\n              );\n            })\n          )\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return TableSelectMessage;\n}(_react.Component);\n\nTableSelectMessage.propTypes = proptypes.messageType;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    currentInput: state.currentInput.input\n  };\n};\n\nTableSelectMessage = (0, _reactRedux.connect)(mapStateToProps)(TableSelectMessage);\n\nexports.default = TableSelectMessage;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9UYWJsZVNlbGVjdE1lc3NhZ2UuanM/MzgwMSJdLCJuYW1lcyI6WyJwcm9wdHlwZXMiLCJzZXRJbnB1dCIsImRpc3BhdGNoIiwiYWN0aXZlIiwidGV4dCIsInN0cmlwVGV4dCIsInJlcGxhY2UiLCJ2YWx1ZSIsImluY2x1ZGVzIiwiaXRlbXMiLCJzcGxpdCIsIm1hcCIsIngiLCJmaW5kSW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiam9pbiIsIlRhYmxlU2VsZWN0TWVzc2FnZSIsInJlbmRlciIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJwcm9wcyIsInRlc3RDb2x1bW5zIiwiY29sTWFwIiwiaSIsImxlbmd0aCIsIm5hbWUiLCJ0ZXN0Um93cyIsInNsaWNlIiwiY29udGFpbnNUZXh0Iiwic2luZ2xlQ29sdW1uIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRJbnB1dCIsIm9yaWdpbiIsImhpZGRlbiIsImRpc3BsYXkiLCJ3aWR0aCIsImNvbHVtbiIsInR5cGUiLCJyb3ciLCJuZXdSb3dTdHlsZSIsIm5ld0NvbFN0eWxlIiwicHJvcFR5cGVzIiwibWVzc2FnZVR5cGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImlucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLFM7O0FBQ1o7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUdBLElBQU1DLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxRQUFELEVBQVdDLE1BQVgsRUFBbUJDLElBQW5CLEVBQTRCO0FBQ3pDLFNBQU8sWUFBTTtBQUNULFFBQUdELE1BQUgsRUFBVTtBQUNSLFVBQUlFLFlBQVlELEtBQUtFLE9BQUwsQ0FBYSxJQUFiLEVBQW1CLEVBQW5CLEVBQXVCQSxPQUF2QixDQUErQixJQUEvQixFQUFxQyxFQUFyQyxDQUFoQjtBQUNBLFVBQUcsZ0JBQU1DLEtBQU4sQ0FBWUMsUUFBWixDQUFxQkosSUFB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Qjs7QUFJQS9CLHFCQUFxQix5QkFBUTZCLGVBQVIsRUFBeUI3QixrQkFBekIsQ0FBckI7O2tCQUVlQSxrQiIsImZpbGUiOiIxMjU1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0RGF0YUdyaWQgZnJvbSAncmVhY3QtZGF0YS1ncmlkJztcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIHByb3B0eXBlcyBmcm9tICcuLi9wcm9wdHlwZXMvdHlwZXMnO1xuaW1wb3J0IHsgdXBkYXRlSGludCB9IGZyb20gJy4uL2FwaV9jYWxscy9weXRob24uanMnO1xuaW1wb3J0IHsgaW5wdXQgfSBmcm9tICcuLi9jb250YWluZXJzL0lucHV0Qm94JztcbmltcG9ydCB7IHN0b3JlQ3VycmVudElucHV0IH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleC5qcyc7XG5cblxuY29uc3Qgc2V0SW5wdXQgPSAoZGlzcGF0Y2gsIGFjdGl2ZSwgdGV4dCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmKGFjdGl2ZSl7XG4gICAgICAgICAgbGV0IHN0cmlwVGV4dCA9IHRleHQucmVwbGFjZSgvey9nLCAnJykucmVwbGFjZSgvfS9nLCAnJyk7XG4gICAgICAgICAgaWYoaW5wdXQudmFsdWUuaW5jbHVkZXModGV4dCkpe1xuICAgICAgICAgICAgbGV0IGl0ZW1zID0gaW5wdXQudmFsdWUuc3BsaXQoXCIsXCIpLm1hcCh4ID0+IHgucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpKTtcbiAgICAgICAgICAgIGxldCBmaW5kSW5kZXggPSBpdGVtcy5pbmRleE9mKHRleHQpO1xuICAgICAgICAgICAgaWYoZmluZEluZGV4ID4gLTEpe1xuICAgICAgICAgICAgICAgaXRlbXMuc3BsaWNlKGZpbmRJbmRleCwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gaXRlbXMuam9pbihcIiwgXCIpOy8vIGlucHV0LnZhbHVlLnJlcGxhY2UoUmVnRXhwKHRlc3QrXCIsfFwidGVzdCksICcnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGlmKGlucHV0LnZhbHVlICE9PSBcIlwiKSBpbnB1dC52YWx1ZSA9IGlucHV0LnZhbHVlICsgXCIsIFwiICsgc3RyaXBUZXh0O1xuICAgICAgICAgICAgZWxzZSBpbnB1dC52YWx1ZSA9IHN0cmlwVGV4dDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGlzcGF0Y2goc3RvcmVDdXJyZW50SW5wdXQoaW5wdXQudmFsdWUpKTtcbiAgICAgICAgICB1cGRhdGVIaW50KGlucHV0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuXG5jbGFzcyBUYWJsZVNlbGVjdE1lc3NhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZSh0aGlzLnByb3BzLnRleHQpO1xuICAgIHRoaXMudGVzdENvbHVtbnMgPSBkYXRhW1wiY29sdW1uX2RhdGFcIl07XG4gICAgdGhpcy5jb2xNYXAgPSB7fTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy50ZXN0Q29sdW1ucy5sZW5ndGg7IGkrKyl7XG4gICAgICB0aGlzLmNvbE1hcFtpXSA9IHRoaXMudGVzdENvbHVtbnNbaV0ubmFtZTtcbiAgICB9XG4gICAgdGhpcy50ZXN0Um93cyA9IGRhdGFbXCJyb3dfZGF0YVwiXS5zbGljZSgwLDMpO1xuICAgIGxldCBjb250YWluc1RleHQgPSBmYWxzZTtcbiAgICBsZXQgc2luZ2xlQ29sdW1uID0gdGhpcy50ZXN0Q29sdW1ucy5sZW5ndGggPT09IDE7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5jdXJyZW50SW5wdXQpO1xuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWUgPSB7dGhpcy5wcm9wcy5vcmlnaW4gPT09ICdpcmlzJyA/ICdtZXNzYWdlIGxlZnQnIDogJ21lc3NhZ2UgcmlnaHQnfSBzdHlsZT17dGhpcy5wcm9wcy5oaWRkZW4gPT09IHRydWUgPyB7ZGlzcGxheTogJ25vbmUnfSA6IHt9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWJibGUgdGFibGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhX3RhYmxlXCIgc3R5bGU9e3t3aWR0aDogdGhpcy50ZXN0Q29sdW1ucy5sZW5ndGggKiAoMzUwKzEwKzEpfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICB7dGhpcy50ZXN0Q29sdW1ucy5tYXAoKGNvbHVtbixpKSA9PiB7XG4gICAgICAgICAgICBpZihjb2x1bW4udHlwZSA9PT0gXCJUZXh0XCIpe1xuICAgICAgICAgICAgICBjb250YWluc1RleHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cImRhdGFfY29sdW1uXCIgb25DbGljaz17c2V0SW5wdXQodGhpcy5wcm9wcy5kaXNwYXRjaCwgY29sdW1uLm5hbWUpfSBzdHlsZT17c2luZ2xlQ29sdW1uIHx8IGkgPT0gMCA/IHsnYm9yZGVyLWxlZnQnOiAnbm9uZSd9IDoge319Pntjb2x1bW4ubmFtZX08L3NwYW4+O1xuICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHt0aGlzLnRlc3RSb3dzLm1hcCgocm93LGkpID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdSb3dTdHlsZSA9IHt9O1xuICAgICAgICAgICAgaWYgKGNvbnRhaW5zVGV4dCl7IG5ld1Jvd1N0eWxlWydoZWlnaHQnXSA9ICc0ZW0nfTtcbiAgICAgICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJkYXRhX3Jvd1wiIHN0eWxlPXtuZXdSb3dTdHlsZX0+XG4gICAgICAgICAgICAgIHt0aGlzLnRlc3RDb2x1bW5zLm1hcCgoY29sdW1uLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0NvbFN0eWxlID0ge307XG4gICAgICAgICAgICAgICAgaWYoY29sdW1uLnR5cGUgPT09IFwiVGV4dFwiKXtcbiAgICAgICAgICAgICAgICAgIG5ld0NvbFN0eWxlWyd3aWR0aCddID0gMzUwO1xuICAgICAgICAgICAgICAgICAgbmV3Q29sU3R5bGVbJ2hlaWdodCddID0gJzRlbSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuY3VycmVudElucHV0LmluY2x1ZGVzKHRoaXMuY29sTWFwW2ldKSl7XG4gICAgICAgICAgICAgICAgICBuZXdDb2xTdHlsZVsnYmFja2dyb3VuZC1jb2xvciddID0gJyNlZmVmZWYnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2luZ2xlQ29sdW1uIHx8IGkgPT0gMCl7IG5ld0NvbFN0eWxlWydib3JkZXItbGVmdCddID0gJ25vbmUnIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cImRhdGFfY29sdW1uXCIgc3R5bGU9e25ld0NvbFN0eWxlfT57cm93W2NvbHVtbi5uYW1lXX08L3NwYW4+O1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2Pik7XG4gIH1cblxufVxuXG5UYWJsZVNlbGVjdE1lc3NhZ2UucHJvcFR5cGVzID0gcHJvcHR5cGVzLm1lc3NhZ2VUeXBlO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gICAgY3VycmVudElucHV0OiBzdGF0ZS5jdXJyZW50SW5wdXQuaW5wdXRcbn0pO1xuXG5UYWJsZVNlbGVjdE1lc3NhZ2UgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoVGFibGVTZWxlY3RNZXNzYWdlKTtcblxuZXhwb3J0IGRlZmF1bHQgVGFibGVTZWxlY3RNZXNzYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvVGFibGVTZWxlY3RNZXNzYWdlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})