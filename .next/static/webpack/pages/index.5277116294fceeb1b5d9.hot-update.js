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
              'background-color': '#686362'
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
              style: "background-image: url(cvetnye-linii.jpg);",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                class: "container",
                style: "background-color: #0d166c;z-index: 0",
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
                  style: "top: 75.5%; left: 9%; max-width: 85%;position: absolute"
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
            style: "background-color: #686362; text-align: center;font-size: 18px; font-family: Impact, fantasy;color: #ff8400",
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
              style: "position: absolute;top:0; width: 100%;height: 10%;",
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
              style: " border-bottom-width: 4px;border-bottom-color: #27ae60; position: absolute;top:10%; width: 100%;height: 10%;",
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
              style: "position: absolute;top:20%; width: 100%;height: 10%;",
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
              style: "position: absolute;top:30%; width: 100%;height: 60%;",
              children: "\u0418\u0441\u0442\u0440\u043E\u0438\u044F:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              class: "container",
              style: "position: absolute;top:90%; width: 110%;height: 10%;text-align-all: center",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXhQYWdlIiwicHJpY2VzIiwiZGF5cyIsImNhc2giLCJzaGFyZXMiLCJwcmljZVBlclNoYXJlIiwicHVzaGVyIiwiUHVzaGVyIiwicHJvY2VzcyIsImNsdXN0ZXIiLCJlbmNyeXB0ZWQiLCJjaGFubmVsIiwic3Vic2NyaWJlIiwiYmluZCIsInN0YXRlIiwibGVuZ3RoIiwic2V0U3RhdGUiLCJjb25uZWN0aW9uIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImkiLCJkaXNjb25uZWN0IiwiaGVpZ2h0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxTOzs7Ozs7Ozs7Ozs7Ozs7OzBWQUVJO0FBQUVDLFlBQU0sRUFBRSxFQUFWO0FBQWNDLFVBQUksRUFBRSxFQUFwQjtBQUF3QkMsVUFBSSxFQUFFLENBQTlCO0FBQWlDQyxZQUFNLEVBQUUsQ0FBekM7QUFBNENDLG1CQUFhLEVBQUU7QUFBM0QsSzs7Ozs7Ozt3Q0FFWTtBQUFBOztBQUVsQixXQUFLQyxNQUFMLEdBQWMsSUFBSUMsaURBQUosQ0FBV0Msc0JBQVgsRUFBdUM7QUFDbkRDLGVBQU8sRUFBRUQsSUFEMEM7QUFFbkRFLGlCQUFTLEVBQUU7QUFGd0MsT0FBdkMsQ0FBZDtBQUtBLFdBQUtDLE9BQUwsR0FBZSxLQUFLTCxNQUFMLENBQVlNLFNBQVosQ0FBc0IsU0FBdEIsQ0FBZjtBQUVBLFdBQUtELE9BQUwsQ0FBYUUsSUFBYixDQUFrQixXQUFsQixFQUErQixnQkFBdUI7QUFBQSxZQUFwQlIsYUFBb0IsUUFBcEJBLGFBQW9CO0FBQ3BELFlBQU1KLE1BQU0sK0tBQU8sTUFBSSxDQUFDYSxLQUFMLENBQVdiLE1BQWxCLElBQTBCSSxhQUEx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ZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBL0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBK0ZEOzs7O0VBM0lxQkMsK0M7O0FBK0lUMUIsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTI3NzExNjI5NGZjZWViMWI1ZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBQdXNoZXIgZnJvbSAncHVzaGVyLWpzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEFjY291bnQgZnJvbSAnLi4vY29tcG9uZW50cy9BY2NvdW50JztcbmltcG9ydCBDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL0NoYXJ0JztcbmltcG9ydCAndHlwZWZhY2Utcm9ib3RvJztcblxuY2xhc3MgSW5kZXhQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0ZSA9IHsgcHJpY2VzOiBbXSwgZGF5czogW10sIGNhc2g6IDAsIHNoYXJlczogMCwgcHJpY2VQZXJTaGFyZTogMCB9XG4gICAgICBcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIFxuICAgIHRoaXMucHVzaGVyID0gbmV3IFB1c2hlcihwcm9jZXNzLmVudi5QVVNIRVJfQVBQX0tFWSwge1xuICAgICAgY2x1c3RlcjogcHJvY2Vzcy5lbnYuUFVTSEVSX0FQUF9DTFVTVEVSLFxuICAgICAgZW5jcnlwdGVkOiB0cnVlXG4gICAgfSk7XG4gICAgXG4gICAgdGhpcy5jaGFubmVsID0gdGhpcy5wdXNoZXIuc3Vic2NyaWJlKCd0cmFkaW5nJyk7XG4gICAgXG4gICAgdGhpcy5jaGFubmVsLmJpbmQoJ25ldy1wcmljZScsICh7IHByaWNlUGVyU2hhcmUgfSkgPT4ge1xuICAgICAgY29uc3QgcHJpY2VzID0gWy4uLnRoaXMuc3RhdGUucHJpY2VzLCBwcmljZVBlclNoYXJlXTtcbiAgICAgIGNvbnN0IGRheXMgPSBbLi4udGhpcy5zdGF0ZS5kYXlzLCBwcmljZXMubGVuZ3RoXTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmljZXMsIGRheXMsIHByaWNlUGVyU2hhcmV9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2hhbm5lbC5iaW5kKCd1cGRhdGUtYWNjb3VudCcsICh7IGNhc2gsIHNoYXJlcyB9KSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2FzaCwgc2hhcmVzIH0pO1xuICAgIH0pO1xuICAgIFxuICAgIHRoaXMucHVzaGVyLmNvbm5lY3Rpb24uYmluZCgnY29ubmVjdGVkJywgKCkgPT4ge1xuICAgICAgYXhpb3MucG9zdCgnL2xvYWQnKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgY29uc3QgcHJpY2VzID0gcmVzcG9uc2UuZGF0YS5wcmljZXM7XG4gICAgICAgICAgY29uc3QgY2FzaCA9IHJlc3BvbnNlLmRhdGEuY2FzaDtcbiAgICAgICAgICBjb25zdCBzaGFyZXMgPSByZXNwb25zZS5kYXRhLnNoYXJlcztcbiAgICAgICAgICBjb25zdCBwcmljZVBlclNoYXJlID0gcmVzcG9uc2UuZGF0YS5wcmljZVBlclNoYXJlO1xuICAgICAgICAgIGxldCBkYXlzID0gW107XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcHJpY2VzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgZGF5cyA9IFsuLi5kYXlzLCBpXTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJpY2VzLCBkYXlzLCBjYXNoLCBzaGFyZXMsIHByaWNlUGVyU2hhcmUgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIFxuICB9XG4gIFxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnB1c2hlci5kaXNjb25uZWN0KCk7XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dCBwYWdlVGl0bGU9XCJSZWFsdGltZSBEYXRhIFZpc3VhbGl6YXRpb25cIj5cbiAgICAgICAgPGRpdiBpZD1cInNsaWRlckZhZGVcIiBjbGFzcz1cImNhcm91c2VsIHNsaWRlIGNhcm91c2VsLWZhZGVcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiPlxuICAgICAgICAgIDxvbCBjbGFzcz1cImNhcm91c2VsLWluZGljYXRvcnNcIj5cbiAgICAgICAgICAgIDxsaSBkYXRhLXRhcmdldD1cIiNzbGlkZXJGYWRlXCIgZGF0YS1zbGlkZS10bz1cIjBcIiBjbGFzcz1cImFjdGl2ZVwiPjwvbGk+XG4gICAgICAgICAgICA8bGkgZGF0YS10YXJnZXQ9XCIjc2xpZGVyRmFkZVwiIGRhdGEtc2xpZGUtdG89XCIxXCI+PC9saT5cbiAgICAgICAgICAgIDxsaSBkYXRhLXRhcmdldD1cIiNzbGlkZXJGYWRlXCIgZGF0YS1zbGlkZS10bz1cIjJcIj48L2xpPlxuICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWlubmVyXCIgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW0gYWN0aXZlXCIgc3R5bGU9e3toZWlnaHQ6ICcxMDB2aCd9fT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvc2xpZGVyL2JnMS5qcGdcIiBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY2FwdGlvbiBkLW5vbmUgZC1tZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxoMT5URVhUIFRFWFQgVEVYVDwvaDE+XG4gICAgICAgICAgICAgICAgPHA+dGV4dCB0ZXh0IHRleHQgdGV4dDwvcD5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ1dHRvbl9fbGluZSBidXR0b25fX2xpbmUtLXRvcFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnV0dG9uX19saW5lIGJ1dHRvbl9fbGluZS0tcmlnaHRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ1dHRvbl9fbGluZSBidXR0b25fX2xpbmUtLWJvdHRvbVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnV0dG9uX19saW5lIGJ1dHRvbl9fbGluZS0tbGVmdFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgINCd0LDRh9Cw0YLRjFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxoMj48L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiIHN0eWxlPXt7aGVpZ2h0OiAnMTAwdmgnfX0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3NsaWRlci9iZzIuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWNhcHRpb24gZC1ub25lIGQtbWQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8aDE+VEVYVCBURVhUIFRFWFQyMjI8L2gxPlxuICAgICAgICAgICAgICAgIDxwPnRleHQgdGV4dCB0ZXh0IHRleHQ8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiIHN0eWxlPXt7aGVpZ2h0OiAnMTAwdmgnfX0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3NsaWRlci9iZzMuanBnXCIgY2xhc3M9XCJkLWJsb2NrIHctMTAwXCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWNhcHRpb24gZC1ub25lIGQtbWQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8aDE+VEVYVCBURVhUIFRFWFQzMzM8L2gxPlxuICAgICAgICAgICAgICAgIDxwPnRleHQgdGV4dCB0ZXh0IHRleHQ8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLXByZXZcIiBocmVmPVwiI3NsaWRlckZhZGVcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHRcIiBocmVmPVwiI3NsaWRlckZhZGVcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cIm5leHRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVcIiBzdHlsZT17eydiYWNrZ3JvdW5kLWNvbG9yJzogJyM2ODYzNjInfX0+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibWVudS1idG5cIj5cbiAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cIm1lbnUtbGlzdFwiPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIiA+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIm1haW5cIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybChjdmV0bnllLWxpbmlpLmpwZyk7XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICMwZDE2NmM7ei1pbmRleDogMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgIG1heGxlbmd0aD1cIjRcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8bGFiZWw+0JrQvtC7LdCy0L48L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT1cIjBcIiB0eXBlPVwicmFuZ2VcIiBzdHlsZT1cInRvcDogNzUuNSU7IGxlZnQ6IDklOyBtYXgtd2lkdGg6IDg1JTtwb3NpdGlvbjogYWJzb2x1dGVcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIxXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1idWVcIj7QmtCj0J/QmNCi0Kw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyMlwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tc2VsbFwiPtCf0KDQntCU0JDQotCsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51MlwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogIzY4NjM2MjsgdGV4dC1hbGlnbjogY2VudGVyO2ZvbnQtc2l6ZTogMThweDsgZm9udC1mYW1pbHk6IEltcGFjdCwgZmFudGFzeTtjb2xvcjogI2ZmODQwMFwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1lbnUtYnRuMlwiPlxuICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjA7IHdpZHRoOiAxMDAlO2hlaWdodDogMTAlO1wiPtCf0YDQvtGE0LjQu9GMOlxuICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgc3R5bGU9XCIgYm9yZGVyLWJvdHRvbS13aWR0aDogNHB4O2JvcmRlci1ib3R0b20tY29sb3I6ICMyN2FlNjA7IHBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MTAlOyB3aWR0aDogMTAwJTtoZWlnaHQ6IDEwJTtcIj7QkdCw0LvQsNC90YE6XG4gICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MjAlOyB3aWR0aDogMTAwJTtoZWlnaHQ6IDEwJTtcIj7QlNC+0YXQvtC0OlxuICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjMwJTsgd2lkdGg6IDEwMCU7aGVpZ2h0OiA2MCU7XCI+0JjRgdGC0YDQvtC40Y86PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjkwJTsgd2lkdGg6IDExMCU7aGVpZ2h0OiAxMCU7dGV4dC1hbGlnbi1hbGw6IGNlbnRlclwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1leGl0IGJ0bi1sZ1wiPtCS0KvQpdCe0JQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTsiXSwic291cmNlUm9vdCI6IiJ9