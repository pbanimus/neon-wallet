webpackHotUpdate(0,{

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.filterTable = filterTable;\nexports.addMessage = addMessage;\nexports.addInputHistory = addInputHistory;\nexports.moveInputHistory = moveInputHistory;\nexports.hint = hint;\nexports.updateFunc = updateFunc;\nexports.updateResults = updateResults;\nexports.updateDocEvent = updateDocEvent;\nexports.setDocs = setDocs;\nexports.storeCurrentInput = storeCurrentInput;\nexports.hideConversation = hideConversation;\n\nvar _types = __webpack_require__(271);\n\nvar types = _interopRequireWildcard(_types);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction filterTable(filter) {\n    return {\n        type: types.FILTER,\n        filter: filter\n    };\n}\n\nfunction addMessage(message) {\n    return _extends({\n        type: types.ADD_MESSAGE\n    }, message);\n}\n\nfunction addInputHistory(message) {\n    return _extends({\n        type: types.ADD_INPUT_HISTORY\n    }, message);\n}\n\nfunction moveInputHistory(message) {\n    return _extends({\n        type: types.MOVE_INPUT_HISTORY\n    }, message);\n}\n\nfunction hint(message) {\n    return _extends({\n        type: types.HINT\n    }, message);\n}\n\nfunction updateFunc(message) {\n    return _extends({\n        type: types.UPDATE_FUNC\n    }, message);\n}\n\nfunction updateResults(message) {\n    return _extends({\n        type: types.UPDATE_RESULTS\n    }, message);\n}\n\nfunction updateDocEvent(message) {\n    return _extends({\n        type: types.UPDATE_DOCS\n    }, message);\n}\n\nfunction setDocs(message) {\n    return _extends({\n        type: types.SET_DOCS\n    }, message);\n}\n\nfunction storeCurrentInput(input) {\n    return {\n        type: types.STORE_CURRENT_INPUT,\n        currentInput: input\n    };\n}\n\nfunction hideConversation(id) {\n    return {\n        type: types.HIDE_CONVERSATION,\n        id: id\n    };\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYWN0aW9ucy9pbmRleC5qcz8xMjM2Il0sIm5hbWVzIjpbImZpbHRlclRhYmxlIiwiYWRkTWVzc2FnZSIsImFkZElucHV0SGlzdG9yeSIsIm1vdmVJbnB1dEhpc3RvcnkiLCJoaW50IiwidXBkYXRlRnVuYyIsInVwZGF0ZVJlc3VsdHMiLCJ1cGRhdGVEb2NFdmVudCIsInNldERvY3MiLCJzdG9yZUN1cnJlbnRJbnB1dCIsImhpZGVDb252ZXJzYXRpb24iLCJ0eXBlcyIsImZpbHRlciIsInR5cGUiLCJGSUxURVIiLCJtZXNzYWdlIiwiQUREX01FU1NBR0UiLCJBRERfSU5QVVRfSElTVE9SWSIsIk1PVkVfSU5QVVRfSElTVE9SWSIsIkhJTlQiLCJVUERBVEVfRlVOQyIsIlVQREFURV9SRVNVTFRTIiwiVVBEQVRFX0RPQ1MiLCJTRVRfRE9DUyIsImlucHV0IiwiU1RPUkVfQ1VSUkVOVF9JTlBVVCIsImN1cnJlbnRJbnB1dCIsImlkIiwiSElERV9DT05WRVJTQVRJT04iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBRWdCQSxXLEdBQUFBLFc7UUFPQUMsVSxHQUFBQSxVO1FBT0FDLGUsR0FBQUEsZTtRQU9BQyxnQixHQUFBQSxnQjtRQU9BQyxJLEdBQUFBLEk7UUFPQUMsVSxHQUFBQSxVO1FBT0FDLGEsR0FBQUEsYTtRQU9BQyxjLEdBQUFBLGM7UUFPQUMsTyxHQUFBQSxPO1FBT0FDLGlCLEdBQUFBLGlCO1FBT0FDLGdCLEdBQUFBLGdCOztBQXhFaEI7O0lBQVlDLEs7Ozs7QUFFTCxTQUFTWCxXQUFULENBQXFCWSxNQUFyQixFQUE2QjtBQUNoQyxXQUFPO0FBQ0hDLGNBQU1GLE1BQU1HLE1BRFQ7QUFFSEY7QUFGRyxLQUFQO0FBSUg7O0FBRU0sU0FBU1gsVUFBVCxDQUFvQmMsT0FBcEIsRUFBNkI7QUFDaEM7QUFDSUYsY0FBTUYsTUFBTUs7QUFEaEIsT0FFT0QsT0FGUDtBQUlIOztBQUVNLFNBQVNiLGVBQVQsQ0FBeUJhLE9BQXpCLEVBQWtDO0FBQ3JDO0FBQ0lGLGNBQU1GLE1BQU1NO0FBRGhCLE9BRU9GLE9BRlA7QUFJSDs7QUFFTSxTQUFTWixnQkFBVCxDQUEwQlksT0FBMUIsRUFBbUM7QUFDdEM7QUFDSUYsY0FBTUYsTUFBTU87QUFEaEIsT0FFT0gsT0FGUDtBQUlIOztBQUVNLFNBQVNYLElBQVQsQ0FBY1csT0FBZCxFQUF1QjtBQUMxQjtBQUNJRixjQUFNRixNQUFNUTtBQURoQixPQUVPSixPQUZQO0FBSUg7O0FBRU0sU0FBU1YsVUFBVCxDQUFvQlUsT0FBcEIsRUFBNkI7QUFDaEM7QUFDSUYsY0FBTUYsTUFBTVM7QUFEaEIsT0FFT0wsT0FGUDtBQUlIOztBQUVNLFNBQVNULGFBQVQsQ0FBdUJTLE9BQXZCLEVBQWdDO0FBQ25DO0FBQ0lGLGNBQU1GLE1BQU1VO0FBRGhCLE9BRU9OLE9BRlA7QUFJSDs7QUFFTSxTQUFTUixjQUFULENBQXdCUSxPQUF4QixFQUFpQztBQUNwQztBQUNJRixjQUFNRixNQUFNVztBQURoQixPQUVPUCxPQUZQO0FBSUg7O0FBRU0sU0FBU1AsT0FBVCxDQUFpQk8sT0FBakIsRUFBMEI7QUFDN0I7QUFDSUYsY0FBTUYsTUFBTVk7QUFEaEIsT0FFT1IsT0FGUDtBQUlIOztBQUVNLFNBQVNOLGlCQUFULENBQTJCZSxLQUEzQixFQUFrQztBQUNyQyxXQUFPO0FBQ0hYLGNBQU1GLE1BQU1jLG1CQURUO0FBRUhDLHNCQUFjRjtBQUZYLEtBQVA7QUFJSDs7QUFFTSxTQUFTZCxnQkFBVCxDQUEwQmlCLEVBQTFCLEVBQThCO0FBQ2pDLFdBQU87QUFDSGQsY0FBTUYsTUFBTWlCLGlCQURUO0FBRUhEO0FBRkcsS0FBUDtBQUlIIiwiZmlsZSI6IjExMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyVGFibGUoZmlsdGVyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuRklMVEVSLFxuICAgICAgICBmaWx0ZXJcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuQUREX01FU1NBR0UsXG4gICAgICAgIC4uLm1lc3NhZ2VcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSW5wdXRIaXN0b3J5KG1lc3NhZ2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5BRERfSU5QVVRfSElTVE9SWSxcbiAgICAgICAgLi4ubWVzc2FnZVxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb3ZlSW5wdXRIaXN0b3J5KG1lc3NhZ2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5NT1ZFX0lOUFVUX0hJU1RPUlksXG4gICAgICAgIC4uLm1lc3NhZ2VcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGludChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuSElOVCxcbiAgICAgICAgLi4ubWVzc2FnZVxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVGdW5jKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5VUERBVEVfRlVOQyxcbiAgICAgICAgLi4ubWVzc2FnZVxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVSZXN1bHRzKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5VUERBVEVfUkVTVUxUUyxcbiAgICAgICAgLi4ubWVzc2FnZVxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVEb2NFdmVudChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuVVBEQVRFX0RPQ1MsXG4gICAgICAgIC4uLm1lc3NhZ2VcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RG9jcyhtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuU0VUX0RPQ1MsXG4gICAgICAgIC4uLm1lc3NhZ2VcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVDdXJyZW50SW5wdXQoaW5wdXQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5TVE9SRV9DVVJSRU5UX0lOUFVULFxuICAgICAgICBjdXJyZW50SW5wdXQ6IGlucHV0XG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVDb252ZXJzYXRpb24oaWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5ISURFX0NPTlZFUlNBVElPTixcbiAgICAgICAgaWRcbiAgICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2FjdGlvbnMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})