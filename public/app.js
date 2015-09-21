/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports) {

	'use strict';
	
	var socket = new WebSocket('ws://localhost:3000/tweets');
	
	document.body.innerHTML = '\n  <div>\n    <ul>\n    </ul>\n  </div>\n';
	
	var ul = document.querySelector('ul');
	
	function setupSocket() {
	  socket.onmessage = function (message) {
	    console.log(message.data);
	    if (message.data) {
	      var li = document.createElement('li');
	      li.innerHTML = '<pre>' + message.data + '</pre>';
	
	      ul.insertBefore(li, ul.childNodes[0]);
	    }
	  };
	
	  socket.onerror = function () {
	    socket = new WebSocket('ws://localhost:3000/tweets');
	    setupSocket();
	  };
	
	  socket.onclose = function () {
	    socket = new WebSocket('ws://localhost:3000/tweets');
	    setupSocket();
	  };
	}
	
	socket.onmessage = function (message) {
	  console.log(message.data);
	  if (message.data) {
	    var li = document.createElement('li');
	    li.innerHTML = '<pre>' + message.data + '</pre>';
	
	    ul.insertBefore(li, ul.childNodes[0]);
	  }
	};

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map