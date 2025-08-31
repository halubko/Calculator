/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/styles.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/styles.scss ***!
  \********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

main {
  display: flex;
}
main .wrapper {
  background-color: rgb(128, 128, 128);
  width: fit-content;
  margin: 0 auto;
  border-radius: 10px;
  border: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
main .wrapper #output {
  width: calc(20vw + 5px);
  border-radius: 5px;
  border: 1px solid #fff;
  height: 70%;
  padding: 5px;
  margin: 0;
  font-size: 5vh;
  text-align: right;
  background-color: rgb(128, 128, 128);
  color: #fff;
}
main .wrapper #output:focus {
  outline: none;
}
main .wrapper #output::-webkit-outer-spin-button, main .wrapper #output::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
main .wrapper .buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 20px;
  gap: 5px;
  width: fit-content;
}
main .wrapper .buttons button {
  height: 5vw;
  width: 5vw;
  background-color: rgb(168, 168, 168);
  border: none;
  border-radius: 5px;
  font-size: 3.5vh;
  color: #fff;
}
main .wrapper .buttons button:active {
  background-color: rgb(134.4, 134.4, 134.4);
}
main .wrapper .buttons #zero {
  grid-column: span 2;
  width: auto;
}
main .wrapper .buttons .functional {
  background-color: rgb(255, 183, 0);
}
main .wrapper .buttons .functional:active {
  background-color: rgb(204, 146.4, 0);
}
main .wrapper .buttons #active {
  background-color: rgb(255, 191, 29);
  border: 1px solid #fff;
}
main .wrapper .buttons .top {
  background-color: rgb(143, 143, 143);
}
main .wrapper .buttons .top:active {
  background-color: rgb(114.4, 114.4, 114.4);
}

header h1 {
  text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/assets/styles/styles.scss"],"names":[],"mappings":"AAQA;EACE,YAAA;EACA,SAAA;EACA,UAAA;AAPF;;AAUA;EACE,aAAA;AAPF;AAQE;EACE,oCAfuB;EAgBvB,kBAAA;EACA,cAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;AANJ;AAQI;EACE,uBAAA;EACA,kBAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;EACA,cAAA;EACA,iBAAA;EACA,oCAjCqB;EAkCrB,WA/BO;AAyBb;AAOM;EACE,aAAA;AALR;AAOM;EAEE,wBAAA;EACA,SAAA;AANR;AAUI;EACE,aAAA;EACA,qCAAA;EACA,gBAAA;EACA,QAAA;EACA,kBAAA;AARN;AAUM;EACE,WAAA;EACA,UAAA;EACA,oCAtDkB;EAuDlB,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,WAxDK;AAgDb;AASQ;EACE,0CAAA;AAPV;AAWM;EACE,mBAAA;EACA,WAAA;AATR;AAYM;EACE,kCAAA;AAVR;AAWQ;EACE,oCAAA;AATV;AAaM;EACE,mCAAA;EACA,sBAAA;AAXR;AAcM;EACE,oCAjFsB;AAqE9B;AAaQ;EACE,0CAAA;AAXV;;AAmBE;EACE,kBAAA;AAhBJ","sourcesContent":["@use \"sass:color\";\n\n$wrapper-background-color: rgb(128, 128, 128);\n$button-background-color: rgb(168, 168, 168);\n$button-top-background-color: rgb(143, 143, 143);\n$text-color: #fff;\n\n\nhtml, body {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nmain{\n  display: flex;\n  .wrapper{\n    background-color: $wrapper-background-color;\n    width: fit-content;\n    margin: 0 auto;\n    border-radius: 10px;\n    border: none;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n\n    #output{\n      width: calc(4 * 5vw + 5px);\n      border-radius: 5px;\n      border: 1px solid $text-color;\n      height: 70%;\n      padding: 5px;\n      margin: 0;\n      font-size: 5vh;\n      text-align: right;\n      background-color: $wrapper-background-color;\n      color: $text-color;\n      &:focus{\n        outline: none;\n      }\n      &::-webkit-outer-spin-button,\n      &::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n      }\n    }\n\n    .buttons{\n      display: grid;\n      grid-template-columns: repeat(4, 1fr);\n      margin-top: 20px;\n      gap: 5px;\n      width: fit-content;\n\n      button{\n        height: 5vw;\n        width: 5vw;\n        background-color: $button-background-color;\n        border: none;\n        border-radius: 5px;\n        font-size: 3.5vh;\n        color: $text-color;\n        &:active {\n          background-color: color.scale($button-background-color, $lightness: -20%);\n        }\n      }\n\n      #zero{\n        grid-column: span 2;\n        width: auto;\n      }\n\n      .functional{\n        background-color: rgb(255, 183, 0);\n        &:active {\n          background-color: color.scale(rgb(255, 183, 0), $lightness: -20%);\n        }\n      }\n\n      #active{\n        background-color: rgb(255, 191, 29);\n        border: 1px solid $text-color;\n      }\n\n      .top{\n        background-color: $button-top-background-color;\n        &:active {\n          background-color: color.scale($button-top-background-color, $lightness: -20%);\n        }\n      }\n    }\n  }\n}\n\nheader{\n  h1{\n    text-align: center;\n  }\n}\n\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/assets/styles/styles.scss":
/*!***************************************!*\
  !*** ./src/assets/styles/styles.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/calculate.js":
/*!**************************!*\
  !*** ./src/calculate.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculate: () => (/* binding */ calculate)
