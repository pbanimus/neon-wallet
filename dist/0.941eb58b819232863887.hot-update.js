webpackHotUpdate(0,{

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _InputBox = __webpack_require__(265);\n\nvar _python = __webpack_require__(166);\n\nvar _reactRedux = __webpack_require__(63);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar setInput = function setInput(text) {\n    return function () {\n        var stripText = text.replace(/{/g, '').replace(/}/g, '');\n        _InputBox.input.value = stripText;\n        (0, _python.updateHint)(stripText);\n    };\n};\n\nvar PredictionStrip = function PredictionStrip(_ref) {\n    var predictions = _ref.predictions;\n    return _react2.default.createElement(\n        'div',\n        { className: 'prediction_strip' },\n        _react2.default.createElement(\n            'div',\n            { className: 'predictions' },\n            predictions.map(function (prediction) {\n                return _react2.default.createElement(\n                    'span',\n                    { onClick: setInput(prediction), className: 'prediction' },\n                    prediction\n                );\n            })\n        )\n    );\n};\n\nPredictionStrip.propTypes = {\n    predictions: _react.PropTypes.any\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        predictions: state.predictions\n    };\n};\n\nPredictionStrip = (0, _reactRedux.connect)(mapStateToProps)(PredictionStrip);\n\nexports.default = PredictionStrip;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9QcmVkaWN0aW9uU3RyaXAuanM/ZDFhMiJdLCJuYW1lcyI6WyJzZXRJbnB1dCIsInRleHQiLCJzdHJpcFRleHQiLCJyZXBsYWNlIiwidmFsdWUiLCJQcmVkaWN0aW9uU3RyaXAiLCJwcmVkaWN0aW9ucyIsIm1hcCIsInByZWRpY3Rpb24iLCJwcm9wVHlwZXMiLCJhbnkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUVBLElBQU1BLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxJQUFELEVBQVU7QUFDdkIsV0FBTyxZQUFNO0FBQ1QsWUFBSUMsWUFBWUQsS0FBS0UsT0FBTCxDQUFhLElBQWIsRUFBbUIsRUFBbkIsRUFBdUJBLE9BQXZCLENBQStCLElBQS9CLEVBQXFDLEVBQXJDLENBQWhCO0FBQ0Esd0JBQU1DLEtBQU4sR0FBY0YsU0FBZDtBQUNBLGdDQUFXQSxTQUFYO0FBQ0gsS0FKRDtBQUtILENBTkQ7O0FBUUEsSUFBSUcsa0JBQWtCO0FBQUEsUUFBRUMsV0FBRixRQUFFQSxXQUFGO0FBQUEsV0FDbEI7QUFBQTtBQUFBLFVBQUssV0FBVSxrQkFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsYUFBZjtBQUNHQSx3QkFBWUMsR0FBWixDQUFnQjtBQUFBLHVCQUFjO0FBQUE7QUFBQSxzQkFBTSxTQUFTUCxTQUFTUSxVQUFULENBQWYsRUFBcUMsV0FBVSxZQUEvQztBQUE4REE7QUFBOUQsaUJBQWQ7QUFBQSxhQUFoQjtBQURIO0FBREYsS0FEa0I7QUFBQSxDQUF0Qjs7QUFPQUgsZ0JBQWdCSSxTQUFoQixHQUE0QjtBQUN4QkgsaUJBQWEsaUJBQVVJO0FBREMsQ0FBNUI7O0FBSUEsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsV0FBWTtBQUNoQ04scUJBQWFNLE1BQU1OO0FBRGEsS0FBWjtBQUFBLENBQXhCOztBQUlBRCxrQkFBa0IseUJBQVFNLGVBQVIsRUFBeUJOLGVBQXpCLENBQWxCOztrQkFFZUEsZSIsImZpbGUiOiI0MjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaW5wdXQgfSBmcm9tICcuLi9jb250YWluZXJzL0lucHV0Qm94JztcbmltcG9ydCB7IHVwZGF0ZUhpbnQgfSBmcm9tICcuLi9hcGlfY2FsbHMvcHl0aG9uLmpzJztcblxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY29uc3Qgc2V0SW5wdXQgPSAodGV4dCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGxldCBzdHJpcFRleHQgPSB0ZXh0LnJlcGxhY2UoL3svZywgJycpLnJlcGxhY2UoL30vZywgJycpO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IHN0cmlwVGV4dDtcbiAgICAgICAgdXBkYXRlSGludChzdHJpcFRleHQpO1xuICAgIH07XG59O1xuXG5sZXQgUHJlZGljdGlvblN0cmlwID0gKHtwcmVkaWN0aW9uc30pID0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcmVkaWN0aW9uX3N0cmlwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZWRpY3Rpb25zXCI+XG4gICAgICAgIHtwcmVkaWN0aW9ucy5tYXAocHJlZGljdGlvbiA9PiA8c3BhbiBvbkNsaWNrPXtzZXRJbnB1dChwcmVkaWN0aW9uKX0gY2xhc3NOYW1lPVwicHJlZGljdGlvblwiPnsgcHJlZGljdGlvbiB9PC9zcGFuPil9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj47XG5cblByZWRpY3Rpb25TdHJpcC5wcm9wVHlwZXMgPSB7XG4gICAgcHJlZGljdGlvbnM6IFByb3BUeXBlcy5hbnlcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgICBwcmVkaWN0aW9uczogc3RhdGUucHJlZGljdGlvbnNcbn0pO1xuXG5QcmVkaWN0aW9uU3RyaXAgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUHJlZGljdGlvblN0cmlwKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJlZGljdGlvblN0cmlwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvUHJlZGljdGlvblN0cmlwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})