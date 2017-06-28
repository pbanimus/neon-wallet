webpackHotUpdate(0,{

/***/ 1256:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(56);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar FunctionSearch = function (_Component) {\n  _inherits(FunctionSearch, _Component);\n\n  function FunctionSearch() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, FunctionSearch);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FunctionSearch.__proto__ || Object.getPrototypeOf(FunctionSearch)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      return _react2.default.createElement(\n        'div',\n        { className: 'func_search' },\n        _react2.default.createElement(\n          'div',\n          { className: 'search_box' },\n          _react2.default.createElement('input', { type: 'text', placeholder: 'search here', value: _this.props.search })\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'results' },\n          _this.props.results.map(function (func) {\n            return _react2.default.createElement(\n              'div',\n              { className: 'result' },\n              func\n            );\n          })\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return FunctionSearch;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    search: state.functionSearch.search,\n    results: state.functionSearch.results\n  };\n};\n\nFunctionSearch = (0, _reactRedux.connect)(mapStateToProps)(FunctionSearch);\n\nexports.default = FunctionSearch;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9GdW5jdGlvblNlYXJjaC5qcz8yYTMzIl0sIm5hbWVzIjpbIkZ1bmN0aW9uU2VhcmNoIiwicmVuZGVyIiwicHJvcHMiLCJzZWFyY2giLCJyZXN1bHRzIiwibWFwIiwiZnVuYyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiZnVuY3Rpb25TZWFyY2giXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsYzs7Ozs7Ozs7Ozs7Ozs7c01BRUZDLE0sR0FBUztBQUFBLGFBQ1A7QUFBQTtBQUFBLFVBQUssV0FBVSxhQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxZQUFmO0FBQTRCLG1EQUFPLE1BQUssTUFBWixFQUFtQixhQUFZLGFBQS9CLEVBQTZDLE9BQU8sTUFBS0MsS0FBTCxDQUFXQyxNQUEvRDtBQUE1QixTQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBVSxTQUFmO0FBQ0csZ0JBQUtELEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkMsR0FBbkIsQ0FBdUI7QUFBQSxtQkFBUTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxRQUFmO0FBQXlCQztBQUF6QixhQUFSO0FBQUEsV0FBdkI7QUFESDtBQUZGLE9BRE87QUFBQSxLOzs7Ozs7QUFVYixJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2hDTCxZQUFRSyxNQUFNQyxjQUFOLENBQXFCTixNQURHO0FBRWhDQyxhQUFTSSxNQUFNQyxjQUFOLENBQXFCTDtBQUZFLEdBQVo7QUFBQSxDQUF4Qjs7QUFLQUosaUJBQWlCLHlCQUFRTyxlQUFSLEVBQXlCUCxjQUF6QixDQUFqQjs7a0JBRWVBLGMiLCJmaWxlIjoiMTI1Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmNsYXNzIEZ1bmN0aW9uU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHJlbmRlciA9ICgpID0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bmNfc2VhcmNoXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoX2JveFwiPjxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwic2VhcmNoIGhlcmVcIiB2YWx1ZT17dGhpcy5wcm9wcy5zZWFyY2h9PjwvaW5wdXQ+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0c1wiPlxuICAgICAgICAgIHt0aGlzLnByb3BzLnJlc3VsdHMubWFwKGZ1bmMgPT4gPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRcIj57ZnVuY308L2Rpdj4pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgICBzZWFyY2g6IHN0YXRlLmZ1bmN0aW9uU2VhcmNoLnNlYXJjaCxcbiAgICByZXN1bHRzOiBzdGF0ZS5mdW5jdGlvblNlYXJjaC5yZXN1bHRzXG59KTtcblxuRnVuY3Rpb25TZWFyY2ggPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoRnVuY3Rpb25TZWFyY2gpO1xuXG5leHBvcnQgZGVmYXVsdCBGdW5jdGlvblNlYXJjaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL0Z1bmN0aW9uU2VhcmNoLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})