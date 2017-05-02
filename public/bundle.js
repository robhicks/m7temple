(function (incrementalDom) {
'use strict';

var hoisted1 = ["class", "button primary", "href", "/login"];
function render(ctrl) {
  incrementalDom.elementOpen("h1");
  incrementalDom.text("Manila 7th Ward Temple and Family History Gifts Development Site");
  incrementalDom.elementClose("h1");
  incrementalDom.elementOpen("h3");
  incrementalDom.text("Access to this site requires user login");
  incrementalDom.elementClose("h3");
  incrementalDom.elementOpen("a", "8f5d95f2-2ef8-4170-b673-fc230ee9dc22", hoisted1);
  incrementalDom.text("Please Login");
  incrementalDom.elementClose("a");
}

var css = ":host {\n  font-size: 1em;\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: 'Roboto', Helvetica, sans-serif;\n  color: #222;\n  background: url('/img/background.svg');\n  background-size: cover;\n  background-color: #0f76a1;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300;\n}\nh1 {\n  font-size: 4.0rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n}\nh2 {\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n}\nh3 {\n  font-size: 3.0rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n}\nh4 {\n  font-size: 2.4rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n}\nh5 {\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n}\nh6 {\n  font-size: 1.5rem;\n  line-height: 1.6;\n  letter-spacing: 0;\n}\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 {\n    font-size: 5.0rem;\n  }\n  h2 {\n    font-size: 4.2rem;\n  }\n  h3 {\n    font-size: 3.6rem;\n  }\n  h4 {\n    font-size: 3.0rem;\n  }\n  h5 {\n    font-size: 2.4rem;\n  }\n  h6 {\n    font-size: 1.5rem;\n  }\n}\np {\n  margin-top: 0;\n}\na {\n  color: #f26100;\n}\na:hover {\n  color: #f26100;\n}\n.grid {\n  display: flex;\n}\n.col {\n  flex: 1;\n}\n@media (max-width: 500px) {\n  .grid {\n    display: block;\n  }\n}\n.button,\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.button:hover,\nbutton:hover,\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\n.button:focus,\nbutton:focus,\ninput[type=\"submit\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0;\n}\n.button.primary,\nbutton.primary,\ninput[type=\"submit\"].primary,\ninput[type=\"reset\"].primary,\ninput[type=\"button\"].primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0;\n}\n.button.primary:hover,\nbutton.primary:hover,\ninput[type=\"submit\"].primary:hover,\ninput[type=\"reset\"].primary:hover,\ninput[type=\"button\"].primary:hover,\n.button.primary:focus,\nbutton.primary:focus,\ninput[type=\"submit\"].primary:focus,\ninput[type=\"reset\"].primary:focus,\ninput[type=\"button\"].primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB;\n}\n.button.danger,\nbutton.danger,\ninput[type=\"submit\"].danger,\ninput[type=\"reset\"].danger,\ninput[type=\"button\"].danger {\n  color: #FFF;\n  background-color: rgba(255, 0, 0, 0.75);\n  border-color: #ff0000;\n}\n.button.danger:hover,\nbutton.danger:hover,\ninput[type=\"submit\"].danger:hover,\ninput[type=\"reset\"].danger:hover,\ninput[type=\"button\"].danger:hover,\n.button.danger:focus,\nbutton.danger:focus,\ninput[type=\"submit\"].danger:focus,\ninput[type=\"reset\"].danger:focus,\ninput[type=\"button\"].danger:focus {\n  color: #FFF;\n  background-color: #ff0000;\n  border-color: #ff0000;\n}\n:host {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  background: url('/img/background.svg');\n  background-size: cover;\n  background-color: #0f76a1;\n}\nsection {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\nsection h1 {\n  text-align: center;\n  color: white;\n  font: bold 1.5em museo, sans-serif;\n}\nsection h3 {\n  font-size: 32px;\n  color: white;\n}\nsection a {\n  font-size: 1em !important;\n}\n";

var css$1 = ":host {\n  font-size: 1em;\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: 'Roboto', Helvetica, sans-serif;\n  color: #222;\n  background: url('/img/background.svg');\n  background-size: cover;\n  background-color: #0f76a1;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300;\n}\nh1 {\n  font-size: 4.0rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n}\nh2 {\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n}\nh3 {\n  font-size: 3.0rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n}\nh4 {\n  font-size: 2.4rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n}\nh5 {\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n}\nh6 {\n  font-size: 1.5rem;\n  line-height: 1.6;\n  letter-spacing: 0;\n}\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 {\n    font-size: 5.0rem;\n  }\n  h2 {\n    font-size: 4.2rem;\n  }\n  h3 {\n    font-size: 3.6rem;\n  }\n  h4 {\n    font-size: 3.0rem;\n  }\n  h5 {\n    font-size: 2.4rem;\n  }\n  h6 {\n    font-size: 1.5rem;\n  }\n}\np {\n  margin-top: 0;\n}\na {\n  color: #f26100;\n}\na:hover {\n  color: #f26100;\n}\n.button,\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.button:hover,\nbutton:hover,\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\n.button:focus,\nbutton:focus,\ninput[type=\"submit\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0;\n}\n.button.primary,\nbutton.primary,\ninput[type=\"submit\"].primary,\ninput[type=\"reset\"].primary,\ninput[type=\"button\"].primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0;\n}\n.button.primary:hover,\nbutton.primary:hover,\ninput[type=\"submit\"].primary:hover,\ninput[type=\"reset\"].primary:hover,\ninput[type=\"button\"].primary:hover,\n.button.primary:focus,\nbutton.primary:focus,\ninput[type=\"submit\"].primary:focus,\ninput[type=\"reset\"].primary:focus,\ninput[type=\"button\"].primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB;\n}\n.button.danger,\nbutton.danger,\ninput[type=\"submit\"].danger,\ninput[type=\"reset\"].danger,\ninput[type=\"button\"].danger {\n  color: #FFF;\n  background-color: rgba(255, 0, 0, 0.75);\n  border-color: #ff0000;\n}\n.button.danger:hover,\nbutton.danger:hover,\ninput[type=\"submit\"].danger:hover,\ninput[type=\"reset\"].danger:hover,\ninput[type=\"button\"].danger:hover,\n.button.danger:focus,\nbutton.danger:focus,\ninput[type=\"submit\"].danger:focus,\ninput[type=\"reset\"].danger:focus,\ninput[type=\"button\"].danger:focus {\n  color: #FFF;\n  background-color: #ff0000;\n  border-color: #ff0000;\n}\n:host {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n#modal-container {\n  height: 100%;\n  width: 100%;\n}\n#overlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #2c2c2c;\n  opacity: 0.95;\n  transition: transform 0.3s, opacity 0.3s;\n  z-index: 9000;\n}\n#modal {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 90%;\n  max-width: 600px;\n  z-index: 9001;\n}\n#content {\n  background: #ffffff;\n  opacity: 1;\n  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.35), 0px 3px 2px 0px rgba(0, 0, 0, 0.18);\n  margin: 0 auto;\n  position: relative;\n}\n#header {\n  padding: 2vh 2vw 0 2vw;\n}\n#header h4 {\n  font-size: 1em;\n  padding: 0;\n  margin: 0;\n}\n#body {\n  padding: 2vh 2vw;\n  max-height: 90vh;\n  font-size: 0.8em;\n}\n#buttons {\n  padding: 2vh 2vw;\n}\n#buttons button {\n  margin-right: 8px;\n  font-size: .5em;\n}\n";

var hoisted1$1 = ["id", "overlay"];
var hoisted2 = ["id", "modal"];
var hoisted3 = ["id", "content"];
var hoisted4 = ["id", "header"];
var hoisted5 = ["id", "body"];
var hoisted6 = ["id", "buttons"];
var hoisted7 = ["type", "button", "name", "primary", "class", "button primary"];
var hoisted8 = ["type", "button", "name", "cancel", "class", "button minor"];
function render$1(ctrl) {
  if (ctrl._show) {
    incrementalDom.elementOpen("div", "882d79d2-856b-4a06-9b7d-9430cfbd008e", hoisted1$1);
    incrementalDom.elementOpen("div", "20f96f71-08bb-47b6-b3c2-1b4c0c366aab", hoisted2);
    incrementalDom.elementOpen("div", "b82aac7e-3c88-4887-a2c1-a27d6a351cc9", hoisted3);
    incrementalDom.elementOpen("div", "5dfee494-4ef1-4a75-8bb7-07ed6194350e", hoisted4);
    incrementalDom.elementOpen("h4");
    incrementalDom.text("" + ctrl._heading + "");
    incrementalDom.elementClose("h4");
    incrementalDom.elementClose("div");
    incrementalDom.elementOpen("div", "f8bdaf56-057c-4bae-8804-65a30bd14c88", hoisted5);
    incrementalDom.text("" + ctrl._body + "");
    incrementalDom.elementClose("div");
    incrementalDom.elementOpen("div", "bb4e29fd-1fe7-45ea-957d-0a4a84b635b7", hoisted6);
    incrementalDom.elementOpen("button", "9d168eca-ffe5-4e91-92c4-af39fae4c29c", hoisted7, "onclick", function ($event) {
      var $element = this;
      ctrl._clickButton('primary');
    });
    incrementalDom.text("" + ctrl._primary + "");
    incrementalDom.elementClose("button");
    if (ctrl._cancel) {
      incrementalDom.elementOpen("button", "24bb875e-74f6-42d9-baac-b33e4d2e4321", hoisted8, "onclick", function ($event) {
        var $element = this;
        ctrl._clickButton('cancel');
      });
      incrementalDom.text("" + ctrl._cancel + "");
      incrementalDom.elementClose("button");
    }
    incrementalDom.elementClose("div");
    incrementalDom.elementClose("div");
    incrementalDom.elementClose("div");
    incrementalDom.elementClose("div");
  }
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var RbhModal = function (_HTMLElement) {
  inherits(RbhModal, _HTMLElement);

  function RbhModal() {
    classCallCheck(this, RbhModal);

    var _this = possibleConstructorReturn(this, (RbhModal.__proto__ || Object.getPrototypeOf(RbhModal)).call(this));

    _this.attachShadow({ mode: 'open' });
    _this.shadowRoot.innerHTML = '<style>' + css$1 + '</style><container></container>';
    _this.element = _this.shadowRoot.querySelector('container');
    _this._heading = "";
    _this._body = "";
    _this._primary = "";
    _this._cancel = "";
    _this._show = true;
    return _this;
  }

  createClass(RbhModal, [{
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oVal, nVal) {
      if (nVal && nVal !== '' && nVal !== oVal) {
        if (name === "heading" && nVal !== this._heading) this._heading = nVal;
        if (name === "body" && nVal !== this._body) this._body = nVal;
        if (name === "primary" && nVal !== this._primary) this._primary = nVal;
        if (name === "cancel" && nVal !== this._cancel) this._cancel = nVal;
        if (name === "show" && nVal !== this._show) this._show = nVal;
        this._updateView();
      }
    }
  }, {
    key: '_clickButton',
    value: function _clickButton(button) {
      document.dispatchEvent(new CustomEvent('rbhModalButtonClick', { detail: button }));
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this._updateView();
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {}
  }, {
    key: '_updateView',
    value: function _updateView() {
      if (this.element) incrementalDom.patch(this.element, render$1, this);
    }
  }, {
    key: 'heading',
    get: function get$$1() {
      return this._heading;
    },
    set: function set$$1(heading) {
      this._heading = heading;
      this.setAttribute("heading", heading);
    }
  }, {
    key: 'body',
    get: function get$$1() {
      return this._body;
    },
    set: function set$$1(body) {
      this._body = body;
      this.setAttribute("body", body);
    }
  }, {
    key: 'primary',
    get: function get$$1() {
      return this._primary;
    },
    set: function set$$1(primary) {
      this._primary = primary;
      this.setAttribute("primary", primary);
    }
  }, {
    key: 'cancel',
    get: function get$$1() {
      return this._cancel;
    },
    set: function set$$1(cancel) {
      this._cancel = cancel;
      this.setAttribute("cancel", cancel);
    }
  }, {
    key: 'show',
    get: function get$$1() {
      return this._show;
    },
    set: function set$$1(show) {
      this._show = show;
      this.setAttribute("show", show);
    }
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return ["heading", "body", "primary", "cancel", "show"];
    }
  }]);
  return RbhModal;
}(HTMLElement);

customElements.define('rbh-modal', RbhModal);

var socket$2 = socketCluster.connect();
var userAuthenticated = new CustomEvent('userAuthenticated');
var userUnauthenticated = new CustomEvent('userUnauthenticated');

var user = {
  authenticated: false,
  initialized: false
};

hello.init({
  facebook: window.SERVER_ENV.FACEBOOK_KEY,
  github: window.SERVER_ENV.GITHUB_KEY,
  google: window.SERVER_ENV.GOOGLE_KEY,
  twitter: window.SERVER_ENV.TWITTER_KEY
}, {
  redirect_uri: window.SERVER_ENV.REDIRECT_URL,
  scope: 'email'
});

hello.on('auth.login', function (auth) {
  // console.log("auth", auth)
  hello(auth.network).api('me').then(function (r) {
    console.log("hellojs:auth.login user", r);
    console.log("socket.authState", socket$2.authState);
    if (socket$2.authState !== 'authenticated') socket$2.emit('auth', r);
    if (/\/oauth2callback/.test(router.state.value)) router.navigate('/home/authenticated');
  }, function (err) {
    var modal = new RbhModal();
    modal.heading = 'Authentication Provider Error';
    modal.body = err;
    modal.primary = 'OK';
    document.addEventListener('rbhModalButtonClick', function (evt) {
      modal.remove();
      // router.navigate('/login');
    });
  });
});

user.loadUser = function (req, evt, next) {
  if (socket$2.authState === 'authenticated') next();else router.navigate('/login');
};

socket$2.on('authStateChange', function (status) {
  // console.log("status", status)
  // console.log("socket", socket)
  if (status.newState === 'authenticated') {
    Object.assign(user, status.authToken.user, { authenticated: true });
    document.dispatchEvent(userAuthenticated);
    if (/.+\/login/.test(window.location.href)) router.navigate('/home/authenticated');
  }
  if (status.newState === 'unauthenticated') {
    user.authenticated = false;
    document.dispatchEvent(userUnauthenticated);
  }
});

user.logout = function () {
  hello.logout();
  Object.assign(user, { authenticated: false, admin: false });
  socket$2.emit('logout', user);
};

var HomeView = function (_HTMLElement) {
  inherits(HomeView, _HTMLElement);

  function HomeView() {
    classCallCheck(this, HomeView);

    var _this = possibleConstructorReturn(this, (HomeView.__proto__ || Object.getPrototypeOf(HomeView)).call(this));

    _this.user = user;
    return _this;
  }

  createClass(HomeView, [{
    key: 'anchorClickHandler',
    value: function anchorClickHandler(evt) {
      if (evt.target.tagName !== 'A') return;
      router.navigate(evt.target.getAttribute('href'));
      evt.preventDefault();
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oVal, nVal) {}
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = '<style>' + css + '</style><section></section>';
      this.shadowRoot.addEventListener('click', this.anchorClickHandler.bind(this));
      this.element = this.shadowRoot.querySelector('section');
      this.updateView();

      document.addEventListener('userChanged', this.updateView);
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {}
  }, {
    key: 'updateView',
    value: function updateView() {
      // wrap in if. otherwise ff and safari fail
      if (this.element) incrementalDom.patch(this.element, render, this);
    }
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return [];
    }
  }]);
  return HomeView;
}(HTMLElement);

customElements.define('home-view', HomeView);

var hoisted1$2 = ["id", "buttons"];
var hoisted2$1 = ["class", "provider"];
var hoisted3$1 = ["src", "/img/facebook.svg", "alt", ""];
var hoisted4$1 = ["class", "provider"];
var hoisted5$1 = ["src", "/img/google.svg", "alt", ""];
var hoisted6$1 = ["class", "privacy", "href", "/privacy-policy"];
function render$2(ctrl) {
  incrementalDom.elementOpen("h1");
  incrementalDom.text("Manila 7th Ward Temple and Family History Gifts Development Site");
  incrementalDom.elementClose("h1");
  incrementalDom.elementOpen("h3");
  incrementalDom.text("Select a Provider");
  incrementalDom.elementClose("h3");
  incrementalDom.elementOpen("div", "df9ef23f-0af3-4cbc-bf04-49e81d56ee91", hoisted1$2);
  incrementalDom.elementOpen("a", "5df2b40d-8235-4a76-b916-7d6aa5ffddcf", hoisted2$1, "onclick", function ($event) {
    var $element = this;
    ctrl.hello('facebook', { display: 'page' }).login();
  });
  incrementalDom.elementOpen("img", "a5085ed6-807d-4d33-9d36-b3ac493490b8", hoisted3$1);
  incrementalDom.elementClose("img");
  incrementalDom.elementOpen("span");
  incrementalDom.text("Facebook");
  incrementalDom.elementClose("span");
  incrementalDom.elementClose("a");
  incrementalDom.elementOpen("a", "d3ecf7b3-b761-4bb6-864b-2ae365631d29", hoisted4$1, "onclick", function ($event) {
    var $element = this;
    ctrl.hello('google', { display: 'page' }).login();
  });
  incrementalDom.elementOpen("img", "179ef832-6511-4a12-9276-ee6ab22b51ff", hoisted5$1);
  incrementalDom.elementClose("img");
  incrementalDom.elementOpen("span");
  incrementalDom.text("Google");
  incrementalDom.elementClose("span");
  incrementalDom.elementClose("a");
  incrementalDom.elementOpen("a", "78dd8593-7304-47b2-9dd1-0e116ed2c563", hoisted6$1);
  incrementalDom.text("Privacy Policy");
  incrementalDom.elementClose("a");
  incrementalDom.elementClose("div");
}

var css$2 = ":host {\n  font-size: 1em;\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: 'Roboto', Helvetica, sans-serif;\n  color: #222;\n  background: url('/img/background.svg');\n  background-size: cover;\n  background-color: #0f76a1;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300;\n}\nh1 {\n  font-size: 4.0rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n}\nh2 {\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n}\nh3 {\n  font-size: 3.0rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n}\nh4 {\n  font-size: 2.4rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n}\nh5 {\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n}\nh6 {\n  font-size: 1.5rem;\n  line-height: 1.6;\n  letter-spacing: 0;\n}\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 {\n    font-size: 5.0rem;\n  }\n  h2 {\n    font-size: 4.2rem;\n  }\n  h3 {\n    font-size: 3.6rem;\n  }\n  h4 {\n    font-size: 3.0rem;\n  }\n  h5 {\n    font-size: 2.4rem;\n  }\n  h6 {\n    font-size: 1.5rem;\n  }\n}\np {\n  margin-top: 0;\n}\na {\n  color: #f26100;\n}\na:hover {\n  color: #f26100;\n}\n.grid {\n  display: flex;\n}\n.col {\n  flex: 1;\n}\n@media (max-width: 500px) {\n  .grid {\n    display: block;\n  }\n}\n:host {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  background: url('/img/background.svg');\n  background-size: cover;\n  background-color: #0f76a1;\n}\nsection {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\nsection h1,\nsection h3 {\n  color: white !important;\n}\nsection h1 {\n  font: bold 1.4em museo, sans-serif;\n  margin-bottom: 15px;\n}\nsection h3 {\n  font-size: 1.1em;\n}\n#buttons {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 50%;\n}\n#buttons a.provider {\n  display: flex;\n  height: 64px;\n  line-height: 64px;\n  width: 100%;\n  border: 1px solid #ccc;\n  background-color: white;\n  margin-bottom: 1vh;\n  padding: 1vh;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n}\n#buttons a.provider img {\n  height: inherit;\n  width: 64px;\n  margin-right: 2vw;\n}\n@media (max-width: 1200px) {\n  #buttons {\n    width: 25%;\n  }\n}\n@media (max-width: 800px) {\n  section h1 {\n    font-size: 1.4em;\n  }\n  section h3 {\n    font-size: 1.1em !important;\n  }\n  section #buttons {\n    width: 75%;\n  }\n}\n";

var LoginView = function (_HTMLElement) {
  inherits(LoginView, _HTMLElement);

  function LoginView() {
    classCallCheck(this, LoginView);

    var _this = possibleConstructorReturn(this, (LoginView.__proto__ || Object.getPrototypeOf(LoginView)).call(this));

    _this.hello = hello;
    return _this;
  }

  createClass(LoginView, [{
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oVal, nVal) {}
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = '<style>' + css$2 + '</style><section></section>';
      this.element = this.shadowRoot.querySelector('section');

      this.updateView();
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {}
  }, {
    key: 'updateView',
    value: function updateView() {
      if (this.element) incrementalDom.patch(this.element, render$2, this);
    }
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return [];
    }
  }]);
  return LoginView;
}(HTMLElement);

customElements.define('login-view', LoginView);

