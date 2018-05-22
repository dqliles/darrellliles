webpackJsonp([0],{

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(24);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(108);

var _Content = __webpack_require__(123);

var _Content2 = _interopRequireDefault(_Content);

var _Header = __webpack_require__(124);

var _Header2 = _interopRequireDefault(_Header);

var _About = __webpack_require__(127);

var _About2 = _interopRequireDefault(_About);

var _Work = __webpack_require__(135);

var _Work2 = _interopRequireDefault(_Work);

var _Contact = __webpack_require__(128);

var _Contact2 = _interopRequireDefault(_Contact);

var _Home = __webpack_require__(125);

var _Home2 = _interopRequireDefault(_Home);

var _Filter = __webpack_require__(126);

var _Filter2 = _interopRequireDefault(_Filter);

var _MyRoutes = __webpack_require__(130);

var _MyRoutes2 = _interopRequireDefault(_MyRoutes);

var _projectData = __webpack_require__(66);

var _projectData2 = _interopRequireDefault(_projectData);

var _Rchurch = __webpack_require__(133);

var _Rchurch2 = _interopRequireDefault(_Rchurch);

var _Gocart = __webpack_require__(129);

var _Gocart2 = _interopRequireDefault(_Gocart);

var _UA = __webpack_require__(134);

var _UA2 = _interopRequireDefault(_UA);

var _PB = __webpack_require__(132);

var _PB2 = _interopRequireDefault(_PB);

var _OddCycle = __webpack_require__(131);

var _OddCycle2 = _interopRequireDefault(_OddCycle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      name: 'Joe',
      projectData: _projectData2.default

    };

    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(_Header2.default, null),
            _react2.default.createElement(
              _reactRouterDom.Switch,
              null,
              _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/about', component: _About2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/work', render: function render() {
                  return _react2.default.createElement(_Work2.default, { projectData: _this2.state.projectData });
                } }),
              _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/contact', component: _Contact2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/rchurch', component: _Rchurch2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/gocart', component: _Gocart2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/uafootball', component: _UA2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/primebeefhouse', component: _PB2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/oddcycle', component: _OddCycle2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default })
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = function (_Component) {
  _inherits(Content, _Component);

  function Content() {
    _classCallCheck(this, Content);

    return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
  }

  _createClass(Content, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "" },
        _react2.default.createElement(
          "div",
          { className: "tag-box" },
          _react2.default.createElement(
            "h1",
            { className: "tagline" },
            _react2.default.createElement(
              "span",
              null,
              "Darrell Liles"
            ),
            " is a Passionate",
            _react2.default.createElement("br", null),
            "Frontend Developer"
          )
        )
      );
    }
  }]);

  return Content;
}(_react.Component);

exports.default = Content;

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(108);

