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

/***/ "./node_modules/color-convert/conversions.js":
/*!***************************************************!*\
  !*** ./node_modules/color-convert/conversions.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var cssKeywords = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js");

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in cssKeywords) {
	if (cssKeywords.hasOwnProperty(key)) {
		reverseKeywords[cssKeywords[key]] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

// hide .channels and .labels properties
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var rdif;
	var gdif;
	var bdif;
	var h;
	var s;

	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var v = Math.max(r, g, b);
	var diff = v - Math.min(r, g, b);
	var diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}
		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in cssKeywords) {
		if (cssKeywords.hasOwnProperty(keyword)) {
			var value = cssKeywords[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}

	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};


/***/ }),

/***/ "./node_modules/color-convert/index.js":
/*!*********************************************!*\
  !*** ./node_modules/color-convert/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color-convert/conversions.js");
var route = __webpack_require__(/*! ./route */ "./node_modules/color-convert/route.js");

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

module.exports = convert;


/***/ }),

/***/ "./node_modules/color-convert/route.js":
/*!*********************************************!*\
  !*** ./node_modules/color-convert/route.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color-convert/conversions.js");

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	var graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	var models = Object.keys(conversions);

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

module.exports = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};



/***/ }),

/***/ "./node_modules/color-name/index.js":
/*!******************************************!*\
  !*** ./node_modules/color-name/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),

/***/ "./node_modules/color-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/color-string/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var colorNames = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js");
var swizzle = __webpack_require__(/*! simple-swizzle */ "./node_modules/simple-swizzle/index.js");

var reverseNames = {};

// create a list of reverse color names
for (var name in colorNames) {
	if (colorNames.hasOwnProperty(name)) {
		reverseNames[colorNames[name]] = name;
	}
}

var cs = module.exports = {
	to: {},
	get: {}
};

cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}

	if (!val) {
		return null;
	}

	return {model: model, value: val};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var keyword = /(\D+)/;

	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = parseInt(hexAlpha, 16) / 255;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		rgb = colorNames[match[1]];

		if (!rgb) {
			return null;
		}

		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	var hsl = /^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hsl);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = (parseFloat(match[1]) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	var hwb = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hwb);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function () {
	var rgba = swizzle(arguments);

	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function () {
	var rgba = swizzle(arguments);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function () {
	var rgba = swizzle(arguments);

	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function () {
	var hsla = swizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function () {
	var hwba = swizzle(arguments);

	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// helpers
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
	var str = num.toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}


/***/ }),

/***/ "./node_modules/color/index.js":
/*!*************************************!*\
  !*** ./node_modules/color/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var colorString = __webpack_require__(/*! color-string */ "./node_modules/color-string/index.js");
var convert = __webpack_require__(/*! color-convert */ "./node_modules/color-convert/index.js");

var _slice = [].slice;

var skippedModels = [
	// to be honest, I don't really feel like keyword belongs in color convert, but eh.
	'keyword',

	// gray conflicts with some method names, and has its own method defined.
	'gray',

	// shouldn't really be in color-convert either...
	'hex'
];

var hashedModelKeys = {};
Object.keys(convert).forEach(function (model) {
	hashedModelKeys[_slice.call(convert[model].labels).sort().join('')] = model;
});

var limiters = {};

function Color(obj, model) {
	if (!(this instanceof Color)) {
		return new Color(obj, model);
	}

	if (model && model in skippedModels) {
		model = null;
	}

	if (model && !(model in convert)) {
		throw new Error('Unknown model: ' + model);
	}

	var i;
	var channels;

	if (obj == null) { // eslint-disable-line no-eq-null,eqeqeq
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (obj instanceof Color) {
		this.model = obj.model;
		this.color = obj.color.slice();
		this.valpha = obj.valpha;
	} else if (typeof obj === 'string') {
		var result = colorString.get(obj);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + obj);
		}

		this.model = result.model;
		channels = convert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (obj.length) {
		this.model = model || 'rgb';
		channels = convert[this.model].channels;
		var newArr = _slice.call(obj, 0, channels);
		this.color = zeroArray(newArr, channels);
		this.valpha = typeof obj[channels] === 'number' ? obj[channels] : 1;
	} else if (typeof obj === 'number') {
		// this is always RGB - can be converted later on.
		obj &= 0xFFFFFF;
		this.model = 'rgb';
		this.color = [
			(obj >> 16) & 0xFF,
			(obj >> 8) & 0xFF,
			obj & 0xFF
		];
		this.valpha = 1;
	} else {
		this.valpha = 1;

		var keys = Object.keys(obj);
		if ('alpha' in obj) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof obj.alpha === 'number' ? obj.alpha : 0;
		}

		var hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(obj));
		}

		this.model = hashedModelKeys[hashedKeys];

		var labels = convert[this.model].labels;
		var color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(obj[labels[i]]);
		}

		this.color = zeroArray(color);
	}

	// perform limitations (clamping, etc.)
	if (limiters[this.model]) {
		channels = convert[this.model].channels;
		for (i = 0; i < channels; i++) {
			var limit = limiters[this.model][i];
			if (limit) {
				this.color[i] = limit(this.color[i]);
			}
		}
	}

	this.valpha = Math.max(0, Math.min(1, this.valpha));

	if (Object.freeze) {
		Object.freeze(this);
	}
}

Color.prototype = {
	toString: function () {
		return this.string();
	},

	toJSON: function () {
		return this[this.model]();
	},

	string: function (places) {
		var self = this.model in colorString.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to[self.model](args);
	},

	percentString: function (places) {
		var self = this.rgb().round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to.rgb.percent(args);
	},

	array: function () {
		return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
	},

	object: function () {
		var result = {};
		var channels = convert[this.model].channels;
		var labels = convert[this.model].labels;

		for (var i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}

		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}

		return result;
	},

	unitArray: function () {
		var rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;

		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}

		return rgb;
	},

	unitObject: function () {
		var rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;

		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}

		return rgb;
	},

	round: function (places) {
		places = Math.max(places || 0, 0);
		return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
	},

	alpha: function (val) {
		if (arguments.length) {
			return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
		}

		return this.valpha;
	},

	// rgb
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),

	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (val) { return ((val % 360) + 360) % 360; }), // eslint-disable-line brace-style

	saturationl: getset('hsl', 1, maxfn(100)),
	lightness: getset('hsl', 2, maxfn(100)),

	saturationv: getset('hsv', 1, maxfn(100)),
	value: getset('hsv', 2, maxfn(100)),

	chroma: getset('hcg', 1, maxfn(100)),
	gray: getset('hcg', 2, maxfn(100)),

	white: getset('hwb', 1, maxfn(100)),
	wblack: getset('hwb', 2, maxfn(100)),

	cyan: getset('cmyk', 0, maxfn(100)),
	magenta: getset('cmyk', 1, maxfn(100)),
	yellow: getset('cmyk', 2, maxfn(100)),
	black: getset('cmyk', 3, maxfn(100)),

	x: getset('xyz', 0, maxfn(100)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(100)),

	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),

	keyword: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return convert[this.model].keyword(this.color);
	},

	hex: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return colorString.to.hex(this.rgb().round().color);
	},

	rgbNumber: function () {
		var rgb = this.rgb().color;
		return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
	},

	luminosity: function () {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.rgb().color;

		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}

		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function (color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();

		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}

		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	isDark: function () {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.rgb().color;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	isLight: function () {
		return !this.isDark();
	},

	negate: function () {
		var rgb = this.rgb();
		for (var i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}
		return rgb;
	},

	lighten: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},

	darken: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},

	saturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},

	desaturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},

	whiten: function (ratio) {
		var hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},

	blacken: function (ratio) {
		var hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},

	grayscale: function () {
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var rgb = this.rgb().color;
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(val, val, val);
	},

	fade: function (ratio) {
		return this.alpha(this.valpha - (this.valpha * ratio));
	},

	opaquer: function (ratio) {
		return this.alpha(this.valpha + (this.valpha * ratio));
	},

	rotate: function (degrees) {
		var hsl = this.hsl();
		var hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},

	mix: function (mixinColor, weight) {
		// ported from sass implementation in C
		// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		if (!mixinColor || !mixinColor.rgb) {
			throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
		}
		var color1 = mixinColor.rgb();
		var color2 = this.rgb();
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return Color.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue(),
				color1.alpha() * p + color2.alpha() * (1 - p));
	}
};

// model conversion methods and static constructors
Object.keys(convert).forEach(function (model) {
	if (skippedModels.indexOf(model) !== -1) {
		return;
	}

	var channels = convert[model].channels;

	// conversion methods
	Color.prototype[model] = function () {
		if (this.model === model) {
			return new Color(this);
		}

		if (arguments.length) {
			return new Color(arguments, model);
		}

		var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
		return new Color(assertArray(convert[this.model][model].raw(this.color)).concat(newAlpha), model);
	};

	// 'static' construction methods
	Color[model] = function (color) {
		if (typeof color === 'number') {
			color = zeroArray(_slice.call(arguments), channels);
		}
		return new Color(color, model);
	};
});

function roundTo(num, places) {
	return Number(num.toFixed(places));
}

function roundToPlace(places) {
	return function (num) {
		return roundTo(num, places);
	};
}

function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];

	model.forEach(function (m) {
		(limiters[m] || (limiters[m] = []))[channel] = modifier;
	});

	model = model[0];

	return function (val) {
		var result;

		if (arguments.length) {
			if (modifier) {
				val = modifier(val);
			}

			result = this[model]();
			result.color[channel] = val;
			return result;
		}

		result = this[model]().color[channel];
		if (modifier) {
			result = modifier(result);
		}

		return result;
	};
}

function maxfn(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}

function assertArray(val) {
	return Array.isArray(val) ? val : [val];
}

function zeroArray(arr, length) {
	for (var i = 0; i < length; i++) {
		if (typeof arr[i] !== 'number') {
			arr[i] = 0;
		}
	}

	return arr;
}

module.exports = Color;


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

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./node_modules/dayjs/plugin/utc.js":
/*!******************************************!*\
  !*** ./node_modules/dayjs/plugin/utc.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,i){ true?module.exports=i():undefined}(this,function(){"use strict";return function(t,i,e){var s=i.prototype;e.utc=function(t){return new i({date:t,utc:!0,args:arguments})},s.utc=function(t){var i=e(this.toDate(),{locale:this.$L,utc:!0});return t?i.add(this.utcOffset(),"minute"):i},s.local=function(){return e(this.toDate(),{locale:this.$L,utc:!1})};var f=s.parse;s.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),f.call(this,t)};var n=s.init;s.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else n.call(this)};var u=s.utcOffset;s.utcOffset=function(t,i){var e=this.$utils().u;if(e(t))return this.$u?0:e(this.$offset)?u.call(this):this.$offset;var s=Math.abs(t)<=16?60*t:t,f=this;if(i)return f.$offset=s,f.$u=0===t,f;if(0!==t){var n=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(f=this.local().add(s+n,"minute")).$offset=s,f.$x.$localOffset=n}else f=this.utc();return f};var o=s.format;s.format=function(t){var i=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return o.call(this,i)},s.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||(new Date).getTimezoneOffset());return this.$d.valueOf()-6e4*t},s.isUTC=function(){return!!this.$u},s.toISOString=function(){return this.toDate().toISOString()},s.toString=function(){return this.toDate().toUTCString()};var r=s.toDate;s.toDate=function(t){return"s"===t&&this.$offset?e(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():r.call(this)};var a=s.diff;s.diff=function(t,i,s){if(this.$u===t.$u)return a.call(this,t,i,s);var f=this.local(),n=e(t).local();return a.call(f,n,i,s)}}});


/***/ }),

/***/ "./node_modules/is-arrayish/index.js":
/*!*******************************************!*\
  !*** ./node_modules/is-arrayish/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};


/***/ }),