/* harmony export */ });
function calculate(num1, num2, operator) {
   num1 = Number(num1)
   num2 = Number(num2)

   switch (operator) {
      case "add":
         return num1 + num2
      case "subtract":
         return num1 - num2
      case "multiply":
         return num1 * num2
      case "divide":
         return num2 !== 0 ? num1 / num2 : "Division by zero"
      default:
         return "Unknown operation"
   }
}


/***/ }),

/***/ "./src/calculator.js":
/*!***************************!*\
  !*** ./src/calculator.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCalculator: () => (/* binding */ createCalculator)
/* harmony export */ });
/* harmony import */ var _calculate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculate */ "./src/calculate.js");


function createCalculator() {
   let num1 = null
   let selected_operator = null
   let output = null
   let clearScreen = false

   document.addEventListener("DOMContentLoaded", () => {
      output = document.getElementById("output")
   })

   return {
      clearBtn() {
         if (output.value === "0") {
            selected_operator = null
            num1 = null

            document.querySelectorAll(".functional").forEach((btn) => {
               btn.removeAttribute("id")
            })
            document.getElementById("clear").innerText = "AC"
         } else if (output.value.length <= 1) {
            output.value = "0"

            document.getElementById("clear").innerText = "AC"
         } else {
            output.value = output.value.slice(0, -1)
         }
      },

      funcBtn(btn, operator) {
         if (operator !== "equals") {
            document.querySelectorAll(".functional").forEach((past) => {
               past.removeAttribute("id")
            })
            btn.id = "active"
            if (!selected_operator || clearScreen) {
               num1 = output.value
            }
            num1 = output.value
            clearScreen = true
            selected_operator = operator
         }

         if (operator === "equals") {
            const active_btn = document.getElementById("active")
            if (active_btn) {
               output.value = (0,_calculate__WEBPACK_IMPORTED_MODULE_0__.calculate)(num1, output.value, selected_operator)

               document.querySelectorAll(".functional").forEach((btn) => {
                  btn.removeAttribute("id")
                  selected_operator = null
               })
            }
         }
      },

      inputNumber(input_data) {
         if (input_data === "." && output.value.includes(".")) {
            return
         }

         if (clearScreen) {
            output.value = ""
            clearScreen = false
         }

         if (output.value === "0" && input_data !== ".") {
            output.value = ""
            output.value += input_data
            document.getElementById("clear").innerText = `C`
         } else {
            document.getElementById("clear").innerText = `C`
            output.value += input_data
         }
      },

      countPercent() {
         const percentage = 100

         if (selected_operator === "add" || selected_operator === "subtract") {
            output.value = (num1 * output.value) / percentage
         } else {
            output.value = output.value / percentage
         }
      },
   }
}


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/styles.scss */ "./src/assets/styles/styles.scss");
/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculator */ "./src/calculator.js");



