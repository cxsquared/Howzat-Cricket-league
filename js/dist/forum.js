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

/***/ "./node_modules/country-list/country-list.js":
/*!***************************************************!*\
  !*** ./node_modules/country-list/country-list.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var data = __webpack_require__(/*! ./data.json */ "./node_modules/country-list/data.json")

/** Precompute name and code lookups. */
var nameMap = {}
var codeMap = {}
data.forEach(mapCodeAndName)

function mapCodeAndName (country) {
  nameMap[country.name.toLowerCase()] = country.code
  codeMap[country.code.toLowerCase()] = country.name
}

exports.overwrite = function overwrite (countries) {
  if (!countries || !countries.length) return
  countries.forEach(function (country) {
    var foundIndex = data.findIndex(function (item) {
      return item.code === country.code
    })
    data[foundIndex] = country
    mapCodeAndName(country)
  })
}

exports.getCode = function getCode (name) {
  return nameMap[name.toLowerCase()]
}

exports.getName = function getName (code) {
  return codeMap[code.toLowerCase()]
}

exports.getNames = function getNames () {
  return data.map(function (country) {
    return country.name
  })
}

exports.getCodes = function getCodes () {
  return data.map(function (country) {
    return country.code
  })
}

exports.getCodeList = function getCodeList () {
  return codeMap
}

exports.getNameList = function getNameList () {
  return nameMap
}

exports.getData = function getData () {
  return data
}


/***/ }),