/***/ "./node_modules/js-datepicker/dist/datepicker.min.js":
/*!***********************************************************!*\
  !*** ./node_modules/js-datepicker/dist/datepicker.min.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);var r=[],a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],o=["January","February","March","April","May","June","July","August","September","October","November","December"],i={t:"top",r:"right",b:"bottom",l:"left",c:"centered"};function s(){}var l=["click","focusin","keydown","input"];function c(e){l.forEach((function(t){e.addEventListener(t,e===document?Y:j)}))}function d(e){return Array.isArray(e)?e.map(d):"[object Object]"===x(e)?Object.keys(e).reduce((function(t,n){return t[n]=d(e[n]),t}),{}):e}function u(e,t){var n=e.calendar.querySelector(".qs-overlay"),r=n&&!n.classList.contains("qs-hidden");t=t||new Date(e.currentYear,e.currentMonth),e.calendar.innerHTML=[h(t,e,r),f(t,e,r),v(e,r)].join(""),r&&window.requestAnimationFrame((function(){M(!0,e)}))}function h(e,t,n){return['<div class="qs-controls'+(n?" qs-blur":"")+'">','<div class="qs-arrow qs-left"></div>','<div class="qs-month-year">','<span class="qs-month">'+t.months[e.getMonth()]+"</span>",'<span class="qs-year">'+e.getFullYear()+"</span>","</div>",'<div class="qs-arrow qs-right"></div>',"</div>"].join("")}function f(e,t,n){var r=t.currentMonth,a=t.currentYear,o=t.dateSelected,i=t.maxDate,s=t.minDate,l=t.showAllDates,c=t.days,d=t.disabledDates,u=t.startDay,h=(t.weekendIndices,t.events),f=t.getRange?t.getRange():{},v=+f.start,m=+f.end,y=g(new Date(e).setDate(1)),p=y.getDay()-u,D=p<0?7:0;y.setMonth(y.getMonth()+1),y.setDate(0);var b=y.getDate(),w=[],q=D+7*((p+b)/7|0);q+=(p+b)%7?7:0;for(var S=1;S<=q;S++){var M=(S-1)%7,E=c[M],x=S-(p>=0?p:7+p),C=new Date(a,r,x),Y=h[+C],j=x<1||x>b,L=j?x<1?-1:1:0,P=j&&!l,k=P?"":C.getDate(),O=0===M||6===M,N=v!==m,_="qs-square "+E;Y&&!P&&(_+=" qs-event"),j&&(_+=" qs-outside-current-month"),!l&&j||(_+=" qs-num"),+C==+o&&(_+=" qs-active"),(d[+C]||t.disabler(C)||O&&t.noWeekends||s&&+C<+s||i&&+C>+i)&&!P&&(_+=" qs-disabled"),+g(new Date)==+C&&(_+=" qs-current"),+C===v&&m&&N&&(_+=" qs-range-start"),+C>v&&+C<m&&(_+=" qs-range-middle"),+C===m&&v&&N&&(_+=" qs-range-end"),P&&(_+=" qs-empty",k=""),w.push('<div class="'+_+'" data-direction="'+L+'">'+k+"</div>")}var I=c.map((function(e){return'<div class="qs-square qs-day">'+e+"</div>"})).concat(w);return I.unshift('<div class="qs-squares'+(n?" qs-blur":"")+'">'),I.push("</div>"),I.join("")}function v(e,t){var n=e.overlayPlaceholder,r=e.overlayButton;return['<div class="qs-overlay'+(t?"":" qs-hidden")+'">',"<div>",'<input class="qs-overlay-year" placeholder="'+n+'" />','<div class="qs-close">&#10005;</div>',"</div>",'<div class="qs-overlay-month-container">'+e.overlayMonths.map((function(e,t){return'<div class="qs-overlay-month" data-month-num="'+t+'">'+e+"</div>"})).join("")+"</div>",'<div class="qs-submit qs-disabled">'+r+"</div>","</div>"].join("")}function m(e,t,n){var r=t.el,a=t.calendar.querySelector(".qs-active"),o=e.textContent,i=t.sibling;(r.disabled||r.readOnly)&&t.respectDisabledReadOnly||(t.dateSelected=n?void 0:new Date(t.currentYear,t.currentMonth,o),a&&a.classList.remove("qs-active"),n||e.classList.add("qs-active"),p(r,t,n),n||q(t),i&&(y({instance:t,deselect:n}),t.first&&!i.dateSelected&&(i.currentYear=t.currentYear,i.currentMonth=t.currentMonth,i.currentMonthName=t.currentMonthName),u(t),u(i)),t.onSelect(t,n?void 0:new Date(t.dateSelected)))}function y(e){var t=e.instance.first?e.instance:e.instance.sibling,n=t.sibling;t===e.instance?e.deselect?(t.minDate=t.originalMinDate,n.minDate=n.originalMinDate):n.minDate=t.dateSelected:e.deselect?(n.maxDate=n.originalMaxDate,t.maxDate=t.originalMaxDate):t.maxDate=n.dateSelected}function p(e,t,n){if(!t.nonInput)return n?e.value="":t.formatter!==s?t.formatter(e,t.dateSelected,t):void(e.value=t.dateSelected.toDateString())}function D(e,t,n,r){n||r?(n&&(t.currentYear=+n),r&&(t.currentMonth=+r)):(t.currentMonth+=e.contains("qs-right")?1:-1,12===t.currentMonth?(t.currentMonth=0,t.currentYear++):-1===t.currentMonth&&(t.currentMonth=11,t.currentYear--)),t.currentMonthName=t.months[t.currentMonth],u(t),t.onMonthChange(t)}function b(e){if(!e.noPosition){var t=e.position.top,n=e.position.right;if(e.position.centered)return e.calendarContainer.classList.add("qs-centered");var r=e.positionedEl.getBoundingClientRect(),a=e.el.getBoundingClientRect(),o=e.calendarContainer.getBoundingClientRect(),i=a.top-r.top+(t?-1*o.height:a.height)+"px",s=a.left-r.left+(n?a.width-o.width:0)+"px";e.calendarContainer.style.setProperty("top",i),e.calendarContainer.style.setProperty("left",s)}}function w(e){return"[object Date]"===x(e)&&"Invalid Date"!==e.toString()}function g(e){if(w(e)||"number"==typeof e&&!isNaN(e)){var t=new Date(+e);return new Date(t.getFullYear(),t.getMonth(),t.getDate())}}function q(e){e.disabled||!e.calendarContainer.classList.contains("qs-hidden")&&!e.alwaysShow&&(M(!0,e),e.calendarContainer.classList.add("qs-hidden"),e.onHide(e))}function S(e){e.disabled||(e.calendarContainer.classList.remove("qs-hidden"),b(e),e.onShow(e))}function M(e,t){var n=t.calendar,r=n.querySelector(".qs-overlay"),a=r.querySelector(".qs-overlay-year"),o=n.querySelector(".qs-controls"),i=n.querySelector(".qs-squares");e?(r.classList.add("qs-hidden"),o.classList.remove("qs-blur"),i.classList.remove("qs-blur"),a.value=""):(r.classList.remove("qs-hidden"),o.classList.add("qs-blur"),i.classList.add("qs-blur"),a.focus())}function E(e,t,n,r){var a=isNaN(+(new Date).setFullYear(t.value||void 0)),o=a?null:t.value;if(13===e.which||13===e.keyCode||"click"===e.type)r?D(null,n,o,r):a||t.classList.contains("qs-disabled")||D(null,n,o);else if(n.calendar.contains(t)){n.calendar.querySelector(".qs-submit").classList[a?"add":"remove"]("qs-disabled")}}function x(e){return{}.toString.call(e)}function C(e){r.forEach((function(t){t!==e&&q(t)}))}function Y(e){if(!e.__qs_shadow_dom){var t=e.which||e.keyCode,n=e.type,a=e.target,i=a.classList,s=r.filter((function(e){return e.calendar.contains(a)||e.el===a}))[0],l=s&&s.calendar.contains(a);if(!(s&&s.isMobile&&s.disableMobile))if("click"===n){if(!s)return r.forEach(q);if(s.disabled)return;var c=s.calendar,d=s.calendarContainer,h=s.disableYearOverlay,f=s.nonInput,v=c.querySelector(".qs-overlay-year"),y=!!c.querySelector(".qs-hidden"),p=c.querySelector(".qs-month-year").contains(a),b=a.dataset.monthNum;if(s.noPosition&&!l)(d.classList.contains("qs-hidden")?S:q)(s);else if(i.contains("qs-arrow"))D(i,s);else if(p||i.contains("qs-close"))h||M(!y,s);else if(b)E(e,v,s,b);else{if(i.contains("qs-disabled"))return;if(i.contains("qs-num")){var w=a.textContent,g=+a.dataset.direction,x=new Date(s.currentYear,s.currentMonth+g,w);if(g){s.currentYear=x.getFullYear(),s.currentMonth=x.getMonth(),s.currentMonthName=o[s.currentMonth],u(s);for(var Y,j=s.calendar.querySelectorAll('[data-direction="0"]'),L=0;!Y;){var P=j[L];P.textContent===w&&(Y=P),L++}a=Y}return void(+x==+s.dateSelected?m(a,s,!0):a.classList.contains("qs-disabled")||m(a,s))}i.contains("qs-submit")?E(e,v,s):f&&a===s.el&&(S(s),C(s))}}else if("focusin"===n&&s)S(s),C(s);else if("keydown"===n&&9===t&&s)q(s);else if("keydown"===n&&s&&!s.disabled){var k=!s.calendar.querySelector(".qs-overlay").classList.contains("qs-hidden");13===t&&k&&l?E(e,a,s):27===t&&k&&l&&M(!0,s)}else if("input"===n){if(!s||!s.calendar.contains(a))return;var O=s.calendar.querySelector(".qs-submit"),N=a.value.split("").reduce((function(e,t){return e||"0"!==t?e+(t.match(/[0-9]/)?t:""):""}),"").slice(0,4);a.value=N,O.classList[4===N.length?"remove":"add"]("qs-disabled")}}}function j(e){Y(e),e.__qs_shadow_dom=!0}function L(e,t){l.forEach((function(n){e.removeEventListener(n,t)}))}function P(){S(this)}function k(){q(this)}function O(e,t){var n=g(e),r=this.currentYear,a=this.currentMonth,o=this.sibling;if(null==e)return this.dateSelected=void 0,p(this.el,this,!0),o&&(y({instance:this,deselect:!0}),u(o)),u(this),this;if(!w(e))throw new Error("`setDate` needs a JavaScript Date object.");if(this.disabledDates[+n]||n<this.minDate||n>this.maxDate)throw new Error("You can't manually set a date that's disabled.");this.dateSelected=n,t&&(this.currentYear=n.getFullYear(),this.currentMonth=n.getMonth(),this.currentMonthName=this.months[n.getMonth()]),p(this.el,this),o&&(y({instance:this}),u(o));var i=r===n.getFullYear()&&a===n.getMonth();return i||t?u(this,n):i||u(this,new Date(r,a,1)),this}function N(e){return I(this,e,!0)}function _(e){return I(this,e)}function I(e,t,n){var r=e.dateSelected,a=e.first,o=e.sibling,i=e.minDate,s=e.maxDate,l=g(t),c=n?"Min":"Max";function d(){return"original"+c+"Date"}function h(){return c.toLowerCase()+"Date"}function f(){return"set"+c}function v(){throw new Error("Out-of-range date passed to "+f())}if(null==t)e[d()]=void 0,o?(o[d()]=void 0,n?(a&&!r||!a&&!o.dateSelected)&&(e.minDate=void 0,o.minDate=void 0):(a&&!o.dateSelected||!a&&!r)&&(e.maxDate=void 0,o.maxDate=void 0)):e[h()]=void 0;else{if(!w(t))throw new Error("Invalid date passed to "+f());o?((a&&n&&l>(r||s)||a&&!n&&l<(o.dateSelected||i)||!a&&n&&l>(o.dateSelected||s)||!a&&!n&&l<(r||i))&&v(),e[d()]=l,o[d()]=l,(n&&(a&&!r||!a&&!o.dateSelected)||!n&&(a&&!o.dateSelected||!a&&!r))&&(e[h()]=l,o[h()]=l)):((n&&l>(r||s)||!n&&l<(r||i))&&v(),e[h()]=l)}return o&&u(o),u(e),e}function R(){var e=this.first?this:this.sibling,t=e.sibling;return{start:e.dateSelected,end:t.dateSelected}}function A(){var e=this.shadowDom,t=this.positionedEl,n=this.calendarContainer,a=this.sibling,o=this;this.inlinePosition&&(r.some((function(e){return e!==o&&e.positionedEl===t}))||t.style.setProperty("position",null));n.remove(),r=r.filter((function(e){return e!==o})),a&&delete a.sibling,r.length||L(document,Y);var i=r.some((function(t){return t.shadowDom===e}));for(var s in e&&!i&&L(e,j),this)delete this[s];r.length||l.forEach((function(e){document.removeEventListener(e,Y)}))}function F(e,t){var n=new Date(e);if(!w(n))throw new Error("`navigate` needs a JavaScript Date object.");this.currentYear=n.getFullYear(),this.currentMonth=n.getMonth(),u(this),t&&this.onMonthChange(this)}t.default=function(e,t){var n=function(e,t){var n,l,c=function(e){var t=d(e);t.events&&(t.events=t.events.reduce((function(e,t){if(!w(t))throw new Error('"options.events" must only contain valid JavaScript Date objects.');return e[+g(t)]=!0,e}),{}));["startDate","dateSelected","minDate","maxDate"].forEach((function(e){var n=t[e];if(n&&!w(n))throw new Error('"options.'+e+'" needs to be a valid JavaScript Date object.');t[e]=g(n)}));var n=t.position,o=t.maxDate,l=t.minDate,c=t.dateSelected,u=t.overlayPlaceholder,h=t.overlayButton,f=t.startDay,v=t.id;if(t.startDate=g(t.startDate||c||new Date),t.disabledDates=(t.disabledDates||[]).reduce((function(e,t){var n=+g(t);if(!w(t))throw new Error('You supplied an invalid date to "options.disabledDates".');if(n===+g(c))throw new Error('"disabledDates" cannot contain the same date as "dateSelected".');return e[n]=1,e}),{}),t.hasOwnProperty("id")&&null==v)throw new Error("Id cannot be `null` or `undefined`");if(null!=v){var m=r.filter((function(e){return e.id===v}));if(m.length>1)throw new Error("Only two datepickers can share an id.");m.length?(t.second=!0,t.sibling=m[0]):t.first=!0}var y=["tr","tl","br","bl","c"].some((function(e){return n===e}));if(n&&!y)throw new Error('"options.position" must be one of the following: tl, tr, bl, br, or c.');function p(e){throw new Error('"dateSelected" in options is '+(e?"less":"greater")+' than "'+(e||"max")+'Date".')}if(t.position=function(e){var t=e[0],n=e[1],r={};r[i[t]]=1,n&&(r[i[n]]=1);return r}(n||"bl"),o<l)throw new Error('"maxDate" in options is less than "minDate".');c&&(l>c&&p("min"),o<c&&p());if(["onSelect","onShow","onHide","onMonthChange","formatter","disabler"].forEach((function(e){"function"!=typeof t[e]&&(t[e]=s)})),["customDays","customMonths","customOverlayMonths"].forEach((function(e,n){var r=t[e],a=n?12:7;if(r){if(!Array.isArray(r)||r.length!==a||r.some((function(e){return"string"!=typeof e})))throw new Error('"'+e+'" must be an array with ${num} strings.');t[n?n<2?"months":"overlayMonths":"days"]=r}})),f&&f>0&&f<7){var D=(t.customDays||a).slice(),b=D.splice(0,f);t.customDays=D.concat(b),t.startDay=+f,t.weekendIndices=[D.length-1,D.length]}else t.startDay=0,t.weekendIndices=[6,0];"string"!=typeof u&&delete t.overlayPlaceholder;"string"!=typeof h&&delete t.overlayButton;return t}(t||{startDate:g(new Date),position:"bl"}),u=e;if("string"==typeof u)u="#"===u[0]?document.getElementById(u.slice(1)):document.querySelector(u);else{if("[object ShadowRoot]"===x(u))throw new Error("Using a shadow DOM as your selector is not supported.");for(var h,f=("getRootNode"in window.Node.prototype),v=u.parentNode;!h;){var m=x(v);if("[object HTMLDocument]"===m)h=!0;else if("[object ShadowRoot]"===m){if(h=!0,!f)throw new Error("The shadow DOM is not supported in your browser.");n=v,l=v.host}else v=v.parentNode}}if(!u)throw new Error("No selector / element found.");if(r.some((function(e){return e.el===u})))throw new Error("A datepicker already exists on that element.");var y=u===document.body,D=n?u.parentElement||n:y?document.body:u.parentElement,b=n?u.parentElement||l:D,q=document.createElement("div"),M=document.createElement("div");q.className="qs-datepicker-container qs-hidden",M.className="qs-datepicker";var E={shadowDom:n,customElement:l,positionedEl:b,el:u,parent:D,nonInput:"INPUT"!==u.nodeName,noPosition:y,position:!y&&c.position,startDate:c.startDate,dateSelected:c.dateSelected,disabledDates:c.disabledDates,minDate:c.minDate,maxDate:c.maxDate,noWeekends:!!c.noWeekends,weekendIndices:c.weekendIndices,calendarContainer:q,calendar:M,currentMonth:(c.startDate||c.dateSelected).getMonth(),currentMonthName:(c.months||o)[(c.startDate||c.dateSelected).getMonth()],currentYear:(c.startDate||c.dateSelected).getFullYear(),events:c.events||{},setDate:O,remove:A,setMin:N,setMax:_,show:P,hide:k,navigate:F,onSelect:c.onSelect,onShow:c.onShow,onHide:c.onHide,onMonthChange:c.onMonthChange,formatter:c.formatter,disabler:c.disabler,months:c.months||o,days:c.customDays||a,startDay:c.startDay,overlayMonths:c.overlayMonths||(c.months||o).map((function(e){return e.slice(0,3)})),overlayPlaceholder:c.overlayPlaceholder||"4-digit year",overlayButton:c.overlayButton||"Submit",disableYearOverlay:!!c.disableYearOverlay,disableMobile:!!c.disableMobile,isMobile:"ontouchstart"in window,alwaysShow:!!c.alwaysShow,id:c.id,showAllDates:!!c.showAllDates,respectDisabledReadOnly:!!c.respectDisabledReadOnly,first:c.first,second:c.second};if(c.sibling){var C=c.sibling,Y=E,j=C.minDate||Y.minDate,L=C.maxDate||Y.maxDate;Y.sibling=C,C.sibling=Y,C.minDate=j,C.maxDate=L,Y.minDate=j,Y.maxDate=L,C.originalMinDate=j,C.originalMaxDate=L,Y.originalMinDate=j,Y.originalMaxDate=L,C.getRange=R,Y.getRange=R}c.dateSelected&&p(u,E);var I=getComputedStyle(b).position;y||I&&"static"!==I||(E.inlinePosition=!0,b.style.setProperty("position","relative"));var B=r.filter((function(e){return e.positionedEl===E.positionedEl}));B.some((function(e){return e.inlinePosition}))&&(E.inlinePosition=!0,B.forEach((function(e){e.inlinePosition=!0})));q.appendChild(M),D.appendChild(q),E.alwaysShow&&S(E);return E}(e,t);if(r.length||c(document),n.shadowDom&&(r.some((function(e){return e.shadowDom===n.shadowDom}))||c(n.shadowDom)),r.push(n),n.second){var l=n.sibling;y({instance:n,deselect:!n.dateSelected}),y({instance:l,deselect:!l.dateSelected}),u(l)}return u(n,n.startDate||n.dateSelected),n.alwaysShow&&b(n),n}},function(e,t,n){}]).default}));

/***/ }),

