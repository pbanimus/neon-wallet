webpackHotUpdate(0,{

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Message = __webpack_require__(502);\n\nvar _Message2 = _interopRequireDefault(_Message);\n\nvar _TitleMessage = __webpack_require__(1420);\n\nvar _TitleMessage2 = _interopRequireDefault(_TitleMessage);\n\nvar _VisualMessage = __webpack_require__(512);\n\nvar _VisualMessage2 = _interopRequireDefault(_VisualMessage);\n\nvar _DataMessage = __webpack_require__(495);\n\nvar _DataMessage2 = _interopRequireDefault(_DataMessage);\n\nvar _CodeMessage = __webpack_require__(491);\n\nvar _CodeMessage2 = _interopRequireDefault(_CodeMessage);\n\nvar _ExplainMessage = __webpack_require__(497);\n\nvar _ExplainMessage2 = _interopRequireDefault(_ExplainMessage);\n\nvar _FilePickMessage = __webpack_require__(498);\n\nvar _FilePickMessage2 = _interopRequireDefault(_FilePickMessage);\n\nvar _CollectionMessage = __webpack_require__(492);\n\nvar _CollectionMessage2 = _interopRequireDefault(_CollectionMessage);\n\nvar _TableSelectMessage = __webpack_require__(508);\n\nvar _TableSelectMessage2 = _interopRequireDefault(_TableSelectMessage);\n\nvar _VegaMessage = __webpack_require__(511);\n\nvar _VegaMessage2 = _interopRequireDefault(_VegaMessage);\n\nvar _Title = __webpack_require__(509);\n\nvar _Title2 = _interopRequireDefault(_Title);\n\nvar _types = __webpack_require__(72);\n\nvar proptypes = _interopRequireWildcard(_types);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// import SemanticView from '../components/SemanticView';\n\nvar Conversation = function (_Component) {\n    _inherits(Conversation, _Component);\n\n    function Conversation() {\n        var _ref;\n\n        var _temp, _this, _ret;\n\n        _classCallCheck(this, Conversation);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Conversation.__proto__ || Object.getPrototypeOf(Conversation)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n            var lastSelectMessageIndex = null;\n            var i = void 0;\n            for (i = 0; i < _this.props.messages.length; i++) {\n                if (_typeof(_this.props.messages[i].text) === 'object' && (_this.props.messages[i].text.type === 'collection_select' || _this.props.messages[i].text.type === 'collection_select_one')) {\n                    lastSelectMessageIndex = i;\n                }\n            }\n            console.log(\"last message\", i);\n            return _react2.default.createElement(\n                'div',\n                { className: 'innerConversation' },\n                _react2.default.createElement(_Title2.default, { text: _this.props.title, args: _this.props.args, id: _this.props.id }),\n                _this.props.messages.map(function (message, i) {\n                    var content = void 0;\n                    console.log('INCOMING', message.text);\n                    if (_typeof(message.text) === 'object' && message.text.type === 'image') {\n                        content = _react2.default.createElement(_VisualMessage2.default, { key: message.id, origin: message.origin, content: message.text.value, hidden: _this.props.hidden });\n                    } else if (_typeof(message.text) === 'object' && message.text.type === 'data') {\n                        content = _react2.default.createElement(_DataMessage2.default, { key: message.id, origin: message.origin, text: message.text.value, hidden: _this.props.hidden });\n                    } else if (_typeof(message.text) === 'object' && message.text.type === 'explain') {\n                        content = _react2.default.createElement(_ExplainMessage2.default, { key: message.id, origin: message.origin, text: message.text.value, hidden: _this.props.hidden });\n                    } else if (_typeof(message.text) === 'object' && message.text.type === 'file_pick') {\n                        content = _react2.default.createElement(_FilePickMessage2.default, { key: message.id, active: _this.props.active, origin: message.origin, text: message.text.value, hidden: _this.props.hidden });\n                    } else if (_typeof(message.text) === 'object' && message.text.type === 'code') {\n                        content = _react2.default.createElement(_CodeMessage2.default, { key: message.id, origin: message.origin, text: message.text.value, hidden: _this.props.hidden });\n                    } else if (_typeof(message.text) === 'object' && message.text.type === 'collection') {\n                        content = _react2.default.createElement(_CollectionMessage2.default, { key: message.id, origin: message.origin, text: message.text.value, hidden: _this.props.hidden });\n                    } else if (_typeof(message.text) === 'object' && message.text.type === 'collection_select') {\n                        content = _react2.default.createElement(_TableSelectMessage2.default, { key: message.id, onlyOne: false, active: _this.props.active && i === lastSelectMessageIndex, origin: message.origin, text: message.text.value, hidden: _this.props.hidden });\n                    } else if (_typeof(message.text) === 'object' && message.text.type === 'collection_select_one') {\n                        content = _react2.default.createElement(_TableSelectMessage2.default, { key: message.id, onlyOne: true, active: _this.props.active && i === lastSelectMessageIndex, origin: message.origin, text: message.text.value, hidden: _this.props.hidden });\n                    } else if (_typeof(message.text) === 'object' && message.text.type === 'vega') {\n                        console.log(\"vega\", message.text);\n                        content = _react2.default.createElement(_VegaMessage2.default, { key: message.id, origin: message.origin, spec: message.text.spec, data: message.text.data, hidden: _this.props.hidden });\n                    } else if (_typeof(message.text) === 'object' && message.text.type === 'title') {\n                        var _React$createElement;\n\n                        content = _react2.default.createElement(_TitleMessage2.default, (_React$createElement = { key: message.id, origin: message.origin, text: message.text.text }, _defineProperty(_React$createElement, 'text', message.text.title), _defineProperty(_React$createElement, 'titlehidden', _this.props.hidden), _React$createElement));\n                    } else {\n                        content = _react2.default.createElement(_Message2.default, { key: message.id, origin: message.origin, text: message.text, hidden: _this.props.hidden });\n                    }\n                    return content;\n                })\n            );\n        }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    return Conversation;\n}(_react.Component);\n\nConversation.propTypes = {\n    messages: proptypes.messagesType,\n    title: _react.PropTypes.any,\n    args: _react.PropTypes.any,\n    id: _react.PropTypes.int,\n    hidden: _react.PropTypes.bool,\n    active: _react.PropTypes.bool\n};\n\nexports.default = Conversation;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db252ZXJzYXRpb24uanM/Yjg5NiJdLCJuYW1lcyI6WyJwcm9wdHlwZXMiLCJDb252ZXJzYXRpb24iLCJyZW5kZXIiLCJsYXN0U2VsZWN0TWVzc2FnZUluZGV4IiwiaSIsInByb3BzIiwibWVzc2FnZXMiLCJsZW5ndGgiLCJ0ZXh0IiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsImFyZ3MiLCJpZCIsIm1hcCIsIm1lc3NhZ2UiLCJjb250ZW50Iiwib3JpZ2luIiwidmFsdWUiLCJoaWRkZW4iLCJhY3RpdmUiLCJzcGVjIiwiZGF0YSIsInByb3BUeXBlcyIsIm1lc3NhZ2VzVHlwZSIsImFueSIsImludCIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLFM7Ozs7Ozs7Ozs7Ozs7O0FBRVo7O0lBRU1DLFk7Ozs7Ozs7Ozs7Ozs7O3NNQUVGQyxNLEdBQVMsWUFBTTtBQUNYLGdCQUFJQyx5QkFBeUIsSUFBN0I7QUFDQSxnQkFBSUMsVUFBSjtBQUNBLGlCQUFLQSxJQUFJLENBQVQsRUFBWUEsSUFBSSxNQUFLQyxLQUFMLENBQVdDLFFBQVgsQ0FBb0JDLE1BQXBDLEVBQTRDSCxHQUE1QyxFQUFnRDtBQUM5QyxvQkFBSSxRQUFPLE1BQUtDLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkYsQ0FBcEIsRUFBdUJJLElBQTlCLE1BQXVDLFFBQXZDLEtBQW9ELE1BQUtILEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkYsQ0FBcEIsRUFBdUJJLElBQXZCLENBQTRCQyxJQUE1QixLQUFxQyxtQkFBckMsSUFBNEQsTUFBS0osS0FBTCxDQUFXQyxRQUFYLENBQW9CRixDQUFwQixFQUF1QkksSUFBdkIsQ0FBNEJDLElBQTVCLEtBQXFDLHVC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bEIsS0FBTCxDQUFXZSxNQUEzSCxHQUFWO0FBQ1AscUJBSE0sTUFHQSxJQUFJLFFBQU9KLFFBQVFSLElBQWYsTUFBd0IsUUFBeEIsSUFBb0NRLFFBQVFSLElBQVIsQ0FBYUMsSUFBYixLQUFzQixPQUE5RCxFQUFzRTtBQUFBOztBQUN2RVEsa0NBQVUsZ0ZBQWMsS0FBS0QsUUFBUUYsRUFBM0IsRUFBK0IsUUFBUUUsUUFBUUUsTUFBL0MsRUFBdUQsTUFBTUYsUUFBUVIsSUFBUixDQUFhQSxJQUExRSxrREFBc0ZRLFFBQVFSLElBQVIsQ0FBYUksS0FBbkcsd0RBQXVILE1BQUtQLEtBQUwsQ0FBV2UsTUFBbEkseUJBQVY7QUFDTCxxQkFGTSxNQUdIO0FBQ0VILGtDQUFVLG1EQUFTLEtBQUtELFFBQVFGLEVBQXRCLEVBQTBCLFFBQVFFLFFBQVFFLE1BQTFDLEVBQWtELE1BQU1GLFFBQVFSLElBQWhFLEVBQXNFLFFBQVEsTUFBS0gsS0FBTCxDQUFXZSxNQUF6RixHQUFWO0FBQ0w7QUFDRCwyQkFBT0gsT0FBUDtBQUNILGlCQTdCQTtBQUZHLGFBQVI7QUFpQ0QsUzs7Ozs7O0FBR1BoQixhQUFhdUIsU0FBYixHQUF5QjtBQUNyQmxCLGNBQVVOLFVBQVV5QixZQURDO0FBRXJCYixXQUFPLGlCQUFVYyxHQUZJO0FBR3JCYixVQUFNLGlCQUFVYSxHQUhLO0FBSXJCWixRQUFJLGlCQUFVYSxHQUpPO0FBS3JCUCxZQUFRLGlCQUFVUSxJQUxHO0FBTXJCUCxZQUFRLGlCQUFVTztBQU5HLENBQXpCOztrQkFTZTNCLFkiLCJmaWxlIjoiNDk0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi9NZXNzYWdlJztcbmltcG9ydCBUaXRsZU1lc3NhZ2UgZnJvbSAnLi9UaXRsZU1lc3NhZ2UnO1xuaW1wb3J0IFZpc3VhbE1lc3NhZ2UgZnJvbSAnLi9WaXN1YWxNZXNzYWdlJztcbmltcG9ydCBEYXRhTWVzc2FnZSBmcm9tICcuL0RhdGFNZXNzYWdlJztcbmltcG9ydCBDb2RlTWVzc2FnZSBmcm9tICcuL0NvZGVNZXNzYWdlJztcbmltcG9ydCBFeHBsYWluTWVzc2FnZSBmcm9tICcuL0V4cGxhaW5NZXNzYWdlJztcbmltcG9ydCBGaWxlUGlja01lc3NhZ2UgZnJvbSAnLi9GaWxlUGlja01lc3NhZ2UnO1xuaW1wb3J0IENvbGxlY3Rpb25NZXNzYWdlIGZyb20gJy4vQ29sbGVjdGlvbk1lc3NhZ2UnO1xuaW1wb3J0IFRhYmxlU2VsZWN0TWVzc2FnZSBmcm9tICcuL1RhYmxlU2VsZWN0TWVzc2FnZSc7XG5pbXBvcnQgVmVnYU1lc3NhZ2UgZnJvbSAnLi9WZWdhTWVzc2FnZSc7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi9UaXRsZSc7XG5pbXBvcnQgKiBhcyBwcm9wdHlwZXMgZnJvbSAnLi4vcHJvcHR5cGVzL3R5cGVzJztcblxuLy8gaW1wb3J0IFNlbWFudGljVmlldyBmcm9tICcuLi9jb21wb25lbnRzL1NlbWFudGljVmlldyc7XG5cbmNsYXNzIENvbnZlcnNhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgIGxldCBsYXN0U2VsZWN0TWVzc2FnZUluZGV4ID0gbnVsbDtcbiAgICAgICAgbGV0IGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnByb3BzLm1lc3NhZ2VzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMubWVzc2FnZXNbaV0udGV4dCA9PT0gJ29iamVjdCcgJiYgKHRoaXMucHJvcHMubWVzc2FnZXNbaV0udGV4dC50eXBlID09PSAnY29sbGVjdGlvbl9zZWxlY3QnIHx8IHRoaXMucHJvcHMubWVzc2FnZXNbaV0udGV4dC50eXBlID09PSAnY29sbGVjdGlvbl9zZWxlY3Rfb25lJykpe1xuICAgICAgICAgICAgbGFzdFNlbGVjdE1lc3NhZ2VJbmRleCA9IGk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwibGFzdCBtZXNzYWdlXCIsIGkpO1xuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJDb252ZXJzYXRpb25cIj5cbiAgICAgICAgICAgIDxUaXRsZSB0ZXh0PXt0aGlzLnByb3BzLnRpdGxlfSBhcmdzPXt0aGlzLnByb3BzLmFyZ3N9IGlkPXt0aGlzLnByb3BzLmlkfS8+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5tZXNzYWdlcy5tYXAoKG1lc3NhZ2UsaSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjb250ZW50O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJTkNPTUlORycsIG1lc3NhZ2UudGV4dCk7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIG1lc3NhZ2UudGV4dCA9PT0gJ29iamVjdCcgJiYgbWVzc2FnZS50ZXh0LnR5cGUgPT09ICdpbWFnZScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IDxWaXN1YWxNZXNzYWdlIGtleT17bWVzc2FnZS5pZH0gb3JpZ2luPXttZXNzYWdlLm9yaWdpbn0gY29udGVudD17bWVzc2FnZS50ZXh0LnZhbHVlfSBoaWRkZW49e3RoaXMucHJvcHMuaGlkZGVufS8+O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG1lc3NhZ2UudGV4dCA9PT0gJ29iamVjdCcgJiYgbWVzc2FnZS50ZXh0LnR5cGUgPT09ICdkYXRhJykge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gPERhdGFNZXNzYWdlIGtleT17bWVzc2FnZS5pZH0gb3JpZ2luPXttZXNzYWdlLm9yaWdpbn0gdGV4dD17bWVzc2FnZS50ZXh0LnZhbHVlfSBoaWRkZW49e3RoaXMucHJvcHMuaGlkZGVufS8+O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG1lc3NhZ2UudGV4dCA9PT0gJ29iamVjdCcgJiYgbWVzc2FnZS50ZXh0LnR5cGUgPT09ICdleHBsYWluJykge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gPEV4cGxhaW5NZXNzYWdlIGtleT17bWVzc2FnZS5pZH0gb3JpZ2luPXttZXNzYWdlLm9yaWdpbn0gdGV4dD17bWVzc2FnZS50ZXh0LnZhbHVlfSBoaWRkZW49e3RoaXMucHJvcHMuaGlkZGVufS8+O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG1lc3NhZ2UudGV4dCA9PT0gJ29iamVjdCcgJiYgbWVzc2FnZS50ZXh0LnR5cGUgPT09ICdmaWxlX3BpY2snKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSA8RmlsZVBpY2tNZXNzYWdlIGtleT17bWVzc2FnZS5pZH0gYWN0aXZlPXt0aGlzLnByb3BzLmFjdGl2ZX0gb3JpZ2luPXttZXNzYWdlLm9yaWdpbn0gdGV4dD17bWVzc2FnZS50ZXh0LnZhbHVlfSBoaWRkZW49e3RoaXMucHJvcHMuaGlkZGVufS8+O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG1lc3NhZ2UudGV4dCA9PT0gJ29iamVjdCcgJiYgbWVzc2FnZS50ZXh0LnR5cGUgPT09ICdjb2RlJykge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gPENvZGVNZXNzYWdlIGtleT17bWVzc2FnZS5pZH0gb3JpZ2luPXttZXNzYWdlLm9yaWdpbn0gdGV4dD17bWVzc2FnZS50ZXh0LnZhbHVlfSBoaWRkZW49e3RoaXMucHJvcHMuaGlkZGVufS8+O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG1lc3NhZ2UudGV4dCA9PT0gJ29iamVjdCcgJiYgbWVzc2FnZS50ZXh0LnR5cGUgPT09ICdjb2xsZWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IDxDb2xsZWN0aW9uTWVzc2FnZSBrZXk9e21lc3NhZ2UuaWR9IG9yaWdpbj17bWVzc2FnZS5vcmlnaW59IHRleHQ9e21lc3NhZ2UudGV4dC52YWx1ZX0gaGlkZGVuPXt0aGlzLnByb3BzLmhpZGRlbn0vPjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtZXNzYWdlLnRleHQgPT09ICdvYmplY3QnICYmIG1lc3NhZ2UudGV4dC50eXBlID09PSAnY29sbGVjdGlvbl9zZWxlY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gPFRhYmxlU2VsZWN0TWVzc2FnZSBrZXk9e21lc3NhZ2UuaWR9IG9ubHlPbmU9e2ZhbHNlfSBhY3RpdmU9e3RoaXMucHJvcHMuYWN0aXZlICYmIGkgPT09IGxhc3RTZWxlY3RNZXNzYWdlSW5kZXh9IG9yaWdpbj17bWVzc2FnZS5vcmlnaW59IHRleHQ9e21lc3NhZ2UudGV4dC52YWx1ZX0gaGlkZGVuPXt0aGlzLnByb3BzLmhpZGRlbn0vPjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtZXNzYWdlLnRleHQgPT09ICdvYmplY3QnICYmIG1lc3NhZ2UudGV4dC50eXBlID09PSAnY29sbGVjdGlvbl9zZWxlY3Rfb25lJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IDxUYWJsZVNlbGVjdE1lc3NhZ2Uga2V5PXttZXNzYWdlLmlkfSBvbmx5T25lPXt0cnVlfSBhY3RpdmU9e3RoaXMucHJvcHMuYWN0aXZlICYmIGkgPT09IGxhc3RTZWxlY3RNZXNzYWdlSW5kZXh9IG9yaWdpbj17bWVzc2FnZS5vcmlnaW59IHRleHQ9e21lc3NhZ2UudGV4dC52YWx1ZX0gaGlkZGVuPXt0aGlzLnByb3BzLmhpZGRlbn0vPjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtZXNzYWdlLnRleHQgPT09ICdvYmplY3QnICYmIG1lc3NhZ2UudGV4dC50eXBlID09PSAndmVnYScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmVnYVwiLCBtZXNzYWdlLnRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IDxWZWdhTWVzc2FnZSBrZXk9e21lc3NhZ2UuaWR9IG9yaWdpbj17bWVzc2FnZS5vcmlnaW59IHNwZWM9e21lc3NhZ2UudGV4dC5zcGVjfSBkYXRhPXttZXNzYWdlLnRleHQuZGF0YX0gaGlkZGVuPXt0aGlzLnByb3BzLmhpZGRlbn0vPjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtZXNzYWdlLnRleHQgPT09ICdvYmplY3QnICYmIG1lc3NhZ2UudGV4dC50eXBlID09PSAndGl0bGUnKXtcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gPFRpdGxlTWVzc2FnZSBrZXk9e21lc3NhZ2UuaWR9IG9yaWdpbj17bWVzc2FnZS5vcmlnaW59IHRleHQ9e21lc3NhZ2UudGV4dC50ZXh0fSB0ZXh0PXttZXNzYWdlLnRleHQudGl0bGV9IHRpdGxlaGlkZGVuPXt0aGlzLnByb3BzLmhpZGRlbn0vPjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gPE1lc3NhZ2Uga2V5PXttZXNzYWdlLmlkfSBvcmlnaW49e21lc3NhZ2Uub3JpZ2lufSB0ZXh0PXttZXNzYWdlLnRleHR9IGhpZGRlbj17dGhpcy5wcm9wcy5oaWRkZW59Lz47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2Pik7XG4gICAgICB9XG59XG5cbkNvbnZlcnNhdGlvbi5wcm9wVHlwZXMgPSB7XG4gICAgbWVzc2FnZXM6IHByb3B0eXBlcy5tZXNzYWdlc1R5cGUsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5hbnksXG4gICAgYXJnczogUHJvcFR5cGVzLmFueSxcbiAgICBpZDogUHJvcFR5cGVzLmludCxcbiAgICBoaWRkZW46IFByb3BUeXBlcy5ib29sLFxuICAgIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnZlcnNhdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL0NvbnZlcnNhdGlvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})