/***/ "./node_modules/country-list/data.json":
/*!*********************************************!*\
  !*** ./node_modules/country-list/data.json ***!
  \*********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"code\":\"AD\",\"name\":\"Andorra\"},{\"code\":\"AE\",\"name\":\"United Arab Emirates\"},{\"code\":\"AF\",\"name\":\"Afghanistan\"},{\"code\":\"AG\",\"name\":\"Antigua and Barbuda\"},{\"code\":\"AI\",\"name\":\"Anguilla\"},{\"code\":\"AL\",\"name\":\"Albania\"},{\"code\":\"AM\",\"name\":\"Armenia\"},{\"code\":\"AO\",\"name\":\"Angola\"},{\"code\":\"AQ\",\"name\":\"Antarctica\"},{\"code\":\"AR\",\"name\":\"Argentina\"},{\"code\":\"AS\",\"name\":\"American Samoa\"},{\"code\":\"AT\",\"name\":\"Austria\"},{\"code\":\"AU\",\"name\":\"Australia\"},{\"code\":\"AW\",\"name\":\"Aruba\"},{\"code\":\"AX\",\"name\":\"Åland Islands\"},{\"code\":\"AZ\",\"name\":\"Azerbaijan\"},{\"code\":\"BA\",\"name\":\"Bosnia and Herzegovina\"},{\"code\":\"BB\",\"name\":\"Barbados\"},{\"code\":\"BD\",\"name\":\"Bangladesh\"},{\"code\":\"BE\",\"name\":\"Belgium\"},{\"code\":\"BF\",\"name\":\"Burkina Faso\"},{\"code\":\"BG\",\"name\":\"Bulgaria\"},{\"code\":\"BH\",\"name\":\"Bahrain\"},{\"code\":\"BI\",\"name\":\"Burundi\"},{\"code\":\"BJ\",\"name\":\"Benin\"},{\"code\":\"BL\",\"name\":\"Saint Barthélemy\"},{\"code\":\"BM\",\"name\":\"Bermuda\"},{\"code\":\"BN\",\"name\":\"Brunei Darussalam\"},{\"code\":\"BO\",\"name\":\"Bolivia, Plurinational State of\"},{\"code\":\"BQ\",\"name\":\"Bonaire, Sint Eustatius and Saba\"},{\"code\":\"BR\",\"name\":\"Brazil\"},{\"code\":\"BS\",\"name\":\"Bahamas\"},{\"code\":\"BT\",\"name\":\"Bhutan\"},{\"code\":\"BV\",\"name\":\"Bouvet Island\"},{\"code\":\"BW\",\"name\":\"Botswana\"},{\"code\":\"BY\",\"name\":\"Belarus\"},{\"code\":\"BZ\",\"name\":\"Belize\"},{\"code\":\"CA\",\"name\":\"Canada\"},{\"code\":\"CC\",\"name\":\"Cocos (Keeling) Islands\"},{\"code\":\"CD\",\"name\":\"Congo, Democratic Republic of the\"},{\"code\":\"CF\",\"name\":\"Central African Republic\"},{\"code\":\"CG\",\"name\":\"Congo\"},{\"code\":\"CH\",\"name\":\"Switzerland\"},{\"code\":\"CI\",\"name\":\"Côte d'Ivoire\"},{\"code\":\"CK\",\"name\":\"Cook Islands\"},{\"code\":\"CL\",\"name\":\"Chile\"},{\"code\":\"CM\",\"name\":\"Cameroon\"},{\"code\":\"CN\",\"name\":\"China\"},{\"code\":\"CO\",\"name\":\"Colombia\"},{\"code\":\"CR\",\"name\":\"Costa Rica\"},{\"code\":\"CU\",\"name\":\"Cuba\"},{\"code\":\"CV\",\"name\":\"Cabo Verde\"},{\"code\":\"CW\",\"name\":\"Curaçao\"},{\"code\":\"CX\",\"name\":\"Christmas Island\"},{\"code\":\"CY\",\"name\":\"Cyprus\"},{\"code\":\"CZ\",\"name\":\"Czechia\"},{\"code\":\"DE\",\"name\":\"Germany\"},{\"code\":\"DJ\",\"name\":\"Djibouti\"},{\"code\":\"DK\",\"name\":\"Denmark\"},{\"code\":\"DM\",\"name\":\"Dominica\"},{\"code\":\"DO\",\"name\":\"Dominican Republic\"},{\"code\":\"DZ\",\"name\":\"Algeria\"},{\"code\":\"EC\",\"name\":\"Ecuador\"},{\"code\":\"EE\",\"name\":\"Estonia\"},{\"code\":\"EG\",\"name\":\"Egypt\"},{\"code\":\"EH\",\"name\":\"Western Sahara\"},{\"code\":\"ER\",\"name\":\"Eritrea\"},{\"code\":\"ES\",\"name\":\"Spain\"},{\"code\":\"ET\",\"name\":\"Ethiopia\"},{\"code\":\"FI\",\"name\":\"Finland\"},{\"code\":\"FJ\",\"name\":\"Fiji\"},{\"code\":\"FK\",\"name\":\"Falkland Islands (Malvinas)\"},{\"code\":\"FM\",\"name\":\"Micronesia, Federated States of\"},{\"code\":\"FO\",\"name\":\"Faroe Islands\"},{\"code\":\"FR\",\"name\":\"France\"},{\"code\":\"GA\",\"name\":\"Gabon\"},{\"code\":\"GB\",\"name\":\"United Kingdom of Great Britain and Northern Ireland\"},{\"code\":\"GD\",\"name\":\"Grenada\"},{\"code\":\"GE\",\"name\":\"Georgia\"},{\"code\":\"GF\",\"name\":\"French Guiana\"},{\"code\":\"GG\",\"name\":\"Guernsey\"},{\"code\":\"GH\",\"name\":\"Ghana\"},{\"code\":\"GI\",\"name\":\"Gibraltar\"},{\"code\":\"GL\",\"name\":\"Greenland\"},{\"code\":\"GM\",\"name\":\"Gambia\"},{\"code\":\"GN\",\"name\":\"Guinea\"},{\"code\":\"GP\",\"name\":\"Guadeloupe\"},{\"code\":\"GQ\",\"name\":\"Equatorial Guinea\"},{\"code\":\"GR\",\"name\":\"Greece\"},{\"code\":\"GS\",\"name\":\"South Georgia and the South Sandwich Islands\"},{\"code\":\"GT\",\"name\":\"Guatemala\"},{\"code\":\"GU\",\"name\":\"Guam\"},{\"code\":\"GW\",\"name\":\"Guinea-Bissau\"},{\"code\":\"GY\",\"name\":\"Guyana\"},{\"code\":\"HK\",\"name\":\"Hong Kong\"},{\"code\":\"HM\",\"name\":\"Heard Island and McDonald Islands\"},{\"code\":\"HN\",\"name\":\"Honduras\"},{\"code\":\"HR\",\"name\":\"Croatia\"},{\"code\":\"HT\",\"name\":\"Haiti\"},{\"code\":\"HU\",\"name\":\"Hungary\"},{\"code\":\"ID\",\"name\":\"Indonesia\"},{\"code\":\"IE\",\"name\":\"Ireland\"},{\"code\":\"IL\",\"name\":\"Israel\"},{\"code\":\"IM\",\"name\":\"Isle of Man\"},{\"code\":\"IN\",\"name\":\"India\"},{\"code\":\"IO\",\"name\":\"British Indian Ocean Territory\"},{\"code\":\"IQ\",\"name\":\"Iraq\"},{\"code\":\"IR\",\"name\":\"Iran, Islamic Republic of\"},{\"code\":\"IS\",\"name\":\"Iceland\"},{\"code\":\"IT\",\"name\":\"Italy\"},{\"code\":\"JE\",\"name\":\"Jersey\"},{\"code\":\"JM\",\"name\":\"Jamaica\"},{\"code\":\"JO\",\"name\":\"Jordan\"},{\"code\":\"JP\",\"name\":\"Japan\"},{\"code\":\"KE\",\"name\":\"Kenya\"},{\"code\":\"KG\",\"name\":\"Kyrgyzstan\"},{\"code\":\"KH\",\"name\":\"Cambodia\"},{\"code\":\"KI\",\"name\":\"Kiribati\"},{\"code\":\"KM\",\"name\":\"Comoros\"},{\"code\":\"KN\",\"name\":\"Saint Kitts and Nevis\"},{\"code\":\"KP\",\"name\":\"Korea, Democratic People's Republic of\"},{\"code\":\"KR\",\"name\":\"Korea, Republic of\"},{\"code\":\"KW\",\"name\":\"Kuwait\"},{\"code\":\"KY\",\"name\":\"Cayman Islands\"},{\"code\":\"KZ\",\"name\":\"Kazakhstan\"},{\"code\":\"LA\",\"name\":\"Lao People's Democratic Republic\"},{\"code\":\"LB\",\"name\":\"Lebanon\"},{\"code\":\"LC\",\"name\":\"Saint Lucia\"},{\"code\":\"LI\",\"name\":\"Liechtenstein\"},{\"code\":\"LK\",\"name\":\"Sri Lanka\"},{\"code\":\"LR\",\"name\":\"Liberia\"},{\"code\":\"LS\",\"name\":\"Lesotho\"},{\"code\":\"LT\",\"name\":\"Lithuania\"},{\"code\":\"LU\",\"name\":\"Luxembourg\"},{\"code\":\"LV\",\"name\":\"Latvia\"},{\"code\":\"LY\",\"name\":\"Libya\"},{\"code\":\"MA\",\"name\":\"Morocco\"},{\"code\":\"MC\",\"name\":\"Monaco\"},{\"code\":\"MD\",\"name\":\"Moldova, Republic of\"},{\"code\":\"ME\",\"name\":\"Montenegro\"},{\"code\":\"MF\",\"name\":\"Saint Martin, (French part)\"},{\"code\":\"MG\",\"name\":\"Madagascar\"},{\"code\":\"MH\",\"name\":\"Marshall Islands\"},{\"code\":\"MK\",\"name\":\"North Macedonia\"},{\"code\":\"ML\",\"name\":\"Mali\"},{\"code\":\"MM\",\"name\":\"Myanmar\"},{\"code\":\"MN\",\"name\":\"Mongolia\"},{\"code\":\"MO\",\"name\":\"Macao\"},{\"code\":\"MP\",\"name\":\"Northern Mariana Islands\"},{\"code\":\"MQ\",\"name\":\"Martinique\"},{\"code\":\"MR\",\"name\":\"Mauritania\"},{\"code\":\"MS\",\"name\":\"Montserrat\"},{\"code\":\"MT\",\"name\":\"Malta\"},{\"code\":\"MU\",\"name\":\"Mauritius\"},{\"code\":\"MV\",\"name\":\"Maldives\"},{\"code\":\"MW\",\"name\":\"Malawi\"},{\"code\":\"MX\",\"name\":\"Mexico\"},{\"code\":\"MY\",\"name\":\"Malaysia\"},{\"code\":\"MZ\",\"name\":\"Mozambique\"},{\"code\":\"NA\",\"name\":\"Namibia\"},{\"code\":\"NC\",\"name\":\"New Caledonia\"},{\"code\":\"NE\",\"name\":\"Niger\"},{\"code\":\"NF\",\"name\":\"Norfolk Island\"},{\"code\":\"NG\",\"name\":\"Nigeria\"},{\"code\":\"NI\",\"name\":\"Nicaragua\"},{\"code\":\"NL\",\"name\":\"Netherlands\"},{\"code\":\"NO\",\"name\":\"Norway\"},{\"code\":\"NP\",\"name\":\"Nepal\"},{\"code\":\"NR\",\"name\":\"Nauru\"},{\"code\":\"NU\",\"name\":\"Niue\"},{\"code\":\"NZ\",\"name\":\"New Zealand\"},{\"code\":\"OM\",\"name\":\"Oman\"},{\"code\":\"PA\",\"name\":\"Panama\"},{\"code\":\"PE\",\"name\":\"Peru\"},{\"code\":\"PF\",\"name\":\"French Polynesia\"},{\"code\":\"PG\",\"name\":\"Papua New Guinea\"},{\"code\":\"PH\",\"name\":\"Philippines\"},{\"code\":\"PK\",\"name\":\"Pakistan\"},{\"code\":\"PL\",\"name\":\"Poland\"},{\"code\":\"PM\",\"name\":\"Saint Pierre and Miquelon\"},{\"code\":\"PN\",\"name\":\"Pitcairn\"},{\"code\":\"PR\",\"name\":\"Puerto Rico\"},{\"code\":\"PS\",\"name\":\"Palestine, State of\"},{\"code\":\"PT\",\"name\":\"Portugal\"},{\"code\":\"PW\",\"name\":\"Palau\"},{\"code\":\"PY\",\"name\":\"Paraguay\"},{\"code\":\"QA\",\"name\":\"Qatar\"},{\"code\":\"RE\",\"name\":\"Réunion\"},{\"code\":\"RO\",\"name\":\"Romania\"},{\"code\":\"RS\",\"name\":\"Serbia\"},{\"code\":\"RU\",\"name\":\"Russian Federation\"},{\"code\":\"RW\",\"name\":\"Rwanda\"},{\"code\":\"SA\",\"name\":\"Saudi Arabia\"},{\"code\":\"SB\",\"name\":\"Solomon Islands\"},{\"code\":\"SC\",\"name\":\"Seychelles\"},{\"code\":\"SD\",\"name\":\"Sudan\"},{\"code\":\"SE\",\"name\":\"Sweden\"},{\"code\":\"SG\",\"name\":\"Singapore\"},{\"code\":\"SH\",\"name\":\"Saint Helena, Ascension and Tristan da Cunha\"},{\"code\":\"SI\",\"name\":\"Slovenia\"},{\"code\":\"SJ\",\"name\":\"Svalbard and Jan Mayen\"},{\"code\":\"SK\",\"name\":\"Slovakia\"},{\"code\":\"SL\",\"name\":\"Sierra Leone\"},{\"code\":\"SM\",\"name\":\"San Marino\"},{\"code\":\"SN\",\"name\":\"Senegal\"},{\"code\":\"SO\",\"name\":\"Somalia\"},{\"code\":\"SR\",\"name\":\"Suriname\"},{\"code\":\"SS\",\"name\":\"South Sudan\"},{\"code\":\"ST\",\"name\":\"Sao Tome and Principe\"},{\"code\":\"SV\",\"name\":\"El Salvador\"},{\"code\":\"SX\",\"name\":\"Sint Maarten, (Dutch part)\"},{\"code\":\"SY\",\"name\":\"Syrian Arab Republic\"},{\"code\":\"SZ\",\"name\":\"Eswatini\"},{\"code\":\"TC\",\"name\":\"Turks and Caicos Islands\"},{\"code\":\"TD\",\"name\":\"Chad\"},{\"code\":\"TF\",\"name\":\"French Southern Territories\"},{\"code\":\"TG\",\"name\":\"Togo\"},{\"code\":\"TH\",\"name\":\"Thailand\"},{\"code\":\"TJ\",\"name\":\"Tajikistan\"},{\"code\":\"TK\",\"name\":\"Tokelau\"},{\"code\":\"TL\",\"name\":\"Timor-Leste\"},{\"code\":\"TM\",\"name\":\"Turkmenistan\"},{\"code\":\"TN\",\"name\":\"Tunisia\"},{\"code\":\"TO\",\"name\":\"Tonga\"},{\"code\":\"TR\",\"name\":\"Turkey\"},{\"code\":\"TT\",\"name\":\"Trinidad and Tobago\"},{\"code\":\"TV\",\"name\":\"Tuvalu\"},{\"code\":\"TW\",\"name\":\"Taiwan, Province of China\"},{\"code\":\"TZ\",\"name\":\"Tanzania, United Republic of\"},{\"code\":\"UA\",\"name\":\"Ukraine\"},{\"code\":\"UG\",\"name\":\"Uganda\"},{\"code\":\"UM\",\"name\":\"United States Minor Outlying Islands\"},{\"code\":\"US\",\"name\":\"United States of America\"},{\"code\":\"UY\",\"name\":\"Uruguay\"},{\"code\":\"UZ\",\"name\":\"Uzbekistan\"},{\"code\":\"VA\",\"name\":\"Holy See\"},{\"code\":\"VC\",\"name\":\"Saint Vincent and the Grenadines\"},{\"code\":\"VE\",\"name\":\"Venezuela, Bolivarian Republic of\"},{\"code\":\"VG\",\"name\":\"Virgin Islands, British\"},{\"code\":\"VI\",\"name\":\"Virgin Islands, U.S.\"},{\"code\":\"VN\",\"name\":\"Viet Nam\"},{\"code\":\"VU\",\"name\":\"Vanuatu\"},{\"code\":\"WF\",\"name\":\"Wallis and Futuna\"},{\"code\":\"WS\",\"name\":\"Samoa\"},{\"code\":\"YE\",\"name\":\"Yemen\"},{\"code\":\"YT\",\"name\":\"Mayotte\"},{\"code\":\"ZA\",\"name\":\"South Africa\"},{\"code\":\"ZM\",\"name\":\"Zambia\"},{\"code\":\"ZW\",\"name\":\"Zimbabwe\"}]");

/***/ }),

