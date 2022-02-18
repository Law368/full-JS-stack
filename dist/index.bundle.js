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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"Verdana\", sans-serif;\n  background-color: #fff;\n}\n\n.content-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 1844px;\n  margin: 0 auto;\n  background-color: white;\n}\n\n.albumPage__info {\n  text-align: center;\n}\n\n.albumPage__heading {\n  margin-top: 20px;\n  margin-bottom: 30px;\n  font-size: 37px;\n}\n\n.albumPage__description {\n  margin-bottom: 56px;\n  color: #797878;\n  font-weight: 600;\n  font-size: 20px;\n}\n\n.albumPage__wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 30px;\n}\n\n.album {\n  display: flex;\n  flex-direction: column;\n  width: 390px;\n  height: 335px;\n  margin: 0 23px;\n  margin-bottom: 83px;\n  background-color: white;\n  border-radius: 10px;\n}\n\n.album__first-image {\n  height: 292px;\n  margin-bottom: 15px;\n  border-radius: 10px;\n}\n\n.album__info {\n  display: flex;\n  justify-content: space-between;\n  padding-right: 5px;\n  padding-left: 5px;\n}\n\n.album__ID {\n  width: 25px;\n  height: 25px;\n  font-weight: 700;\n  text-align: center;\n  border: solid 2px;\n  border-radius: 50%;\n}\n\n.albumPage__load-button,\n.gallery__btn-back {\n  width: 140px;\n  height: 50px;\n  margin-bottom: 30px;\n  color: black;\n  font-weight: bold;\n  font-size: 17px;\n  font-family: Verdana;\n  background: white;\n  border-color: black;\n  border-width: 1px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n.albumPage__load-button:hover,\n.gallery__btn-back:hover {\n  background: #c7c7c7;\n  cursor: pointer;\n}\n\n.gallery__info {\n  display: flex;\n  justify-content: center;\n}\n\n.gallery__heading {\n  margin-top: 37px;\n  margin-bottom: 92.5px;\n  font-size: 64px;\n  text-transform: uppercase;\n}\n\n.gallery__Wrapper {\n  width: 100%;\n  padding-right: 87.5px;\n  padding-left: 87.5px;\n}\n\n.gallery__image-container {\n  display: inline-block;\n  width: 417px;\n  padding: 12.5px;\n}\n\n.gallery__image {\n  width: 100%;\n  height: 100%;\n}\n.gallery__image--selected {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n  max-width: 100%;\n  max-height: 100%;\n  transform: translate(-50%, -50%);\n}\n\n.background {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  display: none;\n  width: 100%;\n  height: 100%;\n  padding-top: 100px;\n  overflow: auto;\n  background-color: black;\n}\n\n.close-modal {\n  position: absolute;\n  top: 10px;\n  right: 25px;\n  color: white;\n  font-weight: bold;\n  font-size: 35px;\n}\n\n.close-modal:hover,\n.close-modal:focus {\n  color: #999;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.image-next,\n.image-previous {\n  position: absolute;\n  top: 50%;\n  width: auto;\n  margin-top: -50px;\n  padding: 16px;\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n  border-radius: 0 3px 3px 0;\n  cursor: pointer;\n  transition: 0.6s ease;\n  user-select: none;\n  user-select: none;\n}\n\n/* Position the \"next button\" to the right */\n.image-next {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n}\n\n/* On hover, add a black background color with a little bit see-through */\n.image-previous:hover,\n.image-next:hover {\n  background-color: rgba(0, 0, 0, 0.8);\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAEA;EACI,sBAAA;EACA,SAAA;EACA,UAAA;AADJ;;AAIA;EACI,kCAAA;EACA,sBAVS;AASb;;AAIA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,iBAAA;EACA,cAAA;EACA,uBAAA;AADJ;;AAIA;EACI,kBAAA;AADJ;;AAIA;EACI,gBAAA;EACA,mBAAA;EACA,eAAA;AADJ;;AAIA;EACI,mBAAA;EACA,cAAA;EACA,gBAAA;EACA,eAAA;AADJ;;AAIA;EACI,aAAA;EACA,eAAA;EACA,kBAAA;AADJ;;AAIA;EACI,aAAA;EACA,sBAAA;EACA,YAAA;EACA,aAAA;EACA,cAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;AADJ;;AAIA;EACI,aAAA;EACA,mBAAA;EACA,mBAAA;AADJ;;AAIA;EACI,aAAA;EACA,8BAAA;EACA,kBAAA;EACA,iBAAA;AADJ;;AAIA;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;AADJ;;AAIA;;EAEI,YAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,oBAAA;EACA,iBAAA;EACA,mBAAA;EACA,iBAAA;EACA,4BAAA;EACA,6BAAA;EACA,gCAAA;EACA,+BAAA;AADJ;AAGI;;EACI,mBAAA;EACA,eAAA;AAAR;;AAIA;EACI,aAAA;EACA,uBAAA;AADJ;;AAIA;EACI,gBAAA;EACA,qBAAA;EACA,eAAA;EACA,yBAAA;AADJ;;AAIA;EACI,WAAA;EACA,qBAAA;EACA,oBAAA;AADJ;;AAIA;EACI,qBAAA;EACA,YAAA;EACA,eAAA;AADJ;;AAIA;EACI,WAAA;EACA,YAAA;AADJ;AAGI;EACI,kBAAA;EACA,QAAA;EACA,SAAA;EACA,UAAA;EACA,eAAA;EACA,gBAAA;EACA,gCAAA;AADR;;AAKA;EACI,cAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;AAFJ;;AAKA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,UAAA;EACA,aAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,cAAA;EACA,uBAAA;AAFJ;;AAKA;EACI,kBAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;AAFJ;;AAKA;;EAEI,WAAA;EACA,qBAAA;EACA,eAAA;AAFJ;;AAKA;;EAEI,kBAAA;EACA,QAAA;EACA,WAAA;EACA,iBAAA;EACA,aAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,0BAAA;EACA,eAAA;EACA,qBAAA;EACA,iBAAA;EACA,iBAAA;AAFJ;;AAKA,4CAAA;AACA;EACI,QAAA;EACA,0BAAA;AAFJ;;AAKA,yEAAA;AACA;;EAEI,oCAAA;AAFJ","sourcesContent":["$body-color: #fff;\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: 'Verdana', sans-serif;\n    background-color: $body-color;\n}\n\n.content-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    max-width: 1844px;\n    margin: 0 auto;\n    background-color: rgb(255 255 255);\n}\n\n.albumPage__info {\n    text-align: center;\n}\n\n.albumPage__heading {\n    margin-top: 20px;\n    margin-bottom: 30px;\n    font-size: 37px;\n}\n\n.albumPage__description {\n    margin-bottom: 56px;\n    color: rgb(121 120 120);\n    font-weight: 600;\n    font-size: 20px;\n}\n\n.albumPage__wrapper {\n    display: flex;\n    flex-wrap: wrap;\n    padding-left: 30px;\n}\n\n.album {\n    display: flex;\n    flex-direction: column;\n    width: 390px;\n    height: 335px;\n    margin: 0 23px;\n    margin-bottom: 83px;\n    background-color: rgb(255 255 255);\n    border-radius: 10px;\n}\n\n.album__first-image {\n    height: 292px;\n    margin-bottom: 15px;\n    border-radius: 10px;\n}\n\n.album__info {\n    display: flex;\n    justify-content: space-between;\n    padding-right: 5px;\n    padding-left: 5px;\n}\n\n.album__ID {\n    width: 25px;\n    height: 25px;\n    font-weight: 700;\n    text-align: center;\n    border: solid 2px;\n    border-radius: 50%;\n}\n\n.albumPage__load-button,\n.gallery__btn-back {\n    width: 140px;\n    height: 50px;\n    margin-bottom: 30px;\n    color: rgb(0 0 0 / 100%);\n    font-weight: bold;\n    font-size: 17px;\n    font-family: Verdana;\n    background: rgb(255 255 255 / 100%);\n    border-color: rgb(0 0 0 / 100%);\n    border-width: 1px;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\n    border-bottom-left-radius: 10px;\n\n    &:hover {\n        background: rgb(199 199 199 / 100%);\n        cursor: pointer;\n    }\n}\n\n.gallery__info {\n    display: flex;\n    justify-content: center;\n}\n\n.gallery__heading {\n    margin-top: 37px;\n    margin-bottom: 92.5px;\n    font-size: 64px;\n    text-transform: uppercase;\n}\n\n.gallery__Wrapper {\n    width: 100%;\n    padding-right: 87.5px;\n    padding-left: 87.5px;\n}\n\n.gallery__image-container {\n    display: inline-block;\n    width: 417px;\n    padding: 12.5px;\n}\n\n.gallery__image {\n    width: 100%;\n    height: 100%;\n\n    &--selected {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        z-index: 2;\n        max-width: 100%;\n        max-height: 100%;\n        transform: translate(-50%, -50%);\n    }\n}\n\n.background {\n    display: block;\n    width: 100%;\n    height: 100%;\n    background-color: #000;\n}\n\n.modal {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    display: none;\n    width: 100%;\n    height: 100%;\n    padding-top: 100px;\n    overflow: auto;\n    background-color: black;\n}\n\n.close-modal {\n    position: absolute;\n    top: 10px;\n    right: 25px;\n    color: white;\n    font-weight: bold;\n    font-size: 35px;\n}\n\n.close-modal:hover,\n.close-modal:focus {\n    color: #999;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.image-next,\n.image-previous {\n    position: absolute;\n    top: 50%;\n    width: auto;\n    margin-top: -50px;\n    padding: 16px;\n    color: white;\n    font-weight: bold;\n    font-size: 20px;\n    border-radius: 0 3px 3px 0;\n    cursor: pointer;\n    transition: 0.6s ease;\n    user-select: none;\n    user-select: none;\n}\n\n/* Position the \"next button\" to the right */\n.image-next {\n    right: 0;\n    border-radius: 3px 0 0 3px;\n}\n\n/* On hover, add a black background color with a little bit see-through */\n.image-previous:hover,\n.image-next:hover {\n    background-color: rgb(0 0 0 / 80%);\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _modules_renderGallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderGallery */ "./src/modules/renderGallery.ts");
/* harmony import */ var _modules_renderAlbums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/renderAlbums */ "./src/modules/renderAlbums.ts");
/* harmony import */ var _modules_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/enums */ "./src/modules/enums.ts");
/* harmony import */ var _modules_fetchAlbumsInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/fetchAlbumsInfo */ "./src/modules/fetchAlbumsInfo.ts");
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





