'use strict';
(self['webpackChunkfull_js_stack'] =
    self['webpackChunkfull_js_stack'] || []).push([
    ['index'],
    {
        /***/ './node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss':
            /*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
            /***/ (module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js'
                    );
                /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
                    );
                /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js'
                    );
                /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
                    );
                // Imports

                var ___CSS_LOADER_EXPORT___ =
                    _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
                        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
                    );
                // Module
                ___CSS_LOADER_EXPORT___.push([
                    module.id,
                    '* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: "Verdana", sans-serif;\n  background-color: #fff;\n}\n\n.content-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 1844px;\n  margin: 0 auto;\n  background-color: white;\n}\n\n.albumPage__info {\n  text-align: center;\n}\n\n.albumPage__heading {\n  margin-top: 20px;\n  margin-bottom: 30px;\n  font-size: 37px;\n}\n\n.albumPage__description {\n  margin-bottom: 56px;\n  color: #797878;\n  font-weight: 600;\n  font-size: 20px;\n}\n\n.albumPage__wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 30px;\n}\n\n.album {\n  display: flex;\n  flex-direction: column;\n  width: 390px;\n  height: 335px;\n  margin: 0 23px;\n  margin-bottom: 83px;\n  background-color: white;\n  border-radius: 10px;\n}\n\n.album__first-image {\n  height: 292px;\n  margin-bottom: 15px;\n  border-radius: 10px;\n}\n\n.album__info {\n  display: flex;\n  justify-content: space-between;\n  padding-right: 5px;\n  padding-left: 5px;\n}\n\n.album__ID {\n  width: 25px;\n  height: 25px;\n  font-weight: 700;\n  text-align: center;\n  border: solid 2px;\n  border-radius: 50%;\n}\n\n.albumPage__load-button,\n.gallery__btn-back {\n  width: 140px;\n  height: 50px;\n  margin-bottom: 30px;\n  color: black;\n  font-weight: bold;\n  font-size: 17px;\n  font-family: Verdana;\n  background: white;\n  border-color: black;\n  border-width: 1px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n.albumPage__load-button:hover,\n.gallery__btn-back:hover {\n  background: #c7c7c7;\n  cursor: pointer;\n}\n\n.gallery__info {\n  display: flex;\n  justify-content: center;\n}\n\n.gallery__heading {\n  margin-top: 37px;\n  margin-bottom: 92.5px;\n  font-size: 64px;\n  text-transform: uppercase;\n}\n\n.gallery__Wrapper {\n  width: 100%;\n  padding-right: 87.5px;\n  padding-left: 87.5px;\n}\n\n.gallery__image-container {\n  display: inline-block;\n  width: 417px;\n  padding: 12.5px;\n}\n\n.gallery__image {\n  width: 100%;\n  height: 100%;\n}\n.gallery__image--selected {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n  max-width: 100%;\n  max-height: 100%;\n  transform: translate(-50%, -50%);\n}\n\n.background {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  display: none;\n  width: 100%;\n  height: 100%;\n  padding-top: 100px;\n  overflow: auto;\n  background-color: black;\n}\n\n.close-modal {\n  position: absolute;\n  top: 10px;\n  right: 25px;\n  color: white;\n  font-weight: bold;\n  font-size: 35px;\n}\n\n.close-modal:hover,\n.close-modal:focus {\n  color: #999;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.image-next,\n.image-previous {\n  position: absolute;\n  top: 50%;\n  width: auto;\n  margin-top: -50px;\n  padding: 16px;\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n  border-radius: 0 3px 3px 0;\n  cursor: pointer;\n  transition: 0.6s ease;\n  user-select: none;\n  user-select: none;\n}\n\n/* Position the "next button" to the right */\n.image-next {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n}\n\n/* On hover, add a black background color with a little bit see-through */\n.image-previous:hover,\n.image-next:hover {\n  background-color: rgba(0, 0, 0, 0.8);\n}',
                    '',
                    {
                        version: 3,
                        sources: ['webpack://./src/style.scss'],
                        names: [],
                        mappings:
                            'AAEA;EACI,sBAAA;EACA,SAAA;EACA,UAAA;AADJ;;AAIA;EACI,kCAAA;EACA,sBAVS;AASb;;AAIA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,iBAAA;EACA,cAAA;EACA,uBAAA;AADJ;;AAIA;EACI,kBAAA;AADJ;;AAIA;EACI,gBAAA;EACA,mBAAA;EACA,eAAA;AADJ;;AAIA;EACI,mBAAA;EACA,cAAA;EACA,gBAAA;EACA,eAAA;AADJ;;AAIA;EACI,aAAA;EACA,eAAA;EACA,kBAAA;AADJ;;AAIA;EACI,aAAA;EACA,sBAAA;EACA,YAAA;EACA,aAAA;EACA,cAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;AADJ;;AAIA;EACI,aAAA;EACA,mBAAA;EACA,mBAAA;AADJ;;AAIA;EACI,aAAA;EACA,8BAAA;EACA,kBAAA;EACA,iBAAA;AADJ;;AAIA;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;AADJ;;AAIA;;EAEI,YAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,oBAAA;EACA,iBAAA;EACA,mBAAA;EACA,iBAAA;EACA,4BAAA;EACA,6BAAA;EACA,gCAAA;EACA,+BAAA;AADJ;AAGI;;EACI,mBAAA;EACA,eAAA;AAAR;;AAIA;EACI,aAAA;EACA,uBAAA;AADJ;;AAIA;EACI,gBAAA;EACA,qBAAA;EACA,eAAA;EACA,yBAAA;AADJ;;AAIA;EACI,WAAA;EACA,qBAAA;EACA,oBAAA;AADJ;;AAIA;EACI,qBAAA;EACA,YAAA;EACA,eAAA;AADJ;;AAIA;EACI,WAAA;EACA,YAAA;AADJ;AAGI;EACI,kBAAA;EACA,QAAA;EACA,SAAA;EACA,UAAA;EACA,eAAA;EACA,gBAAA;EACA,gCAAA;AADR;;AAKA;EACI,cAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;AAFJ;;AAKA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,UAAA;EACA,aAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,cAAA;EACA,uBAAA;AAFJ;;AAKA;EACI,kBAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;AAFJ;;AAKA;;EAEI,WAAA;EACA,qBAAA;EACA,eAAA;AAFJ;;AAKA;;EAEI,kBAAA;EACA,QAAA;EACA,WAAA;EACA,iBAAA;EACA,aAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,0BAAA;EACA,eAAA;EACA,qBAAA;EACA,iBAAA;EACA,iBAAA;AAFJ;;AAKA,4CAAA;AACA;EACI,QAAA;EACA,0BAAA;AAFJ;;AAKA,yEAAA;AACA;;EAEI,oCAAA;AAFJ',
                        sourcesContent: [
                            '$body-color: #fff;\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: \'Verdana\', sans-serif;\n    background-color: $body-color;\n}\n\n.content-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    max-width: 1844px;\n    margin: 0 auto;\n    background-color: rgb(255 255 255);\n}\n\n.albumPage__info {\n    text-align: center;\n}\n\n.albumPage__heading {\n    margin-top: 20px;\n    margin-bottom: 30px;\n    font-size: 37px;\n}\n\n.albumPage__description {\n    margin-bottom: 56px;\n    color: rgb(121 120 120);\n    font-weight: 600;\n    font-size: 20px;\n}\n\n.albumPage__wrapper {\n    display: flex;\n    flex-wrap: wrap;\n    padding-left: 30px;\n}\n\n.album {\n    display: flex;\n    flex-direction: column;\n    width: 390px;\n    height: 335px;\n    margin: 0 23px;\n    margin-bottom: 83px;\n    background-color: rgb(255 255 255);\n    border-radius: 10px;\n}\n\n.album__first-image {\n    height: 292px;\n    margin-bottom: 15px;\n    border-radius: 10px;\n}\n\n.album__info {\n    display: flex;\n    justify-content: space-between;\n    padding-right: 5px;\n    padding-left: 5px;\n}\n\n.album__ID {\n    width: 25px;\n    height: 25px;\n    font-weight: 700;\n    text-align: center;\n    border: solid 2px;\n    border-radius: 50%;\n}\n\n.albumPage__load-button,\n.gallery__btn-back {\n    width: 140px;\n    height: 50px;\n    margin-bottom: 30px;\n    color: rgb(0 0 0 / 100%);\n    font-weight: bold;\n    font-size: 17px;\n    font-family: Verdana;\n    background: rgb(255 255 255 / 100%);\n    border-color: rgb(0 0 0 / 100%);\n    border-width: 1px;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\n    border-bottom-left-radius: 10px;\n\n    &:hover {\n        background: rgb(199 199 199 / 100%);\n        cursor: pointer;\n    }\n}\n\n.gallery__info {\n    display: flex;\n    justify-content: center;\n}\n\n.gallery__heading {\n    margin-top: 37px;\n    margin-bottom: 92.5px;\n    font-size: 64px;\n    text-transform: uppercase;\n}\n\n.gallery__Wrapper {\n    width: 100%;\n    padding-right: 87.5px;\n    padding-left: 87.5px;\n}\n\n.gallery__image-container {\n    display: inline-block;\n    width: 417px;\n    padding: 12.5px;\n}\n\n.gallery__image {\n    width: 100%;\n    height: 100%;\n\n    &--selected {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        z-index: 2;\n        max-width: 100%;\n        max-height: 100%;\n        transform: translate(-50%, -50%);\n    }\n}\n\n.background {\n    display: block;\n    width: 100%;\n    height: 100%;\n    background-color: #000;\n}\n\n.modal {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    display: none;\n    width: 100%;\n    height: 100%;\n    padding-top: 100px;\n    overflow: auto;\n    background-color: black;\n}\n\n.close-modal {\n    position: absolute;\n    top: 10px;\n    right: 25px;\n    color: white;\n    font-weight: bold;\n    font-size: 35px;\n}\n\n.close-modal:hover,\n.close-modal:focus {\n    color: #999;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.image-next,\n.image-previous {\n    position: absolute;\n    top: 50%;\n    width: auto;\n    margin-top: -50px;\n    padding: 16px;\n    color: white;\n    font-weight: bold;\n    font-size: 20px;\n    border-radius: 0 3px 3px 0;\n    cursor: pointer;\n    transition: 0.6s ease;\n    user-select: none;\n    user-select: none;\n}\n\n/* Position the "next button" to the right */\n.image-next {\n    right: 0;\n    border-radius: 3px 0 0 3px;\n}\n\n/* On hover, add a black background color with a little bit see-through */\n.image-previous:hover,\n.image-next:hover {\n    background-color: rgb(0 0 0 / 80%);\n}\n',
                        ],
                        sourceRoot: '',
                    },
                ]);
                // Exports
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    ___CSS_LOADER_EXPORT___;

                /***/
            },

        /***/ './node_modules/css-loader/dist/runtime/api.js':
            /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
            /***/ (module) => {
                /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
                module.exports = function (cssWithMappingToString) {
                    var list = []; // return the list of modules as css string

                    list.toString = function toString() {
                        return this.map(function (item) {
                            var content = '';
                            var needLayer = typeof item[5] !== 'undefined';

                            if (item[4]) {
                                content += '@supports ('.concat(item[4], ') {');
                            }

                            if (item[2]) {
                                content += '@media '.concat(item[2], ' {');
                            }

                            if (needLayer) {
                                content += '@layer'.concat(
                                    item[5].length > 0
                                        ? ' '.concat(item[5])
                                        : '',
                                    ' {'
                                );
                            }

                            content += cssWithMappingToString(item);

                            if (needLayer) {
                                content += '}';
                            }

                            if (item[2]) {
                                content += '}';
                            }

                            if (item[4]) {
                                content += '}';
                            }

                            return content;
                        }).join('');
                    }; // import a list of modules into the list

                    list.i = function i(
                        modules,
                        media,
                        dedupe,
                        supports,
                        layer
                    ) {
                        if (typeof modules === 'string') {
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

                            if (typeof layer !== 'undefined') {
                                if (typeof item[5] === 'undefined') {
                                    item[5] = layer;
                                } else {
                                    item[1] = '@layer'
                                        .concat(
                                            item[5].length > 0
                                                ? ' '.concat(item[5])
                                                : '',
                                            ' {'
                                        )
                                        .concat(item[1], '}');
                                    item[5] = layer;
                                }
                            }

                            if (media) {
                                if (!item[2]) {
                                    item[2] = media;
                                } else {
                                    item[1] = '@media '
                                        .concat(item[2], ' {')
                                        .concat(item[1], '}');
                                    item[2] = media;
                                }
                            }

                            if (supports) {
                                if (!item[4]) {
                                    item[4] = ''.concat(supports);
                                } else {
                                    item[1] = '@supports ('
                                        .concat(item[4], ') {')
                                        .concat(item[1], '}');
                                    item[4] = supports;
                                }
                            }

                            list.push(item);
                        }
                    };

                    return list;
                };

                /***/
            },

        /***/ './node_modules/css-loader/dist/runtime/sourceMaps.js':
            /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
            /***/ (module) => {
                module.exports = function (item) {
                    var content = item[1];
                    var cssMapping = item[3];

                    if (!cssMapping) {
                        return content;
                    }

                    if (typeof btoa === 'function') {
                        var base64 = btoa(
                            unescape(
                                encodeURIComponent(JSON.stringify(cssMapping))
                            )
                        );
                        var data =
                            'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                                base64
                            );
                        var sourceMapping = '/*# '.concat(data, ' */');
                        var sourceURLs = cssMapping.sources.map(function (
                            source
                        ) {
                            return '/*# sourceURL='
                                .concat(cssMapping.sourceRoot || '')
                                .concat(source, ' */');
                        });
                        return [content]
                            .concat(sourceURLs)
                            .concat([sourceMapping])
                            .join('\n');
                    }

                    return [content].join('\n');
                };

                /***/
            },

        /***/ './src/style.scss':
            /*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js'
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js'
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        /*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js'
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        /*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js'
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
                    __webpack_require__(
                        /*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js'
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__
                    );
                /* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ =
                    __webpack_require__(
                        /*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ './node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss'
                    );

                var options = {};

                options.styleTagTransform =
                    _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
                options.setAttributes =
                    _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

                options.insert =
                    _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
                        null,
                        'head'
                    );

                options.domAPI =
                    _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
                options.insertStyleElement =
                    _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

                var update =
                    _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
                        _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[
                            'default'
                        ],
                        options
                    );

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[
                        'default'
                    ] &&
                    _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[
                        'default'
                    ].locals
                        ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[
                              'default'
                          ].locals
                        : undefined;

                /***/
            },

        /***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
            /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
            /***/ (module) => {
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
                        var id = options.base
                            ? item[0] + options.base
                            : item[0];
                        var count = idCountMap[id] || 0;
                        var identifier = ''.concat(id, ' ').concat(count);
                        idCountMap[id] = count + 1;
                        var indexByIdentifier =
                            getIndexByIdentifier(identifier);
                        var obj = {
                            css: item[1],
                            media: item[2],
                            sourceMap: item[3],
                            supports: item[4],
                            layer: item[5],
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
                                references: 1,
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
                            if (
                                newObj.css === obj.css &&
                                newObj.media === obj.media &&
                                newObj.sourceMap === obj.sourceMap &&
                                newObj.supports === obj.supports &&
                                newObj.layer === obj.layer
                            ) {
                                return;
                            }

                            api.update((obj = newObj));
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

                /***/
            },

        /***/ './node_modules/style-loader/dist/runtime/insertBySelector.js':
            /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
            /***/ (module) => {
                var memo = {};
                /* istanbul ignore next  */

                function getTarget(target) {
                    if (typeof memo[target] === 'undefined') {
                        var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

                        if (
                            window.HTMLIFrameElement &&
                            styleTarget instanceof window.HTMLIFrameElement
                        ) {
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
                        throw new Error(
                            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                        );
                    }

                    target.appendChild(style);
                }

                module.exports = insertBySelector;

                /***/
            },

        /***/ './node_modules/style-loader/dist/runtime/insertStyleElement.js':
            /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
            /***/ (module) => {
                /* istanbul ignore next  */
                function insertStyleElement(options) {
                    var element = document.createElement('style');
                    options.setAttributes(element, options.attributes);
                    options.insert(element, options.options);
                    return element;
                }

                module.exports = insertStyleElement;

                /***/
            },

        /***/ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
            /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
            /***/ (module, __unused_webpack_exports, __webpack_require__) => {
                /* istanbul ignore next  */
                function setAttributesWithoutAttributes(styleElement) {
                    var nonce = true ? __webpack_require__.nc : 0;

                    if (nonce) {
                        styleElement.setAttribute('nonce', nonce);
                    }
                }

                module.exports = setAttributesWithoutAttributes;

                /***/
            },

        /***/ './node_modules/style-loader/dist/runtime/styleDomAPI.js':
            /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
            /***/ (module) => {
                /* istanbul ignore next  */
                function apply(styleElement, options, obj) {
                    var css = '';

                    if (obj.supports) {
                        css += '@supports ('.concat(obj.supports, ') {');
                    }

                    if (obj.media) {
                        css += '@media '.concat(obj.media, ' {');
                    }

                    var needLayer = typeof obj.layer !== 'undefined';

                    if (needLayer) {
                        css += '@layer'.concat(
                            obj.layer.length > 0 ? ' '.concat(obj.layer) : '',
                            ' {'
                        );
                    }

                    css += obj.css;

                    if (needLayer) {
                        css += '}';
                    }

                    if (obj.media) {
                        css += '}';
                    }

                    if (obj.supports) {
                        css += '}';
                    }

                    var sourceMap = obj.sourceMap;

                    if (sourceMap && typeof btoa !== 'undefined') {
                        css +=
                            '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                btoa(
                                    unescape(
                                        encodeURIComponent(
                                            JSON.stringify(sourceMap)
                                        )
                                    )
                                ),
                                ' */'
                            );
                    } // For old IE

                    /* istanbul ignore if  */

                    options.styleTagTransform(
                        css,
                        styleElement,
                        options.options
                    );
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
                        },
                    };
                }

                module.exports = domAPI;

                /***/
            },

        /***/ './node_modules/style-loader/dist/runtime/styleTagTransform.js':
            /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
            /***/ (module) => {
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

                /***/
            },

        /***/ './src/createBtn.ts':
            /*!**************************!*\
  !*** ./src/createBtn.ts ***!
  \**************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ createBtn: () =>
                            /* binding */ createBtn,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(/*! ./index */ './src/index.ts');
                /* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ./createElement */ './src/createElement.ts'
                    );

                var wrapper = document.querySelector('.content-wrapper');
                function createBtn() {
                    var returnBtn = (0,
                    _createElement__WEBPACK_IMPORTED_MODULE_1__['default'])({
                        tag: 'button',
                        className: 'gallery__btn-back',
                        value: 'return',
                    });
                    wrapper.appendChild(returnBtn);
                    returnBtn.addEventListener('click', function () {
                        wrapper.innerHTML = '';
                        console.log(
                            'The old screen was '.concat(
                                _index__WEBPACK_IMPORTED_MODULE_0__.state.screen
                            )
                        );
                        _index__WEBPACK_IMPORTED_MODULE_0__.state.screen =
                            'albums';
                        console.log(
                            'The new screen is '.concat(
                                _index__WEBPACK_IMPORTED_MODULE_0__.state.screen
                            )
                        );
                    });
                    return returnBtn;
                }

                /***/
            },

        /***/ './src/createElement.ts':
            /*!******************************!*\
  !*** ./src/createElement.ts ***!
  \******************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
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
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    createElement;

                /***/
            },

        /***/ './src/createLoadMoreBtn.ts':
            /*!**********************************!*\
  !*** ./src/createLoadMoreBtn.ts ***!
  \**********************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ createLoadMoreBtn: () =>
                            /* binding */ createLoadMoreBtn,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ./createElement */ './src/createElement.ts'
                    );
                var __awaiter =
                    (undefined && undefined.__awaiter) ||
                    function (thisArg, _arguments, P, generator) {
                        function adopt(value) {
                            return value instanceof P
                                ? value
                                : new P(function (resolve) {
                                      resolve(value);
                                  });
                        }
                        return new (P || (P = Promise))(function (
                            resolve,
                            reject
                        ) {
                            function fulfilled(value) {
                                try {
                                    step(generator.next(value));
                                } catch (e) {
                                    reject(e);
                                }
                            }
                            function rejected(value) {
                                try {
                                    step(generator['throw'](value));
                                } catch (e) {
                                    reject(e);
                                }
                            }
                            function step(result) {
                                result.done
                                    ? resolve(result.value)
                                    : adopt(result.value).then(
                                          fulfilled,
                                          rejected
                                      );
                            }
                            step(
                                (generator = generator.apply(
                                    thisArg,
                                    _arguments || []
                                )).next()
                            );
                        });
                    };
                var __generator =
                    (undefined && undefined.__generator) ||
                    function (thisArg, body) {
                        var _ = {
                                label: 0,
                                sent: function () {
                                    if (t[0] & 1) throw t[1];
                                    return t[1];
                                },
                                trys: [],
                                ops: [],
                            },
                            f,
                            y,
                            t,
                            g;
                        return (
                            (g = {
                                next: verb(0),
                                throw: verb(1),
                                return: verb(2),
                            }),
                            typeof Symbol === 'function' &&
                                (g[Symbol.iterator] = function () {
                                    return this;
                                }),
                            g
                        );
                        function verb(n) {
                            return function (v) {
                                return step([n, v]);
                            };
                        }
                        function step(op) {
                            if (f)
                                throw new TypeError(
                                    'Generator is already executing.'
                                );
                            while (_)
                                try {
                                    if (
                                        ((f = 1),
                                        y &&
                                            (t =
                                                op[0] & 2
                                                    ? y['return']
                                                    : op[0]
                                                    ? y['throw'] ||
                                                      ((t = y['return']) &&
                                                          t.call(y),
                                                      0)
                                                    : y.next) &&
                                            !(t = t.call(y, op[1])).done)
                                    )
                                        return t;
                                    if (((y = 0), t)) op = [op[0] & 2, t.value];
                                    switch (op[0]) {
                                        case 0:
                                        case 1:
                                            t = op;
                                            break;
                                        case 4:
                                            _.label++;
                                            return {value: op[1], done: false};
                                        case 5:
                                            _.label++;
                                            y = op[1];
                                            op = [0];
                                            continue;
                                        case 7:
                                            op = _.ops.pop();
                                            _.trys.pop();
                                            continue;
                                        default:
                                            if (
                                                !((t = _.trys),
                                                (t =
                                                    t.length > 0 &&
                                                    t[t.length - 1])) &&
                                                (op[0] === 6 || op[0] === 2)
                                            ) {
                                                _ = 0;
                                                continue;
                                            }
                                            if (
                                                op[0] === 3 &&
                                                (!t ||
                                                    (op[1] > t[0] &&
                                                        op[1] < t[3]))
                                            ) {
                                                _.label = op[1];
                                                break;
                                            }
                                            if (op[0] === 6 && _.label < t[1]) {
                                                _.label = t[1];
                                                t = op;
                                                break;
                                            }
                                            if (t && _.label < t[2]) {
                                                _.label = t[2];
                                                _.ops.push(op);
                                                break;
                                            }
                                            if (t[2]) _.ops.pop();
                                            _.trys.pop();
                                            continue;
                                    }
                                    op = body.call(thisArg, _);
                                } catch (e) {
                                    op = [6, e];
                                    y = 0;
                                } finally {
                                    f = t = 0;
                                }
                            if (op[0] & 5) throw op[1];
                            return {value: op[0] ? op[1] : void 0, done: true};
                        }
                    };

                var wrapper = document.querySelector('.content-wrapper');
                var defaultAlbumsAmount = 8;
                function createLoadMoreBtn(clickHandler) {
                    return __awaiter(this, void 0, void 0, function () {
                        var loadMoreBtn;
                        return __generator(this, function (_a) {
                            loadMoreBtn = (0,
                            _createElement__WEBPACK_IMPORTED_MODULE_0__[
                                'default'
                            ])({
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

                /***/
            },

        /***/ './src/enums.ts':
            /*!**********************!*\
  !*** ./src/enums.ts ***!
  \**********************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ ScreenType: () =>
                            /* binding */ ScreenType,
                        /* harmony export */ GalleryMode: () =>
                            /* binding */ GalleryMode,
                        /* harmony export */
                    }
                );
                var ScreenType;
                (function (ScreenType) {
                    ScreenType['albums'] = 'albums';
                    ScreenType['gallery'] = 'gallery';
                })(ScreenType || (ScreenType = {}));
                var GalleryMode;
                (function (GalleryMode) {
                    GalleryMode['thumbnails'] = 'thumbnails';
                    GalleryMode['fullscreen'] = 'fullscreen';
                })(GalleryMode || (GalleryMode = {}));

                /***/
            },

        /***/ './src/getData.ts':
            /*!************************!*\
  !*** ./src/getData.ts ***!
  \************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ getData: () =>
                            /* binding */ getData,
                        /* harmony export */
                    }
                );
                var __awaiter =
                    (undefined && undefined.__awaiter) ||
                    function (thisArg, _arguments, P, generator) {
                        function adopt(value) {
                            return value instanceof P
                                ? value
                                : new P(function (resolve) {
                                      resolve(value);
                                  });
                        }
                        return new (P || (P = Promise))(function (
                            resolve,
                            reject
                        ) {
                            function fulfilled(value) {
                                try {
                                    step(generator.next(value));
                                } catch (e) {
                                    reject(e);
                                }
                            }
                            function rejected(value) {
                                try {
                                    step(generator['throw'](value));
                                } catch (e) {
                                    reject(e);
                                }
                            }
                            function step(result) {
                                result.done
                                    ? resolve(result.value)
                                    : adopt(result.value).then(
                                          fulfilled,
                                          rejected
                                      );
                            }
                            step(
                                (generator = generator.apply(
                                    thisArg,
                                    _arguments || []
                                )).next()
                            );
                        });
                    };
                var __generator =
                    (undefined && undefined.__generator) ||
                    function (thisArg, body) {
                        var _ = {
                                label: 0,
                                sent: function () {
                                    if (t[0] & 1) throw t[1];
                                    return t[1];
                                },
                                trys: [],
                                ops: [],
                            },
                            f,
                            y,
                            t,
                            g;
                        return (
                            (g = {
                                next: verb(0),
                                throw: verb(1),
                                return: verb(2),
                            }),
                            typeof Symbol === 'function' &&
                                (g[Symbol.iterator] = function () {
                                    return this;
                                }),
                            g
                        );
                        function verb(n) {
                            return function (v) {
                                return step([n, v]);
                            };
                        }
                        function step(op) {
                            if (f)
                                throw new TypeError(
                                    'Generator is already executing.'
                                );
                            while (_)
                                try {
                                    if (
                                        ((f = 1),
                                        y &&
                                            (t =
                                                op[0] & 2
                                                    ? y['return']
                                                    : op[0]
                                                    ? y['throw'] ||
                                                      ((t = y['return']) &&
                                                          t.call(y),
                                                      0)
                                                    : y.next) &&
                                            !(t = t.call(y, op[1])).done)
                                    )
                                        return t;
                                    if (((y = 0), t)) op = [op[0] & 2, t.value];
                                    switch (op[0]) {
                                        case 0:
                                        case 1:
                                            t = op;
                                            break;
                                        case 4:
                                            _.label++;
                                            return {value: op[1], done: false};
                                        case 5:
                                            _.label++;
                                            y = op[1];
                                            op = [0];
                                            continue;
                                        case 7:
                                            op = _.ops.pop();
                                            _.trys.pop();
                                            continue;
                                        default:
                                            if (
                                                !((t = _.trys),
                                                (t =
                                                    t.length > 0 &&
                                                    t[t.length - 1])) &&
                                                (op[0] === 6 || op[0] === 2)
                                            ) {
                                                _ = 0;
                                                continue;
                                            }
                                            if (
                                                op[0] === 3 &&
                                                (!t ||
                                                    (op[1] > t[0] &&
                                                        op[1] < t[3]))
                                            ) {
                                                _.label = op[1];
                                                break;
                                            }
                                            if (op[0] === 6 && _.label < t[1]) {
                                                _.label = t[1];
                                                t = op;
                                                break;
                                            }
                                            if (t && _.label < t[2]) {
                                                _.label = t[2];
                                                _.ops.push(op);
                                                break;
                                            }
                                            if (t[2]) _.ops.pop();
                                            _.trys.pop();
                                            continue;
                                    }
                                    op = body.call(thisArg, _);
                                } catch (e) {
                                    op = [6, e];
                                    y = 0;
                                } finally {
                                    f = t = 0;
                                }
                            if (op[0] & 5) throw op[1];
                            return {value: op[0] ? op[1] : void 0, done: true};
                        }
                    };
                var getData = function (url) {
                    return __awaiter(void 0, void 0, void 0, function () {
                        var data, json;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    return [4 /*yield*/, fetch(url)];
                                case 1:
                                    data = _a.sent();
                                    return [4 /*yield*/, data.json()];
                                case 2:
                                    json = _a.sent();
                                    return [2 /*return*/, json];
                            }
                        });
                    });
                };

                /***/
            },

        /***/ './src/index.ts':
            /*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ onLoadMore: () =>
                            /* binding */ onLoadMore,
                        /* harmony export */ state: () => /* binding */ state,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(/*! ./style.scss */ './src/style.scss');
                /* harmony import */ var _renderGallery__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ./renderGallery */ './src/renderGallery.ts'
                    );
                /* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(/*! ./getData */ './src/getData.ts');
                /* harmony import */ var _renderAlbums__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        /*! ./renderAlbums */ './src/renderAlbums.ts'
                    );
                /* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        /*! ./createElement */ './src/createElement.ts'
                    );
                /* harmony import */ var _setThumbnailSource__WEBPACK_IMPORTED_MODULE_5__ =
                    __webpack_require__(
                        /*! ./setThumbnailSource */ './src/setThumbnailSource.ts'
                    );
                /* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_6__ =
                    __webpack_require__(/*! ./enums */ './src/enums.ts');
                /* harmony import */ var _renderFullImage__WEBPACK_IMPORTED_MODULE_7__ =
                    __webpack_require__(
                        /*! ./renderFullImage */ './src/renderFullImage.ts'
                    );
                var __assign =
                    (undefined && undefined.__assign) ||
                    function () {
                        __assign =
                            Object.assign ||
                            function (t) {
                                for (
                                    var s, i = 1, n = arguments.length;
                                    i < n;
                                    i++
                                ) {
                                    s = arguments[i];
                                    for (var p in s)
                                        if (
                                            Object.prototype.hasOwnProperty.call(
                                                s,
                                                p
                                            )
                                        )
                                            t[p] = s[p];
                                }
                                return t;
                            };
                        return __assign.apply(this, arguments);
                    };
                var __awaiter =
                    (undefined && undefined.__awaiter) ||
                    function (thisArg, _arguments, P, generator) {
                        function adopt(value) {
                            return value instanceof P
                                ? value
                                : new P(function (resolve) {
                                      resolve(value);
                                  });
                        }
                        return new (P || (P = Promise))(function (
                            resolve,
                            reject
                        ) {
                            function fulfilled(value) {
                                try {
                                    step(generator.next(value));
                                } catch (e) {
                                    reject(e);
                                }
                            }
                            function rejected(value) {
                                try {
                                    step(generator['throw'](value));
                                } catch (e) {
                                    reject(e);
                                }
                            }
                            function step(result) {
                                result.done
                                    ? resolve(result.value)
                                    : adopt(result.value).then(
                                          fulfilled,
                                          rejected
                                      );
                            }
                            step(
                                (generator = generator.apply(
                                    thisArg,
                                    _arguments || []
                                )).next()
                            );
                        });
                    };
                var __generator =
                    (undefined && undefined.__generator) ||
                    function (thisArg, body) {
                        var _ = {
                                label: 0,
                                sent: function () {
                                    if (t[0] & 1) throw t[1];
                                    return t[1];
                                },
                                trys: [],
                                ops: [],
                            },
                            f,
                            y,
                            t,
                            g;
                        return (
                            (g = {
                                next: verb(0),
                                throw: verb(1),
                                return: verb(2),
                            }),
                            typeof Symbol === 'function' &&
                                (g[Symbol.iterator] = function () {
                                    return this;
                                }),
                            g
                        );
                        function verb(n) {
                            return function (v) {
                                return step([n, v]);
                            };
                        }
                        function step(op) {
                            if (f)
                                throw new TypeError(
                                    'Generator is already executing.'
                                );
                            while (_)
                                try {
                                    if (
                                        ((f = 1),
                                        y &&
                                            (t =
                                                op[0] & 2
                                                    ? y['return']
                                                    : op[0]
                                                    ? y['throw'] ||
                                                      ((t = y['return']) &&
                                                          t.call(y),
                                                      0)
                                                    : y.next) &&
                                            !(t = t.call(y, op[1])).done)
                                    )
                                        return t;
                                    if (((y = 0), t)) op = [op[0] & 2, t.value];
                                    switch (op[0]) {
                                        case 0:
                                        case 1:
                                            t = op;
                                            break;
                                        case 4:
                                            _.label++;
                                            return {value: op[1], done: false};
                                        case 5:
                                            _.label++;
                                            y = op[1];
                                            op = [0];
                                            continue;
                                        case 7:
                                            op = _.ops.pop();
                                            _.trys.pop();
                                            continue;
                                        default:
                                            if (
                                                !((t = _.trys),
                                                (t =
                                                    t.length > 0 &&
                                                    t[t.length - 1])) &&
                                                (op[0] === 6 || op[0] === 2)
                                            ) {
                                                _ = 0;
                                                continue;
                                            }
                                            if (
                                                op[0] === 3 &&
                                                (!t ||
                                                    (op[1] > t[0] &&
                                                        op[1] < t[3]))
                                            ) {
                                                _.label = op[1];
                                                break;
                                            }
                                            if (op[0] === 6 && _.label < t[1]) {
                                                _.label = t[1];
                                                t = op;
                                                break;
                                            }
                                            if (t && _.label < t[2]) {
                                                _.label = t[2];
                                                _.ops.push(op);
                                                break;
                                            }
                                            if (t[2]) _.ops.pop();
                                            _.trys.pop();
                                            continue;
                                    }
                                    op = body.call(thisArg, _);
                                } catch (e) {
                                    op = [6, e];
                                    y = 0;
                                } finally {
                                    f = t = 0;
                                }
                            if (op[0] & 5) throw op[1];
                            return {value: op[0] ? op[1] : void 0, done: true};
                        }
                    };

                var defaultAlbumsAmount = 8; // переименовать в defaultAlbumsAmount
                var pageCounter = 1;
                ////////////////////////// Вынести в отдельную функцию
                var screenType = localStorage.getItem('screenType');
                var galleryMode = localStorage.getItem('galleryMode');
                ///////////////////////
                function onLoadMore() {
                    return __awaiter(this, void 0, void 0, function () {
                        var albumsWrapper, newAlbums, _loop_1, i;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    albumsWrapper = document.querySelector(
                                        '.albumPage__wrapper'
                                    );
                                    return [
                                        4 /*yield*/,
                                        (0,
                                        _getData__WEBPACK_IMPORTED_MODULE_2__.getData)(
                                            'https://jsonplaceholder.typicode.com/albums/?_start='
                                                .concat(
                                                    defaultAlbumsAmount *
                                                        pageCounter +
                                                        1,
                                                    '&_end='
                                                )
                                                .concat(
                                                    defaultAlbumsAmount *
                                                        pageCounter +
                                                        defaultAlbumsAmount +
                                                        1
                                                )
                                        ),
                                    ];
                                case 1:
                                    newAlbums = _a.sent();
                                    _loop_1 = function (i) {
                                        var album,
                                            thumbnail,
                                            _b,
                                            albumInfo,
                                            heading,
                                            id;
                                        var _c;
                                        return __generator(this, function (_d) {
                                            switch (_d.label) {
                                                case 0:
                                                    console.log(
                                                        newAlbums[i].id
                                                    );
                                                    album = (0,
                                                    _createElement__WEBPACK_IMPORTED_MODULE_4__[
                                                        'default'
                                                    ])({
                                                        tag: 'div',
                                                        className: 'album',
                                                        id: newAlbums[
                                                            i
                                                        ].id.toString(),
                                                    });
                                                    albumsWrapper.appendChild(
                                                        album
                                                    );
                                                    album.addEventListener(
                                                        'click',
                                                        function () {
                                                            console.log(
                                                                'The old screen was '.concat(
                                                                    state.screen
                                                                )
                                                            );
                                                            console.log(
                                                                'The old state ID was '.concat(
                                                                    state.id
                                                                )
                                                            );
                                                            state.id =
                                                                newAlbums[i].id;
                                                            state.screen =
                                                                'gallery';
                                                            console.log(
                                                                'The new state ID is '.concat(
                                                                    state.id
                                                                )
                                                            );
                                                            console.log(
                                                                'The new screen is '.concat(
                                                                    state.screen
                                                                )
                                                            );
                                                        }
                                                    );
                                                    _b =
                                                        _createElement__WEBPACK_IMPORTED_MODULE_4__[
                                                            'default'
                                                        ];
                                                    _c = {
                                                        tag: 'img',
                                                        className:
                                                            'album__first-image',
                                                        attribute: 'src',
                                                    };
                                                    return [
                                                        4 /*yield*/,
                                                        (0,
                                                        _setThumbnailSource__WEBPACK_IMPORTED_MODULE_5__.setThumbnailSource)(
                                                            newAlbums[i].id
                                                        ),
                                                    ];
                                                case 1:
                                                    thumbnail = _b.apply(
                                                        void 0,
                                                        [
                                                            ((_c.attrValue =
                                                                _d.sent()),
                                                            _c),
                                                        ]
                                                    );
                                                    album.appendChild(
                                                        thumbnail
                                                    );
                                                    albumInfo = (0,
                                                    _createElement__WEBPACK_IMPORTED_MODULE_4__[
                                                        'default'
                                                    ])({
                                                        tag: 'div',
                                                        className:
                                                            'album__info',
                                                    });
                                                    album.appendChild(
                                                        albumInfo
                                                    );
                                                    heading = (0,
                                                    _createElement__WEBPACK_IMPORTED_MODULE_4__[
                                                        'default'
                                                    ])({
                                                        tag: 'h3',
                                                        className:
                                                            'album__heading',
                                                        value: newAlbums[i]
                                                            .title,
                                                    });
                                                    albumInfo.appendChild(
                                                        heading
                                                    );
                                                    id = (0,
                                                    _createElement__WEBPACK_IMPORTED_MODULE_4__[
                                                        'default'
                                                    ])({
                                                        tag: 'p',
                                                        className: 'album__ID',
                                                        value: (
                                                            newAlbums[i].id - 1
                                                        ).toString(),
                                                    });
                                                    albumInfo.appendChild(id);
                                                    return [2 /*return*/];
                                            }
                                        });
                                    };
                                    i = 0;
                                    _a.label = 2;
                                case 2:
                                    if (!(i < newAlbums.length))
                                        return [3 /*break*/, 5];
                                    return [5 /*yield**/, _loop_1(i)];
                                case 3:
                                    _a.sent();
                                    _a.label = 4;
                                case 4:
                                    i++;
                                    return [3 /*break*/, 2];
                                case 5:
                                    pageCounter++;
                                    return [2 /*return*/];
                            }
                        });
                    });
                }
                var state = {
                    _screen: 'albums',
                    _id: null,
                    _photos: {},
                    set photos(albums) {
                        var _a;
                        this._photos = __assign(
                            __assign({}, this._photos),
                            ((_a = {}), (_a[albums.id] = albums.photos), _a)
                        );
                    },
                    get photos() {
                        return this._photos;
                    },
                    set screen(type) {
                        this._screen = type;
                        // body.innerHTML = '';
                        if (type === 'gallery') {
                            (0,
                            _renderGallery__WEBPACK_IMPORTED_MODULE_1__.renderGallery)();
                            return;
                        }
                        (0,
                        _renderAlbums__WEBPACK_IMPORTED_MODULE_3__.renderAlbums)();
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
                function renderPage() {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (
                                        !(
                                            screenType ===
                                            _enums__WEBPACK_IMPORTED_MODULE_6__
                                                .ScreenType.albums
                                        )
                                    )
                                        return [3 /*break*/, 1];
                                    (0,
                                    _renderAlbums__WEBPACK_IMPORTED_MODULE_3__.renderAlbums)();
                                    return [3 /*break*/, 4];
                                case 1:
                                    if (
                                        !(
                                            screenType ===
                                            _enums__WEBPACK_IMPORTED_MODULE_6__
                                                .ScreenType.gallery
                                        )
                                    )
                                        return [3 /*break*/, 4];
                                    if (
                                        !(
                                            galleryMode ===
                                            _enums__WEBPACK_IMPORTED_MODULE_6__
                                                .GalleryMode.fullscreen
                                        )
                                    )
                                        return [3 /*break*/, 3];
                                    return [
                                        4 /*yield*/,
                                        (0,
                                        _renderGallery__WEBPACK_IMPORTED_MODULE_1__.renderGallery)(),
                                    ];
                                case 2:
                                    _a.sent();
                                    (0,
                                    _renderFullImage__WEBPACK_IMPORTED_MODULE_7__[
                                        'default'
                                    ])(localStorage.getItem('fullImageUrl'));
                                    return [3 /*break*/, 4];
                                case 3:
                                    (0,
                                    _renderGallery__WEBPACK_IMPORTED_MODULE_1__.renderGallery)();
                                    console.log(
                                        'THE INCORRECT CORRECT THING WAS USED'
                                    );
                                    _a.label = 4;
                                case 4:
                                    return [2 /*return*/];
                            }
                        });
                    });
                }
                renderPage();

                /***/
            },

        /***/ './src/renderAlbums.ts':
            /*!*****************************!*\
  !*** ./src/renderAlbums.ts ***!
  \*****************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ renderAlbums: () =>
                            /* binding */ renderAlbums,
                        /* harmony export */ chosenAlbum: () =>
                            /* binding */ chosenAlbum,
                        /* harmony export */ ScreenType: () =>
                            /* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_5__.ScreenType,
                        /* harmony export */
                    }
                );
                /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(/*! . */ './src/index.ts');
                /* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ./createElement */ './src/createElement.ts'
                    );
                /* harmony import */ var _setThumbnailSource__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ./setThumbnailSource */ './src/setThumbnailSource.ts'
                    );
                /* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(/*! ./getData */ './src/getData.ts');
                /* harmony import */ var _createLoadMoreBtn__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        /*! ./createLoadMoreBtn */ './src/createLoadMoreBtn.ts'
                    );
                /* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_5__ =
                    __webpack_require__(/*! ./enums */ './src/enums.ts');
                var __awaiter =
                    (undefined && undefined.__awaiter) ||
                    function (thisArg, _arguments, P, generator) {
                        function adopt(value) {
                            return value instanceof P
                                ? value
                                : new P(function (resolve) {
                                      resolve(value);
                                  });
                        }
                        return new (P || (P = Promise))(function (
                            resolve,
                            reject
                        ) {
                            function fulfilled(value) {
                                try {
                                    step(generator.next(value));
                                } catch (e) {
                                    reject(e);
                                }
                            }
                            function rejected(value) {
                                try {
                                    step(generator['throw'](value));
                                } catch (e) {
                                    reject(e);
                                }
                            }
                            function step(result) {
                                result.done
                                    ? resolve(result.value)
                                    : adopt(result.value).then(
                                          fulfilled,
                                          rejected
                                      );
                            }
                            step(
                                (generator = generator.apply(
                                    thisArg,
                                    _arguments || []
                                )).next()
                            );
                        });
                    };
                var __generator =
                    (undefined && undefined.__generator) ||
                    function (thisArg, body) {
                        var _ = {
                                label: 0,
                                sent: function () {
                                    if (t[0] & 1) throw t[1];
                                    return t[1];
                                },
                                trys: [],
                                ops: [],
                            },
                            f,
                            y,
                            t,
                            g;
                        return (
                            (g = {
                                next: verb(0),
                                throw: verb(1),
                                return: verb(2),
                            }),
                            typeof Symbol === 'function' &&
                                (g[Symbol.iterator] = function () {
                                    return this;
                                }),
                            g
                        );
                        function verb(n) {
                            return function (v) {
                                return step([n, v]);
                            };
                        }
                        function step(op) {
                            if (f)
                                throw new TypeError(
                                    'Generator is already executing.'
                                );
                            while (_)
                                try {
                                    if (
                                        ((f = 1),
                                        y &&
                                            (t =
                                                op[0] & 2
                                                    ? y['return']
                                                    : op[0]
                                                    ? y['throw'] ||
                                                      ((t = y['return']) &&
                                                          t.call(y),
                                                      0)
                                                    : y.next) &&
                                            !(t = t.call(y, op[1])).done)
                                    )
                                        return t;
                                    if (((y = 0), t)) op = [op[0] & 2, t.value];
                                    switch (op[0]) {
                                        case 0:
                                        case 1:
                                            t = op;
                                            break;
                                        case 4:
                                            _.label++;
                                            return {value: op[1], done: false};
                                        case 5:
                                            _.label++;
                                            y = op[1];
                                            op = [0];
                                            continue;
                                        case 7:
                                            op = _.ops.pop();
                                            _.trys.pop();
                                            continue;
                                        default:
                                            if (
                                                !((t = _.trys),
                                                (t =
                                                    t.length > 0 &&
                                                    t[t.length - 1])) &&
                                                (op[0] === 6 || op[0] === 2)
                                            ) {
                                                _ = 0;
                                                continue;
                                            }
                                            if (
                                                op[0] === 3 &&
                                                (!t ||
                                                    (op[1] > t[0] &&
                                                        op[1] < t[3]))
                                            ) {
                                                _.label = op[1];
                                                break;
                                            }
                                            if (op[0] === 6 && _.label < t[1]) {
                                                _.label = t[1];
                                                t = op;
                                                break;
                                            }
                                            if (t && _.label < t[2]) {
                                                _.label = t[2];
                                                _.ops.push(op);
                                                break;
                                            }
                                            if (t[2]) _.ops.pop();
                                            _.trys.pop();
                                            continue;
                                    }
                                    op = body.call(thisArg, _);
                                } catch (e) {
                                    op = [6, e];
                                    y = 0;
                                } finally {
                                    f = t = 0;
                                }
                            if (op[0] & 5) throw op[1];
                            return {value: op[0] ? op[1] : void 0, done: true};
                        }
                    };

                var albumsUrl = 'https://jsonplaceholder.typicode.com/albums/';
                var wrapper = document.querySelector('.content-wrapper');
                var defaultAlbumsAmount = 8;
                var chosenAlbum = '';
                function renderAlbums() {
                    return __awaiter(this, void 0, void 0, function () {
                        var albumsArr,
                            pageInfo,
                            headingBig,
                            pageDescription,
                            albumsWrapper,
                            _loop_1,
                            i,
                            err_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 6, , 7]);
                                    return [
                                        4 /*yield*/,
                                        (0,
                                        _getData__WEBPACK_IMPORTED_MODULE_3__.getData)(
                                            albumsUrl
                                        ),
                                    ];
                                case 1:
                                    albumsArr = _a.sent();
                                    pageInfo = (0,
                                    _createElement__WEBPACK_IMPORTED_MODULE_1__[
                                        'default'
                                    ])({
                                        tag: 'div',
                                        className: 'albumPage__info',
                                    });
                                    wrapper.appendChild(pageInfo);
                                    headingBig = (0,
                                    _createElement__WEBPACK_IMPORTED_MODULE_1__[
                                        'default'
                                    ])({
                                        tag: 'h1',
                                        className: 'albumPage__heading',
                                        value: 'Image Gallery',
                                    });
                                    pageInfo.appendChild(headingBig);
                                    pageDescription = (0,
                                    _createElement__WEBPACK_IMPORTED_MODULE_1__[
                                        'default'
                                    ])({
                                        tag: 'p',
                                        className: 'albumPage__description',
                                        value: ''.concat(
                                            defaultAlbumsAmount,
                                            ' albums filled with various photos for you!'
                                        ),
                                    });
                                    pageInfo.appendChild(pageDescription);
                                    albumsWrapper = (0,
                                    _createElement__WEBPACK_IMPORTED_MODULE_1__[
                                        'default'
                                    ])({
                                        tag: 'div',
                                        className: 'albumPage__wrapper',
                                    });
                                    wrapper.appendChild(albumsWrapper);
                                    _loop_1 = function (i) {
                                        var album,
                                            thumbnail,
                                            _b,
                                            albumInfo,
                                            heading,
                                            id;
                                        var _c;
                                        return __generator(this, function (_d) {
                                            switch (_d.label) {
                                                case 0:
                                                    album = (0,
                                                    _createElement__WEBPACK_IMPORTED_MODULE_1__[
                                                        'default'
                                                    ])({
                                                        tag: 'div',
                                                        className: 'album',
                                                        id: i.toString(),
                                                    });
                                                    albumsWrapper.appendChild(
                                                        album
                                                    );
                                                    _b =
                                                        _createElement__WEBPACK_IMPORTED_MODULE_1__[
                                                            'default'
                                                        ];
                                                    _c = {
                                                        tag: 'img',
                                                        className:
                                                            'album__first-image',
                                                        attribute: 'src',
                                                    };
                                                    return [
                                                        4 /*yield*/,
                                                        (0,
                                                        _setThumbnailSource__WEBPACK_IMPORTED_MODULE_2__.setThumbnailSource)(
                                                            i
                                                        ),
                                                    ];
                                                case 1:
                                                    thumbnail = _b.apply(
                                                        void 0,
                                                        [
                                                            ((_c.attrValue =
                                                                _d.sent()),
                                                            _c),
                                                        ]
                                                    );
                                                    album.appendChild(
                                                        thumbnail
                                                    );
                                                    albumInfo = (0,
                                                    _createElement__WEBPACK_IMPORTED_MODULE_1__[
                                                        'default'
                                                    ])({
                                                        tag: 'div',
                                                        className:
                                                            'album__info',
                                                    });
                                                    album.appendChild(
                                                        albumInfo
                                                    );
                                                    heading = (0,
                                                    _createElement__WEBPACK_IMPORTED_MODULE_1__[
                                                        'default'
                                                    ])({
                                                        tag: 'h3',
                                                        className:
                                                            'album__heading',
                                                        value: albumsArr[i]
                                                            .title,
                                                    });
                                                    albumInfo.appendChild(
                                                        heading
                                                    );
                                                    id = (0,
                                                    _createElement__WEBPACK_IMPORTED_MODULE_1__[
                                                        'default'
                                                    ])({
                                                        tag: 'p',
                                                        className: 'album__ID',
                                                        value: i.toString(),
                                                    });
                                                    albumInfo.appendChild(id);
                                                    album.addEventListener(
                                                        'click',
                                                        function () {
                                                            console.log(
                                                                'State id #1: '.concat(
                                                                    ___WEBPACK_IMPORTED_MODULE_0__
                                                                        .state
                                                                        .id
                                                                )
                                                            );
                                                            console.log(
                                                                'Album id #1: '.concat(
                                                                    album.id
                                                                )
                                                            );
                                                            ___WEBPACK_IMPORTED_MODULE_0__.state.id =
                                                                Number(
                                                                    album.id
                                                                );
                                                            console.log(
                                                                'State id #2: '.concat(
                                                                    ___WEBPACK_IMPORTED_MODULE_0__
                                                                        .state
                                                                        .id
                                                                )
                                                            );
                                                            console.log(
                                                                'Album id #2: '.concat(
                                                                    album.id
                                                                )
                                                            );
                                                            localStorage.setItem(
                                                                'albumID',
                                                                album.id
                                                            );
                                                            ___WEBPACK_IMPORTED_MODULE_0__.state.screen =
                                                                'gallery';
                                                        }
                                                    );
                                                    return [2 /*return*/];
                                            }
                                        });
                                    };
                                    i = 1;
                                    _a.label = 2;
                                case 2:
                                    if (!(i <= defaultAlbumsAmount))
                                        return [3 /*break*/, 5];
                                    return [5 /*yield**/, _loop_1(i)];
                                case 3:
                                    _a.sent();
                                    _a.label = 4;
                                case 4:
                                    i++;
                                    return [3 /*break*/, 2];
                                case 5:
                                    (0,
                                    _createLoadMoreBtn__WEBPACK_IMPORTED_MODULE_4__.createLoadMoreBtn)(___WEBPACK_IMPORTED_MODULE_0__.onLoadMore);
                                    localStorage.setItem(
                                        'screenType',
                                        _enums__WEBPACK_IMPORTED_MODULE_5__
                                            .ScreenType.albums
                                    );
                                    return [3 /*break*/, 7];
                                case 6:
                                    err_1 = _a.sent();
                                    console.log('There was an error', err_1);
                                    return [3 /*break*/, 7];
                                case 7:
                                    return [2 /*return*/];
                            }
                        });
                    });
                }

                /***/
            },

        /***/ './src/renderFullImage.ts':
            /*!********************************!*\
  !*** ./src/renderFullImage.ts ***!
  \********************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            /* binding */ renderFullImage,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(/*! ./enums */ './src/enums.ts');
                /* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ./createElement */ './src/createElement.ts'
                    );

                function renderFullImage(imageURL) {
                    var modal = document.querySelector('.modal');
                    console.log(modal);
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                    var fullImage = (0,
                    _createElement__WEBPACK_IMPORTED_MODULE_1__['default'])({
                        tag: 'img',
                        className: 'gallery__image--selected',
                        attribute: 'src',
                        attrValue: ''.concat(imageURL),
                    });
                    console.log(fullImage.getAttribute('src'));
                    var modalContent = document.querySelector('.modal-content');
                    modalContent.appendChild(fullImage);
                    localStorage.setItem(
                        'screenType',
                        _enums__WEBPACK_IMPORTED_MODULE_0__.ScreenType.gallery
                    );
                    localStorage.setItem(
                        'galleryMode',
                        _enums__WEBPACK_IMPORTED_MODULE_0__.GalleryMode
                            .fullscreen
                    );
                }

                /***/
            },

        /***/ './src/renderGallery.ts':
            /*!******************************!*\
  !*** ./src/renderGallery.ts ***!
  \******************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ renderGallery: () =>
                            /* binding */ renderGallery,
                        /* harmony export */ imageOrder: () =>
                            /* binding */ imageOrder,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ./createElement */ './src/createElement.ts'
                    );
                /* harmony import */ var _createBtn__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ./createBtn */ './src/createBtn.ts'
                    );
                /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(/*! . */ './src/index.ts');
                /* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(/*! ./getData */ './src/getData.ts');
                /* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(/*! ./enums */ './src/enums.ts');
                /* harmony import */ var _renderFullImage__WEBPACK_IMPORTED_MODULE_5__ =
                    __webpack_require__(
                        /*! ./renderFullImage */ './src/renderFullImage.ts'
                    );
                var __awaiter =
                    (undefined && undefined.__awaiter) ||
                    function (thisArg, _arguments, P, generator) {
                        function adopt(value) {
                            return value instanceof P
                                ? value
                                : new P(function (resolve) {
                                      resolve(value);
                                  });
                        }
                        return new (P || (P = Promise))(function (
                            resolve,
                            reject
                        ) {
                            function fulfilled(value) {
                                try {
                                    step(generator.next(value));
                                } catch (e) {
                                    reject(e);
                                }
                            }
                            function rejected(value) {
                                try {
                                    step(generator['throw'](value));
                                } catch (e) {
                                    reject(e);
                                }
                            }
                            function step(result) {
                                result.done
                                    ? resolve(result.value)
                                    : adopt(result.value).then(
                                          fulfilled,
                                          rejected
                                      );
                            }
                            step(
                                (generator = generator.apply(
                                    thisArg,
                                    _arguments || []
                                )).next()
                            );
                        });
                    };
                var __generator =
                    (undefined && undefined.__generator) ||
                    function (thisArg, body) {
                        var _ = {
                                label: 0,
                                sent: function () {
                                    if (t[0] & 1) throw t[1];
                                    return t[1];
                                },
                                trys: [],
                                ops: [],
                            },
                            f,
                            y,
                            t,
                            g;
                        return (
                            (g = {
                                next: verb(0),
                                throw: verb(1),
                                return: verb(2),
                            }),
                            typeof Symbol === 'function' &&
                                (g[Symbol.iterator] = function () {
                                    return this;
                                }),
                            g
                        );
                        function verb(n) {
                            return function (v) {
                                return step([n, v]);
                            };
                        }
                        function step(op) {
                            if (f)
                                throw new TypeError(
                                    'Generator is already executing.'
                                );
                            while (_)
                                try {
                                    if (
                                        ((f = 1),
                                        y &&
                                            (t =
                                                op[0] & 2
                                                    ? y['return']
                                                    : op[0]
                                                    ? y['throw'] ||
                                                      ((t = y['return']) &&
                                                          t.call(y),
                                                      0)
                                                    : y.next) &&
                                            !(t = t.call(y, op[1])).done)
                                    )
                                        return t;
                                    if (((y = 0), t)) op = [op[0] & 2, t.value];
                                    switch (op[0]) {
                                        case 0:
                                        case 1:
                                            t = op;
                                            break;
                                        case 4:
                                            _.label++;
                                            return {value: op[1], done: false};
                                        case 5:
                                            _.label++;
                                            y = op[1];
                                            op = [0];
                                            continue;
                                        case 7:
                                            op = _.ops.pop();
                                            _.trys.pop();
                                            continue;
                                        default:
                                            if (
                                                !((t = _.trys),
                                                (t =
                                                    t.length > 0 &&
                                                    t[t.length - 1])) &&
                                                (op[0] === 6 || op[0] === 2)
                                            ) {
                                                _ = 0;
                                                continue;
                                            }
                                            if (
                                                op[0] === 3 &&
                                                (!t ||
                                                    (op[1] > t[0] &&
                                                        op[1] < t[3]))
                                            ) {
                                                _.label = op[1];
                                                break;
                                            }
                                            if (op[0] === 6 && _.label < t[1]) {
                                                _.label = t[1];
                                                t = op;
                                                break;
                                            }
                                            if (t && _.label < t[2]) {
                                                _.label = t[2];
                                                _.ops.push(op);
                                                break;
                                            }
                                            if (t[2]) _.ops.pop();
                                            _.trys.pop();
                                            continue;
                                    }
                                    op = body.call(thisArg, _);
                                } catch (e) {
                                    op = [6, e];
                                    y = 0;
                                } finally {
                                    f = t = 0;
                                }
                            if (op[0] & 5) throw op[1];
                            return {value: op[0] ? op[1] : void 0, done: true};
                        }
                    };

                var wrapper = document.querySelector('.content-wrapper');
                var imageOrder = '0';
                var fullImage;
                var screenType = localStorage.getItem('screenType');
                function renderGallery() {
                    return __awaiter(this, void 0, void 0, function () {
                        var albumId,
                            photos,
                            _a,
                            albumsUrl,
                            galleryWrapper,
                            albumsArr,
                            galleryInfo,
                            galleryHeading,
                            photosArr,
                            modal_1,
                            closeModal,
                            modalContent_1,
                            nextImage,
                            previousImage,
                            _loop_1,
                            i,
                            images,
                            err_1;
                        var _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    albumId = ___WEBPACK_IMPORTED_MODULE_2__
                                        .state.id
                                        ? ___WEBPACK_IMPORTED_MODULE_2__.state
                                              .id
                                        : Number(
                                              localStorage.getItem('albumID')
                                          );
                                    if (
                                        !(
                                            Object.keys(
                                                ___WEBPACK_IMPORTED_MODULE_2__
                                                    .state.photos
                                            ).length !== 0
                                        )
                                    )
                                        return [3 /*break*/, 1];
                                    photos =
                                        ___WEBPACK_IMPORTED_MODULE_2__.state
                                            .photos;
                                    return [3 /*break*/, 3];
                                case 1:
                                    _b = {};
                                    _a = albumId;
                                    return [
                                        4 /*yield*/,
                                        (0,
                                        _getData__WEBPACK_IMPORTED_MODULE_3__.getData)(
                                            'https://jsonplaceholder.typicode.com/albums/'.concat(
                                                albumId,
                                                '/photos'
                                            )
                                        ),
                                    ];
                                case 2:
                                    photos = ((_b[_a] = _c.sent()), _b);
                                    _c.label = 3;
                                case 3:
                                    albumsUrl =
                                        'https://jsonplaceholder.typicode.com/albums/';
                                    _c.label = 4;
                                case 4:
                                    _c.trys.push([4, 6, , 7]);
                                    wrapper.innerHTML = '';
                                    galleryWrapper = (0,
                                    _createElement__WEBPACK_IMPORTED_MODULE_0__[
                                        'default'
                                    ])({
                                        tag: 'div',
                                        className: 'gallery__Wrapper',
                                    });
                                    wrapper.appendChild(galleryWrapper);
                                    return [
                                        4 /*yield*/,
                                        (0,
                                        _getData__WEBPACK_IMPORTED_MODULE_3__.getData)(
                                            albumsUrl
                                        ),
                                    ];
                                case 5:
                                    albumsArr = _c.sent();
                                    galleryInfo = (0,
                                    _createElement__WEBPACK_IMPORTED_MODULE_0__[
                                        'default'
                                    ])({
                                        tag: 'div',
                                        className: 'gallery__info',
                                    });
                                    galleryWrapper.appendChild(galleryInfo);
                                    galleryHeading = (0,
                                    _createElement__WEBPACK_IMPORTED_MODULE_0__[
                                        'default'
                                    ])({
                                        tag: 'h1',
                                        className: 'gallery__heading',
                                        value: ''.concat(
                                            albumsArr[albumId].title
                                        ),
                                    });
                                    galleryInfo.appendChild(galleryHeading);
                                    photosArr = photos[albumId];
                                    modal_1 = (0,
                                    _createElement__WEBPACK_IMPORTED_MODULE_0__[
                                        'default'
                                    ])({
                                        tag: 'div',
                                        className: 'modal',
                                    });
                                    closeModal = (0,
                                    _createElement__WEBPACK_IMPORTED_MODULE_0__[
                                        'default'
                                    ])({
                                        tag: 'span',
                                        className: 'close-modal',
                                        value: 'X',
                                    });
                                    modal_1.appendChild(closeModal);
                                    modalContent_1 = (0,
                                    _createElement__WEBPACK_IMPORTED_MODULE_0__[
                                        'default'
                                    ])({
                                        tag: 'div',
                                        className: 'modal-content',
                                    });
                                    modal_1.appendChild(modalContent_1);
                                    nextImage = (0,
                                    _createElement__WEBPACK_IMPORTED_MODULE_0__[
                                        'default'
                                    ])({
                                        tag: 'a',
                                        className: 'image-next',
                                        value: 'NEXT',
                                    });
                                    modal_1.appendChild(nextImage);
                                    nextImage.addEventListener(
                                        'click',
                                        function next() {
                                            if (
                                                Number(imageOrder) >=
                                                photos[albumId].length - 1
                                            ) {
                                                imageOrder = 0;
                                            }
                                            console.log(
                                                photos,
                                                albumId,
                                                imageOrder
                                            );
                                            fullImage = (0,
                                            _createElement__WEBPACK_IMPORTED_MODULE_0__[
                                                'default'
                                            ])({
                                                tag: 'img',
                                                className:
                                                    'gallery__image--selected',
                                                attribute: 'src',
                                                attrValue: ''.concat(
                                                    photos[albumId][
                                                        parseInt(imageOrder + 1)
                                                    ].url
                                                ),
                                            });
                                            modalContent_1.appendChild(
                                                fullImage
                                            );
                                            imageOrder =
                                                parseInt(imageOrder) + 1;
                                        }
                                    );
                                    previousImage = (0,
                                    _createElement__WEBPACK_IMPORTED_MODULE_0__[
                                        'default'
                                    ])({
                                        tag: 'a',
                                        className: 'image-previous',
                                        value: 'PREV',
                                    });
                                    modal_1.appendChild(previousImage);
                                    previousImage.addEventListener(
                                        'click',
                                        function next() {
                                            if (Number(imageOrder) <= 0) {
                                                imageOrder =
                                                    photos[albumId].length;
                                            }
                                            fullImage = (0,
                                            _createElement__WEBPACK_IMPORTED_MODULE_0__[
                                                'default'
                                            ])({
                                                tag: 'img',
                                                className:
                                                    'gallery__image--selected',
                                                attribute: 'src',
                                                attrValue: ''.concat(
                                                    photos[albumId][
                                                        imageOrder - 1
                                                    ].url
                                                ),
                                            });
                                            modalContent_1.appendChild(
                                                fullImage
                                            );
                                            imageOrder =
                                                parseInt(imageOrder) - 1;
                                        }
                                    );
                                    closeModal.addEventListener(
                                        'click',
                                        function () {
                                            modal_1.style.display = 'none';
                                            document.body.style.overflow =
                                                'auto';
                                            localStorage.setItem(
                                                'galleryMode',
                                                _enums__WEBPACK_IMPORTED_MODULE_4__
                                                    .GalleryMode.thumbnails
                                            );
                                        }
                                    );
                                    document.body.appendChild(modal_1);
                                    _loop_1 = function (i) {
                                        var imageContainer = (0,
                                        _createElement__WEBPACK_IMPORTED_MODULE_0__[
                                            'default'
                                        ])({
                                            tag: 'div',
                                            className:
                                                'gallery__image-container',
                                        });
                                        galleryWrapper.appendChild(
                                            imageContainer
                                        );
                                        var image = (0,
                                        _createElement__WEBPACK_IMPORTED_MODULE_0__[
                                            'default'
                                        ])({
                                            tag: 'img',
                                            className: 'gallery__image',
                                            id: String(photosArr[i].id),
                                            attribute: 'src',
                                            attrValue: photosArr[i].url,
                                        });
                                        image.dataset.order = i.toString();
                                        imageContainer.appendChild(image);
                                        image.addEventListener(
                                            'click',
                                            function () {
                                                imageOrder =
                                                    image.dataset.order;
                                                localStorage.setItem(
                                                    'fullImageUrl',
                                                    image.getAttribute('src')
                                                );
                                                (0,
                                                _renderFullImage__WEBPACK_IMPORTED_MODULE_5__[
                                                    'default'
                                                ])(
                                                    localStorage.getItem(
                                                        'fullImageUrl'
                                                    )
                                                );
                                            }
                                        );
                                    };
                                    for (i = 0; i < photosArr.length; i += 1) {
                                        _loop_1(i);
                                    }
                                    images =
                                        document.querySelectorAll(
                                            '.gallery__image'
                                        );
                                    (0,
                                    _createBtn__WEBPACK_IMPORTED_MODULE_1__.createBtn)();
                                    localStorage.setItem(
                                        'screenType',
                                        _enums__WEBPACK_IMPORTED_MODULE_4__
                                            .ScreenType.gallery
                                    );
                                    localStorage.setItem(
                                        'galleryMode',
                                        _enums__WEBPACK_IMPORTED_MODULE_4__
                                            .GalleryMode.thumbnails
                                    );
                                    return [3 /*break*/, 7];
                                case 6:
                                    err_1 = _c.sent();
                                    console.log(
                                        'The gallery wasnt created',
                                        err_1
                                    );
                                    return [3 /*break*/, 7];
                                case 7:
                                    return [2 /*return*/];
                            }
                        });
                    });
                }

                /***/
            },

        /***/ './src/setThumbnailSource.ts':
            /*!***********************************!*\
  !*** ./src/setThumbnailSource.ts ***!
  \***********************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ setThumbnailSource: () =>
                            /* binding */ setThumbnailSource,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(/*! ./getData */ './src/getData.ts');
                /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(/*! ./index */ './src/index.ts');
                var __awaiter =
                    (undefined && undefined.__awaiter) ||
                    function (thisArg, _arguments, P, generator) {
                        function adopt(value) {
                            return value instanceof P
                                ? value
                                : new P(function (resolve) {
                                      resolve(value);
                                  });
                        }
                        return new (P || (P = Promise))(function (
                            resolve,
                            reject
                        ) {
                            function fulfilled(value) {
                                try {
                                    step(generator.next(value));
                                } catch (e) {
                                    reject(e);
                                }
                            }
                            function rejected(value) {
                                try {
                                    step(generator['throw'](value));
                                } catch (e) {
                                    reject(e);
                                }
                            }
                            function step(result) {
                                result.done
                                    ? resolve(result.value)
                                    : adopt(result.value).then(
                                          fulfilled,
                                          rejected
                                      );
                            }
                            step(
                                (generator = generator.apply(
                                    thisArg,
                                    _arguments || []
                                )).next()
                            );
                        });
                    };
                var __generator =
                    (undefined && undefined.__generator) ||
                    function (thisArg, body) {
                        var _ = {
                                label: 0,
                                sent: function () {
                                    if (t[0] & 1) throw t[1];
                                    return t[1];
                                },
                                trys: [],
                                ops: [],
                            },
                            f,
                            y,
                            t,
                            g;
                        return (
                            (g = {
                                next: verb(0),
                                throw: verb(1),
                                return: verb(2),
                            }),
                            typeof Symbol === 'function' &&
                                (g[Symbol.iterator] = function () {
                                    return this;
                                }),
                            g
                        );
                        function verb(n) {
                            return function (v) {
                                return step([n, v]);
                            };
                        }
                        function step(op) {
                            if (f)
                                throw new TypeError(
                                    'Generator is already executing.'
                                );
                            while (_)
                                try {
                                    if (
                                        ((f = 1),
                                        y &&
                                            (t =
                                                op[0] & 2
                                                    ? y['return']
                                                    : op[0]
                                                    ? y['throw'] ||
                                                      ((t = y['return']) &&
                                                          t.call(y),
                                                      0)
                                                    : y.next) &&
                                            !(t = t.call(y, op[1])).done)
                                    )
                                        return t;
                                    if (((y = 0), t)) op = [op[0] & 2, t.value];
                                    switch (op[0]) {
                                        case 0:
                                        case 1:
                                            t = op;
                                            break;
                                        case 4:
                                            _.label++;
                                            return {value: op[1], done: false};
                                        case 5:
                                            _.label++;
                                            y = op[1];
                                            op = [0];
                                            continue;
                                        case 7:
                                            op = _.ops.pop();
                                            _.trys.pop();
                                            continue;
                                        default:
                                            if (
                                                !((t = _.trys),
                                                (t =
                                                    t.length > 0 &&
                                                    t[t.length - 1])) &&
                                                (op[0] === 6 || op[0] === 2)
                                            ) {
                                                _ = 0;
                                                continue;
                                            }
                                            if (
                                                op[0] === 3 &&
                                                (!t ||
                                                    (op[1] > t[0] &&
                                                        op[1] < t[3]))
                                            ) {
                                                _.label = op[1];
                                                break;
                                            }
                                            if (op[0] === 6 && _.label < t[1]) {
                                                _.label = t[1];
                                                t = op;
                                                break;
                                            }
                                            if (t && _.label < t[2]) {
                                                _.label = t[2];
                                                _.ops.push(op);
                                                break;
                                            }
                                            if (t[2]) _.ops.pop();
                                            _.trys.pop();
                                            continue;
                                    }
                                    op = body.call(thisArg, _);
                                } catch (e) {
                                    op = [6, e];
                                    y = 0;
                                } finally {
                                    f = t = 0;
                                }
                            if (op[0] & 5) throw op[1];
                            return {value: op[0] ? op[1] : void 0, done: true};
                        }
                    };

                function setThumbnailSource(albumId) {
                    return __awaiter(this, void 0, void 0, function () {
                        var photosArr, result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    return [
                                        4 /*yield*/,
                                        (0,
                                        _getData__WEBPACK_IMPORTED_MODULE_0__.getData)(
                                            'https://jsonplaceholder.typicode.com/albums/'.concat(
                                                albumId,
                                                '/photos'
                                            )
                                        ),
                                    ];
                                case 1:
                                    photosArr = _a.sent();
                                    result = photosArr[0].thumbnailUrl;
                                    _index__WEBPACK_IMPORTED_MODULE_1__.state.photos =
                                        {id: albumId, photos: photosArr};
                                    if (result !== undefined) {
                                        return [2 /*return*/, result];
                                    }
                                    return [2 /*return*/, ''];
                            }
                        });
                    });
                }

                /***/
            },
    },
    /******/ (__webpack_require__) => {
        // webpackRuntimeModules
        /******/ var __webpack_exec__ = (moduleId) =>
            __webpack_require__((__webpack_require__.s = moduleId));
        /******/ var __webpack_exports__ = __webpack_exec__('./src/index.ts');
        /******/
    },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLDZDQUE2QywyQkFBMkIsY0FBYyxlQUFlLEdBQUcsVUFBVSx5Q0FBeUMsMkJBQTJCLEdBQUcsc0JBQXNCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLHNCQUFzQixtQkFBbUIsNEJBQTRCLEdBQUcsc0JBQXNCLHVCQUF1QixHQUFHLHlCQUF5QixxQkFBcUIsd0JBQXdCLG9CQUFvQixHQUFHLDZCQUE2Qix3QkFBd0IsbUJBQW1CLHFCQUFxQixvQkFBb0IsR0FBRyx5QkFBeUIsa0JBQWtCLG9CQUFvQix1QkFBdUIsR0FBRyxZQUFZLGtCQUFrQiwyQkFBMkIsaUJBQWlCLGtCQUFrQixtQkFBbUIsd0JBQXdCLDRCQUE0Qix3QkFBd0IsR0FBRyx5QkFBeUIsa0JBQWtCLHdCQUF3Qix3QkFBd0IsR0FBRyxrQkFBa0Isa0JBQWtCLG1DQUFtQyx1QkFBdUIsc0JBQXNCLEdBQUcsZ0JBQWdCLGdCQUFnQixpQkFBaUIscUJBQXFCLHVCQUF1QixzQkFBc0IsdUJBQXVCLEdBQUcsa0RBQWtELGlCQUFpQixpQkFBaUIsd0JBQXdCLGlCQUFpQixzQkFBc0Isb0JBQW9CLHlCQUF5QixzQkFBc0Isd0JBQXdCLHNCQUFzQixpQ0FBaUMsa0NBQWtDLHFDQUFxQyxvQ0FBb0MsR0FBRyw0REFBNEQsd0JBQXdCLG9CQUFvQixHQUFHLG9CQUFvQixrQkFBa0IsNEJBQTRCLEdBQUcsdUJBQXVCLHFCQUFxQiwwQkFBMEIsb0JBQW9CLDhCQUE4QixHQUFHLHVCQUF1QixnQkFBZ0IsMEJBQTBCLHlCQUF5QixHQUFHLCtCQUErQiwwQkFBMEIsaUJBQWlCLG9CQUFvQixHQUFHLHFCQUFxQixnQkFBZ0IsaUJBQWlCLEdBQUcsNkJBQTZCLHVCQUF1QixhQUFhLGNBQWMsZUFBZSxvQkFBb0IscUJBQXFCLHFDQUFxQyxHQUFHLGlCQUFpQixtQkFBbUIsZ0JBQWdCLGlCQUFpQiwyQkFBMkIsR0FBRyxZQUFZLG9CQUFvQixXQUFXLFlBQVksZUFBZSxrQkFBa0IsZ0JBQWdCLGlCQUFpQix1QkFBdUIsbUJBQW1CLDRCQUE0QixHQUFHLGtCQUFrQix1QkFBdUIsY0FBYyxnQkFBZ0IsaUJBQWlCLHNCQUFzQixvQkFBb0IsR0FBRyw2Q0FBNkMsZ0JBQWdCLDBCQUEwQixvQkFBb0IsR0FBRyxtQ0FBbUMsdUJBQXVCLGFBQWEsZ0JBQWdCLHNCQUFzQixrQkFBa0IsaUJBQWlCLHNCQUFzQixvQkFBb0IsK0JBQStCLG9CQUFvQiwwQkFBMEIsc0JBQXNCLHNCQUFzQixHQUFHLGtFQUFrRSxhQUFhLCtCQUErQixHQUFHLDJIQUEySCx5Q0FBeUMsR0FBRyxPQUFPLGlGQUFpRixXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLFdBQVcsS0FBSyxVQUFVLFdBQVcsTUFBTSxXQUFXLE1BQU0sV0FBVywyQ0FBMkMsT0FBTyw2QkFBNkIsZ0JBQWdCLGlCQUFpQixHQUFHLFVBQVUseUNBQXlDLG9DQUFvQyxHQUFHLHNCQUFzQixvQkFBb0IsNkJBQTZCLDBCQUEwQix3QkFBd0IscUJBQXFCLHlDQUF5QyxHQUFHLHNCQUFzQix5QkFBeUIsR0FBRyx5QkFBeUIsdUJBQXVCLDBCQUEwQixzQkFBc0IsR0FBRyw2QkFBNkIsMEJBQTBCLDhCQUE4Qix1QkFBdUIsc0JBQXNCLEdBQUcseUJBQXlCLG9CQUFvQixzQkFBc0IseUJBQXlCLEdBQUcsWUFBWSxvQkFBb0IsNkJBQTZCLG1CQUFtQixvQkFBb0IscUJBQXFCLDBCQUEwQix5Q0FBeUMsMEJBQTBCLEdBQUcseUJBQXlCLG9CQUFvQiwwQkFBMEIsMEJBQTBCLEdBQUcsa0JBQWtCLG9CQUFvQixxQ0FBcUMseUJBQXlCLHdCQUF3QixHQUFHLGdCQUFnQixrQkFBa0IsbUJBQW1CLHVCQUF1Qix5QkFBeUIsd0JBQXdCLHlCQUF5QixHQUFHLGtEQUFrRCxtQkFBbUIsbUJBQW1CLDBCQUEwQiwrQkFBK0Isd0JBQXdCLHNCQUFzQiwyQkFBMkIsMENBQTBDLHNDQUFzQyx3QkFBd0IsbUNBQW1DLG9DQUFvQyx1Q0FBdUMsc0NBQXNDLGlCQUFpQiw4Q0FBOEMsMEJBQTBCLE9BQU8sR0FBRyxvQkFBb0Isb0JBQW9CLDhCQUE4QixHQUFHLHVCQUF1Qix1QkFBdUIsNEJBQTRCLHNCQUFzQixnQ0FBZ0MsR0FBRyx1QkFBdUIsa0JBQWtCLDRCQUE0QiwyQkFBMkIsR0FBRywrQkFBK0IsNEJBQTRCLG1CQUFtQixzQkFBc0IsR0FBRyxxQkFBcUIsa0JBQWtCLG1CQUFtQixxQkFBcUIsNkJBQTZCLG1CQUFtQixvQkFBb0IscUJBQXFCLDBCQUEwQiwyQkFBMkIsMkNBQTJDLE9BQU8sR0FBRyxpQkFBaUIscUJBQXFCLGtCQUFrQixtQkFBbUIsNkJBQTZCLEdBQUcsWUFBWSxzQkFBc0IsYUFBYSxjQUFjLGlCQUFpQixvQkFBb0Isa0JBQWtCLG1CQUFtQix5QkFBeUIscUJBQXFCLDhCQUE4QixHQUFHLGtCQUFrQix5QkFBeUIsZ0JBQWdCLGtCQUFrQixtQkFBbUIsd0JBQXdCLHNCQUFzQixHQUFHLDZDQUE2QyxrQkFBa0IsNEJBQTRCLHNCQUFzQixHQUFHLG1DQUFtQyx5QkFBeUIsZUFBZSxrQkFBa0Isd0JBQXdCLG9CQUFvQixtQkFBbUIsd0JBQXdCLHNCQUFzQixpQ0FBaUMsc0JBQXNCLDRCQUE0Qix3QkFBd0Isd0JBQXdCLEdBQUcsa0VBQWtFLGVBQWUsaUNBQWlDLEdBQUcsMkhBQTJILHlDQUF5QyxHQUFHLHFCQUFxQjtBQUNyd1I7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUE0STtBQUM1STtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDRIQUFPOzs7O0FBSXNGO0FBQzlHLE9BQU8saUVBQWUsNEhBQU8sSUFBSSxtSUFBYyxHQUFHLG1JQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2Y4QjtBQUNjO0FBRTVDLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNwRCxTQUFTLFNBQVM7SUFDckIsSUFBTSxTQUFTLEdBQUcsMERBQWEsQ0FBQztRQUM1QixHQUFHLEVBQUUsUUFBUTtRQUNiLFNBQVMsRUFBRSxtQkFBbUI7UUFDOUIsS0FBSyxFQUFFLFFBQVE7S0FDbEIsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvQixTQUFTLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1FBQ2hDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQXNCLGdEQUFZLENBQUUsQ0FBQyxDQUFDO1FBQ2xELGdEQUFZLEdBQUcsUUFBUSxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQXFCLGdEQUFZLENBQUUsQ0FBQyxDQUFDO0lBQ3JELENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDVEQsU0FBUyxhQUFhLENBQUMsS0FBeUI7SUFDNUMsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZDLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtRQUNiLE9BQU8sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztLQUNuQztJQUNELElBQUksS0FBSyxDQUFDLEVBQUUsRUFBRTtRQUNWLE9BQU8sQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztLQUN6QjtJQUNELElBQUksS0FBSyxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsU0FBUyxFQUFFO1FBQ3BDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDMUQ7SUFDRCxPQUFPLE9BQU8sQ0FBQztBQUNuQixDQUFDO0FBRUQsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJlO0FBSTVDLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUMzRCxJQUFNLHlCQUF5QixHQUFXLENBQUMsQ0FBQztBQUNyQyxTQUFlLGlCQUFpQixDQUFDLFlBQXdCOzs7O1lBQ3RELFdBQVcsR0FBRywwREFBYSxDQUFDO2dCQUM5QixHQUFHLEVBQUUsUUFBUTtnQkFDYixTQUFTLEVBQUUsd0JBQXdCO2dCQUNuQyxLQUFLLEVBQUUsV0FBVzthQUNyQixDQUFDLENBQUM7WUFDSCxXQUFXLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ3BELE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDakMsc0JBQU8sV0FBVyxFQUFDOzs7Q0FDdEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmRCxJQUFLLFVBSUo7QUFKRCxXQUFLLFVBQVU7SUFDWCwrQkFBaUI7SUFDakIsaUNBQW1CO0FBRXZCLENBQUMsRUFKSSxVQUFVLEtBQVYsVUFBVSxRQUlkO0FBRUQsSUFBSyxXQUdKO0FBSEQsV0FBSyxXQUFXO0lBQ1osd0NBQXlCO0lBQ3pCLHdDQUF5QjtBQUM3QixDQUFDLEVBSEksV0FBVyxLQUFYLFdBQVcsUUFHZjtBQUVnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWDFCLElBQU0sT0FBTyxHQUFHLFVBQU8sR0FBUTs7OztvQkFDckIscUJBQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQzs7Z0JBQXZCLElBQUksR0FBRyxTQUFnQjtnQkFDaEIscUJBQU0sSUFBSSxDQUFDLElBQUksRUFBRTs7Z0JBQXhCLElBQUksR0FBRyxTQUFpQjtnQkFDOUIsc0JBQU8sSUFBSSxFQUFDOzs7S0FDZixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pvQjtBQUN3QjtBQUNaO0FBQ1U7QUFDQTtBQUNZO0FBQ047QUFDRjtBQUVoRCxJQUFNLHlCQUF5QixHQUFXLENBQUMsQ0FBQyxDQUFDLHNDQUFzQztBQUNuRixJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7QUFFcEIsc0RBQXNEO0FBQ3RELElBQU0sVUFBVSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdEQsSUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUN4RCx1QkFBdUI7QUFFaEIsU0FBZSxVQUFVOzs7Ozs7b0JBQ3RCLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUM7b0JBQ2xELHFCQUFNLGlEQUFPLENBQzNCLDhEQUNJLHlCQUF5QixHQUFHLFdBQVcsR0FBRyxDQUFDLG1CQUUzQyx5QkFBeUIsR0FBRyxXQUFXOzRCQUN2Qyx5QkFBeUI7NEJBQ3pCLENBQUMsQ0FDSCxDQUNMOztvQkFSSyxTQUFTLEdBQUcsU0FRakI7d0NBQ1EsQ0FBQzs7Ozs7O29DQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29DQUN2QixLQUFLLEdBQUcsMERBQWEsQ0FBQzt3Q0FDeEIsR0FBRyxFQUFFLEtBQUs7d0NBQ1YsU0FBUyxFQUFFLE9BQU87d0NBQ2xCLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtxQ0FDakMsQ0FBQyxDQUFDO29DQUNILGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7b0NBQ2pDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7d0NBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQXNCLEtBQUssQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFDO3dDQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUF3QixLQUFLLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBQzt3Q0FDaEQsS0FBSyxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO3dDQUMzQixLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQzt3Q0FDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBdUIsS0FBSyxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUM7d0NBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQXFCLEtBQUssQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFDO29DQUNyRCxDQUFDLENBQUMsQ0FBQztvQ0FDZSwyREFBYTs7d0NBQzNCLEdBQUcsRUFBRSxLQUFLO3dDQUNWLFNBQVMsRUFBRSxvQkFBb0I7d0NBQy9CLFNBQVMsRUFBRSxLQUFLOztvQ0FDTCxxQkFBTSx1RUFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDOztvQ0FKbEQsU0FBUyxHQUFHLG1CQUlkLFlBQVMsR0FBRSxTQUF5QztpREFDdEQ7b0NBQ0YsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQ0FDdkIsU0FBUyxHQUFHLDBEQUFhLENBQUM7d0NBQzVCLEdBQUcsRUFBRSxLQUFLO3dDQUNWLFNBQVMsRUFBRSxhQUFhO3FDQUMzQixDQUFDLENBQUM7b0NBQ0gsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQ0FFdkIsT0FBTyxHQUFHLDBEQUFhLENBQUM7d0NBQzFCLEdBQUcsRUFBRSxJQUFJO3dDQUNULFNBQVMsRUFBRSxnQkFBZ0I7d0NBQzNCLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztxQ0FDNUIsQ0FBQyxDQUFDO29DQUNILFNBQVMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7b0NBQ3pCLEVBQUUsR0FBRywwREFBYSxDQUFDO3dDQUNyQixHQUFHLEVBQUUsR0FBRzt3Q0FDUixTQUFTLEVBQUUsV0FBVzt3Q0FDdEIsS0FBSyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7cUNBQzFDLENBQUMsQ0FBQztvQ0FDSCxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDOzs7OztvQkF4Q3JCLENBQUMsR0FBRyxDQUFDOzs7eUJBQUUsRUFBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNO2tEQUEzQixDQUFDOzs7OztvQkFBNEIsQ0FBQyxFQUFFOzs7b0JBMEN6QyxXQUFXLEVBQUUsQ0FBQzs7Ozs7Q0FDakI7QUFFRCxJQUFNLEtBQUssR0FBRztJQUNWLE9BQU8sRUFBRSxRQUFRO0lBQ2pCLEdBQUcsRUFBRSxJQUFjO0lBQ25CLE9BQU8sRUFBRSxFQUFFO0lBQ1gsSUFBSSxNQUFNLENBQUMsTUFBTTs7UUFDYixJQUFJLENBQUMsT0FBTyx5QkFBTyxJQUFJLENBQUMsT0FBTyxnQkFBRyxNQUFNLENBQUMsRUFBRSxJQUFHLE1BQU0sQ0FBQyxNQUFNLE1BQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ0QsSUFBSSxNQUFNO1FBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLE1BQU0sQ0FBQyxJQUFJO1FBQ1gsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsdUJBQXVCO1FBQ3ZCLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNwQiw2REFBYSxFQUFFLENBQUM7WUFDaEIsT0FBTztTQUNWO1FBQ0QsMkRBQVksRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFDRCxJQUFJLE1BQU07UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksRUFBRSxDQUFDLElBQUk7UUFDUCxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7Q0FDSixDQUFDO0FBQ0YsU0FBZSxVQUFVOzs7Ozt5QkFDcEIsV0FBVSxLQUFLLHFEQUFpQixHQUFoQyx3QkFBZ0M7b0JBQ3JDLDJEQUFZLEVBQUUsQ0FBQzs7O3lCQUNKLFdBQVUsS0FBSyxzREFBa0IsR0FBakMsd0JBQWlDO3lCQUNwQyxZQUFXLEtBQUssMERBQXNCLEdBQXRDLHdCQUFzQztvQkFDMUMscUJBQU0sNkRBQWEsRUFBRTs7b0JBQXJCLFNBQXFCLENBQUM7b0JBQ3RCLDREQUFlLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDOzs7b0JBRWxELDZEQUFhLEVBQUUsQ0FBQztvQkFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQzs7Ozs7O0NBRzFEO0FBRUQsVUFBVSxFQUFFLENBQUM7QUFFRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SHFCO0FBQ1E7QUFDWTtBQUN0QjtBQUNvQjtBQUNqQjtBQUVyQyxJQUFNLFNBQVMsR0FBRyw4Q0FBOEMsQ0FBQztBQUNqRSxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDM0QsSUFBTSx5QkFBeUIsR0FBVyxDQUFDLENBQUM7QUFDNUMsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ2QsU0FBZSxZQUFZOzs7Ozs7O29CQUVSLHFCQUFNLGlEQUFPLENBQUMsU0FBUyxDQUFDOztvQkFBcEMsU0FBUyxHQUFHLFNBQXdCO29CQUNwQyxRQUFRLEdBQUcsMERBQWEsQ0FBQzt3QkFDM0IsR0FBRyxFQUFFLEtBQUs7d0JBQ1YsU0FBUyxFQUFFLGlCQUFpQjtxQkFDL0IsQ0FBQyxDQUFDO29CQUNILE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3hCLFVBQVUsR0FBRywwREFBYSxDQUFDO3dCQUM3QixHQUFHLEVBQUUsSUFBSTt3QkFDVCxTQUFTLEVBQUUsb0JBQW9CO3dCQUMvQixLQUFLLEVBQUUsZUFBZTtxQkFDekIsQ0FBQyxDQUFDO29CQUNILFFBQVEsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQzNCLGVBQWUsR0FBRywwREFBYSxDQUFDO3dCQUNsQyxHQUFHLEVBQUUsR0FBRzt3QkFDUixTQUFTLEVBQUUsd0JBQXdCO3dCQUNuQyxLQUFLLEVBQUUsVUFBRyx5QkFBeUIsZ0RBQTZDO3FCQUNuRixDQUFDLENBQUM7b0JBQ0gsUUFBUSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDaEMsYUFBYSxHQUFHLDBEQUFhLENBQUM7d0JBQ2hDLEdBQUcsRUFBRSxLQUFLO3dCQUNWLFNBQVMsRUFBRSxvQkFBb0I7cUJBQ2xDLENBQUMsQ0FBQztvQkFDSCxPQUFPLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO3dDQUMxQixDQUFDOzs7Ozs7b0NBQ0EsS0FBSyxHQUFHLDBEQUFhLENBQUM7d0NBQ3hCLEdBQUcsRUFBRSxLQUFLO3dDQUNWLFNBQVMsRUFBRSxPQUFPO3dDQUNsQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7cUNBQ3JCLENBQUMsQ0FBQztvQ0FDSCxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO29DQUNmLDJEQUFhOzt3Q0FDM0IsR0FBRyxFQUFFLEtBQUs7d0NBQ1YsU0FBUyxFQUFFLG9CQUFvQjt3Q0FDL0IsU0FBUyxFQUFFLEtBQUs7O29DQUNMLHFCQUFNLHVFQUFrQixDQUFDLENBQUMsQ0FBQzs7b0NBSnBDLFNBQVMsR0FBRyxtQkFJZCxZQUFTLEdBQUUsU0FBMkI7aURBQ3hDO29DQUNGLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7b0NBQ3ZCLFNBQVMsR0FBRywwREFBYSxDQUFDO3dDQUM1QixHQUFHLEVBQUUsS0FBSzt3Q0FDVixTQUFTLEVBQUUsYUFBYTtxQ0FDM0IsQ0FBQyxDQUFDO29DQUNILEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7b0NBQ3ZCLE9BQU8sR0FBRywwREFBYSxDQUFDO3dDQUMxQixHQUFHLEVBQUUsSUFBSTt3Q0FDVCxTQUFTLEVBQUUsZ0JBQWdCO3dDQUMzQixLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7cUNBQzVCLENBQUMsQ0FBQztvQ0FDSCxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29DQUN6QixFQUFFLEdBQUcsMERBQWEsQ0FBQzt3Q0FDckIsR0FBRyxFQUFFLEdBQUc7d0NBQ1IsU0FBUyxFQUFFLFdBQVc7d0NBQ3RCLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtxQ0FDeEIsQ0FBQyxDQUFDO29DQUNILFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7b0NBRTFCLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7d0NBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQWdCLHVDQUFRLENBQUUsQ0FBQyxDQUFDO3dDQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUFnQixLQUFLLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBQzt3Q0FDeEMsdUNBQVEsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dDQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUFnQix1Q0FBUSxDQUFFLENBQUMsQ0FBQzt3Q0FDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUM7d0NBQ3hDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUM7d0NBQ3pDLDJDQUFZLEdBQUcsU0FBUyxDQUFDO29DQUU3QixDQUFDLENBQUMsQ0FBQzs7Ozs7b0JBekNFLENBQUMsR0FBRyxDQUFDOzs7eUJBQUUsRUFBQyxJQUFJLHlCQUF5QjtrREFBckMsQ0FBQzs7Ozs7b0JBQXNDLENBQUMsRUFBRTs7O29CQTJDbkQscUVBQWlCLENBQUMseUNBQVUsQ0FBQyxDQUFDO29CQUM5QixZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxxREFBaUIsQ0FBQzs7OztvQkFFckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxLQUFHLENBQUMsQ0FBQzs7Ozs7O0NBRTlDO0FBR2dDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGZTtBQUNKO0FBRTdCLFNBQVUsZUFBZSxDQUFFLFFBQVk7SUFDdEMsSUFBTSxLQUFLLEdBQWUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNsQixLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDOUIsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFDLFFBQVEsQ0FBQztJQUN0QyxJQUFNLFNBQVMsR0FBRywwREFBYSxDQUFDO1FBQzVCLEdBQUcsRUFBRSxLQUFLO1FBQ1YsU0FBUyxFQUFFLDBCQUEwQjtRQUNyQyxTQUFTLEVBQUUsS0FBSztRQUNoQixTQUFTLEVBQUUsVUFBRyxRQUFRLENBQUU7S0FDM0IsQ0FBQztJQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxJQUFNLFlBQVksR0FBZSxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDMUUsWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNwQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxzREFBa0IsQ0FBQztJQUN0RCxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSwwREFBc0IsQ0FBQztBQUMzRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkIyQztBQUNOO0FBQ2Q7QUFDVTtBQUNlO0FBQ0Q7QUFDaEQsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNELElBQUksVUFBVSxHQUFRLEdBQUcsQ0FBQztBQUMxQixJQUFJLFNBQWEsQ0FBQztBQUdsQixJQUFNLFVBQVUsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQy9DLFNBQWUsYUFBYTs7Ozs7OztvQkFDekIsT0FBTyxHQUFHLHVDQUFRLEVBQUMsd0NBQVEsRUFBQyxPQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO3lCQVN0RSxPQUFNLENBQUMsSUFBSSxDQUFDLDJDQUFZLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxHQUF0Qyx3QkFBc0M7b0JBQ3RDLE1BQU0sR0FBRywyQ0FBWTs7OztvQkFDTixZQUFPO29CQUFHLHFCQUFNLGlEQUFPLENBQUMsc0RBQStDLE9BQU8sWUFBUyxDQUFDOztvQkFBbkcsTUFBTSxJQUFJLFNBQVcsU0FBOEUsS0FBQzs7O29CQUV0RyxTQUFTLEdBQUcsOENBQThDLENBQUM7Ozs7b0JBRzdELE9BQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO29CQUNqQixjQUFjLEdBQUcsMERBQWEsQ0FBQzt3QkFDakMsR0FBRyxFQUFFLEtBQUs7d0JBQ1YsU0FBUyxFQUFFLGtCQUFrQjtxQkFDaEMsQ0FBQyxDQUFDO29CQUNILE9BQU8sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQ2xCLHFCQUFNLGlEQUFPLENBQUMsU0FBUyxDQUFDOztvQkFBcEMsU0FBUyxHQUFHLFNBQXdCO29CQUNwQyxXQUFXLEdBQUcsMERBQWEsQ0FBQzt3QkFDOUIsR0FBRyxFQUFFLEtBQUs7d0JBQ1YsU0FBUyxFQUFFLGVBQWU7cUJBQzdCLENBQUMsQ0FBQztvQkFDSCxjQUFjLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUNsQyxjQUFjLEdBQUcsMERBQWEsQ0FBQzt3QkFDakMsR0FBRyxFQUFFLElBQUk7d0JBQ1QsU0FBUyxFQUFFLGtCQUFrQjt3QkFDN0IsS0FBSyxFQUFFLFVBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBRTtxQkFDdkMsQ0FBQyxDQUFDO29CQUNILFdBQVcsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQ2xDLFNBQVMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzVCLFVBQVEsMERBQWEsQ0FBQzt3QkFDeEIsR0FBRyxFQUFFLEtBQUs7d0JBQ1YsU0FBUyxFQUFFLE9BQU87cUJBQ3JCLENBQUMsQ0FBQztvQkFFRyxVQUFVLEdBQUcsMERBQWEsQ0FBQzt3QkFDN0IsR0FBRyxFQUFFLE1BQU07d0JBQ1gsU0FBUyxFQUFFLGFBQWE7d0JBQ3hCLEtBQUssRUFBRSxHQUFHO3FCQUNiLENBQUMsQ0FBQztvQkFDSCxPQUFLLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUV4QixpQkFBZSwwREFBYSxDQUFDO3dCQUMvQixHQUFHLEVBQUUsS0FBSzt3QkFDVixTQUFTLEVBQUUsZUFBZTtxQkFDN0IsQ0FBQztvQkFDRixPQUFLLENBQUMsV0FBVyxDQUFDLGNBQVksQ0FBQztvQkFFekIsU0FBUyxHQUFHLDBEQUFhLENBQUM7d0JBQzVCLEdBQUcsRUFBRSxHQUFHO3dCQUNSLFNBQVMsRUFBRSxZQUFZO3dCQUN2QixLQUFLLEVBQUUsTUFBTTtxQkFDaEIsQ0FBQztvQkFDRixPQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUM3QixTQUFTLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFNBQVMsSUFBSTt3QkFDN0MsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7NEJBQ2xELFVBQVUsR0FBRyxDQUFDLENBQUM7eUJBQ2xCO3dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUM7d0JBQ3hDLFNBQVMsR0FBRywwREFBYSxDQUFDOzRCQUN0QixHQUFHLEVBQUUsS0FBSzs0QkFDVixTQUFTLEVBQUUsMEJBQTBCOzRCQUNyQyxTQUFTLEVBQUUsS0FBSzs0QkFDaEIsU0FBUyxFQUFFLFVBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUU7eUJBQ2hFLENBQUM7d0JBQ0YsY0FBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDcEMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzFDLENBQUMsQ0FBQztvQkFFSSxhQUFhLEdBQUcsMERBQWEsQ0FBQzt3QkFDaEMsR0FBRyxFQUFFLEdBQUc7d0JBQ1IsU0FBUyxFQUFFLGdCQUFnQjt3QkFDM0IsS0FBSyxFQUFFLE1BQU07cUJBQ2hCLENBQUM7b0JBQ0YsT0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDakMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxTQUFTLElBQUk7d0JBQ2hELElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTs0QkFDMUIsVUFBVSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUM7eUJBQ3ZDO3dCQUNELFNBQVMsR0FBRywwREFBYSxDQUFDOzRCQUN0QixHQUFHLEVBQUUsS0FBSzs0QkFDVixTQUFTLEVBQUUsMEJBQTBCOzRCQUNyQyxTQUFTLEVBQUUsS0FBSzs0QkFDaEIsU0FBUyxFQUFFLFVBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUU7eUJBQ3RELENBQUM7d0JBQ0YsY0FBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDcEMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzFDLENBQUMsQ0FBQztvQkFFRixVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO3dCQUNqQyxPQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7d0JBQzdCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBQyxNQUFNLENBQUM7d0JBQ3BDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLDBEQUFzQixDQUFDO29CQUMvRCxDQUFDLENBQUMsQ0FBQztvQkFDSCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFLLENBQUMsQ0FBQzt3Q0FDeEIsQ0FBQzt3QkFDTixJQUFNLGNBQWMsR0FBRywwREFBYSxDQUFDOzRCQUNqQyxHQUFHLEVBQUUsS0FBSzs0QkFDVixTQUFTLEVBQUUsMEJBQTBCO3lCQUN4QyxDQUFDLENBQUM7d0JBQ0gsY0FBYyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQzt3QkFDM0MsSUFBSSxLQUFLLEdBQUcsMERBQWEsQ0FBQzs0QkFDdEIsR0FBRyxFQUFFLEtBQUs7NEJBQ1YsU0FBUyxFQUFFLGdCQUFnQjs0QkFDM0IsRUFBRSxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDOzRCQUUzQixTQUFTLEVBQUUsS0FBSzs0QkFDaEIsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHO3lCQUM5QixDQUFDLENBQUM7d0JBQ0gsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO3dCQUNuQyxjQUFjLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUVsQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFOzRCQUM1QixVQUFVLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7NEJBQ2pDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs0QkFDaEUsNERBQWUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7d0JBQzFELENBQUMsQ0FBQyxDQUFDOztvQkFyQlAsS0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO2dDQUFuQyxDQUFDO3FCQXNCVDtvQkFDRyxNQUFNLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBQzFELHFEQUFTLEVBQUUsQ0FBQztvQkFDWixZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxzREFBa0IsQ0FBQztvQkFDdEQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsMERBQXNCLENBQUM7Ozs7b0JBRTNELE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsS0FBRyxDQUFDLENBQUM7Ozs7OztDQUVyRDtBQUVtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSmM7QUFDSjtBQUV2QixTQUFlLGtCQUFrQixDQUFDLE9BQWU7Ozs7O3dCQUNsQyxxQkFBTSxpREFBTyxDQUMzQixzREFBK0MsT0FBTyxZQUFTLENBQ2xFOztvQkFGSyxTQUFTLEdBQUcsU0FFakI7b0JBRUssTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7b0JBQ3pDLGdEQUFZLEdBQUcsRUFBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUMsQ0FBQztvQkFDaEQsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO3dCQUN0QixzQkFBTyxNQUFNLEVBQUM7cUJBQ2pCO29CQUNELHNCQUFPLEVBQUUsRUFBQzs7OztDQUNiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnVsbC1qcy1zdGFjay8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL2Z1bGwtanMtc3RhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Z1bGwtanMtc3RhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9mdWxsLWpzLXN0YWNrLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9mdWxsLWpzLXN0YWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Z1bGwtanMtc3RhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Z1bGwtanMtc3RhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZnVsbC1qcy1zdGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9mdWxsLWpzLXN0YWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZnVsbC1qcy1zdGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Z1bGwtanMtc3RhY2svLi9zcmMvY3JlYXRlQnRuLnRzIiwid2VicGFjazovL2Z1bGwtanMtc3RhY2svLi9zcmMvY3JlYXRlRWxlbWVudC50cyIsIndlYnBhY2s6Ly9mdWxsLWpzLXN0YWNrLy4vc3JjL2NyZWF0ZUxvYWRNb3JlQnRuLnRzIiwid2VicGFjazovL2Z1bGwtanMtc3RhY2svLi9zcmMvZW51bXMudHMiLCJ3ZWJwYWNrOi8vZnVsbC1qcy1zdGFjay8uL3NyYy9nZXREYXRhLnRzIiwid2VicGFjazovL2Z1bGwtanMtc3RhY2svLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnVsbC1qcy1zdGFjay8uL3NyYy9yZW5kZXJBbGJ1bXMudHMiLCJ3ZWJwYWNrOi8vZnVsbC1qcy1zdGFjay8uL3NyYy9yZW5kZXJGdWxsSW1hZ2UudHMiLCJ3ZWJwYWNrOi8vZnVsbC1qcy1zdGFjay8uL3NyYy9yZW5kZXJHYWxsZXJ5LnRzIiwid2VicGFjazovL2Z1bGwtanMtc3RhY2svLi9zcmMvc2V0VGh1bWJuYWlsU291cmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlZlcmRhbmFcXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLmNvbnRlbnQtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDE4NDRweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5hbGJ1bVBhZ2VfX2luZm8ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYWxidW1QYWdlX19oZWFkaW5nIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgZm9udC1zaXplOiAzN3B4O1xcbn1cXG5cXG4uYWxidW1QYWdlX19kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW4tYm90dG9tOiA1NnB4O1xcbiAgY29sb3I6ICM3OTc4Nzg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uYWxidW1QYWdlX193cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxufVxcblxcbi5hbGJ1bSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAzOTBweDtcXG4gIGhlaWdodDogMzM1cHg7XFxuICBtYXJnaW46IDAgMjNweDtcXG4gIG1hcmdpbi1ib3R0b206IDgzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5hbGJ1bV9fZmlyc3QtaW1hZ2Uge1xcbiAgaGVpZ2h0OiAyOTJweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uYWxidW1fX2luZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG5cXG4uYWxidW1fX0lEIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogc29saWQgMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uYWxidW1QYWdlX19sb2FkLWJ1dHRvbixcXG4uZ2FsbGVyeV9fYnRuLWJhY2sge1xcbiAgd2lkdGg6IDE0MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXG59XFxuLmFsYnVtUGFnZV9fbG9hZC1idXR0b246aG92ZXIsXFxuLmdhbGxlcnlfX2J0bi1iYWNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNjN2M3Yzc7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5nYWxsZXJ5X19pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmdhbGxlcnlfX2hlYWRpbmcge1xcbiAgbWFyZ2luLXRvcDogMzdweDtcXG4gIG1hcmdpbi1ib3R0b206IDkyLjVweDtcXG4gIGZvbnQtc2l6ZTogNjRweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5nYWxsZXJ5X19XcmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1yaWdodDogODcuNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiA4Ny41cHg7XFxufVxcblxcbi5nYWxsZXJ5X19pbWFnZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDQxN3B4O1xcbiAgcGFkZGluZzogMTIuNXB4O1xcbn1cXG5cXG4uZ2FsbGVyeV9faW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5nYWxsZXJ5X19pbWFnZS0tc2VsZWN0ZWQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB6LWluZGV4OiAyO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uYmFja2dyb3VuZCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmNsb3NlLW1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTBweDtcXG4gIHJpZ2h0OiAyNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDM1cHg7XFxufVxcblxcbi5jbG9zZS1tb2RhbDpob3ZlcixcXG4uY2xvc2UtbW9kYWw6Zm9jdXMge1xcbiAgY29sb3I6ICM5OTk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pbWFnZS1uZXh0LFxcbi5pbWFnZS1wcmV2aW91cyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogLTUwcHg7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuNnMgZWFzZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi8qIFBvc2l0aW9uIHRoZSBcXFwibmV4dCBidXR0b25cXFwiIHRvIHRoZSByaWdodCAqL1xcbi5pbWFnZS1uZXh0IHtcXG4gIHJpZ2h0OiAwO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XFxufVxcblxcbi8qIE9uIGhvdmVyLCBhZGQgYSBibGFjayBiYWNrZ3JvdW5kIGNvbG9yIHdpdGggYSBsaXR0bGUgYml0IHNlZS10aHJvdWdoICovXFxuLmltYWdlLXByZXZpb3VzOmhvdmVyLFxcbi5pbWFnZS1uZXh0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBREo7O0FBSUE7RUFDSSxrQ0FBQTtFQUNBLHNCQVZTO0FBU2I7O0FBSUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlBOztFQUVJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBQURKO0FBR0k7O0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FBQVI7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FBREo7O0FBSUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQURKO0FBR0k7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FBRFI7O0FBS0E7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUZKOztBQUtBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUtBOztFQUVJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFGSjs7QUFLQTs7RUFFSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUtBLDRDQUFBO0FBQ0E7RUFDSSxRQUFBO0VBQ0EsMEJBQUE7QUFGSjs7QUFLQSx5RUFBQTtBQUNBOztFQUVJLG9DQUFBO0FBRkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGJvZHktY29sb3I6ICNmZmY7XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnVmVyZGFuYScsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRib2R5LWNvbG9yO1xcbn1cXG5cXG4uY29udGVudC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiAxODQ0cHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUpO1xcbn1cXG5cXG4uYWxidW1QYWdlX19pbmZvIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYWxidW1QYWdlX19oZWFkaW5nIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgZm9udC1zaXplOiAzN3B4O1xcbn1cXG5cXG4uYWxidW1QYWdlX19kZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDU2cHg7XFxuICAgIGNvbG9yOiByZ2IoMTIxIDEyMCAxMjApO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5hbGJ1bVBhZ2VfX3dyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG59XFxuXFxuLmFsYnVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDM5MHB4O1xcbiAgICBoZWlnaHQ6IDMzNXB4O1xcbiAgICBtYXJnaW46IDAgMjNweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogODNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyNTUgMjU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmFsYnVtX19maXJzdC1pbWFnZSB7XFxuICAgIGhlaWdodDogMjkycHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5hbGJ1bV9faW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuXFxuLmFsYnVtX19JRCB7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmFsYnVtUGFnZV9fbG9hZC1idXR0b24sXFxuLmdhbGxlcnlfX2J0bi1iYWNrIHtcXG4gICAgd2lkdGg6IDE0MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIGNvbG9yOiByZ2IoMCAwIDAgLyAxMDAlKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUgMjU1IDI1NSAvIDEwMCUpO1xcbiAgICBib3JkZXItY29sb3I6IHJnYigwIDAgMCAvIDEwMCUpO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigxOTkgMTk5IDE5OSAvIDEwMCUpO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxufVxcblxcbi5nYWxsZXJ5X19pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5nYWxsZXJ5X19oZWFkaW5nIHtcXG4gICAgbWFyZ2luLXRvcDogMzdweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOTIuNXB4O1xcbiAgICBmb250LXNpemU6IDY0cHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5nYWxsZXJ5X19XcmFwcGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDg3LjVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA4Ny41cHg7XFxufVxcblxcbi5nYWxsZXJ5X19pbWFnZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA0MTdweDtcXG4gICAgcGFkZGluZzogMTIuNXB4O1xcbn1cXG5cXG4uZ2FsbGVyeV9faW1hZ2Uge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICAmLS1zZWxlY3RlZCB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIH1cXG59XFxuXFxuLmJhY2tncm91bmQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uY2xvc2UtbW9kYWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTBweDtcXG4gICAgcmlnaHQ6IDI1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG59XFxuXFxuLmNsb3NlLW1vZGFsOmhvdmVyLFxcbi5jbG9zZS1tb2RhbDpmb2N1cyB7XFxuICAgIGNvbG9yOiAjOTk5O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmltYWdlLW5leHQsXFxuLmltYWdlLXByZXZpb3VzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IC01MHB4O1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuNnMgZWFzZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4vKiBQb3NpdGlvbiB0aGUgXFxcIm5leHQgYnV0dG9uXFxcIiB0byB0aGUgcmlnaHQgKi9cXG4uaW1hZ2UtbmV4dCB7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcXG59XFxuXFxuLyogT24gaG92ZXIsIGFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3Igd2l0aCBhIGxpdHRsZSBiaXQgc2VlLXRocm91Z2ggKi9cXG4uaW1hZ2UtcHJldmlvdXM6aG92ZXIsXFxuLmltYWdlLW5leHQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyA4MCUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge3N0YXRlfSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC13cmFwcGVyJyk7XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCdG4oKSB7XHJcbiAgICBjb25zdCByZXR1cm5CdG4gPSBjcmVhdGVFbGVtZW50KHtcclxuICAgICAgICB0YWc6ICdidXR0b24nLFxyXG4gICAgICAgIGNsYXNzTmFtZTogJ2dhbGxlcnlfX2J0bi1iYWNrJyxcclxuICAgICAgICB2YWx1ZTogJ3JldHVybicsXHJcbiAgICB9KTtcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocmV0dXJuQnRuKTtcclxuICAgIHJldHVybkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICB3cmFwcGVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBUaGUgb2xkIHNjcmVlbiB3YXMgJHtzdGF0ZS5zY3JlZW59YCk7XHJcbiAgICAgICAgc3RhdGUuc2NyZWVuID0gJ2FsYnVtcyc7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFRoZSBuZXcgc2NyZWVuIGlzICR7c3RhdGUuc2NyZWVufWApO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmV0dXJuQnRuO1xyXG59XHJcbiIsImludGVyZmFjZSBDcmVhdGVFbGVtZW50UHJvcHMge1xuICAgIHRhZzogc3RyaW5nO1xuICAgIGNsYXNzTmFtZTogc3RyaW5nO1xuICAgIGlkPzogc3RyaW5nO1xuICAgIHZhbHVlPzogc3RyaW5nO1xuICAgIGF0dHJpYnV0ZT86IHN0cmluZztcbiAgICBhdHRyVmFsdWU/OiBhbnk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQocHJvcHM6IENyZWF0ZUVsZW1lbnRQcm9wcykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHByb3BzLnRhZyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHByb3BzLmNsYXNzTmFtZSk7XG4gICAgaWYgKHByb3BzLnZhbHVlKSB7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gcHJvcHMudmFsdWU7XG4gICAgfVxuICAgIGlmIChwcm9wcy5pZCkge1xuICAgICAgICBlbGVtZW50LmlkID0gcHJvcHMuaWQ7XG4gICAgfVxuICAgIGlmIChwcm9wcy5hdHRyaWJ1dGUgJiYgcHJvcHMuYXR0clZhbHVlKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHByb3BzLmF0dHJpYnV0ZSwgcHJvcHMuYXR0clZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZW1lbnQ7XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xyXG5pbXBvcnQge3JlbmRlckFsYnVtc30gZnJvbSAnLi9yZW5kZXJBbGJ1bXMnO1xyXG5pbXBvcnQge2dldERhdGF9IGZyb20gJy4vZ2V0RGF0YSc7XHJcblxyXG5jb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtd3JhcHBlcicpO1xyXG5jb25zdCBkZWZhdWx0QWxidW1zTnVtYmVyT25QYWdlOiBudW1iZXIgPSA4O1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTG9hZE1vcmVCdG4oY2xpY2tIYW5kbGVyOiAoKSA9PiB2b2lkKSB7XHJcbiAgICBjb25zdCBsb2FkTW9yZUJ0biA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgICAgIHRhZzogJ2J1dHRvbicsXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnYWxidW1QYWdlX19sb2FkLWJ1dHRvbicsXHJcbiAgICAgICAgdmFsdWU6ICdMb2FkIG1vcmUnLFxyXG4gICAgfSk7XHJcbiAgICBsb2FkTW9yZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGxvYWRNb3JlQnRuKTtcclxuICAgIHJldHVybiBsb2FkTW9yZUJ0bjtcclxufVxyXG4iLCJlbnVtIFNjcmVlblR5cGUge1xyXG4gICAgYWxidW1zID0gJ2FsYnVtcycsXHJcbiAgICBnYWxsZXJ5ID0gJ2dhbGxlcnknXHJcbiAgICBcclxufVxyXG5cclxuZW51bSBHYWxsZXJ5TW9kZSB7XHJcbiAgICB0aHVtYm5haWxzID0gJ3RodW1ibmFpbHMnLFxyXG4gICAgZnVsbHNjcmVlbiA9ICdmdWxsc2NyZWVuJ1xyXG59XHJcblxyXG5leHBvcnQge1NjcmVlblR5cGUsIEdhbGxlcnlNb2RlfTsiLCJleHBvcnQgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICh1cmw6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgZGF0YS5qc29uKCk7XHJcbiAgICByZXR1cm4ganNvbjtcclxufTtcclxuIiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IHtyZW5kZXJHYWxsZXJ5fSBmcm9tICcuL3JlbmRlckdhbGxlcnknO1xuaW1wb3J0IHtnZXREYXRhfSBmcm9tICcuL2dldERhdGEnO1xuaW1wb3J0IHtyZW5kZXJBbGJ1bXN9IGZyb20gJy4vcmVuZGVyQWxidW1zJztcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vY3JlYXRlRWxlbWVudCc7XG5pbXBvcnQge3NldFRodW1ibmFpbFNvdXJjZX0gZnJvbSAnLi9zZXRUaHVtYm5haWxTb3VyY2UnO1xuaW1wb3J0IHsgU2NyZWVuVHlwZSwgR2FsbGVyeU1vZGUgfSBmcm9tICcuL2VudW1zJztcbmltcG9ydCByZW5kZXJGdWxsSW1hZ2UgZnJvbSAnLi9yZW5kZXJGdWxsSW1hZ2UnO1xuXG5jb25zdCBkZWZhdWx0QWxidW1zTnVtYmVyT25QYWdlOiBudW1iZXIgPSA4OyAvLyDQv9C10YDQtdC40LzQtdC90L7QstCw0YLRjCDQsiBkZWZhdWx0QWxidW1zQW1vdW50XG5sZXQgcGFnZUNvdW50ZXIgPSAxO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyDQktGL0L3QtdGB0YLQuCDQsiDQvtGC0LTQtdC70YzQvdGD0Y4g0YTRg9C90LrRhtC40Y5cbmNvbnN0IHNjcmVlblR5cGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2NyZWVuVHlwZScpO1xuY29uc3QgZ2FsbGVyeU1vZGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FsbGVyeU1vZGUnKTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBvbkxvYWRNb3JlKCkge1xuICAgIGNvbnN0IGFsYnVtc1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxidW1QYWdlX193cmFwcGVyJyk7XG4gICAgY29uc3QgbmV3QWxidW1zID0gYXdhaXQgZ2V0RGF0YShcbiAgICAgICAgYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9hbGJ1bXMvP19zdGFydD0ke1xuICAgICAgICAgICAgZGVmYXVsdEFsYnVtc051bWJlck9uUGFnZSAqIHBhZ2VDb3VudGVyICsgMVxuICAgICAgICB9Jl9lbmQ9JHtcbiAgICAgICAgICAgIGRlZmF1bHRBbGJ1bXNOdW1iZXJPblBhZ2UgKiBwYWdlQ291bnRlciArXG4gICAgICAgICAgICBkZWZhdWx0QWxidW1zTnVtYmVyT25QYWdlICtcbiAgICAgICAgICAgIDFcbiAgICAgICAgfWBcbiAgICApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3QWxidW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld0FsYnVtc1tpXS5pZCk7XG4gICAgICAgIGNvbnN0IGFsYnVtID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnYWxidW0nLFxuICAgICAgICAgICAgaWQ6IG5ld0FsYnVtc1tpXS5pZC50b1N0cmluZygpLFxuICAgICAgICB9KTtcbiAgICAgICAgYWxidW1zV3JhcHBlci5hcHBlbmRDaGlsZChhbGJ1bSk7XG4gICAgICAgIGFsYnVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFRoZSBvbGQgc2NyZWVuIHdhcyAke3N0YXRlLnNjcmVlbn1gKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUaGUgb2xkIHN0YXRlIElEIHdhcyAke3N0YXRlLmlkfWApO1xuICAgICAgICAgICAgc3RhdGUuaWQgPSBuZXdBbGJ1bXNbaV0uaWQ7XG4gICAgICAgICAgICBzdGF0ZS5zY3JlZW4gPSAnZ2FsbGVyeSc7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgVGhlIG5ldyBzdGF0ZSBJRCBpcyAke3N0YXRlLmlkfWApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFRoZSBuZXcgc2NyZWVuIGlzICR7c3RhdGUuc2NyZWVufWApO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdGh1bWJuYWlsID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICB0YWc6ICdpbWcnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnYWxidW1fX2ZpcnN0LWltYWdlJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZTogJ3NyYycsXG4gICAgICAgICAgICBhdHRyVmFsdWU6IGF3YWl0IHNldFRodW1ibmFpbFNvdXJjZShuZXdBbGJ1bXNbaV0uaWQpLFxuICAgICAgICB9KTtcbiAgICAgICAgYWxidW0uYXBwZW5kQ2hpbGQodGh1bWJuYWlsKTtcbiAgICAgICAgY29uc3QgYWxidW1JbmZvID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnYWxidW1fX2luZm8nLFxuICAgICAgICB9KTtcbiAgICAgICAgYWxidW0uYXBwZW5kQ2hpbGQoYWxidW1JbmZvKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobmV3QWxidW1zW2ldKTtcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgdGFnOiAnaDMnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnYWxidW1fX2hlYWRpbmcnLFxuICAgICAgICAgICAgdmFsdWU6IG5ld0FsYnVtc1tpXS50aXRsZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGFsYnVtSW5mby5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICAgICAgY29uc3QgaWQgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIHRhZzogJ3AnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnYWxidW1fX0lEJyxcbiAgICAgICAgICAgIHZhbHVlOiAobmV3QWxidW1zW2ldLmlkIC0gMSkudG9TdHJpbmcoKSxcbiAgICAgICAgfSk7XG4gICAgICAgIGFsYnVtSW5mby5hcHBlbmRDaGlsZChpZCk7XG4gICAgfVxuICAgIHBhZ2VDb3VudGVyKys7XG59XG5cbmNvbnN0IHN0YXRlID0ge1xuICAgIF9zY3JlZW46ICdhbGJ1bXMnLFxuICAgIF9pZDogbnVsbCBhcyBudW1iZXIsXG4gICAgX3Bob3Rvczoge30sXG4gICAgc2V0IHBob3RvcyhhbGJ1bXMpIHtcbiAgICAgICAgdGhpcy5fcGhvdG9zID0gey4uLnRoaXMuX3Bob3RvcywgW2FsYnVtcy5pZF06IGFsYnVtcy5waG90b3N9O1xuICAgIH0sXG4gICAgZ2V0IHBob3RvcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bob3RvcztcbiAgICB9LFxuICAgIHNldCBzY3JlZW4odHlwZSkge1xuICAgICAgICB0aGlzLl9zY3JlZW4gPSB0eXBlO1xuICAgICAgICAvLyBib2R5LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ2dhbGxlcnknKSB7XG4gICAgICAgICAgICByZW5kZXJHYWxsZXJ5KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyQWxidW1zKCk7XG4gICAgfSxcbiAgICBnZXQgc2NyZWVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2NyZWVuO1xuICAgIH0sXG4gICAgc2V0IGlkKGRhdGEpIHtcbiAgICAgICAgdGhpcy5faWQgPSBOdW1iZXIoZGF0YSk7XG4gICAgfSxcbiAgICBnZXQgaWQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH0sXG59O1xuYXN5bmMgZnVuY3Rpb24gcmVuZGVyUGFnZSAoKSB7XG4gaWYgKHNjcmVlblR5cGUgPT09IFNjcmVlblR5cGUuYWxidW1zKSB7IFxucmVuZGVyQWxidW1zKCk7XG59IGVsc2UgaWYgKHNjcmVlblR5cGUgPT09IFNjcmVlblR5cGUuZ2FsbGVyeSl7XG4gICAgaWYgKGdhbGxlcnlNb2RlID09PSBHYWxsZXJ5TW9kZS5mdWxsc2NyZWVuKSB7XG4gICAgYXdhaXQgcmVuZGVyR2FsbGVyeSgpO1xuICAgIHJlbmRlckZ1bGxJbWFnZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZnVsbEltYWdlVXJsJykpO1xufSBlbHNlIHtcbiAgICAgICAgcmVuZGVyR2FsbGVyeSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRIRSBJTkNPUlJFQ1QgQ09SUkVDVCBUSElORyBXQVMgVVNFRFwiKVxuICAgIH1cbn1cbn1cblxucmVuZGVyUGFnZSgpO1xuXG5leHBvcnQge3N0YXRlfTtcbiIsImltcG9ydCB7c3RhdGUsIG9uTG9hZE1vcmV9IGZyb20gJy4nO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcbmltcG9ydCB7c2V0VGh1bWJuYWlsU291cmNlfSBmcm9tICcuL3NldFRodW1ibmFpbFNvdXJjZSc7XG5pbXBvcnQge2dldERhdGF9IGZyb20gJy4vZ2V0RGF0YSc7XG5pbXBvcnQge2NyZWF0ZUxvYWRNb3JlQnRufSBmcm9tICcuL2NyZWF0ZUxvYWRNb3JlQnRuJztcbmltcG9ydCB7IFNjcmVlblR5cGUgfSBmcm9tICcuL2VudW1zJztcblxuY29uc3QgYWxidW1zVXJsID0gJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9hbGJ1bXMvJztcbmNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC13cmFwcGVyJyk7XG5jb25zdCBkZWZhdWx0QWxidW1zTnVtYmVyT25QYWdlOiBudW1iZXIgPSA4O1xubGV0IGNob3NlbkFsYnVtID0gJyc7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuZGVyQWxidW1zKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFsYnVtc0FyciA9IGF3YWl0IGdldERhdGEoYWxidW1zVXJsKTtcbiAgICAgICAgY29uc3QgcGFnZUluZm8gPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdhbGJ1bVBhZ2VfX2luZm8nLFxuICAgICAgICB9KTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChwYWdlSW5mbyk7XG4gICAgICAgIGNvbnN0IGhlYWRpbmdCaWcgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIHRhZzogJ2gxJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2FsYnVtUGFnZV9faGVhZGluZycsXG4gICAgICAgICAgICB2YWx1ZTogJ0ltYWdlIEdhbGxlcnknLFxuICAgICAgICB9KTtcbiAgICAgICAgcGFnZUluZm8uYXBwZW5kQ2hpbGQoaGVhZGluZ0JpZyk7XG4gICAgICAgIGNvbnN0IHBhZ2VEZXNjcmlwdGlvbiA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgdGFnOiAncCcsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdhbGJ1bVBhZ2VfX2Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgIHZhbHVlOiBgJHtkZWZhdWx0QWxidW1zTnVtYmVyT25QYWdlfSBhbGJ1bXMgZmlsbGVkIHdpdGggdmFyaW91cyBwaG90b3MgZm9yIHlvdSFgLFxuICAgICAgICB9KTtcbiAgICAgICAgcGFnZUluZm8uYXBwZW5kQ2hpbGQocGFnZURlc2NyaXB0aW9uKTtcbiAgICAgICAgY29uc3QgYWxidW1zV3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2FsYnVtUGFnZV9fd3JhcHBlcicsXG4gICAgICAgIH0pO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGFsYnVtc1dyYXBwZXIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBkZWZhdWx0QWxidW1zTnVtYmVyT25QYWdlOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGFsYnVtID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdhbGJ1bScsXG4gICAgICAgICAgICAgICAgaWQ6IChpKS50b1N0cmluZygpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhbGJ1bXNXcmFwcGVyLmFwcGVuZENoaWxkKGFsYnVtKTtcbiAgICAgICAgICAgIGNvbnN0IHRodW1ibmFpbCA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIHRhZzogJ2ltZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnYWxidW1fX2ZpcnN0LWltYWdlJyxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6ICdzcmMnLFxuICAgICAgICAgICAgICAgIGF0dHJWYWx1ZTogYXdhaXQgc2V0VGh1bWJuYWlsU291cmNlKGkpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhbGJ1bS5hcHBlbmRDaGlsZCh0aHVtYm5haWwpO1xuICAgICAgICAgICAgY29uc3QgYWxidW1JbmZvID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdhbGJ1bV9faW5mbycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFsYnVtLmFwcGVuZENoaWxkKGFsYnVtSW5mbyk7XG4gICAgICAgICAgICBjb25zdCBoZWFkaW5nID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgdGFnOiAnaDMnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2FsYnVtX19oZWFkaW5nJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogYWxidW1zQXJyW2ldLnRpdGxlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhbGJ1bUluZm8uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIHRhZzogJ3AnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2FsYnVtX19JRCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6IChpKS50b1N0cmluZygpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhbGJ1bUluZm8uYXBwZW5kQ2hpbGQoaWQpO1xuXG4gICAgICAgICAgICBhbGJ1bS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgU3RhdGUgaWQgIzE6ICR7c3RhdGUuaWR9YCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEFsYnVtIGlkICMxOiAke2FsYnVtLmlkfWApO1xuICAgICAgICAgICAgICAgIHN0YXRlLmlkID0gTnVtYmVyKGFsYnVtLmlkKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgU3RhdGUgaWQgIzI6ICR7c3RhdGUuaWR9YCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEFsYnVtIGlkICMyOiAke2FsYnVtLmlkfWApO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGJ1bUlEJywgYWxidW0uaWQpXG4gICAgICAgICAgICAgICAgc3RhdGUuc2NyZWVuID0gJ2dhbGxlcnknO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY3JlYXRlTG9hZE1vcmVCdG4ob25Mb2FkTW9yZSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzY3JlZW5UeXBlJywgU2NyZWVuVHlwZS5hbGJ1bXMpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3InLCBlcnIpO1xuICAgIH1cbn1cblxuXG5leHBvcnQge2Nob3NlbkFsYnVtLCBTY3JlZW5UeXBlfTtcbiIsImltcG9ydCB7U2NyZWVuVHlwZSwgR2FsbGVyeU1vZGV9IGZyb20gJy4vZW51bXMnO1xyXG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgIGZ1bmN0aW9uIHJlbmRlckZ1bGxJbWFnZSAoaW1hZ2VVUkw6YW55KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb2RhbDpIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobW9kYWwpXHJcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZ1bGxJbWFnZSA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZzogJ2ltZycsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnZ2FsbGVyeV9faW1hZ2UtLXNlbGVjdGVkJyxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6ICdzcmMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJWYWx1ZTogYCR7aW1hZ2VVUkx9YFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZ1bGxJbWFnZS5nZXRBdHRyaWJ1dGUoJ3NyYycpKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9kYWxDb250ZW50OkhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRlbnQnKTtcclxuICAgICAgICAgICAgICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChmdWxsSW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NjcmVlblR5cGUnLCBTY3JlZW5UeXBlLmdhbGxlcnkpXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FsbGVyeU1vZGUnLCBHYWxsZXJ5TW9kZS5mdWxsc2NyZWVuKVxyXG59IiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcclxuaW1wb3J0IHtjcmVhdGVCdG59IGZyb20gJy4vY3JlYXRlQnRuJztcclxuaW1wb3J0IHtzdGF0ZX0gZnJvbSAnLic7XHJcbmltcG9ydCB7Z2V0RGF0YX0gZnJvbSAnLi9nZXREYXRhJztcclxuaW1wb3J0IHsgU2NyZWVuVHlwZSwgR2FsbGVyeU1vZGUgfSBmcm9tICcuL2VudW1zJ1xyXG5pbXBvcnQgcmVuZGVyRnVsbEltYWdlIGZyb20gJy4vcmVuZGVyRnVsbEltYWdlJztcclxuY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXdyYXBwZXInKTtcclxubGV0IGltYWdlT3JkZXI6IGFueSA9IFwiMFwiO1xyXG5sZXQgZnVsbEltYWdlOmFueTtcclxuXHJcblxyXG5jb25zdCBzY3JlZW5UeXBlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NjcmVlblR5cGUnKTtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmRlckdhbGxlcnkoKSB7XHJcbiAgICBjb25zdCBhbGJ1bUlkID0gc3RhdGUuaWQ/c3RhdGUuaWQ6TnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGJ1bUlEJykpO1xyXG4gICAgbGV0IHBob3Rvczoge1trZXk6bnVtYmVyXTp7XHJcbiAgICAgICAgYWxidW1JZDogbnVtYmVyLFxyXG4gICAgICAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgdGh1bWJuYWlsVXJsOiBzdHJpbmcsXHJcbiAgICAgICAgdGl0bGU6IHN0cmluZyxcclxuICAgICAgICB1cmw6IHN0cmluZ31bXX07XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKE9iamVjdC5rZXlzKHN0YXRlLnBob3RvcykubGVuZ3RoID09PSAwLCBPYmplY3Qua2V5cyhzdGF0ZS5waG90b3MpLmxlbmd0aCk7XHJcbiAgICBpZiAoT2JqZWN0LmtleXMoc3RhdGUucGhvdG9zKS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBwaG90b3MgPSBzdGF0ZS5waG90b3NcclxuICAgIH0gZWxzZSB7cGhvdG9zID0ge1thbGJ1bUlkXTogYXdhaXQgZ2V0RGF0YShgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL2FsYnVtcy8ke2FsYnVtSWR9L3Bob3Rvc2ApfVxyXG59XHJcbiAgICBjb25zdCBhbGJ1bXNVcmwgPSAnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL2FsYnVtcy8nO1xyXG4gXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgY29uc3QgZ2FsbGVyeVdyYXBwZXIgPSBjcmVhdGVFbGVtZW50KHtcclxuICAgICAgICAgICAgdGFnOiAnZGl2JyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnZ2FsbGVyeV9fV3JhcHBlcicsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChnYWxsZXJ5V3JhcHBlcik7XHJcbiAgICAgICAgY29uc3QgYWxidW1zQXJyID0gYXdhaXQgZ2V0RGF0YShhbGJ1bXNVcmwpO1xyXG4gICAgICAgIGNvbnN0IGdhbGxlcnlJbmZvID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2dhbGxlcnlfX2luZm8nLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdhbGxlcnlXcmFwcGVyLmFwcGVuZENoaWxkKGdhbGxlcnlJbmZvKTtcclxuICAgICAgICBjb25zdCBnYWxsZXJ5SGVhZGluZyA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgICAgICAgICB0YWc6ICdoMScsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2dhbGxlcnlfX2hlYWRpbmcnLFxyXG4gICAgICAgICAgICB2YWx1ZTogYCR7YWxidW1zQXJyW2FsYnVtSWRdLnRpdGxlfWAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2FsbGVyeUluZm8uYXBwZW5kQ2hpbGQoZ2FsbGVyeUhlYWRpbmcpO1xyXG4gICAgICAgIGNvbnN0IHBob3Rvc0FyciA9IHBob3Rvc1thbGJ1bUlkXTtcclxuICAgICAgICBjb25zdCBtb2RhbCA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdtb2RhbCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICBcclxuICAgICAgICBjb25zdCBjbG9zZU1vZGFsID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICAgICAgICAgIHRhZzogJ3NwYW4nLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdjbG9zZS1tb2RhbCcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnWCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoY2xvc2VNb2RhbCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdtb2RhbC1jb250ZW50JywgXHJcbiAgICAgICAgfSlcclxuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpXHJcblxyXG4gICAgICAgIGNvbnN0IG5leHRJbWFnZSA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgICAgICAgICB0YWc6ICdhJyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnaW1hZ2UtbmV4dCcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnTkVYVCdcclxuICAgICAgICB9KVxyXG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKG5leHRJbWFnZSk7XHJcbiAgICAgICAgbmV4dEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgICAgICAgICAgaWYgKE51bWJlcihpbWFnZU9yZGVyKSA+PSBwaG90b3NbYWxidW1JZF0ubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VPcmRlciA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2cocGhvdG9zLCBhbGJ1bUlkLCBpbWFnZU9yZGVyKVxyXG4gICAgICAgICAgICBmdWxsSW1hZ2UgPSBjcmVhdGVFbGVtZW50KHtcclxuICAgICAgICAgICAgICAgIHRhZzogJ2ltZycsXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdnYWxsZXJ5X19pbWFnZS0tc2VsZWN0ZWQnLFxyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlOiAnc3JjJyxcclxuICAgICAgICAgICAgICAgIGF0dHJWYWx1ZTogYCR7cGhvdG9zW2FsYnVtSWRdW3BhcnNlSW50KGltYWdlT3JkZXIgKyAxKV0udXJsfWBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGZ1bGxJbWFnZSk7XHJcbiAgICAgICAgICAgIGltYWdlT3JkZXIgPSBwYXJzZUludChpbWFnZU9yZGVyKSsgIDE7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNJbWFnZSA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgICAgICAgICB0YWc6ICdhJyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnaW1hZ2UtcHJldmlvdXMnLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ1BSRVYnXHJcbiAgICAgICAgfSlcclxuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChwcmV2aW91c0ltYWdlKTtcclxuICAgICAgICBwcmV2aW91c0ltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgICAgICAgICAgIGlmIChOdW1iZXIoaW1hZ2VPcmRlcikgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VPcmRlciA9IHBob3Rvc1thbGJ1bUlkXS5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVsbEltYWdlID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICAgICAgICAgICAgICB0YWc6ICdpbWcnLFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnZ2FsbGVyeV9faW1hZ2UtLXNlbGVjdGVkJyxcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTogJ3NyYycsXHJcbiAgICAgICAgICAgICAgICBhdHRyVmFsdWU6IGAke3Bob3Rvc1thbGJ1bUlkXVtpbWFnZU9yZGVyIC0gMV0udXJsfWBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGZ1bGxJbWFnZSk7XHJcbiAgICAgICAgICAgIGltYWdlT3JkZXIgPSBwYXJzZUludChpbWFnZU9yZGVyKSAtIDE7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdz1cImF1dG9cIjtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dhbGxlcnlNb2RlJywgR2FsbGVyeU1vZGUudGh1bWJuYWlscylcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBob3Rvc0Fyci5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2dhbGxlcnlfX2ltYWdlLWNvbnRhaW5lcicsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBnYWxsZXJ5V3JhcHBlci5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGxldCBpbWFnZSA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgICAgICAgICAgICAgdGFnOiAnaW1nJyxcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2dhbGxlcnlfX2ltYWdlJyxcclxuICAgICAgICAgICAgICAgIGlkOiBTdHJpbmcocGhvdG9zQXJyW2ldLmlkKSxcclxuXHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6ICdzcmMnLFxyXG4gICAgICAgICAgICAgICAgYXR0clZhbHVlOiBwaG90b3NBcnJbaV0udXJsLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaW1hZ2UuZGF0YXNldC5vcmRlciA9IGkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG5cclxuICAgICAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZU9yZGVyID0gaW1hZ2UuZGF0YXNldC5vcmRlcjtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmdWxsSW1hZ2VVcmwnLCBpbWFnZS5nZXRBdHRyaWJ1dGUoJ3NyYycpKTtcclxuICAgICAgICAgICAgICAgIHJlbmRlckZ1bGxJbWFnZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZnVsbEltYWdlVXJsJykpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYWxsZXJ5X19pbWFnZScpO1xyXG4gICAgICAgIGNyZWF0ZUJ0bigpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzY3JlZW5UeXBlJywgU2NyZWVuVHlwZS5nYWxsZXJ5KVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYWxsZXJ5TW9kZScsIEdhbGxlcnlNb2RlLnRodW1ibmFpbHMpXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGhlIGdhbGxlcnkgd2FzbnQgY3JlYXRlZCcsIGVycik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGltYWdlT3JkZXJ9IiwiaW1wb3J0IHtnZXREYXRhfSBmcm9tICcuL2dldERhdGEnO1xuaW1wb3J0IHtzdGF0ZX0gZnJvbSAnLi9pbmRleCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRUaHVtYm5haWxTb3VyY2UoYWxidW1JZDogbnVtYmVyKSB7XG4gICAgY29uc3QgcGhvdG9zQXJyID0gYXdhaXQgZ2V0RGF0YShcbiAgICAgICAgYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9hbGJ1bXMvJHthbGJ1bUlkfS9waG90b3NgXG4gICAgKTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IHBob3Rvc0FyclswXS50aHVtYm5haWxVcmw7XG4gICAgc3RhdGUucGhvdG9zID0ge2lkOiBhbGJ1bUlkLCBwaG90b3M6IHBob3Rvc0Fycn07XG4gICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHJldHVybiAnJztcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
