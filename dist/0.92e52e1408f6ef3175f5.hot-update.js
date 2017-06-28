webpackHotUpdate(0,{

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(23);\n\nvar _brace = __webpack_require__(178);\n\nvar _brace2 = _interopRequireDefault(_brace);\n\nvar _reactAce = __webpack_require__(1102);\n\nvar _reactAce2 = _interopRequireDefault(_reactAce);\n\nvar _ArgumentAnnotation = __webpack_require__(432);\n\nvar _ArgumentAnnotation2 = _interopRequireDefault(_ArgumentAnnotation);\n\nvar _ExamplesEditor = __webpack_require__(438);\n\nvar _index = __webpack_require__(42);\n\nvar _python = __webpack_require__(70);\n\nvar _reactSplitPane = __webpack_require__(262);\n\nvar _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);\n\n__webpack_require__(518);\n\n__webpack_require__(519);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar command_name = void 0,\n    command_title = void 0,\n    test_inputs = void 0,\n    args_editor = void 0,\n    command_editor = void 0,\n    explanation_editor = void 0,\n    code_preview = void 0;\n\nvar argValues = function argValues() {\n  return _.map(examples_ref, function (value, key) {\n    return value.value;\n  });\n};\n\nvar runTest = function runTest(args_obj) {\n  console.log(command_name);\n  console.log(\"running\", command_name.value);\n  console.log(\"running\", command_title.value);\n  (0, _python.testFunction)({\n    name: command_name.value,\n    title: command_title.value,\n    args: args_obj,\n    examples: (0, _ExamplesEditor.exampleValues)(),\n    command: command_editor.editor.getValue(),\n    explanation: explanation_editor.editor.getValue()\n  });\n};\n\nvar onChangeInput = function onChangeInput(dispatch, name, input) {\n  return function (value) {\n    console.log(input.value);\n    console.log(\"setting\", name, input.value);\n    dispatch((0, _index.updateCodeEditor)(name, input.value));\n    runTest();\n  };\n};\n\nvar onChange = function onChange(dispatch, name) {\n  return function (value) {\n    console.log(value);\n    console.log(\"setting\", name, value);\n    dispatch((0, _index.updateCodeEditor)(name, value));\n  };\n};\n\nvar addArgument = function addArgument(dispatch) {\n  return function () {\n    dispatch((0, _index.addCommandArg)());\n  };\n};\n\nvar CommandEdit = function (_Component) {\n  _inherits(CommandEdit, _Component);\n\n  function CommandEdit() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, CommandEdit);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CommandEdit.__proto__ || Object.getPrototypeOf(CommandEdit)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      return _react2.default.createElement(\n        'div',\n        { className: 'command_edit' },\n        _react2.default.createElement(\n          'div',\n          { 'class': 'overflow' },\n          _react2.default.createElement(\n            'div',\n            { className: 'label' },\n            'Command name:'\n          ),\n          _react2.default.createElement('input', { type: 'text', placeholder: 'e.g., add_two_numbers', onChange: onChangeInput(_this.props.dispatch, 'name', command_name), ref: function ref(node) {\n              command_name = node;\n            }, value: _this.props.name }),\n          _react2.default.createElement(\n            'div',\n            { className: 'label' },\n            'Command title:'\n          ),\n          _react2.default.createElement('input', { type: 'text', placeholder: 'e.g., add {x} and {y}', onChange: onChange(_this.props.dispatch, 'title'), ref: function ref(node) {\n              command_title = node;\n            }, value: _this.props.title }),\n          _react2.default.createElement(\n            'div',\n            { className: 'label' },\n            'Arguments:'\n          ),\n          _react2.default.createElement(\n            'button',\n            { onClick: addArgument(_this.props.dispatch) },\n            'Add Argument'\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'arguments' },\n            _this.props.args.map(function (arg, i) {\n              return _react2.default.createElement(_ArgumentAnnotation2.default, { id: i, name: arg.arg_name, string: arg.arg_string, arg_t: arg.arg_type });\n            })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'label' },\n            'Examples'\n          ),\n          _react2.default.createElement(_ExamplesEditor.ExamplesEditor, null),\n          _react2.default.createElement(\n            'div',\n            { className: 'label' },\n            'The python command:'\n          ),\n          _react2.default.createElement(_reactAce2.default, {\n            mode: 'python',\n            width: '100%',\n            height: '300px',\n            autoScrollEditorIntoView: 'true',\n            maxLines: 15,\n            theme: 'github',\n            onChange: onChange(_this.props.dispatch, 'command'),\n            value: _this.props.command,\n            name: 'command_editor',\n            ref: function ref(node) {\n              command_editor = node;\n            }\n\n          }),\n          _react2.default.createElement(\n            'div',\n            { className: 'label' },\n            'The explanation:'\n          ),\n          _react2.default.createElement(_reactAce2.default, {\n            mode: 'python',\n            width: '100%',\n            maxLines: 15,\n            autoScrollEditorIntoView: 'true',\n            height: '300px',\n            theme: 'github',\n            onChange: onChange(_this.props.dispatch, 'explanation'),\n            value: _this.props.explanation,\n            name: 'explanation_editor',\n            ref: function ref(node) {\n              explanation_editor = node;\n            }\n          })\n        ),\n        _react2.default.createElement(\n          'button',\n          { onClick: function onClick() {\n              return runTest(_this.props.args);\n            } },\n          'Compile Code'\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'command_edit testpane overflow' },\n          _react2.default.createElement(\n            'div',\n            { className: 'label' },\n            'Code preview:'\n          ),\n          _react2.default.createElement(_reactAce2.default, {\n            mode: 'python',\n            width: '100%',\n            maxLines: 15,\n            autoScrollEditorIntoView: 'true',\n            height: '300px',\n            theme: 'github',\n            name: 'code_preview',\n            value: _this.props.preview,\n            contentEditable: false,\n            ref: function ref(node) {\n              code_preview = node;\n            }\n          }),\n          _this.props.error !== \"\" ? _react2.default.createElement(\n            'div',\n            { className: 'errorBox' },\n            _this.props.error\n          ) : _react2.default.createElement('div', null)\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(CommandEdit, [{\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate() {\n      console.log(\"setting values\", this.props.command);\n      // command_editor.editor.setValue(this.props.command);\n      code_preview.editor.setOptions({\n        readOnly: true,\n        highlightActiveLine: false,\n        highlightGutterLine: false\n      });\n    }\n  }]);\n\n  return CommandEdit;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    title: state.commandEditPane.title,\n    name: state.commandEditPane.name,\n    args: state.commandEditPane.args,\n    command: state.commandEditPane.command,\n    explanation: state.commandEditPane.explanation,\n    testInputs: state.commandEditPane.testInputs,\n    preview: state.commandEditPane.preview,\n    error: state.commandEditPane.error\n  };\n};\n\nCommandEdit = (0, _reactRedux.connect)(mapStateToProps)(CommandEdit);\n\nexports.default = CommandEdit;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db21tYW5kRWRpdC5qcz9jMTBjIl0sIm5hbWVzIjpbImNvbW1hbmRfbmFtZSIsImNvbW1hbmRfdGl0bGUiLCJ0ZXN0X2lucHV0cyIsImFyZ3NfZWRpdG9yIiwiY29tbWFuZF9lZGl0b3IiLCJleHBsYW5hdGlvbl9lZGl0b3IiLCJjb2RlX3ByZXZpZXciLCJhcmdWYWx1ZXMiLCJfIiwibWFwIiwiZXhhbXBsZXNfcmVmIiwidmFsdWUiLCJrZXkiLCJydW5UZXN0IiwiYXJnc19vYmoiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsInRpdGxlIiwiYXJncyIsImV4YW1wbGVzIiwiY29tbWFuZCIsImVkaXRvciIsImdldFZhbHVlIiwiZXhwbGFuYXRpb24iLCJvbkNoYW5nZUlucHV0IiwiZGlzcGF0Y2giLCJpbnB1dCIsIm9uQ2hhbmdlIiwiYWRkQXJndW1lbnQiLCJDb21tYW5kRWRpdCIsInJlbmRlciIsInByb3BzIiwibm9kZSIsImFyZyIsImkiLCJhcmdfbmFtZSIsImFyZ19zdHJpbmciLCJhcmdfdHlwZSIsInByZXZpZXciLCJlcnJvciIsInNldE9wdGlvbnMiLCJyZWFkT25seSIsImhpZ2hsaWdodEFjdGl2ZUxpbmUiLCJoaWdobGlnaHRHdXR0ZXJMaW5lIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb21tYW5kRWRpdFBhbmUiLCJ0ZXN0SW5wdXRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7OztBQUdBLElBQUlBLHFCQUFKO0FBQUEsSUFBa0JDLHNCQUFsQjtBQUFBLElBQWlDQyxvQkFBakM7QUFBQSxJQUE4Q0Msb0JBQTlDO0FBQUEsSUFBMkRDLHVCQUEzRDtBQUFBLElBQTJFQywyQkFBM0U7QUFBQSxJQUErRkMscUJBQS9GOztBQUVBLElBQU1DLFlBQVks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LGVBQU4sQ0FBc0IxQixPQUpDO0FBS2hDRyxpQkFBYXNCLE1BQU1DLGVBQU4sQ0FBc0J2QixXQUxIO0FBTWhDd0IsZ0JBQVlGLE1BQU1DLGVBQU4sQ0FBc0JDLFVBTkY7QUFPaENULGFBQVNPLE1BQU1DLGVBQU4sQ0FBc0JSLE9BUEM7QUFRaENDLFdBQU9NLE1BQU1DLGVBQU4sQ0FBc0JQO0FBUkcsR0FBWjtBQUFBLENBQXhCOztBQVdBVixjQUFjLHlCQUFRZSxlQUFSLEVBQXlCZixXQUF6QixDQUFkOztrQkFFZUEsVyIsImZpbGUiOiI0MzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGJyYWNlIGZyb20gJ2JyYWNlJztcbmltcG9ydCBBY2VFZGl0b3IgZnJvbSAncmVhY3QtYWNlJztcbmltcG9ydCBBcmd1bWVudEFubm90YXRpb24gZnJvbSAnLi9Bcmd1bWVudEFubm90YXRpb24nO1xuaW1wb3J0IHsgRXhhbXBsZXNFZGl0b3IsIGV4YW1wbGVWYWx1ZXMgfSBmcm9tICcuL0V4YW1wbGVzRWRpdG9yJztcbmltcG9ydCB7IHVwZGF0ZUNvZGVFZGl0b3IsIGFkZENvbW1hbmRBcmcgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4LmpzJztcbmltcG9ydCB7IGRvU2VhcmNoLCB1cGRhdGVIaW50LCB1cGRhdGVEb2NzLCB0ZXN0RnVuY3Rpb24gfSBmcm9tICcuLi9hcGlfY2FsbHMvcHl0aG9uLmpzJztcbmltcG9ydCBTcGxpdFBhbmUgZnJvbSAncmVhY3Qtc3BsaXQtcGFuZSc7XG5cbmltcG9ydCAnYnJhY2UvbW9kZS9weXRob24nO1xuaW1wb3J0ICdicmFjZS90aGVtZS9naXRodWInO1xuXG5cbmxldCBjb21tYW5kX25hbWUsIGNvbW1hbmRfdGl0bGUsIHRlc3RfaW5wdXRzLCBhcmdzX2VkaXRvciwgY29tbWFuZF9lZGl0b3IsIGV4cGxhbmF0aW9uX2VkaXRvciwgY29kZV9wcmV2aWV3O1xuXG5jb25zdCBhcmdWYWx1ZXMgPSAoKSA9PiBfLm1hcChleGFtcGxlc19yZWYsICh2YWx1ZSwga2V5KSA9PiB2YWx1ZS52YWx1ZSk7XG5cbmNvbnN0IHJ1blRlc3QgPSAoYXJnc19vYmopID0+IHtcbiAgY29uc29sZS5sb2coY29tbWFuZF9uYW1lKTtcbiAgY29uc29sZS5sb2coXCJydW5uaW5nXCIsIGNvbW1hbmRfbmFtZS52YWx1ZSlcbiAgY29uc29sZS5sb2coXCJydW5uaW5nXCIsIGNvbW1hbmRfdGl0bGUudmFsdWUpXG4gIHRlc3RGdW5jdGlvbih7XG4gICAgICBuYW1lOiBjb21tYW5kX25hbWUudmFsdWUsXG4gICAgICB0aXRsZTpjb21tYW5kX3RpdGxlLnZhbHVlLFxuICAgICAgYXJnczogYXJnc19vYmosXG4gICAgICBleGFtcGxlczogZXhhbXBsZVZhbHVlcygpLFxuICAgICAgY29tbWFuZDpjb21tYW5kX2VkaXRvci5lZGl0b3IuZ2V0VmFsdWUoKSxcbiAgICAgIGV4cGxhbmF0aW9uOmV4cGxhbmF0aW9uX2VkaXRvci5lZGl0b3IuZ2V0VmFsdWUoKVxuICB9KTtcbn07XG5cblxuY29uc3Qgb25DaGFuZ2VJbnB1dCA9IChkaXNwYXRjaCwgbmFtZSwgaW5wdXQpID0+XG4gICh2YWx1ZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGlucHV0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhcInNldHRpbmdcIixuYW1lLGlucHV0LnZhbHVlKTtcbiAgICBkaXNwYXRjaCh1cGRhdGVDb2RlRWRpdG9yKG5hbWUsIGlucHV0LnZhbHVlKSk7XG4gICAgcnVuVGVzdCgpO1xuICB9O1xuXG5cbmNvbnN0IG9uQ2hhbmdlID0gKGRpc3BhdGNoLCBuYW1lKSA9PlxuICAodmFsdWUpID0+IHtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgY29uc29sZS5sb2coXCJzZXR0aW5nXCIsbmFtZSx2YWx1ZSk7XG4gICAgZGlzcGF0Y2godXBkYXRlQ29kZUVkaXRvcihuYW1lLCB2YWx1ZSkpO1xuICB9O1xuXG5jb25zdCBhZGRBcmd1bWVudCA9IChkaXNwYXRjaCkgPT5cbiAgKCkgPT4ge1xuICAgIGRpc3BhdGNoKGFkZENvbW1hbmRBcmcoKSk7XG4gIH07XG5cbmNsYXNzIENvbW1hbmRFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZXR0aW5nIHZhbHVlc1wiLCB0aGlzLnByb3BzLmNvbW1hbmQpO1xuICAgICAgICAvLyBjb21tYW5kX2VkaXRvci5lZGl0b3Iuc2V0VmFsdWUodGhpcy5wcm9wcy5jb21tYW5kKTtcbiAgICAgICAgY29kZV9wcmV2aWV3LmVkaXRvci5zZXRPcHRpb25zKHtcbiAgICAgICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICAgICAgaGlnaGxpZ2h0QWN0aXZlTGluZTogZmFsc2UsXG4gICAgICAgICAgICBoaWdobGlnaHRHdXR0ZXJMaW5lOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIgPSAoKSA9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWFuZF9lZGl0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmZsb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5Db21tYW5kIG5hbWU6PC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImUuZy4sIGFkZF90d29fbnVtYmVyc1wiIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0KHRoaXMucHJvcHMuZGlzcGF0Y2gsICduYW1lJywgY29tbWFuZF9uYW1lKX0gcmVmPXtub2RlID0+IHtjb21tYW5kX25hbWUgPSBub2RlO319IHZhbHVlPXt0aGlzLnByb3BzLm5hbWV9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+Q29tbWFuZCB0aXRsZTo8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiZS5nLiwgYWRkIHt4fSBhbmQge3l9XCIgb25DaGFuZ2U9e29uQ2hhbmdlKHRoaXMucHJvcHMuZGlzcGF0Y2gsICd0aXRsZScpfSByZWY9e25vZGUgPT4ge2NvbW1hbmRfdGl0bGUgPSBub2RlO319IHZhbHVlPXt0aGlzLnByb3BzLnRpdGxlfS8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+QXJndW1lbnRzOjwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRBcmd1bWVudCh0aGlzLnByb3BzLmRpc3BhdGNoKX0+QWRkIEFyZ3VtZW50PC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFyZ3VtZW50c1wiPlxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hcmdzLm1hcCgoYXJnLGkpID0+IDxBcmd1bWVudEFubm90YXRpb24gaWQ9e2l9IG5hbWU9e2FyZy5hcmdfbmFtZX0gc3RyaW5nPXthcmcuYXJnX3N0cmluZ30gYXJnX3Q9e2FyZy5hcmdfdHlwZX0vPil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj5FeGFtcGxlczwvZGl2PlxuICAgICAgICAgICAgPEV4YW1wbGVzRWRpdG9yIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+VGhlIHB5dGhvbiBjb21tYW5kOjwvZGl2PlxuICAgICAgICAgICAgPEFjZUVkaXRvclxuICAgICAgICAgICAgICBtb2RlPVwicHl0aG9uXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzAwcHhcIlxuICAgICAgICAgICAgICBhdXRvU2Nyb2xsRWRpdG9ySW50b1ZpZXc9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgbWF4TGluZXM9ezE1fVxuICAgICAgICAgICAgICB0aGVtZT1cImdpdGh1YlwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZSh0aGlzLnByb3BzLmRpc3BhdGNoLCAnY29tbWFuZCcpfVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5jb21tYW5kfVxuICAgICAgICAgICAgICBuYW1lPVwiY29tbWFuZF9lZGl0b3JcIlxuICAgICAgICAgICAgICByZWY9e25vZGUgPT4ge2NvbW1hbmRfZWRpdG9yID0gbm9kZTt9fVxuXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPlRoZSBleHBsYW5hdGlvbjo8L2Rpdj5cbiAgICAgICAgICAgIDxBY2VFZGl0b3JcbiAgICAgICAgICAgICAgbW9kZT1cInB5dGhvblwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgIG1heExpbmVzPXsxNX1cbiAgICAgICAgICAgICAgYXV0b1Njcm9sbEVkaXRvckludG9WaWV3PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgdGhlbWU9XCJnaXRodWJcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2UodGhpcy5wcm9wcy5kaXNwYXRjaCwgJ2V4cGxhbmF0aW9uJyl9XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmV4cGxhbmF0aW9ufVxuICAgICAgICAgICAgICBuYW1lPVwiZXhwbGFuYXRpb25fZWRpdG9yXCJcbiAgICAgICAgICAgICAgcmVmPXtub2RlID0+IHtleHBsYW5hdGlvbl9lZGl0b3IgPSBub2RlO319XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcnVuVGVzdCh0aGlzLnByb3BzLmFyZ3MpfT5Db21waWxlIENvZGU8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1hbmRfZWRpdCB0ZXN0cGFuZSBvdmVyZmxvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiPkNvZGUgcHJldmlldzo8L2Rpdj5cbiAgICAgICAgICAgIDxBY2VFZGl0b3JcbiAgICAgICAgICAgICAgbW9kZT1cInB5dGhvblwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgIG1heExpbmVzPXsxNX1cbiAgICAgICAgICAgICAgYXV0b1Njcm9sbEVkaXRvckludG9WaWV3PVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgdGhlbWU9XCJnaXRodWJcIlxuICAgICAgICAgICAgICBuYW1lPVwiY29kZV9wcmV2aWV3XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMucHJldmlld31cbiAgICAgICAgICAgICAgY29udGVudEVkaXRhYmxlID0ge2ZhbHNlfVxuICAgICAgICAgICAgICByZWY9e25vZGUgPT4ge2NvZGVfcHJldmlldyA9IG5vZGU7fX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5lcnJvciAhPT0gXCJcIiA/IDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JCb3hcIj57dGhpcy5wcm9wcy5lcnJvcn08L2Rpdj4gOiA8ZGl2PjwvZGl2Pn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgICB0aXRsZTogc3RhdGUuY29tbWFuZEVkaXRQYW5lLnRpdGxlLFxuICAgIG5hbWU6IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS5uYW1lLFxuICAgIGFyZ3M6IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS5hcmdzLFxuICAgIGNvbW1hbmQ6IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS5jb21tYW5kLFxuICAgIGV4cGxhbmF0aW9uOiBzdGF0ZS5jb21tYW5kRWRpdFBhbmUuZXhwbGFuYXRpb24sXG4gICAgdGVzdElucHV0czogc3RhdGUuY29tbWFuZEVkaXRQYW5lLnRlc3RJbnB1dHMsXG4gICAgcHJldmlldzogc3RhdGUuY29tbWFuZEVkaXRQYW5lLnByZXZpZXcsXG4gICAgZXJyb3I6IHN0YXRlLmNvbW1hbmRFZGl0UGFuZS5lcnJvclxufSk7XG5cbkNvbW1hbmRFZGl0ID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENvbW1hbmRFZGl0KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWFuZEVkaXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9Db21tYW5kRWRpdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})