var screenType = localStorage.getItem('screenType');
function renderPage() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (screenType === _modules_enums__WEBPACK_IMPORTED_MODULE_3__.ScreenType.albums) {
                (0,_modules_renderAlbums__WEBPACK_IMPORTED_MODULE_2__.renderAlbums)();
            }
            else if (screenType === _modules_enums__WEBPACK_IMPORTED_MODULE_3__.ScreenType.gallery) {
                (0,_modules_renderGallery__WEBPACK_IMPORTED_MODULE_1__.renderGallery)();
            }
            return [2 /*return*/];
        });
    });
}
(0,_modules_fetchAlbumsInfo__WEBPACK_IMPORTED_MODULE_4__.fetchAlbumsInfo)();
renderPage();


/***/ }),

/***/ "./src/modules/createBtn.ts":
/*!**********************************!*\
  !*** ./src/modules/createBtn.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBtn": () => (/* binding */ createBtn)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/modules/createElement.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/modules/state.ts");


var wrapper = document.querySelector('.content-wrapper');
function createBtn() {
    var returnBtn = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'button',
        className: 'gallery__btn-back',
        value: 'return',
    });
    wrapper.appendChild(returnBtn);
    returnBtn.addEventListener('click', function () {
        wrapper.innerHTML = '';
        (0,_state__WEBPACK_IMPORTED_MODULE_1__.setStateValue)('screen', 'albums');
    });
    return returnBtn;
}


/***/ }),

/***/ "./src/modules/createElement.ts":
/*!**************************************!*\
  !*** ./src/modules/createElement.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement)
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



/***/ }),

/***/ "./src/modules/createLoadMoreBtn.ts":
/*!******************************************!*\
  !*** ./src/modules/createLoadMoreBtn.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLoadMoreBtn": () => (/* binding */ createLoadMoreBtn)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/modules/createElement.ts");
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

var wrapper = document.querySelector('.content-wrapper');
var defaultAlbumsAmount = 8;
function createLoadMoreBtn(clickHandler) {
    return __awaiter(this, void 0, void 0, function () {
        var loadMoreBtn;
        return __generator(this, function (_a) {
            loadMoreBtn = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)({
                tag: 'button',
                className: 'albumPage__load-button',
                value: 'Load more',
            });
            loadMoreBtn.addEventListener('click', clickHandler);
            wrapper.appendChild(loadMoreBtn);
            return [2 /*return*/, loadMoreBtn];
        });
    });
}


/***/ }),

/***/ "./src/modules/enums.ts":
/*!******************************!*\
  !*** ./src/modules/enums.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScreenType": () => (/* binding */ ScreenType),
/* harmony export */   "GalleryMode": () => (/* binding */ GalleryMode)
/* harmony export */ });
var ScreenType;
(function (ScreenType) {
    ScreenType["albums"] = "albums";
    ScreenType["gallery"] = "gallery";
})(ScreenType || (ScreenType = {}));
var GalleryMode;
(function (GalleryMode) {
    GalleryMode["thumbnails"] = "thumbnails";
    GalleryMode["fullscreen"] = "fullscreen";
})(GalleryMode || (GalleryMode = {}));



/***/ }),

/***/ "./src/modules/fetchAlbumsInfo.ts":
/*!****************************************!*\
  !*** ./src/modules/fetchAlbumsInfo.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchAlbumsInfo": () => (/* binding */ fetchAlbumsInfo)
/* harmony export */ });
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ "./src/modules/getData.ts");
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

var albumsUrl = 'https://jsonplaceholder.typicode.com/albums/';
function fetchAlbumsInfo() {
    return __awaiter(this, void 0, void 0, function () {
        var albumsArr, albumsToString;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getData)(albumsUrl)];
                case 1:
                    albumsArr = _a.sent();
                    albumsToString = JSON.stringify(albumsArr);
                    localStorage.setItem('albumsInfo', albumsToString);
                    return [2 /*return*/];
            }
        });
    });
}



/***/ }),

/***/ "./src/modules/getData.ts":
/*!********************************!*\
  !*** ./src/modules/getData.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": () => (/* binding */ getData)
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
var getData = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    var data, json;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(url)];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, data.json()];
            case 2:
                json = _a.sent();
                return [2 /*return*/, json];
        }
    });
}); };


/***/ }),

/***/ "./src/modules/onLoadMore.ts":
/*!***********************************!*\
  !*** ./src/modules/onLoadMore.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onLoadMore": () => (/* binding */ onLoadMore)
/* harmony export */ });
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ "./src/modules/getData.ts");
/* harmony import */ var _renderAlbumElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderAlbumElements */ "./src/modules/renderAlbumElements.ts");
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


var pageCounter = 1;
var defaultAlbumsAmount = JSON.parse(localStorage.getItem('albumsInfo')).slice(0, 8);
function onLoadMore() {
    return __awaiter(this, void 0, void 0, function () {
        var albumsWrapper, newAlbums;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(defaultAlbumsAmount);
                    albumsWrapper = document.querySelector('.albumPage__wrapper');
                    return [4 /*yield*/, (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getData)("https://jsonplaceholder.typicode.com/albums/?_start=".concat(defaultAlbumsAmount.length * pageCounter + 1, "&_end=").concat(defaultAlbumsAmount.length * pageCounter +
                            defaultAlbumsAmount.length +
                            1))];
                case 1:
                    newAlbums = _a.sent();
                    (0,_renderAlbumElements__WEBPACK_IMPORTED_MODULE_1__.renderAlbumElements)(newAlbums, albumsWrapper);
                    pageCounter++;
                    return [2 /*return*/];
            }
        });
    });
}



/***/ }),

/***/ "./src/modules/renderAlbumElements.ts":
/*!********************************************!*\
  !*** ./src/modules/renderAlbumElements.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAlbumElements": () => (/* binding */ renderAlbumElements)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/modules/createElement.ts");
/* harmony import */ var _setThumbnailSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setThumbnailSource */ "./src/modules/setThumbnailSource.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/modules/state.ts");
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



function renderAlbumElements(array, albumsWrapper) {
    return __awaiter(this, void 0, void 0, function () {
        var _loop_1, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _loop_1 = function (i) {
                        var album, thumbnail, _b, albumInfo, heading, id;
                        var _c;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0:
                                    album = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)({
                                        tag: 'div',
                                        className: 'album',
                                        id: array[i].id.toString(),
                                    });
                                    albumsWrapper.appendChild(album);
                                    album.addEventListener('click', function () {
                                        console.log("ID \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u0430\u043B\u044C\u0431\u043E\u043C\u0430 \u0438\u0437 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 ".concat(array[i].id));
                                        (0,_state__WEBPACK_IMPORTED_MODULE_2__.setStateValue)('id', array[i].id);
                                        (0,_state__WEBPACK_IMPORTED_MODULE_2__.setStateValue)('screen', 'gallery');
                                        localStorage.setItem('albumID', album.id);
                                    });
                                    _b = _createElement__WEBPACK_IMPORTED_MODULE_0__.createElement;
                                    _c = {
                                        tag: 'img',
                                        className: 'album__first-image',
                                        attribute: 'src'
                                    };
                                    return [4 /*yield*/, (0,_setThumbnailSource__WEBPACK_IMPORTED_MODULE_1__.setThumbnailSource)(array[i].id)];
                                case 1:
                                    thumbnail = _b.apply(void 0, [(_c.attrValue = _d.sent(),
                                            _c)]);
                                    album.appendChild(thumbnail);
                                    albumInfo = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)({
                                        tag: 'div',
                                        className: 'album__info',
                                    });
                                    album.appendChild(albumInfo);
                                    heading = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)({
                                        tag: 'h3',
                                        className: 'album__heading',
                                        value: array[i].title,
                                    });
                                    albumInfo.appendChild(heading);
                                    id = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)({
                                        tag: 'p',
                                        className: 'album__ID',
                                        value: array[i].id.toString(),
                                    });
                                    albumInfo.appendChild(id);
                                    return [2 /*return*/];
                            }
                        });
                    };
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < array.length)) return [3 /*break*/, 4];
                    return [5 /*yield**/, _loop_1(i)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}



/***/ }),

/***/ "./src/modules/renderAlbums.ts":
/*!*************************************!*\
  !*** ./src/modules/renderAlbums.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAlbums": () => (/* binding */ renderAlbums),
/* harmony export */   "chosenAlbum": () => (/* binding */ chosenAlbum),
/* harmony export */   "ScreenType": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_3__.ScreenType)
/* harmony export */ });
/* harmony import */ var _onLoadMore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onLoadMore */ "./src/modules/onLoadMore.ts");
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElement */ "./src/modules/createElement.ts");
/* harmony import */ var _createLoadMoreBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createLoadMoreBtn */ "./src/modules/createLoadMoreBtn.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enums */ "./src/modules/enums.ts");
/* harmony import */ var _renderAlbumElements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderAlbumElements */ "./src/modules/renderAlbumElements.ts");
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