var hoisted1$3 = ["id", "brand"];
var hoisted2$2 = ["src", "/img/favicon.svg", "alt", ""];
var hoisted3$2 = ["role", "navigation", "id", "navigation"];
function render$3(ctrl) {
  incrementalDom.elementOpen("a", "2deeecd9-f89a-4412-a63d-c09f00bf9915", hoisted1$3, "onclick", function ($event) {
    var $element = this;
    ctrl.go('/home/authenticated');
  }, "class", ctrl.stateContains('home'));
  incrementalDom.elementOpen("img", "ef4744b1-d579-47ff-976c-0019a8567db2", hoisted2$2);
  incrementalDom.elementClose("img");
  incrementalDom.elementOpen("span");
  incrementalDom.text("Home");
  incrementalDom.elementClose("span");
  incrementalDom.elementClose("a");
  incrementalDom.elementOpen("nav", "1a4ad4e0-f549-4340-8c66-2919926e3a4b", hoisted3$2);
  incrementalDom.elementOpen("a", null, null, "onclick", function ($event) {
    var $element = this;
    ctrl.go('/help');
  }, "class", ctrl.stateContains('help'));
  incrementalDom.text("Help");
  incrementalDom.elementClose("a");
  if (ctrl.user.admin) {
    incrementalDom.elementOpen("a", null, null, "onclick", function ($event) {
      var $element = this;
      ctrl.go('/admin/users');
    }, "class", ctrl.stateContains('admin'));
    incrementalDom.text("Admin");
    incrementalDom.elementClose("a");
  }
  if (!ctrl.user.authenticated) {
    incrementalDom.elementOpen("a", null, null, "onclick", function ($event) {
      var $element = this;
      ctrl.go('/login');
    }, "class", ctrl.stateContains('login'));
    incrementalDom.text("Login");
    incrementalDom.elementClose("a");
  }
  if (ctrl.user.authenticated) {
    incrementalDom.elementOpen("a", null, null, "onclick", function ($event) {
      var $element = this;
      ctrl.go('/logout');
    }, "class", ctrl.stateContains('logout'));
    incrementalDom.text("Logout");
    incrementalDom.elementClose("a");
  }
  incrementalDom.elementClose("nav");
}

var css$3 = "h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300;\n}\nh1 {\n  font-size: 4.0rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n}\nh2 {\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n}\nh3 {\n  font-size: 3.0rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n}\nh4 {\n  font-size: 2.4rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n}\nh5 {\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n}\nh6 {\n  font-size: 1.5rem;\n  line-height: 1.6;\n  letter-spacing: 0;\n}\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 {\n    font-size: 5.0rem;\n  }\n  h2 {\n    font-size: 4.2rem;\n  }\n  h3 {\n    font-size: 3.6rem;\n  }\n  h4 {\n    font-size: 3.0rem;\n  }\n  h5 {\n    font-size: 2.4rem;\n  }\n  h6 {\n    font-size: 1.5rem;\n  }\n}\np {\n  margin-top: 0;\n}\na {\n  color: #f26100;\n}\na:hover {\n  color: #f26100;\n}\n:host {\n  display: block;\n  height: 64px;\n  width: 100%;\n  font-size: 1.25em;\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: 'Roboto', Helvetica, sans-serif;\n  color: #222;\n}\n#navbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 64px;\n  border-bottom: 1px solid #ccc;\n  padding: 0 1em;\n}\n#navbar a {\n  text-decoration: none;\n  font-size: 0.9em;\n  cursor: pointer;\n}\n#navbar a.active {\n  border-bottom: 2px solid #f26100;\n}\n#navbar #brand img {\n  width: 36px;\n  height: 36px;\n}\n#navbar #brand span {\n  position: relative;\n  top: -5px;\n}\n#navbar nav {\n  display: flex;\n  align-items: flex-end;\n}\n#navbar nav a {\n  padding: 0 0.5em;\n}\n@media (max-width: 400px) {\n  #brand img {\n    width: 16px !important;\n    height: 16px !important;\n  }\n  a {\n    font-size: 0.4em !important;\n  }\n}\n@media (max-width: 500px) {\n  #brand img {\n    width: 32px !important;\n    height: 32px !important;\n  }\n  a {\n    font-size: 0.7em !important;\n  }\n}\n";

function uuid() {
  var d = new Date().getTime();
  var uid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
  return uid;
}

var NavBar = function (_HTMLElement) {
  inherits(NavBar, _HTMLElement);

  function NavBar() {
    classCallCheck(this, NavBar);

    var _this = possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this));

    _this.state = 'home';
    _this.user = user;

    document.addEventListener('userLoadedFromDb', _this.updateView.bind(_this));
    document.addEventListener('userAuthenticated', _this.updateView.bind(_this));
    document.addEventListener('userUnauthenticated', _this.updateView.bind(_this));
    document.addEventListener('userLoadedFromDb', _this.updateView.bind(_this));
    return _this;
  }

  createClass(NavBar, [{
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oVal, nVal) {}
  }, {
    key: 'collapseToggle',
    value: function collapseToggle() {
      var button = this.shadowRoot.querySelector('button');
      var nav = this.shadowRoot.querySelector('.list');
      button.classList.toggle('-active');
      button.classList.toggle('-on');
      nav.classList.toggle('-on');
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = '<style>' + css$3 + '</style><div id="navbar"></div>';
      this.element = this.shadowRoot.querySelector('div#navbar');
      this.updateView();
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      this.shadowRoot.removeEventListener('click', this.anchorClickHandler.bind(this));
    }
  }, {
    key: 'go',
    value: function go(route) {
      // console.log("route", route)
      router.navigate(route);
      this.updateView();
    }
  }, {
    key: 'stateContains',
    value: function stateContains(val) {
      return window.location.href.indexOf(val) !== -1 ? 'active' : '';
    }
  }, {
    key: 'updateView',
    value: function updateView() {
      // console.log("this.user", this.user)
      if (this.element) incrementalDom.patch(this.element, render$3, this);
    }
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return [];
    }
  }]);
  return NavBar;
}(HTMLElement);

customElements.define('nav-bar', NavBar);

var hoisted1$4 = ["href", "/home", "class", "button primary"];
function render$4(ctrl) {
  incrementalDom.elementOpen("h1");
  incrementalDom.text("404");
  incrementalDom.elementClose("h1");
  incrementalDom.elementOpen("h2");
  incrementalDom.text("Page Not Found");
  incrementalDom.elementClose("h2");
  incrementalDom.elementOpen("a", "0dce4bba-b8d6-48c8-a1c1-fdabfa6addd6", hoisted1$4);
  incrementalDom.text("Home");
  incrementalDom.elementClose("a");
}

var css$4 = ":host {\n  font-size: 1em;\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: 'Roboto', Helvetica, sans-serif;\n  color: #222;\n  background: url('/img/background.svg');\n  background-size: cover;\n  background-color: #0f76a1;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300;\n}\nh1 {\n  font-size: 4.0rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n}\nh2 {\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n}\nh3 {\n  font-size: 3.0rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n}\nh4 {\n  font-size: 2.4rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n}\nh5 {\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n}\nh6 {\n  font-size: 1.5rem;\n  line-height: 1.6;\n  letter-spacing: 0;\n}\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 {\n    font-size: 5.0rem;\n  }\n  h2 {\n    font-size: 4.2rem;\n  }\n  h3 {\n    font-size: 3.6rem;\n  }\n  h4 {\n    font-size: 3.0rem;\n  }\n  h5 {\n    font-size: 2.4rem;\n  }\n  h6 {\n    font-size: 1.5rem;\n  }\n}\np {\n  margin-top: 0;\n}\na {\n  color: #f26100;\n}\na:hover {\n  color: #f26100;\n}\n.button,\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.button:hover,\nbutton:hover,\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\n.button:focus,\nbutton:focus,\ninput[type=\"submit\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0;\n}\n.button.primary,\nbutton.primary,\ninput[type=\"submit\"].primary,\ninput[type=\"reset\"].primary,\ninput[type=\"button\"].primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0;\n}\n.button.primary:hover,\nbutton.primary:hover,\ninput[type=\"submit\"].primary:hover,\ninput[type=\"reset\"].primary:hover,\ninput[type=\"button\"].primary:hover,\n.button.primary:focus,\nbutton.primary:focus,\ninput[type=\"submit\"].primary:focus,\ninput[type=\"reset\"].primary:focus,\ninput[type=\"button\"].primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB;\n}\n.button.danger,\nbutton.danger,\ninput[type=\"submit\"].danger,\ninput[type=\"reset\"].danger,\ninput[type=\"button\"].danger {\n  color: #FFF;\n  background-color: rgba(255, 0, 0, 0.75);\n  border-color: #ff0000;\n}\n.button.danger:hover,\nbutton.danger:hover,\ninput[type=\"submit\"].danger:hover,\ninput[type=\"reset\"].danger:hover,\ninput[type=\"button\"].danger:hover,\n.button.danger:focus,\nbutton.danger:focus,\ninput[type=\"submit\"].danger:focus,\ninput[type=\"reset\"].danger:focus,\ninput[type=\"button\"].danger:focus {\n  color: #FFF;\n  background-color: #ff0000;\n  border-color: #ff0000;\n}\n:host {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: url('/img/background.svg');\n  background-size: cover;\n  background-color: #0f76a1;\n}\n:host #not-found {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n:host #not-found h1 {\n  font-size: 5em;\n  color: white;\n}\n:host #not-found h2 {\n  font-size: 2em;\n  color: white;\n}\n:host a {\n  font-size: 1em !important;\n}\n";

var NotFound = function (_HTMLElement) {
  inherits(NotFound, _HTMLElement);

  function NotFound() {
    classCallCheck(this, NotFound);
    return possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).call(this));
  }

  createClass(NotFound, [{
    key: 'anchorClickHandler',
    value: function anchorClickHandler(evt) {
      console.log(evt);
      if (evt.target.tagName !== 'A') return;
      evt.preventDefault();
      router.navigate(evt.target.getAttribute('href'));
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oVal, nVal) {}
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = '<style>' + css$4 + '</style><div id="not-found"></div>';
      this.shadowRoot.addEventListener('click', this.anchorClickHandler.bind(this));
      this.element = this.shadowRoot.querySelector('div#not-found');
      this.updateView();
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {}
  }, {
    key: 'updateView',
    value: function updateView() {
      // wrap in if. otherwise ff and safari fail
      if (this.element) incrementalDom.patch(this.element, render$4, this);
    }
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return [];
    }
  }]);
  return NotFound;
}(HTMLElement);

customElements.define('not-found', NotFound);

var hoisted1$5 = ["id", "search"];
var hoisted2$3 = ["type", "text", "name", "search", "placeholder", "Search ..."];
var hoisted3$3 = ["name", "category", "required", ""];
var hoisted4$2 = ["value", ""];
var hoisted5$2 = ["value", "booklet"];
var hoisted6$2 = ["value", "find"];
var hoisted7$1 = ["value", "take"];
var hoisted8$1 = ["value", "teach"];
var hoisted9 = ["value", "memories"];
var hoisted10 = ["value", "indexing"];
var hoisted11 = ["for", "mine-checkbox", "id", "mine-wrapper"];
var hoisted12 = ["type", "checkbox", "id", "mine-checkbox"];
var hoisted13 = ["id", "gifts"];
var hoisted14 = ["class", "item"];
var hoisted15 = ["shared", "", "collapsed", "true"];
var __target$5;

