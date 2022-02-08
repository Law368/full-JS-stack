"use strict";
(self["webpackChunkfull_js_stack"] = self["webpackChunkfull_js_stack"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: #fff;\n}\n\n.album {\n  background-color: #818181;\n  width: 300px;\n  height: 300px;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAEA;EACI,sBAHS;AAEb;;AAIA;EACI,yBAAA;EACA,YAAA;EACA,aAAA;AADJ","sourcesContent":["$body-color: #fff;\n\nbody {\n    background-color: $body-color;\n}\n\n.album {\n    background-color: rgb(129 129 129);\n    width: 300px;\n    height: 300px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/createBtn.ts":
/*!**************************!*\
  !*** ./src/createBtn.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/createElement.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.ts");


var wrapper = document.querySelector('.content-wrapper');
function createBtn() {
    var returnBtn = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'button',
        className: 'gallery__btn-back',
        value: 'return',
    });
    wrapper.appendChild(returnBtn);
    returnBtn.style.display = 'none';
    returnBtn.addEventListener('click', function () {
        wrapper.innerHTML = '';
        (0,_index__WEBPACK_IMPORTED_MODULE_1__.renderAlbums)();
    });
    return returnBtn;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBtn);


/***/ }),

/***/ "./src/createElement.ts":
/*!******************************!*\
  !*** ./src/createElement.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createElement(props) {
    var element = document.createElement(props.tag);
    element.classList.add(props.className);
    if (props.value) {
        element.innerHTML = props.value;
    }
    if (props.id) {
        element.id = props.id;
    }
    if (props.attribute && props.attrValue) {
        element.setAttribute(props.attribute, props.attrValue);
    }
    return element;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);


/***/ }),