var wrapper = document.querySelector('.content-wrapper');
var defaultAlbumsAmount = JSON.parse(localStorage.getItem('albumsInfo')).slice(0, 8);
var chosenAlbum = '';
function renderAlbums() {
    return __awaiter(this, void 0, void 0, function () {
        var pageInfo, headingBig, pageDescription, albumsWrapper;
        return __generator(this, function (_a) {
            try {
                pageInfo = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)({
                    tag: 'div',
                    className: 'albumPage__info',
                });
                wrapper.appendChild(pageInfo);
                headingBig = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)({
                    tag: 'h1',
                    className: 'albumPage__heading',
                    value: 'Image Gallery',
                });
                pageInfo.appendChild(headingBig);
                pageDescription = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)({
                    tag: 'p',
                    className: 'albumPage__description',
                    value: "".concat(defaultAlbumsAmount.length, " albums filled with various photos for you!"),
                });
                pageInfo.appendChild(pageDescription);
                albumsWrapper = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)({
                    tag: 'div',
                    className: 'albumPage__wrapper',
                });
                wrapper.appendChild(albumsWrapper);
                (0,_renderAlbumElements__WEBPACK_IMPORTED_MODULE_4__.renderAlbumElements)(defaultAlbumsAmount, albumsWrapper);
                (0,_createLoadMoreBtn__WEBPACK_IMPORTED_MODULE_2__.createLoadMoreBtn)(_onLoadMore__WEBPACK_IMPORTED_MODULE_0__.onLoadMore);
                localStorage.setItem('screenType', _enums__WEBPACK_IMPORTED_MODULE_3__.ScreenType.albums);
            }
            catch (err) {
                console.log('There was an error', err);
            }
            return [2 /*return*/];
        });
    });
}



/***/ }),

/***/ "./src/modules/renderFullImage.ts":
/*!****************************************!*\
  !*** ./src/modules/renderFullImage.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderFullImage": () => (/* binding */ renderFullImage)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/modules/createElement.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ "./src/modules/enums.ts");


function renderFullImage(imageURL) {
    var modal = document.querySelector('.modal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    var fullImage = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'img',
        className: 'gallery__image--selected',
        attribute: 'src',
        attrValue: "".concat(imageURL),
    });
    var modalContent = document.querySelector('.modal-content');
    modalContent.appendChild(fullImage);
    localStorage.setItem('screenType', _enums__WEBPACK_IMPORTED_MODULE_1__.ScreenType.gallery);
    localStorage.setItem('galleryMode', _enums__WEBPACK_IMPORTED_MODULE_1__.GalleryMode.fullscreen);
}



/***/ }),

/***/ "./src/modules/renderGallery.ts":
/*!**************************************!*\
  !*** ./src/modules/renderGallery.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderGallery": () => (/* binding */ renderGallery),
/* harmony export */   "imageIndex": () => (/* binding */ imageIndex)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/modules/createElement.ts");
/* harmony import */ var _createBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createBtn */ "./src/modules/createBtn.ts");
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getData */ "./src/modules/getData.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enums */ "./src/modules/enums.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state */ "./src/modules/state.ts");
/* harmony import */ var _renderFullImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderFullImage */ "./src/modules/renderFullImage.ts");
/* harmony import */ var _renderModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderModal */ "./src/modules/renderModal.ts");
/* harmony import */ var _renderImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./renderImage */ "./src/modules/renderImage.ts");
/* harmony import */ var _useCorrectIDfromArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useCorrectIDfromArray */ "./src/modules/useCorrectIDfromArray.ts");
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









var wrapper = document.querySelector('.content-wrapper');
var galleryMode = localStorage.getItem('galleryMode');
var imageIndex = 0;
function renderGallery() {
    return __awaiter(this, void 0, void 0, function () {
        var idFromState, photosFromState, albumId, photos, _a, galleryWrapper, restoredAlbums, galleryInfo, galleryHeading, photosArr;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    idFromState = (0,_state__WEBPACK_IMPORTED_MODULE_4__.getStateValue)('id');
                    photosFromState = (0,_state__WEBPACK_IMPORTED_MODULE_4__.getStateValue)('photos');
                    albumId = idFromState
                        ? idFromState
                        : Number(localStorage.getItem('albumID'));
                    if (!(Object.keys(photosFromState).length !== 0)) return [3 /*break*/, 1];
                    photos = photosFromState;
                    return [3 /*break*/, 3];
                case 1:
                    _b = {};
                    _a = albumId;
                    return [4 /*yield*/, (0,_getData__WEBPACK_IMPORTED_MODULE_2__.getData)("https://jsonplaceholder.typicode.com/albums/".concat(albumId, "/photos"))];
                case 2:
                    photos = (_b[_a] = _c.sent(),
                        _b);
                    _c.label = 3;
                case 3:
                    try {
                        wrapper.innerHTML = '';
                        galleryWrapper = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)({
                            tag: 'div',
                            className: 'gallery__Wrapper',
                        });
                        wrapper.appendChild(galleryWrapper);
                        restoredAlbums = JSON.parse(localStorage.getItem('albumsInfo'));
                        galleryInfo = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)({
                            tag: 'div',
                            className: 'gallery__info',
                        });
                        galleryWrapper.appendChild(galleryInfo);
                        galleryHeading = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)({
                            tag: 'h1',
                            className: 'gallery__heading',
                            value: "".concat(restoredAlbums[(0,_useCorrectIDfromArray__WEBPACK_IMPORTED_MODULE_8__.useCorrectIDfromArray)(albumId)].title),
                        });
                        galleryInfo.appendChild(galleryHeading);
                        photosArr = photos[albumId];
                        (0,_renderModal__WEBPACK_IMPORTED_MODULE_6__.renderModalWindow)(photos, albumId);
                        (0,_renderImage__WEBPACK_IMPORTED_MODULE_7__.renderImage)(photosArr, imageIndex, galleryWrapper);
                        (0,_createBtn__WEBPACK_IMPORTED_MODULE_1__.createBtn)();
                        localStorage.setItem('screenType', _enums__WEBPACK_IMPORTED_MODULE_3__.ScreenType.gallery);
                        localStorage.setItem('galleryMode', _enums__WEBPACK_IMPORTED_MODULE_3__.GalleryMode.thumbnails);
                        if (galleryMode === _enums__WEBPACK_IMPORTED_MODULE_3__.GalleryMode.fullscreen) {
                            (0,_renderFullImage__WEBPACK_IMPORTED_MODULE_5__.renderFullImage)(localStorage.getItem('fullImageUrl'));
                        }
                    }
                    catch (err) {
                        console.log('The gallery wasnt created', err);
                    }
                    return [2 /*return*/];
            }
        });
    });
}



/***/ }),

/***/ "./src/modules/renderImage.ts":
/*!************************************!*\
  !*** ./src/modules/renderImage.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderImage": () => (/* binding */ renderImage)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/modules/createElement.ts");
/* harmony import */ var _renderFullImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderFullImage */ "./src/modules/renderFullImage.ts");


function renderImage(array, imageIndex, wrapper) {
    var _loop_1 = function (i) {
        var imageContainer = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)({
            tag: 'div',
            className: 'gallery__image-container',
        });
        wrapper.appendChild(imageContainer);
        var image = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)({
            tag: 'img',
            className: 'gallery__image',
            id: String(array[i].id),
            attribute: 'src',
            attrValue: array[i].url,
        });
        image.dataset.order = i.toString();
        imageContainer.appendChild(image);
        image.addEventListener('click', function () {
            imageIndex = Number(image.dataset.order);
            localStorage.setItem('fullImageUrl', image.getAttribute('src'));
            (0,_renderFullImage__WEBPACK_IMPORTED_MODULE_1__.renderFullImage)(localStorage.getItem('fullImageUrl'));
        });
    };
    for (var i = 0; i < array.length; i += 1) {
        _loop_1(i);
    }
}



/***/ }),

/***/ "./src/modules/renderModal.ts":
/*!************************************!*\
  !*** ./src/modules/renderModal.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "imageIndex": () => (/* binding */ imageIndex),
/* harmony export */   "renderModalWindow": () => (/* binding */ renderModalWindow)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/modules/createElement.ts");
/* harmony import */ var _shiftNextImageSrc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shiftNextImageSrc */ "./src/modules/shiftNextImageSrc.ts");
/* harmony import */ var _shiftPrevImageSrc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shiftPrevImageSrc */ "./src/modules/shiftPrevImageSrc.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enums */ "./src/modules/enums.ts");




var fullImage;
var imageIndex = 0;
function renderModalWindow(photos, albumId) {
    var modal = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'div',
        className: 'modal',
    });
    var closeModal = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'span',
        className: 'close-modal',
        value: 'X',
    });
    modal.appendChild(closeModal);
    var modalContent = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'div',
        className: 'modal-content',
    });
    modal.appendChild(modalContent);
    var nextImage = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'a',
        className: 'image-next',
        value: 'NEXT',
    });
    modal.appendChild(nextImage);
    nextImage.addEventListener('click', function () {
        if (Number(imageIndex) >= photos[albumId].length - 1) {
            imageIndex = 0;
        }
        console.log(photos, albumId, imageIndex);
        fullImage = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)({
            tag: 'img',
            className: 'gallery__image--selected',
            attribute: 'src',
            attrValue: "".concat(photos[albumId][Number((0,_shiftNextImageSrc__WEBPACK_IMPORTED_MODULE_1__.shiftNextImgSrc)(imageIndex))].url),
        });
        modalContent.appendChild(fullImage);
        imageIndex = imageIndex + 1;
    });
    var previousImage = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        tag: 'a',
        className: 'image-previous',
        value: 'PREV',
    });
    modal.appendChild(previousImage);
    previousImage.addEventListener('click', function () {
        if (Number(imageIndex) <= 0) {
            imageIndex = photos[albumId].length;
        }
        fullImage = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)({
            tag: 'img',
            className: 'gallery__image--selected',
            attribute: 'src',
            attrValue: "".concat(photos[albumId][Number((0,_shiftPrevImageSrc__WEBPACK_IMPORTED_MODULE_2__.shiftPrevImgSrc)(imageIndex))].url),
        });
        modalContent.appendChild(fullImage);
        imageIndex = imageIndex - 1;
    });
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        localStorage.setItem('galleryMode', _enums__WEBPACK_IMPORTED_MODULE_3__.GalleryMode.thumbnails);
    });
    document.body.appendChild(modal);
}