function render$5(ctrl) {
  incrementalDom.elementOpen("section", "bca51af8-561d-4a9b-a223-93687b2f0107", hoisted1$5);
  incrementalDom.elementOpen("input", "3b8bbea9-f3ff-497d-a65c-ec7e29191a46", hoisted2$3, "onkeyup", function ($event) {
    var $element = this;
    ctrl.search.text = this.value;ctrl.filterGifts();
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("select", "2d75b77c-e6a7-4094-938c-a0847cea3c7b", hoisted3$3, "onchange", function ($event) {
    var $element = this;
    ctrl.search.category = this.value;ctrl.filterGifts();
  });
  incrementalDom.elementOpen("option", "c32f5716-37eb-44be-a1e2-a51a83eef2cf", hoisted4$2);
  incrementalDom.text("Select");
  incrementalDom.elementClose("option");
  incrementalDom.elementOpen("option", "b2b5da4d-929b-4ee8-be92-3a5bc0f81d63", hoisted5$2, "selected", ctrl.search.category === 'booklet' ? true : null);
  incrementalDom.text("Booklet");
  incrementalDom.elementClose("option");
  incrementalDom.elementOpen("option", "e1b1255c-5dc1-40cb-a6cc-32acdd698746", hoisted6$2, "selected", ctrl.search.category === 'find' ? true : null);
  incrementalDom.text("Find");
  incrementalDom.elementClose("option");
  incrementalDom.elementOpen("option", "ff9bc07b-315c-42e1-9c8c-73046d5ad8b0", hoisted7$1, "selected", ctrl.search.category === 'take' ? true : null);
  incrementalDom.text("Take");
  incrementalDom.elementClose("option");
  incrementalDom.elementOpen("option", "f6c099ba-27da-41b4-9246-b815c9086375", hoisted8$1, "selected", ctrl.search.category === 'teach' ? true : null);
  incrementalDom.text("Teach");
  incrementalDom.elementClose("option");
  incrementalDom.elementOpen("option", "d30d9d0b-2d1c-4985-8ce4-d263a271cc60", hoisted9, "selected", ctrl.search.category === 'memories' ? true : null);
  incrementalDom.text("Memories");
  incrementalDom.elementClose("option");
  incrementalDom.elementOpen("option", "f8849a3e-4d17-493a-9e8a-3e0cbc5f7ef6", hoisted10, "selected", ctrl.search.category === 'indexing' ? true : null);
  incrementalDom.text("Indexing");
  incrementalDom.elementClose("option");
  incrementalDom.elementClose("select");
  incrementalDom.elementOpen("label", "2a7319be-e2db-42a7-9e4d-88a82cbd81af", hoisted11);
  incrementalDom.elementOpen("input", "f18ea15d-e31c-4630-92ef-9a215ccd7239", hoisted12, "onchange", function ($event) {
    var $element = this;
    ctrl.toggleMine();
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("span");
  incrementalDom.text("My Gifts (" + ctrl.myGifts.length + ")");
  incrementalDom.elementClose("span");
  incrementalDom.elementClose("label");
  incrementalDom.elementClose("section");
  incrementalDom.elementOpen("section", "138e0fe5-3c7f-4dd7-a90b-34b65e4b5a93", hoisted13);
  __target$5 = ctrl.viewGifts;
  if (__target$5) {
    (__target$5.forEach ? __target$5 : Object.keys(__target$5)).forEach(function ($value, $item, $target) {
      var item = $value;
      var $key = "2e48a2f7-d3f3-404d-b596-34d3fd584f8d_" + $item;
      incrementalDom.elementOpen("div", $key, hoisted14);
      incrementalDom.elementOpen("collapsable-panel", "c912727d-b657-435f-9aa7-8bfecd0bd3f3_" + $key, hoisted15, "class", $item % 2 ? 'odd' : 'even', "earned", item.earned, "pending", item.pending, "added", item.added, "heading", item.title, "iid", item.id, "description", item.description, "html", item.html, "achievements", item.achievements);
      incrementalDom.elementClose("collapsable-panel");
      incrementalDom.elementClose("div");
    }, this);
  }
  incrementalDom.elementClose("section");
}

var css$5 = ":host {\n  font-size: 1em;\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: 'Roboto', Helvetica, sans-serif;\n  color: #222;\n  background: url('/img/background.svg');\n  background-size: cover;\n  background-color: #0f76a1;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300;\n}\nh1 {\n  font-size: 4.0rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n}\nh2 {\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n}\nh3 {\n  font-size: 3.0rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n}\nh4 {\n  font-size: 2.4rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n}\nh5 {\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n}\nh6 {\n  font-size: 1.5rem;\n  line-height: 1.6;\n  letter-spacing: 0;\n}\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 {\n    font-size: 5.0rem;\n  }\n  h2 {\n    font-size: 4.2rem;\n  }\n  h3 {\n    font-size: 3.6rem;\n  }\n  h4 {\n    font-size: 3.0rem;\n  }\n  h5 {\n    font-size: 2.4rem;\n  }\n  h6 {\n    font-size: 1.5rem;\n  }\n}\np {\n  margin-top: 0;\n}\na {\n  color: #f26100;\n}\na:hover {\n  color: #f26100;\n}\n:host {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  background: url('/img/background.svg');\n  background-size: cover;\n  background-color: #0f76a1;\n  font-size: 1.1em;\n  box-sizing: border-box;\n}\n#home {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin-bottom: 2vh;\n  flex: 1;\n}\nsection#search {\n  display: flex;\n  flex-direction: row;\n  background-color: #ffffff;\n  font-size: 1em;\n  justify-content: : center;\n  box-sizing: border-box;\n  margin: 2vh 2vh 0 2vh;\n}\nsection#search input[type=text] {\n  height: 36px;\n  flex: 1;\n  font-size: 1em;\n  padding: 1vw;\n}\nsection#search select[name=category] {\n  font-size: 1em;\n  flex: .5;\n  margin-right: 1vw;\n  background: transparent;\n  border: 0;\n}\nsection#search label {\n  display: flex;\n  align-items: center;\n  flex: .5;\n  border-left: 1px solid #ccc;\n  padding-left: 2vw;\n}\nsection#search label input[type=checkbox] {\n  margin-right: 2vw;\n}\nsection#gifts {\n  display: flex;\n  flex-direction: column;\n  flex: 6;\n  margin: 2vw 2vh 0;\n  background-color: #ffffff;\n  padding: 2vw 2vh;\n  overflow-y: auto;\n}\ncollapsable-panel {\n  display: block;\n  width: 100%;\n  height: auto;\n}\ncollapsable-panel.odd {\n  background-color: rgba(98, 171, 239, 0.15);\n}\n@media (max-width: 500px) {\n  section#search {\n    flex-direction: column;\n  }\n}\n";

var hoisted1$6 = ["class", "panel"];
var hoisted2$4 = ["class", "heading"];
var hoisted3$4 = ["class", "title"];
var hoisted4$3 = ["class", "button-group"];
var hoisted5$3 = ["type", "button", "name", "add"];
var hoisted6$3 = ["src", "/img/add.svg", "alt", ""];
var hoisted7$2 = ["type", "button", "name", "apply"];
var hoisted8$2 = ["src", "/img/gift-apply.svg", "alt", ""];
var hoisted9$1 = ["type", "button", "name", "earned"];
var hoisted10$1 = ["src", "/img/gift-earned.svg", "alt", ""];
var hoisted11$1 = ["type", "button", "name", "pending"];
var hoisted12$1 = ["src", "/img/gift-pending.svg", "alt", ""];
var hoisted13$1 = ["type", "button", "name", "add"];
var hoisted14$1 = ["src", "/img/help.svg", "alt", ""];
var hoisted15$1 = ["type", "button", "name", "delete"];
var hoisted16 = ["src", "/img/delete.svg", "alt", ""];
var hoisted17 = ["class", "achievements"];
var hoisted18 = ["type", "button", "class", "collapser", "name", "collapser"];
var hoisted19 = ["class", "description"];
var hoisted20 = ["type", "button", "name", "close"];
var hoisted21 = ["src", "/img/close.svg", "alt", ""];
var hoisted22 = ["name", "achievements"];
var hoisted23 = ["name", "request", "rows", "8", "placeholder", "Please tell us the nature of the help you need."];
var hoisted24 = ["class", "button-group"];
var hoisted25 = ["type", "button", "class", "primary"];
var hoisted26 = ["href", "javascript:void(0)"];
var hoisted27 = ["name", "achievement", "rows", "8"];
var hoisted28 = ["class", "control-container"];
var hoisted29 = ["type", "checkbox", "name", "share", "checked", ""];
var hoisted30 = ["class", "control-container"];
var hoisted31 = ["type", "checkbox", "name", "helping", "checked", ""];
var hoisted32 = ["class", "button-group"];
var hoisted33 = ["type", "button", "class", "primary"];
var hoisted34 = ["href", "javascript:void(0)"];
var hoisted35 = ["class", "html"];
var __target$6;

function render$6(ctrl) {
  incrementalDom.elementOpen("div", "4b3894c8-c0f5-490e-9f6e-589767a9f1c2", hoisted1$6);
  incrementalDom.elementOpen("div", "323b025f-9ae7-4daf-be71-358c316a06d0", hoisted2$4);
  incrementalDom.elementOpen("div", "0cb02eb5-c7df-45b2-9fa3-3f0c747abce4", hoisted3$4);
  incrementalDom.text("" + ctrl.heading + "");
  incrementalDom.elementClose("div");
  incrementalDom.elementOpen("div", "71aa876c-e9c4-4e45-937c-6d62f8e5a0d3", hoisted4$3);
  if (!ctrl.added && !ctrl.earned && !ctrl.pending && !ctrl.multiple) {
    incrementalDom.elementOpen("button", "13cd3d21-87f1-4ad0-85e7-fe0f9fb55c42", hoisted5$3, "onclick", function ($event) {
      var $element = this;
      ctrl.add(ctrl.iid);
    });
    incrementalDom.elementOpen("img", "e1c3d051-ad1f-4229-97a7-8e3b97c5166b", hoisted6$3);
    incrementalDom.elementClose("img");
    incrementalDom.elementClose("button");
  }
  if (!ctrl.earned && !ctrl.multiple && !ctrl.pending) {
    incrementalDom.elementOpen("button", "45be8057-ba0b-461c-b5bd-81092c37eb50", hoisted7$2, "onclick", function ($event) {
      var $element = this;
      ctrl.addAndShowAchievementEditor(ctrl.iid);
    });
    incrementalDom.elementOpen("img", "45345323-798f-45ca-b8fb-ec2dfc9b24b1", hoisted8$2);
    incrementalDom.elementClose("img");
    incrementalDom.elementClose("button");
  }
  if (ctrl.earned) {
    incrementalDom.elementOpen("button", "09f5463a-f9ad-452a-a451-21b824bf2fbf", hoisted9$1, "onclick", function ($event) {
      var $element = this;
      ctrl.showAwards(ctrl.iid, 'earned');
    });
    incrementalDom.elementOpen("img", "55b45724-c36c-4a5f-9b7f-c3bbf15238b5", hoisted10$1);
    incrementalDom.elementClose("img");
    incrementalDom.elementClose("button");
  }
  if (ctrl.pending) {
    incrementalDom.elementOpen("button", "ded519aa-ba42-4aa9-af5d-94d7950a84d1", hoisted11$1, "onclick", function ($event) {
      var $element = this;
      ctrl.showAwards(ctrl.iid, 'pending');
    });
    incrementalDom.elementOpen("img", "9c79084b-75e8-47bb-bc1e-08e429207761", hoisted12$1);
    incrementalDom.elementClose("img");
    incrementalDom.elementClose("button");
  }
  incrementalDom.elementOpen("button", "7b455436-4cdf-4342-802e-94869727f848", hoisted13$1, "onclick", function ($event) {
    var $element = this;
    ctrl.showTicketEditor(ctrl.iid);
  });
  incrementalDom.elementOpen("img", "7a6ea7a0-14f3-48ac-9dc5-2bb92ff596c5", hoisted14$1);
  incrementalDom.elementClose("img");
  incrementalDom.elementClose("button");
  if (ctrl.added || ctrl.pending || ctrl.earned) {
    incrementalDom.elementOpen("button", "5107946c-5620-47e3-89f8-a58bdb46514b", hoisted15$1, "onclick", function ($event) {
      var $element = this;
      ctrl.delete(ctrl.iid);
    });
    incrementalDom.elementOpen("img", "18f2cdd5-90c5-4151-9c87-a55676a9302c", hoisted16);
    incrementalDom.elementClose("img");
    incrementalDom.elementClose("button");
  }
  incrementalDom.elementOpen("button", "72d82b4e-266e-40d3-80db-690b7ac474e3", hoisted17);
  incrementalDom.text("" + ctrl.achievements + "");
  incrementalDom.elementClose("button");
  incrementalDom.elementOpen("button", "e605e079-3dc4-4fd5-838b-820ebc2325a6", hoisted18, "onclick", function ($event) {
    var $element = this;
    ctrl.toggle();
  });
  if (!ctrl.collapsed) {
    incrementalDom.elementOpen("span");
    incrementalDom.text("▲");
    incrementalDom.elementClose("span");
  }
  if (ctrl.collapsed) {
    incrementalDom.elementOpen("span");
    incrementalDom.text("▼");
    incrementalDom.elementClose("span");
  }
  incrementalDom.elementClose("button");
  incrementalDom.elementClose("div");
  incrementalDom.elementClose("div");
  incrementalDom.elementOpen("div", "faef8d74-9375-497f-9487-c6067ee3da96", hoisted19);
  incrementalDom.text("" + ctrl.description + "");
  incrementalDom.elementClose("div");
  if (ctrl.showAchievements) {
    incrementalDom.elementOpen("achievements-wrapper");
    incrementalDom.elementOpen("header");
    incrementalDom.elementOpen("title");
    incrementalDom.text("Achievements:");
    incrementalDom.elementClose("title");
    incrementalDom.elementOpen("button", "40575d47-35f4-4ae1-8491-bd1b2032836d", hoisted20, "onclick", function ($event) {
      var $element = this;
      ctrl.hideAchievements(ctrl.iid);
    });
    incrementalDom.elementOpen("img", "753bfbc5-febc-4324-91d9-5194555f533a", hoisted21);
    incrementalDom.elementClose("img");
    incrementalDom.elementClose("button");
    incrementalDom.elementClose("header");
    __target$6 = ctrl.awards;
    if (__target$6) {
      (__target$6.forEach ? __target$6 : Object.keys(__target$6)).forEach(function ($value, $item, $target) {
        var item = $value;
        var $key = "2cce88cb-8545-400b-b5a9-df30ec7efce6_" + $item;
        incrementalDom.elementOpen("section", $key, hoisted22);
        if (ctrl.awards[item].pending && parseInt(ctrl.awards[item].giftId, 10) === parseInt(ctrl.iid, 10)) {
          incrementalDom.elementOpen("story");
          incrementalDom.text("" + ctrl.awards[item].pending.story + "");
          incrementalDom.elementClose("story");
          incrementalDom.elementOpen("status");
          incrementalDom.elementOpen("state");
          incrementalDom.text("Pending");
          incrementalDom.elementClose("state");
          incrementalDom.elementOpen("date");
          incrementalDom.text("Date: (" + new Date(ctrl.awards[item].pending.date).toLocaleString() + ")");
          incrementalDom.elementClose("date");
          incrementalDom.elementClose("status");
        }
        if (ctrl.awards[item].awarded && ctrl.awards[item].giftId === ctrl.iid) {
          incrementalDom.elementOpen("story");
          incrementalDom.text("" + ctrl.awards[item].awarded.story + "");
          incrementalDom.elementClose("story");
          incrementalDom.elementOpen("status");
          incrementalDom.elementOpen("state");
          incrementalDom.text("Awarded");
          incrementalDom.elementClose("state");
          incrementalDom.elementOpen("date");
          incrementalDom.text("Date: (" + new Date(ctrl.awards[item].awarded.date).toLocaleString() + ")");
          incrementalDom.elementClose("date");
          incrementalDom.elementClose("status");
        }
        incrementalDom.elementClose("section");
      }, this);
    }
    incrementalDom.elementClose("achievements-wrapper");
  }
  if (ctrl.showAlert) {
    incrementalDom.elementOpen("alert", null, null, "class", ctrl.alertClass);
    incrementalDom.text("" + ctrl.alertText + "");
    incrementalDom.elementClose("alert");
  }
  if (ctrl.showHelpEditor) {
    incrementalDom.elementOpen("help-request");
    incrementalDom.elementOpen("textarea", "93f3d9a8-247f-4831-bd50-a7ca64552042", hoisted23);
    incrementalDom.elementClose("textarea");
    incrementalDom.elementOpen("div", "955a5f4c-e699-4482-bcae-0bbb7b9640db", hoisted24);
    incrementalDom.elementOpen("button", "8afc53e9-e71a-4996-8d6d-3c3aee1c158f", hoisted25, "onclick", function ($event) {
      var $element = this;
      ctrl.addTicket();
    });
    incrementalDom.text("Make Request");
    incrementalDom.elementClose("button");
    incrementalDom.elementOpen("a", "d9937cc2-df70-4b6f-9042-f6ad8c04beb2", hoisted26, "onclick", function ($event) {
      var $element = this;
      ctrl._cancelEdit();
    });
    incrementalDom.text("Cancel");
    incrementalDom.elementClose("a");
    incrementalDom.elementClose("div");
    incrementalDom.elementClose("help-request");
  }
  if (ctrl.showGiftEditor) {
    incrementalDom.elementOpen("gift-editor");
    incrementalDom.elementOpen("header");
    incrementalDom.text(" \
              Applying for a Gift Achievement \
            ");
    incrementalDom.elementClose("header");
    incrementalDom.elementOpen("p");
    incrementalDom.text(" \
              Congratultions on applying for a gift achievment award! Once you submit your request, \
              someone will review and approve it. Please share your experience, and sign up to help others. \
            ");
    incrementalDom.elementClose("p");
    incrementalDom.elementOpen("textarea", "6225da5e-a3e4-4f27-a86b-80f010bd95b7", hoisted27);
    incrementalDom.elementClose("textarea");
    incrementalDom.elementOpen("div", "bde707b6-667f-4544-ac26-7846459917d7", hoisted28);
    incrementalDom.elementOpen("input", "75e685a6-1269-47e0-bb5d-5d89af9ac85e", hoisted29);
    incrementalDom.elementClose("input");
    incrementalDom.elementOpen("span");
    incrementalDom.text("Yes, I'm willing to share my experience");
    incrementalDom.elementClose("span");
    incrementalDom.elementClose("div");
    incrementalDom.elementOpen("div", "0aa74de5-cf5c-4bf1-b7e0-5bde31fdc42c", hoisted30);
    incrementalDom.elementOpen("input", "724f85a8-361c-4304-9623-031ba281e940", hoisted31);
    incrementalDom.elementClose("input");
    incrementalDom.elementOpen("span");
    incrementalDom.text("Yes, I'm willing to help others achieve this gift.");
    incrementalDom.elementClose("span");
    incrementalDom.elementClose("div");
    incrementalDom.elementOpen("div", "18714aef-98eb-4105-aeeb-cd31c03d78c3", hoisted32);
    incrementalDom.elementOpen("button", "89c611a9-d0a5-4f98-85ea-727365ed5b49", hoisted33, "onclick", function ($event) {
      var $element = this;
      ctrl.applyForAchievment();
    });
    incrementalDom.text("Apply");
    incrementalDom.elementClose("button");
    incrementalDom.elementOpen("a", "f882be53-e7ed-4f57-bf38-633b103d961c", hoisted34, "onclick", function ($event) {
      var $element = this;
      ctrl.hideGiftEditor();
    });
    incrementalDom.text("Cancel");
    incrementalDom.elementClose("a");
    incrementalDom.elementClose("div");
    incrementalDom.elementClose("gift-editor");
  }
  if (!ctrl.collapsed) {
    incrementalDom.elementOpen("div", "5933ffdd-b5ad-4526-ae3d-3b4fcfda6cc3", hoisted35);
    if (ctrl.html && ctrl.html !== '') {
      var el = incrementalDom.currentElement();
      el.innerHTML = ctrl.html;
    }
    incrementalDom.skip();
    incrementalDom.elementClose("div");
  }
  incrementalDom.elementClose("div");
}

var css$6 = "h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300;\n}\nh1 {\n  font-size: 4.0rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n}\nh2 {\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n}\nh3 {\n  font-size: 3.0rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n}\nh4 {\n  font-size: 2.4rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n}\nh5 {\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n}\nh6 {\n  font-size: 1.5rem;\n  line-height: 1.6;\n  letter-spacing: 0;\n}\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 {\n    font-size: 5.0rem;\n  }\n  h2 {\n    font-size: 4.2rem;\n  }\n  h3 {\n    font-size: 3.6rem;\n  }\n  h4 {\n    font-size: 3.0rem;\n  }\n  h5 {\n    font-size: 2.4rem;\n  }\n  h6 {\n    font-size: 1.5rem;\n  }\n}\np {\n  margin-top: 0;\n}\na {\n  color: #f26100;\n}\na:hover {\n  color: #f26100;\n}\n.button,\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.button:hover,\nbutton:hover,\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\n.button:focus,\nbutton:focus,\ninput[type=\"submit\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0;\n}\n.button.primary,\nbutton.primary,\ninput[type=\"submit\"].primary,\ninput[type=\"reset\"].primary,\ninput[type=\"button\"].primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0;\n}\n.button.primary:hover,\nbutton.primary:hover,\ninput[type=\"submit\"].primary:hover,\ninput[type=\"reset\"].primary:hover,\ninput[type=\"button\"].primary:hover,\n.button.primary:focus,\nbutton.primary:focus,\ninput[type=\"submit\"].primary:focus,\ninput[type=\"reset\"].primary:focus,\ninput[type=\"button\"].primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB;\n}\n.button.danger,\nbutton.danger,\ninput[type=\"submit\"].danger,\ninput[type=\"reset\"].danger,\ninput[type=\"button\"].danger {\n  color: #FFF;\n  background-color: rgba(255, 0, 0, 0.75);\n  border-color: #ff0000;\n}\n.button.danger:hover,\nbutton.danger:hover,\ninput[type=\"submit\"].danger:hover,\ninput[type=\"reset\"].danger:hover,\ninput[type=\"button\"].danger:hover,\n.button.danger:focus,\nbutton.danger:focus,\ninput[type=\"submit\"].danger:focus,\ninput[type=\"reset\"].danger:focus,\ninput[type=\"button\"].danger:focus {\n  color: #FFF;\n  background-color: #ff0000;\n  border-color: #ff0000;\n}\n:host {\n  font-size: 1em;\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: 'Roboto', Helvetica, sans-serif;\n  color: #222;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.collapsable-panel .panel {\n  border: 1px solid #ccc;\n  margin-bottom: 8px;\n}\n.collapsable-panel .panel .heading {\n  display: flex;\n  border-bottom: 1px solid #ccc;\n}\n.collapsable-panel .panel .heading .title {\n  font-size: 1.2em;\n  flex: 1;\n  padding-left: 1vw;\n}\n.collapsable-panel .panel .heading .button-group {\n  display: flex;\n  justify-content: flex-end;\n}\n.collapsable-panel .panel .heading .button-group button {\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  border: 0;\n  outline: none;\n  width: 28px;\n  height: 28px;\n  border-left: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  font-size: .75em;\n  cursor: pointer;\n  line-height: normal;\n}\n.collapsable-panel .panel .heading .button-group button img {\n  height: 100%;\n  width: 100%;\n}\n.collapsable-panel .panel .description {\n  font-size: 1em;\n  font-style: italic;\n  padding-left: 1vw;\n}\n.collapsable-panel .panel .html {\n  font-size: 1em;\n  padding: 1vw;\n  border-top: 1px solid #ccc;\n}\n.collapsable-panel .panel alert {\n  display: flex;\n  padding: 1vh 1vw;\n  font-size: .75em;\n  border-top: 1px solid #ccc;\n}\n.collapsable-panel .panel alert.good {\n  background-color: rgba(100, 200, 100, 0.1);\n}\n.collapsable-panel .panel alert.bad {\n  background-color: rgba(200, 100, 100, 0.1);\n}\n.collapsable-panel gift-editor {\n  display: flex;\n  flex-direction: column;\n  margin: 1vh 1vw;\n  border: 2px solid gold;\n  font-size: 1em;\n  padding: 1vh 1vw;\n}\n.collapsable-panel gift-editor textarea {\n  font-size: .9em;\n  padding: 1vh;\n}\n.collapsable-panel gift-editor header {\n  display: block;\n  font-size: 1em;\n}\n.collapsable-panel gift-editor p {\n  font-size: .75em;\n}\n.collapsable-panel gift-editor .control-container,\n.collapsable-panel gift-editor .button-group {\n  display: flex;\n  font-size: .8em;\n  margin-top: 1vh;\n  align-items: center;\n}\n.collapsable-panel gift-editor input[type='checkbox'] {\n  margin-right: 2vw;\n}\n.collapsable-panel gift-editor .button-group a {\n  margin-left: 2vw;\n}\n.collapsable-panel achievements-wrapper {\n  display: flex;\n  flex-direction: column;\n  margin: 1vh 1vw;\n  padding: 1vh 1vw;\n  background-color: rgba(245, 191, 35, 0.2);\n  font-size: .75em;\n}\n.collapsable-panel achievements-wrapper header {\n  display: flex;\n}\n.collapsable-panel achievements-wrapper header button {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  outline: none;\n  width: 16px;\n  height: 16px;\n  position: relative;\n  top: -1vh;\n}\n.collapsable-panel achievements-wrapper header button img {\n  width: inherit;\n  height: inherit;\n}\n.collapsable-panel achievements-wrapper header title {\n  display: block;\n  flex: 1;\n}\n.collapsable-panel achievements-wrapper section {\n  flex: 1;\n}\n.collapsable-panel achievements-wrapper section story {\n  font-size: .8em;\n}\n.collapsable-panel achievements-wrapper section status {\n  display: flex;\n  border-top: 1px solid #ccc;\n  align-items: flex-end;\n}\n.collapsable-panel achievements-wrapper section status state {\n  display: inline-block;\n  flex: 1;\n  font-size: .7em;\n}\n.collapsable-panel achievements-wrapper section status date {\n  display: inline-block;\n  font-size: .6em;\n}\nhelp-request {\n  display: flex;\n  flex-direction: column;\n  margin: 1vh 1vw;\n  border: 2px solid gold;\n  font-size: 1em;\n  padding: 1vh 1vw;\n}\nhelp-request textarea {\n  font-size: .9em;\n  padding: 1vh;\n}\nhelp-request .button-group {\n  margin: 2vh 1vw;\n}\nhelp-request .button-group a {\n  margin-left: 1vw;\n}\n";

var CollapsablePanel = function (_HTMLElement) {
  inherits(CollapsablePanel, _HTMLElement);

  function CollapsablePanel() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, CollapsablePanel);

    var _this = possibleConstructorReturn(this, (CollapsablePanel.__proto__ || Object.getPrototypeOf(CollapsablePanel)).call(this));

    _this.config = config;
    _this.collapsed = true;
    return _this;
  }

  createClass(CollapsablePanel, [{
    key: 'add',
    value: function add(giftId) {
      var addAlert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'added';
      var share = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var help = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      this.gift = this.gColl.findOne({ id: giftId });
      var award = this.aColl.findOne({ giftId: giftId, userId: user.id });
      if (this.gift && award && !this.gift.multiple) {
        if (addAlert) this.addAlert('This gift was not added to your list of gifts because it has already been added to your list. To see your list, check the My Gifts checkbox.', 'bad');
      } else if (this.gift && !award) {
        this.aColl.insert({
          id: uuid(),
          giftId: giftId,
          userId: user.id,
          type: type,
          date: new Date().toISOString(),
          share: share,
          help: help
        });
        if (addAlert) this.addAlert('This gift has been added. You may apply for achieving this gift at any time.', 'good');
      }
    }
  }, {
    key: 'addAlert',
    value: function addAlert(text$$1, className) {
      var _this2 = this;

      var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5000;

      this.showAlert = true;
      this.alertText = text$$1;
      this.alertClass = className;
      setTimeout(function () {
        _this2.showAlert = false;
        _this2.alertText = '';
        _this2.alertClass = '';
        _this2._updateView();
      }, timeout);
      this._updateView();
    }
  }, {
    key: 'addAndShowAchievementEditor',
    value: function addAndShowAchievementEditor(id) {
      this.add(id, false);
      this.showGiftEditor = true;
      this._updateView();
    }
  }, {
    key: 'applyForAchievment',
    value: function applyForAchievment() {
      var userAwardEntry = this.aColl.findOne({ giftId: this.gift.id, userId: user.id });
      var story = this.element.querySelector("textarea[name='achievement']").value;
      var share = this.element.querySelector("input[name='share']").value;
      var help = this.element.querySelector("input[name='helping']").value;

      if (userAwardEntry) {
        userAwardEntry.type = 'pending';
        userAwardEntry.date = new Date().toISOString();
        userAwardEntry.story = story;
        userAwardEntry.share = share;
        userAwardEntry.help = help;
        this.aColl.update(userAwardEntry);
        this.addAlert('You achievement application has been received. You will hear back shortly. While you are waiting, don\'t delete this gift from your list.', 'good');
        this._cancelEdit();
      }
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oVal, nVal) {
      if (name && nVal !== oVal) {
        if (name === 'earned' || name === 'added' || name === 'pending') this[name] = Boolean(nVal === 'true');else this[name] = nVal;
        this._updateView();
      }
    }
  }, {
    key: '_cancelEdit',
    value: function _cancelEdit() {
      this.showGiftEditor = false;
      this.showHelpEditor = false;
      this.gift = null;
      this.ticket = null;
      this._updateView();
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = '<style>' + css$6 + '</style><div class="collapsable-panel"></div>';
      this.element = this.shadowRoot.querySelector('.collapsable-panel');
      this.aColl = db.getCollection('awards');
      this.gColl = db.getCollection('gifts');
      this.tColl = db.getCollection('tickets');
      this.aColl.setChangesApi(true);
      this.gColl.setChangesApi(true);
      this.tColl.setChangesApi(true);
      this.adv = this.aColl.addDynamicView('awards');
      this.gdv = this.gColl.addDynamicView('gifts');

      document.addEventListener('awardsChanged', this._updateView.bind(this));
      document.addEventListener('giftsChanged', this._updateView.bind(this));
      this._updateView();
    }
  }, {
    key: '_combineGiftsAndAwards',
    value: function _combineGiftsAndAwards() {
      this._updateView();
    }
  }, {
    key: 'delete',
    value: function _delete(giftId) {
      var _this3 = this;

      var gift = this.gColl.findOne({ id: giftId });
      var pending = this.aColl.count({ giftId: giftId, userId: user.id, type: 'pending' });
      var earned = this.aColl.count({ giftId: giftId, userId: user.id, type: 'earned' });
      var pendingOrEarned = pending > 0 || earned > 0;
      this._cancelEdit();
      if (pendingOrEarned) {
        var modal = new RbhModal();
        modal.heading = 'Already Pending or Awarded';
        modal.body = 'Deleting this gift will remove all awards and pending awards. Click "OK" to delete this gift and all awards and pending awards.';
        modal.primary = 'OK';
        modal.cancel = 'Cancel';
        document.querySelector('body').appendChild(modal);
        document.addEventListener('rbhModalButtonClick', function (evt) {
          if (evt.detail === 'primary') {
            _this3.addAlert('This gift has been removed. You may add it again at any time.', 'bad');
            if (earned) {
              if (gift.achievements > 0) {
                gift.achievements--;
                _this3.gColl.update(gift);
              }
            }
            _this3.aColl.findAndRemove({ giftId: giftId, userId: user.id });
          }
          modal.remove();
        });
      } else {
        this.aColl.findAndRemove({ giftId: giftId, userId: user.id });
        this.addAlert('This gift has been removed. You may add it again at any time.', 'bad');
      }
      this._updateView();
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      this.aColl.removeDynamicView('awards');
      this.gColl.removeDynamicView('gifts');
      document.removeEventListener('awardsChanged', this._updateView.bind(this));
      document.removeEventListener('giftsChanged', this._updateView.bind(this));
    }
  }, {
    key: 'showTicketEditor',
    value: function showTicketEditor(giftId) {
      this.showHelpEditor = true;
      this.ticket = {
        date: new Date().toISOString(),
        giftId: giftId,
        id: uuid(),
        userId: user.id,
        type: 'open'
      };
      this._updateView();
    }
  }, {
    key: 'addTicket',
    value: function addTicket() {
      var ticket = this.tColl.findOne({ id: this.ticket.id });
      if (ticket) this.addAlert('You have already requested help with this gift. Someone will be contacting you shortly.', 'bad');else {
        this.tColl.insertOne(Object.assign(this.ticket, { request: this.element.querySelector('textarea[name=request]').value }));
        this._cancelEdit();
        this.addAlert('Your reqeust for help has been logged. You will be contacted shortly.', 'good');
      }
    }
  }, {
    key: 'hideAchievements',
    value: function hideAchievements(giftId) {
      // TODO: fix this
      this.showAchievements = false;
      this._updateView();
    }
  }, {
    key: 'hideGiftEditor',
    value: function hideGiftEditor() {
      this.showGiftEditor = false;
      this._updateView();
    }
  }, {
    key: 'showAwards',
    value: function showAwards(giftId, type) {
      // TODO: fix this too
      this._updateView();
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      this.collapsed = !this.collapsed;
      this._updateView();
    }
  }, {
    key: '_updateView',
    value: function _updateView() {
      this.awards = this.adv.data();
      this.gifts = this.gdv.data();
      if (this.element) incrementalDom.patch(this.element, render$6, this);
    }
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return ['achievements', 'added', 'collapsed', 'description', 'earned', 'heading', 'html', 'iid', 'pending', 'shared'];
    }
  }]);
  return CollapsablePanel;
}(HTMLElement);

customElements.define('collapsable-panel', CollapsablePanel);

var HomeAuthenticated = function (_HTMLElement) {
  inherits(HomeAuthenticated, _HTMLElement);

  function HomeAuthenticated() {
    classCallCheck(this, HomeAuthenticated);

    var _this = possibleConstructorReturn(this, (HomeAuthenticated.__proto__ || Object.getPrototypeOf(HomeAuthenticated)).call(this));

    _this.user = user;
    _this.gifts = [];
    _this.myGifts = [];
    _this.mine = false;
    _this.search = {};
    return _this;
  }

  createClass(HomeAuthenticated, [{
    key: 'anchorClickHandler',
    value: function anchorClickHandler(evt) {
      if (evt.target.tagName !== 'A') return;
      router.navigate(evt.target.getAttribute('href'));
      evt.preventDefault();
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oVal, nVal) {}
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = '<style>' + css$5 + '</style><div id="home"></div>';
      this.shadowRoot.addEventListener('click', this.anchorClickHandler.bind(this));
      this.element = this.shadowRoot.querySelector('div#home');
      this.aColl = db.getCollection('awards');
      this.sColl = db.getCollection('gifts');

      this.aColl.setChangesApi(true);
      this.sColl.setChangesApi(true);

      this.adv = this.aColl.addDynamicView('awards');
      this.sdv = this.sColl.addDynamicView('gifts');

      document.addEventListener('userUnauthenticated', function () {
        router.navigate('/login');
      });
      document.addEventListener('awardsChanged', this._updateView.bind(this));
      document.addEventListener('giftsChanged', this._updateView.bind(this));

      this._updateView();
    }
  }, {
    key: '_combineGiftsAndAwards',
    value: function _combineGiftsAndAwards() {
      var _this2 = this;

      var _awards = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var _gifts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      // console.log("_awards", _awards)
      return _gifts.map(function (gift) {
        var award = _awards.find(function (awrd) {
          return awrd.giftId === gift.id && awrd.userId === _this2.user.id;
        });
        return {
          id: gift.id,
          title: gift.title,
          description: gift.description,
          multiple: !!gift.multiple,
          achievements: gift.achievements,
          html: gift.html,
          added: !!award && award.type === 'added',
          earned: !!award && award.type === 'earned',
          pending: !!award && award.type === 'pending',
          shared: !!award && award.share,
          type: award ? award.type : null
        };
      });
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      this.adv.removeFilters();
      this.sdv.removeFilters();
      document.removeEventListener('userUnauthenticated', function () {
        router.navigate('/login');
      });
      document.removeEventListener('awardsChanged', this._updateView.bind(this));
      document.removeEventListener('giftsChanged', this._updateView.bind(this));
    }
  }, {
    key: 'filterGifts',
    value: function filterGifts() {
      var text$$1 = this.search.text && this.search.text !== '' ? this.search.text : null;
      var category = this.search.category ? this.search.category : null;

      this.sdv.removeFilters();
      if (text$$1) {
        if (category) {
          this.sdv.applyWhere(function (gift) {
            if (gift.category === category && gift.title && gift.title.toLowerCase().indexOf(text$$1) !== -1) return true;
            if (gift.category === category && gift.description && gift.description.toLowerCase().indexOf(text$$1) !== -1) return true;
            if (gift.category === category && gift.category && gift.category.toLowerCase().indexOf(text$$1) !== -1) return true;
          });
        } else {
          this.sdv.applyWhere(function (gift) {
            if (gift.title && gift.title.toLowerCase().indexOf(text$$1) !== -1) return true;
            if (gift.description && gift.description.toLowerCase().indexOf(text$$1) !== -1) return true;
            if (gift.category && gift.category.toLowerCase().indexOf(text$$1) !== -1) return true;
          });
        }
      } else if (category) {
        this.sdv.applyWhere(function (gift) {
          if (gift.category === category) return true;
        });
      }
      this._updateView();
    }
  }, {
    key: 'filterMine',
    value: function filterMine(gifts) {
      return gifts.filter(function (gift) {
        return gift.added || gift.earned || gift.pending;
      });
    }
  }, {
    key: 'toggleMine',
    value: function toggleMine() {
      this.mine = !this.mine;
      this._updateView();
    }
  }, {
    key: '_updateView',
    value: function _updateView() {
      var _awards = this.adv.data();
      var _gifts = this.sdv.data();
      this.gifts = this._combineGiftsAndAwards(_awards, _gifts);
      this.myGifts = this.filterMine(this.gifts);
      this.viewGifts = this.mine ? this.myGifts : this.gifts;
      // console.log("this.viewGifts", this.viewGifts)
      if (this.element) incrementalDom.patch(this.element, render$5, this);
    }
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return [];
    }
  }]);
  return HomeAuthenticated;
}(HTMLElement);