/***/ "./src/common/utils/PlayerSortMap.js":
/*!*******************************************!*\
  !*** ./src/common/utils/PlayerSortMap.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayerSortMap; });
/**
 * The sort options.
 * We use a class and not just a POJO/function because we want extensions to be able to extend it
 */
var PlayerSortMap = /*#__PURE__*/function () {
  function PlayerSortMap() {}

  var _proto = PlayerSortMap.prototype;

  _proto.sortMap = function sortMap() {
    return {
      first_name_az: 'firstName',
      first_name_za: '-firstName',
      last_name_az: 'lastName',
      last_name_za: '-lastName',
      newest: '-createdAt',
      oldest: 'createdAt',
      newest_update: '-updatedAt',
      oldest_update: 'updatedAt'
    };
  };

  return PlayerSortMap;
}();



/***/ }),

/***/ "./src/common/utils/TpeUtils.js":
/*!**************************************!*\
  !*** ./src/common/utils/TpeUtils.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TpeUtils; });
var TpeUtils = /*#__PURE__*/function () {
  function TpeUtils() {}

  TpeUtils.cost = function cost(tpe) {
    if (tpe < 70) return 1;
    if (tpe < 75) return 2;
    if (tpe < 80) return 3;
    if (tpe < 90) return 5;
    return 10;
  };

  TpeUtils.decrementCost = function decrementCost(tpe) {
    if (tpe > 90) return -10;
    if (tpe > 80) return -5;
    if (tpe > 75) return -3;
    if (tpe > 70) return -2;
    return -1;
  };

  return TpeUtils;
}();



/***/ }),

/***/ "./src/forum/components/PlayerCard.js":
/*!********************************************!*\
  !*** ./src/forum/components/PlayerCard.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayerCard; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _PlayerUpdateModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlayerUpdateModal */ "./src/forum/components/PlayerUpdateModal.js");






var seperator = m("div", {
  className: "PlayerCard-seperator"
}, "|");
var flagUrl = "https://cdn.staticaly.com/gh/hjnilsson/country-flags/master/svg/";
/*
 * Attr
 * player
 * showUser
 */