/***/ "./node_modules/simple-swizzle/index.js":
/*!**********************************************!*\
  !*** ./node_modules/simple-swizzle/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArrayish = __webpack_require__(/*! is-arrayish */ "./node_modules/is-arrayish/index.js");

var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

var swizzle = module.exports = function swizzle(args) {
	var results = [];

	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];

		if (isArrayish(arg)) {
			// http://jsperf.com/javascript-array-concat-vs-push/98
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}

	return results;
};

swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};


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

  TpeUtils.tpa = function tpa(stats) {
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
  };

  return TpeUtils;
}();



/***/ }),

/***/ "./src/common/utils/UpdateSortMap.js":
/*!*******************************************!*\
  !*** ./src/common/utils/UpdateSortMap.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdateSortMap; });
/**
 * The sort options.
 * We use a class and not just a POJO/function because we want extensions to be able to extend it
 */
var UpdateSortMap = /*#__PURE__*/function () {
  function UpdateSortMap() {}

  var _proto = UpdateSortMap.prototype;

  _proto.sortMap = function sortMap() {
    return {
      newest: '-submittedAt',
      oldest: 'submittedAt'
    };
  };

  _proto.statusMap = function statusMap() {
    return {
      pending: 'status:pending',
      all: 'all',
      under_review: 'status:under_review',
      approved: 'status:approved',
      denied: 'status:denied'
    };
  };

  return UpdateSortMap;
}();



/***/ }),

/***/ "./src/common/utils/UpdateTypeUtils.js":
/*!*********************************************!*\
  !*** ./src/common/utils/UpdateTypeUtils.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdateTypeUtils; });
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);


var UpdateTypeUtils = /*#__PURE__*/function () {
  function UpdateTypeUtils() {}

  UpdateTypeUtils.types = function types() {
    return {
      pointTask: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('hcl.forum.updates.types.pointTask'),
      minorPointTask: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('hcl.forum.updates.types.minorPointTask'),
      welfare: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('hcl.forum.updates.types.welfare'),
      affiliate: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('hcl.forum.updates.types.affiliate'),
      pressConference: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('hcl.forum.updates.types.pressConference'),
      activityCheck: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('hcl.forum.updates.types.activityCheck'),
      job: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('hcl.forum.updates.types.job'),
      predictions: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('hcl.forum.updates.types.predictions'),
      other: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('hcl.forum.updates.types.other')
    };
  };

  UpdateTypeUtils.getTpe = function getTpe(type) {
    switch (type) {
      case 'pointTask':
        return 6;

      case 'minorPointTask': // fall-through

      case 'welfare':
        return 3;

      case 'pressConference':
        return 2;

      case 'activityCheck':
        return 1;

      case 'predictions': // fall-through

      case 'job': // fall-through

      case 'affiliate': // fall-through

      case 'other': // fall-through

      default:
        return null;
    }
  };

  UpdateTypeUtils.getCommentRequired = function getCommentRequired(type) {
    return type === 'other' || type === 'job';
  };

  return UpdateTypeUtils;
}();



/***/ }),

/***/ "./src/common/utils/flag.js":
/*!**********************************!*\
  !*** ./src/common/utils/flag.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return flag; });
var flagUrl = 'https://cdn.staticaly.com/gh/hjnilsson/country-flags/master/svg/';
function flag(countryCode) {
  return m("img", {
    src: "" + flagUrl + countryCode + ".svg",
    alt: countryCode
  });
}

/***/ }),

/***/ "./src/common/utils/getDatepicker.js":
/*!*******************************************!*\
  !*** ./src/common/utils/getDatepicker.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDatepicker; });
/* harmony import */ var js_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-datepicker */ "./node_modules/js-datepicker/dist/datepicker.min.js");
/* harmony import */ var js_datepicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_datepicker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getNextDayOfWeek__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNextDayOfWeek */ "./src/common/utils/getNextDayOfWeek.js");


function getDatepicker(selector, date, onSelect) {
  var now = new Date();
  var maxDate = now;

  if (now.getDay() === 0) {
    maxDate.setDate(date.getDate() + 7);
  } else {
    maxDate = Object(_getNextDayOfWeek__WEBPACK_IMPORTED_MODULE_1__["default"])(now, 0);
  }

  return js_datepicker__WEBPACK_IMPORTED_MODULE_0___default()(selector, {
    dateSelected: date,
    maxDate: maxDate,
    disabler: function disabler(date) {
      return date.getDay() != 0;
    },
    onSelect: onSelect,
    formatter: function formatter(input, date, instance) {
      var value = date.toLocaleDateString();
      input.value = value;
    }
  });
}

/***/ }),

/***/ "./src/common/utils/getNextDayOfWeek.js":
/*!**********************************************!*\
  !*** ./src/common/utils/getNextDayOfWeek.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getNextDayOfWeek; });
function getNextDayOfWeek(date, dayOfWeek) {
  // https://codereview.stackexchange.com/questions/33527/find-next-occurring-friday-or-any-dayofweek
  // Code to check that date and dayOfWeek are valid left as an exercise ;)
  var resultDate = new Date(date.getTime());
  resultDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7);
  return resultDate;
}

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

/***/ "./src/forum/components/players/PlayerCard.js":
/*!****************************************************!*\
  !*** ./src/forum/components/players/PlayerCard.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayerCard; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! color */ "./node_modules/color/index.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_utils_flag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/utils/flag */ "./src/common/utils/flag.js");
/* harmony import */ var _PlayerUpdateModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PlayerUpdateModal */ "./src/forum/components/players/PlayerUpdateModal.js");