/***/ "./src/fetchData.ts":
/*!**************************!*\
  !*** ./src/fetchData.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function fetchData(url) {
    return __awaiter(this, void 0, void 0, function () {
        var getData, data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(url)];
                case 1:
                    getData = _a.sent();
                    return [4 /*yield*/, getData.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3:
                    err_1 = _a.sent();
                    console.log('There was an error while fetching Data', err_1);
                    throw new Error(err_1);
                case 4: return [2 /*return*/];
            }
        });
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchData);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAlbums": () => (/* binding */ renderAlbums),
/* harmony export */   "renderScreen": () => (/* binding */ renderScreen),
/* harmony export */   "state": () => (/* binding */ state)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _createBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createBtn */ "./src/createBtn.ts");
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createElement */ "./src/createElement.ts");
/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetchData */ "./src/fetchData.ts");
/* harmony import */ var _setThumbnailSource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setThumbnailSource */ "./src/setThumbnailSource.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var body = document.querySelector('body');
var albumsUrl = 'https://jsonplaceholder.typicode.com/albums/';
var wrapper = document.querySelector('.content-wrapper');
var defaultAlbumsNumberOnPage = 4;
function renderAlbums() {
    return __awaiter(this, void 0, void 0, function () {
        var albumsArr, i, album, heading, id, thumbnail, _a, err_1;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 6, , 7]);
                    return [4 /*yield*/, (0,_fetchData__WEBPACK_IMPORTED_MODULE_3__["default"])(albumsUrl)];
                case 1:
                    albumsArr = _c.sent();
                    i = 0;
                    _c.label = 2;
                case 2:
                    if (!(i < defaultAlbumsNumberOnPage)) return [3 /*break*/, 5];
                    album = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
                        tag: 'div',
                        className: 'album',
                        id: (i + 1).toString(),
                    });
                    wrapper.appendChild(album);
                    heading = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
                        tag: 'h3',
                        className: 'album__heading',
                        value: albumsArr[i].title,
                    });
                    album.appendChild(heading);
                    album.appendChild(heading);
                    id = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
                        tag: 'p',
                        className: 'album__ID',
                        value: i.toString(),
                    });
                    album.appendChild(id);
                    _a = _createElement__WEBPACK_IMPORTED_MODULE_2__["default"];
                    _b = {
                        tag: 'img',
                        className: 'album__first-image',
                        attribute: 'src'
                    };
                    return [4 /*yield*/, (0,_setThumbnailSource__WEBPACK_IMPORTED_MODULE_4__.setThumbnailSource)(i)];
                case 3:
                    thumbnail = _a.apply(void 0, [(_b.attrValue = _c.sent(),
                            _b)]);
                    album.appendChild(thumbnail);
                    _c.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 7];
                case 6:
                    err_1 = _c.sent();
                    console.log('There was an error', err_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
var clickedElementId = '';
var photosUrl = 'https://jsonplaceholder.typicode.com/photos/';
function renderGallery() {
    return __awaiter(this, void 0, void 0, function () {
        var galleryWrapper, photosArr, currentGallery, i, image, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    // clickedElementId = (evt.target as HTMLElement).id;
                    wrapper.innerHTML = '';
                    (0,_createBtn__WEBPACK_IMPORTED_MODULE_1__["default"])();
                    document.querySelector('.gallery__btn-back');
                    galleryWrapper = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
                        tag: 'div',
                        className: 'gallery__Wrapper',
                    });
                    wrapper.appendChild(galleryWrapper);
                    return [4 /*yield*/, (0,_fetchData__WEBPACK_IMPORTED_MODULE_3__["default"])(photosUrl)];
                case 1:
                    photosArr = _a.sent();
                    currentGallery = photosArr.filter(function (image) { return image.albumId.toString() === clickedElementId; });
                    for (i = 0; i < currentGallery.length; i += 1) {
                        image = (0,_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
                            tag: 'img',
                            className: 'gallery__image',
                            // parent: galleryWrapper,
                            id: currentGallery[i].id,
                            attribute: 'src',
                            attrValue: currentGallery[i].url,
                        });
                        galleryWrapper.appendChild(image);
                    }
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _a.sent();
                    console.log('The gallery wasnt created');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
var state = {
    _screen: 'albums',
    _id: null,
    set screen(type) {
        this._screen = type;
        body.innerHTML = '';
        if (type === 'gallery') {
            renderGallery();
            return;
        }
        renderAlbums();
    },
    get screen() {
        return this._screen;
    },
    set id(data) {
        this._id = data;
    },
    get id() {
        return this._id;
    },
};
var renderScreen = function (data) {
    // не помню, какой параметр отвечает за лимит, поэтому использую splice
    // для уменьшения количества
    data.splice(8, data.length - 8);
    var wrapper = document.createDocumentFragment();
    data.forEach(function (element) {
        var renderedElement = document.createElement('li');
        renderedElement.innerHTML = element.title;
        renderedElement.id = element.id;
        renderedElement.addEventListener('click', function () {
            state.id = element.id;
            state.screen = 'gallery';
        });
        wrapper.appendChild(renderedElement);
    });
    body.appendChild(wrapper);
};
renderAlbums();
(0,_createBtn__WEBPACK_IMPORTED_MODULE_1__["default"])();
/*
---------------- АЛГОРИТМ РАБОТЫ ------------------------------------
1. Страница загружается, происходит запуск функции createAlbums из свойства объекта state.albumsView. На сервер отправляется запрос на получение альбомов. Албомы получаются. Создаются элементы альбомов и им присваиваются нужные им данные. На каждый альбом навешивается обработчик клика.
2. Пользователь кликает на альбом, происходит запуск функции createGallery из свойства объекта state.galleryView. На сервер отправляется запрос на получение фото. Создается кнопка  с обработчиком клика для возврата окна просмтора альбомов.Создаются фото и присваиваются значения.
3. Пользователь кликает на кнопку return, происходит запуск функции createAlbums из свойства объекта state.albumsView.
*/



/***/ }),

/***/ "./src/setThumbnailSource.ts":
/*!***********************************!*\
  !*** ./src/setThumbnailSource.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setThumbnailSource": () => (/* binding */ setThumbnailSource),
