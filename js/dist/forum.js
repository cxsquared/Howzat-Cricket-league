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





var seperator = m("div", {
  className: "PlayerCard-seperator"
}, "|");
var flagUrl = "https://cdn.staticaly.com/gh/hjnilsson/country-flags/master/svg/";

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
    this.showUpdate = false;
    this.playerSkillUpdates = {};
    this.save = this.save.bind(this);
    this.initPlayerUpdateSkills = this.initPlayerUpdateSkills.bind(this);
    this.updateSkill = this.updateSkill.bind(this);
    this.validTpeLimit = this.validTpeLimit.bind(this);
    this.initPlayerUpdateSkills();
    this.errors = [];
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

  _proto.view = function view() {
    var player = this.attrs.player;
    return m("div", {
      className: "PlayerCard"
    }, this.buildHeader(player), this.buildInfo(player));
  };

  _proto.toggleUpdating = function toggleUpdating() {
    this.showUpdate = !this.showUpdate;

    if (this.showUpdate) {
      this.originalState = this.attrs.player;
    }

    m.redraw();
  };

  _proto.save = function save() {
    var _this = this;

    this.saving = true;
    this.player.save(this.playerSkillUpdates).then(function (p) {
      _this.saving = false;
      _this.player = p;
      m.redraw();
    });
    this.toggleUpdating();
  };

  _proto.cancel = function cancel() {
    this.player = this.originalState;
    this.showUpdate = false;
    m.redraw();
  };

  _proto.updateSkill = function updateSkill(skill, tpe) {
    var intTpe = parseInt(tpe);

    if (this.validTpeLimit(skill, intTpe)) {
      this.playerSkillUpdates[skill] = intTpe;
    }
  };

  _proto.buildHeader = function buildHeader(player) {
    var color = this.attrs.color ? this.attrs.color : '#675555';
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

    if (player.canEdit() && !this.saving) {
      if (this.showUpdate) {
        headerButtons.push(m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
          onclick: this.cancel.bind(this),
          className: "Button"
        }, "Cancel"));
        headerButtons.push(m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
          onclick: this.save.bind(this),
          className: "Button Save"
        }, "Save"));
      } else {
        headerButtons.push(m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
          onclick: this.toggleUpdating.bind(this),
          icon: "fas fa-cog",
          className: "Button"
        }, "Update"));
      }
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
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.player.tpe') + ": " + player.tpe()), seperator, m("div", {
      className: "PlayerCard-data"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.player.banked_tpe') + ": " + player.bankedTpe()), seperator)), m("div", {
      className: "PlayerCard-update ButtonGroup"
    }, headerButtons));
  };

  _proto.buildInfo = function buildInfo(player) {
    var battingStats = this.showUpdate ? this.updateBattingStats() : this.showBattingStats(player);
    var batting = this.battingInfo(battingStats);
    var bowlingStats = this.showUpdate ? this.updateBowlingStats() : this.showBowlingStats(player);
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
    var _this2 = this;

    return [m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["running"],
      onchange: function onchange(e) {
        return _this2.updateSkill("running", e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["defense"],
      onchange: function onchange(e) {
        return _this2.updateSkill("defense", e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["attacking"],
      onchange: function onchange(e) {
        return _this2.updateSkill("attacking", e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["lofted"],
      onchange: function onchange(e) {
        return _this2.updateSkill("lofted", e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["vsSpin"],
      onchange: function onchange(e) {
        return _this2.updateSkill("vsSpin", e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["vsPace"],
      onchange: function onchange(e) {
        return _this2.updateSkill("vsPace", e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["footwork"],
      onchange: function onchange(e) {
        return _this2.updateSkill("footwork", e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["timing"],
      onchange: function onchange(e) {
        return _this2.updateSkill("timing", e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["control"],
      onchange: function onchange(e) {
        return _this2.updateSkill("control", e.target.value);
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
    var _this3 = this;

    return [m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["paceFlight"],
      onchange: function onchange(e) {
        return _this3.updateSkill("paceFlight", e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["swingLegSpin"],
      onchange: function onchange(e) {
        return _this3.updateSkill("swingLegSpin", e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["slowerBallOffSpin"],
      onchange: function onchange(e) {
        return _this3.updateSkill("slowerBallOffSpin", e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["seamDrift"],
      onchange: function onchange(e) {
        return _this3.updateSkill("seamDrift", e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["accuracy"],
      onchange: function onchange(e) {
        return _this3.updateSkill("accuracy", e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["discipline"],
      onchange: function onchange(e) {
        return _this3.updateSkill("discipline", e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["bouncerBounce"],
      onchange: function onchange(e) {
        return _this3.updateSkill("bouncerBounce", e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates["yorkerArmBall"],
      onchange: function onchange(e) {
        return _this3.updateSkill("yorkerArmBall", e.target.value);
      }
    }))];
  };

  _proto.validTpeLimit = function validTpeLimit(tpe) {
    // No skill over 15 tpe or under 0
    if (tpe > 99 || tpe < 40) {
      return false;
    }

    return true;
  };

  return PlayerCard;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_2___default.a);



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
          href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route("players.create"),
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
      user: this.user,
      showUser: false,
      color: this.user.color()
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

    if (!this.player) {
      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.find('users', this.user.id() + "/player").then(function (p) {
        _this.showPlayer(p);

        _this.loading = false;
      });
    }
  };

  _proto.showPlayer = function showPlayer(player) {
    this.player = player;
    m.redraw();
  };

  return PlayerUserPage;
}(flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_2___default.a);



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
var _this = undefined;










flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('cxsquared/howzat-cricket-league', function () {
  // New Models
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.store.models.players = _models_Player__WEBPACK_IMPORTED_MODULE_7__["default"]; // New Model Relationships

  flarum_models_User__WEBPACK_IMPORTED_MODULE_6___default.a.prototype.player = flarum_Model__WEBPACK_IMPORTED_MODULE_5___default.a.hasOne('players');
  flarum_models_User__WEBPACK_IMPORTED_MODULE_6___default.a.prototype.submittedUpdates = flarum_Model__WEBPACK_IMPORTED_MODULE_5___default.a.hasMany('updates'); // New Routes
  //app.routes['players'] = { path: '/players', component: PlayersPage.component() };
  //app.routes['player.create'] = { path: '/players/create', component: PlayerCreatePage.component() };

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
      icon: "fas fa-hiking"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('hcl.forum.user.player_link')), 80);
  }); // Adding Create/Manage button to header

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'items', function (items) {
    if (flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user == null) return;
    var player = flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user.player();

    if (player) {
      var href = flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.route('user.player', {
        username: _this.user.username()
      });
      items.add('view-players', m(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: href
      }, flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('hcl.forum.link.players_view')));
    } else {
      //const href = app.route('player.create');
      var _href = flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.route('user.player', {
        username: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user.username()
      });

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

/***/ "flarum/components/HeaderPrimary":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['components/HeaderPrimary']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/HeaderPrimary'];

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

/***/ "flarum/components/Placeholder":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['components/Placeholder']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Placeholder'];

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