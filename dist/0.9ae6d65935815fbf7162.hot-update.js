webpackHotUpdate(0,{

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _reactRouterRedux = __webpack_require__(380);\n\nvar _redux = __webpack_require__(260);\n\nvar _types = __webpack_require__(266);\n\nvar types = _interopRequireWildcard(_types);\n\nvar _lodash = __webpack_require__(155);\n\nvar _ = _interopRequireWildcard(_lodash);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar valueOrNull = function valueOrNull(value) {\n    if (value !== undefined) {\n        return value;\n    }\n    return null;\n};\n\nvar appendMessages = function appendMessages(oldMessages, action) {\n    // text, origin = 'user', type = null, arg = null) => {\n    var newMessages = [];\n    var currentMax = 0;\n    if (oldMessages.length > 0) {\n        console.log('map', _.map(oldMessages, function (m) {\n            return m.id;\n        }));\n        currentMax = _.max(_.map(oldMessages, function (m) {\n            return m.id;\n        }));\n    }\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n        for (var _iterator = action.text[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var m = _step.value;\n\n            currentMax++;\n            newMessages.push({ 'origin': action.origin, 'text': m, 'id': currentMax,\n                'state': valueOrNull(action.state), 'arg': valueOrNull(action.arg) });\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return) {\n                _iterator.return();\n            }\n        } finally {\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n\n    return oldMessages.concat(newMessages);\n};\n\nvar appendMessagesConvo = function appendMessagesConvo(convo, action) {\n    var messages = convo.messages;\n\n    return _extends({}, convo, { messages: appendMessages(messages, action), args: action.arg_map });\n};\n\nvar conversation = function conversation() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'history': [], 'currentConvo': { 'messages': [], 'title': null, 'hidden': false, 'id': 0, 'args': {} }, 'state': 'START' };\n    var action = arguments[1];\n    var history = state.history,\n        currentConvo = state.currentConvo;\n\n    var newConvo = void 0;\n    switch (action.type) {\n        case types.UPDATE_HISTORY:\n            console.log(action.conversation.currentConvo);\n            return { history: action.conversation.history, currentConvo: action.conversation.currentConvo, 'state': state.state };\n        case types.ADD_MESSAGE:\n            return { history: history, currentConvo: appendMessagesConvo(currentConvo, action), 'state': state.state };\n        case types.ADD_SERVER_MESSAGE:\n            if (action.text.length === 0) {\n                return state;\n            }\n            newConvo = appendMessagesConvo(currentConvo, action);\n            if (action.state === 'START') {\n                // hardcoding some logic here for syncing history with server on START\n                // this allows some commands to overwrite history immediately\n                var theId = action.history.length;\n                newConvo = _extends({}, newConvo, { title: action.label, id: theId });\n                return { history: action.history.concat([newConvo]), 'currentConvo': { 'messages': [], 'title': null, 'hidden': false, 'id': newConvo.id + 1, 'args': {} }, state: 'START' };\n            }\n            return { history: history, currentConvo: newConvo, state: action.state };\n        case types.HIDE_CONVERSATION:\n            var newHistory = _.map(history, function (conv) {\n                var out = _extends({}, conv);\n                if (conv.id === action.id) {\n                    out.hidden = !out.hidden;\n                }\n                return out;\n            });\n            newConvo = _extends({}, currentConvo);\n            if (newConvo.id === action.id) {\n                newConvo.hidden = !newConvo.hidden;\n            }\n            return { history: newHistory, currentConvo: newConvo, state: state.state };\n        default:\n            return state;\n    }\n};\n\nvar variables = function variables() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_VARIABLES:\n            return action.variables;\n        default:\n            return state;\n    }\n};\n\nvar predictions = function predictions() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_PREDICTIONS:\n            return action.predictions;\n        default:\n            return state;\n    }\n};\n\nvar docs = function docs() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { title: '', examples: [], description: [], source: '' };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_DOCS:\n            return action.doc;\n        default:\n            return state;\n    }\n};\n\nvar functionSearch = function functionSearch() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { search: '', results: [] };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.UPDATE_FUNC:\n            return _extends({}, state, { search: action.search });\n        case types.UPDATE_RESULTS:\n            return _extends({}, state, { results: action.results });\n        default:\n            return state;\n    }\n};\n\nvar currentInput = function currentInput() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'input': '' };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.STORE_CURRENT_INPUT:\n            return { 'input': action.currentInput };\n        default:\n            return state;\n    }\n};\n\nvar minimizeState = function minimizeState() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'docs': false };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.TOGGLE_DOCS:\n            return _extends({}, state, { 'docs': !state.docs });\n        default:\n            return state;\n    }\n};\n\nvar inputHistory = function inputHistory() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { 'history': [], 'currId': null, 'showHistory': false };\n    var action = arguments[1];\n\n    var newId = void 0;\n    switch (action.type) {\n        case types.ADD_INPUT_HISTORY:\n            newId = state.currId;\n            if (state.history.length === 0 && newId === null) {\n                newId = 0;\n            }\n            return _extends({}, state, { 'history': [].concat(_toConsumableArray(state.history), [action.message]), 'currId': newId });\n        case types.MOVE_INPUT_HISTORY:\n            if (state.history.length === 0) {\n                return state;\n            }\n            newId = state.currId || 0;\n            if (action.direction === 'up') {\n                if (newId < state.history.length - 1) {\n                    newId += 1;\n                }\n            } else {\n                if (newId >= 1) {\n                    newId -= 1;\n                }\n            }\n            return _extends({}, state, { 'currId': newId });\n        default:\n            return state;\n    }\n};\n\nvar rootReducer = (0, _redux.combineReducers)({\n    conversation: conversation,\n    variables: variables,\n    predictions: predictions,\n    inputHistory: inputHistory,\n    currentInput: currentInput,\n    docs: docs,\n    functionSearch: functionSearch,\n    routing: _reactRouterRedux.routerReducer\n});\n\nexports.default = rootReducer;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcmVkdWNlcnMvaW5kZXguanM/ZTkxNiJdLCJuYW1lcyI6WyJ0eXBlcyIsIl8iLCJ2YWx1ZU9yTnVsbCIsInZhbHVlIiwidW5kZWZpbmVkIiwiYXBwZW5kTWVzc2FnZXMiLCJvbGRNZXNzYWdlcyIsImFjdGlvbiIsIm5ld01lc3NhZ2VzIiwiY3VycmVudE1heCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJtIiwiaWQiLCJtYXgiLCJ0ZXh0IiwicHVzaCIsIm9yaWdpbiIsInN0YXRlIiwiYXJnIiwiY29uY2F0IiwiYXBwZW5kTWVzc2FnZXNDb252byIsImNvbnZvIiwibWVzc2FnZXMiLCJhcmdzIiwiYXJnX21hcCIsImNvbnZlcnNhdGlvbiIsImhpc3RvcnkiLCJjdXJyZW50Q29udm8iLCJuZXdDb252byIsInR5cGUiLCJVUERBVEVfSElTVE9SWSIsIkFERF9NRVNTQUdFIiwiQUREX1NFUlZFUl9NRVNTQUdFIiwidGhlSWQiLCJ0aXRsZSIsImxhYmVsIiwiSElERV9DT05WRVJTQVRJT04iLCJuZXdIaXN0b3J5Iiwib3V0IiwiY29udiIsImhpZGRlbiIsInZhcmlhYmxlcyIsIlVQREFURV9WQVJJQUJMRVMiLCJwcmVkaWN0aW9ucyIsIlVQREFURV9QUkVESUNUSU9OUyIsImRvY3MiLCJleGFtcGxlcyIsImRlc2NyaXB0aW9uIiwic291cmNlIiwiVVBEQVRFX0RPQ1MiLCJkb2MiLCJmdW5jdGlvblNlYXJjaCIsInNlYXJjaCIsInJlc3VsdHMiLCJVUERBVEVfRlVOQyIsIlVQREFURV9SRVNVTFRTIiwiY3VycmVudElucHV0IiwiU1RPUkVfQ1VSUkVOVF9JTlBVVCIsIm1pbmltaXplU3RhdGUiLCJUT0dHTEVfRE9DUyIsImlucHV0SGlzdG9yeSIsIm5ld0lkIiwiQUREX0lOUFVUX0hJU1RPUlkiLCJjdXJySWQiLCJtZXNzYWdlIiwiTU9WRV9JTlBVVF9ISVNUT1JZIiwiZGlyZWN0aW9uIiwicm9vdFJlZHVjZXIiLCJy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cm91dGluZyB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgdmFsdWVPck51bGwgPSAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcblxuY29uc3QgYXBwZW5kTWVzc2FnZXMgPSAob2xkTWVzc2FnZXMsIGFjdGlvbikgPT4geyAvLyB0ZXh0LCBvcmlnaW4gPSAndXNlcicsIHR5cGUgPSBudWxsLCBhcmcgPSBudWxsKSA9PiB7XG4gICAgY29uc3QgbmV3TWVzc2FnZXMgPSBbXTtcbiAgICBsZXQgY3VycmVudE1heCA9IDA7XG4gICAgaWYgKG9sZE1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21hcCcsIF8ubWFwKG9sZE1lc3NhZ2VzLCBmdW5jdGlvbihtKSB7IHJldHVybiBtLmlkOyB9KSk7XG4gICAgICAgIGN1cnJlbnRNYXggPSBfLm1heChfLm1hcChvbGRNZXNzYWdlcywgZnVuY3Rpb24obSkgeyByZXR1cm4gbS5pZDsgfSkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG0gb2YgYWN0aW9uLnRleHQpIHtcbiAgICAgICAgY3VycmVudE1heCsrO1xuICAgICAgICBuZXdNZXNzYWdlcy5wdXNoKHsnb3JpZ2luJzogYWN0aW9uLm9yaWdpbiwgJ3RleHQnOiBtLCAnaWQnOiBjdXJyZW50TWF4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RhdGUnOiB2YWx1ZU9yTnVsbChhY3Rpb24uc3RhdGUpLCAnYXJnJzogdmFsdWVPck51bGwoYWN0aW9uLmFyZyl9KTtcbiAgICB9XG4gICAgcmV0dXJuIG9sZE1lc3NhZ2VzLmNvbmNhdChuZXdNZXNzYWdlcyk7XG59O1xuXG5jb25zdCBhcHBlbmRNZXNzYWdlc0NvbnZvID0gKGNvbnZvLCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSBjb252bztcbiAgICByZXR1cm4geyAuLi5jb252bywgbWVzc2FnZXM6IGFwcGVuZE1lc3NhZ2VzKG1lc3NhZ2VzLCBhY3Rpb24pLCBhcmdzOiBhY3Rpb24uYXJnX21hcCB9O1xufTtcblxuY29uc3QgY29udmVyc2F0aW9uID0gKHN0YXRlID0geydoaXN0b3J5JzogW10sICdjdXJyZW50Q29udm8nOiB7ICdtZXNzYWdlcyc6IFtdLCAndGl0bGUnOiBudWxsLCAnaGlkZGVuJzogZmFsc2UsICdpZCc6IDAsICdhcmdzJzoge30gfSwgJ3N0YXRlJzogJ1NUQVJUJ30sIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IHsgaGlzdG9yeSwgY3VycmVudENvbnZvIH0gPSBzdGF0ZTtcbiAgICBsZXQgbmV3Q29udm87XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLlVQREFURV9ISVNUT1JZOlxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmNvbnZlcnNhdGlvbi5jdXJyZW50Q29udm8pO1xuICAgICAgICAgICAgcmV0dXJuIHsgaGlzdG9yeTogYWN0aW9uLmNvbnZlcnNhdGlvbi5oaXN0b3J5LCBjdXJyZW50Q29udm86IGFjdGlvbi5jb252ZXJzYXRpb24uY3VycmVudENvbnZvLCAnc3RhdGUnOiBzdGF0ZS5zdGF0ZSB9O1xuICAgICAgICBjYXNlIHR5cGVzLkFERF9NRVNTQUdFOlxuICAgICAgICAgICAgcmV0dXJuIHsgaGlzdG9yeSwgY3VycmVudENvbnZvOiBhcHBlbmRNZXNzYWdlc0NvbnZvKGN1cnJlbnRDb252bywgYWN0aW9uKSwgJ3N0YXRlJzogc3RhdGUuc3RhdGUgfTtcbiAgICAgICAgY2FzZSB0eXBlcy5BRERfU0VSVkVSX01FU1NBR0U6XG4gICAgICAgICAgICBpZiAoYWN0aW9uLnRleHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3Q29udm8gPSBhcHBlbmRNZXNzYWdlc0NvbnZvKGN1cnJlbnRDb252bywgYWN0aW9uKTtcbiAgICAgICAgICAgIGlmIChhY3Rpb24uc3RhdGUgPT09ICdTVEFSVCcpIHtcbiAgICAgICAgICAgICAgICAvLyBoYXJkY29kaW5nIHNvbWUgbG9naWMgaGVyZSBmb3Igc3luY2luZyBoaXN0b3J5IHdpdGggc2VydmVyIG9uIFNUQVJUXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBhbGxvd3Mgc29tZSBjb21tYW5kcyB0byBvdmVyd3JpdGUgaGlzdG9yeSBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICAgIGxldCB0aGVJZCA9IGFjdGlvbi5oaXN0b3J5Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICBuZXdDb252byA9IHsuLi5uZXdDb252bywgdGl0bGU6IGFjdGlvbi5sYWJlbCwgaWQ6IHRoZUlkIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaGlzdG9yeTogYWN0aW9uLmhpc3RvcnkuY29uY2F0KFtuZXdDb252b10pLCAnY3VycmVudENvbnZvJzogeyAnbWVzc2FnZXMnOiBbXSwgJ3RpdGxlJzogbnVsbCwgJ2hpZGRlbic6IGZhbHNlLCAnaWQnOiBuZXdDb252by5pZCArIDEsICdhcmdzJzoge30gfSwgc3RhdGU6ICdTVEFSVCcgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IGhpc3RvcnksIGN1cnJlbnRDb252bzogbmV3Q29udm8sIHN0YXRlOiBhY3Rpb24uc3RhdGUgfTtcbiAgICAgICAgY2FzZSB0eXBlcy5ISURFX0NPTlZFUlNBVElPTjpcbiAgICAgICAgICAgIGNvbnN0IG5ld0hpc3RvcnkgPSBfLm1hcChoaXN0b3J5LCBjb252ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvdXQgPSB7Li4uY29udn07XG4gICAgICAgICAgICAgICAgaWYgKGNvbnYuaWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICAgICAgICAgICAgICBvdXQuaGlkZGVuID0gIW91dC5oaWRkZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5ld0NvbnZvID0gey4uLmN1cnJlbnRDb252b307XG4gICAgICAgICAgICBpZiAobmV3Q29udm8uaWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICAgICAgICAgIG5ld0NvbnZvLmhpZGRlbiA9ICFuZXdDb252by5oaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBoaXN0b3J5OiBuZXdIaXN0b3J5LCBjdXJyZW50Q29udm86IG5ld0NvbnZvLCBzdGF0ZTogc3RhdGUuc3RhdGV9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmNvbnN0IHZhcmlhYmxlcyA9IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgdHlwZXMuVVBEQVRFX1ZBUklBQkxFUzpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24udmFyaWFibGVzO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmNvbnN0IHByZWRpY3Rpb25zID0gKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSB0eXBlcy5VUERBVEVfUFJFRElDVElPTlM6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnByZWRpY3Rpb25zO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmNvbnN0IGRvY3MgPSAoc3RhdGUgPSB7dGl0bGU6ICcnLCBleGFtcGxlczogW10sIGRlc2NyaXB0aW9uOiBbXSwgc291cmNlOicnfSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLlVQREFURV9ET0NTOlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5kb2M7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuY29uc3QgZnVuY3Rpb25TZWFyY2ggPSAoc3RhdGUgPSB7c2VhcmNoOiAnJywgcmVzdWx0czogW119LCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSl7XG4gICAgY2FzZSB0eXBlcy5VUERBVEVfRlVOQzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNlYXJjaDogYWN0aW9uLnNlYXJjaH07XG4gICAgY2FzZSB0eXBlcy5VUERBVEVfUkVTVUxUUzpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIHJlc3VsdHM6IGFjdGlvbi5yZXN1bHRzfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCBjdXJyZW50SW5wdXQgPSAoc3RhdGUgPSB7J2lucHV0JzogJyd9LCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSl7XG4gICAgY2FzZSB0eXBlcy5TVE9SRV9DVVJSRU5UX0lOUFVUOlxuICAgICAgcmV0dXJuIHsnaW5wdXQnOiBhY3Rpb24uY3VycmVudElucHV0fTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCBtaW5pbWl6ZVN0YXRlID0gKHN0YXRlPXsnZG9jcyc6IGZhbHNlfSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xuICAgIGNhc2UgdHlwZXMuVE9HR0xFX0RPQ1M6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCAnZG9jcyc6ICFzdGF0ZS5kb2NzfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCBpbnB1dEhpc3RvcnkgPSAoc3RhdGUgPSB7J2hpc3RvcnknOiBbXSwgJ2N1cnJJZCc6IG51bGwsICdzaG93SGlzdG9yeSc6IGZhbHNlIH0sIGFjdGlvbikgPT4ge1xuICAgIGxldCBuZXdJZDtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgdHlwZXMuQUREX0lOUFVUX0hJU1RPUlk6XG4gICAgICAgICAgICBuZXdJZCA9IHN0YXRlLmN1cnJJZDtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5oaXN0b3J5Lmxlbmd0aCA9PT0gMCAmJiBuZXdJZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG5ld0lkID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsICdoaXN0b3J5JzogWy4uLnN0YXRlLmhpc3RvcnksIGFjdGlvbi5tZXNzYWdlXSwgJ2N1cnJJZCc6IG5ld0lkfTtcbiAgICAgICAgY2FzZSB0eXBlcy5NT1ZFX0lOUFVUX0hJU1RPUlk6XG4gICAgICAgICAgICBpZiAoc3RhdGUuaGlzdG9yeS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdJZCA9IHN0YXRlLmN1cnJJZCB8fCAwO1xuICAgICAgICAgICAgaWYgKGFjdGlvbi5kaXJlY3Rpb24gPT09ICd1cCcpIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3SWQgPCAoc3RhdGUuaGlzdG9yeS5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdJZCArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0lkID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3SWQgLT0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCAnY3VycklkJzogbmV3SWQgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgY29udmVyc2F0aW9uLFxuICAgIHZhcmlhYmxlcyxcbiAgICBwcmVkaWN0aW9ucyxcbiAgICBpbnB1dEhpc3RvcnksXG4gICAgY3VycmVudElucHV0LFxuICAgIGRvY3MsXG4gICAgZnVuY3Rpb25TZWFyY2gsXG4gICAgcm91dGluZ1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3JlZHVjZXJzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})