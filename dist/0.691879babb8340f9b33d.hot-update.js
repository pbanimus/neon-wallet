webpackHotUpdate(0,{

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactDataGrid = __webpack_require__(1046);\n\nvar _reactDataGrid2 = _interopRequireDefault(_reactDataGrid);\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _types = __webpack_require__(66);\n\nvar proptypes = _interopRequireWildcard(_types);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar CollectionMessage = function (_Component) {\n  _inherits(CollectionMessage, _Component);\n\n  function CollectionMessage() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, CollectionMessage);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CollectionMessage.__proto__ || Object.getPrototypeOf(CollectionMessage)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      var data = JSON.parse(_this.props.text);\n      _this.testColumns = data[\"column_data\"];\n      _this.testRows = data[\"row_data\"];\n      _this.getRow = function (i) {\n        return _this.testRows[i];\n      };\n      return _react2.default.createElement(\n        'div',\n        { className: _this.props.origin === 'iris' ? 'message left' : 'message right', style: _this.props.hidden === true ? { display: 'none' } : {} },\n        _react2.default.createElement(\n          'div',\n          { className: 'bubble table' },\n          _react2.default.createElement(\n            'div',\n            { className: 'data_table', style: { width: _this.testColumns.length * (250 + 10 + 1) } },\n            _react2.default.createElement(\n              'div',\n              { className: 'header' },\n              _this.testColumns.map(function (column) {\n                return _react2.default.createElement(\n                  'span',\n                  { className: 'data_column' },\n                  column.name\n                );\n              })\n            ),\n            _this.testRows.map(function (row) {\n              return _react2.default.createElement(\n                'div',\n                { className: 'data_row' },\n                _this.testColumns.map(function (column) {\n                  return _react2.default.createElement(\n                    'span',\n                    { className: 'data_column', style: column.type === \"Text\" ? { width: 250, height: '3em' } : {} },\n                    row[column.name]\n                  );\n                })\n              );\n            })\n          )\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return CollectionMessage;\n}(_react.Component);\n\nCollectionMessage.propTypes = proptypes.messageType;\n\nexports.default = CollectionMessage;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db2xsZWN0aW9uTWVzc2FnZS5qcz8wZDQ2Il0sIm5hbWVzIjpbInByb3B0eXBlcyIsIkNvbGxlY3Rpb25NZXNzYWdlIiwicmVuZGVyIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInByb3BzIiwidGV4dCIsInRlc3RDb2x1bW5zIiwidGVzdFJvd3MiLCJnZXRSb3ciLCJpIiwib3JpZ2luIiwiaGlkZGVuIiwiZGlzcGxheSIsIndpZHRoIiwibGVuZ3RoIiwibWFwIiwiY29sdW1uIiwibmFtZSIsInR5cGUiLCJoZWlnaHQiLCJyb3ciLCJwcm9wVHlwZXMiLCJtZXNzYWdlVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxTOzs7Ozs7Ozs7Ozs7SUFFTkMsaUI7Ozs7Ozs7Ozs7Ozs7OzRNQUVKQyxNLEdBQVMsWUFBTTtBQUNiLFVBQU1DLE9BQU9DLEtBQUtDLEtBQUwsQ0FBVyxNQUFLQyxLQUFMLENBQVdDLElBQXRCLENBQWI7QUFDQSxZQUFLQyxXQUFMLEdBQW1CTCxLQUFLLGFBQUwsQ0FBbkI7QUFDQSxZQUFLTSxRQUFMLEdBQWdCTixLQUFLLFVBQUwsQ0FBaEI7QUFDQSxZQUFLTyxNQUFMLEdBQWMsVUFBQ0MsQ0FBRDtBQUFBLGVBQU8sTUFBS0YsUUFBTCxDQUFjRSxDQUFkLENBQVA7QUFBQSxPQUFkO0FBQ0EsYUFBUTtBQUFBO0FBQUEsVUFBSyxXQUFhLE1BQUtMLEtBQUwsQ0FBV00sTUFBWCxLQUFzQixNQUF0QixHQUErQixjQUEvQixHQUFnRCxlQUFsRSxFQUFtRixPQUFPLE1BQUtOLEtBQUwsQ0FBV08sTUFBWCxLQUFzQixJQUF0QixHQUE2QixFQUFDQyxTQUFTLE1BQVYsRUFBN0IsR0FBaUQsRUFBM0k7QUFDSjtBQUFBO0FBQUEsWUFBSyxXQUFVLGNBQWY7QUFDQTtBQUFBO0FBQUEsY0FBSyxXQUFVLFlBQWYsRUFBNEIsT0FBTyxFQUFDQyxPQUFPLE1BQUtQLFdBQUwsQ0FBaUJRLE1BQWpCLElBQTJCLE1BQUksRUFBSixHQUFPLENBQWxDLENBQVIsRUFBbkM7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxRQUFmO0FBQ0Msb0JBQUtSLFdBQUwsQ0FBaUJTLEdBQWpCLENBQXFCLGtCQUFVO0FBQzlCLHVCQUFPO0FBQUE7QUFBQSxvQkFBTSxXQUFVLGFBQWhCO0FBQStCQyx5QkFBT0M7QUFBdEMsaUJBQVA7QUFDRCxlQUZBO0FBREQsYUFERjtBQU1HLGtCQUFLVixRQUFMLENBQWNRLEdBQWQsQ0FBa0IsZUFBTztBQUN4QixxQkFBUTtBQUFBO0FBQUEsa0JBQUssV0FBVSxVQUFmO0FBQ0wsc0JBQUtULFdBQUwsQ0FBaUJTLEdBQWpCLENBQXFCLGtCQUFVO0FBQzlCLHlCQUFPO0FBQUE7QUFBQSxzQkFBTSxXQUFVLGFBQWhCLEVBQThCLE9BQU9DLE9BQU9FLElBQVAsS0FBZ0IsTUFBaEIsR0FBeUIsRUFBQ0wsT0FBTyxHQUFSLEVBQWFNLFFBQVEsS0FBckIsRUFBekIsR0FBdUQsRUFBNUY7QUFBaUdDLHdCQUFJSixPQUFPQyxJQUFYO0FBQWpHLG1CQUFQO0FBQ0QsaUJBRkE7QUFESyxlQUFSO0FBS0QsYUFOQTtBQU5IO0FBREE7QUFESSxPQUFSO0FBa0JELEs7Ozs7OztBQUlIbEIsa0JBQWtCc0IsU0FBbEIsR0FBOEJ2QixVQUFVd0IsV0FBeEM7O2tCQUVldkIsaUIiLCJmaWxlIjoiNDE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0RGF0YUdyaWQgZnJvbSAncmVhY3QtZGF0YS1ncmlkJztcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgcHJvcHR5cGVzIGZyb20gJy4uL3Byb3B0eXBlcy90eXBlcyc7XG5cbmNsYXNzIENvbGxlY3Rpb25NZXNzYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICByZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UodGhpcy5wcm9wcy50ZXh0KTtcbiAgICB0aGlzLnRlc3RDb2x1bW5zID0gZGF0YVtcImNvbHVtbl9kYXRhXCJdO1xuICAgIHRoaXMudGVzdFJvd3MgPSBkYXRhW1wicm93X2RhdGFcIl07XG4gICAgdGhpcy5nZXRSb3cgPSAoaSkgPT4gdGhpcy50ZXN0Um93c1tpXTtcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lID0ge3RoaXMucHJvcHMub3JpZ2luID09PSAnaXJpcycgPyAnbWVzc2FnZSBsZWZ0JyA6ICdtZXNzYWdlIHJpZ2h0J30gc3R5bGU9e3RoaXMucHJvcHMuaGlkZGVuID09PSB0cnVlID8ge2Rpc3BsYXk6ICdub25lJ30gOiB7fX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnViYmxlIHRhYmxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YV90YWJsZVwiIHN0eWxlPXt7d2lkdGg6IHRoaXMudGVzdENvbHVtbnMubGVuZ3RoICogKDI1MCsxMCsxKX19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAge3RoaXMudGVzdENvbHVtbnMubWFwKGNvbHVtbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwiZGF0YV9jb2x1bW5cIj57Y29sdW1uLm5hbWV9PC9zcGFuPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7dGhpcy50ZXN0Um93cy5tYXAocm93ID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJkYXRhX3Jvd1wiPlxuICAgICAgICAgICAgICB7dGhpcy50ZXN0Q29sdW1ucy5tYXAoY29sdW1uID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwiZGF0YV9jb2x1bW5cIiBzdHlsZT17Y29sdW1uLnR5cGUgPT09IFwiVGV4dFwiID8ge3dpZHRoOiAyNTAsIGhlaWdodDogJzNlbSd9IDoge319Pntyb3dbY29sdW1uLm5hbWVdfTwvc3Bhbj47XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+KTtcbiAgfVxuXG59XG5cbkNvbGxlY3Rpb25NZXNzYWdlLnByb3BUeXBlcyA9IHByb3B0eXBlcy5tZXNzYWdlVHlwZTtcblxuZXhwb3J0IGRlZmF1bHQgQ29sbGVjdGlvbk1lc3NhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9Db2xsZWN0aW9uTWVzc2FnZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})