webpackHotUpdate(0,{

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(31);\n\nvar _brace = __webpack_require__(178);\n\nvar _brace2 = _interopRequireDefault(_brace);\n\nvar _reactAce = __webpack_require__(1100);\n\nvar _reactAce2 = _interopRequireDefault(_reactAce);\n\nvar _index = __webpack_require__(69);\n\nvar _python = __webpack_require__(70);\n\nvar _reactSplitPane = __webpack_require__(262);\n\nvar _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);\n\n__webpack_require__(516);\n\n__webpack_require__(517);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar onChange = function onChange(dispatch, name) {\n  (function (value) {\n    dispatch(updateCodeEditor(name, value));\n  });\n};\n\nvar command_name = void 0,\n    command_title = void 0,\n    test_inputs = void 0;\n\nvar CommandEdit = function (_Component) {\n  _inherits(CommandEdit, _Component);\n\n  function CommandEdit() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, CommandEdit);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CommandEdit.__proto__ || Object.getPrototypeOf(CommandEdit)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      return _react2.default.createElement(\n        'div',\n        { className: 'command_edit' },\n        _react2.default.createElement(\n          _reactSplitPane2.default,\n          { className: 'codepane', split: 'vertical', defaultSize: '66%' },\n          _react2.default.createElement(\n            'div',\n            { 'class': 'overflow' },\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Command name:'\n            ),\n            _react2.default.createElement('input', { type: 'text', placeholder: 'e.g., add_two_numbers', onChange: onChange('name'), ref: function ref(node) {\n                command_name = node;\n              } }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Command title:'\n            ),\n            _react2.default.createElement('input', { type: 'text', placeholder: 'e.g., add {x} and {y}', onChange: onChange('title'), ref: function ref(node) {\n                command_title = node;\n              } }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Arguments:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              height: '300px',\n              autoScrollEditorIntoView: 'true',\n              maxLines: '15',\n              theme: 'github',\n              onChange: dispatch(_this.props.dispatch, 'args'),\n              name: 'command_editor'\n            }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'The python command:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              height: '300px',\n              autoScrollEditorIntoView: 'true',\n              maxLines: '15',\n              theme: 'github',\n              onChange: dispatch(_this.props.dispatch, 'command'),\n              name: 'command_editor'\n            }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'The explanation:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              maxLines: '15',\n              autoScrollEditorIntoView: 'true',\n              height: '300px',\n              theme: 'github',\n              onChange: dispatch(_this.props.dispatch, 'explanation'),\n              name: 'explanation_editor'\n            })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'command_edit testpane overflow' },\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Test inputs:'\n            ),\n            _react2.default.createElement('input', { type: 'text', onChange: onChange('testInputs'), ref: function ref(node) {\n                test_inputs = node;\n              } })\n          )\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return CommandEdit;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    title: state.commandEditPane.title,\n    name: state.commandEditPane.name,\n    args: state.commandEditPane.args,\n    command: state.commandEditPane.command,\n    explanation: state.commandEditPane.explanation,\n    testInputs: state.commandEditPane.testInputs\n  };\n};\n\nCommandEdit = (0, _reactRedux.connect)(mapStateToProps)(CommandEdit);\n\nexports.default = CommandEdit;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db21tYW5kRWRpdC5qcz9jMTBjIl0sIm5hbWVzIjpbIm9uQ2hhbmdlIiwiZGlzcGF0Y2giLCJuYW1lIiwidmFsdWUiLCJ1cGRhdGVDb2RlRWRpdG9yIiwiY29tbWFuZF9uYW1lIiwiY29tbWFuZF90aXRsZSIsInRlc3RfaW5wdXRzIiwiQ29tbWFuZEVkaXQiLCJyZW5kZXIiLCJub2RlIiwicHJvcHMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInRpdGxlIiwiY29tbWFuZEVkaXRQYW5lIiwiYXJncyIsImNvbW1hbmQiLCJleHBsYW5hdGlvbiIsInRlc3RJbnB1dHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsUUFBRCxFQUFXQyxJQUFYLEVBQW9CO0FBQ25DLGFBQUNDLEtBQUQsRUFBVztBQUNURixhQUFTRyxpQkFBaUJGLElBQWpCLEVBQXVCQyxLQUF2QixDQUFUO0FBQ0QsR0FGRDtBQUdELENBSkQ7O0FBTUEsSUFBSUUscUJBQUo7QUFBQSxJQUFrQkMsc0JBQWxCO0FBQUEsSUFBaUNDLG9CQUFqQzs7SUFFTUMsVzs7Ozs7Ozs7Ozs7Ozs7Z01BRUZDLE0sR0FBUztBQUFBLGFBQ0g7QUFBQTtBQUFBLFVBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQVcsV0FBVSxVQUFyQixFQUFnQyxPQUFNLFVBQXRDLEVBQWlELGFBQVksS0FBN0Q7QUFDQTtBQUFBO0FBQUEsY0FBSyxTQUFNLFVBQVg7QUFDQTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxhQURBO0FBRUEscURBQU8sTUFBSyxNQUFaLEVBQW1CLGFBQVksdUJBQS9CLEVBQXVELFVBQVVULFNBQVMsTUFBVCxDQUFqRSxFQUFtRixLQUFLLG1CQUFRO0FBQUNLLCtCQUFlSyxJQUFmO0FBQXFCLGVBQXRILEdBRkE7QUFHQTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxhQUhBO0FBSUEscURBQU8sTUFBSyxNQUFaLEVBQW1CLGFBQVksdUJBQS9CLEVBQXVELFVBQVVWLFNBQVMsT0FBVCxDQUFqRSxFQUFvRixLQUFLLG1CQUFRO0FBQUNNLGdDQUFnQkksSUFBaEI7QUFBc0IsZUFBeEgsR0FKQTtBQUtBO0FBQUE7QUFBQSxnQkFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLGFBTEE7QUFNQTtBQUNFLG9CQUFLLFFBRFA7QUFFRSxxQkFBTSxNQUZSO0FBR0Usc0JBQU8sT0FIVDtBQUlFLHdDQUF5QixNQUozQjtBQUtFLHdCQUFTLElBTFg7QUFNRSxxQkFBTSxRQU5SO0FBT0Usd0JBQVVULFNBQVMsTUFBS1UsS0FBTCxDQUFXVixRQUFwQixFQUE4QixNQUE5QixDQVBaO0FBUUUsb0JBQUs7QUFSUCxjQU5BO0FBZ0JBO0FBQUE7QUFBQSxnQkFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLGFBaEJBO0FBaUJBO0FBQ0Usb0JBQUssUUFEUDtBQUVFLHFCQUFNLE1BRlI7QUFHRSxzQkFBTyxPQUhUO0FBSUUsd0NBQXlCLE1BSjNCO0FBS0Usd0JBQVMsSUFMWDtBQU1FLHFCQUFNLFFBTlI7QUFPRSx3QkFBVUEsU0FBUyxNQUFLVSxLQUFMLENBQVdWLFFBQXBCLEVBQThCLFNBQTlCLENBUFo7QUFRRSxvQkFBSztBQVJQLGNBakJBO0FBMkJBO0FBQUE7QUFBQSxnQkFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLGFBM0JBO0FBNEJBO0FBQ0Usb0JBQUssUUFEUDtBQUVFLHFCQUFNLE1BRlI7QUFHRSx3QkFBUyxJQUhYO0FBSUUsd0NBQXlCLE1BSjNCO0FBS0Usc0JBQU8sT0FMVDtBQU1FLHFCQUFNLFFBTlI7QUFPRSx3QkFBVUEsU0FBUyxNQUFLVSxLQUFMLENBQVdWLFFBQXBCLEVBQThCLGFBQTlCLENBUFo7QUFRRSxvQkFBSztBQVJQO0FBNUJBLFdBREE7QUF3Q0Y7QUFBQTtBQUFBLGNBQUssV0FBVSxnQ0FBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLE9BQWY7QUFBQTtBQUFBLGFBREY7QUFFRSxxREFBTyxNQUFLLE1BQVosRUFBbUIsVUFBVUQsU0FBUyxZQUFULENBQTdCLEVBQXFELEtBQUssbUJBQVE7QUFBQ08sOEJBQWNHLElBQWQ7QUFBb0IsZUFBdkY7QUFGRjtBQXhDRTtBQURGLE9BREc7QUFBQSxLOzs7Ozs7QUFvRGIsSUFBTUUsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNoQ0MsV0FBT0QsTUFBTUUsZUFBTixDQUFzQkQsS0FERztBQUVoQ1osVUFBTVcsTUFBTUUsZUFBTixDQUFzQmIsSUFGSTtBQUdoQ2MsVUFBTUgsTUFBTUUsZUFBTixDQUFzQkMsSUFISTtBQUloQ0MsYUFBU0osTUFBTUUsZUFBTixDQUFzQkUsT0FKQztBQUtoQ0MsaUJBQWFMLE1BQU1FLGVBQU4sQ0FBc0JHLFdBTEg7QUFNaENDLGdCQUFZTixNQUFNRSxlQUFOLENBQXNCSTtBQU5GLEdBQVo7QUFBQSxDQUF4Qjs7QUFTQVgsY0FBYyx5QkFBUUksZUFBUixFQUF5QkosV0FBekIsQ0FBZDs7a0JBRWVBLFciLCJmaWxlIjoiNDM0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBicmFjZSBmcm9tICdicmFjZSc7XG5pbXBvcnQgQWNlRWRpdG9yIGZyb20gJ3JlYWN0LWFjZSc7XG5pbXBvcnQgeyB1cGRhdGVGdW5jLCB1cGRhdGVSZXN1bHRzLCBzdG9yZUN1cnJlbnRJbnB1dCwgc2V0RG9jcyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXguanMnO1xuaW1wb3J0IHsgZG9TZWFyY2gsIHVwZGF0ZUhpbnQsIHVwZGF0ZURvY3MgfSBmcm9tICcuLi9hcGlfY2FsbHMvcHl0aG9uLmpzJztcbmltcG9ydCBTcGxpdFBhbmUgZnJvbSAncmVhY3Qtc3BsaXQtcGFuZSc7XG5cbmltcG9ydCAnYnJhY2UvbW9kZS9weXRob24nO1xuaW1wb3J0ICdicmFjZS90aGVtZS9naXRodWInO1xuXG5jb25zdCBvbkNoYW5nZSA9IChkaXNwYXRjaCwgbmFtZSkgPT4ge1xuICAodmFsdWUpID0+IHtcbiAgICBkaXNwYXRjaCh1cGRhdGVDb2RlRWRpdG9yKG5hbWUsIHZhbHVlKSk7XG4gIH1cbn07XG5cbmxldCBjb21tYW5kX25hbWUsIGNvbW1hbmRfdGl0bGUsIHRlc3RfaW5wdXRzO1xuXG5jbGFzcyBDb21tYW5kRWRpdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICByZW5kZXIgPSAoKSA9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWFuZF9lZGl0XCI+XG4gICAgICAgICAgICA8U3BsaXRQYW5lIGNsYXNzTmFtZT1cImNvZGVwYW5lXCIgc3BsaXQ9XCJ2ZXJ0aWNhbFwiIGRlZmF1bHRTaXplPVwiNjYlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmZsb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5Db21tYW5kIG5hbWU6PC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImUuZy4sIGFkZF90d29fbnVtYmVyc1wiIG9uQ2hhbmdlPXtvbkNoYW5nZSgnbmFtZScpfSByZWY9e25vZGUgPT4ge2NvbW1hbmRfbmFtZSA9IG5vZGU7fX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5Db21tYW5kIHRpdGxlOjwvZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJlLmcuLCBhZGQge3h9IGFuZCB7eX1cIiBvbkNoYW5nZT17b25DaGFuZ2UoJ3RpdGxlJyl9IHJlZj17bm9kZSA9PiB7Y29tbWFuZF90aXRsZSA9IG5vZGU7fX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5Bcmd1bWVudHM6PC9kaXY+XG4gICAgICAgICAgICA8QWNlRWRpdG9yXG4gICAgICAgICAgICAgIG1vZGU9XCJweXRob25cIlxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzMDBweFwiXG4gICAgICAgICAgICAgIGF1dG9TY3JvbGxFZGl0b3JJbnRvVmlldz1cInRydWVcIlxuICAgICAgICAgICAgICBtYXhMaW5lcz1cIjE1XCJcbiAgICAgICAgICAgICAgdGhlbWU9XCJnaXRodWJcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZGlzcGF0Y2godGhpcy5wcm9wcy5kaXNwYXRjaCwgJ2FyZ3MnKX1cbiAgICAgICAgICAgICAgbmFtZT1cImNvbW1hbmRfZWRpdG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+VGhlIHB5dGhvbiBjb21tYW5kOjwvZGl2PlxuICAgICAgICAgICAgPEFjZUVkaXRvclxuICAgICAgICAgICAgICBtb2RlPVwicHl0aG9uXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzAwcHhcIlxuICAgICAgICAgICAgICBhdXRvU2Nyb2xsRWRpdG9ySW50b1ZpZXc9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgbWF4TGluZXM9XCIxNVwiXG4gICAgICAgICAgICAgIHRoZW1lPVwiZ2l0aHViXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2Rpc3BhdGNoKHRoaXMucHJvcHMuZGlzcGF0Y2gsICdjb21tYW5kJyl9XG4gICAgICAgICAgICAgIG5hbWU9XCJjb21tYW5kX2VkaXRvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPlRoZSBleHBsYW5hdGlvbjo8L2Rpdj5cbiAgICAgICAgICAgIDxBY2VFZGl0b3JcbiAgICAgICAgICAgICAgbW9kZT1cInB5dGhvblwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgIG1heExpbmVzPVwiMTVcIlxuICAgICAgICAgICAgICBhdXRvU2Nyb2xsRWRpdG9ySW50b1ZpZXc9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzAwcHhcIlxuICAgICAgICAgICAgICB0aGVtZT1cImdpdGh1YlwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtkaXNwYXRjaCh0aGlzLnByb3BzLmRpc3BhdGNoLCAnZXhwbGFuYXRpb24nKX1cbiAgICAgICAgICAgICAgbmFtZT1cImV4cGxhbmF0aW9uX2VkaXRvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWFuZF9lZGl0IHRlc3RwYW5lIG92ZXJmbG93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+VGVzdCBpbnB1dHM6PC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17b25DaGFuZ2UoJ3Rlc3RJbnB1dHMnKX0gcmVmPXtub2RlID0+IHt0ZXN0X2lucHV0cyA9IG5vZGU7fX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1NwbGl0UGFuZT5cbiAgICAgICAgICA8L2Rpdj5cblxuXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgICB0aXRsZTogc3RhdGUuY29tbWFuZEVkaXRQYW5lLnRpdGxlLFxuICAgIG5hbWU6IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS5uYW1lLFxuICAgIGFyZ3M6IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS5hcmdzLFxuICAgIGNvbW1hbmQ6IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS5jb21tYW5kLFxuICAgIGV4cGxhbmF0aW9uOiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUuZXhwbGFuYXRpb24sXG4gICAgdGVzdElucHV0czogc3RhdGUuY29tbWFuZEVkaXRQYW5lLnRlc3RJbnB1dHNcbn0pO1xuXG5Db21tYW5kRWRpdCA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDb21tYW5kRWRpdCk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1hbmRFZGl0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvQ29tbWFuZEVkaXQuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})