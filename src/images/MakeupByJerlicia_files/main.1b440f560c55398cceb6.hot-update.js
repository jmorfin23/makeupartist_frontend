webpackHotUpdate("main", {
  /***/ "./src/App.js":
    /*!********************!*\
  !*** ./src/App.js ***!
  \********************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */ "./node_modules/react/index.js"
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./App.css */ "./src/App.css"
      );
      /* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        _App_css__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! prop-types */ "./node_modules/prop-types/index.js"
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_2__
      );
      /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js"
      );
      /* harmony import */ var _views_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./views/home */ "./src/views/home/index.js"
      );
      /* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ./components/header */ "./src/components/header/index.js"
      );
      /* harmony import */ var _views_about__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ./views/about */ "./src/views/about/index.js"
      );
      /* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ./components/footer */ "./src/components/footer/index.js"
      );
      /* harmony import */ var _views_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! ./views/services */ "./src/views/services/index.js"
      );
      /* harmony import */ var _views_portfolio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! ./views/portfolio */ "./src/views/portfolio/index.js"
      );
      /* harmony import */ var _views_blog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! ./views/blog */ "./src/views/blog/index.js"
      );
      /* harmony import */ var _views_contact__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        /*! ./views/contact */ "./src/views/contact/index.js"
      );
      /* harmony import */ var _views_blog_post1__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
        /*! ./views/blog/post1 */ "./src/views/blog/post1/index.js"
      );
      /* harmony import */ var _views_blog_leftsidebar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
        /*! ./views/blog/leftsidebar */ "./src/views/blog/leftsidebar/index.js"
      );
      /* harmony import */ var _views_admin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
        /*! ./views/admin */ "./src/views/admin/index.js"
      );
      /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
        /*! react-redux */ "./node_modules/react-redux/es/index.js"
      );
      /* harmony import */ var _actions_imageActions_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
        /*! ./actions/imageActions.js */ "./src/actions/imageActions.js"
      );
      /* harmony import */ var _actions_blogActions_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
        /*! ./actions/blogActions.js */ "./src/actions/blogActions.js"
      );
      /* harmony import */ var _views_reset__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
        /*! ./views/reset */ "./src/views/reset/index.js"
      );
      /* harmony import */ var _views_passwords__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
        /*! ./views/passwords */ "./src/views/passwords/index.js"
      );
      var _jsxFileName =
        "/Users/jonathanmorfin/Desktop/personal_projects/makeup-artist/frontend/src/App.js";

      // import FouroFour_page from "./components/404_Page";

      class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
        componentDidMount() {
          //retrieve portfolio images from backend
          this.props.fetchImages(); //retrieve blog posts from backend

          this.props.fetchBlogPosts();
        }

        render() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            {
              className: "App",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              },
              __self: this
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_header__WEBPACK_IMPORTED_MODULE_5__["default"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34
                },
                __self: this
              }
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35
                },
                __self: this
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"],
                {
                  exact: true,
                  path: "/admin",
                  render: () =>
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _views_admin__WEBPACK_IMPORTED_MODULE_14__["default"],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 36
                        },
                        __self: this
                      }
                    ),
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                  },
                  __self: this
                }
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"],
                {
                  exact: true,
                  path: ["/", "/home"],
                  render: () =>
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _views_home__WEBPACK_IMPORTED_MODULE_4__["default"],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 37
                        },
                        __self: this
                      }
                    ),
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                  },
                  __self: this
                }
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"],
                {
                  exact: true,
                  path: "/about",
                  render: () =>
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _views_about__WEBPACK_IMPORTED_MODULE_6__["default"],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 38
                        },
                        __self: this
                      }
                    ),
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  },
                  __self: this
                }
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"],
                {
                  exact: true,
                  path: "/services",
                  render: () =>
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _views_services__WEBPACK_IMPORTED_MODULE_8__["default"],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 39
                        },
                        __self: this
                      }
                    ),
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                  },
                  __self: this
                }
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"],
                {
                  exact: true,
                  path: "/portfolio",
                  render: () =>
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _views_portfolio__WEBPACK_IMPORTED_MODULE_9__["default"],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 40
                        },
                        __self: this
                      }
                    ),
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                  },
                  __self: this
                }
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"],
                {
                  exact: true,
                  path: "/blog",
                  render: () =>
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _views_blog__WEBPACK_IMPORTED_MODULE_10__["default"],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 41
                        },
                        __self: this
                      }
                    ),
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                  },
                  __self: this
                }
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"],
                {
                  exact: true,
                  path: "/contact",
                  render: () =>
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _views_contact__WEBPACK_IMPORTED_MODULE_11__["default"],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 42
                        },
                        __self: this
                      }
                    ),
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                  },
                  __self: this
                }
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"],
                {
                  exact: true,
                  path: "/reset",
                  render: () =>
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _views_reset__WEBPACK_IMPORTED_MODULE_18__["default"],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 43
                        },
                        __self: this
                      }
                    ),
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                  },
                  __self: this
                }
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"],
                {
                  path: "/reset_password=:token",
                  render: ({ match }) =>
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _views_passwords__WEBPACK_IMPORTED_MODULE_19__["default"],
                      {
                        info: match,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 46
                        },
                        __self: this
                      }
                    ),
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                  },
                  __self: this
                }
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"],
                {
                  path: "/:post",
                  render: () =>
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _views_blog_post1__WEBPACK_IMPORTED_MODULE_12__[
                        "default"
                      ],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 48
                        },
                        __self: this
                      }
                    ),
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                  },
                  __self: this
                }
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_footer__WEBPACK_IMPORTED_MODULE_7__["default"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50
                },
                __self: this
              }
            )
          );
        }
      } //Proptypes

      App.propTypes = {
        images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
          data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
        }),
        blogposts: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
          data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
        })
      }; //using this to map to props

      const mapStateToProps = state => ({
        error: state.error,
        images: state.images.items,
        blogposts: state.blogposts,
        user: state.user.items
      });

      /* harmony default export */ __webpack_exports__["default"] = Object(
        react_redux__WEBPACK_IMPORTED_MODULE_15__["connect"]
      )(mapStateToProps, {
        fetchBlogPosts:
          _actions_blogActions_js__WEBPACK_IMPORTED_MODULE_17__[
            "fetchBlogPosts"
          ],
        fetchImages:
          _actions_imageActions_js__WEBPACK_IMPORTED_MODULE_16__["fetchImages"]
      })(App);

      /***/
    }
});
//# sourceMappingURL=main.1b440f560c55398cceb6.hot-update.js.map