/* harmony export */   "photosUrl": () => (/* binding */ photosUrl)
/* harmony export */ });
/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData */ "./src/fetchData.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var photosUrl = 'https://jsonplaceholder.typicode.com/photos/';
function setThumbnailSource(albumId) {
    return __awaiter(this, void 0, void 0, function () {
        var photosArr, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0,_fetchData__WEBPACK_IMPORTED_MODULE_0__["default"])(photosUrl)];
                case 1:
                    photosArr = _a.sent();
                    result = photosArr.find(function (image) { return image.albumId === albumId + 1; });
                    if (result !== undefined) {
                        return [2 /*return*/, result.thumbnailUrl];
                    }
                    return [2 /*return*/, ''];
            }
        });
    });
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2Ysc0RBQVMsRUFBRSxDQUFDO0FBRVo7Ozs7O0VBS0U7QUFFeUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeklQO0FBRXBDLElBQU0sU0FBUyxHQUFXLDhDQUE4QyxDQUFDO0FBQ3pFLFNBQWUsa0JBQWtCLENBQUMsT0FBZTs7Ozs7d0JBQzNCLHFCQUFNLHNEQUFTLENBQUMsU0FBUyxDQUFDOztvQkFBdEMsU0FBUyxHQUFHLFNBQTBCO29CQUN0QyxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FDekIsVUFBQyxLQUFVLElBQUssWUFBSyxDQUFDLE9BQU8sS0FBSyxPQUFPLEdBQUcsQ0FBQyxFQUE3QixDQUE2QixDQUNoRCxDQUFDO29CQUNGLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTt3QkFDdEIsc0JBQU8sTUFBTSxDQUFDLFlBQVksRUFBQztxQkFDOUI7b0JBQ0Qsc0JBQU8sRUFBRSxFQUFDOzs7O0NBQ2I7QUFFc0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdWxsLWpzLXN0YWNrLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZnVsbC1qcy1zdGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZnVsbC1qcy1zdGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Z1bGwtanMtc3RhY2svLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL2Z1bGwtanMtc3RhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZnVsbC1qcy1zdGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZnVsbC1qcy1zdGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9mdWxsLWpzLXN0YWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Z1bGwtanMtc3RhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9mdWxsLWpzLXN0YWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZnVsbC1qcy1zdGFjay8uL3NyYy9jcmVhdGVCdG4udHMiLCJ3ZWJwYWNrOi8vZnVsbC1qcy1zdGFjay8uL3NyYy9jcmVhdGVFbGVtZW50LnRzIiwid2VicGFjazovL2Z1bGwtanMtc3RhY2svLi9zcmMvZmV0Y2hEYXRhLnRzIiwid2VicGFjazovL2Z1bGwtanMtc3RhY2svLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnVsbC1qcy1zdGFjay8uL3NyYy9zZXRUaHVtYm5haWxTb3VyY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5hbGJ1bSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODE4MTgxO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxzQkFIUztBQUViOztBQUlBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQURKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRib2R5LWNvbG9yOiAjZmZmO1xcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9keS1jb2xvcjtcXG59XFxuXFxuLmFsYnVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOSAxMjkgMTI5KTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xuaW1wb3J0IHtyZW5kZXJBbGJ1bXN9IGZyb20gJy4vaW5kZXgnO1xuXG5jb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtd3JhcHBlcicpO1xuZnVuY3Rpb24gY3JlYXRlQnRuKCkge1xuICAgIGNvbnN0IHJldHVybkJ0biA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgICBjbGFzc05hbWU6ICdnYWxsZXJ5X19idG4tYmFjaycsXG4gICAgICAgIHZhbHVlOiAncmV0dXJuJyxcbiAgICB9KTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHJldHVybkJ0bik7XG4gICAgcmV0dXJuQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgcmV0dXJuQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB3cmFwcGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZW5kZXJBbGJ1bXMoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0dXJuQnRuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVCdG47XG4iLCJpbnRlcmZhY2UgQ3JlYXRlRWxlbWVudFByb3BzIHtcbiAgICB0YWc6IHN0cmluZztcbiAgICBjbGFzc05hbWU6IHN0cmluZztcbiAgICBpZD86IHN0cmluZztcbiAgICB2YWx1ZT86IHN0cmluZztcbiAgICBhdHRyaWJ1dGU/OiBzdHJpbmc7XG4gICAgYXR0clZhbHVlPzogYW55O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHByb3BzOiBDcmVhdGVFbGVtZW50UHJvcHMpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChwcm9wcy50YWcpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChwcm9wcy5jbGFzc05hbWUpO1xuICAgIGlmIChwcm9wcy52YWx1ZSkge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHByb3BzLnZhbHVlO1xuICAgIH1cbiAgICBpZiAocHJvcHMuaWQpIHtcbiAgICAgICAgZWxlbWVudC5pZCA9IHByb3BzLmlkO1xuICAgIH1cbiAgICBpZiAocHJvcHMuYXR0cmlidXRlICYmIHByb3BzLmF0dHJWYWx1ZSkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShwcm9wcy5hdHRyaWJ1dGUsIHByb3BzLmF0dHJWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50O1xuIiwiYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKHVybDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZ2V0RGF0YSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3Igd2hpbGUgZmV0Y2hpbmcgRGF0YScsIGVycik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hEYXRhO1xuIiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IGNyZWF0ZUJ0biBmcm9tICcuL2NyZWF0ZUJ0bic7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xuaW1wb3J0IGZldGNoRGF0YSBmcm9tICcuL2ZldGNoRGF0YSc7XG5pbXBvcnQge3NldFRodW1ibmFpbFNvdXJjZX0gZnJvbSAnLi9zZXRUaHVtYm5haWxTb3VyY2UnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5jb25zdCBhbGJ1bXNVcmw6IHN0cmluZyA9ICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vYWxidW1zLyc7XG5jb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtd3JhcHBlcicpO1xuXG5jb25zdCBkZWZhdWx0QWxidW1zTnVtYmVyT25QYWdlOiBudW1iZXIgPSA0O1xuYXN5bmMgZnVuY3Rpb24gcmVuZGVyQWxidW1zKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFsYnVtc0FyciA9IGF3YWl0IGZldGNoRGF0YShhbGJ1bXNVcmwpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVmYXVsdEFsYnVtc051bWJlck9uUGFnZTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBhbGJ1bSA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnYWxidW0nLFxuICAgICAgICAgICAgICAgIGlkOiAoaSArIDEpLnRvU3RyaW5nKCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYWxidW0pO1xuICAgICAgICAgICAgY29uc3QgaGVhZGluZyA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIHRhZzogJ2gzJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdhbGJ1bV9faGVhZGluZycsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGFsYnVtc0FycltpXS50aXRsZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYWxidW0uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgICAgICAgICBhbGJ1bS5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgdGFnOiAncCcsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnYWxidW1fX0lEJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogaS50b1N0cmluZygpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhbGJ1bS5hcHBlbmRDaGlsZChpZCk7XG4gICAgICAgICAgICBjb25zdCB0aHVtYm5haWwgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICB0YWc6ICdpbWcnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2FsYnVtX19maXJzdC1pbWFnZScsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlOiAnc3JjJyxcbiAgICAgICAgICAgICAgICBhdHRyVmFsdWU6IGF3YWl0IHNldFRodW1ibmFpbFNvdXJjZShpKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYWxidW0uYXBwZW5kQ2hpbGQodGh1bWJuYWlsKTtcbiAgICAgICAgICAgIC8vIGFsYnVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyU2NyZWVuKCdnYWxsZXJ5JykpO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3InLCBlcnIpO1xuICAgIH1cbn1cblxuY29uc3QgY2xpY2tlZEVsZW1lbnRJZDogc3RyaW5nID0gJyc7XG5jb25zdCBwaG90b3NVcmw6IHN0cmluZyA9ICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcGhvdG9zLyc7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckdhbGxlcnkoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gY2xpY2tlZEVsZW1lbnRJZCA9IChldnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5pZDtcbiAgICAgICAgd3JhcHBlci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY3JlYXRlQnRuKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5X19idG4tYmFjaycpO1xuICAgICAgICBjb25zdCBnYWxsZXJ5V3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2dhbGxlcnlfX1dyYXBwZXInLFxuICAgICAgICB9KTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChnYWxsZXJ5V3JhcHBlcik7XG4gICAgICAgIGNvbnN0IHBob3Rvc0FyciA9IGF3YWl0IGZldGNoRGF0YShwaG90b3NVcmwpO1xuICAgICAgICBjb25zdCBjdXJyZW50R2FsbGVyeSA9IHBob3Rvc0Fyci5maWx0ZXIoXG4gICAgICAgICAgICAoaW1hZ2U6IGFueSkgPT4gaW1hZ2UuYWxidW1JZC50b1N0cmluZygpID09PSBjbGlja2VkRWxlbWVudElkXG4gICAgICAgICk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50R2FsbGVyeS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICB0YWc6ICdpbWcnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2dhbGxlcnlfX2ltYWdlJyxcbiAgICAgICAgICAgICAgICAvLyBwYXJlbnQ6IGdhbGxlcnlXcmFwcGVyLFxuICAgICAgICAgICAgICAgIGlkOiBjdXJyZW50R2FsbGVyeVtpXS5pZCxcblxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTogJ3NyYycsXG4gICAgICAgICAgICAgICAgYXR0clZhbHVlOiBjdXJyZW50R2FsbGVyeVtpXS51cmwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGdhbGxlcnlXcmFwcGVyLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnVGhlIGdhbGxlcnkgd2FzbnQgY3JlYXRlZCcpO1xuICAgIH1cbn1cblxuY29uc3Qgc3RhdGUgPSB7XG4gICAgX3NjcmVlbjogJ2FsYnVtcycsXG4gICAgX2lkOiBudWxsIGFzIGFueSxcbiAgICBzZXQgc2NyZWVuKHR5cGUpIHtcbiAgICAgICAgdGhpcy5fc2NyZWVuID0gdHlwZTtcbiAgICAgICAgYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgaWYgKHR5cGUgPT09ICdnYWxsZXJ5Jykge1xuICAgICAgICAgICAgcmVuZGVyR2FsbGVyeSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlbmRlckFsYnVtcygpO1xuICAgIH0sXG4gICAgZ2V0IHNjcmVlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NjcmVlbjtcbiAgICB9LFxuICAgIHNldCBpZChkYXRhKSB7XG4gICAgICAgIHRoaXMuX2lkID0gZGF0YTtcbiAgICB9LFxuICAgIGdldCBpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH0sXG59O1xuXG5jb25zdCByZW5kZXJTY3JlZW4gPSAoZGF0YTogYW55KSA9PiB7XG4gICAgLy8g0L3QtSDQv9C+0LzQvdGOLCDQutCw0LrQvtC5INC/0LDRgNCw0LzQtdGC0YAg0L7RgtCy0LXRh9Cw0LXRgiDQt9CwINC70LjQvNC40YIsINC/0L7RjdGC0L7QvNGDINC40YHQv9C+0LvRjNC30YPRjiBzcGxpY2VcbiAgICAvLyDQtNC70Y8g0YPQvNC10L3RjNGI0LXQvdC40Y8g0LrQvtC70LjRh9C10YHRgtCy0LBcbiAgICBkYXRhLnNwbGljZSg4LCBkYXRhLmxlbmd0aCAtIDgpO1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgZGF0YS5mb3JFYWNoKChlbGVtZW50OiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgcmVuZGVyZWRFbGVtZW50LmlubmVySFRNTCA9IGVsZW1lbnQudGl0bGU7XG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5pZCA9IGVsZW1lbnQuaWQ7XG4gICAgICAgIHJlbmRlcmVkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHN0YXRlLmlkID0gZWxlbWVudC5pZDtcbiAgICAgICAgICAgIHN0YXRlLnNjcmVlbiA9ICdnYWxsZXJ5JztcbiAgICAgICAgfSk7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocmVuZGVyZWRFbGVtZW50KTtcbiAgICB9KTtcbiAgICBib2R5LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xufTtcblxucmVuZGVyQWxidW1zKCk7XG5jcmVhdGVCdG4oKTtcblxuLypcbi0tLS0tLS0tLS0tLS0tLS0g0JDQm9CT0J7QoNCY0KLQnCDQoNCQ0JHQntCi0KsgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4xLiDQodGC0YDQsNC90LjRhtCwINC30LDQs9GA0YPQttCw0LXRgtGB0Y8sINC/0YDQvtC40YHRhdC+0LTQuNGCINC30LDQv9GD0YHQuiDRhNGD0L3QutGG0LjQuCBjcmVhdGVBbGJ1bXMg0LjQtyDRgdCy0L7QudGB0YLQstCwINC+0LHRitC10LrRgtCwIHN0YXRlLmFsYnVtc1ZpZXcuINCd0LAg0YHQtdGA0LLQtdGAINC+0YLQv9GA0LDQstC70Y/QtdGC0YHRjyDQt9Cw0L/RgNC+0YEg0L3QsCDQv9C+0LvRg9GH0LXQvdC40LUg0LDQu9GM0LHQvtC80L7Qsi4g0JDQu9Cx0L7QvNGLINC/0L7Qu9GD0YfQsNGO0YLRgdGPLiDQodC+0LfQtNCw0Y7RgtGB0Y8g0Y3Qu9C10LzQtdC90YLRiyDQsNC70YzQsdC+0LzQvtCyINC4INC40Lwg0L/RgNC40YHQstCw0LjQstCw0Y7RgtGB0Y8g0L3Rg9C20L3Ri9C1INC40Lwg0LTQsNC90L3Ri9C1LiDQndCwINC60LDQttC00YvQuSDQsNC70YzQsdC+0Lwg0L3QsNCy0LXRiNC40LLQsNC10YLRgdGPINC+0LHRgNCw0LHQvtGC0YfQuNC6INC60LvQuNC60LAuXG4yLiDQn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0LrQu9C40LrQsNC10YIg0L3QsCDQsNC70YzQsdC+0LwsINC/0YDQvtC40YHRhdC+0LTQuNGCINC30LDQv9GD0YHQuiDRhNGD0L3QutGG0LjQuCBjcmVhdGVHYWxsZXJ5INC40Lcg0YHQstC+0LnRgdGC0LLQsCDQvtCx0YrQtdC60YLQsCBzdGF0ZS5nYWxsZXJ5Vmlldy4g0J3QsCDRgdC10YDQstC10YAg0L7RgtC/0YDQsNCy0LvRj9C10YLRgdGPINC30LDQv9GA0L7RgSDQvdCwINC/0L7Qu9GD0YfQtdC90LjQtSDRhNC+0YLQvi4g0KHQvtC30LTQsNC10YLRgdGPINC60L3QvtC/0LrQsCAg0YEg0L7QsdGA0LDQsdC+0YLRh9C40LrQvtC8INC60LvQuNC60LAg0LTQu9GPINCy0L7Qt9Cy0YDQsNGC0LAg0L7QutC90LAg0L/RgNC+0YHQvNGC0L7RgNCwINCw0LvRjNCx0L7QvNC+0LIu0KHQvtC30LTQsNGO0YLRgdGPINGE0L7RgtC+INC4INC/0YDQuNGB0LLQsNC40LLQsNGO0YLRgdGPINC30L3QsNGH0LXQvdC40Y8uXG4zLiDQn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0LrQu9C40LrQsNC10YIg0L3QsCDQutC90L7Qv9C60YMgcmV0dXJuLCDQv9GA0L7QuNGB0YXQvtC00LjRgiDQt9Cw0L/Rg9GB0Log0YTRg9C90LrRhtC40LggY3JlYXRlQWxidW1zINC40Lcg0YHQstC+0LnRgdGC0LLQsCDQvtCx0YrQtdC60YLQsCBzdGF0ZS5hbGJ1bXNWaWV3LlxuKi9cblxuZXhwb3J0IHtyZW5kZXJBbGJ1bXMsIHJlbmRlclNjcmVlbiwgc3RhdGV9O1xuIiwiaW1wb3J0IGZldGNoRGF0YSBmcm9tICcuL2ZldGNoRGF0YSc7XG5cbmNvbnN0IHBob3Rvc1VybDogc3RyaW5nID0gJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9waG90b3MvJztcbmFzeW5jIGZ1bmN0aW9uIHNldFRodW1ibmFpbFNvdXJjZShhbGJ1bUlkOiBudW1iZXIpIHtcbiAgICBjb25zdCBwaG90b3NBcnIgPSBhd2FpdCBmZXRjaERhdGEocGhvdG9zVXJsKTtcbiAgICBjb25zdCByZXN1bHQgPSBwaG90b3NBcnIuZmluZChcbiAgICAgICAgKGltYWdlOiBhbnkpID0+IGltYWdlLmFsYnVtSWQgPT09IGFsYnVtSWQgKyAxXG4gICAgKTtcbiAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC50aHVtYm5haWxVcmw7XG4gICAgfVxuICAgIHJldHVybiAnJztcbn1cblxuZXhwb3J0IHtzZXRUaHVtYm5haWxTb3VyY2UsIHBob3Rvc1VybH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=