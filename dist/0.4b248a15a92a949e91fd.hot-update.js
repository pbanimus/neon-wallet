webpackHotUpdate(0,{

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactDataGrid = __webpack_require__(1046);\n\nvar _reactDataGrid2 = _interopRequireDefault(_reactDataGrid);\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _types = __webpack_require__(66);\n\nvar proptypes = _interopRequireWildcard(_types);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar CollectionMessage = function (_Component) {\n  _inherits(CollectionMessage, _Component);\n\n  function CollectionMessage() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, CollectionMessage);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CollectionMessage.__proto__ || Object.getPrototypeOf(CollectionMessage)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      return _react2.default.createElement(\n        'div',\n        { className: _this.props.origin === 'iris' ? 'message left' : 'message right', style: _this.props.hidden === true ? { display: 'none' } : {} },\n        _react2.default.createElement(_reactDataGrid2.default, { columns: _this.testColumns, rowGetter: _this.getRow, rowsCount: _this.testRows.length })\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(CollectionMessage, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      this.testColumns = [{ key: 'col1', name: 'col1' }, { key: 'col2', name: 'col2' }];\n      this.testRows = [{ col1: 1, col2: 2 }, { col1: 3, col2: 4 }];\n      this.getRow = function (i) {\n        return _this2.testRows[i];\n      };\n    }\n  }]);\n\n  return CollectionMessage;\n}(_react.Component);\n\n// const CollectionMessage = ({ origin, text, hidden }) =>\n//     <div className = {origin === 'iris' ? 'message left' : 'message right'} style={hidden === true ? {display: 'none'} : {}}>\n//         <ReactDataGrid columns={testColumns} rowGetter={getRow} rowsCount={testRows.length} />\n//     </div>;\n\nCollectionMessage.propTypes = proptypes.messageType;\n\nexports.default = CollectionMessage;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db2xsZWN0aW9uTWVzc2FnZS5qcz8wZDQ2Il0sIm5hbWVzIjpbInByb3B0eXBlcyIsIkNvbGxlY3Rpb25NZXNzYWdlIiwicmVuZGVyIiwicHJvcHMiLCJvcmlnaW4iLCJoaWRkZW4iLCJkaXNwbGF5IiwidGVzdENvbHVtbnMiLCJnZXRSb3ciLCJ0ZXN0Um93cyIsImxlbmd0aCIsImtleSIsIm5hbWUiLCJjb2wxIiwiY29sMiIsImkiLCJwcm9wVHlwZXMiLCJtZXNzYWdlVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLFM7Ozs7Ozs7Ozs7OztJQUVOQyxpQjs7Ozs7Ozs7Ozs7Ozs7NE1BY0pDLE0sR0FBUztBQUFBLGFBQ1A7QUFBQTtBQUFBLFVBQUssV0FBYSxNQUFLQyxLQUFMLENBQVdDLE1BQVgsS0FBc0IsTUFBdEIsR0FBK0IsY0FBL0IsR0FBZ0QsZUFBbEUsRUFBbUYsT0FBTyxNQUFLRCxLQUFMLENBQVdFLE1BQVgsS0FBc0IsSUFBdEIsR0FBNkIsRUFBQ0MsU0FBUyxNQUFWLEVBQTdCLEdBQWlELEVBQTNJO0FBQ0ksaUVBQWUsU0FBUyxNQUFLQyxXQUE3QixFQUEwQyxXQUFXLE1BQUtDLE1BQTFELEVBQWtFLFdBQVcsTUFBS0MsUUFBTCxDQUFjQyxNQUEzRjtBQURKLE9BRE87QUFBQSxLOzs7Ozt3Q0FaVztBQUFBOztBQUNsQixXQUFLSCxXQUFMLEdBQW1CLENBQ2pCLEVBQUNJLEtBQUssTUFBTixFQUFjQyxNQUFNLE1BQXBCLEVBRGlCLEVBRWpCLEVBQUNELEtBQUssTUFBTixFQUFjQyxNQUFNLE1BQXBCLEVBRmlCLENBQW5CO0FBSUEsV0FBS0gsUUFBTCxHQUFnQixDQUNkLEVBQUNJLE1BQU0sQ0FBUCxFQUFVQyxNQUFNLENBQWhCLEVBRGMsRUFFZCxFQUFDRCxNQUFNLENBQVAsRUFBVUMsTUFBTSxDQUFoQixFQUZjLENBQWhCO0FBSUEsV0FBS04sTUFBTCxHQUFjLFVBQUNPLENBQUQ7QUFBQSxlQUFPLE9BQUtOLFFBQUwsQ0FBY00sQ0FBZCxDQUFQO0FBQUEsT0FBZDtBQUNEOzs7Ozs7QUFRSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQWQsa0JBQWtCZSxTQUFsQixHQUE4QmhCLFVBQVVpQixXQUF4Qzs7a0JBRWVoQixpQiIsImZpbGUiOiI0MTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3REYXRhR3JpZCBmcm9tICdyZWFjdC1kYXRhLWdyaWQnO1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBwcm9wdHlwZXMgZnJvbSAnLi4vcHJvcHR5cGVzL3R5cGVzJztcblxuY2xhc3MgQ29sbGVjdGlvbk1lc3NhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudGVzdENvbHVtbnMgPSBbXG4gICAgICB7a2V5OiAnY29sMScsIG5hbWU6ICdjb2wxJ30sXG4gICAgICB7a2V5OiAnY29sMicsIG5hbWU6ICdjb2wyJ31cbiAgICBdO1xuICAgIHRoaXMudGVzdFJvd3MgPSBbXG4gICAgICB7Y29sMTogMSwgY29sMjogMn0sXG4gICAgICB7Y29sMTogMywgY29sMjogNH1cbiAgICBdO1xuICAgIHRoaXMuZ2V0Um93ID0gKGkpID0+IHRoaXMudGVzdFJvd3NbaV07XG4gIH1cblxuICByZW5kZXIgPSAoKSA9PlxuICAgIDxkaXYgY2xhc3NOYW1lID0ge3RoaXMucHJvcHMub3JpZ2luID09PSAnaXJpcycgPyAnbWVzc2FnZSBsZWZ0JyA6ICdtZXNzYWdlIHJpZ2h0J30gc3R5bGU9e3RoaXMucHJvcHMuaGlkZGVuID09PSB0cnVlID8ge2Rpc3BsYXk6ICdub25lJ30gOiB7fX0+XG4gICAgICAgIDxSZWFjdERhdGFHcmlkIGNvbHVtbnM9e3RoaXMudGVzdENvbHVtbnN9IHJvd0dldHRlcj17dGhpcy5nZXRSb3d9IHJvd3NDb3VudD17dGhpcy50ZXN0Um93cy5sZW5ndGh9IC8+XG4gICAgPC9kaXY+O1xufVxuXG4vLyBjb25zdCBDb2xsZWN0aW9uTWVzc2FnZSA9ICh7IG9yaWdpbiwgdGV4dCwgaGlkZGVuIH0pID0+XG4vLyAgICAgPGRpdiBjbGFzc05hbWUgPSB7b3JpZ2luID09PSAnaXJpcycgPyAnbWVzc2FnZSBsZWZ0JyA6ICdtZXNzYWdlIHJpZ2h0J30gc3R5bGU9e2hpZGRlbiA9PT0gdHJ1ZSA/IHtkaXNwbGF5OiAnbm9uZSd9IDoge319PlxuLy8gICAgICAgICA8UmVhY3REYXRhR3JpZCBjb2x1bW5zPXt0ZXN0Q29sdW1uc30gcm93R2V0dGVyPXtnZXRSb3d9IHJvd3NDb3VudD17dGVzdFJvd3MubGVuZ3RofSAvPlxuLy8gICAgIDwvZGl2PjtcblxuQ29sbGVjdGlvbk1lc3NhZ2UucHJvcFR5cGVzID0gcHJvcHR5cGVzLm1lc3NhZ2VUeXBlO1xuXG5leHBvcnQgZGVmYXVsdCBDb2xsZWN0aW9uTWVzc2FnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL0NvbGxlY3Rpb25NZXNzYWdlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})