var PlayerCard = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PlayerCard, _Component);

  function PlayerCard() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = PlayerCard.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);

    this.player = this.attrs.player;
    this.originalState = this.player;
    this.saving = false;
  };

  _proto.view = function view() {
    return m("div", {
      className: "PlayerCard"
    }, this.buildHeader(this.player), this.buildInfo(this.player));
  };

  _proto.toggleUpdating = function toggleUpdating() {
    flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(_PlayerUpdateModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      player: this.player,
      onsave: this.onsave.bind(this)
    });
  };

  _proto.onsave = function onsave(player) {
    this.player = player;
    m.redraw();
  };

  _proto.buildHeader = function buildHeader(player) {
    var color = this.player.user().color() ? this.player.user().color() : '#675555';
    var user = this.player.user();
    var usernameSpan = flarum_helpers_username__WEBPACK_IMPORTED_MODULE_4___default()(user);
    var userLink = null;

    if (this.attrs.showUser && user && usernameSpan[0] !== '[deleted]') {
      userLink = [m("div", {
        className: "PlayerCard-username"
      }, m("a", {
        href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route('user', {
          username: user.username()
        })
      }, usernameSpan)), seperator];
    }

    var headerButtons = [];
    var canEdit = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user === this.player.user() || this.player.canEdit();

    if (canEdit && !this.saving) {
      headerButtons.push(m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        onclick: this.toggleUpdating.bind(this),
        icon: "fas fa-cog",
        className: "Button"
      }, "Update"));
    }

    var countryCode = player.nationality().toLowerCase();
    var nationality = m("div", {
      className: "PlayerCard-data-img"
    }, m("img", {
      src: "" + flagUrl + countryCode + ".svg",
      alt: countryCode
    }));
    return m("div", {
      className: "PlayerCard-header",
      style: color ? {
        backgroundColor: color
      } : ''
    }, m("div", {
      className: "PlayerCard-info"
    }, m("div", {
      className: "PlayerCard-name"
    }, player.firstName() + " " + player.lastName()), nationality, m("div", {
      className: "PlayerCard-subheader"
    }, userLink, m("div", {
      className: "PlayerCard-data"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.player.age') + ": " + player.age()), seperator, m("div", {
      className: "PlayerCard-data"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.player.tpe') + ": " + player.tpe() + " (" + flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.player.banked') + " " + player.bankedTpe() + ")"), seperator, m("div", {
      className: "PlayerCard-data"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.player.tpa') + ": " + player.tpa()))), m("div", {
      className: "PlayerCard-update ButtonGroup"
    }, headerButtons));
  };

  _proto.buildInfo = function buildInfo(player) {
    var battingStats = this.showBattingStats(player);
    var batting = this.battingInfo(battingStats);
    var bowlingStats = this.showBowlingStats(player);
    var bowling = this.bowlingInfo(player, bowlingStats);
    return m("div", {
      className: "PlayerCard-attributes"
    }, batting, bowling);
  };

  _proto.battingInfo = function battingInfo(battingStats) {
    return m("div", {
      className: "PlayerCard-batter"
    }, m("div", {
      className: "PlayerCard-attributes-header"
    }, m("div", {
      className: "PlayerCard-info"
    }, m("b", null, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.player.batting_attributes')))), m("div", {
      className: "PlayerCard-batter-attributes"
    }, m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.player.running')), m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.player.defense')), m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.player.attacking')), m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.player.lofted')), m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.player.vsSpin')), m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.player.vsPace')), m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.player.footwork')), m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.player.timing')), m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.player.control')), battingStats));
  };

  _proto.showBattingStats = function showBattingStats(player) {
    return [m("div", {
      className: "PlayerCard-skill"
    }, player.running()), m("div", {
      className: "PlayerCard-skill"
    }, player.defense()), m("div", {
      className: "PlayerCard-skill"
    }, player.attacking()), m("div", {
      className: "PlayerCard-skill"
    }, player.lofted()), m("div", {
      className: "PlayerCard-skill"
    }, player.vsSpin()), m("div", {
      className: "PlayerCard-skill"
    }, player.vsPace()), m("div", {
      className: "PlayerCard-skill"
    }, player.footwork()), m("div", {
      className: "PlayerCard-skill"
    }, player.timing()), m("div", {
      className: "PlayerCard-skill"
    }, player.control())];
  };

  _proto.updateBattingStats = function updateBattingStats() {
    var _this = this;

    return [m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["running"],
      onchange: function onchange(e) {
        return _this.updateSkill("running", e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["defense"],
      onchange: function onchange(e) {
        return _this.updateSkill("defense", e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["attacking"],
      onchange: function onchange(e) {
        return _this.updateSkill("attacking", e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["lofted"],
      onchange: function onchange(e) {
        return _this.updateSkill("lofted", e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["vsSpin"],
      onchange: function onchange(e) {
        return _this.updateSkill("vsSpin", e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["vsPace"],
      onchange: function onchange(e) {
        return _this.updateSkill("vsPace", e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["footwork"],
      onchange: function onchange(e) {
        return _this.updateSkill("footwork", e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["timing"],
      onchange: function onchange(e) {
        return _this.updateSkill("timing", e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["control"],
      onchange: function onchange(e) {
        return _this.updateSkill("control", e.target.value);
      }
    }))];
  };

  _proto.bowlingInfo = function bowlingInfo(player, stats) {
    var style = player.bowlingStyle();
    return [m("hr", null), m("div", {
      className: "PlayerCard-bowler"
    }, m("div", {
      className: "PlayerCard-attributes-header"
    }, m("div", {
      className: "PlayerCard-info"
    }, m("b", null, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.player.bowler_attributes'))), m("div", {
      className: "PlayerCard-info"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.player.bowling_style') + ": " + flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("hcl.forum.player.style." + style.toLowerCase()))), m("div", {
      className: "PlayerCard-bowler-attributes"
    }, m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("hcl.forum.player.paceFlight." + style)), m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("hcl.forum.player.swingLegSpin." + style)), m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("hcl.forum.player.slowerBallOffSpin." + style)), m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("hcl.forum.player.seamDrift." + style)), m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("hcl.forum.player.accuracy")), m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("hcl.forum.player.discipline")), m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("hcl.forum.player.bouncerBounce." + style)), m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("hcl.forum.player.yorkerArmBall." + style)), stats))];
  };

  _proto.showBowlingStats = function showBowlingStats(player) {
    return [m("div", {
      className: "PlayerCard-skill"
    }, player.paceFlight()), m("div", {
      className: "PlayerCard-skill"
    }, player.swingLegSpin()), m("div", {
      className: "PlayerCard-skill"
    }, player.slowerBallOffSpin()), m("div", {
      className: "PlayerCard-skill"
    }, player.seamDrift()), m("div", {
      className: "PlayerCard-skill"
    }, player.accuracy()), m("div", {
      className: "PlayerCard-skill"
    }, player.discipline()), m("div", {
      className: "PlayerCard-skill"
    }, player.bouncerBounce()), m("div", {
      className: "PlayerCard-skill"
    }, player.yorkerArmBall())];
  };

  _proto.updateBowlingStats = function updateBowlingStats() {
    var _this2 = this;

    return [m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["paceFlight"],
      onchange: function onchange(e) {
        return _this2.updateSkill("paceFlight", e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["swingLegSpin"],
      onchange: function onchange(e) {
        return _this2.updateSkill("swingLegSpin", e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["slowerBallOffSpin"],
      onchange: function onchange(e) {
        return _this2.updateSkill("slowerBallOffSpin", e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["seamDrift"],
      onchange: function onchange(e) {
        return _this2.updateSkill("seamDrift", e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["accuracy"],
      onchange: function onchange(e) {
        return _this2.updateSkill("accuracy", e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["discipline"],
      onchange: function onchange(e) {
        return _this2.updateSkill("discipline", e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["bouncerBounce"],
      onchange: function onchange(e) {
        return _this2.updateSkill("bouncerBounce", e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["yorkerArmBall"],
      onchange: function onchange(e) {
        return _this2.updateSkill("yorkerArmBall", e.target.value);
      }
    }))];
  };

  return PlayerCard;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/components/PlayerCreateCard.js":
/*!**************************************************!*\
  !*** ./src/forum/components/PlayerCreateCard.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayerCreateCard; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/FieldSet */ "flarum/components/FieldSet");
/* harmony import */ var flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var country_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! country-list */ "./node_modules/country-list/country-list.js");
/* harmony import */ var country_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(country_list__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _RequiredSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RequiredSelect */ "./src/forum/components/RequiredSelect.js");







var PlayerCreateCard = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PlayerCreateCard, _Component);

  function PlayerCreateCard() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = PlayerCreateCard.prototype;

  _proto.oninit = function oninit(vnode) {
    var _this = this;

    _Component.prototype.oninit.call(this, vnode);

    this.player = this.attrs.player;
    this.loading = false;
    this.countries = {};
    var names = Object(country_list__WEBPACK_IMPORTED_MODULE_4__["getNames"])().sort();
    names.forEach(function (n) {
      var code = Object(country_list__WEBPACK_IMPORTED_MODULE_4__["getCode"])(n);
      _this.countries[code] = n;
    });
    this.fields = this.fields.bind(this);
  };

  _proto.view = function view() {
    return m("div", {
      className: "Form Form--centered CreatePlayer"
    }, this.fields().toArray());
  };

  _proto.fields = function fields() {
    var _this2 = this;

    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default.a();
    items.add('identity', m(flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "identity",
      label: app.translator.trans('hcl.forum.player.identity')
    }, m("label", {
      "for": "first_name"
    }, app.translator.trans('hcl.forum.player.first_name')), m("input", {
      className: "FormControl",
      name: "firstName",
      id: "first_name",
      type: "text",
      placeholder: "Don",
      minlength: "3",
      maxlength: "50",
      required: true,
      value: this.player.firstName || '',
      onchange: function onchange(e) {
        return _this2.attrs.update("firstName", e.target.value);
      }
    }), m("label", {
      "for": "last_name"
    }, app.translator.trans('hcl.forum.player.last_name')), m("input", {
      className: "FormControl",
      name: "lastName",
      id: "last_name",
      type: "text",
      placeholder: "Bradman",
      minlength: "3",
      maxlength: "50",
      required: true,
      value: this.player.lastName || '',
      onchange: function onchange(e) {
        return _this2.attrs.update("lastName", e.target.value);
      }
    }), m("label", {
      "for": "age"
    }, app.translator.trans('hcl.forum.player.age')), m("input", {
      className: "FormControl",
      name: "age",
      type: "number",
      required: true,
      id: "age",
      min: 18,
      max: 99,
      value: this.player.age || '',
      onchange: function onchange(e) {
        return _this2.attrs.update("age", e.target.value);
      }
    }), m("label", {
      "for": "height"
    }, app.translator.trans('hcl.forum.player.height')), m("input", {
      className: "FormControl",
      name: "height",
      type: "number",
      required: true,
      id: "height",
      min: 120,
      max: 270,
      value: this.player.height || '',
      onchange: function onchange(e) {
        return _this2.attrs.update("height", e.target.value);
      }
    }), m("label", {
      "for": "weight"
    }, app.translator.trans('hcl.forum.player.weight')), m("input", {
      className: "FormControl",
      name: "weight",
      type: "number",
      required: true,
      id: "weight",
      min: 50,
      max: 130,
      value: this.player.weight || '',
      onchange: function onchange(e) {
        return _this2.attrs.update("weight", e.target.value);
      }
    }), m("label", {
      "for": "nationality"
    }, app.translator.trans('hcl.forum.player.country')), m(_RequiredSelect__WEBPACK_IMPORTED_MODULE_5__["default"], {
      value: this.player.nationality,
      id: "nationality",
      options: this.countries,
      onchange: function onchange(v) {
        return _this2.attrs.update("nationality", v);
      }
    }), m("label", {
      "for": "bowling_style"
    }, app.translator.trans('hcl.forum.player.bowling_style')), m(_RequiredSelect__WEBPACK_IMPORTED_MODULE_5__["default"], {
      value: this.player.bowlingStyle,
      id: "bowling_style",
      options: {
        "pace": app.translator.trans('hcl.forum.player.style.pace'),
        "spin": app.translator.trans('hcl.forum.player.style.spin')
      },
      onchange: function onchange(v) {
        return _this2.attrs.update("bowlingStyle", v);
      }
    })), 30);
    return items;
  };

  return PlayerCreateCard;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/PlayerCreatePage.js":
/*!**************************************************!*\
  !*** ./src/forum/components/PlayerCreatePage.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayerCreatePage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PlayerCreateCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlayerCreateCard */ "./src/forum/components/PlayerCreateCard.js");





var PlayerCreatePage = /*#__PURE__*/function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PlayerCreatePage, _Page);

  function PlayerCreatePage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = PlayerCreatePage.prototype;

  _proto.oninit = function oninit(vnode) {
    _Page.prototype.oninit.call(this, vnode);

    if (app.session.user.player()) {
      m.route.set(app.route('user.player', {
        username: app.session.user.username()
      }));
    }

    this.player = {
      firstName: "",
      lastName: ""
    };
  };

  _proto.className = function className() {
    return 'App--page CreatePlayer';
  };

  _proto.title = function title() {
    return app.translator.trans('hcl.forum.player.create');
  };

  _proto.updatePlayer = function updatePlayer(attribute, value) {
    this.player[attribute] = value;
  };

  _proto.view = function view() {
    return m("form", {
      onsubmit: this.onsubmit.bind(this),
      className: "CreatePlayers-Players"
    }, m("div", null, _PlayerCreateCard__WEBPACK_IMPORTED_MODULE_3__["default"].component({
      player: this.player,
      update: this.updatePlayer.bind(this)
    })), m("div", {
      className: "Form-group Submit"
    }, m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "Button Button--primary Button--block",
      type: "submit",
      loading: this.loading
    }, "Create")));
  };

  _proto.onsubmit = function onsubmit(e) {
    var _this = this;

    e.preventDefault();
    this.loading = true;
    var player = app.store.createRecord('players');
    player.save(this.player).then(function (e) {
      _this.loading = false;
      m.route.set(app.route('user.player', {
        username: app.session.user.username()
      }));
    })["catch"](function () {
      _this.loading = false;
    });
  };

  return PlayerCreatePage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/PlayerDirectoryList.js":
/*!*****************************************************!*\
  !*** ./src/forum/components/PlayerDirectoryList.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayerDirectoryList; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/Placeholder */ "flarum/components/Placeholder");
/* harmony import */ var flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _PlayerDirectoryListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PlayerDirectoryListItem */ "./src/forum/components/PlayerDirectoryListItem.js");







/**
 * Based on FoF's UserDirectoryList
 */

var PlayerDirectoryList = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PlayerDirectoryList, _Component);

  function PlayerDirectoryList() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = PlayerDirectoryList.prototype;

  _proto.view = function view() {
    var state = this.attrs.state;
    var params = state.getParams();
    var loading;

    if (state.isLoading()) {
      loading = flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default.a.component();
    } else if (state.moreResults) {
      loading = flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
        className: 'Button',
        onclick: state.loadMore.bind(state)
      }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.page.load_more_button'));
    }

    if (state.empty()) {
      var text = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.page.empty_text');
      return m("div", {
        className: "DiscussionList"
      }, flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_5___default.a.component({
        text: text
      }));
    }

    return m("div", {
      className: 'UserDirectoryList' + (state.isSearchResults() ? ' UserDirectoryList--searchResults' : '')
    }, m("ul", {
      className: "UserDirectoryList-users"
    }, state.players.map(function (player) {
      return m("li", {
        key: player.id(),
        "data-id": player.id()
      }, _PlayerDirectoryListItem__WEBPACK_IMPORTED_MODULE_6__["default"].component({
        player: player,
        params: params
      }));
    })), m("div", {
      className: "UserDirectoryList-loadMore"
    }, loading));
  };

  return PlayerDirectoryList;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/components/PlayerDirectoryListItem.js":
/*!*********************************************************!*\
  !*** ./src/forum/components/PlayerDirectoryListItem.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayerDirectoryListItem; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PlayerCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlayerCard */ "./src/forum/components/PlayerCard.js");




var PlayerDirectoryListItem = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PlayerDirectoryListItem, _Component);

  function PlayerDirectoryListItem() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = PlayerDirectoryListItem.prototype;

  _proto.view = function view() {
    var player = this.attrs.player;
    return m("div", {
      className: "User"
    }, _PlayerCard__WEBPACK_IMPORTED_MODULE_2__["default"].component({
      player: player,
      showUser: true
    }));
  };

  return PlayerDirectoryListItem;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/PlayerDirectoryPage.js":
/*!*****************************************************!*\
  !*** ./src/forum/components/PlayerDirectoryPage.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayerDirectoryPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_components_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/components/Select */ "flarum/components/Select");
/* harmony import */ var flarum_components_Select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/components/SelectDropdown */ "flarum/components/SelectDropdown");
/* harmony import */ var flarum_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _PlayerDirectoryList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PlayerDirectoryList */ "./src/forum/components/PlayerDirectoryList.js");
/* harmony import */ var _states_PlayerDirectoryState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../states/PlayerDirectoryState */ "./src/forum/states/PlayerDirectoryState.js");












