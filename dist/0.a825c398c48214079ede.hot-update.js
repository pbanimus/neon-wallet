webpackHotUpdate(0,{

/***/ 1419:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactVegaLite = __webpack_require__(1377);\n\nvar _reactVegaLite2 = _interopRequireDefault(_reactVegaLite);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar c_spec = {\n  \"description\": \"A simple bar chart with embedded data.\",\n  \"mark\": \"bar\",\n  \"encoding\": {\n    \"x\": { \"field\": \"a\", \"type\": \"ordinal\" },\n    \"y\": { \"field\": \"b\", \"type\": \"quantitative\" }\n  }\n};\n\nvar barData = {\n  \"values\": [{ \"a\": \"A\", \"b\": 20 }, { \"a\": \"B\", \"b\": 34 }, { \"a\": \"C\", \"b\": 55 }, { \"a\": \"D\", \"b\": 19 }, { \"a\": \"E\", \"b\": 40 }, { \"a\": \"F\", \"b\": 34 }, { \"a\": \"G\", \"b\": 91 }, { \"a\": \"H\", \"b\": 78 }, { \"a\": \"I\", \"b\": 25 }]\n};\n\nvar VegaMessage = function VegaMessage(_ref) {\n  var origin = _ref.origin,\n      spec = _ref.spec,\n      data = _ref.data;\n  return _react2.default.createElement(\n    'div',\n    { className: origin === 'iris' ? 'message left' : 'message right' },\n    _react2.default.createElement(_reactVegaLite2.default, { spec: spec, data: data })\n  );\n};\n\nexports.default = VegaMessage;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9WZWdhTWVzc2FnZS5qcz82Y2FhIl0sIm5hbWVzIjpbImNfc3BlYyIsImJhckRhdGEiLCJWZWdhTWVzc2FnZSIsIm9yaWdpbiIsInNwZWMiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTO0FBQ2IsaUJBQWUsd0NBREY7QUFFYixVQUFRLEtBRks7QUFHYixjQUFZO0FBQ1YsU0FBSyxFQUFDLFNBQVMsR0FBVixFQUFlLFFBQVEsU0FBdkIsRUFESztBQUVWLFNBQUssRUFBQyxTQUFTLEdBQVYsRUFBZSxRQUFRLGNBQXZCO0FBRks7QUFIQyxDQUFmOztBQVNBLElBQU1DLFVBQVU7QUFDZCxZQUFVLENBQ1IsRUFBQyxLQUFLLEdBQU4sRUFBVSxLQUFLLEVBQWYsRUFEUSxFQUNZLEVBQUMsS0FBSyxHQUFOLEVBQVUsS0FBSyxFQUFmLEVBRFosRUFDZ0MsRUFBQyxLQUFLLEdBQU4sRUFBVSxLQUFLLEVBQWYsRUFEaEMsRUFFUixFQUFDLEtBQUssR0FBTixFQUFVLEtBQUssRUFBZixFQUZRLEVBRVksRUFBQyxLQUFLLEdBQU4sRUFBVSxLQUFLLEVBQWYsRUFGWixFQUVnQyxFQUFDLEtBQUssR0FBTixFQUFVLEtBQUssRUFBZixFQUZoQyxFQUdSLEVBQUMsS0FBSyxHQUFOLEVBQVUsS0FBSyxFQUFmLEVBSFEsRUFHWSxFQUFDLEtBQUssR0FBTixFQUFVLEtBQUssRUFBZixFQUhaLEVBR2dDLEVBQUMsS0FBSyxHQUFOLEVBQVUsS0FBSyxFQUFmLEVBSGhDO0FBREksQ0FBaEI7O0FBUUEsSUFBTUMsY0FBYyxTQUFkQSxXQUFjO0FBQUEsTUFBR0MsTUFBSCxRQUFHQSxNQUFIO0FBQUEsTUFBV0MsSUFBWCxRQUFXQSxJQUFYO0FBQUEsTUFBaUJDLElBQWpCLFFBQWlCQSxJQUFqQjtBQUFBLFNBQ2hCO0FBQUE7QUFBQSxNQUFLLFdBQWFGLFdBQVcsTUFBWCxHQUFvQixjQUFwQixHQUFxQyxlQUF2RDtBQUNJLDZEQUFVLE1BQU1DLElBQWhCLEVBQXNCLE1BQU1DLElBQTVCO0FBREosR0FEZ0I7QUFBQSxDQUFwQjs7a0JBTWVILFciLCJmaWxlIjoiMTQxOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVmVnYUxpdGUgZnJvbSAncmVhY3QtdmVnYS1saXRlJztcblxuY29uc3QgY19zcGVjID0ge1xuICBcImRlc2NyaXB0aW9uXCI6IFwiQSBzaW1wbGUgYmFyIGNoYXJ0IHdpdGggZW1iZWRkZWQgZGF0YS5cIixcbiAgXCJtYXJrXCI6IFwiYmFyXCIsXG4gIFwiZW5jb2RpbmdcIjoge1xuICAgIFwieFwiOiB7XCJmaWVsZFwiOiBcImFcIiwgXCJ0eXBlXCI6IFwib3JkaW5hbFwifSxcbiAgICBcInlcIjoge1wiZmllbGRcIjogXCJiXCIsIFwidHlwZVwiOiBcInF1YW50aXRhdGl2ZVwifVxuICB9XG59O1xuXG5jb25zdCBiYXJEYXRhID0ge1xuICBcInZhbHVlc1wiOiBbXG4gICAge1wiYVwiOiBcIkFcIixcImJcIjogMjB9LCB7XCJhXCI6IFwiQlwiLFwiYlwiOiAzNH0sIHtcImFcIjogXCJDXCIsXCJiXCI6IDU1fSxcbiAgICB7XCJhXCI6IFwiRFwiLFwiYlwiOiAxOX0sIHtcImFcIjogXCJFXCIsXCJiXCI6IDQwfSwge1wiYVwiOiBcIkZcIixcImJcIjogMzR9LFxuICAgIHtcImFcIjogXCJHXCIsXCJiXCI6IDkxfSwge1wiYVwiOiBcIkhcIixcImJcIjogNzh9LCB7XCJhXCI6IFwiSVwiLFwiYlwiOiAyNX1cbiAgXVxufTtcblxuY29uc3QgVmVnYU1lc3NhZ2UgPSAoeyBvcmlnaW4sIHNwZWMsIGRhdGEgfSkgPT5cbiAgICA8ZGl2IGNsYXNzTmFtZSA9IHtvcmlnaW4gPT09ICdpcmlzJyA/ICdtZXNzYWdlIGxlZnQnIDogJ21lc3NhZ2UgcmlnaHQnfT5cbiAgICAgICAgPFZlZ2FMaXRlIHNwZWM9e3NwZWN9IGRhdGE9e2RhdGF9IC8+XG4gICAgPC9kaXY+O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFZlZ2FNZXNzYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvVmVnYU1lc3NhZ2UuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})