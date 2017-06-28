webpackHotUpdate(0,{

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.input = exports.InputBox = undefined;\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(56);\n\nvar _index = __webpack_require__(167);\n\nvar _python = __webpack_require__(126);\n\nvar _PredictionStrip = __webpack_require__(425);\n\nvar _lodash = __webpack_require__(155);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar input = void 0;\n\nvar notNull = function notNull(inputHistory) {\n    return inputHistory.currId !== null;\n};\nvar getCurrentHistory = function getCurrentHistory(inputHistory) {\n    return _.reverse(inputHistory.history.slice())[inputHistory.currId];\n};\n\nvar _onKeyDown = function _onKeyDown(dispatch, inputHistory, e, predictions) {\n    var keyCode = e.keyCode || e.which;\n    console.log(keyCode);\n    if (keyCode === 9) {\n        // tab\n        if (predictions.length > 0) {\n            (0, _PredictionStrip.setInput)(predictions[0].text);\n            // input.value = predictions[0].text;\n            // updateHint(input.value);\n        }\n    }\n    if (keyCode === 38) {\n        // up arrow\n        console.log('up arrow');\n        dispatch((0, _index.moveInputHistory)({ 'direction': 'up' }));\n        console.log(inputHistory);\n        if (notNull(inputHistory)) {\n            console.log('diplay', getCurrentHistory(inputHistory));\n            input.value = getCurrentHistory(inputHistory);\n        }\n    } else if (keyCode === 40) {\n        // down arrow\n        console.log('down arrow');\n        dispatch((0, _index.moveInputHistory)({ 'direction': 'down' }));\n        console.log(inputHistory);\n        if (notNull(inputHistory)) {\n            console.log('display', getCurrentHistory(inputHistory));\n            input.value = getCurrentHistory(inputHistory);\n        }\n    }\n};\n// canal artefact wood angle coffee february media aunt tail load weapon jazz\nvar onChangeInput = function onChangeInput(dispatch) {\n    dispatch((0, _index.storeCurrentInput)(input.value));\n    (0, _python.updateHint)(input.value);\n    // updateDocs(input.value);\n};\n\n// input goes here\nvar InputBox = function InputBox(_ref) {\n    var dispatch = _ref.dispatch,\n        inputHistory = _ref.inputHistory,\n        predictions = _ref.predictions;\n    return _react2.default.createElement(\n        'div',\n        { className: 'input_box' },\n        _react2.default.createElement(\n            'form',\n            { onSubmit: function onSubmit(e) {\n                    e.preventDefault();\n                    dispatch((0, _index.addMessage)({ 'origin': 'user', 'text': [input.value] }));\n                    dispatch((0, _index.addInputHistory)({ 'message': input.value }));\n                    // dispatch(updateDocEvent({'doc':{'title':''}}));\n                    input.value = '';\n                } },\n            _react2.default.createElement('input', { onChange: function onChange() {\n                    return onChangeInput(dispatch);\n                }, onKeyDown: function onKeyDown(e) {\n                    return _onKeyDown(dispatch, inputHistory, e, predictions);\n                }, type: 'text', placeholder: 'your message here', ref: function ref(node) {\n                    exports.input = input = node;\n                } })\n        )\n    );\n};\n\nInputBox.propTypes = {\n    dispatch: _react.PropTypes.func,\n    inputHistory: _react.PropTypes.any,\n    predictions: _react.PropTypes.any\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        inputHistory: state.inputHistory,\n        predictions: state.predictions\n    };\n};\n\nexports.InputBox = InputBox = (0, _reactRedux.connect)(mapStateToProps)(InputBox);\n\nexports.InputBox = InputBox;\nexports.input = input;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9JbnB1dEJveC5qcz9jYzUxIl0sIm5hbWVzIjpbIl8iLCJpbnB1dCIsIm5vdE51bGwiLCJpbnB1dEhpc3RvcnkiLCJjdXJySWQiLCJnZXRDdXJyZW50SGlzdG9yeSIsInJldmVyc2UiLCJoaXN0b3J5Iiwic2xpY2UiLCJvbktleURvd24iLCJkaXNwYXRjaCIsImUiLCJwcmVkaWN0aW9ucyIsImtleUNvZGUiLCJ3aGljaCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJ0ZXh0IiwidmFsdWUiLCJvbkNoYW5nZUlucHV0IiwiSW5wdXRCb3giLCJwcmV2ZW50RGVmYXVsdCIsIm5vZGUiLCJwcm9wVHlwZXMiLCJmdW5jIiwiYW55IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztJQUFZQSxDOzs7Ozs7QUFHWixJQUFJQyxjQUFKOztBQUVBLElBQU1DLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxZQUFEO0FBQUEsV0FBa0JBLGFBQWFDLE1BQWIsS0FBd0IsSUFBMUM7QUFBQSxDQUFoQjtBQUNBLElBQU1DLG9CQUFvQixTQUFwQkEsaUJBQW9CLENBQUNGLFlBQUQ7QUFBQSxXQUFrQkgsRUFBRU0sT0FBRixDQUFVSCxhQUFhSSxPQUFiLENBQXFCQyxLQUFyQixFQUFWLEVBQXdDTCxhQUFhQyxNQUFyRCxDQUFsQjtBQUFBLENBQTFCOztBQUVBLElBQU1LLGFBQVksU0FBWkEsVUFBWSxDQUFDQyxRQUFELEVBQVdQLFlBQVgsRUFBeUJRLENBQXpCLEVBQTRCQyxXQUE1QixFQUE0QztBQUMxRCxRQUFNQyxVQUFVRixFQUFFRSxPQUFGLElBQWFGLEVBQUVHLEtBQS9CO0FBQ0FDLFlBQVFDLEdBQVIsQ0FBWUgsT0FBWjtBQUNBLFFBQUlBLFlBQVksQ0FBaEIsRUFBa0I7QUFBRTtBQUNsQixZQUFHRCxZQUFZSyxNQUFaLEdB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eXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBhZGRNZXNzYWdlLCBhZGRJbnB1dEhpc3RvcnksIG1vdmVJbnB1dEhpc3RvcnksIHN0b3JlQ3VycmVudElucHV0LCB1cGRhdGVEb2NFdmVudCB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXguanMnO1xuaW1wb3J0IHsgdXBkYXRlSGludCwgdXBkYXRlRG9jcyB9IGZyb20gJy4uL2FwaV9jYWxscy9weXRob24uanMnO1xuaW1wb3J0IHsgc2V0SW5wdXQgfSBmcm9tICcuLi9jb21wb25lbnRzL1ByZWRpY3Rpb25TdHJpcC5qcyc7XG5cbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuXG5sZXQgaW5wdXQ7XG5cbmNvbnN0IG5vdE51bGwgPSAoaW5wdXRIaXN0b3J5KSA9PiBpbnB1dEhpc3RvcnkuY3VycklkICE9PSBudWxsO1xuY29uc3QgZ2V0Q3VycmVudEhpc3RvcnkgPSAoaW5wdXRIaXN0b3J5KSA9PiBfLnJldmVyc2UoaW5wdXRIaXN0b3J5Lmhpc3Rvcnkuc2xpY2UoKSlbaW5wdXRIaXN0b3J5LmN1cnJJZF07XG5cbmNvbnN0IG9uS2V5RG93biA9IChkaXNwYXRjaCwgaW5wdXRIaXN0b3J5LCBlLCBwcmVkaWN0aW9ucykgPT4ge1xuICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGUgfHwgZS53aGljaDtcbiAgICBjb25zb2xlLmxvZyhrZXlDb2RlKTtcbiAgICBpZiAoa2V5Q29kZSA9PT0gOSl7IC8vIHRhYlxuICAgICAgaWYocHJlZGljdGlvbnMubGVuZ3RoID4gMCl7XG4gICAgICAgIHNldElucHV0KHByZWRpY3Rpb25zWzBdLnRleHQpO1xuICAgICAgICAvLyBpbnB1dC52YWx1ZSA9IHByZWRpY3Rpb25zWzBdLnRleHQ7XG4gICAgICAgIC8vIHVwZGF0ZUhpbnQoaW5wdXQudmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoa2V5Q29kZSA9PT0gMzgpIHsgLy8gdXAgYXJyb3dcbiAgICAgICAgY29uc29sZS5sb2coJ3VwIGFycm93Jyk7XG4gICAgICAgIGRpc3BhdGNoKG1vdmVJbnB1dEhpc3RvcnkoeydkaXJlY3Rpb24nOiAndXAnfSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dEhpc3RvcnkpO1xuICAgICAgICBpZiAobm90TnVsbChpbnB1dEhpc3RvcnkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGlwbGF5JywgZ2V0Q3VycmVudEhpc3RvcnkoaW5wdXRIaXN0b3J5KSk7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGdldEN1cnJlbnRIaXN0b3J5KGlucHV0SGlzdG9yeSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYoa2V5Q29kZSA9PT0gNDApIHsgLy8gZG93biBhcnJvd1xuICAgICAgICBjb25zb2xlLmxvZygnZG93biBhcnJvdycpO1xuICAgICAgICBkaXNwYXRjaChtb3ZlSW5wdXRIaXN0b3J5KHsnZGlyZWN0aW9uJzogJ2Rvd24nfSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dEhpc3RvcnkpO1xuICAgICAgICBpZiAobm90TnVsbChpbnB1dEhpc3RvcnkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGlzcGxheScsIGdldEN1cnJlbnRIaXN0b3J5KGlucHV0SGlzdG9yeSkpO1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBnZXRDdXJyZW50SGlzdG9yeShpbnB1dEhpc3RvcnkpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIGNhbmFsIGFydGVmYWN0IHdvb2QgYW5nbGUgY29mZmVlIGZlYnJ1YXJ5IG1lZGlhIGF1bnQgdGFpbCBsb2FkIHdlYXBvbiBqYXp6XG5jb25zdCBvbkNoYW5nZUlucHV0ID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goc3RvcmVDdXJyZW50SW5wdXQoaW5wdXQudmFsdWUpKTtcbiAgICB1cGRhdGVIaW50KGlucHV0LnZhbHVlKTtcbiAgICAvLyB1cGRhdGVEb2NzKGlucHV0LnZhbHVlKTtcbn07XG5cbi8vIGlucHV0IGdvZXMgaGVyZVxubGV0IElucHV0Qm94ID0gKHsgZGlzcGF0Y2gsIGlucHV0SGlzdG9yeSwgcHJlZGljdGlvbnMgfSkgPT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0X2JveFwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17ZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkaXNwYXRjaChhZGRNZXNzYWdlKHsnb3JpZ2luJzogJ3VzZXInLCAndGV4dCc6IFtpbnB1dC52YWx1ZV0gfSkpO1xuICAgICAgICAgICAgZGlzcGF0Y2goYWRkSW5wdXRIaXN0b3J5KHsnbWVzc2FnZSc6IGlucHV0LnZhbHVlfSkpO1xuICAgICAgICAgICAgLy8gZGlzcGF0Y2godXBkYXRlRG9jRXZlbnQoeydkb2MnOnsndGl0bGUnOicnfX0pKTtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIH19PlxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZUlucHV0KGRpc3BhdGNoKX0gb25LZXlEb3duPXsoZSkgPT4gb25LZXlEb3duKGRpc3BhdGNoLCBpbnB1dEhpc3RvcnksIGUsIHByZWRpY3Rpb25zKX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInlvdXIgbWVzc2FnZSBoZXJlXCIgcmVmPXtub2RlID0+IHtpbnB1dCA9IG5vZGU7fX0+PC9pbnB1dD5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PjtcblxuSW5wdXRCb3gucHJvcFR5cGVzID0ge1xuICAgIGRpc3BhdGNoOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpbnB1dEhpc3Rvcnk6IFByb3BUeXBlcy5hbnksXG4gICAgcHJlZGljdGlvbnM6IFByb3BUeXBlcy5hbnlcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgICBpbnB1dEhpc3Rvcnk6IHN0YXRlLmlucHV0SGlzdG9yeSxcbiAgICBwcmVkaWN0aW9uczogc3RhdGUucHJlZGljdGlvbnNcbn0pO1xuXG5JbnB1dEJveCA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShJbnB1dEJveCk7XG5cbmV4cG9ydCB7SW5wdXRCb3gsIGlucHV0fTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb250YWluZXJzL0lucHV0Qm94LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})