webpackHotUpdate(0,{

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

	eval("exports = module.exports = __webpack_require__(742)();\n// imports\n\n\n// module\nexports.push([module.id, \".filterable-table {\\n  padding: 20px;\\n  background-color: beige; }\\n\\nfooter {\\n  margin-top: 20px; }\\n  footer a {\\n    padding: 5px 10px 5px 0; }\\n\\nspan.Resizer.vertical {\\n  border-right: 1px solid #ccc; }\\n\\nspan.Resizer.vertical:hover {\\n  border-right: 4px solid #efefef;\\n  cursor: pointer; }\\n\\nspan.Resizer.horizontal {\\n  border-bottom: 1px solid #ccc;\\n  border-top: 1px solid #fff; }\\n\\nspan.Resizer.horizontal:hover {\\n  border-bottom: 4px solid #efefef;\\n  border-top: 1px solid #fff;\\n  cursor: pointer; }\\n\\n.settingsButton {\\n  position: absolute;\\n  opacity: 0.5;\\n  top: 5.25px;\\n  right: 55px; }\\n\\n.minButton {\\n  position: absolute;\\n  opacity: 0.5;\\n  top: 9px;\\n  right: 20px; }\\n\\n.minButton:hover {\\n  cursor: pointer;\\n  opacity: 1; }\\n\\n.window {\\n  top: 0px; }\\n\\n.secondSplit .Pane2 {\\n  overflow-x: scroll; }\\n\\nbody {\\n  font-family: 'helvetica neue', helvetica, sans-serif;\\n  font-size: 14px;\\n  color: #333; }\\n\\n.left_pane {\\n  position: absolute;\\n  top: 0px;\\n  left: 0px;\\n  width: 100%;\\n  height: 100%; }\\n\\n.content_box {\\n  position: absolute;\\n  bottom: 75px;\\n  top: 0px;\\n  left: 0px;\\n  right: 3px;\\n  padding: 20px 0px 0px 10px;\\n  overflow: scroll; }\\n\\n.message {\\n  margin: 2px 0px; }\\n\\n.message.left {\\n  width: 50%;\\n  margin-right: 50%;\\n  text-align: left; }\\n\\n.message.right {\\n  width: 50%;\\n  margin-left: 50%;\\n  text-align: right; }\\n\\n.message pre {\\n  margin: 2px 0px; }\\n\\n.message .bubble {\\n  display: inline-block;\\n  padding: 5px 15px;\\n  border-radius: 25px;\\n  word-wrap: break-word;\\n  white-space: pre-wrap;\\n  text-align: left;\\n  line-height: 1.2em; }\\n\\n.message.right .bubble {\\n  background-color: #458CFF;\\n  color: white; }\\n\\n.message.left .bubble {\\n  background-color: #efefef;\\n  color: black; }\\n\\n.message.left .bubble.data {\\n  width: 100%;\\n  font-size: .9em; }\\n  .message.left .bubble.data pre {\\n    overflow-x: scroll; }\\n\\n.message.left .bubble.table {\\n  max-width: 100%;\\n  font-size: .9em;\\n  max-height: 500px;\\n  border: 1px solid #efefef;\\n  background-color: #fff;\\n  overflow-x: scroll;\\n  overflow-y: scroll; }\\n  .message.left .bubble.table .data_table .header {\\n    font-weight: 800;\\n    border-bottom: 1px solid #efefef; }\\n    .message.left .bubble.table .data_table .header span.data_column {\\n      cursor: pointer; }\\n  .message.left .bubble.table .data_table span.data_column {\\n    display: inline-block;\\n    width: 120px;\\n    height: 1.4em;\\n    overflow: hidden;\\n    padding: .2em 0px 0em 10px;\\n    border-left: 1px solid #efefef; }\\n  .message.left .bubble.table .data_table .data_row {\\n    height: 1.4em;\\n    border-bottom: 1px solid #efefef; }\\n\\n.message.left .bubble.code {\\n  width: 100%;\\n  font-size: .9em; }\\n  .message.left .bubble.code pre {\\n    overflow-x: scroll; }\\n\\n.message.left .bubble.explain {\\n  background-color: #efefef;\\n  font-style: italic; }\\n\\n.input_box {\\n  position: absolute;\\n  height: 40px;\\n  bottom: 0px;\\n  left: 0px;\\n  right: 0px; }\\n  .input_box input:focus {\\n    outline: none; }\\n\\n.prediction_strip {\\n  position: absolute;\\n  height: 18px;\\n  padding: 10px 0px;\\n  bottom: 40px;\\n  left: 0px;\\n  right: 0px;\\n  border-top: 1px solid #ddd;\\n  overflow-x: scroll; }\\n  .prediction_strip span.prediction {\\n    cursor: pointer;\\n    margin: 5px 13px 0px 13px;\\n    color: #999; }\\n  .prediction_strip span.prediction.c0 {\\n    font-weight: 800; }\\n\\n.predictions {\\n  height: 100%;\\n  overflow-y: hidden; }\\n\\n.input_box input[type=\\\"text\\\"] {\\n  width: 98%;\\n  /*margin:20px 0px;*/\\n  padding: 10px 1%;\\n  border: none;\\n  border-top: 1px solid #ddd;\\n  font-size: 1em; }\\n\\n.right_pane {\\n  position: absolute;\\n  top: 0px;\\n  right: 0px;\\n  width: 400px;\\n  height: 100%;\\n  border-left: 1px solid #bbb; }\\n\\n.subtitle {\\n  margin-top: 10px;\\n  font-weight: 800;\\n  text-align: center;\\n  font-size: 1.4em; }\\n\\n.snippet {\\n  font-weight: 400;\\n  padding: 10px 20px;\\n  color: #888; }\\n\\n.func_search {\\n  width: 100%;\\n  padding: 10px 20px;\\n  overflow-y: scroll; }\\n  .func_search .search_box input {\\n    background-color: #f6f7f9;\\n    border-radius: 5px;\\n    box-sizing: border-box;\\n    border-style: none;\\n    width: 94%;\\n    padding: 0px 3%;\\n    height: 30px;\\n    margin-bottom: 10px;\\n    font-size: 1.1em; }\\n  .func_search .search_box input:focus {\\n    outline: none; }\\n  .func_search .results .result {\\n    cursor: pointer;\\n    line-height: 1.5em;\\n    color: #666; }\\n  .func_search .results .result:hover {\\n    background-color: #efefef; }\\n\\n.func_info {\\n  overflow-y: scroll;\\n  padding: 10px 20px; }\\n  .func_info .head {\\n    margin-bottom: 10px;\\n    font-weight: 400;\\n    color: rgba(0, 0, 0, 0.4); }\\n  .func_info .func_title {\\n    font-size: 1.2em;\\n    margin: 10px 0px;\\n    color: rgba(0, 0, 0, 0.4); }\\n  .func_info .func_description {\\n    margin-bottom: 10px;\\n    font-weight: 400; }\\n  .func_info .examples {\\n    margin-bottom: 10px; }\\n    .func_info .examples .example {\\n      font-style: italic;\\n      line-height: 1.4em; }\\n  .func_info .func_code pre {\\n    margin: 0px;\\n    font-size: 0.95em;\\n    border-radius: 5px; }\\n\\n.variableTable {\\n  width: 100%;\\n  margin-top: 0px;\\n  overflow-y: scroll;\\n  font-weight: 400;\\n  padding: 10px 20px; }\\n  .variableTable .title {\\n    font-weight: 400;\\n    color: rgba(0, 0, 0, 0.4);\\n    font-size: 1.1em;\\n    margin: 0px 0px 10px 0px; }\\n  .variableTable ul {\\n    float: left;\\n    width: 100%;\\n    padding: 0;\\n    margin: 0; }\\n  .variableTable li {\\n    width: 100%;\\n    float: left;\\n    clear: both;\\n    text-align: left;\\n    line-height: 1.4em;\\n    color: #888; }\\n    .variableTable li span.half {\\n      float: left;\\n      width: 50%; }\\n    .variableTable li span.three_quarter {\\n      float: left;\\n      width: 75%; }\\n    .variableTable li span.quarter {\\n      float: left;\\n      width: 25%; }\\n    .variableTable li span.name {\\n      font-family: courier;\\n      font-size: .9em;\\n      color: #444; }\\n\\nspan.code {\\n  /*padding:2px 4px;*/\\n  font-family: courier;\\n  font-size: 1em;\\n  font-weight: 800;\\n  /*background-color: #666;*/\\n  /*border-radius: 15px;*/\\n  /*color:white;*/ }\\n\\n.innerConversation .title {\\n  text-align: center;\\n  color: #ccc;\\n  margin: 20px 0px;\\n  cursor: pointer; }\\n\\nspan.item {\\n  width: 210px;\\n  display: block;\\n  float: left; }\\n\\nli {\\n  float: left;\\n  list-style-type: none;\\n  margin: 2px 0px; }\\n\\nli.title {\\n  margin-bottom: 3px;\\n  font-weight: 800; }\\n\\n.clear {\\n  clear: both; }\\n\\nspan.normal_text, span.iris_arg {\\n  margin-right: 4px; }\\n\\nspan.iris_arg {\\n  font-weight: 800; }\\n\", \"\"]);\n\n// exports\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc3R5bGVzL21haW4uc2Nzcz8yM2VjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0EsNkNBQTZDLGtCQUFrQiw0QkFBNEIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLGNBQWMsOEJBQThCLEVBQUUsMkJBQTJCLGlDQUFpQyxFQUFFLGlDQUFpQyxvQ0FBb0Msb0JBQW9CLEVBQUUsNkJBQTZCLGtDQUFrQywrQkFBK0IsRUFBRSxtQ0FBbUMscUNBQXFDLCtCQUErQixvQkFBb0IsRUFBRSxxQkFBcUIsdUJBQXVCLGlCQUFpQixnQkFBZ0IsZ0JBQWdCLEVBQUUsZ0JBQWdCLHVCQUF1QixpQkFBaUIsYUFBYSxnQkFBZ0IsRUFBRSxzQkFBc0Isb0JBQW9CLGVBQWUsRUFBRSxhQUFhLGFBQWEsRUFBRSx5QkFBeUIsdUJBQXVCLEVBQUUsVUFBVSx5REFBeUQsb0JBQW9CLGdCQUFnQixFQUFFLGdCQUFnQix1QkFBdUIsYUFBYSxjQUFjLGdCQUFnQixpQkFBaUIsRUFBRSxrQkFBa0IsdUJBQXVCLGlCQUFpQixhQUFhLGNBQWMsZUFBZSwrQkFBK0IscUJBQXFCLEVBQUUsY0FBYyxvQkFBb0IsRUFBRSxtQkFBbUIsZUFBZSxzQkFBc0IscUJBQXFCLEVBQUUsb0JBQW9CLGVBQWUscUJBQXFCLHNCQUFzQixFQUFFLGtCQUFrQixvQkFBb0IsRUFBRSxzQkFBc0IsMEJBQTBCLHNCQUFzQix3QkFBd0IsMEJBQTBCLDBCQUEwQixxQkFBcUIsdUJBQXVCLEVBQUUsNEJBQTRCLDhCQUE4QixpQkFBaUIsRUFBRSwyQkFBMkIsOEJBQThCLGlCQUFpQixFQUFFLGdDQUFnQyxnQkFBZ0Isb0JBQW9CLEVBQUUsb0NBQW9DLHlCQUF5QixFQUFFLGlDQUFpQyxvQkFBb0Isb0JBQW9CLHNCQUFzQiw4QkFBOEIsMkJBQTJCLHVCQUF1Qix1QkFBdUIsRUFBRSxxREFBcUQsdUJBQXVCLHVDQUF1QyxFQUFFLHdFQUF3RSx3QkFBd0IsRUFBRSw4REFBOEQsNEJBQTRCLG1CQUFtQixvQkFBb0IsdUJBQXVCLGlDQUFpQyxxQ0FBcUMsRUFBRSx1REFBdUQsb0JBQW9CLHVDQUF1QyxFQUFFLGdDQUFnQyxnQkFBZ0Isb0JBQW9CLEVBQUUsb0NBQW9DLHlCQUF5QixFQUFFLG1DQUFtQyw4QkFBOEIsdUJBQXVCLEVBQUUsZ0JBQWdCLHVCQUF1QixpQkFBaUIsZ0JBQWdCLGNBQWMsZUFBZSxFQUFFLDRCQUE0QixvQkFBb0IsRUFBRSx1QkFBdUIsdUJBQXVCLGlCQUFpQixzQkFBc0IsaUJBQWlCLGNBQWMsZUFBZSwrQkFBK0IsdUJBQXVCLEVBQUUsdUNBQXVDLHNCQUFzQixnQ0FBZ0Msa0JBQWtCLEVBQUUsMENBQTBDLHVCQUF1QixFQUFFLGtCQUFrQixpQkFBaUIsdUJBQXVCLEVBQUUscUNBQXFDLGVBQWUsc0JBQXNCLHVCQUF1QixpQkFBaUIsK0JBQStCLG1CQUFtQixFQUFFLGlCQUFpQix1QkFBdUIsYUFBYSxlQUFlLGlCQUFpQixpQkFBaUIsZ0NBQWdDLEVBQUUsZUFBZSxxQkFBcUIscUJBQXFCLHVCQUF1QixxQkFBcUIsRUFBRSxjQUFjLHFCQUFxQix1QkFBdUIsZ0JBQWdCLEVBQUUsa0JBQWtCLGdCQUFnQix1QkFBdUIsdUJBQXVCLEVBQUUsb0NBQW9DLGdDQUFnQyx5QkFBeUIsNkJBQTZCLHlCQUF5QixpQkFBaUIsc0JBQXNCLG1CQUFtQiwwQkFBMEIsdUJBQXVCLEVBQUUsMENBQTBDLG9CQUFvQixFQUFFLG1DQUFtQyxzQkFBc0IseUJBQXlCLGtCQUFrQixFQUFFLHlDQUF5QyxnQ0FBZ0MsRUFBRSxnQkFBZ0IsdUJBQXVCLHVCQUF1QixFQUFFLHNCQUFzQiwwQkFBMEIsdUJBQXVCLGdDQUFnQyxFQUFFLDRCQUE0Qix1QkFBdUIsdUJBQXVCLGdDQUFnQyxFQUFFLGtDQUFrQywwQkFBMEIsdUJBQXVCLEVBQUUsMEJBQTBCLDBCQUEwQixFQUFFLHFDQUFxQywyQkFBMkIsMkJBQTJCLEVBQUUsK0JBQStCLGtCQUFrQix3QkFBd0IseUJBQXlCLEVBQUUsb0JBQW9CLGdCQUFnQixvQkFBb0IsdUJBQXVCLHFCQUFxQix1QkFBdUIsRUFBRSwyQkFBMkIsdUJBQXVCLGdDQUFnQyx1QkFBdUIsK0JBQStCLEVBQUUsdUJBQXVCLGtCQUFrQixrQkFBa0IsaUJBQWlCLGdCQUFnQixFQUFFLHVCQUF1QixrQkFBa0Isa0JBQWtCLGtCQUFrQix1QkFBdUIseUJBQXlCLGtCQUFrQixFQUFFLG1DQUFtQyxvQkFBb0IsbUJBQW1CLEVBQUUsNENBQTRDLG9CQUFvQixtQkFBbUIsRUFBRSxzQ0FBc0Msb0JBQW9CLG1CQUFtQixFQUFFLG1DQUFtQyw2QkFBNkIsd0JBQXdCLG9CQUFvQixFQUFFLGVBQWUsc0JBQXNCLDJCQUEyQixtQkFBbUIscUJBQXFCLDZCQUE2Qiw0QkFBNEIsb0JBQW9CLElBQUksK0JBQStCLHVCQUF1QixnQkFBZ0IscUJBQXFCLG9CQUFvQixFQUFFLGVBQWUsaUJBQWlCLG1CQUFtQixnQkFBZ0IsRUFBRSxRQUFRLGdCQUFnQiwwQkFBMEIsb0JBQW9CLEVBQUUsY0FBYyx1QkFBdUIscUJBQXFCLEVBQUUsWUFBWSxnQkFBZ0IsRUFBRSxxQ0FBcUMsc0JBQXNCLEVBQUUsbUJBQW1CLHFCQUFxQixFQUFFOztBQUUzL00iLCJmaWxlIjoiMjIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZpbHRlcmFibGUtdGFibGUge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlOyB9XFxuXFxuZm9vdGVyIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7IH1cXG4gIGZvb3RlciBhIHtcXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDA7IH1cXG5cXG5zcGFuLlJlc2l6ZXIudmVydGljYWwge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYzsgfVxcblxcbnNwYW4uUmVzaXplci52ZXJ0aWNhbDpob3ZlciB7XFxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAjZWZlZmVmO1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuc3Bhbi5SZXNpemVyLmhvcml6b250YWwge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZjsgfVxcblxcbnNwYW4uUmVzaXplci5ob3Jpem9udGFsOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZWZlZmVmO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uc2V0dGluZ3NCdXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgdG9wOiA1LjI1cHg7XFxuICByaWdodDogNTVweDsgfVxcblxcbi5taW5CdXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgdG9wOiA5cHg7XFxuICByaWdodDogMjBweDsgfVxcblxcbi5taW5CdXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbi53aW5kb3cge1xcbiAgdG9wOiAwcHg7IH1cXG5cXG4uc2Vjb25kU3BsaXQgLlBhbmUyIHtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDsgfVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdoZWx2ZXRpY2EgbmV1ZScsIGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjMzMzOyB9XFxuXFxuLmxlZnRfcGFuZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDBweDtcXG4gIGxlZnQ6IDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLmNvbnRlbnRfYm94IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogNzVweDtcXG4gIHRvcDogMHB4O1xcbiAgbGVmdDogMHB4O1xcbiAgcmlnaHQ6IDNweDtcXG4gIHBhZGRpbmc6IDIwcHggMHB4IDBweCAxMHB4O1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDsgfVxcblxcbi5tZXNzYWdlIHtcXG4gIG1hcmdpbjogMnB4IDBweDsgfVxcblxcbi5tZXNzYWdlLmxlZnQge1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1hcmdpbi1yaWdodDogNTAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxcblxcbi5tZXNzYWdlLnJpZ2h0IHtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG5cXG4ubWVzc2FnZSBwcmUge1xcbiAgbWFyZ2luOiAycHggMHB4OyB9XFxuXFxuLm1lc3NhZ2UgLmJ1YmJsZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA1cHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbGluZS1oZWlnaHQ6IDEuMmVtOyB9XFxuXFxuLm1lc3NhZ2UucmlnaHQgLmJ1YmJsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU4Q0ZGO1xcbiAgY29sb3I6IHdoaXRlOyB9XFxuXFxuLm1lc3NhZ2UubGVmdCAuYnViYmxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxuICBjb2xvcjogYmxhY2s7IH1cXG5cXG4ubWVzc2FnZS5sZWZ0IC5idWJibGUuZGF0YSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogLjllbTsgfVxcbiAgLm1lc3NhZ2UubGVmdCAuYnViYmxlLmRhdGEgcHJlIHtcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsOyB9XFxuXFxuLm1lc3NhZ2UubGVmdCAuYnViYmxlLnRhYmxlIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogLjllbTtcXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2VmZWZlZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7IH1cXG4gIC5tZXNzYWdlLmxlZnQgLmJ1YmJsZS50YWJsZSAuZGF0YV90YWJsZSAuaGVhZGVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmVmZWY7IH1cXG4gICAgLm1lc3NhZ2UubGVmdCAuYnViYmxlLnRhYmxlIC5kYXRhX3RhYmxlIC5oZWFkZXIgc3Bhbi5kYXRhX2NvbHVtbiB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAubWVzc2FnZS5sZWZ0IC5idWJibGUudGFibGUgLmRhdGFfdGFibGUgc3Bhbi5kYXRhX2NvbHVtbiB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBoZWlnaHQ6IDEuNGVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwYWRkaW5nOiAuMmVtIDBweCAwZW0gMTBweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWZlZmVmOyB9XFxuICAubWVzc2FnZS5sZWZ0IC5idWJibGUudGFibGUgLmRhdGFfdGFibGUgLmRhdGFfcm93IHtcXG4gICAgaGVpZ2h0OiAxLjRlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmVmZWY7IH1cXG5cXG4ubWVzc2FnZS5sZWZ0IC5idWJibGUuY29kZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogLjllbTsgfVxcbiAgLm1lc3NhZ2UubGVmdCAuYnViYmxlLmNvZGUgcHJlIHtcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsOyB9XFxuXFxuLm1lc3NhZ2UubGVmdCAuYnViYmxlLmV4cGxhaW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcblxcbi5pbnB1dF9ib3gge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm90dG9tOiAwcHg7XFxuICBsZWZ0OiAwcHg7XFxuICByaWdodDogMHB4OyB9XFxuICAuaW5wdXRfYm94IGlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcblxcbi5wcmVkaWN0aW9uX3N0cmlwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMThweDtcXG4gIHBhZGRpbmc6IDEwcHggMHB4O1xcbiAgYm90dG9tOiA0MHB4O1xcbiAgbGVmdDogMHB4O1xcbiAgcmlnaHQ6IDBweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsOyB9XFxuICAucHJlZGljdGlvbl9zdHJpcCBzcGFuLnByZWRpY3Rpb24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjogNXB4IDEzcHggMHB4IDEzcHg7XFxuICAgIGNvbG9yOiAjOTk5OyB9XFxuICAucHJlZGljdGlvbl9zdHJpcCBzcGFuLnByZWRpY3Rpb24uYzAge1xcbiAgICBmb250LXdlaWdodDogODAwOyB9XFxuXFxuLnByZWRpY3Rpb25zIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjsgfVxcblxcbi5pbnB1dF9ib3ggaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIHdpZHRoOiA5OCU7XFxuICAvKm1hcmdpbjoyMHB4IDBweDsqL1xcbiAgcGFkZGluZzogMTBweCAxJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xcbiAgZm9udC1zaXplOiAxZW07IH1cXG5cXG4ucmlnaHRfcGFuZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDBweDtcXG4gIHJpZ2h0OiAwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNiYmI7IH1cXG5cXG4uc3VidGl0bGUge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNGVtOyB9XFxuXFxuLnNuaXBwZXQge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGNvbG9yOiAjODg4OyB9XFxuXFxuLmZ1bmNfc2VhcmNoIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsOyB9XFxuICAuZnVuY19zZWFyY2ggLnNlYXJjaF9ib3ggaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmN2Y5O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgd2lkdGg6IDk0JTtcXG4gICAgcGFkZGluZzogMHB4IDMlO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07IH1cXG4gIC5mdW5jX3NlYXJjaCAuc2VhcmNoX2JveCBpbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gIC5mdW5jX3NlYXJjaCAucmVzdWx0cyAucmVzdWx0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XFxuICAgIGNvbG9yOiAjNjY2OyB9XFxuICAuZnVuY19zZWFyY2ggLnJlc3VsdHMgLnJlc3VsdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7IH1cXG5cXG4uZnVuY19pbmZvIHtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDsgfVxcbiAgLmZ1bmNfaW5mbyAuaGVhZCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IH1cXG4gIC5mdW5jX2luZm8gLmZ1bmNfdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpOyB9XFxuICAuZnVuY19pbmZvIC5mdW5jX2Rlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDsgfVxcbiAgLmZ1bmNfaW5mbyAuZXhhbXBsZXMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuICAgIC5mdW5jX2luZm8gLmV4YW1wbGVzIC5leGFtcGxlIHtcXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgICAgbGluZS1oZWlnaHQ6IDEuNGVtOyB9XFxuICAuZnVuY19pbmZvIC5mdW5jX2NvZGUgcHJlIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMC45NWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG5cXG4udmFyaWFibGVUYWJsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7IH1cXG4gIC52YXJpYWJsZVRhYmxlIC50aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgIG1hcmdpbjogMHB4IDBweCAxMHB4IDBweDsgfVxcbiAgLnZhcmlhYmxlVGFibGUgdWwge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDsgfVxcbiAgLnZhcmlhYmxlVGFibGUgbGkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGNsZWFyOiBib3RoO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBsaW5lLWhlaWdodDogMS40ZW07XFxuICAgIGNvbG9yOiAjODg4OyB9XFxuICAgIC52YXJpYWJsZVRhYmxlIGxpIHNwYW4uaGFsZiB7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgd2lkdGg6IDUwJTsgfVxcbiAgICAudmFyaWFibGVUYWJsZSBsaSBzcGFuLnRocmVlX3F1YXJ0ZXIge1xcbiAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgIHdpZHRoOiA3NSU7IH1cXG4gICAgLnZhcmlhYmxlVGFibGUgbGkgc3Bhbi5xdWFydGVyIHtcXG4gICAgICBmbG9hdDogbGVmdDtcXG4gICAgICB3aWR0aDogMjUlOyB9XFxuICAgIC52YXJpYWJsZVRhYmxlIGxpIHNwYW4ubmFtZSB7XFxuICAgICAgZm9udC1mYW1pbHk6IGNvdXJpZXI7XFxuICAgICAgZm9udC1zaXplOiAuOWVtO1xcbiAgICAgIGNvbG9yOiAjNDQ0OyB9XFxuXFxuc3Bhbi5jb2RlIHtcXG4gIC8qcGFkZGluZzoycHggNHB4OyovXFxuICBmb250LWZhbWlseTogY291cmllcjtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogIzY2NjsqL1xcbiAgLypib3JkZXItcmFkaXVzOiAxNXB4OyovXFxuICAvKmNvbG9yOndoaXRlOyovIH1cXG5cXG4uaW5uZXJDb252ZXJzYXRpb24gLnRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjY2NjO1xcbiAgbWFyZ2luOiAyMHB4IDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbnNwYW4uaXRlbSB7XFxuICB3aWR0aDogMjEwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZsb2F0OiBsZWZ0OyB9XFxuXFxubGkge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW46IDJweCAwcHg7IH1cXG5cXG5saS50aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAzcHg7XFxuICBmb250LXdlaWdodDogODAwOyB9XFxuXFxuLmNsZWFyIHtcXG4gIGNsZWFyOiBib3RoOyB9XFxuXFxuc3Bhbi5ub3JtYWxfdGV4dCwgc3Bhbi5pcmlzX2FyZyB7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxcblxcbnNwYW4uaXJpc19hcmcge1xcbiAgZm9udC13ZWlnaHQ6IDgwMDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlcj9tb2R1bGVzJmxvY2FsSWRlbnROYW1lPVtuYW1lXS0tLVtsb2NhbF0tLS1baGFzaDpiYXNlNjQ6NV0hLi9hcHAvc3R5bGVzL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})