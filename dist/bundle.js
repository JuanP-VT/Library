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
/* harmony import */ var _displayFinishedBooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayFinishedBooks */ "./src/displayFinishedBooks.js");
/* harmony import */ var _displayUnfinishedBooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayUnfinishedBooks */ "./src/displayUnfinishedBooks.js");
/* harmony import */ var _initStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initStorage */ "./src/initStorage.js");






function initPage() {
  // Create key in local storage to save books
  (0,_initStorage__WEBPACK_IMPORTED_MODULE_4__["default"])();
  // Add event listener to capture user input
  const mainForm = document.querySelector('#mainForm');
  mainForm.addEventListener('submit', _captureInput__WEBPACK_IMPORTED_MODULE_0__["default"]);
  // Add event listener to summary section
  const allBtn = document.querySelector('#all');
  allBtn.addEventListener('click', _displayBooks__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const finishBtn = document.querySelector('#finished');
  finishBtn.addEventListener('click', _displayFinishedBooks__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const unFinishedBtn = document.querySelector('#unfinished');
  unFinishedBtn.addEventListener('click', _displayUnfinishedBooks__WEBPACK_IMPORTED_MODULE_3__["default"]);
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
/* harmony import */ var _img_noCover_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/noCover.jpg */ "./src/img/noCover.jpg");
/* eslint-disable no-param-reassign */


function loadBookCardImages() {
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
  // Set Placeholders for images with no valid src
  const allImages = [...document.querySelectorAll('.cover')];
  allImages.forEach((element) => {
    const imgSrc = element.getAttribute('src');
    if (imgSrc === '' || imgSrc === undefined) {
      element.src = _img_noCover_jpg__WEBPACK_IMPORTED_MODULE_0__;
    }
  });
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

/***/ "./src/img/noCover.jpg":
/*!*****************************!*\
  !*** ./src/img/noCover.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "19a0b7111c60ddef9f5e.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7O0FDckIwQztBQUNSO0FBQ2I7O0FBRXJCLHFEQUFRO0FBQ1IseURBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUxpYi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL015TGliLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9NeUxpYi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL015TGliLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL015TGliLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL015TGliLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9NeUxpYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9NeUxpYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9NeUxpYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL015TGliLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9zcmMvYWRkRXZlbnRMaXN0ZW5lclRvQ2FyZC5qcyIsIndlYnBhY2s6Ly9NeUxpYi8uL3NyYy9ib29rRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9NeUxpYi8uL3NyYy9jYXB0dXJlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9zcmMvY2hhbmdlUmVhZFN0YXR1cy5qcyIsIndlYnBhY2s6Ly9NeUxpYi8uL3NyYy9jbGVhclNjcmVlbi5qcyIsIndlYnBhY2s6Ly9NeUxpYi8uL3NyYy9jcmVhdGVCb29rQ2FyZC5qcyIsIndlYnBhY2s6Ly9NeUxpYi8uL3NyYy9kZWxldGVCb29rLmpzIiwid2VicGFjazovL015TGliLy4vc3JjL2Rpc3BsYXlCb29rcy5qcyIsIndlYnBhY2s6Ly9NeUxpYi8uL3NyYy9kaXNwbGF5RmluaXNoZWRCb29rcy5qcyIsIndlYnBhY2s6Ly9NeUxpYi8uL3NyYy9kaXNwbGF5VW5maW5pc2hlZEJvb2tzLmpzIiwid2VicGFjazovL015TGliLy4vc3JjL2RvbUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9zcmMvaW5pdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9zcmMvaW5pdFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9zcmMvbG9hZEJvb2tjYXJkSW1hZ2VzLmpzIiwid2VicGFjazovL015TGliLy4vc3JjL3Jlc2V0Rm9ybS5qcyIsIndlYnBhY2s6Ly9NeUxpYi8uL3NyYy9zYXZlVG9Mb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9zcmMvc2V0RXJyb3JGb3IuanMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9zcmMvc2V0U3VjY2VzRm9yLmpzIiwid2VicGFjazovL015TGliL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL015TGliL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL015TGliL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9NeUxpYi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL015TGliL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vTXlMaWIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9NeUxpYi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9NeUxpYi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9NeUxpYi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiaW1nL2JnLndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lkZW9uIFJvbWFuJywgY3Vyc2l2ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcbmh0bWwgeyBcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgfVxcbmxhYmVsLCBpbnB1dHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbiNob21le1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jaG9tZVRpdGxle1xcbiAgICBmb250LWZhbWlseTogJ1J1YmlrIE1vb25yb2NrcycsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcbi5ob21lYnV0dG9ue1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI4LCA1MSwgNDUsIDAuNSk7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG4jc2VwYXJhdG9ye1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5pbnB1dHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XFxuZm9ybXtcXG4gICAgcGFkZGluZzogMjBweDtcXG5cXG59XFxuc21hbGx7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG4uZXJyb3J7XFxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcbi5zdWNjZXNze1xcbiAgICBib3JkZXI6IGdyZWVuO1xcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuXFxuLmlucHV0Qm94e1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5jaGVja2Vye1xcbnBvc2l0aW9uOiAgYWJzb2x1dGU7XFxudG9wOiA1MCU7XFxucmlnaHQ6IDE1cHg7XFxub3BhY2l0eTogMDtcXG59XFxuI21haW57XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuI2hlYWRlcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsgTW9vbnJvY2tzJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcbmJ1dHRvbntcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOSwgMTgsIDE4KTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zO1xcbiAgICBib3gtc2hhZG93OiAycHggMHB4IDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5idXR0b246aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuI3NpZGViYXJ7XFxuICAgIHdpZHRoOiAxNSU7XFxufVxcbiNjb250ZW50e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAwLjVmcikpO1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBwYWRkaW5nOiA4MHB4O1xcbiAgICBnYXA6IDUwcHg7XFxufVxcblxcbi5jYXJke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNTgsIDU3LCA1Nyk7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDVweCAycHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG5cXG5cXG59XFxuLmNhcmRIZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7ICAgIGhlaWdodDogNSU7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uaWNvbntcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXM7XFxufVxcbi5pY29uOmhvdmVye1xcbnRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLmltYWdlQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDc1JTtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHdoaXRlc21va2U7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcblxcbn1cXG4uY292ZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uY2FyZEZvb3RlcntcXG4gICAgaGVpZ2h0OiAyMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5we1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uZmEtY2lyY2xlLXhtYXJre1xcbmNvbG9yOiB3aGl0ZVxcbjt9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUZBQTBEO0lBQzFELDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLHNCQUFzQjtFQUN4QjtBQUNGO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHVDQUF1QztJQUN2QyxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsdUNBQXVDO0lBQ3ZDLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksYUFBYTs7QUFFakI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsUUFBUTtBQUNSLFdBQVc7QUFDWCxVQUFVO0FBQ1Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULHVDQUF1QztJQUN2QyxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQiw4Q0FBOEM7QUFDbEQ7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNkRBQTZEO0lBQzdELFVBQVU7SUFDVixhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4Q0FBOEM7SUFDOUMsb0NBQW9DOzs7QUFHeEM7QUFDQTtJQUNJLGFBQWE7SUFDYix5QkFBeUIsS0FBSyxVQUFVO0lBQ3hDLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7QUFDL0I7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsbUNBQW1DO0lBQ25DLGFBQWE7O0FBRWpCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLENBQUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LWZhbWlseTogJ0dpZGVvbiBSb21hbicsIGN1cnNpdmU7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5odG1sIHsgXFxuICAgIGJhY2tncm91bmQ6IHVybChpbWcvYmcud2VicCkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIH1cXG5sYWJlbCwgaW5wdXR7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4jaG9tZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2hvbWVUaXRsZXtcXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpayBNb29ucm9ja3MnLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG4uaG9tZWJ1dHRvbntcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyOCwgNTEsIDQ1LCAwLjUpO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuI3NlcGFyYXRvcntcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuaW5wdXR7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcbmZvcm17XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuXFxufVxcbnNtYWxse1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuLmVycm9ye1xcbiAgICBib3JkZXItY29sb3I6IHJlZDtcXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG4uc3VjY2Vzc3tcXG4gICAgYm9yZGVyOiBncmVlbjtcXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcblxcbi5pbnB1dEJveHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY2hlY2tlcntcXG5wb3NpdGlvbjogIGFic29sdXRlO1xcbnRvcDogNTAlO1xcbnJpZ2h0OiAxNXB4O1xcbm9wYWNpdHk6IDA7XFxufVxcbiNtYWlue1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbiNoZWFkZXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBmb250LWZhbWlseTogJ1J1YmlrIE1vb25yb2NrcycsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5idXR0b257XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTksIDE4LCAxOCk7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcztcXG4gICAgYm94LXNoYWRvdzogMnB4IDBweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuYnV0dG9uOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbiNzaWRlYmFye1xcbiAgICB3aWR0aDogMTUlO1xcbn1cXG4jY29udGVudHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMC41ZnIpKTtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgcGFkZGluZzogODBweDtcXG4gICAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4uY2FyZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDU4LCA1NywgNTcpO1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiA1cHggMnB4IDNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuXFxuXFxufVxcbi5jYXJkSGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyAgICBoZWlnaHQ6IDUlO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmljb257XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zO1xcbn1cXG4uaWNvbjpob3ZlcntcXG50cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbi5pbWFnZUNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA3NSU7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGVzbW9rZTtcXG4gICAgcGFkZGluZzogMTVweDtcXG5cXG59XFxuLmNvdmVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLmNhcmRGb290ZXJ7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxucHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLmZhLWNpcmNsZS14bWFya3tcXG5jb2xvcjogd2hpdGVcXG47fVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCBjaGFuZ2VWaWV3U3RhdHVzIGZyb20gJy4vY2hhbmdlUmVhZFN0YXR1cyc7XG5pbXBvcnQgZGVsZXRlQm9vayBmcm9tICcuL2RlbGV0ZUJvb2snO1xuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyVG9DYXJkKG1vZGUpIHtcbiAgY29uc29sZS5sb2cobW9kZSk7XG5cbiAgY29uc3QgZXllSWNvbnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV5ZScpXTtcbiAgZXllSWNvbnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VWaWV3U3RhdHVzKTtcbiAgfSk7XG4gIGNvbnN0IGRlbGV0ZUljb25zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUnKV07XG4gIGRlbGV0ZUljb25zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlQm9vayk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhZGRFdmVudExpc3RlbmVyVG9DYXJkO1xuIiwiY29uc3QgYm9va0ZhY3RvcnkgPSAobmFtZSwgYXV0aG9yLCBwYWdlcywgc3JjLCBpZCwgcmVhZCkgPT4gKHtcbiAgbmFtZSxcbiAgYXV0aG9yLFxuICBwYWdlcyxcbiAgc3JjLFxuICBpZCxcbiAgcmVhZCxcblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGJvb2tGYWN0b3J5O1xuIiwiaW1wb3J0IGJvb2tGYWN0b3J5IGZyb20gJy4vYm9va0ZhY3RvcnknO1xuaW1wb3J0IGRpc3BsYXlCb29rcyBmcm9tICcuL2Rpc3BsYXlCb29rcyc7XG5pbXBvcnQgcmVzZXRGb3JtIGZyb20gJy4vcmVzZXRGb3JtJztcbmltcG9ydCBzYXZlVG9Mb2NhbFN0b3JhZ2UgZnJvbSAnLi9zYXZlVG9Mb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IHNldEVycm9yRm9yIGZyb20gJy4vc2V0RXJyb3JGb3InO1xuaW1wb3J0IHNldFN1Y2Nlc0ZvciBmcm9tICcuL3NldFN1Y2Nlc0Zvcic7XG5cbmZ1bmN0aW9uIGNhcHR1cmVJbnB1dChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgLy8gUmVhZCB1c2VyIGlucHV0XG4gIGNvbnN0IGJvb2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jvb2tOYW1lJyk7XG4gIGNvbnN0IGJvb2tBdXRob3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9va0F1dGhvcicpO1xuICBjb25zdCBib29rUGFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9va1BhZ2VzJykudmFsdWU7XG4gIGNvbnN0IGltZ1NyYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWdVcmwnKS52YWx1ZTtcbiAgY29uc3QgdW5pcXVlSWQgPSBEYXRlLm5vdygpO1xuICAvLyBWYWxpZGF0aW9uXG4gIGlmIChib29rTmFtZS52YWx1ZSA9PT0gJycpIHtcbiAgICBzZXRFcnJvckZvcihib29rTmFtZSwgJ1BsZWFzZSBTdWJtaXQgQSBOYW1lJyk7XG4gICAgcmV0dXJuO1xuICB9IGlmIChib29rTmFtZS52YWx1ZSAhPT0gJycpIHtcbiAgICBzZXRTdWNjZXNGb3IoYm9va05hbWUpO1xuICB9XG4gIGlmIChib29rQXV0aG9yLnZhbHVlID09PSAnJykge1xuICAgIHNldEVycm9yRm9yKGJvb2tBdXRob3IsICdQbGVhc2UgU3VibWl0IEJvb2tzIEF1dGhvcicpO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBDcmVhdGUgT2JqZWN0IHRvIHN0b3JlIHVzZXIncyBpbnB1dFxuICBjb25zdCBib29rID0gYm9va0ZhY3RvcnkoYm9va05hbWUudmFsdWUsIGJvb2tBdXRob3IudmFsdWUsIGJvb2tQYWdlcywgaW1nU3JjLCB1bmlxdWVJZCwgZmFsc2UpO1xuICBjb25zb2xlLmxvZyhib29rKTtcbiAgLy8gU2F2ZSBib29rIGluIGxvY2FsIHN0b3JhZ2VcblxuICBzYXZlVG9Mb2NhbFN0b3JhZ2UoYm9vayk7XG4gIHJlc2V0Rm9ybSgpO1xuICBkaXNwbGF5Qm9va3MoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FwdHVyZUlucHV0O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgZGlzcGxheUJvb2tzIGZyb20gJy4vZGlzcGxheUJvb2tzJztcbmltcG9ydCBkaXNwbGF5RmluaXNoZWRCb29rcyBmcm9tICcuL2Rpc3BsYXlGaW5pc2hlZEJvb2tzJztcbmltcG9ydCBkaXNwbGF5VW5maW5pc2hlZEJvb2tzIGZyb20gJy4vZGlzcGxheVVuZmluaXNoZWRCb29rcyc7XG5cbmZ1bmN0aW9uIGNoYW5nZVZpZXdTdGF0dXMobW9kZSkge1xuICBjb25zdCBidG5Nb2RlID0gbW9kZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW1vZGUnKTtcbiAgY29uc29sZS5sb2coYnRuTW9kZSk7XG4gIGNvbnN0IGRhdGFSZWZlcmVuY2UgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1yZWZlcmVuY2UnKTtcbiAgY29uc29sZS5sb2coZGF0YVJlZmVyZW5jZSk7XG4gIC8vIEdldCBsb2NhbCBzdG9yYWdlIGl0ZW1cbiAgY29uc3QgbXlCb29rcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1N0b3JlZEJvb2tzJykpO1xuICBjb25zb2xlLmxvZyhteUJvb2tzKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuICBjb25zdCB0YXJnZXRJbmRleCA9IG15Qm9va3MuZmluZEluZGV4KChlbSkgPT4gZW0uaWQgPT0gZGF0YVJlZmVyZW5jZSk7XG4gIC8vIENoYW5nZSB0YXJnZXQncyByZWFkIHN0YXR1c1xuICBpZiAobXlCb29rc1t0YXJnZXRJbmRleF0ucmVhZCA9PT0gdHJ1ZSkge1xuICAgIG15Qm9va3NbdGFyZ2V0SW5kZXhdLnJlYWQgPSBmYWxzZTtcbiAgfSBlbHNlIGlmIChteUJvb2tzW3RhcmdldEluZGV4XS5yZWFkID09PSBmYWxzZSkge1xuICAgIG15Qm9va3NbdGFyZ2V0SW5kZXhdLnJlYWQgPSB0cnVlO1xuICB9XG4gIGNvbnNvbGUubG9nKG15Qm9va3NbdGFyZ2V0SW5kZXhdLnJlYWQpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnU3RvcmVkQm9va3MnLCBKU09OLnN0cmluZ2lmeShteUJvb2tzKSk7XG4gIGlmIChidG5Nb2RlID09PSAnJyB8fCBidG5Nb2RlID09PSBudWxsIHx8IGJ0bk1vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgIGRpc3BsYXlCb29rcygpO1xuICB9XG4gIGlmIChidG5Nb2RlID09PSAnZmluaXNoZWQnKSB7XG4gICAgZGlzcGxheUZpbmlzaGVkQm9va3MoKTtcbiAgfVxuICBpZiAoYnRuTW9kZSA9PT0gJ3VuZmluaXNoZWQnKSB7XG4gICAgZGlzcGxheVVuZmluaXNoZWRCb29rcygpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNoYW5nZVZpZXdTdGF0dXM7XG4iLCJmdW5jdGlvbiBjbGVhclNjcmVlbigpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGlmIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsZWFyU2NyZWVuO1xuIiwiaW1wb3J0IHtcbiAgY2FyZCwgZXllLCBkZWxldGVJbWcsICRib29rTmFtZSwgJGJvb2tBdXRob3IsXG4gICRib29rUGFnZXMsICRib29rUmVhZCwgaW1hZ2VDb250YWluZXIsXG59IGZyb20gJy4vZG9tQ29udGVudCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvb2tDYXJkKGVsZW1lbnQsIG1vZGUpIHtcbiAgLy8gQ2hhbmdlIHRleHQgY29udGVudCBvZiB0aGUgY2FyZFxuICBkZWxldGVJbWcuc2V0QXR0cmlidXRlKCdkYXRhLXJlZmVyZW5jZScsIGVsZW1lbnQuaWQpO1xuICBleWUuc2V0QXR0cmlidXRlKCdkYXRhLXJlZmVyZW5jZScsIGVsZW1lbnQuaWQpO1xuICBleWUuc2V0QXR0cmlidXRlKCdhbHQnLCAnU3dpdGNoIEJvb2tzIENvbXBsZXRpb24gU3RhdHVzJyk7XG4gICRib29rTmFtZS50ZXh0Q29udGVudCA9IGVsZW1lbnQubmFtZTtcbiAgJGJvb2tBdXRob3IudGV4dENvbnRlbnQgPSBlbGVtZW50LmF1dGhvcjtcbiAgJGJvb2tQYWdlcy50ZXh0Q29udGVudCA9IGVsZW1lbnQucGFnZXM7XG4gIGltYWdlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1yZWZlcmVuY2UnLCBlbGVtZW50LmlkKTtcbiAgaWYgKGVsZW1lbnQucmVhZCA9PT0gZmFsc2UpIHtcbiAgICAkYm9va1JlYWQudGV4dENvbnRlbnQgPSAnTm90IFJlYWQgWWV0JztcbiAgfSBlbHNlIGlmIChlbGVtZW50LnJlYWQgPT09IHRydWUpIHtcbiAgICAkYm9va1JlYWQudGV4dENvbnRlbnQgPSAnQm9vayBDb21wbGV0ZWQnO1xuICB9XG4gIGlmIChtb2RlID09PSBudWxsIHx8IG1vZGUgPT09ICcnIHx8IG1vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgIGV5ZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kZScsICcnKTtcbiAgICBkZWxldGVJbWcuc2V0QXR0cmlidXRlKCdkYXRhLW1vZGUnLCAnJyk7XG4gIH1cbiAgaWYgKG1vZGUgPT09ICdmaW5pc2hlZCcpIHtcbiAgICBleWUuc2V0QXR0cmlidXRlKCdkYXRhLW1vZGUnLCAnZmluaXNoZWQnKTtcbiAgICBkZWxldGVJbWcuc2V0QXR0cmlidXRlKCdkYXRhLW1vZGUnLCAnZmluaXNoZWQnKTtcbiAgfVxuICBpZiAobW9kZSA9PT0gJ3VuZmluaXNoZWQnKSB7XG4gICAgZXllLnNldEF0dHJpYnV0ZSgnZGF0YS1tb2RlJywgJ3VuZmluaXNoZWQnKTtcbiAgICBkZWxldGVJbWcuc2V0QXR0cmlidXRlKCdkYXRhLW1vZGUnLCAndW5maW5pc2hlZCcpO1xuICB9XG4gIHJldHVybiBjYXJkO1xufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQm9va0NhcmQ7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCBkaXNwbGF5Qm9va3MgZnJvbSAnLi9kaXNwbGF5Qm9va3MnO1xuaW1wb3J0IGRpc3BsYXlGaW5pc2hlZEJvb2tzIGZyb20gJy4vZGlzcGxheUZpbmlzaGVkQm9va3MnO1xuaW1wb3J0IGRpc3BsYXlVbmZpbmlzaGVkQm9va3MgZnJvbSAnLi9kaXNwbGF5VW5maW5pc2hlZEJvb2tzJztcblxuZnVuY3Rpb24gZGVsZXRlQm9vaygpIHtcbiAgY29uc3QgbW9kZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLW1vZGUnKTtcbiAgY29uc29sZS5sb2cobW9kZSk7XG4gIGNvbnN0IGRhdGFSZWZlcmVuY2UgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1yZWZlcmVuY2UnKTtcbiAgLy8gR2V0IGxvY2FsIHN0b3JhZ2UgaXRlbVxuICBjb25zdCBteUJvb2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU3RvcmVkQm9va3MnKSk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcbiAgY29uc3QgdGFyZ2V0SW5kZXggPSBteUJvb2tzLmZpbmRJbmRleCgoZW0pID0+IGVtLmlkID09IGRhdGFSZWZlcmVuY2UpO1xuICAvLyBEZWxldGUgdGFyZ2V0IGl0ZW1cbiAgbXlCb29rcy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnU3RvcmVkQm9va3MnLCBKU09OLnN0cmluZ2lmeShteUJvb2tzKSk7XG4gIGlmIChtb2RlID09PSAnJyB8fCBtb2RlID09PSBudWxsIHx8IG1vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgIGRpc3BsYXlCb29rcygpO1xuICB9XG4gIGlmIChtb2RlID09PSAnZmluaXNoZWQnKSB7XG4gICAgZGlzcGxheUZpbmlzaGVkQm9va3MoKTtcbiAgfVxuICBpZiAobW9kZSA9PT0gJ3VuZmluaXNoZWQnKSB7XG4gICAgZGlzcGxheVVuZmluaXNoZWRCb29rcygpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZUJvb2s7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcbmltcG9ydCBhZGRFdmVudExpc3RlbmVyVG9DYXJkIGZyb20gJy4vYWRkRXZlbnRMaXN0ZW5lclRvQ2FyZCc7XG5pbXBvcnQgY2xlYXJTY3JlZW4gZnJvbSAnLi9jbGVhclNjcmVlbic7XG5pbXBvcnQgY3JlYXRlQm9va0NhcmQgZnJvbSAnLi9jcmVhdGVCb29rQ2FyZCc7XG5pbXBvcnQgbG9hZEJvb2tDYXJkSW1hZ2VzIGZyb20gJy4vbG9hZEJvb2tjYXJkSW1hZ2VzJztcblxuZnVuY3Rpb24gZGlzcGxheUJvb2tzKCkge1xuICBjbGVhclNjcmVlbigpO1xuICAvLyBHZXQgbG9jYWwgc3RvcmFnZSBrZXkgYW5kIGFwcGVuZCBlYWNoIGJvb2sgdG8gYSBET00gZWxlbWVudFxuICAvLyBJZiBsb2NhbCBzdG9yYWdlIGlzIGVtcHR5XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU3RvcmVkQm9va3MnKSA9PSAnJykge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29uc3QgbXlTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU3RvcmVkQm9va3MnKSk7XG4gIG15U3RvcmFnZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgYm9va0NhcmQgPSBjcmVhdGVCb29rQ2FyZChlbGVtZW50KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJvb2tDYXJkLmNsb25lTm9kZSh0cnVlKSk7XG4gIH0pO1xuICBhZGRFdmVudExpc3RlbmVyVG9DYXJkKCk7XG4gIGxvYWRCb29rQ2FyZEltYWdlcygpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Qm9va3M7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCBhZGRFdmVudExpc3RlbmVyVG9DYXJkIGZyb20gJy4vYWRkRXZlbnRMaXN0ZW5lclRvQ2FyZCc7XG5pbXBvcnQgbG9hZEJvb2tDYXJkSW1hZ2VzIGZyb20gJy4vbG9hZEJvb2tjYXJkSW1hZ2VzJztcbmltcG9ydCBjbGVhclNjcmVlbiBmcm9tICcuL2NsZWFyU2NyZWVuJztcbmltcG9ydCBjcmVhdGVCb29rQ2FyZCBmcm9tICcuL2NyZWF0ZUJvb2tDYXJkJztcblxuZnVuY3Rpb24gZGlzcGxheUZpbmlzaGVkQm9va3MoKSB7XG4gIGNsZWFyU2NyZWVuKCk7XG4gIC8vIEdldCBsb2NhbCBzdG9yYWdlIGtleSBhbmQgYXBwZW5kIGVhY2ggYm9vayB0byBhIERPTSBlbGVtZW50XG4gIC8vIElmIGxvY2FsIHN0b3JhZ2UgaXMgZW1wdHlcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdTdG9yZWRCb29rcycpID09PSAnJykge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29uc3QgbXlTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU3RvcmVkQm9va3MnKSk7XG4gIG15U3RvcmFnZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQucmVhZCA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgYm9va0NhcmQgPSBjcmVhdGVCb29rQ2FyZChlbGVtZW50LCAnZmluaXNoZWQnKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYm9va0NhcmQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICB9XG4gIH0pO1xuICBhZGRFdmVudExpc3RlbmVyVG9DYXJkKCdmaW5pc2hlZCcpO1xuICBsb2FkQm9va0NhcmRJbWFnZXMoKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlGaW5pc2hlZEJvb2tzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgYWRkRXZlbnRMaXN0ZW5lclRvQ2FyZCBmcm9tICcuL2FkZEV2ZW50TGlzdGVuZXJUb0NhcmQnO1xuaW1wb3J0IGxvYWRCb29rQ2FyZEltYWdlcyBmcm9tICcuL2xvYWRCb29rY2FyZEltYWdlcyc7XG5pbXBvcnQgY2xlYXJTY3JlZW4gZnJvbSAnLi9jbGVhclNjcmVlbic7XG5pbXBvcnQgY3JlYXRlQm9va0NhcmQgZnJvbSAnLi9jcmVhdGVCb29rQ2FyZCc7XG5cbmZ1bmN0aW9uIGRpc3BsYXlVbmZpbmlzaGVkQm9va3MoKSB7XG4gIGNsZWFyU2NyZWVuKCk7XG4gIC8vIEdldCBsb2NhbCBzdG9yYWdlIGtleSBhbmQgYXBwZW5kIGVhY2ggYm9vayB0byBhIERPTSBlbGVtZW50XG4gIC8vIElmIGxvY2FsIHN0b3JhZ2UgaXMgZW1wdHlcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdTdG9yZWRCb29rcycpID09PSAnJykge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29uc3QgbXlTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU3RvcmVkQm9va3MnKSk7XG4gIG15U3RvcmFnZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQucmVhZCA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IGJvb2tDYXJkID0gY3JlYXRlQm9va0NhcmQoZWxlbWVudCwgJ3VuZmluaXNoZWQnKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYm9va0NhcmQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICB9XG4gIH0pO1xuICBhZGRFdmVudExpc3RlbmVyVG9DYXJkKCd1bmZpbmlzaGVkJyk7XG4gIGxvYWRCb29rQ2FyZEltYWdlcygpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5VW5maW5pc2hlZEJvb2tzO1xuIiwiaW1wb3J0IGV5ZUljb24gZnJvbSAnLi9pbWcvZXllLnBuZyc7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICcuL2ltZy9kZWxldGUucG5nJztcbi8vIEJvb2sgY2FyZFxuY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4vLyBIZWFkZXJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NhcmRIZWFkZXInKTtcbmNvbnN0IGV5ZSA9IG5ldyBJbWFnZSgpO1xuZXllLnNyYyA9IGV5ZUljb247XG5leWUuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuZXllLmNsYXNzTGlzdC5hZGQoJ2V5ZScpO1xuY29uc3QgZGVsZXRlSW1nID0gbmV3IEltYWdlKCk7XG5kZWxldGVJbWcuc3JjID0gZGVsZXRlSWNvbjtcbmRlbGV0ZUltZy5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG5kZWxldGVJbWcuY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG5cbmhlYWRlci5hcHBlbmRDaGlsZChleWUpO1xuaGVhZGVyLmFwcGVuZENoaWxkKGRlbGV0ZUltZyk7XG5jYXJkLmFwcGVuZENoaWxkKGhlYWRlcik7XG4vLyBJbWFnZSBjb250YWluZXJcbmNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5pbWFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbWFnZUNvbnRhaW5lcicpO1xuY2FyZC5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lcik7XG4vLyBGb290ZXJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2NhcmRGb290ZXInKTtcbmNvbnN0ICRib29rTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiRib29rTmFtZS5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG4kYm9va05hbWUuc2V0QXR0cmlidXRlKCdkYXRhLWluZm8nLCAnYm9va05hbWUnKTtcbmNvbnN0ICRib29rQXV0aG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuJGJvb2tBdXRob3IuY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuJGJvb2tBdXRob3Iuc2V0QXR0cmlidXRlKCdkYXRhLWluZm8nLCAnYm9va0F1dGhvcicpO1xuY29uc3QgJGJvb2tQYWdlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiRib29rUGFnZXMuY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuJGJvb2tQYWdlcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5mbycsICdib29rUGFnZXMnKTtcbmNvbnN0ICRib29rUmVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiRib29rUmVhZC5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG4kYm9va1JlYWQuc2V0QXR0cmlidXRlKCdkYXRhLWluZm8nLCAnYm9va1JlYWQnKTtcbmZvb3Rlci5hcHBlbmRDaGlsZCgkYm9va05hbWUpO1xuZm9vdGVyLmFwcGVuZENoaWxkKCRib29rQXV0aG9yKTtcbmZvb3Rlci5hcHBlbmRDaGlsZCgkYm9va1BhZ2VzKTtcbmZvb3Rlci5hcHBlbmRDaGlsZCgkYm9va1JlYWQpO1xuY2FyZC5hcHBlbmRDaGlsZChmb290ZXIpO1xuZXhwb3J0IHtcbiAgY2FyZCwgZXllLCBkZWxldGVJbWcsICRib29rTmFtZSwgJGJvb2tBdXRob3IsXG4gICRib29rUGFnZXMsICRib29rUmVhZCwgaW1hZ2VDb250YWluZXIsXG59O1xuIiwiaW1wb3J0IGNhcHR1cmVJbnB1dCBmcm9tICcuL2NhcHR1cmVJbnB1dCc7XG5pbXBvcnQgZGlzcGxheUJvb2tzIGZyb20gJy4vZGlzcGxheUJvb2tzJztcbmltcG9ydCBkaXNwbGF5RmluaXNoZWRCb29rcyBmcm9tICcuL2Rpc3BsYXlGaW5pc2hlZEJvb2tzJztcbmltcG9ydCBkaXNwbGF5VW5maW5pc2hlZEJvb2tzIGZyb20gJy4vZGlzcGxheVVuZmluaXNoZWRCb29rcyc7XG5pbXBvcnQgaW5pdFN0b3JhZ2UgZnJvbSAnLi9pbml0U3RvcmFnZSc7XG5cbmZ1bmN0aW9uIGluaXRQYWdlKCkge1xuICAvLyBDcmVhdGUga2V5IGluIGxvY2FsIHN0b3JhZ2UgdG8gc2F2ZSBib29rc1xuICBpbml0U3RvcmFnZSgpO1xuICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gY2FwdHVyZSB1c2VyIGlucHV0XG4gIGNvbnN0IG1haW5Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW5Gb3JtJyk7XG4gIG1haW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGNhcHR1cmVJbnB1dCk7XG4gIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBzdW1tYXJ5IHNlY3Rpb25cbiAgY29uc3QgYWxsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbCcpO1xuICBhbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5Qm9va3MpO1xuICBjb25zdCBmaW5pc2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmluaXNoZWQnKTtcbiAgZmluaXNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUZpbmlzaGVkQm9va3MpO1xuICBjb25zdCB1bkZpbmlzaGVkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VuZmluaXNoZWQnKTtcbiAgdW5GaW5pc2hlZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlVbmZpbmlzaGVkQm9va3MpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0UGFnZTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5mdW5jdGlvbiBpbml0U3RvcmFnZSgpIHtcbiAgY29uc3QgbXlCb29rcyA9IFtdO1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1N0b3JlZEJvb2tzJykgPT09IG51bGwpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnU3RvcmVkQm9va3MnLCBteUJvb2tzKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0U3RvcmFnZTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgcGxhY2VIb2xkZXIgZnJvbSAnLi9pbWcvbm9Db3Zlci5qcGcnO1xuXG5mdW5jdGlvbiBsb2FkQm9va0NhcmRJbWFnZXMoKSB7XG4gIGNvbnN0IGltYWdlQ29udGFpbmVycyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW1hZ2VDb250YWluZXInKV07XG4gIGNvbnN0IG15Qm9va3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdTdG9yZWRCb29rcycpKTtcbiAgaW1hZ2VDb250YWluZXJzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBkYXRhUmVmZXJlbmNlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVmZXJlbmNlJyk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuICAgIGNvbnN0IGluZGV4UmVmZXJlbmNlID0gbXlCb29rcy5maW5kSW5kZXgoKGVtKSA9PiBlbS5pZCA9PSBkYXRhUmVmZXJlbmNlKTtcbiAgICBjb25zdCBteUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgbXlJbWFnZS5zcmMgPSBteUJvb2tzW2luZGV4UmVmZXJlbmNlXS5zcmM7XG4gICAgbXlJbWFnZS5jbGFzc0xpc3QuYWRkKCdjb3ZlcicpO1xuICAgIGVsZW1lbnQuYXBwZW5kKG15SW1hZ2UpO1xuICB9KTtcbiAgLy8gU2V0IFBsYWNlaG9sZGVycyBmb3IgaW1hZ2VzIHdpdGggbm8gdmFsaWQgc3JjXG4gIGNvbnN0IGFsbEltYWdlcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY292ZXInKV07XG4gIGFsbEltYWdlcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgaW1nU3JjID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgIGlmIChpbWdTcmMgPT09ICcnIHx8IGltZ1NyYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbGVtZW50LnNyYyA9IHBsYWNlSG9sZGVyO1xuICAgIH1cbiAgfSk7XG59XG5leHBvcnQgZGVmYXVsdCBsb2FkQm9va0NhcmRJbWFnZXM7XG4iLCJmdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gIGRvY3VtZW50LmZvcm1zWzBdLnJlc2V0KCk7XG4gIGNvbnN0IGJvb2tOYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9va05hbWUnKTtcbiAgY29uc3QgYm9va0F1dGhvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib29rQXV0aG9yJyk7XG4gIGNvbnN0IHhtYXJrcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmEtY2hlY2snKV07XG4gIGNvbnN0IGNoZWNrID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYS14bWFyaycpXTtcbiAgY29uc3Qgc21hbGwgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc21hbGwnKV07XG4gIGJvb2tOYW1lSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgYm9va05hbWVJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdzdWNjZXNzJyk7XG4gIGJvb2tBdXRob3IuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgYm9va0F1dGhvci5jbGFzc0xpc3QucmVtb3ZlKCdzdWNjZXNzJyk7XG4gIHhtYXJrcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc3VjY2VzcycpO1xuICB9KTtcbiAgY2hlY2suZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3N1Y2Nlc3MnKTtcbiAgfSk7XG4gIHNtYWxsLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZXNldEZvcm07XG4iLCJmdW5jdGlvbiBzYXZlVG9Mb2NhbFN0b3JhZ2Uob2JqZWN0KSB7XG4gIC8vIEdldCBsb2NhbCBzdG9yYWdlIGtleVxuICAvLyBMb2dpYyB0byBtYW5hZ2UgZW50cnkgd2hlbiBsb2NhbCB0aGlzIGxvY2FsIHN0b3JhZ2Uga2V5IGlzIGVtcHR5XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU3RvcmVkQm9va3MnKSA9PT0gJycpIHtcbiAgICBjb25zdCBteUJvb2tzID0gW107XG4gICAgbXlCb29rcy5wdXNoKG9iamVjdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1N0b3JlZEJvb2tzJywgSlNPTi5zdHJpbmdpZnkobXlCb29rcykpO1xuICAgIC8vIExvZ2ljIHRvIG1hbmFnZSBlbnRyaWVzXG4gIH0gZWxzZSBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1N0b3JlZEJvb2tzJykgIT09IG51bGwpIHtcbiAgICBjb25zdCBteUFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU3RvcmVkQm9va3MnKSk7XG4gICAgbXlBcnJheS5wdXNoKG9iamVjdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1N0b3JlZEJvb2tzJywgSlNPTi5zdHJpbmdpZnkobXlBcnJheSkpO1xuICB9XG4gIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdTdG9yZWRCb29rcycpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2F2ZVRvTG9jYWxTdG9yYWdlO1xuIiwiZnVuY3Rpb24gc2V0RXJyb3JGb3IoaW5wdXQsIG1lc3NhZ2UpIHtcbiAgY29uc3QgZm9ybUNvbnRyb2wgPSBpbnB1dC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gIGNvbnNvbGUubG9nKGlucHV0KTtcbiAgY29uc3Qgc21hbGwgPSBmb3JtQ29udHJvbC5xdWVyeVNlbGVjdG9yKCdzbWFsbCcpO1xuICBzbWFsbC50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gIGNvbnN0IGNoZWNrZXIgPSBmb3JtQ29udHJvbC5xdWVyeVNlbGVjdG9yKCcuZmEteG1hcmsnKTtcbiAgY2hlY2tlci5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICBzbWFsbC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZXRFcnJvckZvcjtcbiIsImZ1bmN0aW9uIHNldFN1Y2Nlc0ZvcihpbnB1dCkge1xuICBjb25zdCBmb3JtQ29udHJvbCA9IGlucHV0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgY29uc3Qgc21hbGwgPSBmb3JtQ29udHJvbC5xdWVyeVNlbGVjdG9yKCdzbWFsbCcpO1xuICBjb25zdCBYbWFyayA9IGZvcm1Db250cm9sLnF1ZXJ5U2VsZWN0b3IoJy5mYS14bWFyaycpO1xuICBjb25zdCBjaGVjayA9IGZvcm1Db250cm9sLnF1ZXJ5U2VsZWN0b3IoJy5mYS1jaGVjaycpO1xuICAvLyBSZW1vdmluZyBlcnJvciBjbGFzc1xuICBzbWFsbC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICBYbWFyay5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICAvLyBBZGRpbmcgc3VjY2VzcyBjbGFzc1xuICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdzdWNjZXNzJyk7XG4gIGNoZWNrLmNsYXNzTGlzdC5hZGQoJ3N1Y2Nlc3MnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2V0U3VjY2VzRm9yO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgZGlzcGxheUJvb2tzIGZyb20gJy4vZGlzcGxheUJvb2tzJztcbmltcG9ydCBpbml0UGFnZSBmcm9tICcuL2luaXRQYWdlJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbml0UGFnZSgpO1xuZGlzcGxheUJvb2tzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=