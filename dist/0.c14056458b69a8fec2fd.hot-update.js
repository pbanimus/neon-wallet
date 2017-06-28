webpackHotUpdate(0,{

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(56);\n\nvar _lodash = __webpack_require__(155);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nvar _FunctionSearch = __webpack_require__(1256);\n\nvar _FunctionSearch2 = _interopRequireDefault(_FunctionSearch);\n\nvar _FunctionInfo = __webpack_require__(1302);\n\nvar _FunctionInfo2 = _interopRequireDefault(_FunctionInfo);\n\nvar _reactSplitPane = __webpack_require__(1296);\n\nvar _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar RightPane = function RightPane(_ref) {\n    var variables = _ref.variables,\n        doc = _ref.doc;\n    return _react2.default.createElement(\n        _reactSplitPane2.default,\n        { split: 'horizontal', defaultSize: '30%' },\n        _react2.default.createElement(\n            'div',\n            { className: 'variableTable' },\n            _react2.default.createElement(\n                'div',\n                { className: 'title' },\n                'Current Variables'\n            ),\n            _react2.default.createElement(\n                'ul',\n                null,\n                _.map(_.sortBy(variables, function (v) {\n                    return v.order;\n                }), function (x) {\n                    return _react2.default.createElement(\n                        'li',\n                        null,\n                        _react2.default.createElement(\n                            'span',\n                            { className: 'three_quarter name' },\n                            x.name\n                        ),\n                        _react2.default.createElement(\n                            'span',\n                            { className: 'quarter' },\n                            x.value\n                        )\n                    );\n                })\n            )\n        ),\n        _react2.default.createElement(\n            _reactSplitPane2.default,\n            { className: 'secondSplit', split: 'horizontal', defaultSize: '50%' },\n            _react2.default.createElement(_FunctionSearch2.default, null),\n            _react2.default.createElement(_FunctionInfo2.default, null)\n        )\n    );\n};\n\nRightPane.propTypes = {\n    variables: _react.PropTypes.arrayOf(_react.PropTypes.any)\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        variables: state.variables,\n        doc: state.docs\n    };\n};\n\nRightPane = (0, _reactRedux.connect)(mapStateToProps)(RightPane);\n\nexports.default = RightPane;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9SaWdodFBhbmUuanM/NmE1YiJdLCJuYW1lcyI6WyJfIiwiUmlnaHRQYW5lIiwidmFyaWFibGVzIiwiZG9jIiwibWFwIiwic29ydEJ5IiwidiIsIm9yZGVyIiwieCIsIm5hbWUiLCJ2YWx1ZSIsInByb3BUeXBlcyIsImFycmF5T2YiLCJhbnkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImRvY3MiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLEM7O0FBQ1o7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUdBLElBQUlDLFlBQVk7QUFBQSxRQUFHQyxTQUFILFFBQUdBLFNBQUg7QUFBQSxRQUFjQyxHQUFkLFFBQWNBLEdBQWQ7QUFBQSxXQUNSO0FBQUE7QUFBQSxVQUFXLE9BQU0sWUFBakIsRUFBOEIsYUFBWSxLQUExQztBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsZUFBZjtBQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLGFBREo7QUFFSTtBQUFBO0FBQUE7QUFDSUgsa0JBQUVJLEdBQUYsQ0FBTUosRUFBRUssTUFBRixDQUFTSCxTQUFULEVBQW9CLFVBQUNJLENBQUQsRUFBTztBQUMvQiwyQkFBT0EsRUFBRUMsS0FBVDtBQUNILGlCQUZPLENBQU4sRUFHQSxVQUFDQyxDQUFELEVBQU87QUFDSCwyQkFBTztBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsOEJBQU0sV0FBVSxvQkFBaEI7QUFBdUNBLDhCQUFFQztBQUF6Qyx5QkFBSjtBQUEwRDtBQUFBO0FBQUEsOEJBQU0sV0FBVSxTQUFoQjtBQUE0QkQsOEJBQUVFO0FBQTlCO0FBQTFELHFCQUFQO0FBQ0gsaUJBTEQ7QUFESjtBQUZKLFNBREY7QUFZRTtBQUFBO0FBQUEsY0FBVyxXQUFVLGFBQXJCLEVBQW1DLE9BQU0sWUFBekMsRUFBc0QsYUFBWSxLQUFsRTtBQUNFLHlFQURGO0FBRUU7QUFGRjtBQVpGLEtBRFE7QUFBQSxDQUFoQjs7QUFtQkFULFVBQVVVLFNBQVYsR0FBc0I7QUFDbEJULGVBQVcsaUJBQVVVLE9BQVYsQ0FBa0IsaUJBQVVDLEdBQTVCO0FBRE8sQ0FBdEI7O0FBSUEsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsV0FBWTtBQUNoQ2IsbUJBQVdhLE1BQU1iLFNBRGU7QUFFaENDLGFBQUtZLE1BQU1DO0FBRnFCLEtBQVo7QUFBQSxDQUF4Qjs7QUFLQWYsWUFBWSx5QkFBUWEsZUFBUixFQUF5QmIsU0FBekIsQ0FBWjs7a0JBRWVBLFMiLCJmaWxlIjoiNDI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgRnVuY3Rpb25TZWFyY2ggZnJvbSAnLi9GdW5jdGlvblNlYXJjaCc7XG5pbXBvcnQgRnVuY3Rpb25JbmZvIGZyb20gJy4vRnVuY3Rpb25JbmZvJztcbmltcG9ydCBTcGxpdFBhbmUgZnJvbSAncmVhY3Qtc3BsaXQtcGFuZSc7XG5cblxubGV0IFJpZ2h0UGFuZSA9ICh7IHZhcmlhYmxlcywgZG9jIH0pID0+XG4gICAgICAgIDxTcGxpdFBhbmUgc3BsaXQ9XCJob3Jpem9udGFsXCIgZGVmYXVsdFNpemU9XCIzMCVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhcmlhYmxlVGFibGVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkN1cnJlbnQgVmFyaWFibGVzPC9kaXY+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7IF8ubWFwKF8uc29ydEJ5KHZhcmlhYmxlcywgKHYpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHYub3JkZXI7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAoeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGk+PHNwYW4gY2xhc3NOYW1lPVwidGhyZWVfcXVhcnRlciBuYW1lXCI+eyB4Lm5hbWUgfTwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJxdWFydGVyXCI+eyB4LnZhbHVlIH08L3NwYW4+PC9saT47XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8U3BsaXRQYW5lIGNsYXNzTmFtZT1cInNlY29uZFNwbGl0XCIgc3BsaXQ9XCJob3Jpem9udGFsXCIgZGVmYXVsdFNpemU9XCI1MCVcIj5cbiAgICAgICAgICAgIDxGdW5jdGlvblNlYXJjaCAvPlxuICAgICAgICAgICAgPEZ1bmN0aW9uSW5mbyAvPlxuICAgICAgICAgIDwvU3BsaXRQYW5lPlxuICAgICAgICA8L1NwbGl0UGFuZT47XG5cblJpZ2h0UGFuZS5wcm9wVHlwZXMgPSB7XG4gICAgdmFyaWFibGVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSxcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgICB2YXJpYWJsZXM6IHN0YXRlLnZhcmlhYmxlcyxcbiAgICBkb2M6IHN0YXRlLmRvY3Ncbn0pO1xuXG5SaWdodFBhbmUgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUmlnaHRQYW5lKTtcblxuZXhwb3J0IGRlZmF1bHQgUmlnaHRQYW5lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvUmlnaHRQYW5lLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})