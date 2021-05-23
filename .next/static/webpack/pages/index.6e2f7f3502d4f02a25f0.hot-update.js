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
      pricePerShare: 0
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
          class: "carousel slide carousel-fade",
          "data-ride": "carousel",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ol", {
            class: "carousel-indicators",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              "data-target": "#sliderFade",
              "data-slide-to": "0",
              class: "active"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              "data-target": "#sliderFade",
              "data-slide-to": "1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              "data-target": "#sliderFade",
              "data-slide-to": "2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "carousel-inner",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              class: "carousel-item active",
              style: {
                height: '100vh'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "img/slider/bg1.jpg",
                class: "d-block w-100"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                class: "carousel-caption d-none d-md-block",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  children: "TEXT TEXT TEXT"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "text text text text"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  class: "button",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    class: "button__line button__line--top"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    class: "button__line button__line--right"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    class: "button__line button__line--bottom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    class: "button__line button__line--left"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 19
                  }, this), "\u041D\u0430\u0447\u0430\u0442\u044C"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              class: "carousel-item",
              style: {
                height: '100vh'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "img/slider/bg2.jpg",
                class: "d-block w-100"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                class: "carousel-caption d-none d-md-block",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  children: "TEXT TEXT TEXT222"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "text text text text"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              class: "carousel-item",
              style: {
                height: '100vh'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "img/slider/bg3.jpg",
                class: "d-block w-100"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                class: "carousel-caption d-none d-md-block",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  children: "TEXT TEXT TEXT333"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "text text text text"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            class: "carousel-control-prev",
            href: "#sliderFade",
            role: "button",
            "data-slide": "prev",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              class: "carousel-control-prev-icon",
              "aria-hidden": "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              class: "sr-only",
              children: "Previous"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            class: "carousel-control-next",
            href: "#sliderFade",
            role: "button",
            "data-slide": "next",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              class: "carousel-control-next-icon",
              "aria-hidden": "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              class: "sr-only",
              children: "Next"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "wrapper",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "menu",
            style: {
              backgroundColor: '#686362'
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              class: "menu-btn",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
              class: "menu-list"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "content",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
              class: "main",
              style: {
                'background-image': 'url(cvetnye-linii.jpg)'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                class: "container",
                style: {
                  backgroundColor: '#0d166c',
                  zIndex: 0
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  class: "group",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    maxlength: "4",
                    required: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 113,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    class: "bar"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 114,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    children: "\u041A\u043E\u043B-\u0432\u043E"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  value: "0",
                  type: "range",
                  style: {
                    top: '75.5%',
                    left: '9%',
                    maxWidth: '85%',
                    position: 'absolute'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  class: "container1",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    type: "button",
                    class: "btn-bue",
                    children: "\u041A\u0423\u041F\u0418\u0422\u042C"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 119,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  class: "container2",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    type: "button",
                    class: "btn-sell",
                    children: "\u041F\u0420\u041E\u0414\u0410\u0422\u042C"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 122,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "menu2",
            style: {
              backgroundColor: '#686362',
              textAlign: 'center',
              fontSize: '18px',
              fontFamily: 'Impact, fantasy',
              color: '#ff8400'
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              class: "menu-btn2",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              class: "container",
              style: {
                position: 'absolute',
                top: 0,
                width: '100%',
                height: '10%'
              },
              children: ["\u041F\u0440\u043E\u0444\u0438\u043B\u044C:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              class: "container",
              style: {
                borderBottomWidth: '4px',
                borderBottomColor: '#27ae60',
                position: 'absolute',
                top: '10%',
                width: '100%',
                height: '10%'
              },
              children: ["\u0411\u0430\u043B\u0430\u043D\u0441:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              class: "container",
              style: {
                position: 'absolute',
                top: '20%',
                width: '100%',
                height: '10%'
              },
              children: ["\u0414\u043E\u0445\u043E\u0434:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              class: "container",
              style: {
                position: 'absolute',
                top: '30%',
                width: '100%',
                height: '60%'
              },
              children: "\u0418\u0441\u0442\u043E\u0440\u0438\u044F:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              class: "container",
              style: {
                position: 'absolute',
                top: '90%',
                width: '110%',
                height: '10%',
                textAlign: 'center'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                type: "button",
                class: "btn-exit btn-lg",
                children: "\u0412\u042B\u0425\u041E\u0414"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXhQYWdlIiwicHJpY2VzIiwiZGF5cyIsImNhc2giLCJzaGFyZXMiLCJwcmljZVBlclNoYXJlIiwicHVzaGVyIiwiUHVzaGVyIiwicHJvY2VzcyIsImNsdXN0ZXIiLCJlbmNyeXB0ZWQiLCJjaGFubmVsIiwic3Vic2NyaWJlIiwiYmluZCIsInN0YXRlIiwibGVuZ3RoIiwic2V0U3RhdGUiLCJjb25uZWN0aW9uIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImkiLCJkaXNjb25uZWN0IiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwidG9wIiwibGVmdCIsIm1heFdpZHRoIiwicG9zaXRpb24iLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJjb2xvciIsIndpZHRoIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJib3JkZXJCb3R0b21Db2xvciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsUzs7Ozs7Ozs7Ozs7Ozs7OzswVkFFSTtBQUFFQyxZQUFNLEVBQUUsRUFBVjtBQUFjQyxVQUFJLEVBQUUsRUFBcEI7QUFBd0JDLFVBQUksRUFBRSxDQUE5QjtBQUFpQ0MsWUFBTSxFQUFFLENBQXpDO0FBQTRDQyxtQkFBYSxFQUFFO0FBQTNELEs7Ozs7Ozs7d0NBRVk7QUFBQTs7QUFFbEIsV0FBS0MsTUFBTCxHQUFjLElBQUlDLGlEQUFKLENBQVdDLHNCQUFYLEVBQXVDO0FBQ25EQyxlQUFPLEVBQUVELElBRDBDO0FBRW5ERSxpQkFBUyxFQUFFO0FBRndDLE9BQXZDLENBQWQ7QUFLQSxXQUFLQyxPQUFMLEdBQWUsS0FBS0wsTUFBTCxDQUFZTSxTQUFaLENBQXNCLFNB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QkFBSyxFQUFDLGlCQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBL0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBK0ZEOzs7O0VBM0lxQk8sK0M7O0FBK0lUdkMsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmUyZjdmMzUwMmQ0ZjAyYTI1ZjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBQdXNoZXIgZnJvbSAncHVzaGVyLWpzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEFjY291bnQgZnJvbSAnLi4vY29tcG9uZW50cy9BY2NvdW50JztcbmltcG9ydCBDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL0NoYXJ0JztcbmltcG9ydCAndHlwZWZhY2Utcm9ib3RvJztcblxuY2xhc3MgSW5kZXhQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0ZSA9IHsgcHJpY2VzOiBbXSwgZGF5czogW10sIGNhc2g6IDAsIHNoYXJlczogMCwgcHJpY2VQZXJTaGFyZTogMCB9XG4gICAgICBcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIFxuICAgIHRoaXMucHVzaGVyID0gbmV3IFB1c2hlcihwcm9jZXNzLmVudi5QVVNIRVJfQVBQX0tFWSwge1xuICAgICAgY2x1c3RlcjogcHJvY2Vzcy5lbnYuUFVTSEVSX0FQUF9DTFVTVEVSLFxuICAgICAgZW5jcnlwdGVkOiB0cnVlXG4gICAgfSk7XG4gICAgXG4gICAgdGhpcy5jaGFubmVsID0gdGhpcy5wdXNoZXIuc3Vic2NyaWJlKCd0cmFkaW5nJyk7XG4gICAgXG4gICAgdGhpcy5jaGFubmVsLmJpbmQoJ25ldy1wcmljZScsICh7IHByaWNlUGVyU2hhcmUgfSkgPT4ge1xuICAgICAgY29uc3QgcHJpY2VzID0gWy4uLnRoaXMuc3RhdGUucHJpY2VzLCBwcmljZVBlclNoYXJlXTtcbiAgICAgIGNvbnN0IGRheXMgPSBbLi4udGhpcy5zdGF0ZS5kYXlzLCBwcmljZXMubGVuZ3RoXTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmljZXMsIGRheXMsIHByaWNlUGVyU2hhcmV9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2hhbm5lbC5iaW5kKCd1cGRhdGUtYWNjb3VudCcsICh7IGNhc2gsIHNoYXJlcyB9KSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2FzaCwgc2hhcmVzIH0pO1xuICAgIH0pO1xuICAgIFxuICAgIHRoaXMucHVzaGVyLmNvbm5lY3Rpb24uYmluZCgnY29ubmVjdGVkJywgKCkgPT4ge1xuICAgICAgYXhpb3MucG9zdCgnL2xvYWQnKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgY29uc3QgcHJpY2VzID0gcmVzcG9uc2UuZGF0YS5wcmljZXM7XG4gICAgICAgICAgY29uc3QgY2FzaCA9IHJlc3BvbnNlLmRhdGEuY2FzaDtcbiAgICAgICAgICBjb25zdCBzaGFyZXMgPSByZXNwb25zZS5kYXRhLnNoYXJlcztcbiAgICAgICAgICBjb25zdCBwcmljZVBlclNoYXJlID0gcmVzcG9uc2UuZGF0YS5wcmljZVBlclNoYXJlO1xuICAgICAgICAgIGxldCBkYXlzID0gW107XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcHJpY2VzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgZGF5cyA9IFsuLi5kYXlzLCBpXTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJpY2VzLCBkYXlzLCBjYXNoLCBzaGFyZXMsIHByaWNlUGVyU2hhcmUgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIFxuICB9XG4gIFxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnB1c2hlci5kaXNjb25uZWN0KCk7XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dCBwYWdlVGl0bGU9XCJSZWFsdGltZSBEYXRhIFZpc3VhbGl6YXRpb25cIj5cbiAgICAgICAgPGRpdiBpZD1cInNsaWRlckZhZGVcIiBjbGFzcz1cImNhcm91c2VsIHNsaWRlIGNhcm91c2VsLWZhZGVcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiPlxuICAgICAgICAgIDxvbCBjbGFzcz1cImNhcm91c2VsLWluZGljYXRvcnNcIj5cbiAgICAgICAgICAgIDxsaSBkYXRhLXRhcmdldD1cIiNzbGlkZXJGYWRlXCIgZGF0YS1zbGlkZS10bz1cIjBcIiBjbGFzcz1cImFjdGl2ZVwiPjwvbGk+XG4gICAgICAgICAgICA8bGkgZGF0YS10YXJnZXQ9XCIjc2xpZGVyRmFkZVwiIGRhdGEtc2xpZGUtdG89XCIxXCI+PC9saT5cbiAgICAgICAgICAgIDxsaSBkYXRhLXRhcmdldD1cIiNzbGlkZXJGYWRlXCIgZGF0YS1zbGlkZS10bz1cIjJcIj48L2xpPlxuICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWlubmVyXCIgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW0gYWN0aXZlXCIgc3R5bGU9e3toZWlnaHQ6ICcxMDB2aCd9fT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvc2xpZGVyL2JnMS5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY2FwdGlvbiBkLW5vbmUgZC1tZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxoMT5URVhUIFRFWFQgVEVYVDwvaDE+XG4gICAgICAgICAgICAgICAgPHA+dGV4dCB0ZXh0IHRleHQgdGV4dDwvcD5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ1dHRvbl9fbGluZSBidXR0b25fX2xpbmUtLXRvcFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnV0dG9uX19saW5lIGJ1dHRvbl9fbGluZS0tcmlnaHRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ1dHRvbl9fbGluZSBidXR0b25fX2xpbmUtLWJvdHRvbVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnV0dG9uX19saW5lIGJ1dHRvbl9fbGluZS0tbGVmdFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgINCd0LDRh9Cw0YLRjFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxoMj48L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiIHN0eWxlPXt7aGVpZ2h0OiAnMTAwdmgnfX0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3NsaWRlci9iZzIuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWNhcHRpb24gZC1ub25lIGQtbWQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8aDE+VEVYVCBURVhUIFRFWFQyMjI8L2gxPlxuICAgICAgICAgICAgICAgIDxwPnRleHQgdGV4dCB0ZXh0IHRleHQ8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiIHN0eWxlPXt7aGVpZ2h0OiAnMTAwdmgnfX0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3NsaWRlci9iZzMuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWNhcHRpb24gZC1ub25lIGQtbWQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8aDE+VEVYVCBURVhUIFRFWFQzMzM8L2gxPlxuICAgICAgICAgICAgICAgIDxwPnRleHQgdGV4dCB0ZXh0IHRleHQ8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLXByZXZcIiBocmVmPVwiI3NsaWRlckZhZGVcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHRcIiBocmVmPVwiI3NsaWRlckZhZGVcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cIm5leHRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyM2ODYzNjInfX0+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWVudS1idG5cIj5cbiAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cIm1lbnUtbGlzdFwiPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIiA+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIm1haW5cIiBzdHlsZT17eydiYWNrZ3JvdW5kLWltYWdlJzogJ3VybChjdmV0bnllLWxpbmlpLmpwZyknfX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyMwZDE2NmMnLCB6SW5kZXg6IDB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICBtYXhsZW5ndGg9XCI0XCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsPtCa0L7Quy3QstC+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9XCIwXCIgdHlwZT1cInJhbmdlXCIgc3R5bGU9e3t0b3A6ICc3NS41JScsIGxlZnQ6ICc5JScsIG1heFdpZHRoOiAnODUlJywgcG9zaXRpb246ICdhYnNvbHV0ZSd9fSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIxXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1idWVcIj7QmtCj0J/QmNCi0Kw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyMlwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tc2VsbFwiPtCf0KDQntCU0JDQotCsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51MlwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnIzY4NjM2MicsIHRleHRBbGlnbjogJ2NlbnRlcicsIGZvbnRTaXplOiAnMThweCcsIGZvbnRGYW1pbHk6ICdJbXBhY3QsIGZhbnRhc3knLCBjb2xvcjogJyNmZjg0MDAnfX0+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWVudS1idG4yXCI+XG4gICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBzdHlsZT17e3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6IDAsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwJSd9fT7Qn9GA0L7RhNC40LvRjDpcbiAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tV2lkdGg6ICc0cHgnLCBib3JkZXJCb3R0b21Db2xvcjogJyMyN2FlNjAnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOicxMCUnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMCUnfX0+0JHQsNC70LDQvdGBOlxuICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgc3R5bGU9e3twb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAnMjAlJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAlJ319PtCU0L7RhdC+0LQ6XG4gICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBzdHlsZT17e3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICczMCUnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICc2MCUnfX0+0JjRgdGC0L7RgNC40Y86PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgc3R5bGU9e3twb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAnOTAlJywgd2lkdGg6ICcxMTAlJywgaGVpZ2h0OiAnMTAlJywgdGV4dEFsaWduOiAnY2VudGVyJ319PlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1leGl0IGJ0bi1sZ1wiPtCS0KvQpdCe0JQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTsiXSwic291cmNlUm9vdCI6IiJ9