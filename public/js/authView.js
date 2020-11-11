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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/auth/ToggleWindow.ts":
/*!*******************************************!*\
  !*** ./resources/js/auth/ToggleWindow.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ToggleWindow = /** @class */ (function () {
    function ToggleWindow(ele, openClass, closeClass) {
        this.ele = ele;
        this.openClass = openClass;
        this.closeClass = closeClass;
        this.classList = ele.classList;
    }
    ToggleWindow.prototype.open = function () {
        this.classList.remove(this.closeClass);
        this.classList.add(this.openClass);
    };
    ToggleWindow.prototype.close = function () {
        this.classList.remove(this.openClass);
        this.classList.add(this.closeClass);
    };
    ToggleWindow.prototype.toggle = function () {
        if (this.classList.contains(this.openClass)) {
            this.close();
        }
        else {
            this.open();
        }
    };
    return ToggleWindow;
}());
exports.default = ToggleWindow;


/***/ }),

/***/ "./resources/js/auth/changeFormColor.ts":
/*!**********************************************!*\
  !*** ./resources/js/auth/changeFormColor.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ./config */ "./resources/js/auth/config.ts");
var changeFormColor = function (e, formFocusClass, labelFocusClass) {
    var focusElement = e.target;
    if (focusElement && focusElement.previousElementSibling) {
        if (config_1.inputAttrType.includes(focusElement.type)) {
            focusElement.classList.toggle(formFocusClass);
            focusElement.previousElementSibling.classList.toggle(labelFocusClass);
        }
    }
};
var form = document.querySelectorAll('.form');
if (form) {
    form.forEach(function (ele) {
        ele.addEventListener('focusin', function (e) { changeFormColor(e, config_1.formFocusClass, config_1.labelFocusClass); });
        ele.addEventListener('focusout', function (e) { changeFormColor(e, config_1.formFocusClass, config_1.labelFocusClass); });
    });
}


/***/ }),

/***/ "./resources/js/auth/config.ts":
/*!*************************************!*\
  !*** ./resources/js/auth/config.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.inputAttrType = exports.errorClass = exports.labelFocusClass = exports.formFocusClass = exports.closeButtonClass = exports.closeClass = exports.openClass = void 0;
exports.openClass = 'form--open';
exports.closeClass = 'form--close';
exports.closeButtonClass = 'form__button--close';
exports.formFocusClass = 'form--focus';
exports.labelFocusClass = 'form__label--focus';
exports.errorClass = 'form__error';
exports.inputAttrType = ["text", "password", "email", "textarea"];


/***/ }),

/***/ "./resources/js/auth/handleAuth.ts":
/*!*****************************************!*\
  !*** ./resources/js/auth/handleAuth.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ./config */ "./resources/js/auth/config.ts");
var ToggleWindow_1 = __importDefault(__webpack_require__(/*! ./ToggleWindow */ "./resources/js/auth/ToggleWindow.ts"));
var auth = document.querySelector('#auth');
var authButtonLogin = document.querySelector('#auth__button--login');
var authButtonRegister = document.querySelector('#auth__button--register');
var authButtonConfig = document.querySelector('#auth__button--config');
var authFormLogin = document.querySelector('#auth__form--login');
var authFormRegister = document.querySelector('#auth__form--register');
var authFormConfig = document.querySelector('#auth__form--config');
var closeButtonList = document.querySelectorAll("." + config_1.closeButtonClass);
if (authButtonLogin &&
    authButtonRegister &&
    authFormLogin &&
    authFormRegister) {
    var toggleWindowLogin_1 = new ToggleWindow_1.default(authFormLogin, config_1.openClass, config_1.closeClass);
    var toggleWindowRegister_1 = new ToggleWindow_1.default(authFormRegister, config_1.openClass, config_1.closeClass);
    authButtonRegister.addEventListener('click', function () {
        toggleWindowRegister_1.toggle();
        toggleWindowLogin_1.close();
    });
    authButtonLogin.addEventListener('click', function () {
        toggleWindowLogin_1.toggle();
        toggleWindowRegister_1.close();
    });
}
if (authFormConfig &&
    authButtonConfig) {
    var toggleWindowConfig_1 = new ToggleWindow_1.default(authFormConfig, config_1.openClass, config_1.closeClass);
    authButtonConfig.addEventListener('click', function () {
        toggleWindowConfig_1.toggle();
    });
}
if (auth) {
    auth.addEventListener('click', function (e) {
        //e.preventDefault()
        //console.log(e.target.classList)
        if (!e.target.classList.contains(config_1.closeButtonClass)) {
            e.stopPropagation();
        }
    });
}
if (closeButtonList) {
    closeButtonList.forEach(function (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault();
        });
    });
}


