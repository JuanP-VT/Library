var MyLib;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! img/bg.webp */ "./src/img/bg.webp"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    box-sizing: border-box;\n    margin: 0px;\n    padding: 0px;\n    font-size: 18px;\n    font-family: 'Gideon Roman', cursive;\n    font-weight: 500;\n    color: whitesmoke;\n}\nhtml { \n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n  }\nlabel, input{\n    display: block;\n}\n#home{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n#homeTitle{\n    font-family: 'Rubik Moonrocks', cursive;\n    font-size: 2rem;\n    color: aquamarine;\n}\n.homebutton{\n    width: 50%;\n    background-color: rgba(28, 51, 45, 0.5);\n    font-size: 0.8rem;\n}\n#separator{\n    margin-top: 20px;\n}\ninput{\n    border-radius: 5px;\n    height: 25px;\n    outline: none;\n    padding: 5px;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.8);\n}\nform{\n    padding: 20px;\n\n}\nsmall{\n    font-size: 0.8rem;\n    opacity: 0;\n}\n.error{\n    border-color: red;\n    opacity: 1 !important;\n    color: red;\n}\n.success{\n    border: green;\n    opacity: 1 !important;\n    color: green;\n}\n\n\n.inputBox{\n    position: relative;\n}\n.checker{\nposition:  absolute;\ntop: 50%;\nright: 15px;\nopacity: 0;\n}\n#main{\n    position: relative;\n    display: flex;\n}\n#header{\n    position: absolute;\n    left: 50%;\n    font-family: 'Rubik Moonrocks', cursive;\n    font-size: 3rem;\n    color: white;\n    padding: 10px;\n}\nbutton{\n    margin-top: 10px;\n    padding: 5px;\n    border-radius: 5px;\n    outline: none;\n    background-color: rgb(19, 18, 18);\n    font-weight: 800;\n    transition: transform 300ms;\n    box-shadow: 2px 0px 0px 2px rgba(0, 0, 0, 0.5);\n}\nbutton:hover{\n    transform: scale(1.1);\n}\n#sidebar{\n    width: 15%;\n}\n#content{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 0.5fr));\n    width: 85%;\n    padding: 80px;\n    gap: 50px;\n}\n\n.card{\n    display: flex;\n    flex-direction: column;\n    border: 2px solid rgb(58, 57, 57);\n    height: 500px;\n    border-radius: 10px;\n    box-shadow: 5px 2px 3px 1px rgba(0, 0, 0, 0.5);\n    background-color: rgba(0, 0, 0, 0.8);\n\n\n}\n.cardHeader{\n    display: flex;\n    justify-content: flex-end;    height: 5%;\n    gap: 5px;\n}\n\n.icon{\n    height: 100%;\n    transition: transform 300ms;\n}\n.icon:hover{\ntransform: scale(1.1);\n}\n.imageContainer{\n    display: flex;\n    height: 75%;\n    border-top: 2px solid whitesmoke;\n    border-bottom: 2px solid whitesmoke;\n    padding: 15px;\n\n}\n.cover{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    border-radius: 10px;\n}\n.cardFooter{\n    height: 20%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\np{\n    display: flex;\n}\n.fa-circle-xmark{\ncolor: white\n;}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,eAAe;IACf,oCAAoC;IACpC,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,iFAA0D;IAC1D,8BAA8B;IAC9B,2BAA2B;IAC3B,yBAAyB;IACzB,sBAAsB;EACxB;AACF;IACI,cAAc;AAClB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,uCAAuC;IACvC,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,UAAU;IACV,uCAAuC;IACvC,iBAAiB;AACrB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,WAAW;IACX,oCAAoC;AACxC;AACA;IACI,aAAa;;AAEjB;AACA;IACI,iBAAiB;IACjB,UAAU;AACd;AACA;IACI,iBAAiB;IACjB,qBAAqB;IACrB,UAAU;AACd;AACA;IACI,aAAa;IACb,qBAAqB;IACrB,YAAY;AAChB;;;AAGA;IACI,kBAAkB;AACtB;AACA;AACA,mBAAmB;AACnB,QAAQ;AACR,WAAW;AACX,UAAU;AACV;AACA;IACI,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,SAAS;IACT,uCAAuC;IACvC,eAAe;IACf,YAAY;IACZ,aAAa;AACjB;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,iCAAiC;IACjC,gBAAgB;IAChB,2BAA2B;IAC3B,8CAA8C;AAClD;AACA;IACI,qBAAqB;AACzB;AACA;IACI,UAAU;AACd;AACA;IACI,aAAa;IACb,6DAA6D;IAC7D,UAAU;IACV,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iCAAiC;IACjC,aAAa;IACb,mBAAmB;IACnB,8CAA8C;IAC9C,oCAAoC;;;AAGxC;AACA;IACI,aAAa;IACb,yBAAyB,KAAK,UAAU;IACxC,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,2BAA2B;AAC/B;AACA;AACA,qBAAqB;AACrB;AACA;IACI,aAAa;IACb,WAAW;IACX,gCAAgC;IAChC,mCAAmC;IACnC,aAAa;;AAEjB;AACA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;AACA;AACA;AACA,CAAC","sourcesContent":["*{\n    box-sizing: border-box;\n    margin: 0px;\n    padding: 0px;\n    font-size: 18px;\n    font-family: 'Gideon Roman', cursive;\n    font-weight: 500;\n    color: whitesmoke;\n}\nhtml { \n    background: url(img/bg.webp) no-repeat center center fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n  }\nlabel, input{\n    display: block;\n}\n#home{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n#homeTitle{\n    font-family: 'Rubik Moonrocks', cursive;\n    font-size: 2rem;\n    color: aquamarine;\n}\n.homebutton{\n    width: 50%;\n    background-color: rgba(28, 51, 45, 0.5);\n    font-size: 0.8rem;\n}\n#separator{\n    margin-top: 20px;\n}\ninput{\n    border-radius: 5px;\n    height: 25px;\n    outline: none;\n    padding: 5px;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.8);\n}\nform{\n    padding: 20px;\n\n}\nsmall{\n    font-size: 0.8rem;\n    opacity: 0;\n}\n.error{\n    border-color: red;\n    opacity: 1 !important;\n    color: red;\n}\n.success{\n    border: green;\n    opacity: 1 !important;\n    color: green;\n}\n\n\n.inputBox{\n    position: relative;\n}\n.checker{\nposition:  absolute;\ntop: 50%;\nright: 15px;\nopacity: 0;\n}\n#main{\n    position: relative;\n    display: flex;\n}\n#header{\n    position: absolute;\n    left: 50%;\n    font-family: 'Rubik Moonrocks', cursive;\n    font-size: 3rem;\n    color: white;\n    padding: 10px;\n}\nbutton{\n    margin-top: 10px;\n    padding: 5px;\n    border-radius: 5px;\n    outline: none;\n    background-color: rgb(19, 18, 18);\n    font-weight: 800;\n    transition: transform 300ms;\n    box-shadow: 2px 0px 0px 2px rgba(0, 0, 0, 0.5);\n}\nbutton:hover{\n    transform: scale(1.1);\n}\n#sidebar{\n    width: 15%;\n}\n#content{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 0.5fr));\n    width: 85%;\n    padding: 80px;\n    gap: 50px;\n}\n\n.card{\n    display: flex;\n    flex-direction: column;\n    border: 2px solid rgb(58, 57, 57);\n    height: 500px;\n    border-radius: 10px;\n    box-shadow: 5px 2px 3px 1px rgba(0, 0, 0, 0.5);\n    background-color: rgba(0, 0, 0, 0.8);\n\n\n}\n.cardHeader{\n    display: flex;\n    justify-content: flex-end;    height: 5%;\n    gap: 5px;\n}\n\n.icon{\n    height: 100%;\n    transition: transform 300ms;\n}\n.icon:hover{\ntransform: scale(1.1);\n}\n.imageContainer{\n    display: flex;\n    height: 75%;\n    border-top: 2px solid whitesmoke;\n    border-bottom: 2px solid whitesmoke;\n    padding: 15px;\n\n}\n.cover{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    border-radius: 10px;\n}\n.cardFooter{\n    height: 20%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\np{\n    display: flex;\n}\n.fa-circle-xmark{\ncolor: white\n;}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/addEventListenerToCard.js":
/*!***************************************!*\
  !*** ./src/addEventListenerToCard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _changeReadStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeReadStatus */ "./src/changeReadStatus.js");
/* harmony import */ var _deleteBook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteBook */ "./src/deleteBook.js");
/* eslint-disable import/no-cycle */



function addEventListenerToCard(mode) {
  console.log(mode);

  const eyeIcons = [...document.querySelectorAll('.eye')];
  eyeIcons.forEach((element) => {
    element.addEventListener('click', _changeReadStatus__WEBPACK_IMPORTED_MODULE_0__["default"]);
  });
  const deleteIcons = [...document.querySelectorAll('.delete')];
  deleteIcons.forEach((element) => {
    element.addEventListener('click', _deleteBook__WEBPACK_IMPORTED_MODULE_1__["default"]);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addEventListenerToCard);


/***/ }),

/***/ "./src/bookFactory.js":
/*!****************************!*\
  !*** ./src/bookFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const bookFactory = (name, author, pages, src, id, read) => ({
  name,
  author,
  pages,
  src,
  id,
  read,

});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bookFactory);


/***/ }),

/***/ "./src/captureInput.js":
/*!*****************************!*\
  !*** ./src/captureInput.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bookFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookFactory */ "./src/bookFactory.js");
