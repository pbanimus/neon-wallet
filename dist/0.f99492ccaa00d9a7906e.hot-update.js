webpackHotUpdate(0,{

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getHistory = exports.getVariables = exports.setHistory = exports.updateDocs = exports.updateHint = exports.postMessages = undefined;\n\nvar _isomorphicFetch = __webpack_require__(753);\n\nvar _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);\n\nvar _index = __webpack_require__(267);\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar postMessages = exports.postMessages = function postMessages(messages, state, conversation) {\n    (0, _isomorphicFetch2.default)('http://localhost:8000/new_loop', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({ messages: messages, state: state, conversation: conversation })\n    }).then(function (response) {\n        return response.json();\n    }).then(function (json) {\n        (0, _index2.default)(json);\n        (0, _index2.default)({ 'type': 'UPDATE_VARIABLES', 'variables': json.variables });\n    }).then(function () {\n        (0, _index2.default)({ 'type': 'UPDATE_PREDICTIONS', 'predictions': [] });\n    });\n};\n\nvar updateHint = exports.updateHint = function updateHint(text) {\n    (0, _isomorphicFetch2.default)('http://localhost:8000/hint', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({ text: text })\n    }).then(function (response) {\n        return response.json();\n    }).then(function (json) {\n        console.log(json);\n        (0, _index2.default)({ 'type': 'UPDATE_PREDICTIONS', 'predictions': json.predictions });\n    });\n};\n\nvar updateDocs = exports.updateDocs = function updateDocs(text) {\n    (0, _isomorphicFetch2.default)('http://localhost:8000/docs', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({ text: text })\n    }).then(function (response) {\n        return response.json();\n    }).then(function (json) {\n        console.log(json);\n        (0, _index2.default)({ 'type': 'UPDATE_DOCS', 'doc': json });\n    });\n};\n\nvar setHistory = exports.setHistory = function setHistory(messages, state, conversation) {\n    (0, _isomorphicFetch2.default)('http://localhost:8000/set_history', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({ messages: messages, state: state, conversation: conversation })\n    });\n};\n\nvar getVariables = exports.getVariables = function getVariables() {\n    (0, _isomorphicFetch2.default)('http://localhost:8000/variables', {\n        method: 'GET',\n        headers: {\n            'Content-Type': 'application/json'\n        }\n    }).then(function (response) {\n        return response.json();\n    }).then(function (json) {\n        return (0, _index2.default)(json);\n    });\n};\n\nvar getHistory = exports.getHistory = function getHistory() {\n    (0, _isomorphicFetch2.default)('http://localhost:8000/history', {\n        method: 'GET',\n        headers: {\n            'Content-Type': 'application/json'\n        }\n    }).then(function (response) {\n        return response.json();\n    }).then(function (json) {\n        return (0, _index2.default)(json);\n    });\n};\n\n// export default { postMessages, getVariables };//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXBpX2NhbGxzL3B5dGhvbi5qcz85ZjZlIl0sIm5hbWVzIjpbInBvc3RNZXNzYWdlcyIsIm1lc3NhZ2VzIiwic3RhdGUiLCJjb252ZXJzYXRpb24iLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwidmFyaWFibGVzIiwidXBkYXRlSGludCIsInRleHQiLCJjb25zb2xlIiwibG9nIiwicHJlZGljdGlvbnMiLCJ1cGRhdGVEb2NzIiwic2V0SGlzdG9yeSIsImdldFZhcmlhYmxlcyIsImdldEhpc3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFTyxJQUFNQSxzQ0FBZSxTQUFmQSxZQUFlLENBQUNDLFFBQUQsRUFBV0MsS0FBWCxFQUFrQkMsWUFBbEIsRUFBbUM7QUFDM0QsbUNBQU0sZ0NBQU4sRUFBd0M7QUFDcENDLGdCQUFRLE1BRDRCO0FBRXBDQyxpQkFBUztBQUNMLDRCQUFnQjtBQURYLFNBRjJCO0FBS3BDQyxjQUFNQyxLQUFLQyxTQUFMLENBQWUsRUFBQ1Asa0JBQUQsRUFBV0MsWUFBWCxFQUFrQkMsMEJBQWxCLEVBQWY7QUFMOEIsS0FBeEMsRUFPQ00sSUFQRCxDQU9NO0FBQUEsZUFBWUMsU0FBU0MsSUFBVCxFQUFaO0FBQUEsS0FQTixFQVFDRixJQVJELENBUU0sZ0JBQVE7QUFDViw2QkFBU0UsSUFBVDtBQUNBLDZCQUFTLEVBQUMsUUFBUSxrQkFBVCxFQUE2QixhQUFhQSxLQUFLQyxTQUEvQyxFQUFUO0FBQ0gsS0FYRCxFQVlDSCxJQVpELENBWU0sWUFBTTtBQUNSLDZCQUFTLEVBQUMsUUFBUSxvQkFBVCxFQUErQixlQUFlLEVBQTlDLEVBQVQ7QUFDSCxLQWREO0FBZUgsQ0FoQk07O0FBa0JBLElBQU1JLGtDQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsSUFBRCxFQUFVO0FBQ2hDLG1DQUFNLDRCQUFOLEVBQW9DO0FBQ2hDVixnQkFBUSxNQUR3QjtBQUVoQ0MsaUJBQVM7QUFDTCw0QkFBZ0I7QUFEWCxTQUZ1QjtBQUtoQ0MsY0FBTUMsS0FBS0MsU0FBTCxDQUFlLEVBQUNNLFVBQUQsRUFBZjtBQUwwQixLQUFwQyxFQU9DTCxJQVBELENBT007QUFBQSxlQUFZQyxTQUFTQyxJQUFULEVBQVo7QUFBQSxLQVBOLEVBUUNGLElBUkQsQ0FRTSxnQkFBUTtBQUNWTSxnQkFBUUMsR0FBUixDQUFZTCxJQUFaO0FBQ0EsNkJBQVMsRUFBQyxRQUFRLG9CQUFULEVBQStCLGVBQWVBLEtBQUtNLFdBQW5ELEVBQVQ7QUFDSCxLQVhEO0FBWUgsQ0FiTTs7QUFlQSxJQUFNQyxrQ0FBYSxTQUFiQSxVQUFhLENBQUNKLElBQUQsRUFBVTtBQUNoQyxtQ0FBTSw0QkFBTixFQUFvQztBQUNoQ1YsZ0JBQVEsTUFEd0I7QUFFaENDLGlCQUFTO0FBQ0wsNEJBQWdCO0FBRFgsU0FGdUI7QUFLaENDLGNBQU1DLEtBQUtDLFNBQUwsQ0FBZSxFQUFDTSxVQUFELEVBQWY7QUFMMEIsS0FBcEMsRUFPQ0wsSUFQRCxDQU9NO0FBQUEsZUFBWUMsU0FBU0MsSUFBVCxFQUFaO0FBQUEsS0FQTixFQVFDRixJQVJELENBUU0sZ0JBQVE7QUFDVk0sZ0JBQVFDLEdBQVIsQ0FBWUwsSUFBWjtBQUNBLDZCQUFTLEVBQUMsUUFBUSxhQUFULEVBQXdCLE9BQU9BLElBQS9CLEVBQVQ7QUFDSCxLQVhEO0FBWUgsQ0FiTTs7QUFlQSxJQUFNUSxrQ0FBYSxTQUFiQSxVQUFhLENBQUNsQixRQUFELEVBQVdDLEtBQVgsRUFBa0JDLFlBQWxCLEVBQW1DO0FBQ3pELG1DQUFNLG1DQUFOLEVBQTJDO0FBQ3ZDQyxnQkFBUSxNQUQrQjtBQUV2Q0MsaUJBQVM7QUFDTCw0QkFBZ0I7QUFEWCxTQUY4QjtBQUt2Q0MsY0FBTUMsS0FBS0MsU0FBTCxDQUFlLEVBQUNQLGtCQUFELEVBQVdDLFlBQVgsRUFBa0JDLDBCQUFsQixFQUFmO0FBTGlDLEtBQTNDO0FBT0gsQ0FSTTs7QUFVQSxJQUFNaUIsc0NBQWUsU0FBZkEsWUFBZSxHQUFNO0FBQzlCLG1DQUFNLGlDQUFOLEVBQXlDO0FBQ3JDaEIsZ0JBQVEsS0FENkI7QUFFckNDLGlCQUFTO0FBQ0wsNEJBQWdCO0FBRFg7QUFGNEIsS0FBekMsRUFNQ0ksSUFORCxDQU1NO0FBQUEsZUFBWUMsU0FBU0MsSUFBVCxFQUFaO0FBQUEsS0FOTixFQU9DRixJQVBELENBT007QUFBQSxlQUFRLHFCQUFTRSxJQUFULENBQVI7QUFBQSxLQVBOO0FBUUgsQ0FUTTs7QUFXQSxJQUFNVSxrQ0FBYSxTQUFiQSxVQUFhLEdBQU07QUFDNUIsbUNBQU0sK0JBQU4sRUFBdUM7QUFDbkNqQixnQkFBUSxLQUQyQjtBQUVuQ0MsaUJBQVM7QUFDTCw0QkFBZ0I7QUFEWDtBQUYwQixLQUF2QyxFQU1DSSxJQU5ELENBTU07QUFBQSxlQUFZQyxTQUFTQyxJQUFULEVBQVo7QUFBQSxLQU5OLEVBT0NGLElBUEQsQ0FPTTtBQUFBLGVBQVEscUJBQVNFLElBQVQsQ0FBUjtBQUFBLEtBUE47QUFRSCxDQVRNOztBQVdQIiwiZmlsZSI6IjEyNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcbmltcG9ydCBkaXNwYXRjaCBmcm9tICcuLi9pbmRleC5qcyc7XG5cbmV4cG9ydCBjb25zdCBwb3N0TWVzc2FnZXMgPSAobWVzc2FnZXMsIHN0YXRlLCBjb252ZXJzYXRpb24pID0+IHtcbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL25ld19sb29wJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7bWVzc2FnZXMsIHN0YXRlLCBjb252ZXJzYXRpb259KVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBkaXNwYXRjaChqc29uKTtcbiAgICAgICAgZGlzcGF0Y2goeyd0eXBlJzogJ1VQREFURV9WQVJJQUJMRVMnLCAndmFyaWFibGVzJzoganNvbi52YXJpYWJsZXN9KTtcbiAgICB9KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goeyd0eXBlJzogJ1VQREFURV9QUkVESUNUSU9OUycsICdwcmVkaWN0aW9ucyc6IFtdIH0pO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUhpbnQgPSAodGV4dCkgPT4ge1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvaGludCcsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe3RleHR9KVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgICAgICAgZGlzcGF0Y2goeyd0eXBlJzogJ1VQREFURV9QUkVESUNUSU9OUycsICdwcmVkaWN0aW9ucyc6IGpzb24ucHJlZGljdGlvbnN9KTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVEb2NzID0gKHRleHQpID0+IHtcbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2RvY3MnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHt0ZXh0fSlcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coanNvbik7XG4gICAgICAgIGRpc3BhdGNoKHsndHlwZSc6ICdVUERBVEVfRE9DUycsICdkb2MnOiBqc29ufSk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0SGlzdG9yeSA9IChtZXNzYWdlcywgc3RhdGUsIGNvbnZlcnNhdGlvbikgPT4ge1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvc2V0X2hpc3RvcnknLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHttZXNzYWdlcywgc3RhdGUsIGNvbnZlcnNhdGlvbn0pXG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VmFyaWFibGVzID0gKCkgPT4ge1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvdmFyaWFibGVzJywge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihqc29uID0+IGRpc3BhdGNoKGpzb24pKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRIaXN0b3J5ID0gKCkgPT4ge1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvaGlzdG9yeScsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9XG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiBkaXNwYXRjaChqc29uKSk7XG59O1xuXG4vLyBleHBvcnQgZGVmYXVsdCB7IHBvc3RNZXNzYWdlcywgZ2V0VmFyaWFibGVzIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvYXBpX2NhbGxzL3B5dGhvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})