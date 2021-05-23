module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Account.js":
/*!*******************************!*\
  !*** ./components/Account.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\CatDany\\vscode\\RealTimeApp\\app\\components\\Account.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Account extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});
  }

  render() {
    const {
      cash = 0,
      shares = 0,
      pricePerShare = 0
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row w-75 m-auto",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "d-block w-100 h2 text-dark col-sm mt-3 border-gray",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row ml-2 mt-2 border-bottom border-gray",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-6 border-right border-gray",
              children: "Cash"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row ml-2 mt-2 border-bottom border-gray",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-6 border-right border-gray",
              children: "Shares"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-6",
              children: [Number(shares).toFixed(0), " ($", (Number(shares) * pricePerShare).toFixed(2), ")"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row ml-2 mt-2 border-bottom border-gray",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-6 border-right border-gray",
              children: "Total Value"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row ml-2 mt-2 border-gray",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-6 border-right border-gray",
              children: "Change"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-6",
              children: [Number((Number(cash) + Number(shares) * pricePerShare).toFixed(2) / 10000 * 100 - 100).toFixed(0), "%"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "d-block w-100 h2 text-dark col-sm mt-3 border-gray",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row ml-2 mt-2 border-bottom border-gray",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-6 border-right border-gray",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "number",
                className: `btn btn-primary text-uppercase mb-2 w-100`,
                name: "buy",
                value: this.state.buy,
                onChange: this.handleChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                type: "button",
                className: `btn btn-primary text-uppercase mb-2 w-100`,
                disabled: this.state.buy <= 0 || this.state.buy * pricePerShare > cash,
                onClick: this.handleBuy,
                children: "Buy"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row ml-2 mt-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-6 border-right border-gray",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "number",
                className: `btn btn-primary text-uppercase mb-2 w-100`,
                name: "sell",
                value: this.state.sell,
                onChange: this.handleChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                type: "button",
                className: `btn btn-primary text-uppercase mb-2 w-100`,
                disabled: this.state.sell <= 0 || this.state.sell > shares,
                onClick: this.handleSell,
                children: "Sell"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Account);

/***/ }),

/***/ "./components/Chart.js":
/*!*****************************!*\
  !*** ./components/Chart.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\CatDany\\vscode\\RealTimeApp\\app\\components\\Chart.js";



const Chart = props => {
  const {
    prices = [],
    days = []
  } = props;
  const chartData = {
    labels: days,
    datasets: [{
      label: 'Stock Price',
      lineTension: 0,
      backgroundColor: 'rgba(68, 204, 153, 0.05)',
      borderColor: 'rgba(68, 204, 153, 0.9)',
      borderWidth: 1,
      borderJoinStyle: 'round',
      pointRadius: 0,
      pointBorderColor: '#fff',
      pointBackgroundColor: 'rgba(68, 204, 153, 0.9)',
      pointBorderWidth: 0,
      data: prices
    }]
  };
  const chartOptions = {
    layout: {
      padding: {
        top: 25,
        bottom: 75,
        left: 75,
        right: 75
      }
    },
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          display: false
        }
      }]
    },
    animation: {
      duration: 0
    }
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Line"], {
      data: chartData,
      width: 100,
      height: 50,
      options: chartOptions
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Chart);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\CatDany\\vscode\\RealTimeApp\\app\\components\\Layout.js";

/* components/Layout.js */



const Layout = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      charSet: "utf-8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1, shrink-to-fit=no"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css",
      rel: "stylesheet",
      integrity: "sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6",
      crossorigin: "anonymous"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js",
      integrity: "sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf",
      crossorigin: "anonymous"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "stylesheet",
      href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
      children: props.pageTitle || 'Trading Simulation App'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined), props.children]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./node_modules/typeface-roboto/index.css":
/*!************************************************!*\
  !*** ./node_modules/typeface-roboto/index.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pusher-js */ "pusher-js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Account__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Account */ "./components/Account.js");