const calculator = (0,_calculator__WEBPACK_IMPORTED_MODULE_1__.createCalculator)()

document.getElementById("app").innerHTML = `
<div class="wrapper">
            <div class="screen">
               <label for="output">
                  <input type="text" id="output" value="0" pattern="[0-9]*\\.?[0-9]*" />
               </label>
            </div>
            <div class="buttons">
               <button class="top" id="clear">AC</button>
               <button class="top" id="invert">+/-</button>
               <button class="top" id="percent">%</button>
               <button class="functional" operator="divide">/</button>
               <button class="input_btn" input_data="7">7</button>
               <button class="input_btn" input_data="8">8</button>
               <button class="input_btn" input_data="9">9</button>
               <button class="functional" operator="multiply">x</button>
               <button class="input_btn" input_data="4">4</button>
               <button class="input_btn" input_data="5">5</button>
               <button class="input_btn" input_data="6">6</button>
               <button class="functional" operator="subtract">-</button>
               <button class="input_btn" input_data="1">1</button>
               <button class="input_btn" input_data="2">2</button>
               <button class="input_btn" input_data="3">3</button>
               <button class="functional" operator="add">+</button>
               <button class="input_btn" input_data="0" id="zero">0</button>
               <button class="input_btn" input_data=".">.</button>
               <button class="functional" operator="equals">=</button>
            </div>
         </div>
`

//Input(text) validation
document.getElementById("output").addEventListener("input", (e) => {
   e.target.value = e.target.value.replace(/[^0-9.]/g, "")
})

//Input with calculator's keyboard
document.querySelectorAll(".input_btn").forEach((btn) =>
   btn.addEventListener("click", () => {
      const input_data = btn.getAttribute("input_data")
      calculator.inputNumber(input_data)
   })
)

//AC button
document.getElementById("clear").addEventListener("click", () => {
   calculator.clearBtn()
})

//Functional buttons
document.querySelectorAll(".functional").forEach((btn) =>
   btn.addEventListener("click", () => {
      const operator = btn.getAttribute("operator")

      calculator.funcBtn(btn, operator)
   })
)

//Invert button
document.getElementById("invert").addEventListener("click", () => {
   const output = document.getElementById("output")
   output.value = -output.value
})