var _reactAddonsCssTransitionGroup = __webpack_require__(78);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    _this.showMenu = _this.showMenu.bind(_this);
    _this.hideMenu = _this.hideMenu.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: 'showMenu',
    value: function showMenu() {
      document.getElementById('nav').style.display = 'block';
      document.getElementById('btn').style.display = 'none';
      document.getElementById('x').style.display = 'block';
    }
  }, {
    key: 'hideMenu',
    value: function hideMenu() {
      document.getElementById('nav').style.display = 'none';
      document.getElementById('btn').style.display = 'block';
      document.getElementById('x').style.display = 'none';
    }
  }, {
    key: 'render',
    value: function render() {
      var transitionOptions = {
        transitionName: 'fade',
        transitionEnterTimeout: 500,
        transitionLeaveTimeout: 500
      };

      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'div',
          { className: 'a' },
          _react2.default.createElement(
            _reactRouterDom.NavLink,
            { to: '/' },
            _react2.default.createElement('img', { src: './img/wdllogo.png' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'b' },
          _react2.default.createElement('img', { src: './img/wmenu.png', id: 'btn', onClick: this.showMenu }),
          ' ',
          _react2.default.createElement('img', { src: './img/cross.png', id: 'x', onClick: this.hideMenu })
        ),
        _react2.default.createElement(
          _reactAddonsCssTransitionGroup2.default,
          transitionOptions,
          _react2.default.createElement(
            'nav',
            { id: 'nav' },
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { to: '/about', className: 'deg45' },
              'About'
            ),
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { to: '/work', className: 'deg135' },
              'Work'
            ),
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { to: '/contact', className: 'deg180' },
              'Contact'
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "home" },
        _react2.default.createElement(
          "div",
          { className: "tagln" },
          _react2.default.createElement(
            "h1",
            null,
            " ",
            _react2.default.createElement(
              "span",
              null,
              "DARRELL LILES"
            ),
            _react2.default.createElement("br", null)
          ),
          _react2.default.createElement("br", null),
          _react2.default.createElement(
            "p",
            null,
            "Im a front-end developer focused on crafting clean & user friendly experiences."
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    return _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).apply(this, arguments));
  }

  _createClass(Filter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'This is the Home Page'
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_Component) {
  _inherits(About, _Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
  }

  _createClass(About, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: " about-section" },
          _react2.default.createElement(
            "div",
            { className: "about-left" },
            _react2.default.createElement(
              "div",
              { className: "about-left-content" },
              _react2.default.createElement(
                "h3",
                null,
                "Attributes"
              ),
              _react2.default.createElement(
                "ul",
                null,
                _react2.default.createElement(
                  "p",
                  null,
                  "Driven",
                  _react2.default.createElement("br", null),
                  "Team Player",
                  _react2.default.createElement("br", null),
                  "Good Communicator",
                  _react2.default.createElement("br", null),
                  "Professional",
                  _react2.default.createElement("br", null),
                  "Confident",
                  _react2.default.createElement("br", null),
                  "Punctual",
                  _react2.default.createElement("br", null),
                  "Reliable",
                  _react2.default.createElement("br", null),
                  "Committed",
                  _react2.default.createElement("br", null),
                  "Innovative",
                  _react2.default.createElement("br", null),
                  "Problem Solver",
                  _react2.default.createElement("br", null),
                  "Creative",
                  _react2.default.createElement("br", null),
                  "Adaptable",
                  _react2.default.createElement("br", null),
                  "Efficient"
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "about-right" },
            _react2.default.createElement(
              "div",
              { className: "about-right-content" },
              _react2.default.createElement(
                "h3",
                null,
                " Profile"
              ),
              _react2.default.createElement(
                "p",
                null,
                "An enthusiastic and driven User Interface & Experience designer with an eye for pixel perfect detail, demonstrating cutting edge practices, looking for the next big challenge."
              ),
              _react2.default.createElement(
                "p",
                null,
                "Graduated from Bournemouth University in 2011, studying Interactive Media Production. With 8 years industry experience in Graphic and Web Design, working for a number of creative companies, now solely specialising in User Interface & User Experience Design. "
              ),
              _react2.default.createElement(
                "p",
                null,
                "I have a variety of skills in other areas such project management/scheduling, creative consultancy, print design, video editing and photography."
              )
            )
          )
        )
      );
    }
  }]);

  return About;
}(_react.Component);

exports.default = About;

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(78);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = function (_Component) {
  _inherits(Contact, _Component);

  function Contact() {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
  }

  _createClass(Contact, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactAddonsCssTransitionGroup2.default,
          { transitionName: 'fade',
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 300 },
          _react2.default.createElement(
            'div',
            { className: 'contact-container' },
            _react2.default.createElement(
              'div',
              { id: 'contact-greeting' },
              _react2.default.createElement(
                'h1',
                { id: 'contact-h1', className: 'contact-greet' },
                'Lets Talk'
              ),
              _react2.default.createElement(
                'p',
                { id: 'contact-p', className: 'contact-greet' },
                'Reach out for a project or just to say hello!'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'wrapper' },
              _react2.default.createElement(
                'div',
                { className: 'contact' },
                _react2.default.createElement('h3', null),
                _react2.default.createElement(
                  'div',
                  { className: 'alert' },
                  'Your message has been sent'
                ),
                _react2.default.createElement(
                  'form',
                  { id: 'contactForm' },
                  _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                      'label',
                      null,
                      'Name'
                    ),
                    _react2.default.createElement('input', { type: 'text', name: 'name', id: 'name', required: true })
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                      'label',
                      null,
                      'Company'
                    ),
                    _react2.default.createElement('input', { type: 'text', name: 'company', id: 'company' })
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                      'label',
                      null,
                      'Email Address'
                    ),
                    _react2.default.createElement('input', { type: 'email', name: 'email', id: 'email', required: true })
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                      'label',
                      null,
                      'Phone Number'
                    ),
                    _react2.default.createElement('input', { type: 'text', name: 'phone', id: 'phone' })
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: 'full' },
                    _react2.default.createElement(
                      'label',
                      null,
                      'Message'
                    ),
                    _react2.default.createElement('textarea', { name: 'message', rows: '5', id: 'message' })
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: 'full' },
                    _react2.default.createElement(
                      'button',
                      { type: 'submit' },
                      'Submit'
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Contact;
}(_react.Component);

