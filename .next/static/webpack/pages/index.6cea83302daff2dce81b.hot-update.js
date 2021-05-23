webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_CatDany_vscode_RealTimeApp_app_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_CatDany_vscode_RealTimeApp_app_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_CatDany_vscode_RealTimeApp_app_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_CatDany_vscode_RealTimeApp_app_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_CatDany_vscode_RealTimeApp_app_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_CatDany_vscode_RealTimeApp_app_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_CatDany_vscode_RealTimeApp_app_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_CatDany_vscode_RealTimeApp_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! pusher-js */ "./node_modules/pusher-js/dist/web/pusher.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Account__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Account */ "./components/Account.js");
/* harmony import */ var _components_Chart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Chart */ "./components/Chart.js");
/* harmony import */ var typeface_roboto__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! typeface-roboto */ "./node_modules/typeface-roboto/index.css");
/* harmony import */ var typeface_roboto__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(typeface_roboto__WEBPACK_IMPORTED_MODULE_15__);









var _jsxFileName = "C:\\Users\\CatDany\\vscode\\RealTimeApp\\app\\pages\\index.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_CatDany_vscode_RealTimeApp_app_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_CatDany_vscode_RealTimeApp_app_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_CatDany_vscode_RealTimeApp_app_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var IndexPage = /*#__PURE__*/function (_Component) {
  Object(C_Users_CatDany_vscode_RealTimeApp_app_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(IndexPage, _Component);

  var _super = _createSuper(IndexPage);

  function IndexPage() {
    var _this;

    Object(C_Users_CatDany_vscode_RealTimeApp_app_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, IndexPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(C_Users_CatDany_vscode_RealTimeApp_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(C_Users_CatDany_vscode_RealTimeApp_app_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      prices: [],
      days: [],
      cash: 0,
      shares: 0,
      pricePerShare: 0,
      buysell: 0
    });

    Object(C_Users_CatDany_vscode_RealTimeApp_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(C_Users_CatDany_vscode_RealTimeApp_app_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleBuy", function (evt) {
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.post('/trade', {
        buy: _this.state.buysell
      });

      _this.setState({
        buysell: 0
      });
    });

    Object(C_Users_CatDany_vscode_RealTimeApp_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(C_Users_CatDany_vscode_RealTimeApp_app_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSell", function (evt) {
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.post('/trade', {
        sell: _this.state.buysell
      });

      _this.setState({
        buysell: 0
      });
    });

    Object(C_Users_CatDany_vscode_RealTimeApp_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(C_Users_CatDany_vscode_RealTimeApp_app_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (evt) {
      _this.setState({
        buysell: evt.target.value
      });
    });

    return _this;
  }

  Object(C_Users_CatDany_vscode_RealTimeApp_app_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(IndexPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.pusher = new pusher_js__WEBPACK_IMPORTED_MODULE_11___default.a("fb10b66411c2c06be210", {
        cluster: "eu",
        encrypted: true
      });
      this.channel = this.pusher.subscribe('trading');
      this.channel.bind('new-price', function (_ref) {
        var pricePerShare = _ref.pricePerShare;
        var prices = [].concat(Object(C_Users_CatDany_vscode_RealTimeApp_app_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_this2.state.prices), [pricePerShare]);
        var days = [].concat(Object(C_Users_CatDany_vscode_RealTimeApp_app_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_this2.state.days), [prices.length]);

        _this2.setState({
          prices: prices,
          days: days,
          pricePerShare: pricePerShare
        });
      });
      this.channel.bind('update-account', function (_ref2) {
        var cash = _ref2.cash,
            shares = _ref2.shares;

        _this2.setState({
          cash: cash,
          shares: shares
        });
      });
      this.pusher.connection.bind('connected', function () {
        axios__WEBPACK_IMPORTED_MODULE_10___default.a.post('/load').then(function (response) {
          var prices = response.data.prices;
          var cash = response.data.cash;
          var shares = response.data.shares;
          var pricePerShare = response.data.pricePerShare;
          var days = [];

          for (var i = 1; i <= prices.length; i++) {
            days = [].concat(Object(C_Users_CatDany_vscode_RealTimeApp_app_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(days), [i]);
          }

          _this2.setState({
            prices: prices,
            days: days,
            cash: cash,
            shares: shares,
            pricePerShare: pricePerShare
          });
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.pusher.disconnect();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Chart__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
                    maxLength: "4",
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
  }]);

  return IndexPage;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXhQYWdlIiwicHJpY2VzIiwiZGF5cyIsImNhc2giLCJzaGFyZXMiLCJwcmljZVBlclNoYXJlIiwiYnV5c2VsbCIsImV2dCIsImF4aW9zIiwicG9zdCIsImJ1eSIsInN0YXRlIiwic2V0U3RhdGUiLCJzZWxsIiwidGFyZ2V0IiwidmFsdWUiLCJwdXNoZXIiLCJQdXNoZXIiLCJwcm9jZXNzIiwiY2x1c3RlciIsImVuY3J5cHRlZCIsImNoYW5uZWwiLCJzdWJzY3JpYmUiLCJiaW5kIiwibGVuZ3RoIiwiY29ubmVjdGlvbiIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJpIiwiZGlzY29ubmVjdCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsImhhbmRsZUNoYW5nZSIsInRvcCIsImxlZnQiLCJtYXhXaWR0aCIsInBvc2l0aW9uIiwiaGFuZGxlQnV5IiwiaGFuZGxlU2VsbCIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsImNvbG9yIiwid2lkdGgiLCJib3JkZXJCb3R0b21XaWR0aCIsImJvcmRlckJvdHRvbUNvbG9yIiwiTnVtYmVyIiwidG9GaXhlZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsUzs7Ozs7Ozs7Ozs7Ozs7OzswVkFFSTtBQUFFQyxZQUFNLEVBQUUsRUFBVjtBQUFjQyxVQUFJLEVBQUUsRUFBcEI7QUFBd0JDLFVBQUksRUFBRSxDQUE5QjtBQUFpQ0MsWUFBTSxFQUFFLENBQXpDO0FBQTRDQyxtQkFBYSxFQUFFLENBQTNEO0FBQThEQyxhQUFPLEVBQUU7QUFBdkUsSzs7OFZBRUksVUFBQUMsR0FBRyxFQUFJO0FBQ2ZDLG1EQUFLLENBQUNDLElBQU4sQ0FBVyxR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QkFBUSxFQUFFLFVBQVg7QUFBdUJILG1CQUFHLEVBQUUsS0FBNUI7QUFBbUNVLHFCQUFLLEVBQUUsTUFBMUM7QUFBa0RkLHNCQUFNLEVBQUUsS0FBMUQ7QUFBaUVVLHlCQUFTLEVBQUU7QUFBNUUsZUFBbEM7QUFBQSxxQ0FDRTtBQUFRLG9CQUFJLEVBQUMsUUFBYjtBQUFzQix5QkFBUyxFQUFDLGlCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTNCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBL0NGLGVBNkZFO0FBQVEsYUFBRyxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE3RkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFpR0Q7Ozs7RUEzSnFCUywrQzs7QUErSlRsRCx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42Y2VhODMzMDJkYWZmMmRjZTgxYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFB1c2hlciBmcm9tICdwdXNoZXItanMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgQWNjb3VudCBmcm9tICcuLi9jb21wb25lbnRzL0FjY291bnQnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhcnQnO1xuaW1wb3J0ICd0eXBlZmFjZS1yb2JvdG8nO1xuXG5jbGFzcyBJbmRleFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRlID0geyBwcmljZXM6IFtdLCBkYXlzOiBbXSwgY2FzaDogMCwgc2hhcmVzOiAwLCBwcmljZVBlclNoYXJlOiAwLCBidXlzZWxsOiAwIH1cbiAgICBcbiAgaGFuZGxlQnV5ID0gZXZ0ID0+IHtcbiAgICAgIGF4aW9zLnBvc3QoJy90cmFkZScsIHsgYnV5OiB0aGlzLnN0YXRlLmJ1eXNlbGwgfSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgYnV5c2VsbDogMCB9KTtcbiAgfVxuXG4gIGhhbmRsZVNlbGwgPSBldnQgPT4ge1xuICAgICAgYXhpb3MucG9zdCgnL3RyYWRlJywgeyBzZWxsOiB0aGlzLnN0YXRlLmJ1eXNlbGwgfSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgYnV5c2VsbDogMCB9KTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IGV2dCA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtidXlzZWxsOiBldnQudGFyZ2V0LnZhbHVlfSlcbiAgfVxuICAgICAgXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICBcbiAgICB0aGlzLnB1c2hlciA9IG5ldyBQdXNoZXIocHJvY2Vzcy5lbnYuUFVTSEVSX0FQUF9LRVksIHtcbiAgICAgIGNsdXN0ZXI6IHByb2Nlc3MuZW52LlBVU0hFUl9BUFBfQ0xVU1RFUixcbiAgICAgIGVuY3J5cHRlZDogdHJ1ZVxuICAgIH0pO1xuICAgIFxuICAgIHRoaXMuY2hhbm5lbCA9IHRoaXMucHVzaGVyLnN1YnNjcmliZSgndHJhZGluZycpO1xuICAgIFxuICAgIHRoaXMuY2hhbm5lbC5iaW5kKCduZXctcHJpY2UnLCAoeyBwcmljZVBlclNoYXJlIH0pID0+IHtcbiAgICAgIGNvbnN0IHByaWNlcyA9IFsuLi50aGlzLnN0YXRlLnByaWNlcywgcHJpY2VQZXJTaGFyZV07XG4gICAgICBjb25zdCBkYXlzID0gWy4uLnRoaXMuc3RhdGUuZGF5cywgcHJpY2VzLmxlbmd0aF07XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcHJpY2VzLCBkYXlzLCBwcmljZVBlclNoYXJlfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNoYW5uZWwuYmluZCgndXBkYXRlLWFjY291bnQnLCAoeyBjYXNoLCBzaGFyZXMgfSkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhc2gsIHNoYXJlcyB9KTtcbiAgICB9KTtcbiAgICBcbiAgICB0aGlzLnB1c2hlci5jb25uZWN0aW9uLmJpbmQoJ2Nvbm5lY3RlZCcsICgpID0+IHtcbiAgICAgIGF4aW9zLnBvc3QoJy9sb2FkJylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGNvbnN0IHByaWNlcyA9IHJlc3BvbnNlLmRhdGEucHJpY2VzO1xuICAgICAgICAgIGNvbnN0IGNhc2ggPSByZXNwb25zZS5kYXRhLmNhc2g7XG4gICAgICAgICAgY29uc3Qgc2hhcmVzID0gcmVzcG9uc2UuZGF0YS5zaGFyZXM7XG4gICAgICAgICAgY29uc3QgcHJpY2VQZXJTaGFyZSA9IHJlc3BvbnNlLmRhdGEucHJpY2VQZXJTaGFyZTtcbiAgICAgICAgICBsZXQgZGF5cyA9IFtdO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHByaWNlcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIGRheXMgPSBbLi4uZGF5cywgaV07XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByaWNlcywgZGF5cywgY2FzaCwgc2hhcmVzLCBwcmljZVBlclNoYXJlIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBcbiAgfVxuICBcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5wdXNoZXIuZGlzY29ubmVjdCgpO1xuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQgcGFnZVRpdGxlPVwiUmVhbHRpbWUgRGF0YSBWaXN1YWxpemF0aW9uXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJzbGlkZXJGYWRlXCIgY2xhc3NOYW1lPVwiY2Fyb3VzZWwgc2xpZGUgY2Fyb3VzZWwtZmFkZVwiIGRhdGEtcmlkZT1cImNhcm91c2VsXCI+XG4gICAgICAgICAgPG9sIGNsYXNzTmFtZT1cImNhcm91c2VsLWluZGljYXRvcnNcIj5cbiAgICAgICAgICAgIDxsaSBkYXRhLXRhcmdldD1cIiNzbGlkZXJGYWRlXCIgZGF0YS1zbGlkZS10bz1cIjBcIiBjbGFzc05hbWU9XCJhY3RpdmVcIj48L2xpPlxuICAgICAgICAgICAgPGxpIGRhdGEtdGFyZ2V0PVwiI3NsaWRlckZhZGVcIiBkYXRhLXNsaWRlLXRvPVwiMVwiPjwvbGk+XG4gICAgICAgICAgICA8bGkgZGF0YS10YXJnZXQ9XCIjc2xpZGVyRmFkZVwiIGRhdGEtc2xpZGUtdG89XCIyXCI+PC9saT5cbiAgICAgICAgICA8L29sPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaW5uZXJcIiA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWl0ZW0gYWN0aXZlXCIgc3R5bGU9e3toZWlnaHQ6ICcxMDB2aCd9fT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvc2xpZGVyL2JnMS5qcGdcIiBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jYXB0aW9uIGQtbm9uZSBkLW1kLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPGgxPlRFWFQgVEVYVCBURVhUPC9oMT5cbiAgICAgICAgICAgICAgICA8cD50ZXh0IHRleHQgdGV4dCB0ZXh0PC9wPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidXR0b25fX2xpbmUgYnV0dG9uX19saW5lLS10b3BcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidXR0b25fX2xpbmUgYnV0dG9uX19saW5lLS1yaWdodFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ1dHRvbl9fbGluZSBidXR0b25fX2xpbmUtLWJvdHRvbVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ1dHRvbl9fbGluZSBidXR0b25fX2xpbmUtLWxlZnRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICDQndCw0YfQsNGC0YxcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aDI+PC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pdGVtXCIgc3R5bGU9e3toZWlnaHQ6ICcxMDB2aCd9fT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvc2xpZGVyL2JnMi5qcGdcIiBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jYXB0aW9uIGQtbm9uZSBkLW1kLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPGgxPlRFWFQgVEVYVCBURVhUMjIyPC9oMT5cbiAgICAgICAgICAgICAgICA8cD50ZXh0IHRleHQgdGV4dCB0ZXh0PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pdGVtXCIgc3R5bGU9e3toZWlnaHQ6ICcxMDB2aCd9fT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvc2xpZGVyL2JnMy5qcGdcIiBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jYXB0aW9uIGQtbm9uZSBkLW1kLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPGgxPlRFWFQgVEVYVCBURVhUMzMzPC9oMT5cbiAgICAgICAgICAgICAgICA8cD50ZXh0IHRleHQgdGV4dCB0ZXh0PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtcHJldlwiIGhyZWY9XCIjc2xpZGVyRmFkZVwiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwicHJldlwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiIGhyZWY9XCIjc2xpZGVyRmFkZVwiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwibmV4dFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TmV4dDwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyM2ODYzNjInfX0+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIm1lbnUtYnRuXCI+XG4gICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWVudS1saXN0XCI+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIiA+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYWluXCIgc3R5bGU9e3snYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoY3ZldG55ZS1saW5paS5qcGcpJ319PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnIzBkMTY2YycsIHpJbmRleDogMH19PlxuICAgICAgICAgICAgICAgIDxDaGFydCBwcmljZXM9e3RoaXMuc3RhdGUucHJpY2VzfSBkYXlzPXt0aGlzLnN0YXRlLmRheXN9PjwvQ2hhcnQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17dGhpcy5zdGF0ZS5idXlzZWxsfSBtYXhMZW5ndGg9XCI0XCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbD7QmtC+0Lst0LLQvjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnN0YXRlLmJ1eXNlbGx9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gbmFtZT1cImJ1eXNlbGxcIiB0eXBlPVwicmFuZ2VcIiBzdHlsZT17e3RvcDogJzc1LjUlJywgbGVmdDogJzklJywgbWF4V2lkdGg6ICc4NSUnLCBwb3NpdGlvbjogJ2Fic29sdXRlJ319IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIxXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4tYnVlXCIgb25DbGljaz17dGhpcy5oYW5kbGVCdXl9PtCa0KPQn9CY0KLQrDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyMlwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuLXNlbGxcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlbGx9PtCf0KDQntCU0JDQotCsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudTJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyM2ODYzNjInLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBmb250U2l6ZTogJzE4cHgnLCBmb250RmFtaWx5OiAnSW1wYWN0LCBmYW50YXN5JywgY29sb3I6ICcjZmY4NDAwJ319PlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJtZW51LWJ0bjJcIj5cbiAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17e3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6IDAsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwJSd9fT7Qn9GA0L7RhNC40LvRjDpcbiAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17e2JvcmRlckJvdHRvbVdpZHRoOiAnNHB4JywgYm9yZGVyQm90dG9tQ29sb3I6ICcjMjdhZTYwJywgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDonMTAlJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAlJ319PtCR0LDQu9Cw0L3RgTogJHtOdW1iZXIodGhpcy5zdGF0ZS5jYXNoKS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7cG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJzIwJScsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwJSd9fT7QkiDQsNC60YbQuNGP0YU6ICR7KE51bWJlcih0aGlzLnN0YXRlLnNoYXJlcykqdGhpcy5zdGF0ZS5wcmljZVBlclNoYXJlKS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7cG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJzMwJScsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzYwJSd9fT7QmNGB0YLQvtGA0LjRjzo8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3twb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAnOTAlJywgd2lkdGg6ICcxMTAlJywgaGVpZ2h0OiAnMTAlJywgdGV4dEFsaWduOiAnY2VudGVyJ319PlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4tZXhpdCBidG4tbGdcIj7QktCr0KXQntCUPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwianMvc2NyaXB0LmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==