customElements.define('home-authenticated', HomeAuthenticated);

var hoisted1$7 = ["type", "radio", "name", "tabgroup", "id", "users-tab-control", "value", "users"];
var hoisted2$5 = ["for", "users-tab-control"];
var hoisted3$5 = ["type", "radio", "id", "gifts-tab-control", "name", "tabgroup", "value", "gifts"];
var hoisted4$4 = ["for", "gifts-tab-control"];
var hoisted5$4 = ["type", "radio", "id", "awards-tab-control", "name", "tabgroup", "value", "awards"];
var hoisted6$4 = ["for", "awards-tab-control"];
var hoisted7$3 = ["type", "radio", "id", "assistance-tab-control", "name", "tabgroup", "value", "assistance"];
var hoisted8$3 = ["for", "assistance-tab-control"];
var hoisted9$2 = ["type", "radio", "id", "reports-tab-control", "name", "tabgroup", "value", "reports"];
var hoisted10$2 = ["for", "reports-tab-control"];
function render$7(ctrl) {
  incrementalDom.elementOpen("tabs");
  incrementalDom.elementOpen("tab");
  incrementalDom.elementOpen("input", "3aeefb10-14e3-4064-adcc-9d965a670905", hoisted1$7, "onclick", function ($event) {
    var $element = this;
    ctrl.selectTab(this.value);
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("label", "edf6b486-b23c-4b22-a367-bb72bfa49457", hoisted2$5);
  incrementalDom.text("Users");
  incrementalDom.elementClose("label");
  incrementalDom.elementClose("tab");
  incrementalDom.elementOpen("tab");
  incrementalDom.elementOpen("input", "9a872d55-bef8-4c35-a2a1-899fa505a92e", hoisted3$5, "onclick", function ($event) {
    var $element = this;
    ctrl.selectTab(this.value);
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("label", "04755062-b9a5-4a41-b714-ce811a93aab4", hoisted4$4);
  incrementalDom.text("Gifts");
  incrementalDom.elementClose("label");
  incrementalDom.elementClose("tab");
  incrementalDom.elementOpen("tab");
  incrementalDom.elementOpen("input", "956ad4ca-3063-401f-8415-fdd5c7a62b1b", hoisted5$4, "onclick", function ($event) {
    var $element = this;
    ctrl.selectTab(this.value);
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("label", "f1c4792e-a0f8-4096-9e78-41d767a0d575", hoisted6$4);
  incrementalDom.text("Awards");
  incrementalDom.elementClose("label");
  incrementalDom.elementClose("tab");
  incrementalDom.elementOpen("tab");
  incrementalDom.elementOpen("input", "efcd7f22-2ddb-47b4-8dfc-daee600e69c5", hoisted7$3, "onclick", function ($event) {
    var $element = this;
    ctrl.selectTab(this.value);
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("label", "78b09f84-f506-439d-b3f3-3f4e24ded1c4", hoisted8$3);
  incrementalDom.text("Assistance");
  incrementalDom.elementClose("label");
  incrementalDom.elementClose("tab");
  incrementalDom.elementOpen("tab");
  incrementalDom.elementOpen("input", "45ccee3e-42f6-44a0-840e-968f8483f89b", hoisted9$2, "onclick", function ($event) {
    var $element = this;
    ctrl.selectTab(this.value);
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("label", "c304644d-b6f7-4b4d-9505-07dc2a68622f", hoisted10$2);
  incrementalDom.text("Reports");
  incrementalDom.elementClose("label");
  incrementalDom.elementClose("tab");
  incrementalDom.elementClose("tabs");
  incrementalDom.elementOpen("content");
  incrementalDom.elementClose("content");
}

var css$7 = "h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300;\n}\nh1 {\n  font-size: 4.0rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n}\nh2 {\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n}\nh3 {\n  font-size: 3.0rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n}\nh4 {\n  font-size: 2.4rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n}\nh5 {\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n}\nh6 {\n  font-size: 1.5rem;\n  line-height: 1.6;\n  letter-spacing: 0;\n}\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 {\n    font-size: 5.0rem;\n  }\n  h2 {\n    font-size: 4.2rem;\n  }\n  h3 {\n    font-size: 3.6rem;\n  }\n  h4 {\n    font-size: 3.0rem;\n  }\n  h5 {\n    font-size: 2.4rem;\n  }\n  h6 {\n    font-size: 1.5rem;\n  }\n}\np {\n  margin-top: 0;\n}\na {\n  color: #f26100;\n}\na:hover {\n  color: #f26100;\n}\nsys-admin {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  background: url('/img/background.svg');\n  background-size: cover;\n  background-color: #0f76a1;\n}\n#sys-admin {\n  font-size: 1em;\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: 'Roboto', Helvetica, sans-serif;\n  color: #222;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n#sys-admin tabs {\n  display: flex;\n  margin: 2vw 2vw 0 2vw;\n  background-color: white;\n  justify-content: flex-start;\n}\n#sys-admin tab {\n  display: block;\n  flex: 1;\n}\n#sys-admin tab input[type=radio] {\n  display: none;\n}\n#sys-admin tab input[type=radio]:checked ~ label {\n  background: white;\n  border-bottom: 1px solid white;\n  z-index: 2;\n}\n#sys-admin tab label {\n  display: block;\n  background: #eee;\n  padding: 10px;\n  border: 1px solid #ccc;\n  font-size: 17px;\n  cursor: pointer;\n}\n#sys-admin content {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  background: white;\n  border-right: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  border-left: 1px solid #ccc;\n  margin: 0 2vw 1vh 2vw;\n  padding: 2vw;\n  overflow: hidden;\n}\n";

var css$8 = ".button,\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.button:hover,\nbutton:hover,\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\n.button:focus,\nbutton:focus,\ninput[type=\"submit\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0;\n}\n.button.primary,\nbutton.primary,\ninput[type=\"submit\"].primary,\ninput[type=\"reset\"].primary,\ninput[type=\"button\"].primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0;\n}\n.button.primary:hover,\nbutton.primary:hover,\ninput[type=\"submit\"].primary:hover,\ninput[type=\"reset\"].primary:hover,\ninput[type=\"button\"].primary:hover,\n.button.primary:focus,\nbutton.primary:focus,\ninput[type=\"submit\"].primary:focus,\ninput[type=\"reset\"].primary:focus,\ninput[type=\"button\"].primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB;\n}\n.button.danger,\nbutton.danger,\ninput[type=\"submit\"].danger,\ninput[type=\"reset\"].danger,\ninput[type=\"button\"].danger {\n  color: #FFF;\n  background-color: rgba(255, 0, 0, 0.75);\n  border-color: #ff0000;\n}\n.button.danger:hover,\nbutton.danger:hover,\ninput[type=\"submit\"].danger:hover,\ninput[type=\"reset\"].danger:hover,\ninput[type=\"button\"].danger:hover,\n.button.danger:focus,\nbutton.danger:focus,\ninput[type=\"submit\"].danger:focus,\ninput[type=\"reset\"].danger:focus,\ninput[type=\"button\"].danger:focus {\n  color: #FFF;\n  background-color: #ff0000;\n  border-color: #ff0000;\n}\n:host {\n  display: flex;\n  flex-direction: column;\n}\nsection[name='header'] {\n  display: flex;\n  flex-direction: column;\n}\nsection[name='header'] input[name=\"search\"] {\n  height: 38px;\n  font-size: 1em;\n  padding-left: 1vw;\n}\nsection[name='header'] #filter {\n  display: flex;\n  align-items: center;\n  height: 38px;\n  border: 1px solid #ccc;\n  border-top: 0;\n}\nsection[name='header'] #filter label {\n  flex: 1;\n  padding-left: 1vw;\n}\nsection[name='tickets'] {\n  flex: 1;\n  overflow-x: hidden;\n  overflow-y: auto;\n  margin-top: 1vh;\n  border: 1px solid #ccc;\n  display: flex;\n  flex-direction: column;\n  padding: 1vw 1vh;\n}\nsection[name='tickets'] .row {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  font-size: .9em;\n  padding: 1vh 1vw;\n}\nsection[name='tickets'] .row.odd {\n  background-color: #f4f4f4;\n}\nsection[name='tickets'] .row user,\nsection[name='tickets'] .row gift,\nsection[name='tickets'] .row date,\nsection[name='tickets'] .row request,\nsection[name='tickets'] .row actions {\n  display: flex;\n  height: 28px;\n  width: 100%;\n  align-items: center;\n}\nsection[name='tickets'] .row user name,\nsection[name='tickets'] .row gift name,\nsection[name='tickets'] .row date name,\nsection[name='tickets'] .row request name,\nsection[name='tickets'] .row actions name {\n  flex: 1;\n  font-weight: bold;\n}\nsection[name='tickets'] .row user value,\nsection[name='tickets'] .row gift value,\nsection[name='tickets'] .row date value,\nsection[name='tickets'] .row request value,\nsection[name='tickets'] .row actions value {\n  display: inline-block;\n  flex: 4;\n}\nsection[name='tickets'] .row actions {\n  height: 48px;\n}\nsection[name='tickets'] .row actions value {\n  padding: 0;\n}\nsection[name='tickets'] .row actions value button {\n  margin-top: 2vh;\n  margin-right: 1vw;\n}\n";

var hoisted1$8 = ["name", "header"];
var hoisted2$6 = ["type", "text", "name", "search", "value", "", "placeholder", "Search ..."];
var hoisted3$6 = ["id", "filter"];
var hoisted4$5 = ["for", ""];
var hoisted5$5 = ["type", "radio", "name", "ticketsType", "value", "", "checked", ""];
var hoisted6$5 = ["for", ""];
var hoisted7$4 = ["type", "radio", "name", "ticketsType", "value", "open"];
var hoisted8$4 = ["for", ""];
var hoisted9$3 = ["type", "radio", "name", "ticketsType", "value", "closed"];
var hoisted10$3 = ["name", "tickets"];
var hoisted11$2 = ["type", "button", "class", "primary", "name", "close"];
var hoisted12$2 = ["type", "button", "class", "primary", "name", "reopen"];
var hoisted13$2 = ["type", "button", "class", "danger", "name", "delete"];
var __target$8;

function render$8(ctrl) {
  incrementalDom.elementOpen("section", "5456b827-4c56-4615-a063-cfc252d6eea2", hoisted1$8);
  incrementalDom.elementOpen("input", "acde4067-9caf-4158-9b36-9121c028c07e", hoisted2$6, "onkeyup", function ($event) {
    var $element = this;
    ctrl.search.text = this.value;ctrl.filterTickets();
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("div", "8579beb5-a83c-4497-936d-dc096bde7274", hoisted3$6);
  incrementalDom.elementOpen("label", "0eda3cae-ae87-45fc-bbc1-b5ed1ab07ffc", hoisted4$5);
  incrementalDom.elementOpen("input", "1095dfc2-de1f-4203-9b90-7ce3e621636c", hoisted5$5, "onchange", function ($event) {
    var $element = this;
    ctrl.search.type = this.value;ctrl.filterTickets();
  });
  incrementalDom.elementClose("input");
  incrementalDom.text(" \
            All \
          ");
  incrementalDom.elementClose("label");
  incrementalDom.elementOpen("label", "f1a7ceff-e77b-4244-abfd-5266d6886f98", hoisted6$5);
  incrementalDom.elementOpen("input", "5fc204e5-bd7d-4743-b215-1039cda092d9", hoisted7$4, "onchange", function ($event) {
    var $element = this;
    ctrl.search.type = this.value;ctrl.filterTickets();
  });
  incrementalDom.elementClose("input");
  incrementalDom.text(" \
            Open \
          ");
  incrementalDom.elementClose("label");
  incrementalDom.elementOpen("label", "d7666d32-1213-4c34-a878-621345801ea3", hoisted8$4);
  incrementalDom.elementOpen("input", "898796c0-fe0a-41d8-a404-61b7463875e0", hoisted9$3, "onchange", function ($event) {
    var $element = this;
    ctrl.search.type = this.value;ctrl.filterTickets();
  });
  incrementalDom.elementClose("input");
  incrementalDom.text(" \
            Closed \
          ");
  incrementalDom.elementClose("label");
  incrementalDom.elementClose("div");
  incrementalDom.elementClose("section");
  if (ctrl.tickets.length > 0) {
    incrementalDom.elementOpen("section", "627059f3-3a7b-4cca-835c-ae4f338538d7", hoisted10$3);
    __target$8 = ctrl.tickets;
    if (__target$8) {
      (__target$8.forEach ? __target$8 : Object.keys(__target$8)).forEach(function ($value, $item, $target) {
        var ticket = $value;
        var $key = "e9c40e35-8341-47a1-96f8-d2a71d37e746_" + $item;
        incrementalDom.elementOpen("div", $key, null, "class", $item % 2 ? 'row odd' : 'row even');
        incrementalDom.elementOpen("user");
        incrementalDom.elementOpen("name");
        incrementalDom.text("Name");
        incrementalDom.elementClose("name");
        incrementalDom.elementOpen("value");
        incrementalDom.text("" + ticket.user.displayName + "");
        incrementalDom.elementClose("value");
        incrementalDom.elementClose("user");
        incrementalDom.elementOpen("gift");
        incrementalDom.elementOpen("name");
        incrementalDom.text("Gift");
        incrementalDom.elementClose("name");
        incrementalDom.elementOpen("value");
        incrementalDom.text("" + ticket.gift.title + "");
        incrementalDom.elementClose("value");
        incrementalDom.elementClose("gift");
        incrementalDom.elementOpen("date");
        incrementalDom.elementOpen("name");
        incrementalDom.text("Date");
        incrementalDom.elementClose("name");
        incrementalDom.elementOpen("value");
        incrementalDom.text("" + new Date(ticket.date).toLocaleDateString() + "");
        incrementalDom.elementClose("value");
        incrementalDom.elementClose("date");
        incrementalDom.elementOpen("request");
        incrementalDom.elementOpen("name");
        incrementalDom.text("Request");
        incrementalDom.elementClose("name");
        incrementalDom.elementOpen("value");
        incrementalDom.text("" + ticket.request + "");
        incrementalDom.elementClose("value");
        incrementalDom.elementClose("request");
        incrementalDom.elementOpen("actions");
        incrementalDom.elementOpen("name");
        incrementalDom.elementClose("name");
        incrementalDom.elementOpen("value");
        if (ticket.type === 'open' || ticket.type === '') {
          incrementalDom.elementOpen("button", "515e43a2-26e5-43bf-beac-6d9cd1e6185a_" + $key, hoisted11$2, "onclick", function ($event) {
            var $element = this;
            ctrl.close(ticket);
          });
          incrementalDom.text("Close");
          incrementalDom.elementClose("button");
        }
        if (ticket.type === 'closed') {
          incrementalDom.elementOpen("button", "0d2a5a87-2bf6-40e9-96dc-f0d3f7eea0b3_" + $key, hoisted12$2, "onclick", function ($event) {
            var $element = this;
            ctrl.open(ticket);
          });
          incrementalDom.text("Open");
          incrementalDom.elementClose("button");
        }
        incrementalDom.elementOpen("button", "0a52e57b-7956-4e47-8afd-0eb70eb9dae8_" + $key, hoisted13$2, "onclick", function ($event) {
          var $element = this;
          ctrl.delete(ticket);
        });
        incrementalDom.text("Delete");
        incrementalDom.elementClose("button");
        incrementalDom.elementClose("value");
        incrementalDom.elementClose("actions");
        incrementalDom.elementClose("div");
      }, this);
    }
    incrementalDom.elementClose("section");
  }
}

var AssistanceAdmin = function (_HTMLElement) {
  inherits(AssistanceAdmin, _HTMLElement);

  function AssistanceAdmin() {
    classCallCheck(this, AssistanceAdmin);

    var _this = possibleConstructorReturn(this, (AssistanceAdmin.__proto__ || Object.getPrototypeOf(AssistanceAdmin)).call(this));

    _this.attachShadow({ mode: 'open' });
    _this.shadowRoot.innerHTML = '<style>' + css$8 + '</style><container></container>';
    _this.element = _this.shadowRoot.querySelector('container');
    _this.search = {};

    _this._joinData = function () {
      var tickets = _this.tdv.data();
      var gifts = _this.sdv.data();
      var users = _this.udv.data();
      tickets.forEach(function (ticket) {
        ticket.gift = gifts.find(function (gift) {
          return gift.id === ticket.giftId;
        });
        ticket.user = users.find(function (user) {
          return user.id === ticket.userId;
        });
      });
      return tickets;
    };

    _this._updateView = function () {
      _this.tickets = _this._joinData();
      if (_this.element) incrementalDom.patch(_this.element, render$8, _this);
    };
    return _this;
  }

  createClass(AssistanceAdmin, [{
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oVal, nVal) {
      if (nVal && nVal !== '' && nVal !== oVal) {
        this._updateView();
      }
    }
  }, {
    key: 'close',
    value: function close(ticket) {
      ticket.type = 'closed';
      this.tColl.update(ticket);
      this._updateView();
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.sColl = db.getCollection('gifts');
      this.tColl = db.getCollection('tickets');
      this.uColl = db.getCollection('users');

      this.tColl.setChangesApi(true);

      this.sdv = this.sColl.addDynamicView('gifts');
      this.tdv = this.tColl.addDynamicView('tickets');
      this.udv = this.uColl.addDynamicView('users');

      document.addEventListener('ticketsChanged', this._updateView.bind(this));
      document.addEventListener('giftsChanged', this._updateView.bind(this));
      document.addEventListener('usersChanged', this._updateView.bind(this));

      this._updateView();
    }
  }, {
    key: 'delete',
    value: function _delete(ticket) {
      this.tColl.remove(ticket);
      this._updateView();
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      this.sdv.removeFilters();
      this.tdv.removeFilters();
      this.udv.removeFilters();
      document.removeEventListener('ticketsChanged', this._updateView.bind(this));
      document.removeEventListener('giftsChanged', this._updateView.bind(this));
      document.removeEventListener('usersChanged', this._updateView.bind(this));
    }
  }, {
    key: 'filterTickets',
    value: function filterTickets() {
      var _this2 = this;

      // console.log("this.search", this.search)
      this.tdv.removeFilters();
      var re = this.search.text && this.search.text !== '' ? new RegExp(this.search.text) : null;

      if (!!(this.search.type && this.search.type !== '' && re)) {
        this.tdv.applyWhere(function (ticket) {
          return ticket.type === _this2.search.type && ticket.gift && ticket.gift.title && re.test(ticket.gift.title) || ticket.type === _this2.search.type && ticket.gift && ticket.gift.description && re.test(ticket.gift.description) || ticket.type === _this2.search.type && ticket.user && ticket.user.displayName && re.test(ticket.user.displayName) || ticket.type === _this2.search.type && ticket.user && ticket.user.firstName && re.test(ticket.user.firstName) || ticket.type === _this2.search.type && ticket.user && ticket.user.lastName && re.test(ticket.user.lastName) || ticket.type === _this2.search.type && ticket.user && ticket.user.email && re.test(ticket.user.email);
        });
      } else if (!!re) {
        this.tdv.applyWhere(function (ticket) {
          return ticket.gift && ticket.gift.title && re.test(ticket.gift.title) || ticket.gift && ticket.gift.description && re.test(ticket.gift.description) || ticket.user && ticket.user.displayName && re.test(ticket.user.displayName) || ticket.user && ticket.user.firstName && re.test(ticket.user.firstName) || ticket.user && ticket.user.lastName && re.test(ticket.user.lastName) || ticket.user && ticket.user.email && re.test(ticket.user.email);
        });
      } else if (this.search.type !== '') {
        this.tdv.applyWhere(function (ticket) {
          return ticket.type === _this2.search.type;
        });
      }
      this._updateView();
    }
  }, {
    key: 'open',
    value: function open(ticket) {
      ticket.type = 'open';
      this.tColl.update(ticket);
      this._updateView();
    }
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return [];
    }
  }]);
  return AssistanceAdmin;
}(HTMLElement);

customElements.define('assistance-admin', AssistanceAdmin);

var css$9 = ".button,\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.button:hover,\nbutton:hover,\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\n.button:focus,\nbutton:focus,\ninput[type=\"submit\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0;\n}\n.button.primary,\nbutton.primary,\ninput[type=\"submit\"].primary,\ninput[type=\"reset\"].primary,\ninput[type=\"button\"].primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0;\n}\n.button.primary:hover,\nbutton.primary:hover,\ninput[type=\"submit\"].primary:hover,\ninput[type=\"reset\"].primary:hover,\ninput[type=\"button\"].primary:hover,\n.button.primary:focus,\nbutton.primary:focus,\ninput[type=\"submit\"].primary:focus,\ninput[type=\"reset\"].primary:focus,\ninput[type=\"button\"].primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB;\n}\n.button.danger,\nbutton.danger,\ninput[type=\"submit\"].danger,\ninput[type=\"reset\"].danger,\ninput[type=\"button\"].danger {\n  color: #FFF;\n  background-color: rgba(255, 0, 0, 0.75);\n  border-color: #ff0000;\n}\n.button.danger:hover,\nbutton.danger:hover,\ninput[type=\"submit\"].danger:hover,\ninput[type=\"reset\"].danger:hover,\ninput[type=\"button\"].danger:hover,\n.button.danger:focus,\nbutton.danger:focus,\ninput[type=\"submit\"].danger:focus,\ninput[type=\"reset\"].danger:focus,\ninput[type=\"button\"].danger:focus {\n  color: #FFF;\n  background-color: #ff0000;\n  border-color: #ff0000;\n}\n:host {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\ncontainer {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\nsection[name='header'] {\n  display: flex;\n  flex-direction: column;\n}\nsection[name='header'] input[name=\"search\"] {\n  height: 38px;\n  font-size: 1em;\n  padding-left: 1vw;\n}\nsection[name='header'] #filter {\n  display: flex;\n  align-items: center;\n  height: 38px;\n  border: 1px solid #ccc;\n  border-top: 0;\n}\nsection[name='header'] #filter label {\n  flex: 1;\n  padding-left: 1vw;\n}\nsection[name='awards'] {\n  flex: 1;\n  overflow-x: hidden;\n  overflow-y: auto;\n  margin-top: 1vh;\n  border: 1px solid #ccc;\n  display: flex;\n  flex-direction: column;\n  padding: 1vw;\n}\nsection[name='awards'] .row {\n  display: flex;\n  flex-direction: column;\n  font-size: .9em;\n  padding: 1vh 1vw;\n  min-height: 250px;\n}\nsection[name='awards'] .row.odd {\n  background-color: #f4f4f4;\n}\nsection[name='awards'] .row user,\nsection[name='awards'] .row gift,\nsection[name='awards'] .row date,\nsection[name='awards'] .row help,\nsection[name='awards'] .row share,\nsection[name='awards'] .row story,\nsection[name='awards'] .row actions {\n  display: flex;\n  height: 28px;\n  width: 100%;\n  align-items: center;\n}\nsection[name='awards'] .row user name,\nsection[name='awards'] .row gift name,\nsection[name='awards'] .row date name,\nsection[name='awards'] .row help name,\nsection[name='awards'] .row share name,\nsection[name='awards'] .row story name,\nsection[name='awards'] .row actions name {\n  flex: 1;\n  font-weight: bold;\n}\nsection[name='awards'] .row user value,\nsection[name='awards'] .row gift value,\nsection[name='awards'] .row date value,\nsection[name='awards'] .row help value,\nsection[name='awards'] .row share value,\nsection[name='awards'] .row story value,\nsection[name='awards'] .row actions value {\n  display: inline-block;\n  flex: 4;\n}\nsection[name='awards'] .row story {\n  margin-top: 1vh;\n  min-height: 100px;\n}\nsection[name='awards'] .row story value {\n  border: 1px solid #ccc;\n  padding: 1vh 1vw;\n  min-height: 64px;\n  overflow-y: auto;\n}\nsection[name='awards'] .row actions {\n  min-height: 48px;\n}\nsection[name='awards'] .row actions value {\n  padding: 0;\n}\nsection[name='awards'] .row actions value button {\n  margin-top: 2vh;\n}\n";

var hoisted1$9 = ["name", "header"];
var hoisted2$7 = ["type", "text", "name", "search", "value", "", "placeholder", "Search ..."];
var hoisted3$7 = ["id", "filter"];
var hoisted4$6 = ["for", ""];
var hoisted5$6 = ["type", "radio", "name", "awardsType", "value", "", "checked", ""];
var hoisted6$6 = ["for", ""];
var hoisted7$5 = ["type", "radio", "name", "awardsType", "value", "pending"];
var hoisted8$5 = ["for", ""];
var hoisted9$4 = ["type", "radio", "name", "awardsType", "value", "earned"];
var hoisted10$4 = ["name", "awards"];
var hoisted11$3 = ["type", "button", "class", "primary", "name", "accept"];
var __target$9;

function render$9(ctrl) {
  incrementalDom.elementOpen("section", "2b1c826b-b9aa-4834-85da-5a51709093fe", hoisted1$9);
  incrementalDom.elementOpen("input", "3e3d55e2-8ce6-4622-8747-db57dd6d1acf", hoisted2$7, "onkeyup", function ($event) {
    var $element = this;
    ctrl.search.text = this.value;ctrl.filterAwards();
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("div", "befe15bb-e10c-42c3-b433-eb0091a0faf9", hoisted3$7);
  incrementalDom.elementOpen("label", "4785e0c2-63fc-41de-a4c5-26c555fe7b53", hoisted4$6);
  incrementalDom.elementOpen("input", "f0a40c78-c9f2-4d13-9724-b1b876a49ebf", hoisted5$6, "onchange", function ($event) {
    var $element = this;
    ctrl.search.type = this.value;ctrl.filterAwards();
  });
  incrementalDom.elementClose("input");
  incrementalDom.text(" \
            All \
          ");
  incrementalDom.elementClose("label");
  incrementalDom.elementOpen("label", "e74144c2-fc79-4507-8770-da5f6d164566", hoisted6$6);
  incrementalDom.elementOpen("input", "46f6bc2f-801a-47a0-9332-20a44128a9ab", hoisted7$5, "onchange", function ($event) {
    var $element = this;
    ctrl.search.type = this.value;ctrl.filterAwards();
  });
  incrementalDom.elementClose("input");
  incrementalDom.text(" \
            Pending \
          ");
  incrementalDom.elementClose("label");
  incrementalDom.elementOpen("label", "0ee71983-89bc-4717-a700-c6f75baac0e4", hoisted8$5);
  incrementalDom.elementOpen("input", "83db61aa-3d1a-4d73-b44b-9b07d2748b40", hoisted9$4, "onchange", function ($event) {
    var $element = this;
    ctrl.search.type = this.value;ctrl.filterAwards();
  });
  incrementalDom.elementClose("input");
  incrementalDom.text(" \
            Earned \
          ");
  incrementalDom.elementClose("label");
  incrementalDom.elementClose("div");
  incrementalDom.elementClose("section");
  if (ctrl.awards.length > 0) {
    incrementalDom.elementOpen("section", "bce0d73b-e1eb-444b-be5f-91c49d7a73d3", hoisted10$4);
    __target$9 = ctrl.awards;
    if (__target$9) {
      (__target$9.forEach ? __target$9 : Object.keys(__target$9)).forEach(function ($value, $item, $target) {
        var award = $value;
        var $key = "b91094e3-4bd6-4cbf-bff1-ec26646d3163_" + $item;
        incrementalDom.elementOpen("div", $key, null, "class", $item % 2 ? 'row odd' : 'row even');
        incrementalDom.elementOpen("user");
        incrementalDom.elementOpen("name");
        incrementalDom.text("Name");
        incrementalDom.elementClose("name");
        incrementalDom.elementOpen("value");
        incrementalDom.text("" + award.user.displayName + "");
        incrementalDom.elementClose("value");
        incrementalDom.elementClose("user");
        incrementalDom.elementOpen("gift");
        incrementalDom.elementOpen("name");
        incrementalDom.text("Gift");
        incrementalDom.elementClose("name");
        incrementalDom.elementOpen("value");
        incrementalDom.text("" + award.gift.title + "");
        incrementalDom.elementClose("value");
        incrementalDom.elementClose("gift");
        incrementalDom.elementOpen("date");
        incrementalDom.elementOpen("name");
        incrementalDom.text("Date");
        incrementalDom.elementClose("name");
        incrementalDom.elementOpen("value");
        incrementalDom.text("" + new Date(award.date).toLocaleDateString() + "");
        incrementalDom.elementClose("value");
        incrementalDom.elementClose("date");
        incrementalDom.elementOpen("help");
        incrementalDom.elementOpen("name");
        incrementalDom.text("Help");
        incrementalDom.elementClose("name");
        if (award.help) {
          incrementalDom.elementOpen("value");
          incrementalDom.text("Yes");
          incrementalDom.elementClose("value");
        }
        if (!award.help) {
          incrementalDom.elementOpen("value");
          incrementalDom.text("No");
          incrementalDom.elementClose("value");
        }
        incrementalDom.elementClose("help");
        incrementalDom.elementOpen("share");
        incrementalDom.elementOpen("name");
        incrementalDom.text("Share");
        incrementalDom.elementClose("name");
        if (award.share) {
          incrementalDom.elementOpen("value");
          incrementalDom.text("Yes");
          incrementalDom.elementClose("value");
        }
        if (!award.share) {
          incrementalDom.elementOpen("value");
          incrementalDom.text("No");
          incrementalDom.elementClose("value");
        }
        incrementalDom.elementClose("share");
        if (award.story) {
          incrementalDom.elementOpen("story");
          incrementalDom.elementOpen("name");
          incrementalDom.text("Story");
          incrementalDom.elementClose("name");
          incrementalDom.elementOpen("value");
          incrementalDom.text("" + (award.story ? award.story : '') + "");
          incrementalDom.elementClose("value");
          incrementalDom.elementClose("story");
        }
        if (award.type === 'pending') {
          incrementalDom.elementOpen("actions");
          incrementalDom.elementOpen("name");
          incrementalDom.elementClose("name");
          incrementalDom.elementOpen("value");
          if (award.type === 'pending') {
            incrementalDom.elementOpen("button", "00dc504e-8cce-43db-b1a4-55add34688a9_" + $key, hoisted11$3, "onclick", function ($event) {
              var $element = this;
              ctrl.grantAward(award);
            });
            incrementalDom.text("Accept");
            incrementalDom.elementClose("button");
          }
          incrementalDom.elementClose("value");
          incrementalDom.elementClose("actions");
        }
        incrementalDom.elementClose("div");
      }, this);
    }
    incrementalDom.elementClose("section");
  }
}

var AwardsAdmin = function (_HTMLElement) {
  inherits(AwardsAdmin, _HTMLElement);

  function AwardsAdmin() {
    classCallCheck(this, AwardsAdmin);

    var _this = possibleConstructorReturn(this, (AwardsAdmin.__proto__ || Object.getPrototypeOf(AwardsAdmin)).call(this));

    _this.attachShadow({ mode: 'open' });
    _this.shadowRoot.innerHTML = '<style>' + css$9 + '</style><container></container>';
    _this.element = _this.shadowRoot.querySelector('container');
    _this.search = {};

    document.addEventListener('awardsChanged', _this._updateView.bind(_this));
    document.addEventListener('giftsChanged', _this._updateView.bind(_this));
    document.addEventListener('usersChanged', _this._updateView.bind(_this));
    return _this;
  }

  createClass(AwardsAdmin, [{
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oVal, nVal) {
      if (nVal && nVal !== '' && nVal !== oVal) {
        this._updateView();
      }
    }
  }, {
    key: '_joinData',
    value: function _joinData() {
      var awards = this.adv.data();
      var gifts = this.gdv.data();
      var users = this.udv.data();
      awards.forEach(function (award) {
        award.gift = gifts.find(function (gift) {
          return gift.id === award.giftId;
        });
        award.user = users.find(function (user) {
          return user.id === award.userId;
        });
      });
      return awards;
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.aColl = db.getCollection('awards');
      this.gColl = db.getCollection('gifts');
      this.uColl = db.getCollection('users');
      this.aColl.setChangesApi(true);
      this.gColl.setChangesApi(true);

      this.adv = this.aColl.addDynamicView('awards');
      this.gdv = this.gColl.addDynamicView('gifts');
      this.udv = this.uColl.addDynamicView('users');

      this._updateView();
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      this.adv.removeFilters();
      this.gdv.removeFilters();
      this.udv.removeFilters();
      document.removeEventListener('awardsChanged', this._updateView.bind(this));
      document.removeEventListener('giftsChanged', this._updateView.bind(this));
      document.removeEventListener('usersChanged', this._updateView.bind(this));
    }
  }, {
    key: 'filterAwards',
    value: function filterAwards() {
      var _this2 = this;

      // console.log("this.search", this.search)
      this.adv.removeFilters();
      var re = this.search.text && this.search.text !== '' ? new RegExp(this.search.text) : null;

      if (!!(this.search.type && this.search.type !== '' && re)) {
        this.adv.applyWhere(function (award) {
          return award.type === _this2.search.type && award.gift && award.gift.title && re.test(award.gift.title) || award.type === _this2.search.type && award.gift && award.gift.description && re.test(award.gift.description) || award.type === _this2.search.type && award.user && award.user.displayName && re.test(award.user.displayName) || award.type === _this2.search.type && award.user && award.user.firstName && re.test(award.user.firstName) || award.type === _this2.search.type && award.user && award.user.lastName && re.test(award.user.lastName) || award.type === _this2.search.type && award.user && award.user.email && re.test(award.user.email);
        });
      } else if (!!re) {
        this.adv.applyWhere(function (award) {
          return award.gift && award.gift.title && re.test(award.gift.title) || award.gift && award.gift.description && re.test(award.gift.description) || award.user && award.user.displayName && re.test(award.user.displayName) || award.user && award.user.firstName && re.test(award.user.firstName) || award.user && award.user.lastName && re.test(award.user.lastName) || award.user && award.user.email && re.test(award.user.email);
        });
      } else if (this.search.type !== '') {
        this.adv.applyWhere(function (award) {
          return award.type === _this2.search.type;
        });
      }
      this._updateView();
    }
  }, {
    key: 'grantAward',
    value: function grantAward(award) {
      var gift = this.gColl.findOne({ id: award.giftId });
      if (gift) {
        gift.achievements++;
        this.gColl.update(gift);
      }
      award.date = new Date().toISOString();
      award.type = 'earned';
      this.aColl.update(award);
      this._updateView();
    }
  }, {
    key: '_updateView',
    value: function _updateView() {
      this.awards = this._joinData();
      if (this.element) incrementalDom.patch(this.element, render$9, this);
    }
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return [];
    }
  }]);
  return AwardsAdmin;
}(HTMLElement);

customElements.define('awards-admin', AwardsAdmin);

var css$10 = "";

function render$10(ctrl) {
  incrementalDom.text("Reports \
");
}

var ReportsAdmin = function (_HTMLElement) {
  inherits(ReportsAdmin, _HTMLElement);

  function ReportsAdmin() {
    classCallCheck(this, ReportsAdmin);

    var _this = possibleConstructorReturn(this, (ReportsAdmin.__proto__ || Object.getPrototypeOf(ReportsAdmin)).call(this));

    _this.attachShadow({ mode: 'open' });
    _this.shadowRoot.innerHTML = '<style>' + css$10 + '</style><container></container>';
    _this.element = _this.shadowRoot.querySelector('container');
    return _this;
  }

  createClass(ReportsAdmin, [{
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oVal, nVal) {
      if (nVal && nVal !== '' && nVal !== oVal) {
        this._updateView();
      }
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this._updateView();
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {}
  }, {
    key: '_updateView',
    value: function _updateView() {
      if (this.element) incrementalDom.patch(this.element, render$10, this);
    }
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return [];
    }
  }]);
  return ReportsAdmin;
}(HTMLElement);

customElements.define('reports-admin', ReportsAdmin);

var css$11 = ".button,\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.button:hover,\nbutton:hover,\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\n.button:focus,\nbutton:focus,\ninput[type=\"submit\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0;\n}\n.button.primary,\nbutton.primary,\ninput[type=\"submit\"].primary,\ninput[type=\"reset\"].primary,\ninput[type=\"button\"].primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0;\n}\n.button.primary:hover,\nbutton.primary:hover,\ninput[type=\"submit\"].primary:hover,\ninput[type=\"reset\"].primary:hover,\ninput[type=\"button\"].primary:hover,\n.button.primary:focus,\nbutton.primary:focus,\ninput[type=\"submit\"].primary:focus,\ninput[type=\"reset\"].primary:focus,\ninput[type=\"button\"].primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB;\n}\n.button.danger,\nbutton.danger,\ninput[type=\"submit\"].danger,\ninput[type=\"reset\"].danger,\ninput[type=\"button\"].danger {\n  color: #FFF;\n  background-color: rgba(255, 0, 0, 0.75);\n  border-color: #ff0000;\n}\n.button.danger:hover,\nbutton.danger:hover,\ninput[type=\"submit\"].danger:hover,\ninput[type=\"reset\"].danger:hover,\ninput[type=\"button\"].danger:hover,\n.button.danger:focus,\nbutton.danger:focus,\ninput[type=\"submit\"].danger:focus,\ninput[type=\"reset\"].danger:focus,\ninput[type=\"button\"].danger:focus {\n  color: #FFF;\n  background-color: #ff0000;\n  border-color: #ff0000;\n}\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ntextarea,\nselect {\n  height: 38px;\n  padding: 6px 10px;\n  /* The 6px vertically centers text on FF, ignored by Webkit */\n  background-color: #fff;\n  border: 1px solid #D1D1D1;\n  box-shadow: none;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  font-size: .8em;\n}\ninput[type=\"email\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"password\"]:focus,\ntextarea:focus,\nselect:focus {\n  border: 1px solid #33C3F0;\n  outline: 0;\n}\ntextarea {\n  min-height: 65px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\nlabel,\nlegend {\n  display: block;\n  margin-bottom: .5rem;\n  font-weight: 600;\n}\nfieldset {\n  padding: 0;\n  border-width: 0;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  display: inline;\n}\nlabel > .label-body {\n  display: inline-block;\n  margin-left: .5rem;\n  font-weight: normal;\n}\ngifts-admin {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\ngifts-admin container {\n  display: flex;\n  flex-direction: column;\n}\ngifts-admin container gifts-search {\n  display: flex;\n  align-items: center;\n}\ngifts-admin container gifts-search input {\n  margin-right: 1vw;\n  flex: 1;\n}\ngifts-admin container gifts-list {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow-y: auto;\n}\ngifts-admin container form,\ngifts-admin container gift-item {\n  flex: 1;\n}\ngifts-admin container form {\n  display: flex;\n  flex-direction: column;\n}\ngifts-admin container form gift-editor-title,\ngifts-admin container form gift-editor-description,\ngifts-admin container form gift-editor-multiplicity,\ngifts-admin container form gift-editor-category {\n  display: flex;\n  margin-bottom: 1vh;\n}\ngifts-admin container form gift-editor-title label,\ngifts-admin container form gift-editor-description label,\ngifts-admin container form gift-editor-multiplicity label,\ngifts-admin container form gift-editor-category label {\n  flex: 1;\n}\ngifts-admin container form gift-editor-title input,\ngifts-admin container form gift-editor-description input,\ngifts-admin container form gift-editor-multiplicity input,\ngifts-admin container form gift-editor-category input,\ngifts-admin container form gift-editor-title select,\ngifts-admin container form gift-editor-description select,\ngifts-admin container form gift-editor-multiplicity select,\ngifts-admin container form gift-editor-category select {\n  flex: 4;\n}\ngifts-admin container form #gift-editor {\n  min-height: 20vh;\n  margin-bottom: 2vh;\n}\ngifts-admin container form gift-editor-actions button {\n  margin-right: 1vw;\n}\ngifts-admin container gift-item {\n  display: flex;\n  align-items: center;\n  border: 1px solid #ccc;\n  padding: 1vh 1vw;\n  margin-top: 1vh;\n}\ngifts-admin container gift-item.even {\n  background-color: rgba(244, 244, 244, 0.5);\n}\ngifts-admin container gift-item .info {\n  flex: 1;\n}\n";

var hoisted1$10 = ["type", "text", "name", "giftsearch", "placeholder", "Search ..."];
var hoisted2$8 = ["type", "button", "name", "add"];
var hoisted3$8 = ["name", "gift"];
var hoisted4$7 = ["type", "text", "required", ""];
var hoisted5$7 = ["type", "text", "required", ""];
var hoisted6$7 = ["name", "category", "required", ""];
var hoisted7$6 = ["value", ""];
var hoisted8$6 = ["value", "booklet"];
var hoisted9$5 = ["value", "find"];
var hoisted10$5 = ["value", "take"];
var hoisted11$4 = ["value", "teach"];
var hoisted12$3 = ["value", "memories"];
var hoisted13$3 = ["value", "indexing"];
var hoisted14$2 = ["type", "checkbox"];
var hoisted15$2 = ["id", "gift-editor"];
var hoisted16$1 = ["type", "button", "name", "save", "class", "primary"];
var hoisted17$1 = ["type", "button", "name", "delete", "class", "danger"];
var hoisted18$1 = ["type", "button", "name", "cancel"];
var hoisted19$1 = ["class", "info"];
var hoisted20$1 = ["class", "title"];
var hoisted21$1 = ["class", "description"];
var hoisted22$1 = ["class", "action"];
var hoisted23$1 = ["type", "button"];
var __target$11;

function render$11(ctrl) {
  if (!ctrl.giftEditor) {
    incrementalDom.elementOpen("gifts-search");
    incrementalDom.elementOpen("input", "12d12ed2-5ea9-42fa-a29f-e1219f476bdc", hoisted1$10, "onkeyup", function ($event) {
      var $element = this;
      ctrl.filterGifts(this.value);
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementOpen("button", "e4802073-7b86-46fb-9214-f80b00f052a2", hoisted2$8, "onclick", function ($event) {
      var $element = this;
      ctrl.addGift();
    });
    incrementalDom.text("Add");
    incrementalDom.elementClose("button");
    incrementalDom.elementClose("gifts-search");
  }
  incrementalDom.elementOpen("gifts-list");
  if (ctrl.giftEditor) {
    incrementalDom.elementOpen("form", "ff16a1bf-c322-476b-b6f3-746292f47b2d", hoisted3$8);
    incrementalDom.elementOpen("gift-editor-title");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Title:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("input", "81f50543-d9e0-447b-99f9-2477e07cfc34", hoisted4$7, "name", ctrl.gift.title, "value", ctrl.gift.title, "onchange", function ($event) {
      var $element = this;
      ctrl.gift.title = this.value;
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementClose("gift-editor-title");
    incrementalDom.elementOpen("gift-editor-description");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Description:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("input", "60c03822-f2e3-47bd-874d-9cb5ed400a93", hoisted5$7, "name", ctrl.gift.description, "value", ctrl.gift.description, "onchange", function ($event) {
      var $element = this;
      ctrl.gift.description = this.value;
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementClose("gift-editor-description");
    incrementalDom.elementOpen("gift-editor-category");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Category:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("select", "e6f2ef07-78f2-4c75-b785-3b25efb98c0b", hoisted6$7, "onchange", function ($event) {
      var $element = this;
      ctrl.gift.category = this.value;
    });
    incrementalDom.elementOpen("option", "3d468529-9794-4d43-a334-ea790f79da09", hoisted7$6);
    incrementalDom.text("Select");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "cb42e172-c061-471e-875b-012bc69ea944", hoisted8$6, "selected", ctrl.gift.category === 'booklet' ? true : null);
    incrementalDom.text("Booklet");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "982413cd-49ad-463b-bf59-29d5c8d9aacd", hoisted9$5, "selected", ctrl.gift.category === 'find' ? true : null);
    incrementalDom.text("Find");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "7025bdee-7bea-4157-9bd5-230449011692", hoisted10$5, "selected", ctrl.gift.category === 'take' ? true : null);
    incrementalDom.text("Take");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "515dee45-0c29-466c-b05e-6fe3d9c9f809", hoisted11$4, "selected", ctrl.gift.category === 'teach' ? true : null);
    incrementalDom.text("Teach");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "4dfd98cd-7b38-4eef-99bb-82a0f217928f", hoisted12$3, "selected", ctrl.gift.category === 'memories' ? true : null);
    incrementalDom.text("Memories");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "4e79ab69-cc04-41f1-aa74-c751e16a6eb8", hoisted13$3, "selected", ctrl.gift.category === 'indexing' ? true : null);
    incrementalDom.text("Indexing");
    incrementalDom.elementClose("option");
    incrementalDom.elementClose("select");
    incrementalDom.elementClose("gift-editor-category");
    incrementalDom.elementOpen("gift-editor-multiplicity");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Allow Multiple:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("input", "32a46910-8708-4ece-8626-241d05847d41", hoisted14$2, "checked", ctrl.gift.multiple, "onchange", function ($event) {
      var $element = this;
      ctrl.gift.multiple = this.checked;
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementClose("gift-editor-multiplicity");
    incrementalDom.elementOpen("gift-editor-instructions");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Instructions:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("div", "288bfc21-4748-4023-9308-1e01530f9ba6", hoisted15$2);
    incrementalDom.elementClose("div");
    incrementalDom.elementClose("gift-editor-instructions");
    incrementalDom.elementOpen("gift-editor-actions");
    incrementalDom.elementOpen("button", "8cbe2413-5db9-4038-84da-0b6288ded7e1", hoisted16$1, "onclick", function ($event) {
      var $element = this;
      ctrl.saveGift();
    });
    incrementalDom.text("Save");
    incrementalDom.elementClose("button");
    incrementalDom.elementOpen("button", "ba825c5f-8a67-4190-81a3-ef47301adc91", hoisted17$1, "onclick", function ($event) {
      var $element = this;
      ctrl.deleteGift();
    });
    incrementalDom.text("Delete");
    incrementalDom.elementClose("button");
    incrementalDom.elementOpen("button", "8564e5dd-53b5-4369-afc0-4eecda4751cc", hoisted18$1, "onclick", function ($event) {
      var $element = this;
      ctrl.cancelEdit();
    });
    incrementalDom.text("Cancel");
    incrementalDom.elementClose("button");
    incrementalDom.elementClose("gift-editor-actions");
    incrementalDom.elementClose("form");
  }
  incrementalDom.elementOpen("gifts-list-container");
  if (!ctrl.giftEditor) {
    __target$11 = ctrl.viewGifts;
    if (__target$11) {
      (__target$11.forEach ? __target$11 : Object.keys(__target$11)).forEach(function ($value, $item, $target) {
        var gift = $value;
        var $key = "dfb69b9d-99d9-40c0-b8ff-b6ad8ffe5e97_" + $item;
        incrementalDom.elementOpen("gift-item", $key, null, "class", $item % 2 ? 'odd' : 'even');
        incrementalDom.elementOpen("div", "70bd2b71-8a20-4761-b9f8-b8c1dec4def7_" + $key, hoisted19$1);
        incrementalDom.elementOpen("div", "67ee991f-8ac2-47c8-a11c-bdab65830767_" + $key, hoisted20$1);
        incrementalDom.text("" + gift.title + "");
        incrementalDom.elementClose("div");
        incrementalDom.elementOpen("div", "c65fa504-bb9a-40ee-b0e8-a418089bed8a_" + $key, hoisted21$1);
        incrementalDom.text("" + gift.description + "");
        incrementalDom.elementClose("div");
        incrementalDom.elementClose("div");
        incrementalDom.elementOpen("div", "b2a07b22-198c-46fa-849a-c6c9ae8db5e3_" + $key, hoisted22$1);
        incrementalDom.elementOpen("button", "95198ea3-1da0-4994-b50e-401d6759e92a_" + $key, hoisted23$1, "disabled", ctrl.giftFormValid, "onclick", function ($event) {
          var $element = this;
          ctrl.editGift($value);
        });
        incrementalDom.text("Edit");
        incrementalDom.elementClose("button");
        incrementalDom.elementClose("div");
        incrementalDom.elementClose("gift-item");
      }, this);
    }
  }
  incrementalDom.elementClose("gifts-list-container");
  incrementalDom.elementClose("gifts-list");
}

var GiftsAdmin = function (_HTMLElement) {
  inherits(GiftsAdmin, _HTMLElement);

  function GiftsAdmin() {
    classCallCheck(this, GiftsAdmin);

    var _this = possibleConstructorReturn(this, (GiftsAdmin.__proto__ || Object.getPrototypeOf(GiftsAdmin)).call(this));

    document.addEventListener('giftsChanged', _this._updateView.bind(_this));
    return _this;
  }

  createClass(GiftsAdmin, [{
    key: 'addGift',
    value: function addGift() {
      this.editGift();
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oVal, nVal) {
      if (nVal && nVal !== '' && nVal !== oVal) {
        this._updateView();
      }
    }
  }, {
    key: 'cancelEdit',
    value: function cancelEdit() {
      this.gift = null;
      this.giftEditor = false;
      this._updateView();
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.sColl = db.getCollection('gifts');
      this.sColl.setChangesApi(true);
      this.dv = this.sColl.addDynamicView('gifts');
      this.innerHTML = '<style>' + css$11 + '</style><container></container>';
      this.element = this.querySelector('container');
      this._updateView();
    }
  }, {
    key: 'deleteGift',
    value: function deleteGift() {
      this.sColl.findAndRemove({ id: this.gift.id });
      this.cancelEdit();
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      if (this.dv) this.dv.removeFilters();
    }
  }, {
    key: 'editGift',
    value: function editGift() {
      var gift = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.gift = gift;
      this.gift.id = gift.id || uuid();
      this.giftEditor = true;
      this._updateView();
      this.quill = new Quill('#gift-editor', { theme: 'snow' });
      if (this.gift.delta) this.quill.setContents(this.gift.delta);
      // console.log("this.gift", this.gift)
    }
  }, {
    key: 'filterGifts',
    value: function filterGifts(val) {
      var str = val ? val.toLowerCase() : null;

      // console.log("str", str)
      this.dv.removeFilters();

      this.dv.applyWhere(function (gift) {
        if (gift.title && gift.title.toLowerCase().indexOf(str) !== -1) return true;
        if (gift.description && gift.description.toLowerCase().indexOf(str) !== -1) return true;
        if (gift.category && gift.category.toLowerCase().indexOf(str) !== -1) return true;
      });

      if (!str || str === '') {
        this.dv.removeFilters();
      }
      this._updateView();
    }
  }, {
    key: 'saveGift',
    value: function saveGift() {
      // console.log("this.gift.id", this.gift.id)
      var savedGift = this.sColl.findOne({ id: this.gift.id });
      // console.log("savedGift", savedGift)
      this.gift.delta = this.quill.getContents();
      this.gift.html = this.element.querySelector(".ql-editor").innerHTML;
      this.gift.achievements = this.gift.achievements || 0;
      if (savedGift) this.sColl.update(Object.assign(savedGift, this.gift));else this.sColl.insertOne(this.gift);
      this.cancelEdit();
    }
  }, {
    key: '_updateView',
    value: function _updateView() {
      this.viewGifts = this.dv.data();
      if (this.element) incrementalDom.patch(this.element, render$11, this);
    }
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return [];
    }
  }]);
  return GiftsAdmin;
}(HTMLElement);

customElements.define('gifts-admin', GiftsAdmin);

var css$12 = ".button,\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.button:hover,\nbutton:hover,\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\n.button:focus,\nbutton:focus,\ninput[type=\"submit\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0;\n}\n.button.primary,\nbutton.primary,\ninput[type=\"submit\"].primary,\ninput[type=\"reset\"].primary,\ninput[type=\"button\"].primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0;\n}\n.button.primary:hover,\nbutton.primary:hover,\ninput[type=\"submit\"].primary:hover,\ninput[type=\"reset\"].primary:hover,\ninput[type=\"button\"].primary:hover,\n.button.primary:focus,\nbutton.primary:focus,\ninput[type=\"submit\"].primary:focus,\ninput[type=\"reset\"].primary:focus,\ninput[type=\"button\"].primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB;\n}\n.button.danger,\nbutton.danger,\ninput[type=\"submit\"].danger,\ninput[type=\"reset\"].danger,\ninput[type=\"button\"].danger {\n  color: #FFF;\n  background-color: rgba(255, 0, 0, 0.75);\n  border-color: #ff0000;\n}\n.button.danger:hover,\nbutton.danger:hover,\ninput[type=\"submit\"].danger:hover,\ninput[type=\"reset\"].danger:hover,\ninput[type=\"button\"].danger:hover,\n.button.danger:focus,\nbutton.danger:focus,\ninput[type=\"submit\"].danger:focus,\ninput[type=\"reset\"].danger:focus,\ninput[type=\"button\"].danger:focus {\n  color: #FFF;\n  background-color: #ff0000;\n  border-color: #ff0000;\n}\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ntextarea,\nselect {\n  height: 38px;\n  padding: 6px 10px;\n  /* The 6px vertically centers text on FF, ignored by Webkit */\n  background-color: #fff;\n  border: 1px solid #D1D1D1;\n  box-shadow: none;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  font-size: .8em;\n}\ninput[type=\"email\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"password\"]:focus,\ntextarea:focus,\nselect:focus {\n  border: 1px solid #33C3F0;\n  outline: 0;\n}\ntextarea {\n  min-height: 65px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\nlabel,\nlegend {\n  display: block;\n  margin-bottom: .5rem;\n  font-weight: 600;\n}\nfieldset {\n  padding: 0;\n  border-width: 0;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  display: inline;\n}\nlabel > .label-body {\n  display: inline-block;\n  margin-left: .5rem;\n  font-weight: normal;\n}\n:host {\n  font-size: 1em;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\ncontainer {\n  font-size: 1em;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\nusers-search {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1vh;\n}\nusers-search input {\n  flex: 6;\n}\nusers-search button {\n  flex: 1;\n  margin-left: 8px;\n}\nusers-list {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow-y: auto;\n}\nuser-item {\n  display: flex;\n  padding: 1vh 1vw;\n  min-height: 96px;\n}\nuser-item .info {\n  display: flex;\n  flex: 6;\n  flex-direction: column;\n}\nuser-item .info .title {\n  font-size: 17px;\n  font-weight: bold;\n}\nuser-item .info .description {\n  font-size: 16px;\n}\nuser-item .info .category {\n  font-size: 15px;\n}\nuser-item .action {\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n}\nuser-item .action button {\n  margin-right: 2vw;\n}\nuser-item.even {\n  background-color: #efefef;\n}\nform[name='user'] {\n  display: flex;\n  flex-direction: column;\n}\nform[name='user'] > * {\n  display: flex;\n  justify-content: space-between;\n}\nform[name='user'] > * label {\n  font-size: 18px;\n  flex: 1.25;\n}\nform[name='user'] > * input,\nform[name='user'] > * select {\n  flex: 3;\n  margin-bottom: 1vh;\n}\nform[name='user'] gift-editor-instructions {\n  display: flex;\n  flex-direction: column;\n}\nform[name='user'] gift-editor-instructions label {\n  font-size: 18px;\n}\nform[name='user'] gift-editor-instructions #gift-editor {\n  height: 40vh;\n  margin-bottom: 1vh;\n}\nform[name='user'] button[name='cancel'] {\n  margin: 0 1vw;\n}\n.bold {\n  font-weight: bold;\n}\nuser-editor-actions {\n  justify-content: flex-start !important;\n}\n";

var hoisted1$11 = ["type", "text", "name", "usersearch", "placeholder", "Search ..."];
var hoisted2$9 = ["name", "user"];
var hoisted3$9 = ["type", "text", "required", ""];
var hoisted4$8 = ["type", "text", "required", ""];
var hoisted5$8 = ["type", "text", "disabled", "true"];
var hoisted6$8 = ["name", "group", "required", ""];
var hoisted7$7 = ["value", ""];
var hoisted8$7 = ["value", "be"];
var hoisted9$6 = ["value", "dn"];
var hoisted10$6 = ["value", "eq"];
var hoisted11$5 = ["value", "hp"];
var hoisted12$4 = ["value", "ll"];
var hoisted13$4 = ["value", "mm"];
var hoisted14$3 = ["value", "pr"];
var hoisted15$3 = ["value", "py"];
var hoisted16$2 = ["value", "rs"];
var hoisted17$2 = ["value", "tr"];
var hoisted18$2 = ["type", "checkbox"];
var hoisted19$2 = ["type", "button", "name", "save", "class", "primary"];
var hoisted20$2 = ["type", "button", "name", "cancel"];
var hoisted21$2 = ["class", "info"];
var hoisted22$2 = ["class", "name bold"];
var hoisted23$2 = ["class", "display-name bold"];
var hoisted24$1 = ["class", "email"];
var hoisted25$1 = ["class", "group"];
var hoisted26$1 = ["class", "action"];
var hoisted27$1 = ["type", "button", "class", "danger"];
var hoisted28$1 = ["type", "button"];
var hoisted29$1 = ["type", "button"];
var __target$12;

function render$12(ctrl) {
  if (!ctrl.userEditor) {
    incrementalDom.elementOpen("users-search");
    incrementalDom.elementOpen("input", "e70a5ef7-a678-4843-a875-78f8b69aea00", hoisted1$11, "onkeyup", function ($event) {
      var $element = this;
      ctrl.filterUsers(this.value);
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementClose("users-search");
  }
  incrementalDom.elementOpen("users-list");
  if (ctrl.userEditor) {
    incrementalDom.elementOpen("form", "e517cee0-5788-490e-978e-5efa1daea7f0", hoisted2$9);
    incrementalDom.elementOpen("user-editor-name");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Certificate Name:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("input", "db98948c-d5c7-41b1-8c0a-304a7d9c6145", hoisted3$9, "value", ctrl.user.name, "onchange", function ($event) {
      var $element = this;
      ctrl.user.name = this.value;
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementClose("user-editor-name");
    incrementalDom.elementOpen("user-editor-display-name");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Display Name:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("input", "55dd76d4-2a96-42f6-9596-4a4d5bbb530d", hoisted4$8, "name", ctrl.user.displayName, "value", ctrl.user.displayName, "onchange", function ($event) {
      var $element = this;
      ctrl.user.displayName = this.value;
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementClose("user-editor-display-name");
    incrementalDom.elementOpen("user-editor-email");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Email:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("input", "f8fb1fd2-bbfe-4e5c-a132-2b9bcf058650", hoisted5$8, "name", ctrl.user.email, "value", ctrl.user.email, "onchange", function ($event) {
      var $element = this;
      ctrl.user.email = this.value;
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementClose("user-editor-email");
    incrementalDom.elementOpen("user-editor-category");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Organization:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("select", "82fa56f1-9fd3-4a23-a0bc-14d6647a3112", hoisted6$8, "onchange", function ($event) {
      var $element = this;
      ctrl.user.group = this.value;
    });
    incrementalDom.elementOpen("option", "777892ed-74c9-4d24-9e08-a3362fc63b43", hoisted7$7);
    incrementalDom.text("Select");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "e8b80c53-14f8-4abf-865d-4abb1bb1d23d", hoisted8$7, "selected", ctrl.user.group === 'be' ? true : null);
    incrementalDom.text("Beehive");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "2984dfc7-9f81-4e71-8649-4f3f3d29d646", hoisted9$6, "selected", ctrl.user.group === 'dn' ? true : null);
    incrementalDom.text("Deacon");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "b7a39c85-49d9-4f64-871c-88b4d7c37019", hoisted10$6, "selected", ctrl.user.group === 'eq' ? true : null);
    incrementalDom.text("Elders");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "2b7e7692-bb35-4b1b-9ddb-1f72f20e7dcf", hoisted11$5, "selected", ctrl.user.group === 'hp' ? true : null);
    incrementalDom.text("High Priest");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "16a9a2e6-02a7-401d-a42b-1e8a7bfe1541", hoisted12$4, "selected", ctrl.user.group === 'll' ? true : null);
    incrementalDom.text("Laurel");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "f039ce40-f51a-42d9-946d-15dd3cdd45fa", hoisted13$4, "selected", ctrl.user.group === 'mm' ? true : null);
    incrementalDom.text("Miamaid");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "1c6741c8-dc45-4edb-9955-ba9705ac229f", hoisted14$3, "selected", ctrl.user.group === 'pr' ? true : null);
    incrementalDom.text("Priest");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "3cec87bb-be91-4afc-8395-550b996575e8", hoisted15$3, "selected", ctrl.user.group === 'py' ? true : null);
    incrementalDom.text("Primary");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "4832cbf1-5c18-4ae0-b4a1-3b72996fad94", hoisted16$2, "selected", ctrl.user.group === 'rs' ? true : null);
    incrementalDom.text("Relief Society");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "5be73082-e537-4f4a-abf0-4377090d1ff3", hoisted17$2, "selected", ctrl.user.group === 'tr' ? true : null);
    incrementalDom.text("Teacher");
    incrementalDom.elementClose("option");
    incrementalDom.elementClose("select");
    incrementalDom.elementClose("user-editor-category");
    incrementalDom.elementOpen("user-admin");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Admin:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("input", "2009cc85-dead-4e43-9097-7865e0c4e718", hoisted18$2, "checked", ctrl.user.admin ? true : null, "onchange", function ($event) {
      var $element = this;
      ctrl.user.admin = this.checked;
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementClose("user-admin");
    incrementalDom.elementOpen("user-editor-actions");
    incrementalDom.elementOpen("button", "cae5e70d-0722-44ea-8532-8d8ad0e9a5f9", hoisted19$2, "onclick", function ($event) {
      var $element = this;
      ctrl.saveUser();
    });
    incrementalDom.text("Save");
    incrementalDom.elementClose("button");
    incrementalDom.elementOpen("button", "fa5d108c-6a2b-4c92-92c7-f7764e9a2e32", hoisted20$2, "onclick", function ($event) {
      var $element = this;
      ctrl.cancelEdit();
    });
    incrementalDom.text("Cancel");
    incrementalDom.elementClose("button");
    incrementalDom.elementClose("user-editor-actions");
    incrementalDom.elementClose("form");
  }
  if (!ctrl.userEditor) {
    __target$12 = ctrl.viewUsers;
    if (__target$12) {
      (__target$12.forEach ? __target$12 : Object.keys(__target$12)).forEach(function ($value, $item, $target) {
        var user = $value;
        var $key = "3e3d8dec-5347-4be3-ae17-09bbbbbb1be9_" + $item;
        incrementalDom.elementOpen("user-item", $key, null, "class", $item % 2 ? 'odd' : 'even');
        incrementalDom.elementOpen("div", "61141d0c-4c2a-425f-b543-c93375877fbc_" + $key, hoisted21$2);
        if (user.name) {
          incrementalDom.elementOpen("div", "8098fc09-e40e-4b03-8298-f7b57bcc19de_" + $key, hoisted22$2);
          incrementalDom.text("" + user.name + "");
          incrementalDom.elementClose("div");
        }
        incrementalDom.elementOpen("div", "0be8f768-f903-44ce-a0bf-a9828fc0cda0_" + $key, hoisted23$2);
        incrementalDom.text("" + user.displayName + "");
        incrementalDom.elementClose("div");
        incrementalDom.elementOpen("div", "8f2ac22d-6fb3-48c3-8496-fefd7862134a_" + $key, hoisted24$1);
        incrementalDom.text("" + user.email + "");
        incrementalDom.elementClose("div");
        if (user.group) {
          incrementalDom.elementOpen("div", "b5bf3663-c5df-495b-bd6e-375196c2a06a_" + $key, hoisted25$1);
          incrementalDom.text("" + ctrl.getGroupName(user) + "");
          incrementalDom.elementClose("div");
        }
        incrementalDom.elementClose("div");
        incrementalDom.elementOpen("div", "c22501b6-66d0-4c72-b8a2-298054b557be_" + $key, hoisted26$1);
        incrementalDom.elementOpen("button", "9e978b1f-0ed2-451a-a25e-9e8556c5a3b3_" + $key, hoisted27$1, "disabled", ctrl.userFormValid, "onclick", function ($event) {
          var $element = this;
          ctrl.deleteUser($value);
        });
        incrementalDom.text("Remove");
        incrementalDom.elementClose("button");
        incrementalDom.elementOpen("button", "b5f116a7-461e-45ef-8bb2-a869ab6e84ed_" + $key, hoisted28$1, "disabled", ctrl.userFormValid, "onclick", function ($event) {
          var $element = this;
          ctrl.disableUser($value);
        });
        incrementalDom.text("Disable");
        incrementalDom.elementClose("button");
        incrementalDom.elementOpen("button", "c3c0f3e3-b603-42df-88fe-15a6f3a134e2_" + $key, hoisted29$1, "disabled", ctrl.userFormValid, "onclick", function ($event) {
          var $element = this;
          ctrl.editUser($value);
        });
        incrementalDom.text("Edit");
        incrementalDom.elementClose("button");
        incrementalDom.elementClose("div");
        incrementalDom.elementClose("user-item");
      }, this);
    }
  }
  incrementalDom.elementClose("users-list");
}

var UsersAdmin = function (_HTMLElement) {
  inherits(UsersAdmin, _HTMLElement);

  function UsersAdmin() {
    classCallCheck(this, UsersAdmin);

    var _this = possibleConstructorReturn(this, (UsersAdmin.__proto__ || Object.getPrototypeOf(UsersAdmin)).call(this));

    _this.attachShadow({ mode: 'open' });
    _this.shadowRoot.innerHTML = '<style>' + css$12 + '</style><container></container>';
    _this.element = _this.shadowRoot.querySelector('container');
    _this.user = user;
    _this.model = {};

    document.addEventListener('usersChanged', _this._updateView.bind(_this));
    return _this;
  }

  createClass(UsersAdmin, [{
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oVal, nVal) {
      if (nVal && nVal !== '' && nVal !== oVal) {
        this._updateView();
      }
    }
  }, {
    key: 'cancelEdit',
    value: function cancelEdit() {
      this.gift = null;
      this.user = null;
      this.userId = null;
      this.userEditor = false;

      this._updateView();
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.uColl = db.getCollection('users');
      this.uColl.setChangesApi(true);
      this.dv = this.uColl.addDynamicView('users');
      this._updateView();
    }
  }, {
    key: 'deleteUser',
    value: function deleteUser(_user) {
      console.log("_user", _user);
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      this.dv.removeFilters();
    }
  }, {
    key: 'editUser',
    value: function editUser(_user) {
      this.user = _user;
      this.userEditor = true;
      this._updateView();
    }
  }, {
    key: 'filterUsers',
    value: function filterUsers(val) {
      var str = val ? val.toLowerCase() : null;
      this.dv.removeFilters();

      if (str) {
        this.dv.applyWhere(function (_user) {
          return _user.displayName && _user.displayName.toLowerCase().indexOf(str) !== -1 || typeof _user.name === 'string' && _user.name.toLowerCase().indexOf(str) !== -1 || _user.group && _user.group.toLowerCase().indexOf(str) !== -1 || _user.email && _user.email.toLowerCase().indexOf(str) !== -1;
        });
      }

      this._updateView();
    }
  }, {
    key: 'getGroupName',
    value: function getGroupName(_user) {
      var group = _user.group;
      var groupName = void 0;
      switch (group) {
        case 'be':
          groupName = 'Beehive';break;
        case 'dn':
          groupName = 'Deacon';break;
        case 'eq':
          groupName = 'Elder';break;
        case 'hp':
          groupName = 'High Priest';break;
        case 'll':
          groupName = 'Laurel';break;
        case 'mm':
          groupName = 'Miamaid';break;
        case 'pr':
          groupName = 'Priest';break;
        case 'py':
          groupName = 'Primary';break;
        case 'rs':
          groupName = 'Relief Society';break;
        case 'tr':
          groupName = 'Teachter';break;
        default:
          groupName = null;
      }
      return groupName;
    }
  }, {
    key: 'saveUser',
    value: function saveUser() {
      var _user = Object.assign({}, this.user);
      delete _user.authenticated;
      delete _user.initialized;
      this.uColl.update(_user);
      this.cancelEdit();
    }
  }, {
    key: '_updateView',
    value: function _updateView() {
      this.viewUsers = this.dv.data();
      if (this.element) incrementalDom.patch(this.element, render$12, this);
    }
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return [];
    }
  }]);
  return UsersAdmin;
}(HTMLElement);

customElements.define('users-admin', UsersAdmin);

var SysAdmin = function (_HTMLElement) {
  inherits(SysAdmin, _HTMLElement);

  function SysAdmin() {
    classCallCheck(this, SysAdmin);

    var _this = possibleConstructorReturn(this, (SysAdmin.__proto__ || Object.getPrototypeOf(SysAdmin)).call(this));

    document.addEventListener('userLoadedFromDb', _this._userChanged.bind(_this));
    document.addEventListener('userUnauthenticated', _this._userChanged.bind(_this));

    router.add('/admin/users', function (req, evt, next) {
      if (_this.content) _this.content.innerHTML = '<users-admin></users-admin>';
    });
    router.add('/admin/gifts', function (req, evt, next) {
      if (_this.content) _this.content.innerHTML = '<gifts-admin></gifts-admin>';
    });
    router.add('/admin/awards', function (req, evt, next) {
      if (_this.content) _this.content.innerHTML = '<awards-admin><awards-admin>';
    });
    router.add('/admin/assistance', function (req, evt, next) {
      if (_this.content) _this.content.innerHTML = '<assistance-admin></assistance-admin>';
    });
    router.add('/admin/reports', function (req, evt, next) {
      if (_this.content) _this.content.innerHTML = '<reports-admin></reports-admin>';
    });
    return _this;
  }

  createClass(SysAdmin, [{
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oVal, nVal) {}
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      var state = router.state.value;
      this.innerHTML = '<style>' + css$7 + '</style><div id="sys-admin"></div>';
      this.element = this.querySelector('div#sys-admin');
      this.updateView();
      this.content = this.element.querySelector('content');
      this.tabs = this.element.querySelector('tabs');
      this.tabItems = this.tabs.querySelectorAll('tab');

      this.tabItems.forEach(function (tab) {
        var input = tab.querySelector('input');
        if (state.indexOf(input.value) !== -1) input.setAttribute('checked', true);
      });
      setTimeout(function () {
        router.navigate(state);
      }, 100);
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {}
  }, {
    key: 'selectTab',
    value: function selectTab(tab) {
      router.navigate('/admin/' + tab);
    }
  }, {
    key: 'updateView',
    value: function updateView() {
      if (this.element) incrementalDom.patch(this.element, render$7, this);
    }
  }, {
    key: '_userChanged',
    value: function _userChanged() {
      if (!user.authenticated) router.navigate('/login');
    }
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return [''];
    }
  }]);
  return SysAdmin;
}(HTMLElement);

customElements.define('sys-admin', SysAdmin);

var css$13 = ":host {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 2vh 2vw;\n  font-family: sans-serif;\n  font-size: .9em;\n}\n";

var hoisted1$12 = ["type", "a"];
var hoisted2$10 = ["type", "i"];
var hoisted3$10 = ["type", "a"];
function render$13(ctrl) {
  incrementalDom.elementOpen("h2");
  incrementalDom.text(" \
  	Web Site Terms and Conditions of Use \
  ");
  incrementalDom.elementClose("h2");
  incrementalDom.elementOpen("h3");
  incrementalDom.text(" \
  	1. Terms \
  ");
  incrementalDom.elementClose("h3");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
    By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any \
    of these terms, you are prohibited from using or accessing this site. The materials contained in this web site are protected by applicable copyright and trade mark law. \
  ");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("h3");
  incrementalDom.text(" \
  	2. Use License \
  ");
  incrementalDom.elementClose("h3");
  incrementalDom.elementOpen("ol", "e20becb3-7019-401c-b102-33017af818ea", hoisted1$12);
  incrementalDom.elementOpen("li");
  incrementalDom.text(" \
        Permission is granted to temporarily download one copy of the materials (information or software) on Manila 7th Ward's web site for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this \
        license you may not: \
     \
        ");
  incrementalDom.elementOpen("ol", "dce7ad62-172c-4f5c-a566-ef8f273a4c24", hoisted2$10);
  incrementalDom.elementOpen("li");
  incrementalDom.text("modify or copy the materials;");
  incrementalDom.elementClose("li");
  incrementalDom.elementOpen("li");
  incrementalDom.text("use the materials for any commercial purpose, or for any public display (commercial or non-commercial);");
  incrementalDom.elementClose("li");
  incrementalDom.elementOpen("li");
  incrementalDom.text("attempt to decompile or reverse engineer any software contained on Manila 7th Ward's web site;");
  incrementalDom.elementClose("li");
  incrementalDom.elementOpen("li");
  incrementalDom.text("remove any copyright or other proprietary notations from the materials; or");
  incrementalDom.elementClose("li");
  incrementalDom.elementOpen("li");
  incrementalDom.text("transfer the materials to another person or 'mirror' the materials on any other server.");
  incrementalDom.elementClose("li");
  incrementalDom.elementClose("ol");
  incrementalDom.elementClose("li");
  incrementalDom.elementOpen("li");
  incrementalDom.text(" \
        This license shall automatically terminate if you violate any of these restrictions and may be terminated by Manila 7th Ward at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded \
        materials in your possession whether in electronic or printed format. \
      ");
  incrementalDom.elementClose("li");
  incrementalDom.elementClose("ol");
  incrementalDom.elementOpen("h3");
  incrementalDom.text(" \
  	3. Disclaimer \
  ");
  incrementalDom.elementClose("h3");
  incrementalDom.elementOpen("ol", "946ca9bb-2c90-40fe-8eb3-69de9b03a246", hoisted3$10);
  incrementalDom.elementOpen("li");
  incrementalDom.text(" \
        The materials on Manila 7th Ward's web site are provided 'as is'. Manila 7th Ward makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, \
        fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Manila 7th Ward does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of \
        the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site. \
      ");
  incrementalDom.elementClose("li");
  incrementalDom.elementClose("ol");
  incrementalDom.elementOpen("h3");
  incrementalDom.text(" \
  	4. Limitations \
  ");
  incrementalDom.elementClose("h3");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
    In no event shall Manila 7th Ward or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on Manila 7th Ward's \
    Internet site, even if Manila 7th Ward or a Manila 7th Ward authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations \
    of liability for consequential or incidental damages, these limitations may not apply to you. \
  ");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("h3");
  incrementalDom.text(" \
  	5. Revisions and Errata \
  ");
  incrementalDom.elementClose("h3");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
    The materials appearing on Manila 7th Ward's web site could include technical, typographical, or photographic errors. Manila 7th Ward does not warrant that any of the materials on its web site are accurate, complete, or current. Manila 7th Ward may make \
    changes to the materials contained on its web site at any time without notice. Manila 7th Ward does not, however, make any commitment to update the materials. \
  ");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("h3");
  incrementalDom.text(" \
  	6. Links \
  ");
  incrementalDom.elementClose("h3");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
    Manila 7th Ward has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Manila 7th Ward of the site. Use of any such linked \
    web site is at the user's own risk. \
  ");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("h3");
  incrementalDom.text(" \
  	7. Site Terms of Use Modifications \
  ");
  incrementalDom.elementClose("h3");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
    Manila 7th Ward may revise these terms of use for its web site at any time without notice. By using this web site you are agreeing to be bound by the then current version of these Terms and Conditions of Use. \
  ");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("h3");
  incrementalDom.text(" \
  	8. Governing Law \
  ");
  incrementalDom.elementClose("h3");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
    Any claim relating to Manila 7th Ward's web site shall be governed by the laws of the State of Utah without regard to its conflict of law provisions. \
  ");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
    General Terms and Conditions applicable to Use of a Web Site. \
  ");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("h2");
  incrementalDom.text(" \
  	Privacy Policy \
  ");
  incrementalDom.elementClose("h2");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
    Your privacy is very important to us. Accordingly, we have developed this Policy in order for you to understand how we collect, use, communicate and disclose and make use of personal information. The following outlines our privacy policy. \
  ");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("ul");
  incrementalDom.elementOpen("li");
  incrementalDom.text(" \
        Before or at the time of collecting personal information, we will identify the purposes for which information is being collected. \
      ");
  incrementalDom.elementClose("li");
  incrementalDom.elementOpen("li");
  incrementalDom.text(" \
        We will collect and use of personal information solely with the objective of fulfilling those purposes specified by us and for other compatible purposes, unless we obtain the consent of the individual concerned or as required by law. \
      ");
  incrementalDom.elementClose("li");
  incrementalDom.elementOpen("li");
  incrementalDom.text(" \
        We will only retain personal information as long as necessary for the fulfillment of those purposes. \
      ");
  incrementalDom.elementClose("li");
  incrementalDom.elementOpen("li");
  incrementalDom.text(" \
        We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned. \
      ");
  incrementalDom.elementClose("li");
  incrementalDom.elementOpen("li");
  incrementalDom.text(" \
        Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date. \
      ");
  incrementalDom.elementClose("li");
  incrementalDom.elementOpen("li");
  incrementalDom.text(" \
        We will protect personal information by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification. \
      ");
  incrementalDom.elementClose("li");
  incrementalDom.elementOpen("li");
  incrementalDom.text(" \
        We will make readily available to customers information about our policies and practices relating to the management of personal information. \
      ");
  incrementalDom.elementClose("li");
  incrementalDom.elementClose("ul");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
    We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained. \
  ");
  incrementalDom.elementClose("p");
}

var PPolicy = function (_HTMLElement) {
  inherits(PPolicy, _HTMLElement);

  function PPolicy() {
    classCallCheck(this, PPolicy);

    var _this = possibleConstructorReturn(this, (PPolicy.__proto__ || Object.getPrototypeOf(PPolicy)).call(this));

    _this.attachShadow({ mode: 'open' });
    _this.shadowRoot.innerHTML = '<style>' + css$13 + '</style><container></container>';
    _this.element = _this.shadowRoot.querySelector('container');
    return _this;
  }

  createClass(PPolicy, [{
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oVal, nVal) {
      if (nVal && nVal !== '' && nVal !== oVal) {
        this._updateView();
      }
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this._updateView();
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {}
  }, {
    key: '_updateView',
    value: function _updateView() {
      if (this.element) incrementalDom.patch(this.element, render$13, this);
    }
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return [];
    }
  }]);
  return PPolicy;
}(HTMLElement);

customElements.define('p-policy', PPolicy);

var css$14 = ":host {\n  font-size: 1em;\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: 'Roboto', Helvetica, sans-serif;\n  color: #222;\n  background: url('/img/background.svg');\n  background-size: cover;\n  background-color: #0f76a1;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300;\n}\nh1 {\n  font-size: 4.0rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n}\nh2 {\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n}\nh3 {\n  font-size: 3.0rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n}\nh4 {\n  font-size: 2.4rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n}\nh5 {\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n}\nh6 {\n  font-size: 1.5rem;\n  line-height: 1.6;\n  letter-spacing: 0;\n}\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 {\n    font-size: 5.0rem;\n  }\n  h2 {\n    font-size: 4.2rem;\n  }\n  h3 {\n    font-size: 3.6rem;\n  }\n  h4 {\n    font-size: 3.0rem;\n  }\n  h5 {\n    font-size: 2.4rem;\n  }\n  h6 {\n    font-size: 1.5rem;\n  }\n}\np {\n  margin-top: 0;\n}\na {\n  color: #f26100;\n}\na:hover {\n  color: #f26100;\n}\n.grid {\n  display: flex;\n}\n.col {\n  flex: 1;\n}\n@media (max-width: 500px) {\n  .grid {\n    display: block;\n  }\n}\n:host {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 2vh 2vw;\n}\n:host container {\n  display: block;\n  overflow-y: auto;\n  flex: 1;\n}\n:host h1 {\n  font-size: 1.75em;\n  font-weight: 400;\n  margin-bottom: 1vh;\n}\n:host p {\n  margn-top: 0.5em;\n  line-height: 1.4;\n}\ngeneral {\n  display: flex;\n  flex-direction: column;\n  background-color: #ffffff;\n  background-image: url('/img/mt-timp-temple.jpg');\n  background-size: cover;\n}\ngeneral general-overlay {\n  margin: 6vh 6vw;\n  background-color: rgba(255, 255, 255, 0.7);\n  color: #333;\n  padding: 1vh 1vw;\n}\nworking-on-gifts,\ntechnical-issues {\n  display: block;\n  background-color: #ffffff;\n  padding: 2vh 2vw;\n  margin-top: 1vh;\n  flex: 1;\n}\nworking-on-gifts h2,\ntechnical-issues h2 {\n  font-size: 1.5em !important;\n  font-weight: 300;\n  margin: 0;\n  padding: .5vw;\n  background-color: #f26100;\n  color: white;\n  margin-bottom: 1vh;\n}\nworking-on-gifts #gift-buttons,\ntechnical-issues #gift-buttons {\n  margin: 1vh 1vw;\n  border: 1px solid #ccc;\n}\nworking-on-gifts .action-button,\ntechnical-issues .action-button {\n  height: 24px;\n  width: 24px;\n  position: relative;\n  top: 6px;\n}\nworking-on-gifts #my-gifts,\ntechnical-issues #my-gifts {\n  max-width: 90%;\n}\n";

var hoisted1$13 = ["id", "gift-buttons", "src", "/img/gift-buttons.png", "alt", ""];
var hoisted2$11 = ["class", "action-button", "src", "/img/add.svg", "alt", ""];
var hoisted3$11 = ["class", "action-button", "src", "/img/delete.svg", "alt", ""];
var hoisted4$9 = ["class", "action-button", "src", "/img/gift-apply.svg", "alt", ""];
var hoisted5$9 = ["class", "action-button", "src", "/img/gift-pending.svg", "alt", ""];
var hoisted6$9 = ["class", "action-button", "src", "/img/gift-earned.svg", "alt", ""];
var hoisted7$8 = ["class", "action-button", "src", "/img/help.svg", "alt", ""];
var hoisted8$8 = ["class", "action-button", "src", "/img/gift-apply.svg", "alt", ""];
var hoisted9$7 = ["id", "my-gifts", "src", "/img/my-gifts.png", "alt", ""];
var hoisted10$7 = ["href", "https://github.com/robhicks/m7temple/issues"];
var hoisted11$6 = ["href", "https://gitter.im/Manila-7th-Ward/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link"];
function render$14(ctrl) {
  incrementalDom.elementOpen("general");
  incrementalDom.elementOpen("general-overlay");
  incrementalDom.elementOpen("h1");
  incrementalDom.text("Why This Site?");
  incrementalDom.elementClose("h1");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
            There are a lot of reasons we don't work on Temple and Family History work. Some include: 1) \
            I don't know where to start, 2) The amount of work needing to be done is overwhelming, 3) \
            It's all done on computers and I don't get a long all well with computers, 4 I'm too busy, \
            5) My work is all done, 6) I'll do it when I get older, and 6) It's too hard ... \
            you get the idea. \
          ");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
            This site exists to help you get help make doing temple and family history work a little easier. \
            While it can't help with all of the reasons, it can help with some. It is a place to sign up \
            for small tasks (or gifts), get help doing them and then helping others with those tasks (or gifts). \
          ");
  incrementalDom.elementClose("p");
  incrementalDom.elementClose("general-overlay");
  incrementalDom.elementClose("general");
  incrementalDom.elementOpen("working-on-gifts");
  incrementalDom.elementOpen("h1");
  incrementalDom.text("Working on Gifts");
  incrementalDom.elementClose("h1");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
        Gifts are worked on from the home view. In fact everything can be done from the home view. Here \
        are the things you can do with gifts: \
        ");
  incrementalDom.elementOpen("ul");
  incrementalDom.elementOpen("li");
  incrementalDom.text("Get information and instructions on how to complete them.");
  incrementalDom.elementClose("li");
  incrementalDom.elementOpen("li");
  incrementalDom.text("Add gifts to work on. This will allow to select the gifts you want to focus on.");
  incrementalDom.elementClose("li");
  incrementalDom.elementOpen("li");
  incrementalDom.text(" \
                Get help with completing the gift. When you request help, you will be contacted by \
                someone who has already completed the gift, or by a ward temple and family history \
                consultant. \
              ");
  incrementalDom.elementClose("li");
  incrementalDom.elementOpen("li");
  incrementalDom.text(" \
                Share your experience and expertise with others by applying for a certificate of \
                completion. Of course, if you don't want to share your experience or don't feel comfortable \
                with others, you don't have to, although you can still receive recognition for having \
                completed a gift. \
              ");
  incrementalDom.elementClose("li");
  incrementalDom.elementClose("ul");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
        Most actions involving gifts are available through the gifts button bar, highlighted with a green \
        rectangle. We'll explain below what the buttons are for and what they do. \
        ");
  incrementalDom.elementOpen("img", "40964dff-66ea-44eb-8ed2-1046f3c1d3f1", hoisted1$13);
  incrementalDom.elementClose("img");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("h2");
  incrementalDom.text("Adding a Gift");
  incrementalDom.elementClose("h2");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
        Add a gift by clicking on the green add button: ");
  incrementalDom.elementOpen("img", "96518241-9e3d-4136-8262-5e5158d76351", hoisted2$11);
  incrementalDom.elementClose("img");
  incrementalDom.text(". \
        Once a gift has been added, it can be deleted by clicking the delete button: \
        ");
  incrementalDom.elementOpen("img", "2ae02838-c822-4cd4-bcd6-d15852e7b823", hoisted3$11);
  incrementalDom.elementClose("img");
  incrementalDom.text(", or you can apply for certification by \
        clicking the award button. The award button can take three forms: 1) \
        ");
  incrementalDom.elementOpen("img", "7474171b-17d2-4fd6-ae47-def28972b197", hoisted4$9);
  incrementalDom.elementClose("img");
  incrementalDom.text(" when you have added the gift as a \
        goal haven't yet applied for certification, 2) \
        ");
  incrementalDom.elementOpen("img", "f9fed3ac-8219-47ec-95d7-52129a551b25", hoisted5$9);
  incrementalDom.elementClose("img");
  incrementalDom.text(" when certification is pending, and \
        3) ");
  incrementalDom.elementOpen("img", "cd34876e-5f4d-460e-b827-f2ed0cdefb10", hoisted6$9);
  incrementalDom.elementClose("img");
  incrementalDom.text(" when you have earned the gift. \
      ");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" If you have earned a gift, you can't delete it by accident. The system will warn you.");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("h2");
  incrementalDom.text("Getting Help for a Gift");
  incrementalDom.elementClose("h2");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
        You can request for a gift by clicking the life perserver button: \
        ");
  incrementalDom.elementOpen("img", "54df79d9-20be-466e-94d1-10a8e754cece", hoisted7$8);
  incrementalDom.elementClose("img");
  incrementalDom.text(". Your request will be acknowledged and \
        someone with has earned the gift will be asked to contact you to help you achieve the gift. \
      ");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("h2");
  incrementalDom.text("Getting Recognition for Completing a Gift");
  incrementalDom.elementClose("h2");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
        As mentioned above, you can get recognized for completing a gift by submitting an application. \
        You submit application by clicking the apply button: ");
  incrementalDom.elementOpen("img", "5e6a8434-525f-4ac7-a761-73b149f296cf", hoisted8$8);
  incrementalDom.elementClose("img");
  incrementalDom.text(". \
        You will be asked to explain your experience in working on the gift and if you are willing to \
        share your experience with others, and help others in their efforts to earn the gift. \
      ");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("h2");
  incrementalDom.text("Seeing Only My Gifts");
  incrementalDom.elementClose("h2");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
        You can see your own gifts simply by clicking the My Gifts checkbox in the upper right part of \
        of the home view. \
        ");
  incrementalDom.elementOpen("img", "83b5edce-c3d5-4b3a-ba84-00b2111e980e", hoisted9$7);
  incrementalDom.elementClose("img");
  incrementalDom.elementClose("p");
  incrementalDom.elementClose("working-on-gifts");
  incrementalDom.elementOpen("technical-issues");
  incrementalDom.elementOpen("h1");
  incrementalDom.text("Technical Issues");
  incrementalDom.elementClose("h1");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
        While we would like to hope the site works flawlessly, it won't. But please don't give up. \
        It has been designed to help us help you and others take important steps to work on \
        temple and family history work. \
      ");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
        When you run into technical issues, please let us know. You can do so by logging an issue \
        on ");
  incrementalDom.elementOpen("a", "2c2e96ad-a279-4396-820d-da8e8dcc48d6", hoisted10$7);
  incrementalDom.text("Github");
  incrementalDom.elementClose("a");
  incrementalDom.text(". ");
  incrementalDom.elementOpen("b");
  incrementalDom.text("You don't need a Github \
          account to log and track issues.");
  incrementalDom.elementClose("b");
  incrementalDom.text(" You can also try to get immediat support on \
        ");
  incrementalDom.elementOpen("a", "c3d57768-dbd0-4f97-9c9a-f2e413ce9e58", hoisted11$6);
  incrementalDom.text("Gitter");
  incrementalDom.elementClose("a");
  incrementalDom.text(". \
      ");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
        Please report issues because we are committed to addressing them! \
      ");
  incrementalDom.elementClose("p");
  incrementalDom.elementClose("technical-issues");
}

var SiteHelp = function (_HTMLElement) {
  inherits(SiteHelp, _HTMLElement);

  function SiteHelp() {
    classCallCheck(this, SiteHelp);

    var _this = possibleConstructorReturn(this, (SiteHelp.__proto__ || Object.getPrototypeOf(SiteHelp)).call(this));

    _this.attachShadow({ mode: 'open' });
    _this.shadowRoot.innerHTML = '<style>' + css$14 + '</style><container></container>';
    _this.element = _this.shadowRoot.querySelector('container');

    _this._updateView = function () {
      if (_this.element) incrementalDom.patch(_this.element, render$14, _this);
    };
    return _this;
  }

  createClass(SiteHelp, [{
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oVal, nVal) {
      if (nVal && nVal !== '' && nVal !== oVal) {
        this._updateView();
      }
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this._updateView();
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {}
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return [];
    }
  }]);
  return SiteHelp;
}(HTMLElement);

