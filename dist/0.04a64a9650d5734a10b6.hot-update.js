webpackHotUpdate(0,{

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.filterTable = filterTable;\nexports.addMessage = addMessage;\nexports.addInputHistory = addInputHistory;\nexports.moveInputHistory = moveInputHistory;\nexports.hint = hint;\nexports.storeCurrentInput = storeCurrentInput;\nexports.hideConversation = hideConversation;\n\nvar _types = __webpack_require__(265);\n\nvar types = _interopRequireWildcard(_types);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction filterTable(filter) {\n    return {\n        type: types.FILTER,\n        filter: filter\n    };\n}\n\nfunction addMessage(message) {\n    return _extends({\n        type: types.ADD_MESSAGE\n    }, message);\n}\n\nfunction addInputHistory(message) {\n    return _extends({\n        type: types.ADD_INPUT_HISTORY\n    }, message);\n}\n\nfunction moveInputHistory(message) {\n    return _extends({\n        type: types.MOVE_INPUT_HISTORY\n    }, message);\n}\n\nfunction hint(message) {\n    return _extends({\n        type: types.HINT\n    }, message);\n}\n\nfunction storeCurrentInput(input) {\n    return {\n        type: types.STORE_CURRENT_INPUT,\n        currentInput: input\n    };\n}\n\nfunction hideConversation(id) {\n    return {\n        type: types.HIDE_CONVERSATION,\n        id: id\n    };\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYWN0aW9ucy9pbmRleC5qcz8xMjM2Il0sIm5hbWVzIjpbImZpbHRlclRhYmxlIiwiYWRkTWVzc2FnZSIsImFkZElucHV0SGlzdG9yeSIsIm1vdmVJbnB1dEhpc3RvcnkiLCJoaW50Iiwic3RvcmVDdXJyZW50SW5wdXQiLCJoaWRlQ29udmVyc2F0aW9uIiwidHlwZXMiLCJmaWx0ZXIiLCJ0eXBlIiwiRklMVEVSIiwibWVzc2FnZSIsIkFERF9NRVNTQUdFIiwiQUREX0lOUFVUX0hJU1RPUlkiLCJNT1ZFX0lOUFVUX0hJU1RPUlkiLCJISU5UIiwiaW5wdXQiLCJTVE9SRV9DVVJSRU5UX0lOUFVUIiwiY3VycmVudElucHV0IiwiaWQiLCJISURFX0NPTlZFUlNBVElPTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7UUFFZ0JBLFcsR0FBQUEsVztRQU9BQyxVLEdBQUFBLFU7UUFPQUMsZSxHQUFBQSxlO1FBT0FDLGdCLEdBQUFBLGdCO1FBT0FDLEksR0FBQUEsSTtRQU9BQyxpQixHQUFBQSxpQjtRQU9BQyxnQixHQUFBQSxnQjs7QUE1Q2hCOztJQUFZQyxLOzs7O0FBRUwsU0FBU1AsV0FBVCxDQUFxQlEsTUFBckIsRUFBNkI7QUFDaEMsV0FBTztBQUNIQyxjQUFNRixNQUFNRyxNQURUO0FBRUhGO0FBRkcsS0FBUDtBQUlIOztBQUVNLFNBQVNQLFVBQVQsQ0FBb0JVLE9BQXBCLEVBQTZCO0FBQ2hDO0FBQ0lGLGNBQU1GLE1BQU1LO0FBRGhCLE9BRU9ELE9BRlA7QUFJSDs7QUFFTSxTQUFTVCxlQUFULENBQXlCUyxPQUF6QixFQUFrQztBQUNyQztBQUNJRixjQUFNRixNQUFNTTtBQURoQixPQUVPRixPQUZQO0FBSUg7O0FBRU0sU0FBU1IsZ0JBQVQsQ0FBMEJRLE9BQTFCLEVBQW1DO0FBQ3RDO0FBQ0lGLGNBQU1GLE1BQU1PO0FBRGhCLE9BRU9ILE9BRlA7QUFJSDs7QUFFTSxTQUFTUCxJQUFULENBQWNPLE9BQWQsRUFBdUI7QUFDMUI7QUFDSUYsY0FBTUYsTUFBTVE7QUFEaEIsT0FFT0osT0FGUDtBQUlIOztBQUVNLFNBQVNOLGlCQUFULENBQTJCVyxLQUEzQixFQUFrQztBQUNyQyxXQUFPO0FBQ0hQLGNBQU1GLE1BQU1VLG1CQURUO0FBRUhDLHNCQUFjRjtBQUZYLEtBQVA7QUFJSDs7QUFFTSxTQUFTVixnQkFBVCxDQUEwQmEsRUFBMUIsRUFBOEI7QUFDakMsV0FBTztBQUNIVixjQUFNRixNQUFNYSxpQkFEVDtBQUVIRDtBQUZHLEtBQVA7QUFJSCIsImZpbGUiOiIyNjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlclRhYmxlKGZpbHRlcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLkZJTFRFUixcbiAgICAgICAgZmlsdGVyXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE1lc3NhZ2UobWVzc2FnZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLkFERF9NRVNTQUdFLFxuICAgICAgICAuLi5tZXNzYWdlXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZElucHV0SGlzdG9yeShtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuQUREX0lOUFVUX0hJU1RPUlksXG4gICAgICAgIC4uLm1lc3NhZ2VcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW92ZUlucHV0SGlzdG9yeShtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuTU9WRV9JTlBVVF9ISVNUT1JZLFxuICAgICAgICAuLi5tZXNzYWdlXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpbnQobWVzc2FnZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLkhJTlQsXG4gICAgICAgIC4uLm1lc3NhZ2VcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVDdXJyZW50SW5wdXQoaW5wdXQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5TVE9SRV9DVVJSRU5UX0lOUFVULFxuICAgICAgICBjdXJyZW50SW5wdXQ6IGlucHV0XG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVDb252ZXJzYXRpb24oaWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5ISURFX0NPTlZFUlNBVElPTixcbiAgICAgICAgaWRcbiAgICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2FjdGlvbnMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})