exports.default = Contact;

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gocart = function (_Component) {
  _inherits(Gocart, _Component);

  function Gocart() {
    _classCallCheck(this, Gocart);

    return _possibleConstructorReturn(this, (Gocart.__proto__ || Object.getPrototypeOf(Gocart)).apply(this, arguments));
  }

  _createClass(Gocart, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: " project-section" },
          _react2.default.createElement("div", { className: "project-left" }),
          _react2.default.createElement(
            "div",
            { className: "project-right" },
            _react2.default.createElement(
              "div",
              { className: "gocart-right-content" },
              _react2.default.createElement(
                "h3",
                null,
                " OVERVIEW"
              ),
              _react2.default.createElement("hr", { className: "line" }),
              _react2.default.createElement(
                "h2",
                null,
                "Pro Track"
              ),
              _react2.default.createElement(
                "p",
                null,
                "An enthusiastic and driven User Interface & Experience designer with an eye for pixel perfect detail, demonstrating cutting edge practices, looking for the next big challenge."
              ),
              _react2.default.createElement(
                "p",
                null,
                "Graduated from Bournemouth University in 2011, studying Interactive Media Production. "
              ),
              _react2.default.createElement(
                "a",
                { href: "https://dqliles.github.io/gocart/", className: "project-btn" },
                "View Project"
              )
            )
          )
        )
      );
    }
  }]);

  return Gocart;
}(_react.Component);

exports.default = Gocart;

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyRoutes = function (_Component) {
  _inherits(MyRoutes, _Component);

  function MyRoutes() {
    _classCallCheck(this, MyRoutes);

    var _this = _possibleConstructorReturn(this, (MyRoutes.__proto__ || Object.getPrototypeOf(MyRoutes)).call(this));

    _this.state = {
      products: [{ id: 1, novelty: true, offer: false, name: 'test1' }, { id: 2, novelty: true, offer: true, name: 'test2' }, { id: 3, novelty: false, offer: true, name: 'test3' }],
      filters: {
        novelty: true,
        offer: true
      }
    };
    return _this;
  }

  _createClass(MyRoutes, [{
    key: 'setCategory',
    value: function setCategory(category) {
      this.setState(function (state) {
        return {
          filters: Object.assign({}, state.filters, _defineProperty({}, category, !state.filters[category]))
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      console.log(this.state.filters);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          { onClick: function onClick() {
              return _this2.setCategory('novelty');
            } },
          'Akce'
        ),
        _react2.default.createElement(
          'button',
          { onClick: function onClick() {
              return _this2.setCategory('offer');
            } },
          'Offer'
        ),
        this.state.products.filter(function (product) {
          return product.novelty === _this2.state.filters.novelty || product.offer === _this2.state.filters.offer;
        }).map(function (product) {
          return _react2.default.createElement(
            'div',
            { key: product.id },
            product.name
          );
        })
      );
    }
  }]);

  return MyRoutes;
}(_react.Component);

exports.default = MyRoutes;

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OddCycle = function (_Component) {
  _inherits(OddCycle, _Component);

  function OddCycle() {
    _classCallCheck(this, OddCycle);

    return _possibleConstructorReturn(this, (OddCycle.__proto__ || Object.getPrototypeOf(OddCycle)).apply(this, arguments));
  }

  _createClass(OddCycle, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: " project-section" },
          _react2.default.createElement("div", { className: "OddCycle-left" }),
          _react2.default.createElement(
            "div",
            { className: "project-right" },
            _react2.default.createElement(
              "div",
              { className: "OddCycle-right-content" },
              _react2.default.createElement(
                "h3",
                null,
                " OVERVIEW"
              ),
              _react2.default.createElement("hr", { className: "line" }),
              _react2.default.createElement(
                "h2",
                null,
                "OddCycle"
              ),
              _react2.default.createElement(
                "p",
                null,
                "An enthusiastic and driven User Interface & Experience designer with an eye for pixel perfect detail, demonstrating cutting edge practices, looking for the next big challenge."
              ),
              _react2.default.createElement(
                "p",
                null,
                "Graduated from Bournemouth University in 2011, studying Interactive Media Production."
              ),
              _react2.default.createElement(
                "a",
                { href: "http://www.oddcycle.com", className: "project-btn" },
                "View Project"
              )
            )
          )
        )
      );
    }
  }]);

  return OddCycle;
}(_react.Component);