/* harmony import */ var _displayBooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayBooks */ "./src/displayBooks.js");
/* harmony import */ var _resetForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetForm */ "./src/resetForm.js");
/* harmony import */ var _saveToLocalStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saveToLocalStorage */ "./src/saveToLocalStorage.js");
/* harmony import */ var _setErrorFor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setErrorFor */ "./src/setErrorFor.js");
/* harmony import */ var _setSuccesFor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setSuccesFor */ "./src/setSuccesFor.js");







function captureInput(e) {
  e.preventDefault();
  // Read user input
  const bookName = document.querySelector('#bookName');
  const bookAuthor = document.querySelector('#bookAuthor');
  const bookPages = document.querySelector('#bookPages').value;
  const imgSrc = document.querySelector('#imgUrl').value;
  const uniqueId = Date.now();
  // Validation
  if (bookName.value === '') {
    (0,_setErrorFor__WEBPACK_IMPORTED_MODULE_4__["default"])(bookName, 'Please Submit A Name');
    return;
  } if (bookName.value !== '') {
    (0,_setSuccesFor__WEBPACK_IMPORTED_MODULE_5__["default"])(bookName);
  }
  if (bookAuthor.value === '') {
    (0,_setErrorFor__WEBPACK_IMPORTED_MODULE_4__["default"])(bookAuthor, 'Please Submit Books Author');
    return;
  }
  // Create Object to store user's input
  const book = (0,_bookFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(bookName.value, bookAuthor.value, bookPages, imgSrc, uniqueId, false);
  console.log(book);
  // Save book in local storage

  (0,_saveToLocalStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(book);
  (0,_resetForm__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_displayBooks__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (captureInput);


/***/ }),

/***/ "./src/changeReadStatus.js":
/*!*********************************!*\
  !*** ./src/changeReadStatus.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _displayBooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayBooks */ "./src/displayBooks.js");
/* harmony import */ var _displayFinishedBooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayFinishedBooks */ "./src/displayFinishedBooks.js");
/* harmony import */ var _displayUnfinishedBooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayUnfinishedBooks */ "./src/displayUnfinishedBooks.js");
/* eslint-disable import/no-cycle */




function changeViewStatus(mode) {
  const btnMode = mode.target.getAttribute('data-mode');
  console.log(btnMode);
  const dataReference = this.getAttribute('data-reference');
  console.log(dataReference);
  // Get local storage item
  const myBooks = JSON.parse(localStorage.getItem('StoredBooks'));
  console.log(myBooks);
  // eslint-disable-next-line eqeqeq
  const targetIndex = myBooks.findIndex((em) => em.id == dataReference);
  // Change target's read status
  if (myBooks[targetIndex].read === true) {
    myBooks[targetIndex].read = false;
  } else if (myBooks[targetIndex].read === false) {
    myBooks[targetIndex].read = true;
  }
  console.log(myBooks[targetIndex].read);
  localStorage.setItem('StoredBooks', JSON.stringify(myBooks));
  if (btnMode === '' || btnMode === null || btnMode === undefined) {
    (0,_displayBooks__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }
  if (btnMode === 'finished') {
    (0,_displayFinishedBooks__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }
  if (btnMode === 'unfinished') {
    (0,_displayUnfinishedBooks__WEBPACK_IMPORTED_MODULE_2__["default"])();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeViewStatus);


/***/ }),

/***/ "./src/clearScreen.js":
/*!****************************!*\
  !*** ./src/clearScreen.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function clearScreen() {
  const content = document.querySelector('#content');
  if (content.firstChild) {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearScreen);


/***/ }),

/***/ "./src/createBookCard.js":
/*!*******************************!*\
  !*** ./src/createBookCard.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domContent */ "./src/domContent.js");


function createBookCard(element, mode) {
  // Change text content of the card
  _domContent__WEBPACK_IMPORTED_MODULE_0__.deleteImg.setAttribute('data-reference', element.id);
  _domContent__WEBPACK_IMPORTED_MODULE_0__.eye.setAttribute('data-reference', element.id);
  _domContent__WEBPACK_IMPORTED_MODULE_0__.eye.setAttribute('alt', 'Switch Books Completion Status');
  _domContent__WEBPACK_IMPORTED_MODULE_0__.$bookName.textContent = element.name;
  _domContent__WEBPACK_IMPORTED_MODULE_0__.$bookAuthor.textContent = element.author;
  _domContent__WEBPACK_IMPORTED_MODULE_0__.$bookPages.textContent = element.pages;
  _domContent__WEBPACK_IMPORTED_MODULE_0__.imageContainer.setAttribute('data-reference', element.id);
  if (element.read === false) {
    _domContent__WEBPACK_IMPORTED_MODULE_0__.$bookRead.textContent = 'Not Read Yet';
  } else if (element.read === true) {
    _domContent__WEBPACK_IMPORTED_MODULE_0__.$bookRead.textContent = 'Book Completed';
  }
  if (mode === null || mode === '' || mode === undefined) {
    _domContent__WEBPACK_IMPORTED_MODULE_0__.eye.setAttribute('data-mode', '');
    _domContent__WEBPACK_IMPORTED_MODULE_0__.deleteImg.setAttribute('data-mode', '');
  }
  if (mode === 'finished') {
    _domContent__WEBPACK_IMPORTED_MODULE_0__.eye.setAttribute('data-mode', 'finished');
    _domContent__WEBPACK_IMPORTED_MODULE_0__.deleteImg.setAttribute('data-mode', 'finished');
  }
  if (mode === 'unfinished') {
    _domContent__WEBPACK_IMPORTED_MODULE_0__.eye.setAttribute('data-mode', 'unfinished');
    _domContent__WEBPACK_IMPORTED_MODULE_0__.deleteImg.setAttribute('data-mode', 'unfinished');
  }
  return _domContent__WEBPACK_IMPORTED_MODULE_0__.card;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBookCard);


/***/ }),

/***/ "./src/deleteBook.js":
/*!***************************!*\
  !*** ./src/deleteBook.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _displayBooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayBooks */ "./src/displayBooks.js");
/* harmony import */ var _displayFinishedBooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayFinishedBooks */ "./src/displayFinishedBooks.js");
/* harmony import */ var _displayUnfinishedBooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayUnfinishedBooks */ "./src/displayUnfinishedBooks.js");
/* eslint-disable import/no-cycle */




function deleteBook() {
  const mode = this.getAttribute('data-mode');
  console.log(mode);
  const dataReference = this.getAttribute('data-reference');
  // Get local storage item
  const myBooks = JSON.parse(localStorage.getItem('StoredBooks'));
  // eslint-disable-next-line eqeqeq
  const targetIndex = myBooks.findIndex((em) => em.id == dataReference);
  // Delete target item
  myBooks.splice(targetIndex, 1);
  localStorage.setItem('StoredBooks', JSON.stringify(myBooks));
  if (mode === '' || mode === null || mode === undefined) {
    (0,_displayBooks__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }
  if (mode === 'finished') {
    (0,_displayFinishedBooks__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }
  if (mode === 'unfinished') {
    (0,_displayUnfinishedBooks__WEBPACK_IMPORTED_MODULE_2__["default"])();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteBook);


/***/ }),

/***/ "./src/displayBooks.js":
/*!*****************************!*\
  !*** ./src/displayBooks.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addEventListenerToCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addEventListenerToCard */ "./src/addEventListenerToCard.js");
/* harmony import */ var _clearScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearScreen */ "./src/clearScreen.js");
/* harmony import */ var _createBookCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createBookCard */ "./src/createBookCard.js");
/* harmony import */ var _loadBookcardImages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadBookcardImages */ "./src/loadBookcardImages.js");
/* eslint-disable eqeqeq */
// eslint-disable-next-line import/no-cycle





function displayBooks() {
  (0,_clearScreen__WEBPACK_IMPORTED_MODULE_1__["default"])();
  // Get local storage key and append each book to a DOM element
  // If local storage is empty
  if (localStorage.getItem('StoredBooks') == '') {
    return;
  }
  const content = document.querySelector('#content');
  const myStorage = JSON.parse(localStorage.getItem('StoredBooks'));
  myStorage.forEach((element) => {
    const bookCard = (0,_createBookCard__WEBPACK_IMPORTED_MODULE_2__["default"])(element);
    content.appendChild(bookCard.cloneNode(true));
  });
  (0,_addEventListenerToCard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_loadBookcardImages__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayBooks);


/***/ }),

/***/ "./src/displayDemoPage.js":
/*!********************************!*\
  !*** ./src/displayDemoPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clearScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearScreen */ "./src/clearScreen.js");
/* harmony import */ var _createBookCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createBookCard */ "./src/createBookCard.js");
/* harmony import */ var _loadBookcardImages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadBookcardImages */ "./src/loadBookcardImages.js");
/* harmony import */ var _demoPage_JSON__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demoPage.JSON */ "./src/demoPage.JSON");
/* eslint-disable eqeqeq */





function displayDemoPage() {
  (0,_clearScreen__WEBPACK_IMPORTED_MODULE_0__["default"])();
  localStorage.setItem('demoPage', JSON.stringify(_demoPage_JSON__WEBPACK_IMPORTED_MODULE_3__));
  // Append each book to a DOM element
  const content = document.querySelector('#content');
  const myStorage = JSON.parse(localStorage.getItem('demoPage'));
  myStorage.forEach((element) => {
    const bookCard = (0,_createBookCard__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
    content.appendChild(bookCard.cloneNode(true));
  });
  (0,_loadBookcardImages__WEBPACK_IMPORTED_MODULE_2__["default"])('demo');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayDemoPage);


/***/ }),