var seperator = m("div", {
  className: "PlayerCard-seperator"
}, "|");
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
    flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.modal.show(_PlayerUpdateModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
      player: this.player,
      onsave: this.onsave.bind(this)
    });
  };

  _proto.onsave = function onsave(player) {
    this.player = player;
    m.redraw();
  };

  _proto.buildHeader = function buildHeader(player) {
    var colorString = this.player.user() && this.player.user().color() ? this.player.user().color() : '#675555';
    var bgColor = color__WEBPACK_IMPORTED_MODULE_1___default()(colorString);
    var textColor = bgColor.isLight() ? '#111' : '#fff';
    var user = this.player.user();
    var usernameSpan = flarum_helpers_username__WEBPACK_IMPORTED_MODULE_5___default()(user);
    var userLink = null;

    if (this.attrs.showUser && user && usernameSpan[0] !== '[deleted]') {
      userLink = [m("div", {
        className: "PlayerCard-username"
      }, m("a", {
        href: flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.route('user', {
          username: user.username()
        }),
        style: {
          color: textColor
        }
      }, usernameSpan)), seperator];
    }

    var headerButtons = [];
    var canEdit = flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.session.user === this.player.user() || this.player.canEdit();

    if (canEdit && !this.saving) {
      var hasTpe = this.player.bankedTpe() > 0;
      var text = flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.basics.no_tpe');
      var className = 'Button';

      if (hasTpe) {
        text = flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.basics.update');
        className += ' Button--important';
      }

      headerButtons.push(m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
        onclick: this.toggleUpdating.bind(this),
        icon: "fas fa-cog",
        disabled: !hasTpe,
        className: className
      }, text));
    }

    var nationality = m("div", {
      className: "PlayerCard-data-img"
    }, Object(_common_utils_flag__WEBPACK_IMPORTED_MODULE_6__["default"])(player.nationality().toLowerCase()));
    return m("div", {
      className: "PlayerCard-header",
      style: {
        backgroundColor: bgColor,
        color: textColor
      }
    }, m("div", {
      className: "PlayerCard-info"
    }, m("div", {
      className: "PlayerCard-name"
    }, player.firstName() + " " + player.lastName()), nationality, m("div", {
      className: "PlayerCard-subheader"
    }, userLink, m("div", {
      className: "PlayerCard-data"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.player.age') + ": " + player.age()), seperator, m("div", {
      className: "PlayerCard-data"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.player.tpe') + ": " + player.tpe() + " (" + flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.player.banked') + " " + player.bankedTpe() + ")"), seperator, m("div", {
      className: "PlayerCard-data"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.player.tpa') + ": " + player.tpa()))), m("div", {
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
    }, m("b", null, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.player.batting_attributes')))), m("div", {
      className: "PlayerCard-batter-attributes"
    }, m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.player.running')), m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.player.defense')), m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.player.attacking')), m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.player.lofted')), m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.player.vsSpin')), m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.player.vsPace')), m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.player.footwork')), m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.player.timing')), m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.player.control')), battingStats));
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
      value: this.playerSkillUpdates['running'],
      onchange: function onchange(e) {
        return _this.updateSkill('running', e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates['defense'],
      onchange: function onchange(e) {
        return _this.updateSkill('defense', e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates['attacking'],
      onchange: function onchange(e) {
        return _this.updateSkill('attacking', e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates['lofted'],
      onchange: function onchange(e) {
        return _this.updateSkill('lofted', e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates['vsSpin'],
      onchange: function onchange(e) {
        return _this.updateSkill('vsSpin', e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates['vsPace'],
      onchange: function onchange(e) {
        return _this.updateSkill('vsPace', e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates['footwork'],
      onchange: function onchange(e) {
        return _this.updateSkill('footwork', e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates['timing'],
      onchange: function onchange(e) {
        return _this.updateSkill('timing', e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates['control'],
      onchange: function onchange(e) {
        return _this.updateSkill('control', e.target.value);
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
    }, m("b", null, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.player.bowler_attributes'))), m("div", {
      className: "PlayerCard-info"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.player.bowling_style') + ": " + flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans("hcl.forum.player.style." + style.toLowerCase()))), m("div", {
      className: "PlayerCard-bowler-attributes"
    }, m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans("hcl.forum.player.paceFlight." + style)), m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans("hcl.forum.player.swingLegSpin." + style)), m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans("hcl.forum.player.slowerBallOffSpin." + style)), m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans("hcl.forum.player.seamDrift." + style)), m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans("hcl.forum.player.accuracy")), m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans("hcl.forum.player.discipline")), m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans("hcl.forum.player.bouncerBounce." + style)), m("div", {
      className: "PlayerCard-skill-label"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans("hcl.forum.player.yorkerArmBall." + style)), stats))];
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
      value: this.playerSkillUpdates['paceFlight'],
      onchange: function onchange(e) {
        return _this2.updateSkill('paceFlight', e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates['swingLegSpin'],
      onchange: function onchange(e) {
        return _this2.updateSkill('swingLegSpin', e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates['slowerBallOffSpin'],
      onchange: function onchange(e) {
        return _this2.updateSkill('slowerBallOffSpin', e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates['seamDrift'],
      onchange: function onchange(e) {
        return _this2.updateSkill('seamDrift', e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates['accuracy'],
      onchange: function onchange(e) {
        return _this2.updateSkill('accuracy', e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates['discipline'],
      onchange: function onchange(e) {
        return _this2.updateSkill('discipline', e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates['bouncerBounce'],
      onchange: function onchange(e) {
        return _this2.updateSkill('bouncerBounce', e.target.value);
      }
    })), m("div", {
      className: "PlayerCard-skill-update"
    }, m("input", {
      type: "number",
      min: 40,
      max: 99,
      value: this.playerSkillUpdates['yorkerArmBall'],
      onchange: function onchange(e) {
        return _this2.updateSkill('yorkerArmBall', e.target.value);
      }
    }))];
  };

  return PlayerCard;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_3___default.a);



/***/ }),

/***/ "./src/forum/components/players/PlayerCreateCard.js":
/*!**********************************************************!*\
  !*** ./src/forum/components/players/PlayerCreateCard.js ***!
  \**********************************************************/
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
/* harmony import */ var _RequiredSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../RequiredSelect */ "./src/forum/components/RequiredSelect.js");







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
      className: "Form Form-group Form--centered CreatePlayer"
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
        return _this2.attrs.update('firstName', e.target.value);
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
        return _this2.attrs.update('lastName', e.target.value);
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
        return _this2.attrs.update('age', e.target.value);
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
        return _this2.attrs.update('height', e.target.value);
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
        return _this2.attrs.update('weight', e.target.value);
      }
    }), m("label", {
      "for": "nationality"
    }, app.translator.trans('hcl.forum.player.country')), m(_RequiredSelect__WEBPACK_IMPORTED_MODULE_5__["default"], {
      value: this.player.nationality,
      id: "nationality",
      options: this.countries,
      onchange: function onchange(v) {
        return _this2.attrs.update('nationality', v);
      }
    }), m("label", {
      "for": "bowling_style"
    }, app.translator.trans('hcl.forum.player.bowling_style')), m(_RequiredSelect__WEBPACK_IMPORTED_MODULE_5__["default"], {
      value: this.player.bowlingStyle,
      id: "bowling_style",
      options: {
        pace: app.translator.trans('hcl.forum.player.style.pace'),
        spin: app.translator.trans('hcl.forum.player.style.spin')
      },
      onchange: function onchange(v) {
        return _this2.attrs.update('bowlingStyle', v);
      }
    })), 30);
    return items;
  };

  return PlayerCreateCard;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/players/PlayerCreatePage.js":
/*!**********************************************************!*\
  !*** ./src/forum/components/players/PlayerCreatePage.js ***!
  \**********************************************************/
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
/* harmony import */ var _PlayerCreateCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlayerCreateCard */ "./src/forum/components/players/PlayerCreateCard.js");





var PlayerCreatePage = /*#__PURE__*/function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PlayerCreatePage, _Page);

  function PlayerCreatePage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = PlayerCreatePage.prototype;

  _proto.oninit = function oninit(vnode) {
    _Page.prototype.oninit.call(this, vnode);

    if (app.session.user == null) {
      m.route.set(app.route('index'));
    }

    if (app.session.user.player()) {
      m.route.set(app.route('user.player', {
        username: app.session.user.username()
      }));
    }

    this.player = {
      firstName: '',
      lastName: ''
    };
    this.bodyClass = 'App--index';
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
      className: "container CreatePlayers-Players Form--centered"
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

/***/ "./src/forum/components/players/PlayerDirectoryList.js":
/*!*************************************************************!*\
  !*** ./src/forum/components/players/PlayerDirectoryList.js ***!
  \*************************************************************/
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
/* harmony import */ var _PlayerDirectoryListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PlayerDirectoryListItem */ "./src/forum/components/players/PlayerDirectoryListItem.js");







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

/***/ "./src/forum/components/players/PlayerDirectoryListItem.js":
/*!*****************************************************************!*\
  !*** ./src/forum/components/players/PlayerDirectoryListItem.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayerDirectoryListItem; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PlayerCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlayerCard */ "./src/forum/components/players/PlayerCard.js");




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

/***/ "./src/forum/components/players/PlayerDirectoryPage.js":
/*!*************************************************************!*\
  !*** ./src/forum/components/players/PlayerDirectoryPage.js ***!
  \*************************************************************/
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
/* harmony import */ var _PlayerDirectoryList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PlayerDirectoryList */ "./src/forum/components/players/PlayerDirectoryList.js");
/* harmony import */ var _states_PlayerDirectoryState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../states/PlayerDirectoryState */ "./src/forum/states/PlayerDirectoryState.js");












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
    this.bodyClass = 'User--directory Player--directory';
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

    if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('adminUrl')) {
      items.add('download', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_8___default.a.component({
        title: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.page.download_tooltip'),
        icon: 'fas fa-download',
        className: 'Button Button--icon',
        href: "" + window.location.origin + flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('basePath') + "/api/players/download",
        force: false,
        target: '_blank'
      }));
    }

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

/***/ "./src/forum/components/players/PlayerUpdateModal.js":
/*!***********************************************************!*\
  !*** ./src/forum/components/players/PlayerUpdateModal.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayerUpdateModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! color */ "./node_modules/color/index.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_utils_TpeUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/utils/TpeUtils */ "./src/common/utils/TpeUtils.js");





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
    return 'PlayerUpdateModal Modal';
  };

  _proto.title = function title() {
    return flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.player.update.title');
  };

  _proto.content = function content() {
    var _this = this;

    var colorString = this.player.user().color() ? this.player.user().color() : '#675555';
    var bgColor = color__WEBPACK_IMPORTED_MODULE_1___default()(colorString);
    var textColor = bgColor.isLight() ? '#111' : '#fff';
    var tpe = m("div", {
      className: "PlayerUpdate--tpebanked",
      style: {
        backgroundColor: bgColor,
        color: textColor
      }
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.player.update.banked_tpe') + ": " + (this.player.bankedTpe() - this.spentTpe));
    var batting = m("div", {
      className: "PlayerUpdate--batting"
    }, m("div", {
      className: "PlayerUpdate--info"
    }, m("h2", null, m("b", null, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.player.batting_attributes')))), m("div", {
      className: "PlayerUpdate--skills"
    }, m("div", {
      className: "PlayerUpdate--item PlayerUpdate--header"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.player.update.skill')), m("div", {
      className: "PlayerUpdate--item PlayerUpdate--header PlayerUpdate--center"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.player.update.tpe')), m("div", {
      className: "PlayerUpdate--item PlayerUpdate--header PlayerUpdate--center"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.player.update.cost')), m("div", {
      className: "PlayerUpdate--item PlayerUpdate--header PlayerUpdate--center"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.player.update.update')), this.skillRow('running'), this.skillRow('defense'), this.skillRow('attacking'), this.skillRow('lofted'), this.skillRow('vsSpin'), this.skillRow('vsPace'), this.skillRow('footwork'), this.skillRow('timing'), this.skillRow('control')));
    var style = this.player.bowlingStyle();
    var bowling = m("div", {
      className: "PlayerUpdate--bowling"
    }, m("div", {
      className: "PlayerUpdate--info"
    }, m("h2", null, m("b", null, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.player.bowler_attributes')))), m("div", {
      className: "PlayerUpdate--skills"
    }, m("div", {
      className: "PlayerUpdate--item PlayerUpdate--header"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.player.update.skill')), m("div", {
      className: "PlayerUpdate--item PlayerUpdate--header PlayerUpdate--center"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.player.update.tpe')), m("div", {
      className: "PlayerUpdate--item PlayerUpdate--header PlayerUpdate--center"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.player.update.cost')), m("div", {
      className: "PlayerUpdate--item PlayerUpdate--header PlayerUpdate--center"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.player.update.update')), this.skillRow('paceFlight', style), this.skillRow('swingLegSpin', style), this.skillRow('slowerBallOffSpin', style), this.skillRow('seamDrift', style), this.skillRow('accuracy'), this.skillRow('discipline'), this.skillRow('bouncerBounce', style), this.skillRow('yorkerArmBall', style)));
    var save = m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      type: "submit",
      className: "Button Button--primary",
      loading: this.saving,
      disabled: this.saving
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.basics.save_skills'));
    var reset = m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      type: "button",
      className: "Button Button--danger",
      onclick: function onclick() {
        return _this.reset();
      }
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.basics.reset'));
    return m("div", {
      className: "PlayerUpdate--body Modal-body"
    }, tpe, batting, bowling, m("div", {
      className: "PlayerUpdate--footer ButtonGroup"
    }, reset, save));
  };

  _proto.skillRow = function skillRow(skill, style) {
    var name = skill;
    if (!!style) name += "." + style;
    var originalValue = this.player.data.attributes[skill];
    var newValue = this.playerSkillUpdates[skill];
    var updated = originalValue != newValue;
    var className = 'PlayerUpdate--item PlayerUpdate--skill';
    if (updated) className += ' PlayerUpdate--updated';
    return [m("div", {
      className: className,
      title: flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans("hcl.forum.player.tooltip." + name)
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans("hcl.forum.player." + name)), this.currentTpe(skill, updated), this.currentCost(skill), this.updateButtons(skill)];
  };

  _proto.currentTpe = function currentTpe(skill, updated) {
    var className = 'PlayerUpdate--item PlayerUpdate--tpe PlayerUpdate--center';
    if (updated) className += ' PlayerUpdate--updated';
    return m("div", {
      className: className
    }, this.playerSkillUpdates[skill]);
  };

  _proto.currentCost = function currentCost(skill) {
    var cost = _common_utils_TpeUtils__WEBPACK_IMPORTED_MODULE_5__["default"].cost(this.playerSkillUpdates[skill]);
    var className = 'PlayerUpdate--item PlayerUpdate--cost PlayerUpdate--center';
    if (cost > this.tpeLeft()) className = 'PlayerUpdate--item PlayerUpdate--warning PlayerUpdate--center';
    return m("div", {
      className: className
    }, cost);
  };

  _proto.updateButtons = function updateButtons(skill) {
    var _this2 = this;

    var currentTpe = this.playerSkillUpdates[skill];
    var increaseDisabled = _common_utils_TpeUtils__WEBPACK_IMPORTED_MODULE_5__["default"].cost(currentTpe) > this.tpeLeft();
    var decreaseDisabled = currentTpe <= this.player.data.attributes[skill] || currentTpe === 40;
    return m("div", {
      className: "PlayerUpdate--item PlayerUpdate--buttons PlayerUpdate--center ButtonGroup"
    }, m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      type: "button",
      className: "Button PlayerUpdate--decrease Button--icon Button--rounded",
      disabled: decreaseDisabled,
      icon: "fas fa-minus",
      onclick: function onclick() {
        return _this2.updateSkill(skill, -1, _common_utils_TpeUtils__WEBPACK_IMPORTED_MODULE_5__["default"].decrementCost(currentTpe));
      }
    }), m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      type: "button",
      className: "Button PlayerUpdate--increase Button--icon Button--rounded",
      disabled: increaseDisabled,
      icon: "fas fa-plus",
      onclick: function onclick() {
        return _this2.updateSkill(skill, 1, _common_utils_TpeUtils__WEBPACK_IMPORTED_MODULE_5__["default"].cost(currentTpe));
      }
    }));
  };

  _proto.reset = function reset() {
    this.player = this.originalState;
    this.initPlayerUpdateSkills();
    m.redraw();
  };

  _proto.onsubmit = function onsubmit(e) {
    var _this3 = this;

    e.preventDefault();
    this.saving = true;
    this.player.save(this.playerSkillUpdates).then(function (p) {
      _this3.saving = false;

      _this3.attrs.onsave(p);

      _this3.hide();
    })["catch"](function (e) {
      _this3.saving = false;
      _this3.player = _this3.originalState;

      _this3.initPlayerUpdateSkills();

      _this3.onerror(e); // calls redraw

    });
  };

  _proto.initPlayerUpdateSkills = function initPlayerUpdateSkills() {
    this.spentTpe = 0; // Batter

    this.playerSkillUpdates['running'] = this.player.running();
    this.playerSkillUpdates['defense'] = this.player.defense();
    this.playerSkillUpdates['attacking'] = this.player.attacking();
    this.playerSkillUpdates['lofted'] = this.player.lofted();
    this.playerSkillUpdates['vsSpin'] = this.player.vsSpin();
    this.playerSkillUpdates['vsPace'] = this.player.vsPace();
    this.playerSkillUpdates['footwork'] = this.player.footwork();
    this.playerSkillUpdates['timing'] = this.player.timing();
    this.playerSkillUpdates['control'] = this.player.control();
    this.playerSkillUpdates['paceFlight'] = this.player.paceFlight();
    this.playerSkillUpdates['swingLegSpin'] = this.player.swingLegSpin();
    this.playerSkillUpdates['slowerBallOffSpin'] = this.player.slowerBallOffSpin();
    this.playerSkillUpdates['seamDrift'] = this.player.seamDrift();
    this.playerSkillUpdates['accuracy'] = this.player.accuracy();
    this.playerSkillUpdates['discipline'] = this.player.discipline();
    this.playerSkillUpdates['bouncerBounce'] = this.player.bouncerBounce();
    this.playerSkillUpdates['yorkerArmBall'] = this.player.yorkerArmBall();
  };

  _proto.updateSkill = function updateSkill(skill, tpeToAdd, cost) {
    var currentTpe = this.playerSkillUpdates[skill];
    var newTpe = currentTpe + tpeToAdd;
    if (newTpe > 99 || newTpe < 40 || this.tpeLeft() - cost < 0) return;
    this.spentTpe += cost;
    this.playerSkillUpdates[skill] = newTpe;
  };

  _proto.tpeLeft = function tpeLeft() {
    return this.player.bankedTpe() - this.spentTpe;
  };

  return PlayerUpdateModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_3___default.a);



/***/ }),

/***/ "./src/forum/components/players/PlayerUserPage.js":
/*!********************************************************!*\
  !*** ./src/forum/components/players/PlayerUserPage.js ***!
  \********************************************************/
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
/* harmony import */ var _PlayerCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PlayerCard */ "./src/forum/components/players/PlayerCard.js");







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
          href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route('player.create'),
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

/***/ "./src/forum/components/teams/TeamCard.js":
/*!************************************************!*\
  !*** ./src/forum/components/teams/TeamCard.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TeamCard; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! color */ "./node_modules/color/index.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Link */ "flarum/components/Link");
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_utils_flag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/utils/flag */ "./src/common/utils/flag.js");







var TeamCard = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TeamCard, _Component);

  function TeamCard() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = TeamCard.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);

    this.team = this.attrs.team;
  };

  _proto.view = function view() {
    var style = {
      backgroundImage: "url(" + this.team.logoLink() + ")",
      backgroundColor: "" + color__WEBPACK_IMPORTED_MODULE_1___default()("#" + this.team.primaryColor()).darken(0.35).hex()
    };
    return m("div", {
      className: "TeamCard"
    }, m("div", {
      className: "TeamCard-header",
      style: style
    }, m("h1", null, this.team.name())), m("div", {
      className: "TeamCard-players"
    }, m("legend", null), m("legend", null, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.basics.player')), m("legend", null, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.basics.role')), m("legend", null, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.basics.tpa')), this.team.players().map(function (p) {
      return [m("div", {
        className: "TeamCard-flag"
      }, Object(_common_utils_flag__WEBPACK_IMPORTED_MODULE_5__["default"])(p.nationality().toLowerCase())), m("div", null, p.user() ? m(flarum_components_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.route('user.player', {
          username: p.user().username()
        })
      }, p.name()) : p.name()), m("div", null, p.isBowler() ? flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.player.bowler', {
        style: flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans("hcl.forum.player.style." + p.bowlingStyle())
      }) : flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.player.batter')), m("div", null, p.tpa())];
    })));
  };

  return TeamCard;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_3___default.a);