/***/ }),

/***/ "./src/modules/setThumbnailSource.ts":
/*!*******************************************!*\
  !*** ./src/modules/setThumbnailSource.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setThumbnailSource": () => (/* binding */ setThumbnailSource)
/* harmony export */ });
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ "./src/modules/getData.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/modules/state.ts");
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


function setThumbnailSource(albumId) {
    return __awaiter(this, void 0, void 0, function () {
        var photosArr, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getData)("https://jsonplaceholder.typicode.com/albums/".concat(albumId, "/photos"))];
                case 1:
                    photosArr = _a.sent();
                    result = photosArr[0].thumbnailUrl;
                    (0,_state__WEBPACK_IMPORTED_MODULE_1__.setStateValue)('photos', { id: albumId, photos: photosArr });
                    if (result !== undefined) {
                        return [2 /*return*/, result];
                    }
                    return [2 /*return*/, ''];
            }
        });
    });
}


/***/ }),

/***/ "./src/modules/shiftNextImageSrc.ts":
/*!******************************************!*\
  !*** ./src/modules/shiftNextImageSrc.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shiftNextImgSrc": () => (/* binding */ shiftNextImgSrc)
/* harmony export */ });
//Поставить imgIndex как параметр
function shiftNextImgSrc(imageIndex) {
    return imageIndex + 1;
}



/***/ }),

/***/ "./src/modules/shiftPrevImageSrc.ts":
/*!******************************************!*\
  !*** ./src/modules/shiftPrevImageSrc.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shiftPrevImgSrc": () => (/* binding */ shiftPrevImgSrc)
/* harmony export */ });
function shiftPrevImgSrc(imageIndex) {
    return imageIndex - 1;
}



/***/ }),

/***/ "./src/modules/state.ts":
/*!******************************!*\
  !*** ./src/modules/state.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStateValue": () => (/* binding */ getStateValue),
/* harmony export */   "setStateValue": () => (/* binding */ setStateValue)
/* harmony export */ });
/* harmony import */ var _renderAlbums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderAlbums */ "./src/modules/renderAlbums.ts");
/* harmony import */ var _renderGallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGallery */ "./src/modules/renderGallery.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var state = {
    _screen: 'albums',
    _id: null,
    _photos: {},
    set photos(albums) {
        var _a;
        this._photos = __assign(__assign({}, this._photos), (_a = {}, _a[albums.id] = albums.photos, _a));
    },
    get photos() {
        return this._photos;
    },
    set screen(type) {
        this._screen = type;
        // body.innerHTML = '';
        if (type === 'gallery') {
            (0,_renderGallery__WEBPACK_IMPORTED_MODULE_1__.renderGallery)();
            return;
        }
        (0,_renderAlbums__WEBPACK_IMPORTED_MODULE_0__.renderAlbums)();
    },
    get screen() {
        return this._screen;
    },
    set id(data) {
        this._id = Number(data);
    },
    get id() {
        return this._id;
    },
};
var getStateValue = function (prop) { return state[prop]; };
var setStateValue = function (prop, value) {
    state[prop] = value;
};


/***/ }),

/***/ "./src/modules/useCorrectIDfromArray.ts":
/*!**********************************************!*\
  !*** ./src/modules/useCorrectIDfromArray.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCorrectIDfromArray": () => (/* binding */ useCorrectIDfromArray)
