webpackHotUpdate(0,{

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(56);\n\nvar _lodash = __webpack_require__(155);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar RightPane = function RightPane(_ref) {\n    var variables = _ref.variables,\n        doc = _ref.doc;\n    return _react2.default.createElement(\n        'div',\n        { className: 'right_pane' },\n        _react2.default.createElement(\n            'div',\n            { className: 'subtitle' },\n            'Iris'\n        ),\n        _react2.default.createElement(\n            'div',\n            { className: 'snippet' },\n            'Built with React and Redux. More will appear here soon.'\n        ),\n        _react2.default.createElement(\n            'div',\n            { className: 'variableTable' },\n            _react2.default.createElement(\n                'div',\n                { className: 'title' },\n                'Current Variables'\n            ),\n            _react2.default.createElement(\n                'ul',\n                null,\n                _.map(_.sortBy(variables, function (v) {\n                    return v.order;\n                }), function (x) {\n                    return _react2.default.createElement(\n                        'li',\n                        null,\n                        _react2.default.createElement(\n                            'span',\n                            { className: 'three_quarter name' },\n                            x.name\n                        ),\n                        _react2.default.createElement(\n                            'span',\n                            { className: 'quarter' },\n                            x.value\n                        )\n                    );\n                })\n            )\n        ),\n        _react2.default.createElement(\n            'div',\n            { className: 'func_info' },\n            _react2.default.createElement(\n                'div',\n                null,\n                doc\n            ),\n            _react2.default.createElement(\n                'div',\n                { className: 'func_title' },\n                'add two numbers: x and y'\n            ),\n            _react2.default.createElement(\n                'div',\n                { className: 'func_description' },\n                'This function takes two numbers as input and produces their sum.'\n            ),\n            _react2.default.createElement(\n                'div',\n                { className: 'examples' },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'head' },\n                    'EXAMPLES:'\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'example' },\n                    '\"add 2 3\"'\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'example' },\n                    '\"add 45 and 43\"'\n                )\n            ),\n            _react2.default.createElement(\n                'div',\n                { className: 'func_code' },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'head' },\n                    'CODE:'\n                ),\n                _react2.default.createElement(\n                    'pre',\n                    null,\n                    'def add_two_numbers(x,y): return x + y'\n                )\n            )\n        )\n    );\n};\n\nRightPane.propTypes = {\n    variables: _react.PropTypes.arrayOf(_react.PropTypes.any)\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        variables: state.variables,\n        doc: state.docs\n    };\n};\n\nRightPane = (0, _reactRedux.connect)(mapStateToProps)(RightPane);\n\nexports.default = RightPane;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9SaWdodFBhbmUuanM/NmE1YiJdLCJuYW1lcyI6WyJfIiwiUmlnaHRQYW5lIiwidmFyaWFibGVzIiwiZG9jIiwibWFwIiwic29ydEJ5IiwidiIsIm9yZGVyIiwieCIsIm5hbWUiLCJ2YWx1ZSIsInByb3BUeXBlcyIsImFycmF5T2YiLCJhbnkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImRvY3MiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLEM7Ozs7OztBQUVaLElBQUlDLFlBQVk7QUFBQSxRQUFHQyxTQUFILFFBQUdBLFNBQUg7QUFBQSxRQUFjQyxHQUFkLFFBQWNBLEdBQWQ7QUFBQSxXQUNaO0FBQUE7QUFBQSxVQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsVUFBZjtBQUFBO0FBQUEsU0FESjtBQUVJO0FBQUE7QUFBQSxjQUFLLFdBQVUsU0FBZjtBQUFBO0FBQUEsU0FGSjtBQUdJO0FBQUE7QUFBQSxjQUFLLFdBQVUsZUFBZjtBQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLGFBREo7QUFFSTtBQUFBO0FBQUE7QUFDSUgsa0JBQUVJLEdBQUYsQ0FBTUosRUFBRUssTUFBRixDQUFTSCxTQUFULEVBQW9CLFVBQUNJLENBQUQsRUFBTztBQUMvQiwyQkFBT0EsRUFBRUMsS0FBVDtBQUNILGlCQUZPLENBQU4sRUFHQSxVQUFDQyxDQUFELEVBQU87QUFDSCwyQkFBTztBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsOEJBQU0sV0FBVSxvQkFBaEI7QUFBdUNBLDhCQUFFQztBQUF6Qyx5QkFBSjtBQUEwRDtBQUFBO0FBQUEsOEJBQU0sV0FBVSxTQUFoQjtBQUE0QkQsOEJBQUVFO0FBQTlCO0FBQTFELHFCQUFQO0FBQ0gsaUJBTEQ7QUFESjtBQUZKLFNBSEo7QUFjSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUE7QUFBTVA7QUFBTixhQURGO0FBRUU7QUFBQTtBQUFBLGtCQUFLLFdBQVUsWUFBZjtBQUFBO0FBQUEsYUFGRjtBQUdFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLGtCQUFmO0FBQUE7QUFBQSxhQUhGO0FBSUU7QUFBQTtBQUFBLGtCQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQSxzQkFBSyxXQUFVLE1BQWY7QUFBQTtBQUFBLGlCQURGO0FBRUU7QUFBQTtBQUFBLHNCQUFLLFdBQVUsU0FBZjtBQUFBO0FBQUEsaUJBRkY7QUFHRTtBQUFBO0FBQUEsc0JBQUssV0FBVSxTQUFmO0FBQUE7QUFBQTtBQUhGLGFBSkY7QUFTRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLHNCQUFLLFdBQVUsTUFBZjtBQUFBO0FBQUEsaUJBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFURjtBQWRKLEtBRFk7QUFBQSxDQUFoQjs7QUFpQ0FGLFVBQVVVLFNBQVYsR0FBc0I7QUFDbEJULGVBQVcsaUJBQVVVLE9BQVYsQ0FBa0IsaUJBQVVDLEdBQTVCO0FBRE8sQ0FBdEI7O0FBSUEsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsV0FBWTtBQUNoQ2IsbUJBQVdhLE1BQU1iLFNBRGU7QUFFaENDLGFBQUtZLE1BQU1DO0FBRnFCLEtBQVo7QUFBQSxDQUF4Qjs7QUFLQWYsWUFBWSx5QkFBUWEsZUFBUixFQUF5QmIsU0FBekIsQ0FBWjs7a0JBRWVBLFMiLCJmaWxlIjoiNDI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmxldCBSaWdodFBhbmUgPSAoeyB2YXJpYWJsZXMsIGRvYyB9KSA9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRfcGFuZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+SXJpczwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNuaXBwZXRcIj5CdWlsdCB3aXRoIFJlYWN0IGFuZCBSZWR1eC4gTW9yZSB3aWxsIGFwcGVhciBoZXJlIHNvb24uPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWFibGVUYWJsZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkN1cnJlbnQgVmFyaWFibGVzPC9kaXY+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIHsgXy5tYXAoXy5zb3J0QnkodmFyaWFibGVzLCAodikgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHYub3JkZXI7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICh4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGk+PHNwYW4gY2xhc3NOYW1lPVwidGhyZWVfcXVhcnRlciBuYW1lXCI+eyB4Lm5hbWUgfTwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJxdWFydGVyXCI+eyB4LnZhbHVlIH08L3NwYW4+PC9saT47XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdW5jX2luZm9cIj5cbiAgICAgICAgICA8ZGl2Pntkb2N9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdW5jX3RpdGxlXCI+YWRkIHR3byBudW1iZXJzOiB4IGFuZCB5PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdW5jX2Rlc2NyaXB0aW9uXCI+VGhpcyBmdW5jdGlvbiB0YWtlcyB0d28gbnVtYmVycyBhcyBpbnB1dCBhbmQgcHJvZHVjZXMgdGhlaXIgc3VtLjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZXNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPkVYQU1QTEVTOjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGFtcGxlXCI+XCJhZGQgMiAzXCI8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZVwiPlwiYWRkIDQ1IGFuZCA0M1wiPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdW5jX2NvZGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPkNPREU6PC9kaXY+XG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgZGVmIGFkZF90d29fbnVtYmVycyh4LHkpOiByZXR1cm4geCArIHlcbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj47XG5cblJpZ2h0UGFuZS5wcm9wVHlwZXMgPSB7XG4gICAgdmFyaWFibGVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSxcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgICB2YXJpYWJsZXM6IHN0YXRlLnZhcmlhYmxlcyxcbiAgICBkb2M6IHN0YXRlLmRvY3Ncbn0pO1xuXG5SaWdodFBhbmUgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUmlnaHRQYW5lKTtcblxuZXhwb3J0IGRlZmF1bHQgUmlnaHRQYW5lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvUmlnaHRQYW5lLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})