/***/ }),

/***/ "./src/forum/components/teams/TeamsPage.js":
/*!*************************************************!*\
  !*** ./src/forum/components/teams/TeamsPage.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TeamsPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! color */ "./node_modules/color/index.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/components/SelectDropdown */ "flarum/components/SelectDropdown");
/* harmony import */ var flarum_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _TeamCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TeamCard */ "./src/forum/components/teams/TeamCard.js");













var TeamsPage = /*#__PURE__*/function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TeamsPage, _Page);

  function TeamsPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = TeamsPage.prototype;

  _proto.oninit = function oninit(vnode) {
    _Page.prototype.oninit.call(this, vnode);

    this.loading = false;
    this.teams = [];
    this.teamId = m.route.param('id');
    this.loadTeams().then(this.parseResults.bind(this));
    this.teamItems = this.teamItems.bind(this);
  };

  _proto.view = function view() {
    var _this = this;

    return m("div", {
      className: "IndexPage TeamPage"
    }, flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_5___default.a.prototype.hero(), m("div", {
      className: "container"
    }, m("div", {
      className: "sideNavContainer"
    }, m("nav", {
      className: "IndexPage-nav sideNav"
    }, m("ul", null, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default()(this.sidebarItems().toArray()))), m("div", {
      className: "IndexPage-results sideNavOffset"
    }, this.hasTeams() && !this.loading ? [m("div", {
      className: "IndexPage-toolbar"
    }, m("ul", {
      className: "TeamsPage-toolbar"
    }, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default()(this.teamItems().toArray()))), this.teamId ? m(_TeamCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
      team: this.teams.filter(function (t) {
        return t.id() === _this.teamId;
      })[0]
    }) : null] : [m(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: "LoadingIndicator--block"
    })]))));
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
    items.replace('nav', flarum_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_10___default.a.component({
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
    var href = this.teamId ? flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route('teams.show', {
      id: this.teamId
    }) : flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route('teams');
    items.add('hcl-team-directory', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_9___default.a.component({
      href: href,
      icon: 'fas fa-hiking'
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.page.team_directory')), 85);
    return items;
  };

  _proto.teamItems = function teamItems() {
    var _this2 = this;

    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default.a();

    if (this.hasTeams()) {
      this.teams.forEach(function (team) {
        var className = 'Button-team';
        var style = {
          backgroundImage: "url(" + team.logoLink() + ")"
        };

        if (_this2.teamId === team.id()) {
          className += ' Button-team-active';
          style.backgroundColor = "" + color__WEBPACK_IMPORTED_MODULE_7___default()("#" + team.primaryColor()).darken(0.35).hex();
        }

        items.add(team.name(), m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
          style: style,
          title: team.name(),
          className: className,
          onclick: function onclick() {
            _this2.teamId = team.id();
            m.route.set(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route('teams.show', {
              id: _this2.teamId
            }));
          }
        }));
      });
    }

    return items;
  };

  _proto.loadTeams = function loadTeams() {
    this.loading = true;
    var preloadedTeams = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.preloadedApiDocument();

    if (preloadedTeams && preloadedTeams.every(function (t) {
      return t.players();
    })) {
      return Promise.resolve(preloadedTeams);
    }

    var teams = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.all('teams');

    if (teams.length > 0 && teams.every(function (t) {
      return t.players();
    })) {
      return Promise.resolve(teams);
    }

    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.find('teams');
  };

  _proto.parseResults = function parseResults(teams) {
    var _this$teams;

    (_this$teams = this.teams).push.apply(_this$teams, teams);

    this.loading = false;
    m.redraw();
    return teams;
  };

  _proto.hasTeams = function hasTeams() {
    return this.teams && this.teams.length > 0;
  };

  return TeamsPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_4___default.a);



/***/ }),

/***/ "./src/forum/components/updates/UpdateCreateModal.js":
/*!***********************************************************!*\
  !*** ./src/forum/components/updates/UpdateCreateModal.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdateCreateModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/Stream */ "flarum/utils/Stream");
/* harmony import */ var flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_utils_getNextDayOfWeek__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/utils/getNextDayOfWeek */ "./src/common/utils/getNextDayOfWeek.js");
/* harmony import */ var _common_utils_getDatepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/utils/getDatepicker */ "./src/common/utils/getDatepicker.js");
/* harmony import */ var _common_utils_UpdateTypeUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/utils/UpdateTypeUtils */ "./src/common/utils/UpdateTypeUtils.js");
/* harmony import */ var _RequiredSelect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../RequiredSelect */ "./src/forum/components/RequiredSelect.js");











var UpdateCreateModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UpdateCreateModal, _Modal);

  function UpdateCreateModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = UpdateCreateModal.prototype;

  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);

    this.saving = false;
    var linkPost = '';

    if (this.attrs.post) {
      linkPost = window.location.origin + flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.route.post(this.attrs.post);
    }

    var today = new Date();
    var nextSunday = today;

    if (today.getDay() != 0) {
      nextSunday = Object(_common_utils_getNextDayOfWeek__WEBPACK_IMPORTED_MODULE_6__["default"])(today, 0);
    }

    this.date = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(nextSunday);
    this.type = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()();
    this.link = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(linkPost);
    this.comment = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()();
    this.tpe = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()();
  };

  _proto.className = function className() {
    return 'Update Modal--small';
  };

  _proto.title = function title() {
    return flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.updates.title');
  };

  _proto.oncreate = function oncreate(vnode) {
    var _this = this;

    _Modal.prototype.oncreate.call(this, vnode);

    this.datepicker = Object(_common_utils_getDatepicker__WEBPACK_IMPORTED_MODULE_7__["default"])('#Update-datepicker', this.date(), function (instance, date) {
      return _this.date(date);
    });
  };

  _proto.content = function content() {
    var _this2 = this;

    // Using a hidden input to avoid autofocussing the first date input"
    return m("div", {
      className: "Modal-body"
    }, m("input", {
      type: "hidden",
      autofocus: "true",
      tabindex: -1
    }), m("div", {
      className: "Update--datepicker Form-group"
    }, m("label", {
      "for": "datepicker"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.updates.week_ending')), m("input", {
      id: "Update-datepicker",
      className: "FormControl",
      type: "text",
      required: true,
      autocomplete: "off"
    })), m("div", {
      className: "Update--type Form-group"
    }, m("label", {
      "for": "type"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.updates.type')), m(_RequiredSelect__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "type",
      options: _common_utils_UpdateTypeUtils__WEBPACK_IMPORTED_MODULE_8__["default"].types(),
      className: "FormControl",
      value: this.type(),
      onchange: function onchange(v) {
        _this2.tpe(_common_utils_UpdateTypeUtils__WEBPACK_IMPORTED_MODULE_8__["default"].getTpe(v));

        _this2.type(v);
      }
    })), m("div", {
      className: "Update--link Form-group"
    }, m("label", {
      "for": "link"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.updates.link')), m("input", {
      id: "link",
      className: "FormControl",
      type: "text",
      bidi: this.link
    })), m("div", {
      className: "Update--comment Form-group"
    }, m("label", {
      "for": "comment"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.updates.comment')), m("input", {
      id: "comment",
      className: "FormControl",
      type: "text",
      required: _common_utils_UpdateTypeUtils__WEBPACK_IMPORTED_MODULE_8__["default"].getCommentRequired(this.type()),
      bidi: this.comment
    })), m("div", {
      className: "Update--tpe Form-group"
    }, m("label", {
      "for": "tpe"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.basics.tpe')), m("input", {
      id: "tpe",
      type: "number",
      className: "FormControl",
      min: 0,
      max: 12,
      required: true,
      bidi: this.tpe
    })), m("div", {
      className: "Form-gruop"
    }, m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      type: "submit",
      className: "Button Button--primary",
      loading: this.saving,
      disabled: this.saving
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.basics.submitt'))));
  };

  _proto.data = function data() {
    return {
      date: dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.date()).format('YYYY-MM-DD'),
      type: this.type(),
      link: this.link(),
      comment: this.comment(),
      tpe: this.tpe()
    };
  };

  _proto.onsubmit = function onsubmit(e) {
    var _this3 = this;

    e.preventDefault();
    this.saving = true;
    var update = flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.store.createRecord('updates');
    update.save(this.data()).then(function () {
      _this3.hide();

      flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.alerts.show({
        type: 'success'
      }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('hcl.forum.updates.success'));
    })["catch"](function () {
      _this3.saving = false;
    });
  };

  return UpdateCreateModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_4___default.a);



/***/ }),

/***/ "./src/forum/components/updates/UpdateDirectoryList.js":
/*!*************************************************************!*\
  !*** ./src/forum/components/updates/UpdateDirectoryList.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdateDirectoryList; });
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
/* harmony import */ var _UpdateDirectoryListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UpdateDirectoryListItem */ "./src/forum/components/updates/UpdateDirectoryListItem.js");







/**
 * Based on FoF's UserDirectoryList
 */

var UpdateDirectoryList = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UpdateDirectoryList, _Component);

  function UpdateDirectoryList() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = UpdateDirectoryList.prototype;

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
    }, state.updates.filter(function (u) {
      return !state.getParams().q || state.getParams().q === 'all' || u.status() === state.getParams().q;
    }).map(function (update) {
      return m("li", {
        key: update.id(),
        "data-id": update.id()
      }, _UpdateDirectoryListItem__WEBPACK_IMPORTED_MODULE_6__["default"].component({
        update: update,
        params: params
      }));
    })), m("div", {
      className: "UserDirectoryList-loadMore"
    }, loading));
  };

  return UpdateDirectoryList;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/components/updates/UpdateDirectoryListItem.js":
/*!*****************************************************************!*\
  !*** ./src/forum/components/updates/UpdateDirectoryListItem.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdateDirectoryListItem; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UpdateEditCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpdateEditCard */ "./src/forum/components/updates/UpdateEditCard.js");




var UpdateDirectoryListItem = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UpdateDirectoryListItem, _Component);

  function UpdateDirectoryListItem() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = UpdateDirectoryListItem.prototype;

  _proto.view = function view() {
    var update = this.attrs.update;
    return m("div", {
      className: "UpdateEditCardItem"
    }, _UpdateEditCard__WEBPACK_IMPORTED_MODULE_2__["default"].component({
      update: update
    }));
  };

  return UpdateDirectoryListItem;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/updates/UpdateDirectoryPage.js":