/***/ "./src/displayFinishedBooks.js":
/*!*************************************!*\
  !*** ./src/displayFinishedBooks.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addEventListenerToCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addEventListenerToCard */ "./src/addEventListenerToCard.js");
/* harmony import */ var _loadBookcardImages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadBookcardImages */ "./src/loadBookcardImages.js");
/* harmony import */ var _clearScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearScreen */ "./src/clearScreen.js");
/* harmony import */ var _createBookCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createBookCard */ "./src/createBookCard.js");
/* eslint-disable import/no-cycle */





function displayFinishedBooks() {
  (0,_clearScreen__WEBPACK_IMPORTED_MODULE_2__["default"])();
  // Get local storage key and append each book to a DOM element
  // If local storage is empty
  if (localStorage.getItem('StoredBooks') === '') {
    return;
  }
  const content = document.querySelector('#content');
  const myStorage = JSON.parse(localStorage.getItem('StoredBooks'));
  myStorage.forEach((element) => {
    if (element.read === true) {
      const bookCard = (0,_createBookCard__WEBPACK_IMPORTED_MODULE_3__["default"])(element, 'finished');
      content.appendChild(bookCard.cloneNode(true));
    }
  });
  (0,_addEventListenerToCard__WEBPACK_IMPORTED_MODULE_0__["default"])('finished');
  (0,_loadBookcardImages__WEBPACK_IMPORTED_MODULE_1__["default"])();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayFinishedBooks);


/***/ }),

/***/ "./src/displayUnfinishedBooks.js":
/*!***************************************!*\
  !*** ./src/displayUnfinishedBooks.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addEventListenerToCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addEventListenerToCard */ "./src/addEventListenerToCard.js");
/* harmony import */ var _loadBookcardImages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadBookcardImages */ "./src/loadBookcardImages.js");
/* harmony import */ var _clearScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearScreen */ "./src/clearScreen.js");
/* harmony import */ var _createBookCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createBookCard */ "./src/createBookCard.js");
/* eslint-disable import/no-cycle */





function displayUnfinishedBooks() {
  (0,_clearScreen__WEBPACK_IMPORTED_MODULE_2__["default"])();
  // Get local storage key and append each book to a DOM element
  // If local storage is empty
  if (localStorage.getItem('StoredBooks') === '') {
    return;
  }
  const content = document.querySelector('#content');
  const myStorage = JSON.parse(localStorage.getItem('StoredBooks'));
  myStorage.forEach((element) => {
    if (element.read === false) {
      const bookCard = (0,_createBookCard__WEBPACK_IMPORTED_MODULE_3__["default"])(element, 'unfinished');
      content.appendChild(bookCard.cloneNode(true));
    }
  });
  (0,_addEventListenerToCard__WEBPACK_IMPORTED_MODULE_0__["default"])('unfinished');
  (0,_loadBookcardImages__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayUnfinishedBooks);


/***/ }),

/***/ "./src/domContent.js":
/*!***************************!*\
  !*** ./src/domContent.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$bookAuthor": () => (/* binding */ $bookAuthor),
/* harmony export */   "$bookName": () => (/* binding */ $bookName),
/* harmony export */   "$bookPages": () => (/* binding */ $bookPages),
/* harmony export */   "$bookRead": () => (/* binding */ $bookRead),
/* harmony export */   "card": () => (/* binding */ card),
/* harmony export */   "deleteImg": () => (/* binding */ deleteImg),
/* harmony export */   "eye": () => (/* binding */ eye),
/* harmony export */   "imageContainer": () => (/* binding */ imageContainer)
/* harmony export */ });
/* harmony import */ var _img_eye_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/eye.png */ "./src/img/eye.png");
/* harmony import */ var _img_delete_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/delete.png */ "./src/img/delete.png");


// Book card
const card = document.createElement('div');
card.classList.add('card');
// Header
const header = document.createElement('div');
header.classList.add('cardHeader');
const eye = new Image();
eye.src = _img_eye_png__WEBPACK_IMPORTED_MODULE_0__;
eye.classList.add('icon');
eye.classList.add('eye');
const deleteImg = new Image();
deleteImg.src = _img_delete_png__WEBPACK_IMPORTED_MODULE_1__;
deleteImg.classList.add('icon');
deleteImg.classList.add('delete');

header.appendChild(eye);
header.appendChild(deleteImg);
card.appendChild(header);
// Image container
const imageContainer = document.createElement('div');
imageContainer.classList.add('imageContainer');
card.appendChild(imageContainer);
// Footer
const footer = document.createElement('div');
footer.classList.add('cardFooter');
const $bookName = document.createElement('p');
$bookName.classList.add('info');
$bookName.setAttribute('data-info', 'bookName');
const $bookAuthor = document.createElement('p');
$bookAuthor.classList.add('info');
$bookAuthor.setAttribute('data-info', 'bookAuthor');
const $bookPages = document.createElement('p');
$bookPages.classList.add('info');
$bookPages.setAttribute('data-info', 'bookPages');
const $bookRead = document.createElement('p');
$bookRead.classList.add('info');
$bookRead.setAttribute('data-info', 'bookRead');
footer.appendChild($bookName);
footer.appendChild($bookAuthor);
footer.appendChild($bookPages);
footer.appendChild($bookRead);
card.appendChild(footer);



/***/ }),

/***/ "./src/initPage.js":
/*!*************************!*\
  !*** ./src/initPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _captureInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./captureInput */ "./src/captureInput.js");
/* harmony import */ var _displayBooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayBooks */ "./src/displayBooks.js");
/* harmony import */ var _displayDemoPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayDemoPage */ "./src/displayDemoPage.js");
/* harmony import */ var _displayFinishedBooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayFinishedBooks */ "./src/displayFinishedBooks.js");
/* harmony import */ var _displayUnfinishedBooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayUnfinishedBooks */ "./src/displayUnfinishedBooks.js");
/* harmony import */ var _initStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./initStorage */ "./src/initStorage.js");







function initPage() {
  // Create key in local storage to save books
  (0,_initStorage__WEBPACK_IMPORTED_MODULE_5__["default"])();
  // Add event listener to capture user input
  const mainForm = document.querySelector('#mainForm');
  mainForm.addEventListener('submit', _captureInput__WEBPACK_IMPORTED_MODULE_0__["default"]);
  // Add event listener to summary section
  const allBtn = document.querySelector('#all');
  allBtn.addEventListener('click', _displayBooks__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const finishBtn = document.querySelector('#finished');
  finishBtn.addEventListener('click', _displayFinishedBooks__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const unFinishedBtn = document.querySelector('#unfinished');
  unFinishedBtn.addEventListener('click', _displayUnfinishedBooks__WEBPACK_IMPORTED_MODULE_4__["default"]);
  // Demo
  const demoBtn = document.querySelector('#demo');
  demoBtn.addEventListener('click', _displayDemoPage__WEBPACK_IMPORTED_MODULE_2__["default"]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initPage);


/***/ }),

/***/ "./src/initStorage.js":
/*!****************************!*\
  !*** ./src/initStorage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-plusplus */
function initStorage() {
  const myBooks = [];
  if (localStorage.getItem('StoredBooks') === null) {
    localStorage.setItem('StoredBooks', myBooks);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initStorage);


/***/ }),

/***/ "./src/loadBookcardImages.js":
/*!***********************************!*\
  !*** ./src/loadBookcardImages.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-param-reassign */

function loadBookCardImages(mode) {
  console.log('mode');
  if (mode === undefined) {
    const imageContainers = [...document.querySelectorAll('.imageContainer')];
    const myBooks = JSON.parse(localStorage.getItem('StoredBooks'));
    imageContainers.forEach((element) => {
      const dataReference = element.getAttribute('data-reference');
      // eslint-disable-next-line eqeqeq
      const indexReference = myBooks.findIndex((em) => em.id == dataReference);
      const myImage = new Image();
      myImage.src = myBooks[indexReference].src;
      myImage.classList.add('cover');
      element.append(myImage);
    });
  }
  if (mode === 'demo') {
    console.log('its in mode');
    const imageContainers = [...document.querySelectorAll('.imageContainer')];
    const myBooks = JSON.parse(localStorage.getItem('demoPage'));
    imageContainers.forEach((element) => {
      const dataReference = element.getAttribute('data-reference');
      // eslint-disable-next-line eqeqeq
      const indexReference = myBooks.findIndex((em) => em.id == dataReference);
      const myImage = new Image();
      myImage.src = myBooks[indexReference].src;
      myImage.classList.add('cover');
      element.append(myImage);
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadBookCardImages);


/***/ }),

/***/ "./src/resetForm.js":
/*!**************************!*\
  !*** ./src/resetForm.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function resetForm() {
  document.forms[0].reset();
  const bookNameInput = document.querySelector('#bookName');
  const bookAuthor = document.querySelector('#bookAuthor');
  const xmarks = [...document.querySelectorAll('.fa-check')];
  const check = [...document.querySelectorAll('.fa-xmark')];
  const small = [...document.querySelectorAll('small')];
  bookNameInput.classList.remove('error');
  bookNameInput.classList.remove('success');
  bookAuthor.classList.remove('error');
  bookAuthor.classList.remove('success');
  xmarks.forEach((element) => {
    element.classList.remove('error');
    element.classList.remove('success');
  });
  check.forEach((element) => {
    element.classList.remove('error');
    element.classList.remove('success');
  });
  small.forEach((element) => {
    element.classList.remove('error');
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resetForm);


/***/ }),