/* harmony import */ var _components_Chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Chart */ "./components/Chart.js");
/* harmony import */ var typeface_roboto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! typeface-roboto */ "./node_modules/typeface-roboto/index.css");
/* harmony import */ var typeface_roboto__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(typeface_roboto__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\CatDany\\vscode\\RealTimeApp\\app\\pages\\index.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class IndexPage extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      prices: [],
      days: [],
      cash: 0,
      shares: 0,
      pricePerShare: 0,
      buysell: 0
    });

    _defineProperty(this, "handleBuy", evt => {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/trade', {
        buy: this.state.buysell
      });
      this.setState({
        buysell: 0
      });
    });

    _defineProperty(this, "handleSell", evt => {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/trade', {
        sell: this.state.buysell
      });
      this.setState({
        buysell: 0
      });
    });

    _defineProperty(this, "handleChange", evt => {
      this.setState({
        buysell: evt.target.value
      });
    });
  }

  componentDidMount() {
    this.pusher = new pusher_js__WEBPACK_IMPORTED_MODULE_3___default.a("fb10b66411c2c06be210", {
      cluster: "eu",
      encrypted: true
    });
    this.channel = this.pusher.subscribe('trading');
    this.channel.bind('new-price', ({
      pricePerShare
    }) => {
      const prices = [...this.state.prices, pricePerShare];
      const days = [...this.state.days, prices.length];
      this.setState({
        prices,
        days,
        pricePerShare
      });
    });
    this.channel.bind('update-account', ({
      cash,
      shares
    }) => {
      this.setState({
        cash,
        shares
      });
    });
    this.pusher.connection.bind('connected', () => {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/load').then(response => {
        const prices = response.data.prices;
        const cash = response.data.cash;
        const shares = response.data.shares;
        const pricePerShare = response.data.pricePerShare;
        let days = [];

        for (let i = 1; i <= prices.length; i++) days = [...days, i];

        this.setState({
          prices,
          days,
          cash,
          shares,
          pricePerShare
        });
      });
    });
  }

  componentWillUnmount() {
    this.pusher.disconnect();
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      pageTitle: "Realtime Data Visualization",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "sliderFade",
        className: "carousel slide carousel-fade",
        "data-ride": "carousel",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ol", {
          className: "carousel-indicators",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            "data-target": "#sliderFade",
            "data-slide-to": "0",
            className: "active"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            "data-target": "#sliderFade",
            "data-slide-to": "1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            "data-target": "#sliderFade",
            "data-slide-to": "2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "carousel-inner",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "carousel-item active",
            style: {
              height: '100vh'
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "img/slider/bg1.jpg",
              className: "d-block w-100"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "carousel-caption d-none d-md-block",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                children: "TEXT TEXT TEXT"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "text text text text"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                className: "button",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "button__line button__line--top"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "button__line button__line--right"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "button__line button__line--bottom"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "button__line button__line--left"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 19
                }, this), "\u041D\u0430\u0447\u0430\u0442\u044C"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "carousel-item",
            style: {
              height: '100vh'
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "img/slider/bg2.jpg",
              className: "d-block w-100"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "carousel-caption d-none d-md-block",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                children: "TEXT TEXT TEXT222"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "text text text text"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "carousel-item",
            style: {
              height: '100vh'
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "img/slider/bg3.jpg",
              className: "d-block w-100"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "carousel-caption d-none d-md-block",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                children: "TEXT TEXT TEXT333"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "text text text text"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "carousel-control-prev",
          href: "#sliderFade",
          role: "button",
          "data-slide": "prev",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "carousel-control-prev-icon",
            "aria-hidden": "true"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "sr-only",
            children: "Previous"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "carousel-control-next",
          href: "#sliderFade",
          role: "button",
          "data-slide": "next",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "carousel-control-next-icon",
            "aria-hidden": "true"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "sr-only",
            children: "Next"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "wrapper",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "menu",
          style: {
            backgroundColor: '#686362'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "#",
            className: "menu-btn",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
            className: "menu-list"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "content",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
            className: "main",
            style: {
              'background-image': 'url(cvetnye-linii.jpg)'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "container",
              style: {
                backgroundColor: '#0d166c',
                zIndex: 0
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Chart__WEBPACK_IMPORTED_MODULE_6__["default"], {
                prices: this.state.prices,
                days: this.state.days
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "group",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "number",
                  value: this.state.buysell,
                  onChange: this.handleChange,
                  style: {
                    maxWidth: '2em'
                  },
                  required: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "bar"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  children: "\u041A\u043E\u043B-\u0432\u043E"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                value: this.state.buysell,
                onChange: this.handleChange,
                name: "buysell",
                type: "range",
                style: {
                  top: '75.5%',
                  left: '9%',
                  maxWidth: '85%',
                  position: 'absolute'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "container1",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  type: "button",
                  className: "btn-bue",
                  onClick: this.handleBuy,
                  children: "\u041A\u0423\u041F\u0418\u0422\u042C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "container2",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  type: "button",
                  className: "btn-sell",
                  onClick: this.handleSell,
                  children: "\u041F\u0420\u041E\u0414\u0410\u0422\u042C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "menu2",
          style: {
            backgroundColor: '#686362',
            textAlign: 'center',
            fontSize: '18px',
            fontFamily: 'Impact, fantasy',
            color: '#ff8400'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "#",
            className: "menu-btn2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "container",
            style: {
              position: 'absolute',
              top: 0,
              width: '100%',
              height: '10%'
            },
            children: ["\u041F\u0440\u043E\u0444\u0438\u043B\u044C:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "container",
            style: {
              borderBottomWidth: '4px',
              borderBottomColor: '#27ae60',
              position: 'absolute',
              top: '10%',
              width: '100%',
              height: '10%'
            },
            children: ["\u0411\u0430\u043B\u0430\u043D\u0441: $", Number(this.state.cash).toFixed(2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "container",
            style: {
              position: 'absolute',
              top: '20%',
              width: '100%',
              height: '10%'
            },
            children: ["\u0412 \u0430\u043A\u0446\u0438\u044F\u0445: $", (Number(this.state.shares) * this.state.pricePerShare).toFixed(2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "container",
            style: {
              position: 'absolute',
              top: '30%',
              width: '100%',
              height: '60%'
            },
            children: "\u0418\u0441\u0442\u043E\u0440\u0438\u044F:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "container",
            style: {
              position: 'absolute',
              top: '90%',
              width: '110%',
              height: '10%',
              textAlign: 'center'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "button",
              className: "btn-exit btn-lg",
              children: "\u0412\u042B\u0425\u041E\u0414"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "js/script.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "pusher-js":
/*!****************************!*\
  !*** external "pusher-js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pusher-js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BY2NvdW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwdXNoZXItanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNoYXJ0anMtMlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkFjY291bnQiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJjYXNoIiwic2hhcmVzIiwicHJpY2VQZXJTaGFyZSIsInByb3BzIiwiTnVtYmVyIiwidG9GaXhlZCIsInN0YXRlIiwiYnV5IiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQnV5Iiwic2VsbCIsImhhbmRsZVNlbGwiLCJDaGFydCIsInByaWNlcyIsImRheXMiLCJjaGFydERhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwibGluZVRlbnNpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiYm9yZGVySm9pblN0eWxlIiwicG9pbnRSYWRpdXMiLCJwb2ludEJvcmRlckNvbG9yIiwicG9pbnRCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEJvcmRlcldpZHRoIiwiZGF0YSIsImNoYXJ0T3B0aW9ucyIsImxheW91dCIsInBhZGRpbmciLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwic2NhbGVzIiwieUF4ZXMiLCJ0aWNrcyIsImJlZ2luQXRaZXJvIiwiZGlzcGxheSIsImFuaW1hdGlvbiIsImR1cmF0aW9uIiwiTGF5b3V0IiwicGFnZVRpdGxlIiwiY2hpbGRyZW4iLCJJbmRleFBhZ2UiLCJidXlzZWxsIiwiZXZ0IiwiYXhpb3MiLCJwb3N0Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbXBvbmVudERpZE1vdW50IiwicHVzaGVyIiwiUHVzaGVyIiwicHJvY2VzcyIsImNsdXN0ZXIiLCJlbmNyeXB0ZWQiLCJjaGFubmVsIiwic3Vic2NyaWJlIiwiYmluZCIsImxlbmd0aCIsImNvbm5lY3Rpb24iLCJ0aGVuIiwicmVzcG9uc2UiLCJpIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJkaXNjb25uZWN0IiwiaGVpZ2h0IiwiekluZGV4IiwibWF4V2lkdGgiLCJwb3NpdGlvbiIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsImNvbG9yIiwid2lkdGgiLCJib3JkZXJCb3R0b21XaWR0aCIsImJvcmRlckJvdHRvbUNvbG9yIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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QStKbkI1Qix3RUFBZixFOzs7Ozs7Ozs7OztBQ3ZLQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNsYXNzIEFjY291bnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRlID0geyAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgXHJcbiAgICBjb25zdCB7IGNhc2ggPSAwLCBzaGFyZXMgPSAwLCBwcmljZVBlclNoYXJlID0gMCB9ID0gdGhpcy5wcm9wcztcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHctNzUgbS1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDAgaDIgdGV4dC1kYXJrIGNvbC1zbSBtdC0zIGJvcmRlci1ncmF5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtbC0yIG10LTIgYm9yZGVyLWJvdHRvbSBib3JkZXItZ3JheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgYm9yZGVyLXJpZ2h0IGJvcmRlci1ncmF5XCI+Q2FzaDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWwtMiBtdC0yIGJvcmRlci1ib3R0b20gYm9yZGVyLWdyYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGJvcmRlci1yaWdodCBib3JkZXItZ3JheVwiPlNoYXJlczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj57TnVtYmVyKHNoYXJlcykudG9GaXhlZCgwKX0gKCR7KE51bWJlcihzaGFyZXMpKnByaWNlUGVyU2hhcmUpLnRvRml4ZWQoMil9KTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtbC0yIG10LTIgYm9yZGVyLWJvdHRvbSBib3JkZXItZ3JheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgYm9yZGVyLXJpZ2h0IGJvcmRlci1ncmF5XCI+VG90YWwgVmFsdWU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1sLTIgbXQtMiBib3JkZXItZ3JheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgYm9yZGVyLXJpZ2h0IGJvcmRlci1ncmF5XCI+Q2hhbmdlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPntOdW1iZXIoKChOdW1iZXIoY2FzaCkrTnVtYmVyKHNoYXJlcykqcHJpY2VQZXJTaGFyZSkudG9GaXhlZCgyKSkvMTAwMDAqMTAwLTEwMCkudG9GaXhlZCgwKX0lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMCBoMiB0ZXh0LWRhcmsgY29sLXNtIG10LTMgYm9yZGVyLWdyYXlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1sLTIgbXQtMiBib3JkZXItYm90dG9tIGJvcmRlci1ncmF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBib3JkZXItcmlnaHQgYm9yZGVyLWdyYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9e2BidG4gYnRuLXByaW1hcnkgdGV4dC11cHBlcmNhc2UgbWItMiB3LTEwMGB9IG5hbWU9XCJidXlcIiB2YWx1ZT17dGhpcy5zdGF0ZS5idXl9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17YGJ0biBidG4tcHJpbWFyeSB0ZXh0LXVwcGVyY2FzZSBtYi0yIHctMTAwYH0gZGlzYWJsZWQ9e3RoaXMuc3RhdGUuYnV5IDw9IDAgfHwgdGhpcy5zdGF0ZS5idXkgKiBwcmljZVBlclNoYXJlID4gY2FzaH0gb25DbGljaz17dGhpcy5oYW5kbGVCdXl9PkJ1eTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8c3BhbiBjbGFzc05hbWU9XCJidXktc2VsbC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAICR7TnVtYmVyKHByaWNlUGVyU2hhcmUpLnRvRml4ZWQoMil9PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvciAkeyhOdW1iZXIocHJpY2VQZXJTaGFyZSkqdGhpcy5zdGF0ZS5idXkpLnRvRml4ZWQoMil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4qL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWwtMiBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBib3JkZXItcmlnaHQgYm9yZGVyLWdyYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9e2BidG4gYnRuLXByaW1hcnkgdGV4dC11cHBlcmNhc2UgbWItMiB3LTEwMGB9IG5hbWU9XCJzZWxsXCIgdmFsdWU9e3RoaXMuc3RhdGUuc2VsbH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtgYnRuIGJ0bi1wcmltYXJ5IHRleHQtdXBwZXJjYXNlIG1iLTIgdy0xMDBgfSBkaXNhYmxlZD17dGhpcy5zdGF0ZS5zZWxsIDw9IDAgfHwgdGhpcy5zdGF0ZS5zZWxsID4gc2hhcmVzfSBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlbGx9PlNlbGw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPHNwYW4gY2xhc3NOYW1lPVwiYnV5LXNlbGwtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQCAke051bWJlcihwcmljZVBlclNoYXJlKS50b0ZpeGVkKDIpfTxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb3IgJHsoTnVtYmVyKHByaWNlUGVyU2hhcmUpKnRoaXMuc3RhdGUuc2VsbCkudG9GaXhlZCgyKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudDsiLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmUgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xyXG5cclxuY29uc3QgQ2hhcnQgPSBwcm9wcyA9PiB7XHJcblxyXG4gICAgY29uc3QgeyBwcmljZXMgPSBbXSwgZGF5cyA9IFtdIH0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgY29uc3QgY2hhcnREYXRhID0ge1xyXG4gICAgICAgIGxhYmVsczogZGF5cyxcclxuICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1N0b2NrIFByaWNlJyxcclxuICAgICAgICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg2OCwgMjA0LCAxNTMsIDAuMDUpJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSg2OCwgMjA0LCAxNTMsIDAuOSknLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJKb2luU3R5bGU6ICdyb3VuZCcsXHJcbiAgICAgICAgICAgICAgICBwb2ludFJhZGl1czogMCxcclxuICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAncmdiYSg2OCwgMjA0LCAxNTMsIDAuOSknLFxyXG4gICAgICAgICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHByaWNlc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgY29uc3QgY2hhcnRPcHRpb25zID0ge1xyXG4gICAgICAgIGxheW91dDogeyBwYWRkaW5nOiB7IHRvcDogMjUsIGJvdHRvbTogNzUsIGxlZnQ6IDc1LCByaWdodDogNzUgfSB9LFxyXG4gICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG4gICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICB5QXhlczogW3tcclxuICAgICAgICAgICAgdGlja3M6IHsgYmVnaW5BdFplcm86IHRydWUsIGRpc3BsYXk6IGZhbHNlIH1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFuaW1hdGlvbjoge1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogMFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPExpbmUgZGF0YT17Y2hhcnREYXRhfSB3aWR0aD17MTAwfSBoZWlnaHQ9ezUwfSBvcHRpb25zPXtjaGFydE9wdGlvbnN9IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICBcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJ0OyIsIi8qIGNvbXBvbmVudHMvTGF5b3V0LmpzICovXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ub1wiIC8+XHJcbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEzL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIGludGVncml0eT1cInNoYTM4NC1lT0pNWXNkNTNpaStzY08vYkpHRnNpQ1pjKzVORFZOMnlyOCswUkRxcjBRbDBoK3JQNDhja3hscGJ6S2d3cmE2XCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4wLjAtYmV0YTMvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC1KRVc5eE1jRzhSK3BIMzFqbVdINldXUDBXaW50UXJNYjRzN1pPZGF1SG5VdHh3b0cydkk1RGtMdFMzcW05RWtmXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL25vcm1hbGl6ZS81LjAuMC9ub3JtYWxpemUubWluLmNzc1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjEuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnkvMy4zLjEvanF1ZXJ5Lm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcG9wcGVyLmpzLzEuMTQuMC91bWQvcG9wcGVyLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4xLjAvanMvYm9vdHN0cmFwLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPSdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9qcXVlcnkvMy4zLjEvanF1ZXJ5Lm1pbi5qcyc+PC9zY3JpcHQ+XHJcbiAgICAgICAgPHRpdGxlPntwcm9wcy5wYWdlVGl0bGUgfHwgJ1RyYWRpbmcgU2ltdWxhdGlvbiBBcHAnfTwvdGl0bGU+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBQdXNoZXIgZnJvbSAncHVzaGVyLWpzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEFjY291bnQgZnJvbSAnLi4vY29tcG9uZW50cy9BY2NvdW50JztcbmltcG9ydCBDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL0NoYXJ0JztcbmltcG9ydCAndHlwZWZhY2Utcm9ib3RvJztcblxuY2xhc3MgSW5kZXhQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0ZSA9IHsgcHJpY2VzOiBbXSwgZGF5czogW10sIGNhc2g6IDAsIHNoYXJlczogMCwgcHJpY2VQZXJTaGFyZTogMCwgYnV5c2VsbDogMCB9XG4gICAgXG4gIGhhbmRsZUJ1eSA9IGV2dCA9PiB7XG4gICAgICBheGlvcy5wb3N0KCcvdHJhZGUnLCB7IGJ1eTogdGhpcy5zdGF0ZS5idXlzZWxsIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJ1eXNlbGw6IDAgfSk7XG4gIH1cblxuICBoYW5kbGVTZWxsID0gZXZ0ID0+IHtcbiAgICAgIGF4aW9zLnBvc3QoJy90cmFkZScsIHsgc2VsbDogdGhpcy5zdGF0ZS5idXlzZWxsIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJ1eXNlbGw6IDAgfSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSBldnQgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7YnV5c2VsbDogZXZ0LnRhcmdldC52YWx1ZX0pXG4gIH1cbiAgICAgIFxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgXG4gICAgdGhpcy5wdXNoZXIgPSBuZXcgUHVzaGVyKHByb2Nlc3MuZW52LlBVU0hFUl9BUFBfS0VZLCB7XG4gICAgICBjbHVzdGVyOiBwcm9jZXNzLmVudi5QVVNIRVJfQVBQX0NMVVNURVIsXG4gICAgICBlbmNyeXB0ZWQ6IHRydWVcbiAgICB9KTtcbiAgICBcbiAgICB0aGlzLmNoYW5uZWwgPSB0aGlzLnB1c2hlci5zdWJzY3JpYmUoJ3RyYWRpbmcnKTtcbiAgICBcbiAgICB0aGlzLmNoYW5uZWwuYmluZCgnbmV3LXByaWNlJywgKHsgcHJpY2VQZXJTaGFyZSB9KSA9PiB7XG4gICAgICBjb25zdCBwcmljZXMgPSBbLi4udGhpcy5zdGF0ZS5wcmljZXMsIHByaWNlUGVyU2hhcmVdO1xuICAgICAgY29uc3QgZGF5cyA9IFsuLi50aGlzLnN0YXRlLmRheXMsIHByaWNlcy5sZW5ndGhdO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByaWNlcywgZGF5cywgcHJpY2VQZXJTaGFyZX0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jaGFubmVsLmJpbmQoJ3VwZGF0ZS1hY2NvdW50JywgKHsgY2FzaCwgc2hhcmVzIH0pID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXNoLCBzaGFyZXMgfSk7XG4gICAgfSk7XG4gICAgXG4gICAgdGhpcy5wdXNoZXIuY29ubmVjdGlvbi5iaW5kKCdjb25uZWN0ZWQnLCAoKSA9PiB7XG4gICAgICBheGlvcy5wb3N0KCcvbG9hZCcpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICBjb25zdCBwcmljZXMgPSByZXNwb25zZS5kYXRhLnByaWNlcztcbiAgICAgICAgICBjb25zdCBjYXNoID0gcmVzcG9uc2UuZGF0YS5jYXNoO1xuICAgICAgICAgIGNvbnN0IHNoYXJlcyA9IHJlc3BvbnNlLmRhdGEuc2hhcmVzO1xuICAgICAgICAgIGNvbnN0IHByaWNlUGVyU2hhcmUgPSByZXNwb25zZS5kYXRhLnByaWNlUGVyU2hhcmU7XG4gICAgICAgICAgbGV0IGRheXMgPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBwcmljZXMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICBkYXlzID0gWy4uLmRheXMsIGldO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmljZXMsIGRheXMsIGNhc2gsIHNoYXJlcywgcHJpY2VQZXJTaGFyZSB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgXG4gIH1cbiAgXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucHVzaGVyLmRpc2Nvbm5lY3QoKTtcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0IHBhZ2VUaXRsZT1cIlJlYWx0aW1lIERhdGEgVmlzdWFsaXphdGlvblwiPlxuICAgICAgICA8ZGl2IGlkPVwic2xpZGVyRmFkZVwiIGNsYXNzTmFtZT1cImNhcm91c2VsIHNsaWRlIGNhcm91c2VsLWZhZGVcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiPlxuICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCI+XG4gICAgICAgICAgICA8bGkgZGF0YS10YXJnZXQ9XCIjc2xpZGVyRmFkZVwiIGRhdGEtc2xpZGUtdG89XCIwXCIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+PC9saT5cbiAgICAgICAgICAgIDxsaSBkYXRhLXRhcmdldD1cIiNzbGlkZXJGYWRlXCIgZGF0YS1zbGlkZS10bz1cIjFcIj48L2xpPlxuICAgICAgICAgICAgPGxpIGRhdGEtdGFyZ2V0PVwiI3NsaWRlckZhZGVcIiBkYXRhLXNsaWRlLXRvPVwiMlwiPjwvbGk+XG4gICAgICAgICAgPC9vbD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWlubmVyXCIgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pdGVtIGFjdGl2ZVwiIHN0eWxlPXt7aGVpZ2h0OiAnMTAwdmgnfX0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3NsaWRlci9iZzEuanBnXCIgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY2FwdGlvbiBkLW5vbmUgZC1tZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxoMT5URVhUIFRFWFQgVEVYVDwvaDE+XG4gICAgICAgICAgICAgICAgPHA+dGV4dCB0ZXh0IHRleHQgdGV4dDwvcD5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnV0dG9uX19saW5lIGJ1dHRvbl9fbGluZS0tdG9wXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnV0dG9uX19saW5lIGJ1dHRvbl9fbGluZS0tcmlnaHRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidXR0b25fX2xpbmUgYnV0dG9uX19saW5lLS1ib3R0b21cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidXR0b25fX2xpbmUgYnV0dG9uX19saW5lLS1sZWZ0XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAg0J3QsNGH0LDRgtGMXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGgyPjwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaXRlbVwiIHN0eWxlPXt7aGVpZ2h0OiAnMTAwdmgnfX0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3NsaWRlci9iZzIuanBnXCIgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY2FwdGlvbiBkLW5vbmUgZC1tZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxoMT5URVhUIFRFWFQgVEVYVDIyMjwvaDE+XG4gICAgICAgICAgICAgICAgPHA+dGV4dCB0ZXh0IHRleHQgdGV4dDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaXRlbVwiIHN0eWxlPXt7aGVpZ2h0OiAnMTAwdmgnfX0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3NsaWRlci9iZzMuanBnXCIgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY2FwdGlvbiBkLW5vbmUgZC1tZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxoMT5URVhUIFRFWFQgVEVYVDMzMzwvaDE+XG4gICAgICAgICAgICAgICAgPHA+dGV4dCB0ZXh0IHRleHQgdGV4dDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLXByZXZcIiBocmVmPVwiI3NsaWRlckZhZGVcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlByZXZpb3VzPC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLW5leHRcIiBocmVmPVwiI3NsaWRlckZhZGVcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cIm5leHRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk5leHQ8L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjNjg2MzYyJ319PlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJtZW51LWJ0blwiPlxuICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm1lbnUtbGlzdFwiPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCIgPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWFpblwiIHN0eWxlPXt7J2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKGN2ZXRueWUtbGluaWkuanBnKSd9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyMwZDE2NmMnLCB6SW5kZXg6IDB9fT5cbiAgICAgICAgICAgICAgICA8Q2hhcnQgcHJpY2VzPXt0aGlzLnN0YXRlLnByaWNlc30gZGF5cz17dGhpcy5zdGF0ZS5kYXlzfT48L0NoYXJ0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3RoaXMuc3RhdGUuYnV5c2VsbH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBzdHlsZT17e21heFdpZHRoOiAnMmVtJ319IHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8bGFiZWw+0JrQvtC7LdCy0L48L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17dGhpcy5zdGF0ZS5idXlzZWxsfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG5hbWU9XCJidXlzZWxsXCIgdHlwZT1cInJhbmdlXCIgc3R5bGU9e3t0b3A6ICc3NS41JScsIGxlZnQ6ICc5JScsIG1heFdpZHRoOiAnODUlJywgcG9zaXRpb246ICdhYnNvbHV0ZSd9fSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyMVwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuLWJ1ZVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQnV5fT7QmtCj0J/QmNCi0Kw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lcjJcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0bi1zZWxsXCIgb25DbGljaz17dGhpcy5oYW5kbGVTZWxsfT7Qn9Cg0J7QlNCQ0KLQrDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjNjg2MzYyJywgdGV4dEFsaWduOiAnY2VudGVyJywgZm9udFNpemU6ICcxOHB4JywgZm9udEZhbWlseTogJ0ltcGFjdCwgZmFudGFzeScsIGNvbG9yOiAnI2ZmODQwMCd9fT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibWVudS1idG4yXCI+XG4gICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3twb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAwLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMCUnfX0+0J/RgNC+0YTQuNC70Yw6XG4gICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b21XaWR0aDogJzRweCcsIGJvcmRlckJvdHRvbUNvbG9yOiAnIzI3YWU2MCcsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6JzEwJScsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwJSd9fT7QkdCw0LvQsNC90YE6ICR7TnVtYmVyKHRoaXMuc3RhdGUuY2FzaCkudG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17e3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICcyMCUnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMCUnfX0+0JIg0LDQutGG0LjRj9GFOiAkeyhOdW1iZXIodGhpcy5zdGF0ZS5zaGFyZXMpKnRoaXMuc3RhdGUucHJpY2VQZXJTaGFyZSkudG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17e3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICczMCUnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICc2MCUnfX0+0JjRgdGC0L7RgNC40Y86PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7cG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJzkwJScsIHdpZHRoOiAnMTEwJScsIGhlaWdodDogJzEwJScsIHRleHRBbGlnbjogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuLWV4aXQgYnRuLWxnXCI+0JLQq9Cl0J7QlDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c2NyaXB0IHNyYz1cImpzL3NjcmlwdC5qc1wiPjwvc2NyaXB0PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwdXNoZXItanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY2hhcnRqcy0yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9