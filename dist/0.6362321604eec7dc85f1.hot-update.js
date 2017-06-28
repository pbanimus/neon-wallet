webpackHotUpdate(0,{

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(25);\n\nvar _brace = __webpack_require__(178);\n\nvar _brace2 = _interopRequireDefault(_brace);\n\nvar _reactAce = __webpack_require__(1101);\n\nvar _reactAce2 = _interopRequireDefault(_reactAce);\n\nvar _ArgumentAnnotation = __webpack_require__(432);\n\nvar _ArgumentAnnotation2 = _interopRequireDefault(_ArgumentAnnotation);\n\nvar _ExamplesEditor = __webpack_require__(1317);\n\nvar _ExamplesEditor2 = _interopRequireDefault(_ExamplesEditor);\n\nvar _index = __webpack_require__(48);\n\nvar _python = __webpack_require__(70);\n\nvar _reactSplitPane = __webpack_require__(262);\n\nvar _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);\n\n__webpack_require__(517);\n\n__webpack_require__(518);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar command_name = void 0,\n    command_title = void 0,\n    test_inputs = void 0,\n    args_editor = void 0,\n    command_editor = void 0,\n    explanation_editor = void 0,\n    code_preview = void 0;\n\nvar runTest = function runTest(args_obj) {\n  (0, _python.testFunction)({\n    name: command_name.value,\n    title: command_title.value,\n    args: args_obj,\n    command: command_editor.editor.getValue(),\n    explanation: explanation_editor.editor.getValue()\n  });\n};\n\nvar onChange = function onChange(dispatch, name) {\n  return function (value) {\n    console.log(\"setting\", name, value);\n    dispatch((0, _index.updateCodeEditor)(name, value));\n    runTest();\n  };\n};\n\nvar addArgument = function addArgument(dispatch) {\n  return function () {\n    dispatch((0, _index.addCommandArg)());\n  };\n};\n\nvar CommandEdit = function (_Component) {\n  _inherits(CommandEdit, _Component);\n\n  function CommandEdit() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, CommandEdit);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CommandEdit.__proto__ || Object.getPrototypeOf(CommandEdit)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      return _react2.default.createElement(\n        'div',\n        { className: 'command_edit' },\n        _react2.default.createElement(\n          _reactSplitPane2.default,\n          { className: 'codepane', split: 'vertical', defaultSize: '66%' },\n          _react2.default.createElement(\n            'div',\n            { 'class': 'overflow' },\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Command name:'\n            ),\n            _react2.default.createElement('input', { type: 'text', placeholder: 'e.g., add_two_numbers', onChange: onChange(_this.props.dispatch, 'name'), ref: function ref(node) {\n                command_name = node;\n              } }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Command title:'\n            ),\n            _react2.default.createElement('input', { type: 'text', placeholder: 'e.g., add {x} and {y}', onChange: onChange(_this.props.dispatch, 'title'), ref: function ref(node) {\n                command_title = node;\n              } }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Arguments:'\n            ),\n            _react2.default.createElement(\n              'button',\n              { onClick: addArgument(_this.props.dispatch) },\n              'Add Argument'\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'arguments' },\n              _this.props.args.map(function (arg, i) {\n                return _react2.default.createElement(_ArgumentAnnotation2.default, { id: i, name: arg.arg_name });\n              })\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'examples' },\n              'Examples'\n            ),\n            _react2.default.createElement(_ExamplesEditor2.default, null),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'The python command:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              height: '300px',\n              autoScrollEditorIntoView: 'true',\n              maxLines: '15',\n              theme: 'github',\n              onChange: onChange(_this.props.dispatch, 'command'),\n              value: _this.props.command,\n              name: 'command_editor',\n              ref: function ref(node) {\n                command_editor = node;\n              }\n\n            }),\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'The explanation:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              maxLines: '15',\n              autoScrollEditorIntoView: 'true',\n              height: '300px',\n              theme: 'github',\n              onChange: onChange(_this.props.dispatch, 'explanation'),\n              value: _this.props.explanation,\n              name: 'explanation_editor',\n              ref: function ref(node) {\n                explanation_editor = node;\n              }\n            })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'command_edit testpane overflow' },\n            _react2.default.createElement(\n              'div',\n              { className: 'label' },\n              'Code preview:'\n            ),\n            _react2.default.createElement(_reactAce2.default, {\n              mode: 'python',\n              width: '100%',\n              maxLines: '15',\n              autoScrollEditorIntoView: 'true',\n              height: '300px',\n              theme: 'github',\n              name: 'code_preview',\n              value: _this.props.preview,\n              contentEditable: false,\n              ref: function ref(node) {\n                code_preview = node;\n              }\n            }),\n            _react2.default.createElement(\n              'button',\n              { onClick: function onClick() {\n                  return runTest(_this.props.args);\n                } },\n              'Compile Code'\n            ),\n            _this.props.error !== \"\" ? _react2.default.createElement(\n              'div',\n              { className: 'errorBox' },\n              _this.props.error\n            ) : _react2.default.createElement('div', null)\n          )\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(CommandEdit, [{\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate() {\n      console.log(\"setting values\", this.props.command);\n      code_preview.editor.setOptions({\n        readOnly: true,\n        highlightActiveLine: false,\n        highlightGutterLine: false\n      });\n      // command_editor.editor.setValue(this.props.command);\n      // args_editor.editor.setValue(this.props.args);\n      // explanation_editor.editor.setValue(this.props.explanation);\n    }\n  }]);\n\n  return CommandEdit;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    title: state.commandEditPane.title,\n    name: state.commandEditPane.name,\n    args: state.commandEditPane.args,\n    command: state.commandEditPane.command,\n    explanation: state.commandEditPane.explanation,\n    testInputs: state.commandEditPane.testInputs,\n    preview: state.commandEditPane.preview,\n    error: state.commandEditPane.error\n  };\n};\n\nCommandEdit = (0, _reactRedux.connect)(mapStateToProps)(CommandEdit);\n\nexports.default = CommandEdit;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db21tYW5kRWRpdC5qcz9jMTBjIl0sIm5hbWVzIjpbImNvbW1hbmRfbmFtZSIsImNvbW1hbmRfdGl0bGUiLCJ0ZXN0X2lucHV0cyIsImFyZ3NfZWRpdG9yIiwiY29tbWFuZF9lZGl0b3IiLCJleHBsYW5hdGlvbl9lZGl0b3IiLCJjb2RlX3ByZXZpZXciLCJydW5UZXN0IiwiYXJnc19vYmoiLCJuYW1lIiwidmFsdWUiLCJ0aXRsZSIsImFyZ3MiLCJjb21tYW5kIiwiZWRpdG9yIiwiZ2V0VmFsdWUiLCJleHBsYW5hdGlvbiIsIm9uQ2hhbmdlIiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiYWRkQXJndW1lbnQiLCJDb21tYW5kRWRpdCIsInJlbmRlciIsInByb3BzIiwibm9kZSIsIm1hcCIsImFyZyIsImkiLCJhcmdfbmFtZSIsInByZXZpZXciLCJlcnJvciIsInNldE9wdGlvbnMiLCJyZWFkT25seSIsImhpZ2hsaWdodEFjdGl2ZUxpbmUiLCJoaWdobGlnaHRHdXR0ZXJMaW5lIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb21tYW5kRWRpdFBhbmUiLCJ0ZXN0SW5wdXRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7O0FBR0EsSUFBSUEscUJBQUo7QUFBQSxJQUFrQkMsc0JBQWxCO0FBQUEsSUFBaUNDLG9CQUFqQztBQUFBLElBQThDQyxvQkFBOUM7QUFBQSxJQUEyREMsdUJBQTNEO0FBQUEsSUFBMkVDLDJCQUEzRTtBQUFBLElBQStGQyxxQkFBL0Y7O0FBR0EsSUFBTUMsVUFBVSxTQUFWQSxPQUFVLENBQUNDLFFBQUQsRUFBYztBQUM1Qiw0QkFBYTtBQUNUQyxVQUFNVCxhQUFhVSxLQURWO0FBRVRDLFdBQU1WLGNBQWNTLEtBRlg7QUFHVEUsVUFB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RUwsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNoQzFCLFdBQU8wQixNQUFNQyxlQUFOLENBQXNCM0IsS0FERztBQUVoQ0YsVUFBTTRCLE1BQU1DLGVBQU4sQ0FBc0I3QixJQUZJO0FBR2hDRyxVQUFNeUIsTUFBTUMsZUFBTixDQUFzQjFCLElBSEk7QUFJaENDLGFBQVN3QixNQUFNQyxlQUFOLENBQXNCekIsT0FKQztBQUtoQ0csaUJBQWFxQixNQUFNQyxlQUFOLENBQXNCdEIsV0FMSDtBQU1oQ3VCLGdCQUFZRixNQUFNQyxlQUFOLENBQXNCQyxVQU5GO0FBT2hDVCxhQUFTTyxNQUFNQyxlQUFOLENBQXNCUixPQVBDO0FBUWhDQyxXQUFPTSxNQUFNQyxlQUFOLENBQXNCUDtBQVJHLEdBQVo7QUFBQSxDQUF4Qjs7QUFXQVQsY0FBYyx5QkFBUWMsZUFBUixFQUF5QmQsV0FBekIsQ0FBZDs7a0JBRWVBLFciLCJmaWxlIjoiNDM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBicmFjZSBmcm9tICdicmFjZSc7XG5pbXBvcnQgQWNlRWRpdG9yIGZyb20gJ3JlYWN0LWFjZSc7XG5pbXBvcnQgQXJndW1lbnRBbm5vdGF0aW9uIGZyb20gJy4vQXJndW1lbnRBbm5vdGF0aW9uJztcbmltcG9ydCBFeGFtcGxlc0VkaXRvciBmcm9tICcuL0V4YW1wbGVzRWRpdG9yJztcbmltcG9ydCB7IHVwZGF0ZUNvZGVFZGl0b3IsIGFkZENvbW1hbmRBcmcgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4LmpzJztcbmltcG9ydCB7IGRvU2VhcmNoLCB1cGRhdGVIaW50LCB1cGRhdGVEb2NzLCB0ZXN0RnVuY3Rpb24gfSBmcm9tICcuLi9hcGlfY2FsbHMvcHl0aG9uLmpzJztcbmltcG9ydCBTcGxpdFBhbmUgZnJvbSAncmVhY3Qtc3BsaXQtcGFuZSc7XG5cbmltcG9ydCAnYnJhY2UvbW9kZS9weXRob24nO1xuaW1wb3J0ICdicmFjZS90aGVtZS9naXRodWInO1xuXG5cbmxldCBjb21tYW5kX25hbWUsIGNvbW1hbmRfdGl0bGUsIHRlc3RfaW5wdXRzLCBhcmdzX2VkaXRvciwgY29tbWFuZF9lZGl0b3IsIGV4cGxhbmF0aW9uX2VkaXRvciwgY29kZV9wcmV2aWV3O1xuXG5cbmNvbnN0IHJ1blRlc3QgPSAoYXJnc19vYmopID0+IHtcbiAgdGVzdEZ1bmN0aW9uKHtcbiAgICAgIG5hbWU6IGNvbW1hbmRfbmFtZS52YWx1ZSxcbiAgICAgIHRpdGxlOmNvbW1hbmRfdGl0bGUudmFsdWUsXG4gICAgICBhcmdzOiBhcmdzX29iaixcbiAgICAgIGNvbW1hbmQ6Y29tbWFuZF9lZGl0b3IuZWRpdG9yLmdldFZhbHVlKCksXG4gICAgICBleHBsYW5hdGlvbjpleHBsYW5hdGlvbl9lZGl0b3IuZWRpdG9yLmdldFZhbHVlKClcbiAgfSk7XG59O1xuXG5jb25zdCBvbkNoYW5nZSA9IChkaXNwYXRjaCwgbmFtZSkgPT5cbiAgKHZhbHVlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJzZXR0aW5nXCIsbmFtZSx2YWx1ZSk7XG4gICAgZGlzcGF0Y2godXBkYXRlQ29kZUVkaXRvcihuYW1lLCB2YWx1ZSkpO1xuICAgIHJ1blRlc3QoKTtcbiAgfTtcblxuY29uc3QgYWRkQXJndW1lbnQgPSAoZGlzcGF0Y2gpID0+XG4gICgpID0+IHtcbiAgICBkaXNwYXRjaChhZGRDb21tYW5kQXJnKCkpO1xuICB9O1xuXG5jbGFzcyBDb21tYW5kRWRpdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2V0dGluZyB2YWx1ZXNcIiwgdGhpcy5wcm9wcy5jb21tYW5kKTtcbiAgICAgICAgY29kZV9wcmV2aWV3LmVkaXRvci5zZXRPcHRpb25zKHtcbiAgICAgICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICAgICAgaGlnaGxpZ2h0QWN0aXZlTGluZTogZmFsc2UsXG4gICAgICAgICAgICBoaWdobGlnaHRHdXR0ZXJMaW5lOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gY29tbWFuZF9lZGl0b3IuZWRpdG9yLnNldFZhbHVlKHRoaXMucHJvcHMuY29tbWFuZCk7XG4gICAgICAgIC8vIGFyZ3NfZWRpdG9yLmVkaXRvci5zZXRWYWx1ZSh0aGlzLnByb3BzLmFyZ3MpO1xuICAgICAgICAvLyBleHBsYW5hdGlvbl9lZGl0b3IuZWRpdG9yLnNldFZhbHVlKHRoaXMucHJvcHMuZXhwbGFuYXRpb24pO1xuICAgIH1cblxuICAgIHJlbmRlciA9ICgpID0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tYW5kX2VkaXRcIj5cbiAgICAgICAgICAgIDxTcGxpdFBhbmUgY2xhc3NOYW1lPVwiY29kZXBhbmVcIiBzcGxpdD1cInZlcnRpY2FsXCIgZGVmYXVsdFNpemU9XCI2NiVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdmVyZmxvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPkNvbW1hbmQgbmFtZTo8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiZS5nLiwgYWRkX3R3b19udW1iZXJzXCIgb25DaGFuZ2U9e29uQ2hhbmdlKHRoaXMucHJvcHMuZGlzcGF0Y2gsICduYW1lJyl9IHJlZj17bm9kZSA9PiB7Y29tbWFuZF9uYW1lID0gbm9kZTt9fSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPkNvbW1hbmQgdGl0bGU6PC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImUuZy4sIGFkZCB7eH0gYW5kIHt5fVwiIG9uQ2hhbmdlPXtvbkNoYW5nZSh0aGlzLnByb3BzLmRpc3BhdGNoLCAndGl0bGUnKX0gcmVmPXtub2RlID0+IHtjb21tYW5kX3RpdGxlID0gbm9kZTt9fSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPkFyZ3VtZW50czo8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17YWRkQXJndW1lbnQodGhpcy5wcm9wcy5kaXNwYXRjaCl9PkFkZCBBcmd1bWVudDwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcmd1bWVudHNcIj5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuYXJncy5tYXAoKGFyZyxpKSA9PiA8QXJndW1lbnRBbm5vdGF0aW9uIGlkPXtpfSBuYW1lPXthcmcuYXJnX25hbWV9Lz4pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGVzXCI+RXhhbXBsZXM8L2Rpdj5cbiAgICAgICAgICAgIDxFeGFtcGxlc0VkaXRvciAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPlRoZSBweXRob24gY29tbWFuZDo8L2Rpdj5cbiAgICAgICAgICAgIDxBY2VFZGl0b3JcbiAgICAgICAgICAgICAgbW9kZT1cInB5dGhvblwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgYXV0b1Njcm9sbEVkaXRvckludG9WaWV3PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIG1heExpbmVzPVwiMTVcIlxuICAgICAgICAgICAgICB0aGVtZT1cImdpdGh1YlwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZSh0aGlzLnByb3BzLmRpc3BhdGNoLCAnY29tbWFuZCcpfVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5jb21tYW5kfVxuICAgICAgICAgICAgICBuYW1lPVwiY29tbWFuZF9lZGl0b3JcIlxuICAgICAgICAgICAgICByZWY9e25vZGUgPT4ge2NvbW1hbmRfZWRpdG9yID0gbm9kZTt9fVxuXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPlRoZSBleHBsYW5hdGlvbjo8L2Rpdj5cbiAgICAgICAgICAgIDxBY2VFZGl0b3JcbiAgICAgICAgICAgICAgbW9kZT1cInB5dGhvblwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgIG1heExpbmVzPVwiMTVcIlxuICAgICAgICAgICAgICBhdXRvU2Nyb2xsRWRpdG9ySW50b1ZpZXc9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzAwcHhcIlxuICAgICAgICAgICAgICB0aGVtZT1cImdpdGh1YlwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZSh0aGlzLnByb3BzLmRpc3BhdGNoLCAnZXhwbGFuYXRpb24nKX1cbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZXhwbGFuYXRpb259XG4gICAgICAgICAgICAgIG5hbWU9XCJleHBsYW5hdGlvbl9lZGl0b3JcIlxuICAgICAgICAgICAgICByZWY9e25vZGUgPT4ge2V4cGxhbmF0aW9uX2VkaXRvciA9IG5vZGU7fX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tYW5kX2VkaXQgdGVzdHBhbmUgb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5Db2RlIHByZXZpZXc6PC9kaXY+XG4gICAgICAgICAgICA8QWNlRWRpdG9yXG4gICAgICAgICAgICAgIG1vZGU9XCJweXRob25cIlxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICBtYXhMaW5lcz1cIjE1XCJcbiAgICAgICAgICAgICAgYXV0b1Njcm9sbEVkaXRvckludG9WaWV3PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgdGhlbWU9XCJnaXRodWJcIlxuICAgICAgICAgICAgICBuYW1lPVwiY29kZV9wcmV2aWV3XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMucHJldmlld31cbiAgICAgICAgICAgICAgY29udGVudEVkaXRhYmxlID0ge2ZhbHNlfVxuICAgICAgICAgICAgICByZWY9e25vZGUgPT4ge2NvZGVfcHJldmlldyA9IG5vZGU7fX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJ1blRlc3QodGhpcy5wcm9wcy5hcmdzKX0+Q29tcGlsZSBDb2RlPC9idXR0b24+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5lcnJvciAhPT0gXCJcIiA/IDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JCb3hcIj57dGhpcy5wcm9wcy5lcnJvcn08L2Rpdj4gOiA8ZGl2PjwvZGl2Pn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1NwbGl0UGFuZT5cbiAgICAgICAgICA8L2Rpdj5cblxuXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgICB0aXRsZTogc3RhdGUuY29tbWFuZEVkaXRQYW5lLnRpdGxlLFxuICAgIG5hbWU6IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS5uYW1lLFxuICAgIGFyZ3M6IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS5hcmdzLFxuICAgIGNvbW1hbmQ6IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS5jb21tYW5kLFxuICAgIGV4cGxhbmF0aW9uOiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUuZXhwbGFuYXRpb24sXG4gICAgdGVzdElucHV0czogc3RhdGUuY29tbWFuZEVkaXRQYW5lLnRlc3RJbnB1dHMsXG4gICAgcHJldmlldzogc3RhdGUuY29tbWFuZEVkaXRQYW5lLnByZXZpZXcsXG4gICAgZXJyb3I6IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS5lcnJvclxufSk7XG5cbkNvbW1hbmRFZGl0ID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENvbW1hbmRFZGl0KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWFuZEVkaXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9Db21tYW5kRWRpdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 1317:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(25);\n\nvar _index = __webpack_require__(48);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar arg_name = {},\n    arg_type = {},\n    arg_string = {};\n\nvar onChangeInput = function onChangeInput(dispatch, id) {\n  console.log(\"change \" + id);\n  var new_values = {\n    arg_name: arg_name[id].value,\n    arg_type: arg_type[id].value,\n    arg_string: arg_string[id].value\n  };\n  dispatch((0, _index.updateCommandArg)(id, new_values));\n};\n\nvar onClickDelete = function onClickDelete(dispatch, id) {\n  console.log(\"delete \" + id);\n  dispatch((0, _index.deleteCommandArg)(id));\n};\n\nvar ArgumentAnnotation = function ArgumentAnnotation(_ref) {\n  var dispatch = _ref.dispatch,\n      id = _ref.id,\n      name = _ref.name;\n  return _react2.default.createElement(\n    'div',\n    { className: 'arg_annotation' },\n    _react2.default.createElement('input', { type: 'text', className: 'arg_name', placeholder: 'name of arg', onChange: function onChange() {\n        return onChangeInput(dispatch, id);\n      }, ref: function ref(node) {\n        arg_name[id] = node;\n      }, value: name }),\n    _react2.default.createElement(\n      'select',\n      { className: 'arg_type', onChange: function onChange() {\n          return onChangeInput(dispatch, id);\n        }, ref: function ref(node) {\n          arg_type[id] = node;\n        } },\n      _react2.default.createElement(\n        'option',\n        null,\n        'Int'\n      ),\n      _react2.default.createElement(\n        'option',\n        null,\n        'String'\n      ),\n      _react2.default.createElement(\n        'option',\n        null,\n        'Array'\n      )\n    ),\n    _react2.default.createElement('input', { type: 'text', className: 'arg_string', placeholder: 'Message to request this argument from user...', onChange: function onChange() {\n        return onChangeInput(dispatch, id);\n      }, ref: function ref(node) {\n        arg_string[id] = node;\n      } }),\n    _react2.default.createElement(\n      'button',\n      { onClick: function onClick() {\n          return onClickDelete(dispatch, id);\n        } },\n      'Delete'\n    )\n  );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {};\n};\n\nArgumentAnnotation = (0, _reactRedux.connect)(mapStateToProps)(ArgumentAnnotation);\n\nexports.default = ArgumentAnnotation;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9FeGFtcGxlc0VkaXRvci5qcz82NWIwIl0sIm5hbWVzIjpbImFyZ19uYW1lIiwiYXJnX3R5cGUiLCJhcmdfc3RyaW5nIiwib25DaGFuZ2VJbnB1dCIsImRpc3BhdGNoIiwiaWQiLCJjb25zb2xlIiwibG9nIiwibmV3X3ZhbHVlcyIsInZhbHVlIiwib25DbGlja0RlbGV0ZSIsIkFyZ3VtZW50QW5ub3RhdGlvbiIsIm5hbWUiLCJub2RlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFHQSxJQUFJQSxXQUFXLEVBQWY7QUFBQSxJQUFtQkMsV0FBVyxFQUE5QjtBQUFBLElBQWtDQyxhQUFhLEVBQS9DOztBQUVBLElBQU1DLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0MsUUFBRCxFQUFXQyxFQUFYLEVBQWtCO0FBQ3RDQyxVQUFRQyxHQUFSLENBQVksWUFBVUYsRUFBdEI7QUFDQSxNQUFNRyxhQUFhO0FBQ2pCUixjQUFVQSxTQUFTSyxFQUFULEVBQWFJLEtBRE47QUFFakJSLGNBQVVBLFNBQVNJLEVBQVQsRUFBYUksS0FGTjtBQUdqQlAsZ0JBQVlBLFdBQVdHLEVBQVgsRUFBZUk7QUFIVixHQUFuQjtBQUtBTCxXQUFTLDZCQUFpQkMsRUFBakIsRUFBcUJHLFVBQXJCLENBQVQ7QUFDRCxDQVJEOztBQVVBLElBQU1FLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ04sUUFBRCxFQUFXQyxFQUFYLEVBQWtCO0FBQ3RDQyxVQUFRQyxHQUFSLENBQVksWUFBVUYsRUFBdEI7QUFDQUQsV0FBUyw2QkFBaUJDLEVBQWpCLENBQVQ7QUFDRCxDQUhEOztBQUtBLElBQUlNLHFCQUFxQjtBQUFBLE1BQUdQLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWFDLEVBQWIsUUFBYUEsRUFBYjtBQUFBLE1BQWlCTyxJQUFqQixRQUFpQkEsSUFBakI7QUFBQSxTQUNyQjtBQUFBO0FBQUEsTUFBSyxXQUFVLGdCQUFmO0FBQ0ksNkNBQU8sTUFBSyxNQUFaLEVBQW1CLFdBQVUsVUFBN0IsRUFBd0MsYUFBWSxhQUFwRCxFQUFrRSxVQUFVO0FBQUEsZUFBTVQsY0FBY0MsUUFBZCxFQUF3QkMsRUFBeEIsQ0FBTjtBQUFBLE9BQTVFLEVBQStHLEtBQUssbUJBQVE7QUFBQ0wsaUJBQVNLLEVBQVQsSUFBZVEsSUFBZjtBQUFxQixPQUFsSixFQUFvSixPQUFPRCxJQUEzSixHQURKO0FBRUk7QUFBQTtBQUFBLFFBQVEsV0FBVSxVQUFsQixFQUE2QixVQUFVO0FBQUEsaUJBQU1ULGNBQWNDLFFBQWQsRUFBd0JDLEVBQXhCLENBQU47QUFBQSxTQUF2QyxFQUEwRSxLQUFLLG1CQUFRO0FBQUNKLG1CQUFTSSxFQUFULElBQWVRLElBQWY7QUFBcUIsU0FBN0c7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEYsS0FGSjtBQU9JLDZDQUFPLE1BQUssTUFBWixFQUFtQixXQUFVLFlBQTdCLEVBQTBDLGFBQVksK0NBQXRELEVBQXNHLFVBQVU7QUFBQSxlQUFNVixjQUFjQyxRQUFkLEVBQXdCQyxFQUF4QixDQUFOO0FBQUEsT0FBaEgsRUFBbUosS0FBSyxtQkFBUTtBQUFDSCxtQkFBV0csRUFBWCxJQUFpQlEsSUFBakI7QUFBdUIsT0FBeEwsR0FQSjtBQVFJO0FBQUE7QUFBQSxRQUFRLFNBQVM7QUFBQSxpQkFBTUgsY0FBY04sUUFBZCxFQUF3QkMsRUFBeEIsQ0FBTjtBQUFBLFNBQWpCO0FBQUE7QUFBQTtBQVJKLEdBRHFCO0FBQUEsQ0FBekI7O0FBWUEsSUFBTVMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWSxFQUFaO0FBQUEsQ0FBeEI7O0FBRUFKLHFCQUFxQix5QkFBUUcsZUFBUixFQUF5Qkgsa0JBQXpCLENBQXJCOztrQkFFZUEsa0IiLCJmaWxlIjoiMTMxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXBkYXRlQ29tbWFuZEFyZywgZGVsZXRlQ29tbWFuZEFyZyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXguanMnO1xuXG5cbmxldCBhcmdfbmFtZSA9IHt9LCBhcmdfdHlwZSA9IHt9LCBhcmdfc3RyaW5nID0ge307XG5cbmNvbnN0IG9uQ2hhbmdlSW5wdXQgPSAoZGlzcGF0Y2gsIGlkKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiY2hhbmdlIFwiK2lkKTtcbiAgY29uc3QgbmV3X3ZhbHVlcyA9IHtcbiAgICBhcmdfbmFtZTogYXJnX25hbWVbaWRdLnZhbHVlLFxuICAgIGFyZ190eXBlOiBhcmdfdHlwZVtpZF0udmFsdWUsXG4gICAgYXJnX3N0cmluZzogYXJnX3N0cmluZ1tpZF0udmFsdWVcbiAgfTtcbiAgZGlzcGF0Y2godXBkYXRlQ29tbWFuZEFyZyhpZCwgbmV3X3ZhbHVlcykpO1xufTtcblxuY29uc3Qgb25DbGlja0RlbGV0ZSA9IChkaXNwYXRjaCwgaWQpID0+IHtcbiAgY29uc29sZS5sb2coXCJkZWxldGUgXCIraWQpO1xuICBkaXNwYXRjaChkZWxldGVDb21tYW5kQXJnKGlkKSk7XG59O1xuXG5sZXQgQXJndW1lbnRBbm5vdGF0aW9uID0gKHsgZGlzcGF0Y2gsIGlkLCBuYW1lIH0pID0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcmdfYW5ub3RhdGlvblwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJhcmdfbmFtZVwiIHBsYWNlaG9sZGVyPVwibmFtZSBvZiBhcmdcIiBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2VJbnB1dChkaXNwYXRjaCwgaWQpfSByZWY9e25vZGUgPT4ge2FyZ19uYW1lW2lkXSA9IG5vZGU7fX0gdmFsdWU9e25hbWV9Lz5cbiAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJhcmdfdHlwZVwiIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZUlucHV0KGRpc3BhdGNoLCBpZCl9IHJlZj17bm9kZSA9PiB7YXJnX3R5cGVbaWRdID0gbm9kZTt9fT5cbiAgICAgICAgICA8b3B0aW9uPkludDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24+U3RyaW5nPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbj5BcnJheTwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiYXJnX3N0cmluZ1wiIHBsYWNlaG9sZGVyPVwiTWVzc2FnZSB0byByZXF1ZXN0IHRoaXMgYXJndW1lbnQgZnJvbSB1c2VyLi4uXCIgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlSW5wdXQoZGlzcGF0Y2gsIGlkKX0gcmVmPXtub2RlID0+IHthcmdfc3RyaW5nW2lkXSA9IG5vZGU7fX0vPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tEZWxldGUoZGlzcGF0Y2gsIGlkKX0+RGVsZXRlPC9idXR0b24+XG4gICAgPC9kaXY+O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7fSk7XG5cbkFyZ3VtZW50QW5ub3RhdGlvbiA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShBcmd1bWVudEFubm90YXRpb24pO1xuXG5leHBvcnQgZGVmYXVsdCBBcmd1bWVudEFubm90YXRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9FeGFtcGxlc0VkaXRvci5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})