/***/ "./src/saveToLocalStorage.js":
/*!***********************************!*\
  !*** ./src/saveToLocalStorage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function saveToLocalStorage(object) {
  // Get local storage key
  // Logic to manage entry when local this local storage key is empty
  if (localStorage.getItem('StoredBooks') === '') {
    const myBooks = [];
    myBooks.push(object);
    localStorage.setItem('StoredBooks', JSON.stringify(myBooks));
    // Logic to manage entries
  } else if (localStorage.getItem('StoredBooks') !== null) {
    const myArray = JSON.parse(localStorage.getItem('StoredBooks'));
    myArray.push(object);
    localStorage.setItem('StoredBooks', JSON.stringify(myArray));
  }
  console.log(localStorage.getItem('StoredBooks'));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveToLocalStorage);


/***/ }),

/***/ "./src/setErrorFor.js":
/*!****************************!*\
  !*** ./src/setErrorFor.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function setErrorFor(input, message) {
  const formControl = input.parentElement.parentElement;
  console.log(input);
  const small = formControl.querySelector('small');
  small.textContent = message;
  input.classList.add('error');
  const checker = formControl.querySelector('.fa-xmark');
  checker.classList.add('error');
  small.classList.add('error');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setErrorFor);


/***/ }),

/***/ "./src/setSuccesFor.js":
/*!*****************************!*\
  !*** ./src/setSuccesFor.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function setSuccesFor(input) {
  const formControl = input.parentElement.parentElement;
  const small = formControl.querySelector('small');
  const Xmark = formControl.querySelector('.fa-xmark');
  const check = formControl.querySelector('.fa-check');
  // Removing error class
  small.classList.remove('error');
  input.classList.remove('error');
  Xmark.classList.remove('error');
  // Adding success class
  input.classList.add('success');
  check.classList.add('success');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setSuccesFor);


/***/ }),

/***/ "./src/img/bg.webp":
/*!*************************!*\
  !*** ./src/img/bg.webp ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "087928a07bbe9671f194.webp";

/***/ }),

/***/ "./src/img/delete.png":
/*!****************************!*\
  !*** ./src/img/delete.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c952d52ab05717580cce.png";

/***/ }),

/***/ "./src/img/eye.png":
/*!*************************!*\
  !*** ./src/img/eye.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "804be29a3fb0dae9259c.png";

/***/ }),

/***/ "./src/demoPage.JSON":
/*!***************************!*\
  !*** ./src/demoPage.JSON ***!
  \***************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"Placeres","author":"La Torre","pages":"351","src":"https://cdn.dribbble.com/users/24158/screenshots/16170021/media/c915c898b83f418d50d434610b5d2ede.jpg?compress=1&resize=400x300","id":1649612667558,"read":true},{"name":"Reckoning","author":"Pete Aldin","pages":"521","src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxJMxp6tRuZzDEWKqy2yUNUR4SDfJh-JYwzw&usqp=CAU","id":1649614388725,"read":true},{"name":"The Last Pikachu","author":"Ben H. Winters","pages":"396","src":"https://www.quirkbooks.com/sites/default/files/styles/blog_detail_featured_image/public/LastPoliceman_pikachu3.jpg?itok=_TfyN6Q5","id":1649614598388,"read":false},{"name":"Six of Crows","author":"Leigh Bardugo","pages":"491","src":"https://www.hachette.co.uk/wp-content/uploads/2019/05/hbg-title-9781780622286-458.jpg?fit=815%2C1250","id":1649616477491,"read":false},{"name":"Tess Of the Road","author":"Retchel Wrent","pages":"102","src":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1503599285l/35046472._SY475_.jpg","id":1649616725218,"read":true},{"name":"Intuition ","author":"Amisha Ghadiali","pages":"223","src":"https://cdn.myportfolio.com/bc97f920-1868-48c5-bbf9-03175360c457/47cce72f-b08e-4bfa-89e2-e74faa13e42d_rw_1200.jpg?h=90764ea3813efaf33bcb452a72e1022c","id":1649882788494,"read":false},{"name":"Harry Potter And The Cursed Child","author":"J.K ROWLING","pages":"605","src":"http://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg","id":1649289788494,"read":false},{"name":"The Girl In Red","author":"Hawking Deferzosz","pages":"714","src":"https://i.pinimg.com/550x/8e/b9/63/8eb963b5794dd3f9aeb7cf19a59e659f.jpg","id":1641489788404,"read":false},{"name":"Get A Coder Job","author":"Anonymous","pages":"661","src":"https://images-platform.99static.com//EWICGSNdiclY1G53ssuSZFGdwoo=/0x0:1240x1240/fit-in/500x500/99designs-contests-attachments/68/68943/attachment_68943033","id":1141489788494,"read":false},{"name":"Zero To Coder","author":"Andy Tiffany","pages":"284","src":"https://images-platform.99static.com/BHpj2snbFNhkiFQrmFhf6yeeAeU=/57x0:1968x1911/500x500/top/smart/99designs-contests-attachments/102/102712/attachment_102712980","id":1641189788494,"read":false},{"name":"Only Words","author":"Summer Kiska","pages":"284","src":"http://www.designbookcover.pt/uploads/media/photos/cache/b1_only_words_72_media_huge_thumbnail.jpg","id":1641489788494,"read":false},{"name":"The Vegetarian","author":"Han Kang","pages":"294","src":"https://cdn.pastemagazine.com/www/system/images/photo_albums/30-best-book-covers-2016/large/2vegetariancover.png?1384968217","id":19921481788494,"read":false},{"name":"Very Nice","author":"Maria Semple","pages":"614","src":"https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-july-2019/large/bbcjuly19verynice.jpg?1384968217","id":1041489788494,"read":false}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _displayBooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayBooks */ "./src/displayBooks.js");
/* harmony import */ var _initPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initPage */ "./src/initPage.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