/* harmony export */ });
function useCorrectIDfromArray(albumID) {
    return albumID - 1;
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9mdWxsLWpzLXN0YWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9mdWxsLWpzLXN0YWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZnVsbC1qcy1zdGFjay8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vZnVsbC1qcy1zdGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9mdWxsLWpzLXN0YWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9mdWxsLWpzLXN0YWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Z1bGwtanMtc3RhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZnVsbC1qcy1zdGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Z1bGwtanMtc3RhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9mdWxsLWpzLXN0YWNrLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2Z1bGwtanMtc3RhY2svLi9zcmMvbW9kdWxlcy9jcmVhdGVCdG4udHMiLCJ3ZWJwYWNrOi8vZnVsbC1qcy1zdGFjay8uL3NyYy9tb2R1bGVzL2NyZWF0ZUVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vZnVsbC1qcy1zdGFjay8uL3NyYy9tb2R1bGVzL2NyZWF0ZUxvYWRNb3JlQnRuLnRzIiwid2VicGFjazovL2Z1bGwtanMtc3RhY2svLi9zcmMvbW9kdWxlcy9lbnVtcy50cyIsIndlYnBhY2s6Ly9mdWxsLWpzLXN0YWNrLy4vc3JjL21vZHVsZXMvZmV0Y2hBbGJ1bXNJbmZvLnRzIiwid2VicGFjazovL2Z1bGwtanMtc3RhY2svLi9zcmMvbW9kdWxlcy9nZXREYXRhLnRzIiwid2VicGFjazovL2Z1bGwtanMtc3RhY2svLi9zcmMvbW9kdWxlcy9vbkxvYWRNb3JlLnRzIiwid2VicGFjazovL2Z1bGwtanMtc3RhY2svLi9zcmMvbW9kdWxlcy9yZW5kZXJBbGJ1bUVsZW1lbnRzLnRzIiwid2VicGFjazovL2Z1bGwtanMtc3RhY2svLi9zcmMvbW9kdWxlcy9yZW5kZXJBbGJ1bXMudHMiLCJ3ZWJwYWNrOi8vZnVsbC1qcy1zdGFjay8uL3NyYy9tb2R1bGVzL3JlbmRlckZ1bGxJbWFnZS50cyIsIndlYnBhY2s6Ly9mdWxsLWpzLXN0YWNrLy4vc3JjL21vZHVsZXMvcmVuZGVyR2FsbGVyeS50cyIsIndlYnBhY2s6Ly9mdWxsLWpzLXN0YWNrLy4vc3JjL21vZHVsZXMvcmVuZGVySW1hZ2UudHMiLCJ3ZWJwYWNrOi8vZnVsbC1qcy1zdGFjay8uL3NyYy9tb2R1bGVzL3JlbmRlck1vZGFsLnRzIiwid2VicGFjazovL2Z1bGwtanMtc3RhY2svLi9zcmMvbW9kdWxlcy9zZXRUaHVtYm5haWxTb3VyY2UudHMiLCJ3ZWJwYWNrOi8vZnVsbC1qcy1zdGFjay8uL3NyYy9tb2R1bGVzL3NoaWZ0TmV4dEltYWdlU3JjLnRzIiwid2VicGFjazovL2Z1bGwtanMtc3RhY2svLi9zcmMvbW9kdWxlcy9zaGlmdFByZXZJbWFnZVNyYy50cyIsIndlYnBhY2s6Ly9mdWxsLWpzLXN0YWNrLy4vc3JjL21vZHVsZXMvc3RhdGUudHMiLCJ3ZWJwYWNrOi8vZnVsbC1qcy1zdGFjay8uL3NyYy9tb2R1bGVzL3VzZUNvcnJlY3RJRGZyb21BcnJheS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJWZXJkYW5hXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5jb250ZW50LXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiAxODQ0cHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYWxidW1QYWdlX19pbmZvIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFsYnVtUGFnZV9faGVhZGluZyB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIGZvbnQtc2l6ZTogMzdweDtcXG59XFxuXFxuLmFsYnVtUGFnZV9fZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogNTZweDtcXG4gIGNvbG9yOiAjNzk3ODc4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmFsYnVtUGFnZV9fd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbn1cXG5cXG4uYWxidW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMzkwcHg7XFxuICBoZWlnaHQ6IDMzNXB4O1xcbiAgbWFyZ2luOiAwIDIzcHg7XFxuICBtYXJnaW4tYm90dG9tOiA4M3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uYWxidW1fX2ZpcnN0LWltYWdlIHtcXG4gIGhlaWdodDogMjkycHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmFsYnVtX19pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuXFxuLmFsYnVtX19JRCB7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IHNvbGlkIDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmFsYnVtUGFnZV9fbG9hZC1idXR0b24sXFxuLmdhbGxlcnlfX2J0bi1iYWNrIHtcXG4gIHdpZHRoOiAxNDBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxufVxcbi5hbGJ1bVBhZ2VfX2xvYWQtYnV0dG9uOmhvdmVyLFxcbi5nYWxsZXJ5X19idG4tYmFjazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjYzdjN2M3O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZ2FsbGVyeV9faW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5nYWxsZXJ5X19oZWFkaW5nIHtcXG4gIG1hcmdpbi10b3A6IDM3cHg7XFxuICBtYXJnaW4tYm90dG9tOiA5Mi41cHg7XFxuICBmb250LXNpemU6IDY0cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4uZ2FsbGVyeV9fV3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctcmlnaHQ6IDg3LjVweDtcXG4gIHBhZGRpbmctbGVmdDogODcuNXB4O1xcbn1cXG5cXG4uZ2FsbGVyeV9faW1hZ2UtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA0MTdweDtcXG4gIHBhZGRpbmc6IDEyLjVweDtcXG59XFxuXFxuLmdhbGxlcnlfX2ltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uZ2FsbGVyeV9faW1hZ2UtLXNlbGVjdGVkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgei1pbmRleDogMjtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLmJhY2tncm91bmQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxufVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5jbG9zZS1tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwcHg7XFxuICByaWdodDogMjVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbn1cXG5cXG4uY2xvc2UtbW9kYWw6aG92ZXIsXFxuLmNsb3NlLW1vZGFsOmZvY3VzIHtcXG4gIGNvbG9yOiAjOTk5O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaW1hZ2UtbmV4dCxcXG4uaW1hZ2UtcHJldmlvdXMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbi10b3A6IC01MHB4O1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjZzIGVhc2U7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4vKiBQb3NpdGlvbiB0aGUgXFxcIm5leHQgYnV0dG9uXFxcIiB0byB0aGUgcmlnaHQgKi9cXG4uaW1hZ2UtbmV4dCB7XFxuICByaWdodDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xcbn1cXG5cXG4vKiBPbiBob3ZlciwgYWRkIGEgYmxhY2sgYmFja2dyb3VuZCBjb2xvciB3aXRoIGEgbGl0dGxlIGJpdCBzZWUtdGhyb3VnaCAqL1xcbi5pbWFnZS1wcmV2aW91czpob3ZlcixcXG4uaW1hZ2UtbmV4dDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0ksc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQURKOztBQUlBO0VBQ0ksa0NBQUE7RUFDQSxzQkFWUztBQVNiOztBQUlBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTs7RUFFSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QUFESjtBQUdJOztFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQUFSOztBQUlBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQURKOztBQUlBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFESjtBQUdJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQURSOztBQUtBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFGSjs7QUFLQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQUZKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFGSjs7QUFLQTs7RUFFSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBRko7O0FBS0E7O0VBRUksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFLQSw0Q0FBQTtBQUNBO0VBQ0ksUUFBQTtFQUNBLDBCQUFBO0FBRko7O0FBS0EseUVBQUE7QUFDQTs7RUFFSSxvQ0FBQTtBQUZKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRib2R5LWNvbG9yOiAjZmZmO1xcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ1ZlcmRhbmEnLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9keS1jb2xvcjtcXG59XFxuXFxuLmNvbnRlbnQtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogMTg0NHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyNTUgMjU1KTtcXG59XFxuXFxuLmFsYnVtUGFnZV9faW5mbyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFsYnVtUGFnZV9faGVhZGluZyB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzdweDtcXG59XFxuXFxuLmFsYnVtUGFnZV9fZGVzY3JpcHRpb24ge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1NnB4O1xcbiAgICBjb2xvcjogcmdiKDEyMSAxMjAgMTIwKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uYWxidW1QYWdlX193cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxufVxcblxcbi5hbGJ1bSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAzOTBweDtcXG4gICAgaGVpZ2h0OiAzMzVweDtcXG4gICAgbWFyZ2luOiAwIDIzcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDgzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMjU1IDI1NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5hbGJ1bV9fZmlyc3QtaW1hZ2Uge1xcbiAgICBoZWlnaHQ6IDI5MnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uYWxidW1fX2luZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxufVxcblxcbi5hbGJ1bV9fSUQge1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogc29saWQgMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5hbGJ1bVBhZ2VfX2xvYWQtYnV0dG9uLFxcbi5nYWxsZXJ5X19idG4tYmFjayB7XFxuICAgIHdpZHRoOiAxNDBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBjb2xvcjogcmdiKDAgMCAwIC8gMTAwJSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1IDI1NSAyNTUgLyAxMDAlKTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMCAwIDAgLyAxMDAlKTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTk5IDE5OSAxOTkgLyAxMDAlKTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbn1cXG5cXG4uZ2FsbGVyeV9faW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZ2FsbGVyeV9faGVhZGluZyB7XFxuICAgIG1hcmdpbi10b3A6IDM3cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDkyLjVweDtcXG4gICAgZm9udC1zaXplOiA2NHB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4uZ2FsbGVyeV9fV3JhcHBlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA4Ny41cHg7XFxuICAgIHBhZGRpbmctbGVmdDogODcuNXB4O1xcbn1cXG5cXG4uZ2FsbGVyeV9faW1hZ2UtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNDE3cHg7XFxuICAgIHBhZGRpbmc6IDEyLjVweDtcXG59XFxuXFxuLmdhbGxlcnlfX2ltYWdlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgJi0tc2VsZWN0ZWQge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB9XFxufVxcblxcbi5iYWNrZ3JvdW5kIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmNsb3NlLW1vZGFsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIHJpZ2h0OiAyNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxufVxcblxcbi5jbG9zZS1tb2RhbDpob3ZlcixcXG4uY2xvc2UtbW9kYWw6Zm9jdXMge1xcbiAgICBjb2xvcjogIzk5OTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pbWFnZS1uZXh0LFxcbi5pbWFnZS1wcmV2aW91cyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjZzIGVhc2U7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLyogUG9zaXRpb24gdGhlIFxcXCJuZXh0IGJ1dHRvblxcXCIgdG8gdGhlIHJpZ2h0ICovXFxuLmltYWdlLW5leHQge1xcbiAgICByaWdodDogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XFxufVxcblxcbi8qIE9uIGhvdmVyLCBhZGQgYSBibGFjayBiYWNrZ3JvdW5kIGNvbG9yIHdpdGggYSBsaXR0bGUgYml0IHNlZS10aHJvdWdoICovXFxuLmltYWdlLXByZXZpb3VzOmhvdmVyLFxcbi5pbWFnZS1uZXh0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gODAlKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xyXG5pbXBvcnQge3JlbmRlckdhbGxlcnl9IGZyb20gJy4vbW9kdWxlcy9yZW5kZXJHYWxsZXJ5JztcclxuaW1wb3J0IHtyZW5kZXJBbGJ1bXN9IGZyb20gJy4vbW9kdWxlcy9yZW5kZXJBbGJ1bXMnO1xyXG5pbXBvcnQge1NjcmVlblR5cGV9IGZyb20gJy4vbW9kdWxlcy9lbnVtcyc7XHJcbmltcG9ydCB7ZmV0Y2hBbGJ1bXNJbmZvfSBmcm9tICcuL21vZHVsZXMvZmV0Y2hBbGJ1bXNJbmZvJztcclxuXHJcbmNvbnN0IHNjcmVlblR5cGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2NyZWVuVHlwZScpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyUGFnZSgpIHtcclxuICAgIGlmIChzY3JlZW5UeXBlID09PSBTY3JlZW5UeXBlLmFsYnVtcykge1xyXG4gICAgICAgIHJlbmRlckFsYnVtcygpO1xyXG4gICAgfSBlbHNlIGlmIChzY3JlZW5UeXBlID09PSBTY3JlZW5UeXBlLmdhbGxlcnkpIHtcclxuICAgICAgICByZW5kZXJHYWxsZXJ5KCk7XHJcbiAgICB9XHJcbn1cclxuZmV0Y2hBbGJ1bXNJbmZvKCk7XHJcbnJlbmRlclBhZ2UoKTtcclxuIiwiaW1wb3J0IHtjcmVhdGVFbGVtZW50fSBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xyXG5pbXBvcnQge2dldFN0YXRlVmFsdWUsIHNldFN0YXRlVmFsdWV9IGZyb20gJy4vc3RhdGUnO1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXdyYXBwZXInKTtcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJ0bigpIHtcclxuICAgIGNvbnN0IHJldHVybkJ0biA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgICAgIHRhZzogJ2J1dHRvbicsXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnZ2FsbGVyeV9fYnRuLWJhY2snLFxyXG4gICAgICAgIHZhbHVlOiAncmV0dXJuJyxcclxuICAgIH0pO1xyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChyZXR1cm5CdG4pO1xyXG4gICAgcmV0dXJuQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgc2V0U3RhdGVWYWx1ZSgnc2NyZWVuJywgJ2FsYnVtcycpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmV0dXJuQnRuO1xyXG59XHJcbiIsImludGVyZmFjZSBDcmVhdGVFbGVtZW50UHJvcHMge1xyXG4gICAgdGFnOiBzdHJpbmc7XHJcbiAgICBjbGFzc05hbWU6IHN0cmluZztcclxuICAgIGlkPzogc3RyaW5nO1xyXG4gICAgdmFsdWU/OiBzdHJpbmc7XHJcbiAgICBhdHRyaWJ1dGU/OiBzdHJpbmc7XHJcbiAgICBhdHRyVmFsdWU/OiBhbnk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQocHJvcHM6IENyZWF0ZUVsZW1lbnRQcm9wcykge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQocHJvcHMudGFnKTtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChwcm9wcy5jbGFzc05hbWUpO1xyXG4gICAgaWYgKHByb3BzLnZhbHVlKSB7XHJcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBwcm9wcy52YWx1ZTtcclxuICAgIH1cclxuICAgIGlmIChwcm9wcy5pZCkge1xyXG4gICAgICAgIGVsZW1lbnQuaWQgPSBwcm9wcy5pZDtcclxuICAgIH1cclxuICAgIGlmIChwcm9wcy5hdHRyaWJ1dGUgJiYgcHJvcHMuYXR0clZhbHVlKSB7XHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcHMuYXR0cmlidXRlLCBwcm9wcy5hdHRyVmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7Y3JlYXRlRWxlbWVudH07XHJcbiIsImltcG9ydCB7Y3JlYXRlRWxlbWVudH0gZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC13cmFwcGVyJyk7XHJcbmNvbnN0IGRlZmF1bHRBbGJ1bXNBbW91bnQ6IG51bWJlciA9IDg7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVMb2FkTW9yZUJ0bihjbGlja0hhbmRsZXI6ICgpID0+IHZvaWQpIHtcclxuICAgIGNvbnN0IGxvYWRNb3JlQnRuID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICAgICAgdGFnOiAnYnV0dG9uJyxcclxuICAgICAgICBjbGFzc05hbWU6ICdhbGJ1bVBhZ2VfX2xvYWQtYnV0dG9uJyxcclxuICAgICAgICB2YWx1ZTogJ0xvYWQgbW9yZScsXHJcbiAgICB9KTtcclxuICAgIGxvYWRNb3JlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobG9hZE1vcmVCdG4pO1xyXG4gICAgcmV0dXJuIGxvYWRNb3JlQnRuO1xyXG59XHJcbiIsImVudW0gU2NyZWVuVHlwZSB7XHJcbiAgICBhbGJ1bXMgPSAnYWxidW1zJyxcclxuICAgIGdhbGxlcnkgPSAnZ2FsbGVyeScsXHJcbn1cclxuXHJcbmVudW0gR2FsbGVyeU1vZGUge1xyXG4gICAgdGh1bWJuYWlscyA9ICd0aHVtYm5haWxzJyxcclxuICAgIGZ1bGxzY3JlZW4gPSAnZnVsbHNjcmVlbicsXHJcbn1cclxuXHJcbmV4cG9ydCB7U2NyZWVuVHlwZSwgR2FsbGVyeU1vZGV9O1xyXG4iLCJpbXBvcnQge2dldERhdGF9IGZyb20gJy4vZ2V0RGF0YSc7XHJcbmNvbnN0IGFsYnVtc1VybCA9ICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vYWxidW1zLyc7XHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoQWxidW1zSW5mbygpIHtcclxuICAgIGNvbnN0IGFsYnVtc0FyciA9IGF3YWl0IGdldERhdGEoYWxidW1zVXJsKTtcclxuICAgIGNvbnN0IGFsYnVtc1RvU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoYWxidW1zQXJyKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGJ1bXNJbmZvJywgYWxidW1zVG9TdHJpbmcpO1xyXG59XHJcblxyXG5leHBvcnQge2ZldGNoQWxidW1zSW5mb307XHJcbiIsImV4cG9ydCBjb25zdCBnZXREYXRhID0gYXN5bmMgKHVybDogYW55KSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBkYXRhLmpzb24oKTtcclxuICAgIHJldHVybiBqc29uO1xyXG59O1xyXG4iLCJpbXBvcnQge2dldERhdGF9IGZyb20gJy4vZ2V0RGF0YSc7XHJcbmltcG9ydCB7cmVuZGVyQWxidW1FbGVtZW50c30gZnJvbSAnLi9yZW5kZXJBbGJ1bUVsZW1lbnRzJztcclxuXHJcbmxldCBwYWdlQ291bnRlciA9IDE7XHJcbmNvbnN0IGRlZmF1bHRBbGJ1bXNBbW91bnQ6IGFueSA9IEpTT04ucGFyc2UoXHJcbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxidW1zSW5mbycpXHJcbikuc2xpY2UoMCwgOCk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBvbkxvYWRNb3JlKCkge1xyXG4gICAgY29uc29sZS5sb2coZGVmYXVsdEFsYnVtc0Ftb3VudCk7XHJcbiAgICBjb25zdCBhbGJ1bXNXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsYnVtUGFnZV9fd3JhcHBlcicpO1xyXG4gICAgY29uc3QgbmV3QWxidW1zID0gYXdhaXQgZ2V0RGF0YShcclxuICAgICAgICBgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL2FsYnVtcy8/X3N0YXJ0PSR7XHJcbiAgICAgICAgICAgIGRlZmF1bHRBbGJ1bXNBbW91bnQubGVuZ3RoICogcGFnZUNvdW50ZXIgKyAxXHJcbiAgICAgICAgfSZfZW5kPSR7XHJcbiAgICAgICAgICAgIGRlZmF1bHRBbGJ1bXNBbW91bnQubGVuZ3RoICogcGFnZUNvdW50ZXIgK1xyXG4gICAgICAgICAgICBkZWZhdWx0QWxidW1zQW1vdW50Lmxlbmd0aCArXHJcbiAgICAgICAgICAgIDFcclxuICAgICAgICB9YFxyXG4gICAgKTtcclxuICAgIHJlbmRlckFsYnVtRWxlbWVudHMobmV3QWxidW1zLCBhbGJ1bXNXcmFwcGVyKTtcclxuICAgIHBhZ2VDb3VudGVyKys7XHJcbn1cclxuXHJcbmV4cG9ydCB7b25Mb2FkTW9yZX07XHJcbiIsImltcG9ydCB7Y3JlYXRlRWxlbWVudH0gZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcclxuaW1wb3J0IHtzZXRUaHVtYm5haWxTb3VyY2V9IGZyb20gJy4vc2V0VGh1bWJuYWlsU291cmNlJztcclxuaW1wb3J0IHtzZXRTdGF0ZVZhbHVlfSBmcm9tICcuL3N0YXRlJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckFsYnVtRWxlbWVudHMoYXJyYXk6IGFueSwgYWxidW1zV3JhcHBlcjogYW55KSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgYWxidW0gPSBjcmVhdGVFbGVtZW50KHtcclxuICAgICAgICAgICAgdGFnOiAnZGl2JyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnYWxidW0nLFxyXG4gICAgICAgICAgICBpZDogYXJyYXlbaV0uaWQudG9TdHJpbmcoKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBhbGJ1bXNXcmFwcGVyLmFwcGVuZENoaWxkKGFsYnVtKTtcclxuICAgICAgICBhbGJ1bS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYElEINGC0LXQutGD0YnQtdCz0L4g0LDQu9GM0LHQvtC80LAg0LjQtyDQvNCw0YHRgdC40LLQsCAke2FycmF5W2ldLmlkfWApO1xyXG4gICAgICAgICAgICBzZXRTdGF0ZVZhbHVlKCdpZCcsIGFycmF5W2ldLmlkKTtcclxuICAgICAgICAgICAgc2V0U3RhdGVWYWx1ZSgnc2NyZWVuJywgJ2dhbGxlcnknKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsYnVtSUQnLCBhbGJ1bS5pZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgdGh1bWJuYWlsID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICAgICAgICAgIHRhZzogJ2ltZycsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2FsYnVtX19maXJzdC1pbWFnZScsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTogJ3NyYycsXHJcbiAgICAgICAgICAgIGF0dHJWYWx1ZTogYXdhaXQgc2V0VGh1bWJuYWlsU291cmNlKGFycmF5W2ldLmlkKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBhbGJ1bS5hcHBlbmRDaGlsZCh0aHVtYm5haWwpO1xyXG4gICAgICAgIGNvbnN0IGFsYnVtSW5mbyA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdhbGJ1bV9faW5mbycsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYWxidW0uYXBwZW5kQ2hpbGQoYWxidW1JbmZvKTtcclxuICAgICAgICBjb25zdCBoZWFkaW5nID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICAgICAgICAgIHRhZzogJ2gzJyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnYWxidW1fX2hlYWRpbmcnLFxyXG4gICAgICAgICAgICB2YWx1ZTogYXJyYXlbaV0udGl0bGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYWxidW1JbmZvLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG4gICAgICAgIGNvbnN0IGlkID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICAgICAgICAgIHRhZzogJ3AnLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdhbGJ1bV9fSUQnLFxyXG4gICAgICAgICAgICB2YWx1ZTogYXJyYXlbaV0uaWQudG9TdHJpbmcoKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBhbGJ1bUluZm8uYXBwZW5kQ2hpbGQoaWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge3JlbmRlckFsYnVtRWxlbWVudHN9O1xyXG4iLCJpbXBvcnQge29uTG9hZE1vcmV9IGZyb20gJy4vb25Mb2FkTW9yZSc7XHJcbmltcG9ydCB7Y3JlYXRlRWxlbWVudH0gZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcclxuaW1wb3J0IHtjcmVhdGVMb2FkTW9yZUJ0bn0gZnJvbSAnLi9jcmVhdGVMb2FkTW9yZUJ0bic7XHJcbmltcG9ydCB7U2NyZWVuVHlwZX0gZnJvbSAnLi9lbnVtcyc7XHJcbmltcG9ydCB7cmVuZGVyQWxidW1FbGVtZW50c30gZnJvbSAnLi9yZW5kZXJBbGJ1bUVsZW1lbnRzJztcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC13cmFwcGVyJyk7XHJcbmNvbnN0IGRlZmF1bHRBbGJ1bXNBbW91bnQ6IGFueSA9IEpTT04ucGFyc2UoXHJcbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxidW1zSW5mbycpXHJcbikuc2xpY2UoMCwgOCk7XHJcbmxldCBjaG9zZW5BbGJ1bSA9ICcnO1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuZGVyQWxidW1zKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBwYWdlSW5mbyA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdhbGJ1bVBhZ2VfX2luZm8nLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocGFnZUluZm8pO1xyXG4gICAgICAgIGNvbnN0IGhlYWRpbmdCaWcgPSBjcmVhdGVFbGVtZW50KHtcclxuICAgICAgICAgICAgdGFnOiAnaDEnLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdhbGJ1bVBhZ2VfX2hlYWRpbmcnLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ0ltYWdlIEdhbGxlcnknLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHBhZ2VJbmZvLmFwcGVuZENoaWxkKGhlYWRpbmdCaWcpO1xyXG4gICAgICAgIGNvbnN0IHBhZ2VEZXNjcmlwdGlvbiA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgICAgICAgICB0YWc6ICdwJyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnYWxidW1QYWdlX19kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgIHZhbHVlOiBgJHtkZWZhdWx0QWxidW1zQW1vdW50Lmxlbmd0aH0gYWxidW1zIGZpbGxlZCB3aXRoIHZhcmlvdXMgcGhvdG9zIGZvciB5b3UhYCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBwYWdlSW5mby5hcHBlbmRDaGlsZChwYWdlRGVzY3JpcHRpb24pO1xyXG4gICAgICAgIGNvbnN0IGFsYnVtc1dyYXBwZXIgPSBjcmVhdGVFbGVtZW50KHtcclxuICAgICAgICAgICAgdGFnOiAnZGl2JyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnYWxidW1QYWdlX193cmFwcGVyJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGFsYnVtc1dyYXBwZXIpO1xyXG4gICAgICAgIHJlbmRlckFsYnVtRWxlbWVudHMoZGVmYXVsdEFsYnVtc0Ftb3VudCwgYWxidW1zV3JhcHBlcik7XHJcbiAgICAgICAgY3JlYXRlTG9hZE1vcmVCdG4ob25Mb2FkTW9yZSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NjcmVlblR5cGUnLCBTY3JlZW5UeXBlLmFsYnVtcyk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yJywgZXJyKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtjaG9zZW5BbGJ1bSwgU2NyZWVuVHlwZX07XHJcbiIsImltcG9ydCB7Y3JlYXRlRWxlbWVudH0gZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcclxuaW1wb3J0IHtTY3JlZW5UeXBlLCBHYWxsZXJ5TW9kZX0gZnJvbSAnLi9lbnVtcyc7XHJcbmZ1bmN0aW9uIHJlbmRlckZ1bGxJbWFnZShpbWFnZVVSTDogYW55KSB7XHJcbiAgICBjb25zdCBtb2RhbDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgY29uc3QgZnVsbEltYWdlID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICAgICAgdGFnOiAnaW1nJyxcclxuICAgICAgICBjbGFzc05hbWU6ICdnYWxsZXJ5X19pbWFnZS0tc2VsZWN0ZWQnLFxyXG4gICAgICAgIGF0dHJpYnV0ZTogJ3NyYycsXHJcbiAgICAgICAgYXR0clZhbHVlOiBgJHtpbWFnZVVSTH1gLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBtb2RhbENvbnRlbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRlbnQnKTtcclxuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChmdWxsSW1hZ2UpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NjcmVlblR5cGUnLCBTY3JlZW5UeXBlLmdhbGxlcnkpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dhbGxlcnlNb2RlJywgR2FsbGVyeU1vZGUuZnVsbHNjcmVlbik7XHJcbn1cclxuXHJcbmV4cG9ydCB7cmVuZGVyRnVsbEltYWdlfTtcclxuIiwiaW1wb3J0IHtjcmVhdGVFbGVtZW50fSBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xyXG5pbXBvcnQge2NyZWF0ZUJ0bn0gZnJvbSAnLi9jcmVhdGVCdG4nO1xyXG5pbXBvcnQge2dldERhdGF9IGZyb20gJy4vZ2V0RGF0YSc7XHJcbmltcG9ydCB7U2NyZWVuVHlwZSwgR2FsbGVyeU1vZGV9IGZyb20gJy4vZW51bXMnO1xyXG5pbXBvcnQge2dldFN0YXRlVmFsdWV9IGZyb20gJy4vc3RhdGUnO1xyXG5pbXBvcnQge1Bob3Rvc30gZnJvbSAnLi90eXBlcyc7XHJcbmltcG9ydCB7cmVuZGVyRnVsbEltYWdlfSBmcm9tICcuL3JlbmRlckZ1bGxJbWFnZSc7XHJcbmltcG9ydCB7cmVuZGVyTW9kYWxXaW5kb3d9IGZyb20gJy4vcmVuZGVyTW9kYWwnO1xyXG5pbXBvcnQge3JlbmRlckltYWdlfSBmcm9tICcuL3JlbmRlckltYWdlJztcclxuaW1wb3J0IHt1c2VDb3JyZWN0SURmcm9tQXJyYXl9IGZyb20gJy4vdXNlQ29ycmVjdElEZnJvbUFycmF5JztcclxuY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXdyYXBwZXInKTtcclxuY29uc3QgZ2FsbGVyeU1vZGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FsbGVyeU1vZGUnKTtcclxuXHJcbmxldCBpbWFnZUluZGV4ID0gMDtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW5kZXJHYWxsZXJ5KCkge1xyXG4gICAgY29uc3QgaWRGcm9tU3RhdGUgPSBnZXRTdGF0ZVZhbHVlKCdpZCcpO1xyXG4gICAgY29uc3QgcGhvdG9zRnJvbVN0YXRlID0gZ2V0U3RhdGVWYWx1ZSgncGhvdG9zJyk7XHJcblxyXG4gICAgY29uc3QgYWxidW1JZCA9IGlkRnJvbVN0YXRlXHJcbiAgICAgICAgPyBpZEZyb21TdGF0ZVxyXG4gICAgICAgIDogTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGJ1bUlEJykpO1xyXG4gICAgbGV0IHBob3RvczogUGhvdG9zO1xyXG5cclxuICAgIGlmIChPYmplY3Qua2V5cyhwaG90b3NGcm9tU3RhdGUpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIHBob3RvcyA9IHBob3Rvc0Zyb21TdGF0ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGhvdG9zID0ge1xyXG4gICAgICAgICAgICBbYWxidW1JZF06IGF3YWl0IGdldERhdGEoXHJcbiAgICAgICAgICAgICAgICBgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL2FsYnVtcy8ke2FsYnVtSWR9L3Bob3Rvc2BcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgd3JhcHBlci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBjb25zdCBnYWxsZXJ5V3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdnYWxsZXJ5X19XcmFwcGVyJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGdhbGxlcnlXcmFwcGVyKTtcclxuICAgICAgICBjb25zdCByZXN0b3JlZEFsYnVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsYnVtc0luZm8nKSk7XHJcbiAgICAgICAgY29uc3QgZ2FsbGVyeUluZm8gPSBjcmVhdGVFbGVtZW50KHtcclxuICAgICAgICAgICAgdGFnOiAnZGl2JyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnZ2FsbGVyeV9faW5mbycsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2FsbGVyeVdyYXBwZXIuYXBwZW5kQ2hpbGQoZ2FsbGVyeUluZm8pO1xyXG4gICAgICAgIGNvbnN0IGdhbGxlcnlIZWFkaW5nID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICAgICAgICAgIHRhZzogJ2gxJyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnZ2FsbGVyeV9faGVhZGluZycsXHJcbiAgICAgICAgICAgIHZhbHVlOiBgJHtyZXN0b3JlZEFsYnVtc1t1c2VDb3JyZWN0SURmcm9tQXJyYXkoYWxidW1JZCldLnRpdGxlfWAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2FsbGVyeUluZm8uYXBwZW5kQ2hpbGQoZ2FsbGVyeUhlYWRpbmcpO1xyXG4gICAgICAgIGNvbnN0IHBob3Rvc0FyciA9IHBob3Rvc1thbGJ1bUlkXTtcclxuICAgICAgICByZW5kZXJNb2RhbFdpbmRvdyhwaG90b3MsIGFsYnVtSWQpO1xyXG4gICAgICAgIHJlbmRlckltYWdlKHBob3Rvc0FyciwgaW1hZ2VJbmRleCwgZ2FsbGVyeVdyYXBwZXIpO1xyXG4gICAgICAgIGNyZWF0ZUJ0bigpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzY3JlZW5UeXBlJywgU2NyZWVuVHlwZS5nYWxsZXJ5KTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FsbGVyeU1vZGUnLCBHYWxsZXJ5TW9kZS50aHVtYm5haWxzKTtcclxuXHJcbiAgICAgICAgaWYgKGdhbGxlcnlNb2RlID09PSBHYWxsZXJ5TW9kZS5mdWxsc2NyZWVuKSB7XHJcbiAgICAgICAgICAgIHJlbmRlckZ1bGxJbWFnZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZnVsbEltYWdlVXJsJykpO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGUgZ2FsbGVyeSB3YXNudCBjcmVhdGVkJywgZXJyKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtpbWFnZUluZGV4fTtcclxuIiwiaW1wb3J0IHtjcmVhdGVFbGVtZW50fSBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xyXG5pbXBvcnQge3JlbmRlckZ1bGxJbWFnZX0gZnJvbSAnLi9yZW5kZXJGdWxsSW1hZ2UnO1xyXG5mdW5jdGlvbiByZW5kZXJJbWFnZShhcnJheTogYW55LCBpbWFnZUluZGV4OiBhbnksIHdyYXBwZXI6IGFueSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgIGNvbnN0IGltYWdlQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2dhbGxlcnlfX2ltYWdlLWNvbnRhaW5lcicsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lcik7XHJcbiAgICAgICAgbGV0IGltYWdlID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICAgICAgICAgIHRhZzogJ2ltZycsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2dhbGxlcnlfX2ltYWdlJyxcclxuICAgICAgICAgICAgaWQ6IFN0cmluZyhhcnJheVtpXS5pZCksXHJcblxyXG4gICAgICAgICAgICBhdHRyaWJ1dGU6ICdzcmMnLFxyXG4gICAgICAgICAgICBhdHRyVmFsdWU6IGFycmF5W2ldLnVybCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpbWFnZS5kYXRhc2V0Lm9yZGVyID0gaS50b1N0cmluZygpO1xyXG4gICAgICAgIGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcclxuXHJcbiAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGltYWdlSW5kZXggPSBOdW1iZXIoaW1hZ2UuZGF0YXNldC5vcmRlcik7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmdWxsSW1hZ2VVcmwnLCBpbWFnZS5nZXRBdHRyaWJ1dGUoJ3NyYycpKTtcclxuICAgICAgICAgICAgcmVuZGVyRnVsbEltYWdlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmdWxsSW1hZ2VVcmwnKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7cmVuZGVySW1hZ2V9O1xyXG4iLCJpbXBvcnQge2NyZWF0ZUVsZW1lbnR9IGZyb20gJy4vY3JlYXRlRWxlbWVudCc7XHJcbmltcG9ydCB7c2hpZnROZXh0SW1nU3JjfSBmcm9tICcuL3NoaWZ0TmV4dEltYWdlU3JjJztcclxuaW1wb3J0IHtzaGlmdFByZXZJbWdTcmN9IGZyb20gJy4vc2hpZnRQcmV2SW1hZ2VTcmMnO1xyXG5pbXBvcnQge0dhbGxlcnlNb2RlfSBmcm9tICcuL2VudW1zJztcclxuXHJcbmxldCBmdWxsSW1hZ2U7XHJcbmxldCBpbWFnZUluZGV4ID0gMDtcclxuZnVuY3Rpb24gcmVuZGVyTW9kYWxXaW5kb3cocGhvdG9zOiBhbnksIGFsYnVtSWQ6IGFueSkge1xyXG4gICAgY29uc3QgbW9kYWwgPSBjcmVhdGVFbGVtZW50KHtcclxuICAgICAgICB0YWc6ICdkaXYnLFxyXG4gICAgICAgIGNsYXNzTmFtZTogJ21vZGFsJyxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGNsb3NlTW9kYWwgPSBjcmVhdGVFbGVtZW50KHtcclxuICAgICAgICB0YWc6ICdzcGFuJyxcclxuICAgICAgICBjbGFzc05hbWU6ICdjbG9zZS1tb2RhbCcsXHJcbiAgICAgICAgdmFsdWU6ICdYJyxcclxuICAgIH0pO1xyXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoY2xvc2VNb2RhbCk7XHJcblxyXG4gICAgY29uc3QgbW9kYWxDb250ZW50ID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICAgICAgdGFnOiAnZGl2JyxcclxuICAgICAgICBjbGFzc05hbWU6ICdtb2RhbC1jb250ZW50JyxcclxuICAgIH0pO1xyXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcclxuXHJcbiAgICBjb25zdCBuZXh0SW1hZ2UgPSBjcmVhdGVFbGVtZW50KHtcclxuICAgICAgICB0YWc6ICdhJyxcclxuICAgICAgICBjbGFzc05hbWU6ICdpbWFnZS1uZXh0JyxcclxuICAgICAgICB2YWx1ZTogJ05FWFQnLFxyXG4gICAgfSk7XHJcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChuZXh0SW1hZ2UpO1xyXG4gICAgbmV4dEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChOdW1iZXIoaW1hZ2VJbmRleCkgPj0gcGhvdG9zW2FsYnVtSWRdLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgaW1hZ2VJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHBob3RvcywgYWxidW1JZCwgaW1hZ2VJbmRleCk7XHJcbiAgICAgICAgZnVsbEltYWdlID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICAgICAgICAgIHRhZzogJ2ltZycsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2dhbGxlcnlfX2ltYWdlLS1zZWxlY3RlZCcsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZTogJ3NyYycsXHJcbiAgICAgICAgICAgIGF0dHJWYWx1ZTogYCR7XHJcbiAgICAgICAgICAgICAgICBwaG90b3NbYWxidW1JZF1bTnVtYmVyKHNoaWZ0TmV4dEltZ1NyYyhpbWFnZUluZGV4KSldLnVybFxyXG4gICAgICAgICAgICB9YCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZnVsbEltYWdlKTtcclxuICAgICAgICBpbWFnZUluZGV4ID0gaW1hZ2VJbmRleCArIDE7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBwcmV2aW91c0ltYWdlID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICAgICAgdGFnOiAnYScsXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnaW1hZ2UtcHJldmlvdXMnLFxyXG4gICAgICAgIHZhbHVlOiAnUFJFVicsXHJcbiAgICB9KTtcclxuICAgIG1vZGFsLmFwcGVuZENoaWxkKHByZXZpb3VzSW1hZ2UpO1xyXG4gICAgcHJldmlvdXNJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoTnVtYmVyKGltYWdlSW5kZXgpIDw9IDApIHtcclxuICAgICAgICAgICAgaW1hZ2VJbmRleCA9IHBob3Rvc1thbGJ1bUlkXS5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bGxJbWFnZSA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgICAgICAgICB0YWc6ICdpbWcnLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdnYWxsZXJ5X19pbWFnZS0tc2VsZWN0ZWQnLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGU6ICdzcmMnLFxyXG4gICAgICAgICAgICBhdHRyVmFsdWU6IGAke1xyXG4gICAgICAgICAgICAgICAgcGhvdG9zW2FsYnVtSWRdW051bWJlcihzaGlmdFByZXZJbWdTcmMoaW1hZ2VJbmRleCkpXS51cmxcclxuICAgICAgICAgICAgfWAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGZ1bGxJbWFnZSk7XHJcbiAgICAgICAgaW1hZ2VJbmRleCA9IGltYWdlSW5kZXggLSAxO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dhbGxlcnlNb2RlJywgR2FsbGVyeU1vZGUudGh1bWJuYWlscyk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xyXG59XHJcblxyXG5leHBvcnQge2ltYWdlSW5kZXgsIHJlbmRlck1vZGFsV2luZG93fTtcclxuIiwiaW1wb3J0IHtnZXREYXRhfSBmcm9tICcuL2dldERhdGEnO1xyXG5pbXBvcnQge3NldFN0YXRlVmFsdWV9IGZyb20gJy4vc3RhdGUnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldFRodW1ibmFpbFNvdXJjZShhbGJ1bUlkOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHBob3Rvc0FyciA9IGF3YWl0IGdldERhdGEoXHJcbiAgICAgICAgYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9hbGJ1bXMvJHthbGJ1bUlkfS9waG90b3NgXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IHBob3Rvc0FyclswXS50aHVtYm5haWxVcmw7XHJcbiAgICBzZXRTdGF0ZVZhbHVlKCdwaG90b3MnLCB7aWQ6IGFsYnVtSWQsIHBob3RvczogcGhvdG9zQXJyfSk7XHJcbiAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG59XHJcbiIsImltcG9ydCB7aW1hZ2VJbmRleH0gZnJvbSAnLi9yZW5kZXJNb2RhbCc7XHJcbi8v0J/QvtGB0YLQsNCy0LjRgtGMIGltZ0luZGV4INC60LDQuiDQv9Cw0YDQsNC80LXRgtGAXHJcbmZ1bmN0aW9uIHNoaWZ0TmV4dEltZ1NyYyhpbWFnZUluZGV4OiBudW1iZXIpIHtcclxuICAgIHJldHVybiBpbWFnZUluZGV4ICsgMTtcclxufVxyXG5cclxuZXhwb3J0IHtzaGlmdE5leHRJbWdTcmN9O1xyXG4iLCJpbXBvcnQge2ltYWdlSW5kZXh9IGZyb20gJy4vcmVuZGVyTW9kYWwnO1xyXG5mdW5jdGlvbiBzaGlmdFByZXZJbWdTcmMoaW1hZ2VJbmRleDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gaW1hZ2VJbmRleCAtIDE7XHJcbn1cclxuZXhwb3J0IHtzaGlmdFByZXZJbWdTcmN9O1xyXG4iLCJpbXBvcnQge3JlbmRlckFsYnVtc30gZnJvbSAnLi9yZW5kZXJBbGJ1bXMnO1xyXG5pbXBvcnQge3JlbmRlckdhbGxlcnl9IGZyb20gJy4vcmVuZGVyR2FsbGVyeSc7XHJcblxyXG5jb25zdCBzdGF0ZToge1xyXG4gICAgX3NjcmVlbjogc3RyaW5nO1xyXG4gICAgc2NyZWVuOiBzdHJpbmc7XHJcbiAgICBpZDogYW55O1xyXG4gICAgX2lkOiBhbnk7XHJcbiAgICBfcGhvdG9zOiBhbnk7XHJcbiAgICBwaG90b3M6IGFueTtcclxufSA9IHtcclxuICAgIF9zY3JlZW46ICdhbGJ1bXMnLFxyXG4gICAgX2lkOiBudWxsLFxyXG4gICAgX3Bob3Rvczoge30sXHJcbiAgICBzZXQgcGhvdG9zKGFsYnVtcykge1xyXG4gICAgICAgIHRoaXMuX3Bob3RvcyA9IHsuLi50aGlzLl9waG90b3MsIFthbGJ1bXMuaWRdOiBhbGJ1bXMucGhvdG9zfTtcclxuICAgIH0sXHJcbiAgICBnZXQgcGhvdG9zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9waG90b3M7XHJcbiAgICB9LFxyXG4gICAgc2V0IHNjcmVlbih0eXBlKSB7XHJcbiAgICAgICAgdGhpcy5fc2NyZWVuID0gdHlwZTtcclxuICAgICAgICAvLyBib2R5LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGlmICh0eXBlID09PSAnZ2FsbGVyeScpIHtcclxuICAgICAgICAgICAgcmVuZGVyR2FsbGVyeSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlbmRlckFsYnVtcygpO1xyXG4gICAgfSxcclxuICAgIGdldCBzY3JlZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NjcmVlbjtcclxuICAgIH0sXHJcbiAgICBzZXQgaWQoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX2lkID0gTnVtYmVyKGRhdGEpO1xyXG4gICAgfSxcclxuICAgIGdldCBpZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGVWYWx1ZSA9IChwcm9wOiBrZXlvZiB0eXBlb2Ygc3RhdGUpID0+IHN0YXRlW3Byb3BdO1xyXG5leHBvcnQgY29uc3Qgc2V0U3RhdGVWYWx1ZSA9IChcclxuICAgIHByb3A6IGtleW9mIHR5cGVvZiBzdGF0ZSxcclxuICAgIHZhbHVlOiBzdHJpbmcgfCBhbnlcclxuKSA9PiB7XHJcbiAgICBzdGF0ZVtwcm9wXSA9IHZhbHVlO1xyXG59O1xyXG4iLCJmdW5jdGlvbiB1c2VDb3JyZWN0SURmcm9tQXJyYXkoYWxidW1JRDogYW55KSB7XHJcbiAgICByZXR1cm4gYWxidW1JRCAtIDE7XHJcbn1cclxuXHJcbmV4cG9ydCB7dXNlQ29ycmVjdElEZnJvbUFycmF5fTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9