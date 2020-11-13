module.exports =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/models/User */ "flarum/models/User");
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_models_User__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/Player */ "./src/forum/models/Player.js");




flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('cxsquared/howzat-cricket-league', function () {
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.store.models.player = _models_Player__WEBPACK_IMPORTED_MODULE_3__["default"];
  flarum_models_User__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.player = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne('player');
});

/***/ }),

/***/ "./src/forum/models/Player.js":
/*!************************************!*\
  !*** ./src/forum/models/Player.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/computed */ "flarum/utils/computed");
/* harmony import */ var flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3__);





var Player = /*#__PURE__*/function (_Model) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Player, _Model);

  function Player() {
    return _Model.apply(this, arguments) || this;
  }

  return Player;
}(flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a);



Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(Player.prototype, {
  firstName: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('firstName'),
  lastName: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('lastName'),
  age: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('age'),
  height: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('height'),
  weight: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('weight'),
  nationality: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('nationality'),
  bowlingStyle: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('bowlingStyle'),
  running: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('running'),
  defense: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('defense'),
  attacking: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('attacking'),
  lofted: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('lofted'),
  vsSpin: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('vsSpin'),
  vsPace: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('vsPace'),
  footwork: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('footwork'),
  timing: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('timing'),
  control: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('control'),
  pace: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('pace'),
  swing: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('swing'),
  slowerBall: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('slowerBall'),
  seam: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('seam'),
  accuracy: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('accuracy'),
  discipline: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('discipline'),
  bouncer: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('bouncer'),
  yorker: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('yorker'),
  tpe: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('tpe'),
  bankedTpe: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('bankedTpe'),
  tpa: flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3___default()('running', 'defense', 'attacking', 'lofted', 'vsSpin', 'vsPace', 'footwork', 'timing', 'control', 'pace', 'swing', 'slowerBall', 'seam', 'accuracy', 'discipline', 'bouncer', 'yorker', function () {
    for (var _len = arguments.length, stats = new Array(_len), _key = 0; _key < _len; _key++) {
      stats[_key] = arguments[_key];
    }

    return stats.reduce(function (t, n) {
      if (Number.isInteger(n)) {
        return t + n;
      }

      return t;
    }, 0);
  }),
  createdAt: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('createdAt', flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.transformDate),
  updatedAt: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('updatedAt', flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.transaformDate),
  user: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasOne('user'),
  team: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasOne('team')
});

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/models/User":
/*!****************************************************!*\
  !*** external "flarum.core.compat['models/User']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['models/User'];

/***/ }),

/***/ "flarum/utils/computed":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/computed']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/computed'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map