(0,_initPage__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_displayBooks__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

MyLib = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7O0FDckIwQztBQUNSO0FBQ2I7O0FBRXJCLHFEQUFRO0FBQ1IseURBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUxpYi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL015TGliLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9NeUxpYi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL015TGliLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL015TGliLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL015TGliLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9NeUxpYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9NeUxpYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9NeUxpYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL015TGliLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9zcmMvYWRkRXZlbnRMaXN0ZW5lclRvQ2FyZC5qcyIsIndlYnBhY2s6Ly9NeUxpYi8uL3NyYy9ib29rRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9NeUxpYi8uL3NyYy9jYXB0dXJlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9zcmMvY2hhbmdlUmVhZFN0YXR1cy5qcyIsIndlYnBhY2s6Ly9NeUxpYi8uL3NyYy9jbGVhclNjcmVlbi5qcyIsIndlYnBhY2s6Ly9NeUxpYi8uL3NyYy9jcmVhdGVCb29rQ2FyZC5qcyIsIndlYnBhY2s6Ly9NeUxpYi8uL3NyYy9kZWxldGVCb29rLmpzIiwid2VicGFjazovL015TGliLy4vc3JjL2Rpc3BsYXlCb29rcy5qcyIsIndlYnBhY2s6Ly9NeUxpYi8uL3NyYy9kaXNwbGF5RGVtb1BhZ2UuanMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9zcmMvZGlzcGxheUZpbmlzaGVkQm9va3MuanMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9zcmMvZGlzcGxheVVuZmluaXNoZWRCb29rcy5qcyIsIndlYnBhY2s6Ly9NeUxpYi8uL3NyYy9kb21Db250ZW50LmpzIiwid2VicGFjazovL015TGliLy4vc3JjL2luaXRQYWdlLmpzIiwid2VicGFjazovL015TGliLy4vc3JjL2luaXRTdG9yYWdlLmpzIiwid2VicGFjazovL015TGliLy4vc3JjL2xvYWRCb29rY2FyZEltYWdlcy5qcyIsIndlYnBhY2s6Ly9NeUxpYi8uL3NyYy9yZXNldEZvcm0uanMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9zcmMvc2F2ZVRvTG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL015TGliLy4vc3JjL3NldEVycm9yRm9yLmpzIiwid2VicGFjazovL015TGliLy4vc3JjL3NldFN1Y2Nlc0Zvci5qcyIsIndlYnBhY2s6Ly9NeUxpYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9NeUxpYi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9NeUxpYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vTXlMaWIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9NeUxpYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL015TGliL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vTXlMaWIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vTXlMaWIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vTXlMaWIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImltZy9iZy53ZWJwXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LWZhbWlseTogJ0dpZGVvbiBSb21hbicsIGN1cnNpdmU7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5odG1sIHsgXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIH1cXG5sYWJlbCwgaW5wdXR7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4jaG9tZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2hvbWVUaXRsZXtcXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpayBNb29ucm9ja3MnLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG4uaG9tZWJ1dHRvbntcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyOCwgNTEsIDQ1LCAwLjUpO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuI3NlcGFyYXRvcntcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuaW5wdXR7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcbmZvcm17XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuXFxufVxcbnNtYWxse1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuLmVycm9ye1xcbiAgICBib3JkZXItY29sb3I6IHJlZDtcXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG4uc3VjY2Vzc3tcXG4gICAgYm9yZGVyOiBncmVlbjtcXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcblxcbi5pbnB1dEJveHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY2hlY2tlcntcXG5wb3NpdGlvbjogIGFic29sdXRlO1xcbnRvcDogNTAlO1xcbnJpZ2h0OiAxNXB4O1xcbm9wYWNpdHk6IDA7XFxufVxcbiNtYWlue1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbiNoZWFkZXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBmb250LWZhbWlseTogJ1J1YmlrIE1vb25yb2NrcycsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5idXR0b257XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTksIDE4LCAxOCk7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcztcXG4gICAgYm94LXNoYWRvdzogMnB4IDBweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuYnV0dG9uOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbiNzaWRlYmFye1xcbiAgICB3aWR0aDogMTUlO1xcbn1cXG4jY29udGVudHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMC41ZnIpKTtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgcGFkZGluZzogODBweDtcXG4gICAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4uY2FyZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDU4LCA1NywgNTcpO1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiA1cHggMnB4IDNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuXFxuXFxufVxcbi5jYXJkSGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyAgICBoZWlnaHQ6IDUlO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmljb257XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zO1xcbn1cXG4uaWNvbjpob3ZlcntcXG50cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbi5pbWFnZUNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA3NSU7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGVzbW9rZTtcXG4gICAgcGFkZGluZzogMTVweDtcXG5cXG59XFxuLmNvdmVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLmNhcmRGb290ZXJ7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxucHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLmZhLWNpcmNsZS14bWFya3tcXG5jb2xvcjogd2hpdGVcXG47fVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlGQUEwRDtJQUMxRCw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixzQkFBc0I7RUFDeEI7QUFDRjtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx1Q0FBdUM7SUFDdkMsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLHVDQUF1QztJQUN2QyxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLGFBQWE7O0FBRWpCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLFFBQVE7QUFDUixXQUFXO0FBQ1gsVUFBVTtBQUNWO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCx1Q0FBdUM7SUFDdkMsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsOENBQThDO0FBQ2xEO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtJQUNiLDZEQUE2RDtJQUM3RCxVQUFVO0lBQ1YsYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOENBQThDO0lBQzlDLG9DQUFvQzs7O0FBR3hDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IseUJBQXlCLEtBQUssVUFBVTtJQUN4QyxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0FBQy9CO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLG1DQUFtQztJQUNuQyxhQUFhOztBQUVqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxDQUFDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC1mYW1pbHk6ICdHaWRlb24gUm9tYW4nLCBjdXJzaXZlO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuaHRtbCB7IFxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaW1nL2JnLndlYnApIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB9XFxubGFiZWwsIGlucHV0e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuI2hvbWV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNob21lVGl0bGV7XFxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsgTW9vbnJvY2tzJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogYXF1YW1hcmluZTtcXG59XFxuLmhvbWVidXR0b257XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjgsIDUxLCA0NSwgMC41KTtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcbiNzZXBhcmF0b3J7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbmlucHV0e1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cXG5mb3Jte1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcblxcbn1cXG5zbWFsbHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbi5lcnJvcntcXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XFxuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuLnN1Y2Nlc3N7XFxuICAgIGJvcmRlcjogZ3JlZW47XFxuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG5cXG4uaW5wdXRCb3h7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNoZWNrZXJ7XFxucG9zaXRpb246ICBhYnNvbHV0ZTtcXG50b3A6IDUwJTtcXG5yaWdodDogMTVweDtcXG5vcGFjaXR5OiAwO1xcbn1cXG4jbWFpbntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4jaGVhZGVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpayBNb29ucm9ja3MnLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuYnV0dG9ue1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5LCAxOCwgMTgpO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXM7XFxuICAgIGJveC1zaGFkb3c6IDJweCAwcHggMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcbmJ1dHRvbjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4jc2lkZWJhcntcXG4gICAgd2lkdGg6IDE1JTtcXG59XFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDAuNWZyKSk7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIHBhZGRpbmc6IDgwcHg7XFxuICAgIGdhcDogNTBweDtcXG59XFxuXFxuLmNhcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig1OCwgNTcsIDU3KTtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogNXB4IDJweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcblxcblxcbn1cXG4uY2FyZEhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgICAgaGVpZ2h0OiA1JTtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5pY29ue1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcztcXG59XFxuLmljb246aG92ZXJ7XFxudHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4uaW1hZ2VDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogNzUlO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlc21va2U7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuXFxufVxcbi5jb3ZlcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5jYXJkRm9vdGVye1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5mYS1jaXJjbGUteG1hcmt7XFxuY29sb3I6IHdoaXRlXFxuO31cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgY2hhbmdlVmlld1N0YXR1cyBmcm9tICcuL2NoYW5nZVJlYWRTdGF0dXMnO1xuaW1wb3J0IGRlbGV0ZUJvb2sgZnJvbSAnLi9kZWxldGVCb29rJztcblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lclRvQ2FyZChtb2RlKSB7XG4gIGNvbnNvbGUubG9nKG1vZGUpO1xuXG4gIGNvbnN0IGV5ZUljb25zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5leWUnKV07XG4gIGV5ZUljb25zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlVmlld1N0YXR1cyk7XG4gIH0pO1xuICBjb25zdCBkZWxldGVJY29ucyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlJyldO1xuICBkZWxldGVJY29ucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZUJvb2spO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWRkRXZlbnRMaXN0ZW5lclRvQ2FyZDtcbiIsImNvbnN0IGJvb2tGYWN0b3J5ID0gKG5hbWUsIGF1dGhvciwgcGFnZXMsIHNyYywgaWQsIHJlYWQpID0+ICh7XG4gIG5hbWUsXG4gIGF1dGhvcixcbiAgcGFnZXMsXG4gIHNyYyxcbiAgaWQsXG4gIHJlYWQsXG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBib29rRmFjdG9yeTtcbiIsImltcG9ydCBib29rRmFjdG9yeSBmcm9tICcuL2Jvb2tGYWN0b3J5JztcbmltcG9ydCBkaXNwbGF5Qm9va3MgZnJvbSAnLi9kaXNwbGF5Qm9va3MnO1xuaW1wb3J0IHJlc2V0Rm9ybSBmcm9tICcuL3Jlc2V0Rm9ybSc7XG5pbXBvcnQgc2F2ZVRvTG9jYWxTdG9yYWdlIGZyb20gJy4vc2F2ZVRvTG9jYWxTdG9yYWdlJztcbmltcG9ydCBzZXRFcnJvckZvciBmcm9tICcuL3NldEVycm9yRm9yJztcbmltcG9ydCBzZXRTdWNjZXNGb3IgZnJvbSAnLi9zZXRTdWNjZXNGb3InO1xuXG5mdW5jdGlvbiBjYXB0dXJlSW5wdXQoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIC8vIFJlYWQgdXNlciBpbnB1dFxuICBjb25zdCBib29rTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib29rTmFtZScpO1xuICBjb25zdCBib29rQXV0aG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jvb2tBdXRob3InKTtcbiAgY29uc3QgYm9va1BhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jvb2tQYWdlcycpLnZhbHVlO1xuICBjb25zdCBpbWdTcmMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1nVXJsJykudmFsdWU7XG4gIGNvbnN0IHVuaXF1ZUlkID0gRGF0ZS5ub3coKTtcbiAgLy8gVmFsaWRhdGlvblxuICBpZiAoYm9va05hbWUudmFsdWUgPT09ICcnKSB7XG4gICAgc2V0RXJyb3JGb3IoYm9va05hbWUsICdQbGVhc2UgU3VibWl0IEEgTmFtZScpO1xuICAgIHJldHVybjtcbiAgfSBpZiAoYm9va05hbWUudmFsdWUgIT09ICcnKSB7XG4gICAgc2V0U3VjY2VzRm9yKGJvb2tOYW1lKTtcbiAgfVxuICBpZiAoYm9va0F1dGhvci52YWx1ZSA9PT0gJycpIHtcbiAgICBzZXRFcnJvckZvcihib29rQXV0aG9yLCAnUGxlYXNlIFN1Ym1pdCBCb29rcyBBdXRob3InKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gQ3JlYXRlIE9iamVjdCB0byBzdG9yZSB1c2VyJ3MgaW5wdXRcbiAgY29uc3QgYm9vayA9IGJvb2tGYWN0b3J5KGJvb2tOYW1lLnZhbHVlLCBib29rQXV0aG9yLnZhbHVlLCBib29rUGFnZXMsIGltZ1NyYywgdW5pcXVlSWQsIGZhbHNlKTtcbiAgY29uc29sZS5sb2coYm9vayk7XG4gIC8vIFNhdmUgYm9vayBpbiBsb2NhbCBzdG9yYWdlXG5cbiAgc2F2ZVRvTG9jYWxTdG9yYWdlKGJvb2spO1xuICByZXNldEZvcm0oKTtcbiAgZGlzcGxheUJvb2tzKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhcHR1cmVJbnB1dDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IGRpc3BsYXlCb29rcyBmcm9tICcuL2Rpc3BsYXlCb29rcyc7XG5pbXBvcnQgZGlzcGxheUZpbmlzaGVkQm9va3MgZnJvbSAnLi9kaXNwbGF5RmluaXNoZWRCb29rcyc7XG5pbXBvcnQgZGlzcGxheVVuZmluaXNoZWRCb29rcyBmcm9tICcuL2Rpc3BsYXlVbmZpbmlzaGVkQm9va3MnO1xuXG5mdW5jdGlvbiBjaGFuZ2VWaWV3U3RhdHVzKG1vZGUpIHtcbiAgY29uc3QgYnRuTW9kZSA9IG1vZGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1tb2RlJyk7XG4gIGNvbnNvbGUubG9nKGJ0bk1vZGUpO1xuICBjb25zdCBkYXRhUmVmZXJlbmNlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVmZXJlbmNlJyk7XG4gIGNvbnNvbGUubG9nKGRhdGFSZWZlcmVuY2UpO1xuICAvLyBHZXQgbG9jYWwgc3RvcmFnZSBpdGVtXG4gIGNvbnN0IG15Qm9va3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdTdG9yZWRCb29rcycpKTtcbiAgY29uc29sZS5sb2cobXlCb29rcyk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcbiAgY29uc3QgdGFyZ2V0SW5kZXggPSBteUJvb2tzLmZpbmRJbmRleCgoZW0pID0+IGVtLmlkID09IGRhdGFSZWZlcmVuY2UpO1xuICAvLyBDaGFuZ2UgdGFyZ2V0J3MgcmVhZCBzdGF0dXNcbiAgaWYgKG15Qm9va3NbdGFyZ2V0SW5kZXhdLnJlYWQgPT09IHRydWUpIHtcbiAgICBteUJvb2tzW3RhcmdldEluZGV4XS5yZWFkID0gZmFsc2U7XG4gIH0gZWxzZSBpZiAobXlCb29rc1t0YXJnZXRJbmRleF0ucmVhZCA9PT0gZmFsc2UpIHtcbiAgICBteUJvb2tzW3RhcmdldEluZGV4XS5yZWFkID0gdHJ1ZTtcbiAgfVxuICBjb25zb2xlLmxvZyhteUJvb2tzW3RhcmdldEluZGV4XS5yZWFkKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1N0b3JlZEJvb2tzJywgSlNPTi5zdHJpbmdpZnkobXlCb29rcykpO1xuICBpZiAoYnRuTW9kZSA9PT0gJycgfHwgYnRuTW9kZSA9PT0gbnVsbCB8fCBidG5Nb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICBkaXNwbGF5Qm9va3MoKTtcbiAgfVxuICBpZiAoYnRuTW9kZSA9PT0gJ2ZpbmlzaGVkJykge1xuICAgIGRpc3BsYXlGaW5pc2hlZEJvb2tzKCk7XG4gIH1cbiAgaWYgKGJ0bk1vZGUgPT09ICd1bmZpbmlzaGVkJykge1xuICAgIGRpc3BsYXlVbmZpbmlzaGVkQm9va3MoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjaGFuZ2VWaWV3U3RhdHVzO1xuIiwiZnVuY3Rpb24gY2xlYXJTY3JlZW4oKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBpZiAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGVhclNjcmVlbjtcbiIsImltcG9ydCB7XG4gIGNhcmQsIGV5ZSwgZGVsZXRlSW1nLCAkYm9va05hbWUsICRib29rQXV0aG9yLFxuICAkYm9va1BhZ2VzLCAkYm9va1JlYWQsIGltYWdlQ29udGFpbmVyLFxufSBmcm9tICcuL2RvbUNvbnRlbnQnO1xuXG5mdW5jdGlvbiBjcmVhdGVCb29rQ2FyZChlbGVtZW50LCBtb2RlKSB7XG4gIC8vIENoYW5nZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIGNhcmRcbiAgZGVsZXRlSW1nLnNldEF0dHJpYnV0ZSgnZGF0YS1yZWZlcmVuY2UnLCBlbGVtZW50LmlkKTtcbiAgZXllLnNldEF0dHJpYnV0ZSgnZGF0YS1yZWZlcmVuY2UnLCBlbGVtZW50LmlkKTtcbiAgZXllLnNldEF0dHJpYnV0ZSgnYWx0JywgJ1N3aXRjaCBCb29rcyBDb21wbGV0aW9uIFN0YXR1cycpO1xuICAkYm9va05hbWUudGV4dENvbnRlbnQgPSBlbGVtZW50Lm5hbWU7XG4gICRib29rQXV0aG9yLnRleHRDb250ZW50ID0gZWxlbWVudC5hdXRob3I7XG4gICRib29rUGFnZXMudGV4dENvbnRlbnQgPSBlbGVtZW50LnBhZ2VzO1xuICBpbWFnZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcmVmZXJlbmNlJywgZWxlbWVudC5pZCk7XG4gIGlmIChlbGVtZW50LnJlYWQgPT09IGZhbHNlKSB7XG4gICAgJGJvb2tSZWFkLnRleHRDb250ZW50ID0gJ05vdCBSZWFkIFlldCc7XG4gIH0gZWxzZSBpZiAoZWxlbWVudC5yZWFkID09PSB0cnVlKSB7XG4gICAgJGJvb2tSZWFkLnRleHRDb250ZW50ID0gJ0Jvb2sgQ29tcGxldGVkJztcbiAgfVxuICBpZiAobW9kZSA9PT0gbnVsbCB8fCBtb2RlID09PSAnJyB8fCBtb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICBleWUuc2V0QXR0cmlidXRlKCdkYXRhLW1vZGUnLCAnJyk7XG4gICAgZGVsZXRlSW1nLnNldEF0dHJpYnV0ZSgnZGF0YS1tb2RlJywgJycpO1xuICB9XG4gIGlmIChtb2RlID09PSAnZmluaXNoZWQnKSB7XG4gICAgZXllLnNldEF0dHJpYnV0ZSgnZGF0YS1tb2RlJywgJ2ZpbmlzaGVkJyk7XG4gICAgZGVsZXRlSW1nLnNldEF0dHJpYnV0ZSgnZGF0YS1tb2RlJywgJ2ZpbmlzaGVkJyk7XG4gIH1cbiAgaWYgKG1vZGUgPT09ICd1bmZpbmlzaGVkJykge1xuICAgIGV5ZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kZScsICd1bmZpbmlzaGVkJyk7XG4gICAgZGVsZXRlSW1nLnNldEF0dHJpYnV0ZSgnZGF0YS1tb2RlJywgJ3VuZmluaXNoZWQnKTtcbiAgfVxuICByZXR1cm4gY2FyZDtcbn1cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJvb2tDYXJkO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgZGlzcGxheUJvb2tzIGZyb20gJy4vZGlzcGxheUJvb2tzJztcbmltcG9ydCBkaXNwbGF5RmluaXNoZWRCb29rcyBmcm9tICcuL2Rpc3BsYXlGaW5pc2hlZEJvb2tzJztcbmltcG9ydCBkaXNwbGF5VW5maW5pc2hlZEJvb2tzIGZyb20gJy4vZGlzcGxheVVuZmluaXNoZWRCb29rcyc7XG5cbmZ1bmN0aW9uIGRlbGV0ZUJvb2soKSB7XG4gIGNvbnN0IG1vZGUgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1tb2RlJyk7XG4gIGNvbnNvbGUubG9nKG1vZGUpO1xuICBjb25zdCBkYXRhUmVmZXJlbmNlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVmZXJlbmNlJyk7XG4gIC8vIEdldCBsb2NhbCBzdG9yYWdlIGl0ZW1cbiAgY29uc3QgbXlCb29rcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1N0b3JlZEJvb2tzJykpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG4gIGNvbnN0IHRhcmdldEluZGV4ID0gbXlCb29rcy5maW5kSW5kZXgoKGVtKSA9PiBlbS5pZCA9PSBkYXRhUmVmZXJlbmNlKTtcbiAgLy8gRGVsZXRlIHRhcmdldCBpdGVtXG4gIG15Qm9va3Muc3BsaWNlKHRhcmdldEluZGV4LCAxKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1N0b3JlZEJvb2tzJywgSlNPTi5zdHJpbmdpZnkobXlCb29rcykpO1xuICBpZiAobW9kZSA9PT0gJycgfHwgbW9kZSA9PT0gbnVsbCB8fCBtb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICBkaXNwbGF5Qm9va3MoKTtcbiAgfVxuICBpZiAobW9kZSA9PT0gJ2ZpbmlzaGVkJykge1xuICAgIGRpc3BsYXlGaW5pc2hlZEJvb2tzKCk7XG4gIH1cbiAgaWYgKG1vZGUgPT09ICd1bmZpbmlzaGVkJykge1xuICAgIGRpc3BsYXlVbmZpbmlzaGVkQm9va3MoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWxldGVCb29rO1xuIiwiLyogZXNsaW50LWRpc2FibGUgZXFlcWVxICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5pbXBvcnQgYWRkRXZlbnRMaXN0ZW5lclRvQ2FyZCBmcm9tICcuL2FkZEV2ZW50TGlzdGVuZXJUb0NhcmQnO1xuaW1wb3J0IGNsZWFyU2NyZWVuIGZyb20gJy4vY2xlYXJTY3JlZW4nO1xuaW1wb3J0IGNyZWF0ZUJvb2tDYXJkIGZyb20gJy4vY3JlYXRlQm9va0NhcmQnO1xuaW1wb3J0IGxvYWRCb29rQ2FyZEltYWdlcyBmcm9tICcuL2xvYWRCb29rY2FyZEltYWdlcyc7XG5cbmZ1bmN0aW9uIGRpc3BsYXlCb29rcygpIHtcbiAgY2xlYXJTY3JlZW4oKTtcbiAgLy8gR2V0IGxvY2FsIHN0b3JhZ2Uga2V5IGFuZCBhcHBlbmQgZWFjaCBib29rIHRvIGEgRE9NIGVsZW1lbnRcbiAgLy8gSWYgbG9jYWwgc3RvcmFnZSBpcyBlbXB0eVxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1N0b3JlZEJvb2tzJykgPT0gJycpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGNvbnN0IG15U3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1N0b3JlZEJvb2tzJykpO1xuICBteVN0b3JhZ2UuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGJvb2tDYXJkID0gY3JlYXRlQm9va0NhcmQoZWxlbWVudCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChib29rQ2FyZC5jbG9uZU5vZGUodHJ1ZSkpO1xuICB9KTtcbiAgYWRkRXZlbnRMaXN0ZW5lclRvQ2FyZCgpO1xuICBsb2FkQm9va0NhcmRJbWFnZXMoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUJvb2tzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgZXFlcWVxICovXG5pbXBvcnQgY2xlYXJTY3JlZW4gZnJvbSAnLi9jbGVhclNjcmVlbic7XG5pbXBvcnQgY3JlYXRlQm9va0NhcmQgZnJvbSAnLi9jcmVhdGVCb29rQ2FyZCc7XG5pbXBvcnQgbG9hZEJvb2tDYXJkSW1hZ2VzIGZyb20gJy4vbG9hZEJvb2tjYXJkSW1hZ2VzJztcbmltcG9ydCBkZW1vUGFnZSBmcm9tICcuL2RlbW9QYWdlLkpTT04nO1xuXG5mdW5jdGlvbiBkaXNwbGF5RGVtb1BhZ2UoKSB7XG4gIGNsZWFyU2NyZWVuKCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkZW1vUGFnZScsIEpTT04uc3RyaW5naWZ5KGRlbW9QYWdlKSk7XG4gIC8vIEFwcGVuZCBlYWNoIGJvb2sgdG8gYSBET00gZWxlbWVudFxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29uc3QgbXlTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGVtb1BhZ2UnKSk7XG4gIG15U3RvcmFnZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgYm9va0NhcmQgPSBjcmVhdGVCb29rQ2FyZChlbGVtZW50KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJvb2tDYXJkLmNsb25lTm9kZSh0cnVlKSk7XG4gIH0pO1xuICBsb2FkQm9va0NhcmRJbWFnZXMoJ2RlbW8nKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlEZW1vUGFnZTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IGFkZEV2ZW50TGlzdGVuZXJUb0NhcmQgZnJvbSAnLi9hZGRFdmVudExpc3RlbmVyVG9DYXJkJztcbmltcG9ydCBsb2FkQm9va0NhcmRJbWFnZXMgZnJvbSAnLi9sb2FkQm9va2NhcmRJbWFnZXMnO1xuaW1wb3J0IGNsZWFyU2NyZWVuIGZyb20gJy4vY2xlYXJTY3JlZW4nO1xuaW1wb3J0IGNyZWF0ZUJvb2tDYXJkIGZyb20gJy4vY3JlYXRlQm9va0NhcmQnO1xuXG5mdW5jdGlvbiBkaXNwbGF5RmluaXNoZWRCb29rcygpIHtcbiAgY2xlYXJTY3JlZW4oKTtcbiAgLy8gR2V0IGxvY2FsIHN0b3JhZ2Uga2V5IGFuZCBhcHBlbmQgZWFjaCBib29rIHRvIGEgRE9NIGVsZW1lbnRcbiAgLy8gSWYgbG9jYWwgc3RvcmFnZSBpcyBlbXB0eVxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1N0b3JlZEJvb2tzJykgPT09ICcnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb25zdCBteVN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdTdG9yZWRCb29rcycpKTtcbiAgbXlTdG9yYWdlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudC5yZWFkID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBib29rQ2FyZCA9IGNyZWF0ZUJvb2tDYXJkKGVsZW1lbnQsICdmaW5pc2hlZCcpO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChib29rQ2FyZC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIH1cbiAgfSk7XG4gIGFkZEV2ZW50TGlzdGVuZXJUb0NhcmQoJ2ZpbmlzaGVkJyk7XG4gIGxvYWRCb29rQ2FyZEltYWdlcygpO1xufVxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUZpbmlzaGVkQm9va3M7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCBhZGRFdmVudExpc3RlbmVyVG9DYXJkIGZyb20gJy4vYWRkRXZlbnRMaXN0ZW5lclRvQ2FyZCc7XG5pbXBvcnQgbG9hZEJvb2tDYXJkSW1hZ2VzIGZyb20gJy4vbG9hZEJvb2tjYXJkSW1hZ2VzJztcbmltcG9ydCBjbGVhclNjcmVlbiBmcm9tICcuL2NsZWFyU2NyZWVuJztcbmltcG9ydCBjcmVhdGVCb29rQ2FyZCBmcm9tICcuL2NyZWF0ZUJvb2tDYXJkJztcblxuZnVuY3Rpb24gZGlzcGxheVVuZmluaXNoZWRCb29rcygpIHtcbiAgY2xlYXJTY3JlZW4oKTtcbiAgLy8gR2V0IGxvY2FsIHN0b3JhZ2Uga2V5IGFuZCBhcHBlbmQgZWFjaCBib29rIHRvIGEgRE9NIGVsZW1lbnRcbiAgLy8gSWYgbG9jYWwgc3RvcmFnZSBpcyBlbXB0eVxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1N0b3JlZEJvb2tzJykgPT09ICcnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb25zdCBteVN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdTdG9yZWRCb29rcycpKTtcbiAgbXlTdG9yYWdlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudC5yZWFkID09PSBmYWxzZSkge1xuICAgICAgY29uc3QgYm9va0NhcmQgPSBjcmVhdGVCb29rQ2FyZChlbGVtZW50LCAndW5maW5pc2hlZCcpO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChib29rQ2FyZC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIH1cbiAgfSk7XG4gIGFkZEV2ZW50TGlzdGVuZXJUb0NhcmQoJ3VuZmluaXNoZWQnKTtcbiAgbG9hZEJvb2tDYXJkSW1hZ2VzKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlVbmZpbmlzaGVkQm9va3M7XG4iLCJpbXBvcnQgZXllSWNvbiBmcm9tICcuL2ltZy9leWUucG5nJztcbmltcG9ydCBkZWxldGVJY29uIGZyb20gJy4vaW1nL2RlbGV0ZS5wbmcnO1xuLy8gQm9vayBjYXJkXG5jb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbi8vIEhlYWRlclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5oZWFkZXIuY2xhc3NMaXN0LmFkZCgnY2FyZEhlYWRlcicpO1xuY29uc3QgZXllID0gbmV3IEltYWdlKCk7XG5leWUuc3JjID0gZXllSWNvbjtcbmV5ZS5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG5leWUuY2xhc3NMaXN0LmFkZCgnZXllJyk7XG5jb25zdCBkZWxldGVJbWcgPSBuZXcgSW1hZ2UoKTtcbmRlbGV0ZUltZy5zcmMgPSBkZWxldGVJY29uO1xuZGVsZXRlSW1nLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcbmRlbGV0ZUltZy5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKTtcblxuaGVhZGVyLmFwcGVuZENoaWxkKGV5ZSk7XG5oZWFkZXIuYXBwZW5kQ2hpbGQoZGVsZXRlSW1nKTtcbmNhcmQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbi8vIEltYWdlIGNvbnRhaW5lclxuY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ltYWdlQ29udGFpbmVyJyk7XG5jYXJkLmFwcGVuZENoaWxkKGltYWdlQ29udGFpbmVyKTtcbi8vIEZvb3RlclxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5mb290ZXIuY2xhc3NMaXN0LmFkZCgnY2FyZEZvb3RlcicpO1xuY29uc3QgJGJvb2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuJGJvb2tOYW1lLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcbiRib29rTmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5mbycsICdib29rTmFtZScpO1xuY29uc3QgJGJvb2tBdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4kYm9va0F1dGhvci5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG4kYm9va0F1dGhvci5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5mbycsICdib29rQXV0aG9yJyk7XG5jb25zdCAkYm9va1BhZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuJGJvb2tQYWdlcy5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG4kYm9va1BhZ2VzLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmZvJywgJ2Jvb2tQYWdlcycpO1xuY29uc3QgJGJvb2tSZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuJGJvb2tSZWFkLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcbiRib29rUmVhZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5mbycsICdib29rUmVhZCcpO1xuZm9vdGVyLmFwcGVuZENoaWxkKCRib29rTmFtZSk7XG5mb290ZXIuYXBwZW5kQ2hpbGQoJGJvb2tBdXRob3IpO1xuZm9vdGVyLmFwcGVuZENoaWxkKCRib29rUGFnZXMpO1xuZm9vdGVyLmFwcGVuZENoaWxkKCRib29rUmVhZCk7XG5jYXJkLmFwcGVuZENoaWxkKGZvb3Rlcik7XG5leHBvcnQge1xuICBjYXJkLCBleWUsIGRlbGV0ZUltZywgJGJvb2tOYW1lLCAkYm9va0F1dGhvcixcbiAgJGJvb2tQYWdlcywgJGJvb2tSZWFkLCBpbWFnZUNvbnRhaW5lcixcbn07XG4iLCJpbXBvcnQgY2FwdHVyZUlucHV0IGZyb20gJy4vY2FwdHVyZUlucHV0JztcbmltcG9ydCBkaXNwbGF5Qm9va3MgZnJvbSAnLi9kaXNwbGF5Qm9va3MnO1xuaW1wb3J0IGRpc3BsYXlEZW1vUGFnZSBmcm9tICcuL2Rpc3BsYXlEZW1vUGFnZSc7XG5pbXBvcnQgZGlzcGxheUZpbmlzaGVkQm9va3MgZnJvbSAnLi9kaXNwbGF5RmluaXNoZWRCb29rcyc7XG5pbXBvcnQgZGlzcGxheVVuZmluaXNoZWRCb29rcyBmcm9tICcuL2Rpc3BsYXlVbmZpbmlzaGVkQm9va3MnO1xuaW1wb3J0IGluaXRTdG9yYWdlIGZyb20gJy4vaW5pdFN0b3JhZ2UnO1xuXG5mdW5jdGlvbiBpbml0UGFnZSgpIHtcbiAgLy8gQ3JlYXRlIGtleSBpbiBsb2NhbCBzdG9yYWdlIHRvIHNhdmUgYm9va3NcbiAgaW5pdFN0b3JhZ2UoKTtcbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIGNhcHR1cmUgdXNlciBpbnB1dFxuICBjb25zdCBtYWluRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluRm9ybScpO1xuICBtYWluRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBjYXB0dXJlSW5wdXQpO1xuICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gc3VtbWFyeSBzZWN0aW9uXG4gIGNvbnN0IGFsbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbGwnKTtcbiAgYWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUJvb2tzKTtcbiAgY29uc3QgZmluaXNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbmlzaGVkJyk7XG4gIGZpbmlzaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlGaW5pc2hlZEJvb2tzKTtcbiAgY29uc3QgdW5GaW5pc2hlZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1bmZpbmlzaGVkJyk7XG4gIHVuRmluaXNoZWRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5VW5maW5pc2hlZEJvb2tzKTtcbiAgLy8gRGVtb1xuICBjb25zdCBkZW1vQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlbW8nKTtcbiAgZGVtb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlEZW1vUGFnZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRQYWdlO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmZ1bmN0aW9uIGluaXRTdG9yYWdlKCkge1xuICBjb25zdCBteUJvb2tzID0gW107XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU3RvcmVkQm9va3MnKSA9PT0gbnVsbCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdTdG9yZWRCb29rcycsIG15Qm9va3MpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRTdG9yYWdlO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cblxuZnVuY3Rpb24gbG9hZEJvb2tDYXJkSW1hZ2VzKG1vZGUpIHtcbiAgY29uc29sZS5sb2coJ21vZGUnKTtcbiAgaWYgKG1vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGltYWdlQ29udGFpbmVycyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW1hZ2VDb250YWluZXInKV07XG4gICAgY29uc3QgbXlCb29rcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1N0b3JlZEJvb2tzJykpO1xuICAgIGltYWdlQ29udGFpbmVycy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBkYXRhUmVmZXJlbmNlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVmZXJlbmNlJyk7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG4gICAgICBjb25zdCBpbmRleFJlZmVyZW5jZSA9IG15Qm9va3MuZmluZEluZGV4KChlbSkgPT4gZW0uaWQgPT0gZGF0YVJlZmVyZW5jZSk7XG4gICAgICBjb25zdCBteUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICBteUltYWdlLnNyYyA9IG15Qm9va3NbaW5kZXhSZWZlcmVuY2VdLnNyYztcbiAgICAgIG15SW1hZ2UuY2xhc3NMaXN0LmFkZCgnY292ZXInKTtcbiAgICAgIGVsZW1lbnQuYXBwZW5kKG15SW1hZ2UpO1xuICAgIH0pO1xuICB9XG4gIGlmIChtb2RlID09PSAnZGVtbycpIHtcbiAgICBjb25zb2xlLmxvZygnaXRzIGluIG1vZGUnKTtcbiAgICBjb25zdCBpbWFnZUNvbnRhaW5lcnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmltYWdlQ29udGFpbmVyJyldO1xuICAgIGNvbnN0IG15Qm9va3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkZW1vUGFnZScpKTtcbiAgICBpbWFnZUNvbnRhaW5lcnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgZGF0YVJlZmVyZW5jZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXJlZmVyZW5jZScpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuICAgICAgY29uc3QgaW5kZXhSZWZlcmVuY2UgPSBteUJvb2tzLmZpbmRJbmRleCgoZW0pID0+IGVtLmlkID09IGRhdGFSZWZlcmVuY2UpO1xuICAgICAgY29uc3QgbXlJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgbXlJbWFnZS5zcmMgPSBteUJvb2tzW2luZGV4UmVmZXJlbmNlXS5zcmM7XG4gICAgICBteUltYWdlLmNsYXNzTGlzdC5hZGQoJ2NvdmVyJyk7XG4gICAgICBlbGVtZW50LmFwcGVuZChteUltYWdlKTtcbiAgICB9KTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbG9hZEJvb2tDYXJkSW1hZ2VzO1xuIiwiZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICBkb2N1bWVudC5mb3Jtc1swXS5yZXNldCgpO1xuICBjb25zdCBib29rTmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jvb2tOYW1lJyk7XG4gIGNvbnN0IGJvb2tBdXRob3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9va0F1dGhvcicpO1xuICBjb25zdCB4bWFya3MgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLWNoZWNrJyldO1xuICBjb25zdCBjaGVjayA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmEteG1hcmsnKV07XG4gIGNvbnN0IHNtYWxsID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NtYWxsJyldO1xuICBib29rTmFtZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG4gIGJvb2tOYW1lSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnc3VjY2VzcycpO1xuICBib29rQXV0aG9yLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG4gIGJvb2tBdXRob3IuY2xhc3NMaXN0LnJlbW92ZSgnc3VjY2VzcycpO1xuICB4bWFya3MuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3N1Y2Nlc3MnKTtcbiAgfSk7XG4gIGNoZWNrLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzdWNjZXNzJyk7XG4gIH0pO1xuICBzbWFsbC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzZXRGb3JtO1xuIiwiZnVuY3Rpb24gc2F2ZVRvTG9jYWxTdG9yYWdlKG9iamVjdCkge1xuICAvLyBHZXQgbG9jYWwgc3RvcmFnZSBrZXlcbiAgLy8gTG9naWMgdG8gbWFuYWdlIGVudHJ5IHdoZW4gbG9jYWwgdGhpcyBsb2NhbCBzdG9yYWdlIGtleSBpcyBlbXB0eVxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1N0b3JlZEJvb2tzJykgPT09ICcnKSB7XG4gICAgY29uc3QgbXlCb29rcyA9IFtdO1xuICAgIG15Qm9va3MucHVzaChvYmplY3QpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdTdG9yZWRCb29rcycsIEpTT04uc3RyaW5naWZ5KG15Qm9va3MpKTtcbiAgICAvLyBMb2dpYyB0byBtYW5hZ2UgZW50cmllc1xuICB9IGVsc2UgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdTdG9yZWRCb29rcycpICE9PSBudWxsKSB7XG4gICAgY29uc3QgbXlBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1N0b3JlZEJvb2tzJykpO1xuICAgIG15QXJyYXkucHVzaChvYmplY3QpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdTdG9yZWRCb29rcycsIEpTT04uc3RyaW5naWZ5KG15QXJyYXkpKTtcbiAgfVxuICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU3RvcmVkQm9va3MnKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNhdmVUb0xvY2FsU3RvcmFnZTtcbiIsImZ1bmN0aW9uIHNldEVycm9yRm9yKGlucHV0LCBtZXNzYWdlKSB7XG4gIGNvbnN0IGZvcm1Db250cm9sID0gaW5wdXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICBjb25zb2xlLmxvZyhpbnB1dCk7XG4gIGNvbnN0IHNtYWxsID0gZm9ybUNvbnRyb2wucXVlcnlTZWxlY3Rvcignc21hbGwnKTtcbiAgc21hbGwudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICBjb25zdCBjaGVja2VyID0gZm9ybUNvbnRyb2wucXVlcnlTZWxlY3RvcignLmZhLXhtYXJrJyk7XG4gIGNoZWNrZXIuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgc21hbGwuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2V0RXJyb3JGb3I7XG4iLCJmdW5jdGlvbiBzZXRTdWNjZXNGb3IoaW5wdXQpIHtcbiAgY29uc3QgZm9ybUNvbnRyb2wgPSBpbnB1dC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gIGNvbnN0IHNtYWxsID0gZm9ybUNvbnRyb2wucXVlcnlTZWxlY3Rvcignc21hbGwnKTtcbiAgY29uc3QgWG1hcmsgPSBmb3JtQ29udHJvbC5xdWVyeVNlbGVjdG9yKCcuZmEteG1hcmsnKTtcbiAgY29uc3QgY2hlY2sgPSBmb3JtQ29udHJvbC5xdWVyeVNlbGVjdG9yKCcuZmEtY2hlY2snKTtcbiAgLy8gUmVtb3ZpbmcgZXJyb3IgY2xhc3NcbiAgc21hbGwuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgWG1hcmsuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgLy8gQWRkaW5nIHN1Y2Nlc3MgY2xhc3NcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnc3VjY2VzcycpO1xuICBjaGVjay5jbGFzc0xpc3QuYWRkKCdzdWNjZXNzJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNldFN1Y2Nlc0ZvcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IGRpc3BsYXlCb29rcyBmcm9tICcuL2Rpc3BsYXlCb29rcyc7XG5pbXBvcnQgaW5pdFBhZ2UgZnJvbSAnLi9pbml0UGFnZSc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuaW5pdFBhZ2UoKTtcbmRpc3BsYXlCb29rcygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9