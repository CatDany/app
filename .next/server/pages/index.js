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

    _defineProperty(this, "state", {
      buy: 0,
      sell: 0
    });

    _defineProperty(this, "handleBuy", evt => {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/trade', {
        buy: this.state.buy
      });
      this.setState({
        buy: 0
      });
    });

    _defineProperty(this, "handleSell", evt => {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/trade', {
        sell: this.state.sell
      });
      this.setState({
        sell: 0
      });
    });

    _defineProperty(this, "handleChange", evt => {
      this.setState({
        [evt.target.name]: evt.target.value
      });
    });
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
              lineNumber: 31,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-6",
              children: ["$", Number(cash).toFixed(2)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row ml-2 mt-2 border-bottom border-gray",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-6 border-right border-gray",
              children: "Shares"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-6",
              children: [Number(shares).toFixed(0), " ($", (Number(shares) * pricePerShare).toFixed(2), ")"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row ml-2 mt-2 border-bottom border-gray",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-6 border-right border-gray",
              children: "Total Value"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-6",
              children: ["$", (Number(cash) + Number(shares) * pricePerShare).toFixed(2)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row ml-2 mt-2 border-gray",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-6 border-right border-gray",
              children: "Change"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-6",
              children: [Number((Number(cash) + Number(shares) * pricePerShare).toFixed(2) / 10000 * 100 - 100).toFixed(0), "%"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
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
                lineNumber: 51,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
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
                lineNumber: 54,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
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
                lineNumber: 63,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
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
                lineNumber: 66,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
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
      rel: "stylesheet",
      href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
      integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
      crossOrigin: "anonymous"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
      children: props.pageTitle || 'Realtime Data Visualization'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
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
      pricePerShare: 0
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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        className: "container-fluid position-absolute h-100 bg-light",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "position-absolute w-100 h-100",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "position-relative row h-50 w-100 d-flex align-items-center border-bottom border-gray",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Chart__WEBPACK_IMPORTED_MODULE_6__["default"], {
              prices: this.state.prices,
              days: this.state.days
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "position-relative row w-100 align-items-center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Account__WEBPACK_IMPORTED_MODULE_5__["default"], {
              cash: this.state.cash,
              shares: this.state.shares,
              pricePerShare: this.state.pricePerShare
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BY2NvdW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwdXNoZXItanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNoYXJ0anMtMlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkFjY291bnQiLCJDb21wb25lbnQiLCJidXkiLCJzZWxsIiwiZXZ0IiwiYXhpb3MiLCJwb3N0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInJlbmRlciIsImNhc2giLCJzaGFyZXMiLCJwcmljZVBlclNoYXJlIiwicHJvcHMiLCJOdW1iZXIiLCJ0b0ZpeGVkIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQnV5IiwiaGFuZGxlU2VsbCIsIkNoYXJ0IiwicHJpY2VzIiwiZGF5cyIsImNoYXJ0RGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJsaW5lVGVuc2lvbiIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJKb2luU3R5bGUiLCJwb2ludFJhZGl1cyIsInBvaW50Qm9yZGVyQ29sb3IiLCJwb2ludEJhY2tncm91bmRDb2xvciIsInBvaW50Qm9yZGVyV2lkdGgiLCJkYXRhIiwiY2hhcnRPcHRpb25zIiwibGF5b3V0IiwicGFkZGluZyIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJzY2FsZXMiLCJ5QXhlcyIsInRpY2tzIiwiYmVnaW5BdFplcm8iLCJkaXNwbGF5IiwiYW5pbWF0aW9uIiwiZHVyYXRpb24iLCJMYXlvdXQiLCJwYWdlVGl0bGUiLCJjaGlsZHJlbiIsIkluZGV4UGFnZSIsImNvbXBvbmVudERpZE1vdW50IiwicHVzaGVyIiwiUHVzaGVyIiwicHJvY2VzcyIsImNsdXN0ZXIiLCJlbmNyeXB0ZWQiLCJjaGFubmVsIiwic3Vic2NyaWJlIiwiYmluZCIsImxlbmd0aCIsImNvbm5lY3Rpb24iLCJ0aGVuIiwicmVzcG9uc2UiLCJpIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJkaXNjb25uZWN0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtB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c291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY2xhc3MgQWNjb3VudCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7IGJ1eTogMCwgc2VsbDogMCB9XHJcbiAgICBcclxuICAgIGhhbmRsZUJ1eSA9IGV2dCA9PiB7XHJcbiAgICAgICAgYXhpb3MucG9zdCgnL3RyYWRlJywgeyBidXk6IHRoaXMuc3RhdGUuYnV5IH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBidXk6IDAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VsbCA9IGV2dCA9PiB7XHJcbiAgICAgICAgYXhpb3MucG9zdCgnL3RyYWRlJywgeyBzZWxsOiB0aGlzLnN0YXRlLnNlbGwgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGw6IDAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlID0gZXZ0ID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtbZXZ0LnRhcmdldC5uYW1lXTogZXZ0LnRhcmdldC52YWx1ZX0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBcclxuICAgIGNvbnN0IHsgY2FzaCA9IDAsIHNoYXJlcyA9IDAsIHByaWNlUGVyU2hhcmUgPSAwIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdy03NSBtLWF1dG9cIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMCBoMiB0ZXh0LWRhcmsgY29sLXNtIG10LTMgYm9yZGVyLWdyYXlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1sLTIgbXQtMiBib3JkZXItYm90dG9tIGJvcmRlci1ncmF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBib3JkZXItcmlnaHQgYm9yZGVyLWdyYXlcIj5DYXNoPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPiR7TnVtYmVyKGNhc2gpLnRvRml4ZWQoMil9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1sLTIgbXQtMiBib3JkZXItYm90dG9tIGJvcmRlci1ncmF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBib3JkZXItcmlnaHQgYm9yZGVyLWdyYXlcIj5TaGFyZXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+e051bWJlcihzaGFyZXMpLnRvRml4ZWQoMCl9ICgkeyhOdW1iZXIoc2hhcmVzKSpwcmljZVBlclNoYXJlKS50b0ZpeGVkKDIpfSk8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWwtMiBtdC0yIGJvcmRlci1ib3R0b20gYm9yZGVyLWdyYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGJvcmRlci1yaWdodCBib3JkZXItZ3JheVwiPlRvdGFsIFZhbHVlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPiR7KE51bWJlcihjYXNoKStOdW1iZXIoc2hhcmVzKSpwcmljZVBlclNoYXJlKS50b0ZpeGVkKDIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtbC0yIG10LTIgYm9yZGVyLWdyYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGJvcmRlci1yaWdodCBib3JkZXItZ3JheVwiPkNoYW5nZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj57TnVtYmVyKCgoTnVtYmVyKGNhc2gpK051bWJlcihzaGFyZXMpKnByaWNlUGVyU2hhcmUpLnRvRml4ZWQoMikpLzEwMDAwKjEwMC0xMDApLnRvRml4ZWQoMCl9JTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDAgaDIgdGV4dC1kYXJrIGNvbC1zbSBtdC0zIGJvcmRlci1ncmF5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtbC0yIG10LTIgYm9yZGVyLWJvdHRvbSBib3JkZXItZ3JheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgYm9yZGVyLXJpZ2h0IGJvcmRlci1ncmF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPXtgYnRuIGJ0bi1wcmltYXJ5IHRleHQtdXBwZXJjYXNlIG1iLTIgdy0xMDBgfSBuYW1lPVwiYnV5XCIgdmFsdWU9e3RoaXMuc3RhdGUuYnV5fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e2BidG4gYnRuLXByaW1hcnkgdGV4dC11cHBlcmNhc2UgbWItMiB3LTEwMGB9IGRpc2FibGVkPXt0aGlzLnN0YXRlLmJ1eSA8PSAwIHx8IHRoaXMuc3RhdGUuYnV5ICogcHJpY2VQZXJTaGFyZSA+IGNhc2h9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQnV5fT5CdXk8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPHNwYW4gY2xhc3NOYW1lPVwiYnV5LXNlbGwtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQCAke051bWJlcihwcmljZVBlclNoYXJlKS50b0ZpeGVkKDIpfTxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb3IgJHsoTnVtYmVyKHByaWNlUGVyU2hhcmUpKnRoaXMuc3RhdGUuYnV5KS50b0ZpeGVkKDIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1sLTIgbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgYm9yZGVyLXJpZ2h0IGJvcmRlci1ncmF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPXtgYnRuIGJ0bi1wcmltYXJ5IHRleHQtdXBwZXJjYXNlIG1iLTIgdy0xMDBgfSBuYW1lPVwic2VsbFwiIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGx9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17YGJ0biBidG4tcHJpbWFyeSB0ZXh0LXVwcGVyY2FzZSBtYi0yIHctMTAwYH0gZGlzYWJsZWQ9e3RoaXMuc3RhdGUuc2VsbCA8PSAwIHx8IHRoaXMuc3RhdGUuc2VsbCA+IHNoYXJlc30gb25DbGljaz17dGhpcy5oYW5kbGVTZWxsfT5TZWxsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxzcGFuIGNsYXNzTmFtZT1cImJ1eS1zZWxsLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEAgJHtOdW1iZXIocHJpY2VQZXJTaGFyZSkudG9GaXhlZCgyKX08YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yICR7KE51bWJlcihwcmljZVBlclNoYXJlKSp0aGlzLnN0YXRlLnNlbGwpLnRvRml4ZWQoMil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4qL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjY291bnQ7IiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcclxuXHJcbmNvbnN0IENoYXJ0ID0gcHJvcHMgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgcHJpY2VzID0gW10sIGRheXMgPSBbXSB9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIGNvbnN0IGNoYXJ0RGF0YSA9IHtcclxuICAgICAgICBsYWJlbHM6IGRheXMsXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdTdG9jayBQcmljZScsXHJcbiAgICAgICAgICAgICAgICBsaW5lVGVuc2lvbjogMCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoNjgsIDIwNCwgMTUzLCAwLjA1KScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoNjgsIDIwNCwgMTUzLCAwLjkpJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVySm9pblN0eWxlOiAncm91bmQnLFxyXG4gICAgICAgICAgICAgICAgcG9pbnRSYWRpdXM6IDAsXHJcbiAgICAgICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJ3JnYmEoNjgsIDIwNCwgMTUzLCAwLjkpJyxcclxuICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBwcmljZXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH07XHJcbiAgICBcclxuICAgIGNvbnN0IGNoYXJ0T3B0aW9ucyA9IHtcclxuICAgICAgICBsYXlvdXQ6IHsgcGFkZGluZzogeyB0b3A6IDI1LCBib3R0b206IDc1LCBsZWZ0OiA3NSwgcmlnaHQ6IDc1IH0gfSxcclxuICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgeUF4ZXM6IFt7XHJcbiAgICAgICAgICAgIHRpY2tzOiB7IGJlZ2luQXRaZXJvOiB0cnVlLCBkaXNwbGF5OiBmYWxzZSB9XHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhbmltYXRpb246IHtcclxuICAgICAgICAgICAgZHVyYXRpb246IDBcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxMaW5lIGRhdGE9e2NoYXJ0RGF0YX0gd2lkdGg9ezEwMH0gaGVpZ2h0PXs1MH0gb3B0aW9ucz17Y2hhcnRPcHRpb25zfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFydDsiLCIvKiBjb21wb25lbnRzL0xheW91dC5qcyAqL1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gcHJvcHMgPT4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4wLjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LUduNTM4NHhxUTFhb1dYQSswNThSWFB4UGc2Znk0SVd2VE5oMEUyNjNYbUZjSmxTQXdpR2dGQVcvZEFpUzZKWG1cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiIC8+XHJcbiAgICAgICAgPHRpdGxlPntwcm9wcy5wYWdlVGl0bGUgfHwgJ1JlYWx0aW1lIERhdGEgVmlzdWFsaXphdGlvbid9PC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvRnJhZ21lbnQ+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFB1c2hlciBmcm9tICdwdXNoZXItanMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgQWNjb3VudCBmcm9tICcuLi9jb21wb25lbnRzL0FjY291bnQnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhcnQnO1xuaW1wb3J0ICd0eXBlZmFjZS1yb2JvdG8nO1xuXG5jbGFzcyBJbmRleFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRlID0geyBwcmljZXM6IFtdLCBkYXlzOiBbXSwgY2FzaDogMCwgc2hhcmVzOiAwLCBwcmljZVBlclNoYXJlOiAwIH1cbiAgICAgIFxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgXG4gICAgdGhpcy5wdXNoZXIgPSBuZXcgUHVzaGVyKHByb2Nlc3MuZW52LlBVU0hFUl9BUFBfS0VZLCB7XG4gICAgICBjbHVzdGVyOiBwcm9jZXNzLmVudi5QVVNIRVJfQVBQX0NMVVNURVIsXG4gICAgICBlbmNyeXB0ZWQ6IHRydWVcbiAgICB9KTtcbiAgICBcbiAgICB0aGlzLmNoYW5uZWwgPSB0aGlzLnB1c2hlci5zdWJzY3JpYmUoJ3RyYWRpbmcnKTtcbiAgICBcbiAgICB0aGlzLmNoYW5uZWwuYmluZCgnbmV3LXByaWNlJywgKHsgcHJpY2VQZXJTaGFyZSB9KSA9PiB7XG4gICAgICBjb25zdCBwcmljZXMgPSBbLi4udGhpcy5zdGF0ZS5wcmljZXMsIHByaWNlUGVyU2hhcmVdO1xuICAgICAgY29uc3QgZGF5cyA9IFsuLi50aGlzLnN0YXRlLmRheXMsIHByaWNlcy5sZW5ndGhdO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByaWNlcywgZGF5cywgcHJpY2VQZXJTaGFyZX0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jaGFubmVsLmJpbmQoJ3VwZGF0ZS1hY2NvdW50JywgKHsgY2FzaCwgc2hhcmVzIH0pID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXNoLCBzaGFyZXMgfSk7XG4gICAgfSk7XG4gICAgXG4gICAgdGhpcy5wdXNoZXIuY29ubmVjdGlvbi5iaW5kKCdjb25uZWN0ZWQnLCAoKSA9PiB7XG4gICAgICBheGlvcy5wb3N0KCcvbG9hZCcpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICBjb25zdCBwcmljZXMgPSByZXNwb25zZS5kYXRhLnByaWNlcztcbiAgICAgICAgICBjb25zdCBjYXNoID0gcmVzcG9uc2UuZGF0YS5jYXNoO1xuICAgICAgICAgIGNvbnN0IHNoYXJlcyA9IHJlc3BvbnNlLmRhdGEuc2hhcmVzO1xuICAgICAgICAgIGNvbnN0IHByaWNlUGVyU2hhcmUgPSByZXNwb25zZS5kYXRhLnByaWNlUGVyU2hhcmU7XG4gICAgICAgICAgbGV0IGRheXMgPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBwcmljZXMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICBkYXlzID0gWy4uLmRheXMsIGldO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmljZXMsIGRheXMsIGNhc2gsIHNoYXJlcywgcHJpY2VQZXJTaGFyZSB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgXG4gIH1cbiAgXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucHVzaGVyLmRpc2Nvbm5lY3QoKTtcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0IHBhZ2VUaXRsZT1cIlJlYWx0aW1lIERhdGEgVmlzdWFsaXphdGlvblwiPlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcG9zaXRpb24tYWJzb2x1dGUgaC0xMDAgYmctbGlnaHRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLWFic29sdXRlIHctMTAwIGgtMTAwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlIHJvdyBoLTUwIHctMTAwIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgYm9yZGVyLWJvdHRvbSBib3JkZXItZ3JheVwiPlxuICAgICAgICAgICAgICA8Q2hhcnQgcHJpY2VzPXt0aGlzLnN0YXRlLnByaWNlc30gZGF5cz17dGhpcy5zdGF0ZS5kYXlzfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlIHJvdyB3LTEwMCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8QWNjb3VudCBjYXNoPXt0aGlzLnN0YXRlLmNhc2h9IHNoYXJlcz17dGhpcy5zdGF0ZS5zaGFyZXN9IHByaWNlUGVyU2hhcmU9e3RoaXMuc3RhdGUucHJpY2VQZXJTaGFyZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInB1c2hlci1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jaGFydGpzLTJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=