customElements.define('site-help', SiteHelp);

var socket$1 = socketCluster.connect();
var router = new Grapnel({ pushState: true });

var AppRouter = function (_HTMLElement) {
  inherits(AppRouter, _HTMLElement);

  function AppRouter() {
    classCallCheck(this, AppRouter);
    return possibleConstructorReturn(this, (AppRouter.__proto__ || Object.getPrototypeOf(AppRouter)).call(this));
  }

  createClass(AppRouter, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      var _this2 = this;

      router.add('/', function (req, evt, next) {
        router.navigate('/login');
      });

      router.add('/home', function (req, evt, next) {
        router.navigate('/home/authenticated');
      });

      router.add('/home/authenticated', db.loadDb, function (req, evt, next) {
        setTimeout(function () {
          if (socket$1.authState !== 'authenticated') router.navigate('/login');else _this2.innerHTML = '<home-authenticated></home-authenticated>';
        }, 200);
      });

      router.add('/login', function (req, evt, next) {
        console.log('/login');
        _this2.innerHTML = '<login-view></login-view>';
      });

      router.add('/logout', function (req, evt, next) {
        user.logout();
        router.navigate('/login');
      });

      router.add('/help', function (req, evt, next) {
        _this2.innerHTML = '<site-help></site-help>';
      });

      router.add('/admin', function (req, evt, next) {
        router.navigate('/admin/users');
      });

      router.add('/admin/*', db.loadDb, function (req, evt, next) {
        var sysAdmin = /\<sys-admin\>/.test(_this2.innerHTML);
        if (!sysAdmin) _this2.innerHTML = '<sys-admin></sys-admin>';
      });

      router.add('/not-found', function (req, evt, next) {
        _this2.innerHTML = '<not-found></not-found>';
      });

      router.add('/oauth2callback', function (req, evt, next) {
        console.log("req", req);
      });

      router.add('/privacy-policy', function (req, evt, next) {
        _this2.innerHTML = '<p-policy></p-policy';
      });

      router.add('/*', function (req, evt, next) {
        if (!evt.parent()) router.navigate('/not-found');
      });
    }
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return [''];
    }
  }]);
  return AppRouter;
}(HTMLElement);