/**
 * This page re-uses Flarum's IndexPage CSS classes
 */

var PlayerDirectoryPage = /*#__PURE__*/function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PlayerDirectoryPage, _Page);

  function PlayerDirectoryPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = PlayerDirectoryPage.prototype;

  _proto.oninit = function oninit(vnode) {
    _Page.prototype.oninit.call(this, vnode);

    this.state = new _states_PlayerDirectoryState__WEBPACK_IMPORTED_MODULE_11__["default"]({});
    this.state.refreshParams(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.search.params());
    this.bodyClass = 'User--directory';
  };

  _proto.view = function view() {
    return m("div", {
      className: "IndexPage"
    }, flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_5___default.a.prototype.hero(), m("div", {
      className: "container"
    }, m("div", {
      className: "sideNavContainer"
    }, m("nav", {
      className: "IndexPage-nav sideNav"
    }, m("ul", null, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_4___default()(this.sidebarItems().toArray()))), m("div", {
      className: "IndexPage-results sideNavOffset"
    }, m("div", {
      className: "IndexPage-toolbar"
    }, m("ul", {
      className: "IndexPage-toolbar-view"
    }, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_4___default()(this.viewItems().toArray())), m("ul", {
      className: "IndexPage-toolbar-action"
    }, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_4___default()(this.actionItems().toArray()))), m(_PlayerDirectoryList__WEBPACK_IMPORTED_MODULE_10__["default"], {
      state: this.state
    })))));
  }
  /**
   * Our own sidebar. Re-uses Index.sidebarItems as the base
   * Elements added here will only show up on the user directory page
   *
   * @return {ItemList}
   */
  ;

  _proto.sidebarItems = function sidebarItems() {
    var items = flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_5___default.a.prototype.sidebarItems();
    items.replace('nav', flarum_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_9___default.a.component({
      buttonClassName: 'Button',
      className: 'App-titleControl'
    }, this.navItems().toArray()));
    return items;
  }
  /**
   * Our own sidebar navigation. Re-uses Index.navItems as the base
   * Elements added here will only show up on the user directory page
   *
   * @return {ItemList}
   */
  ;

  _proto.navItems = function navItems() {
    var items = flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_5___default.a.prototype.navItems();
    var params = this.stickyParams();
    items.add('hcl-player-directory', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_8___default.a.component({
      href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route('players', params),
      icon: 'far fa-address-book'
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.page.player_directory')), 85);
    return items;
  };

  _proto.viewItems = function viewItems() {
    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default.a();
    var sortMap = this.state.sortMap();
    var sortOptions = {};

    for (var i in sortMap) {
      sortOptions[i] = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.lib.sort.' + i);
    }

    items.add('sort', flarum_components_Select__WEBPACK_IMPORTED_MODULE_6___default.a.component({
      options: sortOptions,
      value: this.params().sort || 'newest',
      onchange: this.changeSort.bind(this)
    }));
    return items;
  };

  _proto.actionItems = function actionItems() {
    var _this = this;

    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default.a();
    items.add('refresh', flarum_components_Button__WEBPACK_IMPORTED_MODULE_7___default.a.component({
      title: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.page.refresh_tooltip'),
      icon: 'fas fa-sync',
      className: 'Button Button--icon',
      onclick: function onclick() {
        _this.state.refresh();

        if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.player()) {
          flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.find('players', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.player().id());
          m.redraw();
        }
      }
    }));
    return items;
  }
  /**
   * Redirect to the index page using the given sort parameter.
   *
   * @param {String} sort
   */
  ;

  _proto.changeSort = function changeSort(sort) {
    var params = this.params();

    if (sort === 'newest') {
      delete params.sort;
    } else {
      params.sort = sort;
    }

    m.route.set(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route(this.attrs.routeName, params));
  };

  _proto.stickyParams = function stickyParams() {
    return {
      sort: m.route.param('sort'),
      q: m.route.param('q')
    };
  };

  _proto.params = function params() {
    return this.stickyParams();
  };

  return PlayerDirectoryPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/components/PlayerUpdateModal.js":
/*!***************************************************!*\
  !*** ./src/forum/components/PlayerUpdateModal.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayerUpdateModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_utils_TpeUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/utils/TpeUtils */ "./src/common/utils/TpeUtils.js");




 // Player
// OnSave

var PlayerUpdateModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PlayerUpdateModal, _Modal);

  function PlayerUpdateModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = PlayerUpdateModal.prototype;

  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);

    this.player = this.attrs.player;
    this.originalState = this.player;
    this.saving = false;
    this.playerSkillUpdates = {};
    this.spentTpe = 0;
    this.initPlayerUpdateSkills();
    this.errors = [];
  };

  _proto.className = function className() {
    return 'PlayerUpdateModal';
  };

  _proto.title = function title() {
    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.player.update.title');
  };

  _proto.content = function content() {
    var tpe = m("div", {
      className: "PlayerUpdate--tpe"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.player.update.banked_tpe') + ": " + (this.player.bankedTpe() - this.spentTpe));
    var batting = m("div", {
      className: "PlayerUpdate--batting"
    }, m("div", {
      className: "PlayerUpdate--header"
    }, m("div", {
      className: "PlayerUpdate--info"
    }, m("b", null, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.player.batting_attributes')))), m("div", {
      className: "PlayerUpdate--skills"
    }, m("div", {
      className: "PlayerUpdate--item PlayerUpdate--header"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.player.update.skill')), m("div", {
      className: "PlayerUpdate--item PlayerUpdate--header"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.player.update.tpe')), m("div", {
      className: "PlayerUpdate--item PlayerUpdate--header"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.player.update.cost')), m("div", {
      className: "PlayerUpdate--item PlayerUpdate--header"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.player.update.update')), this.skillRow("running"), this.skillRow("defense"), this.skillRow("attacking"), this.skillRow("lofted"), this.skillRow("vsSpin"), this.skillRow("vsPace"), this.skillRow("footwork"), this.skillRow("timing"), this.skillRow("control")));
    var style = this.player.bowlingStyle();
    var bowling = m("div", {
      className: "PlayerUpdate--bowling"
    }, m("div", {
      className: "PlayerUpdate--header"
    }, m("div", {
      className: "PlayerUpdate--info"
    }, m("b", null, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.player.bowler_attributes')))), m("div", {
      className: "PlayerUpdate--skills"
    }, m("div", {
      className: "PlayerUpdate--item PlayerUpdate--header"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.player.update.skill')), m("div", {
      className: "PlayerUpdate--item PlayerUpdate--header"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.player.update.tpe')), m("div", {
      className: "PlayerUpdate--item PlayerUpdate--header"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.player.update.cost')), m("div", {
      className: "PlayerUpdate--item PlayerUpdate--header"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.player.update.update')), this.skillRow("paceFlight", style), this.skillRow("swingLegSpin", style), this.skillRow("slowerBallOffSpin", style), this.skillRow("seamDrift", style), this.skillRow("accuracy"), this.skillRow("discipline"), this.skillRow("bouncerBounce", style), this.skillRow("yorkerArmBall", style)));
    var save = m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      type: "submit",
      className: "Button Button--primary",
      loading: this.saving,
      disabled: this.saving
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.basics.save'));
    return m("div", {
      classname: "PlayerUpdate"
    }, tpe, batting, bowling, save);
  };

  _proto.skillRow = function skillRow(skill, style) {
    var name = skill;
    if (!!style) name += "." + style;
    return [m("div", {
      className: "PlayerUpdate--item PlayerUpdate--skill"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("hcl.forum.player." + name)), this.currentTpe(skill), this.currentCost(skill), this.updateButtons(skill)];
  };

  _proto.currentTpe = function currentTpe(skill) {
    var originalValue = this.player.data.attributes[skill];
    var newValue = this.playerSkillUpdates[skill];
    var className = "PlayerUpdate--item PlayerUpdate--tpe";
    if (originalValue != newValue) className += " PlayerUpdate--updated";
    return m("div", {
      className: className
    }, newValue);
  };

  _proto.currentCost = function currentCost(skill) {
    var cost = _common_utils_TpeUtils__WEBPACK_IMPORTED_MODULE_4__["default"].cost(this.playerSkillUpdates[skill]);
    var className = "PlayerUpdate--item PlayerUpdate--cost";
    if (cost > this.tpeLeft()) className = "PlayerUpdate--warning";
    return m("div", {
      className: className
    }, cost);
  };

  _proto.updateButtons = function updateButtons(skill) {
    var _this = this;

    var currentTpe = this.playerSkillUpdates[skill];
    var increaseDisabled = _common_utils_TpeUtils__WEBPACK_IMPORTED_MODULE_4__["default"].cost(currentTpe) > this.tpeLeft();
    var decreaseDisabled = currentTpe <= this.player.data.attributes[skill] || currentTpe === 40;
    return m("div", {
      className: "PlayerUpdate--item PlayerUpdate--buttons"
    }, m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      type: "button",
      className: "Button PlayerUpdate--decrease",
      disabled: decreaseDisabled,
      icon: "fas fa-minus",
      onclick: function onclick() {
        return _this.updateSkill(skill, _common_utils_TpeUtils__WEBPACK_IMPORTED_MODULE_4__["default"].decrementCost(currentTpe));
      }
    }), m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      type: "button",
      className: "Button PlayerUpdate--increase",
      disabled: increaseDisabled,
      icon: "fas fa-plus",
      onclick: function onclick() {
        return _this.updateSkill(skill, _common_utils_TpeUtils__WEBPACK_IMPORTED_MODULE_4__["default"].cost(currentTpe));
      }
    }));
  };

  _proto.onsubmit = function onsubmit(e) {
    var _this2 = this;

    e.preventDefault();
    this.saving = true;
    this.player.save(this.playerSkillUpdates).then(function (p) {
      _this2.saving = false;

      _this2.attrs.onsave(p);

      _this2.hide();
    })["catch"](function (e) {
      _this2.saving = false;
      _this2.player = _this2.originalState;

      _this2.initPlayerUpdateSkills();

      _this2.onerror(e); // calls redraw

    });
  };

  _proto.initPlayerUpdateSkills = function initPlayerUpdateSkills() {
    // Batter
    this.playerSkillUpdates["running"] = this.player.running();
    this.playerSkillUpdates["defense"] = this.player.defense();
    this.playerSkillUpdates["attacking"] = this.player.attacking();
    this.playerSkillUpdates["lofted"] = this.player.lofted();
    this.playerSkillUpdates["vsSpin"] = this.player.vsSpin();
    this.playerSkillUpdates["vsPace"] = this.player.vsPace();
    this.playerSkillUpdates["footwork"] = this.player.footwork();
    this.playerSkillUpdates["timing"] = this.player.timing();
    this.playerSkillUpdates["control"] = this.player.control();
    this.playerSkillUpdates["paceFlight"] = this.player.paceFlight();
    this.playerSkillUpdates["swingLegSpin"] = this.player.swingLegSpin();
    this.playerSkillUpdates["slowerBallOffSpin"] = this.player.slowerBallOffSpin();
    this.playerSkillUpdates["seamDrift"] = this.player.seamDrift();
    this.playerSkillUpdates["accuracy"] = this.player.accuracy();
    this.playerSkillUpdates["discipline"] = this.player.discipline();
    this.playerSkillUpdates["bouncerBounce"] = this.player.bouncerBounce();
    this.playerSkillUpdates["yorkerArmBall"] = this.player.yorkerArmBall();
  };

  _proto.updateSkill = function updateSkill(skill, tpe) {
    var currentTpe = this.playerSkillUpdates[skill];
    var newTpe = currentTpe + tpe;
    if (newTpe > 99 || newTpe < 40 || this.tpeLeft() - tpe < 0) return;
    this.spentTpe += tpe;
    this.playerSkillUpdates[skill] = newTpe;
  };

  _proto.tpeLeft = function tpeLeft() {
    return this.player.bankedTpe() - this.spentTpe;
  };

  return PlayerUpdateModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2___default.a);


;

/***/ }),

/***/ "./src/forum/components/PlayerUserPage.js":
/*!************************************************!*\
  !*** ./src/forum/components/PlayerUserPage.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayerUserPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/UserPage */ "flarum/components/UserPage");
/* harmony import */ var flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Placeholder */ "flarum/components/Placeholder");
/* harmony import */ var flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _PlayerCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PlayerCard */ "./src/forum/components/PlayerCard.js");







/**
 * The `PlayerUserPage` component shows a user's players inside
 * of their profile.
 */

var PlayerUserPage = /*#__PURE__*/function (_UserPage) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PlayerUserPage, _UserPage);

  function PlayerUserPage() {
    return _UserPage.apply(this, arguments) || this;
  }

  var _proto = PlayerUserPage.prototype;

  _proto.oninit = function oninit(vnode) {
    _UserPage.prototype.oninit.call(this, vnode);
    /**
     * Whether or not we are loading the players
     * 
     * @type {Boolean}
     */


    this.loading = true;
    /**
     * @type {Player}
     */

    this.player = null;
    this.loadUser(m.route.param('username'));
  };

  _proto.onremove = function onremove() {
    this.player = null;
  };

  _proto.content = function content() {
    if (!this.player && !this.loading) {
      var createNew = null;

      if (this.user === flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user) {
        createNew = m(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route("player.create"),
          className: "Button PlayersCreate"
        }, "Create Players");
      }

      return m("div", {
        className: "PlayersUserPage"
      }, m(flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_3___default.a, {
        text: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.user.players_empty_text')
      }), createNew);
    }

    if (this.loading) {
      return flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default.a.component();
    }

    return m("div", {
      className: "PlayersUserPage"
    }, m("ul", {
      className: "PlayersUserPage-list"
    }, m("li", null, m(_PlayerCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      player: this.player,
      showUser: false
    }))));
  }
  /**
   * Initialize the component with a user, and trigger the loading
   * of their players.
   */
  ;

  _proto.show = function show(user) {
    _UserPage.prototype.show.call(this, user);

    this.refresh();
  }
  /**
   * Clear and reload the user's players.
   */
  ;

  _proto.refresh = function refresh() {
    this.loading = true;
    this.player = null;
    m.redraw();
    this.loadPlayers();
  };

  _proto.loadPlayers = function loadPlayers() {
    var _this = this;

    flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.preloadedApiDocument();
    flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.all('players').some(function (player) {
      if (player.user() === _this.user) {
        _this.showPlayer(player);

        return true;
      }
    });

    if (!this.player) {
      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.find('users', this.user.id() + "/player", null, {
        errorHandler: function errorHandler() {}
      }).then(function (p) {
        if (p) _this.showPlayer(p);
      })["catch"](function () {
        _this.loading = false;
        _this.player = null;
        m.redraw();
      });
    }
  };

  _proto.showPlayer = function showPlayer(player) {
    this.player = player;
    this.loading = false;
    m.redraw();
  };

  return PlayerUserPage;
}(flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/components/RequiredSelect.js":
/*!************************************************!*\
  !*** ./src/forum/components/RequiredSelect.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RequiredSelect; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_withAttr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/withAttr */ "flarum/utils/withAttr");
