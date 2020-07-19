/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/authView.tsx":
/*!***********************************!*\
  !*** ./resources/js/authView.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var auth = document.getElementById('auth') || null;
var registerButton = document.getElementById('auth__button--register') || null;
var registerForm = document.getElementById('auth__form--register') || null;
var loginButton = document.getElementById('auth__button--login') || null;
var loginForm = document.getElementById('auth__form--login') || null;
var toggleDisplay = function (mainElement, subElement) {
    var mainStyle = window.getComputedStyle(mainElement, null).display;
    var subStyle = window.getComputedStyle(subElement, null).display;
    mainElement.style.display = mainStyle === 'block' ? 'none' : 'block';
    if (subStyle === 'block') {
        subElement.style.display = 'none';
    }
};
var checkDisplay = function (ele) {
    var eleStyle = window.getComputedStyle(ele, null).display;
    if (eleStyle === 'block') {
        ele.style.display = 'none';
    }
};
if (registerButton && registerForm && loginButton && loginForm) {
    registerButton.addEventListener('click', function () {
        toggleDisplay(registerForm, loginForm);
    });
    loginButton.addEventListener('click', function () {
        toggleDisplay(loginForm, registerForm);
    });
    var closeDisplay = function () {
        checkDisplay(registerForm);
        checkDisplay(loginForm);
    };
    document.body.addEventListener('click', closeDisplay);
}
auth && auth.addEventListener('click', function (e) {
    e.stopPropagation();
});
var form = document.getElementsByClassName("form") || null;
var inputType = ["text", "password", "email", "textarea"];
var defaultColor = "#FF9900";
var focusColor = "#5ACAD5";
var changeFormColor = function (e, color) {
    var focusEvent = e.target;
    if (inputType.includes(focusEvent.type)) {
        focusEvent.style.borderColor = color;
        focusEvent.previousElementSibling.style.backgroundColor = color;
    }
};
if (form) {
    for (var i = 0; i < form.length; ++i) {
        form[i].addEventListener('focusin', function (e) { changeFormColor(e, focusColor); });
        form[i].addEventListener('focusout', function (e) { changeFormColor(e, defaultColor); });
    }
}


/***/ }),

/***/ 1:
/*!*****************************************!*\
  !*** multi ./resources/js/authView.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /virtual/networkdesign/Bookshelf/resources/js/authView.tsx */"./resources/js/authView.tsx");


/***/ })

/******/ });