//Percent button
document.getElementById("percent").addEventListener("click", () => {
   calculator.countPercent()
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNqQjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0dBQWdHLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsYUFBYSxZQUFZLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssYUFBYSxPQUFPLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyw4Q0FBOEMsa0RBQWtELCtDQUErQyxtREFBbUQsb0JBQW9CLGtCQUFrQixpQkFBaUIsY0FBYyxlQUFlLEdBQUcsU0FBUyxrQkFBa0IsYUFBYSxrREFBa0QseUJBQXlCLHFCQUFxQiwwQkFBMEIsbUJBQW1CLG9CQUFvQixvQkFBb0IsNkJBQTZCLGdCQUFnQixtQ0FBbUMsMkJBQTJCLHNDQUFzQyxvQkFBb0IscUJBQXFCLGtCQUFrQix1QkFBdUIsMEJBQTBCLG9EQUFvRCwyQkFBMkIsZ0JBQWdCLHdCQUF3QixTQUFTLDJFQUEyRSxtQ0FBbUMsb0JBQW9CLFNBQVMsT0FBTyxpQkFBaUIsc0JBQXNCLDhDQUE4Qyx5QkFBeUIsaUJBQWlCLDJCQUEyQixpQkFBaUIsc0JBQXNCLHFCQUFxQixxREFBcUQsdUJBQXVCLDZCQUE2QiwyQkFBMkIsNkJBQTZCLG9CQUFvQixzRkFBc0YsV0FBVyxTQUFTLGdCQUFnQiw4QkFBOEIsc0JBQXNCLFNBQVMsc0JBQXNCLDZDQUE2QyxvQkFBb0IsOEVBQThFLFdBQVcsU0FBUyxrQkFBa0IsOENBQThDLHdDQUF3QyxTQUFTLGVBQWUseURBQXlELG9CQUFvQiwwRkFBMEYsV0FBVyxTQUFTLE9BQU8sS0FBSyxHQUFHLFdBQVcsT0FBTyx5QkFBeUIsS0FBSyxHQUFHLHVCQUF1QjtBQUN2NUY7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUN2RjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7O0FDZmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0M7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0I7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQSxNQUFxRztBQUNyRyxNQUEyRjtBQUMzRixNQUFrRztBQUNsRyxNQUFxSDtBQUNySCxNQUE4RztBQUM5RyxNQUE4RztBQUM5RyxNQUF5SjtBQUN6SjtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDZIQUFPOzs7O0FBSW1HO0FBQzNILE9BQU8saUVBQWUsNkhBQU8sSUFBSSw2SEFBTyxVQUFVLDZIQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN4QnRFO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCdUM7O0FBRWhDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHFEQUFTOztBQUV2QztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOzs7Ozs7O1VDeEZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztXQ05BLG1DOzs7Ozs7Ozs7Ozs7O0FDQW9DO0FBQ1c7O0FBRS9DLG1CQUFtQiw2REFBZ0I7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbGN1bGF0b3IvLi9zcmMvYXNzZXRzL3N0eWxlcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vc3JjL2Fzc2V0cy9zdHlsZXMvc3R5bGVzLnNjc3M/OWJiNCIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vc3JjL2NhbGN1bGF0ZS5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vc3JjL2NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sLCBib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxubWFpbiAud3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDEyOCwgMTI4KTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxubWFpbiAud3JhcHBlciAjb3V0cHV0IHtcbiAgd2lkdGg6IGNhbGMoMjB2dyArIDVweCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgaGVpZ2h0OiA3MCU7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDV2aDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDEyOCwgMTI4KTtcbiAgY29sb3I6ICNmZmY7XG59XG5tYWluIC53cmFwcGVyICNvdXRwdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxubWFpbiAud3JhcHBlciAjb3V0cHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLCBtYWluIC53cmFwcGVyICNvdXRwdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cbm1haW4gLndyYXBwZXIgLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBnYXA6IDVweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxubWFpbiAud3JhcHBlciAuYnV0dG9ucyBidXR0b24ge1xuICBoZWlnaHQ6IDV2dztcbiAgd2lkdGg6IDV2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OCwgMTY4LCAxNjgpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAzLjV2aDtcbiAgY29sb3I6ICNmZmY7XG59XG5tYWluIC53cmFwcGVyIC5idXR0b25zIGJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM0LjQsIDEzNC40LCAxMzQuNCk7XG59XG5tYWluIC53cmFwcGVyIC5idXR0b25zICN6ZXJvIHtcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbiAgd2lkdGg6IGF1dG87XG59XG5tYWluIC53cmFwcGVyIC5idXR0b25zIC5mdW5jdGlvbmFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTgzLCAwKTtcbn1cbm1haW4gLndyYXBwZXIgLmJ1dHRvbnMgLmZ1bmN0aW9uYWw6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMTQ2LjQsIDApO1xufVxubWFpbiAud3JhcHBlciAuYnV0dG9ucyAjYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTkxLCAyOSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG59XG5tYWluIC53cmFwcGVyIC5idXR0b25zIC50b3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQzLCAxNDMsIDE0Myk7XG59XG5tYWluIC53cmFwcGVyIC5idXR0b25zIC50b3A6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNC40LCAxMTQuNCwgMTE0LjQpO1xufVxuXG5oZWFkZXIgaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFRQTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQVBGOztBQVVBO0VBQ0UsYUFBQTtBQVBGO0FBUUU7RUFDRSxvQ0FmdUI7RUFnQnZCLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFOSjtBQVFJO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBakNxQjtFQWtDckIsV0EvQk87QUF5QmI7QUFPTTtFQUNFLGFBQUE7QUFMUjtBQU9NO0VBRUUsd0JBQUE7RUFDQSxTQUFBO0FBTlI7QUFVSTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FBUk47QUFVTTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBdERrQjtFQXVEbEIsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQXhESztBQWdEYjtBQVNRO0VBQ0UsMENBQUE7QUFQVjtBQVdNO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FBVFI7QUFZTTtFQUNFLGtDQUFBO0FBVlI7QUFXUTtFQUNFLG9DQUFBO0FBVFY7QUFhTTtFQUNFLG1DQUFBO0VBQ0Esc0JBQUE7QUFYUjtBQWNNO0VBQ0Usb0NBakZzQjtBQXFFOUI7QUFhUTtFQUNFLDBDQUFBO0FBWFY7O0FBbUJFO0VBQ0Usa0JBQUE7QUFoQkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwic2Fzczpjb2xvclxcXCI7XFxuXFxuJHdyYXBwZXItYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMTI4LCAxMjgpO1xcbiRidXR0b24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OCwgMTY4LCAxNjgpO1xcbiRidXR0b24tdG9wLWJhY2tncm91bmQtY29sb3I6IHJnYigxNDMsIDE0MywgMTQzKTtcXG4kdGV4dC1jb2xvcjogI2ZmZjtcXG5cXG5cXG5odG1sLCBib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbm1haW57XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLndyYXBwZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR3cmFwcGVyLWJhY2tncm91bmQtY29sb3I7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgI291dHB1dHtcXG4gICAgICB3aWR0aDogY2FsYyg0ICogNXZ3ICsgNXB4KTtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHRleHQtY29sb3I7XFxuICAgICAgaGVpZ2h0OiA3MCU7XFxuICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBmb250LXNpemU6IDV2aDtcXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd3JhcHBlci1iYWNrZ3JvdW5kLWNvbG9yO1xcbiAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcXG4gICAgICAmOmZvY3Vze1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICB9XFxuICAgICAgJjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcXG4gICAgICAmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmJ1dHRvbnN7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgICAgZ2FwOiA1cHg7XFxuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcblxcbiAgICAgIGJ1dHRvbntcXG4gICAgICAgIGhlaWdodDogNXZ3O1xcbiAgICAgICAgd2lkdGg6IDV2dztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRidXR0b24tYmFja2dyb3VuZC1jb2xvcjtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMy41dmg7XFxuICAgICAgICBjb2xvcjogJHRleHQtY29sb3I7XFxuICAgICAgICAmOmFjdGl2ZSB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLnNjYWxlKCRidXR0b24tYmFja2dyb3VuZC1jb2xvciwgJGxpZ2h0bmVzczogLTIwJSk7XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgICN6ZXJve1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgIH1cXG5cXG4gICAgICAuZnVuY3Rpb25hbHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE4MywgMCk7XFxuICAgICAgICAmOmFjdGl2ZSB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLnNjYWxlKHJnYigyNTUsIDE4MywgMCksICRsaWdodG5lc3M6IC0yMCUpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAjYWN0aXZle1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTkxLCAyOSk7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkdGV4dC1jb2xvcjtcXG4gICAgICB9XFxuXFxuICAgICAgLnRvcHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRidXR0b24tdG9wLWJhY2tncm91bmQtY29sb3I7XFxuICAgICAgICAmOmFjdGl2ZSB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLnNjYWxlKCRidXR0b24tdG9wLWJhY2tncm91bmQtY29sb3IsICRsaWdodG5lc3M6IC0yMCUpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5oZWFkZXJ7XFxuICBoMXtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGUobnVtMSwgbnVtMiwgb3BlcmF0b3IpIHtcbiAgIG51bTEgPSBOdW1iZXIobnVtMSlcbiAgIG51bTIgPSBOdW1iZXIobnVtMilcblxuICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgY2FzZSBcImFkZFwiOlxuICAgICAgICAgcmV0dXJuIG51bTEgKyBudW0yXG4gICAgICBjYXNlIFwic3VidHJhY3RcIjpcbiAgICAgICAgIHJldHVybiBudW0xIC0gbnVtMlxuICAgICAgY2FzZSBcIm11bHRpcGx5XCI6XG4gICAgICAgICByZXR1cm4gbnVtMSAqIG51bTJcbiAgICAgIGNhc2UgXCJkaXZpZGVcIjpcbiAgICAgICAgIHJldHVybiBudW0yICE9PSAwID8gbnVtMSAvIG51bTIgOiBcIkRpdmlzaW9uIGJ5IHplcm9cIlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgIHJldHVybiBcIlVua25vd24gb3BlcmF0aW9uXCJcbiAgIH1cbn1cbiIsImltcG9ydCB7IGNhbGN1bGF0ZSB9IGZyb20gXCIuL2NhbGN1bGF0ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYWxjdWxhdG9yKCkge1xuICAgbGV0IG51bTEgPSBudWxsXG4gICBsZXQgc2VsZWN0ZWRfb3BlcmF0b3IgPSBudWxsXG4gICBsZXQgb3V0cHV0ID0gbnVsbFxuICAgbGV0IGNsZWFyU2NyZWVuID0gZmFsc2VcblxuICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgICAgb3V0cHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXRcIilcbiAgIH0pXG5cbiAgIHJldHVybiB7XG4gICAgICBjbGVhckJ0bigpIHtcbiAgICAgICAgIGlmIChvdXRwdXQudmFsdWUgPT09IFwiMFwiKSB7XG4gICAgICAgICAgICBzZWxlY3RlZF9vcGVyYXRvciA9IG51bGxcbiAgICAgICAgICAgIG51bTEgPSBudWxsXG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZnVuY3Rpb25hbFwiKS5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgICAgICAgIGJ0bi5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xlYXJcIikuaW5uZXJUZXh0ID0gXCJBQ1wiXG4gICAgICAgICB9IGVsc2UgaWYgKG91dHB1dC52YWx1ZS5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gXCIwXCJcblxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbGVhclwiKS5pbm5lclRleHQgPSBcIkFDXCJcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdXRwdXQudmFsdWUgPSBvdXRwdXQudmFsdWUuc2xpY2UoMCwgLTEpXG4gICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBmdW5jQnRuKGJ0biwgb3BlcmF0b3IpIHtcbiAgICAgICAgIGlmIChvcGVyYXRvciAhPT0gXCJlcXVhbHNcIikge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mdW5jdGlvbmFsXCIpLmZvckVhY2goKHBhc3QpID0+IHtcbiAgICAgICAgICAgICAgIHBhc3QucmVtb3ZlQXR0cmlidXRlKFwiaWRcIilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBidG4uaWQgPSBcImFjdGl2ZVwiXG4gICAgICAgICAgICBpZiAoIXNlbGVjdGVkX29wZXJhdG9yIHx8IGNsZWFyU2NyZWVuKSB7XG4gICAgICAgICAgICAgICBudW0xID0gb3V0cHV0LnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBudW0xID0gb3V0cHV0LnZhbHVlXG4gICAgICAgICAgICBjbGVhclNjcmVlbiA9IHRydWVcbiAgICAgICAgICAgIHNlbGVjdGVkX29wZXJhdG9yID0gb3BlcmF0b3JcbiAgICAgICAgIH1cblxuICAgICAgICAgaWYgKG9wZXJhdG9yID09PSBcImVxdWFsc1wiKSB7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVfYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3RpdmVcIilcbiAgICAgICAgICAgIGlmIChhY3RpdmVfYnRuKSB7XG4gICAgICAgICAgICAgICBvdXRwdXQudmFsdWUgPSBjYWxjdWxhdGUobnVtMSwgb3V0cHV0LnZhbHVlLCBzZWxlY3RlZF9vcGVyYXRvcilcblxuICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mdW5jdGlvbmFsXCIpLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICAgICAgICAgICAgYnRuLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZF9vcGVyYXRvciA9IG51bGxcbiAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBpbnB1dE51bWJlcihpbnB1dF9kYXRhKSB7XG4gICAgICAgICBpZiAoaW5wdXRfZGF0YSA9PT0gXCIuXCIgJiYgb3V0cHV0LnZhbHVlLmluY2x1ZGVzKFwiLlwiKSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICB9XG5cbiAgICAgICAgIGlmIChjbGVhclNjcmVlbikge1xuICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gXCJcIlxuICAgICAgICAgICAgY2xlYXJTY3JlZW4gPSBmYWxzZVxuICAgICAgICAgfVxuXG4gICAgICAgICBpZiAob3V0cHV0LnZhbHVlID09PSBcIjBcIiAmJiBpbnB1dF9kYXRhICE9PSBcIi5cIikge1xuICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gXCJcIlxuICAgICAgICAgICAgb3V0cHV0LnZhbHVlICs9IGlucHV0X2RhdGFcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xlYXJcIikuaW5uZXJUZXh0ID0gYENgXG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbGVhclwiKS5pbm5lclRleHQgPSBgQ2BcbiAgICAgICAgICAgIG91dHB1dC52YWx1ZSArPSBpbnB1dF9kYXRhXG4gICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBjb3VudFBlcmNlbnQoKSB7XG4gICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gMTAwXG5cbiAgICAgICAgIGlmIChzZWxlY3RlZF9vcGVyYXRvciA9PT0gXCJhZGRcIiB8fCBzZWxlY3RlZF9vcGVyYXRvciA9PT0gXCJzdWJ0cmFjdFwiKSB7XG4gICAgICAgICAgICBvdXRwdXQudmFsdWUgPSAobnVtMSAqIG91dHB1dC52YWx1ZSkgLyBwZXJjZW50YWdlXG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gb3V0cHV0LnZhbHVlIC8gcGVyY2VudGFnZVxuICAgICAgICAgfVxuICAgICAgfSxcbiAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vYXNzZXRzL3N0eWxlcy9zdHlsZXMuc2Nzc1wiXG5pbXBvcnQgeyBjcmVhdGVDYWxjdWxhdG9yIH0gZnJvbSBcIi4vY2FsY3VsYXRvclwiXG5cbmNvbnN0IGNhbGN1bGF0b3IgPSBjcmVhdGVDYWxjdWxhdG9yKClcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikuaW5uZXJIVE1MID0gYFxuPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzY3JlZW5cIj5cbiAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJvdXRwdXRcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwib3V0cHV0XCIgdmFsdWU9XCIwXCIgcGF0dGVybj1cIlswLTldKlxcXFwuP1swLTldKlwiIC8+XG4gICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRvcFwiIGlkPVwiY2xlYXJcIj5BQzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRvcFwiIGlkPVwiaW52ZXJ0XCI+Ky8tPC9idXR0b24+XG4gICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidG9wXCIgaWQ9XCJwZXJjZW50XCI+JTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImZ1bmN0aW9uYWxcIiBvcGVyYXRvcj1cImRpdmlkZVwiPi88L2J1dHRvbj5cbiAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJpbnB1dF9idG5cIiBpbnB1dF9kYXRhPVwiN1wiPjc8L2J1dHRvbj5cbiAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJpbnB1dF9idG5cIiBpbnB1dF9kYXRhPVwiOFwiPjg8L2J1dHRvbj5cbiAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJpbnB1dF9idG5cIiBpbnB1dF9kYXRhPVwiOVwiPjk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJmdW5jdGlvbmFsXCIgb3BlcmF0b3I9XCJtdWx0aXBseVwiPng8L2J1dHRvbj5cbiAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJpbnB1dF9idG5cIiBpbnB1dF9kYXRhPVwiNFwiPjQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJpbnB1dF9idG5cIiBpbnB1dF9kYXRhPVwiNVwiPjU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJpbnB1dF9idG5cIiBpbnB1dF9kYXRhPVwiNlwiPjY8L2J1dHRvbj5cbiAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJmdW5jdGlvbmFsXCIgb3BlcmF0b3I9XCJzdWJ0cmFjdFwiPi08L2J1dHRvbj5cbiAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJpbnB1dF9idG5cIiBpbnB1dF9kYXRhPVwiMVwiPjE8L2J1dHRvbj5cbiAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJpbnB1dF9idG5cIiBpbnB1dF9kYXRhPVwiMlwiPjI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJpbnB1dF9idG5cIiBpbnB1dF9kYXRhPVwiM1wiPjM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJmdW5jdGlvbmFsXCIgb3BlcmF0b3I9XCJhZGRcIj4rPC9idXR0b24+XG4gICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiaW5wdXRfYnRuXCIgaW5wdXRfZGF0YT1cIjBcIiBpZD1cInplcm9cIj4wPC9idXR0b24+XG4gICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiaW5wdXRfYnRuXCIgaW5wdXRfZGF0YT1cIi5cIj4uPC9idXR0b24+XG4gICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZnVuY3Rpb25hbFwiIG9wZXJhdG9yPVwiZXF1YWxzXCI+PTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cbmBcblxuLy9JbnB1dCh0ZXh0KSB2YWxpZGF0aW9uXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFwiKS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgIGUudGFyZ2V0LnZhbHVlID0gZS50YXJnZXQudmFsdWUucmVwbGFjZSgvW14wLTkuXS9nLCBcIlwiKVxufSlcblxuLy9JbnB1dCB3aXRoIGNhbGN1bGF0b3IncyBrZXlib2FyZFxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbnB1dF9idG5cIikuZm9yRWFjaCgoYnRuKSA9PlxuICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBpbnB1dF9kYXRhID0gYnRuLmdldEF0dHJpYnV0ZShcImlucHV0X2RhdGFcIilcbiAgICAgIGNhbGN1bGF0b3IuaW5wdXROdW1iZXIoaW5wdXRfZGF0YSlcbiAgIH0pXG4pXG5cbi8vQUMgYnV0dG9uXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsZWFyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICBjYWxjdWxhdG9yLmNsZWFyQnRuKClcbn0pXG5cbi8vRnVuY3Rpb25hbCBidXR0b25zXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZ1bmN0aW9uYWxcIikuZm9yRWFjaCgoYnRuKSA9PlxuICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBvcGVyYXRvciA9IGJ0bi5nZXRBdHRyaWJ1dGUoXCJvcGVyYXRvclwiKVxuXG4gICAgICBjYWxjdWxhdG9yLmZ1bmNCdG4oYnRuLCBvcGVyYXRvcilcbiAgIH0pXG4pXG5cbi8vSW52ZXJ0IGJ1dHRvblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnZlcnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpXG4gICBvdXRwdXQudmFsdWUgPSAtb3V0cHV0LnZhbHVlXG59KVxuXG4vL1BlcmNlbnQgYnV0dG9uXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBlcmNlbnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgIGNhbGN1bGF0b3IuY291bnRQZXJjZW50KClcbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=