exports.default = OddCycle;

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PB = function (_Component) {
  _inherits(PB, _Component);

  function PB() {
    _classCallCheck(this, PB);

    return _possibleConstructorReturn(this, (PB.__proto__ || Object.getPrototypeOf(PB)).apply(this, arguments));
  }

  _createClass(PB, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: " project-section" },
          _react2.default.createElement("div", { className: "PB-left" }),
          _react2.default.createElement(
            "div",
            { className: "project-right" },
            _react2.default.createElement(
              "div",
              { className: "PB-right-content" },
              _react2.default.createElement(
                "h3",
                null,
                " OVERVIEW"
              ),
              _react2.default.createElement("hr", { className: "line" }),
              _react2.default.createElement(
                "h2",
                null,
                "Prime Beefhouse"
              ),
              _react2.default.createElement(
                "p",
                null,
                "An enthusiastic and driven User Interface & Experience designer with an eye for pixel perfect detail, demonstrating cutting edge practices, looking for the next big challenge."
              ),
              _react2.default.createElement(
                "p",
                null,
                "Graduated from Bournemouth University in 2011, studying Interactive Media Production. "
              ),
              _react2.default.createElement(
                "a",
                { href: "www.darrellliles.com", className: "project-btn" },
                "View Project"
              )
            )
          )
        )
      );
    }
  }]);

  return PB;
}(_react.Component);

exports.default = PB;

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rchurch = function (_Component) {
  _inherits(Rchurch, _Component);

  function Rchurch() {
    _classCallCheck(this, Rchurch);

    return _possibleConstructorReturn(this, (Rchurch.__proto__ || Object.getPrototypeOf(Rchurch)).apply(this, arguments));
  }

  _createClass(Rchurch, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: " project-section" },
          _react2.default.createElement("div", { className: "Rchurch-left" }),
          _react2.default.createElement(
            "div",
            { className: "project-right" },
            _react2.default.createElement(
              "div",
              { className: "Rchurch-right-content" },
              _react2.default.createElement(
                "h3",
                null,
                " OVERVIEW"
              ),
              _react2.default.createElement("hr", { className: "line" }),
              _react2.default.createElement(
                "h2",
                null,
                "R Church"
              ),
              _react2.default.createElement(
                "p",
                null,
                "An enthusiastic and driven User Interface & Experience designer with an eye for pixel perfect detail, demonstrating cutting edge practices, looking for the next big challenge."
              ),
              _react2.default.createElement(
                "p",
                null,
                "Graduated from Bournemouth University in 2011, studying Interactive Media Production. "
              ),
              _react2.default.createElement(
                "a",
                { href: "http://www.tryrchurch.com", className: "project-btn" },
                "View Project"
              )
            )
          )
        )
      );
    }
  }]);

  return Rchurch;
}(_react.Component);