/*!*************************************************************!*\
  !*** ./src/forum/components/updates/UpdateDirectoryPage.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdateDirectoryPage; });
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
/* harmony import */ var _states_UpdateDirectoryState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../states/UpdateDirectoryState */ "./src/forum/states/UpdateDirectoryState.js");
/* harmony import */ var _UpdateDirectoryList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UpdateDirectoryList */ "./src/forum/components/updates/UpdateDirectoryList.js");











var UpdateDirectoryPage = /*#__PURE__*/function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UpdateDirectoryPage, _Page);

  function UpdateDirectoryPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = UpdateDirectoryPage.prototype;

  _proto.oninit = function oninit(vnode) {
    _Page.prototype.oninit.call(this, vnode);

    if (!flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('canEditUpdates')) {
      m.route.set(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route('index'));
    }

    this.state = new _states_UpdateDirectoryState__WEBPACK_IMPORTED_MODULE_8__["default"]({});
    this.state.refreshParams(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.search.params());
    this.bodyClass = 'User--directory Update--directory';
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
    }, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_4___default()(this.actionItems().toArray()))), m(_UpdateDirectoryList__WEBPACK_IMPORTED_MODULE_9__["default"], {
      state: this.state
    })))));
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
      value: this.params().sort || 'default',
      onchange: this.changeSort.bind(this)
    }));
    var statusMap = this.state.statusMap();
    var statusOptions = {};

    for (var _i in statusMap) {
      statusOptions[_i] = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.lib.update_status.' + _i);
    }

    items.add('status', flarum_components_Select__WEBPACK_IMPORTED_MODULE_6___default.a.component({
      options: statusOptions,
      value: this.params().q || 'pending',
      onchange: this.changeStatus.bind(this)
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

    if (sort === 'default') {
      delete params.sort;
    } else {
      params.sort = sort;
    }

    m.route.set(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route(this.attrs.routeName, params));
  }
  /**
   * Redirect to the index page using the given status parameter.
   *
   * @param {String} status
   */
  ;

  _proto.changeStatus = function changeStatus(status) {
    var params = this.params();

    if (status === 'default') {
      delete params.q;
    } else {
      params.q = status;
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
  }
  /**
   * Our own sidebar. Re-uses Index.sidebarItems as the base
   * Elements added here will only show up on the user directory page
   *
   * @return {ItemList}
   */
  ;

  _proto.sidebarItems = function sidebarItems() {
    return flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_5___default.a.prototype.sidebarItems();
  }
  /**
   * Our own sidebar navigation. Re-uses Index.navItems as the base
   * Elements added here will only show up on the user directory page
   *
   * @return {ItemList}
   */
  ;

  _proto.navItems = function navItems() {
    return flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_5___default.a.prototype.navItems();
  };

  return UpdateDirectoryPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/components/updates/UpdateEditCard.js":
/*!********************************************************!*\
  !*** ./src/forum/components/updates/UpdateEditCard.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdateEditCard; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/utc */ "./node_modules/dayjs/plugin/utc.js");
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/Stream */ "flarum/utils/Stream");
/* harmony import */ var flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/helpers/humanTime */ "flarum/helpers/humanTime");
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_components_Checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/components/Checkbox */ "flarum/components/Checkbox");
/* harmony import */ var flarum_components_Checkbox__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Checkbox__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_utils_getDatepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/utils/getDatepicker */ "./src/common/utils/getDatepicker.js");












dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.extend(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_2___default.a);
/*
 * Attr
 * update
 * onselect
 */

var UpdateEditCard = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UpdateEditCard, _Component);

  function UpdateEditCard() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = UpdateEditCard.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);

    this.update = this.attrs.update;
    this.player = this.update.submittedUser().player();
    this.originalState = this.update;
    this.saving = false;
    this.loadingPlayer = false;
    this.dpInit = false;
    this.updaterComment = new flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default.a(this.update.updaterComment());
    this.tpe = new flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default.a(this.update.tpe());
    this.date = new flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default.a(this.update.weekEnding());
    this.isCapped = this.update.isCapped();
  };

  _proto.oncreate = function oncreate(vnode) {
    var _this = this;

    _Component.prototype.oncreate.call(this, vnode);

    if (!this.loadingPlayer && !this.dpInit) {
      this.dpInit = true;
      this.datepicker = Object(_common_utils_getDatepicker__WEBPACK_IMPORTED_MODULE_11__["default"])("#Update-datepicker-" + this.update.id(), this.date(), function (instance, date) {
        return _this.date(date);
      });
    }
  };

  _proto.onupdate = function onupdate(vnode) {
    var _this2 = this;

    if (!this.loadingPlayer && !this.dpInit) {
      this.dpInit = true;
      this.datepicker = Object(_common_utils_getDatepicker__WEBPACK_IMPORTED_MODULE_11__["default"])("#Update-datepicker-" + this.update.id(), this.date(), function (instance, date) {
        return _this2.date(date);
      });
    }
  };

  _proto.view = function view() {
    var _this3 = this;

    var updater = null;

    if (this.update.updaterUser()) {
      updater = flarum_helpers_username__WEBPACK_IMPORTED_MODULE_5___default()(this.update.updaterUser());
    }

    if (!this.player) {
      this.loadPlayer();
    }

    if (this.loadingPlayer) {
      return m("div", {
        className: "UpdateEditCard",
        style: {
          backgroundColor: this.update.submittedUser().color()
        }
      }, m(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_10___default.a, null));
    }

    return m("div", {
      className: "UpdateEditCard",
      style: {
        backgroundColor: this.update.submittedUser().color()
      }
    }, m("div", {
      className: "darkenBackground UpdateEditCard-wrapper"
    }, m("div", {
      className: "UpdateEditCard-fields"
    }, m("div", {
      className: "UpdateEditCard-item"
    }, m("legend", null, flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('hcl.forum.basics.player')), m("a", {
      href: flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.route('user.updates', {
        username: this.update.submittedUser().username()
      })
    }, this.player.name(), " ("), m("a", {
      href: flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.route('user', {
        username: this.update.submittedUser().username()
      })
    }, flarum_helpers_username__WEBPACK_IMPORTED_MODULE_5___default()(this.update.submittedUser())), ")"), m("div", {
      className: "UpdateEditCard-item UpdateEditCard-week"
    }, m("legend", null, flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('hcl.forum.basics.for_week')), m("input", {
      id: "Update-datepicker-" + this.update.id(),
      className: "FormControl",
      type: "text",
      required: true,
      autocomplete: "off"
    })), m("div", {
      className: "UpdateEditCard-item"
    }, m("legend", null, flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('hcl.forum.basics.type')), flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans("hcl.forum.updates.types." + this.update.type())), m("div", {
      className: "UpdateEditCard-item UpdateEditCard-tpe"
    }, m("legend", null, flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('hcl.forum.basics.tpe')), m("input", {
      type: "number",
      min: 1,
      max: 12,
      className: "UpdateEditCard-tpe",
      bidi: this.tpe
    })), m("div", {
      className: "UpdateEditCard-item Checkbox"
    }, m("legend", null, flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('hcl.forum.basics.capped')), m(flarum_components_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
      state: this.isCapped,
      onchange: function onchange(v) {
        return _this3.isCapped = v;
      },
      loading: this.saving
    })), m("div", {
      className: "UpdateEditCard-item UpdateEditCard-full"
    }, m("legend", null, flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('hcl.forum.basics.link')), m("a", {
      href: this.update.link(),
      target: "_blank"
    }, this.update.link())), m("div", {
      className: "UpdateEditCard-item UpdateEditCard-full"
    }, m("legend", null, flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('hcl.forum.basics.comment')), this.update.comment()), m("div", {
      className: "UpdateEditCard-item"
    }, m("legend", null, flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('hcl.forum.basics.current_status')), flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans("hcl.lib.update_status." + this.update.status())), m("div", {
      className: "UpdateEditCard-item"
    }, m("legend", null, flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('hcl.forum.basics.submitted_at')), flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6___default()(this.update.submittedAt())), m("div", {
      className: "UpdateEditCard-item"
    }, m("legend", null, flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('hcl.forum.basics.last_updated')), m("div", {
      className: "UpdateEditCard-date"
    }, this.update.updatedAt() ? flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6___default()(this.update.updatedAt()) : 'Never Updated')), m("div", {
      className: "UpdateEditCard-item"
    }, m("legend", null, flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('hcl.forum.basics.updater')), updater), m("div", {
      className: "UpdateEditCard-item UpdateEditCard-full"
    }, m("legend", null, flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('hcl.forum.basics.updater_comment')), m("input", {
      type: "textarea",
      bidi: this.updaterComment
    }))), m("div", {
      className: "Button-group"
    }, m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
      className: "Button Button--approve Button--primary",
      onclick: function onclick() {
        return _this3.approve();
      },
      disabled: this.update.isApproved() || this.saving
    }, flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('hcl.forum.updates.approve')), m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
      className: "Button Button--deny Button--danger",
      onclick: function onclick() {
        return _this3.deny();
      },
      disabled: this.update.isDenied() || this.saving
    }, flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('hcl.forum.updates.deny')), m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
      className: "Button Button--under-review",
      disabled: this.update.isUnderReview() || this.saving,
      onclick: function onclick() {
        return _this3.underReview();
      }
    }, flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('hcl.forum.updates.under_review')))));
  };

  _proto.loadPlayer = function loadPlayer() {
    var _this4 = this;

    this.loadingPlayer = true; // The UpdateDirectoryPage preloads players we just need to go find them

    var preloadedplayer = flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.store.all('players').filter(function (p) {
      return p.user() && p.user().id() == _this4.update.submittedUser().id();
    })[0];

    if (!!preloadedplayer) {
      this.loadingPlayer = false;
      this.player = preloadedplayer;
      m.redraw();
      return;
    }

    flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.store.find('users', this.update.submittedUser().id() + "/player", null, {
      errorHandler: function errorHandler() {}
    }).then(function (p) {
      _this4.player = p;
    })["finally"](function () {
      _this4.loadingPlayer = false;
      m.redraw();
    });
  };

  _proto.data = function data(status) {
    var data = {
      status: status
    };
    if (!!this.updaterComment()) data.updaterComment = this.updaterComment();
    var datea = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.date()).format('YYYY-MM-DD');
    var dateb = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.update.date()).utc().format('YYYY-MM-DD');
    if (datea != dateb) data.date = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.date()).format('YYYY-MM-DD');
    if (this.tpe() != this.update.tpe()) data.tpe = this.tpe();
    if (this.update.isCapped !== this.isCapped) data.isCapped = this.isCapped;
    return data;
  };

  _proto.approve = function approve() {
    var _this5 = this;

    this.saving = true;
    this.update.save(this.data('approved')).then(function () {
      flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.alerts.show({
        type: 'success'
      }, flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('hcl.forum.alerts.approved'));
    })["finally"](function () {
      _this5.saving = false;
    });
  };

  _proto.deny = function deny() {
    var _this6 = this;

    this.saving = true;

    if (!this.updaterComment()) {
      flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.alerts.show({
        type: 'error'
      }, flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('hcl.forum.alerts.comment_required'));
      this.saving = false;
      return;
    }

    this.update.save(this.data('denied')).then(function () {
      flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.alerts.show({
        type: 'success'
      }, flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('hcl.forum.alerts.denied'));
    })["finally"](function () {
      _this6.saving = false;
    });
  };

  _proto.underReview = function underReview() {
    var _this7 = this;

    this.saving = true;
    this.update.save(this.data('under_review')).then(function () {
      flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.alerts.show({
        type: 'success'
      }, flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('hcl.forum.alerts.underReview'));
    })["finally"](function () {
      _this7.saving = false;
    });
  };

  return UpdateEditCard;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_7___default.a);



/***/ }),

/***/ "./src/forum/components/updates/UpdateGroupCard.js":
/*!*********************************************************!*\
  !*** ./src/forum/components/updates/UpdateGroupCard.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdateGroupCard; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/Link */ "flarum/components/Link");
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Link__WEBPACK_IMPORTED_MODULE_5__);