/* harmony import */ var flarum_utils_withAttr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_withAttr__WEBPACK_IMPORTED_MODULE_3__);





var RequiredSelect = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(RequiredSelect, _Component);

  function RequiredSelect() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = RequiredSelect.prototype;

  _proto.view = function view() {
    var _this$attrs = this.attrs,
        options = _this$attrs.options,
        onchange = _this$attrs.onchange,
        value = _this$attrs.value,
        disabled = _this$attrs.disabled,
        id = _this$attrs.id;
    return m("span", {
      className: "Select"
    }, m("select", {
      className: "Select-input FormControl",
      id: id,
      required: true,
      onchange: onchange ? flarum_utils_withAttr__WEBPACK_IMPORTED_MODULE_3___default()('value', onchange.bind(this)) : undefined,
      value: value
    }, "disabled=", disabled, Object.keys(options).map(function (key) {
      return m("option", {
        value: key
      }, options[key]);
    })), flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()('fas fa-sort', {
      className: 'Select-caret'
    }));
  };

  return RequiredSelect;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



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
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/HeaderPrimary */ "flarum/components/HeaderPrimary");
/* harmony import */ var flarum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/UserPage */ "flarum/components/UserPage");
/* harmony import */ var flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/models/User */ "flarum/models/User");
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_models_User__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _models_Player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/Player */ "./src/forum/models/Player.js");
/* harmony import */ var _components_PlayerUserPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/PlayerUserPage */ "./src/forum/components/PlayerUserPage.js");
/* harmony import */ var _components_PlayerCreatePage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/PlayerCreatePage */ "./src/forum/components/PlayerCreatePage.js");
/* harmony import */ var _components_PlayerDirectoryPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/PlayerDirectoryPage */ "./src/forum/components/PlayerDirectoryPage.js");











flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('cxsquared/howzat-cricket-league', function () {
  // New Models
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.store.models.players = _models_Player__WEBPACK_IMPORTED_MODULE_7__["default"]; // New Model Relationships

  flarum_models_User__WEBPACK_IMPORTED_MODULE_6___default.a.prototype.player = flarum_Model__WEBPACK_IMPORTED_MODULE_5___default.a.hasOne('player');
  flarum_models_User__WEBPACK_IMPORTED_MODULE_6___default.a.prototype.submittedUpdates = flarum_Model__WEBPACK_IMPORTED_MODULE_5___default.a.hasMany('updates'); // New Routes

  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.routes['players'] = {
    path: '/players',
    component: _components_PlayerDirectoryPage__WEBPACK_IMPORTED_MODULE_10__["default"]
  };
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.routes['player.create'] = {
    path: '/player/create',
    component: _components_PlayerCreatePage__WEBPACK_IMPORTED_MODULE_9__["default"]
  };
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.routes['user.player'] = {
    path: '/u/:username/player',
    component: _components_PlayerUserPage__WEBPACK_IMPORTED_MODULE_8__["default"]
  }; // Adding player button to UserPage

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_4___default.a.prototype, 'navItems', function (items) {
    var href = flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.route('user.player', {
      username: this.user.username()
    });
    items.add('players', m(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: href,
      icon: "fas fa-hiking",
      "class": "Button Button--link"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('hcl.forum.user.player_link')), 80);
  }); // Adding Create/Manage button to header

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'items', function (items) {
    if (flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user == null) return;
    var player = flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user.player();

    if (player) {
      var href = flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.route('user.player', {
        username: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user.username()
      });
      items.add('view-players', m(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: href
      }, flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('hcl.forum.link.players_view')));
    } else {
      var _href = flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.route('player.create');

      items.add('create-players', m(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: _href
      }, flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('hcl.forum.link.players_create')));
    }
  });
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
  paceFlight: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('paceFlight'),
  swingLegSpin: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('swingLegSpin'),
  slowerBallOffSpin: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('slowerBallOffSpin'),
  seamDrift: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('seamDrift'),
  accuracy: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('accuracy'),
  discipline: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('discipline'),
  bouncerBounce: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('bouncerBounce'),
  yorkerArmBall: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('yorkerArmBall'),
  tpe: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('tpe'),
  bankedTpe: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('bankedTpe'),
  tpa: flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3___default()('running', 'defense', 'attacking', 'lofted', 'vsSpin', 'vsPace', 'footwork', 'timing', 'control', 'paceFlight', 'swingLegSpin', 'slowerBallOffSpin', 'seamDrift', 'accuracy', 'discipline', 'bouncerBounce', 'yorkerArmBall', function () {
    for (var _len = arguments.length, stats = new Array(_len), _key = 0; _key < _len; _key++) {
      stats[_key] = arguments[_key];
    }

    return stats.reduce(function (t, n) {
      if (Number.isInteger(n)) {
        var tpa = n - 40;
        var totalTpa = 0;

        while (tpa > 0) {
          if (tpa > 50) {
            totalTpa += 10;
          } else if (tpa > 40) {
            totalTpa += 5;
          } else if (tpa > 35) {
            totalTpa += 3;
          } else if (tpa > 30) {
            totalTpa += 2;
          } else {
            totalTpa += 1;
          }

          tpa--;
        }

        return t + totalTpa;
      }

      return t;
    }, 0);
  }),
  createdAt: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('createdAt', flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.transformDate),
  updatedAt: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('updatedAt', flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.transaformDate),
  canEdit: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('canEdit'),
  user: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasOne('user'),
  team: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasOne('team'),
  isPaceBowler: flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3___default()('bowlingStyle', function (bs) {
    return bs.toLowerCase() === "pace";
  })
});