customElements.define('app-router', AppRouter);

var socket = socketCluster.connect();

var db = new loki('m7temple.db', { autosave: true });

var updateDbChannel = socket.subscribe('updateDbChannel');
var userAddedChannel = socket.subscribe('userAddedChannel');

function changeHandler() {
  // console.log("changeHandler");
  var changes = JSON.parse(db.serializeChanges());
  // console.log('changeHandler:changes', changes);
  if (changes && socket.authState === 'authenticated') updateDbChannel.publish(JSON.stringify(changes), function (err) {
    if (err) console.error("err", err);
    if (!err) db.clearChanges();
    db.clearChanges();
  });
}

function updateDb(db, changes) {
  // console.log("updateDb:changes", changes)
  try {
    changes.forEach(function (change) {
      var coll = db.getCollection(change.name);
      var id = change.obj.$loki;
      var doc = coll.get(id);
      // console.log("doc", doc);
      // console.log("change.obj", change.obj);
      // console.log("coll.find()", coll.find())
      if (change.operation === 'I' && !doc) {
        delete change.obj.$loki;
        delete change.obj.meta;
        coll.insertOne(change.obj);
      }
      if (change.operation === 'D') coll.findAndRemove({ $loki: change.obj.$loki });
      if (change.operation === 'U') {
        var dt = JSON.parse(JSON.stringify(doc));
        var ct = JSON.parse(JSON.stringify(change.obj));
        delete dt.$loki;
        delete ct.$loki;
        delete dt.meta;
        delete ct.meta;
        if (JSON.stringify(dt) !== JSON.stringify(ct)) coll.update(change.obj);
      }
      document.dispatchEvent(new CustomEvent(change.name + 'Changed'));
    });
  } catch (err) {
    console.error("err", err);
  }
}