var UpdateGroupCard = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UpdateGroupCard, _Component);

  function UpdateGroupCard() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = UpdateGroupCard.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);

    this.updates = this.attrs.updates;
    this.updateIdToHighlight = this.attrs.updateIdToHighlight;
    this.user = this.attrs.user;
  };

  _proto.view = function view() {
    var _this = this;

    var legendStyle = {
      backgroundColor: this.user.color()
    };
    var className = 'UpdateGroupCard';
    var status = null;
    var updaterComment = null;

    if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user === this.user) {
      className += 'Own';
      status = m("legend", {
        style: legendStyle,
        className: "UpdateGroupCard-end"
      }, m("div", {
        className: "darkenBackground"
      }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.basics.current_status')));
      updaterComment = m("legend", {
        style: legendStyle
      }, m("div", {
        className: "darkenBackground"
      }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.basics.updater_comment')));
    }

    return m("div", {
      className: className
    }, m("legend", {
      style: legendStyle
    }, m("div", {
      className: "darkenBackground"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.basics.type'))), m("legend", {
      style: legendStyle,
      className: "UpdateGroupCard-center"
    }, m("div", {
      className: "darkenBackground"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.basics.tpe'))), m("legend", {
      style: legendStyle,
      className: "UpdateGroupCard-center"
    }, m("div", {
      className: "darkenBackground"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.basics.capped'))), m("legend", {
      style: legendStyle
    }, m("div", {
      className: "darkenBackground"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.basics.comment'))), updaterComment, m("legend", {
      style: legendStyle,
      className: "UpdateGroupCard-end"
    }, m("div", {
      className: "darkenBackground"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.basics.approved_by'))), status, this.updates.map(function (update) {
      var type = !!update.link() ? m(flarum_components_Link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: update.link()
      }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("hcl.forum.updates.types." + update.type())) : flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("hcl.forum.updates.types." + update.type());
      var approvedBy = null;

      if (update.updaterUser()) {
        approvedBy = m(flarum_components_Link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route.user(update.updaterUser())
        }, flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3___default()(update.updaterUser()));
      } else if (update.isApproved()) {
        // The user that approved this is probably deleted
        approvedBy = flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3___default()(update.updaterUser());
      }

      var fields = [m("div", null, type), m("div", {
        className: "UpdateGroupCard-center"
      }, update.tpe()), m("div", {
        className: "UpdateGroupCard-center"
      }, update.isCapped() ? flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()('fas fa-check') : null), m("div", null, update.comment())];

      if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user === _this.user) {
        fields.push(m("div", null, update.updaterComment()));
      }

      fields.push(m("div", {
        className: "UpdateGroupCard-end"
      }, approvedBy));

      if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user === _this.user) {
        fields.push(m("div", {
          className: "UpdateGroupCard-end"
        }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("hcl.lib.update_status." + update.status())));
      }

      return fields;
    }), m("div", {
      className: "UpdateGroupCard-totaltext"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("hcl.forum.updates.total_tpe")), m("div", {
      className: "UpdateGroupCard-total UpdateGroupCard-center"
    }, this.updates.reduce(function (a, u) {
      if (Number.isInteger(u.tpe())) return a + u.tpe();
      return a;
    }, 0)));
  };

  return UpdateGroupCard;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_4___default.a);



/***/ }),

/***/ "./src/forum/components/updates/UpdatesUserPage.js":
/*!*********************************************************!*\
  !*** ./src/forum/components/updates/UpdatesUserPage.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdatesUserPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/UserPage */ "flarum/components/UserPage");
/* harmony import */ var flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/Placeholder */ "flarum/components/Placeholder");
/* harmony import */ var flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_components_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/components/Select */ "flarum/components/Select");
/* harmony import */ var flarum_components_Select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _UpdateGroupCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UpdateGroupCard */ "./src/forum/components/updates/UpdateGroupCard.js");
/* harmony import */ var _common_utils_UpdateSortMap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/utils/UpdateSortMap */ "./src/common/utils/UpdateSortMap.js");
/* harmony import */ var _UpdateCreateModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./UpdateCreateModal */ "./src/forum/components/updates/UpdateCreateModal.js");












/**
 * The `UpdatesUserPage` component shows a user's updates inside
 * of their profile.
 */

var UpdatesUserPage = /*#__PURE__*/function (_UserPage) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UpdatesUserPage, _UserPage);

  function UpdatesUserPage() {
    return _UserPage.apply(this, arguments) || this;
  }

  var _proto = UpdatesUserPage.prototype;

  _proto.oninit = function oninit(vnode) {
    _UserPage.prototype.oninit.call(this, vnode);

    this.loading = true;
    this.moreResults = false;
    this.updates = [];
    this.sortMap = new _common_utils_UpdateSortMap__WEBPACK_IMPORTED_MODULE_10__["default"]();
    this.status = 'all';
    this.loadLimit = 20;
    this.loadUser(m.route.param('username'));
  };

  _proto.onremove = function onremove() {
    this.updates = null;
  };

  _proto.content = function content() {
    var _this = this;

    var header;

    if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user === this.user && this.user.player()) {
      header = m("div", {
        className: "IndexPage-toolbar"
      }, m("ul", {
        className: "IndexPage-toolbar-view"
      }, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default()(this.viewItems().toArray())), m("ul", {
        className: "IndexPage-toolbar-action"
      }, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default()(this.actionItems().toArray())));
    }

    if (this.updates.length === 0 && !this.loading) {
      return m("div", {
        className: "PostsUserPage UpdatesUserPage"
      }, header, m(flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_5___default.a, {
        text: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.user.updates_empty_text')
      }));
    }

    var footer;

    if (this.loading) {
      footer = m(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6___default.a, null);
    } else if (this.moreResults) {
      footer = m("div", {
        className: "PostsUserPage-loadmore UpdatesUserPage-loadMore"
      }, m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: "Button",
        onclick: this.loadMore.bind(this)
      }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.user.updates_load_more_button')));
    } // https://www.robinwieruch.de/javascript-groupby


    var updatesByWeek = this.updates.reduce(function (groups, update) {
      var weekEndingKey = update.weekEnding().toLocaleDateString();

      if (!groups[weekEndingKey]) {
        groups[weekEndingKey] = [];
      }

      groups[weekEndingKey].push(update);
      return groups;
    }, {});
    return m("div", {
      className: "PostsUserPage UpdatesUserPage"
    }, header, m("ul", {
      className: "PostsUserPage-list UpdatesUserPage-list"
    }, Object.keys(updatesByWeek).sort(function (a, b) {
      return new Date(b) - new Date(a);
    }).map(function (weekEndingKey) {
      return m("li", null, m("div", {
        className: "PostsUserPage-discussion UpdatesUserPage-week"
      }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.user.for_week', {
        week: weekEndingKey
      })), m(_UpdateGroupCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
        updates: updatesByWeek[weekEndingKey],
        user: _this.user
      }));
    })), m("div", {
      className: "PostsUserPage-loadMore UdatesUserPage-loadMore"
    }, footer));
  };

  _proto.viewItems = function viewItems() {
    var _this2 = this;

    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default.a();
    var statusMap = this.sortMap.statusMap();
    var statusOptions = {};

    for (var i in statusMap) {
      statusOptions[i] = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.lib.update_status.' + i);
    }

    items.add('status', flarum_components_Select__WEBPACK_IMPORTED_MODULE_7___default.a.component({
      options: statusOptions,
      value: this.status || 'all',
      onchange: function onchange(status) {
        _this2.status = status;

        _this2.refresh();
      }
    }));
    return items;
  };

  _proto.actionItems = function actionItems() {
    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default.a();
    items.add('new-update', m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
      title: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.page.new_update'),
      icon: "fas fa-certificate",
      className: "Button",
      onclick: function onclick() {
        return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(_UpdateCreateModal__WEBPACK_IMPORTED_MODULE_11__["default"], {});
      }
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.page.new_update')));
    return items;
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
   * Clear and reload the user's updates.
   */
  ;

  _proto.refresh = function refresh() {
    this.loading = true;
    this.updates = [];
    m.redraw();
    this.loadUpdates().then(this.parseResults.bind(this));
  };

  _proto.loadUpdates = function loadUpdates(offset) {
    var q = "username:" + this.user.username();

    if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user != this.user) {
      q += ' status:approved';
    } else {
      q += " " + this.sortMap.statusMap()[this.status];
    }

    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.find('updates', {
      filter: {
        q: q
      },
      page: {
        offset: offset,
        limit: this.loadLimit
      },
      sort: '-submittedAt'
    });
  };

  _proto.loadMore = function loadMore() {
    this.loading = true;
    this.loadUpdates(this.updates.length).then(this.parseResults.bind(this));
  };

  _proto.parseResults = function parseResults(results) {
    this.loading = false;
    [].push.apply(this.updates, results);
    this.moreResults = results.length >= this.loadLimit;
    m.redraw();
    return results;
  };

  return UpdatesUserPage;
}(flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_4___default.a);



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
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/models/User */ "flarum/models/User");
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_models_User__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_PostControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/PostControls */ "flarum/utils/PostControls");
/* harmony import */ var flarum_utils_PostControls__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_PostControls__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/components/HeaderPrimary */ "flarum/components/HeaderPrimary");
/* harmony import */ var flarum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/components/UserPage */ "flarum/components/UserPage");
/* harmony import */ var flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/components/SessionDropdown */ "flarum/components/SessionDropdown");
/* harmony import */ var flarum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var flarum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/components/NotificationGrid */ "flarum/components/NotificationGrid");
/* harmony import */ var flarum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _models_Player__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./models/Player */ "./src/forum/models/Player.js");
/* harmony import */ var _models_Update__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./models/Update */ "./src/forum/models/Update.js");
/* harmony import */ var _models_Team__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./models/Team */ "./src/forum/models/Team.js");
/* harmony import */ var _models_PlayerMovement__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./models/PlayerMovement */ "./src/forum/models/PlayerMovement.js");
/* harmony import */ var _components_players_PlayerUserPage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/players/PlayerUserPage */ "./src/forum/components/players/PlayerUserPage.js");
/* harmony import */ var _components_players_PlayerCreatePage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/players/PlayerCreatePage */ "./src/forum/components/players/PlayerCreatePage.js");
/* harmony import */ var _components_players_PlayerDirectoryPage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/players/PlayerDirectoryPage */ "./src/forum/components/players/PlayerDirectoryPage.js");
/* harmony import */ var _components_updates_UpdateCreateModal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/updates/UpdateCreateModal */ "./src/forum/components/updates/UpdateCreateModal.js");
/* harmony import */ var _components_updates_UpdateDirectoryPage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/updates/UpdateDirectoryPage */ "./src/forum/components/updates/UpdateDirectoryPage.js");
/* harmony import */ var _notifications_UpdateApprovedNotification__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./notifications/UpdateApprovedNotification */ "./src/forum/notifications/UpdateApprovedNotification.js");
/* harmony import */ var _notifications_UpdateDeniedNotification__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./notifications/UpdateDeniedNotification */ "./src/forum/notifications/UpdateDeniedNotification.js");
/* harmony import */ var _components_updates_UpdatesUserPage__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/updates/UpdatesUserPage */ "./src/forum/components/updates/UpdatesUserPage.js");
/* harmony import */ var _components_teams_TeamsPage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/teams/TeamsPage */ "./src/forum/components/teams/TeamsPage.js");

























flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('cxsquared/howzat-cricket-league', function () {
  // New Models
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.store.models.players = _models_Player__WEBPACK_IMPORTED_MODULE_12__["default"];
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.store.models.updates = _models_Update__WEBPACK_IMPORTED_MODULE_13__["default"];
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.store.models.teams = _models_Team__WEBPACK_IMPORTED_MODULE_14__["default"];
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.store.models.playerMovements = _models_PlayerMovement__WEBPACK_IMPORTED_MODULE_15__["default"]; // New Model Relationships

  flarum_models_User__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.player = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasOne('player');
  flarum_models_User__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.submittedUpdates = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasMany('submittedUpdates');
  flarum_models_User__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.gmTeam = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasOne('gmTeam'); // New Routes

  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.routes['players'] = {
    path: '/players',
    component: _components_players_PlayerDirectoryPage__WEBPACK_IMPORTED_MODULE_18__["default"]
  };
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.routes['player.create'] = {
    path: '/player/create',
    component: _components_players_PlayerCreatePage__WEBPACK_IMPORTED_MODULE_17__["default"]
  };
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.routes['user.player'] = {
    path: '/u/:username/player',
    component: _components_players_PlayerUserPage__WEBPACK_IMPORTED_MODULE_16__["default"]
  };
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.routes['user.updates'] = {
    path: '/u/:username/updates',
    component: _components_updates_UpdatesUserPage__WEBPACK_IMPORTED_MODULE_23__["default"]
  };
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.routes['updates'] = {
    path: '/updates',
    component: _components_updates_UpdateDirectoryPage__WEBPACK_IMPORTED_MODULE_20__["default"]
  };
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.routes['teams'] = {
    path: '/teams',
    component: _components_teams_TeamsPage__WEBPACK_IMPORTED_MODULE_24__["default"]
  };
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.routes['teams.show'] = {
    path: '/teams/:id',
    component: _components_teams_TeamsPage__WEBPACK_IMPORTED_MODULE_24__["default"]
  }; // Adding player button to UserPage

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_8___default.a.prototype, 'navItems', function (items) {
    var playersHref = flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.route('user.player', {
      username: this.user.username()
    });
    items.add('players', m(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: playersHref,
      icon: "fas fa-hiking",
      "class": "Button Button--link hasIcon"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('hcl.forum.user.player_link')), 80);
    var updatesHref = flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.route('user.updates', {
      username: this.user.username()
    });
    items.add('updates', m(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: updatesHref,
      icon: "fas fa-certificate",
      "class": "Button Button--link hasIcon"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('hcl.forum.user.updates_link')), 80);
  }); // Adding Create/Manage button to header

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_6___default.a.prototype, 'items', function (items) {
    if (flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user == null) return;
    var player = flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user.player();

    if (player) {
      var href = flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.route('user.player', {
        username: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user.username()
      });
      items.add('view-players', m(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: href,
        className: "LinksButton Button Button--link"
      }, flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('hcl.forum.nav.players_view')), 5);
    } else {
      var _href = flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.route('player.create');

      items.add('create-players', m(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: _href,
        className: "LinksButton Button Button--link"
      }, flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('hcl.forum.nav.players_create')), 5);
    }

    items.add('claimTpe', m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: "LinksButton Button Button--link",
      onclick: function onclick() {
        return flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.modal.show(_components_updates_UpdateCreateModal__WEBPACK_IMPORTED_MODULE_19__["default"]);
      }
    }, flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('hcl.forum.nav.claim_tpe')));
  }); // Claim Comment

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_utils_PostControls__WEBPACK_IMPORTED_MODULE_4___default.a, 'userControls', function (items, post) {
    if (flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user == null || !flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user.player()) return;
    items.add('claimTpe', m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      icon: "fas fa-certificate",
      onclick: function onclick() {
        return flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.modal.show(_components_updates_UpdateCreateModal__WEBPACK_IMPORTED_MODULE_19__["default"], {
          post: post
        });
      }
    }, flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('hcl.forum.basics.claim_tpe')), 4);
  }); // Update button

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_10___default.a.prototype, 'items', function (items) {
    if (flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.forum.attribute('canEditUpdates')) {
      items.add('updates', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_7___default.a.component({
        icon: 'fas fa-pen',
        href: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.route('updates')
      }, flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('hcl.forum.header.update_button')), 5);
    }
  }); // Notifications

  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.notificationComponents.updateApproved = _notifications_UpdateApprovedNotification__WEBPACK_IMPORTED_MODULE_21__["default"];
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.notificationComponents.updateDenied = _notifications_UpdateDeniedNotification__WEBPACK_IMPORTED_MODULE_22__["default"];
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_11___default.a.prototype, 'notificationTypes', function (items) {
    items.add('updateApproved', {
      name: 'updateApproved',
      icon: 'fas fa-certificate',
      label: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('hcl.forum.settings.notify_update_approved')
    });
    items.add('updateDenied', {
      name: 'updateDenied',
      icon: 'fas fa-certificate',
      label: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('hcl.forum.settings.notify_denied_approved')
    });
  }); // Index Page itesm

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_9___default.a.prototype, 'navItems', function (items) {
    items.add('hcl-player-directory', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_7___default.a.component({
      href: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.route('players'),
      icon: 'fas fa-hiking'
    }, flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('hcl.forum.page.player_directory')), 85);
    items.add('hcl-team-directory', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_7___default.a.component({
      href: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.route('teams'),
      icon: 'fas fa-hiking'
    }, flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('hcl.forum.page.team_directory')), 85);
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
/* harmony import */ var _common_utils_TpeUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/utils/TpeUtils */ "./src/common/utils/TpeUtils.js");






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
  // Computed
  name: flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3___default()('firstName', 'lastName', function (fn, ln) {
    return fn + " " + ln;
  }),
  tpa: flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3___default()('battingTpa', 'bowlingTpa', function (bat, bowl) {
    return bat + bowl;
  }),
  battingTpa: flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3___default()('running', 'defense', 'attacking', 'lofted', 'vsSpin', 'vsPace', 'footwork', 'timing', 'control', function () {
    for (var _len = arguments.length, stats = new Array(_len), _key = 0; _key < _len; _key++) {
      stats[_key] = arguments[_key];
    }

    return _common_utils_TpeUtils__WEBPACK_IMPORTED_MODULE_4__["default"].tpa(stats);
  }),
  bowlingTpa: flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3___default()('paceFlight', 'swingLegSpin', 'slowerBallOffSpin', 'seamDrift', 'accuracy', 'discipline', 'bouncerBounce', 'yorkerArmBall', function () {
    for (var _len2 = arguments.length, stats = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      stats[_key2] = arguments[_key2];
    }

    return _common_utils_TpeUtils__WEBPACK_IMPORTED_MODULE_4__["default"].tpa(stats);
  }),
  isBowler: flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3___default()('battingTpa', 'bowlingTpa', function (bat, bowl) {
    return bowl > bat;
  }),
  isPaceBowler: flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3___default()('bowlingStyle', function (bs) {
    return bs.toLowerCase() === 'pace';
  }),
  // relationships
  user: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasOne('user'),
  team: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasOne('team'),
  // permissions
  canEdit: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('canEdit'),
  // audit trail
  createdAt: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('createdAt', flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.transformDate),
  updatedAt: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('updatedAt', flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.transaformDate)
});

