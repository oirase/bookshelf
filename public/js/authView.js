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

/***/ "./resources/js/auth/body.ts":
/*!***********************************!*\
  !*** ./resources/js/auth/body.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var event_1 = __webpack_require__(/*! ./event */ "./resources/js/auth/event.ts");
var constant_1 = __webpack_require__(/*! ./constant */ "./resources/js/auth/constant.ts");
var auth = document.getElementById('auth') || null;
var form = document.getElementsByClassName("form") || null;
if (form) {
    for (var i = 0; i < form.length; ++i) {
        form[i].addEventListener('focusin', function (e) { event_1.changeFormColor(e, constant_1.focusColor); });
        form[i].addEventListener('focusout', function (e) { event_1.changeFormColor(e, constant_1.defaultColor); });
    }
}
auth && auth.addEventListener('click', function (e) { e.stopPropagation(); });


/***/ }),

/***/ "./resources/js/auth/config.ts":
/*!*************************************!*\
  !*** ./resources/js/auth/config.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var handleClick_1 = __importDefault(__webpack_require__(/*! ./handleClick */ "./resources/js/auth/handleClick.ts"));
var constant_1 = __webpack_require__(/*! ./constant */ "./resources/js/auth/constant.ts");
var configButton = document.getElementById('auth__button--config') || null;
var configForm = document.getElementById('auth__form--config') || null;
if (configButton && configForm) {
    handleClick_1.default(configForm, configButton, constant_1.errorSelector);
}


/***/ }),

/***/ "./resources/js/auth/constant.ts":
/*!***************************************!*\
  !*** ./resources/js/auth/constant.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.errorSelector = exports.focusColor = exports.defaultColor = void 0;
exports.defaultColor = "#FF9900";
exports.focusColor = "#5ACAD5";
exports.errorSelector = '.form__error';


/***/ }),

/***/ "./resources/js/auth/event.ts":
/*!************************************!*\
  !*** ./resources/js/auth/event.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.disabledAdjacencyElement = exports.changeFormColor = exports.errorCheck = exports.toggleDisplay = exports.checkDisplay = void 0;
var inputAttrType = ["text", "password", "email", "textarea"];
exports.checkDisplay = function (ele) {
    var eleStyle = window.getComputedStyle(ele, null).display;
    if (eleStyle === 'block') {
        ele.style.display = 'none';
    }
};
exports.toggleDisplay = function (Element) {
    var eleStyle = window.getComputedStyle(Element, null).display;
    Element.style.display = eleStyle === 'block' ? 'none' : 'block';
};
exports.errorCheck = function (ele, errorSelector) {
    var errorElement = ele.querySelectorAll(errorSelector);
    if (errorElement.length > 0) {
        ele.style.display = 'block';
    }
};
exports.changeFormColor = function (e, color) {
    var focusEvent = e.target;
    if (inputAttrType.includes(focusEvent.type)) {
        focusEvent.style.borderColor = color;
        focusEvent.previousElementSibling.style.backgroundColor = color;
    }
};
var disabledElment = function (ele) {
    var display = window.getComputedStyle(ele, null).display;
    if (display === 'block') {
        ele.style.display = 'none';
    }
};
exports.disabledAdjacencyElement = function (ele) {
    var previous = ele.previousElementSibling || null;
    var next = ele.nextElementSibling || null;
    previous && disabledElment(previous);
    next && disabledElment(next);
};


/***/ }),

/***/ "./resources/js/auth/handleClick.ts":
/*!******************************************!*\
  !*** ./resources/js/auth/handleClick.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleClick = void 0;
var handleEvent = __importStar(__webpack_require__(/*! ./event */ "./resources/js/auth/event.ts"));
exports.handleClick = function (target, button, selector) {
    button.addEventListener('click', function () {
        handleEvent.toggleDisplay(target);
    });
    var closeDisplay = function () {
        handleEvent.checkDisplay(target);
    };
    document.body.addEventListener('click', closeDisplay);
    handleEvent.errorCheck(target, selector);
};
exports.default = exports.handleClick;


/***/ }),

/***/ "./resources/js/auth/index.ts":
/*!************************************!*\
  !*** ./resources/js/auth/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./body.ts */ "./resources/js/auth/body.ts");
__webpack_require__(/*! ./register.ts */ "./resources/js/auth/register.ts");
__webpack_require__(/*! ./login.ts */ "./resources/js/auth/login.ts");
__webpack_require__(/*! ./config.ts */ "./resources/js/auth/config.ts");


/***/ }),

/***/ "./resources/js/auth/login.ts":
/*!************************************!*\
  !*** ./resources/js/auth/login.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var handleClick_1 = __importDefault(__webpack_require__(/*! ./handleClick */ "./resources/js/auth/handleClick.ts"));
var event_1 = __webpack_require__(/*! ./event */ "./resources/js/auth/event.ts");
var constant_1 = __webpack_require__(/*! ./constant */ "./resources/js/auth/constant.ts");
var loginButton = document.getElementById('auth__button--login') || null;
var loginForm = document.getElementById('auth__form--login') || null;
if (loginForm && loginButton) {
    handleClick_1.default(loginForm, loginButton, constant_1.errorSelector);
    loginButton.addEventListener('click', function () { event_1.disabledAdjacencyElement(loginForm); });
}


/***/ }),

/***/ "./resources/js/auth/register.ts":
/*!***************************************!*\
  !*** ./resources/js/auth/register.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var handleClick_1 = __importDefault(__webpack_require__(/*! ./handleClick */ "./resources/js/auth/handleClick.ts"));
var event_1 = __webpack_require__(/*! ./event */ "./resources/js/auth/event.ts");
var constant_1 = __webpack_require__(/*! ./constant */ "./resources/js/auth/constant.ts");
var registerButton = document.getElementById('auth__button--register') || null;
var registerForm = document.getElementById('auth__form--register') || null;
if (registerForm && registerButton) {
    handleClick_1.default(registerForm, registerButton, constant_1.errorSelector);
    registerButton.addEventListener('click', function () { event_1.disabledAdjacencyElement(registerForm); });
}


/***/ }),

/***/ "./resources/js/authView.ts":
/*!**********************************!*\
  !*** ./resources/js/authView.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./auth */ "./resources/js/auth/index.ts");


/***/ }),

/***/ 1:
/*!****************************************!*\
  !*** multi ./resources/js/authView.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /virtual/networkdesign/Bookshelf/resources/js/authView.ts */"./resources/js/authView.ts");


/***/ })

/******/ });