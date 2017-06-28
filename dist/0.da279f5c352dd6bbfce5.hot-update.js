webpackHotUpdate(0,{

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(23);\n\nvar _brace = __webpack_require__(178);\n\nvar _brace2 = _interopRequireDefault(_brace);\n\nvar _reactAce = __webpack_require__(1102);\n\nvar _reactAce2 = _interopRequireDefault(_reactAce);\n\nvar _ArgumentAnnotation = __webpack_require__(432);\n\nvar _ArgumentAnnotation2 = _interopRequireDefault(_ArgumentAnnotation);\n\nvar _ExamplesEditor = __webpack_require__(438);\n\nvar _index = __webpack_require__(42);\n\nvar _python = __webpack_require__(70);\n\nvar _reactSplitPane = __webpack_require__(262);\n\nvar _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);\n\n__webpack_require__(518);\n\n__webpack_require__(519);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar command_name = void 0,\n    command_title = void 0,\n    test_inputs = void 0,\n    args_editor = void 0,\n    command_editor = void 0,\n    explanation_editor = void 0,\n    code_preview = void 0;\n\nvar runTest = function runTest(args_obj) {\n  (0, _python.testFunction)({\n    name: command_name.value,\n    title: command_title.value,\n    args: args_obj,\n    examples: (0, _ExamplesEditor.exampleValues)(),\n    command: command_editor.editor.getValue(),\n    explanation: explanation_editor.editor.getValue()\n  });\n};\n\nvar onChange = function onChange(dispatch, name) {\n  return function (value) {\n    console.log(\"setting\", name, value);\n    dispatch((0, _index.updateCodeEditor)(name, value));\n    runTest();\n  };\n};\n\nvar addArgument = function addArgument(dispatch) {\n  return function () {\n    dispatch((0, _index.addCommandArg)());\n  };\n};\n\nvar CommandEdit = function (_Component) {\n  _inherits(CommandEdit, _Component);\n\n  function CommandEdit() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, CommandEdit);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CommandEdit.__proto__ || Object.getPrototypeOf(CommandEdit)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      return _react2.default.createElement(\n        'div',\n        { className: 'command_edit' },\n        _react2.default.createElement(\n          'div',\n          { 'class': 'overflow' },\n          _react2.default.createElement(\n            'div',\n            { className: 'label' },\n            'Command name:'\n          ),\n          _react2.default.createElement('input', { type: 'text', placeholder: 'e.g., add_two_numbers', onChange: onChange(_this.props.dispatch, 'name'), ref: function ref(node) {\n              command_name = node;\n            } }),\n          _react2.default.createElement(\n            'div',\n            { className: 'label' },\n            'Command title:'\n          ),\n          _react2.default.createElement('input', { type: 'text', placeholder: 'e.g., add {x} and {y}', onChange: onChange(_this.props.dispatch, 'title'), ref: function ref(node) {\n              command_title = node;\n            } }),\n          _react2.default.createElement(\n            'div',\n            { className: 'label' },\n            'Arguments:'\n          ),\n          _react2.default.createElement(\n            'button',\n            { onClick: addArgument(_this.props.dispatch) },\n            'Add Argument'\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'arguments' },\n            _this.props.args.map(function (arg, i) {\n              return _react2.default.createElement(_ArgumentAnnotation2.default, { id: i, name: arg.arg_name });\n            })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'label' },\n            'Examples'\n          ),\n          _react2.default.createElement(_ExamplesEditor.ExamplesEditor, null),\n          _react2.default.createElement(\n            'div',\n            { className: 'label' },\n            'The python command:'\n          ),\n          _react2.default.createElement(_reactAce2.default, {\n            mode: 'python',\n            width: '100%',\n            height: '300px',\n            autoScrollEditorIntoView: 'true',\n            maxLines: 15,\n            theme: 'github',\n            onChange: onChange(_this.props.dispatch, 'command'),\n            value: _this.props.command,\n            name: 'command_editor',\n            ref: function ref(node) {\n              command_editor = node;\n            }\n\n          }),\n          _react2.default.createElement(\n            'div',\n            { className: 'label' },\n            'The explanation:'\n          ),\n          _react2.default.createElement(_reactAce2.default, {\n            mode: 'python',\n            width: '100%',\n            maxLines: 15,\n            autoScrollEditorIntoView: 'true',\n            height: '300px',\n            theme: 'github',\n            onChange: onChange(_this.props.dispatch, 'explanation'),\n            value: _this.props.explanation,\n            name: 'explanation_editor',\n            ref: function ref(node) {\n              explanation_editor = node;\n            }\n          })\n        ),\n        _react2.default.createElement(\n          'button',\n          { onClick: function onClick() {\n              return runTest(_this.props.args);\n            } },\n          'Compile Code'\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'command_edit testpane overflow' },\n          _react2.default.createElement(\n            'div',\n            { className: 'label' },\n            'Code preview:'\n          ),\n          _react2.default.createElement(_reactAce2.default, {\n            mode: 'python',\n            width: '100%',\n            maxLines: 15,\n            autoScrollEditorIntoView: 'true',\n            height: '300px',\n            theme: 'github',\n            name: 'code_preview',\n            value: _this.props.preview,\n            contentEditable: false,\n            ref: function ref(node) {\n              code_preview = node;\n            }\n          }),\n          _this.props.error !== \"\" ? _react2.default.createElement(\n            'div',\n            { className: 'errorBox' },\n            _this.props.error\n          ) : _react2.default.createElement('div', null)\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(CommandEdit, [{\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate() {\n      console.log(\"setting values\", this.props.command);\n      code_preview.editor.setOptions({\n        readOnly: true,\n        highlightActiveLine: false,\n        highlightGutterLine: false\n      });\n    }\n  }]);\n\n  return CommandEdit;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    title: state.commandEditPane.title,\n    name: state.commandEditPane.name,\n    args: state.commandEditPane.args,\n    command: state.commandEditPane.command,\n    explanation: state.commandEditPane.explanation,\n    testInputs: state.commandEditPane.testInputs,\n    preview: state.commandEditPane.preview,\n    error: state.commandEditPane.error\n  };\n};\n\nCommandEdit = (0, _reactRedux.connect)(mapStateToProps)(CommandEdit);\n\nexports.default = CommandEdit;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db21tYW5kRWRpdC5qcz9jMTBjIl0sIm5hbWVzIjpbImNvbW1hbmRfbmFtZSIsImNvbW1hbmRfdGl0bGUiLCJ0ZXN0X2lucHV0cyIsImFyZ3NfZWRpdG9yIiwiY29tbWFuZF9lZGl0b3IiLCJleHBsYW5hdGlvbl9lZGl0b3IiLCJjb2RlX3ByZXZpZXciLCJydW5UZXN0IiwiYXJnc19vYmoiLCJuYW1lIiwidmFsdWUiLCJ0aXRsZSIsImFyZ3MiLCJleGFtcGxlcyIsImNvbW1hbmQiLCJlZGl0b3IiLCJnZXRWYWx1ZSIsImV4cGxhbmF0aW9uIiwib25DaGFuZ2UiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJhZGRBcmd1bWVudCIsIkNvbW1hbmRFZGl0IiwicmVuZGVyIiwicHJvcHMiLCJub2RlIiwibWFwIiwiYXJnIiwiaSIsImFyZ19uYW1lIiwicHJldmlldyIsImVycm9yIiwic2V0T3B0aW9ucyIsInJlYWRPbmx5IiwiaGlnaGxpZ2h0QWN0aXZlTGluZSIsImhpZ2hsaWdodEd1dHRlckxpbmUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvbW1hbmRFZGl0UGFuZSIsInRlc3RJbnB1dHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7O0FBR0EsSUFBSUEscUJBQUo7QUFBQSxJQUFrQkMsc0JBQWxCO0FBQUEsSUFBaUNDLG9CQUFqQztBQUFBLElBQThDQyxvQkFBOUM7QUFBQSxJQUEyREMsdUJBQTNEO0FBQUEsSUFBMkVDLDJCQUEzRTtBQUFBLElBQStGQyxxQkFBL0Y7O0FBR0EsSUFBTUMsVUFBVSxTQUFWQSxPQUFVLENBQUNDLFFBQUQsRUFBYztBQUM1Qiw0QkFBYTtBQUNUQyxVQUFNVCxhQUFhVSxLQURWO0FBRVRDLFdBQU1WLGNBQWNTLEtBRlg7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QyxlQUFOLENBQXNCNUIsS0FERztBQUVoQ0YsVUFBTTZCLE1BQU1DLGVBQU4sQ0FBc0I5QixJQUZJO0FBR2hDRyxVQUFNMEIsTUFBTUMsZUFBTixDQUFzQjNCLElBSEk7QUFJaENFLGFBQVN3QixNQUFNQyxlQUFOLENBQXNCekIsT0FKQztBQUtoQ0csaUJBQWFxQixNQUFNQyxlQUFOLENBQXNCdEIsV0FMSDtBQU1oQ3VCLGdCQUFZRixNQUFNQyxlQUFOLENBQXNCQyxVQU5GO0FBT2hDVCxhQUFTTyxNQUFNQyxlQUFOLENBQXNCUixPQVBDO0FBUWhDQyxXQUFPTSxNQUFNQyxlQUFOLENBQXNCUDtBQVJHLEdBQVo7QUFBQSxDQUF4Qjs7QUFXQVQsY0FBYyx5QkFBUWMsZUFBUixFQUF5QmQsV0FBekIsQ0FBZDs7a0JBRWVBLFciLCJmaWxlIjoiNDM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBicmFjZSBmcm9tICdicmFjZSc7XG5pbXBvcnQgQWNlRWRpdG9yIGZyb20gJ3JlYWN0LWFjZSc7XG5pbXBvcnQgQXJndW1lbnRBbm5vdGF0aW9uIGZyb20gJy4vQXJndW1lbnRBbm5vdGF0aW9uJztcbmltcG9ydCB7IEV4YW1wbGVzRWRpdG9yLCBleGFtcGxlVmFsdWVzIH0gZnJvbSAnLi9FeGFtcGxlc0VkaXRvcic7XG5pbXBvcnQgeyB1cGRhdGVDb2RlRWRpdG9yLCBhZGRDb21tYW5kQXJnIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleC5qcyc7XG5pbXBvcnQgeyBkb1NlYXJjaCwgdXBkYXRlSGludCwgdXBkYXRlRG9jcywgdGVzdEZ1bmN0aW9uIH0gZnJvbSAnLi4vYXBpX2NhbGxzL3B5dGhvbi5qcyc7XG5pbXBvcnQgU3BsaXRQYW5lIGZyb20gJ3JlYWN0LXNwbGl0LXBhbmUnO1xuXG5pbXBvcnQgJ2JyYWNlL21vZGUvcHl0aG9uJztcbmltcG9ydCAnYnJhY2UvdGhlbWUvZ2l0aHViJztcblxuXG5sZXQgY29tbWFuZF9uYW1lLCBjb21tYW5kX3RpdGxlLCB0ZXN0X2lucHV0cywgYXJnc19lZGl0b3IsIGNvbW1hbmRfZWRpdG9yLCBleHBsYW5hdGlvbl9lZGl0b3IsIGNvZGVfcHJldmlldztcblxuXG5jb25zdCBydW5UZXN0ID0gKGFyZ3Nfb2JqKSA9PiB7XG4gIHRlc3RGdW5jdGlvbih7XG4gICAgICBuYW1lOiBjb21tYW5kX25hbWUudmFsdWUsXG4gICAgICB0aXRsZTpjb21tYW5kX3RpdGxlLnZhbHVlLFxuICAgICAgYXJnczogYXJnc19vYmosXG4gICAgICBleGFtcGxlczogZXhhbXBsZVZhbHVlcygpLFxuICAgICAgY29tbWFuZDpjb21tYW5kX2VkaXRvci5lZGl0b3IuZ2V0VmFsdWUoKSxcbiAgICAgIGV4cGxhbmF0aW9uOmV4cGxhbmF0aW9uX2VkaXRvci5lZGl0b3IuZ2V0VmFsdWUoKVxuICB9KTtcbn07XG5cbmNvbnN0IG9uQ2hhbmdlID0gKGRpc3BhdGNoLCBuYW1lKSA9PlxuICAodmFsdWUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInNldHRpbmdcIixuYW1lLHZhbHVlKTtcbiAgICBkaXNwYXRjaCh1cGRhdGVDb2RlRWRpdG9yKG5hbWUsIHZhbHVlKSk7XG4gICAgcnVuVGVzdCgpO1xuICB9O1xuXG5jb25zdCBhZGRBcmd1bWVudCA9IChkaXNwYXRjaCkgPT5cbiAgKCkgPT4ge1xuICAgIGRpc3BhdGNoKGFkZENvbW1hbmRBcmcoKSk7XG4gIH07XG5cbmNsYXNzIENvbW1hbmRFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZXR0aW5nIHZhbHVlc1wiLCB0aGlzLnByb3BzLmNvbW1hbmQpO1xuICAgICAgICBjb2RlX3ByZXZpZXcuZWRpdG9yLnNldE9wdGlvbnMoe1xuICAgICAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgICAgICBoaWdobGlnaHRBY3RpdmVMaW5lOiBmYWxzZSxcbiAgICAgICAgICAgIGhpZ2hsaWdodEd1dHRlckxpbmU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlciA9ICgpID0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tYW5kX2VkaXRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdmVyZmxvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPkNvbW1hbmQgbmFtZTo8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiZS5nLiwgYWRkX3R3b19udW1iZXJzXCIgb25DaGFuZ2U9e29uQ2hhbmdlKHRoaXMucHJvcHMuZGlzcGF0Y2gsICduYW1lJyl9IHJlZj17bm9kZSA9PiB7Y29tbWFuZF9uYW1lID0gbm9kZTt9fSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPkNvbW1hbmQgdGl0bGU6PC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImUuZy4sIGFkZCB7eH0gYW5kIHt5fVwiIG9uQ2hhbmdlPXtvbkNoYW5nZSh0aGlzLnByb3BzLmRpc3BhdGNoLCAndGl0bGUnKX0gcmVmPXtub2RlID0+IHtjb21tYW5kX3RpdGxlID0gbm9kZTt9fSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPkFyZ3VtZW50czo8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17YWRkQXJndW1lbnQodGhpcy5wcm9wcy5kaXNwYXRjaCl9PkFkZCBBcmd1bWVudDwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcmd1bWVudHNcIj5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuYXJncy5tYXAoKGFyZyxpKSA9PiA8QXJndW1lbnRBbm5vdGF0aW9uIGlkPXtpfSBuYW1lPXthcmcuYXJnX25hbWV9Lz4pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+RXhhbXBsZXM8L2Rpdj5cbiAgICAgICAgICAgIDxFeGFtcGxlc0VkaXRvciAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPlRoZSBweXRob24gY29tbWFuZDo8L2Rpdj5cbiAgICAgICAgICAgIDxBY2VFZGl0b3JcbiAgICAgICAgICAgICAgbW9kZT1cInB5dGhvblwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgYXV0b1Njcm9sbEVkaXRvckludG9WaWV3PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIG1heExpbmVzPXsxNX1cbiAgICAgICAgICAgICAgdGhlbWU9XCJnaXRodWJcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2UodGhpcy5wcm9wcy5kaXNwYXRjaCwgJ2NvbW1hbmQnKX1cbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuY29tbWFuZH1cbiAgICAgICAgICAgICAgbmFtZT1cImNvbW1hbmRfZWRpdG9yXCJcbiAgICAgICAgICAgICAgcmVmPXtub2RlID0+IHtjb21tYW5kX2VkaXRvciA9IG5vZGU7fX1cblxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5UaGUgZXhwbGFuYXRpb246PC9kaXY+XG4gICAgICAgICAgICA8QWNlRWRpdG9yXG4gICAgICAgICAgICAgIG1vZGU9XCJweXRob25cIlxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICBtYXhMaW5lcz17MTV9XG4gICAgICAgICAgICAgIGF1dG9TY3JvbGxFZGl0b3JJbnRvVmlldz1cInRydWVcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzMDBweFwiXG4gICAgICAgICAgICAgIHRoZW1lPVwiZ2l0aHViXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlKHRoaXMucHJvcHMuZGlzcGF0Y2gsICdleHBsYW5hdGlvbicpfVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5leHBsYW5hdGlvbn1cbiAgICAgICAgICAgICAgbmFtZT1cImV4cGxhbmF0aW9uX2VkaXRvclwiXG4gICAgICAgICAgICAgIHJlZj17bm9kZSA9PiB7ZXhwbGFuYXRpb25fZWRpdG9yID0gbm9kZTt9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJ1blRlc3QodGhpcy5wcm9wcy5hcmdzKX0+Q29tcGlsZSBDb2RlPC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tYW5kX2VkaXQgdGVzdHBhbmUgb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5Db2RlIHByZXZpZXc6PC9kaXY+XG4gICAgICAgICAgICA8QWNlRWRpdG9yXG4gICAgICAgICAgICAgIG1vZGU9XCJweXRob25cIlxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICBtYXhMaW5lcz17MTV9XG4gICAgICAgICAgICAgIGF1dG9TY3JvbGxFZGl0b3JJbnRvVmlldz1cInRydWVcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzMDBweFwiXG4gICAgICAgICAgICAgIHRoZW1lPVwiZ2l0aHViXCJcbiAgICAgICAgICAgICAgbmFtZT1cImNvZGVfcHJldmlld1wiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnByZXZpZXd9XG4gICAgICAgICAgICAgIGNvbnRlbnRFZGl0YWJsZSA9IHtmYWxzZX1cbiAgICAgICAgICAgICAgcmVmPXtub2RlID0+IHtjb2RlX3ByZXZpZXcgPSBub2RlO319XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuZXJyb3IgIT09IFwiXCIgPyA8ZGl2IGNsYXNzTmFtZT1cImVycm9yQm94XCI+e3RoaXMucHJvcHMuZXJyb3J9PC9kaXY+IDogPGRpdj48L2Rpdj59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cblxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gICAgdGl0bGU6IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS50aXRsZSxcbiAgICBuYW1lOiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUubmFtZSxcbiAgICBhcmdzOiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUuYXJncyxcbiAgICBjb21tYW5kOiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUuY29tbWFuZCxcbiAgICBleHBsYW5hdGlvbjogc3RhdGUuY29tbWFuZEVkaXRQYW5lLmV4cGxhbmF0aW9uLFxuICAgIHRlc3RJbnB1dHM6IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS50ZXN0SW5wdXRzLFxuICAgIHByZXZpZXc6IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS5wcmV2aWV3LFxuICAgIGVycm9yOiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUuZXJyb3Jcbn0pO1xuXG5Db21tYW5kRWRpdCA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDb21tYW5kRWRpdCk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1hbmRFZGl0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvQ29tbWFuZEVkaXQuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})