/***/ }),

/***/ "./src/forum/models/PlayerMovement.js":
/*!********************************************!*\
  !*** ./src/forum/models/PlayerMovement.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayerMovement; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_2__);



var _extends2;



var PlayerMovement = /*#__PURE__*/function (_Model) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(PlayerMovement, _Model);

  function PlayerMovement() {
    return _Model.apply(this, arguments) || this;
  }

  return PlayerMovement;
}(flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a);



Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(PlayerMovement.prototype, (_extends2 = {
  createdAt: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('date', flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.transformDate)
}, _extends2["createdAt"] = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('createdAt', flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.transformDate), _extends2.updatedAt = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('updatedAt', flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.transaformDate), _extends2.player = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasOne('player'), _extends2.fromTeam = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasOne('fromTeam'), _extends2.toTeam = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasMany('toTeam'), _extends2));

/***/ }),

/***/ "./src/forum/models/Team.js":
/*!**********************************!*\
  !*** ./src/forum/models/Team.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Team; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_2__);




var Team = /*#__PURE__*/function (_Model) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Team, _Model);

  function Team() {
    return _Model.apply(this, arguments) || this;
  }

  return Team;
}(flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a);



Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(Team.prototype, {
  name: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('name'),
  logoLink: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('logoLink'),
  primaryColor: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('primaryColor'),
  secondaryColor: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('secondaryColor'),
  createdAt: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('createdAt', flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.transformDate),
  updatedAt: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('updatedAt', flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.transaformDate),
  gmUser: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasOne('gmUser'),
  agmUser: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasOne('agmUser'),
  players: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasMany('players')
});

/***/ }),

/***/ "./src/forum/models/Update.js":
/*!************************************!*\
  !*** ./src/forum/models/Update.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Update; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/computed */ "flarum/utils/computed");
/* harmony import */ var flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_utils_getNextDayOfWeek__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/utils/getNextDayOfWeek */ "./src/common/utils/getNextDayOfWeek.js");






var Update = /*#__PURE__*/function (_Model) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Update, _Model);

  function Update() {
    return _Model.apply(this, arguments) || this;
  }

  return Update;
}(flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a);



Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(Update.prototype, {
  date: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('date', flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.transformDate),
  weekEnding: flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3___default()('date', function (date) {
    return Object(_common_utils_getNextDayOfWeek__WEBPACK_IMPORTED_MODULE_4__["default"])(date, 0);
  }),
  link: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('link'),
  type: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('type'),
  comment: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('comment'),
  tpe: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('tpe'),
  isCapped: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('isCapped'),
  status: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('status'),
  submittedAt: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('submittedAt', flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.transformDate),
  updatedAt: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('updatedAt', flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.transformDate),
  submittedUser: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasOne('submittedUser'),
  updaterUser: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasOne('updaterUser'),
  updaterComment: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('updaterComment'),
  player: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasOne('player'),
  isApproved: flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3___default()('status', function (status) {
    return status.toLowerCase() === 'approved';
  }),
  isDenied: flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3___default()('status', function (status) {
    return status.toLowerCase() === 'denied';
  }),
  isUnderReview: flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3___default()('status', function (status) {
    return status.toLowerCase() === 'under_review';
  })
});

/***/ }),

/***/ "./src/forum/notifications/UpdateApprovedNotification.js":
/*!***************************************************************!*\
  !*** ./src/forum/notifications/UpdateApprovedNotification.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdateApprovedNotification; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Notification */ "flarum/components/Notification");
/* harmony import */ var flarum_components_Notification__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Notification__WEBPACK_IMPORTED_MODULE_2__);




var UpdateApprovedNotification = /*#__PURE__*/function (_Notification) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UpdateApprovedNotification, _Notification);

  function UpdateApprovedNotification() {
    return _Notification.apply(this, arguments) || this;
  }

  var _proto = UpdateApprovedNotification.prototype;

  _proto.icon = function icon() {
    return 'fas fa-certificate';
  };

  _proto.href = function href() {
    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route('user.player', {
      username: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.username()
    });
  };

  _proto.content = function content() {
    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.notifications.update_approved', {
      user: this.attrs.notification.fromUser()
    });
  };

  return UpdateApprovedNotification;
}(flarum_components_Notification__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/notifications/UpdateDeniedNotification.js":
/*!*************************************************************!*\
  !*** ./src/forum/notifications/UpdateDeniedNotification.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdateDeniedNotification; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Notification */ "flarum/components/Notification");
/* harmony import */ var flarum_components_Notification__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Notification__WEBPACK_IMPORTED_MODULE_2__);




var UpdateDeniedNotification = /*#__PURE__*/function (_Notification) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UpdateDeniedNotification, _Notification);

  function UpdateDeniedNotification() {
    return _Notification.apply(this, arguments) || this;
  }

  var _proto = UpdateDeniedNotification.prototype;

  _proto.icon = function icon() {
    return 'fas fa-certificate';
  };

  _proto.href = function href() {
    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route('user.updates', {
      username: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.username()
    });
  };

  _proto.content = function content() {
    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('hcl.forum.notifications.update_denied', {
      user: this.attrs.notification.fromUser()
    });
  };

  _proto.excerpt = function excerpt() {
    return this.attrs.notification.content();
  };

  return UpdateDeniedNotification;
}(flarum_components_Notification__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/states/PlayerDirectoryState.js":
/*!**************************************************!*\
  !*** ./src/forum/states/PlayerDirectoryState.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayersDirectoryState; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _common_utils_PlayerSortMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/utils/PlayerSortMap */ "./src/common/utils/PlayerSortMap.js");


/**
 * Based on Flarum's DiscussionListState
 */


var PlayersDirectoryState = /*#__PURE__*/function () {
  function PlayersDirectoryState(params, app) {
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

  var _proto = PlayersDirectoryState.prototype;

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

  return PlayersDirectoryState;
}();



/***/ }),

/***/ "./src/forum/states/UpdateDirectoryState.js":
/*!**************************************************!*\
  !*** ./src/forum/states/UpdateDirectoryState.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdateDirectoryState; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _common_utils_UpdateSortMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/utils/UpdateSortMap */ "./src/common/utils/UpdateSortMap.js");


/**
 * Based on Flarum's DiscussionListState
 */


var UpdateDirectoryState = /*#__PURE__*/function () {
  function UpdateDirectoryState(params, app) {
    if (params === void 0) {
      params = {};
    }

    if (app === void 0) {
      app = window.app;
    }

    this.params = params;
    this.app = app;
    this.updates = [];
    this.moreResults = false;
    this.loading = false;
  }

  var _proto = UpdateDirectoryState.prototype;

  _proto.requestParams = function requestParams() {
    var params = {
      include: [],
      filter: {}
    };
    var sortKey = this.params.sort || 'oldest';
    params.sort = this.sortMap()[sortKey]; // don't send anything is all is selected
    // and default to pending if nothing is set

    if (this.params.q) {
      if (this.params.q != 'all') params.filter.q = this.statusMap()[this.params.q];
    } else {
      params.filter.q = this.statusMap()['pending'];
    }

    return params;
  };

  _proto.sortMap = function sortMap() {
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      "default": ''
    }, new _common_utils_UpdateSortMap__WEBPACK_IMPORTED_MODULE_1__["default"]().sortMap());
  };

  _proto.statusMap = function statusMap() {
    return new _common_utils_UpdateSortMap__WEBPACK_IMPORTED_MODULE_1__["default"]().statusMap();
  };

  _proto.getParams = function getParams() {
    return this.params;
  };

  _proto.clear = function clear() {
    this.updates = [];
    m.redraw();
  };

  _proto.refreshParams = function refreshParams(newParams) {
    var _this = this;

    var hasNewParams = Object.keys(newParams).some(function (key) {
      return _this.getParams()[key] != newParams[key];
    });

    if (!this.hasUpdates() || hasNewParams) {
      this.params = newParams;
      this.refresh();
    }
  };

  _proto.refresh = function refresh() {
    var _this2 = this;

    this.loading = true;
    this.clear();
    return this.loadResults().then(function (results) {
      var playersToLoad = results.reduce(function (existingIds, update) {
        var id = update.submittedUser().id();
        if (!update.submittedUser().player() && !existingIds.includes(id)) existingIds.push(id);
        return existingIds;
      }, []);

      if (playersToLoad.length === 0) {
        _this2.parseResults(results);
      }

      playersToLoad.forEach(function (id, i) {
        if (i === playersToLoad.length - 1) {
          app.store.find('users', id + "/player", null, {
            errorHandler: function errorHandler() {}
          }).then(function () {
            return _this2.parseResults(results);
          });
        } else {
          app.store.find('users', id + "/player", null, {
            errorHandler: function errorHandler() {}
          });
        }
      });
    }, function () {
      _this2.loading = false;
      m.redraw();
    });
  };

  _proto.loadResults = function loadResults(offset) {
    var preloadedUpdates = this.app.preloadedApiDocument();

    if (preloadedUpdates) {
      return Promise.resolve(preloadedUpdates);
    }

    var params = this.requestParams();
    params.page = {
      offset: offset
    };
    params.include = params.include.join(',');
    return this.app.store.find('updates', params);
  };

  _proto.loadMore = function loadMore() {
    this.loading = true;
    this.loadResults(this.updates.length).then(this.parseResults.bind(this));
  };

  _proto.parseResults = function parseResults(results) {
    var _this$updates;

    (_this$updates = this.updates).push.apply(_this$updates, results);

    this.loading = false;
    this.moreResults = !!results.payload.links && !!results.payload.links.next;
    m.redraw();
    return results;
  };

  _proto.hasUpdates = function hasUpdates() {
    return this.updates.length > 0;
  };

  _proto.isLoading = function isLoading() {
    return this.loading;
  };

  _proto.isSearchResults = function isSearchResults() {
    return !!this.params.q;
  };

  _proto.empty = function empty() {
    return !this.hasUpdates() && !this.isLoading();
  };

  return UpdateDirectoryState;
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

/***/ "flarum/components/Checkbox":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/Checkbox']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Checkbox'];

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

/***/ "flarum/components/Link":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Link']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Link'];

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

/***/ "flarum/components/Notification":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['components/Notification']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Notification'];

/***/ }),

/***/ "flarum/components/NotificationGrid":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/NotificationGrid']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/NotificationGrid'];

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

/***/ "flarum/components/SessionDropdown":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['components/SessionDropdown']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SessionDropdown'];

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

/***/ "flarum/helpers/humanTime":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/humanTime']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/humanTime'];

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

/***/ "flarum/utils/PostControls":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['utils/PostControls']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/PostControls'];

/***/ }),

/***/ "flarum/utils/Stream":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['utils/Stream']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/Stream'];

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