webpackHotUpdate(0,{

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.filterTable = filterTable;\nexports.addMessage = addMessage;\nexports.addInputHistory = addInputHistory;\nexports.moveInputHistory = moveInputHistory;\nexports.hint = hint;\nexports.updateFunc = updateFunc;\nexports.updateResults = updateResults;\nexports.updateDocEvent = updateDocEvent;\nexports.setDocs = setDocs;\nexports.setCodeEdit = setCodeEdit;\nexports.updateCodeEditor = updateCodeEditor;\nexports.addCommandArg = addCommandArg;\nexports.addExample = addExample;\nexports.updateCommand = updateCommand;\nexports.updateCommandArg = updateCommandArg;\nexports.deleteCommandArg = deleteCommandArg;\nexports.deleteCommandExample = deleteCommandExample;\nexports.updateCommandExample = updateCommandExample;\nexports.storeCurrentInput = storeCurrentInput;\nexports.hideConversation = hideConversation;\nexports.resetCommand = resetCommand;\n\nvar _types = __webpack_require__(314);\n\nvar types = _interopRequireWildcard(_types);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction filterTable(filter) {\n    return {\n        type: types.FILTER,\n        filter: filter\n    };\n}\n\nfunction addMessage(message) {\n    return _extends({\n        type: types.ADD_MESSAGE\n    }, message);\n}\n\nfunction addInputHistory(message) {\n    return _extends({\n        type: types.ADD_INPUT_HISTORY\n    }, message);\n}\n\nfunction moveInputHistory(message) {\n    return _extends({\n        type: types.MOVE_INPUT_HISTORY\n    }, message);\n}\n\nfunction hint(message) {\n    return _extends({\n        type: types.HINT\n    }, message);\n}\n\nfunction updateFunc(message) {\n    return _extends({\n        type: types.UPDATE_FUNC\n    }, message);\n}\n\nfunction updateResults(message) {\n    return _extends({\n        type: types.UPDATE_RESULTS\n    }, message);\n}\n\nfunction updateDocEvent(message) {\n    return _extends({\n        type: types.UPDATE_DOCS\n    }, message);\n}\n\nfunction setDocs(message) {\n    return _extends({\n        type: types.SET_DOCS\n    }, message);\n}\n\nfunction setCodeEdit(message) {\n    return _extends({\n        type: types.SET_CODE_EDIT\n    }, message);\n}\n\nfunction updateCodeEditor(name, value) {\n    return {\n        type: types.UPDATE_CODE_EDITOR,\n        value: value,\n        name: name\n    };\n}\n\nfunction addCommandArg() {\n    return {\n        type: types.ADD_COMMAND_ARG\n    };\n}\n\nfunction addExample() {\n    return {\n        type: types.ADD_COMMAND_EXAMPLE\n    };\n}\n\n// dispatch({'type': 'UPDATE_COMMAND', 'command': json.command});\n\nfunction updateCommand(command) {\n    return {\n        type: 'UPDATE_COMMAND',\n        command: command\n    };\n}\n\nfunction updateCommandArg(id, values) {\n    return {\n        type: types.UPDATE_COMMAND_ARG,\n        id: id,\n        values: values\n    };\n}\n\nfunction deleteCommandArg(id) {\n    return {\n        type: types.DELETE_COMMAND_ARG,\n        id: id\n    };\n}\n\nfunction deleteCommandExample(id) {\n    return {\n        type: types.DELETE_COMMAND_EXAMPLE,\n        id: id\n    };\n}\n\nfunction updateCommandExample(id, text) {\n    return {\n        type: types.UPDATE_COMMAND_EXAMPLE,\n        id: id,\n        text: text\n    };\n}\n\nfunction storeCurrentInput(input) {\n    return {\n        type: types.STORE_CURRENT_INPUT,\n        currentInput: input\n    };\n}\n\nfunction hideConversation(id) {\n    return {\n        type: types.HIDE_CONVERSATION,\n        id: id\n    };\n}\n\nfunction resetCommand() {\n    return {\n        type: types.RESET_COMMAND\n    };\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYWN0aW9ucy9pbmRleC5qcz8xMjM2Il0sIm5hbWVzIjpbImZpbHRlclRhYmxlIiwiYWRkTWVzc2FnZSIsImFkZElucHV0SGlzdG9yeSIsIm1vdmVJbnB1dEhpc3RvcnkiLCJoaW50IiwidXBkYXRlRnVuYyIsInVwZGF0ZVJlc3VsdHMiLCJ1cGRhdGVEb2NFdmVudCIsInNldERvY3MiLCJzZXRDb2RlRWRpdCIsInVwZGF0ZUNvZGVFZGl0b3IiLCJhZGRDb21tYW5kQXJnIiwiYWRkRXhhbXBsZSIsInVwZGF0ZUNvbW1hbmQiLCJ1cGRhdGVDb21tYW5kQXJnIiwiZGVsZXRlQ29tbWFuZEFyZyIsImRlbGV0ZUNvbW1hbmRFeGFtcGxlIiwidXBkYXRlQ29tbWFuZEV4YW1wbGUiLCJzdG9yZUN1cnJlbnRJbnB1dCIsImhpZGVDb252ZXJzYXRpb24iLCJyZXNldENvbW1hbmQiLCJ0eXBlcyIsImZpbHRlciIsInR5cGUiLCJGSUxURVIiLCJtZXNzYWdlIiwiQUREX01FU1NBR0UiLCJBRERfSU5QVVRfSElTVE9SWSIsIk1PVkVfSU5QVVRfSElTVE9SWSIsIkhJTlQiLCJVUERBVEVfRlVOQyIsIlVQREFURV9SRVNVTFRTIiwiVVBEQVRFX0RPQ1MiLCJTRVRfRE9DUyIsIlNFVF9DT0RFX0VESVQiLCJuYW1lIiwidmFsdWUiLCJVUERBVEVfQ09ERV9FRElUT1IiLCJBRERfQ09NTUFORF9BUkciLCJBRERfQ09NTUFORF9FWEFNUExFIiwiY29tbWFuZCIsImlkIiwidmFsdWVzIiwiVVBEQVRFX0NPTU1BTkRfQVJHIiwiREVMRVRFX0NPTU1BTkRfQVJHIiwiREVMRVRFX0NPTU1BTkRfRVhBTVBMRSIsInRleHQiLCJVUERBVEVfQ09NTUFORF9FWEFNUExFIiwiaW5wdXQiLCJTVE9SRV9DVVJSRU5UX0lOUFVUIiwiY3VycmVudElucHV0IiwiSElERV9DT05WRVJTQVRJT04iLCJSRVNFVF9DT01NQU5EIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztRQUVn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RyxLQUFQO0FBSUg7O0FBRU0sU0FBU3pCLG9CQUFULENBQThCeUIsRUFBOUIsRUFBa0M7QUFDckMsV0FBTztBQUNIbEIsY0FBTUYsTUFBTXdCLHNCQURUO0FBRUhKO0FBRkcsS0FBUDtBQUlIOztBQUVNLFNBQVN4QixvQkFBVCxDQUE4QndCLEVBQTlCLEVBQWtDSyxJQUFsQyxFQUF3QztBQUMzQyxXQUFPO0FBQ0h2QixjQUFNRixNQUFNMEIsc0JBRFQ7QUFFSE4sY0FGRztBQUdISztBQUhHLEtBQVA7QUFLSDs7QUFFTSxTQUFTNUIsaUJBQVQsQ0FBMkI4QixLQUEzQixFQUFrQztBQUNyQyxXQUFPO0FBQ0h6QixjQUFNRixNQUFNNEIsbUJBRFQ7QUFFSEMsc0JBQWNGO0FBRlgsS0FBUDtBQUlIOztBQUVNLFNBQVM3QixnQkFBVCxDQUEwQnNCLEVBQTFCLEVBQThCO0FBQ2pDLFdBQU87QUFDSGxCLGNBQU1GLE1BQU04QixpQkFEVDtBQUVIVjtBQUZHLEtBQVA7QUFJSDs7QUFFTSxTQUFTckIsWUFBVCxHQUF3QjtBQUMzQixXQUFPO0FBQ0hHLGNBQU1GLE1BQU0rQjtBQURULEtBQVA7QUFHSCIsImZpbGUiOiI0OC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyVGFibGUoZmlsdGVyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuRklMVEVSLFxuICAgICAgICBmaWx0ZXJcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuQUREX01FU1NBR0UsXG4gICAgICAgIC4uLm1lc3NhZ2VcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSW5wdXRIaXN0b3J5KG1lc3NhZ2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5BRERfSU5QVVRfSElTVE9SWSxcbiAgICAgICAgLi4ubWVzc2FnZVxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb3ZlSW5wdXRIaXN0b3J5KG1lc3NhZ2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5NT1ZFX0lOUFVUX0hJU1RPUlksXG4gICAgICAgIC4uLm1lc3NhZ2VcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGludChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuSElOVCxcbiAgICAgICAgLi4ubWVzc2FnZVxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVGdW5jKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5VUERBVEVfRlVOQyxcbiAgICAgICAgLi4ubWVzc2FnZVxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVSZXN1bHRzKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5VUERBVEVfUkVTVUxUUyxcbiAgICAgICAgLi4ubWVzc2FnZVxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVEb2NFdmVudChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuVVBEQVRFX0RPQ1MsXG4gICAgICAgIC4uLm1lc3NhZ2VcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RG9jcyhtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuU0VUX0RPQ1MsXG4gICAgICAgIC4uLm1lc3NhZ2VcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29kZUVkaXQobWVzc2FnZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlNFVF9DT0RFX0VESVQsXG4gICAgICAgIC4uLm1lc3NhZ2VcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ29kZUVkaXRvcihuYW1lLCB2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlVQREFURV9DT0RFX0VESVRPUixcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBuYW1lOiBuYW1lXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENvbW1hbmRBcmcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuQUREX0NPTU1BTkRfQVJHLFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRFeGFtcGxlKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLkFERF9DT01NQU5EX0VYQU1QTEUsXG4gICAgfTtcbn1cblxuLy8gZGlzcGF0Y2goeyd0eXBlJzogJ1VQREFURV9DT01NQU5EJywgJ2NvbW1hbmQnOiBqc29uLmNvbW1hbmR9KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNvbW1hbmQoY29tbWFuZCl7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ1VQREFURV9DT01NQU5EJyxcbiAgICBjb21tYW5kOiBjb21tYW5kXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNvbW1hbmRBcmcoaWQsIHZhbHVlcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLlVQREFURV9DT01NQU5EX0FSRyxcbiAgICAgICAgaWQsXG4gICAgICAgIHZhbHVlczp2YWx1ZXNcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQ29tbWFuZEFyZyhpZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHR5cGVzLkRFTEVURV9DT01NQU5EX0FSRyxcbiAgICAgICAgaWQsXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUNvbW1hbmRFeGFtcGxlKGlkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuREVMRVRFX0NPTU1BTkRfRVhBTVBMRSxcbiAgICAgICAgaWQsXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNvbW1hbmRFeGFtcGxlKGlkLCB0ZXh0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuVVBEQVRFX0NPTU1BTkRfRVhBTVBMRSxcbiAgICAgICAgaWQsXG4gICAgICAgIHRleHQsXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlQ3VycmVudElucHV0KGlucHV0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuU1RPUkVfQ1VSUkVOVF9JTlBVVCxcbiAgICAgICAgY3VycmVudElucHV0OiBpbnB1dFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlQ29udmVyc2F0aW9uKGlkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdHlwZXMuSElERV9DT05WRVJTQVRJT04sXG4gICAgICAgIGlkXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0Q29tbWFuZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiB0eXBlcy5SRVNFVF9DT01NQU5ELFxuICAgIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvYWN0aW9ucy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})