db.loadDb = function (req, evt, next) {
  if (db.loaded) return next();
  // console.log('getting db');
  socket.emit('loadDatabase');

  socket.on('loadDatabase', function (data) {
    db.loadJSON(data, { disableChangesApi: false });
    var awards = db.getCollection('awards');
    var gifts = db.getCollection('gifts');
    var tickets = db.getCollection('tickets');
    var users = db.getCollection('users');
    awards.on(['insert', 'update', 'delete'], changeHandler);
    gifts.on(['insert', 'update', 'delete'], changeHandler);
    tickets.on(['insert', 'update', 'delete'], changeHandler);
    users.on(['insert', 'update', 'delete'], changeHandler);
    db.loaded = true;
    // console.log('database loaded');
    next();
  });
};

userAddedChannel.watch(function (data) {
  // console.log("data", data);
  var users = db.getCollection('users');
  users.setChangesApi(false);
  var usr = users.findOne({ email: data.email });
  if (!usr) {
    delete data.$loki;
    delete data.meta;
    users.insertOne(data);
    document.dispatchEvent(new CustomEvent('usersChanged'));
  }
});

updateDbChannel.watch(function (data) {
  var changes = JSON.parse(data);
  // console.log("socket", socket)
  // console.log("updateDbChannel::changes", changes);
  if (socket.authState === 'authenticated' && Array.isArray(changes)) updateDb(db, changes);
  db.clearChanges();
});

}(IncrementalDOM));