/***/ }),

/***/ "./resources/js/auth/handleBody.ts":
/*!*****************************************!*\
  !*** ./resources/js/auth/handleBody.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ./config */ "./resources/js/auth/config.ts");
var formWrapperList = document.querySelectorAll('.form__wrapper');
var closeWindow = function (eleList, openClass, closeClass) {
    eleList.forEach(function (ele) {
        ele.classList.remove(openClass);
        ele.classList.add(closeClass);
    });
};
formWrapperList && document.body.addEventListener('click', function () {
    closeWindow(formWrapperList, config_1.openClass, config_1.closeClass);
});


/***/ }),

/***/ "./resources/js/auth/index.ts":
/*!************************************!*\
  !*** ./resources/js/auth/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./handleBody.ts */ "./resources/js/auth/handleBody.ts");
__webpack_require__(/*! ./handleAuth.ts */ "./resources/js/auth/handleAuth.ts");
__webpack_require__(/*! ./changeFormColor.ts */ "./resources/js/auth/changeFormColor.ts");
__webpack_require__(/*! ./validationErrorCheck.ts */ "./resources/js/auth/validationErrorCheck.ts");
__webpack_require__(/*! ./toggleModalWindow.ts */ "./resources/js/auth/toggleModalWindow.ts");


/***/ }),

/***/ "./resources/js/auth/toggleModalWindow.ts":
/*!************************************************!*\
  !*** ./resources/js/auth/toggleModalWindow.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ./config */ "./resources/js/auth/config.ts");
var ToggleWindow_1 = __importDefault(__webpack_require__(/*! ./ToggleWindow */ "./resources/js/auth/ToggleWindow.ts"));
var modal = document.querySelector('#form__modal');
var modalButtonOpen = document.querySelector('#form__modal--open');
var modalButtonClose = document.querySelector('#form__modal--close');
if (modal && modalButtonOpen && modalButtonClose) {
    var toggleModalWindow_1 = new ToggleWindow_1.default(modal, config_1.openClass, config_1.closeClass);
    var modalButtonList = [modalButtonOpen, modalButtonClose];
    modalButtonList.forEach(function (ele) { return ele.addEventListener('click', function (e) {
        e.preventDefault();
        toggleModalWindow_1.toggle();
    }); });
}


/***/ }),

/***/ "./resources/js/auth/validationErrorCheck.ts":
/*!***************************************************!*\
  !*** ./resources/js/auth/validationErrorCheck.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ./config */ "./resources/js/auth/config.ts");
var formWrapperList = document.querySelectorAll('.form__wrapper');
var errorCheck = function (ele, errorClass) {
    var errorElement = ele.querySelector("." + errorClass);
    if (errorElement) {
        ele.classList.add(config_1.openClass);
    }
};
formWrapperList.forEach(function (ele) {
    errorCheck(ele, config_1.errorClass);
});


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

/***/ 2:
/*!****************************************!*\
  !*** multi ./resources/js/authView.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /virtual/networkdesign/Bookshelf/resources/js/authView.ts */"./resources/js/authView.ts");


/***/ })

/******/ });