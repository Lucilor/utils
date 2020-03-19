(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return _point__WEBPACK_IMPORTED_MODULE_0__["Point"]; });

/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return _line__WEBPACK_IMPORTED_MODULE_1__["Line"]; });

/* harmony import */ var _rectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return _rectangle__WEBPACK_IMPORTED_MODULE_2__["Rectangle"]; });

/* harmony import */ var _arc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Arc", function() { return _arc__WEBPACK_IMPORTED_MODULE_3__["Arc"]; });

/* harmony import */ var _angle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Angle", function() { return _angle__WEBPACK_IMPORTED_MODULE_4__["Angle"]; });

/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dataURLtoBlob", function() { return _misc__WEBPACK_IMPORTED_MODULE_5__["dataURLtoBlob"]; });










/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
var Point = /** @class */ (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (Array.isArray(x)) {
            this.x = x[0];
            this.y = x[1];
        }
        else if (typeof x === "number") {
            this.x = x;
            this.y = typeof y === "number" ? y : x;
        }
    }
    Point.prototype.set = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = x; }
        if (typeof x === "number") {
            this.x = x;
            this.y = y;
        }
        else {
            this.x = x.x;
            this.y = x.y;
        }
        return this;
    };
    Point.prototype.equals = function (v) {
        return v.x === this.x && v.y === this.y;
    };
    Point.prototype.equalsAppr = function (v, accuracy) {
        return Math.abs(v.x - this.x) <= accuracy && Math.abs(v.y - this.y) <= accuracy;
    };
    Point.prototype.add = function (v) {
        if (typeof v === "number") {
            return this.add(new Point(v));
        }
        this.x += v.x;
        this.y += v.y;
        return this;
    };
    Point.prototype.sub = function (v) {
        if (typeof v === "number") {
            return this.sub(new Point(v));
        }
        this.x -= v.x;
        this.y -= v.y;
        return this;
    };
    Point.prototype.multiply = function (v) {
        if (typeof v === "number") {
            return this.multiply(new Point(v));
        }
        this.x *= v.x;
        this.y *= v.y;
        return this;
    };
    Point.prototype.divide = function (v) {
        if (typeof v === "number") {
            return this.divide(new Point(v));
        }
        this.x /= v.x;
        this.y /= v.y;
        return this;
    };
    Point.prototype.clone = function () {
        return new Point(this.x, this.y);
    };
    Point.prototype.flip = function (vertical, horizontal, anchor) {
        if (vertical === void 0) { vertical = false; }
        if (horizontal === void 0) { horizontal = false; }
        if (anchor === void 0) { anchor = new Point(0); }
        var dx = anchor.x - this.x;
        var dy = anchor.y - this.y;
        if (vertical === true) {
            this.y += dy * 2;
        }
        if (horizontal === true) {
            this.x += dx * 2;
        }
        return this;
    };
    Point.prototype.rotate = function (angle, anchor) {
        if (anchor === void 0) { anchor = new Point(0); }
        var x1 = anchor.x, y1 = anchor.y;
        var _a = this, x2 = _a.x, y2 = _a.y;
        var theta = Math.atan2(y2 - y1, x2 - x1) + angle;
        var length = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
        var d = new Point(Math.cos(theta), Math.sin(theta)).multiply(length);
        return this.set(anchor.x + d.x, anchor.y + d.y);
    };
    Point.prototype.toArray = function () {
        return [this.x, this.y];
    };
    return Point;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return Line; });
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var Line = /** @class */ (function () {
    function Line(start, end) {
        if (end === void 0) { end = start; }
        this.start = start;
        this.end = end;
    }
    Line.prototype.containsPoint = function (point, extend) {
        if (extend === void 0) { extend = false; }
        var _a = this.start, x1 = _a.x, y1 = _a.y;
        var _b = this.end, x2 = _b.x, y2 = _b.y;
        var x = point.x, y = point.y;
        var withinLine = extend || (Math.min(x1, x2) <= x && x <= Math.max(x1, x2) && Math.min(y1, y2) <= y && y <= Math.max(y1, y2));
        if ((x - x1) * (y2 - y1) === (x2 - x1) * (y - y1) && withinLine) {
            return true;
        }
        else {
            return false;
        }
    };
    Object.defineProperty(Line.prototype, "length", {
        get: function () {
            var _a = this.start, x1 = _a.x, y1 = _a.y;
            var _b = this.end, x2 = _b.x, y2 = _b.y;
            return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "middle", {
        get: function () {
            var _a = this.start, x1 = _a.x, y1 = _a.y;
            var _b = this.end, x2 = _b.x, y2 = _b.y;
            return new _point__WEBPACK_IMPORTED_MODULE_0__["Point"](x1 + x2, y1 + y2).multiply(0.5);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "slope", {
        get: function () {
            var _a = this.start, x1 = _a.x, y1 = _a.y;
            var _b = this.end, x2 = _b.x, y2 = _b.y;
            if (x1 === x2) {
                return Infinity;
            }
            return (y1 - y2) / (x1 - x2);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "theta", {
        get: function () {
            var _a = this.start, x1 = _a.x, y1 = _a.y;
            var _b = this.end, x2 = _b.x, y2 = _b.y;
            return Math.atan2(y2 - y1, x2 - x1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "expression", {
        get: function () {
            var slope = this.slope;
            if (isNaN(slope)) {
                return null;
            }
            var result = { a: 0, b: 0, c: 0 };
            if (isFinite(slope)) {
                result.a = slope;
                result.b = -1;
                result.c = this.start.y - this.start.x * slope;
            }
            else {
                result.a = 1;
                result.c = -this.start.x;
            }
            var count = 0;
            for (var k in result) {
                if (result[k] < 0) {
                    count++;
                }
            }
            if (count > 1) {
                result.a *= -1;
                result.b *= -1;
                result.c *= -1;
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Line.prototype.equals = function (line) {
        return this.start.equals(line.start) && this.end.equals(line.end);
    };
    Line.prototype.rotate = function (angle, anchor) {
        if (anchor === void 0) { anchor = new _point__WEBPACK_IMPORTED_MODULE_0__["Point"](0); }
        this.start.rotate(angle, anchor);
        this.end.rotate(angle, anchor);
        return this;
    };
    Line.prototype.distance = function (to) {
        if (this.slope !== to.slope) {
            return NaN;
        }
        var exp1 = this.expression;
        var exp2 = to.expression;
        return Math.abs(exp1.c - exp2.c) / Math.sqrt(Math.pow(exp1.a, 2) + Math.pow(exp1.b, 2));
    };
    Line.prototype.intersect = function (line, extend) {
        if (extend === void 0) { extend = false; }
        var slope1 = this.slope;
        var slope2 = line.slope;
        var intersection = null;
        if (slope1 === slope2 || (!isFinite(slope1) && !isFinite(slope2))) {
            return intersection;
        }
        var exp1 = this.expression;
        var exp2 = line.expression;
        if (exp1 && exp2) {
            intersection = solveLinearEqXY(exp1.a, exp1.b, -exp1.c, exp2.a, exp2.b, -exp2.c);
        }
        if (extend === false && (!this.containsPoint(intersection) || !line.containsPoint(intersection))) {
            intersection = null;
        }
        return intersection;
    };
    return Line;
}());

function solveLinearEqXY(a1, b1, c1, a2, b2, c2) {
    var k = a1 * b2 - a2 * b1;
    if (k === 0) {
        return null;
    }
    else {
        return new _point__WEBPACK_IMPORTED_MODULE_0__["Point"](b2 * c1 - b1 * c2, a1 * c2 - a2 * c1).divide(k);
    }
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return Rectangle; });
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var Rectangle = /** @class */ (function () {
    function Rectangle(position, width, height) {
        this.position = position;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.containsPoint = function (point) {
        var x = point.x, y = point.y;
        var _a = this, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
        return x >= left && x <= right && y <= top && y >= bottom;
    };
    Rectangle.prototype.containsLine = function (line) {
        return this.containsPoint(line.start) && this.containsPoint(line.end);
    };
    Object.defineProperty(Rectangle.prototype, "x", {
        get: function () {
            return this.position.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "y", {
        get: function () {
            return this.position.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "top", {
        get: function () {
            return this.position.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "right", {
        get: function () {
            return this.position.x + this.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "bottom", {
        get: function () {
            return this.position.y - this.height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "left", {
        get: function () {
            return this.position.x;
        },
        enumerable: true,
        configurable: true
    });
    Rectangle.prototype.equals = function (rect) {
        return this.position.equals(rect.position) && this.width === rect.width && this.height === rect.height;
    };
    Rectangle.prototype.intersects = function (rect) {
        var x = 0;
        var y = 0;
        var width = 0;
        var height = 0;
        if (this.left < rect.right && this.left > rect.left) {
            x = this.left;
            width = rect.right - this.left;
        }
        if (this.right > rect.left && this.right < rect.right) {
            x = rect.left;
            width = this.right - rect.left;
        }
        if (this.top > rect.bottom && this.top < rect.top) {
            y = rect.bottom;
            height = this.top - rect.bottom;
        }
        if (this.bottom < rect.top && this.bottom > rect.bottom) {
            y = this.bottom;
            height = rect.top - this.bottom;
        }
        if (width > 0 && height > 0) {
            return new Rectangle(new _point__WEBPACK_IMPORTED_MODULE_0__["Point"](x, y), width, height);
        }
        return null;
    };
    return Rectangle;
}());



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arc", function() { return Arc; });
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _angle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);



var Arc = /** @class */ (function () {
    function Arc(center, radius, start, end) {
        if (center === void 0) { center = new _point__WEBPACK_IMPORTED_MODULE_0__["Point"](); }
        this.clockwise = true;
        this.center = center;
        this.radius = radius;
        if (start instanceof _angle__WEBPACK_IMPORTED_MODULE_1__["Angle"]) {
            this.setStartAngle(start);
        }
        else if (start instanceof _point__WEBPACK_IMPORTED_MODULE_0__["Point"]) {
            this.setStartPoint(start);
        }
        else {
            this.setStartAngle(new _angle__WEBPACK_IMPORTED_MODULE_1__["Angle"](0));
        }
        if (end instanceof _angle__WEBPACK_IMPORTED_MODULE_1__["Angle"]) {
            this.setEndAngle(end);
        }
        if (end instanceof _point__WEBPACK_IMPORTED_MODULE_0__["Point"]) {
            this.setEndPoint(end);
        }
        else {
            this.setEndAngle(new _angle__WEBPACK_IMPORTED_MODULE_1__["Angle"](Math.PI / 2));
        }
    }
    Arc.prototype.getStartAngle = function () {
        return this._startAngle;
    };
    Arc.prototype.setStartAngle = function (angle) {
        this._startAngle = angle;
        var d = new _point__WEBPACK_IMPORTED_MODULE_0__["Point"](Math.cos(this._startAngle.getRad()), Math.sin(this._startAngle.getRad())).multiply(this.radius);
        this._startPoint = this.center.clone().add(d);
    };
    Arc.prototype.getEndAngle = function () {
        return this._endAngle;
    };
    Arc.prototype.setEndAngle = function (angle) {
        this._endAngle = angle;
        var d = new _point__WEBPACK_IMPORTED_MODULE_0__["Point"](Math.cos(this._endAngle.getRad()), Math.sin(this._endAngle.getRad())).multiply(this.radius);
        this._endPoint = this.center.clone().add(d);
    };
    Arc.prototype.getStartPoint = function () {
        return this._startPoint;
    };
    Arc.prototype.setStartPoint = function (value) {
        this._startPoint = value;
        this._startAngle.set(new _line__WEBPACK_IMPORTED_MODULE_2__["Line"](this.center, this._startPoint).theta, "rad");
    };
    Arc.prototype.getEndPoint = function () {
        return this._endPoint;
    };
    Arc.prototype.setEndPoint = function (value) {
        this._endPoint = value;
        this._endAngle.set(new _line__WEBPACK_IMPORTED_MODULE_2__["Line"](this.center, this._endPoint).theta, "rad");
    };
    Object.defineProperty(Arc.prototype, "length", {
        get: function () {
            var _a = this, radius = _a.radius, startAngle = _a._startAngle, endAngle = _a._endAngle;
            return radius * Math.abs(startAngle.value - endAngle.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Arc.prototype, "middle", {
        get: function () {
            var angle = (this._startAngle.value + this._endAngle.value) / 2;
            var d = new _point__WEBPACK_IMPORTED_MODULE_0__["Point"](Math.cos(angle), Math.sin(angle)).multiply(this.radius);
            return this.center.clone().add(d);
        },
        enumerable: true,
        configurable: true
    });
    Arc.prototype.flip = function (vertical, horizontal, anchor) {
        if (vertical === void 0) { vertical = false; }
        if (horizontal === void 0) { horizontal = false; }
        if (anchor === void 0) { anchor = new _point__WEBPACK_IMPORTED_MODULE_0__["Point"](); }
        this.center.flip(vertical, horizontal);
        this.setStartPoint(this.getStartPoint().flip(vertical, horizontal, anchor));
        this.setEndPoint(this.getEndPoint().flip(vertical, horizontal, anchor));
        if (vertical !== horizontal) {
            this.clockwise = !this.clockwise;
        }
        return this;
    };
    Arc.prototype.rotate = function (angle, anchor) {
        if (anchor === void 0) { anchor = new _point__WEBPACK_IMPORTED_MODULE_0__["Point"](0); }
        this.center.rotate(angle, anchor);
        this.setStartPoint(this.getStartPoint().rotate(angle, anchor));
        this.setEndPoint(this.getEndPoint().rotate(angle, anchor));
        return this;
    };
    return Arc;
}());



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Angle", function() { return Angle; });
var Angle = /** @class */ (function () {
    function Angle(value, unit) {
        if (value === void 0) { value = 0; }
        if (unit === void 0) { unit = "rad"; }
        this.value = value;
        this.unit = unit;
    }
    Angle.prototype.getRad = function () {
        if (this.unit === "deg") {
            return (this.value / 180) * Math.PI;
        }
        return this.value;
    };
    Angle.prototype.getDeg = function () {
        if (this.unit === "rad") {
            return (this.value / Math.PI) * 180;
        }
        return this.value;
    };
    Angle.prototype.constrain = function () {
        var limit;
        if (this.unit === "rad") {
            limit = Math.PI * 2;
        }
        if (this.unit === "deg") {
            limit = 360;
        }
        while (this.value < 0) {
            this.value += limit;
        }
        while (this.value > limit) {
            this.value -= limit;
        }
        return this;
    };
    Angle.prototype.set = function (value, unit) {
        if (value === void 0) { value = 0; }
        if (unit === void 0) { unit = "rad"; }
        this.value = value;
        this.unit = unit;
        return this;
    };
    return Angle;
}());



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataURLtoBlob", function() { return dataURLtoBlob; });
// import JSEncrypt from "jsencrypt";
// export function RSAEncrypt(data: any) {
// 	const jsEncrypt = new JSEncrypt();
// 	jsEncrypt.setPublicKey(publicKey);
// 	let plainText = JSON.stringify(data);
// 	const limit = 127;
// 	const result = [];
// 	while (plainText.length > 0) {
// 		result.push(jsEncrypt.encrypt(plainText.slice(0, limit)));
// 		plainText = plainText.slice(limit);
// 	}
// 	return encodeURIComponent(result.join("&&&&&"));
// }
function dataURLtoBlob(dataURL) {
    var arr = dataURL.split(",");
    var mime = arr[0].match(/:(.*?);/)[1];
    var bstr = atob(arr[1]);
    var n = bstr.length;
    var u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map