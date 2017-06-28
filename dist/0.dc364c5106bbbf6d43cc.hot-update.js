webpackHotUpdate(0,{

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(41);\n\nvar _lodash = __webpack_require__(160);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nvar _FunctionSearch = __webpack_require__(435);\n\nvar _FunctionSearch2 = _interopRequireDefault(_FunctionSearch);\n\nvar _FunctionInfo = __webpack_require__(434);\n\nvar _FunctionInfo2 = _interopRequireDefault(_FunctionInfo);\n\nvar _reactSplitPane = __webpack_require__(398);\n\nvar _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);\n\nvar _index = __webpack_require__(111);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar RightPane = function RightPane(_ref) {\n  var dispatch = _ref.dispatch,\n      variables = _ref.variables,\n      doc = _ref.doc,\n      minimizeState = _ref.minimizeState;\n\n  var sizeP = void 0;\n  if (minimizeState.docs === true) {\n    sizeP = \"100%\";\n  } else {\n    sizeP = \"30%\";\n  }\n  return _react2.default.createElement(\n    _reactSplitPane2.default,\n    { split: 'horizontal', size: '5%' },\n    _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement('img', { className: 'minButton', width: '20px', src: 'http://0.0.0.0:8000/static/noun_974819.svg', onClick: function onClick() {\n          return dispatch((0, _index.setDocs)({ docs: !minimizeState.docs }));\n        } }),\n      _react2.default.createElement('img', { className: 'settingsButton', width: '27px', src: 'http://0.0.0.0:8000/static/noun_879834.svg' })\n    ),\n    _react2.default.createElement(\n      _reactSplitPane2.default,\n      { split: 'horizontal', defaultSize: '30%' },\n      _react2.default.createElement(\n        'div',\n        { className: 'variableTable' },\n        _react2.default.createElement(\n          'div',\n          { className: 'title' },\n          'Current Variables'\n        ),\n        _react2.default.createElement(\n          'ul',\n          null,\n          _.map(_.sortBy(variables, function (v) {\n            return v.order;\n          }), function (x) {\n            return _react2.default.createElement(\n              'li',\n              null,\n              _react2.default.createElement(\n                'span',\n                { className: 'three_quarter name' },\n                x.name\n              ),\n              _react2.default.createElement(\n                'span',\n                { className: 'quarter' },\n                x.value\n              )\n            );\n          })\n        )\n      ),\n      _react2.default.createElement(\n        _reactSplitPane2.default,\n        { className: 'secondSplit', split: 'horizontal', size: sizeP, allowResize: true },\n        _react2.default.createElement(_FunctionSearch2.default, null),\n        _react2.default.createElement(_FunctionInfo2.default, null)\n      )\n    )\n  );\n};\n\nRightPane.propTypes = {\n  variables: _react.PropTypes.arrayOf(_react.PropTypes.any),\n  doc: _react.PropTypes.any,\n  minimizeState: _react.PropTypes.any\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    variables: state.variables,\n    doc: state.docs,\n    minimizeState: state.minimizeState\n  };\n};\n\nRightPane = (0, _reactRedux.connect)(mapStateToProps)(RightPane);\n\nexports.default = RightPane;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9SaWdodFBhbmUuanM/NmE1YiJdLCJuYW1lcyI6WyJfIiwiUmlnaHRQYW5lIiwiZGlzcGF0Y2giLCJ2YXJpYWJsZXMiLCJkb2MiLCJtaW5pbWl6ZVN0YXRlIiwic2l6ZVAiLCJkb2NzIiwibWFwIiwic29ydEJ5IiwidiIsIm9yZGVyIiwieCIsIm5hbWUiLCJ2YWx1ZSIsInByb3BUeXBlcyIsImFycmF5T2YiLCJhbnkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7SUFBWUEsQzs7QUFDWjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR0EsSUFBSUMsWUFBWSx5QkFBaUQ7QUFBQSxNQUE5Q0MsUUFBOEMsUUFBOUNBLFFBQThDO0FBQUEsTUFBcENDLFNBQW9DLFFBQXBDQSxTQUFvQztBQUFBLE1BQXpCQyxHQUF5QixRQUF6QkEsR0FBeUI7QUFBQSxNQUFwQkMsYUFBb0IsUUFBcEJBLGFBQW9COztBQUMvRCxNQUFJQyxjQUFKO0FBQ0EsTUFBSUQsY0FBY0UsSUFBZCxLQUF1QixJQUEzQixFQUFnQztBQUM5QkQsWUFBUSxNQUFSO0FBQ0QsR0FGRCxNQUdJO0FBQ0ZBLFlBQVEsS0FBUjtBQUNEO0FBQ0QsU0FBUTtBQUFBO0FBQUEsTUFBVyxPQUFNLFlBQWpCLEVBQThCLE1BQUssSUFBbkM7QUFDUjtBQUFBO0FBQUE7QUFDRSw2Q0FBSyxXQUFVLFdBQWYsRUFBMkIsT0FBTSxNQUFqQyxFQUF3QyxLQUFJLDRDQUE1QyxFQUF5RixTQUFTO0FBQUEsaUJBQU1KLFNBQVMsb0JBQVEsRUFBQ0ssTUFBSyxDQUFDRixjQUFjRSxJQUFyQixFQUFSLENBQVQsQ0FBTjtBQUFBLFNBQWxHLEdBREY7QUFFRSw2Q0FBSyxXQUFVLGdCQUFmLEVBQWdDLE9BQU0sTUFBdEMsRUFBNkMsS0FBSSw0Q0FBakQ7QUFGRixLQURRO0FBS1I7QUFBQTtBQUFBLFFBQVcsT0FBTSxZQUFqQixFQUE4QixhQUFZLEtBQTFDO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxlQUFmO0FBQ0k7QUFBQTtBQUFBLFlBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxTQURKO0FBRUk7QUFBQTtBQUFBO0FBQ0lQLFlBQUVRLEdBQUYsQ0FBTVIsRUFBRVMsTUFBRixDQUFTTixTQUFULEVBQW9CLFVBQUNPLENBQUQsRUFBTztBQUMvQixtQkFBT0EsRUFBRUMsS0FBVDtBQUNILFdBRk8sQ0FBTixFQUdBLFVBQUNDLENBQUQsRUFBTztBQUNILG1CQUFPO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxrQkFBTSxXQUFVLG9CQUFoQjtBQUF1Q0Esa0JBQUVDO0FBQXpDLGVBQUo7QUFBMEQ7QUFBQTtBQUFBLGtCQUFNLFdBQVUsU0FBaEI7QUFBNEJELGtCQUFFRTtBQUE5QjtBQUExRCxhQUFQO0FBQ0gsV0FMRDtBQURKO0FBRkosT0FERjtBQVlFO0FBQUE7QUFBQSxVQUFXLFdBQVUsYUFBckIsRUFBbUMsT0FBTSxZQUF6QyxFQUFzRCxNQUFNUixLQUE1RCxFQUFtRSxhQUFhLElBQWhGO0FBQ0UscUVBREY7QUFFRTtBQUZGO0FBWkY7QUFMUSxHQUFSO0FBdUJELENBL0JEOztBQWtDQUwsVUFBVWMsU0FBVixHQUFzQjtBQUNsQlosYUFBVyxpQkFBVWEsT0FBVixDQUFrQixpQkFBVUMsR0FBNUIsQ0FETztBQUVsQmIsT0FBSyxpQkFBVWEsR0FGRztBQUdsQlosaUJBQWUsaUJBQVVZO0FBSFAsQ0FBdEI7O0FBTUEsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNoQ2hCLGVBQVdnQixNQUFNaEIsU0FEZTtBQUVoQ0MsU0FBS2UsTUFBTVosSUFGcUI7QUFHaENGLG1CQUFlYyxNQUFNZDtBQUhXLEdBQVo7QUFBQSxDQUF4Qjs7QUFNQUosWUFBWSx5QkFBUWlCLGVBQVIsRUFBeUJqQixTQUF6QixDQUFaOztrQkFFZUEsUyIsImZpbGUiOiI0NDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBGdW5jdGlvblNlYXJjaCBmcm9tICcuL0Z1bmN0aW9uU2VhcmNoJztcbmltcG9ydCBGdW5jdGlvbkluZm8gZnJvbSAnLi9GdW5jdGlvbkluZm8nO1xuaW1wb3J0IFNwbGl0UGFuZSBmcm9tICdyZWFjdC1zcGxpdC1wYW5lJztcbmltcG9ydCB7IHNldERvY3MgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4LmpzJztcblxuXG5sZXQgUmlnaHRQYW5lID0gKHsgZGlzcGF0Y2gsIHZhcmlhYmxlcywgZG9jLCBtaW5pbWl6ZVN0YXRlIH0pID0+IHtcbiAgbGV0IHNpemVQO1xuICBpZiAobWluaW1pemVTdGF0ZS5kb2NzID09PSB0cnVlKXtcbiAgICBzaXplUCA9IFwiMTAwJVwiO1xuICB9XG4gIGVsc2V7XG4gICAgc2l6ZVAgPSBcIjMwJVwiO1xuICB9XG4gIHJldHVybiAoPFNwbGl0UGFuZSBzcGxpdD1cImhvcml6b250YWxcIiBzaXplPVwiNSVcIj5cbiAgPGRpdj5cbiAgICA8aW1nIGNsYXNzTmFtZT1cIm1pbkJ1dHRvblwiIHdpZHRoPVwiMjBweFwiIHNyYz1cImh0dHA6Ly8wLjAuMC4wOjgwMDAvc3RhdGljL25vdW5fOTc0ODE5LnN2Z1wiIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHNldERvY3Moe2RvY3M6IW1pbmltaXplU3RhdGUuZG9jc30pKX0+PC9pbWc+XG4gICAgPGltZyBjbGFzc05hbWU9XCJzZXR0aW5nc0J1dHRvblwiIHdpZHRoPVwiMjdweFwiIHNyYz1cImh0dHA6Ly8wLjAuMC4wOjgwMDAvc3RhdGljL25vdW5fODc5ODM0LnN2Z1wiPjwvaW1nPlxuICA8L2Rpdj5cbiAgPFNwbGl0UGFuZSBzcGxpdD1cImhvcml6b250YWxcIiBkZWZhdWx0U2l6ZT1cIjMwJVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWFibGVUYWJsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+Q3VycmVudCBWYXJpYWJsZXM8L2Rpdj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHsgXy5tYXAoXy5zb3J0QnkodmFyaWFibGVzLCAodikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdi5vcmRlcjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAgICh4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxsaT48c3BhbiBjbGFzc05hbWU9XCJ0aHJlZV9xdWFydGVyIG5hbWVcIj57IHgubmFtZSB9PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInF1YXJ0ZXJcIj57IHgudmFsdWUgfTwvc3Bhbj48L2xpPjtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDxTcGxpdFBhbmUgY2xhc3NOYW1lPVwic2Vjb25kU3BsaXRcIiBzcGxpdD1cImhvcml6b250YWxcIiBzaXplPXtzaXplUH0gYWxsb3dSZXNpemU9e3RydWV9PlxuICAgICAgPEZ1bmN0aW9uU2VhcmNoIC8+XG4gICAgICA8RnVuY3Rpb25JbmZvIC8+XG4gICAgPC9TcGxpdFBhbmU+XG4gIDwvU3BsaXRQYW5lPlxuICA8L1NwbGl0UGFuZT4pO1xufTtcblxuXG5SaWdodFBhbmUucHJvcFR5cGVzID0ge1xuICAgIHZhcmlhYmxlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXG4gICAgZG9jOiBQcm9wVHlwZXMuYW55LFxuICAgIG1pbmltaXplU3RhdGU6IFByb3BUeXBlcy5hbnlcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgICB2YXJpYWJsZXM6IHN0YXRlLnZhcmlhYmxlcyxcbiAgICBkb2M6IHN0YXRlLmRvY3MsXG4gICAgbWluaW1pemVTdGF0ZTogc3RhdGUubWluaW1pemVTdGF0ZVxufSk7XG5cblJpZ2h0UGFuZSA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShSaWdodFBhbmUpO1xuXG5leHBvcnQgZGVmYXVsdCBSaWdodFBhbmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9SaWdodFBhbmUuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})