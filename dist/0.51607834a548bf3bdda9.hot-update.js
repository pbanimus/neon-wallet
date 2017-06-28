webpackHotUpdate(0,{

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _reactRouterRedux = __webpack_require__(394);\n\nvar _redux = __webpack_require__(267);\n\nvar _types = __webpack_require__(274);\n\nvar types = _interopRequireWildcard(_types);\n\nvar _lodash = __webpack_require__(124);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar valueOrNull = function valueOrNull(value) {\n    if (value !== undefined) {\n        return value;\n    }\n    return null;\n};\n\nvar appendMessages = function appendMessages(oldMessages, action) {\n    // text, origin = 'user', type = null, arg = null) => {\n    var newMessages = [];\n    var currentMax = 0;\n    if (oldMessages.length > 0) {\n        console.log('map', _.map(oldMessages, function (m) {\n            return m.id;\n        }));\n        currentMax = _.max(_.map(oldMessages, function (m) {\n            return m.id;\n        }));\n    }\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n        for (var _iterator = action.text[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var m = _step.value;\n\n            currentMax++;\n            newMessages.push({ 'origin': action.origin, 'text': m, 'id': currentMax,\n                'state': valueOrNull(action.state), 'arg': valueOrNull(action.arg) });\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return) {\n                _iterator.return();\n            }\n        } finally {\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n\n    return oldMessages.concat(newMessages);\n};\n\nvar appendMessagesConvo = function appendMessagesConvo(convo, action) {\n    var messages = convo.messages;\n\n    return _extends({}, convo, { messages: appendMessages(messages, action), args: action.arg_map });\n};\n\nvar conversation = function conversation() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'history': [], 'currentConvo': { 'messages': [], 'title': null, 'hidden': false, 'id': 0, 'args': {} }, 'state': 'START' };\n    var action = arguments[1];\n    var history = state.history,\n        currentConvo = state.currentConvo;\n\n    var newConvo = void 0;\n    switch (action.type) {\n        case types.UPDATE_HISTORY:\n            console.log(action.conversation.currentConvo);\n            return { history: action.conversation.history, currentConvo: action.conversation.currentConvo, 'state': state.state };\n        case types.ADD_MESSAGE:\n            return { history: history, currentConvo: appendMessagesConvo(currentConvo, action), 'state': state.state };\n        case types.ADD_SERVER_MESSAGE:\n            if (action.text.length === 0) {\n                return state;\n            }\n            newConvo = appendMessagesConvo(currentConvo, action);\n            if (action.state === 'START') {\n                // hardcoding some logic here for syncing history with server on START\n                // this allows some commands to overwrite history immediately\n                var theId = action.history.length;\n                newConvo = _extends({}, newConvo, { title: action.label, id: theId });\n                return { history: action.history.concat([newConvo]), 'currentConvo': { 'messages': [], 'title': null, 'hidden': false, 'id': newConvo.id + 1, 'args': {} }, state: 'START' };\n            }\n            return { history: history, currentConvo: newConvo, state: action.state };\n        case types.HIDE_CONVERSATION:\n            var newHistory = _.map(history, function (conv) {\n                var out = _extends({}, conv);\n                if (conv.id === action.id) {\n                    out.hidden = !out.hidden;\n                }\n                return out;\n            });\n            newConvo = _extends({}, currentConvo);\n            if (newConvo.id === action.id) {\n                newConvo.hidden = !newConvo.hidden;\n            }\n            return { history: newHistory, currentConvo: newConvo, state: state.state };\n        default:\n            return state;\n    }\n};\n\nvar variables = function variables() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_VARIABLES:\n            return action.variables;\n        default:\n            return state;\n    }\n};\n\nvar predictions = function predictions() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_PREDICTIONS:\n            return action.predictions;\n        default:\n            return state;\n    }\n};\n\nvar docs = function docs() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { title: '', examples: [], description: [], source: '' };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_DOCS:\n            return action.doc;\n        default:\n            return state;\n    }\n};\n\nvar functionSearch = function functionSearch() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { search: '', results: [] };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_FUNC:\n            return _extends({}, state, { search: action.search });\n        case types.UPDATE_RESULTS:\n            return _extends({}, state, { results: action.results });\n        default:\n            return state;\n    }\n};\n\nvar currentInput = function currentInput() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'input': '' };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.STORE_CURRENT_INPUT:\n            return { 'input': action.currentInput };\n        default:\n            return state;\n    }\n};\n\nvar minimizeState = function minimizeState() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'docs': true, 'code_edit': true };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.SET_DOCS:\n            return _extends({}, state, { 'docs': action.docs });\n        case types.SET_CODE_EDIT:\n            return _extends({}, state, { 'code_edit': action.code_edit });\n        default:\n            return state;\n    }\n};\n\nvar removeIndex = function removeIndex(arr, i) {\n    var first_half = arr.concat([]).slice(0, i);\n    var second_half = arr.concat([]).slice(i + 1, arr.length);\n    return first_half.concat(second_half);\n};\n\nvar blankCommand = { name: '', title: '', args: [], examples: [], command: '', explanation: '', testInput: '', preview: '', error: '' };\n\nvar commandEditPane = function commandEditPane() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _extends({}, blankCommand);\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_CODE_EDITOR:\n            var new_state = {};\n            new_state[action.name] = action.value;\n            return _extends({}, state, new_state);\n        case types.UPDATE_COMMAND:\n            console.log(_extends({}, state, action.command));\n            return _extends({}, state, action.command);\n        case types.ADD_COMMAND_ARG:\n            return _extends({}, state, { args: state.args.concat([{ 'arg_name': '', 'arg_type': '', 'arg_string': '' }]) });\n        case types.RESET_COMMAND:\n            return _extends({}, blankCommand);\n        case types.ADD_COMMAND_EXAMPLE:\n            return _extends({}, state, { examples: state.examples.concat(['']) });\n        case types.UPDATE_COMMAND_EXAMPLE:\n            var newExamples = state.examples.concat([]);\n            newExamples[action.id] = action.text;\n            return _extends({}, state, { examples: newExamples });\n        case types.UPDATE_COMMAND_ARG:\n            var newArgs = state.args.concat([]);\n            newArgs[action.id] = action.values;\n            return _extends({}, state, { args: newArgs });\n        case types.DELETE_COMMAND_ARG:\n            return _extends({}, state, { args: removeIndex(state.args, action.id) });\n        case types.DELETE_COMMAND_EXAMPLE:\n            return _extends({}, state, { examples: removeIndex(state.examples, action.id) });\n        default:\n            return state;\n    }\n};\n\nvar inputHistory = function inputHistory() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'history': [], 'currId': null, 'showHistory': false };\n    var action = arguments[1];\n\n    var newId = void 0;\n    switch (action.type) {\n        case types.ADD_INPUT_HISTORY:\n            newId = state.currId;\n            if (state.history.length === 0 && newId === null) {\n                newId = 0;\n            }\n            return _extends({}, state, { 'history': [].concat(_toConsumableArray(state.history), [action.message]), 'currId': newId });\n        case types.MOVE_INPUT_HISTORY:\n            if (state.history.length === 0) {\n                return state;\n            }\n            newId = state.currId || 0;\n            if (action.direction === 'up') {\n                if (newId < state.history.length - 1) {\n                    newId += 1;\n                }\n            } else {\n                if (newId >= 1) {\n                    newId -= 1;\n                }\n            }\n            return _extends({}, state, { 'currId': newId });\n        default:\n            return state;\n    }\n};\n\nvar rootReducer = (0, _redux.combineReducers)({\n    conversation: conversation,\n    variables: variables,\n    predictions: predictions,\n    inputHistory: inputHistory,\n    currentInput: currentInput,\n    docs: docs,\n    functionSearch: functionSearch,\n    minimizeState: minimizeState,\n    commandEditPane: commandEditPane,\n    routing: _reactRouterRedux.routerReducer\n});\n\nexports.default = rootReducer;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcmVkdWNlcnMvaW5kZXguanM/ZTkxNiJdLCJuYW1lcyI6WyJ0eXBlcyIsIl8iLCJ2YWx1ZU9yTnVsbCIsInZhbHVlIiwidW5kZWZpbmVkIiwiYXBwZW5kTWVzc2FnZXMiLCJvbGRNZXNzYWdlcyIsImFjdGlvbiIsIm5ld01lc3NhZ2VzIiwiY3VycmVudE1heCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJtIiwiaWQiLCJtYXgiLCJ0ZXh0IiwicHVzaCIsIm9yaWdpbiIsInN0YXRlIiwiYXJnIiwiY29uY2F0IiwiYXBwZW5kTWVzc2FnZXNDb252byIsImNvbnZvIiwibWVzc2FnZXMiLCJhcmdzIiwiYXJnX21hcCIsImNvbnZlcnNhdGlvbiIsImhpc3RvcnkiLCJjdXJyZW50Q29udm8iLCJuZXdDb252byIsInR5cGUiLCJVUERBVEVfSElTVE9SWSIsIkFERF9NRVNTQUdFIiwiQUREX1NFUlZFUl9NRVNTQUdFIiwidGhlSWQiLCJ0aXRsZSIsImxhYmVsIiwiSElERV9DT05WRVJTQVRJT04iLCJuZXdIaXN0b3J5Iiwib3V0IiwiY29udiIsImhpZGRlbiIsInZhcmlhYmxlcyIsIlVQREFURV9WQVJJQUJMRVMiLCJwcmVkaWN0aW9ucyIsIlVQREFURV9QUkVESUNUSU9OUyIsImRvY3MiLCJleGFtcGxlcyIsImRlc2NyaXB0aW9uIiwic291cmNlIiwiVVBEQVRFX0RPQ1MiLCJkb2MiLCJmdW5jdGlvblNlYXJjaCIsInNlYXJjaCIsInJlc3VsdHMiLCJVUERBVEVfRlVOQyIsIlVQREFURV9SRVNVTFRTIiwiY3VycmVudElucHV0IiwiU1RPUkVfQ1VSUkVOVF9JTlBVVCIsIm1pbmltaXplU3RhdGUiLCJTRVRfRE9DUyIsIlNFVF9DT0RFX0VESVQiLCJjb2RlX2VkaXQiLCJyZW1vdmVJbmRleCIsImFyciIsImkiLCJmaXJzdF9oYWxmIiwic2xpY2UiLCJzZWNvbmRfaGFsZiIsImJsYW5rQ29tbWFuZCIsIm5hbWUiLCJjb21tYW5kIiwiZXhwbGFuYXRpb24iLCJ0ZXN0SW5wdXQiLCJwcmV2aWV3IiwiZXJyb3IiLCJjb21tYW5kRWRpdFBhbmUiLCJVUERBVEVfQ09ERV9FRElUT1IiLCJuZXdfc3RhdGUiLCJVUERBVEVfQ09NTUFORCIsIkFERF9DT01NQU5EX0FSRyIsIlJFU0VUX0NPTU1BTkQiLCJBRERfQ09NTUFORF9FWEFNUExFIiwiVVBEQVRFX0NPTU1BTkRfRVhBTVBMRSIsIm5ld0V4YW1wbGVzIiwiVVBEQVRFX0NPTU1BTkRfQVJHIiwibmV3QXJncyIsInZhbHVlcyIsIkRFTEVURV9DT01NQU5EX0FSRyIsIkRFTEVURV9DT01NQU5EX0VYQU1QTEUiLCJpbnB1dEhpc3RvcnkiLCJuZXdJZCIsIkFERF9JTlBVVF9ISVNUT1JZIiwiY3VycklkIiwibWVzc2FnZSIsIk1PVkVfSU5QVVRfSElTVE9SWSIsImRpcmVjdGlvbiIsInJvb3RSZWR1Y2VyIiwicm91dGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7SUFBWUEsSzs7QUFDWjs7SUFBWUMsQzs7Ozs7O0FBRVosSUFBTUMsY0FBYyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUMzQixRQUFJQSxVQUFVQyxTQUFkLEVBQXlCO0FBQ3JCLGVBQU9ELEtBQVA7QUFDSDtBQUNELFdBQU8sSUFBUDtBQUNILENBTEQ7O0FBT0EsSUFBTUUsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxXQUFELEVBQWNDLE1BQWQsRUFBeUI7QUFBRTtBQUM5QyxRQUFNQyxjQUFjLEVBQXBCO0FBQ0EsUUFBSUMsYUFBYSxDQUFqQjtBQUNBLFFBQUlILFlBQVlJLE1BQVosR0FBcUIsQ0FBekIsRUFBNEI7QUFDeEJDLGdCQUFRQyxHQUFSLENBQVksS0FBWixFQUFtQlgsRUFBRVksR0FBRixDQUFNUCxXQUFOLEVBQW1CLFVBQVNRLENBQVQsRUFBWTtBQUFFLG1CQUFPQSxFQUFFQyxFQUFUO0FBQWMsU0FBL0MsQ0FBbkI7QUFDQU4scUJBQWFSLEVBQUVlLEdBQUYsQ0FB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RUFBd0M7QUFDcENtRiw2QkFBUyxDQUFUO0FBQ0g7QUFDSixhQUpELE1BSU87QUFDSCxvQkFBSUEsU0FBUyxDQUFiLEVBQWdCO0FBQ1pBLDZCQUFTLENBQVQ7QUFDSDtBQUNKO0FBQ0QsZ0NBQVd6RSxLQUFYLElBQWtCLFVBQVV5RSxLQUE1QjtBQUNKO0FBQ0ksbUJBQU96RSxLQUFQO0FBdkJSO0FBeUJILENBM0JEOztBQTZCQSxJQUFNK0UsY0FBYyw0QkFBZ0I7QUFDaEN2RSw4QkFEZ0M7QUFFaENnQix3QkFGZ0M7QUFHaENFLDRCQUhnQztBQUloQzhDLDhCQUpnQztBQUtoQ2pDLDhCQUxnQztBQU1oQ1gsY0FOZ0M7QUFPaENNLGtDQVBnQztBQVFoQ08sZ0NBUmdDO0FBU2hDaUIsb0NBVGdDO0FBVWhDc0I7QUFWZ0MsQ0FBaEIsQ0FBcEI7O2tCQWFlRCxXIiwiZmlsZSI6IjQ1Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJvdXRlclJlZHVjZXIgYXMgcm91dGluZyB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgdmFsdWVPck51bGwgPSAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcblxuY29uc3QgYXBwZW5kTWVzc2FnZXMgPSAob2xkTWVzc2FnZXMsIGFjdGlvbikgPT4geyAvLyB0ZXh0LCBvcmlnaW4gPSAndXNlcicsIHR5cGUgPSBudWxsLCBhcmcgPSBudWxsKSA9PiB7XG4gICAgY29uc3QgbmV3TWVzc2FnZXMgPSBbXTtcbiAgICBsZXQgY3VycmVudE1heCA9IDA7XG4gICAgaWYgKG9sZE1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21hcCcsIF8ubWFwKG9sZE1lc3NhZ2VzLCBmdW5jdGlvbihtKSB7IHJldHVybiBtLmlkOyB9KSk7XG4gICAgICAgIGN1cnJlbnRNYXggPSBfLm1heChfLm1hcChvbGRNZXNzYWdlcywgZnVuY3Rpb24obSkgeyByZXR1cm4gbS5pZDsgfSkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG0gb2YgYWN0aW9uLnRleHQpIHtcbiAgICAgICAgY3VycmVudE1heCsrO1xuICAgICAgICBuZXdNZXNzYWdlcy5wdXNoKHsnb3JpZ2luJzogYWN0aW9uLm9yaWdpbiwgJ3RleHQnOiBtLCAnaWQnOiBjdXJyZW50TWF4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RhdGUnOiB2YWx1ZU9yTnVsbChhY3Rpb24uc3RhdGUpLCAnYXJnJzogdmFsdWVPck51bGwoYWN0aW9uLmFyZyl9KTtcbiAgICB9XG4gICAgcmV0dXJuIG9sZE1lc3NhZ2VzLmNvbmNhdChuZXdNZXNzYWdlcyk7XG59O1xuXG5jb25zdCBhcHBlbmRNZXNzYWdlc0NvbnZvID0gKGNvbnZvLCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSBjb252bztcbiAgICByZXR1cm4geyAuLi5jb252bywgbWVzc2FnZXM6IGFwcGVuZE1lc3NhZ2VzKG1lc3NhZ2VzLCBhY3Rpb24pLCBhcmdzOiBhY3Rpb24uYXJnX21hcCB9O1xufTtcblxuY29uc3QgY29udmVyc2F0aW9uID0gKHN0YXRlID0geydoaXN0b3J5JzogW10sICdjdXJyZW50Q29udm8nOiB7ICdtZXNzYWdlcyc6IFtdLCAndGl0bGUnOiBudWxsLCAnaGlkZGVuJzogZmFsc2UsICdpZCc6IDAsICdhcmdzJzoge30gfSwgJ3N0YXRlJzogJ1NUQVJUJ30sIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IHsgaGlzdG9yeSwgY3VycmVudENvbnZvIH0gPSBzdGF0ZTtcbiAgICBsZXQgbmV3Q29udm87XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLlVQREFURV9ISVNUT1JZOlxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmNvbnZlcnNhdGlvbi5jdXJyZW50Q29udm8pO1xuICAgICAgICAgICAgcmV0dXJuIHsgaGlzdG9yeTogYWN0aW9uLmNvbnZlcnNhdGlvbi5oaXN0b3J5LCBjdXJyZW50Q29udm86IGFjdGlvbi5jb252ZXJzYXRpb24uY3VycmVudENvbnZvLCAnc3RhdGUnOiBzdGF0ZS5zdGF0ZSB9O1xuICAgICAgICBjYXNlIHR5cGVzLkFERF9NRVNTQUdFOlxuICAgICAgICAgICAgcmV0dXJuIHsgaGlzdG9yeSwgY3VycmVudENvbnZvOiBhcHBlbmRNZXNzYWdlc0NvbnZvKGN1cnJlbnRDb252bywgYWN0aW9uKSwgJ3N0YXRlJzogc3RhdGUuc3RhdGUgfTtcbiAgICAgICAgY2FzZSB0eXBlcy5BRERfU0VSVkVSX01FU1NBR0U6XG4gICAgICAgICAgICBpZiAoYWN0aW9uLnRleHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3Q29udm8gPSBhcHBlbmRNZXNzYWdlc0NvbnZvKGN1cnJlbnRDb252bywgYWN0aW9uKTtcbiAgICAgICAgICAgIGlmIChhY3Rpb24uc3RhdGUgPT09ICdTVEFSVCcpIHtcbiAgICAgICAgICAgICAgICAvLyBoYXJkY29kaW5nIHNvbWUgbG9naWMgaGVyZSBmb3Igc3luY2luZyBoaXN0b3J5IHdpdGggc2VydmVyIG9uIFNUQVJUXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBhbGxvd3Mgc29tZSBjb21tYW5kcyB0byBvdmVyd3JpdGUgaGlzdG9yeSBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICAgIGxldCB0aGVJZCA9IGFjdGlvbi5oaXN0b3J5Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICBuZXdDb252byA9IHsuLi5uZXdDb252bywgdGl0bGU6IGFjdGlvbi5sYWJlbCwgaWQ6IHRoZUlkIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaGlzdG9yeTogYWN0aW9uLmhpc3RvcnkuY29uY2F0KFtuZXdDb252b10pLCAnY3VycmVudENvbnZvJzogeyAnbWVzc2FnZXMnOiBbXSwgJ3RpdGxlJzogbnVsbCwgJ2hpZGRlbic6IGZhbHNlLCAnaWQnOiBuZXdDb252by5pZCArIDEsICdhcmdzJzoge30gfSwgc3RhdGU6ICdTVEFSVCcgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IGhpc3RvcnksIGN1cnJlbnRDb252bzogbmV3Q29udm8sIHN0YXRlOiBhY3Rpb24uc3RhdGUgfTtcbiAgICAgICAgY2FzZSB0eXBlcy5ISURFX0NPTlZFUlNBVElPTjpcbiAgICAgICAgICAgIGNvbnN0IG5ld0hpc3RvcnkgPSBfLm1hcChoaXN0b3J5LCBjb252ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvdXQgPSB7Li4uY29udn07XG4gICAgICAgICAgICAgICAgaWYgKGNvbnYuaWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICAgICAgICAgICAgICBvdXQuaGlkZGVuID0gIW91dC5oaWRkZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5ld0NvbnZvID0gey4uLmN1cnJlbnRDb252b307XG4gICAgICAgICAgICBpZiAobmV3Q29udm8uaWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICAgICAgICAgIG5ld0NvbnZvLmhpZGRlbiA9ICFuZXdDb252by5oaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBoaXN0b3J5OiBuZXdIaXN0b3J5LCBjdXJyZW50Q29udm86IG5ld0NvbnZvLCBzdGF0ZTogc3RhdGUuc3RhdGV9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmNvbnN0IHZhcmlhYmxlcyA9IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgdHlwZXMuVVBEQVRFX1ZBUklBQkxFUzpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24udmFyaWFibGVzO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmNvbnN0IHByZWRpY3Rpb25zID0gKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSB0eXBlcy5VUERBVEVfUFJFRElDVElPTlM6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnByZWRpY3Rpb25zO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmNvbnN0IGRvY3MgPSAoc3RhdGUgPSB7dGl0bGU6ICcnLCBleGFtcGxlczogW10sIGRlc2NyaXB0aW9uOiBbXSwgc291cmNlOicnfSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLlVQREFURV9ET0NTOlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5kb2M7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuY29uc3QgZnVuY3Rpb25TZWFyY2ggPSAoc3RhdGUgPSB7c2VhcmNoOiAnJywgcmVzdWx0czogW119LCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSl7XG4gICAgY2FzZSB0eXBlcy5VUERBVEVfRlVOQzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNlYXJjaDogYWN0aW9uLnNlYXJjaH07XG4gICAgY2FzZSB0eXBlcy5VUERBVEVfUkVTVUxUUzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIHJlc3VsdHM6IGFjdGlvbi5yZXN1bHRzfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCBjdXJyZW50SW5wdXQgPSAoc3RhdGUgPSB7J2lucHV0JzogJyd9LCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSl7XG4gICAgY2FzZSB0eXBlcy5TVE9SRV9DVVJSRU5UX0lOUFVUOlxuICAgICAgcmV0dXJuIHsnaW5wdXQnOiBhY3Rpb24uY3VycmVudElucHV0fTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCBtaW5pbWl6ZVN0YXRlID0gKHN0YXRlPXsnZG9jcyc6IHRydWUsICdjb2RlX2VkaXQnOnRydWV9LCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSl7XG4gICAgY2FzZSB0eXBlcy5TRVRfRE9DUzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsICdkb2NzJzogYWN0aW9uLmRvY3N9O1xuICAgIGNhc2UgdHlwZXMuU0VUX0NPREVfRURJVDpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsICdjb2RlX2VkaXQnOiBhY3Rpb24uY29kZV9lZGl0fTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCByZW1vdmVJbmRleCA9IChhcnIsIGkpID0+IHtcbiAgbGV0IGZpcnN0X2hhbGYgPSBhcnIuY29uY2F0KFtdKS5zbGljZSgwLCBpKTtcbiAgbGV0IHNlY29uZF9oYWxmID0gYXJyLmNvbmNhdChbXSkuc2xpY2UoaSsxLGFyci5sZW5ndGgpO1xuICByZXR1cm4gZmlyc3RfaGFsZi5jb25jYXQoc2Vjb25kX2hhbGYpO1xufVxuXG5jb25zdCBibGFua0NvbW1hbmQgPSB7bmFtZTogJycsIHRpdGxlOiAnJywgYXJnczogW10sIGV4YW1wbGVzOiBbXSwgY29tbWFuZDogJycsIGV4cGxhbmF0aW9uOiAnJywgdGVzdElucHV0OiAnJywgcHJldmlldzonJywgZXJyb3I6ICcnfTtcblxuY29uc3QgY29tbWFuZEVkaXRQYW5lID0gKHN0YXRlPXsuLi5ibGFua0NvbW1hbmR9LCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSl7XG4gICAgY2FzZSB0eXBlcy5VUERBVEVfQ09ERV9FRElUT1I6XG4gICAgICBsZXQgbmV3X3N0YXRlID0ge307XG4gICAgICBuZXdfc3RhdGVbYWN0aW9uLm5hbWVdID0gYWN0aW9uLnZhbHVlO1xuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgLi4ubmV3X3N0YXRlfTtcbiAgICBjYXNlIHR5cGVzLlVQREFURV9DT01NQU5EOlxuICAgICAgY29uc29sZS5sb2coey4uLnN0YXRlLCAuLi5hY3Rpb24uY29tbWFuZH0pO1xuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgLi4uYWN0aW9uLmNvbW1hbmR9O1xuICAgIGNhc2UgdHlwZXMuQUREX0NPTU1BTkRfQVJHOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgYXJnczogc3RhdGUuYXJncy5jb25jYXQoW3snYXJnX25hbWUnOiAnJywgJ2FyZ190eXBlJzogJycsICdhcmdfc3RyaW5nJzogJyd9XSl9O1xuICAgIGNhc2UgdHlwZXMuUkVTRVRfQ09NTUFORDpcbiAgICAgIHJldHVybiB7Li4uYmxhbmtDb21tYW5kfTtcbiAgICBjYXNlIHR5cGVzLkFERF9DT01NQU5EX0VYQU1QTEU6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBleGFtcGxlczogc3RhdGUuZXhhbXBsZXMuY29uY2F0KFsnJ10pfTtcbiAgICBjYXNlIHR5cGVzLlVQREFURV9DT01NQU5EX0VYQU1QTEU6XG4gICAgICBsZXQgbmV3RXhhbXBsZXMgPSBzdGF0ZS5leGFtcGxlcy5jb25jYXQoW10pO1xuICAgICAgbmV3RXhhbXBsZXNbYWN0aW9uLmlkXSA9IGFjdGlvbi50ZXh0O1xuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhhbXBsZXM6IG5ld0V4YW1wbGVzfTtcbiAgICBjYXNlIHR5cGVzLlVQREFURV9DT01NQU5EX0FSRzpcbiAgICAgIGxldCBuZXdBcmdzID0gc3RhdGUuYXJncy5jb25jYXQoW10pO1xuICAgICAgbmV3QXJnc1thY3Rpb24uaWRdID0gYWN0aW9uLnZhbHVlcztcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGFyZ3M6IG5ld0FyZ3N9O1xuICAgIGNhc2UgdHlwZXMuREVMRVRFX0NPTU1BTkRfQVJHOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgYXJnczogcmVtb3ZlSW5kZXgoc3RhdGUuYXJncywgYWN0aW9uLmlkKX07XG4gICAgY2FzZSB0eXBlcy5ERUxFVEVfQ09NTUFORF9FWEFNUExFOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhhbXBsZXM6IHJlbW92ZUluZGV4KHN0YXRlLmV4YW1wbGVzLCBhY3Rpb24uaWQpfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCBpbnB1dEhpc3RvcnkgPSAoc3RhdGUgPSB7J2hpc3RvcnknOiBbXSwgJ2N1cnJJZCc6IG51bGwsICdzaG93SGlzdG9yeSc6IGZhbHNlIH0sIGFjdGlvbikgPT4ge1xuICAgIGxldCBuZXdJZDtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgdHlwZXMuQUREX0lOUFVUX0hJU1RPUlk6XG4gICAgICAgICAgICBuZXdJZCA9IHN0YXRlLmN1cnJJZDtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5oaXN0b3J5Lmxlbmd0aCA9PT0gMCAmJiBuZXdJZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG5ld0lkID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsICdoaXN0b3J5JzogWy4uLnN0YXRlLmhpc3RvcnksIGFjdGlvbi5tZXNzYWdlXSwgJ2N1cnJJZCc6IG5ld0lkfTtcbiAgICAgICAgY2FzZSB0eXBlcy5NT1ZFX0lOUFVUX0hJU1RPUlk6XG4gICAgICAgICAgICBpZiAoc3RhdGUuaGlzdG9yeS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdJZCA9IHN0YXRlLmN1cnJJZCB8fCAwO1xuICAgICAgICAgICAgaWYgKGFjdGlvbi5kaXJlY3Rpb24gPT09ICd1cCcpIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3SWQgPCAoc3RhdGUuaGlzdG9yeS5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdJZCArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0lkID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3SWQgLT0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCAnY3VycklkJzogbmV3SWQgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgY29udmVyc2F0aW9uLFxuICAgIHZhcmlhYmxlcyxcbiAgICBwcmVkaWN0aW9ucyxcbiAgICBpbnB1dEhpc3RvcnksXG4gICAgY3VycmVudElucHV0LFxuICAgIGRvY3MsXG4gICAgZnVuY3Rpb25TZWFyY2gsXG4gICAgbWluaW1pemVTdGF0ZSxcbiAgICBjb21tYW5kRWRpdFBhbmUsXG4gICAgcm91dGluZ1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3JlZHVjZXJzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})