/***/ }),

/***/ "./src/forum/states/PlayerDirectoryState.js":
/*!**************************************************!*\
  !*** ./src/forum/states/PlayerDirectoryState.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayersState; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _common_utils_PlayerSortMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/utils/PlayerSortMap */ "./src/common/utils/PlayerSortMap.js");


/**
 * Based on Flarum's DiscussionListState
 */


var PlayersState = /*#__PURE__*/function () {
  function PlayersState(params, app) {
    if (params === void 0) {
      params = {};
    }

    if (app === void 0) {
      app = window.app;
    }

    this.params = params;
    this.app = app;
    this.players = [];
    this.moreResults = false;
    this.loading = false;
  }

  var _proto = PlayersState.prototype;

  _proto.requestParams = function requestParams() {
    var params = {
      include: [],
      filter: {}
    };
    var sortKey = this.params.sort || 'newest';
    params.sort = this.sortMap()[sortKey];

    if (this.params.q) {
      params.filter.q = this.params.q;
    }

    return params;
  };

  _proto.sortMap = function sortMap() {
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      "default": ''
    }, new _common_utils_PlayerSortMap__WEBPACK_IMPORTED_MODULE_1__["default"]().sortMap());
  };

  _proto.getParams = function getParams() {
    return this.params;
  };

  _proto.clear = function clear() {
    this.players = [];
    m.redraw();
  };

  _proto.refreshParams = function refreshParams(newParams) {
    var _this = this;

    var hasNewParams = Object.keys(newParams).some(function (key) {
      return _this.getParams()[key] != newParams[key];
    });

    if (!this.hasPlayers() || hasNewParams) {
      this.params = newParams;
      this.refresh();
    }
  };

  _proto.refresh = function refresh() {
    var _this2 = this;

    this.loading = true;
    this.clear();
    return this.loadResults().then(function (results) {
      _this2.parseResults(results);
    }, function () {
      _this2.loading = false;
      m.redraw();
    });
  };

  _proto.loadResults = function loadResults(offset) {
    var preloadedPlayers = this.app.preloadedApiDocument();

    if (preloadedPlayers) {
      return Promise.resolve(preloadedPlayers);
    }

    var params = this.requestParams();
    params.page = {
      offset: offset
    };
    params.include = params.include.join(',');
    return this.app.store.find('players', params);
  };

  _proto.loadMore = function loadMore() {
    this.loading = true;
    this.loadResults(this.players.length).then(this.parseResults.bind(this));
  };

  _proto.parseResults = function parseResults(results) {
    var _this$players;

    (_this$players = this.players).push.apply(_this$players, results);

    this.loading = false;
    this.moreResults = !!results.payload.links && !!results.payload.links.next;
    m.redraw();
    return results;
  };

  _proto.hasPlayers = function hasPlayers() {
    return this.players.length > 0;
  };

  _proto.isLoading = function isLoading() {
    return this.loading;
  };

  _proto.isSearchResults = function isSearchResults() {
    return !!this.params.q;
  };

  _proto.empty = function empty() {
    return !this.hasPlayers() && !this.isLoading();
  };

  return PlayersState;
}();



/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

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

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/FieldSet":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/FieldSet']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/FieldSet'];

/***/ }),

/***/ "flarum/components/HeaderPrimary":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['components/HeaderPrimary']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/HeaderPrimary'];

/***/ }),

/***/ "flarum/components/IndexPage":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['components/IndexPage']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/IndexPage'];

/***/ }),

/***/ "flarum/components/LinkButton":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/LinkButton']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LinkButton'];

/***/ }),

/***/ "flarum/components/LoadingIndicator":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/LoadingIndicator']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LoadingIndicator'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/components/Placeholder":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['components/Placeholder']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Placeholder'];

/***/ }),

/***/ "flarum/components/Select":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Select']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Select'];

/***/ }),

/***/ "flarum/components/SelectDropdown":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['components/SelectDropdown']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SelectDropdown'];

/***/ }),

/***/ "flarum/components/UserPage":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/UserPage']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/UserPage'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/icon":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['helpers/icon']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/icon'];

/***/ }),

/***/ "flarum/helpers/listItems":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/listItems']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/listItems'];

/***/ }),

/***/ "flarum/helpers/username":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['helpers/username']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/username'];

/***/ }),

/***/ "flarum/models/User":
/*!****************************************************!*\
  !*** external "flarum.core.compat['models/User']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['models/User'];

/***/ }),

/***/ "flarum/utils/ItemList":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/ItemList']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/ItemList'];

/***/ }),

/***/ "flarum/utils/computed":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/computed']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/computed'];

/***/ }),

/***/ "flarum/utils/withAttr":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/withAttr']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/withAttr'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map