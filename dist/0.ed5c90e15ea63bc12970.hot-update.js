webpackHotUpdate(0,{

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(56);\n\nvar _lodash = __webpack_require__(155);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nvar _FunctionSearch = __webpack_require__(1256);\n\nvar _FunctionSearch2 = _interopRequireDefault(_FunctionSearch);\n\nvar _FunctionInfo = __webpack_require__(1302);\n\nvar _FunctionInfo2 = _interopRequireDefault(_FunctionInfo);\n\nvar _reactSplitPane = __webpack_require__(1296);\n\nvar _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);\n\nvar _index = __webpack_require__(167);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar minimize = function minimize(dispatch, minimizeState) {\n  console.log(\"clicked\");\n  dispatch((0, _index.toggleDocs)(minimizeState));\n};\n\nvar _handleSplitPaneOnDragFinished = function _handleSplitPaneOnDragFinished(splitPane) {\n  console.log(splitPane);\n  var draggedSize = splitPane.props.draggedSize;\n  // ↓ this is what does the trick\n  splitPane.setState({\n    resized: false,\n    defaultSize: draggedSize,\n    draggedSize: undefined\n  });\n};\n\nvar RightPane = function RightPane(_ref) {\n  var dispatch = _ref.dispatch,\n      variables = _ref.variables,\n      doc = _ref.doc,\n      minimizeState = _ref.minimizeState;\n\n  var sizeP = void 0;\n  if (minimizeState.docs === true) {\n    sizeP = \"100%\";\n  } else {\n    sizeP = \"50%\";\n  }\n  var splitPane = void 0;\n  var uf = function uf() {\n    return _handleSplitPaneOnDragFinished(splitPane);\n  };\n  splitPane = _react2.default.createElement(\n    _reactSplitPane2.default,\n    { className: 'secondSplit', split: 'horizontal', style: { width: sizeP } },\n    _react2.default.createElement(_FunctionSearch2.default, null),\n    _react2.default.createElement(_FunctionInfo2.default, null)\n  );\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      _reactSplitPane2.default,\n      { split: 'horizontal', defaultSize: '30%' },\n      _react2.default.createElement(\n        'div',\n        { className: 'variableTable' },\n        _react2.default.createElement(\n          'div',\n          { className: 'title' },\n          'Current Variables'\n        ),\n        _react2.default.createElement(\n          'ul',\n          null,\n          _.map(_.sortBy(variables, function (v) {\n            return v.order;\n          }), function (x) {\n            return _react2.default.createElement(\n              'li',\n              null,\n              _react2.default.createElement(\n                'span',\n                { className: 'three_quarter name' },\n                x.name\n              ),\n              _react2.default.createElement(\n                'span',\n                { className: 'quarter' },\n                x.value\n              )\n            );\n          })\n        )\n      ),\n      splitPane\n    ),\n    _react2.default.createElement(\n      'button',\n      { className: 'minButton', onClick: function onClick() {\n          return minimize(dispatch, minimizeState);\n        } },\n      'Minimize'\n    )\n  );\n};\n\nRightPane.propTypes = {\n  variables: _react.PropTypes.arrayOf(_react.PropTypes.any),\n  doc: _react.PropTypes.any,\n  minimizeState: _react.PropTypes.any\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    variables: state.variables,\n    doc: state.docs,\n    minimizeState: state.minimizeState\n  };\n};\n\nRightPane = (0, _reactRedux.connect)(mapStateToProps)(RightPane);\n\nexports.default = RightPane;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9SaWdodFBhbmUuanM/NmE1YiJdLCJuYW1lcyI6WyJfIiwibWluaW1pemUiLCJkaXNwYXRjaCIsIm1pbmltaXplU3RhdGUiLCJjb25zb2xlIiwibG9nIiwiX2hhbmRsZVNwbGl0UGFuZU9uRHJhZ0ZpbmlzaGVkIiwic3BsaXRQYW5lIiwiZHJhZ2dlZFNpemUiLCJwcm9wcyIsInNldFN0YXRlIiwicmVzaXplZCIsImRlZmF1bHRTaXplIiwidW5kZWZpbmVkIiwiUmlnaHRQYW5lIiwidmFyaWFibGVzIiwiZG9jIiwic2l6ZVAiLCJkb2NzIiwidWYiLCJ3aWR0aCIsIm1hcCIsInNvcnRCeSIsInYiLCJvcmRlciIsIngiLCJuYW1lIiwidmFsdWUiLCJwcm9wVHlwZXMiLCJhcnJheU9mIiwiYW55IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLEM7O0FBQ1o7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1DLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxRQUFELEVBQVdDLGFBQVgsRUFBNkI7QUFDNUNDLFVBQVFDLEdBQVIsQ0FBWSxTQUFaO0FBQ0FILFdBQVMsdUJBQVdDLGFBQVgsQ0FBVDtBQUNELENBSEQ7O0FBS0EsSUFBTUcsaUNBQWlDLFNBQWpDQSw4QkFBaUMsQ0FBQ0MsU0FBRCxFQUFlO0FBQ3BESCxVQUFRQyxHQUFSLENBQVlFLFNBQVo7QUFDRSxNQUFNQyxjQUFjRCxVQUFVRSxLQUFWLENBQWdCRCxXQUFwQztBQUNBO0FBQ0FELFlBQVVHLFFBQVYsQ0FBbUI7QUFDakJDLGFBQVMsS0FEUTtBQUVqQkMsaUJBQVlKLFdBRks7QUFHakJBLGlCQUFhSztBQUhJLEdBQW5CO0FBS0QsQ0FUSDs7QUFZQSxJQUFJQyxZQUFZLHlCQUFpRDtBQUFBLE1BQTlDWixRQUE4QyxRQUE5Q0EsUUFBOEM7QUFBQSxNQUFwQ2EsU0FBb0MsUUFBcENBLFNBQW9DO0FBQUEsTUFBekJDLEdBQXlCLFFBQXpCQSxHQUF5QjtBQUFBLE1BQXBCYixhQUFvQixRQUFwQkEsYUFBb0I7O0FBQy9ELE1BQUljLGNBQUo7QUFDQSxNQUFJZCxjQUFjZSxJQUFkLEtBQXVCLElBQTNCLEVBQWdDO0FBQzlCRCxZQUFRLE1BQVI7QUFDRCxHQUZELE1BR0k7QUFDRkEsWUFBUSxLQUFSO0FBQ0Q7QUFDRCxNQUFJVixrQkFBSjtBQUNBLE1BQU1ZLEtBQUssU0FBTEEsRUFBSztBQUFBLFdBQU1iLCtCQUErQkMsU0FBL0IsQ0FBTjtBQUFBLEdBQVg7QUFDQUEsY0FBYTtBQUFBO0FBQUEsTUFBVyxXQUFVLGFBQXJCLEVBQW1DLE9BQU0sWUFBekMsRUFBc0QsT0FBTyxFQUFDYSxPQUFNSCxLQUFQLEVBQTdEO0FBQ1gsaUVBRFc7QUFFWDtBQUZXLEdBQWI7QUFJQSxTQUFRO0FBQUE7QUFBQTtBQUNSO0FBQUE7QUFBQSxRQUFXLE9BQU0sWUFBakIsRUFBOEIsYUFBWSxLQUExQztBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsZUFBZjtBQUNJO0FBQUE7QUFBQSxZQUFLLFdBQVUsT0FBZjtBQUFBO0FBQUEsU0FESjtBQUVJO0FBQUE7QUFBQTtBQUNJakIsWUFBRXFCLEdBQUYsQ0FBTXJCLEVBQUVzQixNQUFGLENBQVNQLFNBQVQsRUFBb0IsVUFBQ1EsQ0FBRCxFQUFPO0FBQy9CLG1CQUFPQSxFQUFFQyxLQUFUO0FBQ0gsV0FGTyxDQUFOLEVBR0EsVUFBQ0MsQ0FBRCxFQUFPO0FBQ0gsbUJBQU87QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLGtCQUFNLFdBQVUsb0JBQWhCO0FBQXVDQSxrQkFBRUM7QUFBekMsZUFBSjtBQUEwRDtBQUFBO0FBQUEsa0JBQU0sV0FBVSxTQUFoQjtBQUE0QkQsa0JBQUVFO0FBQTlCO0FBQTFELGFBQVA7QUFDSCxXQUxEO0FBREo7QUFGSixPQURGO0FBWUdwQjtBQVpILEtBRFE7QUFlUjtBQUFBO0FBQUEsUUFBUSxXQUFVLFdBQWxCLEVBQThCLFNBQVM7QUFBQSxpQkFBTU4sU0FBU0MsUUFBVCxFQUFtQkMsYUFBbkIsQ0FBTjtBQUFBLFNBQXZDO0FBQUE7QUFBQTtBQWZRLEdBQVI7QUFpQkQsQ0EvQkQ7O0FBa0NBVyxVQUFVYyxTQUFWLEdBQXNCO0FBQ2xCYixhQUFXLGlCQUFVYyxPQUFWLENBQWtCLGlCQUFVQyxHQUE1QixDQURPO0FBRWxCZCxPQUFLLGlCQUFVYyxHQUZHO0FBR2xCM0IsaUJBQWUsaUJBQVUyQjtBQUhQLENBQXRCOztBQU1BLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDaENqQixlQUFXaUIsTUFBTWpCLFNBRGU7QUFFaENDLFNBQUtnQixNQUFNZCxJQUZxQjtBQUdoQ2YsbUJBQWU2QixNQUFNN0I7QUFIVyxHQUFaO0FBQUEsQ0FBeEI7O0FBTUFXLFlBQVkseUJBQVFpQixlQUFSLEVBQXlCakIsU0FBekIsQ0FBWjs7a0JBRWVBLFMiLCJmaWxlIjoiNDI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgRnVuY3Rpb25TZWFyY2ggZnJvbSAnLi9GdW5jdGlvblNlYXJjaCc7XG5pbXBvcnQgRnVuY3Rpb25JbmZvIGZyb20gJy4vRnVuY3Rpb25JbmZvJztcbmltcG9ydCBTcGxpdFBhbmUgZnJvbSAncmVhY3Qtc3BsaXQtcGFuZSc7XG5pbXBvcnQgeyB0b2dnbGVEb2NzIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleC5qcyc7XG5cbmNvbnN0IG1pbmltaXplID0gKGRpc3BhdGNoLCBtaW5pbWl6ZVN0YXRlKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiY2xpY2tlZFwiKTtcbiAgZGlzcGF0Y2godG9nZ2xlRG9jcyhtaW5pbWl6ZVN0YXRlKSk7XG59XG5cbmNvbnN0IF9oYW5kbGVTcGxpdFBhbmVPbkRyYWdGaW5pc2hlZCA9IChzcGxpdFBhbmUpID0+IHtcbiAgY29uc29sZS5sb2coc3BsaXRQYW5lKTtcbiAgICBjb25zdCBkcmFnZ2VkU2l6ZSA9IHNwbGl0UGFuZS5wcm9wcy5kcmFnZ2VkU2l6ZTtcbiAgICAvLyDihpMgdGhpcyBpcyB3aGF0IGRvZXMgdGhlIHRyaWNrXG4gICAgc3BsaXRQYW5lLnNldFN0YXRlKHtcbiAgICAgIHJlc2l6ZWQ6IGZhbHNlLFxuICAgICAgZGVmYXVsdFNpemU6ZHJhZ2dlZFNpemUsXG4gICAgICBkcmFnZ2VkU2l6ZTogdW5kZWZpbmVkLFxuICAgIH0pO1xuICB9O1xuXG5cbmxldCBSaWdodFBhbmUgPSAoeyBkaXNwYXRjaCwgdmFyaWFibGVzLCBkb2MsIG1pbmltaXplU3RhdGUgfSkgPT4ge1xuICBsZXQgc2l6ZVA7XG4gIGlmIChtaW5pbWl6ZVN0YXRlLmRvY3MgPT09IHRydWUpe1xuICAgIHNpemVQID0gXCIxMDAlXCI7XG4gIH1cbiAgZWxzZXtcbiAgICBzaXplUCA9IFwiNTAlXCI7XG4gIH1cbiAgbGV0IHNwbGl0UGFuZTtcbiAgY29uc3QgdWYgPSAoKSA9PiBfaGFuZGxlU3BsaXRQYW5lT25EcmFnRmluaXNoZWQoc3BsaXRQYW5lKTtcbiAgc3BsaXRQYW5lID0gKDxTcGxpdFBhbmUgY2xhc3NOYW1lPVwic2Vjb25kU3BsaXRcIiBzcGxpdD1cImhvcml6b250YWxcIiBzdHlsZT17e3dpZHRoOnNpemVQfX0+XG4gICAgPEZ1bmN0aW9uU2VhcmNoIC8+XG4gICAgPEZ1bmN0aW9uSW5mbyAvPlxuICA8L1NwbGl0UGFuZT4pXG4gIHJldHVybiAoPGRpdj5cbiAgPFNwbGl0UGFuZSBzcGxpdD1cImhvcml6b250YWxcIiBkZWZhdWx0U2l6ZT1cIjMwJVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWFibGVUYWJsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+Q3VycmVudCBWYXJpYWJsZXM8L2Rpdj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHsgXy5tYXAoXy5zb3J0QnkodmFyaWFibGVzLCAodikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdi5vcmRlcjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAgICh4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxsaT48c3BhbiBjbGFzc05hbWU9XCJ0aHJlZV9xdWFydGVyIG5hbWVcIj57IHgubmFtZSB9PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInF1YXJ0ZXJcIj57IHgudmFsdWUgfTwvc3Bhbj48L2xpPjtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIHtzcGxpdFBhbmV9XG4gIDwvU3BsaXRQYW5lPlxuICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1pbkJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IG1pbmltaXplKGRpc3BhdGNoLCBtaW5pbWl6ZVN0YXRlKX0+TWluaW1pemU8L2J1dHRvbj5cbiAgPC9kaXY+KTtcbn07XG5cblxuUmlnaHRQYW5lLnByb3BUeXBlcyA9IHtcbiAgICB2YXJpYWJsZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxuICAgIGRvYzogUHJvcFR5cGVzLmFueSxcbiAgICBtaW5pbWl6ZVN0YXRlOiBQcm9wVHlwZXMuYW55XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gICAgdmFyaWFibGVzOiBzdGF0ZS52YXJpYWJsZXMsXG4gICAgZG9jOiBzdGF0ZS5kb2NzLFxuICAgIG1pbmltaXplU3RhdGU6IHN0YXRlLm1pbmltaXplU3RhdGVcbn0pO1xuXG5SaWdodFBhbmUgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUmlnaHRQYW5lKTtcblxuZXhwb3J0IGRlZmF1bHQgUmlnaHRQYW5lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvUmlnaHRQYW5lLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})