exports.default = Rchurch;

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UA = function (_Component) {
  _inherits(UA, _Component);

  function UA() {
    _classCallCheck(this, UA);

    return _possibleConstructorReturn(this, (UA.__proto__ || Object.getPrototypeOf(UA)).apply(this, arguments));
  }

  _createClass(UA, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: " project-section" },
          _react2.default.createElement("div", { className: "UA-left" }),
          _react2.default.createElement(
            "div",
            { className: "project-right" },
            _react2.default.createElement(
              "div",
              { className: "UA-right-content" },
              _react2.default.createElement(
                "h3",
                null,
                " OVERVIEW"
              ),
              _react2.default.createElement("hr", { className: "line" }),
              _react2.default.createElement(
                "h2",
                null,
                "UA Football"
              ),
              _react2.default.createElement(
                "p",
                null,
                "An enthusiastic and driven User Interface & Experience designer with an eye for pixel perfect detail, demonstrating cutting edge practices, looking for the next big challenge."
              ),
              _react2.default.createElement(
                "p",
                null,
                "Graduated from Bournemouth University in 2011, studying Interactive Media Production. "
              ),
              _react2.default.createElement(
                "a",
                { href: "http://www.uafootball.us", className: "project-btn" },
                "View Project"
              )
            )
          )
        )
      );
    }
  }]);

  return UA;
}(_react.Component);

exports.default = UA;

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Work = function (_Component) {
  _inherits(Work, _Component);

  function Work() {
    _classCallCheck(this, Work);

    var _this = _possibleConstructorReturn(this, (Work.__proto__ || Object.getPrototypeOf(Work)).call(this));

    _this.state = {
      name: 'Joe'
    };
    _this.loopProjects = _this.loopProjects.bind(_this);
    return _this;
  }

  _createClass(Work, [{
    key: 'loopProjects',
    value: function loopProjects() {
      var projectData = this.props.projectData;

      return projectData.map(function (project, index) {
        return _react2.default.createElement(
          'div',
          { className: 'col-md-3', key: index },
          _react2.default.createElement(
            'div',
            { className: 'portfolio-boxes' },
            _react2.default.createElement(
              'div',
              { className: 'portfolio-img', style: { background: 'url("' + project.image + '") no-repeat  top / cover' } },
              _react2.default.createElement(
                'div',
                { className: 'img-details' },
                _react2.default.createElement('a', { href: project.url })
              )
            )
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'portfolio' },
        _react2.default.createElement(
          'div',
          { id: 'portfolio-content' },
          _react2.default.createElement(
            'h1',
            null,
            'Work'
          ),
          _react2.default.createElement(
            'div',
            { id: 'portfolio-nav' },
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'All'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Wordpress'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'React'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Php'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Html & Css'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'box' },
            this.loopProjects()
          )
        )
      );
    }
  }]);

  return Work;
}(_react.Component);

exports.default = Work;

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(24);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(121);

var _App2 = _interopRequireDefault(_App);

var _projectData = __webpack_require__(66);

var _projectData2 = _interopRequireDefault(_projectData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(_App2.default, { projectData: _projectData2.default }), app);

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var projectData = [{
  name: 'UA Football',
  category: 'wordpress',
  url: '/uafootball',
  image: 'img/UA2.png'
}, {
  name: 'Pro Track',
  category: 'php',
  url: '/gocart',
  image: 'img/gocart.png'
}, {
  name: 'OddCycle',
  category: 'wordpress',
  url: '/oddcycle',
  image: './img/OddCycle.png'

}, {
  name: 'digital agency',
  category: 'html&css',
  image: 'http://www.ovocreatives.com/wp-content/uploads/2017/05/web-development.jpg'
}, {
  name: 'R Church',
  category: 'wordpress',
  url: '/rchurch',
  image: 'img/rchurch.png'
}, {
  name: 'Prime Beefhouse',
  category: 'wordpress',
  url: '/primebeefhouse',
  image: 'img/PB.png'
}, {
  name: 'real estate',
  category: 'react',
  image: 'https://udemy-images.udemy.com/course/750x422/11174_cbb1_116.jpg'
}, {
  name: 'App',
  category: 'php',
  image: 'https://udemy-images.udemy.com/course/750x422/660876_1b36_5.jpg'
}, {
  name: 'Kingdom fresh apparel',
  category: 'wordpress',
  image: 'https://udemy-images.udemy.com/course/750x422/904462_042a_3.jpg'
}];

exports.default = projectData;

/***/ })

},[136]);